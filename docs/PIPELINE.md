# Pipeline de generación de resúmenes

> **Punto de entrada para agentes:** leer [`AGENTS.md`](../AGENTS.md) primero.  
> Con eso basta que el usuario diga «Generame el html del libro X».

Flujo en **dos pasos** para que cualquier IA pueda reproducir resúmenes memorizables con formato consistente.

```
Libro (.epub / .pdf / texto)
        │
        ▼  scripts/extract-epub.py  (epub → .extracted/<slug>.txt)
        │
        ▼  Prompt 01a — docs/prompts/01a-esqueleto-argumental.md
        │
summaries/<slug>.skeleton.md ← esqueleto argumental (guion de trabajo, no se publica)
        │
        ▼  Prompt 01 — docs/prompts/01-resumen-desde-libro.md  (usa el esqueleto)
        │
summaries/<slug>.md          ← fuente de verdad intermedia (humana + IA)
        │
        ▼  Prompt 01b — docs/prompts/01b-revision-fidelidad.md  (contenido)
        │  python3 scripts/check-coverage.py <slug>  (sin fallas duras)
        │
        ▼  Prompt 01c — docs/prompts/01c-correccion-minima.md  (prosa seccional)
        │
        ▼  Prompt 01d — docs/prompts/01d-revision-editorial.md  (global, idioma/TOC)
        │  python3 scripts/lint-summary.py <slug> [--strict]  (debe pasar)
        │
        ▼  scripts/md-to-ts.py  (preferir sobre IA manual)
        │
src/data/<slug>.ts           ← datos tipados para la app Vue
        │
        ▼  (opcional)
legacy/<slug>.html           ← HTML standalone con el mismo CSS
```

## Por qué estos pasos

| Paso | Rol | Ventaja |
|------|-----|---------|
| **1a → `.skeleton.md`** | Mapear el argumento antes de redactar | Fija tesis, títulos original/español, cadena lógica y cobertura. |
| **1 → `.md`** | Extraer y condensar el libro | Revisable, editable, barato de iterar. Separás *contenido* de *presentación*. |
| **1b → fidelidad** | Revisión de contenido con rúbrica | Detecta capítulos sin tesis, cobertura incompleta o datos inventados; puede pedir reescritura. |
| **1c → pulido seccional** | Corrección mínima de prosa por sección | Elimina repeticiones y telegráfico sin cambiar la esencia. |
| **1d → editorial global** | Idioma, TOC/títulos en español, tono uniforme | Asegura estándar reutilizable sin convertir 01c en reescritura factual. |
| **2 → `.ts` / `.html`** | Maquetar para memorizar | `md-to-ts.py` mecánico; prompt 02 solo si hace falta. |
| **3 → `audio/*.mp3`** | Narración TTS de un resumen | Un `.md` por vez; ver `docs/prompts/03-audio-desde-resumen.md` |
| **4 → arte visual** | Atmósfera + portada Memorable + OG | `docs/prompts/04-arte-visual.md` + `scripts/generate-book-art.py` |

> **1b vs 1c vs 1d.** `1b` mira *qué dice* el resumen; `1c` mira *cómo está escrito* cada sección;
> `1d` mira el *documento entero* (español visible, TOC, secciones auxiliares y tono). Primero fidelidad, después estilo seccional, después editorial global.

Si mezclás extracción y maquetado en un solo prompt, la IA suele:
- perder capítulos o conceptos clave,
- inventar citas,
- cambiar el formato en cada libro.

El `.md` intermedio actúa como **contrato**: si el paso 1 respeta la plantilla, el paso 2 es casi mecánico.

## Archivos del circuito

| Archivo | Propósito |
|---------|-----------|
| `docs/templates/resumen-libro.template.md` | Esquema que debe seguir todo resumen intermedio |
| `docs/prompts/01a-esqueleto-argumental.md` | Prompt para mapear el argumento → `<slug>.skeleton.md` |
| `docs/prompts/01-resumen-desde-libro.md` | Prompt para generar el `.md` desde el libro (usa el esqueleto) |
| `docs/prompts/01b-revision-fidelidad.md` | Revisión de contenido: fidelidad, cobertura, argumento |
| `docs/prompts/01c-correccion-minima.md` | Corrección mínima por sección (redundancias, claridad) |
| `docs/prompts/01d-revision-editorial.md` | Revisión editorial global (idioma, TOC, tono) |
| `docs/ESTANDAR-EDITORIAL-MIGRACION.md` | Estándar editorial + umbrales migrado/pulido (biblioteca ya pulida) |
| `docs/prompts/02-vista-desde-resumen.md` | Prompt para generar `src/data/*.ts` (y opcionalmente HTML) |
| `docs/prompts/03-audio-desde-resumen.md` | Prompt TTS: MD → OmniVoice → `public/audio/<slug>.mp3` |
| `docs/prompts/04-arte-visual.md` | Atmósfera / Memorable / OG vía lucas-ai-api |
| `scripts/generate-book-art.py` | Genera `public/art/<slug>/` + Memorable cover |
| `scripts/md-to-ts.py` | Conversor mecánico MD → TS (preferido para Paso B) |
| `scripts/check-coverage.py` | Gate de contenido: TOC↔secciones, key por capítulo, capítulos finos |
| `scripts/lint-summary.py` | Lint de prosa + estándar editorial (TOC, idioma, conectores) |
| `tests/test_lint_summary.py` | Tests unitarios del lint editorial |
| `summaries/<slug>.md` | Un archivo por libro (generado por IA, revisable por vos) |
| `src/types/book.ts` | Tipos TypeScript — referencia del modelo de datos |
| `src/data/<slug>.ts` | Datos consumidos por la app |
| `src/assets/styles.css` | Estilos compartidos (tema oscuro, tarjetas, timeline) |

## Convención de nombres

- **slug**: kebab-case del título corto → `universo-de-la-nada`, `sapiens`, `seven-brief-lessons`
- **Resumen MD**: `summaries/universo-de-la-nada.md`
- **Datos Vue**: `src/data/universo-nada.ts` (export `universoNada`)

## Checklist por libro nuevo

1. [ ] Colocar el libro fuente en `fuentes/` (epub/pdf) — **no commitear**
2. [ ] Extraer texto: `python3 scripts/extract-epub.py "<libro>"`
3. [ ] Paso A0: `01a-esqueleto-argumental.md` → `summaries/<slug>.skeleton.md` (con títulos original/español)
4. [ ] Ejecutar prompt 01 con la plantilla y el esqueleto → `summaries/<slug>.md`
5. [ ] Paso B-fid: `01b-revision-fidelidad.md` + `python3 scripts/check-coverage.py <slug>` (sin fallas duras)
6. [ ] Revisar: citas, cifras, nombres, orden de capítulos
7. [ ] Paso C: `01c-correccion-minima.md` (por sección)
8. [ ] Paso C2: `01d-revision-editorial.md` (global) + `python3 scripts/lint-summary.py <slug> --strict` (exit 0)
9. [ ] `python3 scripts/md-to-ts.py <slug>` → `src/data/<slug-corto>.ts`
10. [ ] Registrar el libro en `src/books/catalog.ts` (cuando haya varios)
11. [ ] Portada editorial: `python3 scripts/extract-cover.py <slug>`
12. [ ] Arte Memorable: `docs/prompts/04-arte-visual.md` + `python3 scripts/generate-book-art.py <slug>`
13. [ ] `npm run build` para verificar tipos
14. [ ] (Opcional) Audio TTS si hay key

> **Gate de lint:** por libro usar `--strict` (exit 0). Toda la biblioteca está en umbral **pulido**
> (`docs/ESTANDAR-EDITORIAL-MIGRACION.md`). `lint-summary.py --all` es diagnóstico local, no gate de CI/deploy.

## Principios de diseño (memorización)

El contenido del `.md` debe priorizar:

0. **Idioma** — todo visible en español; solo `title` (YAML) en idioma original + `title_es` si aplica (ver `AGENTS.md`)
1. **Argumento primero** — cada capítulo transmite su *tesis y su porqué*, no solo datos; las anclas
   refuerzan el argumento, no lo reemplazan (idea principal en el bloque `<!-- key -->`)
2. **Chunking** — un concepto por tarjeta, un capítulo = 2–4 párrafos
3. **Repetición espaciada visual** — conceptos globales al final + repetidos en capítulos
4. **Anclas mnemotécnicas** — cifras grandes (`~70%`), fechas en cronología, citas literales
5. **Contraste** — comparar teorías (ej. diseño inteligente vs principio antrópico)
6. **Idea central** — bloque de cierre con la tesis en 6 líneas
7. **Audiencia general** — término común primero, tecnicismo glosado, escena → causa → consecuencia

## Ejemplo

Ver `summaries/universo-de-la-nada.md` (generado a partir del resumen existente).
