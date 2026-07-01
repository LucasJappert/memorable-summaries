<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBookBySlug } from '../books/catalog'
import {
  ensureCardsForBook,
  getCardsForBook,
  getDueCards,
  recordReview,
  type ReviewQuality,
  type SrsCardState,
} from '../reading/srs-storage'

const props = defineProps<{ slug?: string }>()

const route = useRoute()
const router = useRouter()

const flipped = ref(false)
const currentIndex = ref(0)
const sessionCards = ref<SrsCardState[]>([])
const finished = ref(false)

const activeSlug = computed(() => props.slug || (route.params.slug as string | undefined))

const displayTitle = computed(() => {
  if (!activeSlug.value) return 'Todas las tarjetas'
  const book = getBookBySlug(activeSlug.value)
  if (!book) return activeSlug.value
  return book.meta.titleEs?.trim() || book.meta.title
})

const currentCard = computed(() => sessionCards.value[currentIndex.value] ?? null)
const progressLabel = computed(() => {
  if (!sessionCards.value.length) return '0 / 0'
  return `${currentIndex.value + 1} / ${sessionCards.value.length}`
})

function loadSession() {
  if (activeSlug.value) {
    ensureCardsForBook(activeSlug.value)
    sessionCards.value = getCardsForBook(activeSlug.value)
  } else {
    sessionCards.value = getDueCards()
  }
  currentIndex.value = 0
  flipped.value = false
  finished.value = sessionCards.value.length === 0
}

function reveal() {
  flipped.value = true
}

function answer(quality: ReviewQuality) {
  const card = currentCard.value
  if (!card) return

  recordReview(card.id, quality)
  flipped.value = false

  if (currentIndex.value >= sessionCards.value.length - 1) {
    finished.value = true
    return
  }

  currentIndex.value += 1
}

function restart() {
  loadSession()
}

function goBack() {
  if (activeSlug.value) {
    router.push({ name: 'quick-review', params: { slug: activeSlug.value } })
    return
  }
  router.push({ name: 'library' })
}

function exportTsv() {
  const slug = activeSlug.value
  if (!slug) return
  const book = getBookBySlug(slug)
  if (!book?.keyConcepts.length) return

  const title = displayTitle.value
  const rows = book.keyConcepts.map((concept) => {
    const front = concept.title.replace(/\t/g, ' ')
    const back = `${concept.description.replace(/\t/g, ' ')}\n\n— ${title}`
    return `${front}\t${back}\tmemorable::${slug}`
  })
  const tsv = ['Front\tBack\tTags', ...rows].join('\n')
  const blob = new Blob([tsv], { type: 'text/tab-separated-values;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `anki-${slug}.tsv`
  anchor.click()
  URL.revokeObjectURL(url)
}

onMounted(() => {
  window.scrollTo(0, 0)
  loadSession()
})
</script>

<template>
  <div class="flashcard-session">
    <header class="flashcard-session__header">
      <button type="button" class="flashcard-session__back" @click="goBack">← Volver</button>
      <p class="flashcard-session__label">Tarjetas · {{ displayTitle }}</p>
      <p class="flashcard-session__progress">{{ progressLabel }}</p>
      <button
        v-if="activeSlug"
        type="button"
        class="flashcard-session__export"
        @click="exportTsv"
      >
        Exportar TSV
      </button>
    </header>

    <div v-if="finished" class="flashcard-session__done">
      <p v-if="sessionCards.length === 0">No hay tarjetas para practicar.</p>
      <p v-else>Sesión completada.</p>
      <div class="flashcard-session__done-actions">
        <button type="button" @click="restart">Repetir</button>
        <RouterLink to="/">Biblioteca</RouterLink>
      </div>
    </div>

    <div v-else-if="currentCard" class="flashcard">
      <button
        type="button"
        class="flashcard__card"
        :class="{ 'flashcard__card--flipped': flipped }"
        @click="!flipped && reveal()"
      >
        <div class="flashcard__inner">
          <div class="flashcard__face flashcard__face--front">
            <p class="flashcard__prompt">Frente</p>
            <p class="flashcard__text">{{ currentCard.front }}</p>
            <span class="flashcard__hint">Tocá para ver la respuesta</span>
          </div>
          <div class="flashcard__face flashcard__face--back">
            <p class="flashcard__prompt">Reverso</p>
            <p class="flashcard__text">{{ currentCard.back }}</p>
          </div>
        </div>
      </button>

      <div v-if="flipped" class="flashcard__actions">
        <button type="button" class="flashcard__btn flashcard__btn--again" @click="answer('again')">
          Otra vez
        </button>
        <button type="button" class="flashcard__btn flashcard__btn--hard" @click="answer('hard')">
          Difícil
        </button>
        <button type="button" class="flashcard__btn flashcard__btn--good" @click="answer('good')">
          Bien
        </button>
      </div>
    </div>
  </div>
</template>
