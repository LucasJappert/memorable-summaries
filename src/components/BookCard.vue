<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { BookCatalogEntry } from '../books/catalog'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import { bookHasAudio } from '../books/audio-catalog'
import { getBookProgress, getBookReadingStatus } from '../reading/status'
import { useAudioQueue } from '../composables/useAudioQueue'
import { useOfflineAudio } from '../composables/useOfflineAudio'
import CoverArt from './CoverArt.vue'

const props = defineProps<{ book: BookCatalogEntry }>()

const { addNext, moveToEnd, remove, items, statsFor, play } = useAudioQueue()
const {
  cachedSlugs,
  isOfflineAudioCached,
  isOfflineAudioDownloading,
  toggle: toggleOffline,
} = useOfflineAudio()

const menuOpen = ref(false)
const menuRoot = ref<HTMLElement | null>(null)
const offlineBusy = ref(false)

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

const offlineCached = computed(() => {
  cachedSlugs.value
  return isOfflineAudioCached(props.book.slug)
})

const offlineDownloading = computed(() => {
  return offlineBusy.value || isOfflineAudioDownloading(props.book.slug)
})

const offlineMenuLabel = computed(() => {
  if (offlineDownloading.value) return 'Descargando…'
  if (offlineCached.value) return 'Quitar descarga'
  return 'Descargar'
})

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

async function onToggleOffline(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  if (offlineDownloading.value) return
  closeMenu()
  offlineBusy.value = true
  try {
    await toggleOffline(props.book.slug)
  } finally {
    offlineBusy.value = false
  }
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
  <article
    class="book-tile"
    :class="{
      'book-tile--done': status === 'done',
      'book-tile--menu-open': menuOpen,
    }"
  >
    <RouterLink :to="bookLink" class="book-tile__link" :aria-label="linkLabel">
      <div class="book-tile__cover-wrap">
        <span
          v-if="book.readingOrder && status !== 'done'"
          class="book-tile__order-chip"
        >
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
            class="cover-art__ribbon cover-art__ribbon--read"
            aria-label="Leído"
          >
            <span class="cover-art__ribbon-band" aria-hidden="true">
              <svg class="cover-art__ribbon-check" viewBox="0 0 12 12">
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
          <span
            v-if="listenBadge"
            class="cover-art__badge cover-art__badge--audio-stats"
          >
            {{ listenBadge }}
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
          <svg class="book-tile__menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
          Reproducir ahora
        </button>
        <button
          type="button"
          class="book-tile__menu-item"
          role="menuitem"
          :disabled="offlineDownloading"
          :aria-busy="offlineDownloading"
          @click="onToggleOffline"
        >
          <svg
            v-if="offlineCached"
            class="book-tile__menu-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              fill="currentColor"
            />
          </svg>
          <svg
            v-else
            class="book-tile__menu-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor" />
          </svg>
          {{ offlineMenuLabel }}
        </button>
        <button
          type="button"
          class="book-tile__menu-item"
          role="menuitem"
          @click="onAddEnd"
        >
          <svg class="book-tile__menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h10v2H3v-2zm14 0v6l5-3-5-3z"
              fill="currentColor"
            />
          </svg>
          {{ inQueue ? 'Mover al final' : 'Agregar al final' }}
        </button>
        <button
          type="button"
          class="book-tile__menu-item"
          role="menuitem"
          @click="onAddNext"
        >
          <svg class="book-tile__menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M3 5h14v2H3V5zm0 4h10v2H3V9zm0 4h10v2H3v-2zm13-1v8l6-4-6-4z"
              fill="currentColor"
            />
          </svg>
          Agregar como siguiente
        </button>
        <button
          v-if="inQueue"
          type="button"
          class="book-tile__menu-item book-tile__menu-item--danger"
          role="menuitem"
          @click="onRemove"
        >
          <svg class="book-tile__menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              fill="currentColor"
            />
          </svg>
          Quitar de la cola
        </button>
      </div>
    </div>
  </article>
</template>
