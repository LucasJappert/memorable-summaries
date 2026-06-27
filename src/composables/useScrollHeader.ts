import { onMounted, onUnmounted, ref } from 'vue'

const DEFAULT_THRESHOLD = 10
const DEFAULT_TOP_OFFSET = 72

export function useScrollHeader(options?: {
  threshold?: number
  topOffset?: number
  enabled?: () => boolean
}) {
  const headerVisible = ref(true)
  let lastScrollY = 0

  function onScroll() {
    if (options?.enabled && !options.enabled()) return

    const scrollY = window.scrollY
    const threshold = options?.threshold ?? DEFAULT_THRESHOLD
    const topOffset = options?.topOffset ?? DEFAULT_TOP_OFFSET

    if (scrollY <= topOffset) {
      headerVisible.value = true
    } else if (scrollY > lastScrollY + threshold) {
      headerVisible.value = false
    } else if (scrollY < lastScrollY - threshold) {
      headerVisible.value = true
    }

    lastScrollY = scrollY
  }

  onMounted(() => {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { headerVisible }
}
