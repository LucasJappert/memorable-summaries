<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { TocItem } from '../types/book'
import { useActiveSection } from '../composables/useActiveSection'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{ toc: TocItem[] }>()

const menuOpen = ref(false)

const sectionIds = computed(() => props.toc.map((item) => item.id))
const { activeId } = useActiveSection(sectionIds)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#" class="site-header__brand" aria-label="Memorable Summaries — inicio">
        <BrandLogo :size="32" />
        <span class="site-header__title">Memorable Summaries</span>
      </a>

      <button
        type="button"
        class="site-header__menu-btn"
        aria-label="Menú de capítulos"
        :aria-expanded="menuOpen"
        aria-controls="nav-drawer"
        @click="toggleMenu"
      >
        <span class="hamburger" :class="{ 'hamburger--open': menuOpen }">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  </header>

  <Teleport to="body">
    <Transition name="nav-drawer">
      <div v-if="menuOpen" class="nav-drawer" role="presentation">
        <button
          type="button"
          class="nav-drawer__backdrop"
          aria-label="Cerrar menú"
          @click="closeMenu"
        />

        <nav
          id="nav-drawer"
          class="nav-drawer__panel"
          aria-label="Capítulos"
        >
          <div class="nav-drawer__header">
            <h2 class="nav-drawer__title">Capítulos</h2>
            <button
              type="button"
              class="nav-drawer__close"
              aria-label="Cerrar menú"
              @click="closeMenu"
            >
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
              @click="closeMenu"
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
