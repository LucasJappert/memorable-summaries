# Prompt 01 — Resumen intermedio desde el libro

Usá este prompt con el libro fuente (epub, pdf o texto pegado).  
**Salida esperada:** un único archivo `summaries/<slug>.md` siguiendo la plantilla.

---

## Instrucciones para la IA

Sos un editor especializado en resúmenes para **memorización activa**. Tu tarea es leer el libro proporcionado y producir un archivo Markdown estructurado.

### Reglas estrictas

1. **Seguí exactamente** el esquema de `docs/templates/resumen-libro.template.md`
2. **No inventes** citas, fechas ni cifras. Si no aparecen en el libro, omití el bloque o marcá `(no consta en el texto)`
3. **Un capítulo del libro = una sección `# capN`** con el mismo orden que el índice original
4. **Máximo 3–4 párrafos** por sección; priorizá ideas sobre detalle anecdótico
5. **Incluí siempre** (si el libro lo permite): conceptos clave, cronología, figuras, cierre
6. **Frontmatter YAML** al inicio con title, title_es (si aplica), subtitle, author, meta, slug, lang: es
7. **Tabla de contenidos** completa con ids en kebab-case (`cap1`, `cap2`, …)
8. **Idioma:** todo el contenido en **español**. Excepción: `title` en idioma original; si no es español, agregar `title_es` con la traducción

### Reglas de idioma

| Campo / bloque | Regla |
|----------------|-------|
| `title` | Idioma original del libro |
| `title_es` | Traducción al español del título; **omitir** si el original ya está en español |
| `subtitle`, capítulos, párrafos, conceptos, cronología, cierre | **Siempre español** |
| Citas | Español (traducir si hace falta; no inventar, basarse en edición ES si existe) |
| Nombres propios (autores, personajes) | Forma original o la más usada en español |

### Bloques disponibles (usar comentarios HTML como marcadores)

| Marcador | Cuándo usarlo |
|----------|---------------|
| `<!-- paragraph -->` | Texto narrativo. Negrita para términos clave. |
| `<!-- quote -->` | Citas textuales o casi textuales del autor. Formato `> texto` + `— Autor` |
| `<!-- key -->` | Una frase **Clave:** al final de secciones densas |
| `<!-- concept-grid -->` | Tabla icon\|title\|description — comparaciones, triadas, definiciones |
| `<!-- big-numbers -->` | Tabla value\|label — porcentajes, magnitudes, órdenes de grandeza |
| `<!-- timeline -->` | Tabla year\|text — futuro del universo, historia de descubrimientos |
| `<!-- list -->` | Viñetas con **término** — definición |
| `<!-- figures -->` | Tabla name\|role — personajes históricos |
| `<!-- closing -->` | 6 líneas + `<!-- highlight -->` para la frase central |

### Criterios de memorización

- Cada **concept-grid** debe tener 2–4 ítems (nunca 1 solo)
- Repetí conceptos importantes en `# conceptos` aunque ya aparezcan en capítulos
- Preferí **cifras redondas** y **fechas** como anclas
- El **cierre** debe responder: «¿Cuál es la tesis del autor en una frase?»
- Usá emojis solo en iconos de concept-grid (opcional, máx. 1 por tarjeta)

### Entrada

```
[Adjuntar o pegar el libro / capítulos / notas]
Slug deseado: <slug>
```

### Salida

Un único bloque de código con path sugerido:

```
summaries/<slug>.md
```

No generes HTML ni TypeScript en este paso.

---

## Ejemplo de invocación (usuario)

> Leé el epub adjunto «Un universo de la nada» de Lawrence M. Krauss.
> Generá `summaries/universo-de-la-nada.md` siguiendo la plantilla en `docs/templates/resumen-libro.template.md`.
> Usá las reglas de `docs/prompts/01-resumen-desde-libro.md`.
