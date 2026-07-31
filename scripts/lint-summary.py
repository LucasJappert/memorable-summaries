#!/usr/bin/env python3
"""Lint summaries/<slug>.md for structural, prose and editorial issues."""
from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SUMMARIES = ROOT / "summaries"

PERSON_COLON = re.compile(
    r"(?:<span class=\"person\">[^<]+</span>|^[A-ZÁÉÍÓÚÑ][\wáéíóúñ]+):\s",
    re.M,
)
SEMICOLON_OR_DASH = re.compile(r"[;]|—.*—")
FRAGMENT_START = re.compile(
    r"^(?:Une|Son|Es|Era|Fue|Hay|Relatividad|Probabilidad)\s",
    re.I,
)
CATALOGUE_PATTERN = re.compile(
    r"[^,]+,[^,]+,[^,]+,[^,]+,[^,]+|[^,]+,[^,]+,[^,]+,[^,]+", re.S
)
PERSON_LIST = re.compile(r"(?:<span class=\"person\">[^<]+</span>[^<]{0,15}){3,}", re.S)
TERM_LIST = re.compile(r"(?:<span class=\"term\">[^<]+</span>[^<]{0,15}){3,}", re.S)
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
BROKEN_PERCENT_VS = re.compile(
    r"\d+\s*%[^.]{0,80}\bvs\.?\s",
    re.I,
)
CLARIFIED_COMPARISON = re.compile(
    r"\b(grupo|frente a|en cambio|mientras|del que|quienes|comparado|respecto|"
    r"accidentes|terrorismo|agrarias|tempranas|UE|tráfico|bacterias|arqueas)\b",
    re.I,
)
TERM_SPAN = re.compile(
    r'<span class="term">([^<]+)</span>',
    re.I,
)
TERM_GLOSS_AFTER = re.compile(
    r"^(?:"
    r"\s*(?:"
    r"\([^)]{3,160}\)"
    r"|:\s+\S"
    r"|—\s+\S"
    r"|,\s+(?:es decir|o sea|esto es|significa|llamad[oa]s?|se conoce)\b"
    r"|,\s+(?:un[ao]?|el|la|los|las|esa?|ese|esto)\b"
    r")"
    r"|"
    r"(?:\s+\S+){1,3}\s*(?:"
    r"\([^)]{3,160}\)"
    r"|—\s+\S"
    r"|:\s+\S"
    r")"
    r")",
    re.I,
)
TERM_GLOSS_BEFORE = re.compile(
    r"(?:llamad[oa]s?|conocido como|conocido[as]? como|se conoce como|"
    r"es decir|o sea|esto es)\s+$",
    re.I,
)

# --- Estándar editorial (idioma y conectores) ---

SPANISH_MARKERS = re.compile(
    r"[áéíóúñ¿¡]|"
    r"\b(de|del|la|el|los|las|en|por|qué|cómo|cuándo|dónde|quién|"
    r"una|uno|con|para|desde|hasta|sobre|entre|más|menos|"
    r"qué|cuál|cuáles|ser|es|son|está|están|yacimiento|"
    r"capítulo|prefacio|epílogo|idea|central|clave|"
    r"viaje|mundo|tierra|historia|gen|evolución|universo|"
    r"pregunta|respuesta|autor|libro|capítulo)\b",
    re.I,
)

ENGLISH_ARTICLE = re.compile(r"^(The|A|An)\s+[A-Za-z]", re.I)

ENGLISH_FUNCTION_WORDS = frozenset(
    {
        "a",
        "an",
        "and",
        "are",
        "at",
        "beyond",
        "by",
        "for",
        "from",
        "in",
        "into",
        "is",
        "not",
        "of",
        "on",
        "the",
        "through",
        "to",
        "what",
        "with",
    }
)

# Palabras inequívocamente inglesas y frecuentes en títulos. La lista es
# deliberadamente general: no representa el índice de un libro concreto.
UNAMBIGUOUS_ENGLISH_WORDS = frozenset(
    {
        "birth",
        "blank",
        "brain",
        "called",
        "clone",
        "collaboration",
        "consumers",
        "contingency",
        "cycles",
        "deadline",
        "deluge",
        "depths",
        "die",
        "emergence",
        "enough",
        "families",
        "flowers",
        "foundation",
        "fuel",
        "future",
        "garden",
        "generations",
        "homeland",
        "house",
        "journey",
        "last",
        "loved",
        "mile",
        "millions",
        "mysteries",
        "mystery",
        "origins",
        "prologue",
        "rebirth",
        "reconciliation",
        "reconciliations",
        "seasons",
        "signals",
        "thaw",
        "town",
        "transformation",
        "truths",
        "walled",
        "wide",
        "worlds",
        "years",
    }
)

CONNECTORS = re.compile(
    r"\b("
    r"por eso|de ahí que|entonces|pero|sin embargo|porque|"
    r"esto explica|a partir de ahí|así que|por tanto|en cambio|"
    r"de modo que|de esta forma|por ello|no obstante|además|"
    r"por consiguiente|en consecuencia|desde entonces|"
    r"ahora bien|de hecho|incluso|también|finalmente|en suma|"
    r"por el contrario|aun así|a pesar de ello"
    r")\b",
    re.I,
)

OBVIOUS_ANGLICISMS = frozenset(
    {
        "feedback",
        "stakeholder",
        "stakeholders",
        "mindset",
        "know-how",
        "workshop",
        "workshops",
        "brainstorming",
        "brainstorm",
        "deadline",
        "deadlines",
        "briefing",
        "briefings",
        "insight",
        "insights",
        "benchmark",
        "benchmarks",
        "workaround",
        "workarounds",
    }
)

SKIP_SECTIONS = frozenset(
    {"conceptos", "cronologia", "figuras", "footer", "Contenido"}
)

META_SECTIONS = frozenset({"conceptos", "cronologia", "cierre"})


@dataclass(frozen=True)
class LintIssue:
    message: str
    severity: str = "warning"  # "error" | "warning"


def norm(s: str) -> str:
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s.rstrip(".")


def split_frontmatter(text: str) -> tuple[str, str]:
    if not text.startswith("---"):
        return "", text
    end = text.index("---", 3)
    return text[3:end].strip(), text[end + 3 :].lstrip("\n")


def parse_yaml_field(fm: str, key: str) -> str:
    m = re.search(rf"^{re.escape(key)}:\s*(.+)$", fm, re.M)
    if not m:
        return ""
    val = m.group(1).strip()
    if val.startswith('"') and val.endswith('"'):
        return val[1:-1]
    if val.startswith("'") and val.endswith("'"):
        return val[1:-1]
    return val


def parse_toc(body: str) -> dict[str, str]:
    m = re.search(
        r"# Contenido\s*\n(?:<!-- toc:.*?-->\s*\n)?\s*"
        r"\|[^\n]+\|\s*\n\|[-:\s|]+\|\s*\n((?:\|[^\n]+\|\s*\n)+)",
        body,
    )
    if not m:
        return {}
    toc: dict[str, str] = {}
    for row in m.group(1).strip().splitlines():
        cells = [c.strip() for c in row.strip("|").split("|")]
        if len(cells) >= 3:
            toc[cells[0]] = cells[2]
    return toc


def parse_section_title(section: str) -> str:
    m = re.search(r"^## title:\s*(.+)$", section, re.M)
    return m.group(1).strip() if m else ""


def is_clearly_english(text: str) -> bool:
    """Heurística conservadora: solo casos inequívocos."""
    text = text.strip()
    if not text or len(text) < 2:
        return False
    if SPANISH_MARKERS.search(text):
        return False
    if ENGLISH_ARTICLE.match(text):
        return True
    words = re.findall(r"[A-Za-z']+", text)
    if len(words) == 1:
        return words[0].lower() in UNAMBIGUOUS_ENGLISH_WORDS
    lower = [w.lower() for w in words]
    function_hits = sum(w in ENGLISH_FUNCTION_WORDS for w in lower)
    lexical_hits = sum(w in UNAMBIGUOUS_ENGLISH_WORDS for w in lower)
    if function_hits >= 2 or lexical_hits >= 2:
        return True
    if function_hits >= 1 and lexical_hits >= 1:
        return True
    return False


def strip_html(text: str) -> str:
    return re.sub(r"<[^>]+>", "", text)


def has_connector(text: str) -> bool:
    plain = strip_html(text)
    return bool(CONNECTORS.search(plain))


def extract_table_cells(section: str, marker: str) -> list[str]:
    m = re.search(
        rf"<!--\s*{marker}\s*-->\s*\n(?:\|.+\|\s*\n\|[-| ]+\|\s*\n)?((?:\|.+\|\s*\n)+)",
        section,
        re.S,
    )
    if not m:
        return []
    cells: list[str] = []
    for row in m.group(1).strip().splitlines():
        parts = [c.strip() for c in row.strip("|").split("|")]
        cells.extend(parts)
    return cells


def check_anglicisms_in_text(
    sid: str, text: str, issues: list[LintIssue], *, hard_only: bool = False
) -> None:
    plain = strip_html(text)
    for word in re.findall(r"\b[a-zA-Z][a-zA-Z'-]{2,}\b", plain):
        low = word.lower()
        if low not in OBVIOUS_ANGLICISMS:
            continue
        start = plain.lower().find(low)
        ctx = plain[max(0, start - 30) : start + len(word) + 40]
        if re.search(rf"\([^)]{{3,80}}{re.escape(word)}[^)]*\)", ctx, re.I):
            continue
        if re.search(
            rf"{re.escape(word)}[^.]{{0,30}}(?:es decir|o sea|significa|llamad)",
            ctx,
            re.I,
        ):
            continue
        issues.append(
            LintIssue(
                f"[{sid}] posible extranjerismo sin glosa: «{word}»",
                severity="warning",
            )
        )


def check_editorial_language(
    fm: str, body: str, sections: list[tuple[str, str]], issues: list[LintIssue]
) -> None:
    subtitle = parse_yaml_field(fm, "subtitle")
    if subtitle and is_clearly_english(subtitle):
        issues.append(
            LintIssue(
                f"[meta] subtitle en inglés: «{subtitle[:60]}»",
                severity="error",
            )
        )

    toc = parse_toc(body)
    for sid, label in toc.items():
        if sid in ("conceptos", "cronologia", "figuras", "footer", "cierre"):
            if sid in ("conceptos", "cronologia") and is_clearly_english(label):
                issues.append(
                    LintIssue(
                        f"[toc/{sid}] label en inglés: «{label}»",
                        severity="error",
                    )
                )
            continue
        if sid.startswith(("cap", "prefacio", "epilogo")) and is_clearly_english(label):
            issues.append(
                LintIssue(
                    f"[toc/{sid}] label en inglés: «{label}»",
                    severity="error",
                )
            )

    for sid, section in sections:
        if sid in ("Contenido", "footer"):
            continue
        title = parse_section_title(section)
        if not title:
            continue
        if sid.startswith(("cap", "prefacio", "epilogo", "cierre")) and is_clearly_english(
            title
        ):
            issues.append(
                LintIssue(
                    f"[{sid}] ## title en inglés: «{title}»",
                    severity="error",
                )
            )
        toc_label = toc.get(sid, "")
        if toc_label and title and norm(toc_label) != norm(title):
            issues.append(
                LintIssue(
                    f"[{sid}] TOC label ≠ ## title: «{toc_label}» vs «{title}»",
                    severity="warning",
                )
            )

        if sid in ("conceptos", "cronologia", "figuras"):
            marker = {
                "conceptos": "concept-grid",
                "cronologia": "timeline",
                "figuras": "figures",
            }[sid]
            for cell in extract_table_cells(section, marker):
                if is_clearly_english(cell):
                    issues.append(
                        LintIssue(
                            f"[{sid}] texto visible en inglés: «{cell[:60]}»",
                            severity="error",
                        )
                    )
                check_anglicisms_in_text(sid, cell, issues)


def check_connectors(
    sid: str, section: str, blocks: list[tuple[str, str]], issues: list[LintIssue]
) -> None:
    if sid == "cierre":
        lines, _ = parse_closing(section)
        text = " ".join(lines)
        if text and not has_connector(text):
            issues.append(
                LintIssue(
                    f"[{sid}] cierre sin conector de progresión",
                    severity="warning",
                )
            )
        check_anglicisms_in_text(sid, text, issues)
        return

    prose = " ".join(p for k, p in blocks if k.startswith("paragraph") or k == "key")
    if prose and not has_connector(prose):
        issues.append(
            LintIssue(
                f"[{sid}] sección sin conector de progresión",
                severity="warning",
            )
        )
    for _, para in blocks:
        if para:
            check_anglicisms_in_text(sid, para, issues)


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


def check_long_sentences(sid: str, plain: str, issues: list[LintIssue]) -> None:
    for sent in split_sentences(plain):
        words = count_words(sent)
        if words > 25:
            issues.append(
                LintIssue(
                    f"[{sid}] oración de {words} palabras (>25): «{sent[:70]}…»"
                )
            )


def check_span_density(sid: str, para: str, issues: list[LintIssue]) -> None:
    spans = count_spans(para)
    if spans > 5:
        issues.append(
            LintIssue(f"[{sid}] párrafo con {spans} spans (máx. 5): «{para[:70]}…»")
        )
    for sent in split_sentences(para):
        sent_spans = count_spans(sent)
        if sent_spans > 2:
            issues.append(
                LintIssue(
                    f"[{sid}] oración con {sent_spans} spans (>2): «{sent[:70]}…»"
                )
            )


def term_has_gloss(para: str, match: re.Match[str]) -> bool:
    before = para[max(0, match.start() - 60) : match.start()]
    after = para[match.end() : match.end() + 100]
    if TERM_GLOSS_AFTER.search(after):
        return True
    if TERM_GLOSS_BEFORE.search(before):
        return True
    if re.match(r"^,\s+(?:un[ao]?|el|la|los|las|esa?|ese|esto)\b", after, re.I):
        return True
    return False


def check_unexplained_terms(
    sid: str, para: str, seen_terms: set[str], issues: list[LintIssue]
) -> int:
    new_count = 0
    for m in TERM_SPAN.finditer(para):
        term = re.sub(r"\s+", " ", m.group(1)).strip().lower()
        term = term.strip("«»\"'")
        if not term:
            continue
        if term in seen_terms:
            continue
        seen_terms.add(term)
        new_count += 1
        if not term_has_gloss(para, m):
            issues.append(
                LintIssue(
                    f"[{sid}] término sin glosa en 1.ª aparición: «{m.group(1)[:50]}»"
                )
            )
    if new_count > 3:
        issues.append(
            LintIssue(
                f"[{sid}] {new_count} términos técnicos nuevos en un párrafo "
                f"(máx. orientativo: 3)"
            )
        )
    return new_count


def check_listitis(sid: str, para: str, plain: str, issues: list[LintIssue]) -> None:
    if PERSON_LIST.search(para) or TERM_LIST.search(para):
        issues.append(
            LintIssue(f"[{sid}] posible catálogo de nombres/términos: «{plain[:70]}…»")
        )
    for sent in split_sentences(plain):
        words = count_words(sent)
        if words < 8:
            continue
        if sent.count(",") >= 4:
            issues.append(
                LintIssue(
                    f"[{sid}] oración con {sent.count(',')} comas: posible listitis: «{sent[:70]}…»"
                )
            )


def check_prose_block(
    sid: str, kind: str, para: str, issues: list[LintIssue]
) -> None:
    plain = re.sub(r"<[^>]+>", "", para)

    if PERSON_COLON.search(para):
        issues.append(
            LintIssue(f"[{sid}] estilo telegráfico (Persona: …): «{plain[:70]}…»")
        )

    if HARD_TELEGRAPHIC.search(plain):
        issues.append(
            LintIssue(f"[{sid}] etiqueta telegráfica (…: dato): «{plain[:70]}…»")
        )

    if kind.startswith("paragraph") or kind == "key":
        if para.count("—") > 1 or ";" in para:
            issues.append(
                LintIssue(f"[{sid}] muchos — o ; en un párrafo: «{plain[:70]}…»")
            )

    if BROKEN_PERCENT_VS.search(plain) and not CLARIFIED_COMPARISON.search(plain):
        issues.append(
            LintIssue(f"[{sid}] comparación con % poco clara (vs.): «{plain[:70]}…»")
        )

    for m in SENTENCE_LABEL_COLON.finditer(plain):
        label = m.group(1).strip()
        words = label.split()
        if len(words) < 2 or len(words) > 5:
            continue
        if VERB_IN_LABEL.search(label):
            continue
        if "«" in label or '"' in label:
            continue
        issues.append(
            LintIssue(
                f"[{sid}] posible etiqueta sin verbo («{label[:40]}…:»): «{plain[:70]}…»"
            )
        )

    if kind.startswith("paragraph"):
        for sent in split_sentences(plain):
            if len(sent.split()) < 6:
                continue
            if FRAGMENT_START.match(sent) and not has_finite_verb(sent):
                issues.append(LintIssue(f"[{sid}] posible fragmento: «{sent[:70]}…»"))

    if kind.startswith("paragraph"):
        check_long_sentences(sid, plain, issues)
        check_span_density(sid, para, issues)
        check_listitis(sid, para, plain, issues)


def lint_file(path: Path) -> list[LintIssue]:
    text = path.read_text(encoding="utf-8")
    fm, body = split_frontmatter(text)
    if not fm:
        fm, body = "", text

    issues: list[LintIssue] = []
    sections = split_sections(body)
    seen_sentences: dict[str, str] = {}
    seen_terms: set[str] = set()

    check_editorial_language(fm, body, sections, issues)

    for sid, section in sections:
        if sid in SKIP_SECTIONS:
            continue

        if sid == "cierre":
            lines, highlight = parse_closing(section)
            if highlight and any(norm(l) == norm(highlight) for l in lines):
                issues.append(
                    LintIssue(
                        f"[cierre] highlight duplicado en lines: «{highlight[:60]}…»"
                    )
                )
            before = len(lines)
            if highlight:
                if before != 5:
                    issues.append(
                        LintIssue(
                            f"[cierre] se esperan 5 líneas (2+highlight+3), hay {before}"
                        )
                    )
            check_connectors(sid, section, [], issues)
            continue

        blocks = parse_paragraphs(section)
        section_new_terms = 0
        for kind, para in blocks:
            check_prose_block(sid, kind, para, issues)
            plain = re.sub(r"<[^>]+>", "", para)

            if kind.startswith("paragraph"):
                section_new_terms += check_unexplained_terms(
                    sid, para, seen_terms, issues
                )
                for sent in re.split(r"(?<=[.!?])\s+", plain):
                    sent = sent.strip()
                    s = norm(sent)
                    if len(s.split()) >= 6:
                        if s in seen_sentences:
                            issues.append(
                                LintIssue(
                                    f"[duplicado] «{sent[:60]}…» (ya en {seen_sentences[s]})"
                                )
                            )
                        else:
                            seen_sentences[s] = sid

        if section_new_terms > 3 and sid.startswith("cap"):
            issues.append(
                LintIssue(
                    f"[{sid}] {section_new_terms} términos técnicos nuevos en la sección "
                    f"(máx. orientativo: 3 en prosa)"
                )
            )

        if len(blocks) >= 2:
            last_para = (
                re.sub(r"<[^>]+>", "", blocks[-2][1]) if blocks[-1][0] == "key" else ""
            )
            key_text = (
                re.sub(r"<[^>]+>", "", blocks[-1][1]) if blocks[-1][0] == "key" else ""
            )
            if last_para and key_text and norm(last_para) == norm(key_text):
                issues.append(LintIssue(f"[{sid}] key repite el párrafo anterior"))

        check_connectors(sid, section, blocks, issues)

    return issues


def format_issues(issues: list[LintIssue]) -> tuple[int, int]:
    errors = sum(1 for i in issues if i.severity == "error")
    warnings = sum(1 for i in issues if i.severity == "warning")
    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description="Lint de summaries/*.md")
    parser.add_argument(
        "slug", nargs="?", help="slug del libro (ej. seven-brief-lessons)"
    )
    parser.add_argument("--all", action="store_true", help="lint todos los summaries")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="avisos también fallan (exit 1); por defecto solo errores inequívocos",
    )
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

    total_errors = 0
    total_warnings = 0
    for path in paths:
        issues = lint_file(path)
        errors, warnings = format_issues(issues)
        if issues:
            print(f"\n{path.name} ({errors} errores, {warnings} avisos)")
            for issue in issues:
                tag = "ERROR" if issue.severity == "error" else "aviso"
                print(f"  - [{tag}] {issue.message}")
            total_errors += errors
            total_warnings += warnings
        else:
            print(f"{path.name}: OK")

    if total_errors:
        print(f"\nTotal: {total_errors} errores, {total_warnings} avisos")
        return 1
    if args.strict and total_warnings:
        print(f"\nTotal: 0 errores, {total_warnings} avisos (--strict)")
        return 1
    if total_warnings:
        print(f"\nTotal: 0 errores, {total_warnings} avisos (no bloquean)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
