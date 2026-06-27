import { onMounted, onUnmounted, ref, toValue, type MaybeRef } from 'vue'

export function useActiveSection(sectionIds: MaybeRef<string[]>) {
  const activeId = ref('')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const ids = toValue(sectionIds)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]?.target.id
        if (top) activeId.value = top
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.7] },
    )

    elements.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}
