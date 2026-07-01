<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { bookCatalog } from '../books/catalog'
import BookCard from '../components/BookCard.vue'
import MobileLibraryBar from '../components/MobileLibraryBar.vue'
import { useMediaQuery } from '../composables/useMediaQuery'
import { countReadBooks } from '../reading/status'
import { readingRevision } from '../reading/revision'

const isMobile = useMediaQuery('(max-width: 1023px)')

onMounted(() => {
  window.scrollTo(0, 0)
})

const sortedCatalog = computed(() => {
  const items = [...bookCatalog]
  return items.sort((a, b) => {
    const orderA = a.readingOrder ?? Number.MAX_SAFE_INTEGER
    const orderB = b.readingOrder ?? Number.MAX_SAFE_INTEGER
    return orderA - orderB
  })
})

const totalBooks = computed(() => bookCatalog.length)

const readBooks = computed(() => {
  readingRevision.value
  return countReadBooks(bookCatalog.map((book) => book.slug))
})

const readSummary = computed(() => `${readBooks.value}/${totalBooks.value} libros leídos`)
</script>

<template>
  <div class="library-page">
    <main class="library">
      <header class="library-hero">
        <p class="library-hero__label">Biblioteca</p>
        <p class="library-hero__count">{{ readSummary }}</p>
      </header>

      <div class="library-shelf">
        <BookCard v-for="book in sortedCatalog" :key="book.slug" :book="book" />
      </div>
    </main>

    <MobileLibraryBar v-if="isMobile" />
  </div>
</template>
