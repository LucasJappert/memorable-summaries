<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import type { BookMeta } from '../types/book'
import { bookHasAudio } from '../books/audio-catalog'
import { useHeroAudioFloat } from '../composables/useHeroAudioFloat'
import AudioPlayer from './AudioPlayer.vue'
import CoverArt from './CoverArt.vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'

const props = defineProps<{ meta: BookMeta; slug: string; done?: boolean; hideAudio?: boolean }>()

const emit = defineEmits<{
  toggleRead: []
}>()

const hasAudio = computed(() => bookHasAudio(props.slug))
const showAudio = computed(() => hasAudio.value && !props.hideAudio)
const heroRef = ref<HTMLElement | null>(null)
const audioPlayerRef = ref<InstanceType<typeof AudioPlayer> | null>(null)
const audioSpacerHeight = ref(0)
const { isFloating } = useHeroAudioFloat(heroRef)

let resizeObserver: ResizeObserver | null = null

function syncSpacerHeight() {
  const player = audioPlayerRef.value?.rootEl
  if (!player) return
  audioSpacerHeight.value = player.offsetHeight
}

watch(isFloating, (floating) => {
  if (floating) syncSpacerHeight()
})

watch(showAudio, async (value) => {
  if (!value) {
    resizeObserver?.disconnect()
    resizeObserver = null
    return
  }
  await nextTick()
  const player = audioPlayerRef.value?.rootEl
  if (!player || resizeObserver) return
  resizeObserver = new ResizeObserver(syncSpacerHeight)
  resizeObserver.observe(player)
  syncSpacerHeight()
}, { immediate: true })

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <header ref="heroRef" class="hero">
    <div class="hero__cover" aria-hidden="true">
      <CoverArt :slug="slug" :meta="meta" :done="done" :has-audio="hasAudio" />
    </div>

    <div class="hero__body">
      <h1 class="hero__title">
        <span v-if="meta.titleEs" class="hero__title-es">{{ meta.titleEs }}</span>
        <span
          class="hero__title-main"
          :class="{ 'hero__title-main--original': !!meta.titleEs }"
        >
          {{ meta.title }}
        </span>
      </h1>
      <p class="subtitle">{{ meta.subtitle }}</p>
      <p class="author">{{ meta.author }}</p>
      <p class="meta">
        <span v-for="item in meta.meta" :key="item">{{ item }}</span>
      </p>
      <div v-if="showAudio" class="hero__audio-wrap">
        <div
          v-if="isFloating"
          class="hero__audio-spacer"
          :style="{ height: `${audioSpacerHeight}px` }"
          aria-hidden="true"
        />
        <Teleport to="body" :disabled="!isFloating">
          <AudioPlayer
            ref="audioPlayerRef"
            :slug="slug"
            :floating="isFloating"
            class="hero__audio"
          />
        </Teleport>
      </div>
      <div class="hero__actions">
        <div class="hero__read-toggle">
          <EnvelopeIcon class="hero__read-toggle-icon" aria-hidden="true" />
          <span id="hero-read-label" class="hero__read-toggle-label">Leído</span>
          <button
            type="button"
            role="switch"
            class="hero__switch"
            :class="{ 'hero__switch--on': done }"
            :aria-checked="done"
            aria-labelledby="hero-read-label"
            :aria-label="done ? 'Marcar como no leído' : 'Marcar como leído'"
            @click="emit('toggleRead')"
          >
            <span class="hero__switch-knob" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style src="./HeroSection.css"></style>
