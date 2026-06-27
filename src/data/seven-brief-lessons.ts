import type { BookSummary } from '../types/book'

export const sevenBriefLessons: BookSummary = {
  slug: "seven-brief-lessons",
  meta: {
    title: "Seven Brief Lessons on Physics",
    subtitle: "Un recorrido rápido por las revoluciones del siglo XX en física",
    author: "Carlo Rovelli",
    meta: [
      "📖 2014 (IT) · 2016 (EN) · Riverhead Books",
      "✍️ Artículos originales en Il Sole 24 Ore"
    ],
    titleEs: "Siete breves lecciones de física"
  },
  toc: [
    {
      id: "prefacio",
      num: "00",
      label: "Prefacio"
    },
    {
      id: "cap1",
      num: "01",
      label: "La teoría más bella"
    },
    {
      id: "cap2",
      num: "02",
      label: "Quanta"
    },
    {
      id: "cap3",
      num: "03",
      label: "Arquitectura del cosmos"
    },
    {
      id: "cap4",
      num: "04",
      label: "Partículas"
    },
    {
      id: "cap5",
      num: "05",
      label: "Granos de espacio"
    },
    {
      id: "cap6",
      num: "06",
      label: "Probabilidad, tiempo y calor de agujeros negros"
    },
    {
      id: "cap7",
      num: "07",
      label: "Nosotros"
    },
    {
      id: "conceptos",
      num: "✦",
      label: "Conceptos clave"
    },
    {
      id: "cronologia",
      num: "◈",
      label: "Cronología"
    },
    {
      id: "figuras",
      num: "✦",
      label: "Figuras clave"
    },
    {
      id: "cierre",
      num: "—",
      label: "La idea central"
    }
  ],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Siete lecciones para quien no sabe nada",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Estas lecciones están escritas para quienes ignoran casi todo de la ciencia moderna. Juntas ofrecen una panorámica rápida de lo más fascinante de la revolución física de los siglos XX y XXI — y de las preguntas que aún abren."
        },
        {
          type: "paragraph",
          html: "La primera lección trata la relatividad general de Einstein; la segunda, la mecánica cuántica; la tercera, el cosmos; la cuarta, partículas elementales; la quinta, gravedad cuántica; la sexta, probabilidad y calor de agujeros negros; la séptima, nosotros mismos frente a ese mundo."
        },
        {
          type: "paragraph",
          html: "Son expansiones de artículos publicados en el suplemento dominical del diario italiano <em>Il Sole 24 Ore</em>. Rovelli agradece a <span class=\"person\">Armando Massarenti</span> por abrir las páginas culturales del domingo a la ciencia."
        }
      ]
    },
    {
      id: "cap1",
      num: "01",
      title: "La teoría más bella (relatividad general)",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "En <span class=\"num\">1905</span> Einstein envió tres artículos revolucionarios al <em>Annalen der Physik</em>. El tercero fue la relatividad especial; pero no encajaba con la gravedad newtoniana. Diez años de trabajo culminaron en noviembre de <span class=\"num\">1915</span> con la <span class=\"term\">relatividad general</span>, «la teoría más bella» según <span class=\"person\">Lev Landau</span>."
        },
        {
          type: "paragraph",
          html: "Tras Faraday y Maxwell, Einstein comprendió que la gravedad debe transmitirse por un campo. Su genialidad: el <span class=\"term\">campo gravitatorio es el espacio mismo</span>. Newton imaginó espacio vacío + fuerza a distancia; Einstein unificó ambos: espacio que ondula, se curva y retuerce."
        },
        {
          type: "paragraph",
          html: "Gauss describió superficies curvas; su alumno <span class=\"person\">Riemann</span> generalizó a dimensiones superiores. La curvatura R equivale a la energía de la materia. Predicciones verificadas: desviación de la luz (<span class=\"num\">1919</span>), dilatación temporal en altura, agujeros negros, expansión del universo, radiación cósmica de fondo, ondas gravitacionales (precisión 1:10¹¹)."
        },
        {
          type: "quote",
          text: "«El campo gravitatorio no está difundido en el espacio: el campo gravitatorio <em>es</em> ese espacio.»",
          attribution: "Carlo Rovelli (parafraseando la idea de Einstein)"
        },
        {
          type: "key",
          html: "Una intuición elemental — espacio = campo gravitatorio — se condensa en una ecuación que predijo un universo más extraño que cualquier ficción."
        }
      ]
    },
    {
      id: "cap2",
      num: "02",
      title: "Quanta (mecánica cuántica)",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Relatividad general: gema compacta de una sola mente. Mecánica cuántica: éxito experimental enorme pero envuelta en misterio. Nació en <span class=\"num\">1900</span> cuando <span class=\"person\">Max Planck</span> repartió la energía del campo en «cuantos» para resolver la radiación de cuerpo negro."
        },
        {
          type: "paragraph",
          html: "Einstein (<span class=\"num\">1905</span>) mostró que los cuantos de luz son reales — <span class=\"term\">fotones</span>. «Me parece que…» escribió, como Darwin con la evolución. Bohr en Copenhague: electrones saltan entre órbitas discretas; Heisenberg: el electrón no siempre existe, solo al interactuar; la química entera sale de una ecuación."
        },
        {
          type: "paragraph",
          html: "Probabilidad en el corazón de la física. Einstein nominó a Heisenberg al Nobel pero rechazó la interpretación: «Dios no juega a los dados». Bohr defendió que la realidad es relacional. Un siglo después seguimos sin acuerdo: ¿realidad indescribible, pista incompleta o interacción como esencia?"
        },
        {
          type: "key",
          html: "La mecánica cuántica no describe qué es un sistema, sino cómo afecta a otro — y funciona demasiado bien para ignorarla."
        }
      ]
    },
    {
      id: "cap3",
      num: "03",
      title: "Arquitectura del cosmos",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Antes de medir, la ciencia es visión. Anaximandro (<span class=\"num\">~VI a.C.</span>) reemplazó «cielo arriba, tierra abajo» por Tierra flotando en el espacio. Aristóteles y Ptolomeo: esferas celestes. Copérnico: el Sol en el centro; Galileo: movimiento relativo en barcos."
        },
        {
          type: "paragraph",
          html: "El Sol es una estrella entre cien mil millones en la Galaxia; la Galaxia, un punto entre cientos de miles de millones de galaxias (foto Hubble). La mayoría de esas estrellas tienen planetas — miles de billones de mundos posibles."
        },
        {
          type: "paragraph",
          html: "Pero el espacio no es plano: está <span class=\"term\">curvado</span>, ondulado como el mar, con agujeros negros. El universo entero emergió de una nube minúscula, caliente y densa hace unos <span class=\"num\">15 mil millones</span> de años. ¿Antes? ¿Otros universos? Aún no lo sabemos."
        },
        {
          type: "key",
          html: "Cada salto cosmológico humilló nuestra posición central — y amplió la maravilla."
        }
      ]
    },
    {
      id: "cap4",
      num: "04",
      title: "Partículas (Modelo Estándar)",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Todo lo tangible: electrones y <span class=\"term\">quarks</span> (nombre de Gell-Mann, inspirado en Joyce). Gluones «pegan» quarks en protones y neutrones. Fotones, neutrinos, bosón de Higgs (<span class=\"num\">2013</span>, CERN): menos de diez tipos de ladrillos elementales."
        },
        {
          type: "paragraph",
          html: "Partículas = cuantos de campos cuánticos; no piedras eternas sino excitaciones efímeras del vacío, que nunca está vacío (fluctuaciones como oleaje mínimo). El <span class=\"term\">Modelo Estándar</span> (1970s) predice todo lo medido, pero parece «parcheado»; renormalización funciona pero deja mal sabor."
        },
        {
          type: "paragraph",
          html: "Limitación: <span class=\"term\">materia oscura</span> — masa gravitatoria invisible alrededor de galaxias, no descrita por el Modelo Estándar. Teorías elegantes (SU(5), supersimetría) fallaron en experimentos (desintegración del protón, partículas super simétricas)."
        },
        {
          type: "key",
          html: "Por ahora el Modelo Estándar es lo mejor que tenemos para la materia — feo quizá, pero extraordinariamente preciso."
        }
      ]
    },
    {
      id: "cap5",
      num: "05",
      title: "Granos de espacio (gravedad cuántica)",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Relatividad general: espacio curvo y continuo. Mecánica cuántica: saltos discretos. Ambas funcionan; ambas se contradicen. «Gravedad cuántica» busca la síntesis — como Newton unió caídas y órbitas, Maxwell electricidad y magnetismo."
        },
        {
          type: "paragraph",
          html: "<span class=\"term\">Gravedad cuántica de bucles</span> (Rovelli): el espacio no es continuo sino granular — «átomos de espacio» ~10⁻³³ cm, enlazados en redes. El espacio no contiene cosas: <em>es</em> esa red. El tiempo fundamental también desaparece; el cambio es local, sin orquesta única."
        },
        {
          type: "paragraph",
          html: "Predicciones especulativas: estrellas colapsadas rebotan como «estrella de Planck»; agujeros negros explotan en cámara lenta; el Big Bang pudo ser un <span class=\"term\">Big Bounce</span> de un universo anterior. Aún sin verificación experimental directa."
        },
        {
          type: "key",
          html: "Espacio y tiempo emergen de interacciones cuánticas — la realidad más lejana aún de nuestros instintos."
        }
      ]
    },
    {
      id: "cap6",
      num: "06",
      title: "Probabilidad, tiempo y calor de agujeros negros",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "«¿Qué es el calor?» Calor = átomos que se mueven más rápido. Siempre fluye de lo caliente a lo frío — ahí nace la diferencia pasado/futuro cuando hay fricción. Boltzmann: es pura <span class=\"term\">probabilidad</span>; estadísticamente más probable equilibrar temperaturas."
        },
        {
          type: "paragraph",
          html: "Esta probabilidad clásica (ignorancia de microestados) difiere de la cuántica. El «ahora» no existe objetivamente en física — Einstein a Besso: «past, present and future» son ilusión persistente. El flujo del tiempo emerge de termodinámica e interacciones limitadas, no de ecuaciones exactas."
        },
        {
          type: "paragraph",
          html: "<span class=\"person\">Stephen Hawking</span>: agujeros negros tienen temperatura y emiten calor (radiación Hawking) — primer indicio de «espacio caliente». Une cuántica, gravedad y termodinámica; clave Rosetta del tiempo."
        },
        {
          type: "key",
          html: "Solo cuando hay intercambio de calor distinguimos pasado de futuro; nuestro reloj interior es estadístico, no fundamental."
        }
      ]
    },
    {
      id: "cap7",
      num: "07",
      title: "Nosotros (cierre reflexivo)",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "¿Qué somos en un cosmos de quanta y campos? Observadores que construyen la «fotografía» de la realidad; nodos en una red de intercambio de información; parte integral del mundo, no espectadores externos."
        },
        {
          type: "paragraph",
          html: "Schelling creía al hombre cumbre de la naturaleza; hoy sabemos que somos un rincón remoto, parientes de mariposas y álamos. Kant pensaba categorías universales; evolucionan con nuestra especie. La ciencia no es ficción campamental: sigue rastros como antepasados en la sabana."
        },
        {
          type: "paragraph",
          html: "Libertad sin violar leyes naturales: actuar según procesos neuronales internos (Spinoza: «yo» = complejo neuronal). Consciencia aún abierta (Tononi, teoría de información integrada). Valores, lágrimas y música son tan reales por ser naturaleza."
        },
        {
          type: "quote",
          text: "«No estamos hechos de algo distinto a la naturaleza; somos naturaleza, en una de sus infinitas variaciones.»",
          attribution: "Carlo Rovelli"
        },
        {
          type: "key",
          html: "Conocer el universo cuántico no nos aleja de lo humano — nos sitúa en casa, hechos del mismo polvo estelar."
        }
      ]
    }
  ],
  keyConcepts: [
    {
      title: "Relatividad general",
      description: "Gravedad = curvatura del espaciotiempo; espacio y campo unificados."
    },
    {
      title: "Cuantos",
      description: "Paquetes discretos de energía; luz como fotones."
    },
    {
      title: "Mecánica cuántica",
      description: "Probabilidad, saltos, realidad relacional entre interacciones."
    },
    {
      title: "Modelo Estándar",
      description: "Teoría de partículas elementales y fuerzas (excepto gravedad)."
    },
    {
      title: "Materia oscura",
      description: "Masa gravitatoria no explicada por partículas conocidas."
    },
    {
      title: "Gravedad cuántica de bucles",
      description: "Espacio granular; tiempo emergente de procesos locales."
    },
    {
      title: "Entropía",
      description: "Desorden estadístico; flecha del tiempo termodinámica."
    },
    {
      title: "Radiación Hawking",
      description: "Agujeros negros emiten calor por efectos cuánticos."
    },
    {
      title: "Big Bounce",
      description: "Posible rebote cósmico previo al Big Bang."
    },
    {
      title: "Realidad relacional",
      description: "Propiedades definidas por interacciones, no substancias aisladas."
    }
  ],
  chronology: [
    {
      year: "1900",
      text: "Planck introduce cuantos de energía (cuerpo negro)."
    },
    {
      year: "1905",
      text: "Einstein: fotones, relatividad especial, movimiento browniano."
    },
    {
      year: "1915",
      text: "Einstein completa relatividad general."
    },
    {
      year: "1919",
      text: "Medición de desviación de luz estelar confirma Einstein."
    },
    {
      year: "1920s",
      text: "Bohr, Heisenberg, Schrödinger: mecánica cuántica madura."
    },
    {
      year: "1930",
      text: "Expansión del universo observada."
    },
    {
      year: "1960s–70s",
      text: "Modelo Estándar de partículas; descubrimiento de CMB."
    },
    {
      year: "1906",
      text: "Boltzmann muere; entropía estadística reconocida después."
    },
    {
      year: "1970s",
      text: "Teoría SU(5) propuesta; protón no se desintegra."
    },
    {
      year: "2013",
      text: "Higgs boson detectado en LHC (CERN)."
    },
    {
      year: "2014–2016",
      text: "Rovelli publica lecciones (Adelphi / Riverhead)."
    }
  ],
  figures: [
    {
      name: "Albert Einstein",
      role: "Relatividad especial y general · Fotones"
    },
    {
      name: "Max Planck",
      role: "Origen de los cuantos (1900)"
    },
    {
      name: "Niels Bohr",
      role: "Modelo atómico · Copenhague"
    },
    {
      name: "Werner Heisenberg",
      role: "Matriz cuántica · Incertidumbre"
    },
    {
      name: "James Clerk Maxwell",
      role: "Campo electromagnético"
    },
    {
      name: "Carl Friedrich Gauss",
      role: "Geometría de superficies"
    },
    {
      name: "Bernhard Riemann",
      role: "Curvatura multidimensional"
    },
    {
      name: "Murray Gell-Mann",
      role: "Quarks · Modelo Estándar"
    },
    {
      name: "Ludwig Boltzmann",
      role: "Entropía estadística"
    },
    {
      name: "Stephen Hawking",
      role: "Radiación de agujeros negros"
    }
  ],
  closing: {
    title: "La idea central",
    lines: [
      "La física del siglo XX regaló dos joyas incompatibles pero prodigiosas.",
      "Relatividad y cuántica cambiaron espacio, tiempo, materia y azar.",
      "Seguimos buscando el lenguaje que las una — y qué somos dentro.",
      "La ciencia no nos extrae del mundo: nos muestra de qué estamos hechos",
      "En el borde del océano de lo desconocido brilla el misterio.",
      "Y eso, dice Rovelli, es lo más hermoso."
    ],
    highlight: "La ciencia no nos extrae del mundo: nos muestra de qué estamos hechos"
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Carlo Rovelli",
    line2: "\"Seven Brief Lessons on Physics\" · Riverhead Books · 2016"
  }
}
