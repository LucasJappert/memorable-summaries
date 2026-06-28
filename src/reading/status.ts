import { readReadingPosition } from './storage'

export type BookReadingStatus = 'new' | 'reading' | 'done'

/** Progreso mínimo para considerar un libro leído (check en portada). */
export const DONE_PROGRESS_THRESHOLD = 95

export const STATUS_SORT_ORDER: Record<BookReadingStatus, number> = {
  reading: 0,
  new: 1,
  done: 2,
}

export function getBookReadingStatus(slug: string): BookReadingStatus {
  const reading = readReadingPosition(slug)
  if (!reading) return 'new'
  if (reading.progress >= DONE_PROGRESS_THRESHOLD) return 'done'
  return 'reading'
}

export function getBookProgress(slug: string): number {
  return readReadingPosition(slug)?.progress ?? 0
}
