<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { BookMeta } from '../types/book'
import { bookHasAudio } from '../books/audio-catalog'
import { useAudioQueue } from '../composables/useAudioQueue'
import { atmosphereUrl } from '../utils/artImage'
import CoverArt from './CoverArt.vue'
import CheckIcon from './icons/CheckIcon.vue'

const props = withDefaults(
  defineProps<{
    meta: BookMeta
    slug: string
    done?: boolean
    hideAudio?: boolean
  }>(),
  {},
)

const emit = defineEmits<{
  toggleRead: []
}>()

const { currentSlug, isPlaying, play, resume, openQueueSheet } = useAudioQueue()

const hasAudio = computed(() => bookHasAudio(props.slug) && !props.hideAudio)

const atmosphereSrc = computed(() => atmosphereUrl(props.slug))
const atmosphereOk = ref(false)

watch(
  atmosphereSrc,
  () => {
    atmosphereOk.value = false
  },
)

function onListen() {
  if (!hasAudio.value) return
  if (currentSlug.value === props.slug) {
    if (!isPlaying.value) resume()
  } else {
    play(props.slug)
  }
  openQueueSheet()
}
</script>

<template>
  <header class="hero" :class="{ 'hero--atmosphere': atmosphereOk }">
    <img
      class="hero__atmosphere"
      :src="atmosphereSrc"
      alt=""
      aria-hidden="true"
      @load="atmosphereOk = true"
      @error="atmosphereOk = false"
    />

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
      <div class="hero__actions">
        <div class="hero__read-toggle">
          <CheckIcon class="hero__read-toggle-icon" aria-hidden="true" />
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
        <button
          v-if="hasAudio"
          type="button"
          class="hero__listen"
          aria-label="Escuchar narración"
          @click="onListen"
        >
          <svg class="hero__listen-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
          <span>Escuchar</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style src="./HeroSection.css"></style>
