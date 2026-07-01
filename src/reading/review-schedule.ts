import { bumpReadingRevision } from './revision'

export const REVIEW_SCHEDULE_KEY = 'memorable-summaries:review-schedule'

export type ReviewKind = 'day1' | 'day7' | 'day30'

export interface ScheduledReview {
  id: string
  slug: string
  kind: ReviewKind
  dueAt: number
  completedAt?: number
}

interface ReviewScheduleStore {
  reviews: ScheduledReview[]
}

const OFFSETS: Record<ReviewKind, number> = {
  day1: 1,
  day7: 7,
  day30: 30,
}

const KINDS: ReviewKind[] = ['day1', 'day7', 'day30']

function readStore(): ReviewScheduleStore {
  try {
    const raw = localStorage.getItem(REVIEW_SCHEDULE_KEY)
    if (!raw) return { reviews: [] }
    const parsed = JSON.parse(raw) as Partial<ReviewScheduleStore>
    return { reviews: parsed.reviews ?? [] }
  } catch {
    return { reviews: [] }
  }
}

function writeStore(store: ReviewScheduleStore) {
  localStorage.setItem(REVIEW_SCHEDULE_KEY, JSON.stringify(store))
  bumpReadingRevision()
}

function startOfDay(ts: number): number {
  const d = new Date(ts)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

function addDays(base: number, days: number): number {
  return startOfDay(base) + days * 86_400_000
}

export function scheduleBookReviews(slug: string, completedAt = Date.now()) {
  const store = readStore()
  const base = startOfDay(completedAt)

  for (const kind of KINDS) {
    const id = `${slug}:${kind}`
    const exists = store.reviews.some((review) => review.id === id)
    if (exists) continue

    store.reviews.push({
      id,
      slug,
      kind,
      dueAt: addDays(base, OFFSETS[kind]),
    })
  }

  writeStore(store)
}

export function getPendingReviews(now = Date.now()): ScheduledReview[] {
  return readStore().reviews
    .filter((review) => !review.completedAt && review.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt)
}

export function getUpcomingReviews(now = Date.now()): ScheduledReview[] {
  return readStore().reviews
    .filter((review) => !review.completedAt && review.dueAt > now)
    .sort((a, b) => a.dueAt - b.dueAt)
}

export function completeReview(reviewId: string) {
  const store = readStore()
  const review = store.reviews.find((item) => item.id === reviewId)
  if (!review || review.completedAt) return
  review.completedAt = Date.now()
  writeStore(store)
}

export function getReviewsForBook(slug: string): ScheduledReview[] {
  return readStore().reviews.filter((review) => review.slug === slug)
}
