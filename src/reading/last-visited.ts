import { bumpReadingRevision } from './revision'

export const LAST_VISITED_STORAGE_KEY = 'memorable-summaries:last-visited'

export interface LastVisitedBook {
  slug: string
  visitedAt: number
}

export function readLastVisitedBook(): LastVisitedBook | null {
  try {
    const raw = localStorage.getItem(LAST_VISITED_STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<LastVisitedBook>
    if (typeof parsed.slug !== 'string' || !parsed.slug.trim()) return null

    return {
      slug: parsed.slug.trim(),
      visitedAt: typeof parsed.visitedAt === 'number' ? parsed.visitedAt : 0,
    }
  } catch {
    return null
  }
}

export function writeLastVisitedBook(slug: string) {
  const trimmed = slug.trim()
  if (!trimmed) return

  localStorage.setItem(
    LAST_VISITED_STORAGE_KEY,
    JSON.stringify({ slug: trimmed, visitedAt: Date.now() } satisfies LastVisitedBook),
  )
  bumpReadingRevision()
}
