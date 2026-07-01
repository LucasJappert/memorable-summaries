<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { BookCatalogEntry } from '../books/catalog'
import { getBridgeFrom } from '../data/bridges'
import { bookDisplayTitle, getNextBook } from '../composables/useNextInRoute'

const props = defineProps<{
  slug: string
  active: boolean
}>()

const emit = defineEmits<{ dismiss: [] }>()

const nextBook = computed<BookCatalogEntry | undefined>(() => getNextBook(props.slug))
const bridge = computed(() => getBridgeFrom(props.slug))

const nextTitle = computed(() =>
  nextBook.value ? bookDisplayTitle(nextBook.value) : null,
)

function dismiss() {
  emit('dismiss')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="active"
      class="read-completion-panel"
      role="dialog"
      aria-labelledby="read-completion-title"
      aria-modal="true"
    >
      <div class="read-completion-panel__backdrop" @click="dismiss" />

      <div class="read-completion-panel__card">
        <p class="read-completion-panel__eyebrow">Libro completado</p>
        <h2 id="read-completion-title" class="read-completion-panel__title">
          ¡Lectura terminada!
        </h2>

        <p v-if="bridge" class="read-completion-panel__bridge">
          {{ bridge.text }}
        </p>

        <div class="read-completion-panel__actions">
          <RouterLink
            v-if="nextBook"
            :to="`/libro/${nextBook.slug}`"
            class="read-completion-panel__btn read-completion-panel__btn--primary"
            @click="dismiss"
          >
            Ir al siguiente<span v-if="nextTitle">: {{ nextTitle }}</span>
          </RouterLink>

          <RouterLink
            :to="`/repaso/${slug}`"
            class="read-completion-panel__btn read-completion-panel__btn--secondary"
            @click="dismiss"
          >
            Repasar
          </RouterLink>

          <button
            type="button"
            class="read-completion-panel__btn read-completion-panel__btn--ghost"
            @click="dismiss"
          >
            Seguir aquí
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
