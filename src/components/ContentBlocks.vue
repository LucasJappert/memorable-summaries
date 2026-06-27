<script setup lang="ts">
import type { ContentBlock } from '../types/book'

defineProps<{ blocks: ContentBlock[] }>()
</script>

<template>
  <template v-for="(block, index) in blocks" :key="index">
    <p v-if="block.type === 'paragraph'" v-html="block.html" />

    <blockquote v-else-if="block.type === 'quote'" class="quote">
      <span v-html="block.text" />
      <span v-if="block.attribution" class="attribution">— {{ block.attribution }}</span>
    </blockquote>

    <div v-else-if="block.type === 'concept-grid'" class="concept-grid">
      <article v-for="item in block.items" :key="item.title" class="concept-card">
        <h4>{{ item.icon ? `${item.icon} ` : '' }}{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </article>
    </div>

    <div v-else-if="block.type === 'big-numbers'" class="big-numbers">
      <div v-for="item in block.items" :key="item.label" class="big-num">
        <span class="num">{{ item.value }}</span>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>

    <div v-else-if="block.type === 'timeline'" class="timeline">
      <div v-for="item in block.items" :key="item.year" class="timeline-item">
        <span class="year" v-html="item.year" />
        <p v-html="item.text" />
      </div>
    </div>

    <ul v-else-if="block.type === 'list'" class="content-list">
      <li v-for="item in block.items" :key="item" v-html="item" />
    </ul>

    <div v-else-if="block.type === 'divider'" class="divider" />
  </template>
</template>

<style scoped>
.content-list {
  color: var(--text2);
  font-size: 0.9rem;
  margin: 0.8rem 0 0.8rem 1.5rem;
  line-height: 1.8;
}
</style>
