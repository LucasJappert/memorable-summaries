<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getBookBySlug } from '../books/catalog'
import { READING_TENSIONS } from '../data/reading-tensions'
import { getBookReadingStatus } from '../reading/status'
import { readingRevision } from '../reading/revision'

function bookLabel(slug: string): string {
  const book = getBookBySlug(slug)
  if (!book) return slug
  const { title, titleEs } = book.meta
  if (titleEs && titleEs !== title) return titleEs
  return title
}

const visibleTensions = computed(() => {
  readingRevision.value
  return READING_TENSIONS.filter(
    (pair) =>
      getBookReadingStatus(pair.slugA) === 'done' &&
      getBookReadingStatus(pair.slugB) === 'done',
  )
})
</script>

<template>
  <div class="tensions-page">
    <main class="tensions">
      <header class="tensions__hero">
        <RouterLink to="/" class="tensions__back">← Biblioteca</RouterLink>
        <p class="tensions__label">Lecturas en tensión</p>
        <h1 class="tensions__title">Ideas que chocan y se iluminan</h1>
        <p class="tensions__intro">
          Pares de libros leídos cuyas tesis centrales se contradicen o se complementan.
        </p>
      </header>

      <p v-if="visibleTensions.length === 0" class="tensions__empty">
        Completá ambos libros de un par para ver la síntesis aquí.
      </p>

      <article
        v-for="pair in visibleTensions"
        :key="`${pair.slugA}-${pair.slugB}`"
        class="tension-card"
      >
        <h2 class="tension-card__title">{{ pair.title }}</h2>

        <div class="tension-card__books">
          <RouterLink :to="`/libro/${pair.slugA}`" class="tension-card__book">
            {{ bookLabel(pair.slugA) }}
          </RouterLink>
          <span class="tension-card__vs" aria-hidden="true">↔</span>
          <RouterLink :to="`/libro/${pair.slugB}`" class="tension-card__book">
            {{ bookLabel(pair.slugB) }}
          </RouterLink>
        </div>

        <blockquote class="tension-card__line">{{ pair.lineA }}</blockquote>
        <blockquote class="tension-card__line tension-card__line--b">{{ pair.lineB }}</blockquote>

        <div class="tension-card__synthesis">
          <p>{{ pair.synthesis[0] }}</p>
          <p>{{ pair.synthesis[1] }}</p>
        </div>
      </article>
    </main>
  </div>
</template>
