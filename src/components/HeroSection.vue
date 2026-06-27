<script setup lang="ts">
import type { BookMeta } from '../types/book'

defineProps<{ meta: BookMeta }>()
</script>

<template>
  <header class="hero">
    <h1>{{ meta.title }}</h1>
    <p class="subtitle">{{ meta.subtitle }}</p>
    <p class="author">{{ meta.author }}</p>
    <p class="meta">
      <span v-for="item in meta.meta" :key="item">{{ item }}</span>
    </p>
  </header>
</template>
