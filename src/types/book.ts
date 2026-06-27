export interface BookMeta {
  /** Título en idioma original del libro */
  title: string
  /** Traducción al español del título; omitir si el original ya está en español */
  titleEs?: string
  subtitle: string
  author: string
  meta: string[]
  /** Overrides opcionales para la portada generativa */
  cover?: {
    monogram?: string
    motif?: 'constellation' | 'orbit' | 'grid' | 'wave'
    /** Ruta pública override; default /covers/<slug>.jpg */
    image?: string
  }
}

export interface TocItem {
  id: string
  num: string
  label: string
}

export interface ConceptItem {
  icon?: string
  title: string
  description: string
}

export interface BigNumberItem {
  value: string
  label: string
}

export interface TimelineItem {
  year: string
  text: string
}

export interface FigureItem {
  name: string
  role: string
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  attribution?: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  html: string
  /** Primer párrafo de sección: tipografía más grande y aire extra */
  variant?: 'default' | 'lead'
}

export interface KeyBlock {
  type: 'key'
  html: string
}

export interface ConceptGridBlock {
  type: 'concept-grid'
  items: ConceptItem[]
}

export interface BigNumbersBlock {
  type: 'big-numbers'
  items: BigNumberItem[]
}

export interface TimelineBlock {
  type: 'timeline'
  items: TimelineItem[]
}

export interface ListBlock {
  type: 'list'
  items: string[]
}

export interface DividerBlock {
  type: 'divider'
}

export type ContentBlock =
  | QuoteBlock
  | ParagraphBlock
  | KeyBlock
  | ConceptGridBlock
  | BigNumbersBlock
  | TimelineBlock
  | ListBlock
  | DividerBlock

export interface Section {
  id: string
  num: string
  title: string
  blocks: ContentBlock[]
  variant?: 'default' | 'closing'
}

export interface BookSummary {
  slug: string
  meta: BookMeta
  toc: TocItem[]
  sections: Section[]
  keyConcepts: ConceptItem[]
  chronology: TimelineItem[]
  figures: FigureItem[]
  closing: {
    title: string
    lines: string[]
    highlight: string
  }
  footer: {
    line1: string
    line2: string
  }
}
