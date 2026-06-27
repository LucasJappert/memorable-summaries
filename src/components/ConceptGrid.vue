<script setup lang="ts">
import type { ConceptItem } from '../types/book'

defineProps<{ items: ConceptItem[] }>()
</script>

<template>
  <div class="concept-grid">
    <article v-for="item in items" :key="item.title" class="concept-card">
      <h4>{{ item.icon ? `${item.icon} ` : '' }}{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </article>
  </div>
</template>
