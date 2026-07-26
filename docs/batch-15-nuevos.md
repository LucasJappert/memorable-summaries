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
| 1 | The Order of Time | Carlo Rovelli | `order-of-time` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | Reality Is Not What It Seems | Carlo Rovelli | `reality-not-what-it-seems` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | The Elegant Universe | Brian Greene | `elegant-universe` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | The First Three Minutes | Steven Weinberg | `first-three-minutes` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | What Is Life? | Erwin Schrödinger | `what-is-life` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 6 | Darwin’s Dangerous Idea | Daniel Dennett | `darwins-dangerous-idea` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 7 | The Gene | Siddhartha Mukherjee | `the-gene` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 8 | Otherlands | Thomas Halliday | `otherlands` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 9 | The Eerie Silence | Paul Davies | `eerie-silence` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 10 | Consciousness Explained | Daniel Dennett | `consciousness-explained` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11 | Human Compatible | Stuart Russell | `human-compatible` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | The Information | James Gleick | `the-information` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 13 | Thinking, Fast and Slow | Daniel Kahneman | `thinking-fast-and-slow` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 14 | Guns, Germs, and Steel | Jared Diamond | `guns-germs-and-steel` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 15 | The Structure of Scientific Revolutions | Thomas Kuhn | `structure-scientific-revolutions` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Notas por libro

### Órdenes de lectura 49–63

| # | Slug | Orden | Fase |
|---|------|-------|------|
| 1 | `order-of-time` | 49 | 1 |
| 2 | `reality-not-what-it-seems` | 50 | 1 |
| 3 | `elegant-universe` | 51 | 1 |
| 4 | `first-three-minutes` | 52 | 1 |
| 5 | `what-is-life` | 53 | 2 |
| 6 | `darwins-dangerous-idea` | 54 | 2 |
| 7 | `the-gene` | 55 | 2 |
| 8 | `otherlands` | 56 | 2 |
| 9 | `eerie-silence` | 57 | 3 |
| 10 | `consciousness-explained` | 58 | 7 |
| 11 | `human-compatible` | 59 | 5 |
| 12 | `the-information` | 60 | 8 |
| 13 | `thinking-fast-and-slow` | 61 | 8 |
| 14 | `guns-germs-and-steel` | 62 | 6 |
| 15 | `structure-scientific-revolutions` | 63 | 8 |

Loudnorm −16 LUFS en pipeline TTS. Commit listo; push a `main` cuando quieras publicar.

---

## Progreso rápido

- **Contenido + audio + build + deploy (chip):** 15/15
- **Push a prod:** pendiente manual
