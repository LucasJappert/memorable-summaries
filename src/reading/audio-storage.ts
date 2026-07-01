import { bumpReadingRevision } from './revision'

export const AUDIO_STORAGE_PREFIX = 'memorable-summaries:audio:'

export interface AudioPosition {
  currentTime: number
  updatedAt: number
}

export function audioStorageKey(slug: string) {
  return `${AUDIO_STORAGE_PREFIX}${slug}`
}

export function readAudioPosition(slug: string): AudioPosition | null {
  try {
    const raw = localStorage.getItem(audioStorageKey(slug))
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<AudioPosition>
    if (typeof parsed.currentTime !== 'number' || !Number.isFinite(parsed.currentTime)) return null

    return {
      currentTime: Math.max(0, parsed.currentTime),
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    }
  } catch {
    return null
  }
}

export function writeAudioPosition(slug: string, position: AudioPosition) {
  localStorage.setItem(audioStorageKey(slug), JSON.stringify(position))
  bumpReadingRevision()
}

export function clearAudioPosition(slug: string) {
  localStorage.removeItem(audioStorageKey(slug))
  bumpReadingRevision()
}
