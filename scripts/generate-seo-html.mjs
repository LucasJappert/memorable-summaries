import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  HOME_SEO,
  buildAbsoluteUrl,
  buildBookJsonLd,
  escapeHtml,
  extractBuiltAssets,
  getSeoBookEntries,
  readDistIndexHtml,
  renderAppHeadTags,
} from './seo-build-utils.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = resolve(rootDir, 'dist')

const VIEWPORT =
  'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'

function renderSeoHead(options) {
  const title = escapeHtml(options.title)
  const description = escapeHtml(options.description)
  const canonicalUrl = escapeHtml(options.canonicalUrl)
  const imageUrl = escapeHtml(options.imageUrl)
  const imageWidth = options.imageWidth
  const imageHeight = options.imageHeight

  const jsonLdBlock = options.jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(options.jsonLd)}</script>`
    : ''

  const imageDimensionTags =
    imageWidth && imageHeight
      ? `\n    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />`
      : ''

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="${VIEWPORT}" />
${renderAppHeadTags()}
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="${options.ogType}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${imageUrl}" />${imageDimensionTags}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />${jsonLdBlock}`
}

function renderHtmlPage(headInner, headAssets, bodyScripts) {
  const assetsBlock = headAssets.length ? `\n    ${headAssets.join('\n    ')}` : ''
  const scriptsBlock = bodyScripts.length ? `\n    ${bodyScripts.join('\n    ')}` : ''

  return `<!DOCTYPE html>
<html lang="es">
  <head>
${headInner}${assetsBlock}
  </head>
  <body>
    <div id="app"></div>${scriptsBlock}
  </body>
</html>
`
}

function patchHomeIndexHtml(indexHtml) {
  const { headAssets, bodyScripts } = extractBuiltAssets(indexHtml)
  const homeImage = HOME_SEO.image()
  const headInner = renderSeoHead({
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    canonicalUrl: HOME_SEO.canonicalUrl(),
    ogType: 'website',
    imageUrl: homeImage.url,
    imageWidth: homeImage.width,
    imageHeight: homeImage.height,
  })

  return renderHtmlPage(headInner, headAssets, bodyScripts)
}

function generateBookPages(headAssets, bodyScripts) {
  const entries = getSeoBookEntries()

  for (const entry of entries) {
    const outDir = resolve(distDir, 'libro', entry.slug)
    mkdirSync(outDir, { recursive: true })

    const headInner = renderSeoHead({
      title: entry.pageTitle,
      description: entry.description,
      canonicalUrl: entry.canonicalUrl,
      ogType: 'article',
      imageUrl: entry.imageUrl,
      imageWidth: entry.imageWidth,
      imageHeight: entry.imageHeight,
      jsonLd: buildBookJsonLd(entry),
    })

    writeFileSync(
      resolve(outDir, 'index.html'),
      renderHtmlPage(headInner, headAssets, bodyScripts),
      'utf8',
    )
  }

  return entries.length
}

function main() {
  const indexHtml = readDistIndexHtml(distDir)
  const { headAssets, bodyScripts } = extractBuiltAssets(indexHtml)

  const enrichedHome = patchHomeIndexHtml(indexHtml)
  writeFileSync(resolve(distDir, 'index.html'), enrichedHome, 'utf8')

  const bookCount = generateBookPages(headAssets, bodyScripts)

  console.log(`SEO HTML: home enriched + ${bookCount} book pages in dist/libro/<slug>/index.html`)
  console.log(`Site URL: ${buildAbsoluteUrl('')}`)
}

main()
