<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppBottomBar from './components/AppBottomBar.vue'
import AppNavDrawer from './components/AppNavDrawer.vue'
import Starfield from './components/Starfield.vue'
import GlobalSearchSheet from './components/GlobalSearchSheet.vue'
import { appNavMenuOpen, closeAppNavMenu } from './composables/useAppNavMenu'
import {
  closeGlobalSearch,
  globalSearchOpen,
  toggleGlobalSearch,
} from './composables/useGlobalSearch'

const route = useRoute()

function onGlobalKeydown(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    toggleGlobalSearch()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeGlobalSearch()
    closeAppNavMenu()
  },
)

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <Starfield />
  <div class="app-shell">
    <router-view />
  </div>
  <AppBottomBar />
  <AppNavDrawer :open="appNavMenuOpen" />
  <GlobalSearchSheet v-model:open="globalSearchOpen" />
</template>
