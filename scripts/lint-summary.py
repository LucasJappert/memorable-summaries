#!/usr/bin/env python3
"""Lint summaries/<slug>.md for structural and prose issues."""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"

PERSON_COLON = re.compile(
    r"(?:<span class=\"person\">[^<]+</span>|^[A-ZÁÉÍÓÚÑ][\wáéíóúñ]+):\s",
    re.M,
)
SEMICOLON_OR_DASH = re.compile(r"[;]|—.*—")
FRAGMENT_START = re.compile(
    r"^(?:Une|Son|Es|Era|Fue|Hay|Sin|Con|Para|Tras|Pero|Aunque|Porque|Si|Como|Desde|Hasta|Ante|Bajo|Relatividad|Probabilidad)\s",
    re.I,
)
# 4+ items separated by commas in a single sentence usually means a list
CATALOGUE_PATTERN = re.compile(
    r"[^,]+,[^,]+,[^,]+,[^,]+,[^,]+|[^,]+,[^,]+,[^,]+,[^,]+", re.S
)
# Sequential "person" or "term" spans separated by commas/"y"
PERSON_LIST = re.compile(r"(?:<span class=\"person\">[^<]+</span>[^<]{0,15}){3,}", re.S)
TERM_LIST = re.compile(r"(?:<span class=\"term\">[^<]+</span>[^<]{0,15}){3,}", re.S)
# Sentence-initial "Etiqueta: dato" without finite verb in the label
SENTENCE_LABEL_COLON = re.compile(r"(?:^|[.!?]\s+)([A-ZÁÉÍÓÚÑ«\"][^:]{2,55}):\s")
VERB_IN_LABEL = re.compile(
    r"\b(es|son|era|fue|fueron|hay|había|propone|sostiene|muestra|afirma|enumera|"
    r"define|significa|implica|explica|describe|lista|resuelve|plantea|introduce|"
    r"requiere|permite|obtiene|combina|destaca|critica|rechaza|defiende|sugiere|"
    r"demuestra|confirma|predice|integra|distingue|postula|llama|presenta|aborda|"
    r"enfrenta|propone|reconoce|ilustra|formulan|convergen|operan|vuelven|ofrece|"
    r"explora|inicia|niega|convierte|llega|responde|revisa|invierte|examina|termina|"
    r"cierra|vivió|parece|muestran|refutan|conserva|empezó|resume|preguntaron|invocan|"
    r"encarna|elimina|atacaron|confronta|pensó|entrelazan|continúa|rompe|existe|surgen|"
    r"desafía|amplió|reconocerlo|está|llamó|sugiere)\b",
    re.I,
)
# Patterns that are almost always telegraphic when followed by colon
HARD_TELEGRAPHIC = re.compile(
    r"(?:^|[.!?]\s+)"
    r"(?:"
    r"(?:Primera|Segunda|Tercera|Cuarta|Quinta|Sexta|Séptima)\s+(?:definición|lección)"
    r"|(?:Primer|Segundo|Tercer|Cuarto)\s+pilar"
    r"|Ventajas\s+humanas"
    r"|Mitad\s+a\s+desechar"
    r"|El\s+efecto\s+de\b"
    r"|Activo\s+no\s+es\b"
    r"|Pregunta\s+clave"
    r"|Definición\s+operativa"
    r"|Argumento\s+por\s+defecto"
    r")\s*:\s",
    re.I,
)
# % vs. without naming both groups
BROKEN_PERCENT_VS = re.compile(
    r"\d+\s*%[^.]{0,80}\bvs\.?\s",
    re.I,
)
CLARIFIED_COMPARISON = re.compile(
    r"\b(grupo|frente a|en cambio|mientras|del que|quienes|comparado|respecto|"
    r"accidentes|terrorismo|agrarias|tempranas|UE|tráfico|bacterias|arqueas)\b",
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
        r"<!--\s*(paragraph(?:\s+lead)?|bridge|key)\s*-->\s*\n(.+?)(?=\n\n<!--|\n\n---|\Z)",
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


def split_sentences(plain: str) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", plain) if s.strip()]


def count_words(text: str) -> int:
    return len(re.sub(r"<[^>]+>", "", text).split())


def count_spans(text: str) -> int:
    return len(re.findall(r"<span[^>]+class=\"[^\"]+\"[^>]*>", text))


def check_long_sentences(sid: str, plain: str, issues: list[str]) -> None:
    for sent in split_sentences(plain):
        words = count_words(sent)
        if words > 25:
            issues.append(f"[{sid}] oración de {words} palabras (>25): «{sent[:70]}…»")


def check_span_density(sid: str, para: str, issues: list[str]) -> None:
    spans = count_spans(para)
    if spans > 5:
        issues.append(f"[{sid}] párrafo con {spans} spans (máx. 5): «{para[:70]}…»")
    for sent in split_sentences(para):
        sent_spans = count_spans(sent)
        if sent_spans > 2:
            issues.append(
                f"[{sid}] oración con {sent_spans} spans (>2): «{sent[:70]}…»"
            )


def check_listitis(sid: str, para: str, plain: str, issues: list[str]) -> None:
    if PERSON_LIST.search(para) or TERM_LIST.search(para):
        issues.append(f"[{sid}] posible catálogo de nombres/términos: «{plain[:70]}…»")
    for sent in split_sentences(plain):
        words = count_words(sent)
        if words < 8:
            continue
        # 4+ commas usually means a list of items
        if sent.count(",") >= 4:
            issues.append(
                f"[{sid}] oración con {sent.count(',')} comas: posible listitis: «{sent[:70]}…»"
            )


def check_prose_block(sid: str, kind: str, para: str, issues: list[str]) -> None:
    plain = re.sub(r"<[^>]+>", "", para)

    if PERSON_COLON.search(para):
        issues.append(f"[{sid}] estilo telegráfico (Persona: …): «{plain[:70]}…»")

    if HARD_TELEGRAPHIC.search(plain):
        issues.append(f"[{sid}] etiqueta telegráfica (…: dato): «{plain[:70]}…»")

    if kind.startswith("paragraph") or kind == "key":
        if para.count("—") > 1 or ";" in para:
            issues.append(f"[{sid}] muchos — o ; en un párrafo: «{plain[:70]}…»")

    if BROKEN_PERCENT_VS.search(plain) and not CLARIFIED_COMPARISON.search(plain):
        issues.append(f"[{sid}] comparación con % poco clara (vs.): «{plain[:70]}…»")

    for m in SENTENCE_LABEL_COLON.finditer(plain):
        label = m.group(1).strip()
        words = label.split()
        # Etiquetas cortas sin verbo (telegráfico típico: «Primera lección: …»)
        if len(words) < 2 or len(words) > 5:
            continue
        if VERB_IN_LABEL.search(label):
            continue
        if "«" in label or '"' in label:
            continue
        issues.append(
            f"[{sid}] posible etiqueta sin verbo («{label[:40]}…:»): «{plain[:70]}…»"
        )

    if kind.startswith("paragraph"):
        for sent in split_sentences(plain):
            if len(sent.split()) < 6:
                continue
            if FRAGMENT_START.match(sent) and not has_finite_verb(sent):
                issues.append(f"[{sid}] posible fragmento: «{sent[:70]}…»")

    if kind.startswith("paragraph"):
        check_long_sentences(sid, plain, issues)
        check_span_density(sid, para, issues)
        check_listitis(sid, para, plain, issues)


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
                issues.append(
                    f"[cierre] highlight duplicado en lines: «{highlight[:60]}…»"
                )
            before = len(lines)
            if highlight:
                if before != 5:
                    issues.append(
                        f"[cierre] se esperan 5 líneas (2+highlight+3), hay {before}"
                    )
            continue

        blocks = parse_paragraphs(section)
        for kind, para in blocks:
            check_prose_block(sid, kind, para, issues)
            plain = re.sub(r"<[^>]+>", "", para)

            if kind.startswith("paragraph"):
                for sent in re.split(r"(?<=[.!?])\s+", plain):
                    sent = sent.strip()
                    s = norm(sent)
                    if len(s.split()) >= 6:
                        if s in seen_sentences:
                            issues.append(
                                f"[duplicado] «{sent[:60]}…» (ya en {seen_sentences[s]})"
                            )
                        else:
                            seen_sentences[s] = sid

        if len(blocks) >= 2:
            last_para = (
                re.sub(r"<[^>]+>", "", blocks[-2][1]) if blocks[-1][0] == "key" else ""
            )
            key_text = (
                re.sub(r"<[^>]+>", "", blocks[-1][1]) if blocks[-1][0] == "key" else ""
            )
            if last_para and key_text and norm(last_para) == norm(key_text):
                issues.append(f"[{sid}] key repite el párrafo anterior")

    return issues


def main() -> int:
    parser = argparse.ArgumentParser(description="Lint de summaries/*.md")
    parser.add_argument(
        "slug", nargs="?", help="slug del libro (ej. seven-brief-lessons)"
    )
    parser.add_argument("--all", action="store_true", help="lint todos los summaries")
    args = parser.parse_args()

    paths: list[Path] = []
    if args.all:
        paths = sorted(
            p for p in SUMMARIES.glob("*.md") if not p.name.endswith(".skeleton.md")
        )
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
