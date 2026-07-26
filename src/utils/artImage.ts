/** Generated art paths (public/art/). Convention-based; files may be absent. */

export function atmosphereUrl(slug: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}art/${slug}/atmosphere.jpg`
}
