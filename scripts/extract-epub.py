#!/usr/bin/env python3
"""
Extrae texto legible de libros (.epub, .pdf; stdlib + pdftotext si está disponible).

Uso:
  python scripts/extract-epub.py "Sapiens - Yuval Noah Harari.epub"
  python scripts/extract-epub.py sapiens -o .extracted/sapiens.txt
  python scripts/extract-epub.py --list .
"""

from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import sys
import unicodedata
import zipfile
from html.parser import HTMLParser
from pathlib import Path
from xml.etree import ElementTree as ET

OPF_NS = "http://www.idpf.org/2007/opf"
DC_NS = "http://purl.org/dc/elements/1.1/"
CONTAINER_NS = "urn:oasis:names:tc:opendocument:xmlns:container"

BLOCK_TAGS = frozenset({"p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "br", "tr"})
SKIP_TAGS = frozenset({"script", "style"})


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text or "libro"


class TextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []
        self._skip = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in SKIP_TAGS:
            self._skip += 1
        elif tag in BLOCK_TAGS:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in SKIP_TAGS:
            self._skip = max(0, self._skip - 1)
        elif tag in BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data: str) -> None:
        if self._skip:
            return
        chunk = re.sub(r"\s+", " ", data).strip()
        if chunk:
            self.parts.append(chunk + " ")


def html_to_text(raw: bytes) -> str:
    parser = TextExtractor()
    parser.feed(raw.decode("utf-8", errors="replace"))
    text = "".join(parser.parts)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def q(tag: str, ns: str) -> str:
    return f"{{{ns}}}{tag}"


def opf_text(root: ET.Element, tag: str) -> str | None:
    el = root.find(f".//{q(tag, DC_NS)}")
    if el is not None and el.text:
        return el.text.strip()
    return None


def resolve_href(base_dir: str, href: str) -> str:
    if not base_dir:
        return href
    parts = (base_dir.rstrip("/") + "/" + href).split("/")
    resolved: list[str] = []
    for part in parts:
        if part in ("", "."):
            continue
        if part == "..":
            if resolved:
                resolved.pop()
        else:
            resolved.append(part)
    return "/".join(resolved)


def detect_format(path: Path) -> str:
    with path.open("rb") as fh:
        head = fh.read(8)
    if head.startswith(b"PK"):
        return "epub"
    if head.startswith(b"%PDF"):
        return "pdf"
    if head[:4] in (b"BOOK", b"MOBI", b"\xe9\x8e\x8d"):
        return "mobi"
    if path.suffix.lower() == ".pdf":
        return "pdf"
    if path.suffix.lower() == ".epub":
        return "epub"
    return "unknown"


def find_book(query: str, search_dir: Path) -> Path:
    direct = Path(query)
    if direct.is_file():
        return direct.resolve()

    patterns = ("*.epub", "*.pdf")
    candidates: list[Path] = []
    for pattern in patterns:
        candidates.extend(search_dir.glob(pattern))
    candidates = sorted(set(candidates))

    if not candidates:
        raise FileNotFoundError(f"No hay archivos .epub/.pdf en {search_dir}")

    q = query.lower()
    matches = [p for p in candidates if q in p.name.lower()]
    if len(matches) == 1:
        return matches[0]
    if len(matches) > 1:
        names = "\n".join(f"  - {p.name}" for p in matches)
        raise FileNotFoundError(f"Varios libros coinciden con '{query}':\n{names}")

    raise FileNotFoundError(
        f"No se encontró libro para '{query}'. Disponibles:\n"
        + "\n".join(f"  - {p.name}" for p in candidates)
    )


def load_epub(epub_path: Path) -> tuple[dict[str, str | None], list[tuple[str, str]]]:
    with zipfile.ZipFile(epub_path) as archive:
        container = ET.fromstring(archive.read("META-INF/container.xml"))
        opf_path = container.find(f".//{q('rootfile', CONTAINER_NS)}").get("full-path")  # type: ignore[union-attr]
        base_dir = opf_path.rsplit("/", 1)[0] if "/" in opf_path else ""
        opf = ET.fromstring(archive.read(opf_path))

        meta = {
            "title": opf_text(opf, "title"),
            "creator": opf_text(opf, "creator"),
            "language": opf_text(opf, "language"),
            "source": epub_path.name,
            "format": "epub",
        }

        manifest: dict[str, str] = {}
        for item in opf.findall(f".//{q('item', OPF_NS)}"):
            item_id = item.get("id")
            href = item.get("href")
            if item_id and href:
                manifest[item_id] = href

        spine_ids = [
            item.get("idref")
            for item in opf.findall(f".//{q('itemref', OPF_NS)}")
            if item.get("idref")
        ]

        chapters: list[tuple[str, str]] = []
        for index, idref in enumerate(spine_ids, start=1):
            href = manifest.get(idref)
            if not href:
                continue
            inner_path = resolve_href(base_dir, href)
            try:
                raw = archive.read(inner_path)
            except KeyError:
                continue
            text = html_to_text(raw)
            if not text or len(text) < 20:
                continue
            label = href.rsplit("/", 1)[-1]
            first_line = text.split("\n", 1)[0][:120]
            chapter_title = first_line if len(first_line) > 3 else label
            chapters.append((f"{index:02d} · {chapter_title}", text))

        return meta, chapters


def load_pdf(pdf_path: Path) -> tuple[dict[str, str | None], list[tuple[str, str]]]:
    pdftotext = shutil.which("pdftotext")
    if not pdftotext:
        raise RuntimeError("PDF detectado pero falta `pdftotext` (paquete poppler-utils)")

    result = subprocess.run(
        [pdftotext, "-layout", str(pdf_path), "-"],
        capture_output=True,
        check=True,
    )
    full_text = result.stdout.decode("utf-8", errors="replace").strip()
    if not full_text:
        raise RuntimeError(f"No se extrajo texto de {pdf_path.name}")

    pages = re.split(r"\f", full_text)
    chapters: list[tuple[str, str]] = []
    for index, page in enumerate(pages, start=1):
        page = page.strip()
        if len(page) < 40:
            continue
        first_line = page.split("\n", 1)[0][:100].strip() or f"Página {index}"
        chapters.append((f"Pág. {index:03d} · {first_line}", page))

    if not chapters:
        chapters = [("Documento completo", full_text)]

    meta = {
        "title": pdf_path.stem,
        "creator": None,
        "language": None,
        "source": pdf_path.name,
        "format": "pdf",
    }
    return meta, chapters


def load_book(path: Path) -> tuple[dict[str, str | None], list[tuple[str, str]]]:
    fmt = detect_format(path)
    if fmt == "epub":
        return load_epub(path)
    if fmt == "pdf":
        return load_pdf(path)
    if fmt == "mobi":
        raise RuntimeError(
            f"{path.name} es MOBI/AZW disfrazado de .epub. "
            "Convertilo a EPUB real (Calibre) o usá otro archivo."
        )
    raise RuntimeError(f"Formato no soportado para {path.name}")


def format_output(meta: dict[str, str | None], chapters: list[tuple[str, str]]) -> str:
    lines = [
        "# EXTRACCIÓN DE LIBRO",
        f"format: {meta.get('format') or 'unknown'}",
        f"title: {meta.get('title') or '(sin título)'}",
        f"author: {meta.get('creator') or '(sin autor)'}",
        f"language: {meta.get('language') or '(desconocido)'}",
        f"source: {meta.get('source')}",
        f"chapters: {len(chapters)}",
        "",
    ]
    for title, body in chapters:
        lines.extend(["", "=" * 72, f"## {title}", "=" * 72, "", body])
    return "\n".join(lines).strip() + "\n"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Extrae texto de .epub o .pdf")
    parser.add_argument("query", nargs="?", help="Ruta al libro o búsqueda parcial (ej. sapiens)")
    parser.add_argument("-o", "--output", type=Path, help="Archivo de salida (default: .extracted/<slug>.txt)")
    parser.add_argument("--search-dir", type=Path, default=Path("."), help="Directorio de búsqueda")
    parser.add_argument("--list", action="store_true", help="Listar libros en search-dir")
    parser.add_argument("--meta", action="store_true", help="Solo metadatos")
    args = parser.parse_args(argv)

    search_dir = args.search_dir.resolve()

    if args.list:
        books = sorted(set(search_dir.glob("*.epub")) | set(search_dir.glob("*.pdf")))
        if not books:
            print(f"No hay .epub/.pdf en {search_dir}")
            return 1
        for book in books:
            fmt = detect_format(book)
            print(f"{book.name}\t[{fmt}]")
        return 0

    if not args.query:
        parser.error("Indicá un libro o usá --list")

    book_path = find_book(args.query, search_dir)

    try:
        meta, chapters = load_book(book_path)
    except zipfile.BadZipFile as exc:
        fmt = detect_format(book_path)
        if fmt == "pdf":
            meta, chapters = load_pdf(book_path)
        elif fmt == "mobi":
            print(f"ERROR: {book_path.name} es MOBI, no EPUB.", file=sys.stderr)
            return 1
        else:
            print(f"ERROR: archivo inválido ({exc})", file=sys.stderr)
            return 1
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    if args.meta:
        for key, value in meta.items():
            print(f"{key}: {value or ''}")
        print(f"chapters: {len(chapters)}")
        return 0

    if not chapters:
        print(f"No se pudo extraer texto de {book_path.name}", file=sys.stderr)
        return 1

    output_path = args.output
    if output_path is None:
        base = slugify(meta.get("title") or book_path.stem)
        output_path = Path(".extracted") / f"{base}.txt"

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(format_output(meta, chapters), encoding="utf-8")

    print(f"OK  {book_path.name} [{meta.get('format')}]")
    print(f"    capítulos: {len(chapters)}")
    print(f"    salida:    {output_path}")
    if meta.get("title"):
        print(f"    título:    {meta['title']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
