import type { BookSummary } from '../types/book'

export const universoNada: BookSummary = {
  slug: "universo-de-la-nada",
  meta: {
    title: "Un universo de la nada",
    subtitle: "¿Por qué hay algo en vez de nada?",
    author: "Lawrence M. Krauss",
    meta: [
      "📖 2012 · Ed. Pasado & Presente",
      "✍️ Postfacio de Richard Dawkins",
    ],
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Un relato de misterio cósmico: el principio"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Pesar el universo"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Luz del principio de los tiempos"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Mucho ruido por nada"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El universo desenfrenado"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Regalos a cambio de nada"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Nuestro deprimente futuro"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "¿Accidente magnífico?"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Nada es algo"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "La nada es inestable"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Mundos felices"
  },
  {
    "id": "epilogo",
    "num": "—",
    "label": "Epílogo & Postfacio"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "La pregunta fundamental",
      blocks: [
        {
          type: 'paragraph',
          html: "Krauss arranca con una confesión franca: no siente ninguna cercanía con la idea de que la creación requiera un creador. Copos de nieve y arcoíris surgen espontáneamente de leyes físicas simples, y nadie sugiere que un dios los fabrique uno por uno. ¿Por qué habría de ser distinto con el universo entero?",
        },
        {
          type: 'paragraph',
          html: "La pregunta «¿quién creó al creador?» es la trampa clásica de toda Causa Primera. Krauss declara su objetivo desde la primera página: mostrar que la nada es **inherentemente inestable**, y que el universo *pudo* surgir de la nada por procesos puramente físicos, sin necesidad de ningún agente externo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Un relato de misterio cósmico: el principio",
      blocks: [
        {
          type: 'paragraph',
          html: "En 1916, Einstein completó la relatividad general. Descubrió que sus ecuaciones describen un universo dinámico que se expande o se contrae, pero él, convencido de que el universo es estático, se inventó la **constante cosmológica**: una fuerza repulsiva que contrarresta la gravedad y mantiene todo en su sitio.",
        },
        {
          type: 'paragraph',
          html: "En 1929, Edwin Hubble descubrió que las galaxias se alejan unas de otras: el universo se expande. Einstein llamó a su constante cosmológica «el mayor error de mi vida». Así nació el Big Bang, pero queda una pregunta incómoda: si el universo se expande hoy, en el pasado estuvo más comprimido hasta un punto inicial.",
        },
        {
          type: 'quote',
          text: "«En la teoría de Einstein [...] la gravedad es una fuerza de pura atracción. Esto significa que es imposible tener un conjunto de masas en reposo perpetuo: su atracción gravitatoria mutua terminará provocando que colapsen hacia el interior.»",
          attribution: "Lawrence M. Krauss",
        },
        {
          type: 'key',
          html: "**Clave:** El universo *tuvo* un principio. No es eterno ni estático. La cosmología pasa de ser filosofía a ser ciencia medible.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Luz del principio de los tiempos",
      blocks: [
        {
          type: 'paragraph',
          html: "Medir la geometría del universo es el desafío. ¿Es plano como una hoja (en 3D), o curvo como un globo? El truco consiste en usar el **fondo cósmico de microondas** (CMB), la luz fósil del Big Bang.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~5%",
              "label": "Materia visible (átomos)"
            },
            {
              "value": "~25%",
              "label": "Materia oscura"
            },
            {
              "value": "~70%",
              "label": "Energía oscura ⬤"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La energía que falta no está en las galaxias, ni en los cúmulos, ni en ninguna forma de materia. Está en el **espacio vacío** mismo.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Regalos a cambio de nada",
      blocks: [
        {
          type: 'paragraph',
          html: "La **inflación cósmica**, que Alan Guth propuso en 1981, describe cómo una fracción de segundo después del Big Bang el universo experimentó una expansión exponencial, duplicando su tamaño cada 10⁻³⁴ segundos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Uniformidad",
              "description": "Explica por qué el CMB tiene la misma temperatura en regiones del cielo que nunca estuvieron en contacto térmico.",
              "icon": "🌡️"
            },
            {
              "title": "Planitud",
              "description": "Por qué el universo es tan cercanamente plano: la inflación estiró cualquier curvatura hasta hacerla indetectable.",
              "icon": "📐"
            },
            {
              "title": "Semillas",
              "description": "Las fluctuaciones cuánticas durante la inflación se estiraron a escalas macroscópicas y dieron origen a las galaxias.",
              "icon": "🌀"
            }
          ],
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "La nada es inestable",
      blocks: [
        {
          type: 'paragraph',
          html: "Este es el corazón del libro. La idea central es que **la nada no es estable**: las fluctuaciones cuánticas pueden crear algo a partir de nada.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Creación espontánea",
              "description": "Las fluctuaciones cuánticas pueden producir partículas que persisten si la geometría del espacio lo permite.",
              "icon": "🫧"
            },
            {
              "title": "Radiación de Hawking",
              "description": "Los agujeros negros emiten radiación porque pares virtuales se separan en el horizonte de sucesos.",
              "icon": "⚡"
            },
            {
              "title": "Universo túnel",
              "description": "El universo pudo surgir de la nada por efecto túnel cuántico, sin que las leyes cuánticas requieran un «antes».",
              "icon": "🌌"
            }
          ],
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Inflatón",
    "description": "Campo hipotético cuya energía impulsó la inflación cósmica."
  },
  {
    "title": "Energía oscura",
    "description": "Energía del espacio vacío que acelera la expansión. ~70% del universo."
  },
  {
    "title": "Materia oscura",
    "description": "Materia invisible gravitacional. ~25% del universo."
  },
  {
    "title": "Constante cosmológica",
    "description": "Término de Einstein: densidad de energía constante del vacío."
  },
  {
    "title": "Fluctuaciones cuánticas",
    "description": "Variaciones temporales en la energía del vacío. Semilla de toda estructura."
  },
  {
    "title": "Principio antrópico",
    "description": "Observamos un universo compatible con nuestra existencia porque si no, no estaríamos aquí."
  },
  {
    "title": "Efecto Casimir",
    "description": "Atracción entre placas por presión del vacío cuántico."
  },
  {
    "title": "Big Rip",
    "description": "Escenario donde la energía oscura desgarra hasta los átomos."
  }
],
  chronology: [
  {
    "year": "1916",
    "text": "Einstein completa la relatividad general. Inventa la constante cosmológica."
  },
  {
    "year": "1929",
    "text": "Hubble descubre la expansión del universo."
  },
  {
    "year": "1965",
    "text": "Penzias y Wilson descubren el CMB."
  },
  {
    "year": "1970s",
    "text": "Vera Rubin descubre evidencia de materia oscura."
  },
  {
    "year": "1981",
    "text": "Alan Guth propone la inflación cósmica."
  },
  {
    "year": "1998",
    "text": "Perlmutter, Riess y Schmidt descubren expansión acelerada."
  },
  {
    "year": "2003",
    "text": "WMAP confirma universo plano y dominio de energía oscura."
  },
  {
    "year": "2011",
    "text": "Nobel a Perlmutter, Riess y Schmidt."
  }
],
  figures: [
  {
    "name": "Albert Einstein",
    "role": "Relatividad general · Constante cosmológica"
  },
  {
    "name": "Edwin Hubble",
    "role": "Expansión del universo"
  },
  {
    "name": "Vera Rubin",
    "role": "Materia oscura (rotación galáctica)"
  },
  {
    "name": "Alan Guth",
    "role": "Inflación cósmica"
  },
  {
    "name": "Perlmutter/Riess/Schmidt",
    "role": "Expansión acelerada (Nobel 2011)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La nada es inestable.",
  "El universo no solo pudo surgir de la nada.",
  "La energía total del cosmos podría ser exactamente cero.",
  "Todo lo que existe es una fluctuación cuántica.",
  "Somos parte de la nada que, por un momento, aprendió a preguntarse por sí misma."
],
    highlight: "probablemente debió hacerlo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Lawrence M. Krauss",
    line2: "\"Un universo de la nada\" · Ediciones de Pasado & Presente · 2012",
  },
}
