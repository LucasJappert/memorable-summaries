<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { TocItem } from '../types/book'
import { useScrollHeader } from '../composables/useScrollHeader'
import BrandLogo from './BrandLogo.vue'

const props = defineProps<{
  toc?: TocItem[]
  bookTitle?: string
}>()

const emit = defineEmits<{
  toggleMenu: []
}>()

const route = useRoute()
const isBookPage = computed(() => route.name === 'book')

const isMobileNav = ref(true)
const hasToc = computed(() => (props.toc?.length ?? 0) > 0)

const { headerVisible } = useScrollHeader({
  enabled: () => isMobileNav.value && !isBookPage.value,
})

const headerHidden = computed(() => isMobileNav.value && !headerVisible.value && !isBookPage.value)

const mediaMobileNav = window.matchMedia('(max-width: 1023px)')

function updateNavMode() {
  isMobileNav.value = mediaMobileNav.matches
}

onMounted(() => {
  updateNavMode()
  mediaMobileNav.addEventListener('change', updateNavMode)
})

onUnmounted(() => {
  mediaMobileNav.removeEventListener('change', updateNavMode)
})
</script>

<template>
  <header
    class="site-header"
    :class="{
      'site-header--hidden': headerHidden,
      'site-header--book': isBookPage,
    }"
  >
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

      <p
        v-if="isBookPage && bookTitle"
        class="site-header__book-title"
        :title="bookTitle"
      >
        {{ bookTitle }}
      </p>

      <button
        v-if="hasToc && isBookPage"
        type="button"
        class="site-header__menu-btn"
        aria-label="Menú de capítulos"
        aria-controls="nav-drawer"
        @click="emit('toggleMenu')"
      >
        <span class="hamburger">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  </header>
</template>

<style src="./SiteHeader.css"></style>
