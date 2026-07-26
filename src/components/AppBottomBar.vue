<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  closeGlobalSearch,
  globalSearchOpen,
  openGlobalSearch,
} from '../composables/useGlobalSearch'
import { appNavMenuOpen, closeAppNavMenu, toggleAppNavMenu } from '../composables/useAppNavMenu'
import { useAppBottomBarBook } from '../composables/useAppBottomBar'
import { useAudioQueue } from '../composables/useAudioQueue'
import {
  libraryCatalogQuery,
  libraryCatalogSearchOpen,
  toggleLibraryCatalogSearch,
  closeLibraryCatalogSearch,
} from '../composables/useLibraryCatalogSearch'
import { useScrollProgress } from '../composables/useScrollProgress'

const route = useRoute()
const { bookBarState } = useAppBottomBarBook()
const { queueLength, queueSheetOpen, toggleQueueSheet, isPlaying } = useAudioQueue()

const eqBars = Array.from({ length: 28 }, (_, i) => i)

const isBook = computed(() => route.name === 'book')
const isLibrary = computed(() => route.name === 'library')

const { progress } = useScrollProgress()

const book = computed(() => bookBarState.value)

const showShareToast = ref(false)
const shareUrl = ref('')

const searchActive = computed(() =>
  isLibrary.value ? libraryCatalogSearchOpen.value : globalSearchOpen.value,
)

const searchHasQuery = computed(
  () => isLibrary.value && libraryCatalogQuery.value.trim().length > 0,
)

function shareBook() {
  if (!book.value) return
  const base = window.location.origin + (import.meta.env.BASE_URL || '/')
  const url = `${base}libro/${book.value.slug}`
  const shareData = {
    title: book.value.title,
    text: `${book.value.title} — ${book.value.author}`,
    url,
  }
  // Try Web Share API first (works on HTTPS, may throw on HTTP non-secure)
  if (navigator.share) {
    navigator.share(shareData).catch(() => showShareToastWithUrl(url))
  } else {
    showShareToastWithUrl(url)
  }
}

function showShareToastWithUrl(url: string) {
  shareUrl.value = url
  showShareToast.value = true
}

function closeShareToast() {
  showShareToast.value = false
}

function onSearchClick() {
  closeAppNavMenu()
  if (isLibrary.value) {
    closeGlobalSearch()
    toggleLibraryCatalogSearch()
    return
  }
  closeLibraryCatalogSearch()
  if (globalSearchOpen.value) closeGlobalSearch()
  else openGlobalSearch()
}

function onNavAway() {
  closeGlobalSearch()
  closeLibraryCatalogSearch()
  closeAppNavMenu()
}

function onMenuClick() {
  closeGlobalSearch()
  closeLibraryCatalogSearch()
  toggleAppNavMenu()
}

function onQueueClick() {
  closeGlobalSearch()
  closeLibraryCatalogSearch()
  closeAppNavMenu()
  toggleQueueSheet()
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
      :class="{ 'app-bottom-bar__pill--playing': isPlaying }"
    >
      <div
        v-if="isPlaying"
        class="app-bottom-bar__eq"
        aria-hidden="true"
      >
        <span
          v-for="i in eqBars"
          :key="i"
          class="app-bottom-bar__eq-bar"
          :style="{ animationDelay: `${(i % 7) * 0.11}s` }"
        />
      </div>

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
          class="app-bottom-bar__btn app-bottom-bar__btn--queue"
          :class="{ 'app-bottom-bar__btn--active': queueSheetOpen }"
          :aria-pressed="queueSheetOpen"
          :aria-label="
            queueLength > 0
              ? `Cola de audio, ${queueLength} en cola`
              : 'Cola de audio'
          "
          @click="onQueueClick"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M4 6h11v2H4V6zm0 5h11v2H4v-2zm0 5h7v2H4v-2zm13-6.5v7l5-3.5-5-3.5z"
              fill="currentColor"
            />
          </svg>
          <span
            v-if="queueLength > 0"
            class="app-bottom-bar__badge"
            aria-hidden="true"
          >{{ queueLength > 9 ? '9+' : queueLength }}</span>
        </button>

        <button
          type="button"
          class="app-bottom-bar__btn"
          :class="{ 'app-bottom-bar__btn--active': searchActive }"
          :aria-pressed="searchActive"
          :aria-label="isLibrary ? 'Buscar libros' : 'Buscar en libros leídos'"
          @click="onSearchClick"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill="currentColor"
            />
          </svg>
          <span
            v-if="searchHasQuery"
            class="app-bottom-bar__badge"
            aria-hidden="true"
          >·</span>
        </button>

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
          class="app-bottom-bar__btn app-bottom-bar__btn--share"
          aria-label="Compartir libro"
          @click="onNavAway(); shareBook()"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          type="button"
          class="app-bottom-bar__btn app-bottom-bar__btn--queue"
          :class="{ 'app-bottom-bar__btn--active': queueSheetOpen }"
          :aria-pressed="queueSheetOpen"
          :aria-label="
            queueLength > 0
              ? `Cola de audio, ${queueLength} en cola`
              : 'Cola de audio'
          "
          @click="onQueueClick"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M4 6h11v2H4V6zm0 5h11v2H4v-2zm0 5h7v2H4v-2zm13-6.5v7l5-3.5-5-3.5z"
              fill="currentColor"
            />
          </svg>
          <span
            v-if="queueLength > 0"
            class="app-bottom-bar__badge"
            aria-hidden="true"
          >{{ queueLength > 9 ? '9+' : queueLength }}</span>
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

  <!-- Share-toast fallback for non-HTTPS contexts (mobile HTTP local network) -->
  <Teleport to="body">
    <div
      v-if="showShareToast"
      class="share-toast"
      role="dialog"
      aria-label="Enlace para compartir"
    >
      <div class="share-toast__body">
        <span class="share-toast__label">🔗 Enlace:</span>
        <a
          :href="shareUrl"
          class="share-toast__link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ shareUrl }}</a>
      </div>
      <button
        type="button"
        class="share-toast__close"
        aria-label="Cerrar"
        @click="closeShareToast"
      >Cerrar</button>
    </div>
  </Teleport>
</template>

<style src="./AppBottomBar.css"></style>
