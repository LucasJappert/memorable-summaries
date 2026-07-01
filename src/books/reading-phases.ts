import { READING_ORDER_BY_SLUG } from './reading-order'

export interface ReadingPhase {
  num: number
  title: string
  slugs: string[]
}

const PHASE_RANGES: Array<{ num: number; title: string; from: number; to: number }> = [
  { num: 1, title: 'Cosmos y física', from: 1, to: 5 },
  { num: 2, title: 'Evolución', from: 6, to: 10 },
  { num: 3, title: 'Origen de la vida / SETI', from: 11, to: 14 },
  { num: 4, title: 'Cerebro', from: 15, to: 18 },
  { num: 5, title: 'Inteligencia artificial', from: 19, to: 21 },
  { num: 6, title: 'Harari y matemáticas', from: 22, to: 25 },
  { num: 7, title: 'Libre albedrío y conciencia', from: 26, to: 31 },
  { num: 8, title: 'Deutsch y Taleb', from: 32, to: 34 },
]

function slugsInOrderRange(from: number, to: number): string[] {
  return Object.entries(READING_ORDER_BY_SLUG)
    .filter(([, order]) => order >= from && order <= to)
    .sort(([, a], [, b]) => a - b)
    .map(([slug]) => slug)
}

export const READING_PHASES: ReadingPhase[] = PHASE_RANGES.map(({ num, title, from, to }) => ({
  num,
  title,
  slugs: slugsInOrderRange(from, to),
}))

const slugToPhase = new Map<string, ReadingPhase>(
  READING_PHASES.flatMap((phase) => phase.slugs.map((slug) => [slug, phase] as const)),
)

export function getPhaseForSlug(slug: string): ReadingPhase | undefined {
  return slugToPhase.get(slug)
}

/** Alias para vistas de repaso por fase. */
export function getPhase(phaseNum: number): ReadingPhase | undefined {
  return READING_PHASES.find((phase) => phase.num === phaseNum)
}

export function getPhaseBooks(phaseNum: number): string[] {
  return getPhase(phaseNum)?.slugs ?? []
}

export function getPhaseForReadingOrder(order: number): ReadingPhase | undefined {
  const slug = Object.entries(READING_ORDER_BY_SLUG).find(([, value]) => value === order)?.[0]
  return slug ? getPhaseForSlug(slug) : undefined
}
