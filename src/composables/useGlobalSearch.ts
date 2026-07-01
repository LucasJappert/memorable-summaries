import { ref } from 'vue'
import type { CorpusSearchScope } from '../search/corpus-search'
import { closeAppNavMenu } from './useAppNavMenu'

const SEARCH_SCOPE_KEY = 'memorable-summaries:search-scope'

function readSearchScope(): CorpusSearchScope {
  try {
    return localStorage.getItem(SEARCH_SCOPE_KEY) === 'all' ? 'all' : 'read'
  } catch {
    return 'read'
  }
}

export const globalSearchOpen = ref(false)
export const globalSearchScope = ref<CorpusSearchScope>(readSearchScope())

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

export function setGlobalSearchScope(scope: CorpusSearchScope) {
  globalSearchScope.value = scope
  try {
    localStorage.setItem(SEARCH_SCOPE_KEY, scope)
  } catch {
    /* ignore quota / private mode */
  }
}

export function toggleGlobalSearchScope() {
  setGlobalSearchScope(globalSearchScope.value === 'read' ? 'all' : 'read')
}
