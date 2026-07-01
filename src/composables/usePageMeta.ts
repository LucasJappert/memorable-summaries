import { onUnmounted, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { absoluteUrl } from '../config/site'

export interface PageMetaInput {
  title: string
  description: string
  /** Ruta relativa al sitio, p. ej. `libro/cosmos` o vacío para home */
  canonicalPath?: string
  ogType?: 'website' | 'article'
  /** Ruta relativa o URL absoluta */
  ogImage?: string
  ogImageWidth?: number
  ogImageHeight?: number
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

const MANAGED_ATTR = 'data-page-meta'

function resolveImageUrl(image: string): string {
  return image.startsWith('http') ? image : absoluteUrl(image)
}

function upsertHeadElement<T extends HTMLElement>(
  selector: string,
  create: () => T,
  update: (element: T) => void,
): T {
  let element = document.head.querySelector<T>(selector)
  if (!element) {
    element = create()
    element.setAttribute(MANAGED_ATTR, '')
    document.head.appendChild(element)
  }
  update(element)
  return element
}

function setMetaTag(
  key: 'name' | 'property',
  value: string,
  content: string,
): void {
  upsertHeadElement(
    `meta[${key}="${value}"]`,
    () => {
      const meta = document.createElement('meta')
      meta.setAttribute(key, value)
      return meta
    },
    (meta) => {
      meta.setAttribute('content', content)
    },
  )
}

function setPageMeta(meta: PageMetaInput): void {
  document.title = meta.title

  setMetaTag('name', 'description', meta.description)

  const canonicalUrl = meta.canonicalPath !== undefined ? absoluteUrl(meta.canonicalPath) : undefined
  const ogImage = meta.ogImage ? resolveImageUrl(meta.ogImage) : undefined

  setMetaTag('property', 'og:type', meta.ogType ?? 'website')
  setMetaTag('property', 'og:title', meta.title)
  setMetaTag('property', 'og:description', meta.description)

  if (canonicalUrl) {
    setMetaTag('property', 'og:url', canonicalUrl)
    upsertHeadElement(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement('link')
        link.rel = 'canonical'
        return link
      },
      (link) => {
        link.href = canonicalUrl
      },
    )
  }

  if (ogImage) {
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('name', 'twitter:image', ogImage)
    if (meta.ogImageWidth) {
      setMetaTag('property', 'og:image:width', String(meta.ogImageWidth))
    }
    if (meta.ogImageHeight) {
      setMetaTag('property', 'og:image:height', String(meta.ogImageHeight))
    }
  }

  setMetaTag('name', 'twitter:card', 'summary_large_image')
  setMetaTag('name', 'twitter:title', meta.title)
  setMetaTag('name', 'twitter:description', meta.description)

  document.head.querySelectorAll('script[data-page-meta-jsonld]').forEach((node) => node.remove())

  if (meta.jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page-meta-jsonld', '')
    script.setAttribute(MANAGED_ATTR, '')
    script.textContent = JSON.stringify(meta.jsonLd)
    document.head.appendChild(script)
  }
}

function clearManagedMeta(): void {
  document.head.querySelectorAll(`[${MANAGED_ATTR}]`).forEach((node) => node.remove())
  document.head.querySelectorAll('script[data-page-meta-jsonld]').forEach((node) => node.remove())
}

export function usePageMeta(source: MaybeRefOrGetter<PageMetaInput | null | undefined>): void {
  watch(
    () => toValue(source),
    (meta) => {
      clearManagedMeta()
      if (meta) setPageMeta(meta)
    },
    { immediate: true },
  )

  onUnmounted(clearManagedMeta)
}
