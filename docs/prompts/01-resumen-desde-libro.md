# Prompt 01 — Resumen intermedio desde el libro

Usá este prompt con el libro fuente (epub, pdf o texto pegado).  
**Entrada recomendada:** `summaries/<slug>.skeleton.md` (generado con `01a-esqueleto-argumental.md`) **+** `.extracted/<slug>.txt`.
**Salida esperada:** un único archivo `summaries/<slug>.md` siguiendo la plantilla.

---

## Instrucciones para la IA

Sos un editor que **captura el argumento del autor y lo hace memorable**. No alcanza con listar datos,
fechas y tarjetas: cada capítulo tiene que transmitir *qué sostiene el autor y por qué*, y recién
sobre esa columna vertebral se cuelgan las anclas mnemotécnicas. Un resumen fiel pero memorable, en
ese orden de prioridad.

> **Usá el esqueleto.** Si existe `summaries/<slug>.skeleton.md`, es tu guion: cada `idea principal`
> del esqueleto debe quedar reflejada en la sección correspondiente, y el `por qué / evidencia` debe
> aparecer en la prosa (no solo el dato). Si no existe, generalo primero con `01a-esqueleto-argumental.md`.

### Reglas estrictas

1. **Seguí exactamente** el esquema de `docs/templates/resumen-libro.template.md`
2. **No inventes** citas, fechas ni cifras. Si no aparecen en el libro, omití el bloque o marcá `(no consta en el texto)`
3. **Un capítulo del libro = una sección `# capN`** con el mismo orden que el índice original. **Cubrí todos** los capítulos del índice real; no fusiones ni saltees.
4. **2–4 párrafos** por sección. El límite es para forzar síntesis, **no** para podar el argumento: si un capítulo es argumentativo, usá los 4 párrafos y priorizá la cadena *tesis → por qué → matiz* por encima del detalle anecdótico. **Nunca reduzcas un capítulo a una lista de datos sin su tesis.**
4a. **Cada `# capN` debe contener su idea principal**, explícita en la prosa y condensada en un bloque `<!-- key -->` (obligatorio en capítulos; ver abajo). La idea principal es una **afirmación** del autor, no un tema ni un dato suelto.
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
| `<!-- key -->` | **La idea principal del capítulo** en una frase: una afirmación del autor, no un dato (sin escribir «Clave:»; la UI lo agrega). **Obligatorio en cada `# capN`.** No debe repetir textualmente el último párrafo: lo condensa. |
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

### Criterios de fidelidad (primero el argumento)

- **Cada capítulo transmite su tesis, no solo sus datos.** Antes de cerrar una sección, preguntate:
  «si alguien lee solo esto, ¿entiende *qué* sostiene el autor y *por qué*?». Si la respuesta es no,
  falta el argumento.
- **Las anclas sirven al argumento, no lo reemplazan.** `big-numbers`, `timeline` y `concept-grid`
  refuerzan la idea; no deben ser la única sustancia de un capítulo argumentativo.
- **El `# cierre` refleja la tesis real del libro** (la del esqueleto), en una frase: «¿de qué te
  quiere convencer el autor?» (2 líneas + highlight + 3 líneas).
- **Cobertura:** todos los capítulos del índice real presentes; ninguna `idea principal` del esqueleto
  se queda afuera.

### Criterios de memorización

- Cada **concept-grid** debe tener 2–4 ítems (nunca 1 solo)
- Repetí conceptos importantes en `# conceptos` aunque ya aparezcan en capítulos
- Preferí **cifras redondas** y **fechas** como anclas
- Tras generar el `.md`, corré `01b-revision-fidelidad.md` (fidelidad/cobertura) y después `01c-correccion-minima.md` (prosa)
- Usá emojis solo en iconos de concept-grid (opcional, máx. 1 por tarjeta)
- Preferí **marcadores semánticos** (`term`, `person`, `key-term`, `num`) sobre negrita indiscriminada

### Entrada

```
[Colocar epub/pdf en fuentes/ o indicar nombre parcial]

1. Extraer texto:
   python3 scripts/extract-epub.py "<libro>"
2. Generar el esqueleto argumental (01a) → summaries/<slug>.skeleton.md
3. Leer el esqueleto + .extracted/<slug>.txt y generar summaries/<slug>.md

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
