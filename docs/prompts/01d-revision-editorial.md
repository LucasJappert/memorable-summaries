# Prompt 01d — Revisión editorial global (después de 01c)

Usá este prompt **después** de `01c-correccion-minima.md` (pulido seccional) y **antes** de `lint-summary.py` / `md-to-ts.py`.
**Entrada:** `summaries/<slug>.md` completo + `summaries/<slug>.skeleton.md`.
**Salida:** el mismo `.md` con ajustes editoriales globales (no reescritura factual).

> **Diferencia con 01c.** `01c` corrige prosa **sección por sección** (gramática, listitis, conectores locales).
> `01d` mira el **documento entero**: coherencia de idioma, títulos públicos en español, uniformidad de tono
> y puentes conceptuales. **No** reescribe argumentos ni agrega datos del libro.

---

## Rol

Sos editor de una serie de resúmenes para **audiencia general**. Tu trabajo es que el lector hispanohablante
encuentre todo el texto visible en español claro, con un hilo conductor uniforme de principio a fin.

## Estándar editorial (checklist global)

### 1. Metadatos y títulos

| Campo | Regla |
|-------|-------|
| `title` (YAML) | **Idioma original** del libro. No traducir. |
| `title_es` (YAML) | **Título público en español** (hero: `Original — Traducción`). Omitir si el original ya está en español. |
| `subtitle` | **Siempre español.** Pregunta o premisa guía. |
| TOC `label` | **Siempre español.** Debe coincidir con `## title:` de la sección. |
| `## title:` | **Siempre español.** Traducción editorial del capítulo, no el título original en inglés. |

En el esqueleto (A0) ya deben figurar **título original** vs **título público en español** por capítulo.
Acá verificás que el `.md` lo cumpla.

### 2. Idioma visible

Todo en español: prosa, `<!-- key -->`, labels de TOC, `## title:`, subtítulo, `# conceptos`, `# cronologia`, `# cierre`.

**Excepciones permitidas** (con glosa la 1.ª vez si hace falta):

- Nombres propios (`Thomas Halliday`, `CRISPR`)
- Taxones científicos (`Lystrosaurus`, `Australopithecus anamensis`)
- Siglas establecidas (`ADN`, `ARN`, `CMB`)
- Extranjerismos inevitables del campo, **siempre glosados** en prosa la primera vez

### 3. Audiencia general

- **Término común primero**, tecnicismo después (con `<span class="term">` + glosa).
- Estructura preferida: **escena o pregunta → causa → consecuencia**.
- Conectores naturales en cada sección (`por eso`, `de ahí que`, `entonces`, `pero`, `sin embargo`, `porque`, `a partir de ahí`).
- Puentes conceptuales: `<!-- bridge -->` al final de cada `# capN` (excepto el último).

### 4. Qué corregir (sin cambiar hechos)

1. Traducir TOC labels y `## title:` que sigan en inglés (usar títulos del esqueleto en español).
2. Unificar TOC label ↔ `## title:` cuando difieran sin motivo.
3. Verificar que `# conceptos`, `# cronologia`, `# figuras` y `# cierre` también estén en español claro.
4. Glosar extranjerismos evidentes sin traducción (`feedback`, `stakeholder`, etc.).
5. Suavizar saltos de tono entre capítulos (sin reescribir tesis).
6. Verificar que `# cierre` refleje la tesis global del esqueleto.

### 5. Qué NO hacer

- ❌ Inventar citas, fechas, cifras ni ideas.
- ❌ Cambiar la `idea principal` de un capítulo (eso es 01b + reescritura con 01).
- ❌ Reorganizar bloques (`paragraph`, `key`, tablas).
- ❌ Convertir este paso en una reescritura factual o de argumento.
- ❌ Traducir `title` del frontmatter (solo `title_es`, TOC y `## title:`).

## Salida

Devolvé el archivo `summaries/<slug>.md` **completo**, listo para:

```bash
python3 scripts/lint-summary.py <slug> --strict
python3 scripts/check-coverage.py <slug>
python3 scripts/md-to-ts.py <slug>
```

## Ciclo

```
01c (por sección) ──► 01d (global) ──► lint-summary.py ──► md-to-ts.py
```

Si `01d` detecta problemas de **contenido** (tesis ausente, capítulo sin argumento), devolvé la sección
a `01b` / reescritura con `01`, no intentes arreglarlo solo con estilo.
