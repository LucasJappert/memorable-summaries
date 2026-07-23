<script setup lang="ts">
import { computed } from 'vue'
import type { BookMeta } from '../types/book'
import { bookHasAudio } from '../books/audio-catalog'
import CoverArt from './CoverArt.vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'

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

const hasAudio = computed(() => bookHasAudio(props.slug) && !props.hideAudio)
</script>

<template>
  <header class="hero">
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
