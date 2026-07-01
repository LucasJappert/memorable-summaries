<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import NavDrawerAppSection from './NavDrawerAppSection.vue'
import { closeAppNavMenu } from '../composables/useAppNavMenu'

defineProps<{
  open: boolean
}>()

function close() {
  closeAppNavMenu()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="nav-drawer">
      <div v-if="open" class="nav-drawer" role="presentation">
        <button
          type="button"
          class="nav-drawer__backdrop"
          aria-label="Cerrar menú"
          @click="close"
        />

        <nav id="app-nav-drawer" class="nav-drawer__panel" aria-label="Menú de navegación">
          <div class="nav-drawer__header">
            <h2 class="nav-drawer__title">Menú</h2>
            <button type="button" class="nav-drawer__close" aria-label="Cerrar menú" @click="close">
              ✕
            </button>
          </div>

          <div class="nav-drawer__list">
            <NavDrawerAppSection @navigate="close" />
          </div>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<style src="./BookNavDrawer.css"></style>
