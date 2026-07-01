#!/usr/bin/env python3
"""Convert summaries/<slug>.md to src/data/<file>.ts (BookSummary)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def parse_frontmatter(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    end = text.index("---", 3)
    fm_raw = text[3:end].strip()
    body = text[end + 3 :].lstrip("\n")
    meta: dict = {}
    current_key = None
    in_meta_list = False
    for line in fm_raw.splitlines():
        if line.startswith("  - "):
            meta.setdefault("meta", []).append(line[4:].strip().strip('"'))
            continue
        if line.startswith("meta:"):
            in_meta_list = True
            meta["meta"] = []
            continue
        m = re.match(r"^(\w+):\s*(.*)$", line)
        if m:
            key, val = m.group(1), m.group(2).strip()
            if val.startswith('"') and val.endswith('"'):
                val = val[1:-1]
            meta[key] = val
            current_key = key
            in_meta_list = False
    return meta, body


def parse_table(lines: list[str]) -> list[dict[str, str]]:
    rows = []
    for line in lines:
        line = line.strip()
        if not line.startswith("|") or re.match(r"^\|[-| ]+\|$", line):
            continue
        parts = [p.strip() for p in line.strip("|").split("|")]
        if parts[0] in ("id", "icon", "value", "year", "name", "title"):
            continue
        rows.append(parts)
    return rows


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def parse_blocks(content: str) -> list[dict]:
    blocks: list[dict] = []
    parts = re.split(
        r"<!--\s*(paragraph(?:\s+lead)?|quote|key|concept-grid|big-numbers|timeline|list)\s*-->",
        content,
    )
    # parts[0] = preamble (ignored); then alternating kind, body
    for i in range(1, len(parts), 2):
        kind = parts[i].strip()
        body = parts[i + 1].strip() if i + 1 < len(parts) else ""
        if kind.startswith("paragraph"):
            variant = "lead" if "lead" in kind else "default"
            html = re.sub(r"\s*\n\s*", " ", body).strip()
            block: dict = {"type": "paragraph", "html": html}
            if variant == "lead":
                block["variant"] = "lead"
            blocks.append(block)
        elif kind == "quote":
            m = re.search(r"^>\s*(.+?)\s*\n\s*—\s*(.+)$", body, re.S)
            if m:
                blocks.append({"type": "quote", "text": m.group(1).strip(), "attribution": m.group(2).strip()})
        elif kind == "key":
            html = re.sub(r"\s*\n\s*", " ", body).strip()
            blocks.append({"type": "key", "html": html})
        elif kind == "concept-grid":
            lines = [l for l in body.splitlines() if l.strip().startswith("|")]
            rows = parse_table(lines)
            items = []
            for row in rows:
                if len(row) == 3:
                    icon, title, desc = row
                    item = {"title": title, "description": desc}
                    if icon and not title == icon:
                        item["icon"] = icon
                    items.append(item)
                elif len(row) == 2:
                    items.append({"title": row[0], "description": row[1]})
            blocks.append({"type": "concept-grid", "items": items})
        elif kind == "big-numbers":
            lines = [l for l in body.splitlines() if l.strip().startswith("|")]
            rows = parse_table(lines)
            items = [{"value": r[0], "label": r[1]} for r in rows if len(r) >= 2]
            blocks.append({"type": "big-numbers", "items": items})
        elif kind == "timeline":
            lines = [l for l in body.splitlines() if l.strip().startswith("|")]
            rows = parse_table(lines)
            items = [{"year": r[0], "text": r[1]} for r in rows if len(r) >= 2]
            blocks.append({"type": "timeline", "items": items})
        elif kind == "list":
            items = []
            for line in body.splitlines():
                line = line.strip()
                if line.startswith("- "):
                    items.append(line[2:].strip())
            blocks.append({"type": "list", "items": items})
    return blocks


def parse_closing(content: str) -> dict:
    m = re.search(r"<!-- closing -->\s*(.+?)(?=\n---|\Z)", content, re.S)
    if not m:
        return {"title": "", "lines": [], "highlight": ""}
    raw = m.group(1).strip()
    highlight = ""
    hm = re.search(r"<!-- highlight -->(.+?)<!-- /highlight -->", raw, re.S)
    if hm:
        highlight = hm.group(1).strip()
        raw = raw[: hm.start()] + raw[hm.end() :]
    lines = [ln.strip() for ln in raw.splitlines() if ln.strip()]
    return {"lines": lines, "highlight": highlight}


def block_to_ts(block: dict, indent: str = "        ") -> str:
    t = block["type"]
    if t == "paragraph":
        lines = [f'{indent}{{', f'{indent}  type: \'paragraph\',']
        if block.get("variant") == "lead":
            lines.append(f'{indent}  variant: \'lead\',')
        lines.append(f'{indent}  html: {esc(block["html"])},')
        lines.append(f'{indent}}},')
        return "\n".join(lines)
    if t == "quote":
        lines = [f'{indent}{{', f'{indent}  type: \'quote\',', f'{indent}  text: {esc(block["text"])},']
        if block.get("attribution"):
            lines.append(f'{indent}  attribution: {esc(block["attribution"])},')
        lines.append(f'{indent}}},')
        return "\n".join(lines)
    if t == "key":
        return f"{indent}{{\n{indent}  type: 'key',\n{indent}  html: {esc(block['html'])},\n{indent}}},"
    if t in ("concept-grid", "big-numbers", "timeline", "list"):
        key = "items"
        return f"{indent}{{\n{indent}  type: '{t}',\n{indent}  {key}: {json.dumps(block[key], ensure_ascii=False, indent=2).replace(chr(10), chr(10) + indent + '  ')},\n{indent}}},"
    return ""


def convert(md_path: Path, out_path: Path, export_name: str) -> None:
    text = md_path.read_text(encoding="utf-8")
    fm, body = parse_frontmatter(text)

    # TOC
    toc: list[dict] = []
    toc_m = re.search(r"# Contenido\s*\n\s*\| id \|.*?\n(\|[-| ]+\|\n)?((?:\|[^\n]+\n)+)", body)
    if toc_m:
        for line in toc_m.group(2).splitlines():
            parts = [p.strip() for p in line.strip("|").split("|")]
            if len(parts) >= 3 and parts[0] != "id":
                toc.append({"id": parts[0], "num": parts[1], "label": parts[2]})

    sections: list[dict] = []
    key_concepts: list[dict] = []
    chronology: list[dict] = []
    figures: list[dict] = []
    closing = {"title": "", "lines": [], "highlight": ""}
    footer = {"line1": "", "line2": ""}

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
        if sid in ("Contenido", "conceptos", "cronologia", "figuras", "cierre", "footer"):
            if sid == "conceptos":
                cg = re.search(r"<!-- concept-grid -->\s*\n((?:\|[^\n]+\n)+)", part)
                if cg:
                    rows = parse_table(cg.group(1).splitlines())
                    key_concepts = [{"title": r[0], "description": r[1]} for r in rows if len(r) >= 2]
                title_m = re.search(r"## title: (.+)", part)
                if title_m:
                    pass
            elif sid == "cronologia":
                tl = re.search(r"<!-- timeline -->\s*\n((?:\|[^\n]+\n)+)", part)
                if tl:
                    rows = parse_table(tl.group(1).splitlines())
                    chronology = [{"year": r[0], "text": r[1]} for r in rows if len(r) >= 2]
            elif sid == "figuras":
                fg = re.search(r"<!-- figures -->\s*\n((?:\|[^\n]+\n)+)", part)
                if fg:
                    rows = parse_table(fg.group(1).splitlines())
                    figures = [{"name": r[0], "role": r[1]} for r in rows if len(r) >= 2]
            elif sid == "cierre":
                title_m = re.search(r"## title: (.+)", part)
                closing["title"] = title_m.group(1).strip() if title_m else ""
                c = parse_closing(part)
                closing["lines"] = c["lines"]
                closing["highlight"] = c["highlight"]
            elif sid == "footer":
                for line in part.splitlines():
                    if line.startswith("line1:"):
                        footer["line1"] = line[6:].strip()
                    if line.startswith("line2:"):
                        footer["line2"] = line[6:].strip()
            continue

        num_m = re.search(r"## num: (.+)", part)
        title_m = re.search(r"## title: (.+)", part)
        content_m = re.search(r"## title: [^\n]+\n\n(.+)", part, re.S)
        content = content_m.group(1).strip() if content_m else ""
        blocks = parse_blocks(content)
        sections.append(
            {
                "id": sid,
                "num": num_m.group(1).strip() if num_m else "",
                "title": title_m.group(1).strip() if title_m else sid,
                "blocks": blocks,
            }
        )

    meta_obj: dict = {
        "title": fm.get("title", ""),
        "subtitle": fm.get("subtitle", ""),
        "author": fm.get("author", ""),
        "meta": fm.get("meta", []),
    }
    if fm.get("title_es"):
        meta_obj["titleEs"] = fm["title_es"]

    out: list[str] = [
        "import type { BookSummary } from '../types/book'",
        "",
        f"export const {export_name}: BookSummary = {{",
        f"  slug: {esc(fm.get('slug', md_path.stem))},",
        "  meta: {",
    ]
    for k, v in meta_obj.items():
        if k == "meta":
            out.append("    meta: [")
            for item in v:
                out.append(f"      {esc(item)},")
            out.append("    ],")
        else:
            out.append(f"    {k}: {esc(v)},")
    out.append("  },")
    out.append("  toc: " + json.dumps(toc, ensure_ascii=False, indent=2) + ",")
    out.append("  sections: [")
    for sec in sections:
        out.append("    {")
        out.append(f"      id: {esc(sec['id'])},")
        out.append(f"      num: {esc(sec['num'])},")
        out.append(f"      title: {esc(sec['title'])},")
        out.append("      blocks: [")
        for block in sec["blocks"]:
            out.append(block_to_ts(block))
        out.append("      ],")
        out.append("    },")
    out.append("  ],")
    out.append("  keyConcepts: " + json.dumps(key_concepts, ensure_ascii=False, indent=2) + ",")
    out.append("  chronology: " + json.dumps(chronology, ensure_ascii=False, indent=2) + ",")
    out.append("  figures: " + json.dumps(figures, ensure_ascii=False, indent=2) + ",")
    out.append("  closing: {")
    out.append(f"    title: {esc(closing['title'])},")
    out.append("    lines: " + json.dumps(closing["lines"], ensure_ascii=False, indent=2) + ",")
    out.append(f"    highlight: {esc(closing['highlight'])},")
    out.append("  },")
    out.append("  footer: {")
    out.append(f"    line1: {esc(footer['line1'])},")
    out.append(f"    line2: {esc(footer['line2'])},")
    out.append("  },")
    out.append("}")
    out.append("")

    out_path.write_text("\n".join(out), encoding="utf-8")
    print(f"Wrote {out_path}")


TS_OVERRIDES: dict[str, tuple[str, str]] = {
    "universo-de-la-nada": ("universo-nada.ts", "universoNada"),
    "21-lessons": ("21-lessons.ts", "twentyOneLessons"),
}


def slug_to_export(slug: str) -> str:
    if slug in TS_OVERRIDES:
        return TS_OVERRIDES[slug][1]
    parts = slug.split("-")
    if not parts:
        return slug
    return parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])


def resolve_job(arg: str) -> tuple[Path, Path, str]:
    slug = arg.removesuffix(".md")
    md = ROOT / "summaries" / f"{slug}.md"
    if slug in TS_OVERRIDES:
        ts_name, export_name = TS_OVERRIDES[slug]
        ts = ROOT / "src" / "data" / ts_name
        return md, ts, export_name
    ts = ROOT / "src" / "data" / f"{slug}.ts"
    return md, ts, slug_to_export(slug)


def main() -> None:
    jobs: list[tuple[Path, Path, str]] = []
    if len(sys.argv) == 1:
        jobs = [
            (ROOT / "summaries/cosmos.md", ROOT / "src/data/cosmos.ts", "cosmos"),
            (ROOT / "summaries/wonderful-life.md", ROOT / "src/data/wonderful-life.ts", "wonderfulLife"),
        ]
    elif len(sys.argv) == 2:
        jobs = [resolve_job(sys.argv[1])]
    elif len(sys.argv) == 3 and sys.argv[1] == "--all":
        jobs = [resolve_job(p.stem) for p in sorted((ROOT / "summaries").glob("*.md"))]
    else:
        jobs = [(Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3])]
    for md, ts, name in jobs:
        if not md.exists():
            print(f"Skip (no MD): {md}", file=sys.stderr)
            continue
        convert(md, ts, name)


if __name__ == "__main__":
    main()
