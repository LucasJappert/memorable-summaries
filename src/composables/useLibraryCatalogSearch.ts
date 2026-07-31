import { computed, ref } from 'vue'
import { bookCatalog, type BookCatalogEntry } from '../books/catalog'
import { normalizeForSearch } from '../utils/highlight-text'

/** Búsqueda de catálogo en la biblioteca (título/autor), distinta del GlobalSearch de contenido. */
export const libraryCatalogQuery = ref('')
export const libraryCatalogSearchOpen = ref(false)
/** Libros visibles con filtros actuales (status + búsqueda); lo actualiza LibraryView. */
export const libraryCatalogMatchCount = ref(0)

export function openLibraryCatalogSearch() {
  libraryCatalogSearchOpen.value = true
}

export function closeLibraryCatalogSearch() {
  libraryCatalogSearchOpen.value = false
}

export function toggleLibraryCatalogSearch() {
  libraryCatalogSearchOpen.value = !libraryCatalogSearchOpen.value
}

export function catalogSearchTerms(query: string): string[] {
  return normalizeForSearch(query.trim()).split(/\s+/).filter(Boolean)
}

export function bookCatalogHaystack(book: BookCatalogEntry): string {
  return normalizeForSearch(
    [
      book.meta.title,
      book.meta.titleEs ?? '',
      book.meta.author ?? '',
      book.meta.subtitle ?? '',
    ].join(' '),
  )
}

export function bookMatchesCatalogQuery(book: BookCatalogEntry, query: string): boolean {
  const terms = catalogSearchTerms(query)
  if (terms.length === 0) return true
  const haystack = bookCatalogHaystack(book)
  return terms.every((term) => haystack.includes(term))
}

function suggestionLabel(book: BookCatalogEntry): string {
  return book.meta.titleEs?.trim() || book.meta.title
}

/** Sugerencias del overlay (sin filtros de estado de biblioteca). */
export const libraryCatalogSuggestions = computed(() => {
  const q = libraryCatalogQuery.value.trim()
  if (!q) return [] as BookCatalogEntry[]

  return bookCatalog
    .filter((book) => bookMatchesCatalogQuery(book, q))
    .sort((a, b) => suggestionLabel(a).localeCompare(suggestionLabel(b), 'es'))
})
