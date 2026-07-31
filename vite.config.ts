import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

function buildVersion(): string {
  // Preferir el commit: un redeploy del mismo commit no debe contar como versión nueva.
  // COMMIT_REF = Netlify; GITHUB_SHA = GitHub Actions.
  return (
    process.env.GITHUB_SHA?.slice(0, 12) ??
    process.env.COMMIT_REF?.slice(0, 12) ??
    process.env.GIT_COMMIT?.slice(0, 12) ??
    `local-${Date.now().toString(36)}`
  )
}

function versionJsonPlugin(version: string): Plugin {
  return {
    name: 'emit-app-version-json',
    apply: 'build',
    closeBundle() {
      // Nombre distinto de `version.json`: los clientes con el bucle de reload
      // siguen pidiendo ese path; al 404ar, su `checkForAppUpdate` sale sin
      // recargar y el SW nuevo puede instalarse. Ver useAppUpdate.ts.
      writeFileSync(
        resolve('dist/app-version.json'),
        JSON.stringify({ version, builtAt: new Date().toISOString() }, null, 2),
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  // VITE_SITE_URL: URL pública absoluta del deploy (og:url, og:image, sitemap).
  // VITE_BASE_PATH: subruta del hosting (p. ej. /memorable-summaries/ en GitHub Pages).
  const base = process.env.VITE_BASE_PATH || '/'
  const version = buildVersion()
  // Debe coincidir con la entry del precache (`index.html`), no con la URL pública
  // (`/memorable-summaries/index.html`) — si no, Workbox tira non-precached-url.
  const offlineNavigationFallback = 'index.html'

  return {
    base,
    define: {
      __APP_VERSION__: JSON.stringify(mode === 'development' ? 'dev' : version),
    },
    plugins: [
      vue(),
      versionJsonPlugin(version),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.svg',
          'favicon.png',
          'favicon-32.png',
          'pwa-icon-192.png',
          'pwa-icon-512.png',
          'pwa-icon-512-maskable.png',
          'apple-touch-icon.png',
        ],
        manifest: {
          name: 'Memorable Summaries',
          short_name: 'Summaries',
          description: 'Resúmenes interactivos para memorizar libros',
          theme_color: '#0a0e1a',
          background_color: '#0a0e1a',
          display: 'standalone',
          orientation: 'portrait',
          lang: 'es',
          icons: [
            {
              src: 'pwa-icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-icon-512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          // App shell en precache: solo index.html raíz — no precachear dist/libro/** (SEO).
          maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
          globPatterns: ['**/*.{js,css,svg,png,woff,woff2}', 'index.html'],
          // `navigateFallback: undefined` anula el default del plugin (`index.html`):
          // generaba una NavigationRoute contra el precache registrada ANTES de
          // runtimeCaching, así que tras un deploy toda navegación seguía sirviendo el
          // HTML viejo → mismatch de versión permanente → bucle de recarga.
          // El fallback offline ahora vive en el `precacheFallback` de abajo.
          navigateFallback: undefined,
          runtimeCaching: [
            {
              // El HTML nunca sale de cache: así un deploy entrega los assets nuevos
              // en la primera navegación. Offline cae al index.html del precache,
              // que siempre es coherente con los assets precacheados.
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkOnly',
              options: {
                precacheFallback: { fallbackURL: offlineNavigationFallback },
              },
            },
            {
              urlPattern: /\/app-version\.json$/,
              handler: 'NetworkOnly',
            },
            {
              // Narraciones on-demand (botón Descargar). RangeRequests = seek offline.
              urlPattern: ({ url }) => /\/audio\/[^/?]+\.mp3$/i.test(url.pathname),
              handler: 'CacheFirst',
              options: {
                cacheName: 'audio-offline',
                rangeRequests: true,
                cacheableResponse: { statuses: [0, 200] },
                expiration: {
                  maxEntries: 48,
                },
              },
            },
            {
              // Portadas / atmósfera / OG art / og-home — CacheFirst permanente.
              // Invalidar: subir book-images-vN acá y en src/utils/bookImageCache.ts.
              // El cache viejo queda huérfano; cleanupOutdatedCaches no borra runtime caches.
              urlPattern: ({ url }) =>
                /\/(covers|art)\/.+\.(jpe?g|png|webp)$/i.test(url.pathname) ||
                /\/og-home\.jpe?g$/i.test(url.pathname),
              handler: 'CacheFirst',
              options: {
                cacheName: 'book-images-v1',
                cacheableResponse: { statuses: [0, 200] },
                expiration: {
                  // Sin maxAge: no caducan por tiempo. Tope LRU por si el catálogo crece.
                  maxEntries: 400,
                },
              },
            },
          ],
        },
      }),
    ],
  }
})
