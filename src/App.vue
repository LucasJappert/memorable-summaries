<script setup lang="ts">
import { universoNada } from './data/universo-nada'
import Starfield from './components/Starfield.vue'
import HeroSection from './components/HeroSection.vue'
import TableOfContents from './components/TableOfContents.vue'
import BookSection from './components/BookSection.vue'
import ConceptGrid from './components/ConceptGrid.vue'
import Timeline from './components/Timeline.vue'
import FiguresGrid from './components/FiguresGrid.vue'

const book = universoNada
</script>

<template>
  <Starfield />

  <HeroSection :meta="book.meta" />
  <TableOfContents :items="book.toc" />

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

    <section class="section">
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
