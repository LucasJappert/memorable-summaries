import { onMounted, onUnmounted, ref, toValue, type MaybeRef } from 'vue'
import { READ_COMPLETE_FROM_SECTION } from '../reading/status'
import {
  getFurthestSectionId,
  hasReachedCompleteSectionByProgress,
} from '../reading/section-progress'
import {
  computeScrollProgress,
  hasMeaningfulScroll,
  markBookRead,
  markBookUnread,
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

function computeReachedConceptos(
  ids: string[],
  stored: ReturnType<typeof readReadingPosition>,
  sectionId: string,
): boolean {
  if (stored?.manualUnread) return false

  const furthestSectionId = getFurthestSectionId(ids, stored?.furthestSectionId)
  return (
    stored?.reachedConceptos === true ||
    hasReachedCompleteSectionByProgress(ids, furthestSectionId) ||
    hasReachedCompleteSectionByProgress(ids, sectionId)
  )
}

function resolveReadState(
  ids: string[],
  stored: ReturnType<typeof readReadingPosition>,
  sectionId: string,
  furthestSectionId: string,
) {
  let manualUnread = stored?.manualUnread === true
  let unreadBelowConceptos = stored?.unreadBelowConceptos === true
  let reachedConceptos = false

  if (manualUnread) {
    const conceptosIndex = ids.indexOf(READ_COMPLETE_FROM_SECTION)
    const furthestIndex = ids.indexOf(furthestSectionId)

    if (conceptosIndex >= 0 && furthestIndex >= 0 && furthestIndex < conceptosIndex) {
      unreadBelowConceptos = true
    }

    if (unreadBelowConceptos && hasReachedCompleteSectionByProgress(ids, furthestSectionId)) {
      manualUnread = false
      unreadBelowConceptos = false
      reachedConceptos = true
    }
  } else {
    reachedConceptos = computeReachedConceptos(ids, stored, sectionId)
  }

  return { manualUnread, unreadBelowConceptos, reachedConceptos }
}

export function useReadingPosition(
  slug: MaybeRef<string>,
  sectionIds: MaybeRef<string[]>,
  sectionLabels: MaybeRef<Record<string, string>>,
) {
  const isMarkedRead = ref(false)
  const bookJustCompleted = ref(false)

  let saveTimer: ReturnType<typeof setTimeout> | null = null
  let restoring = false
  let initialPersistDone = false
  let sessionStartedAsRead = false
  let lastSavedScrollY = -1
  let lastSavedSectionId = ''
  let lastSavedReachedConceptos = false

  function celebrateReadCompletion() {
    bookJustCompleted.value = true
    sessionStartedAsRead = true
  }

  function persist(sectionId: string, scrollY: number) {
    if (restoring) return

    const ids = toValue(sectionIds)
    const bookSlug = toValue(slug)
    const stored = readReadingPosition(bookSlug)
    const furthestSectionId = getFurthestSectionId(ids, stored?.furthestSectionId)
    const { manualUnread, unreadBelowConceptos, reachedConceptos } = resolveReadState(
      ids,
      stored,
      sectionId,
      furthestSectionId,
    )

    if (
      sectionId === lastSavedSectionId &&
      Math.abs(scrollY - lastSavedScrollY) < 8 &&
      reachedConceptos === lastSavedReachedConceptos
    ) {
      return
    }

    if (
      initialPersistDone &&
      !sessionStartedAsRead &&
      !lastSavedReachedConceptos &&
      reachedConceptos
    ) {
      celebrateReadCompletion()
    }

    isMarkedRead.value = reachedConceptos
    lastSavedSectionId = sectionId
    lastSavedScrollY = scrollY
    lastSavedReachedConceptos = reachedConceptos

    const labels = toValue(sectionLabels)
    const savedSectionId = hasMeaningfulScroll(scrollY) ? sectionId : ''
    const savedSectionLabel = savedSectionId ? (labels[sectionId] ?? sectionId) : ''

    writeReadingPosition(bookSlug, {
      sectionId: savedSectionId,
      sectionLabel: savedSectionLabel,
      scrollY,
      progress: computeScrollProgress(),
      updatedAt: Date.now(),
      furthestSectionId,
      reachedConceptos,
      manualUnread,
      unreadBelowConceptos,
    })

    const hash = savedSectionId ? `#${savedSectionId}` : ''
    const url = `${window.location.pathname}${window.location.search}${hash}`
    if (window.location.hash !== hash) {
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

  function clearLocationHash() {
    if (!window.location.hash) return
    history.replaceState(
      history.state,
      '',
      `${window.location.pathname}${window.location.search}`,
    )
  }

  function restore() {
    const ids = toValue(sectionIds)
    const bookSlug = toValue(slug)
    const stored = readReadingPosition(bookSlug)
    const hashId = window.location.hash.replace(/^#/, '')
    const hashValid = Boolean(hashId && ids.includes(hashId))

    const savedScrollY = stored?.scrollY ?? 0
    const hasSavedScroll = hasMeaningfulScroll(savedScrollY)

    if (!stored && !hashValid) return

    restoring = true
    const html = document.documentElement
    const prevBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    if (hasSavedScroll) {
      window.scrollTo(0, savedScrollY)
      const sectionFromStore = stored?.sectionId ?? ''
      if (sectionFromStore) {
        const hash = `#${sectionFromStore}`
        if (window.location.hash !== hash) {
          history.replaceState(
            history.state,
            '',
            `${window.location.pathname}${window.location.search}${hash}`,
          )
        }
      }
    } else if (hashValid) {
      document.getElementById(hashId)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
      clearLocationHash()
    }

    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevBehavior
      restoring = false
      saveNow()
    })

    return hasSavedScroll ? savedScrollY : undefined
  }

  onMounted(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const bookSlug = toValue(slug)
    const ids = toValue(sectionIds)
    const stored = readReadingPosition(bookSlug)
    const startedRead = computeReachedConceptos(ids, stored, stored?.sectionId ?? '')
    sessionStartedAsRead = startedRead
    isMarkedRead.value = startedRead
    lastSavedReachedConceptos = startedRead

    requestAnimationFrame(() => {
      const restoredY = restore()
      if (restoredY && hasMeaningfulScroll(restoredY) && document.fonts) {
        document.fonts.ready.then(() => {
          window.scrollTo(0, restoredY)
        })
      }

      requestAnimationFrame(() => {
        initialPersistDone = true
        saveNow()
      })
    })

    window.addEventListener('scroll', debouncedSave, { passive: true })
    window.addEventListener('pagehide', saveNow)
    document.addEventListener('visibilitychange', onVisibilityChange)
  })

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') saveNow()
  }

  function markRead() {
    const wasRead = isMarkedRead.value
    const ids = toValue(sectionIds)
    const bookSlug = toValue(slug)
    const labels = toValue(sectionLabels)
    const stored = readReadingPosition(bookSlug)
    const sectionId = stored?.sectionId || getCurrentSectionId(ids) || ids[0] || ''
    const completeIndex = ids.indexOf(READ_COMPLETE_FROM_SECTION)
    let furthestSectionId = stored?.furthestSectionId ?? sectionId

    if (completeIndex >= 0) {
      const furthestIndex = ids.indexOf(furthestSectionId)
      if (furthestIndex < completeIndex) {
        furthestSectionId = READ_COMPLETE_FROM_SECTION
      }
    }

    markBookRead(bookSlug, {
      sectionId,
      sectionLabel: labels[sectionId] ?? sectionId,
      scrollY: stored?.scrollY ?? window.scrollY,
      progress: stored?.progress ?? computeScrollProgress(),
      furthestSectionId,
    })

    lastSavedReachedConceptos = true
    isMarkedRead.value = true

    if (!wasRead && initialPersistDone) {
      celebrateReadCompletion()
    } else if (!wasRead) {
      sessionStartedAsRead = true
    }
  }

  function markUnread() {
    const bookSlug = toValue(slug)
    if (!markBookUnread(bookSlug)) return

    sessionStartedAsRead = false
    lastSavedReachedConceptos = false
    isMarkedRead.value = false
    bookJustCompleted.value = false
  }

  function toggleMarkedRead() {
    if (isMarkedRead.value) markUnread()
    else markRead()
  }

  onUnmounted(() => {
    if (saveTimer) clearTimeout(saveTimer)
    window.removeEventListener('scroll', debouncedSave)
    window.removeEventListener('pagehide', saveNow)
    document.removeEventListener('visibilitychange', onVisibilityChange)
  })

  return { isMarkedRead, bookJustCompleted, toggleMarkedRead }
}
