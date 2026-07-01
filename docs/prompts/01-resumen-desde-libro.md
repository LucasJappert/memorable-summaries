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
4b. **Claridad en la prosa:** cada oración con sujeto y verbo; una idea fuerte por oración (~15–25 palabras). Evitá estilo telegráfico (`Autor: dato`, fragmentos sin sujeto, más de un `—` o `;` por párrafo). Los nombres propios van en prosa, no como etiqueta.
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
| `<!-- paragraph -->` | Texto narrativo. Usar **marcadores semánticos** (ver abajo). |
| `<!-- paragraph lead -->` | Primer párrafo de la sección (opcional; más aire visual). |
| `<!-- quote -->` | Citas textuales o casi textuales del autor. Formato `> texto` + `— Autor` |
| `<!-- key -->` | Una frase al final de secciones densas (sin escribir «Clave:»; la UI lo agrega). |
| `<!-- concept-grid -->` | Tabla icon\|title\|description — comparaciones, triadas, definiciones |
| `<!-- big-numbers -->` | Tabla value\|label — porcentajes, magnitudes, órdenes de grandeza |
| `<!-- timeline -->` | Tabla year\|text — futuro del universo, historia de descubrimientos |
| `<!-- list -->` | Viñetas con **término** — definición |
| `<!-- figures -->` | Tabla name\|role — personajes históricos |
| `<!-- closing -->` | **2 líneas** + `<!-- highlight -->` + **3 líneas**; el texto del highlight **no** se repite en las líneas |

### Marcadores semánticos (en párrafos y listas)

Usá `<span class="...">` en lugar de negrita genérica. **Cada clase = un significado fijo.**

| Clase | Uso | Ejemplo |
|-------|-----|---------|
| `term` | Concepto o término técnico (1.ª aparición en la sección) | `<span class="term">ventaja estratégica decisiva</span>` |
| `person` | Persona, institución o estado | `<span class="person">Russell</span>` |
| `key-term` | Término central del bloque `<!-- key -->` (no usar en párrafos) | `<span class="key-term">singleton</span>` |
| `num` | Cifra, fecha, magnitud, rango temporal | `<span class="num">1945–49</span>` |

**Reglas de densidad:**

- Máximo **3–5** spans semánticos por párrafo (no marcar todo).
- **1** bloque `<!-- key -->` por sección (solo si la sección es densa).
- 2.ª aparición del mismo concepto: texto plano o `**negrita**` sin color.
- Emojis: solo en iconos de `concept-grid` (máx. 1 por tarjeta) y en cronología/TOC del template; **no** en prosa de párrafos.
- **No** uses `key-term` en párrafos; reservalo para el bloque `<!-- key -->` (1 término destacado en menta).

**Ejemplo de párrafo:**

```html
<!-- paragraph lead -->
¿Un solo proyecto obtendrá <span class="term">ventaja estratégica decisiva</span> (VSD)?
Brechas históricas: <span class="num">meses a años</span> (bomba atómica, Sputnik).

<!-- key -->
Es probable que forme un <span class="key-term">singleton</span> — agencia global única.
```

### Criterios de memorización

- Cada **concept-grid** debe tener 2–4 ítems (nunca 1 solo)
- Repetí conceptos importantes en `# conceptos` aunque ya aparezcan en capítulos
- Preferí **cifras redondas** y **fechas** como anclas
- El **cierre** debe responder: «¿Cuál es la tesis del autor en una frase?» (2 líneas + highlight + 3 líneas)
- Tras generar el `.md`, revisá repeticiones entre párrafos, bloques `key` y `# cierre` (o ejecutá `docs/prompts/01c-correccion-minima.md`)
- Usá emojis solo en iconos de concept-grid (opcional, máx. 1 por tarjeta)
- Preferí **marcadores semánticos** (`term`, `person`, `key-term`, `num`) sobre negrita indiscriminada

### Entrada

```
[Colocar epub/pdf en fuentes/ o indicar nombre parcial]

1. Extraer texto:
   python3 scripts/extract-epub.py "<libro>"
2. Leer .extracted/<slug>.txt y generar summaries/<slug>.md

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
