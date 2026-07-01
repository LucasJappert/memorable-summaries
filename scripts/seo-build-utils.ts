import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { bookCatalog } from '../src/books/catalog'
import {
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

export interface SeoBookEntry {
  slug: string
  pageTitle: string
  displayTitle: string
  description: string
  author: string
  canonicalUrl: string
  imageUrl: string
}

export function getSeoBookEntries(): SeoBookEntry[] {
  return bookCatalog.map(({ slug, meta }) => ({
    slug,
    pageTitle: formatBookPageTitle(meta),
    displayTitle: formatBookDisplayTitle(meta),
    description: formatBookDescription(meta),
    author: meta.author,
    canonicalUrl: buildAbsoluteUrl(bookCanonicalPath(slug)),
    imageUrl: buildAbsoluteUrl(bookCoverPath(slug)),
  }))
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
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

export const HOME_SEO = {
  title: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  canonicalUrl: () => buildAbsoluteUrl(''),
  imageUrl: () => buildAbsoluteUrl('pwa-icon-512.png'),
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
