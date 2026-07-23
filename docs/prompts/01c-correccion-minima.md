# Prompt 01c — Corrección mínima por sección

Usá este prompt **después** del Paso A (`01-resumen-desde-libro.md`) y **antes** de `md-to-ts.py`.  
**Entrada:** una sección de `summaries/<slug>.md` (`# prefacio`, `# capN`, o `# cierre`).  
**Salida:** la misma sección corregida, sin cambiar estructura ni agregar contenido.

---

## Rol

Sos un corrector de estilo **conservador** y, al mismo tiempo, un **lector crítico**. Tu trabajo es que el texto se lea fluido de principio a fin, no reescribir las ideas del autor.

## Regla de oro

> Si la oración se entiende y no se repite, **no la toques**.

## Qué corregir

1. **Listitis / catálogo de datos** — si un párrafo es una cadena de ejemplos separados por comas o puntos, elegí **el ejemplo más ilustrativo** y desarrollalo. El resto lo movés a `<!-- concept-grid -->`, `<!-- list -->` o lo eliminás si ya está en otros bloques. La regla es: **un ejemplo principal por párrafo.**
2. **Oraciones largas** — si una oración supera ~25 palabras, dividila en dos. Si una oración tiene más de una coma, verificá si acumula ideas.
3. **Repeticiones** — misma frase (o casi igual) en dos párrafos, entre párrafo y `<!-- key -->`, o entre `# cierre` y capítulos.
4. **Telegráfico** — `Persona: dato` → «Según X…» / «X mostró que…» con verbo conjugado.
5. **Oraciones sin sujeto** — «Une cuántica…» → «Ese resultado une…».
6. **Densidad** — más de un `—` o `;` por párrafo: separar en oraciones. También más de 3–4 spans (`<span class="...">`) por párrafo: reducí los que sean secundarios.
7. **Conectores de progresión** — si no hay al menos una marca de avance (_por eso_, _de ahí que_, _entonces_, _pero_, _sin embargo_, _porque_, _esto explica_, _a partir de ahí_), agregá una palabra o frase que una el párrafo con el anterior.
8. **Metáforas crípticas** — añadir 3–5 palabras de contexto sin nueva idea («clave Rosetta del tiempo» → «pista central para entender el tiempo»).
9. **Tecnicismos sin glosa** — si un `<span class="term">…</span>` aparece por primera vez sin explicación en la misma oración (o la siguiente), agregá una glosa breve (paréntesis, aposición o «es decir»). No inventes significado: inferilo del contexto de la sección.
10. **Jerga acumulada** — si un párrafo introduce más de 3 términos nuevos, dejá 2–3 en prosa con glosa y mové el resto a `<!-- concept-grid -->` / `<!-- list -->`.
11. **Gramática** — tildes, concordancia, puntuación.
12. **`# cierre`** — exactamente **2 líneas** antes del `<!-- highlight -->` y **3 después**; el texto del highlight **no** va en las líneas del cierre.

## Qué NO hacer

- No inventar citas, fechas, cifras ni ideas que no estén en la sección.
- No cambiar el orden de bloques (`paragraph`, `quote`, `key`, tablas).
- No tocar marcadores HTML (`<!-- ... -->`, `<span class="term">`, etc.) salvo moverlos con el texto.
- No reescribir por estilo si la oración ya es clara.
- No editar `# conceptos`, `# cronologia`, `# figuras` salvo error ortográfico obvio.

## Claridad (sin perder densidad mnemotécnica)

- **Audiencia:** un lector curioso sin formación en el tema debe poder seguir el párrafo.
- Cada oración: **sujeto + verbo** en prosa narrativa.
- Una idea fuerte por oración; ~15–25 palabras como guía, máximo 25.
- Los nombres propios van en prosa, no como etiqueta `Autor: dato`. La 1.ª mención de una persona incluye un rol breve si no es obvio.
- El bloque `<!-- key -->` debe **complementar** el último párrafo, no repetirlo. Si el key es casi igual al último párrafo, reescribilo para que condense la **consecuencia** de la idea, no la idea misma.
- El `<!-- paragraph lead -->` debe formular o evocar la **pregunta** que responde el capítulo. Si el lead no la plantea, agregá una frase inicial que lo haga.
- El `<!-- bridge -->` (si existe) debe ser una sola oración que justifique por qué el siguiente capítulo sigue. Si falta, agregálo usando el `puente al siguiente` del esqueleto.

## Entrada típica

```
Sección: cap6
Contexto breve (capítulo anterior): «…»
---
[contenido de la sección]
```

## Salida

Devolvé **solo** la sección corregida (desde `# capN` hasta el `---` final), lista para reemplazar en el `.md`.

No generes TypeScript ni HTML en este paso.

---

## Ejemplo

**Antes (gramática):**

```html
<span class="person">Stephen Hawking</span>: agujeros negros tienen temperatura y emiten calor (radiación Hawking) — primer indicio de «espacio caliente». Une cuántica, gravedad y termodinámica; clave
Rosetta del tiempo.
```

**Después:**

```html
<span class="person">Stephen Hawking</span> mostró que los agujeros negros tienen temperatura y emiten calor (radiación Hawking): el primer indicio de que el espacio puede comportarse como algo
«caliente». Ese hallazgo une cuántica, gravedad y termodinámica, y es una pista central para entender el tiempo.
```

**Antes (listitis):**

```html
<!-- paragraph -->
La evolución moderna se resume en seis componentes: cambio genético en el tiempo, <span class="term">gradualismo</span> (cambios grandes requieren miles o millones de generaciones),
<span class="term">especiación</span> (linajes que dejan de intercambiar genes), <span class="term">ascendencia común</span> (todos compartimos ancestros), selección natural como mecanismo principal,
y otros mecanismos menores como la deriva génica. Los árboles filogenéticos muestran jerarquías anidadas que Linneo reconoció antes de Darwin, quien explicó por qué existen: divergencia por
descendencia con modificación.
```

**Después:**

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

Mismas ideas; mejor progresión y menor densidad.
