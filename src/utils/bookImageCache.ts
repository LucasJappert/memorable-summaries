/**
 * Runtime Cache Storage for covers / art / og-home.
 * Debe coincidir con `cacheName` en vite.config.ts (workbox runtimeCaching).
 * Al bump de versión (book-images-v2), actualizar también acá.
 */
export const BOOK_IMAGES_CACHE = 'book-images-v1'

/** Si el SW no interceptó el <img> (cold start), igual dejamos la imagen en Cache Storage. */
export function rememberBookImage(url: string): void {
  if (!url || typeof caches === 'undefined') return

  void (async () => {
    try {
      const abs = new URL(url, location.href).href
      const cache = await caches.open(BOOK_IMAGES_CACHE)
      if (await cache.match(abs)) return

      const res = await fetch(abs, { credentials: 'same-origin' })
      if (!res.ok) return
      await cache.put(abs, res)
    } catch {
      // Offline / quota: ignorar
    }
  })()
}
