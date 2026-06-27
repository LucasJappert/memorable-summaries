<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TocItem } from '../types/book'
import { useActiveSection } from '../composables/useActiveSection'

const props = defineProps<{ items: TocItem[] }>()

const expanded = ref(false)
const previewCount = 4

const sectionIds = computed(() => props.items.map((item) => item.id))
const { activeId } = useActiveSection(sectionIds)

const hiddenCount = computed(() => Math.max(0, props.items.length - previewCount))
</script>

<template>
  <nav
    id="contenido"
    class="toc"
    :class="{ 'toc--expanded': expanded }"
    aria-label="Contenido"
  >
    <h2 class="toc__heading">⸻ Contenido</h2>
    <div class="toc-grid">
      <a
        v-for="(item, index) in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="toc-item"
        :class="{
          'toc-item--active': activeId === item.id,
          'toc-item--collapsed': !expanded && index >= previewCount,
        }"
      >
        <span class="toc-num">{{ item.num }}</span>
        <span class="toc-label">{{ item.label }}</span>
        <span class="toc-chevron" aria-hidden="true">›</span>
      </a>
    </div>
    <button
      v-if="hiddenCount > 0"
      type="button"
      class="toc-expand"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      {{ expanded ? 'Ver menos' : `Ver todos (${items.length})` }}
    </button>
  </nav>
</template>
