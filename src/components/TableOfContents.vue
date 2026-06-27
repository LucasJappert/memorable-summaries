<script setup lang="ts">
import type { TocItem } from '../types/book'

defineProps<{ items: TocItem[] }>()
</script>

<template>
  <nav class="toc" aria-label="Contenido">
    <h2>⸻ Contenido</h2>
    <div class="toc-grid">
      <a v-for="item in items" :key="item.id" :href="`#${item.id}`" class="toc-item">
        <span class="toc-num">{{ item.num }}</span>
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>
