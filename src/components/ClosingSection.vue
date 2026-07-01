<script setup lang="ts">
import { computed } from 'vue'
import type { BookSummary } from '../types/book'

const props = defineProps<{
  closing: BookSummary['closing']
}>()

function normalize(text: string): string {
  return text.trim().replace(/\.$/, '')
}

const bodyLines = computed(() => {
  const highlight = normalize(props.closing.highlight)
  return props.closing.lines.filter((line) => normalize(line) !== highlight)
})

const beforeHighlight = computed(() => bodyLines.value.slice(0, 2))
const afterHighlight = computed(() => bodyLines.value.slice(2))
</script>

<template>
  <section id="cierre" class="section section--closing">
    <h3 class="closing-title">{{ closing.title }}</h3>
    <div class="closing-text">
      <p v-for="(line, index) in beforeHighlight" :key="`before-${index}`" class="closing-line">
        {{ line }}
      </p>
      <p class="closing-line closing-line--highlight">
        <strong>{{ closing.highlight }}</strong>.
      </p>
      <p v-for="(line, index) in afterHighlight" :key="`after-${index}`" class="closing-line">
        {{ line }}<span v-if="index === afterHighlight.length - 1">.</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.section--closing {
  border-color: var(--accent3);
  padding-top: 0.85rem;
}

.closing-title {
  color: var(--accent3);
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

.closing-text {
  width: 100%;
}

.closing-line {
  width: 100%;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
}

.closing-line--highlight {
  margin-bottom: 0.35rem;
}

.closing-line--highlight strong {
  color: var(--accent3);
  font-weight: 700;
}
</style>
