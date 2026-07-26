# Arte visual del libro (Memorable)

Tras portada editorial (`extract-cover.py`) y antes o junto al audio, generar **atmósfera**, **portada Memorable** y **OG** vía lucas-ai-api.

## Auth

Igual que TTS: `LUCAS_AI_API_KEY` en `.env` (repo público: nunca commitear la key).

```bash
set -a && source .env && set +a
python3 scripts/generate-book-art.py <slug>
# Varios libros / más rápido (default --jobs 2; API ~2 por cliente):
python3 scripts/generate-book-art.py slug1 slug2 slug3 --jobs 2
```

## Estilo de la serie (obligatorio en `style`)

Usar este bloque (o equivalente) en `scripts/art-prompts/<slug>.json`:

> Cinematic 3D illustration style like a prestige animated feature (soft volumetric lighting, rounded forms, rich textures, gentle bloom and glow on celestial light). Deep midnight blues and indigos with warm gold moonlight and teal accents. Whimsical sense of wonder and scale, not photoreal, not flat vector. No text, no typography, no logos, no watermarks, no UI, no book covers. If any living beings appear, use stylized animated-feature character design (expressive, soft, non-photoreal) — never photoreal humans. No purple neon AI-glow cliché.

## Archivos

| Asset | Ruta | Size API |
|-------|------|----------|
| Atmósfera (hero) | `public/art/<slug>/atmosphere.jpg` | `landscape` |
| OG share | `public/art/<slug>/og.jpg` | `landscape` |
| Portada Memorable | `public/covers/<slug>.jpg` | `portrait` |
| Backup editorial | `public/covers/<slug>.editorial.jpg` | (copia antes de pisar) |

Prompts: `scripts/art-prompts/<slug>.json` (ver ejemplos `cosmos.json`, `universo-de-la-nada.json`).

## Pasos del agente

1. Si no existe, crear `scripts/art-prompts/<slug>.json` con `style` + prompts `atmosphere` / `cover` / `og` anclados a la tesis del libro (meta + idea central del MD).
2. Asegurar portada editorial en `public/covers/<slug>.jpg` (`extract-cover.py` si falta).
3. `python3 scripts/generate-book-art.py <slug>`  
   - Hace backup `.editorial.jpg` si aún no existe  
   - Genera atmosphere, og y Memorable cover  
4. Regenerar: `--force` o `--only atmosphere,cover,og`
5. No hace falta tocar TypeScript: la app resuelve por convención de rutas; el switch «Originales» usa `.editorial.jpg`.

## Qué no generar (por ahora)

- Fondos por capítulo / idea central  
- Thumbs de conceptos  
- Arte de fases de lectura  
