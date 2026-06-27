<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { TocItem } from '../types/book'
import { useActiveSection } from '../composables/useActiveSection'
import { useScrollHeader } from '../composables/useScrollHeader'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{ toc?: TocItem[] }>()

const route = useRoute()
const isBookPage = computed(() => route.name === 'book')

const menuOpen = ref(false)
const isMobileNav = ref(true)
const hasToc = computed(() => (props.toc?.length ?? 0) > 0)

const sectionIds = computed(() => props.toc?.map((item) => item.id) ?? [])
const { activeId } = useActiveSection(sectionIds)

const { headerVisible } = useScrollHeader({
  enabled: () => isMobileNav.value && !menuOpen.value,
})

const headerHidden = computed(() => isMobileNav.value && !headerVisible.value && !menuOpen.value)

const mediaMobileNav = window.matchMedia('(max-width: 1023px)')

function updateNavMode() {
  isMobileNav.value = mediaMobileNav.matches
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) headerVisible.value = true
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

onMounted(() => {
  updateNavMode()
  window.addEventListener('keydown', onKeydown)
  mediaMobileNav.addEventListener('change', updateNavMode)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  mediaMobileNav.removeEventListener('change', updateNavMode)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header" :class="{ 'site-header--hidden': headerHidden }">
    <div class="site-header__inner">
      <div class="site-header__start">
        <RouterLink
          v-if="isBookPage"
          to="/"
          class="site-header__back"
          aria-label="Volver a la biblioteca"
        >
          <span class="site-header__back-icon" aria-hidden="true">←</span>
          <span class="site-header__back-label">Biblioteca</span>
        </RouterLink>

        <RouterLink
          v-else
          to="/"
          class="site-header__brand"
          aria-label="Memorable Summaries — biblioteca"
        >
          <BrandLogo :size="32" />
          <span class="site-header__title">Memorable Summaries</span>
        </RouterLink>
      </div>

      <button
        v-if="hasToc"
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
      <div v-if="menuOpen && hasToc" class="nav-drawer" role="presentation">
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
            <RouterLink
              to="/"
              class="nav-drawer__item nav-drawer__item--library"
              @click="closeMenu"
            >
              <span class="nav-drawer__num" aria-hidden="true">←</span>
              <span class="nav-drawer__label">Biblioteca</span>
            </RouterLink>

            <a
              v-for="item in toc!"
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
