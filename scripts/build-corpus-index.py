#!/usr/bin/env python3
"""Build corpus index + flashcards from summaries/*.md."""
from __future__ import annotations

import importlib.util
import json
import re
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"
OUT_DIR = ROOT / "public" / "index"

_md_ts_path = ROOT / "scripts" / "md-to-ts.py"
_spec = importlib.util.spec_from_file_location("md_to_ts", _md_ts_path)
assert _spec and _spec.loader
_md_ts = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_md_ts)
parse_blocks = _md_ts.parse_blocks
parse_closing = _md_ts.parse_closing
parse_frontmatter = _md_ts.parse_frontmatter
parse_table = _md_ts.parse_table


def strip_html(html: str) -> str:
    text = re.sub(r"<[^>]+>", " ", html)
    text = unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def load_phase_by_slug() -> dict[str, int]:
    phases_file = ROOT / "src" / "books" / "reading-phases.ts"
    if not phases_file.exists():
        return {}
    text = phases_file.read_text(encoding="utf-8")
    phase_map: dict[str, int] = {}
    current_phase = 0
    for line in text.splitlines():
        m = re.match(r"\s*id:\s*(\d+)", line)
        if m:
            current_phase = int(m.group(1))
            continue
        sm = re.search(r"'([^']+)'", line)
        if sm and current_phase:
            phase_map[sm.group(1)] = current_phase
    return phase_map


def parse_summary(md_path: Path) -> dict:
    text = md_path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)

    slug = fm.get("slug", md_path.stem)
    title = fm.get("title_es") or fm.get("title", slug)
    key_concepts: list[dict] = []
    closing = {"highlight": ""}
    entries: list[dict] = []

    section_parts = re.split(r"\n---\n\n# ", body)
    for part in section_parts:
        if not part.startswith("# ") and not part[0].isalnum():
            continue
        if not part.startswith("# "):
            part = "# " + part
        sid_m = re.match(r"# (\w+)\s*\n", part)
        if not sid_m:
            continue
        sid = sid_m.group(1)
        title_m = re.search(r"^## title:\s*(.+)$", part, re.M)
        section_title = title_m.group(1).strip() if title_m else sid

        if sid == "conceptos":
            cg = re.search(r"<!-- concept-grid -->\s*\n((?:\|[^\n]+\n)+)", part)
            if cg:
                rows = parse_table(cg.group(1).splitlines())
                for row in rows:
                    if len(row) >= 3:
                        key_concepts.append({"title": row[1], "description": row[2]})
                    elif len(row) >= 2:
                        key_concepts.append({"title": row[0], "description": row[1]})
            continue

        if sid == "cierre":
            c = parse_closing(part)
            closing["highlight"] = c["highlight"]
            for line in c["lines"]:
                plain = strip_html(line)
                if plain:
                    entries.append({"sectionId": "cierre", "sectionTitle": "Cierre", "text": plain})
            if c["highlight"]:
                entries.append(
                    {
                        "sectionId": "cierre",
                        "sectionTitle": "Cierre",
                        "text": strip_html(c["highlight"]),
                    }
                )
            continue

        if sid in ("Contenido", "cronologia", "figuras", "footer"):
            continue

        content_m = re.search(r"## title: [^\n]+\n\n(.+)", part, re.S)
        content = content_m.group(1).strip() if content_m else ""
        for block in parse_blocks(content):
            if block["type"] == "paragraph":
                entries.append(
                    {
                        "sectionId": sid,
                        "sectionTitle": section_title,
                        "text": strip_html(block["html"]),
                    }
                )
            elif block["type"] == "key":
                entries.append(
                    {
                        "sectionId": sid,
                        "sectionTitle": section_title,
                        "text": strip_html(block["html"]),
                    }
                )
            elif block["type"] == "quote":
                entries.append(
                    {
                        "sectionId": sid,
                        "sectionTitle": section_title,
                        "text": block["text"],
                    }
                )
            elif block["type"] == "list":
                for item in block["items"]:
                    entries.append(
                        {
                            "sectionId": sid,
                            "sectionTitle": section_title,
                            "text": item,
                        }
                    )

    return {
        "slug": slug,
        "title": title,
        "concepts": key_concepts,
        "highlight": closing["highlight"],
        "entries": entries,
    }


def build_flashcards(doc: dict, phase: int | None = None) -> list[dict]:
    slug = doc["slug"]
    cards: list[dict] = []

    highlight = doc.get("highlight", "").strip()
    if highlight:
        card: dict = {
            "id": f"{slug}:highlight",
            "slug": slug,
            "front": "¿Cuál es la idea central del cierre?",
            "back": highlight,
        }
        if phase is not None:
            card["phase"] = phase
        cards.append(card)

    for i, concept in enumerate(doc.get("concepts", [])):
        card = {
            "id": f"{slug}:concept:{i}",
            "slug": slug,
            "front": concept["title"],
            "back": concept["description"],
        }
        if phase is not None:
            card["phase"] = phase
        cards.append(card)

    return cards


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    phase_by_slug = load_phase_by_slug()

    manifest: list[str] = []
    all_flashcards: list[dict] = []

    for md_path in sorted(SUMMARIES.glob("*.md")):
        doc = parse_summary(md_path)
        slug = doc["slug"]
        phase = phase_by_slug.get(slug)
        manifest.append(slug)

        out_path = OUT_DIR / f"{slug}.json"
        out_path.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        all_flashcards.extend(build_flashcards(doc, phase))

    (OUT_DIR / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (OUT_DIR / "flashcards.json").write_text(
        json.dumps(all_flashcards, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Wrote {len(manifest)} book indexes + {len(all_flashcards)} flashcards → {OUT_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
