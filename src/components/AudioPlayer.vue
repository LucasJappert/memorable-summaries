<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { audioUrl, publicAssetUrl } from '../utils/audioUrl'

const props = withDefaults(
  defineProps<{
    slug: string
    audioSrc?: string
    /** Si es false, no se muestra el reproductor */
    available?: boolean
  }>(),
  { available: undefined },
)

const src = computed(() =>
  props.audioSrc ? publicAssetUrl(props.audioSrc) : audioUrl(props.slug),
)

const audioEl = ref<HTMLAudioElement | null>(null)
const progressEl = ref<HTMLDivElement | null>(null)
const visible = ref(props.available !== false)
const playing = ref(false)
const duration = ref(0)
const currentTime = ref(0)

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

function togglePlay() {
  const audio = audioEl.value
  if (!audio) return
  if (playing.value) {
    audio.pause()
  } else {
    void audio.play()
  }
}

function onPlay() {
  playing.value = true
}

function onPause() {
  playing.value = false
}

function onTimeUpdate() {
  if (audioEl.value) currentTime.value = audioEl.value.currentTime
}

function onLoadedMetadata() {
  if (audioEl.value) duration.value = audioEl.value.duration
}

function onEnded() {
  playing.value = false
  currentTime.value = 0
  if (audioEl.value) audioEl.value.currentTime = 0
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
}

function onProgressClick(event: MouseEvent) {
  const bar = progressEl.value
  if (!bar) return
  const rect = bar.getBoundingClientRect()
  seekTo((event.clientX - rect.left) / rect.width)
}

function onProgressKeydown(event: KeyboardEvent) {
  const step = event.key === 'ArrowRight' ? 5 : event.key === 'ArrowLeft' ? -5 : 0
  if (!step) return
  event.preventDefault()
  const audio = audioEl.value
  if (!audio) return
  const next = Math.min(Math.max(audio.currentTime + step, 0), duration.value || 0)
  audio.currentTime = next
  currentTime.value = next
}

onBeforeUnmount(() => {
  audioEl.value?.pause()
})
</script>

<template>
  <div v-if="visible" class="audio-player" role="group" aria-label="Reproductor de audio del resumen">
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
      class="audio-player__btn"
      :aria-label="playing ? 'Pausar narración' : 'Reproducir narración'"
      :aria-pressed="playing"
      @click="togglePlay"
    >
      <svg
        v-if="!playing"
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

    <div class="audio-player__track">
      <div
        ref="progressEl"
        class="audio-player__progress"
        role="slider"
        tabindex="0"
        :aria-valuemin="0"
        :aria-valuemax="Math.floor(duration)"
        :aria-valuenow="Math.floor(currentTime)"
        :aria-valuetext="timeLabel"
        aria-label="Progreso de la narración"
        @click="onProgressClick"
        @keydown="onProgressKeydown"
      >
        <div class="audio-player__progress-fill" :style="{ width: `${progress}%` }" />
        <div class="audio-player__progress-thumb" :style="{ left: `${progress}%` }" />
      </div>
      <span class="audio-player__time" aria-hidden="true">{{ timeLabel }}</span>
    </div>
  </div>
</template>
