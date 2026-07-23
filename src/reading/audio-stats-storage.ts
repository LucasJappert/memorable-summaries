import { bumpReadingRevision } from './revision'

export const AUDIO_STATS_STORAGE_PREFIX = 'memorable-summaries:audio-stats:'

export interface AudioListenStats {
  completedCount: number
  lastCompletedAt: number | null
  markedListened: boolean
  updatedAt: number
}

export function audioStatsKey(slug: string) {
  return `${AUDIO_STATS_STORAGE_PREFIX}${slug}`
}

const EMPTY: AudioListenStats = {
  completedCount: 0,
  lastCompletedAt: null,
  markedListened: false,
  updatedAt: 0,
}

export function readAudioStats(slug: string): AudioListenStats {
  try {
    const raw = localStorage.getItem(audioStatsKey(slug))
    if (!raw) return { ...EMPTY }

    const parsed = JSON.parse(raw) as Partial<AudioListenStats>
    return {
      completedCount:
        typeof parsed.completedCount === 'number' && parsed.completedCount > 0
          ? Math.floor(parsed.completedCount)
          : 0,
      lastCompletedAt:
        typeof parsed.lastCompletedAt === 'number' ? parsed.lastCompletedAt : null,
      markedListened: parsed.markedListened === true,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    }
  } catch {
    return { ...EMPTY }
  }
}

export function writeAudioStats(slug: string, stats: AudioListenStats) {
  localStorage.setItem(audioStatsKey(slug), JSON.stringify(stats))
  bumpReadingRevision()
}

export function recordAudioCompletion(slug: string): AudioListenStats {
  const prev = readAudioStats(slug)
  const next: AudioListenStats = {
    completedCount: prev.completedCount + 1,
    lastCompletedAt: Date.now(),
    markedListened: prev.markedListened,
    updatedAt: Date.now(),
  }
  writeAudioStats(slug, next)
  return next
}

export function setMarkedListened(slug: string, marked: boolean): AudioListenStats {
  const prev = readAudioStats(slug)
  const next: AudioListenStats = {
    ...prev,
    markedListened: marked,
    updatedAt: Date.now(),
  }
  writeAudioStats(slug, next)
  return next
}
