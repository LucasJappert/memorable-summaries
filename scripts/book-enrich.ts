/**
 * Enriquece HTML de párrafos con marcadores semánticos y normaliza bloques key/lead.
 * Usado por scripts/regenerate-books.ts
 */

import type { BookSummary, ContentBlock, Section } from '../src/types/book'

const NUM_PATTERN =
  /^~?\d[\d.,]*%?$|^\d{4}(?:s|–|-\d{2,4})?$|^\d+[.,]?\d*\s×\s?10|^~?\d[\d.,]*\s*(años|semanas|días|meses)|^meses a años$|^10[⁻\-]?\d+/i

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function buildPersonSet(book: BookSummary): Set<string> {
  const persons = new Set<string>()
  persons.add(book.meta.author)
  for (const figure of book.figures) {
    for (const part of figure.name.split('/')) {
      persons.add(part.trim())
      const words = part.trim().split(/\s+/)
      if (words.length > 1) persons.add(words[words.length - 1])
    }
  }
  return persons
}

function classifyBold(text: string, persons: Set<string>): string {
  const trimmed = text.trim()
  if (!trimmed) return trimmed

  for (const person of persons) {
    if (trimmed === person || trimmed.includes(person)) {
      return `<span class="person">${trimmed}</span>`
    }
  }

  if (NUM_PATTERN.test(trimmed) || /\(\d{4}/.test(trimmed)) {
    return `<span class="num">${trimmed}</span>`
  }

  return `<span class="term">${trimmed}</span>`
}

export function enrichInlineHtml(html: string, persons: Set<string>): string {
  if (/class="(?:term|person|num|key-term)"/.test(html)) {
    return html
  }

  let result = html

  result = result.replace(/\*\*([^*]+)\*\*/g, (_, text: string) => classifyBold(text, persons))
  result = result.replace(/<strong>([^<]+)<\/strong>/g, (_, text: string) => classifyBold(text, persons))

  return result
}

function stripClavePrefix(html: string): string {
  return html
    .replace(/^<strong>Clave:<\/strong>\s*/i, '')
    .replace(/^\*\*Clave:\*\*\s*/, '')
    .trim()
}

function addKeyTerm(html: string): string {
  if (/class="key-term"/.test(html)) return html

  const termMatch = html.match(/<span class="term">([^<]+)<\/span>/)
  if (termMatch) {
    return html.replace(
      termMatch[0],
      `<span class="key-term">${termMatch[1]}</span>`,
    )
  }

  const words = html.split(/\s+/).slice(0, 6).join(' ')
  if (words.length > 8) {
    return `<span class="key-term">${words}</span>${html.slice(words.length)}`
  }

  return html
}

function enrichBlocks(blocks: ContentBlock[], persons: Set<string>): ContentBlock[] {
  const output: ContentBlock[] = []
  let firstParagraphSeen = false

  for (const block of blocks) {
    if (block.type === 'paragraph') {
      const raw = block.html
      const isKey =
        /^<strong>Clave:<\/strong>/i.test(raw) ||
        /^\*\*Clave:\*\*/.test(raw) ||
        raw.startsWith('<strong>Clave:</strong>')

      if (isKey) {
        const keyHtml = addKeyTerm(enrichInlineHtml(stripClavePrefix(raw), persons))
        output.push({ type: 'key', html: keyHtml })
        continue
      }

      const enriched: ContentBlock = {
        type: 'paragraph',
        html: enrichInlineHtml(raw, persons),
      }

      if (!firstParagraphSeen) {
        enriched.variant = 'lead'
        firstParagraphSeen = true
      }

      output.push(enriched)
      continue
    }

    if (block.type === 'list') {
      output.push({
        type: 'list',
        items: block.items.map((item) => enrichInlineHtml(item, persons)),
      })
      continue
    }

    if (block.type === 'quote') {
      output.push({
        type: 'quote',
        text: enrichInlineHtml(block.text, persons),
        attribution: block.attribution,
      })
      continue
    }

    output.push(block)
  }

  return output
}

export function enrichBook(book: BookSummary): BookSummary {
  const persons = buildPersonSet(book)

  for (const person of persons) {
    if (!person || person.length < 4) continue
    const re = new RegExp(`\\b(${escapeRegex(person)})\\b(?![^<]*>)`, 'g')
    // applied per-block below via classifyBold instead
    void re
  }

  return {
    ...book,
    sections: book.sections.map(
      (section): Section => ({
        ...section,
        blocks: enrichBlocks(section.blocks, persons),
      }),
    ),
  }
}

function jsString(value: string): string {
  return JSON.stringify(value)
}

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n')
}

function renderBlock(block: ContentBlock, level: number): string {
  const pad = ' '.repeat(level)
  const inner = level + 2

  switch (block.type) {
    case 'paragraph': {
      const variant = block.variant === 'lead' ? `\n${' '.repeat(inner)}variant: 'lead',` : ''
      return `${pad}{\n${' '.repeat(inner)}type: 'paragraph',${variant}\n${' '.repeat(inner)}html: ${jsString(block.html)},\n${pad}},`
    }
    case 'key':
      return `${pad}{\n${' '.repeat(inner)}type: 'key',\n${' '.repeat(inner)}html: ${jsString(block.html)},\n${pad}},`
    case 'quote': {
      const attribution = block.attribution
        ? `\n${' '.repeat(inner)}attribution: ${jsString(block.attribution)},`
        : ''
      return `${pad}{\n${' '.repeat(inner)}type: 'quote',\n${' '.repeat(inner)}text: ${jsString(block.text)},${attribution}\n${pad}},`
    }
    case 'concept-grid':
      return `${pad}{\n${' '.repeat(inner)}type: 'concept-grid',\n${' '.repeat(inner)}items: ${indent(JSON.stringify(block.items, null, 2).replace(/^/gm, '').trimEnd(), inner)},\n${pad}},`
    case 'big-numbers':
      return `${pad}{\n${' '.repeat(inner)}type: 'big-numbers',\n${' '.repeat(inner)}items: ${indent(JSON.stringify(block.items, null, 2).replace(/^/gm, '').trimEnd(), inner)},\n${pad}},`
    case 'timeline':
      return `${pad}{\n${' '.repeat(inner)}type: 'timeline',\n${' '.repeat(inner)}items: ${indent(JSON.stringify(block.items, null, 2).replace(/^/gm, '').trimEnd(), inner)},\n${pad}},`
    case 'list':
      return `${pad}{\n${' '.repeat(inner)}type: 'list',\n${' '.repeat(inner)}items: ${indent(JSON.stringify(block.items, null, 2).replace(/^/gm, '').trimEnd(), inner)},\n${pad}},`
    case 'divider':
      return `${pad}{ type: 'divider' },`
    default:
      return `${pad}${JSON.stringify(block)},`
  }
}

export function bookToTypeScript(book: BookSummary, exportName: string): string {
  const metaLines = [
    `title: ${jsString(book.meta.title)},`,
    book.meta.titleEs ? `titleEs: ${jsString(book.meta.titleEs)},` : null,
    `subtitle: ${jsString(book.meta.subtitle)},`,
    `author: ${jsString(book.meta.author)},`,
    `meta: ${JSON.stringify(book.meta.meta, null, 2)
      .split('\n')
      .map((line, i) => (i === 0 ? line : `  ${line}`))
      .join('\n')},`,
  ]
    .filter(Boolean)
    .join('\n    ')

  const sections = book.sections
    .map(
      (section) => `    {
      id: ${jsString(section.id)},
      num: ${jsString(section.num)},
      title: ${jsString(section.title)},
      blocks: [
${section.blocks.map((block) => renderBlock(block, 8)).join('\n')}
      ],
    }`,
    )
    .join(',\n')

  return `import type { BookSummary } from '../types/book'

export const ${exportName}: BookSummary = {
  slug: ${jsString(book.slug)},
  meta: {
    ${metaLines}
  },
  toc: ${JSON.stringify(book.toc, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join('\n')},
  sections: [
${sections}
  ],
  keyConcepts: ${JSON.stringify(book.keyConcepts, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join('\n')},
  chronology: ${JSON.stringify(book.chronology, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join('\n')},
  figures: ${JSON.stringify(book.figures, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join('\n')},
  closing: {
    title: ${jsString(book.closing.title)},
    lines: ${JSON.stringify(book.closing.lines, null, 2)
      .split('\n')
      .map((line, i) => (i === 0 ? line : `    ${line}`))
      .join('\n')},
    highlight: ${jsString(book.closing.highlight)},
  },
  footer: {
    line1: ${jsString(book.footer.line1)},
    line2: ${jsString(book.footer.line2)},
  },
}
`
}
