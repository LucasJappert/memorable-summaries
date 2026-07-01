import { computed } from 'vue'
import { bookCatalog, type BookCatalogEntry } from '../books/catalog'
import { READING_ORDER_BY_SLUG } from '../books/reading-order'
import { getBookReadingStatus } from '../reading/status'
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

export function getContinueBook(): BookCatalogEntry | undefined {
  for (const slug of ORDERED_SLUGS) {
    if (getBookReadingStatus(slug) === 'reading') {
      return findCatalogEntry(slug)
    }
  }

  for (const slug of ORDERED_SLUGS) {
    if (getBookReadingStatus(slug) === 'new') {
      return findCatalogEntry(slug)
    }
  }

  return undefined
}

export function bookDisplayTitle(book: BookCatalogEntry): string {
  return book.meta.titleEs?.trim() || book.meta.title
}

export function useNextInRoute() {
  const continueBook = computed(() => {
    readingRevision.value
    return getContinueBook()
  })

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
    return continueStatus.value === 'reading' ? `Continuar: ${title}` : `Siguiente: ${title}`
  })

  return {
    getNextBook,
    getPreviousBook,
    getContinueBook,
    continueBook,
    continueStatus,
    continueLabel,
  }
}
