/** Slugs con narración TTS en public/audio/<slug>.mp3
 *  Solo audios regenerados post-rewrite (batch .ok).
 *  MP3 stale pueden existir en disco pero no se listan aquí.
 */
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
  'el-gran-diseno',
  'emergent-multiverse',
  'emperors-new-mind',
  'experience-machine',
  'fabric-of-reality',
  'free-will',
  'future-of-the-mind',
  'godel-escher-bach',
  'hidden-reality',
  'homo-deus',
  'how-we-learn',
  'incognito',
  'intelligent-life-universe',
  'life-3-0',
  'lifespan',
  'livewired',
  'murmurs-of-earth',
  'origins',
  'our-mathematical-universe',
  'quantum-enigma',
  'sapiens',
  'self-assembling-brain',
  'selfish-gene',
  'seven-brief-lessons',
  'something-deeply-hidden',
  'superintelligence',
  'the-brain',
  'universo-de-la-nada',
  'vital-question',
  'why-does-world-exist',
  'why-evolution-is-true',
  'why-we-die',
  'wonderful-life',
])

export function bookHasAudio(slug: string): boolean {
  return BOOKS_WITH_AUDIO.has(slug)
}

