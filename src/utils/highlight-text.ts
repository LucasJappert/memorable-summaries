/** Normaliza para búsqueda (misma lógica que corpus-search). */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Resalta coincidencias case/accent-insensitive. Devuelve HTML seguro.
 */
export function highlightSearchText(text: string, query: string): string {
  const normQuery = normalizeForSearch(query.trim())
  if (!normQuery) return escapeHtml(text)

  const chunks: string[] = []
  let cursor = 0

  while (cursor < text.length) {
    let matchStart = -1
    let matchEnd = -1

    for (let i = cursor; i < text.length; i++) {
      let ti = i
      let qi = 0
      while (qi < normQuery.length && ti < text.length) {
        if (normalizeForSearch(text[ti]!) !== normQuery[qi]) break
        qi++
        ti++
      }
      if (qi === normQuery.length) {
        matchStart = i
        matchEnd = ti
        break
      }
    }

    if (matchStart < 0) {
      chunks.push(escapeHtml(text.slice(cursor)))
      break
    }

    chunks.push(escapeHtml(text.slice(cursor, matchStart)))
    chunks.push(
      `<mark class="global-search__mark">${escapeHtml(text.slice(matchStart, matchEnd))}</mark>`,
    )
    cursor = matchEnd
  }

  return chunks.join('')
}
