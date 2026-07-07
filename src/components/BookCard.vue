<script setup lang="ts">
import { computed } from 'vue'
import type { BookCatalogEntry } from '../books/catalog'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import { bookHasAudio } from '../books/audio-catalog'
import { getBookProgress, getBookReadingStatus } from '../reading/status'
import CoverArt from './CoverArt.vue'

const props = defineProps<{ book: BookCatalogEntry }>()

const reading = computed(() => {
  readingRevision.value
  return readReadingPosition(props.book.slug)
})

const displayTitle = computed(
  () => props.book.meta.titleEs?.trim() || props.book.meta.title,
)

const progress = computed(() => {
  readingRevision.value
  return getBookProgress(props.book.slug)
})

const status = computed(() => {
  readingRevision.value
  return getBookReadingStatus(props.book.slug)
})

const hasAudio = computed(() => bookHasAudio(props.book.slug))

const linkLabel = computed(() => {
  const audioNote = hasAudio.value ? ' Incluye narración en audio.' : ''
  if (status.value === 'reading') {
    return `${displayTitle.value}. Continuar en ${reading.value?.sectionLabel ?? 'lectura'}, ${progress.value}% leído.${audioNote}`
  }
  if (status.value === 'done') {
    return `${displayTitle.value}. Completado.${audioNote}`
  }
  return `${displayTitle.value}. Sin empezar.${audioNote}`
})

const bookLink = computed(() => {
  const base = `/libro/${props.book.slug}`
  if (
    status.value === 'reading' &&
    reading.value?.sectionId &&
    hasMeaningfulScroll(reading.value.scrollY)
  ) {
    return `${base}#${reading.value.sectionId}`
  }
  return base
})
</script>

<template>
  <article class="book-tile" :class="{ 'book-tile--done': status === 'done' }">
    <RouterLink :to="bookLink" class="book-tile__link" :aria-label="linkLabel">
      <span v-if="status === 'done'" class="book-tile__ribbon" aria-hidden="true">
        <span class="book-tile__ribbon-band">
          <svg class="book-tile__ribbon-check" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M2.5 6.2 4.8 8.5 9.5 3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </span>

      <div class="book-tile__cover-wrap">
        <span v-if="book.readingOrder" class="book-tile__order-chip">
          {{ book.readingOrder }}
        </span>

        <CoverArt
          :slug="book.slug"
          :meta="book.meta"
          :has-audio="hasAudio"
        >
          <span
            v-if="status === 'reading' && progress > 0"
            class="cover-art__badge cover-art__badge--reading"
          >
            {{ progress }}%
          </span>
        </CoverArt>
      </div>

      <div class="book-tile__info">
        <h2 class="book-tile__title">{{ displayTitle }}</h2>
        <p class="book-tile__author">{{ book.meta.author }}</p>
        <p class="book-tile__subtitle">
          {{ book.meta.subtitle || '' }}
        </p>
      </div>

      <div
        v-if="status === 'reading'"
        class="book-tile__progress"
        role="presentation"
        :aria-hidden="true"
      >
        <span
          class="book-tile__progress-fill"
          :style="{ width: `${progress}%` }"
        />
      </div>
    </RouterLink>
  </article>
</template>
