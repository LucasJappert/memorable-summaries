export const READING_STORAGE_PREFIX = 'memorable-summaries:reading:'

export interface ReadingPosition {
  sectionId: string
  sectionLabel: string
  scrollY: number
  progress: number
  updatedAt: number
}

export function readingStorageKey(slug: string) {
  return `${READING_STORAGE_PREFIX}${slug}`
}

export function readReadingPosition(slug: string): ReadingPosition | null {
  try {
    const raw = localStorage.getItem(readingStorageKey(slug))
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<ReadingPosition>
    if (typeof parsed.scrollY !== 'number') return null

    return {
      sectionId: typeof parsed.sectionId === 'string' ? parsed.sectionId : '',
      sectionLabel: typeof parsed.sectionLabel === 'string' ? parsed.sectionLabel : '',
      scrollY: Math.max(0, parsed.scrollY),
      progress:
        typeof parsed.progress === 'number'
          ? Math.min(100, Math.max(0, Math.round(parsed.progress)))
          : 0,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    }
  } catch {
    return null
  }
}

export function writeReadingPosition(slug: string, position: ReadingPosition) {
  localStorage.setItem(readingStorageKey(slug), JSON.stringify(position))
}

export function computeScrollProgress(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (max <= 0) return 100
  return Math.min(100, Math.round((window.scrollY / max) * 100))
}
