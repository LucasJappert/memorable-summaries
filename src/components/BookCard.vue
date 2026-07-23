<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { BookCatalogEntry } from '../books/catalog'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import { bookHasAudio } from '../books/audio-catalog'
import { getBookProgress, getBookReadingStatus } from '../reading/status'
import { useAudioQueue } from '../composables/useAudioQueue'
import CoverArt from './CoverArt.vue'

const props = defineProps<{ book: BookCatalogEntry }>()

const { addNext, moveToEnd, remove, items, statsFor, play } = useAudioQueue()

const menuOpen = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

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

const inQueue = computed(() => items.value.includes(props.book.slug))

const listenBadge = computed(() => {
  readingRevision.value
  const stats = statsFor(props.book.slug)
  if (stats.completedCount > 0) return `×${stats.completedCount}`
  if (stats.markedListened) return '✓'
  return null
})

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

function onMenuToggle(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onAddEnd(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  moveToEnd(props.book.slug)
  closeMenu()
}

function onAddNext(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  addNext(props.book.slug)
  closeMenu()
}

function onRemove(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  remove(props.book.slug)
  closeMenu()
}

function onPlayNow(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  play(props.book.slug)
  closeMenu()
}

function onDocPointerDown(event: PointerEvent) {
  if (!menuOpen.value) return
  const root = menuRoot.value
  if (root && event.target instanceof Node && root.contains(event.target)) return
  closeMenu()
}

onMounted(() => document.addEventListener('pointerdown', onDocPointerDown, true))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown, true))
</script>

<template>
  <article class="book-tile" :class="{ 'book-tile--done': status === 'done' }">
    <RouterLink :to="bookLink" class="book-tile__link" :aria-label="linkLabel">
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
          <span
            v-if="status === 'done'"
            class="cover-art__badge cover-art__badge--read"
          >
            Leído
          </span>
          <span
            v-if="listenBadge"
            class="cover-art__badge cover-art__badge--audio-stats"
          >
            {{ listenBadge }}
          </span>
        </CoverArt>

        <div
          v-if="hasAudio"
          ref="menuRoot"
          class="book-tile__menu"
          @click.prevent.stop
        >
          <button
            type="button"
            class="book-tile__menu-btn"
            :aria-expanded="menuOpen"
            aria-haspopup="menu"
            aria-label="Opciones de audio"
            @click="onMenuToggle"
          >
            <span class="book-tile__menu-dots" aria-hidden="true">⋮</span>
          </button>
          <div
            v-if="menuOpen"
            class="book-tile__menu-panel"
            role="menu"
          >
            <button
              type="button"
              class="book-tile__menu-item"
              role="menuitem"
              @click="onPlayNow"
            >
              Reproducir ahora
            </button>
            <button
              type="button"
              class="book-tile__menu-item"
              role="menuitem"
              @click="onAddEnd"
            >
              {{ inQueue ? 'Mover al final' : 'Agregar al final' }}
            </button>
            <button
              type="button"
              class="book-tile__menu-item"
              role="menuitem"
              @click="onAddNext"
            >
              Agregar como siguiente
            </button>
            <button
              v-if="inQueue"
              type="button"
              class="book-tile__menu-item book-tile__menu-item--danger"
              role="menuitem"
              @click="onRemove"
            >
              Quitar de la cola
            </button>
          </div>
        </div>
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
