import { computed, ref, watch } from 'vue'
import { bookCatalog } from '../books/catalog'
import { bookHasAudio } from '../books/audio-catalog'
import { readAudioQueue, writeAudioQueue } from '../reading/audio-queue-storage'
import {
  readAudioStats,
  recordAudioCompletion,
  setMarkedListened,
  type AudioListenStats,
} from '../reading/audio-stats-storage'
import { readingRevision } from '../reading/revision'

const items = ref<string[]>([])
const currentIndex = ref(-1)
/** Panel del reproductor (mini/expanded) visible */
const playerVisible = ref(false)
/** Sheet de cola abierta */
const queueSheetOpen = ref(false)
/** Pedir autoplay al cargar el track actual */
const autoplayPending = ref(false)
/** Estado de reproducción reportado por AudioPlayer */
const isPlaying = ref(false)
/** Pedir pause remoto al player */
const pausePending = ref(false)
/** Pedir resume/play remoto al player (sin cambiar de track) */
const resumePending = ref(false)
/** Pedir seek a 0 (prev inteligente estilo YTM) */
const seekZeroPending = ref(false)
/** Pedir seek a un tiempo absoluto (segundos) */
const seekToPending = ref<number | null>(null)
/** Token para re-disparar el mismo seek */
const seekToToken = ref(0)
/** Mini vs panel expandido */
const playerExpanded = ref(false)
/** Progreso del track actual (para prev inteligente y UI) */
const trackProgress = ref({ currentTime: 0, duration: 0, progress: 0 })

export interface QueueUndoState {
  slug: string
  index: number
  title: string
}

const undoState = ref<QueueUndoState | null>(null)
let undoTimer: ReturnType<typeof setTimeout> | null = null

let hydrated = false

function allAudioSlugsInOrder(): string[] {
  return bookCatalog
    .filter((book) => bookHasAudio(book.slug))
    .sort((a, b) => (a.readingOrder ?? 9999) - (b.readingOrder ?? 9999))
    .map((book) => book.slug)
}

/**
 * Rota los items antes de `index` al final, dejando ese track como actual (índice 0).
 * Así “A continuación” lista el resto de la cola (cíclica).
 */
function rotatePrecedingToEnd(index: number) {
  if (index < 0 || index >= items.value.length) return
  if (index > 0) {
    const preceding = items.value.splice(0, index)
    items.value.push(...preceding)
  }
  currentIndex.value = 0
}

function hydrate() {
  if (hydrated) return
  hydrated = true
  const q = readAudioQueue()
  items.value = q.items.filter(bookHasAudio)
  currentIndex.value =
    items.value.length === 0
      ? -1
      : Math.min(Math.max(q.currentIndex, 0), items.value.length - 1)
  // La UI de “A continuación” solo lista lo posterior al actual: dejarlo al frente.
  if (currentIndex.value > 0) {
    rotatePrecedingToEnd(currentIndex.value)
    writeAudioQueue({
      items: items.value.slice(),
      currentIndex: currentIndex.value,
      updatedAt: Date.now(),
      playerVisible: q.playerVisible,
      playerExpanded: q.playerExpanded,
      queueSheetOpen: q.queueSheetOpen,
    })
  }
  if (items.value.length > 0) {
    playerVisible.value = q.playerVisible
    playerExpanded.value = q.playerExpanded
    queueSheetOpen.value = q.queueSheetOpen
  }
}

function persist() {
  writeAudioQueue({
    items: items.value.slice(),
    currentIndex: currentIndex.value,
    updatedAt: Date.now(),
    playerVisible: playerVisible.value,
    playerExpanded: playerExpanded.value,
    queueSheetOpen: queueSheetOpen.value,
  })
}

watch([playerVisible, playerExpanded, queueSheetOpen], () => {
  if (!hydrated) return
  persist()
})

const currentSlug = computed(() => {
  hydrate()
  const idx = currentIndex.value
  if (idx < 0 || idx >= items.value.length) return null
  return items.value[idx] ?? null
})

const queueLength = computed(() => {
  hydrate()
  return items.value.length
})

function isInQueue(slug: string): boolean {
  hydrate()
  return items.value.includes(slug)
}

/** Agrega al final de la cola (si ya está, no duplica). */
function add(slug: string): boolean {
  hydrate()
  if (!bookHasAudio(slug)) return false
  if (items.value.includes(slug)) {
    playerVisible.value = true
    return false
  }
  items.value.push(slug)
  if (currentIndex.value < 0) currentIndex.value = 0
  persist()
  playerVisible.value = true
  return true
}

/** Mueve al final, o agrega si no estaba. */
function moveToEnd(slug: string): boolean {
  hydrate()
  if (!bookHasAudio(slug)) return false
  const existing = items.value.indexOf(slug)
  if (existing < 0) return add(slug)
  if (existing === items.value.length - 1) {
    playerVisible.value = true
    return false
  }
  const [item] = items.value.splice(existing, 1)
  if (!item) return false
  items.value.push(item)
  if (existing === currentIndex.value) currentIndex.value = items.value.length - 1
  else if (existing < currentIndex.value) currentIndex.value -= 1
  persist()
  playerVisible.value = true
  return true
}

/** Inserta justo después del track actual (= próximo a escuchar). */
function addNext(slug: string): boolean {
  hydrate()
  if (!bookHasAudio(slug)) return false

  const existing = items.value.indexOf(slug)
  if (existing >= 0 && existing === currentIndex.value) {
    playerVisible.value = true
    return false
  }

  let insertAt = currentIndex.value < 0 ? 0 : currentIndex.value + 1

  if (existing >= 0) {
    items.value.splice(existing, 1)
    if (existing < insertAt) insertAt -= 1
    if (existing < currentIndex.value) currentIndex.value -= 1
  }

  items.value.splice(insertAt, 0, slug)
  if (currentIndex.value < 0) currentIndex.value = 0
  persist()
  playerVisible.value = true
  return true
}

function addMany(slugs: string[]) {
  for (const slug of slugs) add(slug)
}

function missingAudioSlugs(): string[] {
  hydrate()
  const inQueue = new Set(items.value)
  return allAudioSlugsInOrder().filter((slug) => !inQueue.has(slug))
}

const missingAudioCount = computed(() => {
  hydrate()
  const inQueue = new Set(items.value)
  return allAudioSlugsInOrder().filter((slug) => !inQueue.has(slug)).length
})

/** Agrega al final todos los libros con audio que falten (no reinicia el track actual). */
function enqueueAllWithAudio(): number {
  hydrate()
  const missing = missingAudioSlugs()
  if (!missing.length) {
    if (items.value.length > 0) playerVisible.value = true
    return 0
  }
  items.value.push(...missing)
  if (currentIndex.value < 0) currentIndex.value = 0
  persist()
  playerVisible.value = true
  return missing.length
}

/** Reemplaza la cola por todos los libros con audio (orden de lectura). */
function seedAllWithAudio() {
  hydrate()
  const slugs = allAudioSlugsInOrder()
  items.value = slugs.slice()
  currentIndex.value = slugs.length ? 0 : -1
  persist()
  if (slugs.length) playerVisible.value = true
}

function clearUndoTimer() {
  if (undoTimer) {
    clearTimeout(undoTimer)
    undoTimer = null
  }
}

function dismissUndo() {
  clearUndoTimer()
  undoState.value = null
}

function removeAt(index: number, opts?: { undoTitle?: string; withUndo?: boolean }) {
  hydrate()
  if (index < 0 || index >= items.value.length) return
  const slug = items.value[index]
  if (!slug) return

  const wasCurrent = index === currentIndex.value
  items.value.splice(index, 1)

  if (items.value.length === 0) {
    currentIndex.value = -1
    autoplayPending.value = false
  } else if (wasCurrent) {
    currentIndex.value = Math.min(index, items.value.length - 1)
    if (currentIndex.value > 0) rotatePrecedingToEnd(currentIndex.value)
  } else if (index < currentIndex.value) {
    currentIndex.value -= 1
  }
  persist()

  if (opts?.withUndo) {
    clearUndoTimer()
    undoState.value = {
      slug,
      index,
      title: opts.undoTitle ?? slug,
    }
    undoTimer = setTimeout(() => {
      undoState.value = null
      undoTimer = null
    }, 3000)
  }
}

function undoRemove() {
  const pending = undoState.value
  if (!pending) return
  hydrate()
  const insertAt = Math.min(Math.max(pending.index, 0), items.value.length)
  if (!items.value.includes(pending.slug)) {
    items.value.splice(insertAt, 0, pending.slug)
    if (currentIndex.value < 0) currentIndex.value = insertAt
    else if (insertAt <= currentIndex.value) currentIndex.value += 1
    persist()
  }
  dismissUndo()
}

function remove(slug: string) {
  hydrate()
  const idx = items.value.indexOf(slug)
  if (idx >= 0) removeAt(idx)
}

function reorder(from: number, to: number) {
  hydrate()
  if (
    from === to ||
    from < 0 ||
    to < 0 ||
    from >= items.value.length ||
    to >= items.value.length
  ) {
    return
  }
  const [slug] = items.value.splice(from, 1)
  if (!slug) return
  items.value.splice(to, 0, slug)
  if (currentIndex.value === from) currentIndex.value = to
  else if (from < currentIndex.value && to >= currentIndex.value) currentIndex.value -= 1
  else if (from > currentIndex.value && to <= currentIndex.value) currentIndex.value += 1
  persist()
}

function clear() {
  hydrate()
  items.value = []
  currentIndex.value = -1
  autoplayPending.value = false
  isPlaying.value = false
  pausePending.value = true
  resumePending.value = false
  playerExpanded.value = false
  dismissUndo()
  persist()
}

/** Reproduce slug (lo agrega a la cola si falta) o el track actual. */
function play(slug?: string) {
  hydrate()
  if (slug) {
    if (!bookHasAudio(slug)) return
    let idx = items.value.indexOf(slug)
    if (idx < 0) {
      items.value.push(slug)
      idx = items.value.length - 1
    }
    rotatePrecedingToEnd(idx)
  } else if (currentIndex.value < 0 && items.value.length > 0) {
    currentIndex.value = 0
  }
  if (currentIndex.value < 0) return
  persist()
  playerVisible.value = true
  autoplayPending.value = true
}

function playAt(index: number) {
  hydrate()
  if (index < 0 || index >= items.value.length) return
  rotatePrecedingToEnd(index)
  persist()
  autoplayPending.value = true
  pausePending.value = false
  resumePending.value = false
  playerVisible.value = true
}

/** Fila actual: pause/resume; otra fila: play. */
function togglePlayAt(index: number) {
  hydrate()
  if (index < 0 || index >= items.value.length) return
  if (index === currentIndex.value) {
    if (isPlaying.value) pause()
    else resume()
    return
  }
  playAt(index)
}

function reportPlaying(playing: boolean) {
  isPlaying.value = playing
}

function reportProgress(currentTime: number, duration: number) {
  const progress =
    duration > 0 && Number.isFinite(duration)
      ? Math.min(100, Math.max(0, (currentTime / duration) * 100))
      : 0
  trackProgress.value = { currentTime, duration, progress }
}

function pause() {
  pausePending.value = true
  resumePending.value = false
  isPlaying.value = false
}

function resume() {
  hydrate()
  resumePending.value = true
  pausePending.value = false
}

function consumePause(): boolean {
  if (!pausePending.value) return false
  pausePending.value = false
  return true
}

function consumeResume(): boolean {
  if (!resumePending.value) return false
  resumePending.value = false
  return true
}

function consumeSeekZero(): boolean {
  if (!seekZeroPending.value) return false
  seekZeroPending.value = false
  return true
}

/** Seek absoluto en segundos (barra / ±10s). */
function seekTo(seconds: number) {
  const duration = trackProgress.value.duration
  const max = duration > 0 && Number.isFinite(duration) ? duration : Number.POSITIVE_INFINITY
  const next = Math.min(Math.max(seconds, 0), max)
  seekToPending.value = next
  seekToToken.value += 1
  trackProgress.value = {
    currentTime: next,
    duration: trackProgress.value.duration,
    progress:
      trackProgress.value.duration > 0
        ? Math.min(100, Math.max(0, (next / trackProgress.value.duration) * 100))
        : 0,
  }
}

function seekBy(deltaSeconds: number) {
  seekTo(trackProgress.value.currentTime + deltaSeconds)
}

function consumeSeekTo(): number | null {
  const value = seekToPending.value
  if (value === null) return null
  seekToPending.value = null
  return value
}

function playNext() {
  hydrate()
  if (currentIndex.value < 0 || items.value.length === 0) return

  if (items.value.length === 1) {
    seekZeroPending.value = true
    autoplayPending.value = true
    pausePending.value = false
    resumePending.value = false
    return
  }

  // Actual al frente → al final; el siguiente queda en 0 (lista completa en “A continuación”).
  if (currentIndex.value > 0) rotatePrecedingToEnd(currentIndex.value)
  const [item] = items.value.splice(0, 1)
  if (!item) return
  items.value.push(item)
  currentIndex.value = 0
  persist()
  autoplayPending.value = true
  pausePending.value = false
  resumePending.value = false
}

function playPrev() {
  hydrate()
  if (currentIndex.value < 0 || items.value.length === 0) return

  if (items.value.length === 1) {
    seekZeroPending.value = true
    resumePending.value = true
    pausePending.value = false
    return
  }

  if (currentIndex.value > 0) rotatePrecedingToEnd(currentIndex.value)
  const last = items.value.pop()
  if (!last) return
  items.value.unshift(last)
  currentIndex.value = 0
  persist()
  autoplayPending.value = true
  pausePending.value = false
  resumePending.value = false
}

/** YTM: si >3s, seek 0; si no, track anterior. */
function playPrevSmart() {
  hydrate()
  if (trackProgress.value.currentTime > 3) {
    seekZeroPending.value = true
    resumePending.value = true
    pausePending.value = false
    return
  }
  playPrev()
}

function expandPlayer() {
  playerExpanded.value = true
  playerVisible.value = true
}

function collapsePlayer() {
  playerExpanded.value = false
}

function togglePlayerExpanded() {
  if (playerExpanded.value) collapsePlayer()
  else expandPlayer()
}

function onTrackEnded() {
  const slug = currentSlug.value
  if (slug) recordAudioCompletion(slug)
  // Mueve el terminado al final y sigue con el siguiente (cola cíclica).
  playNext()
}

function showPlayer() {
  hydrate()
  playerVisible.value = true
}

function hidePlayer() {
  playerVisible.value = false
  queueSheetOpen.value = false
  playerExpanded.value = false
  pause()
}

function togglePlayer() {
  hydrate()
  if (playerVisible.value) hidePlayer()
  else showPlayer()
}

function openQueueSheet() {
  hydrate()
  if (currentIndex.value > 0) {
    rotatePrecedingToEnd(currentIndex.value)
    persist()
  }
  queueSheetOpen.value = true
  /* No abrir el mini-player: la cola trae su propio transport */
}

function closeQueueSheet() {
  queueSheetOpen.value = false
  /* No revelar el mini-player al cerrar la cola: el audio sigue en background */
  playerVisible.value = false
  playerExpanded.value = false
}

function toggleQueueSheet() {
  if (queueSheetOpen.value) closeQueueSheet()
  else openQueueSheet()
}

function consumeAutoplay(): boolean {
  if (!autoplayPending.value) return false
  autoplayPending.value = false
  return true
}

function statsFor(slug: string): AudioListenStats {
  readingRevision.value
  return readAudioStats(slug)
}

function toggleMarked(slug: string) {
  const prev = readAudioStats(slug)
  setMarkedListened(slug, !prev.markedListened)
}

function ensureBookInQueueAndShow(slug: string) {
  hydrate()
  if (!bookHasAudio(slug)) return
  if (!items.value.includes(slug)) {
    items.value.push(slug)
    if (currentIndex.value < 0) currentIndex.value = items.value.length - 1
    persist()
  }
  playerVisible.value = true
}

hydrate()

export function useAudioQueue() {
  hydrate()
  return {
    items,
    currentIndex,
    currentSlug,
    queueLength,
    playerVisible,
    queueSheetOpen,
    autoplayPending,
    isPlaying,
    pausePending,
    resumePending,
    seekZeroPending,
    seekToPending,
    seekToToken,
    playerExpanded,
    trackProgress,
    undoState,
    missingAudioCount,
    isInQueue,
    add,
    addNext,
    moveToEnd,
    addMany,
    enqueueAllWithAudio,
    seedAllWithAudio,
    remove,
    removeAt,
    undoRemove,
    dismissUndo,
    reorder,
    clear,
    play,
    playAt,
    togglePlayAt,
    pause,
    resume,
    reportPlaying,
    reportProgress,
    seekTo,
    seekBy,
    playNext,
    playPrev,
    playPrevSmart,
    onTrackEnded,
    showPlayer,
    hidePlayer,
    togglePlayer,
    expandPlayer,
    collapsePlayer,
    togglePlayerExpanded,
    openQueueSheet,
    closeQueueSheet,
    toggleQueueSheet,
    consumeAutoplay,
    consumePause,
    consumeResume,
    consumeSeekZero,
    consumeSeekTo,
    statsFor,
    toggleMarked,
    ensureBookInQueueAndShow,
  }
}
