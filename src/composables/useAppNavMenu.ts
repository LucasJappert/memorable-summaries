import { ref } from 'vue'
import { closeGlobalSearch } from './useGlobalSearch'

export const appNavMenuOpen = ref(false)

export function openAppNavMenu() {
  closeGlobalSearch()
  appNavMenuOpen.value = true
}

export function closeAppNavMenu() {
  appNavMenuOpen.value = false
}

export function toggleAppNavMenu() {
  if (appNavMenuOpen.value) closeAppNavMenu()
  else openAppNavMenu()
}
