const PRESSABLE_SELECTOR = [
  'button:not(:disabled):not([data-no-press-ripple])',
  '[role="switch"]:not(:disabled)',
  'a.app-bottom-bar__btn',
  'button.app-bottom-bar__btn',
  '.site-header__menu-btn',
  'a.site-header__back',
  '.nav-drawer__close',
  'a.nav-drawer__item',
  '.book-search-sheet__close',
  '.book-search-sheet__item',
].join(', ')

const SKIP_SELECTOR = '.nav-drawer__backdrop, .audio-player__progress, [data-no-press-ripple]'

const RIPPLE_MS = 1500

let initialized = false

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function rippleMetrics(host: HTMLElement) {
  const minDim = Math.min(host.offsetWidth, host.offsetHeight)
  const compact = minDim < 44

  return {
    compact,
    spread1: Math.round(Math.min(16, Math.max(4, minDim * 0.28))),
    spread2: Math.round(Math.min(32, Math.max(8, minDim * 0.48))),
    glow: Math.round(Math.min(12, Math.max(2, minDim * 0.14))),
  }
}

function ensureHost(host: HTMLElement, compact: boolean) {
  host.classList.add('press-ripple-host')
  host.classList.toggle('press-ripple-host--compact', compact)
}

function spawnRipple(host: HTMLElement) {
  const { compact, spread1, spread2, glow } = rippleMetrics(host)
  ensureHost(host, compact)

  host.querySelectorAll('.press-ripple').forEach((el) => el.remove())

  const style = getComputedStyle(host)
  const ripple = document.createElement('span')
  ripple.className = 'press-ripple'
  ripple.style.borderRadius = style.borderRadius
  ripple.style.setProperty('--press-ripple-spread-1', `${spread1}px`)
  ripple.style.setProperty('--press-ripple-spread-2', `${spread2}px`)
  ripple.style.setProperty('--press-ripple-glow', `${glow}px`)
  host.insertBefore(ripple, host.firstChild)

  const cleanup = () => {
    ripple.remove()
  }

  ripple.addEventListener('animationend', cleanup, { once: true })
  window.setTimeout(cleanup, RIPPLE_MS + 80)
}

function onPointerDown(event: PointerEvent) {
  if (prefersReducedMotion()) return
  if (event.button !== 0 && event.pointerType === 'mouse') return

  const target = event.target
  if (!(target instanceof Element)) return
  if (target.closest(SKIP_SELECTOR)) return

  const host = target.closest(PRESSABLE_SELECTOR)
  if (!(host instanceof HTMLElement)) return

  spawnRipple(host)
}

export function initPressRipple() {
  if (initialized || typeof document === 'undefined') return
  initialized = true
  document.addEventListener('pointerdown', onPointerDown, { passive: true })
}
