# Prompt 02 — Vista memorizable desde el resumen MD

Usá este prompt con un `summaries/<slug>.md` ya revisado.  
**Salida esperada:** `src/data/<slug-corto>.ts` (y opcionalmente HTML standalone).

---

## Instrucciones para la IA

Convertí el resumen Markdown estructurado en datos tipados para la app Vue 3 del proyecto.

### Archivos de referencia (leer antes de generar)

- `src/types/book.ts` — interfaces TypeScript
- `src/data/universo-nada.ts` — ejemplo completo
- `src/assets/styles.css` — estilos (solo si generás HTML)
- `legacy/resumen-universo-de-la-nada.html` — referencia visual HTML

### Reglas estrictas

1. **No agregues contenido** que no esté en el `.md`. Solo transformá formato.
1b. **Preferí `scripts/md-to-ts.py`** para la conversión mecánica. Si generás TS a mano, `closing.lines` **no** debe incluir el texto de `closing.highlight`.
2. **Respetá los tipos** de `BookSummary` y `ContentBlock`
3. **IDs de sección** = los del `.md` (prefacio, cap1, …)
4. **Idioma:** conservar `title` original + `titleEs` si existe; el resto ya debe estar en español en el `.md`
5. **HTML inline** permitido en `paragraph.html`, `key.html` y `list.items`:
   - Etiquetas: `<strong>`, `<em>`, `<sup>`
   - Marcadores semánticos: `<span class="term">`, `<span class="person">`, `<span class="num">`, `<span class="key-term">` (solo en bloques `key`)
6. **Export** con nombre camelCase: `export const sapiens: BookSummary = { ... }`
7. **Archivo** en `src/data/<slug-corto>.ts`

### Mapeo MD → TypeScript

| Bloque MD | Tipo TS |
|-----------|---------|
| Frontmatter | `meta` |
| `slug` | `slug` (identificador del libro para persistencia de lectura) |
| `title` | `meta.title` (idioma original) |
| `title_es` | `meta.titleEs` (opcional; solo si title no está en español) |
| Tabla `# Contenido` | `toc[]` |
| Sección `# capN` | `sections[]` con `blocks[]` |
| `<!-- paragraph -->` | `{ type: 'paragraph', html: '...' }` |
| `<!-- paragraph lead -->` | `{ type: 'paragraph', html: '...', variant: 'lead' }` |
| `<!-- quote -->` | `{ type: 'quote', text, attribution? }` |
| `<!-- key -->` | `{ type: 'key', html: '...' }` (sin «Clave:» en el texto) |
| `<!-- concept-grid -->` | `{ type: 'concept-grid', items: [{ icon?, title, description }] }` |
| `<!-- big-numbers -->` | `{ type: 'big-numbers', items: [{ value, label }] }` |
| `<!-- timeline -->` | `{ type: 'timeline', items: [{ year, text }] }` |
| `<!-- list -->` | `{ type: 'list', items: ['...'] }` |
| `# conceptos` | `keyConcepts[]` (extraer del concept-grid de esa sección) |
| `# cronologia` | `chronology[]` |
| `# figuras` | `figures[]` |
| `# cierre` | `closing: { title, lines[], highlight }` — `lines` = líneas del `<!-- closing -->` **sin** el bloque `<!-- highlight -->` |
| `# footer` | `footer: { line1, line2 }` |

### Secciones especiales

- `# conceptos`, `# cronologia`, `# figuras`, `# cierre`, `# footer` **no van** en `sections[]`
- Su contenido se mapea a las propiedades top-level de `BookSummary`
- Los capítulos normales sí van en `sections[]`
- En la app, **`closing` se muestra primero** (antes del prólogo/prefacio), aunque en el `.md` `# cierre` puede estar al inicio o al final del archivo

### Integración en la app

Después de crear el `.ts`, actualizá `src/App.vue`:

```ts
import { nombreLibro } from './data/nombre-libro'
const book = nombreLibro
```

(Cuando haya múltiples libros, migrar a router — por ahora reemplazar import.)

Después de crear el `.ts`, registrá el libro en `src/books/catalog.ts` (aparece en la biblioteca).

### Verificación

```bash
npm run build
```

Debe pasar sin errores de `vue-tsc`.

---

## Variante: HTML standalone (opcional)

Si se pide HTML en lugar de (o además de) Vue:

1. Reutilizá **exactamente** los estilos de `src/assets/styles.css`
2. Estructura: starfield → hero → **cierre (idea central)** → toc → sections → conceptos → cronologia → figuras → footer
3. Clases CSS existentes: `.section`, `.concept-card`, `.quote`, `.timeline`, etc.
4. Guardar en `legacy/resumen-<slug>.html`
5. **No duplicar lógica**: el `.md` sigue siendo la fuente; el HTML es otro target

---

## Ejemplo de invocación (usuario)

> Convertí `summaries/universo-de-la-nada.md` a `src/data/universo-nada.ts`.
> Seguí `src/types/book.ts` y el ejemplo `src/data/universo-nada.ts`.
> Reglas en `docs/prompts/02-vista-desde-resumen.md`.

---

## Checklist post-generación

- [ ] `npm run build` pasa
- [ ] TOC enlaza a todos los `#id`
- [ ] Citas tienen attribution cuando corresponde
- [ ] `closing.highlight` es la frase marcada en el MD
- [ ] No hay contenido inventado respecto al `.md`
