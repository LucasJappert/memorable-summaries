# Resúmenes de libros

Resúmenes interactivos para repasar y memorizar conceptos. Stack: Vue 3, Vite, TypeScript.

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
