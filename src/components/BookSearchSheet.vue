<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { TocItem } from '../types/book'

const props = defineProps<{
  toc: TocItem[]
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const normalizedQuery = computed(() =>
  query.value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, ''),
)

const results = computed(() => {
  const q = normalizedQuery.value
  if (!q) return props.toc
  return props.toc.filter((item) => {
    const label = item.label
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{M}/gu, '')
    return label.includes(q) || item.num.toLowerCase().includes(q)
  })
})

function close() {
  emit('close')
}

function onSelect(id: string) {
  close()
  requestAnimationFrame(() => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  })
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      query.value = ''
      requestAnimationFrame(() => inputRef.value?.focus())
    }
  },
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="book-search">
      <div
        v-if="open"
        class="book-search-sheet"
        data-open="true"
        role="presentation"
      >
        <button
          type="button"
          class="book-search-sheet__backdrop"
          aria-label="Cerrar búsqueda"
          @click="close"
        />

        <div class="book-search-sheet__panel" role="dialog" aria-label="Buscar en el libro">
          <div class="book-search-sheet__header">
            <label class="book-search-sheet__field">
              <svg class="book-search-sheet__field-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
                  fill="currentColor"
                />
              </svg>
              <input
                ref="inputRef"
                v-model="query"
                type="search"
                enterkeyhint="search"
                placeholder="Buscar capítulo o sección…"
                autocomplete="off"
                autocapitalize="off"
              />
            </label>
            <button type="button" class="book-search-sheet__close" aria-label="Cerrar" @click="close">
              ✕
            </button>
          </div>

          <ul class="book-search-sheet__list">
            <li v-if="results.length === 0" class="book-search-sheet__empty">
              Sin resultados para «{{ query.trim() }}»
            </li>
            <li v-for="item in results" :key="item.id">
              <button type="button" class="book-search-sheet__item" @click="onSelect(item.id)">
                <span class="book-search-sheet__num">{{ item.num }}</span>
                <span class="book-search-sheet__label">{{ item.label }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
