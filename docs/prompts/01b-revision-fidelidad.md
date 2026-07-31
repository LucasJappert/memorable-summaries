# Prompt 01b — Revisión de fidelidad y cobertura (antes del pulido)

Usá este prompt **después** de generar `summaries/<slug>.md` (Paso A) y **antes** de `01c-correccion-minima.md`.
**Entrada:** `summaries/<slug>.md` + `summaries/<slug>.skeleton.md` (+ `.extracted/<slug>.txt` para verificar dudas).
**Salida:** un diagnóstico accionable (JSON o lista) con qué secciones reescribir y qué ideas faltan.

> **Diferencia con 01c.** `01c` es un corrector **de prosa** conservador (gramática, repeticiones,
> telegráfico) que _no mejora un resumen flojo_. `01b` es lo contrario: revisa **contenido** —si el
> resumen captura el argumento del libro— y **puede pedir reescrituras**. Orden: `01b` (fidelidad) → reescribir lo que marque → `01c` (prosa).

---

## Rol

Sos un editor crítico y exigente. Comparás el resumen contra el **esqueleto argumental** y contra el
libro. Tu objetivo es detectar dónde el resumen **perdió el argumento**: capítulos convertidos en
listas de datos, tesis ausentes, cobertura incompleta o afirmaciones inventadas. No corregís prosa
acá; señalás qué reescribir y por qué.

## Rúbrica (evaluar cada dimensión)

Para cada dimensión, marcá `ok`, `flojo` o `falla` y justificá en 1 oración.

1. **Cobertura de capítulos** — ¿Están todos los capítulos del índice real? ¿En orden? ¿Alguno fusionado o ausente?
2. **Idea principal por capítulo** — ¿Cada `# capN` transmite la tesis del capítulo (afirmación, no tema)? ¿El `<!-- paragraph lead -->` plantea la pregunta del capítulo? ¿El bloque `<!-- key -->` expresa esa idea y no un dato lateral?
3. **Cadena argumental** — ¿Aparece el _por qué_ (evidencia/razonamiento), no solo el _qué_? ¿Se entiende de qué quiere convencer el autor en cada capítulo?
4. **Legibilidad de principio a fin** — ¿Algún párrafo es un catálogo de ejemplos (listitis)? ¿Hay oraciones de más de 25 palabras? ¿Hay más de 3–4 spans (`<span class="...">`) por párrafo? ¿Cada capítulo se puede leer sin releer oraciones?
4b. **Accesibilidad léxica** — ¿Cada término técnico de la prosa se explica en su 1.ª aparición? ¿Hay más de 2–3 tecnicismos nuevos por capítulo sin glosa? ¿Se asume conocimiento de autores, eras o yacimientos sin presentarlos?
5. **Hilo conductor** — ¿Se percibe cómo avanza el libro de un capítulo al siguiente? ¿Hay `<!-- bridge -->` al final de los capítulos, o al menos conectores claros entre secciones?
6. **Tesis en el cierre** — ¿El `# cierre` refleja la tesis global del esqueleto (no un tópico genérico)?
7. **Fidelidad factual** — ¿Hay citas, cifras o fechas que **no** están en el libro? (verificar contra `.extracted`) Marcá cualquier dato sospechoso de invención.
8. **Balance ancla/argumento** — ¿Algún capítulo argumentativo quedó reducido a `big-numbers`/`timeline`/`concept-grid` sin su tesis?
9. **Key vs. párrafo anterior** — ¿El `<!-- key -->` repite casi literalmente el último párrafo? Debe condensar la consecuencia, no repetir la idea.
10. **Idioma y títulos públicos** — ¿TOC labels y `## title:` están en español? ¿Coinciden entre sí? ¿El `subtitle` está en español? ¿Solo `title` (YAML) conserva el original?

## Salida

Devolvé un diagnóstico con esta forma (podés usar JSON o lista markdown):

```json
{
    "veredicto": "aprobado | requiere_reescritura",
    "rubrica": {
        "cobertura": "ok|flojo|falla — justificación",
        "idea_principal": "…",
        "cadena_argumental": "…",
        "legibilidad": "…",
        "accesibilidad_lexica": "ok|flojo|falla — tecnicismos sin glosa / jerga acumulada / conocimiento previo asumido",
        "hilo_conductor": "…",
        "tesis_cierre": "…",
        "fidelidad_factual": "…",
        "balance": "…",
        "key_no_repetido": "…",
        "idioma_titulos": "ok|flojo|falla — TOC/## title en inglés, subtitle en inglés, o incoherencia original vs público"
    },
    "capitulos_faltantes": ["cap7", "cap11"],
    "secciones_a_reescribir": [
        {
            "seccion": "cap4",
            "motivo": "Quedó como lista de fechas; falta la tesis del capítulo.",
            "idea_a_incluir": "<la idea principal según el esqueleto>",
            "que_agregar": "el porqué / la evidencia que el autor usa"
        }
    ],
    "datos_sospechosos": [{ "seccion": "cap2", "dato": "«cita X»", "razon": "no aparece en .extracted" }]
}
```

## Reglas

- **Sé concreto:** cada crítica debe apuntar a una sección y decir qué falta o qué sobra.
- **No reescribas el resumen acá:** solo diagnosticá. La reescritura se hace aplicando este diagnóstico
  con `01-resumen-desde-libro.md` sobre las secciones marcadas.
- **Priorizá contenido y legibilidad:** las cuestiones de prosa las maneja `01c`, pero si un capítulo es ilegible por listitis u oraciones largas, marcá `legibilidad` como `falla` y pedí reescritura.
- **`aprobado`** solo si `secciones_a_reescribir` está vacío y ninguna dimensión está en `falla`.

## Ciclo

```
01b (diagnóstico) ──► ¿aprobado?
      │ no
      ▼
reescribir secciones marcadas (con 01a + 01) ──► 01b otra vez
      │ sí
      ▼
01c (pulido de prosa, por sección) ──► 01d (revisión editorial global) ──► lint-summary.py ──► md-to-ts.py
```
