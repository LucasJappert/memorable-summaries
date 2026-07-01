import { readAudioPosition } from './audio-storage'
import { hasMeaningfulScroll, readReadingPosition } from './storage'

export type BookReadingStatus = 'new' | 'reading' | 'done'

/** Desde esta sección (inclusive) el libro cuenta como leído. */
export const READ_COMPLETE_FROM_SECTION = 'figuras'

const READ_COMPLETE_SECTIONS = new Set([READ_COMPLETE_FROM_SECTION])

export const STATUS_SORT_ORDER: Record<BookReadingStatus, number> = {
  reading: 0,
  new: 1,
  done: 2,
}

/** @deprecated Nombre legacy; la sección objetivo es `figuras`. */
export function hasReachedConceptos(sectionId: string): boolean {
  return READ_COMPLETE_SECTIONS.has(sectionId)
}

export function hasReachedCompleteSection(sectionId: string): boolean {
  return READ_COMPLETE_SECTIONS.has(sectionId)
}

export function isBookMarkedRead(reading: NonNullable<ReturnType<typeof readReadingPosition>>): boolean {
  if (reading.manualUnread) return false
  // Flag legacy en localStorage: sigue contando como leído (compatibilidad).
  if (reading.reachedConceptos) return true
  if (hasReachedCompleteSection(reading.sectionId)) return true
  if (reading.furthestSectionId && hasReachedCompleteSection(reading.furthestSectionId)) return true
  return false
}

function hasAudioProgress(slug: string): boolean {
  const audio = readAudioPosition(slug)
  return audio !== null && audio.currentTime > 0
}

export function getBookReadingStatus(slug: string): BookReadingStatus {
  const reading = readReadingPosition(slug)
  if (reading && isBookMarkedRead(reading)) return 'done'
  if (
    reading &&
    (reading.sectionId || hasMeaningfulScroll(reading.scrollY) || reading.progress > 0)
  ) {
    return 'reading'
  }
  if (hasAudioProgress(slug)) return 'reading'
  return 'new'
}

export function getBookProgress(slug: string): number {
  return readReadingPosition(slug)?.progress ?? 0
}

export function countReadBooks(slugs: string[]): number {
  return slugs.filter((slug) => getBookReadingStatus(slug) === 'done').length
}
