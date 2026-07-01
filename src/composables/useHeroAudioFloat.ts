import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/** Activa la barra flotante cuando el hero sale del viewport. */
export function useHeroAudioFloat(heroRef: Ref<HTMLElement | null>) {
  const isFloating = ref(false)

  function update() {
    const hero = heroRef.value
    if (!hero) return
    isFloating.value = hero.getBoundingClientRect().bottom <= 8
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { isFloating }
}
