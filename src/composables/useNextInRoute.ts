import { computed } from 'vue'
import { bookCatalog, type BookCatalogEntry } from '../books/catalog'
import { READING_ORDER_BY_SLUG } from '../books/reading-order'
import { readAudioPosition } from '../reading/audio-storage'
import { readLastVisitedBook } from '../reading/last-visited'
import { getBookReadingStatus } from '../reading/status'
import { readReadingPosition } from '../reading/storage'
import { readingRevision } from '../reading/revision'

const ORDERED_SLUGS = Object.entries(READING_ORDER_BY_SLUG)
  .sort(([, a], [, b]) => a - b)
  .map(([slug]) => slug)

function findCatalogEntry(slug: string): BookCatalogEntry | undefined {
  return bookCatalog.find((book) => book.slug === slug)
}

export function getNextBook(slug?: string): BookCatalogEntry | undefined {
  if (!slug) {
    const first = ORDERED_SLUGS[0]
    return first ? findCatalogEntry(first) : undefined
  }

  const index = ORDERED_SLUGS.indexOf(slug)
  if (index < 0 || index >= ORDERED_SLUGS.length - 1) return undefined
  return findCatalogEntry(ORDERED_SLUGS[index + 1])
}

export function getPreviousBook(slug: string): BookCatalogEntry | undefined {
  const index = ORDERED_SLUGS.indexOf(slug)
  if (index <= 0) return undefined
  return findCatalogEntry(ORDERED_SLUGS[index - 1])
}

function getBookActivityUpdatedAt(slug: string): number {
  const readingAt = readReadingPosition(slug)?.updatedAt ?? 0
  const audioAt = readAudioPosition(slug)?.updatedAt ?? 0
  return Math.max(readingAt, audioAt)
}

export type ContinueBookSource = 'last-visited' | 'active-reading' | 'next-new'

export interface ContinueBookResult {
  book: BookCatalogEntry
  source: ContinueBookSource
}

function findMostRecentlyActiveReadingBook(): BookCatalogEntry | undefined {
  let bestSlug: string | undefined
  let bestUpdatedAt = 0

  for (const slug of ORDERED_SLUGS) {
    if (getBookReadingStatus(slug) !== 'reading') continue

    const updatedAt = getBookActivityUpdatedAt(slug)
    if (!bestSlug || updatedAt > bestUpdatedAt) {
      bestSlug = slug
      bestUpdatedAt = updatedAt
    }
  }

  return bestSlug ? findCatalogEntry(bestSlug) : undefined
}

export function getContinueBookResult(): ContinueBookResult | undefined {
  const lastVisited = readLastVisitedBook()
  if (lastVisited) {
    const entry = findCatalogEntry(lastVisited.slug)
    if (entry) return { book: entry, source: 'last-visited' }
  }

  const activeReading = findMostRecentlyActiveReadingBook()
  if (activeReading) return { book: activeReading, source: 'active-reading' }

  for (const slug of ORDERED_SLUGS) {
    if (getBookReadingStatus(slug) === 'new') {
      const entry = findCatalogEntry(slug)
      if (entry) return { book: entry, source: 'next-new' }
    }
  }

  return undefined
}

export function getContinueBook(): BookCatalogEntry | undefined {
  return getContinueBookResult()?.book
}

export function bookDisplayTitle(book: BookCatalogEntry): string {
  return book.meta.titleEs?.trim() || book.meta.title
}

export function isContinueAction(source: ContinueBookSource | null | undefined): boolean {
  return source === 'last-visited' || source === 'active-reading'
}

export function useNextInRoute() {
  const continueResult = computed(() => {
    readingRevision.value
    return getContinueBookResult()
  })

  const continueBook = computed(() => continueResult.value?.book)

  const continueSource = computed(() => continueResult.value?.source ?? null)

  const continueStatus = computed(() => {
    readingRevision.value
    const book = continueBook.value
    if (!book) return null
    return getBookReadingStatus(book.slug)
  })

  const continueLabel = computed(() => {
    const book = continueBook.value
    if (!book) return null
    const title = bookDisplayTitle(book)
    const prefix = isContinueAction(continueSource.value) ? 'Continuar' : 'Siguiente'
    return `${prefix}: ${title}`
  })

  return {
    getNextBook,
    getPreviousBook,
    getContinueBook,
    getContinueBookResult,
    continueBook,
    continueSource,
    continueStatus,
    continueLabel,
  }
}
