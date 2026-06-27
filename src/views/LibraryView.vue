<script setup lang="ts">
import { onMounted } from 'vue'
import { bookCatalog } from '../books/catalog'
import SiteHeader from '../components/SiteHeader.vue'
import BookCard from '../components/BookCard.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <SiteHeader />

  <main class="library">
    <header class="library-hero">
      <p class="library-hero__label">Biblioteca</p>
      <p class="library-hero__count">{{ bookCatalog.length }} libros</p>
    </header>

    <div class="library-shelf">
      <BookCard v-for="book in bookCatalog" :key="book.slug" :book="book" />
    </div>
  </main>
</template>
