# Resúmenes de libros

Resúmenes interactivos para repasar y memorizar conceptos. Stack: Vue 3, Vite, TypeScript.

## Pipeline de generación (IA)

**Comando natural:** «Generame el html del libro Sapiens» → el agente sigue [`AGENTS.md`](AGENTS.md).

Detalle del circuito en **[docs/PIPELINE.md](docs/PIPELINE.md)**:

1. Libro → `summaries/<slug>.md` (prompt en `docs/prompts/01-resumen-desde-libro.md`)
2. MD → `src/data/<slug>.ts` (prompt en `docs/prompts/02-vista-desde-resumen.md`)

Plantilla del MD intermedio: `docs/templates/resumen-libro.template.md`

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

Push a `main` dispara el workflow `.github/workflows/deploy.yml`.

1. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Tras el primer push, la app queda en:  
   **https://lucasjappert.github.io/memorable-summaries/**

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
