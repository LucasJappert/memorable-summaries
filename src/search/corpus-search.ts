import { bookCatalog } from '../books/catalog'
import { getBookReadingStatus } from '../reading/status'

export interface CorpusIndexEntry {
  sectionId: string
  sectionTitle: string
  text: string
}

/** Legacy: plain string entries (pre-sectionId indexes). */
export type CorpusIndexEntryLegacy = string

export interface CorpusIndex {
  slug: string
  title: string
  titleEs?: string
  concepts?: Array<{ title: string; description: string }>
  highlight?: string
  entries: Array<CorpusIndexEntry | CorpusIndexEntryLegacy>
}

export interface CorpusSearchResult {
  slug: string
  bookTitle: string
  sectionId: string
  sectionTitle: string
  snippet: string
}

const indexCache = new Map<string, CorpusIndex | null>()
const loadPromises = new Map<string, Promise<CorpusIndex | null>>()

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

function displayTitle(index: CorpusIndex): string {
  if (index.titleEs && index.titleEs !== index.title) {
    return `${index.title} — ${index.titleEs}`
  }
  return index.title
}

function makeSnippet(text: string, query: string, radius = 72): string {
  const normText = normalize(text)
  const idx = normText.indexOf(query)
  if (idx < 0) return text.slice(0, radius * 2).trim() + (text.length > radius * 2 ? '…' : '')

  const start = Math.max(0, idx - radius)
  const end = Math.min(text.length, idx + query.length + radius)
  let snippet = text.slice(start, end).trim()
  if (start > 0) snippet = '…' + snippet
  if (end < text.length) snippet += '…'
  return snippet
}

function normalizeEntry(
  entry: CorpusIndexEntry | CorpusIndexEntryLegacy,
  fallbackSectionId: string,
): CorpusIndexEntry {
  if (typeof entry === 'string') {
    return {
      sectionId: fallbackSectionId,
      sectionTitle: fallbackSectionId,
      text: entry,
    }
  }
  return entry
}

export type CorpusSearchScope = 'read' | 'all'

export function getDoneBookSlugs(): string[] {
  return bookCatalog
    .map((book) => book.slug)
    .filter((slug) => getBookReadingStatus(slug) === 'done')
}

export function getSearchableSlugs(scope: CorpusSearchScope = 'read'): string[] {
  if (scope === 'all') {
    return bookCatalog.map((book) => book.slug)
  }
  return getDoneBookSlugs()
}

export async function loadBookIndex(slug: string): Promise<CorpusIndex | null> {
  if (indexCache.has(slug)) return indexCache.get(slug) ?? null
  if (loadPromises.has(slug)) return loadPromises.get(slug)!

  const promise = (async () => {
    try {
      const base = import.meta.env.BASE_URL.replace(/\/$/, '')
      const res = await fetch(`${base}/index/${slug}.json`)
      if (!res.ok) {
        indexCache.set(slug, null)
        return null
      }
      const data = (await res.json()) as CorpusIndex
      indexCache.set(slug, data)
      return data
    } catch {
      indexCache.set(slug, null)
      return null
    } finally {
      loadPromises.delete(slug)
    }
  })()

  loadPromises.set(slug, promise)
  return promise
}

export async function searchCorpus(
  query: string,
  options: { maxResults?: number; scope?: CorpusSearchScope } = {},
): Promise<CorpusSearchResult[]> {
  const { maxResults = 24, scope = 'read' } = options
  const q = normalize(query.trim())
  if (!q) return []

  const slugs = getSearchableSlugs(scope)
  const indexes = await Promise.all(slugs.map((slug) => loadBookIndex(slug)))
  const results: CorpusSearchResult[] = []

  for (const index of indexes) {
    if (!index) continue
    const bookTitle = displayTitle(index)

    for (const rawEntry of index.entries ?? []) {
      const entry = normalizeEntry(rawEntry, 'contenido')
      const haystack = normalize(`${entry.sectionTitle} ${entry.text}`)
      if (!haystack.includes(q)) continue

      results.push({
        slug: index.slug,
        bookTitle,
        sectionId: entry.sectionId,
        sectionTitle: entry.sectionTitle,
        snippet: makeSnippet(entry.text, q),
      })
    }

    if (results.length >= maxResults) break
  }

  return results.slice(0, maxResults)
}
