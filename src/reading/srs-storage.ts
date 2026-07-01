import { getBookBySlug } from '../books/catalog'
import { getPhaseForSlug } from '../books/reading-phases'
import { bumpReadingRevision } from './revision'

export const SRS_STORAGE_KEY = 'memorable-summaries:srs'

export type ReviewQuality = 'again' | 'hard' | 'good'

export interface SrsCardState {
  id: string
  slug: string
  front: string
  back: string
  phase?: number
  intervalDays: number
  dueAt: number
  reviews: number
}

interface SrsStore {
  cards: Record<string, SrsCardState>
}

const INTERVALS = [1, 7, 30] as const

function readStore(): SrsStore {
  try {
    const raw = localStorage.getItem(SRS_STORAGE_KEY)
    if (!raw) return { cards: {} }
    const parsed = JSON.parse(raw) as Partial<SrsStore>
    return { cards: parsed.cards ?? {} }
  } catch {
    return { cards: {} }
  }
}

function writeStore(store: SrsStore) {
  localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(store))
  bumpReadingRevision()
}

function startOfDay(ts: number): number {
  const d = new Date(ts)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

function addDays(ts: number, days: number): number {
  return startOfDay(ts) + days * 86_400_000
}

function buildCardFromBook(slug: string, id: string, front: string, back: string): SrsCardState {
  const phase = getPhaseForSlug(slug)?.num
  return {
    id,
    slug,
    front,
    back,
    ...(phase !== undefined ? { phase } : {}),
    intervalDays: INTERVALS[0],
    dueAt: startOfDay(Date.now()),
    reviews: 0,
  }
}

export function ensureCardsForBook(slug: string): SrsCardState[] {
  const book = getBookBySlug(slug)
  if (!book) return []

  const store = readStore()
  const ids: Array<{ id: string; front: string; back: string }> = []

  const highlight = book.closing.highlight.trim()
  if (highlight) {
    ids.push({
      id: `${slug}:highlight`,
      front: '¿Cuál es la idea central del cierre?',
      back: highlight,
    })
  }

  book.keyConcepts.forEach((concept, index) => {
    ids.push({
      id: `${slug}:concept:${index}`,
      front: concept.title,
      back: concept.description,
    })
  })

  for (const spec of ids) {
    if (!store.cards[spec.id]) {
      store.cards[spec.id] = buildCardFromBook(slug, spec.id, spec.front, spec.back)
    }
  }

  writeStore(store)
  return ids.map((spec) => store.cards[spec.id]).filter(Boolean)
}

export function getCardsForBook(slug: string): SrsCardState[] {
  ensureCardsForBook(slug)
  const store = readStore()
  return Object.values(store.cards).filter((card) => card.slug === slug)
}

export function getDueCards(now = Date.now()): SrsCardState[] {
  const store = readStore()
  return Object.values(store.cards)
    .filter((card) => card.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt)
}

function nextInterval(current: number, quality: ReviewQuality): number {
  if (quality === 'again') return INTERVALS[0]
  if (quality === 'hard') return current <= INTERVALS[0] ? INTERVALS[0] : INTERVALS[1]
  const idx = INTERVALS.findIndex((value) => value === current)
  if (idx < 0 || idx >= INTERVALS.length - 1) return INTERVALS[INTERVALS.length - 1]
  return INTERVALS[idx + 1]
}

export function recordReview(cardId: string, quality: ReviewQuality): SrsCardState | null {
  const store = readStore()
  const card = store.cards[cardId]
  if (!card) return null

  const intervalDays = nextInterval(card.intervalDays, quality)
  const updated: SrsCardState = {
    ...card,
    intervalDays,
    dueAt: addDays(Date.now(), intervalDays),
    reviews: card.reviews + 1,
  }
  store.cards[cardId] = updated
  writeStore(store)
  return updated
}

export function ensureAllBookCards(slugs: string[]) {
  for (const slug of slugs) ensureCardsForBook(slug)
}
