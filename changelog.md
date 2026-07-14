### Changelog

## [Versión 0.2.3]

> 2026-07-13

### Cambios/Mejoras

- ✍️ **Pipeline de resúmenes reforzado**
    - `docs/prompts/01-resumen-desde-libro.md`: argumento por sección, un ejemplo principal por párrafo, conectores de progresión, oraciones ≤ 25 palabras, control de densidad de spans y anti-listitis.
    - `docs/prompts/01a-esqueleto-argumental.md`: pregunta que responde cada capítulo y puente al siguiente.
    - `docs/prompts/01b-revision-fidelidad.md`: rúbrica de legibilidad y hilo conductor.
    - `docs/prompts/01c-correccion-minima.md`: enfoque de "edición de lectura" contra listitis, oraciones largas, spans y keys repetidos.
    - `docs/prompts/02-vista-desde-resumen.md`: el cierre se muestra al final del flujo de lectura.
    - `docs/templates/resumen-libro.template.md`: notas para leads, un ejemplo principal, `<!-- bridge -->` y cierre.
    - `scripts/lint-summary.py`: nuevas métricas de legibilidad (oraciones > 25 palabras, densidad de spans, catálogos de nombres/términos, fragmentos iniciales).
    - `scripts/md-to-ts.py`: soporte para el bloque `<!-- bridge -->`.
    - `src/views/BookView.vue`: el cierre se renderiza después de los capítulos y antes de las secciones colapsables.

- 📖 **Regeneración de `why-evolution-is-true`**
    - Nuevo `summaries/why-evolution-is-true.md` con prosa argumentativa, puentes entre capítulos, oraciones cortas y menos listitis.
    - `src/data/why-evolution-is-true.ts` y `public/index/why-evolution-is-true.json` regenerados.
    - `lint-summary.py`, `check-coverage.py` y `npm run build` pasan sin errores.

## [Versión 0.2.2]

> 2026-07-13

### Ajustes UX/UI

- 🃏 **Flashcards como ejercicio real**
    - El reverso se oculta hasta que el usuario hace clic en "Ver respuesta".
    - Las tarjetas de conceptos muestran la descripción como pregunta y el título como respuesta.
    - Auto-evaluación: "No sabía" devuelve la tarjeta al final de la cola sin marcarla como completa; "Difícil" y "Bien" la completan y registran la revisión.

## [Versión 0.2.1]

> 2026-07-01

### Ajustes UX/UI

- 📱 **Barra inferior unificada**
    - `AppBottomBar` reemplaza las barras móvil separadas de biblioteca y libro.
    - En biblioteca: inicio, búsqueda, continuar lectura y menú global.
    - En libro: biblioteca, portada, audio (si hay) e índice del capítulo, con barra de progreso de scroll.

- 🧭 **Menú global de la app**
    - Drawer lateral con acceso a biblioteca, fases de lectura, conceptos y tensiones.
    - Cierra al navegar o con Escape; no compite con la búsqueda global.

- 🎨 **Diseño modular**
    - Estilos globales divididos en `src/assets/styles/` (tokens, layout, utilidades).
    - CSS por componente/vista para mantenimiento más simple.
    - Hero reutilizable (`SectionPageHero`) en biblioteca, conceptos y tensiones.

- 🔍 **Búsqueda global**
    - Resaltado de coincidencias en resultados (insensible a mayúsculas y tildes).
    - Atajo Ctrl/Cmd+K integrado desde la raíz de la app.

- ✨ **Microinteracciones**
    - Efecto _press ripple_ adaptado a la nueva barra inferior y botones compactos.

- 📖 **Lectura móvil**
    - Barra inferior más pegada al borde (`safe-area` sin padding extra; clearance `4rem`).
    - Progreso de scroll visible en la base del pill (3px).
    - Bloque **Clave** con más contraste (borde y fondo).
    - Badge de capítulo alineado en baseline con el título.
    - _Cómo aprendemos_ cap. 8: porcentajes del experimento en tarjetas `big-numbers`.

- 📎 **Secciones de referencia colapsables**
    - Conceptos clave, Cronología y Figuras clave en la vista del libro quedan plegadas por defecto (acordeón).
    - Clic en el encabezado para expandir; hint con cantidad de ítems; se abren solas al entrar por ancla (`#conceptos`, etc.).

### Infra

- 🚀 **Deploy GitHub Pages**
    - Workflow publica el build en rama `gh-pages`; Pages debe usar **Deploy from a branch → gh-pages** (evita el bucle `deployment_queued` de `deploy-pages`).

### Cambios/Mejoras

- ✍️ **Prosa de los resúmenes (pase 01c completo)**
    - Corrección mínima en los **34 libros**: oraciones con sujeto y verbo, menos estilo «etiqueta: dato», comparaciones con % más legibles.
    - `lint-summary.py` endurecido: detecta etiquetas telegráficas, `;` / dobles `—` en párrafos y bloques `key`, y comparaciones `vs.` ambiguas.
    - Paso C (`01c-correccion-minima.md`) + lint **obligatorio** en el pipeline antes de `md-to-ts.py`.
    - `python3 scripts/md-to-ts.py --all` regenera todos los `src/data/*.ts` de una vez.

## [Versión 0.2.0]

> 2026-07-01

### Nuevas funciones

- 🧭 **Ruta de lectura curada**
    - CTA «Continuar» / «Siguiente» en la biblioteca según progreso y orden de los 34 libros.
    - Filtros por estado (en curso, por hacer, leídos, con audio) y por fase (1–8).
    - Puentes editoriales entre libros consecutivos al completar una lectura.

- 🔍 **Búsqueda global en la biblioteca**
    - Atajo Ctrl/Cmd+K abre un panel para buscar en los libros que ya leíste.
    - Resultados con coincidencias en capítulos, conceptos y citas.

- 📚 **Glosario de conceptos por fase**
    - Vista `/conceptos` con conceptos clave de libros marcados como leídos, agrupados por fase de lectura.
    - Cada tarjeta enlaza al bloque de conceptos del libro correspondiente.

- ⚡ **Tensiones entre lecturas**
    - Vista `/tensiones` con pares de libros cuyas tesis chocan o se iluminan mutuamente.
    - Cada par aparece al completar ambos libros.

- 🃏 **Repaso con flashcards**
    - `/repaso/:slug` — repaso rápido (highlight + conceptos).
    - `/tarjetas/:slug` — sesión SRS con intervalos 1 / 7 / 30 días.
    - `/fase/:num` — recapitulación de fase con preguntas abiertas.

- 🔔 **Recordatorios de repaso espaciado**
    - Avisos cuando toca repasar un libro (día 1, semana y mes).
    - Banner en biblioteca con enlace al repaso.

- 🌐 **SEO para compartir**
    - Metadatos Open Graph y Twitter Card por página (cliente + HTML estático en build).
    - `og:image` por libro desde `public/covers/<slug>.jpg`.
    - `sitemap.xml`, `robots.txt` y JSON-LD tipo Book.

- 📋 **Changelog in-app**
    - Vista `/changelog` generada desde `changelog.md`.

### Ajustes UX/UI

- ✅ **Panel al completar lectura**
    - Puente al siguiente libro, «Ir al siguiente» y enlace a repaso.

### Cambios/Mejoras

- 📖 **Criterio «leído»**
    - El libro cuenta como leído al llegar a **Figuras clave** (compatibilidad con progreso anterior en localStorage).

- ✍️ **Calidad de los resúmenes**
    - Revisión editorial (nivel B) de los 34 libros: prosa más clara, cierres sin repetición, menos estilo telegráfico.
    - Conversión mecánica MD → TS con `md-to-ts.py` y lint con `lint-summary.py`.
    - Regeneración de narración TTS para libros con audio tras actualizar textos.

- 🛠️ **Pipeline e índice**
    - `build-corpus-index.py` → `public/index/` (búsqueda, flashcards).
    - `export-anki.py` para exportar tarjetas TSV.
    - Prompt `01c-correccion-minima.md` para pulido conservador por sección.

## [Versión 0.1.0]

> 2026-06-01

### Nuevas funciones

- 📖 **Biblioteca de resúmenes memorizables**
    - Estantería con filtros por estado (en curso, por hacer, leídos, con audio) y por fase de lectura.
    - CTA para retomar el último libro en curso.

- 📕 **Vista por libro**
    - Capítulos, conceptos clave, cronología, figuras, cierre y reproductor de audio integrado.
    - Progreso de lectura y celebración al marcar un libro como leído.

- 📲 **App instalable (PWA)**
    - Actualización automática al detectar una nueva versión desplegada.
