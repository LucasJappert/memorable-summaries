<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getBookBySlug } from '../books/catalog'
import { useAudioQueue } from '../composables/useAudioQueue'
import { useOfflineAudio } from '../composables/useOfflineAudio'
import { readingRevision } from '../reading/revision'
import { coverImageUrl } from '../utils/coverImage'

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
  seedAllWithAudio,
  playPrevSmart,
  playNext,
  pause,
  resume,
  seekTo,
  seekBy,
} = useAudioQueue()

const { cachedSlugs, isOfflineAudioCached } = useOfflineAudio()

const openMenuIndex = ref<number | null>(null)
const confirmClearOpen = ref(false)
const progressEl = ref<HTMLDivElement | null>(null)
const isSeekDragging = ref(false)
let seekPointerId: number | null = null

const SKIP_SECONDS = 10

const rows = computed(() => {
  readingRevision.value
  cachedSlugs.value
  return items.value.map((slug, index) => {
    const book = getBookBySlug(slug)
    const title = book?.meta.titleEs?.trim() || book?.meta.title || slug
    const author = book?.meta.author ?? ''
    const stats = statsFor(slug)
    return {
      slug,
      index,
      title,
      author,
      cover: coverImageUrl(slug),
      isCurrent: index === currentIndex.value,
      completedCount: stats.completedCount,
      markedListened: stats.markedListened,
      offline: isOfflineAudioCached(slug),
    }
  })
})

const currentRow = computed(() => rows.value.find((r) => r.isCurrent) ?? null)
const upNextRows = computed(() => rows.value.filter((r) => !r.isCurrent))

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
  openMenuIndex.value = openMenuIndex.value === index ? null : index
}

function closeMenus() {
  openMenuIndex.value = null
}

function removeRow(index: number, title: string) {
  openMenuIndex.value = null
  removeAt(index, { withUndo: true, undoTitle: title })
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
          <button
            type="button"
            class="audio-queue-sheet__close"
            aria-label="Cerrar cola"
            @click="emit('close')"
          >
            ✕
          </button>
        </header>

        <div v-if="currentRow" class="audio-queue-sheet__now">
          <img
            class="audio-queue-sheet__now-bg"
            :src="currentRow.cover"
            alt=""
            loading="lazy"
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
              <div class="audio-queue-sheet__item-meta">{{ currentRow.author }}</div>
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
            </div>
          </div>
        </div>

        <div v-if="!rows.length" class="audio-queue-sheet__empty">
          <p>No hay narraciones en la cola.</p>
          <button
            type="button"
            class="audio-queue-sheet__seed"
            @click="seedAllWithAudio"
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
                  <img
                    class="audio-queue-sheet__cover audio-queue-sheet__cover--sm"
                    :src="row.cover"
                    alt=""
                    loading="lazy"
                  />
                  <span class="audio-queue-sheet__play-icon" aria-hidden="true">▶</span>
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
                      {{ row.author }}
                      <template v-if="row.completedCount > 0"> · ×{{ row.completedCount }}</template>
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
                      class="audio-queue-sheet__menu-item audio-queue-sheet__menu-item--danger"
                      role="menuitem"
                      @click="removeRow(row.index, row.title)"
                    >
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
