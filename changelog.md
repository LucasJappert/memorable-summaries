### Changelog

## [Versión 0.2.1]

> 2026-07-01

### Ajustes UX/UI

-   📱 **Barra inferior unificada**
    -   `AppBottomBar` reemplaza las barras móvil separadas de biblioteca y libro.
    -   En biblioteca: inicio, búsqueda, continuar lectura y menú global.
    -   En libro: biblioteca, portada, audio (si hay) e índice del capítulo, con barra de progreso de scroll.

-   🧭 **Menú global de la app**
    -   Drawer lateral con acceso a biblioteca, fases de lectura, conceptos y tensiones.
    -   Cierra al navegar o con Escape; no compite con la búsqueda global.

-   🎨 **Diseño modular**
    -   Estilos globales divididos en `src/assets/styles/` (tokens, layout, utilidades).
    -   CSS por componente/vista para mantenimiento más simple.
    -   Hero reutilizable (`SectionPageHero`) en biblioteca, conceptos y tensiones.

-   🔍 **Búsqueda global**
    -   Resaltado de coincidencias en resultados (insensible a mayúsculas y tildes).
    -   Atajo Ctrl/Cmd+K integrado desde la raíz de la app.

-   ✨ **Microinteracciones**
    -   Efecto *press ripple* adaptado a la nueva barra inferior y botones compactos.

## [Versión 0.2.0]

> 2026-07-01

### Nuevas funciones

-   🧭 **Ruta de lectura curada**
    -   CTA «Continuar» / «Siguiente» en la biblioteca según progreso y orden de los 34 libros.
    -   Filtros por estado (en curso, por hacer, leídos, con audio) y por fase (1–8).
    -   Puentes editoriales entre libros consecutivos al completar una lectura.

-   🔍 **Búsqueda global en la biblioteca**
    -   Atajo Ctrl/Cmd+K abre un panel para buscar en los libros que ya leíste.
    -   Resultados con coincidencias en capítulos, conceptos y citas.

-   📚 **Glosario de conceptos por fase**
    -   Vista `/conceptos` con conceptos clave de libros marcados como leídos, agrupados por fase de lectura.
    -   Cada tarjeta enlaza al bloque de conceptos del libro correspondiente.

-   ⚡ **Tensiones entre lecturas**
    -   Vista `/tensiones` con pares de libros cuyas tesis chocan o se iluminan mutuamente.
    -   Cada par aparece al completar ambos libros.

-   🃏 **Repaso con flashcards**
    -   `/repaso/:slug` — repaso rápido (highlight + conceptos).
    -   `/tarjetas/:slug` — sesión SRS con intervalos 1 / 7 / 30 días.
    -   `/fase/:num` — recapitulación de fase con preguntas abiertas.

-   🔔 **Recordatorios de repaso espaciado**
    -   Avisos cuando toca repasar un libro (día 1, semana y mes).
    -   Banner en biblioteca con enlace al repaso.

-   🌐 **SEO para compartir**
    -   Metadatos Open Graph y Twitter Card por página (cliente + HTML estático en build).
    -   `og:image` por libro desde `public/covers/<slug>.jpg`.
    -   `sitemap.xml`, `robots.txt` y JSON-LD tipo Book.

-   📋 **Changelog in-app**
    -   Vista `/changelog` generada desde `changelog.md`.

### Ajustes UX/UI

-   ✅ **Panel al completar lectura**
    -   Puente al siguiente libro, «Ir al siguiente» y enlace a repaso.

### Cambios/Mejoras

-   📖 **Criterio «leído»**
    -   El libro cuenta como leído al llegar a **Figuras clave** (compatibilidad con progreso anterior en localStorage).

-   ✍️ **Calidad de los resúmenes**
    -   Revisión editorial (nivel B) de los 34 libros: prosa más clara, cierres sin repetición, menos estilo telegráfico.
    -   Conversión mecánica MD → TS con `md-to-ts.py` y lint con `lint-summary.py`.
    -   Regeneración de narración TTS para libros con audio tras actualizar textos.

-   🛠️ **Pipeline e índice**
    -   `build-corpus-index.py` → `public/index/` (búsqueda, flashcards).
    -   `export-anki.py` para exportar tarjetas TSV.
    -   Prompt `01c-correccion-minima.md` para pulido conservador por sección.

## [Versión 0.1.0]

> 2026-06-01

### Nuevas funciones

-   📖 **Biblioteca de resúmenes memorizables**
    -   Estantería con filtros por estado (en curso, por hacer, leídos, con audio) y por fase de lectura.
    -   CTA para retomar el último libro en curso.

-   📕 **Vista por libro**
    -   Capítulos, conceptos clave, cronología, figuras, cierre y reproductor de audio integrado.
    -   Progreso de lectura y celebración al marcar un libro como leído.

-   📲 **App instalable (PWA)**
    -   Actualización automática al detectar una nueva versión desplegada.
