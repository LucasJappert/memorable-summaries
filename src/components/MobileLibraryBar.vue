<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
</script>

<template>
  <nav class="mobile-library-bar" aria-label="Memorable Summaries">
    <div class="mobile-library-bar__pill">
      <BrandLogo :size="28" />
      <span class="mobile-library-bar__title">Memorable Summaries</span>
    </div>
  </nav>
</template>
