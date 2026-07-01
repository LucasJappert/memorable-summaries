<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { bookCatalog } from '../books/catalog'
import { bookHasAudio } from '../books/audio-catalog'
import AppVersionFooter from '../components/AppVersionFooter.vue'
import BookCard from '../components/BookCard.vue'
import ReviewNudge from '../components/ReviewNudge.vue'
import SectionPageHero from '../components/SectionPageHero.vue'
import { useNextInRoute, bookDisplayTitle } from '../composables/useNextInRoute'
import { usePageMeta } from '../composables/usePageMeta'
import { defaultOgImageUrl } from '../config/site'
import { countReadBooks, getBookReadingStatus } from '../reading/status'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import { DEFAULT_SITE_DESCRIPTION, SITE_NAME } from '../utils/seo'

type StatusFilter = 'all' | 'reading' | 'new' | 'done' | 'audio'

const statusFilter = ref<StatusFilter>('all')

const { continueBook, continueStatus } = useNextInRoute()

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
  return continueStatus.value === 'reading' ? 'Continuar:' : 'Siguiente:'
})

const continueTitle = computed(() => {
  const book = continueBook.value
  if (!book) return null
  return bookDisplayTitle(book)
})

const filteredCatalog = computed(() => {
  readingRevision.value

  return sortedCatalog.value.filter((book) => {
    if (statusFilter.value === 'all') return true
    if (statusFilter.value === 'audio') return bookHasAudio(book.slug)

    return getBookReadingStatus(book.slug) === statusFilter.value
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
        No hay libros con estos filtros.
      </p>

      <div v-else class="library-shelf">
        <BookCard v-for="book in filteredCatalog" :key="book.slug" :book="book" />
      </div>

      <AppVersionFooter />
    </main>
  </div>
</template>

<style src="./LibraryView.css"></style>
