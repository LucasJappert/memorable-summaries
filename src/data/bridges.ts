export interface BookBridge {
  from: string
  to: string
  text: string
}

/** Puentes curados entre libros consecutivos o temáticos de la ruta. */
export const BOOK_BRIDGES: BookBridge[] = [
  {
    from: 'cosmos',
    to: 'universo-de-la-nada',
    text: 'De las estrellas al vacío cuántico: ¿por qué hay algo en lugar de nada?',
  },
  {
    from: 'universo-de-la-nada',
    to: 'why-does-world-exist',
    text: 'Krauss explica el cómo; Holt pregunta el porqué último.',
  },
  {
    from: 'why-does-world-exist',
    to: 'biggest-ideas-universe',
    text: 'Tras la pregunta existencial, el mapa de las grandes ideas del cosmos.',
  },
  {
    from: 'biggest-ideas-universe',
    to: 'seven-brief-lessons',
    text: 'Del panorama filosófico a la precisión de la física en siete lecciones.',
  },
  {
    from: 'seven-brief-lessons',
    to: 'selfish-gene',
    text: 'De las leyes físicas a las leyes de la replicación y la selección.',
  },
  {
    from: 'selfish-gene',
    to: 'blind-watchmaker',
    text: 'El gen egoísta plantea el diseño; Dawkins responde sin relojero.',
  },
  {
    from: 'why-evolution-is-true',
    to: 'blind-watchmaker',
    text: 'Coyne demuestra los hechos; Dawkins explica el mecanismo ciego.',
  },
  {
    from: 'blind-watchmaker',
    to: 'vital-question',
    text: 'Tras la evolución darwiniana, la pregunta energética del origen de la vida.',
  },
  {
    from: 'wonderful-life',
    to: 'origins',
    text: 'Del experimento de Gould a la química prebiótica concreta.',
  },
  {
    from: 'murmurs-of-earth',
    to: 'incognito',
    text: 'Tras buscar señales fuera, exploramos la mente que las buscaría.',
  },
  {
    from: 'future-of-the-mind',
    to: 'emperors-new-mind',
    text: 'Kaku imagina el futuro neural; Penrose cuestiona si la computación basta.',
  },
  {
    from: 'emperors-new-mind',
    to: 'life-3-0',
    text: 'De los límites de la mente humana a la superinteligencia artificial posible.',
  },
  {
    from: 'superintelligence',
    to: 'our-mathematical-universe',
    text: 'Tras el riesgo de la IA, Tegmark pregunta si el cosmos es matemático.',
  },
  {
    from: 'sapiens',
    to: 'homo-deus',
    text: 'De cómo conquistamos el planeta a hacia dónde nos dirige la tecnología.',
  },
  {
    from: 'homo-deus',
    to: '21-lessons',
    text: 'Del futuro utópico a las lecciones urgentes del presente.',
  },
  {
    from: '21-lessons',
    to: 'determined',
    text: 'Harari anticipa el siglo XXI; Sapolsky desmonta el libre albedrío.',
  },
  {
    from: 'self-assembling-brain',
    to: 'fabric-of-reality',
    text: 'Del cerebro que se ensambla solo a los cuatro hilos de Deutsch.',
  },
  {
    from: 'beginning-of-infinity',
    to: 'black-swan',
    text: 'Tras el optimismo de los problemas solubles, Taleb advierte del cisne negro.',
  },
]

const bridgesByFrom = new Map<string, BookBridge>(
  BOOK_BRIDGES.map((bridge) => [bridge.from, bridge]),
)

export function getBridgeFrom(slug: string): BookBridge | undefined {
  return bridgesByFrom.get(slug)
}
