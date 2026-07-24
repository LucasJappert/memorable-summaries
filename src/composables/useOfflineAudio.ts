import { computed, onMounted, ref, type Ref } from 'vue'
import { audioUrl } from '../utils/audioUrl'

/** Debe coincidir con workbox runtimeCaching en vite.config.ts */
export const AUDIO_OFFLINE_CACHE = 'audio-offline'

/** En local: no descarga el MP3; solo simula estados UI (spinner → guardado). */
const MOCK_OFFLINE_UI = import.meta.env.DEV
const MOCK_DOWNLOAD_MS = 900

const INDEX_KEY = 'memorable-summaries:audio-offline-index'

const cachedSlugs = ref<Set<string>>(new Set())
const downloading = ref<Set<string>>(new Set())
const ready = ref(false)
let initPromise: Promise<void> | null = null

function readIndex(): string[] {
  try {
    const raw = localStorage.getItem(INDEX_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((s): s is string => typeof s === 'string' && s.length > 0)
  } catch {
    return []
  }
}

function writeIndex(slugs: Iterable<string>) {
  const list = [...slugs].sort()
  localStorage.setItem(INDEX_KEY, JSON.stringify(list))
}

function slugFromRequestUrl(requestUrl: string): string | null {
  try {
    const path = new URL(requestUrl, location.origin).pathname
    const m = path.match(/\/audio\/([^/?]+)\.mp3$/i)
    return m?.[1] ?? null
  } catch {
    return null
  }
}

async function openAudioCache(): Promise<Cache | null> {
  if (!('caches' in globalThis)) return null
  try {
    return await caches.open(AUDIO_OFFLINE_CACHE)
  } catch {
    return null
  }
}

async function syncFromCache(): Promise<void> {
  // Dev mock: el índice localStorage es la fuente de verdad (sin Cache API / SW).
  if (MOCK_OFFLINE_UI) {
    cachedSlugs.value = new Set(readIndex())
    ready.value = true
    return
  }

  const cache = await openAudioCache()
  if (!cache) {
    cachedSlugs.value = new Set(readIndex())
    ready.value = true
    return
  }

  const keys = await cache.keys()
  const next = new Set<string>()
  for (const req of keys) {
    const slug = slugFromRequestUrl(req.url)
    if (slug) next.add(slug)
  }

  // Si el cache está vacío pero el índice local tiene entradas (p. ej. SW nuevo),
  // preferimos el cache real; si el cache tiene datos, es la fuente de verdad.
  if (next.size === 0) {
    const indexed = readIndex()
    for (const slug of indexed) {
      const url = audioUrl(slug)
      const hit = await cache.match(url)
      if (hit) next.add(slug)
    }
  }

  cachedSlugs.value = next
  writeIndex(next)
  ready.value = true
}

function ensureInit(): Promise<void> {
  if (!initPromise) {
    initPromise = syncFromCache().catch(() => {
      cachedSlugs.value = new Set(readIndex())
      ready.value = true
    })
  }
  return initPromise
}

function markCached(slug: string, on: boolean) {
  const next = new Set(cachedSlugs.value)
  if (on) next.add(slug)
  else next.delete(slug)
  cachedSlugs.value = next
  writeIndex(next)
}

function markDownloading(slug: string, on: boolean) {
  const next = new Set(downloading.value)
  if (on) next.add(slug)
  else next.delete(slug)
  downloading.value = next
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export async function downloadOfflineAudio(slug: string): Promise<void> {
  await ensureInit()
  if (!slug || downloading.value.has(slug) || cachedSlugs.value.has(slug)) return

  markDownloading(slug, true)
  try {
    if (MOCK_OFFLINE_UI) {
      await sleep(MOCK_DOWNLOAD_MS)
      markCached(slug, true)
      return
    }

    const cache = await openAudioCache()
    if (!cache) throw new Error('Cache API no disponible')

    const url = audioUrl(slug)
    const existing = await cache.match(url)
    if (existing) {
      markCached(slug, true)
      return
    }
    const response = await fetch(url, { credentials: 'same-origin', mode: 'cors' })
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    // Clonar: el body solo se puede consumir una vez
    await cache.put(url, response.clone())
    markCached(slug, true)
  } finally {
    markDownloading(slug, false)
  }
}

export async function removeOfflineAudio(slug: string): Promise<void> {
  await ensureInit()
  if (!MOCK_OFFLINE_UI) {
    const cache = await openAudioCache()
    if (cache) {
      await cache.delete(audioUrl(slug))
    }
  }
  markCached(slug, false)
}

export async function toggleOfflineAudio(slug: string): Promise<'saved' | 'removed'> {
  await ensureInit()
  if (cachedSlugs.value.has(slug)) {
    await removeOfflineAudio(slug)
    return 'removed'
  }
  await downloadOfflineAudio(slug)
  return 'saved'
}

export function isOfflineAudioCached(slug: string): boolean {
  return cachedSlugs.value.has(slug)
}

export function isOfflineAudioDownloading(slug: string): boolean {
  return downloading.value.has(slug)
}

/**
 * Estado reactivo de audio offline para un slug (o el set global).
 * Usar en componentes; llama a init en onMounted.
 */
export function useOfflineAudio(slug?: Ref<string> | (() => string)) {
  onMounted(() => {
    void ensureInit()
  })

  const resolveSlug = (): string => {
    if (!slug) return ''
    return typeof slug === 'function' ? slug() : slug.value
  }

  const isCached = computed(() => {
    const s = resolveSlug()
    return s ? cachedSlugs.value.has(s) : false
  })

  const isDownloading = computed(() => {
    const s = resolveSlug()
    return s ? downloading.value.has(s) : false
  })

  return {
    ready,
    cachedSlugs,
    downloading,
    isCached,
    isDownloading,
    download: downloadOfflineAudio,
    remove: removeOfflineAudio,
    toggle: toggleOfflineAudio,
    refresh: syncFromCache,
    isOfflineAudioCached,
    isOfflineAudioDownloading,
    mockUi: MOCK_OFFLINE_UI,
  }
}
