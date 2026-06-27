import type { BookSummary } from '../types/book'
import { cosmos } from '../data/cosmos'
import { universoNada } from '../data/universo-nada'
import { biggestIdeasUniverse } from '../data/biggest-ideas-universe'
import { sevenBriefLessons } from '../data/seven-brief-lessons'
import { selfishGene } from '../data/selfish-gene'
import { whyEvolutionIsTrue } from '../data/why-evolution-is-true'
import { blindWatchmaker } from '../data/blind-watchmaker'
import { wonderfulLife } from '../data/wonderful-life'
import { superintelligence } from '../data/superintelligence'

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

/** Fase 1–2 (orden-de-lectura.md) + superintelligence */
const ALL_BOOKS: BookSummary[] = [
  cosmos,
  universoNada,
  biggestIdeasUniverse,
  sevenBriefLessons,
  selfishGene,
  whyEvolutionIsTrue,
  blindWatchmaker,
  wonderfulLife,
  superintelligence,
]

export const bookCatalog: BookCatalogEntry[] = ALL_BOOKS.map(buildCatalogEntry)

const booksBySlug = new Map<string, BookSummary>(
  ALL_BOOKS.map((book) => [book.slug, book]),
)

export function getBookBySlug(slug: string): BookSummary | undefined {
  return booksBySlug.get(slug)
}

export function isKnownBookSlug(slug: string): slug is string {
  return booksBySlug.has(slug)
}
