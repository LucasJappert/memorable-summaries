<script setup lang="ts">
import type { BookMeta } from '../types/book'

defineProps<{ meta: BookMeta }>()
</script>

<template>
  <header class="hero">
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
  </header>
</template>
