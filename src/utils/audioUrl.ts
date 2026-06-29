/** Narration MP3 paths (public/audio/). */

export function publicAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = import.meta.env.BASE_URL
  if (path.startsWith(base)) return path
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}

export function audioUrl(slug: string): string {
  return publicAssetUrl(`audio/${slug}.mp3`)
}
