import { DEFAULT_OG_IMAGE, bookCoverPath } from '../utils/seo'

export const DEFAULT_SITE_URL = 'https://memorable-summaries.example.com'

export function getSiteUrl(): string {
  return (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

export function getBasePath(): string {
  return import.meta.env.BASE_URL
}

/** Ruta absoluta en el sitio desplegado (respeta BASE_URL). */
export function absoluteUrl(path: string): string {
  const site = getSiteUrl()
  const base = getBasePath()

  if (!path) {
    const root = `${site}${base}`.replace(/([^:]\/)\/+$/, '')
    return root || site
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${site}${base}${normalizedPath}`.replace(/([^:]\/)\/+/g, '$1')
}

export function bookOgImageUrl(slug: string): string {
  return absoluteUrl(bookCoverPath(slug))
}

export function defaultOgImageUrl(): string {
  return absoluteUrl(DEFAULT_OG_IMAGE)
}
