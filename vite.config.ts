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
  const base = process.env.VITE_BASE_PATH || '/'
  const version = buildVersion()
  const navigateFallback =
    base === '/' ? '/index.html' : `${base.replace(/\/$/, '')}/index.html`

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
        includeAssets: ['favicon.svg', 'pwa-icon-192.png', 'pwa-icon-512.png', 'apple-touch-icon.png'],
        manifest: {
          name: 'Memorable Summaries',
          short_name: 'Summaries',
          description: 'Resúmenes interactivos para memorizar libros',
          theme_color: '#0a0e1a',
          background_color: '#0a0e1a',
          display: 'standalone',
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
          // HTML fuera del precache: siempre intenta red primero
          globPatterns: ['**/*.{js,css,svg,png,woff,woff2}'],
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
          ],
        },
      }),
    ],
  }
})
