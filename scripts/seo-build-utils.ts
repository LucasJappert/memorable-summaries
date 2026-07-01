import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { bookCatalog } from '../src/books/catalog'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  bookCanonicalPath,
  bookCoverPath,
  formatBookDescription,
  formatBookDisplayTitle,
  formatBookPageTitle,
} from '../src/utils/seo'

export const DEFAULT_SITE_URL = 'https://memorable-summaries.example.com'

export function getBuildSiteUrl(): string {
  return (process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

export function getBuildBasePath(): string {
  const base = process.env.VITE_BASE_PATH || '/'
  return base.endsWith('/') ? base : `${base}/`
}

export function buildAbsoluteUrl(path: string): string {
  const site = getBuildSiteUrl()
  const base = getBuildBasePath()

  if (!path) {
    const root = `${site}${base}`.replace(/([^:]\/)\/+$/, '')
    return root || site
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${site}${base}${normalizedPath}`.replace(/([^:]\/)\/+/g, '$1')
}

export interface SeoImageMeta {
  url: string
  width: number
  height: number
}

export interface SeoBookEntry {
  slug: string
  pageTitle: string
  displayTitle: string
  description: string
  author: string
  canonicalUrl: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
}

/** Lee dimensiones de JPEG sin dependencias externas (SOF0/SOF2). */
export function readJpegDimensions(filePath: string): { width: number; height: number } | null {
  try {
    const buf = readFileSync(filePath)
    let offset = 2

    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset += 1
        continue
      }

      const marker = buf[offset + 1]
      const segmentLength = buf.readUInt16BE(offset + 2)

      if (marker === 0xc0 || marker === 0xc2) {
        return {
          height: buf.readUInt16BE(offset + 5),
          width: buf.readUInt16BE(offset + 7),
        }
      }

      offset += 2 + segmentLength
    }

    return null
  } catch {
    return null
  }
}

export function readCoverDimensions(
  slug: string,
  rootDir: string,
): { width: number; height: number } | null {
  const coverPath = resolve(rootDir, 'public', 'covers', `${slug}.jpg`)
  if (!existsSync(coverPath)) return null
  return readJpegDimensions(coverPath)
}

export function getSeoBookEntries(rootDir = resolve(import.meta.dirname, '..')): SeoBookEntry[] {
  return bookCatalog.map(({ slug, meta }) => {
    const dimensions = readCoverDimensions(slug, rootDir)
    return {
      slug,
      pageTitle: formatBookPageTitle(meta),
      displayTitle: formatBookDisplayTitle(meta),
      description: formatBookDescription(meta),
      author: meta.author,
      canonicalUrl: buildAbsoluteUrl(bookCanonicalPath(slug)),
      imageUrl: buildAbsoluteUrl(bookCoverPath(slug)),
      imageWidth: dimensions?.width ?? 420,
      imageHeight: dimensions?.height ?? 640,
    }
  })
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

/** Iconos y meta PWA con la subruta de deploy (VITE_BASE_PATH). */
export function renderAppHeadTags(): string {
  const base = escapeHtml(getBuildBasePath())

  return `    <link rel="icon" type="image/svg+xml" href="${base}favicon.svg" />
    <meta name="theme-color" content="#0a0e1a" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="apple-touch-icon" href="${base}apple-touch-icon.png" />
    <link rel="manifest" href="${base}manifest.webmanifest" />`
}

export function extractBuiltAssets(indexHtml: string): {
  headAssets: string[]
  bodyScripts: string[]
} {
  const headAssets = indexHtml.match(/<link rel="stylesheet"[^>]*>/g) ?? []
  const modulePreloads = indexHtml.match(/<link rel="modulepreload"[^>]*>/g) ?? []
  const bodyScripts = indexHtml.match(/<script type="module"[^>]*><\/script>/g) ?? []

  return {
    headAssets: [...modulePreloads, ...headAssets],
    bodyScripts,
  }
}

export function readDistIndexHtml(distDir: string): string {
  return readFileSync(resolve(distDir, 'index.html'), 'utf8')
}

export function getHomeSeoImage(rootDir = resolve(import.meta.dirname, '..')): SeoImageMeta {
  const imagePath = resolve(rootDir, 'public', DEFAULT_OG_IMAGE)
  const dimensions = existsSync(imagePath) ? readJpegDimensions(imagePath) : null

  return {
    url: buildAbsoluteUrl(DEFAULT_OG_IMAGE),
    width: dimensions?.width ?? DEFAULT_OG_IMAGE_WIDTH,
    height: dimensions?.height ?? DEFAULT_OG_IMAGE_HEIGHT,
  }
}

export const HOME_SEO = {
  title: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  canonicalUrl: () => buildAbsoluteUrl(''),
  image: () => getHomeSeoImage(),
}

export function buildBookJsonLd(entry: SeoBookEntry): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: entry.displayTitle,
    author: {
      '@type': 'Person',
      name: entry.author,
    },
    description: entry.description,
    image: entry.imageUrl,
    url: entry.canonicalUrl,
  }
}
