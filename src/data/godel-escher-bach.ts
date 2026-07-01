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
          html: "Hofstadter improvisa sobre el <span class=\"term\">Musikalisches Opfer</span> de Bach ante Federico el Grande (<span class=\"num\">1747</span>). La autorreferencia en Bach, Escher y Gödel prepara el hilo dorado del libro: sistemas formales, niveles y paradojas. Recorre una breve historia de la lógica y el debate sobre inteligencia artificial.",
        },
        {
          type: 'paragraph',
          html: "Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan cada capítulo con fugas, cánones y juegos de niveles. Esa forma musical encarna la tesis central del libro.",
        },
        {
          type: 'key',
          html: "El libro entrelaza matemática, arte y música en un mismo patrón de bucles y niveles.",
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
          html: "El sistema formal MIU usa cadenas de M, I y U. Parte del axioma MI y aplica reglas de producción. La pregunta es si se puede derivar MU. Aquí aparecen teorema, axioma, derivación, procedimiento de decisión y la distinción entre trabajar dentro o fuera del sistema. La inteligencia humana detecta patrones que la máquina ciega no ve: todos los teoremas empiezan con M.",
        },
        {
          type: 'key',
          html: "El acertijo MU muestra cómo el significado aparece cuando alguien observa el sistema desde fuera.",
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
          html: "El sistema pq muestra cómo los símbolos adquieren significado por <span class=\"term\">isomorfismo</span> entre teoremas y aritmética. El significado conecta forma, verdad y manipulación simbólica.",
        },
        {
          type: 'key',
          html: "Faltando el isomorfismo, los símbolos serían marcas vacías sin relación con hechos numéricos.",
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
          html: "La distinción figura/fondo en arte se corresponde con teoremas y no-teoremas. Los conjuntos <span class=\"term\">recursivamente enumerables</span> y <span class=\"term\">recursivos</span> plantean si la figura contiene la misma información que el fondo.",
        },
        {
          type: 'key',
          html: "En lógica y en arte, lo omitido puede ser tan informativo como lo destacado.",
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
          html: "Hofstadter explica ideas del diálogo Contracrostipunctus. La geometría euclidiana y la no euclidiana ilustran términos indefinidos y la rivalidad de sistemas consistentes.",
        },
        {
          type: 'key',
          html: "Varios sistemas pueden ser consistentes sin ser únicos ni definitivos.",
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
          html: "La recursión aparece en música, lenguaje, geometría, física y programas. Historias dentro de historias, como en Little Harmonic Labyrinth, muestran el patrón en acción.",
        },
        {
          type: 'key',
          html: "La recursión anida la misma estructura dentro de sí misma, como una fuga dentro de otra fuga.",
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
          html: "El significado se reparte entre mensaje, decodificador y receptor. Hofstadter lo ilustra con ADN, tablillas y discos en el espacio. ¿Existe significado absoluto sin inteligencia?",
        },
        {
          type: 'key',
          html: "El sentido no vive solo en el símbolo ni solo en la mente que lo interpreta.",
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
          html: "Hofstadter introduce reglas formales para «y», «o» y «no». El isomorfismo permite adquirir significado de forma automática. Los ejemplos tipo koan zen («Zentences») muestran la paradoja en acción.",
        },
        {
          type: 'key',
          html: "La lógica formal puede imitar el juego entre reglas y sentido que caracteriza los koan.",
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
          html: "La TNT extiende el cálculo proposicional para tratar la aritmética mediante manipulación simbólica rígida. Hofstadter contrasta el razonamiento formal con el pensamiento humano.",
        },
        {
          type: 'key',
          html: "TNT prepara el terreno para hablar de aritmética como pura tipografía simbólica.",
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
          html: "Las ideas zen de Mumon funcionan como espejo metafórico de la filosofía matemática. Hofstadter introduce la <span class=\"term\">numeración de Gödel</span> y ofrece un primer recorrido del teorema de incompletitud.",
        },
        {
          type: 'key',
          html: "Mumon y Gödel comparten el arte de desorientar para revelar límites del lenguaje formal.",
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
          html: "Los diálogos se basan en el <span class=\"term\">Clave bien temperado</span>. Hofstadter debate holismo frente a reduccionismo. La colonia de hormigas <span class=\"person\">Aunt Hillary</span> funciona como mente emergente.",
        },
        {
          type: 'key',
          html: "Aunt Hillary muestra cómo una mente puede surgir de partes que, aisladas, no piensan.",
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
          html: "Hofstadter analiza niveles al ver tableros, imágenes y computadoras: lenguaje máquina, ensamblador, compilador y sistema operativo. Pregunta cuántos niveles intermedios existen en equipos deportivos, átomos o clima.",
        },
        {
          type: 'key',
          html: "Cada nivel describe la misma realidad con un vocabulario distinto y una granularidad propia.",
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
          html: "¿Cómo el hardware cerebral sostiene pensamientos? Hofstadter recorre la estructura macro y micro del cerebro y explora la relación especulativa entre conceptos y actividad neural.",
        },
        {
          type: 'key',
          html: "El cerebro es hardware biológico, pero los pensamientos parecen habitar otro nivel de descripción.",
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
          html: "Hofstadter traduce poemas Jabberwocky y pregunta si se pueden mapear lenguajes y mentes. Usa una analogía geográfica para la comunicación entre cerebros.",
        },
        {
          type: 'key',
          html: "Traducir Jabberwocky obliga a separar forma lingüística de contenido mental.",
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
          html: "Hofstadter presenta lenguajes que realizan búsquedas finitas (BlooP) o potencialmente infinitas (FlooP). Introduce la intuición de funciones primitivo-recursivas y recursivas generales, clave en la prueba de Gödel.",
        },
        {
          type: 'key',
          html: "BlooP y FlooP separan lo que siempre termina de lo que puede buscar sin límite fijo.",
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
          html: "Hofstadter expone la prueba de incompletitud de Gödel (<span class=\"num\">1931</span>): si TNT es consistente, es incompleta. Relaciona el resultado con geometrías euclidianas y no euclidianas y con sus implicaciones filosóficas.",
        },
        {
          type: 'key',
          html: "Gödel demuestra que ningún sistema formal suficientemente rico puede cerrarse sobre sí mismo.",
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
          html: "El argumento gödeliano es repetible: TNT es «esencialmente incompleta». Hofstadter critica el argumento de <span class=\"person\">J. R. Lucas</span> sobre la mente mecánica.",
        },
        {
          type: 'key',
          html: "Saltar fuera del sistema no garantiza por sí solo superioridad de la mente humana.",
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
          html: "Hofstadter explora autorreferencia y entidades autorreproductoras, como programas y ADN. La frontera entre sistema y entorno que lo replica se vuelve difusa.",
        },
        {
          type: 'key',
          html: "Autorreferencia y autorreproducción son dos caras del mismo bucle vital y formal.",
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
          html: "Hofstadter presenta la <span class=\"term\">Tesis de Church-Turing</span>, el problema de la parada y el teorema de verdad de Tarski. Contrasta habilidades matemáticas humanas con simulación mecánica.",
        },
        {
          type: 'key',
          html: "Church, Turing y Tarski fijan los límites de lo computable, demostrable y decidable.",
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
          html: "Hofstadter repasa el test de Turing y ofrece una historia abreviada de IA: juegos, teoremas, música y lenguaje natural. Destaca el programa SHRDLU de <span class=\"person\">Terry Winograd</span> en un mundo de bloques.",
        },
        {
          type: 'key',
          html: "SHRDLU mostró que entender lenguaje exige representar un mini-mundo, no solo parsear frases.",
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
          html: "Hofstadter analiza marcos («frames») y representación en capas de contextos. Explora creatividad e interacción de conceptos y deja preguntas abiertas sobre el futuro de la IA.",
        },
        {
          type: 'key',
          html: "La inteligencia artificial necesita marcos flexibles, no solo reglas fijas de manipulación simbólica.",
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
          html: "Hofstadter describe sistemas que se voltean sobre sí mismos: ciencia, gobierno, arte y cerebros. Pregunta si libertad y conciencia se ligan a bucles de Gödel. El cierre reúne Bach, Escher y Gödel en un gran bucle autorreferencial.",
        },
        {
          type: 'key',
          html: "El libro termina donde empezó: tres dominios distintos tejiendo el mismo bucle dorado.",
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
  "La incompletitud no es defecto sino síntoma de riqueza suficiente para hablar de sí misma.",
  "Bach, Escher y Gödel son tres caras de un mismo bucle dorado.",
  "Entender requiere danzar entre reduccionismo y holismo, forma y significado.",
  "El libro cierra como empezó: una ofrenda que se referencia a sí misma."
],
    highlight: "La identidad emerge de bucles extraños que nos observan observándonos",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Douglas R. Hofstadter",
    line2: "\"Gödel, Escher, Bach\" · Basic Books · 1979",
  },
}
