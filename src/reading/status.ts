import { readReadingPosition } from './storage'

export type BookReadingStatus = 'new' | 'reading' | 'done'

export const STATUS_SORT_ORDER: Record<BookReadingStatus, number> = {
  reading: 0,
  new: 1,
  done: 2,
}

export function getBookReadingStatus(slug: string): BookReadingStatus {
  const reading = readReadingPosition(slug)
  if (!reading) return 'new'
  if (reading.progress >= 98) return 'done'
  return 'reading'
}

export function getBookProgress(slug: string): number {
  return readReadingPosition(slug)?.progress ?? 0
}
