#!/usr/bin/env python3
"""Export Anki TSV decks from summaries keyConcepts → export/anki-<slug>.tsv."""
from __future__ import annotations

import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"
OUT_DIR = ROOT / "export"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    end = text.index("---", 3)
    fm_raw = text[3:end].strip()
    body = text[end + 3 :].lstrip("\n")
    meta: dict = {}
    for line in fm_raw.splitlines():
        if line.startswith("  - ") or line.startswith("meta:"):
            continue
        m = re.match(r"^(\w+):\s*(.*)$", line)
        if m:
            key, val = m.group(1), m.group(2).strip()
            if val.startswith('"') and val.endswith('"'):
                val = val[1:-1]
            meta[key] = val
    return meta, body


def parse_table_rows(body: str) -> list[tuple[str, str]]:
    rows: list[tuple[str, str]] = []
    in_table = False
    for line in body.splitlines():
        line = line.strip()
        if line.startswith("| title |"):
            in_table = True
            continue
        if not in_table or not line.startswith("|"):
            continue
        if re.match(r"^\|[-| ]+\|$", line):
            continue
        parts = [p.strip() for p in line.strip("|").split("|")]
        if len(parts) >= 2 and parts[0] not in ("title", "icon"):
            rows.append((parts[0], parts[1] if len(parts) > 1 else ""))
    return rows


def extract_concepts(body: str) -> list[tuple[str, str]]:
    m = re.search(r"^# conceptos\s*\n([\s\S]*?)(?=^# |\Z)", body, re.M)
    if not m:
        return []
    return parse_table_rows(m.group(1))


def export_slug(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)
    slug = fm.get("slug") or path.stem
    title = fm.get("title", slug)
    concepts = extract_concepts(body)
    if not concepts:
        return 0

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"anki-{slug}.tsv"
    with out_path.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.writer(fh, delimiter="\t", lineterminator="\n")
        writer.writerow(["Front", "Back", "Tags"])
        for concept_title, description in concepts:
            front = concept_title
            back = f"{description}\n\n— {title}"
            writer.writerow([front, back, f"memorable::{slug}"])
    print(f"  {slug}: {len(concepts)} cards → {out_path.relative_to(ROOT)}")
    return len(concepts)


def main(argv: list[str]) -> int:
    targets: list[Path]
    if len(argv) > 1:
        slugs = {a.removesuffix(".md") for a in argv[1:]}
        targets = [p for p in SUMMARIES.glob("*.md") if p.stem in slugs or (parse_frontmatter(p.read_text())[0].get("slug") in slugs)]
    else:
        targets = sorted(SUMMARIES.glob("*.md"))

    total = 0
    for path in targets:
        total += export_slug(path)
    print(f"Exported {total} flashcards to {OUT_DIR.relative_to(ROOT)}/")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
