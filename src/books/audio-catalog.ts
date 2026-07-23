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
  'death',
  'el-gran-diseno',
  'emergent-multiverse',
  'emperors-new-mind',
  'experience-machine',
  'fabric-of-reality',
  'future-of-the-mind',
  'godel-escher-bach',
  'hidden-reality',
  'how-we-learn',
  'origins',
  'sapiens',
  'seven-brief-lessons',
])

export function bookHasAudio(slug: string): boolean {
  return BOOKS_WITH_AUDIO.has(slug)
}

