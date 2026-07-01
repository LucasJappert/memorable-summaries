import type { BookSummary } from '../types/book'

export const selfAssemblingBrain: BookSummary = {
  slug: "self-assembling-brain",
  meta: {
    title: "The Self-Assembling Brain: How Neural Networks Grow Smarter",
    subtitle: "Del código genético al aprendizaje: por qué la inteligencia emerge en el tiempo",
    author: "Peter Robin Hiesinger",
    meta: [
      "📖 2021 · Princeton University Press",
      "✍️ Neurobiología del desarrollo, información algorítmica e inteligencia artificial",
    ],
    titleEs: "El cerebro autoensamblado: cómo las redes neuronales se vuelven más inteligentes",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "La semilla, el alien y la información que se despliega",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El libro abre con una fábula: un alien escanea una semilla de manzana y obtiene toda su estructura molecular, pero no puede anticipar la forma del árbol sin dejar que crezca. Esa escena introduce la tesis central: el cerebro no se entiende como <span class=\"term\">plano final</span>, sino como proceso de <span class=\"term\">autoensamblaje</span> que requiere <span class=\"num\">tiempo</span> y energía.",
        },
        {
          type: 'paragraph',
          html: "Para <span class=\"person\">Hiesinger</span>, la pregunta clave es qué tipo de información contienen los genes cuando “codifican” un cerebro. El genoma no trae un diagrama de conectividad terminado. Trae reglas que se ejecutan paso a paso en interacción con el entorno celular cambiante.",
        },
        {
          type: 'paragraph',
          html: "El prólogo prepara un puente entre <span class=\"term\">neurobiología del desarrollo</span> e <span class=\"term\">IA</span>: en ambos campos importa menos fotografiar el estado final que comprender cómo las reglas locales generan organización global. El desafío no es solo describir conexiones, sino explicar cómo emergen.",
        },
        {
          type: 'key',
          html: "El cerebro se parece más a un programa que se ejecuta que a un cableado prefijado.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La introducción enfrenta dos tradiciones: la de la <span class=\"term\">neurobiología</span>, que estudia cómo se cablea el cerebro biológico, y la de la <span class=\"term\">inteligencia artificial</span>, que suele iniciar con redes prefabricadas y luego entrenarlas. En ambos casos aparece el mismo problema: qué información es realmente necesaria para lograr una red funcional.",
        },
        {
          type: 'paragraph',
          html: "El ejemplo de la mariposa monarca resume la dificultad: migra hasta <span class=\"num\">3.000 millas</span> hacia zonas de invernada precisas. El ciclo completo puede tomar <span class=\"num\">3–5 generaciones</span>. La ruta no puede explicarse solo por aprendizaje individual. Hay información de desarrollo ya incorporada antes del aprendizaje.",
        },
        {
          type: 'paragraph',
          html: "El autor propone mirar el cableado cerebral como navegación en un mapa que se construye mientras se navega. No hay “GPS” con destino final inscrito, sino una secuencia de estados donde cada etapa habilita o restringe la siguiente.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Problema de información",
              "description": "Qué debe estar codificado para generar conectividad funcional.",
              "icon": "🧠"
            },
            {
              "title": "Monarca",
              "description": "Ejemplo de conducta heredada difícil de reducir a aprendizaje posterior.",
              "icon": "🦋"
            },
            {
              "title": "Mapa en obra",
              "description": "El desarrollo cambia las condiciones de decisión a cada paso.",
              "icon": "🧭"
            }
          ],
        },
        {
          type: 'key',
          html: "Sin crecimiento temporal no se puede leer toda la información que “hay” en el genoma.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Crecimiento algorítmico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El capítulo introduce una intuición formal: reglas simples pueden producir resultados inmensamente complejos. Con ejemplos como <span class=\"term\">Conway’s Game of Life</span> y <span class=\"term\">rule 110</span>, Hiesinger muestra que hay sistemas donde no se puede deducir el estado final sin ejecutar todas las iteraciones.",
        },
        {
          type: 'paragraph',
          html: "Desde la teoría de la información, la noción de <span class=\"term\">complejidad de Kolmogorov</span> diferencia entre “información para generar” y “información para describir el resultado final”. Un conjunto corto de reglas puede producir patrones cuya descripción explícita es enorme.",
        },
        {
          type: 'paragraph',
          html: "El paralelo biológico aparece con cascadas de <span class=\"term\">factores de transcripción</span>, ramificación y reglas que cambian durante el desarrollo. A diferencia del autómata celular determinista, el crecimiento biológico combina reglas dinámicas y componentes estocásticos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Regla 110",
              "description": "Demuestra que pocas reglas pueden generar computación universal.",
              "icon": "♟️"
            },
            {
              "title": "Kolmogorov",
              "description": "Mide cuán comprimible es una descripción algorítmica.",
              "icon": "📦"
            },
            {
              "title": "L-systems y ramificación",
              "description": "Metáfora de cómo reglas iteradas producen morfologías complejas.",
              "icon": "🌿"
            }
          ],
        },
        {
          type: 'key',
          html: "El desarrollo cerebral usa información algorítmica: no describe el cerebro, lo hace emerger.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Ruido e información relevante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aquí el autor invierte una intuición habitual: el <span class=\"term\">ruido</span> no siempre destruye precisión. Muchas veces la habilita. Procesos como la quimiotaxis bacteriana o la diversidad inmunológica funcionan gracias a variación aleatoria seguida de selección.",
        },
        {
          type: 'paragraph',
          html: "En neurodesarrollo, mecanismos como la variabilidad de ramificación y la señalización tipo <span class=\"term\">Notch</span> permiten romper simetrías y obtener patrones robustos. El ruido puede ser parte del programa, no un error externo.",
        },
        {
          type: 'paragraph',
          html: "Esto conecta con <span class=\"term\">penetrancia</span>: una mutación puede no expresarse igual en todos los individuos por dependencia de contexto, umbrales y procesos estocásticos. La “información relevante” no es absoluta. Depende del nivel donde se evalúa el fenotipo.",
        },
        {
          type: 'key',
          html: "La precisión biológica suele surgir de ruido + selección, no de control perfecto sin variación.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Agentes autónomos y reglas locales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El desarrollo se entiende como interacción de <span class=\"term\">agentes autónomos</span> (filopodios, neuronas, células) que toman decisiones locales sin conocer el resultado global. Esa lógica se parece a enjambres, deportes colectivos o colonias de insectos.",
        },
        {
          type: 'paragraph',
          html: "La idea central es que la organización superior emerge de reglas locales con retroalimentación. Un filopodio no “sabe” el circuito final, pero su dinámica de exploración y estabilización contribuye al patrón final de conectividad.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger retoma debates de <span class=\"person\">Minsky</span> y la tradición cibernética para mostrar que la robustez macroscópica puede coexistir con decisiones microscópicas impredecibles. Ahí aparece el puente con IA: sistemas multiagente y autoorganización.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Agente autónomo",
              "description": "Actúa con reglas locales y conocimiento parcial.",
              "icon": "🤝"
            },
            {
              "title": "Retroalimentación",
              "description": "Cada interacción altera el estado para la iteración siguiente.",
              "icon": "🔁"
            },
            {
              "title": "Autoorganización",
              "description": "Orden global sin controlador central explícito.",
              "icon": "🧩"
            }
          ],
        },
        {
          type: 'key',
          html: "El cerebro se cablea porque miles de agentes locales coordinan sin un “arquitecto” global.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Jugadores y reglas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Este tramo aborda la <span class=\"term\">paradoja de Benzer</span>: mutaciones puntuales pueden alterar conductas heredables y seleccionables, aunque no exista un “gen para” cada conducta compleja. El resultado conductual emerge de trayectorias de desarrollo, no de mapeos uno a uno.",
        },
        {
          type: 'paragraph',
          html: "Aparecen dos historias en tensión. Por un lado, casos relativamente directos como genes del reloj circadiano. Por otro, redes reguladas por factores de transcripción, donde pequeñas variaciones tempranas se amplifican a través de cascadas con múltiples niveles de interacción.",
        },
        {
          type: 'paragraph',
          html: "En paralelo, la tradición de <span class=\"person\">Sperry</span> y la <span class=\"term\">chemoafinidad</span> aporta moléculas guía (incluidos gradientes y señales repulsivas), pero el libro insiste en que muchas de estas señales operan como parte de instrucciones compuestas y dependientes de contexto, no como direcciones absolutas.",
        },
        {
          type: 'key',
          html: "Una mutación puede reprogramar conducta sin que su función molecular “explique” linealmente esa conducta.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El problema de los niveles",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El “problema de niveles” afirma que una explicación válida en un nivel (molecular) no siempre traduce bien al nivel siguiente (celular, circuital, conductual). Entre gen y conducta hay una cadena larga de transformaciones con realimentación.",
        },
        {
          type: 'paragraph',
          html: "El texto discute límites de enfoques de asociación y destaca cómo fenómenos de <span class=\"term\">redundancia</span>, <span class=\"term\">sensibilización genética</span> y penetrancia variable vuelven frágil la búsqueda de causalidades simples para rasgos complejos.",
        },
        {
          type: 'paragraph',
          html: "La propuesta metodológica es elegir, para cada pregunta, el nivel operativo correcto de “jugadores y reglas”. No se niega la biología molecular, pero se evita confundir detalle mecanístico con explicación suficiente del comportamiento de orden superior.",
        },
        {
          type: 'key',
          html: "Entender requiere cambiar de nivel sin perder de vista cómo cada nivel condiciona al siguiente.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Desarrollo cerebral e IA (eres tu historia)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El capítulo sostiene que la función es continuación del desarrollo: aprender también es crecimiento algorítmico. En cerebros y redes, cada entrada nueva se procesa sobre un estado previo. Por eso el orden de experiencias importa.",
        },
        {
          type: 'paragraph',
          html: "La frase “<span class=\"term\">you are your history</span>” resume la idea: memoria y sesgo surgen de esa acumulación temporal. El cerebro no guarda datos como un archivo neutral, sino que reconfigura reglas internas con cada experiencia.",
        },
        {
          type: 'paragraph',
          html: "Esto ilumina sesgos cognitivos y limitaciones de entrenamiento en IA: una red entrenada en una distribución concreta tenderá a proyectar esa historia sobre entradas nuevas. La plasticidad existe, pero nunca parte de cero.",
        },
        {
          type: 'key',
          html: "Toda inteligencia funciona con arrastre histórico: cada aprendizaje reescribe parcialmente la red.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Autoensamblaje vs construir primero y entrenar después",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aquí se contraponen dos estrategias: <span class=\"term\">diseño top-down</span> (arquitectura fija más entrenamiento) y <span class=\"term\">autoensamblaje</span> (estructura que emerge durante el proceso). La IA dominante usa la primera. El cerebro biológico combina crecimiento, poda, actividad y aprendizaje.",
        },
        {
          type: 'paragraph',
          html: "El autor no niega los éxitos del enfoque actual, pero señala su atajo central: omitir la etapa de desarrollo estructural. En el cerebro, el número de conexiones, los tipos neuronales y los circuitos cambian mientras se aprende. No son solo pesos sinápticos sobre arquitectura estática.",
        },
        {
          type: 'paragraph',
          html: "Por eso propone explorar más seriamente enfoques evolutivos y de codificación indirecta, donde genotipo, desarrollo y rendimiento se conecten en ciclos de selección. El objetivo no es copiar biología por fetichismo, sino entender qué atajos rompen capacidades generales.",
        },
        {
          type: 'key',
          html: "Entrenar redes prefabricadas funciona para tareas acotadas; para inteligencia amplia quizá falte crecimiento.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Fronteras finales (interfaz IA-cerebro, emulación total, sesgo)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El capítulo final abre tres fronteras: interfaces cerebro-máquina, emulación cerebral completa y límites de predicción. La tesis común es que “más ancho de banda” no resuelve por sí solo el problema del tipo de información que se intercambia.",
        },
        {
          type: 'paragraph',
          html: "Sobre <span class=\"term\">whole brain emulation</span>, Hiesinger advierte que cualquier simulación depende de atajos de nivel. Cuanto más se recorta detalle dinámico, más se restringe qué clase de inteligencia puede emerger o preservarse.",
        },
        {
          type: 'paragraph',
          html: "También vuelve sobre <span class=\"term\">cognitive bias</span>: los sesgos no son solo fallas, sino resultado natural de un sistema que aprende secuencialmente y prioriza coherencia con su historia para predecir el futuro.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Interfaz IA-cerebro",
              "description": "Requiere coaprendizaje en el tiempo, no solo hardware.",
              "icon": "🔌"
            },
            {
              "title": "Emulación total",
              "description": "Depende de qué niveles de detalle se conservan o se descartan.",
              "icon": "🧬"
            },
            {
              "title": "Sesgo cognitivo",
              "description": "Efecto estructural de aprendizaje histórico y expectativas previas.",
              "icon": "🧠"
            }
          ],
        },
        {
          type: 'key',
          html: "No hay inteligencia “general” sin decidir qué historia, qué niveles y qué atajos se aceptan.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Epílogo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El epílogo, en forma de diálogo, cierra con una posición pragmática: ninguna disciplina tiene el mapa completo y todas operan con sesgos de su propia tradición. La cooperación entre modeladores, neurobiólogos e ingenieros es presentada como condición de avance.",
        },
        {
          type: 'paragraph',
          html: "El libro no ofrece una receta única para construir inteligencia, pero sí una advertencia consistente: cuando se ignoran desarrollo, contexto y selección, se subestima el origen real de la robustez de los sistemas biológicos.",
        },
        {
          type: 'paragraph',
          html: "La conclusión es deliberadamente abierta: quizá futuras IA necesiten más autoensamblaje y evolución, quizá no para toda tarea, pero sí para formas de inteligencia menos estrechas y más adaptativas.",
        },
        {
          type: 'key',
          html: "La pregunta no es solo cómo entrenar mejor, sino qué proceso completo de crecimiento queremos modelar.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Crecimiento algorítmico",
    "description": "Proceso donde reglas iterativas generan estados cada vez más complejos en el tiempo."
  },
  {
    "title": "Autoensamblaje",
    "description": "Formación de conectividad y función sin plano final explícito, mediante interacciones locales."
  },
  {
    "title": "Complejidad de Kolmogorov",
    "description": "Distinción entre información para generar un sistema e información para describir su estado final."
  },
  {
    "title": "Agentes autónomos",
    "description": "Componentes que deciden localmente sin conocimiento del resultado global."
  },
  {
    "title": "Instrucción compuesta",
    "description": "Decisión biológica producida por múltiples factores contextuales, no por una sola señal dominante."
  },
  {
    "title": "Penetrancia",
    "description": "Probabilidad de que una variante genética se exprese fenotípicamente en un contexto dado."
  },
  {
    "title": "Problema de niveles",
    "description": "Dificultad de traducir sin pérdida entre explicaciones moleculares, celulares, circuitales y conductuales."
  },
  {
    "title": "Programación evolutiva",
    "description": "Optimización por variación y selección de salidas, sin necesidad de predecir trayectorias internas."
  },
  {
    "title": "Función como desarrollo continuo",
    "description": "Idea de que aprendizaje, memoria y envejecimiento extienden la misma lógica de crecimiento."
  }
],
  chronology: [
  {
    "year": "1941",
    "text": "<span class=\"person\">Roger Sperry</span> consolida evidencias contra la conectividad puramente aleatoria aprendida."
  },
  {
    "year": "1949",
    "text": "<span class=\"person\">Donald Hebb</span> publica principios de plasticidad sináptica (“fire together, wire together”)."
  },
  {
    "year": "1952",
    "text": "<span class=\"person\">W. Ross Ashby</span> publica *Design for a Brain* y formaliza ideas de autoorganización."
  },
  {
    "year": "1958",
    "text": "<span class=\"person\">Rosenblatt</span> presenta el perceptrón, base histórica de ANN modernas."
  },
  {
    "year": "1960s",
    "text": "<span class=\"person\">Benzer</span> inaugura la neurogenética conductual en <span class=\"term\">Drosophila</span>."
  },
  {
    "year": "1980s–1990s",
    "text": "Se identifican moléculas guía clave (ephrins, netrin) y se complejiza la idea de chemoafinidad."
  },
  {
    "year": "2012",
    "text": "Explosión de <span class=\"term\">deep learning</span> en aplicaciones masivas de IA."
  },
  {
    "year": "2019",
    "text": "Grandes estudios de asociación genética muestran límites para predecir rasgos conductuales complejos."
  },
  {
    "year": "2021",
    "text": "Publicación de este libro, integrando neurodesarrollo, teoría de información e IA."
  }
],
  figures: [
  {
    "name": "Peter Robin Hiesinger",
    "role": "Autor; integra neurobiología del desarrollo con teoría algorítmica e IA."
  },
  {
    "name": "Roger Sperry",
    "role": "Impulsa la especificidad del cableado y la hipótesis de chemoafinidad."
  },
  {
    "name": "Seymour Benzer",
    "role": "Fundador de la neurogenética conductual en mosca."
  },
  {
    "name": "W. Ross Ashby",
    "role": "Pionero de cibernética y autoorganización aplicada al cerebro."
  },
  {
    "name": "Marvin Minsky",
    "role": "Figura central de IA; debate sobre agentes, símbolos y arquitectura cognitiva."
  },
  {
    "name": "Geoffrey Hinton",
    "role": "Referente de redes profundas; también crítico de límites de arquitecturas actuales."
  },
  {
    "name": "Sydney Brenner",
    "role": "Modelo *C. elegans* y puente entre genética, desarrollo y conectómica."
  },
  {
    "name": "Carla Shatz",
    "role": "Evidencia de actividad espontánea en desarrollo y refinamiento sináptico temprano."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El cerebro no viene descrito en los genes como un circuito terminado; viene codificado como reglas que se ejecutan.",
  "La inteligencia emerge cuando esas reglas interactúan con ruido, selección, energía y tiempo.",
  "Por eso el desarrollo no es un prefacio de la función: es su continuidad.",
  "La IA actual muestra que muchos atajos son poderosos para tareas concretas.",
  "El límite aparece cuando se busca flexibilidad amplia, historia integrada y adaptación de largo alcance."
],
    highlight: "Sin crecimiento algorítmico no hay forma de “leer” toda la información que produce una red inteligente.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Peter Robin Hiesinger",
    line2: "\"The Self-Assembling Brain: How Neural Networks Grow Smarter\" · Princeton University Press · 2021",
  },
}
