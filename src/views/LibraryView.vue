<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { bookCatalog } from '../books/catalog'
import SiteHeader from '../components/SiteHeader.vue'
import BookCard from '../components/BookCard.vue'
import { getBookReadingStatus, STATUS_SORT_ORDER } from '../reading/status'

onMounted(() => {
  window.scrollTo(0, 0)
})

const sortedCatalog = computed(() =>
  [...bookCatalog].sort((a, b) => {
    const orderA = STATUS_SORT_ORDER[getBookReadingStatus(a.slug)]
    const orderB = STATUS_SORT_ORDER[getBookReadingStatus(b.slug)]
    return orderA - orderB
  }),
)
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
