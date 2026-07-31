---
title: "Título del libro (idioma original — no traducir)"
title_es: "Traducción al español del título (título público en la app)"
subtitle: "Subtítulo o pregunta guía (siempre en español)"
author: "Autor Apellido"
meta:
    - "📖 Año · Editorial"
    - "✍️ Nota extra (postfacio, traducción, etc.)"
slug: titulo-del-libro
lang: es
---

<!-- title_es: omitir si el libro ya está en español. Ejemplo inglés:
     title: "Sapiens: A Brief History of Humankind"
     title_es: "Sapiens: De animales a dioses"
     El hero muestra: Original — Traducción
-->

<!-- Estándar editorial:
     - title (YAML) = idioma original
     - title_es, subtitle, TOC label, ## title:, prosa, keys, conceptos, cronología, cierre = español
     - TOC label debe coincidir con ## title: de cada sección
     - Término común primero; tecnicismo con glosa en 1.ª aparición
     - Escena/pregunta → causa → consecuencia; conectores por sección
-->

# Contenido

<!-- toc: id | num | label -->

| id       | num | label                 |
| -------- | --- | --------------------- |
| cierre   | ★   | La idea central       |
| prefacio | 00  | Prefacio              |
| cap1     | 01  | Título del capítulo 1 |

<!-- Nota: labels de TOC en español, iguales a ## title: de cada sección.
     El cierre puede ubicarse al final del flujo de lectura. La TOC sigue listándolo porque el id es necesario. -->

---

# cierre

## title: La idea central

<!-- closing -->

Primera línea de la tesis.
Segunda línea que desarrolla.

<!-- highlight -->frase más importante<!-- /highlight -->

Cuarta línea.
Quinta línea.
Sexta línea poética o memorable.

---

# prefacio

## num: Prefacio

## title: Título de la sección

<!-- paragraph lead -->
<!-- Plantear la pregunta o premisa del capítulo. Máximo 25 palabras por oración. -->

¿Qué pregunta responde este capítulo? Usar <span class="term">términos</span>, <span class="person">personas</span> y <span class="num">1945</span>.

<!-- paragraph -->
<!-- Un ejemplo principal por párrafo. Desarrollarlo con sujeto + verbo. Conector de progresión obligatorio. -->

Segundo párrafo si hace falta. Por eso el argumento avanza con sujeto + verbo. Máximo 3–4 párrafos por sección.

<!-- quote -->

> Texto de la cita entre comillas tipográficas «».
> — Autor

<!-- key -->
<!-- Una sola frase que condense la consecuencia del argumento, no una repetición del último párrafo. -->

Una sola frase que resume la sección (sin prefijo «Clave:»).

---

# cap1

## num: 01

## title: Título del capítulo

<!-- paragraph lead -->
<!-- Planteá la pregunta que responde el capítulo. -->

¿Qué pregunta responde este capítulo?

<!-- paragraph -->
<!-- Desarrollá la respuesta con un ejemplo principal. No encadenar ejemplos con comas. -->

Contenido...

<!-- concept-grid -->
<!-- Usar este bloque para los ejemplos secundarios, no para el ejemplo principal. -->

| icon | title               | description                            |
| ---- | ------------------- | -------------------------------------- |
| 🌡️   | Nombre del concepto | Definición en una o dos frases cortas. |
| 📐   | Otro concepto       | Otra definición.                       |

<!-- big-numbers -->

| value | label           |
| ----- | --------------- |
| ~5%   | Materia visible |
| ~70%  | Energía oscura  |

<!-- timeline -->

| year | text                        |
| ---- | --------------------------- |
| 1916 | Qué pasó y por qué importa. |
| 1929 | Otro hito.                  |

<!-- list -->

- **Término** — explicación breve.
- **Otro término** — explicación breve.

<!-- bridge -->
<!-- Una oración que explique por qué el siguiente capítulo es el paso lógico. Usar entre el key y el --- del capítulo (excepto en el último). -->

Una oración de puente al siguiente capítulo.

---

# conceptos

## num: ✦

## title: Conceptos clave

<!-- concept-grid -->

| title            | description                       |
| ---------------- | --------------------------------- |
| Término global 1 | Definición de memoria (glosario). |
| Término global 2 | Definición.                       |

<!-- Incluir 6–10 conceptos. Repetir los más importantes de los capítulos. -->

---

# cronologia

## num: ◈

## title: Cronología de los descubrimientos

<!-- timeline -->

| year | text                                 |
| ---- | ------------------------------------ |
| AAAA | Evento histórico vinculado al libro. |

---

# figuras

## num: ✦

## title: Figuras clave

<!-- figures -->

| name            | role                                  |
| --------------- | ------------------------------------- |
| Nombre Apellido | Contribución principal · segundo dato |

---

# footer

line1: Resumen generado a partir de la obra de [Autor]
line2: "Título" · Editorial · Año
