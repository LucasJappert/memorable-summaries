<script setup lang="ts">
import { computed } from 'vue'
import type { BookMeta } from '../types/book'
import { bookHasAudio } from '../books/audio-catalog'
import AudioPlayer from './AudioPlayer.vue'
import CoverArt from './CoverArt.vue'

const props = defineProps<{ meta: BookMeta; slug: string; done?: boolean }>()

const hasAudio = computed(() => bookHasAudio(props.slug))
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
      <AudioPlayer v-if="hasAudio" :slug="slug" class="hero__audio" />
      <a href="#contenido" class="hero__cta">Ver capítulos ↓</a>
    </div>
  </header>
</template>
