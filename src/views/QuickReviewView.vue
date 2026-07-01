<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getBookBySlug } from '../books/catalog'
import ConceptGrid from '../components/ConceptGrid.vue'

const props = defineProps<{ slug: string }>()

const router = useRouter()

const book = computed(() => getBookBySlug(props.slug))

const displayTitle = computed(() => {
  if (!book.value) return ''
  return book.value.meta.titleEs?.trim() || book.value.meta.title
})

onMounted(() => {
  window.scrollTo(0, 0)
})

function goToFlashcards() {
  router.push({ name: 'flashcards', params: { slug: props.slug } })
}
</script>

<template>
  <div v-if="book" class="quick-review">
    <header class="quick-review__header">
      <RouterLink to="/" class="quick-review__back">← Biblioteca</RouterLink>
      <p class="quick-review__label">Repaso rápido · ~5 min</p>
      <h1 class="quick-review__title">{{ displayTitle }}</h1>
      <p class="quick-review__subtitle">{{ book.meta.author }}</p>
    </header>

    <section class="quick-review__highlight">
      <h2>Idea central</h2>
      <p class="quick-review__highlight-text">{{ book.closing.highlight }}</p>
    </section>

    <section v-if="book.keyConcepts.length" class="quick-review__concepts">
      <h2>Conceptos clave</h2>
      <ConceptGrid :items="book.keyConcepts" />
    </section>

    <footer class="quick-review__actions">
      <button type="button" class="quick-review__cta" @click="goToFlashcards">
        Practicar tarjetas
      </button>
    </footer>
  </div>

  <div v-else class="quick-review quick-review--empty">
    <p>Libro no encontrado.</p>
    <RouterLink to="/">Volver a la biblioteca</RouterLink>
  </div>
</template>
