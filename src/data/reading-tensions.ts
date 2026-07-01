export interface ReadingTension {
  slugA: string
  slugB: string
  title: string
  lineA: string
  lineB: string
  /** Dos líneas de síntesis. */
  synthesis: [string, string]
}

export const READING_TENSIONS: ReadingTension[] = [
  {
    slugA: 'beginning-of-infinity',
    slugB: 'black-swan',
    title: 'Explicación vs. impredecibilidad',
    lineA:
      'Cada vez que una sociedad protege la búsqueda de buenas explicaciones, abre un inicio del infinito.',
    lineB:
      'No podemos predecir bien los cisnes negros, pero sí podemos diseñar vidas, organizaciones y carteras menos frágiles a ellos.',
    synthesis: [
      'Deutsch apuesta por el progreso explicativo ilimitado; Taleb insiste en que lo que más importa son los saltos que ningún modelo prevé.',
      'La tensión productiva: optimismo epistémico sin confundir comprensión parcial con control total del futuro.',
    ],
  },
  {
    slugA: 'emperors-new-mind',
    slugB: 'life-3-0',
    title: 'Conciencia física vs. superinteligencia',
    lineA:
      'La conciencia es el emperador desnudo de la IA fuerte: impresionante la pantomima, pero la ropa no existe.',
    lineB:
      'La conversación más importante de nuestro tiempo es qué futuro queremos y cómo alinear la IA con ese deseo.',
    synthesis: [
      'Penrose duda de que el cómputo clásico baste para la mente; Tegmark asume que la inteligencia puede escalar sin límite práctico.',
      'Una lectura conjunta separa el misterio de la experiencia subjetiva del riesgo político de delegar el futuro a sistemas opacos.',
    ],
  },
  {
    slugA: 'ego-tunnel',
    slugB: 'determined',
    title: 'Ilusión del yo vs. causalidad total',
    lineA: 'La conciencia es un túnel sin habitante: solo contenido que se experiencia como «yo».',
    lineB: 'Somos tortugas hasta el fondo; eso no impide cambiar cerebros, leyes ni compasión.',
    synthesis: [
      'Metzinger disuelve el sujeto interior; Sapolsky disuelve la libertad de elegir — pero desde neurociencia evolutiva, no fenomenología.',
      'Si no hay capitán en el túnel ni autor último de la acción, la ética pasa a diseñar entornos que reduzcan daño, no a castigar fantasmas.',
    ],
  },
  {
    slugA: 'free-will',
    slugB: 'determined',
    title: 'Ensayo breve vs. demolición sistemática',
    lineA: 'La ilusión de libre albedrío es, a su vez, una ilusión.',
    lineB: 'Somos tortugas hasta el fondo; eso no impide cambiar cerebros, leyes ni compasión.',
    synthesis: [
      'Harris condensa en pocas páginas la imposibilidad lógica del yo causador; Sapolsky recorre capas biológicas hasta el big bang.',
      'Ambos llegan a abolir el castigo retributivo, pero Determined añade una agenda más explícita de política pública compasiva.',
    ],
  },
]
