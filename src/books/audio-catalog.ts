/** Slugs con narración TTS en public/audio/<slug>.mp3 */
export const BOOKS_WITH_AUDIO = new Set<string>([
  '21-lessons',
  'ageless',
  'ai-2041',
  'alignment-problem',
  'beginning-of-infinity',
  'being-you',
  'biggest-ideas-universe',
  'biosignatures-astrobiology',
  'black-swan',
  'blind-watchmaker',
  'case-against-reality',
  'cosmos',
  'death',
  'determined',
  'ego-tunnel',
  'fabric-of-reality',
  'free-will',
  'homo-deus',
  'incognito',
  'life-3-0',
  'origins',
  'sapiens',
  'selfish-gene',
  'seven-brief-lessons',
  'superintelligence',
  'universo-de-la-nada',
  'why-evolution-is-true',
  'wonderful-life',
])

export function bookHasAudio(slug: string): boolean {
  return BOOKS_WITH_AUDIO.has(slug)
}

