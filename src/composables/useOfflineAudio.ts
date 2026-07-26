import { computed, onMounted, ref, type Ref } from 'vue'
import { audioUrl } from '../utils/audioUrl'

/** Debe coincidir con workbox runtimeCaching en vite.config.ts */
export const AUDIO_OFFLINE_CACHE = 'audio-offline'

/** En local: no descarga el MP3; solo simula estados UI (spinner → guardado). */
const MOCK_OFFLINE_UI = import.meta.env.DEV
const MOCK_DOWNLOAD_MS = 1200
/** Tamaño ficticio en mock (~18 MB) para probar labels. */
const MOCK_BYTES = 18_500_000

const INDEX_KEY = 'memorable-summaries:audio-offline-index'
const SIZES_KEY = 'memorable-summaries:audio-offline-sizes'

const cachedSlugs = ref<Set<string>>(new Set())
const downloading = ref<Set<string>>(new Set())
/** 0–100 mientras descarga; se limpia al terminar. */
const downloadProgress = ref<Record<string, number>>({})
/** Bytes conocidos (caché o HEAD); clave = slug. */
const audioBytesBySlug = ref<Record<string, number>>({})
const ready = ref(false)
let initPromise: Promise<void> | null = null
const sizePrefetchInFlight = new Set<string>()

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

function readSizes(): Record<string, number> {
  try {
    const raw = localStorage.getItem(SIZES_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    const out: Record<string, number> = {}
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof v === 'number' && Number.isFinite(v) && v > 0) out[k] = Math.round(v)
    }
    return out
  } catch {
    return {}
  }
}

function writeSizes(map: Record<string, number>) {
  localStorage.setItem(SIZES_KEY, JSON.stringify(map))
}

function setKnownBytes(slug: string, bytes: number) {
  if (!slug || !(bytes > 0)) return
  const next = { ...audioBytesBySlug.value, [slug]: Math.round(bytes) }
  audioBytesBySlug.value = next
  writeSizes(next)
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

async function blobSizeFromResponse(response: Response): Promise<number | null> {
  const header = Number(response.headers.get('content-length'))
  if (Number.isFinite(header) && header > 0) return header
  try {
    const blob = await response.clone().blob()
    return blob.size > 0 ? blob.size : null
  } catch {
    return null
  }
}

async function syncFromCache(): Promise<void> {
  audioBytesBySlug.value = { ...readSizes(), ...audioBytesBySlug.value }

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

  if (next.size === 0) {
    const indexed = readIndex()
    for (const slug of indexed) {
      const url = audioUrl(slug)
      const hit = await cache.match(url)
      if (hit) next.add(slug)
    }
  }

  for (const slug of next) {
    if (audioBytesBySlug.value[slug]) continue
    try {
      const hit = await cache.match(audioUrl(slug))
      if (!hit) continue
      const size = await blobSizeFromResponse(hit)
      if (size) setKnownBytes(slug, size)
    } catch {
      /* ignore */
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
      audioBytesBySlug.value = readSizes()
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
  if (!on) {
    const { [slug]: _, ...rest } = downloadProgress.value
    downloadProgress.value = rest
  }
}

function setProgress(slug: string, pct: number) {
  downloadProgress.value = {
    ...downloadProgress.value,
    [slug]: Math.max(0, Math.min(100, Math.round(pct))),
  }
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export function formatAudioBytes(bytes: number | null | undefined): string | null {
  if (bytes == null || !(bytes > 0)) return null
  const mb = bytes / (1024 * 1024)
  if (mb >= 10) return `${Math.round(mb)} MB`
  if (mb >= 1) return `${mb.toFixed(1).replace(/\.0$/, '')} MB`
  const kb = bytes / 1024
  return `${Math.max(1, Math.round(kb))} KB`
}

export function getOfflineAudioBytes(slug: string): number | undefined {
  const n = audioBytesBySlug.value[slug]
  return n > 0 ? n : undefined
}

export function getOfflineDownloadProgress(slug: string): number {
  return downloadProgress.value[slug] ?? 0
}

/**
 * HEAD (o match en caché) para conocer el tamaño antes de descargar.
 * Idempotente; no bloquea la UI si falla.
 */
export async function prefetchOfflineAudioSize(slug: string): Promise<number | undefined> {
  await ensureInit()
  if (!slug) return undefined
  const known = getOfflineAudioBytes(slug)
  if (known) return known
  if (MOCK_OFFLINE_UI) {
    setKnownBytes(slug, MOCK_BYTES)
    return MOCK_BYTES
  }
  if (sizePrefetchInFlight.has(slug)) return getOfflineAudioBytes(slug)
  sizePrefetchInFlight.add(slug)
  try {
    const cache = await openAudioCache()
    if (cache) {
      const hit = await cache.match(audioUrl(slug))
      if (hit) {
        const size = await blobSizeFromResponse(hit)
        if (size) {
          setKnownBytes(slug, size)
          return size
        }
      }
    }
    const res = await fetch(audioUrl(slug), {
      method: 'HEAD',
      credentials: 'same-origin',
      mode: 'cors',
    })
    if (!res.ok) return undefined
    const len = Number(res.headers.get('content-length'))
    if (Number.isFinite(len) && len > 0) {
      setKnownBytes(slug, len)
      return len
    }
  } catch {
    /* ignore */
  } finally {
    sizePrefetchInFlight.delete(slug)
  }
  return getOfflineAudioBytes(slug)
}

async function fetchResponseWithProgress(
  url: string,
  onProgress: (pct: number) => void,
): Promise<{ response: Response; bytes: number }> {
  const response = await fetch(url, { credentials: 'same-origin', mode: 'cors' })
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  const total = Number(response.headers.get('content-length'))
  if (!response.body || !Number.isFinite(total) || total <= 0) {
    const blob = await response.blob()
    onProgress(100)
    return {
      response: new Response(blob, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      }),
      bytes: blob.size,
    }
  }

  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let received = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) {
      chunks.push(value)
      received += value.byteLength
      onProgress(Math.min(99, (received / total) * 100))
    }
  }
  onProgress(100)
  const blob = new Blob(chunks as BlobPart[], {
    type: response.headers.get('content-type') || 'audio/mpeg',
  })
  const headers = new Headers(response.headers)
  if (!headers.has('content-length')) {
    headers.set('content-length', String(blob.size))
  }
  return {
    response: new Response(blob, {
      status: response.status,
      statusText: response.statusText,
      headers,
    }),
    bytes: blob.size,
  }
}

export async function downloadOfflineAudio(slug: string): Promise<void> {
  await ensureInit()
  if (!slug || downloading.value.has(slug) || cachedSlugs.value.has(slug)) return

  markDownloading(slug, true)
  setProgress(slug, 0)
  try {
    if (MOCK_OFFLINE_UI) {
      const steps = 12
      for (let i = 1; i <= steps; i += 1) {
        setProgress(slug, (i / steps) * 100)
        await sleep(MOCK_DOWNLOAD_MS / steps)
      }
      setKnownBytes(slug, getOfflineAudioBytes(slug) ?? MOCK_BYTES)
      markCached(slug, true)
      return
    }

    const cache = await openAudioCache()
    if (!cache) throw new Error('Cache API no disponible')

    const url = audioUrl(slug)
    const existing = await cache.match(url)
    if (existing) {
      const size = await blobSizeFromResponse(existing)
      if (size) setKnownBytes(slug, size)
      markCached(slug, true)
      setProgress(slug, 100)
      return
    }

    const { response, bytes } = await fetchResponseWithProgress(url, (pct) => {
      setProgress(slug, pct)
    })
    await cache.put(url, response)
    if (bytes > 0) setKnownBytes(slug, bytes)
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
  // Conservamos el tamaño conocido para el label "Descargar · 19 MB"
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

  const progress = computed(() => {
    const s = resolveSlug()
    return s ? (downloadProgress.value[s] ?? 0) : 0
  })

  const bytes = computed(() => {
    const s = resolveSlug()
    // depend on map
    audioBytesBySlug.value
    return s ? getOfflineAudioBytes(s) : undefined
  })

  const sizeLabel = computed(() => formatAudioBytes(bytes.value))

  return {
    ready,
    cachedSlugs,
    downloading,
    downloadProgress,
    audioBytesBySlug,
    isCached,
    isDownloading,
    progress,
    bytes,
    sizeLabel,
    download: downloadOfflineAudio,
    remove: removeOfflineAudio,
    toggle: toggleOfflineAudio,
    refresh: syncFromCache,
    prefetchSize: prefetchOfflineAudioSize,
    formatBytes: formatAudioBytes,
    getBytes: getOfflineAudioBytes,
    getProgress: getOfflineDownloadProgress,
    isOfflineAudioCached,
    isOfflineAudioDownloading,
    mockUi: MOCK_OFFLINE_UI,
  }
}
