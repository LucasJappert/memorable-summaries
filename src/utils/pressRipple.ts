const PRESSABLE_SELECTOR = [
  'button:not(:disabled):not([data-no-press-ripple])',
  '[role="switch"]:not(:disabled)',
  'a.mobile-book-bar__btn',
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

function ensureHost(host: HTMLElement) {
  host.classList.add('press-ripple-host')
}

function spawnRipple(host: HTMLElement) {
  ensureHost(host)

  const style = getComputedStyle(host)
  const ripple = document.createElement('span')
  ripple.className = 'press-ripple'
  ripple.style.borderRadius = style.borderRadius
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
