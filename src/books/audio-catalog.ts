/** Slugs con narración TTS en public/audio/<slug>.mp3 */
export const BOOKS_WITH_AUDIO = new Set<string>([
  'free-will',
  'sapiens',
  'homo-deus',
  'cosmos',
  'seven-brief-lessons',
  'universo-de-la-nada',
  'selfish-gene',
  'determined',
  'black-swan',
  'life-3-0',
  'superintelligence',
  'blind-watchmaker',
  'why-evolution-is-true',
  'incognito',
  'ego-tunnel',
  'fabric-of-reality',
  'wonderful-life',
])

export function bookHasAudio(slug: string): boolean {
  return BOOKS_WITH_AUDIO.has(slug)
}
