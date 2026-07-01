export interface PhaseQuestion {
  id: string
  text: string
}

export const PHASE_QUESTIONS: Record<number, PhaseQuestion[]> = {
  1: [
    {
      id: 'p1-q1',
      text: '¿Cómo cambia tu intuición sobre el universo al pasar de la escala humana a la cósmica?',
    },
    {
      id: 'p1-q2',
      text: '¿Qué papel juega la ciencia frente al misterio de por qué hay algo en lugar de nada?',
    },
    {
      id: 'p1-q3',
      text: '¿Qué idea de esta fase te resulta más difícil de imaginar y por qué?',
    },
  ],
  2: [
    {
      id: 'p2-q1',
      text: '¿En qué sentido la evolución es ciega pero no arbitraria?',
    },
    {
      id: 'p2-q2',
      text: '¿Cómo reconciliás el nivel del gen con el de la especie o el organismo?',
    },
    {
      id: 'p2-q3',
      text: '¿Qué evidencia de esta fase te pareció más convincente?',
    },
  ],
  3: [
    {
      id: 'p3-q1',
      text: '¿Cómo encaja la contingencia histórica con leyes generales en el origen de la vida?',
    },
    {
      id: 'p3-q2',
      text: '¿Qué nos dice la búsqueda de biosignaturas sobre nuestro lugar en el cosmos?',
    },
  ],
  4: [
    {
      id: 'p4-q1',
      text: '¿Hasta dónde llega lo que el cerebro hace sin que lo sepamos?',
    },
    {
      id: 'p4-q2',
      text: '¿Cómo influye el aprendizaje en la idea que tenés de ti mismo?',
    },
    {
      id: 'p4-q3',
      text: '¿Qué paralelos ves entre buscar vida extraterrestre y entender la mente?',
    },
  ],
  5: [
    {
      id: 'p5-q1',
      text: '¿Qué distingue a una mente biológica de una inteligencia artificial?',
    },
    {
      id: 'p5-q2',
      text: '¿Cuál es el riesgo más serio que plantean estos libros sobre la IA?',
    },
    {
      id: 'p5-q3',
      text: '¿La computación clásica basta para explicar la conciencia?',
    },
  ],
  6: [
    {
      id: 'p6-q1',
      text: '¿Qué narrativa sobre la humanidad te pareció más reveladora o más cuestionable?',
    },
    {
      id: 'p6-q2',
      text: '¿Cómo se relacionan las matemáticas con la realidad según lo leído?',
    },
  ],
  7: [
    {
      id: 'p7-q1',
      text: '¿Tenés libre albedrío después de leer esta fase? ¿Por qué?',
    },
    {
      id: 'p7-q2',
      text: '¿Qué es el yo según los distintos autores de esta fase?',
    },
    {
      id: 'p7-q3',
      text: '¿Dónde ves más tensión: entre determinismo y responsabilidad moral?',
    },
  ],
  8: [
    {
      id: 'p8-q1',
      text: '¿Qué significa que el conocimiento pueda crecer sin límite?',
    },
    {
      id: 'p8-q2',
      text: '¿Cómo cambian tus expectativas sobre certeza y predicción?',
    },
    {
      id: 'p8-q3',
      text: '¿Qué idea de esta fase te gustaría seguir explorando?',
    },
  ],
}

export function getPhaseQuestions(phaseNum: number): PhaseQuestion[] {
  return PHASE_QUESTIONS[phaseNum] ?? []
}
