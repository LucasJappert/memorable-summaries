<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { getBookBySlug } from '../books/catalog'
import { useAudioQueue } from '../composables/useAudioQueue'
import AudioPlayer from './AudioPlayer.vue'
import AudioQueueSheet from './AudioQueueSheet.vue'

const {
  currentSlug,
  playerVisible,
  queueSheetOpen,
  autoplayPending,
  pausePending,
  resumePending,
  seekZeroPending,
  playerExpanded,
  isPlaying,
  hidePlayer,
  openQueueSheet,
  closeQueueSheet,
  onTrackEnded,
  consumeAutoplay,
  consumePause,
  consumeResume,
  consumeSeekZero,
  reportPlaying,
  reportProgress,
  playNext,
  playPrevSmart,
  pause,
  resume,
  expandPlayer,
  collapsePlayer,
} = useAudioQueue()

const shouldAutoplay = ref(false)
const wantPause = ref(false)
const wantResume = ref(false)
const wantSeekZero = ref(false)

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
  () => {
    if (autoplayPending.value) {
      shouldAutoplay.value = consumeAutoplay()
    }
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

function onKeydown(event: KeyboardEvent) {
  if (!playerVisible.value || !currentSlug.value) return
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
    if (playerExpanded.value) {
      event.preventDefault()
      collapsePlayer()
      return
    }
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
    <AudioPlayer
      v-if="currentSlug"
      v-show="playerVisible && !queueSheetOpen"
      :slug="currentSlug"
      :track-title="trackTitle"
      :track-subtitle="trackSubtitle"
      :autoplay="shouldAutoplay"
      :pause-request="wantPause"
      :resume-request="wantResume"
      :seek-zero-request="wantSeekZero"
      bar
      :expanded="playerExpanded"
      show-transport
      class="global-audio-dock"
      @close="onClose"
      @ended="onTrackEnded"
      @play="onPlay"
      @pause="onPause"
      @open-queue="openQueueSheet"
      @prev="playPrevSmart"
      @next="playNext"
      @expand="expandPlayer"
      @collapse="collapsePlayer"
      @progress="onProgress"
      @pause-consumed="onPauseConsumed"
      @resume-consumed="onResumeConsumed"
      @seek-zero-consumed="onSeekZeroConsumed"
    />
  </Teleport>
  <AudioQueueSheet :open="queueSheetOpen" @close="closeQueueSheet" />
</template>
