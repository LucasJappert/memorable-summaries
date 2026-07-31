import type { BookSummary } from '../types/book'

export const wonderfulLife: BookSummary = {
  slug: "wonderful-life",
  meta: {
    title: "Wonderful Life",
    subtitle: "Los fósiles de Burgess y la naturaleza de la historia",
    author: "Stephen Jay Gould",
    meta: [
      "📖 1989 · W. W. Norton & Company",
      "🎬 Título inspirado en la película It's a Wonderful Life de Frank Capra",
    ],
    titleEs: "La vida maravillosa",
  },
  toc: [
  {
    "id": "cierre",
    "num": "★",
    "label": "La idea central"
  },
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio y agradecimientos"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Iconografía de una expectativa"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Antecedentes del Burgess Shale"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Reconstrucción del Burgess Shale: hacia una nueva visión de la vida"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "La visión de Walcott y la naturaleza de la historia"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Mundos posibles: el poder del «puro historial»"
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
  },
  {
    "id": "figuras",
    "num": "✦",
    "label": "Figuras clave"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Prefacio y agradecimientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se entiende la historia de la vida sin convertirla en una escalera hacia el hombre? Gould no responde con una teoría abstracta. Arranca desde un caso concreto, el yacimiento de fósiles llamado <span class=\"term\">Burgess Shale</span> (Formación Burgess), en el parque Yoho de Columbia Británica.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1909</span>, <span class=\"person\">Charles Doolittle Walcott</span> (entonces secretario del Smithsonian) encontró allí animales de cuerpo blando conservados con un detalle excepcional. Durante décadas su lectura tradicionalista hizo «invisibles» esas rarezas. Décadas después, el equipo de <span class=\"person\">Harry Whittington</span> las reinterpretó. Plantearon la <span class=\"term\">contingencia</span> (la idea de que la historia no es predecible ni repetible). Eso implica rebobinar la cinta de la vida hasta el Burgess y volver a correrla: la inteligencia humana sería vanamente improbable.",
        },
        {
          type: 'paragraph',
          html: "Los organismos reconstruidos (cinco ojos, mandíbulas circulares, anatomías casi irreconocibles) son tan extraños como esa nueva visión. El título del libro evoca la película <em>It's a Wonderful Life</em>. Allí un ángel muestra un mundo sin George Bailey, y queda claro el poder de lo aparentemente insignificante.",
        },
        {
          type: 'key',
          html: "La Burgess Shale no solo muestra vida maravillosa del pasado. Obliga a repensar progreso, predictibilidad y el papel del azar en la evolución.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Iconografía de una expectativa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué las imágenes de la evolución nos enseñan a esperar un ascenso hacia el hombre? En <span class=\"num\">1940</span>, el artista <span class=\"person\">Charles R. Knight</span> pintó para National Geographic una fauna del Burgess. Gould sostiene que esos invertebrados son los fósiles animales más importantes del mundo. Aparecen justo después de la <span class=\"term\">explosión cámbrica</span> (la irrupción rápida de casi todos los grandes grupos animales modernos).",
        },
        {
          type: 'paragraph',
          html: "La imagen revela una expectativa cultural. Knight puso en el centro a un artrópodo (animal con exoesqueleto y patas articuladas, como insectos o cangrejos). Las reconstrucciones modernas muestran un ecosistema mucho más diverso y extraño. Los libros de texto suelen dibujar una <span class=\"term\">escalera del progreso</span>: la vida sube hacia la complejidad humana. Gould muestra caricaturas y manuales que repiten esa metáfora falsa.",
        },
        {
          type: 'paragraph',
          html: "El experimento mental clave es <span class=\"term\">rebobinar la cinta de la vida</span>: repetir el periodo cámbrico desde el mismo punto de partida. Ese periodo es la primera gran irrupción de animales complejos en el registro fósil. Si la historia es contingente, no tiene por qué producir vertebrados ni humanos. La Burgess desafía el modelo del cono que se abre hacia el presente: muestra máxima variedad de diseños tempranos y luego una poda brutal. Por eso Gould separa <em>diversidad</em> (cuántas especies hay) de <em>disparidad</em> (cuán distintos son los planes corporales).",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Escalera del progreso",
              "description": "Iconografía falsa: evolución como ascenso hacia el hombre.",
              "icon": "🪜"
            },
            {
              "title": "Cono de diversidad",
              "description": "Modelo tradicional: pocos diseños al inicio, proliferación hacia el presente.",
              "icon": "🔺"
            },
            {
              "title": "Rebobinar la cinta",
              "description": "Experimento mental: repetir la historia desde el Burgess.",
              "icon": "🎬"
            }
          ],
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">iconografía del progreso</span> encubre una visión falsa: el Burgess muestra disparidad máxima y luego poda, no una escalera hacia el hombre.",
        },
        {
          type: 'paragraph',
          html: "Para entender por qué ese yacimiento obliga a cambiar la imagen, hace falta saber cómo se formó y qué conserva.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Antecedentes del Burgess Shale",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un solo yacimiento puede cambiar la lectura de toda una era? La escala geológica (Cámbrico, Ordovícico, etc.) no es un capricho de nombres: marca episodios reales. Antes del Cámbrico, la vida multicelular era escasa o enigmática. Después, el registro fósil se enriquece. La explosión cámbrica concentra el origen de <span class=\"term\">filos</span> (grandes planes corporales, como artrópodos o cordados) en un intervalo geológicamente breve.",
        },
        {
          type: 'paragraph',
          html: "La mayoría de fósiles preservan solo partes duras: conchas, huesos, caparazones. El Burgess conserva anatomía blanda con detalle fino: filamentos de branquias e incluso contenido intestinal. El yacimiento (~<span class=\"num\">530 millones</span> de años) se formó cuando deslizamientos de lodo enterraron una comunidad marina en un fondo sin oxígeno. Eso frenó la descomposición. Walcott lo encontró en <span class=\"num\">1909</span> tras años de colección obsesiva.",
        },
        {
          type: 'paragraph',
          html: "Gould ubica la Burgess frente a faunas anteriores (como la de Ediacara, fósiles muy primitivos anteriores al Cámbrico) y otras ventanas posteriores a cuerpos blandos. Este yacimiento cerca de Field, en Columbia Británica, es tan excepcional que sin él la ventana sobre la explosión cámbrica sería estrecha e incompleta. Por eso importan tanto el mecanismo de preservación como la fecha del descubrimiento.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "~570 Ma",
              "text": "Explosión cámbrica: irrupción de filos animales."
            },
            {
              "year": "~530 Ma",
              "text": "Depósito del Burgess Shale."
            },
            {
              "year": "1909",
              "text": "Walcott descubre el yacimiento."
            }
          ],
        },
        {
          type: 'key',
          html: "Sin la preservación excepcional del Burgess, la <span class=\"key-term\">explosión cámbrica</span> quedaría casi invisible en el registro fósil.",
        },
        {
          type: 'paragraph',
          html: "Hallar el yacimiento fue solo el comienzo: la visión nueva nació al reinterpretar los fósiles, no al excavarlo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Reconstrucción del Burgess Shale: hacia una nueva visión de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se descubrió que el Cámbrico no era un ensayo general de los animales actuales? La revisión del Burgess fue una revolución silenciosa: monografías técnicas, no un eureka en la montaña. Los hallazgos decisivos llegaron revisando cajones del Smithsonian. En <span class=\"num\">1973</span>, <span class=\"person\">Simon Conway Morris</span> buscó rarezas en las colecciones de Walcott y encontró la clave de la disparidad (cuántos diseños corporales distintos coexistían).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Whittington</span> empezó con animales que ya no encajaban cómodos en grupos modernos. Luego llegó <span class=\"term\">Opabinia</span>, un organismo con cinco ojos y una trompa prensil que rompió expectativas. El equipo amplió el catálogo con depredadores gigantes y anatomías tan raras que al principio se dibujaron al revés. Muchos no caben en los filos actuales: son <span class=\"term\">diseños corporales</span> (planes anatómicos distintos) que se extinguieron.",
        },
        {
          type: 'paragraph',
          html: "Por eso la conclusión es clara: el Cámbrico temprano tuvo máxima disparidad. Una <span class=\"term\">decimación</span> posterior (eliminación masiva de linajes) borró la mayoría de planes corporales. Los «ganadores» de hoy no fueron necesariamente superiores por diseño: sobrevivieron un sorteo histórico. Gould narra ese trabajo como un drama en cinco actos, respetando la cronología de la investigación.",
        },
        {
          type: 'list',
          items: [
            "**Marrella** — Artrópodo que inició las dudas de Whittington.",
            "**Opabinia** — Símbolo de lo extraño; cinco ojos y trompa prensil.",
            "**Anomalocaris** — Mayor depredador del Cámbrico; mandíbula circular.",
            "**Hallucigenia** — Anatomía tan bizarra que desafió las primeras reconstrucciones."
          ],
        },
        {
          type: 'key',
          html: "La Burgess muestra que la historia animal fue un experimento masivo de formas, no una escalera hacia el hombre.",
        },
        {
          type: 'paragraph',
          html: "Si la reinterpretación es correcta, hay que explicar por qué Walcott (el descubridor) no la vio.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La visión de Walcott y la naturaleza de la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un científico brillante forzó fósiles raros dentro de moldes conocidos? <span class=\"person\">Walcott</span> no fue un paleontólogo cualquiera: administrador poderoso del Smithsonian y coleccionista incansable. Su error, el <span class=\"term\">«zapato de Walcott»</span> (shoehorn), consistió en encajar cada fósil del Burgess como ancestro primitivo de grupos modernos. Negó así la disparidad real. No fue torpeza técnica: fue compromiso con la idea de progreso predecible.",
        },
        {
          type: 'paragraph',
          html: "Walcott veía la historia como ascenso hacia formas superiores, en sintonía con la América expansionista de su época. Leyó a Darwin buscando una trayectoria hacia formas «superiores», no la idea de que cada rasgo se adapta solo a condiciones locales. Gould recupera esa biografía (fe, patriotismo, orden institucional) para mostrar cómo una visión del mundo puede cegar a un observador excelente.",
        },
        {
          type: 'paragraph',
          html: "El caso Burgess plantea la pregunta de fondo: ¿la historia sigue leyes generales o es una secuencia irrepetible? Walcott creía en ley. La revisión moderna enfatiza contingencia. Por eso Gould pide para la historia natural el mismo respeto que damos a la historia humana. Explicar el pasado con rigor no implica poder predecir el futuro.",
        },
        {
          type: 'quote',
          text: "«Rebobina la cinta de la vida hasta los primeros días del Burgess Shale; déjala reproducir desde un punto de partida idéntico, y la probabilidad de que algo parecido a la inteligencia humana aparezca en la repetición es infinitesimalmente pequeña.»",
          attribution: "Stephen Jay Gould",
        },
        {
          type: 'key',
          html: "Walcott forzó cada fósil en grupos modernos no por torpeza, sino porque creía en <span class=\"key-term\">progreso predecible</span>, no en contingencia histórica.",
        },
        {
          type: 'paragraph',
          html: "Queda demostrar con ejemplos que otros desenlaces eran razonables: mundos posibles sin nuestra especie.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Mundos posibles: el poder del «puro historial»",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se prueba que la inteligencia humana no era destino? Gould debe mostrar que otras historias razonables eran posibles: el «puro historial» (la historia como secuencia irrepetible, no como ley). No puede predecir qué habría salido de Opabinia. Sí puede comparar grupos vivos con fortunas opuestas. Los <span class=\"term\">poliquetos</span> (gusanos marinos anélidos) son un éxito con miles de especies. Los <span class=\"term\">priapúlidos</span> (otro grupo de gusanos) quedaron en un nicho marginal. Nada en su anatomía inicial anunciaba ese resultado.",
        },
        {
          type: 'paragraph',
          html: "Propone <span class=\"term\">siete mundos posibles</span>: umbrales donde un cambio pequeño pudo desviar la historia, desde la célula con núcleo hasta <em>Homo sapiens</em>. En cada paso, la contingencia importa. Las extinciones masivas no son accidentes menores: reconfiguran el tablero evolutivo y abren o cierran caminos.",
        },
        {
          type: 'paragraph',
          html: "Por eso el patrón Burgess (proliferación inicial y luego poda) se repite a otras escalas. La inteligencia humana no era un destino escrito: fue el final de una cadena improbable. Reconocerlo no menosprecia a nuestra especie. Amplía la comprensión de la vida. Un animal temprano con notocorda (un cordón flexible que precede a la columna) como <em>Pikaia</em> ilustra esa fragilidad. Era un posible antepasado de los vertebrados.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Contingencia",
              "description": "Resultado dependiente de acontecimientos no repetibles ni predecibles.",
              "icon": "🎲"
            },
            {
              "title": "Decimación",
              "description": "Eliminación masiva de diseños corporales; reduce disparidad.",
              "icon": "💀"
            },
            {
              "title": "Mundos posibles",
              "description": "Escenarios alternativos en puntos críticos de la historia evolutiva.",
              "icon": "🌍"
            }
          ],
        },
        {
          type: 'key',
          html: "<span class=\"key-term\">La evolución</span> es historia, no progreso inevitable hacia la conciencia humana.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Burgess Shale",
    "description": "Yacimiento cámbrico con preservación excepcional de tejidos blandos."
  },
  {
    "title": "Explosión cámbrica",
    "description": "Irrupción rápida de filos animales ~570 millones de años atrás."
  },
  {
    "title": "Disparidad",
    "description": "Diferencias anatómicas profundas entre diseños corporales (filos)."
  },
  {
    "title": "Diversidad",
    "description": "Número de especies; no equivale a disparidad."
  },
  {
    "title": "Contingencia",
    "description": "Historia evolutiva impredecible y no replicable en detalle."
  },
  {
    "title": "Decimación",
    "description": "Pérdida masiva de linajes tras máxima disparidad temprana."
  },
  {
    "title": "Shoehorn de Walcott",
    "description": "Forzar fósiles del Burgess en grupos modernos; error interpretativo."
  },
  {
    "title": "Rebobinar la cinta",
    "description": "Experimento mental: repetir la evolución desde el Cámbrico."
  },
  {
    "title": "Konservat-Lagerstätte",
    "description": "Yacimiento con preservación extraordinaria (tejidos blandos, no solo conchas o huesos)."
  }
],
  chronology: [
  {
    "year": "~570 Ma",
    "text": "Explosión cámbrica: origen de filos animales."
  },
  {
    "year": "~530 Ma",
    "text": "Sedimentación del Burgess Shale."
  },
  {
    "year": "1909",
    "text": "Walcott descubre el yacimiento."
  },
  {
    "year": "1940",
    "text": "Reconstrucción icónica de Knight (National Geographic)."
  },
  {
    "year": "1966-67",
    "text": "Expediciones de Whittington al Burgess."
  },
  {
    "year": "1971",
    "text": "Primer monógrafo de Whittington sobre Marrella."
  },
  {
    "year": "1973",
    "text": "Conway Morris revisa cajones del Smithsonian."
  },
  {
    "year": "1975",
    "text": "Descripción de Opabinia; nueva visión consolidada."
  },
  {
    "year": "1975-78",
    "text": "Trabajo de Briggs y Conway Morris amplía la revisión."
  },
  {
    "year": "1989",
    "text": "Publicación de Wonderful Life."
  }
],
  figures: [
  {
    "name": "Stephen Jay Gould",
    "role": "Autor; paleontólogo; defensor de la contingencia histórica"
  },
  {
    "name": "Charles Doolittle Walcott",
    "role": "Descubridor (1909); interpretación tradicionalista"
  },
  {
    "name": "Harry Whittington",
    "role": "Líder de la revisión; experto en trilobites"
  },
  {
    "name": "Simon Conway Morris",
    "role": "Estudiante y colaborador; búsqueda de rarezas en colecciones"
  },
  {
    "name": "Derek Briggs",
    "role": "Estudiante y colaborador; artrópodos bivalvos y más"
  },
  {
    "name": "Charles R. Knight",
    "role": "Artista; reconstrucción de 1940 que refleja expectativas"
  },
  {
    "name": "Norman D. Newell",
    "role": "Maestro de Gould (dedicatoria)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La vida no subió una escalera hacia el hombre.",
  "Por eso el Cámbrico fue un festival de formas extrañas, luego decimadas.",
  "La Burgess Shale lo demuestra mejor que cualquier otro fósil.",
  "Somos un resultado posible, no un destino cósmico.",
  "La historia evolutiva es contingente: explicable en retrospectiva e impredecible hacia adelante."
],
    highlight: "Rebobinar la cinta no garantiza nuestra existencia",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Stephen Jay Gould",
    line2: "\"Wonderful Life\" · W. W. Norton & Company · 1989",
  },
}
