<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { bookOgImageUrl } from '../config/site'
import {
  clearAudioPosition,
  readAudioPosition,
  writeAudioPosition,
} from '../reading/audio-storage'
import { audioUrl, publicAssetUrl } from '../utils/audioUrl'
import { coverStyle } from '../composables/useCoverStyle'
import { coverImageUrl, coverUrlForStyle } from '../utils/coverImage'

const SKIP_SECONDS = 10
const SAVE_INTERVAL_MS = 2000

const props = withDefaults(
  defineProps<{
    slug: string
    audioSrc?: string
    /** Si es false, no se muestra el reproductor */
    available?: boolean
    /** Fijo abajo a la derecha (~300px) — legado */
    floating?: boolean
    /** Siempre fijo arriba (legado / casos puntuales) */
    dockTop?: boolean
    /** Mini full-width encima de la bottom bar */
    bar?: boolean
    /** Panel expandido a pantalla completa */
    expanded?: boolean
    /** Título corto debajo del progreso (cola global) */
    trackTitle?: string
    /** Subtítulo (autor) */
    trackSubtitle?: string
    /** Pedir autoplay tras cargar metadata */
    autoplay?: boolean
    /** Pedir pause remoto */
    pauseRequest?: boolean
    /** Pedir resume remoto */
    resumeRequest?: boolean
    /** Pedir seek a 0 */
    seekZeroRequest?: boolean
    /** Pedir seek a tiempo absoluto (segundos); null = idle */
    seekToRequest?: number | null
    /** Token para re-disparar el mismo seek */
    seekToToken?: number
    /** Mostrar prev/next de cola */
    showTransport?: boolean
    /**
     * Callback síncrono al terminar: avanza la cola y devuelve el próximo slug.
     * Necesario en iOS para play() del siguiente track en el mismo tick que `ended`.
     */
    takeNextAfterEnded?: () => string | null
    /** Siguiente/anterior síncronos para Media Session (lock screen). */
    skipToNext?: () => string | null
    skipToPrev?: () => string | null
  }>(),
  {
    available: undefined,
    floating: false,
    dockTop: false,
    bar: false,
    expanded: false,
    autoplay: false,
    pauseRequest: false,
    resumeRequest: false,
    seekZeroRequest: false,
    seekToRequest: null,
    seekToToken: 0,
    showTransport: false,
  },
)

const emit = defineEmits<{
  play: []
  pause: []
  close: []
  ended: []
  openQueue: []
  prev: []
  next: []
  expand: []
  collapse: []
  progress: [payload: { currentTime: number; duration: number }]
  pauseConsumed: []
  resumeConsumed: []
  seekZeroConsumed: []
  seekToConsumed: []
  /** play() del siguiente track fue bloqueado (p. ej. iOS en background) */
  continuationBlocked: []
}>()

const src = computed(() =>
  props.audioSrc ? publicAssetUrl(props.audioSrc) : audioUrl(props.slug),
)

const coverFailed = ref(false)
const coverFallbackMemorable = ref(false)
const coverSrc = computed(() =>
  coverFallbackMemorable.value
    ? coverImageUrl(props.slug)
    : coverUrlForStyle(props.slug, coverStyle.value),
)

watch(
  [() => props.slug, coverStyle],
  () => {
    coverFailed.value = false
    coverFallbackMemorable.value = false
  },
)

const rootEl = ref<HTMLElement | null>(null)
const audioEl = ref<HTMLAudioElement | null>(null)
const progressEl = ref<HTMLDivElement | null>(null)
const visible = ref(props.available !== false)
const playing = ref(false)
const duration = ref(0)
const currentTime = ref(0)
const savedCurrentTime = ref<number | null>(null)
const restoreApplied = ref(false)
const hasEnded = ref(false)
const isDragging = ref(false)
/** Evita pause/load del watch(src) cuando ya hicimos play() síncrono tras ended. */
let ignoreNextSrcWatch = false
let lastSaveAt = 0
let dragPointerId: number | null = null

const progress = computed(() =>
  duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0,
)

const timeLabel = computed(
  () => `${formatTime(currentTime.value)} / ${formatTime(duration.value)}`,
)

const isChrome = computed(() => props.bar || props.expanded || props.floating || props.dockTop)

watch(
  () => props.available,
  (value) => {
    if (value === false) visible.value = false
    else if (value === true) visible.value = true
  },
)

watch(src, () => {
  if (ignoreNextSrcWatch) {
    ignoreNextSrcWatch = false
    if (props.available !== false) visible.value = true
    loadSavedPosition()
    emitProgress()
    syncMediaSessionMetadata()
    return
  }
  playing.value = false
  currentTime.value = 0
  duration.value = 0
  savedCurrentTime.value = null
  restoreApplied.value = false
  hasEnded.value = false
  if (props.available !== false) visible.value = true
  audioEl.value?.pause()
  audioEl.value?.load()
  loadSavedPosition()
  emitProgress()
  syncMediaSessionMetadata()
})

watch(
  () => [props.trackTitle, props.trackSubtitle, props.slug] as const,
  () => {
    syncMediaSessionMetadata()
  },
)

watch(
  () => props.pauseRequest,
  (want) => {
    if (!want) return
    audioEl.value?.pause()
    emit('pauseConsumed')
  },
)

watch(
  () => props.resumeRequest,
  (want) => {
    if (!want) return
    const audio = audioEl.value
    if (!audio) {
      emit('resumeConsumed')
      return
    }
    restorePosition()
    void audio.play().catch(() => {
      /* autoplay bloqueado */
    })
    emit('resumeConsumed')
  },
)

watch(
  () => props.seekZeroRequest,
  (want) => {
    if (!want) return
    const audio = audioEl.value
    if (audio) {
      audio.currentTime = 0
      currentTime.value = 0
      hasEnded.value = false
      persistPosition(true)
      emitProgress()
    }
    emit('seekZeroConsumed')
  },
)

watch(
  () => [props.seekToRequest, props.seekToToken] as const,
  ([seconds]) => {
    if (seconds === null || seconds === undefined) return
    const audio = audioEl.value
    if (!audio) {
      emit('seekToConsumed')
      return
    }
    const max =
      Number.isFinite(duration.value) && duration.value > 0
        ? duration.value
        : Number.isFinite(audio.duration)
          ? audio.duration
          : seconds
    const next = Math.min(Math.max(seconds, 0), max)
    audio.currentTime = next
    currentTime.value = next
    if (hasEnded.value && next < max - 0.25) hasEnded.value = false
    persistPosition(true)
    emitProgress()
    emit('seekToConsumed')
  },
)

function loadSavedPosition() {
  const saved = readAudioPosition(props.slug)
  if (saved && saved.currentTime > 0) {
    savedCurrentTime.value = saved.currentTime
    currentTime.value = saved.currentTime
    return
  }

  savedCurrentTime.value = null
  restoreApplied.value = true
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

function emitProgress() {
  emit('progress', {
    currentTime: currentTime.value,
    duration: duration.value,
  })
}

function persistPosition(force = false) {
  const audio = audioEl.value
  if (!audio || !Number.isFinite(audio.currentTime)) return
  if (!restoreApplied.value && savedCurrentTime.value !== null) return

  const now = Date.now()
  if (!force && now - lastSaveAt < SAVE_INTERVAL_MS) return

  lastSaveAt = now
  writeAudioPosition(props.slug, {
    currentTime: audio.currentTime,
    updatedAt: now,
  })
}

function restorePosition() {
  if (restoreApplied.value) return

  const audio = audioEl.value
  if (!audio || !Number.isFinite(audio.duration) || audio.duration <= 0) return

  restoreApplied.value = true
  const saved = savedCurrentTime.value
  if (!saved || saved <= 0) return

  const next = Math.min(saved, Math.max(audio.duration - 0.5, 0))
  if (next <= 0) return

  audio.currentTime = next
  currentTime.value = next
}

function togglePlay() {
  const audio = audioEl.value
  if (!audio) return

  if (hasEnded.value) {
    hasEnded.value = false
    audio.currentTime = 0
    currentTime.value = 0
    void audio.play()
    return
  }

  if (playing.value) {
    audio.pause()
  } else {
    restorePosition()
    void audio.play()
  }
}

function skip(seconds: number) {
  const audio = audioEl.value
  if (!audio) return
  const max = Number.isFinite(duration.value) && duration.value > 0 ? duration.value : audio.duration
  const next = Math.min(Math.max(audio.currentTime + seconds, 0), max || 0)
  audio.currentTime = next
  currentTime.value = next
  persistPosition(true)
  emitProgress()
}

function closePlayer() {
  persistPosition(true)
  emit('close')
}

function syncMediaSessionMetadata() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return
  try {
    const cover = bookOgImageUrl(props.slug)
    navigator.mediaSession.metadata = new MediaMetadata({
      title: props.trackTitle || props.slug,
      artist: props.trackSubtitle || 'Memorable Summaries',
      album: 'Memorable Summaries',
      artwork: [
        { src: cover, sizes: '96x96', type: 'image/jpeg' },
        { src: cover, sizes: '128x128', type: 'image/jpeg' },
        { src: cover, sizes: '192x192', type: 'image/jpeg' },
        { src: cover, sizes: '256x256', type: 'image/jpeg' },
        { src: cover, sizes: '384x384', type: 'image/jpeg' },
        { src: cover, sizes: '512x512', type: 'image/jpeg' },
      ],
    })
  } catch {
    /* MediaMetadata no disponible */
  }
}

function syncMediaSessionPlaybackState(state: MediaSessionPlaybackState) {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return
  try {
    navigator.mediaSession.playbackState = state
  } catch {
    /* ignore */
  }
}

function syncMediaSessionPosition() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return
  if (!Number.isFinite(duration.value) || duration.value <= 0) return
  const position = Math.min(Math.max(currentTime.value, 0), duration.value)
  try {
    navigator.mediaSession.setPositionState({
      duration: duration.value,
      playbackRate: 1,
      position,
    })
  } catch {
    /* setPositionState no soportado / valores inválidos */
  }
}

function setMediaSessionHandler(
  action: MediaSessionAction,
  handler: MediaSessionActionHandler | null,
) {
  try {
    navigator.mediaSession.setActionHandler(action, handler)
  } catch {
    /* acción no soportada en este navegador */
  }
}

/** Cambia de pista y play() en el mismo tick (iOS lock screen / ended). */
function continuePlaybackTo(nextSlug: string) {
  const audio = audioEl.value
  if (!audio) {
    emit('continuationBlocked')
    return
  }

  if (nextSlug === props.slug) {
    hasEnded.value = false
    audio.currentTime = 0
    currentTime.value = 0
    void audio.play().catch(() => emit('continuationBlocked'))
    syncMediaSessionPlaybackState('playing')
    return
  }

  ignoreNextSrcWatch = true
  hasEnded.value = false
  playing.value = false
  currentTime.value = 0
  duration.value = 0
  const saved = readAudioPosition(nextSlug)
  if (saved && saved.currentTime > 0) {
    savedCurrentTime.value = saved.currentTime
    restoreApplied.value = false
  } else {
    savedCurrentTime.value = null
    restoreApplied.value = true
  }

  audio.src = audioUrl(nextSlug)
  void audio
    .play()
    .then(() => {
      syncMediaSessionPlaybackState('playing')
      syncMediaSessionMetadata()
      bindMediaSessionActions()
    })
    .catch(() => {
      emit('continuationBlocked')
    })
}

function bindMediaSessionActions() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return

  setMediaSessionHandler('play', () => {
    void togglePlay()
  })
  setMediaSessionHandler('pause', () => {
    audioEl.value?.pause()
  })
  setMediaSessionHandler('seekto', (details) => {
    if (details.seekTime == null || !audioEl.value) return
    const audio = audioEl.value
    const max =
      Number.isFinite(duration.value) && duration.value > 0
        ? duration.value
        : audio.duration
    if (!Number.isFinite(max) || max <= 0) return
    const next = Math.min(Math.max(details.seekTime, 0), max)
    audio.currentTime = next
    currentTime.value = next
    persistPosition(true)
    emitProgress()
    syncMediaSessionPosition()
  })

  // iOS: si registrás seek ± y next/prev, suele mostrar solo ±.
  // Con cola (showTransport) priorizamos anterior/siguiente de pista.
  if (props.showTransport) {
    setMediaSessionHandler('seekbackward', null)
    setMediaSessionHandler('seekforward', null)
    setMediaSessionHandler('previoustrack', () => {
      if (currentTime.value > 3) {
        const audio = audioEl.value
        if (audio) {
          audio.currentTime = 0
          currentTime.value = 0
          void audio.play().catch(() => emit('continuationBlocked'))
        }
        return
      }
      const prev = props.skipToPrev?.() ?? null
      if (prev) continuePlaybackTo(prev)
      else emit('prev')
    })
    setMediaSessionHandler('nexttrack', () => {
      const next = props.skipToNext?.() ?? null
      if (next) continuePlaybackTo(next)
      else emit('next')
    })
  } else {
    setMediaSessionHandler('previoustrack', null)
    setMediaSessionHandler('nexttrack', null)
    setMediaSessionHandler('seekbackward', (details) => {
      skip(-(details.seekOffset || SKIP_SECONDS))
    })
    setMediaSessionHandler('seekforward', (details) => {
      skip(details.seekOffset || SKIP_SECONDS)
    })
  }
}

function clearMediaSessionActions() {
  if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return
  for (const action of [
    'play',
    'pause',
    'seekbackward',
    'seekforward',
    'previoustrack',
    'nexttrack',
    'seekto',
  ] as MediaSessionAction[]) {
    setMediaSessionHandler(action, null)
  }
}

function onPlay() {
  playing.value = true
  hasEnded.value = false
  syncMediaSessionMetadata()
  syncMediaSessionPlaybackState('playing')
  syncMediaSessionPosition()
  bindMediaSessionActions()
  emit('play')
}

function onPause() {
  playing.value = false
  persistPosition(true)
  syncMediaSessionPlaybackState('paused')
  emit('pause')
}

function onTimeUpdate() {
  if (isDragging.value) return
  if (audioEl.value) currentTime.value = audioEl.value.currentTime
  persistPosition()
  emitProgress()
  if (playing.value) syncMediaSessionPosition()
}

function onLoadedMetadata() {
  if (audioEl.value) duration.value = audioEl.value.duration
  restorePosition()
  emitProgress()
  tryAutoplay()
}

watch(
  () => props.autoplay,
  (want) => {
    if (want) tryAutoplay()
  },
)

watch(
  () => props.showTransport,
  () => {
    bindMediaSessionActions()
  },
)

function onDurationChange() {
  restorePosition()
  emitProgress()
}

function onEnded() {
  playing.value = false
  hasEnded.value = true
  if (audioEl.value && Number.isFinite(audioEl.value.duration)) {
    currentTime.value = audioEl.value.duration
  }
  clearAudioPosition(props.slug)
  emitProgress()

  const nextSlug = props.takeNextAfterEnded?.() ?? null
  if (!nextSlug || !audioEl.value) {
    syncMediaSessionPlaybackState('none')
    emit('ended')
    return
  }

  continuePlaybackTo(nextSlug)
}

function tryAutoplay() {
  if (!props.autoplay) return
  const audio = audioEl.value
  if (!audio) return
  restorePosition()
  void audio.play().catch(() => {
    /* autoplay bloqueado por el navegador */
  })
}

function onError() {
  visible.value = false
}

function seekTo(ratio: number) {
  const audio = audioEl.value
  if (!audio || !Number.isFinite(duration.value) || duration.value <= 0) return
  const next = Math.min(Math.max(ratio, 0), 1) * duration.value
  audio.currentTime = next
  currentTime.value = next
  if (hasEnded.value && next < duration.value - 0.25) {
    hasEnded.value = false
  }
  emitProgress()
}

function seekFromClientX(clientX: number) {
  const bar = progressEl.value
  if (!bar) return
  const rect = bar.getBoundingClientRect()
  if (rect.width <= 0) return
  seekTo((clientX - rect.left) / rect.width)
}

function endProgressDrag(event: PointerEvent) {
  const bar = progressEl.value
  if (!isDragging.value) return

  if (bar && dragPointerId !== null) {
    try {
      bar.releasePointerCapture(dragPointerId)
    } catch {
      /* already released */
    }
  }

  seekFromClientX(event.clientX)
  persistPosition(true)
  isDragging.value = false
  dragPointerId = null
}

function onProgressPointerDown(event: PointerEvent) {
  if (event.button !== 0 && event.pointerType === 'mouse') return

  const bar = progressEl.value
  if (!bar) return

  isDragging.value = true
  dragPointerId = event.pointerId
  bar.setPointerCapture(event.pointerId)
  seekFromClientX(event.clientX)
  event.preventDefault()
}

function onProgressPointerMove(event: PointerEvent) {
  if (!isDragging.value || event.pointerId !== dragPointerId) return
  seekFromClientX(event.clientX)
}

function onProgressPointerUp(event: PointerEvent) {
  if (!isDragging.value || event.pointerId !== dragPointerId) return
  endProgressDrag(event)
}

function onProgressKeydown(event: KeyboardEvent) {
  const step = event.key === 'ArrowRight' ? 10 : event.key === 'ArrowLeft' ? -10 : 0
  if (!step) return
  event.preventDefault()
  skip(step)
}

function onVisibilityChange() {
  if (document.visibilityState === 'hidden') {
    persistPosition(true)
    return
  }
  // Al volver a primer plano: reintentar si el siguiente quedó pendiente (iOS).
  tryAutoplay()
}

function onCoverError() {
  if (coverStyle.value === 'editorial' && !coverFallbackMemorable.value) {
    coverFallbackMemorable.value = true
    return
  }
  coverFailed.value = true
}

function onExpandClick() {
  if (props.expanded) emit('collapse')
  else emit('expand')
}

onMounted(() => {
  loadSavedPosition()
  bindMediaSessionActions()
  syncMediaSessionMetadata()
  window.addEventListener('beforeunload', () => persistPosition(true))
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
  isDragging.value = false
  dragPointerId = null
  persistPosition(true)
  audioEl.value?.pause()
  clearMediaSessionActions()
  syncMediaSessionPlaybackState('none')
})

defineExpose({ rootEl, skip, togglePlay })
</script>

<template>
  <div
    v-if="visible"
    ref="rootEl"
    class="audio-player"
    :class="{
      'audio-player--floating': floating || dockTop,
      'audio-player--dock-top': dockTop,
      'audio-player--bar': bar && !expanded,
      'audio-player--expanded': expanded,
    }"
    role="group"
    aria-label="Reproductor de audio del resumen"
  >
    <audio
      ref="audioEl"
      :src="src"
      preload="metadata"
      playsinline
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @durationchange="onDurationChange"
      @ended="onEnded"
      @error="onError"
    />

    <!-- Mini bar / expanded chrome -->
    <template v-if="bar || expanded">
      <div
        v-if="bar && !expanded"
        class="audio-player__bar-progress"
        aria-hidden="true"
      >
        <div class="audio-player__bar-progress-fill" :style="{ width: `${progress}%` }" />
      </div>

      <button
        v-if="expanded"
        type="button"
        class="audio-player__collapse"
        aria-label="Minimizar reproductor"
        @click="emit('collapse')"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor" />
        </svg>
      </button>

      <button
        type="button"
        class="audio-player__cover-btn"
        :aria-label="expanded ? 'Minimizar' : 'Expandir reproductor'"
        @click="onExpandClick"
      >
        <img
          v-if="!coverFailed"
          class="audio-player__cover"
          :src="coverSrc"
          alt=""
          @error="onCoverError"
        />
        <div v-else class="audio-player__cover audio-player__cover--fallback" aria-hidden="true">
          {{ (trackTitle || slug).slice(0, 1).toUpperCase() }}
        </div>
      </button>

      <div class="audio-player__main">
        <button
          type="button"
          class="audio-player__identity"
          :aria-label="expanded ? 'Minimizar' : 'Expandir reproductor'"
          @click="onExpandClick"
        >
          <span class="audio-player__title">{{ trackTitle || slug }}</span>
          <span v-if="trackSubtitle" class="audio-player__subtitle">{{ trackSubtitle }}</span>
        </button>

        <div
          v-if="expanded"
          ref="progressEl"
          class="audio-player__progress"
          :class="{ 'audio-player__progress--dragging': isDragging }"
          role="slider"
          tabindex="0"
          :aria-valuemin="0"
          :aria-valuemax="Math.floor(duration)"
          :aria-valuenow="Math.floor(currentTime)"
          :aria-valuetext="timeLabel"
          aria-label="Progreso de la narración"
          @pointerdown="onProgressPointerDown"
          @pointermove="onProgressPointerMove"
          @pointerup="onProgressPointerUp"
          @pointercancel="onProgressPointerUp"
          @keydown="onProgressKeydown"
        >
          <div class="audio-player__progress-fill" :style="{ width: `${progress}%` }" />
          <div
            class="audio-player__progress-thumb"
            :style="{ left: `${progress}%` }"
            aria-hidden="true"
          />
        </div>
        <div v-if="expanded" class="audio-player__meta">
          <span class="audio-player__time" aria-hidden="true">{{ timeLabel }}</span>
        </div>

        <div class="audio-player__transport">
          <button
            v-if="showTransport"
            type="button"
            class="audio-player__btn audio-player__btn--skip"
            aria-label="Anterior"
            @click="emit('prev')"
          >
            <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
            </svg>
          </button>

          <button
            v-if="expanded"
            type="button"
            class="audio-player__btn audio-player__btn--skip"
            aria-label="Retroceder 10 segundos"
            @click="skip(-SKIP_SECONDS)"
          >
            <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
                fill="currentColor"
              />
            </svg>
            <span class="audio-player__skip-label">10</span>
          </button>

          <button
            type="button"
            class="audio-player__btn audio-player__btn--play"
            :aria-label="hasEnded ? 'Volver a empezar' : playing ? 'Pausar narración' : 'Reproducir narración'"
            :aria-pressed="playing"
            @click="togglePlay"
          >
            <svg
              v-if="hasEnded"
              class="audio-player__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
                fill="currentColor"
              />
            </svg>
            <svg
              v-else-if="!playing"
              class="audio-player__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
            <svg
              v-else
              class="audio-player__icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor" />
            </svg>
          </button>

          <button
            v-if="expanded"
            type="button"
            class="audio-player__btn audio-player__btn--skip"
            aria-label="Adelantar 10 segundos"
            @click="skip(SKIP_SECONDS)"
          >
            <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"
                fill="currentColor"
              />
            </svg>
            <span class="audio-player__skip-label">10</span>
          </button>

          <button
            v-if="showTransport"
            type="button"
            class="audio-player__btn audio-player__btn--skip"
            aria-label="Siguiente"
            @click="emit('next')"
          >
            <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      <button
        type="button"
        class="audio-player__btn audio-player__btn--queue"
        aria-label="Abrir cola de reproducción"
        @click="emit('openQueue')"
      >
        <svg class="audio-player__queue-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h8v2H4v-2zm13-1v4l3.5-2L17 15z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        v-if="!expanded"
        type="button"
        class="audio-player__btn audio-player__btn--close"
        aria-label="Ocultar reproductor"
        @click="closePlayer"
      >
        <svg class="audio-player__close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </template>

    <!-- Layout clásico (hero / floating legado) -->
    <template v-else>
      <button
        type="button"
        class="audio-player__btn audio-player__btn--play"
        :aria-label="hasEnded ? 'Volver a empezar' : playing ? 'Pausar narración' : 'Reproducir narración'"
        :aria-pressed="playing"
        @click="togglePlay"
      >
        <svg
          v-if="hasEnded"
          class="audio-player__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
            fill="currentColor"
          />
        </svg>
        <svg
          v-else-if="!playing"
          class="audio-player__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
        <svg
          v-else
          class="audio-player__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6 5h4v14H6zm8 0h4v14h-4z" fill="currentColor" />
        </svg>
      </button>

      <button
        type="button"
        class="audio-player__btn audio-player__btn--skip"
        aria-label="Retroceder 10 segundos"
        @click="skip(-SKIP_SECONDS)"
      >
        <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
            fill="currentColor"
          />
        </svg>
        <span class="audio-player__skip-label">10</span>
      </button>

      <div class="audio-player__track">
        <div
          ref="progressEl"
          class="audio-player__progress"
          :class="{ 'audio-player__progress--dragging': isDragging }"
          role="slider"
          tabindex="0"
          :aria-valuemin="0"
          :aria-valuemax="Math.floor(duration)"
          :aria-valuenow="Math.floor(currentTime)"
          :aria-valuetext="timeLabel"
          aria-label="Progreso de la narración"
          @pointerdown="onProgressPointerDown"
          @pointermove="onProgressPointerMove"
          @pointerup="onProgressPointerUp"
          @pointercancel="onProgressPointerUp"
          @keydown="onProgressKeydown"
        >
          <div class="audio-player__progress-fill" :style="{ width: `${progress}%` }" />
          <div
            class="audio-player__progress-thumb"
            :style="{ left: `${progress}%` }"
            aria-hidden="true"
          />
        </div>
        <div class="audio-player__meta">
          <span v-if="trackTitle" class="audio-player__title">{{ trackTitle }}</span>
          <span class="audio-player__time" aria-hidden="true">{{ timeLabel }}</span>
        </div>
      </div>

      <button
        v-if="isChrome"
        type="button"
        class="audio-player__btn audio-player__btn--queue"
        aria-label="Abrir cola de reproducción"
        @click="emit('openQueue')"
      >
        <svg class="audio-player__queue-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h8v2H4v-2zm13-1v4l3.5-2L17 15z"
            fill="currentColor"
          />
        </svg>
      </button>

      <button
        type="button"
        class="audio-player__btn audio-player__btn--skip"
        aria-label="Adelantar 10 segundos"
        @click="skip(SKIP_SECONDS)"
      >
        <svg class="audio-player__skip-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"
            fill="currentColor"
          />
        </svg>
        <span class="audio-player__skip-label">10</span>
      </button>

      <button
        v-if="floating || dockTop"
        type="button"
        class="audio-player__btn audio-player__btn--close"
        aria-label="Ocultar reproductor"
        @click="closePlayer"
      >
        <svg class="audio-player__close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </template>
  </div>
</template>

<style src="./AudioPlayer.css"></style>
