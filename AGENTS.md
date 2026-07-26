# AGENTS.md — Instrucciones para agentes (Hermes, Cursor, etc.)

Este repo genera **resúmenes memorizables de libros** como app Vue 3.  
Cuando el usuario pida generar un resumen, HTML o vista de un libro, **seguí este documento** sin pedir más contexto.

---

## Disparadores (frases del usuario)

Actuá si el mensaje encaja con alguno de estos patrones:

- «Generame el html del libro *X*»
- «Generá el resumen de *X*»
- «Creá la vista de *X*»
- «Procesá *X*» / «Nuevo libro: *X*»

**Importante:** aunque diga «html», el output **principal** es `src/data/<slug>.ts` (app Vue).  
HTML standalone en `legacy/` solo si lo pide **explícitamente** («html standalone», «html suelto», «sin vue»).

---

## Idioma (obligatorio)

| Elemento | Idioma |
|----------|--------|
| **Todo el contenido** (resumen, capítulos, citas traducidas, conceptos, cronología, HTML/Vue) | **Español** |
| **Título del libro** (`meta.title`) | **Idioma original** del libro |
| **Traducción del título** (`meta.titleEs`) | Español, **solo si** el original no está en español |

### Formato del título en pantalla

- Libro en español → `title: "Un universo de la nada"` (sin `titleEs`)
- Libro en inglés → `title: "Sapiens: A Brief History of Humankind"` + `titleEs: "Sapiens: De animales a dioses"`
- El hero muestra: **Original — Traducción** (ej. `Sapiens: A Brief History of Humankind — Sapiens: De animales a dioses`)

**Traducir al español:** subtítulo, títulos de capítulos en TOC, nombres de secciones, párrafos, tarjetas, cierre.  
**Citas:** preferir traducción al español; si se cita en original, agregar traducción entre corchetes o usar solo la versión en español si consta en una edición traducida.

---

## Flujo automático (orquestación)

```
Usuario: "Generame el html del libro Sapiens"
        │
        ▼
[1] RESOLVER libro → slug, rutas
        │
        ▼
[2] ¿Existe summaries/<slug>.md?
    │
    ├─ NO → PASO A0 → PASO A (generar MD desde libro fuente)
    │
    └─ SÍ → ¿Está completo / actualizado?
            └─ Si el usuario pide regenerar contenido → PASO A0 → PASO A
        │
        ▼
[3] PASO A0 — esqueleto argumental (recomendado antes de redactar)
    │   docs/prompts/01a-esqueleto-argumental.md → summaries/<slug>.skeleton.md
        │
        ▼
[4] PASO A — MD desde libro, usando el esqueleto como guion
    │   docs/prompts/01-resumen-desde-libro.md → summaries/<slug>.md
        │
        ▼
[5] PASO B-fid — revisión de fidelidad y cobertura (contenido)
    │   docs/prompts/01b-revision-fidelidad.md   ← si no aprueba, reescribir y repetir
    │   python3 scripts/check-coverage.py <slug>  ← sin fallas duras (exit 0)
        │
        ▼
[6] PASO C — corrección mínima de prosa (obligatorio antes de md-to-ts)
    │   docs/prompts/01c-correccion-minima.md
    │   python3 scripts/lint-summary.py <slug>   ← debe salir OK (exit 0)
        │
        ▼
[7] PASO D (MD → src/data/<slug-corto>.ts) — preferir script:
    │   python3 scripts/md-to-ts.py <slug>
        │
        ▼
[8] INTEGRAR en src/books/catalog.ts (si es libro nuevo)
        │
        ▼
[9] PORTADA editorial — python3 scripts/extract-cover.py <slug>
    │   → public/covers/<slug>.jpg
        │
        ▼
[10] ARTE Memorable — docs/prompts/04-arte-visual.md
    │   scripts/art-prompts/<slug>.json + python3 scripts/generate-book-art.py <slug>
    │   → atmosphere + og + portada Memorable (backup .editorial.jpg)
        │
        ▼
[11] AUDIO (si hay key TTS) — md-to-narration.py --tts --mp3
        │
        ▼
[12] npm run build  (obligatorio, debe pasar)
        │
        ▼
[13] (Opcional) legacy/resumen-<slug>.html  ← solo si lo pidió
```

**No saltees pasos.** No mezcles extracción y maquetado en un solo archivo de salida.

---

## Paso 0 — Resolver el libro

### Entrada del usuario

El usuario puede decir: `Sapiens`, `sapiens`, `Un universo de la nada`, nombre parcial, etc.

### Buscar archivo fuente

Buscar en **`fuentes/`** (no commiteada, ver `.gitignore`):

```
fuentes/*.epub
fuentes/*.pdf
```

Matching fuzzy: comparar título del libro contra el nombre del archivo, case-insensitive.

| Archivo en disco | slug | export TS | archivo TS |
|------------------|------|-----------|------------|
| `Sapiens - Yuval Noah Harari.epub` | `sapiens` | `sapiens` | `src/data/sapiens.ts` |
| `universe_from_nothing.pdf` | `universo-de-la-nada` | `universoNada` | `src/data/universo-nada.ts` |
| `Seven Brief Lessons on Physics - Carlo Rovelli.epub` | `seven-brief-lessons` | `sevenBriefLessons` | `src/data/seven-brief-lessons.ts` |

### Reglas de slug

- **slug** (kebab-case): título corto en minúsculas, sin acentos, espacios → guiones
- **slug-corto** (archivo TS): puede omitir artículos (`un-universo-de-la-nada` → `universo-nada`)
- **export camelCase**: `sapiens`, `universoNada`, `sevenBriefLessons`
- **MD intermedio**: siempre `summaries/<slug>.md`

Si hay ambigüedad entre varios archivos, **preguntar** al usuario cuál usar.

---

## Paso A0 — Esqueleto argumental (recomendado)

**Leer:** `docs/prompts/01a-esqueleto-argumental.md`

Antes de redactar, mapear el **argumento** del libro para no perder ideas principales.

1. Extraer texto (si no está): `python3 scripts/extract-epub.py "<nombre o slug>"` → `.extracted/<slug>.txt`
2. Generar `summaries/<slug>.skeleton.md`: tesis global, hilo conductor y, por capítulo,
   `idea principal + por qué/evidencia + matiz + conexión + anclas`.

Este esqueleto es el **guion** del Paso A. Es un documento de trabajo (no se publica ni se convierte a TS).

---

## Paso A — Libro → `summaries/<slug>.md`

**Leer y seguir al pie de la letra:**

1. `docs/prompts/01-resumen-desde-libro.md`
2. `docs/templates/resumen-libro.template.md`
3. Ejemplo: `summaries/universo-de-la-nada.md`

**Acciones:**

1. **Extraer texto del libro** (obligatorio antes de resumir, si no lo hiciste en A0):
   ```bash
   python3 scripts/extract-epub.py "<nombre o slug>"
   # → .extracted/<slug>.txt
   ```
   - Busca `*.epub` y `*.pdf` en **`fuentes/`**; acepta nombre parcial (`sapiens`, `Homo Deus`)
   - Detecta EPUB real, PDF (aunque tenga extensión `.epub`) y MOBI disfrazado
   - MOBI/AZW: **no soportado** → pedir conversión a EPUB (Calibre) u otro archivo
   - Listar disponibles: `python3 scripts/extract-epub.py --list`
2. Leer `summaries/<slug>.skeleton.md` + `.extracted/<slug>.txt` por capítulos (no cargar todo de una si es muy largo)
3. Generar `summaries/<slug>.md` con **todos** los capítulos del índice original
4. **Cada capítulo transmite su tesis, no solo datos**: reflejar la `idea principal` del esqueleto
   (afirmación + porqué) y condensarla en un bloque `<!-- key -->` obligatorio
5. Incluir: prefacio, capítulos, conceptos clave, cronología, figuras, cierre, footer
6. **No inventar** citas ni cifras

**No generar** TypeScript ni HTML en este paso.

---

## Paso B-fid — Revisión de fidelidad y cobertura (obligatorio)

**Leer:** `docs/prompts/01b-revision-fidelidad.md`

Revisa **contenido** (no prosa): ¿cada capítulo captura su tesis?, ¿cobertura completa?, ¿nada inventado?
Devuelve secciones a reescribir. Si no aprueba, reescribir (con A0 + A) y repetir.

```bash
python3 scripts/check-coverage.py <slug>   # sin fallas duras (exit 0); los avisos son orientativos
```

`check-coverage.py` verifica: consistencia TOC↔secciones, `<!-- key -->` presente por capítulo,
capítulos no demasiado finos, y cobertura aproximada vs. la fuente.

---

## Paso C — Corrección mínima de prosa (obligatorio)

**Leer:** `docs/prompts/01c-correccion-minima.md`

Corregir redundancias, telegráfico y gramática en `# prefacio`, `# capN` y `# cierre`. No cambiar ideas ni citas.

```bash
python3 scripts/lint-summary.py <slug>   # debe terminar OK (exit 0)
```

Si hay avisos, corregir el `.md` y repetir. Luego `python3 scripts/md-to-ts.py <slug>` y `npm run build`.

---

## Paso B — MD → `src/data/<slug-corto>.ts`

**Leer y seguir al pie de la letra:**

1. `docs/prompts/02-vista-desde-resumen.md`
2. `src/types/book.ts`
3. Ejemplo: `src/data/universo-nada.ts`

**Acciones:**

1. **Preferir el script mecánico** (evita errores en `closing` y bloques):
   ```bash
   python3 scripts/md-to-ts.py <slug>
   ```
2. Si hace falta conversión manual, seguir `docs/prompts/02-vista-desde-resumen.md`
2. **No agregar contenido** que no esté en el `.md`
3. Secciones `# conceptos`, `# cronologia`, `# figuras`, `# cierre`, `# footer` → propiedades top-level, **no** van en `sections[]`

---

## Paso C — Integrar en la app

Si es un **libro nuevo** (no está en `src/App.vue`):

```ts
import { nombreExport } from './data/<slug-corto>'
const book = nombreExport
```

Cuando haya varios libros, migrar a router; por ahora reemplazar el import activo o preguntar al usuario.

---

## Paso D — Verificar

```bash
npm run build
```

Debe terminar sin errores. Si falla, corregir tipos antes de reportar éxito.

---

## Paso Arte — Atmósfera, portada Memorable y OG

**Leer:** `docs/prompts/04-arte-visual.md`

Después de la portada editorial (`extract-cover.py`) y con `LUCAS_AI_API_KEY` disponible:

1. Crear `scripts/art-prompts/<slug>.json` (estilo de serie + prompts del libro)
2. `python3 scripts/generate-book-art.py <slug>`
3. Salidas: `public/art/<slug>/atmosphere.jpg`, `public/art/<slug>/og.jpg`, Memorable en `public/covers/<slug>.jpg`, backup `public/covers/<slug>.editorial.jpg`

Si falta la API key: pedir `.env` (como TTS). No inventar imágenes ni saltar el paso en libros nuevos cuando la key esté disponible.

---

## Paso E — HTML standalone (solo bajo demanda)

Generar `legacy/resumen-<slug>.html` **únicamente** si el usuario pidió html standalone.

Referencia de estilos y estructura:

- `src/assets/styles.css`
- `resumen-universo-de-la-nada.html` (raíz, referencia legacy)

5. Reutilizar clases existentes: `.hero`, `.section`, `.concept-card`, `.quote`, `.timeline`, `.star-blue`, etc.
6. **Idioma:** contenido en español; título en hero = `Original — Traducción` si el libro no está en español (ver sección Idioma arriba)

---

## Archivos de referencia (mapa rápido)

| Qué | Dónde |
|-----|-------|
| Overview del pipeline | `docs/PIPELINE.md` |
| Prompt paso 1 | `docs/prompts/01-resumen-desde-libro.md` |
| Prompt TTS | `docs/prompts/03-audio-desde-resumen.md` |
| Arte visual | `docs/prompts/04-arte-visual.md` + `scripts/generate-book-art.py` |
| Plantilla MD | `docs/templates/resumen-libro.template.md` |
| Tipos | `src/types/book.ts` |
| Ejemplo TS completo | `src/data/universo-nada.ts` |
| Ejemplo MD | `summaries/universo-de-la-nada.md` |
| Estilos | `src/assets/styles.css` |
| Componentes Vue | `src/components/` |
| **Extractor epub** | `scripts/extract-epub.py` → `.extracted/<slug>.txt` |
| **Extractor portada** | `scripts/extract-cover.py` → `public/covers/<slug>.jpg` |

---

## Qué NO hacer

- ❌ Commitear `.epub`, `.pdf` ni libros fuente
- ❌ Saltear el `.md` intermedio y escribir TS directo desde el epub
- ❌ Inventar citas, fechas o porcentajes
- ❌ Cambiar estilos globales sin que el usuario lo pida
- ❌ Reportar éxito si `npm run build` falla

---

## Respuesta al usuario al terminar

Informar brevemente:

1. Slug y archivos creados/actualizados
2. Si el paso A fue necesario o ya existía el MD
3. Resultado de `npm run build`
4. Cómo verlo: `npm run dev`

Ejemplo:

> Listo. Generé `summaries/sapiens.md` desde el epub, convertí a `src/data/sapiens.ts`, actualicé `App.vue`. Build OK. Corré `npm run dev` para verlo.
