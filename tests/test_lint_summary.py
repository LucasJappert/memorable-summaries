#!/usr/bin/env python3
"""Tests unitarios para scripts/lint-summary.py (stdlib only)."""
from __future__ import annotations

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = ROOT / "scripts"


def _load_lint():
    spec = importlib.util.spec_from_file_location(
        "lint_summary", SCRIPTS / "lint-summary.py"
    )
    mod = importlib.util.module_from_spec(spec)
    sys.modules["lint_summary"] = mod
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


lint = _load_lint()


VALID_MINIMAL = """---
title: "Sapiens"
title_es: "Sapiens: De animales a dioses"
subtitle: "¿Cómo llegó Homo sapiens a dominar el planeta?"
author: "Yuval Noah Harari"
slug: sapiens-test
lang: es
---

# Contenido

| id | num | label |
|----|-----|-------|
| prefacio | 00 | Prefacio |
| cap1 | 01 | El animal más peligroso |
| conceptos | ✦ | Conceptos clave |
| cronologia | ◈ | Cronología |
| cierre | ★ | La idea central |

---

# prefacio

## num: Prefacio
## title: Prefacio

<!-- paragraph lead -->
¿Por qué domina el Homo sapiens? Harari plantea la pregunta central del libro.

<!-- paragraph -->
Por eso el autor recorre la historia desde la aparición de nuestra especie.

<!-- key -->
La historia humana es la historia de mitos compartidos.

---

# cap1

## num: 01
## title: El animal más peligroso

<!-- paragraph lead -->
¿Qué nos hace únicos entre los primates?

<!-- paragraph -->
De ahí que la capacidad de cooperar a gran escala explique nuestra expansión.

<!-- key -->
La cooperación masiva supera la fuerza individual.

---

# conceptos

## title: Conceptos clave

<!-- concept-grid -->

| title | description |
|-------|-------------|
| Revolución cognitiva | Por eso el lenguaje permitió mitos compartidos. |
| Agricultura | De ahí que la sedentarización cambió la demografía. |

---

# cronologia

## title: Cronología

<!-- timeline -->

| year | text |
|------|------|
| 70000 a.C. | Entonces aparece la revolución cognitiva. |

---

# cierre

## title: La idea central

<!-- closing -->
La historia humana es cooperación masiva.
Por eso los mitos compartidos unen millones de extraños.
<!-- highlight -->cooperar a escala es nuestro superpoder<!-- /highlight -->
Los imperios nacen de historias comunes.
El futuro depende de qué mitos elijamos.
La ciencia es un mito que funciona.

---
"""

INVALID_ENGLISH_TOC = """---
title: "Otherlands"
title_es: "Otros mundos"
subtitle: "Un viaje por ecosistemas extintos"
author: "Thomas Halliday"
slug: otherlands-test
lang: es
---

# Contenido

| id | num | label |
|----|-----|-------|
| cap1 | 01 | Thaw |
| cierre | ★ | La idea central |

---

# cap1

## num: 01
## title: Thaw

<!-- paragraph lead -->
¿Qué ocurrió al final del Pleistoceno?

<!-- paragraph -->
Por eso el hielo retrocedió y cambió los ecosistemas.

<!-- key -->
El deshielo transformó la estepa.

---

# cierre

## title: La idea central

<!-- closing -->
El pasado profundo avisa sobre el futuro.
Por eso reconstruir ecosistemas importa.
<!-- highlight -->el registro fósil es laboratorio<!-- /highlight -->
Los climas cambian con o sin humanos.
La extinción deja huellas en la roca.
Mirar atrás orienta decisiones presentes.

---
"""


class LintHelpersTest(unittest.TestCase):
    def test_is_clearly_english_article(self):
        self.assertTrue(lint.is_clearly_english("The Walled Garden"))
        self.assertTrue(lint.is_clearly_english("A Town Called Hope"))
        self.assertTrue(lint.is_clearly_english("Walled Garden"))
        self.assertTrue(lint.is_clearly_english("Birth of a Clinic"))
        self.assertTrue(lint.is_clearly_english("Transformation"))
        self.assertTrue(lint.is_clearly_english("Collaboration"))

    def test_is_clearly_english_spanish_ok(self):
        self.assertFalse(lint.is_clearly_english("El animal más peligroso"))
        self.assertFalse(lint.is_clearly_english("La casa de millones de años"))
        self.assertFalse(lint.is_clearly_english("Quanta"))

    def test_is_clearly_english_proper_name_ok(self):
        self.assertFalse(lint.is_clearly_english("Lebensunwertes Leben"))

    def test_toc_title_coherence(self):
        toc = lint.parse_toc(VALID_MINIMAL)
        self.assertIn("cap1", toc)
        self.assertEqual(toc["cap1"], "El animal más peligroso")
        _, body = lint.split_frontmatter(VALID_MINIMAL)
        sections = lint.split_sections(body)
        cap1 = next(s for sid, s in sections if sid == "cap1")
        self.assertEqual(lint.parse_section_title(cap1), "El animal más peligroso")

    def test_has_connector(self):
        self.assertTrue(lint.has_connector("Por eso el autor explica el argumento."))
        self.assertTrue(lint.has_connector("¿Qué ocurrió? Entonces cambió el clima."))
        self.assertFalse(lint.has_connector("¿Qué ocurrió con el clima?"))
        self.assertFalse(lint.has_connector("El universo se expande."))


class LintFileTest(unittest.TestCase):
    def _lint(self, content: str) -> list:
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".md", delete=False, encoding="utf-8"
        ) as f:
            f.write(content)
            path = Path(f.name)
        try:
            return lint.lint_file(path)
        finally:
            path.unlink(missing_ok=True)

    def test_valid_summary_no_errors(self):
        issues = self._lint(VALID_MINIMAL)
        errors = [i for i in issues if i.severity == "error"]
        self.assertEqual(errors, [])

    def test_english_toc_is_error(self):
        issues = self._lint(INVALID_ENGLISH_TOC)
        errors = [i.message for i in issues if i.severity == "error"]
        self.assertTrue(any("toc/cap1" in e and "inglés" in e for e in errors))
        self.assertTrue(any("cap1" in e and "title en inglés" in e for e in errors))

    def test_toc_title_mismatch_is_warning(self):
        content = VALID_MINIMAL.replace(
            "| cap1 | 01 | El animal más peligroso |",
            "| cap1 | 01 | El primate dominante |",
        )
        issues = self._lint(content)
        warnings = [i for i in issues if "TOC label" in i.message]
        self.assertTrue(warnings, [i.message for i in issues])

    def test_anglicism_warning(self):
        content = VALID_MINIMAL.replace(
            "Por eso el autor recorre",
            "El feedback del autor muestra",
        )
        issues = self._lint(content)
        self.assertTrue(
            any("extranjerismo" in i.message for i in issues),
            issues,
        )

    def test_english_auxiliary_text_is_error(self):
        content = VALID_MINIMAL.replace(
            "| Revolución cognitiva | Por eso el lenguaje permitió mitos compartidos. |",
            "| Walled Garden | The mind grows through shared stories. |",
        )
        issues = self._lint(content)
        errors = [i.message for i in issues if i.severity == "error"]
        self.assertTrue(
            any("[conceptos] texto visible en inglés" in e for e in errors),
            errors,
        )

    def test_missing_connector_warning(self):
        content = (
            VALID_MINIMAL.replace(
                "¿Por qué domina el Homo sapiens? Harari plantea la pregunta central del libro.",
                "Harari expone la pregunta central del libro.",
            )
            .replace(
                "Por eso el autor recorre la historia desde la aparición de nuestra especie.",
                "Se recorre la historia desde la aparición de nuestra especie.",
            )
            .replace(
                "De ahí que la capacidad de cooperar a gran escala explique nuestra expansión.",
                "La capacidad de cooperar a gran escala explica nuestra expansión.",
            )
            .replace(
                "¿Qué nos hace únicos entre los primates?",
                "Se analiza qué hace únicos a los primates.",
            )
        )
        issues = self._lint(content)
        self.assertTrue(
            any("sin conector" in i.message for i in issues),
            [i.message for i in issues],
        )


if __name__ == "__main__":
    unittest.main()
