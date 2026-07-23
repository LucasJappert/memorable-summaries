<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppBottomBar from './components/AppBottomBar.vue'
import AppNavDrawer from './components/AppNavDrawer.vue'
import GlobalAudioDock from './components/GlobalAudioDock.vue'
import Starfield from './components/Starfield.vue'
import GlobalSearchSheet from './components/GlobalSearchSheet.vue'
import { appNavMenuOpen, closeAppNavMenu } from './composables/useAppNavMenu'
import {
  closeGlobalSearch,
  globalSearchOpen,
  toggleGlobalSearch,
} from './composables/useGlobalSearch'
import { closeLibraryCatalogSearch } from './composables/useLibraryCatalogSearch'
import { useAudioQueue } from './composables/useAudioQueue'

const route = useRoute()
const { playerVisible, playerExpanded, queueSheetOpen } = useAudioQueue()

const shellClass = computed(() => ({
  'app-shell--audio-dock':
    playerVisible.value && !playerExpanded.value && !queueSheetOpen.value,
}))

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
    closeLibraryCatalogSearch()
  },
)

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <Starfield />
  <div class="app-shell" :class="shellClass">
    <router-view />
  </div>
  <AppBottomBar />
  <AppNavDrawer :open="appNavMenuOpen" />
  <GlobalSearchSheet v-model:open="globalSearchOpen" />
  <GlobalAudioDock />
</template>
