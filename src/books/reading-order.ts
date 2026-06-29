/**
 * Número de lectura según fuentes/orden-de-lectura.md (Fases 1–8).
 * Mantener sincronizado al agregar libros al catálogo.
 */
export const READING_ORDER_BY_SLUG: Record<string, number> = {
  cosmos: 1,
  'universo-de-la-nada': 2,
  'why-does-world-exist': 3,
  'biggest-ideas-universe': 4,
  'seven-brief-lessons': 5,
  'selfish-gene': 6,
  'why-evolution-is-true': 7,
  'blind-watchmaker': 8,
  'vital-question': 9,
  'wonderful-life': 10,
  origins: 11,
  'intelligent-life-universe': 12,
  'biosignatures-astrobiology': 13,
  'murmurs-of-earth': 14,
  incognito: 15,
  'the-brain': 16,
  'how-we-learn': 17,
  'future-of-the-mind': 18,
  'emperors-new-mind': 19,
  'life-3-0': 20,
  superintelligence: 21,
  'our-mathematical-universe': 22,
  sapiens: 23,
  'homo-deus': 24,
  '21-lessons': 25,
  determined: 26,
  'free-will': 27,
  'ego-tunnel': 28,
  'godel-escher-bach': 29,
  livewired: 30,
  'self-assembling-brain': 31,
  'fabric-of-reality': 32,
  'beginning-of-infinity': 33,
  'black-swan': 34,
}

export function getReadingOrder(slug: string): number | undefined {
  return READING_ORDER_BY_SLUG[slug]
}
