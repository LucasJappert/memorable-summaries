<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { bookCatalog, getBookBySlug } from '../books/catalog'
import { getReadingOrder } from '../books/reading-order'
import { useAudioQueue } from '../composables/useAudioQueue'
import { useOfflineAudio } from '../composables/useOfflineAudio'
import { readingRevision } from '../reading/revision'
import { coverStyle } from '../composables/useCoverStyle'
import { coverImageUrl, coverUrlForStyle } from '../utils/coverImage'
import { atmosphereUrl } from '../utils/artImage'

defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const {
  items,
  currentIndex,
  isPlaying,
  trackProgress,
  togglePlayAt,
  removeAt,
  reorder,
  clear,
  statsFor,
  undoState,
  undoRemove,
  dismissUndo,
  enqueueAllWithAudio,
  missingAudioCount,
  seedWithSlugs,
  shuffleKeepingCurrent,
  playPrevSmart,
  playNext,
  pause,
  resume,
  seekTo,
  seekBy,
} = useAudioQueue()

const {
  cachedSlugs,
  downloadProgress,
  audioBytesBySlug,
  isOfflineAudioCached,
  isOfflineAudioDownloading,
  toggle: toggleOffline,
  prefetchSize,
  formatBytes,
  getProgress,
} = useOfflineAudio()

const openMenuIndex = ref<number | null>(null)
const confirmClearOpen = ref(false)
const confirmShuffleOpen = ref(false)
const progressEl = ref<HTMLDivElement | null>(null)
const isSeekDragging = ref(false)
const offlineBusySlug = ref<string | null>(null)
/** Slugs sin `.editorial.jpg` → caer a Memorable (como CoverArt). */
const coverFallbackMemorable = ref(new Set<string>())
let seekPointerId: number | null = null

const SKIP_SECONDS = 10

watch(coverStyle, () => {
  coverFallbackMemorable.value = new Set()
})

const rows = computed(() => {
  readingRevision.value
  cachedSlugs.value
  downloadProgress.value
  audioBytesBySlug.value
  const style = coverStyle.value
  const fallbacks = coverFallbackMemorable.value
  return items.value.map((slug, index) => {
    const book = getBookBySlug(slug)
    const title = book?.meta.titleEs?.trim() || book?.meta.title || slug
    const author = book?.meta.author ?? ''
    const stats = statsFor(slug)
    const offline = isOfflineAudioCached(slug)
    const offlineBusy = offlineBusySlug.value === slug || isOfflineAudioDownloading(slug)
    const progress = getProgress(slug)
    const sizeLabel = formatBytes(audioBytesBySlug.value[slug])
    return {
      slug,
      index,
      title,
      author,
      readingOrder: getReadingOrder(slug),
      cover:
        style === 'editorial' && fallbacks.has(slug)
          ? coverImageUrl(slug)
          : coverUrlForStyle(slug, style),
      isCurrent: index === currentIndex.value,
      completedCount: stats.completedCount,
      markedListened: stats.markedListened,
      offline,
      offlineBusy,
      offlineProgress: progress,
      sizeLabel,
      offlineLabel: offlineBusy
        ? progress > 0
          ? `Descargando… ${progress}%`
          : 'Descargando…'
        : offline
          ? 'Quitar descarga'
          : 'Descargar',
    }
  })
})

const downloadedCount = computed(() => cachedSlugs.value.size)

const downloadedTotalLabel = computed(() => {
  audioBytesBySlug.value
  cachedSlugs.value
  let total = 0
  for (const slug of cachedSlugs.value) {
    total += audioBytesBySlug.value[slug] ?? 0
  }
  return formatBytes(total)
})

/** Descarga → cola: orden de lectura del catálogo, luego el resto. */
const downloadedSlugsInOrder = computed(() => {
  cachedSlugs.value
  const cached = cachedSlugs.value
  if (!cached.size) return [] as string[]
  const catalogOrder = [...bookCatalog]
    .map((b) => b.slug)
    .sort((a, b) => {
      const oa = getReadingOrder(a) ?? Number.MAX_SAFE_INTEGER
      const ob = getReadingOrder(b) ?? Number.MAX_SAFE_INTEGER
      return oa - ob
    })
  const ordered: string[] = []
  for (const slug of catalogOrder) {
    if (cached.has(slug)) ordered.push(slug)
  }
  for (const slug of cached) {
    if (!ordered.includes(slug)) ordered.push(slug)
  }
  return ordered
})

const canShuffle = computed(() => rows.value.length >= 2)

const currentRow = computed(() => rows.value.find((r) => r.isCurrent) ?? null)

/** Fondo del “now”: atmósfera del hero si existe; si no, portada. */
const nowUseAtmosphere = ref(true)
const nowAtmosphereOk = ref(false)

const nowBgSrc = computed(() => {
  const row = currentRow.value
  if (!row) return ''
  return nowUseAtmosphere.value ? atmosphereUrl(row.slug) : row.cover
})

watch(
  () => currentRow.value?.slug,
  () => {
    nowUseAtmosphere.value = true
    nowAtmosphereOk.value = false
  },
)

function onNowBgLoad() {
  if (nowUseAtmosphere.value) nowAtmosphereOk.value = true
}

function onNowBgError() {
  if (nowUseAtmosphere.value) {
    nowUseAtmosphere.value = false
    nowAtmosphereOk.value = false
    return
  }
  const slug = currentRow.value?.slug
  if (slug) onCoverError(slug)
}

function onCoverError(slug: string) {
  if (coverStyle.value !== 'editorial') return
  if (coverFallbackMemorable.value.has(slug)) return
  const next = new Set(coverFallbackMemorable.value)
  next.add(slug)
  coverFallbackMemorable.value = next
}

/** Resto de la cola en orden cíclico (después del actual, luego lo anterior). */
const upNextRows = computed(() => {
  const idx = currentIndex.value ?? -1
  if (idx < 0 || rows.value.length <= 1) return []
  return [...rows.value.slice(idx + 1), ...rows.value.slice(0, idx)]
})

const nowTimeLabel = computed(() => {
  const { currentTime, duration } = trackProgress.value
  return `${formatTime(currentTime)} / ${formatTime(duration)}`
})

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const total = Math.floor(seconds)
  const minutes = Math.floor(total / 60)
  const secs = total % 60
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

function move(index: number, delta: number) {
  openMenuIndex.value = null
  const to = index + delta
  if (to < 0 || to >= items.value.length) return
  reorder(index, to)
}

function toggleMenu(index: number, event: Event) {
  event.stopPropagation()
  const next = openMenuIndex.value === index ? null : index
  openMenuIndex.value = next
  if (next != null) {
    const slug = items.value[next]
    if (slug) void prefetchSize(slug)
  }
}

function closeMenus() {
  openMenuIndex.value = null
}

function removeRow(index: number, title: string) {
  openMenuIndex.value = null
  removeAt(index, { withUndo: true, undoTitle: title })
}

async function onToggleOffline(slug: string) {
  if (offlineBusySlug.value === slug || isOfflineAudioDownloading(slug)) return
  const removing = isOfflineAudioCached(slug)
  if (removing) openMenuIndex.value = null
  offlineBusySlug.value = slug
  try {
    await toggleOffline(slug)
  } finally {
    offlineBusySlug.value = null
    if (!removing) openMenuIndex.value = null
  }
}

function loadDownloadsQueue() {
  openMenuIndex.value = null
  seedWithSlugs(downloadedSlugsInOrder.value)
}

function requestClear() {
  openMenuIndex.value = null
  confirmClearOpen.value = true
}

function cancelClear() {
  confirmClearOpen.value = false
}

function confirmClear() {
  confirmClearOpen.value = false
  clear()
}

function requestShuffle() {
  openMenuIndex.value = null
  if (!canShuffle.value) return
  confirmShuffleOpen.value = true
}

function cancelShuffle() {
  confirmShuffleOpen.value = false
}

function confirmShuffle() {
  confirmShuffleOpen.value = false
  shuffleKeepingCurrent()
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) emit('close')
}

function onRowActivate(index: number) {
  togglePlayAt(index)
}

function onTransportPlay() {
  if (isPlaying.value) pause()
  else resume()
}

function seekFromClientX(clientX: number) {
  const bar = progressEl.value
  const duration = trackProgress.value.duration
  if (!bar || !(duration > 0)) return
  const rect = bar.getBoundingClientRect()
  if (rect.width <= 0) return
  const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
  seekTo(ratio * duration)
}

function onSeekPointerDown(event: PointerEvent) {
  if (event.button !== 0 && event.pointerType === 'mouse') return
  const bar = progressEl.value
  if (!bar) return
  isSeekDragging.value = true
  seekPointerId = event.pointerId
  bar.setPointerCapture(event.pointerId)
  seekFromClientX(event.clientX)
  event.preventDefault()
}

function onSeekPointerMove(event: PointerEvent) {
  if (!isSeekDragging.value || event.pointerId !== seekPointerId) return
  seekFromClientX(event.clientX)
}

function onSeekPointerUp(event: PointerEvent) {
  if (!isSeekDragging.value || event.pointerId !== seekPointerId) return
  seekFromClientX(event.clientX)
  isSeekDragging.value = false
  seekPointerId = null
  try {
    progressEl.value?.releasePointerCapture(event.pointerId)
  } catch {
    /* ignore */
  }
}

function onSeekKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    seekBy(SKIP_SECONDS)
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    seekBy(-SKIP_SECONDS)
  }
}

function onDocPointerDown(event: PointerEvent) {
  if (openMenuIndex.value === null) return
  const target = event.target
  if (target instanceof Element && target.closest('.audio-queue-sheet__item-menu')) return
  closeMenus()
}

onMounted(() => document.addEventListener('pointerdown', onDocPointerDown, true))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointerDown, true))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="audio-queue-sheet"
      role="dialog"
      aria-modal="true"
      aria-label="Cola de reproducción"
      @click="onBackdropClick"
    >
      <div class="audio-queue-sheet__panel" @click.stop>
        <header class="audio-queue-sheet__header">
          <h2 class="audio-queue-sheet__title">Cola</h2>
          <span class="audio-queue-sheet__count">{{ rows.length }}</span>
          <div class="audio-queue-sheet__header-actions">
            <button
              type="button"
              class="audio-queue-sheet__enqueue"
              :disabled="downloadedCount === 0"
              :aria-label="
                downloadedCount > 0
                  ? `Cargar ${downloadedCount} narraciones descargadas en la cola`
                  : 'No hay narraciones descargadas'
              "
              :title="
                downloadedCount > 0
                  ? downloadedTotalLabel
                    ? `Descargas · ${downloadedTotalLabel}`
                    : 'Cargar descargas offline'
                  : 'Sin descargas'
              "
              @click="loadDownloadsQueue"
            >
              <svg
                class="audio-queue-sheet__enqueue-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                  fill="currentColor"
                />
              </svg>
              <span class="audio-queue-sheet__enqueue-copy">
                <span>Offline</span>
                <span v-if="downloadedTotalLabel" class="audio-queue-sheet__enqueue-meta">{{
                  downloadedTotalLabel
                }}</span>
              </span>
            </button>
            <button
              type="button"
              class="audio-queue-sheet__enqueue"
              :disabled="missingAudioCount === 0"
              :aria-label="
                missingAudioCount > 0
                  ? `Agregar ${missingAudioCount} narraciones faltantes a la cola`
                  : 'Todas las narraciones ya están en la cola'
              "
              :title="
                missingAudioCount > 0
                  ? `Agregar ${missingAudioCount} faltantes`
                  : 'Ya están todas en la cola'
              "
              @click="enqueueAllWithAudio"
            >
              <svg
                class="audio-queue-sheet__enqueue-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 5h12v2H3V5zm0 4h12v2H3V9zm0 4h8v2H3v-2zm14-1v8l6-4-6-4z"
                  fill="currentColor"
                />
              </svg>
              <span>Todas</span>
            </button>
            <button
              v-if="rows.length"
              type="button"
              class="audio-queue-sheet__clear"
              aria-label="Vaciar cola"
              @click="requestClear"
            >
              <svg
                class="audio-queue-sheet__clear-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  fill="currentColor"
                />
              </svg>
              <span>Vaciar</span>
            </button>
          </div>
          <button
            type="button"
            class="audio-queue-sheet__close"
            aria-label="Cerrar cola"
            @click="emit('close')"
          >
            ✕
          </button>
        </header>

        <div
          v-if="currentRow"
          class="audio-queue-sheet__now"
          :class="{ 'audio-queue-sheet__now--atmosphere': nowAtmosphereOk }"
        >
          <img
            class="audio-queue-sheet__now-bg"
            :class="
              nowUseAtmosphere
                ? 'audio-queue-sheet__now-bg--atmosphere'
                : 'audio-queue-sheet__now-bg--cover'
            "
            :src="nowBgSrc"
            alt=""
            aria-hidden="true"
            loading="lazy"
            @load="onNowBgLoad"
            @error="onNowBgError"
          />
          <div class="audio-queue-sheet__now-body">
            <div class="audio-queue-sheet__now-text">
              <div class="audio-queue-sheet__item-title">
                <span class="audio-queue-sheet__item-title-text">{{ currentRow.title }}</span>
                <span
                  v-if="currentRow.offline"
                  class="audio-queue-sheet__offline-badge"
                  title="Disponible sin conexión"
                >Offline</span>
              </div>
              <div class="audio-queue-sheet__item-meta">
                <span
                  v-if="currentRow.readingOrder"
                  class="audio-queue-sheet__order-chip"
                  :title="`Libro ${currentRow.readingOrder} en el orden de lectura`"
                >{{ currentRow.readingOrder }}</span>
                <span>{{ currentRow.author }}</span>
                <template v-if="currentRow.sizeLabel"> · {{ currentRow.sizeLabel }}</template>
              </div>
              <div
                ref="progressEl"
                class="audio-queue-sheet__now-progress"
                :class="{ 'audio-queue-sheet__now-progress--dragging': isSeekDragging }"
                role="slider"
                tabindex="0"
                :aria-valuemin="0"
                :aria-valuemax="Math.floor(trackProgress.duration)"
                :aria-valuenow="Math.floor(trackProgress.currentTime)"
                :aria-valuetext="nowTimeLabel"
                aria-label="Progreso de la narración"
                @pointerdown="onSeekPointerDown"
                @pointermove="onSeekPointerMove"
                @pointerup="onSeekPointerUp"
                @pointercancel="onSeekPointerUp"
                @keydown="onSeekKeydown"
              >
                <div
                  class="audio-queue-sheet__now-progress-fill"
                  :style="{ width: `${trackProgress.progress}%` }"
                />
                <div
                  class="audio-queue-sheet__now-progress-thumb"
                  :style="{ left: `${trackProgress.progress}%` }"
                  aria-hidden="true"
                />
              </div>
              <div class="audio-queue-sheet__now-time">
                {{ nowTimeLabel }}
              </div>
            </div>
            <div class="audio-queue-sheet__now-transport">
              <button
                type="button"
                class="audio-queue-sheet__transport-btn"
                aria-label="Anterior"
                @click="playPrevSmart"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                class="audio-queue-sheet__transport-btn audio-queue-sheet__transport-btn--skip"
                aria-label="Retroceder 10 segundos"
                @click="seekBy(-SKIP_SECONDS)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
                    fill="currentColor"
                  />
                </svg>
                <span class="audio-queue-sheet__skip-label">10</span>
              </button>
              <button
                type="button"
                class="audio-queue-sheet__transport-btn audio-queue-sheet__transport-btn--play"
                :aria-label="isPlaying ? 'Pausar' : 'Reproducir'"
                :aria-pressed="isPlaying"
                @click="onTransportPlay"
              >
                <svg
                  v-if="isPlaying"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor" />
                </svg>
                <svg
                  v-else
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                class="audio-queue-sheet__transport-btn audio-queue-sheet__transport-btn--skip"
                aria-label="Adelantar 10 segundos"
                @click="seekBy(SKIP_SECONDS)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"
                    fill="currentColor"
                  />
                </svg>
                <span class="audio-queue-sheet__skip-label">10</span>
              </button>
              <button
                type="button"
                class="audio-queue-sheet__transport-btn"
                aria-label="Siguiente"
                @click="playNext"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                class="audio-queue-sheet__transport-btn"
                :disabled="!canShuffle"
                aria-label="Aleatorizar cola"
                title="Aleatorizar el resto de la cola"
                @click="requestShuffle"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-if="!rows.length" class="audio-queue-sheet__empty">
          <p>No hay narraciones en la cola.</p>
          <button
            v-if="downloadedCount > 0"
            type="button"
            class="audio-queue-sheet__seed"
            @click="loadDownloadsQueue"
          >
            Cargar descargas offline
            <template v-if="downloadedTotalLabel"> ({{ downloadedTotalLabel }})</template>
          </button>
          <button
            type="button"
            class="audio-queue-sheet__seed"
            @click="enqueueAllWithAudio"
          >
            Agregar todos los libros con audio
          </button>
        </div>

        <template v-else>
          <div v-if="upNextRows.length" class="audio-queue-sheet__section-label">
            A continuación
          </div>
          <TransitionGroup
            v-if="upNextRows.length"
            name="queue-reorder"
            tag="ul"
            class="audio-queue-sheet__list"
          >
            <li
              v-for="row in upNextRows"
              :key="row.slug"
              class="audio-queue-sheet__item"
              :class="{ 'audio-queue-sheet__item--menu-open': openMenuIndex === row.index }"
            >
              <div class="audio-queue-sheet__row">
                <div class="audio-queue-sheet__move">
                  <button
                    type="button"
                    class="audio-queue-sheet__move-btn"
                    aria-label="Subir en la cola"
                    :disabled="row.index === 0"
                    @click="move(row.index, -1)"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="audio-queue-sheet__move-btn"
                    aria-label="Bajar en la cola"
                    :disabled="row.index === rows.length - 1"
                    @click="move(row.index, 1)"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="currentColor" />
                    </svg>
                  </button>
                </div>

                <button
                  type="button"
                  class="audio-queue-sheet__play"
                  :aria-label="`Reproducir ${row.title}`"
                  @click="onRowActivate(row.index)"
                >
                  <span class="audio-queue-sheet__cover-wrap">
                    <img
                      class="audio-queue-sheet__cover audio-queue-sheet__cover--sm"
                      :src="row.cover"
                      alt=""
                      loading="lazy"
                      @error="onCoverError(row.slug)"
                    />
                    <span class="audio-queue-sheet__play-icon" aria-hidden="true">▶</span>
                  </span>
                  <span class="audio-queue-sheet__text">
                    <span class="audio-queue-sheet__item-title">
                      <span class="audio-queue-sheet__item-title-text">{{ row.title }}</span>
                      <span
                        v-if="row.offline"
                        class="audio-queue-sheet__offline-badge"
                        title="Disponible sin conexión"
                      >Offline</span>
                    </span>
                    <span class="audio-queue-sheet__item-meta">
                      <span
                        v-if="row.readingOrder"
                        class="audio-queue-sheet__order-chip"
                        :title="`Libro ${row.readingOrder} en el orden de lectura`"
                      >{{ row.readingOrder }}</span>
                      <span>{{ row.author }}</span>
                      <template v-if="row.sizeLabel"> · {{ row.sizeLabel }}</template>
                      <template v-if="row.completedCount > 0"> · ×{{ row.completedCount }}</template>
                    </span>
                    <span
                      v-if="row.offlineBusy"
                      class="audio-queue-sheet__dl-progress"
                      role="progressbar"
                      :aria-valuemin="0"
                      :aria-valuemax="100"
                      :aria-valuenow="row.offlineProgress"
                      :aria-label="`Descarga ${row.offlineProgress}%`"
                    >
                      <span
                        class="audio-queue-sheet__dl-progress-fill"
                        :style="{ width: `${row.offlineProgress}%` }"
                      />
                    </span>
                  </span>
                </button>

                <div class="audio-queue-sheet__item-menu">
                  <button
                    type="button"
                    class="audio-queue-sheet__action"
                    :aria-expanded="openMenuIndex === row.index"
                    aria-haspopup="menu"
                    aria-label="Opciones"
                    @click="toggleMenu(row.index, $event)"
                  >
                    ⋮
                  </button>
                  <div
                    v-if="openMenuIndex === row.index"
                    class="audio-queue-sheet__menu-panel"
                    role="menu"
                  >
                    <button
                      type="button"
                      class="audio-queue-sheet__menu-item audio-queue-sheet__menu-item--offline"
                      role="menuitem"
                      :disabled="row.offlineBusy"
                      :aria-busy="row.offlineBusy"
                      @click="onToggleOffline(row.slug)"
                    >
                      <span class="audio-queue-sheet__menu-item-row">
                        <svg
                          v-if="row.offline"
                          class="audio-queue-sheet__menu-icon"
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
                          class="audio-queue-sheet__menu-icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor" />
                        </svg>
                        <span class="audio-queue-sheet__menu-item-copy">
                          <span class="audio-queue-sheet__menu-item-label">{{
                            row.offlineLabel
                          }}</span>
                          <span
                            v-if="row.sizeLabel"
                            class="audio-queue-sheet__menu-item-size"
                          >{{ row.sizeLabel }}</span>
                        </span>
                      </span>
                      <span
                        v-if="row.offlineBusy"
                        class="audio-queue-sheet__menu-progress"
                        role="progressbar"
                        :aria-valuemin="0"
                        :aria-valuemax="100"
                        :aria-valuenow="row.offlineProgress"
                      >
                        <span
                          class="audio-queue-sheet__menu-progress-fill"
                          :style="{ width: `${row.offlineProgress}%` }"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      class="audio-queue-sheet__menu-item audio-queue-sheet__menu-item--danger"
                      role="menuitem"
                      @click="removeRow(row.index, row.title)"
                    >
                      <svg
                        class="audio-queue-sheet__menu-icon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                          fill="currentColor"
                        />
                      </svg>
                      Quitar de la cola
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </TransitionGroup>
          <p v-else class="audio-queue-sheet__empty audio-queue-sheet__empty--soft">
            No hay más tracks a continuación.
          </p>
        </template>
      </div>
    </div>

    <div
      v-if="confirmClearOpen"
      class="audio-queue-confirm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-queue-confirm-title"
      @click.self="cancelClear"
    >
      <div class="audio-queue-confirm__card" @click.stop>
        <h3 id="audio-queue-confirm-title" class="audio-queue-confirm__title">
          ¿Vaciar la cola?
        </h3>
        <p class="audio-queue-confirm__text">
          Se quitarán todas las narraciones de la cola. Esta acción no se puede deshacer.
        </p>
        <div class="audio-queue-confirm__actions">
          <button
            type="button"
            class="audio-queue-confirm__btn audio-queue-confirm__btn--ghost"
            @click="cancelClear"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="audio-queue-confirm__btn audio-queue-confirm__btn--danger"
            @click="confirmClear"
          >
            Vaciar
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="confirmShuffleOpen"
      class="audio-queue-confirm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-queue-shuffle-title"
      @click.self="cancelShuffle"
    >
      <div class="audio-queue-confirm__card" @click.stop>
        <h3 id="audio-queue-shuffle-title" class="audio-queue-confirm__title">
          ¿Aleatorizar la cola?
        </h3>
        <p class="audio-queue-confirm__text">
          Se reorganizará el orden de las pistas siguientes. La que está sonando ahora se
          mantiene.
        </p>
        <div class="audio-queue-confirm__actions">
          <button
            type="button"
            class="audio-queue-confirm__btn audio-queue-confirm__btn--ghost"
            @click="cancelShuffle"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="audio-queue-confirm__btn"
            @click="confirmShuffle"
          >
            Aleatorizar
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="undoState"
      class="audio-queue-undo"
      role="status"
    >
      <span class="audio-queue-undo__text">Quitado: {{ undoState.title }}</span>
      <button type="button" class="audio-queue-undo__btn" @click="undoRemove">
        Deshacer
      </button>
      <button
        type="button"
        class="audio-queue-undo__dismiss"
        aria-label="Cerrar"
        @click="dismissUndo"
      >
        ✕
      </button>
    </div>
  </Teleport>
</template>

<style src="./AudioQueueSheet.css"></style>
