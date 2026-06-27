<script setup lang="ts">
import { computed } from 'vue'
import type { BookCatalogEntry } from '../books/catalog'
import { readReadingPosition } from '../reading/storage'
import CoverArt from './CoverArt.vue'

const props = defineProps<{ book: BookCatalogEntry }>()

const reading = computed(() => readReadingPosition(props.book.slug))

const displayTitle = computed(
  () => props.book.meta.titleEs?.trim() || props.book.meta.title,
)

const progress = computed(() => reading.value?.progress ?? 0)

const status = computed(() => {
  if (!reading.value) return 'new'
  if (progress.value >= 98) return 'done'
  return 'reading'
})

const coverBadge = computed(() => {
  if (status.value === 'new') return 'New'
  if (status.value === 'done') return 'Done'
  if (progress.value <= 0) return 'Started'
  return `${progress.value}%`
})

const linkLabel = computed(() => {
  if (status.value === 'reading') {
    return `${displayTitle.value}. Continuar en ${reading.value?.sectionLabel ?? 'lectura'}, ${progress.value}% leído.`
  }
  if (status.value === 'done') {
    return `${displayTitle.value}. Completado.`
  }
  return `${displayTitle.value}. New.`
})

const bookLink = computed(() => {
  const base = `/libro/${props.book.slug}`
  if (status.value === 'reading' && reading.value?.sectionId) {
    return `${base}#${reading.value.sectionId}`
  }
  return base
})
</script>

<template>
  <article class="book-tile">
    <RouterLink :to="bookLink" class="book-tile__link" :aria-label="linkLabel">
      <CoverArt :slug="book.slug" :meta="book.meta" :done="status === 'done'">
        <span
          class="cover-art__badge"
          :class="`cover-art__badge--${status}`"
        >
          {{ coverBadge }}
        </span>

        <div class="book-tile__cover-progress" role="presentation">
          <span
            class="book-tile__cover-progress-fill"
            :class="{ 'book-tile__cover-progress-fill--done': status === 'done' }"
            :style="{ width: status === 'new' ? '0%' : `${progress}%` }"
          />
        </div>
      </CoverArt>

      <div class="book-tile__info">
        <h2 class="book-tile__title">{{ displayTitle }}</h2>
        <p class="book-tile__author">{{ book.meta.author }}</p>
      </div>
    </RouterLink>
  </article>
</template>
