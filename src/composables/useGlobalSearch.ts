import { ref } from 'vue'
import { closeAppNavMenu } from './useAppNavMenu'

export const globalSearchOpen = ref(false)

export function openGlobalSearch() {
  closeAppNavMenu()
  globalSearchOpen.value = true
}

export function closeGlobalSearch() {
  globalSearchOpen.value = false
}

export function toggleGlobalSearch() {
  globalSearchOpen.value = !globalSearchOpen.value
}
