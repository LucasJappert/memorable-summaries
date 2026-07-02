<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  id: string
  icon: string
  title: string
  hint?: string
}>()

const detailsEl = ref<HTMLDetailsElement | null>(null)

function expandFromHash() {
  if (window.location.hash.slice(1) === props.id && detailsEl.value) {
    detailsEl.value.open = true
  }
}

onMounted(() => {
  expandFromHash()
  window.addEventListener('hashchange', expandFromHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', expandFromHash)
})
</script>

<template>
  <details ref="detailsEl" :id="id" class="section section--collapsible">
    <summary class="section-header section-header--collapsible">
      <span class="section-num">{{ icon }}</span>
      <h2>{{ title }}</h2>
      <span v-if="hint" class="section-collapsible-hint">{{ hint }}</span>
      <span class="section-chevron" aria-hidden="true">▸</span>
    </summary>
    <div class="section-collapsible-body">
      <slot />
    </div>
  </details>
</template>
