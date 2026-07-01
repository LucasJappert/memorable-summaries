<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Starfield from './components/Starfield.vue'
import GlobalSearchSheet from './components/GlobalSearchSheet.vue'
import { closeGlobalSearch, globalSearchOpen, openGlobalSearch } from './composables/useGlobalSearch'

function onGlobalKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    openGlobalSearch()
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <Starfield />
  <router-view />
  <GlobalSearchSheet :open="globalSearchOpen" @close="closeGlobalSearch" />
</template>
