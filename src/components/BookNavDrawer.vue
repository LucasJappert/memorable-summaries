<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { TocItem } from '../types/book'

defineProps<{
  toc: TocItem[]
  activeId?: string
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

function close() {
  emit('close')
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

        <nav id="nav-drawer" class="nav-drawer__panel" aria-label="Capítulos">
          <div class="nav-drawer__header">
            <h2 class="nav-drawer__title">Capítulos</h2>
            <button type="button" class="nav-drawer__close" aria-label="Cerrar menú" @click="close">
              ✕
            </button>
          </div>

          <div class="nav-drawer__list">
            <a
              v-for="item in toc"
              :key="item.id"
              :href="`#${item.id}`"
              class="nav-drawer__item"
              :class="{ 'nav-drawer__item--active': activeId === item.id }"
              @click="close"
            >
              <span class="nav-drawer__num">{{ item.num }}</span>
              <span class="nav-drawer__label">{{ item.label }}</span>
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>
