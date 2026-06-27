/** Cover image paths for a book slug (public/covers/). */

export function coverImageUrl(slug: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}covers/${slug}.jpg`
}
