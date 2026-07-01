<script setup lang="ts">
import { computed } from 'vue'
import { getBookBySlug } from '../books/catalog'
import { completeReview, getPendingReviews } from '../reading/review-schedule'
import { readingRevision } from '../reading/revision'

const pending = computed(() => {
  readingRevision.value
  return getPendingReviews()
})

const nextReview = computed(() => pending.value[0] ?? null)

const label = computed(() => {
  if (!nextReview.value) return ''
  const book = getBookBySlug(nextReview.value.slug)
  const title = book?.meta.titleEs?.trim() || book?.meta.title || nextReview.value.slug
  const kindLabel =
    nextReview.value.kind === 'day1'
      ? 'repaso de mañana'
      : nextReview.value.kind === 'day7'
        ? 'repaso semanal'
        : 'repaso mensual'
  const extra = pending.value.length > 1 ? ` (+${pending.value.length - 1} más)` : ''
  return `${title}: ${kindLabel}${extra}`
})

function dismiss() {
  if (!nextReview.value) return
  completeReview(nextReview.value.id)
}
</script>

<template>
  <aside v-if="nextReview" class="review-nudge" role="status">
    <p class="review-nudge__text">
      Tenés un repaso pendiente:
      <RouterLink
        :to="{ name: 'quick-review', params: { slug: nextReview.slug } }"
        class="review-nudge__link"
      >
        {{ label }}
      </RouterLink>
    </p>
    <button type="button" class="review-nudge__dismiss" aria-label="Descartar aviso" @click="dismiss">
      ×
    </button>
  </aside>
</template>

<style src="./ReviewNudge.css"></style>
