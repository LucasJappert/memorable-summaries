import type { BookSummary } from '../types/book'
import { getReadingOrder } from './reading-order'
import { cosmos } from '../data/cosmos'
import { universoNada } from '../data/universo-nada'
import { whyDoesWorldExist } from '../data/why-does-world-exist'
import { biggestIdeasUniverse } from '../data/biggest-ideas-universe'
import { sevenBriefLessons } from '../data/seven-brief-lessons'
import { selfishGene } from '../data/selfish-gene'
import { whyEvolutionIsTrue } from '../data/why-evolution-is-true'
import { blindWatchmaker } from '../data/blind-watchmaker'
import { vitalQuestion } from '../data/vital-question'
import { wonderfulLife } from '../data/wonderful-life'
import { origins } from '../data/origins'
import { intelligentLifeUniverse } from '../data/intelligent-life-universe'
import { biosignaturesAstrobiology } from '../data/biosignatures-astrobiology'
import { murmursOfEarth } from '../data/murmurs-of-earth'
import { incognito } from '../data/incognito'
import { theBrain } from '../data/the-brain'
import { howWeLearn } from '../data/how-we-learn'
import { futureOfTheMind } from '../data/future-of-the-mind'
import { emperorsNewMind } from '../data/emperors-new-mind'
import { life30 } from '../data/life-3-0'
import { superintelligence } from '../data/superintelligence'
import { ourMathematicalUniverse } from '../data/our-mathematical-universe'
import { sapiens } from '../data/sapiens'
import { homoDeus } from '../data/homo-deus'
import { twentyOneLessons } from '../data/21-lessons'
import { determined } from '../data/determined'
import { freeWill } from '../data/free-will'
import { egoTunnel } from '../data/ego-tunnel'
import { godelEscherBach } from '../data/godel-escher-bach'
import { livewired } from '../data/livewired'
import { selfAssemblingBrain } from '../data/self-assembling-brain'
import { fabricOfReality } from '../data/fabric-of-reality'
import { beginningOfInfinity } from '../data/beginning-of-infinity'
import { blackSwan } from '../data/black-swan'

export interface BookCatalogEntry {
  slug: string
  meta: BookSummary['meta']
  /** Número en orden-de-lectura.md; omitir si no está en la lista */
  readingOrder?: number
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

  const readingOrder = getReadingOrder(book.slug)

  return {
    slug: book.slug,
    meta: book.meta,
    ...(readingOrder !== undefined ? { readingOrder } : {}),
    sectionOrder,
    sectionLabels,
  }
}

/** Fases 1–8 (orden-de-lectura.md) — 34 libros */
const ALL_BOOKS: BookSummary[] = [
  cosmos,
  universoNada,
  whyDoesWorldExist,
  biggestIdeasUniverse,
  sevenBriefLessons,
  selfishGene,
  whyEvolutionIsTrue,
  blindWatchmaker,
  vitalQuestion,
  wonderfulLife,
  origins,
  intelligentLifeUniverse,
  biosignaturesAstrobiology,
  murmursOfEarth,
  incognito,
  theBrain,
  howWeLearn,
  futureOfTheMind,
  emperorsNewMind,
  life30,
  superintelligence,
  ourMathematicalUniverse,
  sapiens,
  homoDeus,
  twentyOneLessons,
  determined,
  freeWill,
  egoTunnel,
  godelEscherBach,
  livewired,
  selfAssemblingBrain,
  fabricOfReality,
  beginningOfInfinity,
  blackSwan,
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
