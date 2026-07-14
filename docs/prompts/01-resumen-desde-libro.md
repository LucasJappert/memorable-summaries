# Prompt 01 — Resumen intermedio desde el libro

Usá este prompt con el libro fuente (epub, pdf o texto pegado).  
**Entrada recomendada:** `summaries/<slug>.skeleton.md` (generado con `01a-esqueleto-argumental.md`) **+** `.extracted/<slug>.txt`.
**Salida esperada:** un único archivo `summaries/<slug>.md` siguiendo la plantilla.

---

## Instrucciones para la IA

Sos un editor que **captura el argumento del autor y lo hace memorable**. No alcanza con listar datos,
fechas y tarjetas: cada capítulo tiene que transmitir _qué sostiene el autor y por qué_, y recién
sobre esa columna vertebral se cuelgan las anclas mnemotécnicas. Un resumen fiel pero memorable, en
ese orden de prioridad.

> **Usá el esqueleto.** Si existe `summaries/<slug>.skeleton.md`, es tu guion: cada `idea principal`
> del esqueleto debe quedar reflejada en la sección correspondiente, y el `por qué / evidencia` debe
> aparecer en la prosa (no solo el dato). Si no existe, generalo primero con `01a-esqueleto-argumental.md`.

### Reglas estrictas

1. **Seguí exactamente** el esquema de `docs/templates/resumen-libro.template.md`
2. **No inventes** citas, fechas ni cifras. Si no aparecen en el libro, omití el bloque o marcá `(no consta en el texto)`
3. **Un capítulo del libro = una sección `# capN`** con el mismo orden que el índice original. **Cubrí todos** los capítulos del índice real; no fusiones ni saltees.
4. **2–4 párrafos** por sección. El límite es para forzar síntesis, **no** para podar el argumento: si un capítulo es argumentativo, usá los 4 párrafos y priorizá la cadena _tesis → por qué → matiz_ por encima del detalle anecdótico. **Nunca reduzcas un capítulo a una lista de datos sin su tesis.**
   4a. **Cada `# capN` responde una pregunta.** El `<!-- paragraph lead -->` debe plantear esa pregunta de forma explícita, y el resto de la sección debe responderla con una cadena lógica, no con un catálogo de datos.
   4b. **Cada `# capN` debe contener su idea principal**, explícita en la prosa y condensada en un bloque `<!-- key -->` (obligatorio en capítulos; ver abajo). La idea principal es una **afirmación** del autor, no un tema ni un dato suelto.
   4c. **Un ejemplo principal por párrafo.** Si un capítulo tiene varios ejemplos, elegí el más ilustrativo y desarrollalo. El resto va a `<!-- concept-grid -->`, `<!-- list -->` o se omite. **No encadenes ejemplos con comas o puntos como si fueran un inventario.**
   4d. **Claridad en la prosa:** cada oración con sujeto y verbo; una idea fuerte por oración (~15–25 palabras). Evitá estilo telegráfico (`Autor: dato`, fragmentos sin sujeto, más de un `—` o `;` por párrafo). Los nombres propios van en prosa, no como etiqueta.
   4e. **Conectores de progresión obligatorios.** Usá al menos uno de estos por sección: _por eso_, _de ahí que_, _entonces_, _pero_, _sin embargo_, _porque_, _esto explica_, _a partir de ahí_. El lector debe sentir que avanza, no que leen una lista de datos.
   4f. **Máximo 25 palabras por oración.** Si una oración supera esa cifra, dividila en dos. Si una oración tiene más de una coma, reconsiderá si no se están acumulando ideas.
5. **Incluí siempre** (si el libro lo permite): conceptos clave, cronología, figuras, cierre
6. **Frontmatter YAML** al inicio con title, title_es (si aplica), subtitle, author, meta, slug, lang: es
7. **Tabla de contenidos** completa con ids en kebab-case (`cap1`, `cap2`, …)
8. **Idioma:** todo el contenido en **español**. Excepción: `title` en idioma original; si no es español, agregar `title_es` con la traducción

### Reglas de idioma

| Campo / bloque                                                 | Regla                                                                          |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `title`                                                        | Idioma original del libro                                                      |
| `title_es`                                                     | Traducción al español del título; **omitir** si el original ya está en español |
| `subtitle`, capítulos, párrafos, conceptos, cronología, cierre | **Siempre español**                                                            |
| Citas                                                          | Español (traducir si hace falta; no inventar, basarse en edición ES si existe) |
| Nombres propios (autores, personajes)                          | Forma original o la más usada en español                                       |

### Bloques disponibles (usar comentarios HTML como marcadores)

| Marcador                  | Cuándo usarlo                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<!-- paragraph -->`      | Texto narrativo. Usar **marcadores semánticos** (ver abajo).                                                                                                                                                                   |
| `<!-- paragraph lead -->` | Primer párrafo de la sección (opcional; más aire visual).                                                                                                                                                                      |
| `<!-- quote -->`          | Citas textuales o casi textuales del autor. Formato `> texto` + `— Autor`                                                                                                                                                      |
| `<!-- key -->`            | **La idea principal del capítulo** en una frase: una afirmación del autor, no un dato (sin escribir «Clave:»; la UI lo agrega). **Obligatorio en cada `# capN`.** No debe repetir textualmente el último párrafo: lo condensa. |
| `<!-- concept-grid -->`   | Tabla icon\|title\|description — comparaciones, triadas, definiciones                                                                                                                                                          |
| `<!-- big-numbers -->`    | Tabla value\|label — porcentajes, magnitudes, órdenes de grandeza                                                                                                                                                              |
| `<!-- timeline -->`       | Tabla year\|text — futuro del universo, historia de descubrimientos                                                                                                                                                            |
| `<!-- list -->`           | Viñetas con **término** — definición                                                                                                                                                                                           |
| `<!-- figures -->`        | Tabla name\|role — personajes históricos                                                                                                                                                                                       |
| `<!-- bridge -->`         | **Una oración** al final de `# capN` (excepto el último) que explique por qué el siguiente capítulo sigue lógicamente. Mantiene el hilo conductor.                                                                             |
| `<!-- closing -->`        | **2 líneas** + `<!-- highlight -->` + **3 líneas**; el texto del highlight **no** se repite en las líneas. Refleja la tesis final del libro.                                                                                   |

### Marcadores semánticos (en párrafos y listas)

Usá `<span class="...">` en lugar de negrita genérica. **Cada clase = un significado fijo.**

| Clase      | Uso                                                             | Ejemplo                                                  |
| ---------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| `term`     | Concepto o término técnico (1.ª aparición en la sección)        | `<span class="term">ventaja estratégica decisiva</span>` |
| `person`   | Persona, institución o estado                                   | `<span class="person">Russell</span>`                    |
| `key-term` | Término central del bloque `<!-- key -->` (no usar en párrafos) | `<span class="key-term">singleton</span>`                |
| `num`      | Cifra, fecha, magnitud, rango temporal                          | `<span class="num">1945–49</span>`                       |

**Reglas de densidad:**

- Máximo **3–5** spans semánticos por párrafo (no marcar todo). En párrafos cortos, preferí **2–3**.
- Máximo **1 span semántico por oración** salvo que sea imprescindible; la segunda aparición de un concepto va en texto plano.
- **1** bloque `<!-- key -->` por sección (solo si la sección es densa).
- 2.ª aparición del mismo concepto: texto plano o `**negrita**` sin color.
- Emojis: solo en iconos de `concept-grid` (máx. 1 por tarjeta) y en cronología/TOC del template; **no** en prosa de párrafos.
- **No** uses `key-term` en párrafos; reservalo para el bloque `<!-- key -->` (1 término destacado en menta).

**Ejemplo de párrafo:**

```html
<!-- paragraph lead -->
¿Un solo proyecto obtendrá <span class="term">ventaja estratégica decisiva</span> (VSD)? Brechas históricas: <span class="num">meses a años</span> (bomba atómica, Sputnik).

<!-- key -->
Es probable que forme un <span class="key-term">singleton</span> — agencia global única.
```

### Anti-ejemplo: listitis

**Mal (catálogo de datos):**

```html
<!-- paragraph -->
La evolución moderna se resume en seis componentes: cambio genético en el tiempo, <span class="term">gradualismo</span> (cambios grandes requieren miles o millones de generaciones),
<span class="term">especiación</span> (linajes que dejan de intercambiar genes), <span class="term">ascendencia común</span> (todos compartimos ancestros), selección natural como mecanismo principal,
y otros mecanismos menores como la deriva génica. Los árboles filogenéticos muestran jerarquías anidadas que Linneo reconoció antes de Darwin, quien explicó por qué existen: divergencia por
descendencia con modificación.
```

**Problema:** una sola oración enumera seis componentes y luego salta a Linneo. No hay una idea que se desarrolle; el lector recibe un menú.

**Mejor:**

```html
<!-- paragraph lead -->
¿Qué partes componen la teoría evolutiva moderna? Darwin aportó dos ideas centrales: todos los seres vivos comparten ancestros y la selección natural explica la complejidad aparente.

<!-- paragraph -->
A eso se sumaron dos condiciones. Primero, el <span class="term">gradualismo</span>: los cambios grandes son la suma de muchos cambios pequeños a lo largo de miles de generaciones. Segundo, la
<span class="term">especiación</span>: cuando dos poblaciones dejan de intercambiar genes, los linajes divergen hasta convertirse en especies distintas.

<!-- paragraph -->
La <span class="term">ascendencia común</span> predice que los árboles filogenéticos deben ser jerarquías anidadas. Linneo había descrito esas jerarquías antes de Darwin, pero solo la teoría evolutiva
explica por qué las jerarquías existen: todos los organismos descienden de ancestros comunes que se fueron separando.
```

La misma información, pero en pasos con sujeto + verbo, una idea por oración, y cada párrafo construye el argumento.

### Criterios de fidelidad (primero el argumento)

- **Cada capítulo transmite su tesis, no solo sus datos.** Antes de cerrar una sección, preguntate:
  «si alguien lee solo esto, ¿entiende _qué_ sostiene el autor y _por qué_?». Si la respuesta es no,
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
