import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

function buildVersion(): string {
  return (
    process.env.GITHUB_SHA?.slice(0, 12) ??
    process.env.GIT_COMMIT?.slice(0, 12) ??
    `local-${Date.now().toString(36)}`
  )
}

function versionJsonPlugin(version: string): Plugin {
  return {
    name: 'emit-version-json',
    apply: 'build',
    closeBundle() {
      writeFileSync(
        resolve('dist/version.json'),
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
  const navigateFallback = 'index.html'

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
          // App shell en precache (exigido por navigateFallback / createHandlerBoundToURL).
          // Solo index.html raíz — no precachear dist/libro/** (SEO).
          // Navigations online: NetworkFirst abajo actualiza html-pages.
          globPatterns: ['**/*.{js,css,svg,png,woff,woff2}', 'index.html'],
          navigateFallback,
          navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-pages',
                networkTimeoutSeconds: 3,
                expiration: { maxEntries: 1 },
              },
            },
            {
              urlPattern: /\/version\.json$/,
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
              // Invalidar: subir book-images-vN (el cache viejo queda huérfano y el
              // SW deja de usarlo; cleanupOutdatedCaches no borra runtime caches).
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
