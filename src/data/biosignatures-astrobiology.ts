import type { BookSummary } from '../types/book'

export const biosignaturesAstrobiology: BookSummary = {
  slug: "biosignatures-astrobiology",
  meta: {
    title: "From Fossils to Astrobiology: Records of Life on Earth and Search for Extraterrestrial Biosignatures",
    subtitle: "Compendio sobre fósiles terrestres, analogías extremas y estrategias para detectar vida más allá de la Tierra",
    author: "Joseph Seckbach y Maud M. Walsh (eds.)",
    meta: [
      "📖 2009 · Springer (COLE vol. 12)",
      "✍️ 26 capítulos · 30 autores de 16 países",
    ],
    titleEs: "De fósiles a la astrobiología: Registros de vida en la Tierra y búsqueda de biosignaturas extraterrestres",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prólogo"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Introducción: un mapa hacia la fata morgana"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "NanoSIMS y materia orgánica"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Barberton: una advertencia"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Ventanas al origen de la vida"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Fósiles silicatos de orgánicos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Fosfatización de microfósiles"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Fósiles proterozoicos de la India"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Comunidades microbianas en estromatolitos"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Biofábricas de sinter en fuentes termales"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Mantos cianobacterianos en siliciclásticos"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Origen de la vida y de los animales"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Microbios en el subsuelo terrestre"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Vida microbiana en estructuras de impacto"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Microorganismos fósiles en filtraciones de metano"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Endolitos en ambientes áridos"
  },
  {
    "id": "cap16",
    "num": "16",
    "label": "Bacterias magnetotácticas y terraformación"
  },
  {
    "id": "cap17",
    "num": "17",
    "label": "Inteligencia humana y convergencia evolutiva"
  },
  {
    "id": "cap18",
    "num": "18",
    "label": "Formas de vida cósmicas"
  },
  {
    "id": "cap19",
    "num": "19",
    "label": "Huellas astronómicas en el registro fósil"
  },
  {
    "id": "cap20",
    "num": "20",
    "label": "¿Impactos y extinciones masivas?"
  },
  {
    "id": "cap21",
    "num": "21",
    "label": "Irradiación de analogos cometarios"
  },
  {
    "id": "cap22",
    "num": "22",
    "label": "El Big Bang en el tiempo cero"
  },
  {
    "id": "cap23",
    "num": "23",
    "label": "Improntas moleculares de redes de reacción"
  },
  {
    "id": "cap24",
    "num": "24",
    "label": "El caso ALH84001 en Marte"
  },
  {
    "id": "cap25",
    "num": "25",
    "label": "Ventanas de preservación en Marte"
  },
  {
    "id": "cap26",
    "num": "26",
    "label": "Síntesis y conclusiones"
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
      title: "Registros terrestres, búsqueda extraterrestre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Joseph Seckbach</span> y <span class=\"person\">Maud M. Walsh</span> presentan el volumen 12 de la serie COLE (<span class=\"term\">Cellular Origin, Life in Extreme Habitats and Astrobiology</span>): un compendio sobre el registro de vida en la Tierra como guía para investigar biosignaturas en el cosmos.",
        },
        {
          type: 'paragraph',
          html: "La astrobiología integra astronomía, química y ciencias planetarias. Este libro reúne a <span class=\"num\">30</span> contribuyentes de <span class=\"num\">16</span> países en tres bloques — geología, biología y ciencias espaciales — más un cierre sobre Marte y perspectivas generales.",
        },
        {
          type: 'key',
          html: "El registro fósil terrestre calibra qué buscar, dónde buscarlo y con qué cautela interpretarlo fuera de la Tierra.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Introducción: un mapa hacia la fata morgana",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Wladyslaw Altermann</span>, geólogo escéptico invitado a escribir la introducción, advierte que la astrobiología puede ser «ciencia sin objeto» si no hay vida demostrable más allá de la Tierra — una posible <span class=\"term\">fata morgana</span>.",
        },
        {
          type: 'paragraph',
          html: "Reconoce, no obstante, el enorme aporte de la disciplina a geología precámbrica, paleobiología, microbiología y técnicas analíticas nuevas. Critica interpretaciones espectaculares (fósiles marcianos, canales de Lowell) y la presión social por resultados positivos que distorsiona la objetividad científica.",
        },
        {
          type: 'paragraph',
          html: "Define astrobiología según la NASA como estudio del origen, evolución, distribución y futuro de la vida, incluida la búsqueda extraterrestre. Propone un enfoque humilde: el registro fósil debe ser el «ground truth» antes de extrapolar a otros planetas.",
        },
        {
          type: 'quote',
          text: "«Si no hay vida allá afuera o es demasiado remota para probarse, la astrobiología puede ser un camino costoso hacia una fata morgana.»",
          attribution: "Wladyslaw Altermann",
        },
        {
          type: 'key',
          html: "La Tierra es el único laboratorio confirmado; extrapolar exige rigor proporcional a la distancia en tiempo y espacio.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "NanoSIMS y materia orgánica en muestras terrestres y extraterrestres",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Dorothy Z. Oehler</span> y coautores presentan <span class=\"term\">NanoSIMS</span> (espectrometría de iones secundarios a nanoescala) como herramienta para distinguir restos biogénicos de materia orgánica abiótica en rocas arcaicas y meteoritos.",
        },
        {
          type: 'paragraph',
          html: "La resolución (~<span class=\"num\">0,05 µm</span>) supera <span class=\"num\">10–50 veces</span> la de SIMS convencional. Permite mapear C, N y S simultáneamente y comparar con microfósiles ópticamente reconocibles en la Formación Bitter Springs (~<span class=\"num\">0,85 Ga</span>), cuya biogenicidad no se discute.",
        },
        {
          type: 'paragraph',
          html: "El estudio establece firmas químicas de referencia para evaluar materiales menos claros del Arcaico temprano y muestras extraterrestres como el meteorito marciano ALH84001.",
        },
        {
          type: 'key',
          html: "NanoSIMS une morfología microscópica e isotopía elemental a escala submicrométrica — nueva ventana para biosignaturas químicas.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Barberton: desenredar el registro fósil microbiano",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Maud M. Walsh</span> y <span class=\"person\">Frances Westall</span> advierten que colonizaciones microbianas posteriores al depósito pueden falsear señales arcaicas auténticas en el <span class=\"term\">Cinturón Greenstone de Barberton</span> (Sudáfrica, hasta ~<span class=\"num\">3.500 Ma</span>).",
        },
        {
          type: 'paragraph',
          html: "Documentan dos casos: hongos colonizando superficies internas de roca tras la litificación, y precipitación bacteriana moderna de óxidos de Fe-Mn sobre material arcaico removilizado. Las formaciones Hooggenoeg y Kromberg del Grupo Onverwacht conservan texturas primarias pero no están inmunes a sobreimpresión biológica tardía.",
        },
        {
          type: 'paragraph',
          html: "Con biomarcadores químicos cada vez más sensibles, discriminar actividad sindeposicional de procesos posteriores es crítico para astrobiología.",
        },
        {
          type: 'key',
          html: "Un microfósil arcaico exige demostrar que la señal es contemporánea al depósito, no un invasor post-Arcaico.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Ventanas al origen de la vida en la Tierra y Marte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">David Wacey</span> y coautores revisan señales biogénicas putativas en rocas de más de <span class=\"num\">~3 Ga</span> en Groenlandia (Isua, Akilia), Pilbara (Australia) y Barberton — las tres «ventanas» preservacionales principales del registro temprano.",
        },
        {
          type: 'paragraph',
          html: "Solo Pilbara y Barberton conservan pilas estratigráficas arcaicas intactas con bajo metamorfismo. Isua y rocas más antiguas (~<span class=\"num\">3,85 Ga</span>) están más alteradas. Los esfuerzos se centran en cherts, bandas ferríferas, rocas hidrotermales y, recientemente, rocas volcánicas.",
        },
        {
          type: 'paragraph',
          html: "Cada reporte exige preguntarse: ¿es la estructura auténticamente biogénica y está en contexto estratigráfico coherente? El consenso científico sobre la vida más antigua sigue siendo elude.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Ventana preservacional",
              "description": "Tipo de roca y grado metamórfico que permiten retener biosignaturas.",
              "icon": "🪟"
            },
            {
              "title": "Ground truthing",
              "description": "Calibrar criterios terrestres antes de buscar en Marte u otros cuerpos.",
              "icon": "🔬"
            },
            {
              "title": "Controversia",
              "description": "Akilia, «microtubos» y estromatolitos arcaicos siguen debatiéndose.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "Buscar vida antigua es elegir la roca correcta y someter cada señal a un estándar de prueba excepcionalmente alto.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Modelos de fósiles silicatos de materiales orgánicos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Vera M. Kolb</span> y <span class=\"person\">Patrick J. Liesch</span> estudian en laboratorio cómo distintas clases de compuestos orgánicos interactúan con silicatos básicos de sodio, modelando la <span class=\"term\">silicificación</span> y el <span class=\"term\">entombment</span> (sepultamiento mineral rápido).",
        },
        {
          type: 'paragraph',
          html: "Usan espectroscopía IR in situ — relevante para misiones a Marte sin retorno de muestras. Preguntan si el orgánico silicificado conserva bandas IR características y si el orgánico modifica la morfología del gel de sílice aunque luego desaparezca.",
        },
        {
          type: 'paragraph',
          html: "Los silicatos son abundantes en Tierra y Marte; expandir el catálogo terrestre de biosignaturas minerales facilita distinguir procesos biológicos de abióticos en otros mundos.",
        },
        {
          type: 'key',
          html: "La silicificación puede preservar orgánico dentro del sílice o dejar solo huellas morfológicas inorgánicas del compuesto original.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Fosfatización de microfósiles e implicaciones astrobiológicas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Shuhai Xiao</span> y <span class=\"person\">James D. Schiffbauer</span> analizan la <span class=\"term\">fosfatización</span> como vía tafonómica excepcional para microbios blandos — el modelo más plausible si hubo vida microscópica en otros planetas.",
        },
        {
          type: 'paragraph',
          html: "La biosfera Arcaico-Proterozoica (<span class=\"num\">3,5–0,54 Ga</span>) fue casi enteramente microbiana y sin esqueletos. Butterfield identifica seis estilos de preservación excepcional; la fosfatización tridimensional de la Formación Doushantuo (~<span class=\"num\">635–551 Ma</span>) es una de las más potentes.",
        },
        {
          type: 'paragraph',
          html: "Si existieron organismos extraterrestres microscópicos, buscar ventanas fosfáticas analogas debería ser prioridad estratégica.",
        },
        {
          type: 'key',
          html: "En mundos antiguos, la evidencia morfológica de vida será microscópica, blanda y excepcionalmente preservada — no fósil clásico.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Fósiles unicelulares y multicelulares proterozoicos de la India",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Vinod Chandra Tewari</span> describe microfósiles del Dolomita Buxa (Himalaya nororiental, India): <span class=\"num\">27</span> taxones de cianobacterias, acritarcos y microfósiles en forma de vaso en el Ediacárico.",
        },
        {
          type: 'paragraph',
          html: "El registro precámbrico indio — cuenca Krol, formaciones Blaini/Tal — enlaza glaciaciones marinoanas, biota ediacárica y transición al Cámbrico. Los fósiles de Buxa ocurren entre la diamictita Blaini y los depósitos del Tal.",
        },
        {
          type: 'paragraph',
          html: "Usa el registro terrestre como modelo para la escasez de roca disponible en otros planetas: cada muestra marciana será estadísticamente preciosa.",
        },
        {
          type: 'key',
          html: "La diversidad microbiana ediacárica del Himalaya ilustra qué buscar cuando el material rocoso extraterrestre es limitado.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Comunidades microbianas de estromatolitos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Brendan P. Burns</span>, <span class=\"person\">Malcolm R. Walter</span> y <span class=\"person\">Brett A. Neilan</span> revisan estromatolitos como analogos vivos del registro fósil más antiguo y abundante de la Tierra (<span class=\"num\">3,5 Ga</span>–<span class=\"num\">0,6 Ga</span>).",
        },
        {
          type: 'paragraph',
          html: "Los estromatolitos dominaron el registro macrofósil precámbrico; su declive coincide con cambios químicos del océano, competencia algal y pastoreo/bioturbación por metazoos. Persisten hoy en ambientes extremos (Shark Bay, Yellowstone) con pocos consumidores.",
        },
        {
          type: 'paragraph',
          html: "Perfilado lipídico y diversidad microbiana en mats modernos vinculan firmas químicas estables con componentes bióticos — puente entre geología y microbiología.",
        },
        {
          type: 'key',
          html: "Estromatolito moderno + microfósil antiguo + biomarcador lipídico = tríada clásica de biosignatura sedimentaria.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Biofábricas de sinter en fuentes termales (Uzon, Kamchatka)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Jessica C. Goin</span> y <span class=\"person\">Sherry L. Cady</span> estudian cómo biofilms microbianos moldean la <span class=\"term\">biofábrica</span> del sinter en fuentes termales de la caldera Uzon (Kamchatka, Rusia).",
        },
        {
          type: 'paragraph',
          html: "La mayoría de microbios en ecosistemas termales no se preservan como microfósiles carbonosos auténticos, pero influyen en la textura del sinter mediante procesos biológicos, químicos y sedimentarios concurrentes.",
        },
        {
          type: 'paragraph',
          html: "Reconocer esa influencia en depósitos hidrotermales terrestres — y potencialmente marcianos — requiere entender la interacción comunidad-mineral durante la acreción del sinter.",
        },
        {
          type: 'key',
          html: "Ausencia de microfósil carbonoso no descarta vida: la biofábrica sedimentaria puede ser la biosignatura.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Rasgos de mantos cianobacterianos en siliciclásticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Hubertus Porada</span> y <span class=\"person\">Patrick G. Eriksson</span> comparan rasgos de <span class=\"term\">mantos microbianos</span> en paleodesiertos del Grupo Waterberg (~<span class=\"num\">2,0–1,8 Ga</span>, cratón Kaapvaal) y planicies supramareales modernas.",
        },
        {
          type: 'paragraph',
          html: "Tras eventos de impacto planetario-estabilizadores (~<span class=\"num\">3.850 Ma</span>), las cianobacterias oxigén fotosintéticas aparecen en el registro desde ~<span class=\"num\">3,5 Ga</span>. Ambientes áridos extremos preservaron proxies de desecación, inundación flash y cicatrización de grietas en areniscas finas.",
        },
        {
          type: 'paragraph',
          html: "Los rasgos sedimentarios de mats en siliciclásticos complementan el registro carbonático de estromatolitos y amplían el catálogo de biosignaturas para Marte.",
        },
        {
          type: 'key',
          html: "Mats microbianos dejan huellas físicas en sedimentos clásticos, no solo en carbonatos laminados.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Descifrar el origen de la vida y de los animales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Jonathan Antcliffe</span> y <span class=\"person\">Nicola McLoughlin</span> proponen preguntas anidadas comunes al estudiar origen de la vida (Arcaico) y origen de los animales (biota Ediacara, ~<span class=\"num\">580–543 Ma</span>).",
        },
        {
          type: 'paragraph',
          html: "Analogía con el poema «Jabberwocky»: estructuras precámbricas invitan interpretaciones plausibles pero no únicas. Estromatolitos arcaicos y <span class=\"term\">Tribrachidium</span> (simetría radial triple) ilustran el desafío.",
        },
        {
          type: 'paragraph',
          html: "Un paleontólogo precámbrico debe preguntarse qué evidencia es válida y qué estándar de prueba exige cada afirmación — lecciones transferibles a Marte.",
        },
        {
          type: 'key',
          html: "Origen de la vida y origen de los animales comparten el mismo problema epistemológico: morfología ambigua bajo escrutinio extremo.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Microorganismos en el subsuelo antiguo — ¿y en el espacio?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Helga Stan-Lotter</span> y coautores revisan la vida <span class=\"term\">intraterrestre</span> en granito, permafrost, cuevas y minas — relevante para subsuelos marcianos y el océano subsuperficial de Europa.",
        },
        {
          type: 'paragraph',
          html: "Las superficies de planetas sin atmósfera protectora (Marte, posiblemente Europa) están esterilizadas por UV; el subsuelo promete refugio. Preguntas abiertas: ¿son los microbios tan antiguos como la roca? ¿Existen formas dormantes distintas de endosporas?",
        },
        {
          type: 'paragraph',
          html: "Investigación aplicada (residuos radiactivos, acuíferos contaminados) informa instrumentos y estrategias para buscar organics y vida en profundidad extraterrestre.",
        },
        {
          type: 'key',
          html: "Si hay vida en Marte hoy, lo más probable es intraterrestre — protegida del UV y de la desecación superficial.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Vida microbiana antigua en estructuras de impacto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Tomas Hode</span> y coautores estudian un caso terrestre de vida microbiana preservada en estructura de impacto, vinculando Marte temprano (agua líquida, vulcanismo, bombardeo) con sistemas hidrotermales como blanco astrobiológico.",
        },
        {
          type: 'paragraph',
          html: "Los depósitos hidrotermales preservan quimiofósiles, estructuras organosedimentarias, microfósiles silicificados y biomarcadores. Marte carece de tectónica de placas pero conserva estratos antiguos intactos — ventaja sobre la Tierra.",
        },
        {
          type: 'paragraph',
          html: "Cuando una roca terrestre antigua bien preservada se analiza, los problemas metodológicos anticipan los de muestras marcianas futuras.",
        },
        {
          type: 'key',
          html: "Impacto + hidrotermalismo = sistema que puede generar, albergar y preservar biosignaturas en ambos planetas.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Microorganismos fósiles en filtraciones de metano",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Roberto Barbieri</span> y <span class=\"person\">Barbara Cavalazzi</span> conectan la detección de <span class=\"term\">metano</span> en la atmósfera marciana con ecosistemas de <span class=\"term\">cold seeps</span> terrestres — filtraciones frías ricas en CH₄ documentadas desde el Paleozoico inferior.",
        },
        {
          type: 'paragraph',
          html: "Los carbonatos authigénicos derivados de metano precipitan con comunidades microbianas (arqueas metanotróficas ANME-1/2/3, consorcios simbióticos con metazoos) que fijan la base trófica. El metano en Europa, Titán y Marte reaviva el interés en este trazador biogénico potencial.",
        },
        {
          type: 'paragraph',
          html: "Si la vida marciana fue microbiana y hubo periodos húmedos, los ecosistemas tipo filtración de metano — con alto potencial de fosilización por interacciones microbio-mineral — son analogos prioritarios para misiones ESA/NASA.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Cold seep",
              "description": "Filtración fría de metano/hidrocarburos que sustenta quimiosíntesis.",
              "icon": "🫧"
            },
            {
              "title": "Carbonato authigénico",
              "description": "Registro fósil de ecosistemas de metano desde el Silúrico.",
              "icon": "🪨"
            },
            {
              "title": "Metano marciano",
              "description": "Trazador debatido: fuente geológica, biológica o ambas.",
              "icon": "🔴"
            }
          ],
        },
        {
          type: 'key',
          html: "Filtraciones de metano unen trazador atmosférico, ecosistema extremo y registro fósil preservable — núcleo astrobiológico del capítulo de Cavalazzi.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Endolitos en ambientes áridos terrestres",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Nunzia Stivaletta</span> y <span class=\"person\">Roberto Barbieri</span> describen microbios <span class=\"term\">endolíticos</span> (crypto-, eu- y quasmoendolitos) en desiertos calientes y fríos: Negev, Atacama, Antártida, Ártico.",
        },
        {
          type: 'paragraph',
          html: "Migran a fracturas y poros donde hay humedad, nutrientes y protección contra UV, sequedad y variaciones térmicas. Fósiles endolíticos se conocen desde el Proterozoico tardío (Formación Eleonora Bay, Groenlandia).",
        },
        {
          type: 'paragraph',
          html: "La detección de <span class=\"term\">sulfatos</span> en Marte impulsa el interés en evaporitas continentales como posible hábitat endolítico pasado o presente.",
        },
        {
          type: 'key',
          html: "Endolito = estrategia de supervivencia en desierto; Marte árido y radiado favorece la misma lógica de refugio interno.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "Bacterias magnetotácticas y terraformación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Ioan I. Ardelean</span> y coautores revisan <span class=\"term\">bacterias magnetotácticas</span> (MTB): procariontes con <span class=\"term\">magnetosomas</span> que orientan el nado según el campo geomagnético (<span class=\"person\">Blakemore</span>, <span class=\"num\">1975</span>).",
        },
        {
          type: 'paragraph',
          html: "Proponen su potencial en terraformación de Marte por respiración con nitratos/Fe³⁺, fijación de CO₂ en oscuridad y uso de N₂ molecular — complementando fototróficos y extremófilos ya considerados candidatos.",
        },
        {
          type: 'paragraph',
          html: "La magnetotaxis podría ayudar a navegar hacia condiciones óptimas si existiera campo magnético planetario utilizable.",
        },
        {
          type: 'key',
          html: "MTB combinan metabolismo versátil y navegación magnética — especulación sobre papel en terraformación, no consenso establecido.",
        },
      ],
    },
    {
      id: "cap17",
      num: "17",
      title: "Inteligencia humana no es rasgo convergente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Charles H. Lineweaver</span> critica la «hipótesis del Planeta de los Simios»: la idea de que la vida inevitably evoluciona hacia inteligencia tipo humana capaz de construir radiotelescopios.",
        },
        {
          type: 'paragraph',
          html: "En debates sobre la ecuación de Drake, el término biológico más controvertido es la probabilidad de inteligencia comunicativa tras el origen de la vida. Lineweaver argumenta con pruebas paleontológicas que inteligencia humanoide no es convergencia evolutiva esperable.",
        },
        {
          type: 'paragraph',
          html: "Biogénesis rápida en la Tierra no implica que complejidad tecnológica sea un attractor universal — relevante para SETI y expectativas públicas sobre vida extraterrestre.",
        },
        {
          type: 'key',
          html: "Vida microbiana puede ser común; civilización radio-detectable, probablemente no.",
        },
      ],
    },
    {
      id: "cap18",
      num: "18",
      title: "Formas de vida cósmicas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Attila Grandpierre</span> propone el <span class=\"term\">principio de Bauer</span> como primer principio de la biología aplicable más allá de la química proteica: organismos invierten trabajo (∆W) contra el equilibrio termodinámico.",
        },
        {
          type: 'paragraph',
          html: "Formula BP→VI→BC→∆W→∆Π (interacciones virtuales, acoplamientos biológicos, aumento de extropía). Extiende la noción de vida al Sol, ciclos estelares y formas «intermitentes u ocultas» en el vacío.",
        },
        {
          type: 'paragraph',
          html: "Posición minoritaria y altamente especulativa dentro del volumen; ilustra el espectro filosófico de la astrobiología más allá del empirismo geológico.",
        },
        {
          type: 'key',
          html: "Grandpierre amplía «vida» más allá de la bioquímica terrestre — útil como contraste metodológico, no como guía operativa de misión.",
        },
      ],
    },
    {
      id: "cap19",
      num: "19",
      title: "Huellas astronómicas y astrobiológicas en el registro fósil",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Julian Chela-Flores</span> y coautores integran <span class=\"term\">clima espacial</span>, observaciones solares históricas, núcleos de hielo, anillos de árboles y materiales extraterrestres para reconstruir condiciones que afectaron la vida temprana.",
        },
        {
          type: 'paragraph',
          html: "Meteoritos, lunares y cometas conservan implantes iónicos y radionúcleidos de rayos cósmicos; archivos terrestres (sedimentos marinos, corales, nódulos de manganeso) registran proxies climáticos detallados.",
        },
        {
          type: 'paragraph',
          html: "El clima espacial y la actividad solar temprana son factores en el origen y evolución de la biosfera — puente entre astronomía y paleobiología.",
        },
        {
          type: 'key',
          html: "La vida no evolucionó aislada del entorno cósmico: el Sol y el clima espacial dejaron improntas en el registro terrestre.",
        },
      ],
    },
    {
      id: "cap20",
      num: "20",
      title: "¿Los impactos causan la mayoría de extinciones masivas?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Donald R. Prothero</span> cuestiona la moda de explicar extinciones masivas por impactos extraterrestres: solo el límite Cretácico-Paleógeno (~<span class=\"num\">65 Ma</span>) tiene evidencia impactante sólida.",
        },
        {
          type: 'paragraph',
          html: "Horizontes propuestos en otras grandes extinciones resultaron de edad o tamaño incorrectos; muchos impactos del Eoceno tardío no causaron extinción. Las erupciones de basalto de inundación tampoco explican todos los eventos.",
        },
        {
          type: 'paragraph',
          html: "Cada extinción masiva muestra un patrón distinto; modelos únicos (impacto, volcanismo, CO₂/O₂) fallan como explicación universal — lección de humildad para correlacionar impactos cósmicos y evolución biológica.",
        },
        {
          type: 'key',
          html: "Impacto ≠ extinción automática; la astrobiología debe evitar narrativas simples sobre catástrofes cósmicas y biosfera.",
        },
      ],
    },
    {
      id: "cap21",
      num: "21",
      title: "Irradiación de analogos cometarios y origen de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">María Colín-García</span> y coautores estudian cómo la <span class=\"term\">irradiación UV</span> de hielos cometarios analogos genera compuestos orgánicos relevantes para la evolución química prebiótica.",
        },
        {
          type: 'paragraph',
          html: "Los cometas, casi coetáneos con el sistema solar, pueden haber aportado materia orgánica a la Tierra primitiva (hipótesis desde Chamberlin y <span class=\"person\">J. Oró</span>, <span class=\"num\">1961</span>). Los impactos son paradójicos: entregan organics y gases nobles pero también pueden extinguir vida.",
        },
        {
          type: 'paragraph',
          html: "Experimentos de irradiación en laboratorio complementan modelos atmosféricos terrestres para entender síntesis abiótica y aporte extraterrestre.",
        },
        {
          type: 'key',
          html: "Cometa = química prebiótica en hielo + posible delivery — y también agente de destrucción masiva.",
        },
      ],
    },
    {
      id: "cap22",
      num: "22",
      title: "El Big Bang en el tiempo cero",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Peter R. Bahn</span> y <span class=\"person\">Steven H. Pravdo</span> tratan la radiación cósmica de fondo (~<span class=\"num\">14 Ga</span>) como el fósil más antiguo y el Big Bang como condición de frontera necesaria para la vida.",
        },
        {
          type: 'paragraph',
          html: "Premios Nobel a Penzias/Wilson (<span class=\"num\">1965</span>, detección CMB) y Mather/Smoot (<span class=\"num\">2006</span>, detalle CMB) consolidaron un universo con inicio hace ~<span class=\"num\">14 mil millones</span> de años frente a la teoría del estado estacionario.",
        },
        {
          type: 'paragraph',
          html: "En la singularidad inicial no hay espacio-tiempo operativo para causalidad clásica — conclusión filosófica sobre un evento «no causado».",
        },
        {
          type: 'key',
          html: "Condición cosmológica previa a cualquier biosfera: universo con origen en el tiempo, no eterno.",
        },
      ],
    },
    {
      id: "cap23",
      num: "23",
      title: "Improntas moleculares: ¿vivas o no vivas?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Koichiro Matsuno</span> distingue <span class=\"term\">improntas moleculares</span> como registro leído por el paleontólogo versus memoria descifrada por un cuerpo material interno a la organización viva.",
        },
        {
          type: 'paragraph',
          html: "Átomos son reliquias del Big Bang; ADN de dinosaurios puede reiniciar síntesis proteica en un ribosoma adecuado — borrosidad entre registro pasivo y agencia biológica.",
        },
        {
          type: 'paragraph',
          html: "Las improntas moleculares, lejos de ser solo obstáculo, pueden identificar unidades materiales capaces de buscar contextos donde encajar — marco para origen de la vida en contexto cosmológico.",
        },
        {
          type: 'key',
          html: "Biosignatura molecular: ¿evidencia externa para el científico o memoria operativa para el sistema vivo?",
        },
      ],
    },
    {
      id: "cap24",
      num: "24",
      title: "El caso ALH84001 por vida en Marte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Alfonso F. Davila</span> y coautores repasan el meteorito marciano <span class=\"term\">ALH84001</span>: carbonatos, estructuras nanoescala y PAHs que en <span class=\"num\">1996</span> alimentaron la controversia sobre vida marciana fossilizada.",
        },
        {
          type: 'paragraph',
          html: "Desde Schiaparelli y Lowell hasta Mariner y Viking, Marte pasó de mundo habitable imaginado a desierto CO₂-frío; ALH84001 reabrió el debate científico y público sobre biosignaturas en material retornado.",
        },
        {
          type: 'paragraph',
          html: "Independientemente del veredicto final, el caso definió estándares de evidencia, complejidad interpretativa y la edad dorada de exploración espacial astrobiológica.",
        },
        {
          type: 'key',
          html: "ALH84001 = lección sobre cautela: señales ambiguas bajo máximo escrutinio mediático y científico.",
        },
      ],
    },
    {
      id: "cap25",
      num: "25",
      title: "Ventanas de preservación paleobiológica en Marte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">David C. Fernández-Remolar</span> y coautores mapean <span class=\"term\">ventanas de preservación</span> en el registro geológico marciano según mineralogía orbital y in situ (filosilicatos noaquianos, sulfatos hesperianos).",
        },
        {
          type: 'paragraph',
          html: "Marte tuvo hidrología activa: deltas, fluvial, lacustre. Terrains Noachianos (>~<span class=\"num\">3,8 Ga</span>) concentran filosilicatos en estratos arcaicos; Hesperiano (<span class=\"num\">3,8–3,0 Ga</span>) muestra sulfatos ferríferos — ambientes distintos para trazas paleobiológicas.",
        },
        {
          type: 'paragraph',
          html: "Integrar geomorfología, mineralogía y geoquímica define dónde buscar texturas organosedimentarias, quimiofósiles o moléculas orgánicas preservables.",
        },
        {
          type: 'key',
          html: "No buscar vida «en Marte» genérico: buscar la ventana mineralógica y temporal correcta.",
        },
      ],
    },
    {
      id: "cap26",
      num: "26",
      title: "Síntesis, comentarios finales y conclusiones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Joseph Seckbach</span>, <span class=\"person\">Julian Chela-Flores</span>, <span class=\"person\">Aharon Oren</span> y <span class=\"person\">François Raulin</span> cierran el volumen recordando que aún no hay detección confirmada de vida extraterrestre, pero el registro fósil terrestre orienta dónde y cómo buscar.",
        },
        {
          type: 'paragraph',
          html: "Repasan estromatolitos como fósiles más antiguos (~<span class=\"num\">3,5 Ga</span> en Australia; posibles señales a ~<span class=\"num\">3,85 Ga</span> en Groenlandia), «fósiles vivientes» y la definición multidisciplinaria de astrobiología.",
        },
        {
          type: 'paragraph',
          html: "Enfatizan analogías extremas, biosignaturas morfológicas y geoquímicas, y la necesidad de cruzar paleontología, microbiología y exploración planetaria.",
        },
        {
          type: 'key',
          html: "El volumen no prueba vida extraterrestre: provee el marco terrestre para hacer esa búsqueda con criterio.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Biosignatura",
    "description": "Evidencia de vida pasada o presente: morfológica, química, isotópica o sedimentaria."
  },
  {
    "title": "Ventana preservacional",
    "description": "Contexto rocoso y mineralógico que retiene trazas biológicas en el tiempo."
  },
  {
    "title": "Ground truthing",
    "description": "Calibrar criterios de detección en la Tierra antes de extrapolar a otros planetas."
  },
  {
    "title": "Estromatolito",
    "description": "Estructura laminada organosedimentaria, a menudo de mats microbianos; macrofósil dominante del Precámbrico."
  },
  {
    "title": "Cold seep",
    "description": "Filtración fría de metano/hidrocarburos con ecosistema quimiosintético y potencial fósil."
  },
  {
    "title": "Endolito",
    "description": "Microorganismo que habita en el interior de rocas, común en desiertos y candidato analogo marciano."
  },
  {
    "title": "NanoSIMS",
    "description": "Espectrometría iónica secundaria a nanoescala para mapear elementos en microestructuras."
  },
  {
    "title": "Fosfatización",
    "description": "Tafonomía excepcional que preserva microbios blandos en tres dimensiones."
  },
  {
    "title": "Silicificación",
    "description": "Incorporación de orgánico en sílice; puede conservar moléculas o solo morfología."
  },
  {
    "title": "ALH84001",
    "description": "Meteorito marciano cretáceo cuya microestructura reavivó el debate sobre vida fossilizada en Marte."
  }
],
  chronology: [
  {
    "year": "~14 Ga",
    "text": "Big Bang; posteriormente, radiación cósmica de fondo como fósil cosmológico."
  },
  {
    "year": "~3,85 Ga",
    "text": "Sedimentos y lavas en Groenlandia con posibles señales de vida temprana."
  },
  {
    "year": "~3,5 Ga",
    "text": "Microfósiles y estromatolitos putativos en Pilbara y Barberton."
  },
  {
    "year": "~2,7–2,3 Ga",
    "text": "Biomarcadores vs. microfósiles cianobacterianos; oxigenación atmosférica."
  },
  {
    "year": "~635–551 Ma",
    "text": "Fosfatización excepcional en Formación Doushantuo (China)."
  },
  {
    "year": "1860s–1900s",
    "text": "Canales marcianos (Lowell) y primeras interpretaciones erróneas de habitabilidad."
  },
  {
    "year": "1965",
    "text": "Penzias y Wilson detectan la radiación cósmica de fondo."
  },
  {
    "year": "1996",
    "text": "Controversia ALH84001: posibles biosignaturas en meteorito marciano."
  },
  {
    "year": "2004–2005",
    "text": "Detección de metano en atmósfera marciana; impulso a analogos de cold seeps."
  },
  {
    "year": "2009",
    "text": "Publicación del volumen From Fossils to Astrobiology (Springer COLE 12)."
  }
],
  figures: [
  {
    "name": "Joseph Seckbach",
    "role": "Editor de la serie COLE y coautor del cierre · astrobiología y algas extremas"
  },
  {
    "name": "Maud M. Walsh",
    "role": "Coeditora · fósiles microbianos y suelos"
  },
  {
    "name": "Wladyslaw Altermann",
    "role": "Introducción escéptica · geología precámbrica"
  },
  {
    "name": "Barbara Cavalazzi",
    "role": "Coautora cap. metano · filtraciones frías y analogos marcianos"
  },
  {
    "name": "Dorothy Z. Oehler",
    "role": "NanoSIMS y orgánico en cherts y meteoritos"
  },
  {
    "name": "Frances Westall",
    "role": "Biogenicidad y contaminación post-Arcaica en Barberton"
  },
  {
    "name": "Sherry L. Cady",
    "role": "Biosignaturas en hidrotermal · editora de Astrobiology"
  },
  {
    "name": "Charles H. Lineweaver",
    "role": "Crítica a convergencia de inteligencia tecnológica"
  },
  {
    "name": "Julian Chela-Flores",
    "role": "Clima espacial e improntas astronómicas en el registro fósil"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La astrobiología no empieza en el telescopio: empieza en el registro fósil terrestre.",
  "Cada capítulo aporta un tipo de biosignatura — morfológica, química, sedimentaria o isotópica.",
  "Estromatolitos, seeps de metano, endolitos y ventanas martianas son piezas de un mismo mapa.",
  "ALH84001 y NanoSIMS recuerdan que la evidencia rara vez es inequívoca al primer aviso.",
  "Buscar vida más allá de la Tierra es, ante todo, aprender a leer la vida que ya dejó huella aquí."
],
    highlight: "La Tierra es el único ground truth; extrapolar exige humildad proporcional a la distancia en tiempo y espacio.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra editada por Joseph Seckbach y Maud M. Walsh",
    line2: "\"From Fossils to Astrobiology\" · Springer · 2009",
  },
}
