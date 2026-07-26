import { READING_ORDER_BY_SLUG } from './reading-order'

export interface ReadingPhase {
  num: number
  title: string
  slugs: string[]
}

const PHASE_RANGES: Array<{ num: number; title: string; ranges: Array<[number, number]> }> = [
  { num: 1, title: 'Cosmos y física', ranges: [[1, 5], [35, 39], [49, 52]] },
  { num: 2, title: 'Evolución', ranges: [[6, 10], [53, 56]] },
  { num: 3, title: 'Origen de la vida / SETI', ranges: [[11, 14], [57, 57]] },
  { num: 4, title: 'Cerebro', ranges: [[15, 18]] },
  { num: 5, title: 'Inteligencia artificial', ranges: [[19, 21], [40, 41], [59, 59]] },
  { num: 6, title: 'Harari y matemáticas', ranges: [[22, 25], [62, 62]] },
  { num: 7, title: 'Libre albedrío y conciencia', ranges: [[26, 31], [42, 45], [58, 58]] },
  { num: 8, title: 'Deutsch y Taleb', ranges: [[32, 34], [60, 61], [63, 63]] },
  { num: 9, title: 'Longevidad y muerte', ranges: [[46, 48]] },
]

function slugsInOrderRanges(ranges: Array<[number, number]>): string[] {
  const orders = new Set<number>()
  for (const [from, to] of ranges) {
    for (let order = from; order <= to; order += 1) {
      orders.add(order)
    }
  }
  return Object.entries(READING_ORDER_BY_SLUG)
    .filter(([, order]) => orders.has(order))
    .sort(([, a], [, b]) => a - b)
    .map(([slug]) => slug)
}

export const READING_PHASES: ReadingPhase[] = PHASE_RANGES.map(({ num, title, ranges }) => ({
  num,
  title,
  slugs: slugsInOrderRanges(ranges),
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
