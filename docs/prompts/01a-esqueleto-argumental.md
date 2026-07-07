# Prompt 01a — Esqueleto argumental (antes de redactar)

Usá este prompt **antes** del Paso A (`01-resumen-desde-libro.md`).
**Entrada:** `.extracted/<slug>.txt` (texto completo del libro).
**Salida:** un único archivo `summaries/<slug>.skeleton.md` (documento de trabajo, no se publica).

> **Por qué existe este paso.** El problema recurrente no es la gramática: es que el resumen
> queda como una lista de datos-ancla (fechas, cifras, tarjetas) y **pierde el argumento del
> autor**. Este paso obliga a reconstruir la *tesis y la cadena lógica* de cada capítulo
> **antes** de escribir prosa, para que el resumen final tenga columna vertebral, no solo huesos sueltos.

---

## Rol

Sos un lector analítico. Tu trabajo **no** es redactar el resumen todavía, sino **mapear el argumento**
del libro: qué sostiene el autor, con qué evidencia, contra qué objeción, y cómo se encadenan los
capítulos. Pensá como si tuvieras que explicarle a alguien *por qué* el autor cree lo que cree, no
solo *qué* datos menciona.

## Método

1. Leé `.extracted/<slug>.txt` por capítulos (no lo cargues entero si es largo).
2. Reconstruí el **índice real** del libro (prefacio + capítulos en su orden original).
3. Para **cada capítulo**, completá la ficha de abajo. Si un capítulo es puramente anecdótico,
   igual identificá **para qué sirve** en el argumento global.
4. **No inventes** citas, cifras ni fechas. Si no están en el texto, dejá el campo vacío.

## Formato de salida (`summaries/<slug>.skeleton.md`)

```markdown
# Tesis del libro
<Una frase: qué afirma el autor en toda la obra. La respuesta a «¿de qué te quiere convencer?».>

# Hilo conductor
<2–4 oraciones: cómo avanza el argumento del principio al final. Qué pregunta abre el libro y cómo
la va respondiendo. Este es el mapa que evita que el resumen sea una lista inconexa de capítulos.>

# Capítulos

## prefacio — <título real>
- **idea principal:** <la afirmación central del capítulo en 1 frase (no un dato: una tesis)>
- **por qué / evidencia:** <con qué lo sostiene el autor: argumento, ejemplo, dato clave>
- **matiz u objeción:** <qué complica, limita o contrasta con la idea; «(ninguno explícito)» si no hay>
- **conexión:** <cómo enlaza con el capítulo anterior/siguiente o con la tesis global>
- **anclas:** <cifras, fechas o citas textuales memorables presentes en el texto; vacío si no hay>

## cap1 — <título real>
- **idea principal:** …
- **por qué / evidencia:** …
- **matiz u objeción:** …
- **conexión:** …
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
- **Cubrí TODOS los capítulos** del índice real. Si el libro tiene 19 capítulos, tiene que haber 19 fichas.
- **`por qué / evidencia` es obligatorio.** Un resumen que solo dice *qué* pasó pierde el argumento;
  este campo captura el *porqué* que le da sentido.
- **No maquetes.** Nada de `<!-- paragraph -->`, `<span>`, tarjetas ni HTML. Es un esqueleto en texto plano.
- **Sé conciso.** Cada campo, 1–2 frases. El esqueleto es un mapa, no el resumen.

## Salida

Un único bloque con path sugerido:

```
summaries/<slug>.skeleton.md
```

Después de este paso, pasá a `01-resumen-desde-libro.md`, que **debe** usar este esqueleto como guía
para no perder ideas principales.
