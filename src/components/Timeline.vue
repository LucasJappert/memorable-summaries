<script setup lang="ts">
import type { TimelineItem } from '../types/book'

defineProps<{ items: TimelineItem[] }>()
</script>

<template>
  <div class="timeline">
    <div v-for="item in items" :key="item.year" class="timeline-item">
      <span class="year" v-html="item.year" />
      <p v-html="item.text" />
    </div>
  </div>
</template>
