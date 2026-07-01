<script setup lang="ts">
import type { BookSummary } from '../types/book'

defineProps<{
  closing: BookSummary['closing']
}>()
</script>

<template>
  <section id="cierre" class="section section--closing">
    <h3 class="closing-title">{{ closing.title }}</h3>
    <p class="closing-text">
      {{ closing.lines[0] }}<br />
      {{ closing.lines[1] }}<br />
      <strong class="closing-highlight">{{ closing.highlight }}</strong>.<br /><br />
      {{ closing.lines[2] }}<br />
      {{ closing.lines[3] }}<br />
      {{ closing.lines[4] }}<br />
      {{ closing.lines[5] }}.
    </p>
  </section>
</template>

<style scoped>
.section--closing {
  text-align: center;
  border-color: var(--accent3);
}

.closing-title {
  color: var(--accent3);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.closing-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.closing-highlight {
  color: var(--accent3);
}
</style>
