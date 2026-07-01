#!/usr/bin/env python3
"""Lint summaries/<slug>.md for structural and prose issues."""
from __future__ import annotations

import argparse
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"

PERSON_COLON = re.compile(
    r"(?:<span class=\"person\">[^<]+</span>|^[A-ZÁÉÍÓÚÑ][\wáéíóúñ]+):\s",
    re.M,
)
SEMICOLON_OR_DASH = re.compile(r"[;]|—.*—")
FRAGMENT_START = re.compile(
    r"^(?:Une|Son|Es|Era|Fue|Hay|Sin|Con|Para|Tras|Pero|Relatividad|Probabilidad)\s",
    re.I,
)


def norm(s: str) -> str:
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s.rstrip(".")


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


def parse_paragraphs(section: str) -> list[tuple[str, str]]:
    blocks: list[tuple[str, str]] = []
    for m in re.finditer(
        r"<!--\s*(paragraph(?:\s+lead)?|key)\s*-->\s*\n(.+?)(?=\n\n<!--|\n\n---|\Z)",
        section,
        re.S,
    ):
        blocks.append((m.group(1), m.group(2).strip()))
    return blocks


def parse_closing(section: str) -> tuple[list[str], str]:
    m = re.search(r"<!-- closing -->\s*(.+?)(?=\n---|\Z)", section, re.S)
    if not m:
        return [], ""
    raw = m.group(1).strip()
    hm = re.search(r"<!-- highlight -->(.+?)<!-- /highlight -->", raw, re.S)
    highlight = hm.group(1).strip() if hm else ""
    if hm:
        raw = raw[: hm.start()] + raw[hm.end() :]
    lines = [ln.strip() for ln in raw.splitlines() if ln.strip()]
    return lines, highlight


def has_finite_verb(sentence: str) -> bool:
    plain = re.sub(r"<[^>]+>", "", sentence)
    # crude Spanish verb heuristic
    return bool(
        re.search(
            r"\b(es|son|era|fue|fueron|hay|había|tiene|tienen|hace|hacen|"
            r"mostró|demostró|predice|describe|une|emerge|nacen|fluye|"
            r"puede|pueden|debe|deben|fue|era|está|están|fueron|"
            r"regaló|cambió|brilla|dice|siguen|buscamos|busca)\b",
            plain,
            re.I,
        )
    )


def lint_file(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    _, body = text, text
    if text.startswith("---"):
        end = text.index("---", 3)
        body = text[end + 3 :].lstrip("\n")

    issues: list[str] = []
    sections = split_sections(body)
    seen_sentences: dict[str, str] = {}

    for sid, section in sections:
        if sid in ("conceptos", "cronologia", "figuras", "footer", "Contenido"):
            continue

        if sid == "cierre":
            lines, highlight = parse_closing(section)
            if highlight and any(norm(l) == norm(highlight) for l in lines):
                issues.append(f"[cierre] highlight duplicado en lines: «{highlight[:60]}…»")
            before = len(lines)
            if highlight:
                # expect 2 before + 3 after = 5 lines total
                if before != 5:
                    issues.append(
                        f"[cierre] se esperan 5 líneas (2+highlight+3), hay {before}"
                    )
            continue

        blocks = parse_paragraphs(section)
        for kind, para in blocks:
            plain = re.sub(r"<[^>]+>", "", para)

            if kind.startswith("paragraph"):
                if PERSON_COLON.search(para):
                    issues.append(f"[{sid}] estilo telegráfico (Persona: …): «{plain[:70]}…»")
                if para.count("—") > 1 or ";" in para:
                    issues.append(f"[{sid}] muchos — o ; en un párrafo: «{plain[:70]}…»")
                for sent in re.split(r"(?<=[.!?])\s+", plain):
                    sent = sent.strip()
                    if len(sent.split()) < 6:
                        continue
                    if FRAGMENT_START.match(sent) and not has_finite_verb(sent):
                        issues.append(f"[{sid}] posible fragmento: «{sent[:70]}…»")
                    s = norm(sent)
                    if len(s.split()) >= 6:
                        if s in seen_sentences:
                            issues.append(
                                f"[duplicado] «{sent[:60]}…» (ya en {seen_sentences[s]})"
                            )
                        else:
                            seen_sentences[s] = sid

        if len(blocks) >= 2:
            last_para = re.sub(r"<[^>]+>", "", blocks[-2][1]) if blocks[-1][0] == "key" else ""
            key_text = re.sub(r"<[^>]+>", "", blocks[-1][1]) if blocks[-1][0] == "key" else ""
            if last_para and key_text and norm(last_para) == norm(key_text):
                issues.append(f"[{sid}] key repite el párrafo anterior")

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(description="Lint de summaries/*.md")
    parser.add_argument("slug", nargs="?", help="slug del libro (ej. seven-brief-lessons)")
    parser.add_argument("--all", action="store_true", help="lint todos los summaries")
    args = parser.parse_args()

    paths: list[Path] = []
    if args.all:
        paths = sorted(SUMMARIES.glob("*.md"))
    elif args.slug:
        p = SUMMARIES / f"{args.slug}.md"
        if not p.exists():
            print(f"No existe {p}", file=sys.stderr)
            return 1
        paths = [p]
    else:
        parser.print_help()
        return 1

    total = 0
    for path in paths:
        issues = lint_file(path)
        if issues:
            print(f"\n{path.name} ({len(issues)} avisos)")
            for issue in issues:
                print(f"  - {issue}")
            total += len(issues)
        else:
            print(f"{path.name}: OK")

    return 1 if total else 0


if __name__ == "__main__":
    raise SystemExit(main())
