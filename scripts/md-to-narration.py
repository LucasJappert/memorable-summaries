#!/usr/bin/env python3
"""
Convierte summaries/<slug>.md en texto plano para TTS y opcionalmente genera audio.

Uso:
  python3 scripts/md-to-narration.py free-will
  python3 scripts/md-to-narration.py free-will --tts --mp3
  python3 scripts/md-to-narration.py free-will --tts --mp3 --force

TTS por defecto: lucas-ai-api → local/omnivoice (clips ≤15s, luego concat).
Auth: API key en Bearer (sin login JWT). Client fair-share = nombre de la key.

Env:
  LUCAS_AI_API_KEY   (obligatorio para --tts; alias LUCAS_API_KEY)
  LUCAS_AI_API_URL   (default https://lucas-ai-api.eu1.netbird.services)

Se cargan desde el entorno o, si faltan, desde `.env` en la raíz del repo (gitignored).
Plantilla: `.env.example`. No hardcodear la key (repo público).

Ejemplo:
  cp .env.example .env   # completar LUCAS_AI_API_KEY
  python3 scripts/md-to-narration.py free-will --tts --mp3
"""

from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
import time
import unicodedata
import wave
from html.parser import HTMLParser
from pathlib import Path

import httpx

REPO_ROOT = Path(__file__).resolve().parents[1]


def _load_dotenv(path: Path = REPO_ROOT / ".env") -> None:
    """Carga KEY=VAL de .env sin pisar variables ya exportadas. Sin dependencia extra."""
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
SUMMARIES_DIR = REPO_ROOT / "summaries"
AUDIO_DIR = REPO_ROOT / "audio"
PUBLIC_AUDIO_DIR = REPO_ROOT / "public" / "audio"
HERMES_ROOT = Path("/home/ljappert/my-repos/Project Hermes Director")

# Edge TTS (Hermes): chunks largos
CHUNK_MIN = 3000
CHUNK_MAX = 5000

# OmniVoice @ speed 0.9: ~13–14 chars/s → ~180 chars ≈ 13s (margen 15s)
OMNI_CHUNK_MAX = 180
OMNI_MODEL = "local/omnivoice"
DEFAULT_API_URL = "https://lucas-ai-api.eu1.netbird.services"
TTS_TIMEOUT_SEC = 120.0
TTS_RETRIES = 3

NUM_WORDS = {
    "00": "prólogo",
    "01": "uno",
    "02": "dos",
    "03": "tres",
    "04": "cuatro",
    "05": "cinco",
    "06": "seis",
    "07": "siete",
    "08": "ocho",
    "09": "nueve",
    "10": "diez",
}


class _StripHTML(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in {"br", "p", "div"}:
            self.parts.append(" ")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"p", "div", "li"}:
            self.parts.append(" ")


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text or "libro"


def resolve_slug(query: str) -> str:
    query_slug = slugify(query)
    direct = SUMMARIES_DIR / f"{query_slug}.md"
    if direct.exists():
        return query_slug

    matches: list[tuple[str, str]] = []
    for path in sorted(SUMMARIES_DIR.glob("*.md")):
        slug = path.stem
        if query_slug in slug or slug in query_slug:
            matches.append((slug, path.name))
            continue
        text = path.read_text(encoding="utf-8", errors="ignore").lower()
        if query.lower() in text[:800]:
            matches.append((slug, path.name))

    if len(matches) == 1:
        return matches[0][0]
    if not matches:
        available = ", ".join(p.stem for p in sorted(SUMMARIES_DIR.glob("*.md")))
        raise SystemExit(f"No se encontró resumen para «{query}». Disponibles: {available}")
    opts = "\n".join(f"  - {slug} ({name})" for slug, name in matches)
    raise SystemExit(f"Varios candidatos para «{query}»:\n{opts}")


def parse_frontmatter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("---"):
        return {}, text
    end = text.find("\n---", 3)
    if end == -1:
        return {}, text
    block = text[3:end].strip()
    body = text[end + 4 :].lstrip("\n")
    meta: dict[str, str] = {}
    for line in block.splitlines():
        if ":" not in line or line.strip().startswith("-"):
            continue
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip().strip('"')
    return meta, body


def strip_html(text: str) -> str:
    parser = _StripHTML()
    parser.feed(text)
    parser.close()
    return re.sub(r"\s+", " ", "".join(parser.parts)).strip()


def clean_inline(text: str) -> str:
    text = strip_html(text)
    text = text.replace("«", "").replace("»", "")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def is_table_separator(line: str) -> bool:
    s = line.strip()
    return bool(s) and set(s.replace("|", "").replace(":", "").replace("-", "").strip()) == set()


def parse_markdown_table(lines: list[str]) -> list[list[str]]:
    rows: list[list[str]] = []
    for line in lines:
        if "|" not in line or is_table_separator(line):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if cells:
            rows.append(cells)
    return rows[1:] if len(rows) > 1 else []


def section_heading(num: str, title: str) -> str:
    num = num.strip()
    title = clean_inline(title)
    if num in {"✦", "◈", "—"}:
        return title
    if num.lower() == "prólogo" or num == "00":
        return f"Prólogo. {title}" if title else "Prólogo"
    if re.fullmatch(r"\d{2}", num):
        word = NUM_WORDS.get(num, num)
        return f"Capítulo {word}. {title}"
    if num:
        return f"{num}. {title}"
    return title


def narrate_table(rows: list[list[str]], kind: str) -> list[str]:
    out: list[str] = []
    for row in rows:
        if not row:
            continue
        if kind == "concept-grid":
            if len(row) >= 3 and row[0] in {"icon", "⏱️", "🧠", "👻"} and row[1].lower() != "title":
                title, desc = row[1], row[2]
            elif len(row) >= 2:
                title, desc = row[0], row[1]
            else:
                continue
            out.append(f"{clean_inline(title)}. {clean_inline(desc)}")
        elif kind == "timeline":
            year, text = row[0], " ".join(row[1:])
            out.append(f"Año {clean_inline(year)}. {clean_inline(text)}")
        elif kind == "figures":
            name, role = row[0], " ".join(row[1:])
            out.append(f"{clean_inline(name)}, {clean_inline(role)}")
        elif kind == "big-numbers":
            value, label = row[0], " ".join(row[1:])
            out.append(f"{clean_inline(value)}. {clean_inline(label)}")
        else:
            out.append(clean_inline(" ".join(row)))
    return out


def md_to_narration(md_path: Path) -> str:
    raw = md_path.read_text(encoding="utf-8")
    meta, body = parse_frontmatter(raw)

    title = meta.get("title_es") or meta.get("title", md_path.stem)
    author = meta.get("author", "")
    intro = f"{title}, de {author}." if author else f"{title}."

    chapter_paragraphs: list[str] = []
    closing_paragraphs: list[str] = []
    extra_paragraphs: list[str] = []
    target = chapter_paragraphs
    lines = body.splitlines()
    i = 0
    skip_toc = False
    section_num = ""
    section_title = ""
    pending_comment = ""
    current_section = ""

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        if stripped == "# Contenido":
            skip_toc = True
            i += 1
            continue
        if skip_toc:
            if stripped.startswith("# ") and stripped != "# Contenido":
                skip_toc = False
            else:
                i += 1
                continue

        if stripped.startswith("# ") and not stripped.startswith("## "):
            current_section = stripped[2:].strip().lower()
            if current_section == "footer":
                break
            if current_section == "cierre":
                target = closing_paragraphs
            elif current_section in {"conceptos", "cronologia", "figuras"}:
                target = extra_paragraphs
            else:
                target = chapter_paragraphs
            section_num = ""
            section_title = ""
            i += 1
            continue

        if stripped.startswith("## num:"):
            section_num = stripped.split(":", 1)[1].strip()
            i += 1
            continue
        if stripped.startswith("## title:"):
            section_title = stripped.split(":", 1)[1].strip()
            heading = section_heading(section_num, section_title)
            if heading:
                target.append(heading)
            i += 1
            continue

        if stripped.startswith("<!--"):
            comment = stripped.strip("<!- ").rstrip("->").strip()
            pending_comment = comment
            i += 1
            continue

        if stripped.startswith("|"):
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                table_lines.append(lines[i])
                i += 1
            kind = "generic"
            if "concept" in pending_comment:
                kind = "concept-grid"
            elif "timeline" in pending_comment:
                kind = "timeline"
            elif "figures" in pending_comment:
                kind = "figures"
            elif "big-numbers" in pending_comment:
                kind = "big-numbers"
            rows = parse_markdown_table(table_lines)
            target.extend(narrate_table(rows, kind))
            pending_comment = ""
            continue

        if stripped.startswith(">"):
            quote = clean_inline(stripped.lstrip("> ").strip())
            if quote:
                target.append(f"Cita: {quote}")
            i += 1
            if i < len(lines) and lines[i].strip().startswith("—"):
                attribution = clean_inline(lines[i].strip().lstrip("—").strip())
                if attribution:
                    target[-1] += f" — {attribution}"
                i += 1
            continue

        if stripped.startswith("- "):
            item = clean_inline(stripped[2:])
            item = re.sub(r"\*\*([^*]+)\*\*", r"\1", item)
            item = item.replace(" — ", ". ")
            if item:
                target.append(item)
            i += 1
            continue

        if stripped in {"---", ""}:
            i += 1
            pending_comment = ""
            continue

        if stripped.startswith("line"):
            i += 1
            continue

        if "<!--" in stripped:
            stripped = re.sub(r"<!--.*?-->", "", stripped).strip()

        if stripped:
            text = clean_inline(stripped)
            if pending_comment == "key":
                target.append(f"Idea clave: {text}")
            elif pending_comment == "closing":
                target.append(text)
            elif pending_comment == "quote":
                target.append(f"Cita: {text}")
            else:
                target.append(text)
        pending_comment = ""
        i += 1

    paragraphs = [intro, *closing_paragraphs, *chapter_paragraphs, *extra_paragraphs]
    text = "\n\n".join(p for p in paragraphs if p.strip())
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def split_chunks(text: str, min_size: int = CHUNK_MIN, max_size: int = CHUNK_MAX) -> list[str]:
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
    chunks: list[str] = []
    current: list[str] = []
    current_len = 0

    def flush() -> None:
        nonlocal current, current_len
        if current:
            chunks.append("\n\n".join(current))
            current = []
            current_len = 0

    for para in paragraphs:
        para_len = len(para) + 2
        if current and current_len + para_len > max_size:
            flush()
        current.append(para)
        current_len += para_len
        if current_len >= min_size:
            flush()

    flush()
    return chunks


def _split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?…])\s+", text.strip())
    return [p.strip() for p in parts if p.strip()]


def split_chunks_short(text: str, max_size: int = OMNI_CHUNK_MAX) -> list[str]:
    """Parte en clips cortos (≤~15s) cortando en párrafos y oraciones."""
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
    chunks: list[str] = []
    current = ""

    def flush() -> None:
        nonlocal current
        if current.strip():
            chunks.append(current.strip())
            current = ""

    def append_piece(piece: str) -> None:
        nonlocal current
        piece = piece.strip()
        if not piece:
            return
        if not current:
            current = piece
            return
        candidate = f"{current} {piece}"
        if len(candidate) <= max_size:
            current = candidate
        else:
            flush()
            current = piece

    for para in paragraphs:
        if len(para) <= max_size:
            append_piece(para)
            if len(current) >= max_size * 0.7:
                flush()
            continue
        for sentence in _split_sentences(para):
            if len(sentence) <= max_size:
                append_piece(sentence)
                continue
            # Oración muy larga: partir por comas / espacios
            buf = ""
            for token in re.split(r"(?<=[,;:])\s+|\s+", sentence):
                if not token:
                    continue
                nxt = f"{buf} {token}".strip() if buf else token
                if len(nxt) <= max_size:
                    buf = nxt
                else:
                    if buf:
                        append_piece(buf)
                    buf = token
            if buf:
                append_piece(buf)

    flush()
    return chunks


def setup_hermes_import() -> None:
    if not HERMES_ROOT.exists():
        raise SystemExit(f"No se encontró Hermes Director en {HERMES_ROOT}")
    root = str(HERMES_ROOT)
    if root not in sys.path:
        sys.path.insert(0, root)


def probe_duration(path: Path) -> float:
    cmd = [
        "ffprobe",
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(path),
    ]
    out = subprocess.check_output(cmd, text=True).strip()
    return float(out)


def concat_wavs(paths: list[Path], out_path: Path) -> None:
    """Concatena WAVs PCM del mismo formato (OmniVoice: mono 24 kHz)."""
    if not paths:
        raise SystemExit("No hay chunks para concatenar")

    with wave.open(str(paths[0]), "rb") as first:
        params = first.getparams()

    with wave.open(str(out_path), "wb") as out:
        out.setparams(params)
        for path in paths:
            with wave.open(str(path), "rb") as src:
                if (
                    src.getnchannels() != params.nchannels
                    or src.getsampwidth() != params.sampwidth
                    or src.getframerate() != params.framerate
                ):
                    raise SystemExit(f"Formato distinto en {path}")
                out.writeframes(src.readframes(src.getnframes()))


def export_mp3(wav_path: Path, slug: str) -> None:
    out_mp3 = AUDIO_DIR / f"{slug}.mp3"
    PUBLIC_AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    public_mp3 = PUBLIC_AUDIO_DIR / f"{slug}.mp3"
    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        str(wav_path),
        "-codec:a",
        "libmp3lame",
        "-qscale:a",
        "3",
        str(out_mp3),
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    public_mp3.write_bytes(out_mp3.read_bytes())
    mp3_mb = out_mp3.stat().st_size / (1024 * 1024)
    print(f"MP3 listo: {mp3_mb:.1f} MB → {out_mp3}")
    print(f"Copiado a app: {public_mp3}")


def api_base_url() -> str:
    return (os.environ.get("LUCAS_AI_API_URL") or DEFAULT_API_URL).rstrip("/")


def api_key() -> str:
    """Bearer para /api/ai/tts: API key dedicada (no JWT de login web)."""
    key = (os.environ.get("LUCAS_AI_API_KEY") or os.environ.get("LUCAS_API_KEY") or "").strip()
    if not key:
        raise SystemExit(
            "Falta LUCAS_AI_API_KEY (o alias LUCAS_API_KEY) para --tts.\n"
            "  export LUCAS_AI_API_KEY='sk-...'\n"
            "  export LUCAS_AI_API_URL='https://lucas-ai-api.eu1.netbird.services'  # opcional"
        )
    return key


def synthesize_omnivoice(text: str, out_path: Path, bearer: str) -> None:
    url = f"{api_base_url()}/api/ai/tts"
    headers = {"Authorization": f"Bearer {bearer}"}
    payload = {"model": OMNI_MODEL, "input": text}
    last_err = ""
    for attempt in range(1, TTS_RETRIES + 1):
        try:
            resp = httpx.post(url, json=payload, headers=headers, timeout=TTS_TIMEOUT_SEC)
            if resp.status_code == 200 and resp.content[:4] == b"RIFF":
                out_path.write_bytes(resp.content)
                return
            last_err = f"HTTP {resp.status_code}: {resp.text[:200]}"
            # 429 = cupo TTS (global o per-client): reintentar con backoff
            if resp.status_code == 429 and attempt < TTS_RETRIES:
                retry_after = resp.headers.get("Retry-After")
                try:
                    wait = float(retry_after) if retry_after else 2.0 * attempt
                except ValueError:
                    wait = 2.0 * attempt
                print(
                    f"  429 concurrencia TTS — reintento {attempt}/{TTS_RETRIES} en {wait:.1f}s",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
        except httpx.HTTPError as exc:
            last_err = str(exc)
        if attempt < TTS_RETRIES:
            time.sleep(1.5 * attempt)
    raise SystemExit(f"TTS falló tras {TTS_RETRIES} intentos ({out_path.name}): {last_err}")


def run_tts_omnivoice(slug: str, text: str, do_mp3: bool, force: bool = False) -> None:
    chunks = split_chunks_short(text)
    chunk_dir = AUDIO_DIR / slug / "chunks"
    if force and chunk_dir.exists():
        shutil.rmtree(chunk_dir)
    chunk_dir.mkdir(parents=True, exist_ok=True)

    print(f"OmniVoice via lucas-ai-api ({api_base_url()})")
    print(f"Clips: {len(chunks)} (máx {OMNI_CHUNK_MAX} chars)")
    bearer = api_key()

    wav_paths: list[Path] = []
    for idx, chunk in enumerate(chunks, start=1):
        wav_path = chunk_dir / f"chunk{idx:03d}.wav"
        wav_paths.append(wav_path)
        if not force and wav_path.exists() and wav_path.stat().st_size > 0:
            print(f"  chunk {idx}/{len(chunks)} — ya existe, omitiendo")
            continue
        print(f"  chunk {idx}/{len(chunks)} — sintetizando ({len(chunk)} chars)")
        synthesize_omnivoice(chunk, wav_path, bearer)

    # Validar duración de clips (aviso si alguno supera 15s)
    over = []
    for path in wav_paths:
        dur = probe_duration(path)
        if dur > 15.5:
            over.append((path.name, dur))
    if over:
        print(f"Aviso: {len(over)} clips >15s (ej. {over[0][0]}={over[0][1]:.1f}s)")

    out_wav = AUDIO_DIR / f"{slug}.wav"
    print(f"Concatenando {len(wav_paths)} chunks → {out_wav}")
    concat_wavs(wav_paths, out_wav)

    duration = probe_duration(out_wav)
    size_mb = out_wav.stat().st_size / (1024 * 1024)
    print(f"WAV listo: {duration:.1f}s, {size_mb:.1f} MB → {out_wav}")

    if do_mp3:
        export_mp3(out_wav, slug)


def run_tts_hermes(slug: str, text: str, do_mp3: bool, force: bool = False) -> None:
    setup_hermes_import()
    from core.audio import concat_wavs as hermes_concat
    from core.audio import probe_duration as hermes_probe
    from core.config import load_config
    from core.tts import get_tts_engine

    config = load_config()
    engine = get_tts_engine(config.narrator)

    chunks = split_chunks(text)
    chunk_dir = AUDIO_DIR / slug / "chunks"
    if force and chunk_dir.exists():
        shutil.rmtree(chunk_dir)
    chunk_dir.mkdir(parents=True, exist_ok=True)

    wav_paths: list[Path] = []
    for idx, chunk in enumerate(chunks, start=1):
        wav_path = chunk_dir / f"chunk{idx:03d}.wav"
        wav_paths.append(wav_path)
        if not force and wav_path.exists() and wav_path.stat().st_size > 0:
            print(f"  chunk {idx}/{len(chunks)} — ya existe, omitiendo")
            continue
        print(f"  chunk {idx}/{len(chunks)} — sintetizando ({len(chunk)} chars)")
        engine.synthesize(chunk, wav_path)

    out_wav = AUDIO_DIR / f"{slug}.wav"
    print(f"Concatenando {len(wav_paths)} chunks → {out_wav}")
    hermes_concat(wav_paths, out_wav)

    duration = hermes_probe(out_wav)
    size_mb = out_wav.stat().st_size / (1024 * 1024)
    print(f"WAV listo: {duration:.1f}s, {size_mb:.1f} MB → {out_wav}")

    if do_mp3:
        export_mp3(out_wav, slug)


def main() -> None:
    parser = argparse.ArgumentParser(description="MD de resumen → texto/audio narrado")
    parser.add_argument("book", nargs="?", default="seven-brief-lessons", help="slug o título parcial")
    parser.add_argument(
        "--tts",
        action="store_true",
        help="Generar audio con local/omnivoice via lucas-ai-api",
    )
    parser.add_argument(
        "--tts-hermes",
        action="store_true",
        help="Generar audio con Edge TTS (Hermes Director)",
    )
    parser.add_argument("--mp3", action="store_true", help="Exportar MP3 y copiar a public/audio/")
    parser.add_argument("--text-only", action="store_true", help="Solo generar audio/<slug>.txt")
    parser.add_argument("--force", action="store_true", help="Regenerar chunks TTS aunque ya existan")
    args = parser.parse_args()

    slug = resolve_slug(args.book)
    md_path = SUMMARIES_DIR / f"{slug}.md"
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Libro: {slug}")
    print(f"Fuente: {md_path}")

    narration = md_to_narration(md_path)
    txt_path = AUDIO_DIR / f"{slug}.txt"
    txt_path.write_text(narration, encoding="utf-8")
    print(f"Texto: {len(narration)} chars → {txt_path}")

    if args.text_only:
        return

    if args.tts and args.tts_hermes:
        raise SystemExit("Usá --tts o --tts-hermes, no ambos")

    if args.tts:
        run_tts_omnivoice(slug, narration, do_mp3=args.mp3, force=args.force)
    elif args.tts_hermes:
        run_tts_hermes(slug, narration, do_mp3=args.mp3, force=args.force)
    elif args.mp3:
        wav_path = AUDIO_DIR / f"{slug}.wav"
        if not wav_path.exists():
            raise SystemExit(f"No existe {wav_path}; corré con --tts primero")
        export_mp3(wav_path, slug)


if __name__ == "__main__":
    main()
