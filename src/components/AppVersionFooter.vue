<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { APP_VERSION } from '../version'
</script>

<template>
  <footer class="app-version-footer">
    <RouterLink to="/changelog" class="app-version-footer__link">
      <span class="app-version-footer__chip">v{{ APP_VERSION }}</span>
      <span class="app-version-footer__label">Ver cambios</span>
    </RouterLink>
  </footer>
</template>

<style src="./AppVersionFooter.css"></style>
