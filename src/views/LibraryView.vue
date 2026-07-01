<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { bookCatalog } from '../books/catalog'
import { bookHasAudio } from '../books/audio-catalog'
import { READING_PHASES } from '../books/reading-phases'
import AppVersionFooter from '../components/AppVersionFooter.vue'
import BookCard from '../components/BookCard.vue'
import MobileLibraryBar from '../components/MobileLibraryBar.vue'
import ReviewNudge from '../components/ReviewNudge.vue'
import { useMediaQuery } from '../composables/useMediaQuery'
import { useNextInRoute } from '../composables/useNextInRoute'
import { usePageMeta } from '../composables/usePageMeta'
import { defaultOgImageUrl } from '../config/site'
import { countReadBooks, getBookReadingStatus } from '../reading/status'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import { openGlobalSearch } from '../composables/useGlobalSearch'
import { DEFAULT_SITE_DESCRIPTION, SITE_NAME } from '../utils/seo'

const isMobile = useMediaQuery('(max-width: 1023px)')

type StatusFilter = 'all' | 'reading' | 'new' | 'done' | 'audio'

const statusFilter = ref<StatusFilter>('all')
const phaseFilter = ref<number | 'all'>('all')

const { continueBook, continueLabel, continueStatus } = useNextInRoute()

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

const filteredCatalog = computed(() => {
  readingRevision.value

  return sortedCatalog.value.filter((book) => {
    if (phaseFilter.value !== 'all') {
      const phase = READING_PHASES.find((item) => item.num === phaseFilter.value)
      if (!phase?.slugs.includes(book.slug)) return false
    }

    if (statusFilter.value === 'all') return true
    if (statusFilter.value === 'audio') return bookHasAudio(book.slug)

    return getBookReadingStatus(book.slug) === statusFilter.value
  })
})

const statusFilters: Array<{ id: StatusFilter; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'reading', label: 'En curso' },
  { id: 'new', label: 'Por hacer' },
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
      <header class="library-hero">
        <div class="library-hero__main">
          <p class="library-hero__label">Biblioteca</p>
          <p class="library-hero__count">{{ readSummary }}</p>
          <nav class="library-hero__discovery" aria-label="Descubrimiento">
            <button type="button" class="library-hero__link" @click="openGlobalSearch">
              Buscar <kbd class="library-hero__kbd">⌘K</kbd>
            </button>
            <RouterLink to="/conceptos" class="library-hero__link">Conceptos</RouterLink>
            <RouterLink to="/tensiones" class="library-hero__link">Tensiones</RouterLink>
          </nav>
        </div>

        <RouterLink
          v-if="continueBook && continueLabel"
          :to="continueLink"
          class="library-hero__cta"
        >
          {{ continueLabel }}
        </RouterLink>
      </header>

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

        <label class="library-phase">
          <span class="library-phase__label">Fase</span>
          <select v-model="phaseFilter" class="library-phase__select">
            <option value="all">Todas</option>
            <option v-for="phase in READING_PHASES" :key="phase.num" :value="phase.num">
              Fase {{ phase.num }} — {{ phase.title }}
            </option>
          </select>
        </label>
      </div>

      <p v-if="filteredCatalog.length === 0" class="library-empty">
        No hay libros con estos filtros.
      </p>

      <div v-else class="library-shelf">
        <BookCard v-for="book in filteredCatalog" :key="book.slug" :book="book" />
      </div>

      <AppVersionFooter />
    </main>

    <MobileLibraryBar v-if="isMobile" />
  </div>
</template>
