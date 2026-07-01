export type ChangelogCategory = 'nuevas-funciones' | 'ajustes-ux-ui' | 'cambios-mejoras'

export interface ChangelogItem {
  title: string
  description: string
  subItems: string[]
  nestedSubItems: string[][]
}

export interface ChangelogCategoryGroup {
  category: ChangelogCategory
  label: string
  changes: ChangelogItem[]
}

export interface ParsedChangelogVersion {
  version: string
  date: string
  categories: ChangelogCategoryGroup[]
  hasCategories: boolean
}

export const CHANGELOG_CATEGORY_CONFIG: Record<
  ChangelogCategory,
  { label: string; tone: 'success' | 'info' | 'warning' }
> = {
  'nuevas-funciones': { label: 'Nuevas funciones', tone: 'success' },
  'ajustes-ux-ui': { label: 'Ajustes UX/UI', tone: 'info' },
  'cambios-mejoras': { label: 'Cambios/Mejoras', tone: 'warning' },
}

function emptyItem(): ChangelogItem {
  return { title: '', description: '', subItems: [], nestedSubItems: [] }
}

function detectCategory(line: string): ChangelogCategory | null {
  const trimmed = line.trim()
  if (trimmed === '### Nuevas funciones') return 'nuevas-funciones'
  if (trimmed === '### Ajustes UX/UI') return 'ajustes-ux-ui'
  if (trimmed === '### Cambios/Mejoras') return 'cambios-mejoras'
  return null
}

export function parseChangelog(content: string): ParsedChangelogVersion[] {
  const blocks = content.split(/(?:^|\n)(?=##\s*\[Versión)/)

  return blocks
    .filter((block) => block.trim() && block.includes('[Versión'))
    .map((block) => {
      const versionMatch = block.match(/##\s*\[Versión\s+([^\]]+)\]/)
      const dateMatch = block.match(/>\s*(\d{4}-\d{2}-\d{2})/)

      if (!versionMatch) return null

      const version = versionMatch[1]
      const date = dateMatch ? dateMatch[1] : 'Unknown'

      let body = ''
      if (dateMatch) {
        body = block.substring(block.indexOf(dateMatch[0]) + dateMatch[0].length).trim()
      }

      const categories: ChangelogCategoryGroup[] = []
      let currentCategory: ChangelogCategoryGroup | null = null
      const uncategorizedChanges: ChangelogItem[] = []
      let currentChange = emptyItem()

      const processCurrentChange = (): void => {
        if (!currentChange.title && !currentChange.description) return

        if (currentCategory) {
          currentCategory.changes.push({ ...currentChange, nestedSubItems: [...currentChange.nestedSubItems] })
        } else {
          uncategorizedChanges.push({ ...currentChange, nestedSubItems: [...currentChange.nestedSubItems] })
        }
        currentChange = emptyItem()
      }

      for (const line of body.split('\n')) {
        const trimmedLine = line.trim()
        if (!trimmedLine) continue

        const category = detectCategory(line)
        if (category) {
          processCurrentChange()
          if (currentCategory) categories.push(currentCategory)
          currentCategory = {
            category,
            label: CHANGELOG_CATEGORY_CONFIG[category].label,
            changes: [],
          }
          continue
        }

        const isNestedSubItem = /^        -/.test(line)
        const isSubItem = /^    -/.test(line)

        if (isNestedSubItem) {
          const nestedItem = line.substring(9).trim()
          if (currentChange.subItems.length > 0) {
            const lastSubItemIndex = currentChange.subItems.length - 1
            if (!currentChange.nestedSubItems[lastSubItemIndex]) {
              currentChange.nestedSubItems[lastSubItemIndex] = []
            }
            currentChange.nestedSubItems[lastSubItemIndex].push(nestedItem)
          }
        } else if (isSubItem) {
          currentChange.subItems.push(line.substring(5).trim())
          currentChange.nestedSubItems.push([])
        } else if (trimmedLine.startsWith('- **') || trimmedLine.startsWith('- ')) {
          processCurrentChange()

          if (trimmedLine.startsWith('- **')) {
            const match = trimmedLine.match(/^-\s*\*\*(.+?)\*\*:?\s*(.*)$/)
            if (match) {
              currentChange = {
                title: match[1],
                description: match[2] || '',
                subItems: [],
                nestedSubItems: [],
              }
            }
          } else {
            currentChange = {
              title: trimmedLine.substring(2).trim(),
              description: '',
              subItems: [],
              nestedSubItems: [],
            }
          }
        } else {
          currentChange.description += ` ${trimmedLine}`
        }
      }

      processCurrentChange()
      if (currentCategory) categories.push(currentCategory)

      const hasCategories = categories.length > 0

      if (uncategorizedChanges.length > 0 && !hasCategories) {
        categories.push({
          category: 'cambios-mejoras',
          label: CHANGELOG_CATEGORY_CONFIG['cambios-mejoras'].label,
          changes: uncategorizedChanges,
        })
      }

      return { version, date, categories, hasCategories }
    })
    .filter((version): version is ParsedChangelogVersion => version !== null)
}

export function formatChangelogBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}
