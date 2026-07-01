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

const FLASH_MS = 320

let initialized = false

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function flashPress(host: HTMLElement) {
  host.classList.remove('press-flash')
  void host.offsetWidth
  host.classList.add('press-flash')

  const cleanup = () => host.classList.remove('press-flash')

  host.addEventListener('animationend', cleanup, { once: true })
  window.setTimeout(cleanup, FLASH_MS + 40)
}

function onPointerDown(event: PointerEvent) {
  if (prefersReducedMotion()) return
  if (event.button !== 0 && event.pointerType === 'mouse') return

  const target = event.target
  if (!(target instanceof Element)) return
  if (target.closest(SKIP_SELECTOR)) return

  const host = target.closest(PRESSABLE_SELECTOR)
  if (!(host instanceof HTMLElement)) return

  flashPress(host)
}

export function initPressRipple() {
  if (initialized || typeof document === 'undefined') return
  initialized = true
  document.addEventListener('pointerdown', onPointerDown, { passive: true })
}
