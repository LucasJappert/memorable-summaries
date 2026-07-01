<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { getBookBySlug } from '../books/catalog'
import { bookHasAudio } from '../books/audio-catalog'
import ReadingProgress from '../components/ReadingProgress.vue'
import SiteHeader from '../components/SiteHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import BookSection from '../components/BookSection.vue'
import ConceptGrid from '../components/ConceptGrid.vue'
import Timeline from '../components/Timeline.vue'
import FiguresGrid from '../components/FiguresGrid.vue'
import ClosingSection from '../components/ClosingSection.vue'
import MobileBookBar from '../components/MobileBookBar.vue'
import BookNavDrawer from '../components/BookNavDrawer.vue'
import AudioPlayer from '../components/AudioPlayer.vue'
import { useActiveSection } from '../composables/useActiveSection'
import { useMediaQuery } from '../composables/useMediaQuery'
import { useReadingPosition } from '../composables/useReadingPosition'
import ReadCelebration from '../components/ReadCelebration.vue'

const SPECIAL_TOC_IDS = new Set(['cierre', 'conceptos', 'cronologia', 'figuras'])

const props = defineProps<{ slug: string }>()

const book = computed(() => getBookBySlug(props.slug))
const isMobile = useMediaQuery('(max-width: 1023px)')
const hasAudio = computed(() => bookHasAudio(props.slug))

const menuOpen = ref(false)
const audioVisible = ref(false)

const headerBookTitle = computed(
  () => book.value?.meta.titleEs?.trim() || book.value?.meta.title,
)

const chapterToc = computed(() => {
  if (!book.value) return []
  return book.value.toc.filter((item) => !SPECIAL_TOC_IDS.has(item.id))
})

const navToc = computed(() => {
  if (!book.value) return []
  return [
    { id: 'cierre', num: '★', label: book.value.closing.title },
    ...chapterToc.value,
    { id: 'conceptos', num: '✦', label: 'Conceptos clave' },
    { id: 'cronologia', num: '◈', label: 'Cronología' },
    { id: 'figuras', num: '✦', label: 'Figuras clave' },
  ]
})

const readingSectionIds = computed(() => {
  if (!book.value) return []
  return [
    'cierre',
    ...chapterToc.value.map((item) => item.id),
    'conceptos',
    'cronologia',
    'figuras',
  ]
})

const sectionLabels = computed(() => {
  if (!book.value) return {}
  return {
    cierre: book.value.closing.title,
    ...Object.fromEntries(chapterToc.value.map((item) => [item.id, item.label])),
    conceptos: 'Conceptos clave',
    cronologia: 'Cronología',
    figuras: 'Figuras clave',
  }
})

const sectionIds = computed(() => navToc.value.map((item) => item.id))
const { activeId } = useActiveSection(sectionIds)

const bookSlug = computed(() => props.slug)

const { isMarkedRead, bookJustCompleted, toggleMarkedRead } = useReadingPosition(
  bookSlug,
  readingSectionIds,
  sectionLabels,
)

const showReadCelebration = ref(false)

watch(bookJustCompleted, (completed) => {
  if (!completed) return
  showReadCelebration.value = false
  void nextTick(() => {
    showReadCelebration.value = true
  })
})

function onReadCelebrationFinished() {
  showReadCelebration.value = false
  bookJustCompleted.value = false
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function toggleAudio() {
  audioVisible.value = !audioVisible.value
}

function scrollToCover() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div v-if="book" class="book-page">
    <ReadingProgress v-if="!isMobile" />

    <SiteHeader
      :toc="navToc"
      :book-title="headerBookTitle"
      @toggle-menu="toggleMenu"
    />

    <HeroSection
      :meta="book.meta"
      :slug="book.slug"
      :done="isMarkedRead"
      :hide-audio="isMobile"
      @toggle-read="toggleMarkedRead"
    />

    <ReadCelebration
      :active="showReadCelebration"
      @finished="onReadCelebrationFinished"
    />

    <Teleport to="body">
      <AudioPlayer
        v-if="isMobile && hasAudio && audioVisible"
        :slug="book.slug"
        dock-top
        class="audio-player--mobile-dock"
      />
    </Teleport>

    <div class="page-layout">
      <main id="contenido" class="page-layout__main">
        <div class="container">
          <ClosingSection :closing="book.closing" />

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
        </div>

        <footer class="footer">
          <p>{{ book.footer.line1 }}</p>
          <p class="footer-meta"><em>{{ book.footer.line2 }}</em></p>
        </footer>
      </main>
    </div>

    <MobileBookBar
      v-if="isMobile"
      :has-audio="hasAudio"
      :audio-open="audioVisible"
      :menu-open="menuOpen"
      @scroll-top="scrollToCover"
      @toggle-menu="toggleMenu"
      @toggle-audio="toggleAudio"
    />

    <BookNavDrawer
      :open="menuOpen"
      :toc="navToc"
      :active-id="activeId"
      @close="closeMenu"
    />
  </div>
</template>

<style scoped>
.footer-meta {
  margin-top: 0.3rem;
  opacity: 0.5;
}
</style>
