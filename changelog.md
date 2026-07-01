### Changelog

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

-   📱 **Barra inferior en biblioteca (móvil)**
    -   Pill con marca al navegar la estantería (navegación completa tipo libro: pendiente).

### Cambios/Mejoras

-   📖 **Criterio «leído»**
    -   El libro cuenta como leído al llegar a **Figuras clave** (compatibilidad con progreso anterior en localStorage).

-   🛠️ **Pipeline e índice**
    -   `build-corpus-index.py` → `public/index/` (búsqueda, flashcards).
    -   `export-anki.py` para exportar tarjetas TSV.

-   🔊 **Narración**
    -   Actualización de textos de audio para el catálogo actual de libros.

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
