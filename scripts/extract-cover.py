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
OPEN_LIBRARY_COVER = "https://covers.openlibrary.org/b/id/{cover_id}-L.jpg"
GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes"
USER_AGENT = "MemorableSummaries/1.0 (personal library; cover fetch)"

# Metadatos para fallback online (slug → título, autor). Sincronizar con src/books/reading-order.ts
COVER_META: dict[str, tuple[str, str]] = {
    "cosmos": ("Cosmos", "Carl Sagan"),
    "universo-de-la-nada": ("A Universe from Nothing", "Lawrence Krauss"),
    "biggest-ideas-universe": (
        "The Biggest Ideas in the Universe",
        "Sean Carroll",
    ),
    "seven-brief-lessons": ("Seven Brief Lessons on Physics", "Carlo Rovelli"),
    "selfish-gene": ("The Selfish Gene", "Richard Dawkins"),
    "why-evolution-is-true": ("Why Evolution Is True", "Jerry Coyne"),
    "blind-watchmaker": ("The Blind Watchmaker", "Richard Dawkins"),
    "vital-question": ("The Vital Question", "Nick Lane"),
    "wonderful-life": ("Wonderful Life", "Stephen Jay Gould"),
    "superintelligence": ("Superintelligence", "Nick Bostrom"),
}


def http_get(url: str, timeout: int = 20) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read()
    except OSError:
        return None


def fetch_open_library_cover(title: str, author: str | None) -> bytes | None:
    author_short = author.split(",")[0].strip() if author else None
    queries: list[dict[str, str]] = []
    if author_short:
        queries.append({"title": title, "author": author_short, "limit": "8"})
    queries.append({"title": title, "limit": "8"})
    if author_short:
        queries.append({"q": f"{title} {author_short}", "limit": "8"})

    for params in queries:
        url = f"{OPEN_LIBRARY_SEARCH}?{urllib.parse.urlencode(params)}"
        raw = http_get(url)
        if not raw:
            continue
        try:
            payload = json.loads(raw.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            continue

        for doc in payload.get("docs") or []:
            cover_id = doc.get("cover_i")
            if not cover_id:
                continue
            cover_url = OPEN_LIBRARY_COVER.format(cover_id=cover_id)
            data = http_get(cover_url)
            if data and len(data) > 500:
                return data

    return None


def fetch_google_books_cover(title: str, author: str | None) -> bytes | None:
    author_short = author.split(",")[0].strip() if author else None
    queries: list[str] = [f"intitle:{title}"]
    if author_short:
        queries.append(f"intitle:{title} inauthor:{author_short}")
        queries.append(f"{title} {author_short}")

    for query_str in queries:
        params = urllib.parse.urlencode({"q": query_str, "maxResults": "5"})
        raw = http_get(f"{GOOGLE_BOOKS_API}?{params}")
        if not raw:
            continue
        try:
            payload = json.loads(raw.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            continue

        for item in payload.get("items") or []:
            links = (item.get("volumeInfo") or {}).get("imageLinks") or {}
            for key in (
                "extraLarge",
                "large",
                "medium",
                "small",
                "thumbnail",
                "smallThumbnail",
            ):
                img_url = links.get(key)
                if not img_url:
                    continue
                img_url = img_url.replace("http://", "https://")
                data = http_get(img_url)
                if data and len(data) > 500:
                    return data

    return None


def fetch_cover_online(title: str, author: str | None) -> bytes | None:
    for fetcher in (fetch_open_library_cover, fetch_google_books_cover):
        data = fetcher(title, author)
        if data:
            return data
    return None


def find_cover_href(opf: ET.Element, manifest: dict[str, str], base_dir: str) -> str | None:
    cover_id: str | None = None

    for meta in opf.iter():
        if not meta.tag.endswith("meta"):
            continue
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
        image_ext = (".jpg", ".jpeg", ".png", ".webp", ".gif")
        cover_candidates: list[tuple[str, str]] = []
        for item_id, href in manifest.items():
            lower_href = href.lower()
            if not any(lower_href.endswith(ext) for ext in image_ext):
                continue
            if re.search(r"cover", item_id, re.I) or re.search(r"cover", href, re.I):
                cover_candidates.append((item_id, href))

        if cover_candidates:
            for item_id, href in cover_candidates:
                if re.search(r"cover", Path(href).name, re.I):
                    cover_id = item_id
                    break
            if not cover_id:
                cover_id = cover_candidates[0][0]

    if cover_id and cover_id in manifest:
        return manifest[cover_id]

    return None


def extract_epub_cover_bytes(epub_path: Path) -> tuple[bytes, str] | None:
    try:
        archive = zipfile.ZipFile(epub_path)
    except zipfile.BadZipFile:
        return None

    with archive:
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


def resolve_cover_metadata(
    output_slug: str,
    title: str | None,
    author: str | None,
    book_path: Path | None,
    fmt: str | None,
) -> tuple[str | None, str | None]:
    if output_slug in COVER_META:
        meta_title, meta_author = COVER_META[output_slug]
        return title or meta_title, author or meta_author

    meta_title = title
    meta_author = author
    if book_path and fmt == "epub" and (not meta_title or not meta_author):
        try:
            meta, _ = load_epub(book_path)
            meta_title = meta_title or meta.get("title")
            meta_author = meta_author or meta.get("creator")
        except Exception:
            pass

    return meta_title, meta_author


def extract_cover(
    query: str | None,
    slug: str | None,
    search_dir: Path,
    title: str | None = None,
    author: str | None = None,
    *,
    online_only: bool = False,
) -> Path | None:
    book_path: Path | None = None
    fmt: str | None = None

    if not online_only:
        if not query:
            raise ValueError("Indicá un libro o usá --online-only con --slug")
        book_path = find_book(query, search_dir)
        fmt = detect_format(book_path)

    output_slug = slug or (slugify(book_path.stem) if book_path else None)
    if not output_slug:
        raise ValueError("Indicá --slug con --online-only")

    cover_bytes: bytes | None = None

    if book_path and fmt == "epub":
        cover_bytes_tuple = extract_epub_cover_bytes(book_path)
        if cover_bytes_tuple:
            cover_bytes = cover_bytes_tuple[0]

    if cover_bytes is None:
        meta_title, meta_author = resolve_cover_metadata(
            output_slug, title, author, book_path, fmt
        )
        if meta_title:
            cover_bytes = fetch_cover_online(meta_title, meta_author)

    if not cover_bytes:
        return None

    saved = save_cover_image(cover_bytes, output_slug)
    return saved


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


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Extrae portada de libro")
    parser.add_argument("query", nargs="?", help="Libro, slug conocido o ruta")
    parser.add_argument("-s", "--slug", help="Slug de salida (public/covers/<slug>.jpg)")
    parser.add_argument("--title", help="Título para fallback online")
    parser.add_argument("--author", help="Autor para fallback online")
    parser.add_argument(
        "--search-dir",
        type=Path,
        default=Path("fuentes"),
        help="Directorio de búsqueda (default: fuentes/)",
    )
    parser.add_argument(
        "--online-only",
        action="store_true",
        help="Solo buscar en Open Library / Google Books (sin archivo fuente)",
    )
    parser.add_argument(
        "--catalog",
        action="store_true",
        help="Descargar portadas online faltantes para slugs en COVER_META",
    )
    parser.add_argument(
        "--all",
        action="store_true",
        help="Extraer portadas de todos los libros en fuentes/",
    )
    args = parser.parse_args(argv)

    search_dir = args.search_dir.resolve()

    if args.catalog:
        ok = 0
        for slug in COVER_META:
            out = COVERS_DIR / f"{slug}.jpg"
            if out.exists():
                print(f"SKIP {slug} (ya existe)")
                continue
            try:
                result = extract_cover(None, slug, search_dir, online_only=True)
                if result:
                    print(f"OK  {slug} → {result}")
                    ok += 1
                else:
                    print(f"FAIL {slug} (sin portada online)")
            except Exception as exc:
                print(f"FAIL {slug}: {exc}")
        print(f"Listo: {ok} portadas nuevas")
        return 0

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

    if args.online_only:
        if not args.slug:
            parser.error("--online-only requiere --slug")
        try:
            saved = extract_cover(
                None,
                args.slug,
                search_dir,
                title=args.title,
                author=args.author,
                online_only=True,
            )
        except (FileNotFoundError, ValueError) as exc:
            print(f"ERROR: {exc}", file=sys.stderr)
            return 1
    else:
        if not args.query:
            parser.error("Indicá un libro, --catalog, --online-only o --all")
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
        print("No se encontró portada (EPUB ni fuentes online)", file=sys.stderr)
        return 1

    print(f"OK  portada: {saved}")
    if not HAS_PIL:
        print("    (sin Pillow: imagen sin optimizar; pip install Pillow recomendado)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
