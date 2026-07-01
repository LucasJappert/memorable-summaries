import { onMounted, onUnmounted, ref } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  onMounted(() => {
    const media = window.matchMedia(query)
    const update = () => {
      matches.value = media.matches
    }
    update()
    media.addEventListener('change', update)
    onUnmounted(() => media.removeEventListener('change', update))
  })

  return matches
}
