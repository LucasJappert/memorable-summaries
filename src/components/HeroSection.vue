<script setup lang="ts">
import type { BookMeta } from '../types/book'
import CoverArt from './CoverArt.vue'

defineProps<{ meta: BookMeta; slug: string; done?: boolean }>()
</script>

<template>
  <header class="hero">
    <div class="hero__cover" aria-hidden="true">
      <CoverArt :slug="slug" :meta="meta" :done="done" />
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
      <a href="#contenido" class="hero__cta">Ver capítulos ↓</a>
    </div>
  </header>
</template>
