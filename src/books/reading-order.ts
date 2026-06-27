/**
 * Número de lectura según fuentes/orden-de-lectura.md (Fases 1–6 + extras omitidos).
 * Mantener sincronizado al agregar libros al catálogo.
 */
export const READING_ORDER_BY_SLUG: Record<string, number> = {
  cosmos: 1,
  'universo-de-la-nada': 2,
  'biggest-ideas-universe': 3,
  'seven-brief-lessons': 4,
  'selfish-gene': 5,
  'why-evolution-is-true': 6,
  'blind-watchmaker': 7,
  'vital-question': 8,
  'wonderful-life': 9,
  // Fase 3+
  // origins: 10,
  superintelligence: 20,
}

export function getReadingOrder(slug: string): number | undefined {
  return READING_ORDER_BY_SLUG[slug]
}
