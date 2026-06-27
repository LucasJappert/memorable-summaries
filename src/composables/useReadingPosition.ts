import { onMounted, onUnmounted, toValue, type MaybeRef } from 'vue'
import {
  computeScrollProgress,
  readReadingPosition,
  writeReadingPosition,
} from '../reading/storage'

function getCurrentSectionId(sectionIds: string[]): string {
  const marker = window.innerHeight * 0.22
  let current = sectionIds[0] ?? ''

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= marker) current = id
    else break
  }

  return current
}

export function useReadingPosition(
  slug: MaybeRef<string>,
  sectionIds: MaybeRef<string[]>,
  sectionLabels: MaybeRef<Record<string, string>>,
) {
  let saveTimer: ReturnType<typeof setTimeout> | null = null
  let restoring = false
  let lastSavedScrollY = -1
  let lastSavedSectionId = ''

  function persist(sectionId: string, scrollY: number) {
    if (restoring) return
    if (sectionId === lastSavedSectionId && Math.abs(scrollY - lastSavedScrollY) < 8) return

    lastSavedSectionId = sectionId
    lastSavedScrollY = scrollY

    const labels = toValue(sectionLabels)
    writeReadingPosition(toValue(slug), {
      sectionId,
      sectionLabel: labels[sectionId] ?? sectionId,
      scrollY,
      progress: computeScrollProgress(),
      updatedAt: Date.now(),
    })

    const hash = sectionId ? `#${sectionId}` : ''
    if (window.location.hash !== hash) {
      const url = `${window.location.pathname}${window.location.search}${hash}`
      history.replaceState(history.state, '', url)
    }
  }

  function saveNow() {
    const ids = toValue(sectionIds)
    if (!ids.length) return
    persist(getCurrentSectionId(ids), window.scrollY)
  }

  function debouncedSave() {
    if (saveTimer) clearTimeout(saveTimer)
    saveTimer = setTimeout(saveNow, 280)
  }

  function restore() {
    const ids = toValue(sectionIds)
    const bookSlug = toValue(slug)
    const stored = readReadingPosition(bookSlug)
    const hashId = window.location.hash.replace(/^#/, '')
    const hashValid = hashId && ids.includes(hashId)

    let targetScrollY = stored?.scrollY ?? 0
    let targetSectionId = stored?.sectionId ?? (hashValid ? hashId : '')

    if (!stored && hashValid) {
      targetSectionId = hashId
      targetScrollY = 0
    }

    if (!targetSectionId && targetScrollY <= 0) return

    restoring = true
    const html = document.documentElement
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    if (targetScrollY > 0) {
      window.scrollTo(0, targetScrollY)
    } else if (targetSectionId) {
      document.getElementById(targetSectionId)?.scrollIntoView()
    }

    if (targetSectionId) {
      const hash = `#${targetSectionId}`
      if (window.location.hash !== hash) {
        history.replaceState(
          history.state,
          '',
          `${window.location.pathname}${window.location.search}${hash}`,
        )
      }
    }

    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevBehavior
      restoring = false
      saveNow()
    })

    return targetScrollY > 0 ? targetScrollY : undefined
  }

  onMounted(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    requestAnimationFrame(() => {
      const restoredY = restore()
      if (restoredY && restoredY > 0 && document.fonts) {
        document.fonts.ready.then(() => {
          window.scrollTo(0, restoredY)
        })
      }
    })

    window.addEventListener('scroll', debouncedSave, { passive: true })
    window.addEventListener('pagehide', saveNow)
    document.addEventListener('visibilitychange', onVisibilityChange)
  })

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') saveNow()
  }

  onUnmounted(() => {
    if (saveTimer) clearTimeout(saveTimer)
    window.removeEventListener('scroll', debouncedSave)
    window.removeEventListener('pagehide', saveNow)
    document.removeEventListener('visibilitychange', onVisibilityChange)
  })
}
