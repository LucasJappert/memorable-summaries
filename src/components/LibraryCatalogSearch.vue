<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  closeLibraryCatalogSearch,
  libraryCatalogQuery,
  libraryCatalogSearchOpen,
  libraryCatalogSuggestions,
} from '../composables/useLibraryCatalogSearch'
import { bookDisplayTitle } from '../composables/useNextInRoute'
import { highlightSearchText } from '../utils/highlight-text'
import type { BookCatalogEntry } from '../books/catalog'

const searchInputEl = ref<HTMLInputElement | null>(null)
const router = useRouter()

const query = libraryCatalogQuery
const hasQuery = computed(() => query.value.trim().length > 0)
const suggestions = libraryCatalogSuggestions

watch(libraryCatalogSearchOpen, async (open) => {
  if (!open) return
  await nextTick()
  searchInputEl.value?.focus()
})

function highlight(text: string): string {
  return highlightSearchText(text, query.value)
}

function suggestionTitle(book: BookCatalogEntry): string {
  return bookDisplayTitle(book)
}

function suggestionSubtitle(book: BookCatalogEntry): string {
  const parts: string[] = []
  if (book.meta.author?.trim()) parts.push(book.meta.author.trim())
  const es = book.meta.titleEs?.trim()
  const original = book.meta.title.trim()
  if (es && es !== original && suggestionTitle(book) === es) {
    parts.push(original)
  }
  return parts.join(' · ')
}

async function selectBook(book: BookCatalogEntry) {
  closeLibraryCatalogSearch()
  await router.push(`/libro/${book.slug}`)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeLibraryCatalogSearch()
    return
  }
  if (event.key === 'Enter' && suggestions.value.length > 0) {
    event.preventDefault()
    void selectBook(suggestions.value[0]!)
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="libraryCatalogSearchOpen"
      class="library-catalog-search"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar libros"
      @click.self="closeLibraryCatalogSearch()"
    >
      <div class="library-catalog-search__panel" @click.stop>
        <div class="library-catalog-search__toolbar">
          <label class="library-catalog-search__field">
            <span class="sr-only">Buscar libros</span>
            <svg
              class="library-catalog-search__icon"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l3.62 3.63a.9.9 0 0 1-1.27 1.27l-3.63-3.62A5.5 5.5 0 1 1 8.5 3Zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z"
                fill="currentColor"
              />
            </svg>
            <input
              ref="searchInputEl"
              v-model="query"
              type="search"
              class="library-catalog-search__input"
              placeholder="Título, autor…"
              aria-label="Buscar libros"
              aria-autocomplete="list"
              aria-controls="library-catalog-suggestions"
              @keydown="onKeydown"
            />
          </label>
          <button
            type="button"
            class="library-catalog-search__close"
            aria-label="Cerrar búsqueda"
            @click="closeLibraryCatalogSearch()"
          >
            Listo
          </button>
        </div>

        <ul
          v-if="hasQuery"
          id="library-catalog-suggestions"
          class="library-catalog-search__list"
          role="listbox"
          aria-label="Libros sugeridos"
        >
          <li v-if="suggestions.length === 0" class="library-catalog-search__empty">
            No hay libros que coincidan.
          </li>
          <li v-for="book in suggestions" :key="book.slug" role="option">
            <button
              type="button"
              class="library-catalog-search__item"
              @click="selectBook(book)"
            >
              <span
                class="library-catalog-search__item-title"
                v-html="highlight(suggestionTitle(book))"
              />
              <span
                v-if="suggestionSubtitle(book)"
                class="library-catalog-search__item-meta"
                v-html="highlight(suggestionSubtitle(book))"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<style src="./LibraryCatalogSearch.css"></style>
