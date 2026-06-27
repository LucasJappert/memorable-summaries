<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
</script>

<template>
  <header class="site-header">
    <a href="#" class="site-header__brand" aria-label="Memorable Summaries — inicio">
      <BrandLogo :size="36" />
      <span class="site-header__title">Memorable Summaries</span>
    </a>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem 0;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text);
  transition: opacity 0.2s;
}

.site-header__brand:hover {
  opacity: 0.88;
}

.site-header__title {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: linear-gradient(135deg, var(--accent), var(--accent3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 600px) {
  .site-header {
    padding: 1rem 1rem 0;
  }

  .site-header__title {
    font-size: 0.82rem;
  }
}
</style>
