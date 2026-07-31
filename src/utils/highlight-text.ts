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

type Range = { start: number; end: number }

/** Encuentra rangos en `text` que matchean `normTerm` (case/acento-insensitive). */
function findTermRanges(text: string, normTerm: string): Range[] {
  if (!normTerm) return []
  const ranges: Range[] = []
  let cursor = 0

  while (cursor < text.length) {
    let matchStart = -1
    let matchEnd = -1

    for (let i = cursor; i < text.length; i++) {
      let ti = i
      let qi = 0
      while (qi < normTerm.length && ti < text.length) {
        if (normalizeForSearch(text[ti]!) !== normTerm[qi]) break
        qi++
        ti++
      }
      if (qi === normTerm.length) {
        matchStart = i
        matchEnd = ti
        break
      }
    }

    if (matchStart < 0) break
    ranges.push({ start: matchStart, end: matchEnd })
    cursor = matchEnd
  }

  return ranges
}

function mergeRanges(ranges: Range[]): Range[] {
  if (ranges.length === 0) return []
  const sorted = [...ranges].sort((a, b) => a.start - b.start || a.end - b.end)
  const merged: Range[] = [{ ...sorted[0]! }]

  for (let i = 1; i < sorted.length; i++) {
    const cur = sorted[i]!
    const last = merged[merged.length - 1]!
    if (cur.start <= last.end) {
      last.end = Math.max(last.end, cur.end)
    } else {
      merged.push({ ...cur })
    }
  }

  return merged
}

/**
 * Resalta coincidencias case/accent-insensitive.
 * Soporta varias palabras en `query` (cada término se resalta por separado).
 * Devuelve HTML seguro.
 */
export function highlightSearchText(text: string, query: string): string {
  const terms = normalizeForSearch(query.trim()).split(/\s+/).filter(Boolean)
  if (terms.length === 0) return escapeHtml(text)

  const ranges = mergeRanges(terms.flatMap((term) => findTermRanges(text, term)))
  if (ranges.length === 0) return escapeHtml(text)

  const chunks: string[] = []
  let cursor = 0

  for (const range of ranges) {
    chunks.push(escapeHtml(text.slice(cursor, range.start)))
    chunks.push(
      `<mark class="global-search__mark">${escapeHtml(text.slice(range.start, range.end))}</mark>`,
    )
    cursor = range.end
  }
  chunks.push(escapeHtml(text.slice(cursor)))

  return chunks.join('')
}
