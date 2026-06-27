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
    ├─ NO → PASO A (generar MD desde libro fuente)
    │
    └─ SÍ → ¿Está completo / actualizado?
            └─ Si el usuario pide regenerar contenido → PASO A
        │
        ▼
[3] PASO B (MD → src/data/<slug-corto>.ts)
        │
        ▼
[4] INTEGRAR en src/App.vue (si es libro nuevo)
        │
        ▼
[5] npm run build  (obligatorio, debe pasar)
        │
        ▼
[6] (Opcional) legacy/resumen-<slug>.html  ← solo si lo pidió
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

## Paso A — Libro → `summaries/<slug>.md`

**Leer y seguir al pie de la letra:**

1. `docs/prompts/01-resumen-desde-libro.md`
2. `docs/templates/resumen-libro.template.md`
3. Ejemplo: `summaries/universo-de-la-nada.md`

**Acciones:**

1. **Extraer texto del libro** (obligatorio antes de resumir):
   ```bash
   python3 scripts/extract-epub.py "<nombre o slug>"
   # → .extracted/<slug>.txt
   ```
   - Busca `*.epub` y `*.pdf` en **`fuentes/`**; acepta nombre parcial (`sapiens`, `Homo Deus`)
   - Detecta EPUB real, PDF (aunque tenga extensión `.epub`) y MOBI disfrazado
   - MOBI/AZW: **no soportado** → pedir conversión a EPUB (Calibre) u otro archivo
   - Listar disponibles: `python3 scripts/extract-epub.py --list`
2. Leer `.extracted/<slug>.txt` por capítulos (no cargar todo de una si es muy largo)
3. Generar `summaries/<slug>.md` con **todos** los capítulos del índice original
4. Incluir: prefacio, capítulos, conceptos clave, cronología, figuras, cierre, footer
5. **No inventar** citas ni cifras

**No generar** TypeScript ni HTML en este paso.

---

## Paso B — MD → `src/data/<slug-corto>.ts`

**Leer y seguir al pie de la letra:**

1. `docs/prompts/02-vista-desde-resumen.md`
2. `src/types/book.ts`
3. Ejemplo: `src/data/universo-nada.ts`

**Acciones:**

1. Transformar el `.md` a `BookSummary` tipado
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
| Prompt paso 2 | `docs/prompts/02-vista-desde-resumen.md` |
| Plantilla MD | `docs/templates/resumen-libro.template.md` |
| Tipos | `src/types/book.ts` |
| Ejemplo TS completo | `src/data/universo-nada.ts` |
| Ejemplo MD | `summaries/universo-de-la-nada.md` |
| Estilos | `src/assets/styles.css` |
| Componentes Vue | `src/components/` |
| **Extractor epub** | `scripts/extract-epub.py` → `.extracted/<slug>.txt` |

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
