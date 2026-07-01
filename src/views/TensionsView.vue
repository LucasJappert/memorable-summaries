<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SectionPageHero from '../components/SectionPageHero.vue'
import { getBookBySlug } from '../books/catalog'
import { READING_TENSIONS } from '../data/reading-tensions'
import { getBookReadingStatus, type BookReadingStatus } from '../reading/status'
import { readingRevision } from '../reading/revision'

function bookLabel(slug: string): string {
  const book = getBookBySlug(slug)
  if (!book) return slug
  const { title, titleEs } = book.meta
  if (titleEs && titleEs !== title) return titleEs
  return title
}

interface TensionItem {
  slugA: string
  slugB: string
  title: string
  lineA: string
  lineB: string
  synthesis: [string, string]
  unlocked: boolean
  progress: number
  statusA: BookReadingStatus
  statusB: BookReadingStatus
}

const items = computed((): TensionItem[] => {
  readingRevision.value
  return READING_TENSIONS.map((pair) => {
    const statusA = getBookReadingStatus(pair.slugA)
    const statusB = getBookReadingStatus(pair.slugB)
    const progress =
      (statusA === 'done' ? 1 : 0) + (statusB === 'done' ? 1 : 0)
    return {
      ...pair,
      statusA,
      statusB,
      progress,
      unlocked: progress === 2,
    }
  })
})

const unlockedCount = computed(() => items.value.filter((item) => item.unlocked).length)
</script>

<template>
  <div class="section-page tensions-page">
    <main class="section-page__inner tensions">
      <SectionPageHero
        variant="tensions"
        title="Tensiones"
        subtitle="Debates entre libros de la ruta. Cada par se desbloquea al leer ambos títulos."
        :meta="`${unlockedCount} de ${items.length} pares desbloqueados`"
      />

      <ol class="tensions__list">
        <li
          v-for="pair in items"
          :key="`${pair.slugA}-${pair.slugB}`"
          class="tension-card"
          :class="{ 'tension-card--locked': !pair.unlocked }"
        >
          <div class="tension-card__head">
            <h2 class="tension-card__title">{{ pair.title }}</h2>
            <span
              class="tension-card__badge"
              :class="{ 'tension-card__badge--done': pair.unlocked }"
            >
              {{ pair.progress }}/2
            </span>
          </div>

          <ul class="tension-card__checklist">
            <li class="tension-card__check-item">
              <span
                class="tension-card__check"
                :class="{ 'tension-card__check--done': pair.statusA === 'done' }"
                aria-hidden="true"
              >
                {{ pair.statusA === 'done' ? '✓' : '○' }}
              </span>
              <RouterLink :to="`/libro/${pair.slugA}`" class="tension-card__book">
                {{ bookLabel(pair.slugA) }}
              </RouterLink>
              <span v-if="pair.statusA !== 'done'" class="tension-card__hint">Pendiente</span>
            </li>
            <li class="tension-card__check-item">
              <span
                class="tension-card__check"
                :class="{ 'tension-card__check--done': pair.statusB === 'done' }"
                aria-hidden="true"
              >
                {{ pair.statusB === 'done' ? '✓' : '○' }}
              </span>
              <RouterLink :to="`/libro/${pair.slugB}`" class="tension-card__book">
                {{ bookLabel(pair.slugB) }}
              </RouterLink>
              <span v-if="pair.statusB !== 'done'" class="tension-card__hint">Pendiente</span>
            </li>
          </ul>

          <template v-if="pair.unlocked">
            <blockquote class="tension-card__line">{{ pair.lineA }}</blockquote>
            <blockquote class="tension-card__line tension-card__line--b">{{ pair.lineB }}</blockquote>

            <div class="tension-card__synthesis">
              <p>{{ pair.synthesis[0] }}</p>
              <p>{{ pair.synthesis[1] }}</p>
            </div>
          </template>

          <p v-else class="tension-card__locked-msg">
            Leé los dos libros para ver la síntesis.
          </p>
        </li>
      </ol>
    </main>
  </div>
</template>

<style src="./TensionsView.css"></style>
