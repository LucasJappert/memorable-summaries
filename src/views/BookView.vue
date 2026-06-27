<script setup lang="ts">
import { computed } from 'vue'
import { getBookBySlug } from '../books/catalog'
import ReadingProgress from '../components/ReadingProgress.vue'
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import TableOfContents from '../components/TableOfContents.vue'
import BookSection from '../components/BookSection.vue'
import ConceptGrid from '../components/ConceptGrid.vue'
import Timeline from '../components/Timeline.vue'
import FiguresGrid from '../components/FiguresGrid.vue'
import { useReadingPosition } from '../composables/useReadingPosition'

const props = defineProps<{ slug: string }>()

const book = computed(() => getBookBySlug(props.slug))

const readingSectionIds = computed(() => {
  if (!book.value) return []
  return [
    ...book.value.toc.map((item) => item.id),
    'conceptos',
    'cronologia',
    'figuras',
  ]
})

const sectionLabels = computed(() => {
  if (!book.value) return {}
  return {
    ...Object.fromEntries(book.value.toc.map((item) => [item.id, item.label])),
    conceptos: 'Conceptos clave',
    cronologia: 'Cronología',
    figuras: 'Figuras clave',
  }
})

const bookSlug = computed(() => props.slug)

useReadingPosition(bookSlug, readingSectionIds, sectionLabels)
</script>

<template>
  <template v-if="book">
    <ReadingProgress />

    <SiteHeader :toc="book.toc" />
    <HeroSection :meta="book.meta" />

    <div class="page-layout">
      <aside class="page-layout__sidebar" aria-label="Navegación del libro">
        <TableOfContents :items="book.toc" />
      </aside>

      <main class="page-layout__main">
        <div class="container">
          <BookSection v-for="section in book.sections" :key="section.id" :section="section" />

          <div class="divider" />

          <section id="conceptos" class="section">
            <div class="section-header">
              <span class="section-num">✦</span>
              <h2>Conceptos clave</h2>
            </div>
            <ConceptGrid :items="book.keyConcepts" />
          </section>

          <section id="cronologia" class="section">
            <div class="section-header">
              <span class="section-num">◈</span>
              <h2>Cronología de los descubrimientos</h2>
            </div>
            <Timeline :items="book.chronology" />
          </section>

          <section id="figuras" class="section">
            <div class="section-header">
              <span class="section-num">✦</span>
              <h2>Figuras clave</h2>
            </div>
            <FiguresGrid :items="book.figures" />
          </section>

          <section class="section section--closing">
            <h3 class="closing-title">{{ book.closing.title }}</h3>
            <p class="closing-text">
              {{ book.closing.lines[0] }}<br />
              {{ book.closing.lines[1] }}<br />
              <strong class="closing-highlight">{{ book.closing.highlight }}</strong>.<br /><br />
              {{ book.closing.lines[2] }}<br />
              {{ book.closing.lines[3] }}<br />
              {{ book.closing.lines[4] }}<br />
              {{ book.closing.lines[5] }}.
            </p>
          </section>
        </div>

        <footer class="footer">
          <p>{{ book.footer.line1 }}</p>
          <p class="footer-meta"><em>{{ book.footer.line2 }}</em></p>
        </footer>
      </main>
    </div>
  </template>
</template>

<style scoped>
.section--closing {
  text-align: center;
  border-color: var(--accent3);
}

.closing-title {
  color: var(--accent3);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.closing-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.closing-highlight {
  color: var(--accent3);
}

.footer-meta {
  margin-top: 0.3rem;
  opacity: 0.5;
}
</style>
