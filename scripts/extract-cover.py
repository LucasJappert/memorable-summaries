#!/usr/bin/env python3
"""
Extrae portada de libro (.epub embebida; PDF vía Open Library).

Uso:
  python3 scripts/extract-cover.py superintelligence
  python3 scripts/extract-cover.py "Superintelligence" -s superintelligence
  python3 scripts/extract-cover.py --all
"""

from __future__ import annotations

import argparse
import io
import json
import re
import sys
import urllib.parse
import urllib.request
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

import importlib.util

# Reuse book discovery from extract-epub.py (hyphenated filename)
_extract_spec = importlib.util.spec_from_file_location(
    "extract_epub",
    Path(__file__).resolve().parent / "extract-epub.py",
)
extract_epub = importlib.util.module_from_spec(_extract_spec)
assert _extract_spec.loader is not None
_extract_spec.loader.exec_module(extract_epub)

CONTAINER_NS = extract_epub.CONTAINER_NS
OPF_NS = extract_epub.OPF_NS
detect_format = extract_epub.detect_format
find_book = extract_epub.find_book
load_epub = extract_epub.load_epub
q = extract_epub.q
resolve_href = extract_epub.resolve_href
slugify = extract_epub.slugify

try:
    from PIL import Image

    HAS_PIL = True
except ImportError:
    HAS_PIL = False

COVERS_DIR = Path("public/covers")
MAX_WIDTH = 420
OPEN_LIBRARY_SEARCH = "https://openlibrary.org/search.json"
OPEN_LIBRARY_COVER = "https://covers.openlibrary.org/b/id/{cover_id}-M.jpg"


def find_cover_href(opf: ET.Element, manifest: dict[str, str], base_dir: str) -> str | None:
    cover_id: str | None = None

    for meta in opf.findall(f".//{q('meta', OPF_NS)}"):
        name = (meta.get("name") or "").lower()
        if name == "cover":
            cover_id = meta.get("content")
            break

    if not cover_id:
        for item in opf.findall(f".//{q('item', OPF_NS)}"):
            props = item.get("properties", "")
            if "cover-image" in props.split():
                cover_id = item.get("id")
                break

    if not cover_id:
        for item_id, href in manifest.items():
            if re.search(r"cover", item_id, re.I) or re.search(r"cover", href, re.I):
                cover_id = item_id
                break

    if cover_id and cover_id in manifest:
        return resolve_href(base_dir, manifest[cover_id])

    return None


def extract_epub_cover_bytes(epub_path: Path) -> tuple[bytes, str] | None:
    with zipfile.ZipFile(epub_path) as archive:
        container = ET.fromstring(archive.read("META-INF/container.xml"))
        opf_path = container.find(f".//{q('rootfile', CONTAINER_NS)}").get("full-path")  # type: ignore[union-attr]
        base_dir = opf_path.rsplit("/", 1)[0] if "/" in opf_path else ""
        opf = ET.fromstring(archive.read(opf_path))

        manifest: dict[str, str] = {}
        for item in opf.findall(f".//{q('item', OPF_NS)}"):
            item_id = item.get("id")
            href = item.get("href")
            if item_id and href:
                manifest[item_id] = href

        cover_href = find_cover_href(opf, manifest, base_dir)
        if not cover_href:
            return None

        inner_path = resolve_href(base_dir, cover_href)
        try:
            data = archive.read(inner_path)
        except KeyError:
            return None

        ext = Path(inner_path).suffix.lower().lstrip(".")
        if ext in ("jpg", "jpeg", "png", "webp", "gif"):
            return data, ext

        if data[:3] == b"\xff\xd8\xff":
            return data, "jpeg"
        if data[:8] == b"\x89PNG\r\n\x1a\n":
            return data, "png"
        return data, "jpg"


def fetch_open_library_cover(title: str, author: str | None) -> bytes | None:
    params: dict[str, str] = {"title": title, "limit": "1"}
    if author:
        params["author"] = author.split(",")[0].strip()

    url = f"{OPEN_LIBRARY_SEARCH}?{urllib.parse.urlencode(params)}"
    try:
        with urllib.request.urlopen(url, timeout=15) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
    except (OSError, json.JSONDecodeError, ValueError):
        return None

    docs = payload.get("docs") or []
    if not docs:
        return None

    cover_id = docs[0].get("cover_i")
    if not cover_id:
        return None

    cover_url = OPEN_LIBRARY_COVER.format(cover_id=cover_id)
    try:
        with urllib.request.urlopen(cover_url, timeout=15) as resp:
            return resp.read()
    except OSError:
        return None


def save_cover_image(data: bytes, slug: str) -> Path:
    COVERS_DIR.mkdir(parents=True, exist_ok=True)
    out_path = COVERS_DIR / f"{slug}.jpg"

    if HAS_PIL:
        image = Image.open(io.BytesIO(data))
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")
        if image.width > MAX_WIDTH:
            ratio = MAX_WIDTH / image.width
            image = image.resize(
                (MAX_WIDTH, max(1, int(image.height * ratio))),
                Image.Resampling.LANCZOS,
            )
        image.save(out_path, format="JPEG", quality=85, optimize=True)
        return out_path

    out_path.write_bytes(data)
    return out_path


def extract_cover(
    query: str,
    slug: str | None,
    search_dir: Path,
    title: str | None = None,
    author: str | None = None,
) -> Path | None:
    book_path = find_book(query, search_dir)
    output_slug = slug or slugify(title or book_path.stem)

    existing = COVERS_DIR / f"{output_slug}.jpg"
    fmt = detect_format(book_path)
    cover_bytes: bytes | None = None

    if fmt == "epub":
        cover_bytes_tuple = extract_epub_cover_bytes(book_path)
        if cover_bytes_tuple:
            cover_bytes = cover_bytes_tuple[0]

    if cover_bytes is None:
        meta_title = title
        meta_author = author
        if not meta_title or not meta_author:
            try:
                meta, _ = load_epub(book_path) if fmt == "epub" else ({}, [])
            except Exception:
                meta = {}
            meta_title = meta_title or meta.get("title")
            meta_author = meta_author or meta.get("creator")

        if meta_title:
            cover_bytes = fetch_open_library_cover(meta_title, meta_author)

    if not cover_bytes:
        return None

    saved = save_cover_image(cover_bytes, output_slug)
    return saved


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Extrae portada de libro")
    parser.add_argument("query", nargs="?", help="Libro o slug conocido")
    parser.add_argument("-s", "--slug", help="Slug de salida (public/covers/<slug>.jpg)")
    parser.add_argument("--title", help="Título para fallback Open Library")
    parser.add_argument("--author", help="Autor para fallback Open Library")
    parser.add_argument(
        "--search-dir",
        type=Path,
        default=Path("fuentes"),
        help="Directorio de búsqueda (default: fuentes/)",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Extraer portadas de todos los libros en fuentes/",
    )
    args = parser.parse_args(argv)

    search_dir = args.search_dir.resolve()

    if args.all:
        books = sorted(set(search_dir.glob("*.epub")) | set(search_dir.glob("*.pdf")))
        ok = 0
        for book in books:
            slug = slugify(book.stem)
            try:
                result = extract_cover(book.name, slug, search_dir)
                if result:
                    print(f"OK  {book.name} → {result}")
                    ok += 1
                else:
                    print(f"SKIP {book.name} (sin portada)")
            except FileNotFoundError as exc:
                print(f"SKIP {book.name}: {exc}")
        print(f"Listo: {ok}/{len(books)} portadas")
        return 0

    if not args.query:
        parser.error("Indicá un libro o usá --all")

    try:
        saved = extract_cover(
            args.query,
            args.slug,
            search_dir,
            title=args.title,
            author=args.author,
        )
    except FileNotFoundError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    if not saved:
        print("No se encontró portada (EPUB ni Open Library)", file=sys.stderr)
        return 1

    print(f"OK  portada: {saved}")
    if not HAS_PIL:
        print("    (sin Pillow: imagen sin optimizar; pip install Pillow recomendado)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
