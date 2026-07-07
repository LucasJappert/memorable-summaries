<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { bookCatalog } from '../books/catalog'
import { bookHasAudio } from '../books/audio-catalog'
import AppVersionFooter from '../components/AppVersionFooter.vue'
import BookCard from '../components/BookCard.vue'
import ReviewNudge from '../components/ReviewNudge.vue'
import SectionPageHero from '../components/SectionPageHero.vue'
import { useNextInRoute, bookDisplayTitle, isContinueAction } from '../composables/useNextInRoute'
import { usePageMeta } from '../composables/usePageMeta'
import { defaultOgImageUrl } from '../config/site'
import { countReadBooks, getBookReadingStatus } from '../reading/status'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import {
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
} from '../utils/seo'

type StatusFilter = 'all' | 'reading' | 'new' | 'done' | 'audio'

const statusFilter = ref<StatusFilter>('all')
const searchQuery = ref('')

const { continueBook, continueSource, continueStatus } = useNextInRoute()

onMounted(() => {
  window.scrollTo(0, 0)
})

const sortedCatalog = computed(() => {
  const items = [...bookCatalog]
  return items.sort((a, b) => {
    const orderA = a.readingOrder ?? Number.MAX_SAFE_INTEGER
    const orderB = b.readingOrder ?? Number.MAX_SAFE_INTEGER
    return orderA - orderB
  })
})

const totalBooks = computed(() => bookCatalog.length)

const readBooks = computed(() => {
  readingRevision.value
  return countReadBooks(bookCatalog.map((book) => book.slug))
})

const readSummary = computed(() => `${readBooks.value}/${totalBooks.value} libros leídos`)

const continueLink = computed(() => {
  const book = continueBook.value
  if (!book) return '/'

  readingRevision.value
  const base = `/libro/${book.slug}`
  const reading = readReadingPosition(book.slug)

  if (
    continueStatus.value === 'reading' &&
    reading?.sectionId &&
    hasMeaningfulScroll(reading.scrollY)
  ) {
    return `${base}#${reading.sectionId}`
  }

  return base
})

const continuePrefix = computed(() => {
  if (!continueBook.value) return null
  return isContinueAction(continueSource.value) ? 'Continuar:' : 'Siguiente:'
})

const continueTitle = computed(() => {
  const book = continueBook.value
  if (!book) return null
  return bookDisplayTitle(book)
})

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const filteredCatalog = computed(() => {
  readingRevision.value

  const terms = normalize(searchQuery.value.trim()).split(/\s+/).filter(Boolean)

  return sortedCatalog.value.filter((book) => {
    const matchesStatus =
      statusFilter.value === 'all'
        ? true
        : statusFilter.value === 'audio'
          ? bookHasAudio(book.slug)
          : getBookReadingStatus(book.slug) === statusFilter.value

    if (!matchesStatus) return false
    if (terms.length === 0) return true

    const haystack = normalize(
      [
        book.meta.title,
        book.meta.titleEs ?? '',
        book.meta.author ?? '',
        book.meta.subtitle ?? '',
      ].join(' '),
    )

    return terms.every((term) => haystack.includes(term))
  })
})

const statusFilters: Array<{ id: StatusFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'reading', label: 'En curso' },
  { id: 'new', label: 'Por leer' },
  { id: 'done', label: 'Leídos' },
  { id: 'audio', label: 'Con audio' },
]

usePageMeta(
  computed(() => ({
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    canonicalPath: '',
    ogType: 'website' as const,
    ogImage: defaultOgImageUrl(),
    ogImageWidth: DEFAULT_OG_IMAGE_WIDTH,
    ogImageHeight: DEFAULT_OG_IMAGE_HEIGHT,
  })),
)
</script>

<template>
  <div class="library-page">
    <main class="library">
      <SectionPageHero
        variant="library"
        title="Biblioteca"
        :meta="readSummary"
      >
        <template #title-aside>
          <label class="library-search">
            <span class="sr-only">Buscar libros</span>
            <svg
              class="library-search__icon"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l3.62 3.63a.9.9 0 0 1-1.27 1.27l-3.63-3.62A5.5 5.5 0 1 1 8.5 3Zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Z"
                fill="currentColor"
              />
            </svg>
            <input
              v-model="searchQuery"
              type="search"
              class="library-search__input"
              placeholder="Buscar…"
              aria-label="Buscar libros"
            />
          </label>
        </template>
        <RouterLink
          v-if="continueBook && continuePrefix && continueTitle"
          :to="continueLink"
          class="library-hero__cta"
        >
          <span class="library-hero__cta-prefix">{{ continuePrefix }}</span>
          <span class="library-hero__cta-title">{{ continueTitle }}</span>
        </RouterLink>
      </SectionPageHero>

      <ReviewNudge />

      <div class="library-toolbar">
        <div class="library-filters" role="group" aria-label="Filtrar por estado">
          <button
            v-for="filter in statusFilters"
            :key="filter.id"
            type="button"
            class="library-filter"
            :class="{ 'library-filter--active': statusFilter === filter.id }"
            @click="statusFilter = filter.id"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <p v-if="filteredCatalog.length === 0" class="library-empty">
        {{ searchQuery.trim() ? 'No hay libros que coincidan con la búsqueda.' : 'No hay libros con estos filtros.' }}
      </p>

      <div v-else class="library-shelf">
        <BookCard v-for="book in filteredCatalog" :key="book.slug" :book="book" />
      </div>

      <AppVersionFooter />
    </main>
  </div>
</template>

<style src="./LibraryView.css"></style>
