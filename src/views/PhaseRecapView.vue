<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { getBookBySlug } from '../books/catalog'
import { getPhase } from '../books/reading-phases'
import { getPhaseQuestions } from '../data/phase-questions'
import { READING_TENSIONS } from '../data/reading-tensions'
import { getBookReadingStatus } from '../reading/status'
import type { ConceptItem } from '../types/book'

const props = defineProps<{ num: string }>()

const phaseNum = computed(() => Number.parseInt(props.num, 10))

const phase = computed(() => getPhase(phaseNum.value))

function pickSample<T>(items: T[], count: number): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

const highlights = computed(() => {
  if (!phase.value) return []
  const items = phase.value.slugs
    .map((slug) => {
      const book = getBookBySlug(slug)
      if (!book?.closing.highlight) return null
      return {
        slug,
        title: book.meta.titleEs?.trim() || book.meta.title,
        text: book.closing.highlight,
      }
    })
    .filter((item): item is { slug: string; title: string; text: string } => Boolean(item))
  return pickSample(items, Math.min(5, items.length))
})

const concepts = computed(() => {
  if (!phase.value) return [] as Array<ConceptItem & { bookTitle: string }>
  const pool: Array<ConceptItem & { bookTitle: string }> = []
  for (const slug of phase.value.slugs) {
    const book = getBookBySlug(slug)
    if (!book) continue
    const title = book.meta.titleEs?.trim() || book.meta.title
    for (const concept of book.keyConcepts) {
      pool.push({ ...concept, bookTitle: title })
    }
  }
  return pickSample(pool, Math.min(5, pool.length))
})

const questions = computed(() => getPhaseQuestions(phaseNum.value))

const phaseTensions = computed(() => {
  if (!phase.value) return []
  const slugs = new Set(phase.value.slugs)
  return READING_TENSIONS.filter(
    (pair) =>
      slugs.has(pair.slugA) &&
      slugs.has(pair.slugB) &&
      getBookReadingStatus(pair.slugA) === 'done' &&
      getBookReadingStatus(pair.slugB) === 'done',
  )
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div v-if="phase" class="phase-recap">
    <header class="phase-recap__header">
      <RouterLink to="/" class="phase-recap__back">← Biblioteca</RouterLink>
      <p class="phase-recap__label">Repaso de fase {{ phase.num }}</p>
      <h1 class="phase-recap__title">{{ phase.title }}</h1>
    </header>

    <section v-if="highlights.length" class="phase-recap__section">
      <h2>Ideas centrales</h2>
      <ul class="phase-recap__list">
        <li v-for="item in highlights" :key="item.slug" class="phase-recap__highlight">
          <span class="phase-recap__book">{{ item.title }}</span>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </section>

    <section v-if="concepts.length" class="phase-recap__section">
      <h2>Conceptos sorteados</h2>
      <ul class="phase-recap__list">
        <li v-for="(concept, index) in concepts" :key="`${concept.title}-${index}`" class="phase-recap__concept">
          <span class="phase-recap__book">{{ concept.bookTitle }}</span>
          <strong>{{ concept.title }}</strong>
          <p>{{ concept.description }}</p>
        </li>
      </ul>
    </section>

    <section v-if="questions.length" class="phase-recap__section">
      <h2>Preguntas abiertas</h2>
      <ol class="phase-recap__questions">
        <li v-for="question in questions" :key="question.id">{{ question.text }}</li>
      </ol>
    </section>

    <section v-if="phaseTensions.length" class="phase-recap__section">
      <h2>Lecturas en tensión</h2>
      <article
        v-for="pair in phaseTensions"
        :key="`${pair.slugA}-${pair.slugB}`"
        class="tension-card tension-card--compact"
      >
        <h3 class="tension-card__title">{{ pair.title }}</h3>
        <div class="tension-card__synthesis">
          <p>{{ pair.synthesis[0] }}</p>
        </div>
        <RouterLink to="/tensiones" class="phase-recap__cta phase-recap__cta--inline">
          Ver todas las tensiones
        </RouterLink>
      </article>
    </section>

    <footer class="phase-recap__footer">
      <RouterLink :to="{ name: 'flashcards' }" class="phase-recap__cta">
        Practicar tarjetas de la fase
      </RouterLink>
    </footer>
  </div>

  <div v-else class="phase-recap phase-recap--empty">
    <p>Fase no encontrada.</p>
    <RouterLink to="/">Volver a la biblioteca</RouterLink>
  </div>
</template>

<style src="./retention.css"></style>
