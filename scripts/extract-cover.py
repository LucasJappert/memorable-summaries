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
MIN_COVER_WIDTH = 300
OPEN_LIBRARY_SEARCH = "https://openlibrary.org/search.json"
OPEN_LIBRARY_SIZES = ("L",)
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
    "wonderful-life": (
        "Wonderful Life: The Burgess Shale and the Nature of History",
        "Stephen Jay Gould",
    ),
    "superintelligence": ("Superintelligence", "Nick Bostrom"),
    "origins": ("Origins: Fourteen Billion Years of Cosmic Evolution", "Neil deGrasse Tyson"),
    "intelligent-life-universe": (
        "Intelligent Life in the Universe",
        "Peter Ulmschneider",
    ),
    "biosignatures-astrobiology": (
        "From Fossils to Astrobiology",
        "Joseph Seckbach",
    ),
    "incognito": ("Incognito: The Secret Lives of the Brain", "David Eagleman"),
    "future-of-the-mind": ("The Future of the Mind", "Michio Kaku"),
    "emperors-new-mind": (
        "The Emperor's New Mind",
        "Roger Penrose",
    ),
    "life-3-0": (
        "Life 3.0: Being Human in the Age of Artificial Intelligence",
        "Max Tegmark",
    ),
    "our-mathematical-universe": (
        "Our Mathematical Universe",
        "Max Tegmark",
    ),
    "homo-deus": ("Homo Deus", "Yuval Noah Harari"),
    "21-lessons": ("21 Lessons for the 21st Century", "Yuval Noah Harari"),
}

# ISBN opcional para portadas de mayor resolución en Open Library (validados por título)
COVER_ISBN: dict[str, str | list[str]] = {
    "wonderful-life": "039330700X",
    "cosmos": "9780345539434",
    "blind-watchmaker": "9780141026169",
    "life-3-0": ["9781101946596", "1101946598"],
}

# EPUB alternativo cuando el de fuentes/ falla (MOBI, DRM, etc.)
COVER_EPUB_OVERRIDE: dict[str, str] = {
    "seven-brief-lessons": "fuentes/_converted/seven-brief-lessons.epub",
}


def http_get(url: str, timeout: int = 20) -> bytes | None:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read()
    except OSError:
        return None


def image_width(data: bytes) -> int:
    if not HAS_PIL:
        return len(data)
    try:
        image = Image.open(io.BytesIO(data))
        return image.width
    except OSError:
        return 0


def pick_best_cover(candidates: list[bytes]) -> bytes | None:
    if not candidates:
        return None
    return max(candidates, key=image_width)


def good_enough(width: int) -> bool:
    return width >= MIN_COVER_WIDTH


def upgrade_google_books_url(url: str) -> str:
    url = url.replace("http://", "https://")
    url = re.sub(r"zoom=\d+", "zoom=0", url)
    url = re.sub(r"edge=curl&?", "", url)
    return url


def fetch_open_library_covers(title: str, author: str | None) -> list[bytes]:
    found: list[bytes] = []
    seen_urls: set[str] = set()
    best_width = 0

    for query_title, query_author in build_cover_queries(title, author):
        params_list: list[dict[str, str]] = []
        if query_author:
            params_list.append({"title": query_title, "author": query_author, "limit": "8"})
        params_list.append({"title": query_title, "limit": "8"})
        if query_author:
            params_list.append({"q": f"{query_title} {query_author}", "limit": "8"})

        for params in params_list:
            url = f"{OPEN_LIBRARY_SEARCH}?{urllib.parse.urlencode(params)}"
            raw = http_get(url)
            if not raw:
                continue
            try:
                payload = json.loads(raw.decode("utf-8"))
            except (json.JSONDecodeError, UnicodeDecodeError):
                continue

            for doc in payload.get("docs") or []:
                doc_title = doc.get("title")
                doc_authors = doc.get("author_name") or []
                if not title_matches(title, doc_title):
                    continue
                if author and not author_matches(author, doc_authors):
                    continue

                urls: list[str] = []
                cover_id = doc.get("cover_i")
                if cover_id:
                    urls.append(f"https://covers.openlibrary.org/b/id/{cover_id}-L.jpg")
                edition_key = doc.get("cover_edition_key") or doc.get("edition_key")
                if edition_key:
                    urls.append(f"https://covers.openlibrary.org/b/olid/{edition_key}-L.jpg")

                for cover_url in urls:
                    if cover_url in seen_urls:
                        continue
                    seen_urls.add(cover_url)
                    data = http_get(cover_url)
                    if not data or len(data) <= 500:
                        continue
                    width = image_width(data)
                    if width < 80:
                        continue
                    found.append(data)
                    best_width = max(best_width, width)
                    if good_enough(best_width):
                        return found

    return found


def fetch_google_books_covers(title: str, author: str | None) -> list[bytes]:
    found: list[bytes] = []
    seen_urls: set[str] = set()
    best_width = 0

    for query_title, query_author in build_cover_queries(title, author):
        query_strings: list[str] = [f'intitle:"{query_title}"']
        if query_author:
            query_strings.append(f'intitle:"{query_title}" inauthor:"{query_author}"')
            query_strings.append(f"{query_title} {query_author}")

        for query_str in query_strings:
            params = urllib.parse.urlencode({"q": query_str, "maxResults": "5"})
            raw = http_get(f"{GOOGLE_BOOKS_API}?{params}")
            if not raw:
                continue
            try:
                payload = json.loads(raw.decode("utf-8"))
            except (json.JSONDecodeError, UnicodeDecodeError):
                continue

            for item in payload.get("items") or []:
                volume = item.get("volumeInfo") or {}
                volume_title = volume.get("title")
                volume_authors = volume.get("authors") or []
                if not title_matches(title, volume_title):
                    continue
                if author and not author_matches(author, volume_authors):
                    continue

                links = volume.get("imageLinks") or {}
                for key in ("extraLarge", "large", "medium", "small", "thumbnail"):
                    img_url = links.get(key)
                    if not img_url:
                        continue
                    img_url = upgrade_google_books_url(img_url)
                    if img_url in seen_urls:
                        continue
                    seen_urls.add(img_url)
                    data = http_get(img_url)
                    if not data or len(data) <= 500:
                        continue
                    width = image_width(data)
                    if width < 80:
                        continue
                    found.append(data)
                    best_width = max(best_width, width)
                    if good_enough(best_width):
                        return found

    return found


def normalize_text(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^\w\s]", " ", value, flags=re.UNICODE)
    return re.sub(r"\s+", " ", value).strip()


def title_tokens(title: str) -> list[str]:
    stop = {"the", "a", "an", "de", "la", "el", "los", "las", "y", "and", "of", "for"}
    return [t for t in normalize_text(title).split() if len(t) > 2 and t not in stop]


def title_matches(expected: str, found: str | None) -> bool:
    if not found:
        return False
    found_norm = normalize_text(found)
    tokens = title_tokens(expected)
    if not tokens:
        return True
    hits = sum(1 for token in tokens if token in found_norm)
    return hits >= max(1, len(tokens) // 2)


def author_matches(expected: str | None, found_authors: list[str] | None) -> bool:
    if not expected:
        return True
    if not found_authors:
        return False
    expected_last = normalize_text(expected.split(",")[0]).split()[-1]
    for author in found_authors:
        if expected_last and expected_last in normalize_text(author):
            return True
    return False


def build_cover_queries(title: str, author: str | None) -> list[tuple[str, str | None]]:
    """Variantes de búsqueda: título completo, corto y con/sin autor."""
    author_short = author.split(",")[0].strip() if author else None
    short_title = title.split(":")[0].strip()
    queries: list[tuple[str, str | None]] = []
    seen: set[tuple[str, str | None]] = set()

    for candidate_title in (title, short_title):
        for candidate_author in (author_short, None):
            key = (candidate_title, candidate_author)
            if key in seen:
                continue
            seen.add(key)
            queries.append(key)
    return queries


def fetch_isbn_metadata(isbn: str) -> tuple[str | None, list[str]] | None:
    raw = http_get(f"https://openlibrary.org/isbn/{isbn}.json")
    if not raw:
        return None
    try:
        payload = json.loads(raw.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return None
    title = payload.get("title")
    authors: list[str] = []
    for author_ref in payload.get("authors") or []:
        key = author_ref.get("key") if isinstance(author_ref, dict) else None
        if not key:
            continue
        author_raw = http_get(f"https://openlibrary.org{key}.json")
        if not author_raw:
            continue
        try:
            author_payload = json.loads(author_raw.decode("utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError):
            continue
        name = author_payload.get("name")
        if name:
            authors.append(name)
    return title, authors


def fetch_isbn_covers(
    isbn: str,
    *,
    expected_title: str | None = None,
    expected_author: str | None = None,
) -> list[bytes]:
    meta = fetch_isbn_metadata(isbn)
    if meta:
        found_title, found_authors = meta
        if expected_title and not title_matches(expected_title, found_title):
            return []
        if expected_author and not author_matches(expected_author, found_authors):
            return []

    found: list[bytes] = []
    for size in OPEN_LIBRARY_SIZES:
        url = f"https://covers.openlibrary.org/b/isbn/{isbn}-{size}.jpg"
        data = http_get(url)
        if data and len(data) > 500 and image_width(data) >= 80:
            found.append(data)
    return found


def fetch_isbn_covers_for_slug(
    slug: str,
    expected_title: str,
    expected_author: str | None,
) -> list[bytes]:
    isbns = COVER_ISBN.get(slug)
    if not isbns:
        return []
    if isinstance(isbns, str):
        isbns = [isbns]

    found: list[bytes] = []
    for isbn in isbns:
        found.extend(
            fetch_isbn_covers(
                isbn,
                expected_title=expected_title,
                expected_author=expected_author,
            )
        )
        if found and good_enough(image_width(pick_best_cover(found) or b"")):
            break
    return found


def fetch_cover_online(title: str, author: str | None) -> bytes | None:
    candidates: list[bytes] = []
    candidates.extend(fetch_open_library_covers(title, author))
    candidates.extend(fetch_google_books_covers(title, author))
    best = pick_best_cover(candidates)
    if best and image_width(best) >= MIN_COVER_WIDTH:
        return best
    # Si nada alcanza MIN_COVER_WIDTH, devolver la mejor disponible
    return best


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

    cover_bytes = resolve_cover_bytes(
        output_slug,
        search_dir,
        title=title,
        author=author,
        book_path=book_path,
        fmt=fmt,
    )

    if not cover_bytes:
        return None

    return save_cover_image(cover_bytes, output_slug)


def resolve_cover_bytes(
    output_slug: str,
    search_dir: Path,
    title: str | None = None,
    author: str | None = None,
    book_path: Path | None = None,
    fmt: str | None = None,
) -> bytes | None:
    candidates: list[bytes] = []

    if book_path and fmt == "epub":
        cover_bytes_tuple = extract_epub_cover_bytes(book_path)
        if cover_bytes_tuple:
            candidates.append(cover_bytes_tuple[0])

    if output_slug in COVER_ISBN:
        meta_title, meta_author = resolve_cover_metadata(
            output_slug, title, author, book_path, fmt
        )
        if meta_title:
            candidates.extend(
                fetch_isbn_covers_for_slug(
                    output_slug,
                    meta_title,
                    meta_author,
                )
            )

    meta_title, meta_author = resolve_cover_metadata(
        output_slug, title, author, book_path, fmt
    )
    if meta_title:
        for fetcher in (fetch_open_library_covers, fetch_google_books_covers):
            found = fetcher(meta_title, meta_author)
            candidates.extend(found)
            best = pick_best_cover(candidates)
            if best and good_enough(image_width(best)):
                return best

    return pick_best_cover(candidates)


def existing_cover_width(slug: str) -> int:
    path = COVERS_DIR / f"{slug}.jpg"
    if not path.exists():
        return 0
    return image_width(path.read_bytes())


def upgrade_cover(
    slug: str,
    search_dir: Path,
    *,
    force: bool = False,
) -> Path | None:
    """Re-fetch cover if missing or lower resolution than available sources."""
    path = COVERS_DIR / f"{slug}.jpg"
    current_width = existing_cover_width(slug)
    if not force and current_width >= MIN_COVER_WIDTH:
        return path

    book_path: Path | None = None
    fmt: str | None = None
    if slug in COVER_EPUB_OVERRIDE:
        override = Path(COVER_EPUB_OVERRIDE[slug])
        if override.exists():
            book_path = override.resolve()
            fmt = "epub"
    if slug in COVER_META and book_path is None:
        title, author = COVER_META[slug]
        try:
            book_path = find_book(title, search_dir)
            fmt = detect_format(book_path)
        except FileNotFoundError:
            pass

    new_bytes = resolve_cover_bytes(
        slug,
        search_dir,
        book_path=book_path,
        fmt=fmt,
    )
    if not new_bytes:
        return path if path.exists() else None

    new_width = image_width(new_bytes)
    if not force and current_width > 0 and new_width <= current_width:
        return path

    return save_cover_image(new_bytes, slug)


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
        "--upgrade",
        action="store_true",
        help="Mejorar portadas existentes con baja resolución (<300px)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Con --upgrade: re-descargar todas las portadas del catálogo",
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
                    w = existing_cover_width(slug)
                    print(f"OK  {slug} → {result} ({w}px)")
                    ok += 1
                else:
                    print(f"FAIL {slug} (sin portada online)")
            except Exception as exc:
                print(f"FAIL {slug}: {exc}")
        print(f"Listo: {ok} portadas nuevas")
        return 0

    if args.upgrade:
        ok = 0
        for slug in COVER_META:
            before = existing_cover_width(slug)
            if not args.force and before >= MIN_COVER_WIDTH:
                print(f"SKIP {slug} ({before}px ≥ {MIN_COVER_WIDTH})")
                continue
            try:
                result = upgrade_cover(slug, search_dir, force=args.force)
                after = existing_cover_width(slug)
                if result and after > before:
                    print(f"OK  {slug}: {before}px → {after}px")
                    ok += 1
                elif result:
                    print(f"SKIP {slug}: sin mejora ({before}px → {after}px)")
                else:
                    print(f"FAIL {slug}")
            except Exception as exc:
                print(f"FAIL {slug}: {exc}")
        print(f"Listo: {ok} portadas mejoradas")
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
