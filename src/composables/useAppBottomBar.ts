import { ref } from 'vue'

export interface BookBottomBarHandlers {
  scrollToTop: () => void
  toggleMenu: () => void
}

export interface BookBottomBarState {
  menuOpen: boolean
  slug: string
  title: string
  author: string
  handlers: BookBottomBarHandlers
}

const bookBarState = ref<BookBottomBarState | null>(null)

export function registerBookBottomBar(state: BookBottomBarState) {
  bookBarState.value = state
}

export function unregisterBookBottomBar() {
  bookBarState.value = null
}

export function useAppBottomBarBook() {
  return { bookBarState }
}
