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
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio"
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
    "label": "Reconstrucción del Burgess Shale"
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
          html: "Gould aborda la naturaleza de la <span class=\"term\">historia</span> no por un ataque frontal, sino mediante un caso excepcional: la <span class=\"term\">Formación Burgess</span> en Yoho National Park, Columbia Británica. El detalle sin generalidad es «nature writing» y la generalidad sin detalle es tedio. La belleza está en lo particular y el mensaje en lo general.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Doolittle Walcott</span> descubrió en <span class=\"num\">1909</span> la fauna más antigua de animales de cuerpo blando excepcionalmente preservados, pero su interpretación tradicionalista las hizo «invisibles» al público durante décadas. Veinte años de trabajo de <span class=\"person\">Harry Whittington</span>, <span class=\"person\">Derek Briggs</span> y <span class=\"person\">Simon Conway Morris</span> revirtieron esa lectura y plantearon la <span class=\"term\">contingencia</span>: rebobinar la cinta de la vida al Burgess y repetir el experimento haría vanamente improbable la inteligencia humana.",
        },
        {
          type: 'paragraph',
          html: "Los organismos reconstruidos, como <span class=\"term\">Opabinia</span> con cinco ojos, <span class=\"term\">Anomalocaris</span> con mandíbula circular o <span class=\"term\">Hallucigenia</span>, son tan extraños como la nueva visión de la vida. El título honra la escena de <em>It's a Wonderful Life</em> donde un ángel muestra a George Bailey un mundo sin él: el poder de lo aparentemente insignificante en la historia.",
        },
        {
          type: 'key',
          html: "La Burgess Shale no solo preserva vida maravillosa del pasado. Obliga a repensar progreso, predictibilidad y el papel del azar en la evolución.",
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
          html: "<span class=\"person\">Charles R. Knight</span>, maestro de la reanimación de fósiles, pintó en <span class=\"num\">1940</span> para National Geographic una reconstrucción de la fauna del Burgess Shale. Gould afirma que estos invertebrados son los fósiles animales más importantes del mundo: aparecen justo después de la <span class=\"term\">explosión cámbrica</span> (~<span class=\"num\">570 millones</span> de años), cuando casi todos los grandes grupos animales modernos irrumpen en el registro fósil en pocos millones de años.",
        },
        {
          type: 'paragraph',
          html: "La iconografía revela expectativas culturales. Knight colocó a <span class=\"term\">Sidneyia</span> como centro dominante. Las reconstrucciones modernas de <span class=\"person\">Briggs</span> y <span class=\"person\">Whittington</span> muestran un ecosistema mucho más diverso y extraño. La metáfora de la <span class=\"term\">escalera del progreso</span> y el <span class=\"term\">cono de diversidad creciente</span> domina libros de texto: la vida sube hacia la complejidad humana. Gould expone caricaturas, cómics y manuales que repiten esa imagen falsa.",
        },
        {
          type: 'paragraph',
          html: "El experimento mental crucial es <span class=\"term\">rebobinar la cinta de la vida</span>. Si la historia es contingente, repetir el Cámbrico no produciría necesariamente vertebrados ni humanos. La Burgess desafía el cono: máxima disparidad temprana seguida de <span class=\"term\">decimación</span>, no ascenso lineal. Diversidad (número de especies) no es lo mismo que disparidad (diferencias anatómicas profundas).",
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
          html: "La escala geológica (Cámbrico, Ordovícico, etc.) no es un capricho mnemotécnico: marca episodios reales de la historia terrestre. Antes del Cámbrico, la vida multicelular era escasa o enigmática. Después, el registro fósil se enriquece. La <span class=\"term\">explosión cámbrica</span> concentra el origen de filos enteros en un intervalo geológicamente breve.",
        },
        {
          type: 'paragraph',
          html: "La mayoría de fósiles preservan partes duras. La Burgess conserva anatomía blanda con detalle fino: filamentos de branquias y contenido intestinal. El yacimiento (~<span class=\"num\">530 millones</span> de años) se formó por deslizamientos de lodo que enterraron una comunidad marina en un fondo anóxico que impidió la descomposición. Walcott, secretario del Smithsonian, lo encontró en <span class=\"num\">1909</span> tras cinco temporadas de colección obsesiva.",
        },
        {
          type: 'paragraph',
          html: "Gould distingue fauna anterior (Ediacara) y posteriores ventanas a cuerpos blandos (faunas de Konservat-Lagerstätte). La ubicación en la cordillera canadiense, cerca de Field, BC, y el mecanismo de preservación explican por qué este yacimiento es único entre los cruciales. Si no existiera el yacimiento de Burgess, la ventana sobre la explosión cámbrica sería estrecha e incompleta.",
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
          html: "La revisión del Burgess fue una revolución silenciosa: monografías técnicas en la <em>Philosophical Transactions</em>, no eureka en el campo. Los hallazgos decisivos llegaron revisando cajones del Smithsonian, no solo excavando. En <span class=\"num\">1973</span>, <span class=\"person\">Conway Morris</span> buscó sistemáticamente rarezas en las colecciones de Walcott y encontró la clave de la disparidad.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Whittington</span> empezó con <span class=\"term\">Marrella</span> y <span class=\"term\">Yohoia</span> (<span class=\"num\">1971-1974</span>), dudando de encasillar todo en artrópodos modernos. <span class=\"term\">Opabinia</span> (<span class=\"num\">1975</span>), con cinco ojos y probóscide, rompió expectativas. El equipo amplió el catálogo: <span class=\"term\">Anomalocaris</span> como depredador gigante, <span class=\"term\">Wiwaxia</span> y <span class=\"term\">Hallucigenia</span>, inicialmente mal orientada. Muchos organismos no encajan en filos actuales y representan <span class=\"term\">diseños corporales</span> extintos.",
        },
        {
          type: 'paragraph',
          html: "La conclusión general es que el Cámbrico temprano tuvo máxima disparidad. Una decimación posterior eliminó la mayoría de planes corporales. Los «ganadores» actuales no fueron necesariamente superiores por diseño, sino sobrevivientes de un sorteo histórico. Gould presenta el capítulo como drama en cinco actos, respetando la cronología de la investigación.",
        },
        {
          type: 'list',
          items: [
            "**Marrella** — Artrópodo que inició las dudas de Whittington.",
            "**Opabinia** — Símbolo de lo extraño; cinco ojos y probóscide.",
            "**Anomalocaris** — Mayor depredador del Cámbrico; mandíbula circular.",
            "**Hallucigenia** — Anatomía tan bizarra que desafió reconstrucciones iniciales."
          ],
        },
        {
          type: 'key',
          html: "La Burgess muestra que la historia animal fue un experimento masivo de formas, no una escalera hacia el hombre.",
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
          html: "<span class=\"person\">Walcott</span> no fue un paleontólogo cualquiera: administrador poderoso del Smithsonian, coleccionista incansable y conservador profundo. Su error, el <span class=\"term\">«zapato de Walcott»</span> (shoehorn), forzó cada fósil del Burgess dentro de grupos modernos como ancestros primitivos y negó la disparidad real. No fue incompetencia técnica: fue compromiso ideológico con el cono de diversidad creciente.",
        },
        {
          type: 'paragraph',
          html: "Walcott veía la historia como progreso hacia formas superiores, en sintonía con la América expansionista de su época. Su Darwin era el Darwin ambivalente sobre progreso, no el Darwin de ajuste local. La biografía muestra un hombre de fe, patriotismo y orden institucional que resistió interpretaciones radicales. La historia de la ciencia olvida a quienes dominaron su tiempo pero no innovaron intelectualmente, y Gould insiste en recuperarlos.",
        },
        {
          type: 'paragraph',
          html: "El capítulo vincula el caso Burgess con la <span class=\"term\">naturaleza de la historia</span>: ¿es ley general o secuencia irrepetible? Walcott creía en ley. La revisión moderna enfatiza contingencia. La historia natural merece el mismo respeto epistemológico que la historia humana: explicaciones rigurosas en retrospectiva y impredecibilidad prospectiva.",
        },
        {
          type: 'quote',
          text: "«Rebobina la cinta de la vida hasta los primeros días del Burgess Shale; déjala reproducir desde un punto de partida idéntico, y la probabilidad de que algo parecido a la inteligencia humana aparezca en la repetición es vanishingly small.»",
          attribution: "Stephen Jay Gould",
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
          html: "Gould debe demostrar con ejemplos que historias razonablemente distintas habrían sido posibles sin inteligencia humana. No podemos predecir descendientes de Opabinia, pero sí comparar grupos actuales con fortunas opuestas. Los <span class=\"term\">poliquetos</span> (anélidos marinos) son un éxito rotundo, con miles de especies, frente a los <span class=\"term\">priapúlidos</span>, reducidos a un nicho marginal.",
        },
        {
          type: 'paragraph',
          html: "Propone <span class=\"term\">siete mundos posibles</span> donde la contingencia alteró el curso: origen de la célula eucariota, primera fauna multicelular, explosión cámbrica, fauna moderna posterior, vertebrados terrestres, mamíferos y <span class=\"term\">Homo sapiens</span>. En cada umbral, pequeños cambios pudieron desviar la historia. Las extinciones masivas no son accidentes menores: reconfiguran el tablero evolutivo.",
        },
        {
          type: 'paragraph',
          html: "El patrón Burgess (proliferación inicial y decimación) se repite a escalas posteriores. La inteligencia humana no era destino, sino resultado de una cadena improbable. Reconocerlo no menosprecia a nuestra especie: amplía la comprensión de la vida. <span class=\"term\">Pikaia</span>, posible ancestro cordado, ilustra cuán frágil fue el camino hacia los vertebrados.",
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
    "description": "Depósitos con preservación extraordinaria de fósiles."
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
  "El Cámbrico fue un festival de formas extrañas, luego decimadas.",
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
