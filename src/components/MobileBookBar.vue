<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useScrollProgress } from '../composables/useScrollProgress'
import AudioIcon from './icons/AudioIcon.vue'

defineProps<{
  menuOpen?: boolean
  audioOpen?: boolean
  hasAudio?: boolean
}>()

const emit = defineEmits<{
  scrollTop: []
  toggleMenu: []
  toggleAudio: []
}>()

const { progress } = useScrollProgress()
</script>

<template>
  <nav class="mobile-book-bar" aria-label="Navegación del libro">
    <div class="mobile-book-bar__pill">
      <div class="mobile-book-bar__progress" aria-hidden="true">
        <div class="mobile-book-bar__progress-fill" :style="{ width: `${progress}%` }" />
      </div>

      <RouterLink to="/" class="mobile-book-bar__btn" aria-label="Ir a la biblioteca">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
        </svg>
      </RouterLink>

      <button
        type="button"
        class="mobile-book-bar__btn"
        aria-label="Ir a la portada"
        @click="emit('scrollTop')"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z" fill="currentColor" />
        </svg>
      </button>

      <button
        type="button"
        class="mobile-book-bar__btn mobile-book-bar__btn--audio"
        :class="{
          'mobile-book-bar__btn--active': hasAudio && audioOpen,
          'mobile-book-bar__btn--no-audio': !hasAudio,
        }"
        :disabled="!hasAudio"
        :aria-pressed="hasAudio ? audioOpen : undefined"
        :aria-label="
          hasAudio
            ? audioOpen
              ? 'Ocultar reproductor'
              : 'Mostrar reproductor'
            : 'Audio no disponible para este libro'
        "
        @click="hasAudio && emit('toggleAudio')"
      >
        <AudioIcon />
      </button>

      <button
        type="button"
        class="mobile-book-bar__btn"
        :class="{ 'mobile-book-bar__btn--active': menuOpen }"
        :aria-pressed="menuOpen"
        aria-label="Menú de capítulos"
        aria-controls="nav-drawer"
        @click="emit('toggleMenu')"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
