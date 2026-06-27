<script setup lang="ts">
import { computed } from 'vue'
import type { TocItem } from '../types/book'
import { useActiveSection } from '../composables/useActiveSection'

const props = defineProps<{ items: TocItem[] }>()

const sectionIds = computed(() => props.items.map((item) => item.id))
const { activeId } = useActiveSection(sectionIds)
</script>

<template>
  <nav class="toc" aria-label="Contenido">
    <h2 class="toc__heading">⸻ Contenido</h2>
    <div class="toc-grid">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="toc-item"
        :class="{ 'toc-item--active': activeId === item.id }"
      >
        <span class="toc-num">{{ item.num }}</span>
        <span class="toc-label">{{ item.label }}</span>
      </a>
    </div>
  </nav>
</template>
