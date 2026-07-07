#!/usr/bin/env python3
"""Quality gate de cobertura para summaries/<slug>.md.

Complementa a lint-summary.py (prosa) verificando *contenido*:
- Consistencia entre la TOC (# Contenido) y las secciones presentes.
- Que cada capítulo (# capN / # prefacio) tenga su idea principal en un bloque <!-- key -->.
- Que ningún capítulo quede demasiado fino (piso de palabras en prosa).
- (Heurístico, best-effort) que el nº de capítulos del resumen no sea muy inferior
  al del libro fuente en .extracted/<slug>.txt.

Salida: FAIL (exit 1) ante fallas duras; los avisos no rompen el build.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"
EXTRACTED = ROOT / ".extracted"

# Pisos de palabras de prosa por capítulo (paragraph + key, sin HTML ni tablas).
THIN_FAIL = 35   # por debajo: falla dura (capítulo vacío de argumento)
THIN_WARN = 70   # por debajo: aviso (probablemente falta el porqué)

CHAPTER_IDS = re.compile(r"^(prefacio|cap\d+)$")


def strip_html(s: str) -> str:
    return re.sub(r"<[^>]+>", "", s)


def parse_frontmatter_body(text: str) -> str:
    if text.startswith("---"):
        end = text.index("---", 3)
        return text[end + 3 :].lstrip("\n")
    return text


def split_sections(body: str) -> list[tuple[str, str]]:
    parts = re.split(r"\n---\n\n# ", body)
    out: list[tuple[str, str]] = []
    for part in parts:
        if not part.startswith("# "):
            part = "# " + part
        m = re.match(r"# (\S+)\s*\n", part)
        if m:
            out.append((m.group(1), part))
    return out


def parse_toc(sections: list[tuple[str, str]]) -> list[str]:
    for sid, section in sections:
        if sid != "Contenido":
            continue
        ids = []
        for line in section.splitlines():
            line = line.strip()
            if not line.startswith("|"):
                continue
            cells = [c.strip() for c in line.strip("|").split("|")]
            if not cells or cells[0] in ("id", ""):
                continue
            if re.match(r"^[-: ]+$", cells[0]):
                continue
            ids.append(cells[0])
        return ids
    return []


def prose_words(section: str) -> int:
    words = 0
    for m in re.finditer(
        r"<!--\s*(paragraph(?:\s+lead)?|key)\s*-->\s*\n(.+?)(?=\n\n<!--|\n\n---|\Z)",
        section,
        re.S,
    ):
        text = strip_html(m.group(2))
        words += len(text.split())
    return words


def has_key(section: str) -> bool:
    return bool(re.search(r"<!--\s*key\s*-->", section))


def slug_tokens(slug: str) -> set[str]:
    return {t for t in slug.lower().replace("-", " ").split() if len(t) > 2}


def find_extracted_path(slug: str) -> Path | None:
    """Resuelve .extracted/<slug>.txt aunque el archivo tenga otro nombre."""
    exact = EXTRACTED / f"{slug}.txt"
    if exact.exists():
        return exact

    tokens = slug_tokens(slug)
    scored: list[tuple[int, Path]] = []

    for path in EXTRACTED.glob("*.txt"):
        stem = path.stem.lower()
        if stem.startswith("summary-of-"):
            continue
        if slug in stem or stem in slug:
            scored.append((100 + len(stem), path))
            continue
        overlap = len(tokens & slug_tokens(stem))
        if overlap and overlap >= max(1, len(tokens) - 1):
            scored.append((overlap * 10 + len(stem), path))

    if not scored:
        return None
    scored.sort(key=lambda x: (-x[0], -len(x[1].stem)))
    return scored[0][1]


def source_chapter_count(slug: str) -> int | None:
    """Cuenta heurística de capítulos en el texto extraído (best-effort)."""
    path = find_extracted_path(slug)
    if path is None:
        return None
    text = path.read_text(encoding="utf-8", errors="ignore")
    nums: set[int] = set()

    # «Chapter 3», «Capítulo 12», etc.
    for m in re.finditer(
        r"^\s*(?:chapter|cap[ií]tulo)\s+(\d{1,2})\b",
        text,
        re.I | re.M,
    ):
        nums.add(int(m.group(1)))

    # Índice tipo «1 An Animal of No Significance» (Sapiens y similares)
    if not nums:
        head = text[:12000]
        for m in re.finditer(r"^\s*(\d{1,2})\s+[A-Z][^\n]{4,80}$", head, re.M):
            n = int(m.group(1))
            if 1 <= n <= 40:
                nums.add(n)

    return len(nums) if nums else None


def check(slug: str) -> tuple[list[str], list[str]]:
    path = SUMMARIES / f"{slug}.md"
    if not path.exists():
        return [f"No existe {path}"], []

    body = parse_frontmatter_body(path.read_text(encoding="utf-8"))
    sections = split_sections(body)
    toc_ids = parse_toc(sections)
    section_ids = [sid for sid, _ in sections]

    fails: list[str] = []
    warns: list[str] = []

    chapter_sections = [(sid, sec) for sid, sec in sections if CHAPTER_IDS.match(sid)]

    if not chapter_sections:
        fails.append("no se encontró ninguna sección de capítulo (prefacio / capN)")

    # 1. Consistencia TOC <-> secciones
    toc_chapters = [i for i in toc_ids if CHAPTER_IDS.match(i)]
    for cid in toc_chapters:
        if cid not in section_ids:
            fails.append(f"la TOC lista «{cid}» pero no existe la sección # {cid}")
    for sid, _ in chapter_sections:
        if toc_ids and sid not in toc_ids:
            warns.append(f"la sección # {sid} no está en la TOC (# Contenido)")

    # Orden de capítulos (capN debe ir en orden creciente)
    nums = [int(sid[3:]) for sid, _ in chapter_sections if sid.startswith("cap")]
    if nums != sorted(nums):
        warns.append(f"los capítulos no están en orden creciente: {nums}")
    missing = [n for n in range(1, (max(nums) + 1 if nums else 0)) if n not in nums]
    if missing:
        warns.append(f"faltan números de capítulo intermedios: {missing}")

    # 2. Idea principal (bloque key) obligatoria en capítulos
    for sid, sec in chapter_sections:
        if not has_key(sec):
            fails.append(f"# {sid} no tiene bloque <!-- key --> (idea principal obligatoria)")

    # 3. Capítulos demasiado finos
    for sid, sec in chapter_sections:
        w = prose_words(sec)
        if w < THIN_FAIL:
            fails.append(f"# {sid} demasiado fino: {w} palabras de prosa (mín. {THIN_FAIL})")
        elif w < THIN_WARN:
            warns.append(f"# {sid} algo corto: {w} palabras (ideal ≥ {THIN_WARN}); ¿falta el porqué?")

    # 4. Heurística de cobertura vs. fuente
    src_path = find_extracted_path(slug)
    src_n = source_chapter_count(slug)
    if src_n is not None:
        md_n = len([s for s, _ in chapter_sections if s.startswith("cap")])
        if md_n < src_n * 0.8:
            warns.append(
                f"el resumen tiene {md_n} capítulos y la fuente ~{src_n}; "
                "posible cobertura incompleta"
            )
    elif src_path is None:
        warns.append("no se pudo comparar contra la fuente (.extracted no encontrado); "
                     "verificá cobertura manualmente")

    return fails, warns


def main() -> int:
    parser = argparse.ArgumentParser(description="Quality gate de cobertura de summaries/*.md")
    parser.add_argument("slug", nargs="?", help="slug del libro (ej. free-will)")
    parser.add_argument("--all", action="store_true", help="revisar todos los summaries")
    args = parser.parse_args()

    if args.all:
        slugs = [p.stem for p in sorted(SUMMARIES.glob("*.md")) if not p.stem.endswith(".skeleton")]
    elif args.slug:
        slugs = [args.slug]
    else:
        parser.print_help()
        return 1

    total_fails = 0
    for slug in slugs:
        fails, warns = check(slug)
        if not fails and not warns:
            print(f"{slug}: OK")
            continue
        print(f"\n{slug} ({len(fails)} fallas, {len(warns)} avisos)")
        for f in fails:
            print(f"  ✗ {f}")
        for w in warns:
            print(f"  · {w}")
        total_fails += len(fails)

    return 1 if total_fails else 0


if __name__ == "__main__":
    raise SystemExit(main())
