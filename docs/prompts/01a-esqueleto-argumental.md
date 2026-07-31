# Prompt 01a — Esqueleto argumental (antes de redactar)

Usá este prompt **antes** del Paso A (`01-resumen-desde-libro.md`).
**Entrada:** `.extracted/<slug>.txt` (texto completo del libro).
**Salida:** un único archivo `summaries/<slug>.skeleton.md` (documento de trabajo, no se publica).

> **Por qué existe este paso.** El problema recurrente no es la gramática: es que el resumen
> queda como una lista de datos-ancla (fechas, cifras, tarjetas) y **pierde el argumento del
> autor**. Este paso obliga a reconstruir la _tesis y la cadena lógica_ de cada capítulo
> **antes** de escribir prosa, para que el resumen final tenga columna vertebral, no solo huesos sueltos.

---

## Rol

Sos un lector analítico. Tu trabajo **no** es redactar el resumen todavía, sino **mapear el argumento**
del libro: qué sostiene el autor, con qué evidencia, contra qué objeción, y cómo se encadenan los
capítulos. Pensá como si tuvieras que explicarle a alguien _por qué_ el autor cree lo que cree, no
solo _qué_ datos menciona.

## Método

1. Leé `.extracted/<slug>.txt` por capítulos (no lo cargues entero si es largo).
2. Reconstruí el **índice real** del libro (prefacio + capítulos en su orden original).
3. Para **cada capítulo**, completá la ficha de abajo. Si un capítulo es puramente anecdótico,
   igual identificá **para qué sirve** en el argumento global.
4. **No inventes** citas, cifras ni fechas. Si no están en el texto, dejá el campo vacío.

## Formato de salida (`summaries/<slug>.skeleton.md`)

```markdown
# Metadatos del libro

- **título original (`title`):** "<Título en idioma original del libro>"
- **título público en español (`title_es`):** "<Traducción para el lector hispanohablante; omitir si el original ya está en español>"
- **subtítulo en español (`subtitle`):** "<Pregunta o premisa guía, siempre en español>"

> **Separar siempre original vs público.** `title` conserva la forma editorial del libro fuente.
> `title_es`, el subtítulo, los labels de TOC y los `## title:` del resumen final van **en español**.

# Tesis del libro

<Una frase: qué afirma el autor en toda la obra. La respuesta a «¿de qué te quiere convencer?».>

# Hilo conductor

<2–4 oraciones: cómo avanza el argumento del principio al final. Qué pregunta abre el libro y cómo
la va respondiendo. Este es el mapa que evita que el resumen sea una lista inconexa de capítulos.>

# Capítulos

## prefacio — título original: "<título en idioma del libro>" / título en español: "<label TOC + ## title>"

- **idea principal:** <la afirmación central del capítulo en 1 frase (no un dato: una tesis)>
- **pregunta que responde:** <la pregunta que plantea el capítulo o el resumen; el lead del capítulo final debe formularla explícitamente>
- **por qué / evidencia:** <con qué lo sostiene el autor: argumento, ejemplo, dato clave>
- **matiz u objeción:** <qué complica, limita o contrasta con la idea; «(ninguno explícito)» si no hay>
- **conexión:** <cómo enlaza con el capítulo anterior/siguiente o con la tesis global>
- **puente al siguiente:** <1 oración: por qué el próximo capítulo es el paso lógico que sigue. Si no hay siguiente, «—»>
- **anclas:** <cifras, fechas o citas textuales memorables presentes en el texto; vacío si no hay>

## cap1 — título original: "<título EN/IT/etc.>" / título en español: "<traducción editorial>"

- **idea principal:** …
- **pregunta que responde:** …
- **por qué / evidencia:** …
- **matiz u objeción:** …
- **conexión:** …
- **puente al siguiente:** …
- **anclas:** …

<... una ficha por cada capítulo del índice real ...>

# Conceptos transversales

<6–10 términos/ideas que el libro define o usa a lo largo de varios capítulos, con una glosa breve.
Son candidatos para la sección `# conceptos` del resumen.>

# Figuras y cronología

<Personas históricas relevantes + eventos/fechas si el libro los tiene. Candidatos para `# figuras` y `# cronologia`.>
```

## Reglas de calidad del esqueleto

- **La `idea principal` es una tesis, no un tema.** Mal: «el capítulo habla de la evolución». Bien:
  «la selección natural no necesita un diseñador porque acumula pequeñas ventajas al azar».
- **Título original ≠ título público.** Registrar ambos por capítulo. El resumen usa solo el título en español en TOC y `## title:`.
- **La `pregunta que responde` orienta el lead.** El prompt 01 debe usar esta pregunta literalmente en el `<!-- paragraph lead -->` del capítulo.
- **El `puente al siguiente` mantiene el hilo conductor.** Si el lector no entiende por qué el próximo capítulo sigue, el resumen se siente como una lista. Cada puente debe nombrar un concepto o problema que queda pendiente y que el siguiente capítulo resuelve.
- **Cubrí TODOS los capítulos** del índice real. Si el libro tiene 19 capítulos, tiene que haber 19 fichas.
- **`por qué / evidencia` es obligatorio.** Un resumen que solo dice _qué_ pasó pierde el argumento;
  este campo captura el _porqué_ que le da sentido.
- **No maquetes.** Nada de `<!-- paragraph -->`, `<span>`, tarjetas ni HTML. Es un esqueleto en texto plano.
- **Sé conciso.** Cada campo, 1–2 frases. El esqueleto es un mapa, no el resumen.

## Salida

Un único bloque con path sugerido:

```
summaries/<slug>.skeleton.md
```

Después de este paso, pasá a `01-resumen-desde-libro.md`, que **debe** usar este esqueleto como guía
para no perder ideas principales.
