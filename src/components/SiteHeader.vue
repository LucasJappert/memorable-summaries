<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#" class="site-header__brand" aria-label="Memorable Summaries — inicio">
        <BrandLogo :size="36" />
        <span class="site-header__title">Memorable Summaries</span>
      </a>
    </div>
  </header>
</template>
