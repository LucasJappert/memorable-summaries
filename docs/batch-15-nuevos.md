# Batch 15 — nuevos candidatos

Tracker para los 15 libros propuestos (jul 2026). Actualizar chips al avanzar cada etapa.

## Leyenda

| Chip | Significado |
|------|-------------|
| `⬜` | Pendiente |
| `🔄` | En curso |
| `✅` | Listo |
| `🔴` | Bloqueado / error |
| `⏭` | Omitido a propósito |

## Etapas (por libro)

1. **Descarga** — EPUB/PDF válido en `fuentes/` (sin DRM, no MOBI)
2. **Extracción** — `.extracted/<slug>.txt`
3. **Esqueleto** — `summaries/<slug>.skeleton.md` (A0)
4. **Resumen** — `summaries/<slug>.md` (A)
5. **Fidelidad** — B-fid + `check-coverage.py` OK
6. **Prosa** — C + `lint-summary.py` OK
7. **TypeScript** — `src/data/<slug-corto>.ts` (`md-to-ts.py`)
8. **Catálogo** — `catalog.ts` + `reading-order.ts` (+ fase si aplica)
9. **Portada** — `public/covers/<slug>.jpg` (`extract-cover.py`)
10. **Audio** — `public/audio/<slug>.mp3` + `audio-catalog.ts`
11. **Build** — `npm run build` OK
12. **Deploy** — en main / prod con el libro visible

> Meta: cada libro debería llegar a **Build ✅** (y **Audio ✅** si hay key TTS) antes de marcar **Deploy**.

---

## Tablero

| # | Libro | Autor | Slug | Descarga | Extracción | Esqueleto | Resumen | Fidelidad | Prosa | TS | Catálogo | Portada | Audio | Build | Deploy |
|---|--------|--------|------|----------|------------|-----------|---------|-----------|-------|----|----------|---------|-------|-------|--------|
| 1 | The Order of Time | Carlo Rovelli | `order-of-time` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⬜ |
| 2 | Reality Is Not What It Seems | Carlo Rovelli | `reality-not-what-it-seems` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 3 | The Elegant Universe | Brian Greene | `elegant-universe` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 4 | The First Three Minutes | Steven Weinberg | `first-three-minutes` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 5 | What Is Life? | Erwin Schrödinger | `what-is-life` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 6 | Darwin’s Dangerous Idea | Daniel Dennett | `darwins-dangerous-idea` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 7 | The Gene | Siddhartha Mukherjee | `the-gene` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 8 | Otherlands | Thomas Halliday | `otherlands` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 9 | The Eerie Silence | Paul Davies | `eerie-silence` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 10 | Consciousness Explained | Daniel Dennett | `consciousness-explained` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 11 | Human Compatible | Stuart Russell | `human-compatible` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 12 | The Information | James Gleick | `the-information` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 13 | Thinking, Fast and Slow | Daniel Kahneman | `thinking-fast-and-slow` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 14 | Guns, Germs, and Steel | Jared Diamond | `guns-germs-and-steel` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| 15 | The Structure of Scientific Revolutions | Thomas Kuhn | `structure-scientific-revolutions` | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

---

## Notas por libro

### 1. The Order of Time (`order-of-time`)

- Fase: **1** (Cosmos y física) · reading order **49**
- `meta.title`: `The Order of Time` · `titleEs`: `El orden del tiempo`
- Export TS: `orderOfTime` → `src/data/order-of-time.ts`
- Fuente: `fuentes/The Order of Time - Carlo Rovelli.epub` (md5 `c876139b1e980ee3e95dbe2f4ce71bf3`)
- Archivos: `summaries/order-of-time.{skeleton,md}`, `src/data/order-of-time.ts`, catálogo + orden
- Build: OK (2026-07-26). Audio: `public/audio/order-of-time.mp3` (~14 MB, ~29 min) + `audio-catalog.ts`.
- Portada: `public/covers/order-of-time.jpg` (420×643, del EPUB).
- **Pendiente para prod:** commit + push a `main` (deploy GitHub Pages).

### 2–15

_(Completar md5 / espejo preferido al descargar.)_

---

## Progreso rápido

- **En curso:** —
- **Listos para deploy (commit/push):** #1 The Order of Time
- **Completados (Deploy ✅):** 0 / 15
