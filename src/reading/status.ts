import { hasMeaningfulScroll, readReadingPosition } from './storage'

export type BookReadingStatus = 'new' | 'reading' | 'done'

/** Desde esta sección (inclusive) el libro cuenta como leído. */
export const READ_COMPLETE_FROM_SECTION = 'conceptos'

const READ_COMPLETE_SECTIONS = new Set([
  READ_COMPLETE_FROM_SECTION,
  'cronologia',
  'figuras',
])

export const STATUS_SORT_ORDER: Record<BookReadingStatus, number> = {
  reading: 0,
  new: 1,
  done: 2,
}

export function hasReachedConceptos(sectionId: string): boolean {
  return READ_COMPLETE_SECTIONS.has(sectionId)
}

export function isBookMarkedRead(reading: NonNullable<ReturnType<typeof readReadingPosition>>): boolean {
  if (reading.manualUnread) return false
  if (reading.reachedConceptos) return true
  if (hasReachedConceptos(reading.sectionId)) return true
  if (reading.furthestSectionId && hasReachedConceptos(reading.furthestSectionId)) return true
  return false
}

export function getBookReadingStatus(slug: string): BookReadingStatus {
  const reading = readReadingPosition(slug)
  if (!reading) return 'new'
  if (isBookMarkedRead(reading)) return 'done'
  if (reading.sectionId || hasMeaningfulScroll(reading.scrollY) || reading.progress > 0) return 'reading'
  return 'new'
}

export function getBookProgress(slug: string): number {
  return readReadingPosition(slug)?.progress ?? 0
}

export function countReadBooks(slugs: string[]): number {
  return slugs.filter((slug) => getBookReadingStatus(slug) === 'done').length
}
