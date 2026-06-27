# Pipeline de generación de resúmenes

> **Punto de entrada para agentes:** leer [`AGENTS.md`](../AGENTS.md) primero.  
> Con eso basta que el usuario diga «Generame el html del libro X».

Flujo en **dos pasos** para que cualquier IA pueda reproducir resúmenes memorizables con formato consistente.

```
Libro (.epub / .pdf / texto)
        │
        ▼  Prompt 01 — docs/prompts/01-resumen-desde-libro.md
        │
summaries/<slug>.md          ← fuente de verdad intermedia (humana + IA)
        │
        ▼  Prompt 02 — docs/prompts/02-vista-desde-resumen.md
        │
src/data/<slug>.ts           ← datos tipados para la app Vue
        │
        ▼  (opcional)
legacy/<slug>.html           ← HTML standalone con el mismo CSS
```

## Por qué dos pasos

| Paso | Rol | Ventaja |
|------|-----|---------|
| **1 → `.md`** | Extraer y condensar el libro | Revisable, editable, barato de iterar. Separás *contenido* de *presentación*. |
| **2 → `.ts` / `.html`** | Maquetar para memorizar | Formato fijo, visual, reutiliza componentes y estilos existentes. |

Si mezclás extracción y maquetado en un solo prompt, la IA suele:
- perder capítulos o conceptos clave,
- inventar citas,
- cambiar el formato en cada libro.

El `.md` intermedio actúa como **contrato**: si el paso 1 respeta la plantilla, el paso 2 es casi mecánico.

## Archivos del circuito

| Archivo | Propósito |
|---------|-----------|
| `docs/templates/resumen-libro.template.md` | Esquema que debe seguir todo resumen intermedio |
| `docs/prompts/01-resumen-desde-libro.md` | Prompt para generar el `.md` desde el libro |
| `docs/prompts/02-vista-desde-resumen.md` | Prompt para generar `src/data/*.ts` (y opcionalmente HTML) |
| `summaries/<slug>.md` | Un archivo por libro (generado por IA, revisable por vos) |
| `src/types/book.ts` | Tipos TypeScript — referencia del modelo de datos |
| `src/data/<slug>.ts` | Datos consumidos por la app |
| `src/assets/styles.css` | Estilos compartidos (tema oscuro, tarjetas, timeline) |

## Convención de nombres

- **slug**: kebab-case del título corto → `universo-de-la-nada`, `sapiens`, `seven-brief-lessons`
- **Resumen MD**: `summaries/universo-de-la-nada.md`
- **Datos Vue**: `src/data/universo-nada.ts` (export `universoNada`)

## Checklist por libro nuevo

1. [ ] Colocar el libro fuente (epub/pdf) — **no commitear** (está en `.gitignore`)
2. [ ] Ejecutar prompt 01 con la plantilla → `summaries/<slug>.md`
3. [ ] Revisar: citas, cifras, nombres, orden de capítulos
4. [ ] Ejecutar prompt 02 → `src/data/<slug>.ts`
5. [ ] Registrar el libro en `src/App.vue` o en un router/listado (cuando haya varios)
6. [ ] `npm run build` para verificar tipos

## Principios de diseño (memorización)

El contenido del `.md` debe priorizar:

0. **Idioma** — todo en español; solo `title` en idioma original + `title_es` si aplica (ver `AGENTS.md`)
1. **Chunking** — un concepto por tarjeta, un capítulo = 2–4 párrafos máximo
2. **Repetición espaciada visual** — conceptos globales al final + repetidos en capítulos
3. **Anclas mnemotécnicas** — cifras grandes (`~70%`), fechas en cronología, citas literales
4. **Contraste** — comparar teorías (ej. diseño inteligente vs principio antrópico)
5. **Idea central** — bloque de cierre con la tesis en 6 líneas

## Ejemplo

Ver `summaries/universo-de-la-nada.md` (generado a partir del resumen existente).
