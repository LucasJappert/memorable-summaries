export const AUDIO_QUEUE_STORAGE_KEY = 'memorable-summaries:audio-queue'

export interface AudioQueueState {
  items: string[]
  currentIndex: number
  updatedAt: number
}

const EMPTY: AudioQueueState = {
  items: [],
  currentIndex: -1,
  updatedAt: 0,
}

export function readAudioQueue(): AudioQueueState {
  try {
    const raw = localStorage.getItem(AUDIO_QUEUE_STORAGE_KEY)
    if (!raw) return { ...EMPTY, items: [] }

    const parsed = JSON.parse(raw) as Partial<AudioQueueState>
    const items = Array.isArray(parsed.items)
      ? parsed.items.filter((s): s is string => typeof s === 'string' && s.length > 0)
      : []
    let currentIndex =
      typeof parsed.currentIndex === 'number' && Number.isFinite(parsed.currentIndex)
        ? Math.trunc(parsed.currentIndex)
        : -1
    if (items.length === 0) currentIndex = -1
    else if (currentIndex < 0 || currentIndex >= items.length) currentIndex = 0

    return {
      items,
      currentIndex,
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
    }
  } catch {
    return { ...EMPTY, items: [] }
  }
}

export function writeAudioQueue(state: AudioQueueState) {
  localStorage.setItem(
    AUDIO_QUEUE_STORAGE_KEY,
    JSON.stringify({
      items: state.items,
      currentIndex: state.currentIndex,
      updatedAt: state.updatedAt,
    }),
  )
}
