import type { BookSummary } from '../types/book'
import { superintelligence } from '../data/superintelligence'
import { universoNada } from '../data/universo-nada'

export interface BookCatalogEntry {
  slug: string
  meta: BookSummary['meta']
  sectionOrder: string[]
  sectionLabels: Record<string, string>
}

const EXTRA_SECTIONS = [
  { id: 'conceptos', label: 'Conceptos clave' },
  { id: 'cronologia', label: 'Cronología' },
  { id: 'figuras', label: 'Figuras clave' },
] as const

function buildCatalogEntry(book: BookSummary): BookCatalogEntry {
  const sectionOrder = [
    ...book.toc.map((item) => item.id),
    ...EXTRA_SECTIONS.map((item) => item.id).filter(
      (id) => !book.toc.some((tocItem) => tocItem.id === id),
    ),
  ]

  const sectionLabels: Record<string, string> = {
    ...Object.fromEntries(book.toc.map((item) => [item.id, item.label])),
    ...Object.fromEntries(EXTRA_SECTIONS.map((item) => [item.id, item.label])),
  }

  return {
    slug: book.slug,
    meta: book.meta,
    sectionOrder,
    sectionLabels,
  }
}

export const bookCatalog: BookCatalogEntry[] = [
  buildCatalogEntry(superintelligence),
  buildCatalogEntry(universoNada),
]

const booksBySlug = new Map<string, BookSummary>([
  [superintelligence.slug, superintelligence],
  [universoNada.slug, universoNada],
])

export function getBookBySlug(slug: string): BookSummary | undefined {
  return booksBySlug.get(slug)
}

export function isKnownBookSlug(slug: string): slug is string {
  return booksBySlug.has(slug)
}
