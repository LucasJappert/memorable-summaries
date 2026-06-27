/** Deterministic cover art from slug + meta (Nebula ID system). */

export interface CoverTheme {
  seed: number
  nebula: string
  accent: string
  accent2: string
  stars: Array<{ x: number; y: number; r: number }>
  lines: Array<[number, number, number, number]>
  orbitRotation: number
  motif: 'constellation' | 'orbit' | 'grid' | 'wave'
}

const BRAND_ACCENTS = ['#7c8cf0', '#7cf0c8', '#f0a87c'] as const

const NEBULA_PAIRS: Array<[string, string]> = [
  ['rgba(124, 140, 240, 0.45)', 'rgba(90, 106, 216, 0.08)'],
  ['rgba(124, 240, 200, 0.4)', 'rgba(78, 196, 168, 0.08)'],
  ['rgba(240, 168, 124, 0.38)', 'rgba(200, 120, 80, 0.08)'],
  ['rgba(154, 111, 214, 0.42)', 'rgba(90, 70, 160, 0.08)'],
  ['rgba(90, 159, 214, 0.4)', 'rgba(42, 58, 74, 0.1)'],
  ['rgba(158, 240, 216, 0.35)', 'rgba(31, 61, 56, 0.1)'],
]

const MOTIFS = ['constellation', 'orbit', 'grid', 'wave'] as const

function hashSlug(slug: string): number {
  let h = 2166136261
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pick<T>(rand: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rand() * arr.length)]!
}

export function monogramFrom(title: string, author: string, override?: string): string {
  if (override?.trim()) return override.trim().slice(0, 3).toUpperCase()

  const titleWords = title.trim().split(/\s+/).filter(Boolean)
  const authorParts = author.trim().split(/\s+/).filter(Boolean)
  const surname = authorParts[authorParts.length - 1] ?? ''

  if (titleWords.length >= 2) {
    return (titleWords[0]![0]! + titleWords[1]![0]!).toUpperCase()
  }
  if (titleWords.length === 1 && surname) {
    return (titleWords[0]![0]! + surname[0]!).toUpperCase()
  }
  return (titleWords[0]?.slice(0, 2) ?? 'MS').toUpperCase()
}

export function coverThemeFromSlug(slug: string): CoverTheme {
  const seed = hashSlug(slug)
  const rand = mulberry32(seed)

  const [nebulaA, nebulaB] = NEBULA_PAIRS[seed % NEBULA_PAIRS.length]!
  const accentIdx = Math.floor(rand() * BRAND_ACCENTS.length)
  const accent = BRAND_ACCENTS[accentIdx]!
  const accent2 = BRAND_ACCENTS[(accentIdx + 1 + Math.floor(rand() * 2)) % BRAND_ACCENTS.length]!

  const starCount = 5 + Math.floor(rand() * 3)
  const stars: CoverTheme['stars'] = []
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: 18 + rand() * 64,
      y: 14 + rand() * 52,
      r: 0.8 + rand() * 1.4,
    })
  }

  const lines: CoverTheme['lines'] = []
  for (let i = 0; i < stars.length - 1; i++) {
    if (rand() > 0.35) {
      const a = stars[i]!
      const b = stars[i + 1]!
      lines.push([a.x, a.y, b.x, b.y])
    }
  }
  if (stars.length >= 3 && rand() > 0.5) {
    const a = stars[0]!
    const b = stars[stars.length - 1]!
    lines.push([a.x, a.y, b.x, b.y])
  }

  const cx = 20 + rand() * 60
  const cy = 15 + rand() * 45
  const nebula = [
    `radial-gradient(ellipse 85% 70% at ${cx.toFixed(0)}% ${cy.toFixed(0)}%, ${nebulaA} 0%, transparent 68%)`,
    `radial-gradient(ellipse 60% 55% at ${(100 - cx * 0.6).toFixed(0)}% ${(100 - cy).toFixed(0)}%, ${nebulaB} 0%, transparent 62%)`,
    `radial-gradient(circle at 50% 100%, rgba(124, 140, 240, 0.12) 0%, transparent 45%)`,
  ].join(', ')

  return {
    seed,
    nebula,
    accent,
    accent2,
    stars,
    lines,
    orbitRotation: Math.floor(rand() * 360),
    motif: pick(rand, MOTIFS),
  }
}
