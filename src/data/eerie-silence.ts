import type { BookSummary } from '../types/book'

export const eerieSilence: BookSummary = {
  slug: "eerie-silence",
  meta: {
    title: "The Eerie Silence",
    subtitle: "Renovando la búsqueda de inteligencia alienígena",
    author: "Paul Davies",
    meta: [
      "📖 2010 · Penguin / Mariner",
      "✍️ Subtítulo EN: Renewing Our Search for Alien Intelligence",
    ],
    titleEs: "El silencio inquietante",
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
    "label": "Prefacio"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "¿Hay alguien ahí fuera?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Vida: ¿accidente o imperativo?"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Una biosfera sombra"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "¿Cuánta inteligencia hay?"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Nuevo SETI: ampliar la búsqueda"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Huellas de una diáspora galáctica"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Magia alienígena"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Inteligencia posbiológica"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Primer contacto"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "¿Quién habla por la Tierra?"
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
      title: "Prefacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué replantear el SETI en su quincuagésimo aniversario en lugar de celebrarlo?",
        },
        {
          type: 'paragraph',
          html: "La radioastronomía nació casi por accidente. En 1931, <span class=\"person\">Karl Jansky</span> detectó un fondo que seguía las estrellas. Décadas después, <span class=\"person\">Giuseppe Cocconi</span> y <span class=\"person\">Philip Morrison</span> propusieron buscar señales alienígenas. <span class=\"person\">Frank Drake</span> inició el SETI con el Proyecto Ozma en 1960. El autor admira a esos pioneros, pero no quiere un libro complaciente.",
        },
        {
          type: 'paragraph',
          html: "El SETI es más especulativo que la ciencia convencional, así que Davies separa hechos, extrapolaciones razonables y fantasía inspirada en la ciencia ficción. El taller «The Sound of Silence» en Arizona State University (<span class=\"num\">2008</span>) alimentó las ideas de «nuevo SETI» que desarrolla el libro. Davies preside el SETI Post-Detection Taskgroup y también piensa en qué haríamos si la señal llegara mañana.",
        },
        {
          type: 'key',
          html: "Cincuenta años de silencio son una invitación a revisar supuestos, no a rendirse ni a autoplagiarse.",
        },
        {
          type: 'paragraph',
          html: "El primer capítulo pregunta qué significa ese silencio para la búsqueda radiofónica clásica.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Hay alguien ahí fuera?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué nos dice el silencio tras medio siglo de escuchar el cielo con radiotelescopios?",
        },
        {
          type: 'paragraph',
          html: "En abril de 1960, <span class=\"person\">Frank Drake</span> apuntó un plato de 26 m hacia Tau Ceti, una estrella cercana parecida al Sol. Sintonizó 1420 MHz, la «canción» del hidrógeno frío. Nació el <span class=\"term\">SETI</span> (búsqueda de inteligencia extraterrestre): escanear estrellas por señales artificiales. Un éxito superaría a Copérnico, Darwin y Einstein juntos, pero casi todo ha sido silencio.",
        },
        {
          type: 'paragraph',
          html: "Los astrónomos SETI responden que apenas hemos muestreado unas miles de estrellas. La galaxia tiene cientos de miles de millones. El enfoque clásico asume civilizaciones que nos envían radio estrecha como nuestras emisoras. Eso arrastra <span class=\"term\">antropocentrismo</span>, es decir, proyectar nuestra tecnología, política y economía sobre ET. Bayes recuerda que la credibilidad de una señal depende del prior que demos a civilizaciones alienígenas. Los avistamientos OVNI reflejan nuestra mente más que la de un visitante real.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "SETI clásico",
              "description": "Radio estrecha hacia estrellas similares al Sol.",
              "icon": "📡"
            },
            {
              "title": "Antropocentrismo",
              "description": "ET modelado como «nosotros con antenas».",
              "icon": "🎭"
            },
            {
              "title": "OVNI",
              "description": "No evidencia seria; ventana al mito humano.",
              "icon": "🛸"
            }
          ],
        },
        {
          type: 'key',
          html: "El silencio no prueba que no haya nadie, pero sí que conviene ampliar la búsqueda más allá del guion radiofónico estrecho y humanoide.",
        },
        {
          type: 'paragraph',
          html: "Antes de contar civilizaciones, hay que saber si la vida surge con facilidad o es un accidente único.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Vida: ¿accidente o imperativo?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Garantizan los trillones de planetas habitables que la vida aparezca en ellos?",
        },
        {
          type: 'paragraph',
          html: "Un planeta habitable no es un planeta habitado. <span class=\"person\">Francis Crick</span> hablaba del origen como «casi un milagro». <span class=\"person\">Christian de Duve</span> defiende un <span class=\"term\">imperativo cósmico</span>, es decir, que la vida surge casi de forma inevitable donde hay condiciones terrestres. En los Pilbara de Australia hay rastros de vida hace casi <span class=\"num\">3.5 mil millones</span> de años, muy pronto tras el bombardeo final.",
        },
        {
          type: 'paragraph',
          html: "Los experimentos tipo Miller-Urey muestran aminoácidos fáciles, pero aún ignoramos el salto a células. Marte pudo ser más hospitalario al principio y el intercambio de rocas entre planetas complica saber dónde empezó todo. Encontrar microbios en Marte no bastaría. Habría que demostrar una <span class=\"term\">segunda génesis</span>, un origen de vida independiente del terrestre. Por eso Davies insiste en buscar otro origen aquí mismo, en la Tierra.",
        },
        {
          type: 'key',
          html: "La abundancia de planetas no decide el debate. Solo una génesis independiente demostrada convertiría la vida en imperativo cósmico.",
        },
        {
          type: 'paragraph',
          html: "La prueba más cercana de ese imperativo podría estar oculta en nuestra propia biosfera.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Una biosfera sombra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Podría haber surgido la vida más de una vez en la Tierra sin que lo hayamos notado?",
        },
        {
          type: 'paragraph',
          html: "Varios orígenes de vida en la Tierra implicarían un universo casi seguro rebosante de biología. Toda la biología conocida comparte ADN, ribosomas y el mismo código genético triplete. Forman un solo <span class=\"term\">árbol de la vida</span>, el mapa de parentesco entre especies. La mayoría de microbios no se cultivan en laboratorio. Nuestras técnicas detectan solo «vida como la conocemos». Podría existir una <span class=\"term\">biosfera sombra</span>, es decir, formas de «vida rara» de origen independiente aún en la Tierra.",
        },
        {
          type: 'paragraph',
          html: "Una estrategia es buscar en nichos extremos donde la vida estándar no llega. <span class=\"person\">Felisa Wolfe-Simon</span> busca arsenicófilos en Mono Lake. Otros prueban vida espejo con quiralidad opuesta o aminoácidos no usados por nosotros. Diferenciar un cuarto «arbusto» evolutivo de un segundo árbol exige química fina. Un segundo origen en la Tierra sería el hallazgo biológico más sensacional y confirmaría el imperativo cósmico.",
        },
        {
          type: 'key',
          html: "Buscar vida rara en casa es la vía más barata para saber si el universo está lleno de biología o si somos una excepción.",
        },
        {
          type: 'paragraph',
          html: "Si la vida es común, ¿cuánta inteligencia tecnológica deberíamos esperar?",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "¿Cuánta inteligencia hay?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Sigue de forma casi inevitable la inteligencia una vez que hay vida?",
        },
        {
          type: 'paragraph',
          html: "La falacia del Planeta de los Simios proyecta progreso evolutivo hacia el cerebro humano. En la Tierra la inteligencia tardó miles de millones de años. La <span class=\"term\">ecuación de Drake</span> (fórmula que estima civilizaciones detectables) multiplica factores como estrellas con planetas, fracción con vida y duración de emisiones. Casi todos son incógnitas. Carter y Hanson formalizan el <span class=\"term\">Gran Filtro</span>, la serie de pasos improbables entre materia e inteligencia tecnológica. Si esos pasos son muy difíciles, los que ocurren deberían llenar casi toda la ventana de habitabilidad.",
        },
        {
          type: 'paragraph',
          html: "Eso haría a la Tierra una «suerte estadística» y debilitaría las expectativas SETI. Peor aún, si encontramos vida en Marte u otro sitio, el filtro probablemente está delante de la inteligencia. Sería un mal augurio para nuestra supervivencia. <span class=\"person\">Nick Bostrom</span> dice que un Marte estéril sería alivio. Los filósofos no sustituyen datos, pero el silencio obliga a ampliar la búsqueda experimental.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~6",
              "label": "Pasos improbables (Gran Filtro, Carter)"
            },
            {
              "value": "~800 Ma",
              "label": "Intervalo entre pasos / tiempo restante solar"
            }
          ],
        },
        {
          type: 'key',
          html: "O la inteligencia es muy rara y somos una excepción, o las civilizaciones tecnológicas se destruyen pronto — y descubrir vida simple inclina hacia lo segundo.",
        },
        {
          type: 'paragraph',
          html: "Hay que buscar inteligencia donde no esperamos mensajes radiofónicos dirigidos a nosotros.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Nuevo SETI: ampliar la búsqueda",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Tiene sentido esperar que ET nos hable por radio si aún no sabe que existimos?",
        },
        {
          type: 'paragraph',
          html: "El retardo lumínico hace que una civilización a 1000 años-luz vea la Tierra del año 1010, sin radiotelescopios. Solo cuando nuestras primeras emisiones lleguen podría dirigirnos algo, dentro de milenios. El «nuevo SETI» busca <span class=\"term\">firmas de inteligencia</span>, es decir, huellas de mentes en cualquier dominio científico. Incluye neutrinos de alta energía, balizas tipo faro y sondas en puntos de Lagrange.",
        },
        {
          type: 'paragraph',
          html: "Las sondas <span class=\"term\">von Neumann</span> (máquinas autorreplicantes) y nanoprobes baratos podrían esparcir datos. Virus diseñados insertarían mensajes en ADN ajeno, aunque enfrentan mutación y compatibilidad. Proyectos como genome@home buscan patrones sospechosos. La búsqueda debe ser imaginativa pero acotada. Conviene concentrarse en el plano galáctico y en pulsars como referencias.",
        },
        {
          type: 'key',
          html: "El nuevo SETI complementa la radio clásica buscando huellas de mentes antiguas que quizá nunca quieran charlar con nosotros.",
        },
        {
          type: 'paragraph',
          html: "Si alguna civilización colonizó la galaxia, debería haber dejado rastros forenses.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Huellas de una diáspora galáctica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si hay civilizaciones antiguas, ¿dónde están — y por qué Fermi preguntó «¿dónde está todo el mundo?»?",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1950</span>, <span class=\"person\">Enrico Fermi</span> razonó que si la vida es común y la Tierra es típica, colonos o máquinas autorreplicantes deberían haber llegado hace eones. Explicaciones van del zoo hipótesis al «Club Galáctico» de Bracewell, donde conviene intercambiar datos que viajar. Modelos de percolación muestran olas de colonización con vacíos. Nuestro sistema solar podría ser un oasis omitido.",
        },
        {
          type: 'paragraph',
          html: "Tipler argumenta que la ausencia de von Neumann en el sistema solar casi prueba soledad. Davies es más cauteloso porque sondas pequeñas podrían esconderse. Buscar anomalías (cometas faltantes, plutonio antiguo) requiere Bayes. El prior de «ET robó partículas exóticas» es bajo. Turistas del tiempo empeoran la paradoja, pero no hay huellas obvias de industria antigua en la Tierra.",
        },
        {
          type: 'key',
          html: "La paradoja de Fermi no demuestra soledad, pero empuja a buscar huellas indirectas de tecnología en astronomía, geología y física de partículas.",
        },
        {
          type: 'paragraph',
          html: "Esa tecnología, si es millones de años mayor, podría parecernos magia pura.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Magia alienígena",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Reconoceríamos tecnología un millón de años más avanzada que la nuestra?",
        },
        {
          type: 'paragraph',
          html: "La escala de <span class=\"person\">Nikolai Kardashev</span> (Tipos I-III según energía planetaria, estelar o galáctica) es parroquial pero útil para huellas lejanas. Una <span class=\"term\">esfera de Dyson</span> (capa que captura toda la luz de una estrella) brillaría en infrarrojo. Un agujero negro rotante puede ceder hasta un <span class=\"num\">29 %</span> de su masa como energía. Teletransporte masivo o agujeros de gusano traversables chocan con costes prácticos enormes.",
        },
        {
          type: 'paragraph',
          html: "Davies propone tecnología como <span class=\"term\">naturaleza-plus</span>, es decir, propósito añadido sin violar leyes físicas. Puede operar en niveles más allá de materia e información, invisibles para nosotros. La segunda ley termodinámica sigue siendo sacrosanta. No se puede «minar» el vacío cuántico para propulsión perpetua. Especular está bien, pero anarquía sin física no ayuda al SETI.",
        },
        {
          type: 'key',
          html: "Buscar supertecnología es buscar efectos físicos grandes o anomalías sutiles, no aparatos con botones como los nuestros.",
        },
        {
          type: 'paragraph',
          html: "La forma más probable de esa supermente no sería biológica.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Inteligencia posbiológica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Seguiría un extraterrestre avanzado pareciéndose al Mekon o a E.T.?",
        },
        {
          type: 'paragraph',
          html: "El humanoide de cerebro grande es absurdo evolutiva y técnicamente. La biotecnología, la nanotecnología y la IA empujan la inteligencia hacia sistemas diseñados. Davies los llama <span class=\"term\">ATS</span> (super-sistemas auto-teleológicos) que se reconfiguran sin Darwin. <span class=\"person\">Alan Turing</span> ya preguntó si las máquinas piensan. Pronto el cómputo superará el cerebro en potencia bruta.",
        },
        {
          type: 'paragraph',
          html: "Cerebros Matrioshka envolviendo estrellas procesan lento por límites de la luz. Un <span class=\"term\">ordenador cuántico</span> (máquina que explota superposiciones atómicas para calcular) extraterrestre podría preferir ciberespacio matemático al contacto con bichos planetarios. Esa retirada sería una resolución sombría del silencio. Aun así, un espectro de inteligencias podría aún emitir balizas. El nuevo SETI no reemplaza la radio, la complementa.",
        },
        {
          type: 'key',
          html: "Encontrar ET es casi seguro encontrar inteligencia posbiológica que no comparte nuestra urgencia por conversar.",
        },
        {
          type: 'paragraph',
          html: "Si llegara señal, hay que saber qué hacer el día después.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Primer contacto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pasa el día después de detectar una señal o una huella inequívoca de inteligencia alienígena?",
        },
        {
          type: 'paragraph',
          html: "El SETI Post-Detection Taskgroup (IAA) prepara protocolos de verificación con otro observatorio e información a la UAI antes del anuncio público. En la práctica, «la historia estalla antes de ser historia». Twitter y prensa pueden adelantar la certeza. Un objeto claramente artificial en el espacio se anunciaría como cualquier descubrimiento astronómico. Un mensaje dirigido a humanos sería otro orden de magnitud, con decodificación lenta vía matemáticas universales.",
        },
        {
          type: 'paragraph',
          html: "El impacto sería transformador como Copérnico o Darwin, pero gradual en la vida cotidiana. Las religiones centradas en la humanidad única entrarían en crisis teológica. Críticos como Crichton señalan fe en la ecuación de Drake. Davies responde que el método sigue siendo científico aunque la prior sea incierta.",
        },
        {
          type: 'key',
          html: "Preparar post-detección es gestionar verificación, medios y significado cultural — no un complot de silencio gubernamental.",
        },
        {
          type: 'paragraph',
          html: "Incluso sin señal entrante, algunos quieren transmitir (METI): ¿debemos gritar al cosmos?",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "¿Quién habla por la Tierra?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Debemos responder si ET llama — y qué mensaje representa a la humanidad?",
        },
        {
          type: 'paragraph',
          html: "El METI (mensajes activos) divide a la comunidad. <span class=\"person\">David Brin</span> pide prudencia internacional. Davies considera el riesgo mínimo porque nuestras señales son débiles y ET ya podría ver oxígeno y agua. Las placas Pioneer/Voyager muestran figuras humanas parroquiales. Mejor enviar ecuaciones de Maxwell, Einstein y Dirac como benchmark científico.",
        },
        {
          type: 'paragraph',
          html: "Davies cierra con tres escenarios. Un universo lleno de inteligencia sería esperanzador. Una Tierra única con vida e inteligencia implicaría responsabilidad cósmica de esparcir la chispa. Vida común pero inteligencia siempre extinguida sería alarmante. Responde con «tres sombreros». Como científico, probablemente solos. Como filósofo, inquieto. Como soñador, desea compañía. SETI sigue valiendo por las grandes preguntas aunque sea un tiro lejano.",
        },
        {
          type: 'key',
          html: "El silencio puede ser dorado o siniestro según lo que encontremos. Seguir buscando es la única forma honesta de salir de la incertidumbre.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Silencio inquietante",
    "description": "Ausencia de contacto pese a expectativa de vida abundante."
  },
  {
    "title": "Antropocentrismo SETI",
    "description": "Proyectar radio, política y cuerpos humanos sobre ET."
  },
  {
    "title": "Imperativo cósmico",
    "description": "Vida casi inevitable en planetas habitables."
  },
  {
    "title": "Biosfera sombra",
    "description": "Segunda génesis de vida rara aún en la Tierra."
  },
  {
    "title": "Gran Filtro",
    "description": "Escalones improbables entre materia e inteligencia tecnológica."
  },
  {
    "title": "Ecuación de Drake",
    "description": "Producto de factores que estima civilizaciones detectables."
  },
  {
    "title": "Paradoja de Fermi",
    "description": "Si ET es común, ¿dónde están colonos y máquinas?"
  },
  {
    "title": "Esfera de Dyson",
    "description": "Enjaular una estrella para capturar su energía."
  },
  {
    "title": "Inteligencia posbiológica",
    "description": "Mentes máquina/ATS que reemplazan la biología."
  },
  {
    "title": "Nuevo SETI",
    "description": "Firmas de inteligencia en toda la ciencia, no solo radio."
  }
],
  chronology: [
  {
    "year": "1931",
    "text": "Jansky detecta radio de la Vía Láctea."
  },
  {
    "year": "1950",
    "text": "Fermi: «Where is everybody?» en Los Alamos."
  },
  {
    "year": "1959",
    "text": "Cocconi-Morrison en Nature; Feynman sobre nanotecnología."
  },
  {
    "year": "1960",
    "text": "Frank Drake, Proyecto Ozma."
  },
  {
    "year": "1974",
    "text": "Mensaje de Arecibo; Bracewell y el Club Galáctico."
  },
  {
    "year": "1977",
    "text": "Señal «Wow!» en Ohio."
  },
  {
    "year": "1993",
    "text": "Congreso de EE.UU. retira fondos NASA al SETI."
  },
  {
    "year": "2008",
    "text": "Taller «The Sound of Silence», ASU."
  },
  {
    "year": "2010",
    "text": "Publicación de *The Eerie Silence*; 50 años de SETI."
  }
],
  figures: [
  {
    "name": "Frank Drake",
    "role": "Ozma 1960, ecuación de Drake, pionero SETI"
  },
  {
    "name": "Giuseppe Cocconi & Philip Morrison",
    "role": "Artículo Nature 1959, SETI por radio"
  },
  {
    "name": "Karl Jansky",
    "role": "Descubrimiento de radioastronomía 1931"
  },
  {
    "name": "Enrico Fermi",
    "role": "Paradoja «¿dónde está todo el mundo?» 1950"
  },
  {
    "name": "Brandon Carter",
    "role": "Argumento temporal y Gran Filtro"
  },
  {
    "name": "Robin Hanson",
    "role": "Formalización del Gran Filtro y colonización"
  },
  {
    "name": "Freeman Dyson",
    "role": "Esfera de Dyson (1959)"
  },
  {
    "name": "Carl Sagan",
    "role": "Contact, Cosmos, divulgación SETI"
  },
  {
    "name": "Nick Bostrom",
    "role": "Marte estéril como buena noticia existencial"
  },
  {
    "name": "Paul Davies",
    "role": "Autor; presidente Post-Detection Taskgroup"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El silencio de cincuenta años no cierra la pregunta: puede significar que miramos mal, que somos raros o que la inteligencia se apaga pronto.",
  "Davies pide un SETI más amplio y menos humano, y reconoce tres futuros distintos según lo que encontremos fuera de la Tierra.",
  "La biosfera sombra o vida en Marte cambiarían las probabilidades de un modo radical.",
  "Si solo hay microbios, el Gran Filtro podría estar delante de nosotros.",
  "Si somos únicos con inteligencia, cargamos una responsabilidad cósmica."
],
    highlight: "Probablemente estamos solos en el universo observable — pero no lo sabemos, y por eso hay que seguir buscando.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Paul Davies",
    line2: "\"The Eerie Silence\" · Penguin / Mariner · 2010",
  },
}
