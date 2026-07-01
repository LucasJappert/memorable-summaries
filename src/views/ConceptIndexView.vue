<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SectionPageHero from '../components/SectionPageHero.vue'
import { bookCatalog, getBookBySlug } from '../books/catalog'
import { READING_PHASES } from '../books/reading-phases'
import { getBookReadingStatus } from '../reading/status'
import { readingRevision } from '../reading/revision'
import type { ConceptItem } from '../types/book'

interface ConceptEntry {
  title: string
  description: string
  slug: string
  bookLabel: string
}

interface PhaseGroup {
  num: number
  title: string
  concepts: ConceptEntry[]
}

function bookLabel(slug: string): string {
  const book = getBookBySlug(slug)
  if (!book) return slug
  const { title, titleEs } = book.meta
  if (titleEs && titleEs !== title) return `${title} — ${titleEs}`
  return title
}

const phaseGroups = computed((): PhaseGroup[] => {
  readingRevision.value
  const doneSlugs = new Set(
    bookCatalog
      .map((entry) => entry.slug)
      .filter((slug) => getBookReadingStatus(slug) === 'done'),
  )

  return READING_PHASES.map((phase) => {
    const concepts: ConceptEntry[] = []

    for (const slug of phase.slugs) {
      if (!doneSlugs.has(slug)) continue
      const book = getBookBySlug(slug)
      if (!book) continue
      for (const concept of book.keyConcepts as ConceptItem[]) {
        concepts.push({
          title: concept.title,
          description: concept.description,
          slug,
          bookLabel: bookLabel(slug),
        })
      }
    }

    return {
      num: phase.num,
      title: phase.title,
      concepts,
    }
  }).filter((group) => group.concepts.length > 0)
})

const totalConcepts = computed(() =>
  phaseGroups.value.reduce((sum, group) => sum + group.concepts.length, 0),
)
</script>

<template>
  <div class="section-page concept-index-page">
    <main class="section-page__inner concept-index">
      <SectionPageHero
        variant="concepts"
        title="Conceptos"
        :subtitle="
          totalConcepts > 0
            ? `${totalConcepts} conceptos de libros leídos, agrupados por fase.`
            : 'Marcá libros como leídos al llegar a «Figuras clave» para ver sus conceptos aquí.'
        "
      />

      <section
        v-for="group in phaseGroups"
        :key="group.num"
        class="concept-index__phase"
        :aria-labelledby="`phase-${group.num}`"
      >
        <h2 :id="`phase-${group.num}`" class="concept-index__phase-title">
          Fase {{ group.num }} · {{ group.title }}
        </h2>

        <ul class="concept-index__list">
          <li v-for="concept in group.concepts" :key="`${concept.slug}-${concept.title}`">
            <RouterLink
              :to="`/libro/${concept.slug}#conceptos`"
              class="concept-index__card"
            >
              <span class="concept-index__concept-title">{{ concept.title }}</span>
              <span class="concept-index__concept-desc">{{ concept.description }}</span>
              <span class="concept-index__concept-book">{{ concept.bookLabel }}</span>
            </RouterLink>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style src="./ConceptIndexView.css"></style>
