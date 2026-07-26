<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { getBookBySlug } from '../books/catalog'
import { useAudioQueue } from '../composables/useAudioQueue'
import AudioPlayer from './AudioPlayer.vue'
import AudioQueueSheet from './AudioQueueSheet.vue'

const {
  currentSlug,
  queueSheetOpen,
  autoplayPending,
  pausePending,
  resumePending,
  seekZeroPending,
  seekToPending,
  seekToToken,
  isPlaying,
  hidePlayer,
  openQueueSheet,
  closeQueueSheet,
  takeNextAfterEnded,
  skipToNext,
  skipToPrev,
  consumeAutoplay,
  requestAutoplay,
  consumePause,
  consumeResume,
  consumeSeekZero,
  consumeSeekTo,
  reportPlaying,
  reportProgress,
  playNext,
  playPrevSmart,
  pause,
  resume,
} = useAudioQueue()

const shouldAutoplay = ref(false)
const wantPause = ref(false)
const wantResume = ref(false)
const wantSeekZero = ref(false)
const wantSeekTo = ref<number | null>(null)
const wantSeekToken = ref(0)

const trackTitle = computed(() => {
  const slug = currentSlug.value
  if (!slug) return ''
  const book = getBookBySlug(slug)
  if (!book) return slug
  return book.meta.titleEs?.trim() || book.meta.title
})

const trackSubtitle = computed(() => {
  const slug = currentSlug.value
  if (!slug) return ''
  return getBookBySlug(slug)?.meta.author ?? ''
})

watch(
  [currentSlug, autoplayPending],
  async () => {
    if (!autoplayPending.value) return
    // Forzar re-trigger del watch de autoplay en AudioPlayer (true→false→true).
    shouldAutoplay.value = false
    const want = consumeAutoplay()
    await nextTick()
    shouldAutoplay.value = want
  },
  { immediate: true },
)

watch(pausePending, (v) => {
  if (v) wantPause.value = true
})

watch(resumePending, (v) => {
  if (v) wantResume.value = true
})

watch(seekZeroPending, (v) => {
  if (v) wantSeekZero.value = true
})

watch([seekToPending, seekToToken], ([seconds, token]) => {
  if (seconds === null) return
  wantSeekTo.value = seconds
  wantSeekToken.value = token
})

function onPlay() {
  shouldAutoplay.value = false
  reportPlaying(true)
}

function onPause() {
  reportPlaying(false)
}

function onClose() {
  shouldAutoplay.value = false
  hidePlayer()
}

function onProgress(payload: { currentTime: number; duration: number }) {
  reportProgress(payload.currentTime, payload.duration)
}

function onPauseConsumed() {
  wantPause.value = false
  consumePause()
}

function onResumeConsumed() {
  wantResume.value = false
  consumeResume()
}

function onSeekZeroConsumed() {
  wantSeekZero.value = false
  consumeSeekZero()
}

function onSeekToConsumed() {
  wantSeekTo.value = null
  consumeSeekTo()
}

function onKeydown(event: KeyboardEvent) {
  if (!currentSlug.value) return
  const target = event.target
  if (
    target instanceof HTMLElement &&
    (target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable)
  ) {
    return
  }

  if (event.key === 'Escape') {
    if (queueSheetOpen.value) {
      event.preventDefault()
      closeQueueSheet()
    }
    return
  }

  if (event.code === 'Space' && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault()
    if (isPlaying.value) pause()
    else resume()
    return
  }

  if (event.key === 'ArrowRight' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    playNext()
    return
  }
  if (event.key === 'ArrowLeft' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    playPrevSmart()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <!-- Motor de audio oculto: la UI vive en AudioQueueSheet -->
    <AudioPlayer
      v-if="currentSlug"
      class="global-audio-dock global-audio-dock--engine"
      :slug="currentSlug"
      :track-title="trackTitle"
      :track-subtitle="trackSubtitle"
      :autoplay="shouldAutoplay"
      :pause-request="wantPause"
      :resume-request="wantResume"
      :seek-zero-request="wantSeekZero"
      :seek-to-request="wantSeekTo"
      :seek-to-token="wantSeekToken"
      :take-next-after-ended="takeNextAfterEnded"
      :skip-to-next="skipToNext"
      :skip-to-prev="skipToPrev"
      bar
      :expanded="false"
      show-transport
      @close="onClose"
      @ended="reportPlaying(false)"
      @continuation-blocked="requestAutoplay"
      @play="onPlay"
      @pause="onPause"
      @open-queue="openQueueSheet"
      @prev="playPrevSmart"
      @next="playNext"
      @progress="onProgress"
      @pause-consumed="onPauseConsumed"
      @resume-consumed="onResumeConsumed"
      @seek-zero-consumed="onSeekZeroConsumed"
      @seek-to-consumed="onSeekToConsumed"
    />
  </Teleport>
  <AudioQueueSheet :open="queueSheetOpen" @close="closeQueueSheet" />
</template>

<style scoped>
.global-audio-dock--engine {
  position: fixed !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
  z-index: -1 !important;
}
</style>
