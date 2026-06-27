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
python3 scripts/extract-epub.py sapiens          # busca *sapiens*.epub en la raíz
python3 scripts/extract-epub.py --list .         # listar epubs disponibles
python3 scripts/extract-epub.py libro.epub -o .extracted/mi-libro.txt
```

Salida en `.extracted/` (gitignored, regenerable).

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

### Netlify

Conectá el repo y Netlify usará `netlify.toml` automáticamente.

### GitHub Pages

```bash
npm run build
# Publicá el contenido de dist/ con GitHub Actions o gh-pages
```

Para SPA en GitHub Pages, agregá en `vite.config.ts`:

```ts
base: '/nombre-del-repo/'
```

## Estructura

- `src/data/` — contenido de cada libro en TypeScript
- `src/components/` — bloques reutilizables (timeline, concept cards, etc.)
- `legacy/` — HTML original de referencia
