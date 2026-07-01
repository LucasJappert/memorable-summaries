import { READ_COMPLETE_FROM_SECTION } from './status'

/** Índice de la sección más avanzada vista en pantalla. */
export function getFurthestSectionId(sectionIds: string[], previousId?: string): string {
  if (!sectionIds.length) return ''

  let maxIndex = previousId ? sectionIds.indexOf(previousId) : -1
  if (maxIndex < 0) maxIndex = 0

  const viewportThreshold = window.innerHeight * 0.92

  for (let i = 0; i < sectionIds.length; i++) {
    const el = document.getElementById(sectionIds[i])
    if (!el) continue

    const rect = el.getBoundingClientRect()
    const enteredViewport = rect.top < viewportThreshold && rect.bottom > 0
    if (enteredViewport && i > maxIndex) {
      maxIndex = i
    }
  }

  return sectionIds[Math.max(0, maxIndex)] ?? sectionIds[0]
}

/** @deprecated Alias legacy; usa la sección `figuras`. */
export function hasReachedConceptosByProgress(
  sectionIds: string[],
  furthestSectionId: string,
): boolean {
  return hasReachedCompleteSectionByProgress(sectionIds, furthestSectionId)
}

export function hasReachedCompleteSectionByProgress(
  sectionIds: string[],
  furthestSectionId: string,
): boolean {
  const completeIndex = sectionIds.indexOf(READ_COMPLETE_FROM_SECTION)
  const furthestIndex = sectionIds.indexOf(furthestSectionId)
  if (completeIndex < 0 || furthestIndex < 0) return false
  return furthestIndex >= completeIndex
}
