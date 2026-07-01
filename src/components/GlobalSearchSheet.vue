<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  globalSearchScope,
  setGlobalSearchScope,
} from '../composables/useGlobalSearch'
import { searchCorpus, type CorpusSearchResult } from '../search/corpus-search'
import { readingRevision } from '../reading/revision'
import { highlightSearchText } from '../utils/highlight-text'

const open = defineModel<boolean>('open', { required: true })

const router = useRouter()
const query = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const results = ref<CorpusSearchResult[]>([])
const searching = ref(false)
let searchTimer: ReturnType<typeof setTimeout> | null = null

const normalizedQuery = computed(() => query.value.trim())
const searchAll = computed({
  get: () => globalSearchScope.value === 'all',
  set: (value: boolean) => setGlobalSearchScope(value ? 'all' : 'read'),
})

const searchPlaceholder = computed(() =>
  searchAll.value ? 'Buscar en todos los libros…' : 'Buscar en libros leídos…',
)

const dialogLabel = computed(() =>
  searchAll.value ? 'Buscar en todos los libros' : 'Buscar en libros leídos',
)

const emptyHint = computed(() => {
  if (!normalizedQuery.value) {
    return searchAll.value
      ? 'Escribí para buscar en toda la biblioteca.'
      : 'Escribí para buscar en libros que ya leíste.'
  }
  if (searching.value) return 'Buscando…'
  return `Sin resultados para «${normalizedQuery.value}»`
})

function close() {
  open.value = false
}

function onSelect(result: CorpusSearchResult) {
  close()
  void router.push(`/libro/${result.slug}#${result.sectionId}`)
}

function highlighted(text: string): string {
  return highlightSearchText(text, normalizedQuery.value)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) close()
}

async function runSearch(q: string) {
  if (!q.trim()) {
    results.value = []
    searching.value = false
    return
  }
  searching.value = true
  readingRevision.value
  results.value = await searchCorpus(q, { scope: globalSearchScope.value })
  searching.value = false
}

function toggleScope() {
  searchAll.value = !searchAll.value
}

watch(open, (isOpen) => {
  if (isOpen) {
    query.value = ''
    results.value = []
    requestAnimationFrame(() => inputRef.value?.focus())
  }
})

watch(query, (value) => {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    void runSearch(value)
  }, 180)
})

watch(globalSearchScope, () => {
  if (normalizedQuery.value) void runSearch(normalizedQuery.value)
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (searchTimer) clearTimeout(searchTimer)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="book-search">
      <div
        v-if="open"
        class="global-search book-search-sheet"
        role="presentation"
        @click.self="close"
      >
        <div
          class="book-search-sheet__panel"
          role="dialog"
          aria-modal="true"
          :aria-label="dialogLabel"
          @click.stop
        >
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
                :placeholder="searchPlaceholder"
                autocomplete="off"
                autocapitalize="off"
              />
            </label>
            <button type="button" class="book-search-sheet__close" aria-label="Cerrar" @click="close">
              ✕
            </button>
          </div>

          <div class="global-search__scope">
            <div class="global-search__scope-control">
              <span id="global-search-scope-label" class="global-search__scope-label">
                Todos los libros
              </span>
              <button
                type="button"
                role="switch"
                class="global-search__switch"
                :class="{ 'global-search__switch--on': searchAll }"
                :aria-checked="searchAll"
                aria-labelledby="global-search-scope-label"
                @click="toggleScope"
              >
                <span class="global-search__switch-knob" aria-hidden="true" />
              </button>
            </div>
            <span class="global-search__shortcut" aria-hidden="true">⌘K / Ctrl+K</span>
          </div>

          <ul class="book-search-sheet__list">
            <li v-if="results.length === 0" class="book-search-sheet__empty">
              {{ emptyHint }}
            </li>
            <li v-for="(item, index) in results" :key="`${item.slug}-${item.sectionId}-${index}`">
              <button type="button" class="global-search__item book-search-sheet__item" @click="onSelect(item)">
                <span class="global-search__meta">
                  <span class="global-search__book" v-html="highlighted(item.bookTitle)" />
                  <span class="global-search__section" v-html="highlighted(item.sectionTitle)" />
                </span>
                <span class="global-search__snippet" v-html="highlighted(item.snippet)" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style src="./SearchSheet.css"></style>

