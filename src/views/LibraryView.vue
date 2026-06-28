<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { bookCatalog, type BookCatalogEntry } from '../books/catalog'
import SiteHeader from '../components/SiteHeader.vue'
import BookCard from '../components/BookCard.vue'

function compareByReadingOrder(a: BookCatalogEntry, b: BookCatalogEntry): number {
  const orderA = a.readingOrder ?? Number.MAX_SAFE_INTEGER
  const orderB = b.readingOrder ?? Number.MAX_SAFE_INTEGER
  return orderA - orderB
}

onMounted(() => {
  window.scrollTo(0, 0)
})

const sortedCatalog = computed(() => [...bookCatalog].sort(compareByReadingOrder))
</script>

<template>
  <SiteHeader />

  <main class="library">
    <header class="library-hero">
      <p class="library-hero__label">Biblioteca</p>
      <p class="library-hero__count">{{ bookCatalog.length }} libros</p>
    </header>

    <div class="library-shelf">
      <BookCard v-for="book in sortedCatalog" :key="book.slug" :book="book" />
    </div>
  </main>
</template>
