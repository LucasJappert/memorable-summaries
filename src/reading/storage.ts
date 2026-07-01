import { bumpReadingRevision } from './revision'

export const READING_STORAGE_PREFIX = 'memorable-summaries:reading:'

/** Por debajo de este scroll no restauramos sección ni hash (evita micro-scroll al recargar). */
export const READING_SCROLL_THRESHOLD = 12

export function hasMeaningfulScroll(scrollY: number): boolean {
  return scrollY > READING_SCROLL_THRESHOLD
}

export interface ReadingPosition {
  sectionId: string
  sectionLabel: string
  scrollY: number
  progress: number
  updatedAt: number
  /** Máxima sección alcanzada en el scroll (p. ej. conceptos aunque el marcador siga en un capítulo). */
  furthestSectionId?: string
  /** true cuando el lector llegó a Conceptos clave o más allá */
  reachedConceptos?: boolean
  /** El usuario marcó el libro como no leído; no vuelve a leído hasta re-entrar a Conceptos. */
  manualUnread?: boolean
  /** Tras desleer, el lector retrocedió antes de Conceptos (habilita volver a marcar leído). */
  unreadBelowConceptos?: boolean
}

export function readingStorageKey(slug: string) {
  return `${READING_STORAGE_PREFIX}${slug}`
}

export function readReadingPosition(slug: string): ReadingPosition | null {
  try {
    const raw = localStorage.getItem(readingStorageKey(slug))
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<ReadingPosition>
    if (typeof parsed.scrollY !== 'number') return null

    return {
      sectionId: typeof parsed.sectionId === 'string' ? parsed.sectionId : '',
      sectionLabel: typeof parsed.sectionLabel === 'string' ? parsed.sectionLabel : '',
      scrollY: Math.max(0, parsed.scrollY),
      progress:
        typeof parsed.progress === 'number'
          ? Math.min(100, Math.max(0, Math.round(parsed.progress)))
          : 0,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
      furthestSectionId:
        typeof parsed.furthestSectionId === 'string' ? parsed.furthestSectionId : undefined,
      reachedConceptos: parsed.reachedConceptos === true,
      manualUnread: parsed.manualUnread === true,
      unreadBelowConceptos: parsed.unreadBelowConceptos === true,
    }
  } catch {
    return null
  }
}

export function writeReadingPosition(slug: string, position: ReadingPosition) {
  localStorage.setItem(readingStorageKey(slug), JSON.stringify(position))
  bumpReadingRevision()
}

export function markBookUnread(slug: string): boolean {
  const current = readReadingPosition(slug)
  if (!current) return false

  writeReadingPosition(slug, {
    ...current,
    reachedConceptos: false,
    manualUnread: true,
    unreadBelowConceptos: false,
    updatedAt: Date.now(),
  })
  return true
}

export function markBookRead(
  slug: string,
  patch: Pick<ReadingPosition, 'sectionId' | 'sectionLabel' | 'scrollY' | 'progress' | 'furthestSectionId'>,
): void {
  writeReadingPosition(slug, {
    sectionId: patch.sectionId,
    sectionLabel: patch.sectionLabel,
    scrollY: patch.scrollY,
    progress: patch.progress,
    updatedAt: Date.now(),
    furthestSectionId: patch.furthestSectionId,
    reachedConceptos: true,
    manualUnread: false,
    unreadBelowConceptos: false,
  })
}

export function computeScrollProgress(): number {
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (max <= 0) return 100
  return Math.min(100, Math.round((window.scrollY / max) * 100))
}
