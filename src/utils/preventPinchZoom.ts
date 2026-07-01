/** Bloquea pinch-zoom y gestos de escala en iOS Safari (el viewport solo no alcanza). */
export function preventPinchZoom() {
  const blockGesture = (event: Event) => {
    event.preventDefault()
  }

  document.addEventListener('gesturestart', blockGesture, { passive: false })
  document.addEventListener('gesturechange', blockGesture, { passive: false })
  document.addEventListener('gestureend', blockGesture, { passive: false })

  document.addEventListener(
    'touchmove',
    (event) => {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    },
    { passive: false },
  )

  let lastTouchEnd = 0

  document.addEventListener(
    'touchend',
    (event) => {
      const now = Date.now()
      if (now - lastTouchEnd > 300) {
        lastTouchEnd = now
        return
      }

      lastTouchEnd = now
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest('button, a, input, textarea, select, [role="slider"]')) return

      event.preventDefault()
    },
    { passive: false },
  )
}
