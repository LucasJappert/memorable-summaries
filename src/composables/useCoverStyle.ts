import { computed, ref } from 'vue'
import type { CoverStyle } from '../utils/coverImage'

const STORAGE_KEY = 'ms-cover-style'

function readStored(): CoverStyle {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'editorial' || raw === 'memorable') return raw
  } catch {
    /* private mode */
  }
  return 'memorable'
}

/** Preferencia global de portadas (estante, hero, cola de audio). */
export const coverStyle = ref<CoverStyle>(readStored())

export const preferEditorialCovers = computed(() => coverStyle.value === 'editorial')

export function setCoverStyle(style: CoverStyle): void {
  coverStyle.value = style
  try {
    localStorage.setItem(STORAGE_KEY, style)
  } catch {
    /* private mode */
  }
}

export function toggleCoverStyle(): void {
  setCoverStyle(coverStyle.value === 'editorial' ? 'memorable' : 'editorial')
}
