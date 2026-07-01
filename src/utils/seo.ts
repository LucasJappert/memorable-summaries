export const SITE_NAME = 'Memorable Summaries'

export const DEFAULT_SITE_DESCRIPTION =
  'Resúmenes interactivos para memorizar libros'

/** Imagen OG de la home (public/og-home.jpg). */
export const DEFAULT_OG_IMAGE = 'og-home.jpg'
export const DEFAULT_OG_IMAGE_WIDTH = 1200
export const DEFAULT_OG_IMAGE_HEIGHT = 630

export function formatBookDisplayTitle(meta: {
  title: string
  titleEs?: string
}): string {
  return meta.titleEs ? `${meta.title} — ${meta.titleEs}` : meta.title
}

export function formatBookPageTitle(meta: {
  title: string
  titleEs?: string
}): string {
  return `${formatBookDisplayTitle(meta)} | ${SITE_NAME}`
}

export function formatBookDescription(meta: {
  subtitle: string
  author: string
}): string {
  return `${meta.subtitle}. ${meta.author}.`
}

export function bookCoverPath(slug: string): string {
  return `/covers/${slug}.jpg`
}

export function bookCanonicalPath(slug: string): string {
  return `libro/${slug}`
}
