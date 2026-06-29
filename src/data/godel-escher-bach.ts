import type { BookSummary } from '../types/book'

export const godelEscherBach: BookSummary = {
  slug: "godel-escher-bach",
  meta: {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    subtitle: "¿Qué une la lógica, el arte y la mente?",
    author: "Douglas R. Hofstadter",
    meta: [
      "📖 1979 · Basic Books · Pulitzer 1980",
      "✍️ Ciencia cognitiva · Metáfora del bucle extraño",
    ],
    titleEs: "Gödel, Escher, Bach: Un eterno y grácil bucle",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "I",
    "label": "El acertijo MU"
  },
  {
    "id": "cap2",
    "num": "II",
    "label": "Significado y forma en matemáticas"
  },
  {
    "id": "cap3",
    "num": "III",
    "label": "Figura y fondo"
  },
  {
    "id": "cap4",
    "num": "IV",
    "label": "Consistencia, completitud y geometría"
  },
  {
    "id": "cap5",
    "num": "V",
    "label": "Estructuras y procesos recursivos"
  },
  {
    "id": "cap6",
    "num": "VI",
    "label": "La ubicación del significado"
  },
  {
    "id": "cap7",
    "num": "VII",
    "label": "El cálculo proposicional"
  },
  {
    "id": "cap8",
    "num": "VIII",
    "label": "Teoría tipográfica de números (TNT)"
  },
  {
    "id": "cap9",
    "num": "IX",
    "label": "Mumon y Gödel"
  },
  {
    "id": "cap10",
    "num": "Preludio",
    "label": "Preludio y Fuga de la hormiga"
  },
  {
    "id": "cap11",
    "num": "X",
    "label": "Niveles de descripción y sistemas informáticos"
  },
  {
    "id": "cap12",
    "num": "XI",
    "label": "Cerebros y pensamientos"
  },
  {
    "id": "cap13",
    "num": "XII",
    "label": "Mentes y pensamientos"
  },
  {
    "id": "cap14",
    "num": "XIII",
    "label": "BlooP, FlooP y GlooP"
  },
  {
    "id": "cap15",
    "num": "XIV",
    "label": "Proposiciones formalmente indemostrables"
  },
  {
    "id": "cap16",
    "num": "XV",
    "label": "Saltar fuera del sistema"
  },
  {
    "id": "cap17",
    "num": "XVI",
    "label": "Autoref y autorep"
  },
  {
    "id": "cap18",
    "num": "XVII",
    "label": "Church, Turing, Tarski y otros"
  },
  {
    "id": "cap19",
    "num": "XVIII",
    "label": "Inteligencia artificial"
  },
  {
    "id": "cap20",
    "num": "XIX",
    "label": "Inteligencia artificial"
  },
  {
    "id": "cap21",
    "num": "XX",
    "label": "Bucles extraños o jerarquías enredadas"
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
  },
  {
    "id": "cierre",
    "num": "—",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "Introducción: una ofrenda músico-lógica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hofstadter improvisa sobre el <span class=\"term\">Musikalisches Opfer</span> de Bach ante Federico el Grande (<span class=\"num\">1747</span>). Autorreferencia en Bach, Escher y Gödel prepara el hilo dorado del libro: sistemas formales, niveles y paradojas. Breve historia de la lógica y debate sobre inteligencia artificial.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo 00: Introducción: una ofrenda músico-lógica — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap1",
      num: "I",
      title: "El acertijo MU",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sistema formal MIU: cadenas de M, I, U; axioma MI; reglas de producción. ¿Se puede derivar MU? Introduce teorema, axioma, derivación, procedimiento de decisión, trabajar dentro/fuera del sistema. La inteligencia humana nota patrones (todos los teoremas empiezan con M); la máquina ciega no.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo I: El acertijo MU — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap2",
      num: "II",
      title: "Significado y forma en matemáticas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sistema pq: símbolos adquieren significado por <span class=\"term\">isomorfismo</span> entre teoremas y aritmética. Significado conecta forma, verdad y manipulación simbólica.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo II: Significado y forma en matemáticas — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap3",
      num: "III",
      title: "Figura y fondo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Distinción figura/fondo en arte ↔ teoremas/no-teoremas. Conjuntos <span class=\"term\">recursivamente enumerables</span> vs. <span class=\"term\">recursivos</span>: ¿la figura contiene la misma información que el fondo?",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo III: Figura y fondo — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap4",
      num: "IV",
      title: "Consistencia, completitud y geometría",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Explica ideas del diálogo Contracrostipunctus. Geometría euclidiana y no euclidiana ilustran términos indefinidos y rivalidad de sistemas consistentes.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo IV: Consistencia, completitud y geometría — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap5",
      num: "V",
      title: "Estructuras y procesos recursivos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Recursión en música, lenguaje, geometría, física y programas. Historias dentro de historias (Little Harmonic Labyrinth).",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo V: Estructuras y procesos recursivos — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap6",
      num: "VI",
      title: "La ubicación del significado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Significado repartido entre mensaje, decodificador y receptor (ADN, tablillas, discos en el espacio). ¿Existe significado absoluto sin inteligencia?",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo VI: La ubicación del significado — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap7",
      num: "VII",
      title: "El cálculo proposicional",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Reglas formales para «y», «o», «no». Isomorfismo y adquisición automática de significado; ejemplos tipo koan zen («Zentences»).",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo VII: El cálculo proposicional — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap8",
      num: "VIII",
      title: "Teoría tipográfica de números (TNT)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Extensión del cálculo proposicional para aritmética mediante manipulación simbólica rígida. Contraste entre razonamiento formal y pensamiento humano.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo VIII: Teoría tipográfica de números (TNT) — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap9",
      num: "IX",
      title: "Mumon y Gödel",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Ideas zen de Mumon como espejo metafórico de la filosofía matemática. Introducción a la <span class=\"term\">numeración de Gödel</span> y primer recorrido del teorema de incompletitud.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo IX: Mumon y Gödel — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap10",
      num: "Preludio",
      title: "Preludio y Fuga de la hormiga",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Diálogos basados en el <span class=\"term\">Clave bien temperado</span>. Debate holismo vs. reduccionismo; la colonia de hormigas <span class=\"person\">Aunt Hillary</span> como mente emergente.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo Preludio: Preludio y Fuga de la hormiga — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap11",
      num: "X",
      title: "Niveles de descripción y sistemas informáticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Niveles al ver tableros, imágenes y computadoras: lenguaje máquina, ensamblador, compilador, SO. ¿Cuántos niveles intermedios existen en equipos deportivos, átomos, clima?",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo X: Niveles de descripción y sistemas informáticos — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap12",
      num: "XI",
      title: "Cerebros y pensamientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo el hardware cerebral sostiene pensamientos? Estructura macro y micro del cerebro; relación especulativa entre conceptos y actividad neural.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XI: Cerebros y pensamientos — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap13",
      num: "XII",
      title: "Mentes y pensamientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Poemas Jabberwocky traducidos: ¿se pueden mapear lenguajes y mentes? Analogía geográfica para comunicación entre cerebros.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XII: Mentes y pensamientos — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap14",
      num: "XIII",
      title: "BlooP, FlooP y GlooP",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Lenguajes que realizan búsquedas finitas (BlooP) o potencialmente infinitas (FlooP). Intuición de funciones primitivo-recursivas y recursivas generales, clave en la prueba de Gödel.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XIII: BlooP, FlooP y GlooP — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap15",
      num: "XIV",
      title: "Proposiciones formalmente indemostrables",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Prueba de incompletitud de Gödel (<span class=\"num\">1931</span>): si TNT es consistente, es incompleta. Vínculos con geometrías euclidianas/no euclidianas e implicaciones filosóficas.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XIV: Proposiciones formalmente indemostrables — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap16",
      num: "XV",
      title: "Saltar fuera del sistema",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Repetibilidad del argumento gödeliano: TNT es «esencialmente incompleta». Crítica al argumento de <span class=\"person\">J. R. Lucas</span> sobre mente mecánica.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XV: Saltar fuera del sistema — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap17",
      num: "XVI",
      title: "Autoref y autorep",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Autorreferencia y entidades autorreproductoras (programas, ADN). Difusa frontera entre sistema y entorno que lo replica.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XVI: Autoref y autorep — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap18",
      num: "XVII",
      title: "Church, Turing, Tarski y otros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"term\">Tesis de Church-Turing</span>; problema de la parada; teorema de verdad de Tarski. Habilidades matemáticas humanas vs. simulación mecánica.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XVII: Church, Turing, Tarski y otros — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap19",
      num: "XVIII",
      title: "Inteligencia artificial: retrospectiva",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Test de Turing; historia abreviada de IA: juegos, teoremas, música, lenguaje natural. Programa SHRDLU de <span class=\"person\">Terry Winograd</span> en mundo de bloques.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XVIII: Inteligencia artificial: retrospectiva — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap20",
      num: "XIX",
      title: "Inteligencia artificial: perspectivas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Marcos («frames») y representación en capas de contextos. Creatividad e interacción de conceptos; preguntas abiertas del autor.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XIX: Inteligencia artificial: perspectivas — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
    {
      id: "cap21",
      num: "XX",
      title: "Bucles extraños o jerarquías enredadas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sistemas que se voltean sobre sí mismos: ciencia, gobierno, arte, cerebros. ¿Libertad y conciencia ligadas a bucles de Gödel? Cierre que reúne Bach, Escher y Gödel en un gran bucle autorreferencial.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.",
        },
        {
          type: 'key',
          html: "Capítulo XX: Bucles extraños o jerarquías enredadas — pieza del bucle eterno entre forma y significado.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "",
    "description": "Bucle extraño"
  },
  {
    "title": "",
    "description": "Isomorfismo"
  },
  {
    "title": "",
    "description": "Sistema formal"
  },
  {
    "title": "",
    "description": "TNT"
  },
  {
    "title": "",
    "description": "Incompletitud"
  },
  {
    "title": "",
    "description": "Numeración de Gödel"
  },
  {
    "title": "",
    "description": "Recursión"
  },
  {
    "title": "",
    "description": "Holismo vs. reduccionismo"
  },
  {
    "title": "",
    "description": "Tesis de Church-Turing"
  },
  {
    "title": "",
    "description": "Figura y fondo"
  }
],
  chronology: [
  {
    "year": "1740",
    "text": "Federico el Grande asciende al trono de Prusia"
  },
  {
    "year": "1747",
    "text": "Bach visita Potsdam; Musikalisches Opfer"
  },
  {
    "year": "1895",
    "text": "Lewis Carroll: diálogo Tortuga-Aquiles"
  },
  {
    "year": "1920s",
    "text": "Emil Post: sistemas de producción formal"
  },
  {
    "year": "1931",
    "text": "Gödel publica teoremas de incompletitud"
  },
  {
    "year": "1936",
    "text": "Turing: máquina universal y problema de la parada"
  },
  {
    "year": "1950",
    "text": "Turing propone su test de inteligencia"
  },
  {
    "year": "1970s",
    "text": "Winograd: SHRDLU y mundo de bloques"
  },
  {
    "year": "1979",
    "text": "Publicación de GEB; Pulitzer 1980"
  }
],
  figures: [
  {
    "name": "Douglas R. Hofstadter",
    "role": "Autor · Metáfora GEB · IA y analogía"
  },
  {
    "name": "Kurt Gödel",
    "role": "Teoremas de incompletitud · autorreferencia"
  },
  {
    "name": "M. C. Escher",
    "role": "Arte de bucles visuales y figura/fondo"
  },
  {
    "name": "Johann Sebastian Bach",
    "role": "Fugas, cánones y ofrenda musical"
  },
  {
    "name": "Alan Turing",
    "role": "Computabilidad y test de inteligencia"
  },
  {
    "name": "Alonzo Church",
    "role": "Lambda cálculo y tesis conjunta"
  },
  {
    "name": "Lewis Carroll",
    "role": "Paradojas de regresión infinita"
  },
  {
    "name": "Terry Winograd",
    "role": "SHRDLU: lenguaje natural en bloques"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Mente, máquina y matemática comparten un patrón: saltar niveles y volver al origen.",
  "La incompletitud no es defecto: es síntoma de riqueza suficiente para hablar de sí misma.",
  "Bach, Escher y Gödel son tres caras de un mismo bucle dorado.",
  "Entender requiere danzar entre reduccionismo y holismo, forma y significado.",
  "El libro cierra como empezó: una ofrenda que se referencia a sí misma.",
  "# footer",
  "line1: Resumen generado a partir de la obra de Douglas R. Hofstadter",
  "line2: \"Gödel, Escher, Bach\" · Basic Books · 1979"
],
    highlight: "La identidad emerge de bucles extraños que nos observan observándonos",
  },
  footer: {
    line1: "",
    line2: "",
  },
}
