<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  closeGlobalSearch,
  globalSearchOpen,
  openGlobalSearch,
} from '../composables/useGlobalSearch'
import { appNavMenuOpen, closeAppNavMenu, toggleAppNavMenu } from '../composables/useAppNavMenu'
import { useAppBottomBarBook } from '../composables/useAppBottomBar'
import { useNextInRoute, isContinueAction } from '../composables/useNextInRoute'
import { useScrollProgress } from '../composables/useScrollProgress'
import { readReadingPosition, hasMeaningfulScroll } from '../reading/storage'
import { readingRevision } from '../reading/revision'
import AudioIcon from './icons/AudioIcon.vue'

const route = useRoute()
const { bookBarState } = useAppBottomBarBook()
const { continueBook, continueSource, continueStatus } = useNextInRoute()

const isBook = computed(() => route.name === 'book')
const isLibrary = computed(() => route.name === 'library')

const { progress } = useScrollProgress()

const book = computed(() => bookBarState.value)

const continueLink = computed(() => {
  readingRevision.value
  const entry = continueBook.value
  if (!entry) return { name: 'flashcards' as const }

  const base = `/libro/${entry.slug}`
  const reading = readReadingPosition(entry.slug)

  if (
    continueStatus.value === 'reading' &&
    reading?.sectionId &&
    hasMeaningfulScroll(reading.scrollY)
  ) {
    return `${base}#${reading.sectionId}`
  }

  return base
})

const continueActive = computed(() => {
  if (route.name !== 'book' || !continueBook.value) return false
  return route.params.slug === continueBook.value.slug
})

const continueLabel = computed(() => {
  if (!continueBook.value) return 'Repasar tarjetas'
  return isContinueAction(continueSource.value) ? 'Continuar lectura' : 'Siguiente libro'
})

function isActive(name: string): boolean {
  return route.name === name
}

function onSearchClick() {
  if (globalSearchOpen.value) closeGlobalSearch()
  else openGlobalSearch()
}

function onNavAway() {
  closeGlobalSearch()
  closeAppNavMenu()
}

function onMenuClick() {
  closeGlobalSearch()
  toggleAppNavMenu()
}
</script>

<template>
  <nav
    v-if="!isBook || book"
    class="app-bottom-bar"
    :class="{
      'app-bottom-bar--book': isBook,
      'app-bottom-bar--library': !isBook,
    }"
    :aria-label="isBook ? 'Navegación del libro' : 'Navegación principal'"
  >
    <div
      class="app-bottom-bar__pill"
    >
      <div
        v-if="isBook"
        class="app-bottom-bar__progress"
        aria-hidden="true"
      >
        <div
          class="app-bottom-bar__progress-fill"
          :style="{ width: `${progress}%` }"
        />
      </div>

      <!-- Biblioteca y vistas secundarias -->
      <template v-if="!isBook">
        <RouterLink
          to="/"
          class="app-bottom-bar__btn"
          :class="{ 'app-bottom-bar__btn--active': isLibrary }"
          :aria-current="isLibrary ? 'page' : undefined"
          aria-label="Biblioteca"
          @click="onNavAway"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
          </svg>
        </RouterLink>

        <button
          type="button"
          class="app-bottom-bar__btn"
          :class="{ 'app-bottom-bar__btn--active': globalSearchOpen }"
          :aria-pressed="globalSearchOpen"
          aria-label="Buscar en libros leídos"
          @click="onSearchClick"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="currentColor"
            />
          </svg>
        </button>

        <RouterLink
          :to="continueLink"
          class="app-bottom-bar__btn app-bottom-bar__btn--continue"
          :class="{ 'app-bottom-bar__btn--active': continueActive || isActive('flashcards') }"
          :aria-label="continueLabel"
          @click="onNavAway"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
        </RouterLink>

        <button
          type="button"
          class="app-bottom-bar__btn app-bottom-bar__btn--menu"
          :class="{ 'app-bottom-bar__btn--active': appNavMenuOpen }"
          :aria-pressed="appNavMenuOpen"
          aria-label="Menú de navegación"
          aria-controls="app-nav-drawer"
          @click="onMenuClick"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </template>

      <!-- Libro -->
      <template v-else-if="book">
        <RouterLink to="/" class="app-bottom-bar__btn" aria-label="Ir a la biblioteca" @click="onNavAway">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
          </svg>
        </RouterLink>

        <button
          type="button"
          class="app-bottom-bar__btn"
          aria-label="Ir a la portada"
          @click="onNavAway(); book.handlers.scrollToTop()"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          type="button"
          class="app-bottom-bar__btn app-bottom-bar__btn--audio"
          :class="{
            'app-bottom-bar__btn--active': book.hasAudio && book.audioOpen,
            'app-bottom-bar__btn--no-audio': !book.hasAudio,
          }"
          :disabled="!book.hasAudio"
          :aria-pressed="book.hasAudio ? book.audioOpen : undefined"
          :aria-label="
            book.hasAudio
              ? book.audioOpen
                ? 'Ocultar reproductor'
                : 'Mostrar reproductor'
              : 'Audio no disponible para este libro'
          "
          @click="onNavAway(); book.hasAudio && book.handlers.toggleAudio()"
        >
          <AudioIcon />
        </button>

        <button
          type="button"
          class="app-bottom-bar__btn app-bottom-bar__btn--menu"
          :class="{ 'app-bottom-bar__btn--active': book.menuOpen }"
          :aria-pressed="book.menuOpen"
          aria-label="Menú"
          aria-controls="nav-drawer"
          @click="onNavAway(); book.handlers.toggleMenu()"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </template>
    </div>
  </nav>
</template>

<style src="./AppBottomBar.css"></style>
