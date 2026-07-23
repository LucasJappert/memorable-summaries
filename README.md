# Resúmenes de libros

Resúmenes interactivos para repasar y memorizar conceptos. Stack: Vue 3, Vite, TypeScript.

## Pipeline de generación (IA)

**Comando natural:** «Generame el html del libro Sapiens» → el agente sigue [`AGENTS.md`](AGENTS.md).

Detalle del circuito en **[docs/PIPELINE.md](docs/PIPELINE.md)**:

1. Libro → `summaries/<slug>.md` (prompt en `docs/prompts/01-resumen-desde-libro.md`)
2. MD → `src/data/<slug>.ts` (prompt en `docs/prompts/02-vista-desde-resumen.md`)
3. MD → `audio/<slug>.wav` (prompt en `docs/prompts/03-audio-desde-resumen.md`) — **un libro por vez**

Plantilla del MD intermedio: `docs/templates/resumen-libro.template.md`

### Audio TTS (lucas-ai-api)

`--tts` usa OmniVoice vía lucas-ai-api con **API key** (Bearer directo; sin login JWT). El fair-share por cliente usa el nombre de la key (`memorable-summaries`). Detalle para agentes: `docs/prompts/03-audio-desde-resumen.md`.

```bash
cp .env.example .env   # una vez: completar LUCAS_AI_API_KEY
python3 scripts/md-to-narration.py free-will --tts --mp3
```

La key vive solo en `.env` (gitignored). El script la carga solo. No la hardcodees: el repo es público.

Tras generar, sumá el slug a `BOOKS_WITH_AUDIO` en `src/books/audio-catalog.ts` para que aparezca en la UI, y commiteá `public/audio/<slug>.mp3`.

### Audio en la app

- Cola global (icono en la bottom bar): reproducir, pausar, siguiente/anterior, reordenar, vaciar con confirmación.
- El mini-player solo se muestra si lo abrís desde el botón de audio; cerrar la cola no lo fuerza.
- Mientras suena una narración, la bottom bar muestra un ecualizador de fondo.
- Biblioteca: menú ⋮ en cards con audio (agregar al final / siguiente / reproducir).

### Extraer texto de un epub

```bash
python3 scripts/extract-epub.py sapiens          # busca en fuentes/
python3 scripts/extract-epub.py --list           # listar libros disponibles
python3 scripts/extract-epub.py libro.epub -o .extracted/mi-libro.txt
```

Libros fuente en **`fuentes/`** (gitignored). Salida extraída en `.extracted/` (regenerable).

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### GitHub Pages

Push a `main` dispara `.github/workflows/deploy.yml`, que hace `npm run build` y publica `dist/` en la rama **`gh-pages`**.

**Configuración obligatoria (una sola vez):**

1. Repo → **Settings → Pages**
2. **Build and deployment → Source:** `Deploy from a branch`
3. **Branch:** `gh-pages` / **`/ (root)`**
4. Guardar y esperar al workflow verde en **Actions**

URL: **https://lucasjappert.github.io/memorable-summaries/**

Si ves `GET /src/main.ts 404`, Pages sigue apuntando a `main` en lugar de `gh-pages`.

Build local con el mismo base path:

```bash
VITE_BASE_PATH=/memorable-summaries/ npm run build
```

### Netlify

Conectá el repo y Netlify usará `netlify.toml` automáticamente (base `/`, sin prefijo de repo).

## Estructura

- `fuentes/` — libros originales (.epub, .pdf), no commiteados
- `src/data/` — contenido de cada libro en TypeScript
- `src/components/` — bloques reutilizables (timeline, concept cards, etc.)
- `legacy/` — HTML original de referencia
