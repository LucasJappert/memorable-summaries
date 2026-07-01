import { ref } from 'vue'

/** Incrementa al cambiar progreso o estado leído en localStorage (reactividad en biblioteca). */
export const readingRevision = ref(0)

export function bumpReadingRevision() {
  readingRevision.value++
}
