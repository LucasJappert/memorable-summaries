/** Cover image paths for a book slug (public/covers/). */

export type CoverStyle = 'memorable' | 'editorial'

export function coverImageUrl(slug: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}covers/${slug}.jpg`
}

/** Backup de la tapa EPUB cuando hay Memorable en `<slug>.jpg`. */
export function coverEditorialUrl(slug: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}covers/${slug}.editorial.jpg`
}

export function coverUrlForStyle(slug: string, style: CoverStyle): string {
  return style === 'editorial' ? coverEditorialUrl(slug) : coverImageUrl(slug)
}
