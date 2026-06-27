<script setup lang="ts">
import type { BookMeta } from '../types/book'

defineProps<{ meta: BookMeta }>()
</script>

<template>
  <header class="hero">
    <h1 class="hero__title">
      <span class="hero__title-main">{{ meta.title }}</span>
      <span v-if="meta.titleEs" class="hero__title-es">{{ meta.titleEs }}</span>
    </h1>
    <p class="subtitle">{{ meta.subtitle }}</p>
    <p class="author">{{ meta.author }}</p>
    <p class="meta">
      <span v-for="item in meta.meta" :key="item">{{ item }}</span>
    </p>
  </header>
</template>
