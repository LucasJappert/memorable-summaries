import { ref } from 'vue'

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
