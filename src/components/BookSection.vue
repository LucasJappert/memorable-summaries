<script setup lang="ts">
import type { Section } from '../types/book'
import ContentBlocks from './ContentBlocks.vue'

defineProps<{ section: Section }>()
</script>

<template>
  <section :id="section.id" class="section" :class="{ 'section--closing': section.variant === 'closing' }">
    <div class="section-header">
      <span class="section-num">{{ section.num }}</span>
      <h2>{{ section.title }}</h2>
    </div>
    <ContentBlocks :blocks="section.blocks" />
  </section>
</template>
