#!/usr/bin/env python3
"""
Genera arte visual de libros vía lucas-ai-api (ChatGPT/Codex images).

Uso:
  python3 scripts/generate-book-art.py order-of-time
  python3 scripts/generate-book-art.py cosmos universo-de-la-nada --jobs 2
  python3 scripts/generate-book-art.py order-of-time --only atmosphere
  python3 scripts/generate-book-art.py order-of-time --only cover,og --force

Auth (igual que TTS):
  LUCAS_AI_API_KEY   (obligatorio; alias LUCAS_API_KEY)
  LUCAS_AI_API_URL   (default https://lucas-ai-api.eu1.netbird.services)

Concurrencia:
  Default --jobs 5 (tope por cliente memorable-summaries en lucas-ai-api).
  Si aparecen 429, bajar a 2–3.

Prompts: scripts/art-prompts/<slug>.json
Salidas:
  public/art/<slug>/atmosphere.jpg
  public/art/<slug>/og.jpg
  public/covers/<slug>.jpg  (Memorable; backup → <slug>.editorial.jpg)
"""

from __future__ import annotations

import argparse
import io
import json
import os
import shutil
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import httpx
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parents[1]
PROMPTS_DIR = REPO_ROOT / "scripts" / "art-prompts"
PUBLIC_ART = REPO_ROOT / "public" / "art"
PUBLIC_COVERS = REPO_ROOT / "public" / "covers"
DEFAULT_API_URL = "https://lucas-ai-api.eu1.netbird.services"
IMAGE_TIMEOUT_SEC = 300.0
IMAGE_RETRIES = 4
JPEG_QUALITY = 88
DEFAULT_JOBS = 5

ONLY_CHOICES = ("atmosphere", "cover", "og")
_print_lock = threading.Lock()


def _load_dotenv(path: Path = REPO_ROOT / ".env") -> None:
    if not path.is_file():
        return
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        if not key or key in os.environ:
            continue
        value = value.strip().strip("'").strip('"')
        os.environ[key] = value


_load_dotenv()


def log(msg: str, *, err: bool = False) -> None:
    with _print_lock:
        print(msg, file=sys.stderr if err else sys.stdout, flush=True)


def api_base_url() -> str:
    return (os.environ.get("LUCAS_AI_API_URL") or DEFAULT_API_URL).strip().rstrip("/")


def api_key() -> str:
    key = (os.environ.get("LUCAS_AI_API_KEY") or os.environ.get("LUCAS_API_KEY") or "").strip()
    if not key:
        raise SystemExit(
            "Falta LUCAS_AI_API_KEY (o alias LUCAS_API_KEY).\n"
            "  cp .env.example .env  # completar LUCAS_AI_API_KEY"
        )
    return key


def load_prompts(slug: str) -> dict[str, Any]:
    path = PROMPTS_DIR / f"{slug}.json"
    if not path.is_file():
        raise SystemExit(f"No hay prompts en {path}")
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("slug") and data["slug"] != slug:
        raise SystemExit(f"slug en JSON ({data['slug']}) != CLI ({slug})")
    return data


def expand_prompt(template: str, style: str) -> str:
    return template.replace("{style}", style).strip()


def png_to_jpeg(png_bytes: bytes, dest: Path, *, max_side: int | None = None) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(io.BytesIO(png_bytes)) as im:
        rgb = im.convert("RGB")
        if max_side is not None:
            w, h = rgb.size
            scale = min(1.0, max_side / max(w, h))
            if scale < 1.0:
                rgb = rgb.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        rgb.save(dest, format="JPEG", quality=JPEG_QUALITY, optimize=True)


def generate_png(prompt: str, size: str, quality: str = "high") -> bytes:
    url = f"{api_base_url()}/api/ai/images/generate"
    headers = {
        "Authorization": f"Bearer {api_key()}",
        "Content-Type": "application/json",
        "Accept": "image/png",
    }
    payload = {"prompt": prompt, "size": size, "quality": quality}
    last_err: Exception | None = None
    for attempt in range(1, IMAGE_RETRIES + 1):
        try:
            with httpx.Client(timeout=IMAGE_TIMEOUT_SEC) as client:
                resp = client.post(url, json=payload, headers=headers)
            if resp.status_code in (429, 502, 503, 504):
                raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:200]}")
            if resp.status_code >= 400:
                detail = resp.text[:500]
                raise RuntimeError(f"HTTP {resp.status_code}: {detail}")
            ctype = (resp.headers.get("content-type") or "").split(";")[0].strip().lower()
            if ctype not in ("image/png", "application/octet-stream") and not resp.content.startswith(
                b"\x89PNG"
            ):
                raise RuntimeError(f"Respuesta no es PNG (content-type={ctype!r})")
            return resp.content
        except Exception as exc:  # noqa: BLE001 — reintentos de red/API
            last_err = exc
            log(f"  intento {attempt}/{IMAGE_RETRIES} falló: {exc}", err=True)
            if attempt < IMAGE_RETRIES:
                msg = str(exc)
                # 429 concurrency: esperar a que liberan slots
                if "429" in msg or "concurrencia" in msg.lower():
                    time.sleep(min(45, 8 * attempt))
                else:
                    time.sleep(min(30, 3 * attempt * attempt))
    raise RuntimeError(f"Falló generación tras {IMAGE_RETRIES} intentos: {last_err}")


def should_skip(dest: Path, force: bool) -> bool:
    if force:
        return False
    return dest.is_file() and dest.stat().st_size > 0


def should_skip_cover(slug: str, force: bool) -> bool:
    """Skip only if Memorable already replaced the editorial backup."""
    if force:
        return False
    cover = PUBLIC_COVERS / f"{slug}.jpg"
    editorial = PUBLIC_COVERS / f"{slug}.editorial.jpg"
    if not cover.is_file() or cover.stat().st_size == 0:
        return False
    if not editorial.is_file():
        return False
    return cover.stat().st_mtime > editorial.stat().st_mtime + 0.5


def backup_editorial(slug: str) -> None:
    cover = PUBLIC_COVERS / f"{slug}.jpg"
    editorial = PUBLIC_COVERS / f"{slug}.editorial.jpg"
    if cover.is_file() and not editorial.is_file():
        shutil.copy2(cover, editorial)
        log(f"  backup editorial → {editorial.relative_to(REPO_ROOT)}")


@dataclass
class ArtJob:
    label: str
    dest: Path
    prompt: str
    size: str
    force: bool
    quality: str
    max_side: int | None = None


def run_job(job: ArtJob) -> str:
    if should_skip(job.dest, job.force):
        msg = f"skip {job.label} (existe {job.dest.relative_to(REPO_ROOT)}; usá --force)"
        log(msg)
        return msg
    log(f"gen  {job.label} → {job.dest.relative_to(REPO_ROOT)} [{job.size}]")
    png = generate_png(job.prompt, job.size, quality=job.quality)
    png_to_jpeg(png, job.dest, max_side=job.max_side)
    msg = f"ok   {job.dest.relative_to(REPO_ROOT)} ({job.dest.stat().st_size // 1024} KiB)"
    log(msg)
    return msg


def parse_only(raw: str | None) -> set[str] | None:
    if not raw:
        return None
    parts = {p.strip() for p in raw.split(",") if p.strip()}
    bad = parts - set(ONLY_CHOICES)
    if bad:
        raise SystemExit(f"--only inválido: {sorted(bad)}; opciones: {', '.join(ONLY_CHOICES)}")
    return parts


def collect_jobs_for_slug(
    slug: str,
    only: set[str] | None,
    *,
    force: bool,
    quality: str,
) -> list[ArtJob]:
    data = load_prompts(slug)
    style = data.get("style") or ""

    def want(kind: str) -> bool:
        return only is None or kind in only

    jobs: list[ArtJob] = []

    if want("atmosphere"):
        spec = data["atmosphere"]
        jobs.append(
            ArtJob(
                label=f"{slug}/atmosphere",
                dest=PUBLIC_ART / slug / "atmosphere.jpg",
                prompt=expand_prompt(spec["prompt"], style),
                size=spec.get("size", "landscape"),
                force=force,
                quality=quality,
            )
        )

    if want("og"):
        spec = data["og"]
        jobs.append(
            ArtJob(
                label=f"{slug}/og",
                dest=PUBLIC_ART / slug / "og.jpg",
                prompt=expand_prompt(spec["prompt"], style),
                size=spec.get("size", "landscape"),
                force=force,
                quality=quality,
                max_side=1600,
            )
        )

    if want("cover"):
        backup_editorial(slug)
        cover_dest = PUBLIC_COVERS / f"{slug}.jpg"
        if should_skip_cover(slug, force):
            log(f"skip {slug}/cover (existe Memorable {cover_dest.relative_to(REPO_ROOT)}; usá --force)")
        else:
            spec = data["cover"]
            jobs.append(
                ArtJob(
                    label=f"{slug}/cover",
                    dest=cover_dest,
                    prompt=expand_prompt(spec["prompt"], style),
                    size=spec.get("size", "portrait"),
                    force=True,
                    quality=quality,
                )
            )

    return jobs


def main() -> None:
    parser = argparse.ArgumentParser(description="Generar arte visual vía lucas-ai-api")
    parser.add_argument(
        "slugs",
        nargs="+",
        help="Uno o más slugs (prompts en scripts/art-prompts/<slug>.json)",
    )
    parser.add_argument("--only", help="Comma: atmosphere,cover,og")
    parser.add_argument("--force", action="store_true", help="Regenerar aunque existan archivos")
    parser.add_argument(
        "--quality",
        default="high",
        choices=("low", "medium", "high"),
        help="Calidad Codex (default high)",
    )
    parser.add_argument(
        "--jobs",
        type=int,
        default=DEFAULT_JOBS,
        help=f"Generaciones en paralelo (default {DEFAULT_JOBS}; API ~2/cliente, ~3 global)",
    )
    args = parser.parse_args()
    if args.jobs < 1:
        raise SystemExit("--jobs debe ser >= 1")

    only = parse_only(args.only)
    print(f"lucas-ai-api images @ {api_base_url()}  (jobs={args.jobs})")
    _ = api_key()

    jobs: list[ArtJob] = []
    for slug in args.slugs:
        jobs.extend(
            collect_jobs_for_slug(slug, only, force=args.force, quality=args.quality)
        )

    if not jobs:
        print("nada que generar.")
        return

    failures: list[str] = []
    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        futures = {pool.submit(run_job, job): job for job in jobs}
        for fut in as_completed(futures):
            job = futures[fut]
            try:
                fut.result()
            except Exception as exc:  # noqa: BLE001
                failures.append(job.label)
                log(f"FAIL {job.label}: {exc}", err=True)

    if failures:
        raise SystemExit(f"Fallaron {len(failures)}/{len(jobs)}: {', '.join(failures)}")
    print(f"listo. ({len(jobs)} jobs)")


if __name__ == "__main__":
    main()
