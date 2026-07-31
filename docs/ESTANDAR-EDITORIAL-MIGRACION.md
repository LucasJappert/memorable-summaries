# Estándar editorial reutilizable y plan de migración

Documento de referencia para el estándar de redacción y el rollout libro a libro.

## Estándar (resumen)

| Ámbito | Regla |
|--------|-------|
| `title` (YAML) | Idioma **original** del libro |
| `title_es` (YAML) | Título **público en español** (hero: `Original — Traducción`) |
| `subtitle`, TOC `label`, `## title:` | **Siempre español**; label = `## title:` |
| Prosa, keys, conceptos, cronología, cierre | **Siempre español** |
| Nombres propios, taxones, siglas | Forma original; glosa la 1.ª vez si hace falta |
| Estilo | Audiencia general: término común → tecnicismo glosado; escena/pregunta → causa → consecuencia |
| Conectores | Al menos uno por sección (`por eso`, `de ahí que`, `entonces`, `pero`, …) |
| Puentes | `<!-- bridge -->` al final de cada `# capN` (excepto el último) |

**Desde A0:** el esqueleto registra título original vs título en español por capítulo. El Paso A usa solo los títulos en español en TOC y `## title:`.

## Pipeline de prompts

```
01a (esqueleto + metadatos título)
  → 01 (resumen MD)
  → 01b (fidelidad)
  → 01c (prosa seccional — no reescritura factual)
  → 01d (revisión editorial global)
  → lint-summary.py --strict
  → check-coverage.py
  → md-to-ts.py
  → npm run build
  → audio (solo si se pide y el MD está cerrado)
```

## Dos umbrales: migrado vs pulido

### Piso — «migrado» (lint)

| # | Gate | Validación |
|---|------|------------|
| M1 | Idioma de títulos | TOC / `## title:` / subtitle en ES; `title` original |
| M2 | Lint estricto | `python3 scripts/lint-summary.py <slug> --strict` → OK |
| M3 | App compilable | `python3 scripts/md-to-ts.py <slug>` + `npm run build` |

Útil como primer corte mecánico. **No** alcanza para publicar como “listo”.

### Meta — «pulido» (checklist completa)

| # | Gate | Validación |
|---|------|------------|
| P1 | Todo lo de migrado | M1–M3 |
| P2 | Prosa 01c | Sin listitis ni telegráfico; escena → causa → consecuencia; glosas |
| P3 | Editorial 01d | Sin calcos visibles (`paper`, `blank`, `newgenics` sueltos…); tono uniforme |
| P4 | Cobertura | `check-coverage.py` sin fallas duras; avisos de “corto” resueltos o justificados |
| P5 | Fidelidad 01b | Muestreo (≥3 caps + cierre) vs esqueleto/fuente; si falla → reescribir esos caps (o A0+A si es sistémico) |
| P6 | App final | `md-to-ts.py` + `npm run build` tras el MD cerrado |
| P7 | Audio | Opcional; **solo** cuando el MD está pulido |

**Regenerar desde epub** solo si el muestreo 01b falla o faltan tesis. Si el argumento está, el trabajo es **01c profundo + 01d**, no rehacer todo.

## Lint editorial (`scripts/lint-summary.py`)

| Severidad | Qué detecta | Bloquea exit |
|-----------|------------|--------------|
| **error** | TOC/`## title:`/subtitle inequívocamente en inglés | Sí |
| **aviso** | TOC ≠ `## title:`, conectores faltantes, extranjerismos evidentes, prosa (listitis, oraciones largas, …) | Solo con `--strict` |

```bash
# Gate por libro (obligatorio)
python3 scripts/lint-summary.py <slug> --strict

# Diagnóstico masivo — chequeo local; no gate de CI/deploy por defecto
python3 scripts/lint-summary.py --all --strict
```

Tests: `python3 -m unittest tests/test_lint_summary.py`

## Estado de la biblioteca

Piloto: `otherlands` (referencia de prosa).

**63/63** resúmenes (sin backups) en umbral **pulido**: 01b muestreo → 01c → 01d → `lint --strict` → coverage → `md-to-ts` → build de cierre del lote (2026-07-30).

Prioridades 1–4 del rollout: **completadas**.

Libros nuevos: seguir el pipeline completo con `--strict` desde el día 1.

## Qué NO hacer (deploy)

- **No** activar `lint-summary.py --all` como gate de CI/deploy (sí como chequeo local).
- **No** generar audio sobre un MD no pulido.
- **No** sobreajustar el lint a palabras de un solo libro: heurísticas conservadoras + tests.

## Criterio de cierre

- **Migrado:** M1–M3.
- **Pulido:** P1–P6 (P7 si se pidió audio).
