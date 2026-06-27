/** Cover image paths for a book slug (public/covers/). */

export function coverImageUrl(slug: string): string {
  return `/covers/${slug}.jpg`
}
