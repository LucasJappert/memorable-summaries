<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  clearAudioPosition,
  readAudioPosition,
  writeAudioPosition,
} from '../reading/audio-storage'
import { audioUrl, publicAssetUrl } from '../utils/audioUrl'

const SKIP_SECONDS = 10
const SAVE_INTERVAL_MS = 2000

const props = withDefaults(
  defineProps<{
    slug: string
    audioSrc?: string
    /** Si es false, no se muestra el reproductor */
    available?: boolean
    /** Barra fija arriba cuando el hero ya no está visible */
    floating?: boolean
    /** Siempre fijo arriba (móvil) */
    dockTop?: boolean
  }>(),
  { available: undefined, floating: false, dockTop: false },
)

const emit = defineEmits<{
  play: []
  pause: []
}>()

const src = computed(() =>
  props.audioSrc ? publicAssetUrl(props.audioSrc) : audioUrl(props.slug),
)

const rootEl = ref<HTMLElement | null>(null)
const audioEl = ref<HTMLAudioElement | null>(null)
const progressEl = ref<HTMLDivElement | null>(null)
const visible = ref(props.available !== false)
const playing = ref(false)
const duration = ref(0)
const currentTime = ref(0)
const restored = ref(false)
const hasEnded = ref(false)
const isDragging = ref(false)
let lastSaveAt = 0
let dragPointerId: number | null = null

const progress = computed(() =>
  duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0,
)

const timeLabel = computed(
  () => `${formatTime(currentTime.value)} / ${formatTime(duration.value)}`,
)

watch(
  () => props.available,
  (value) => {
    if (value === false) visible.value = false
    else if (value === true) visible.value = true
  },
)

watch(src, () => {
  playing.value = false
  currentTime.value = 0
  duration.value = 0
  restored.value = false
  hasEnded.value = false
  if (props.available !== false) visible.value = true
  audioEl.value?.pause()
  audioEl.value?.load()
})

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

function persistPosition(force = false) {
  const audio = audioEl.value
  if (!audio || !Number.isFinite(audio.currentTime)) return

  const now = Date.now()
  if (!force && now - lastSaveAt < SAVE_INTERVAL_MS) return

  lastSaveAt = now
  writeAudioPosition(props.slug, {
    currentTime: audio.currentTime,
    updatedAt: now,
  })
}

function restorePosition() {
  const audio = audioEl.value
  if (!audio || restored.value || !Number.isFinite(audio.duration) || audio.duration <= 0) return

  const saved = readAudioPosition(props.slug)
  restored.value = true
  if (!saved || saved.currentTime <= 0) return

  const next = Math.min(saved.currentTime, Math.max(audio.duration - 0.5, 0))
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
}

function onPlay() {
  playing.value = true
  hasEnded.value = false
  emit('play')
}

function onPause() {
  playing.value = false
  persistPosition(true)
  emit('pause')
}

function onTimeUpdate() {
  if (isDragging.value) return
  if (audioEl.value) currentTime.value = audioEl.value.currentTime
  persistPosition()
}

function onLoadedMetadata() {
  if (audioEl.value) duration.value = audioEl.value.duration
  restorePosition()
}

function onEnded() {
  playing.value = false
  hasEnded.value = true
  if (audioEl.value && Number.isFinite(audioEl.value.duration)) {
    currentTime.value = audioEl.value.duration
  }
  clearAudioPosition(props.slug)
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
  if (document.visibilityState === 'hidden') persistPosition(true)
}

onMounted(() => {
  window.addEventListener('beforeunload', () => persistPosition(true))
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibilityChange)
  isDragging.value = false
  dragPointerId = null
  persistPosition(true)
  audioEl.value?.pause()
})

defineExpose({ rootEl })
</script>

<template>
  <div
    v-if="visible"
    ref="rootEl"
    class="audio-player"
    :class="{
      'audio-player--floating': floating || dockTop,
      'audio-player--dock-top': dockTop,
    }"
    role="group"
    aria-label="Reproductor de audio del resumen"
  >
    <audio
      ref="audioEl"
      :src="src"
      preload="metadata"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
      @error="onError"
    />

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
      <span class="audio-player__time" aria-hidden="true">{{ timeLabel }}</span>
    </div>

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
  </div>
</template>
