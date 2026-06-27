<script setup lang="ts">
import type { FigureItem } from '../types/book'

defineProps<{ items: FigureItem[] }>()
</script>

<template>
  <div class="figures">
    <article v-for="figure in items" :key="figure.name" class="figure-card">
      <div class="name">{{ figure.name }}</div>
      <div class="role">{{ figure.role }}</div>
    </article>
  </div>
</template>
