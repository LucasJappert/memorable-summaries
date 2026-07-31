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
          html: "¿Qué información contienen los genes cuando «codifican» un cerebro? El libro abre con una fábula: un alien escanea una semilla de manzana y obtiene toda su química molecular. Aun así, no puede anticipar la forma del árbol sin dejarla crecer.",
        },
        {
          type: 'paragraph',
          html: "Esa escena introduce la tesis central. El cerebro no se entiende como <span class=\"term\">plano final</span> (un diagrama de cableado terminado). Es un <span class=\"term\">autoensamblaje</span> (formación gradual por reglas locales). El proceso requiere <span class=\"num\">tiempo</span> y energía.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Peter Robin Hiesinger</span>, neurobiólogo autor del libro, sostiene que el genoma no trae un mapa de conexiones. Trae reglas que se ejecutan en interacción con el entorno celular cambiante.",
        },
        {
          type: 'paragraph',
          html: "El prólogo prepara un puente entre <span class=\"term\">neurobiología del desarrollo</span> (cómo madura el cerebro desde el embrión) e <span class=\"term\">inteligencia artificial</span> (sistemas informáticos que aprenden). En ambos campos importa menos fotografiar el estado final que comprender cómo las reglas locales generan organización global.",
        },
        {
          type: 'key',
          html: "El cerebro se parece más a un programa que se ejecuta que a un cableado prefijado.",
        },
        {
          type: 'paragraph',
          html: "Para ver por qué esa metáfora importa, hay que enfrentar dos tradiciones que parecen opuestas pero comparten el mismo problema.",
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
          html: "¿Qué debe estar codificado para que una red cerebral funcione? La introducción enfrenta dos tradiciones. La <span class=\"term\">neurobiología</span> (ciencia del cerebro biológico) estudia cómo se cablea el órgano. La inteligencia artificial suele partir de redes prefabricadas y luego entrenarlas.",
        },
        {
          type: 'paragraph',
          html: "El ejemplo de la mariposa monarca resume la dificultad. Migra hasta <span class=\"num\">3.000 millas</span> hacia zonas de invernada precisas. El ciclo completo puede tomar <span class=\"num\">3–5 generaciones</span>. La ruta no puede explicarse solo por aprendizaje individual.",
        },
        {
          type: 'paragraph',
          html: "Por eso, hay información de desarrollo ya incorporada antes del aprendizaje. El autor estructura el libro en diez seminarios ficticios. Participan un neurocientífico, una genetista del desarrollo, un ingeniero de robots y un investigador de IA.",
        },
        {
          type: 'paragraph',
          html: "Un seminario histórico recorre las dicotomías que enmarcan el debate. Aparecen el procesamiento simbólico frente al conexionismo. <span class=\"person\">Roger Sperry</span>, neurocientífico pionero, reclamó cableado específico frente a redes aleatorias aprendidas.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger propone mirar el cableado cerebral como navegación en un mapa que se construye mientras se navega. No hay un «GPS» con destino final inscrito. Hay una secuencia de estados donde cada etapa habilita o restringe la siguiente.",
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
              "description": "Conducta heredada difícil de reducir a aprendizaje posterior.",
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
          html: "Sin crecimiento temporal no se puede leer toda la información que «hay» en el genoma.",
        },
        {
          type: 'paragraph',
          html: "Esa intuición se formaliza cuando se distingue la información para generar un sistema de la información para describir su resultado.",
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
          html: "¿Por qué escanear el genoma no basta para predecir el cerebro? El capítulo distingue <span class=\"term\">información algorítmica</span> (reglas que generan un resultado paso a paso) de información de endpoint (descripción del estado final). Describir el resultado puede requerir enormemente más bits que las reglas que lo producen.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger usa el <span class=\"term\">Game of Life</span> de Conway (un autómata celular en una cuadrícula). También usa la <span class=\"term\">rule 110</span> (la regla más simple conocida con completitud de Turing). En ambos casos no se deduce el estado final sin ejecutar todas las iteraciones.",
        },
        {
          type: 'paragraph',
          html: "Desde la teoría de la información, la complejidad de Kolmogorov mide cuán comprimible es una descripción. Un conjunto corto de reglas puede producir patrones cuya descripción explícita es enorme. Lo decisivo es que sistemas deterministas pueden ser matemáticamente indecidibles.",
        },
        {
          type: 'paragraph',
          html: "No hay atajo analítico: solo ejecutar el algoritmo completo. El paralelo biológico aparece con L-systems (reglas que generan formas ramificadas como árboles), cascadas de factores de transcripción y la relación entre entropía e información.",
        },
        {
          type: 'paragraph',
          html: "Maxwell's demon ilustra que reducir desorden local exige información y energía. Crecer un cerebro consume ambas. A diferencia de un autómata celular con regla fija, el crecimiento biológico combina reglas que cambian en cada iteración.",
        },
        {
          type: 'paragraph',
          html: "También hay retroalimentación entre genoma y productos génicos, y componentes estocásticos. La metáfora del blueprint (plano) falla: el genoma es una receta, no un diagrama de cableado.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Rule 110",
              "description": "El autómata más simple conocido con completitud de Turing.",
              "icon": "♟️"
            },
            {
              "title": "Kolmogorov",
              "description": "Distingue información para generar vs describir el resultado.",
              "icon": "📦"
            },
            {
              "title": "L-systems",
              "description": "Reglas iteradas que producen morfologías ramificadas complejas.",
              "icon": "🌿"
            }
          ],
        },
        {
          type: 'key',
          html: "El desarrollo cerebral usa información algorítmica: no describe el cerebro, lo hace emerger.",
        },
        {
          type: 'paragraph',
          html: "Pero un algoritmo biológico no siempre busca precisión perfecta: a veces incorpora variación aleatoria como parte del programa.",
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
          html: "¿El ruido siempre destruye la precisión biológica? Aquí el autor invierte una intuición habitual. El <span class=\"term\">ruido</span> (variación aleatoria en un proceso) no siempre perjudica. Muchas veces la habilita.",
        },
        {
          type: 'paragraph',
          html: "Procesos como la quimiotaxis bacteriana o la diversidad del sistema inmune funcionan gracias a variación aleatoria seguida de selección. En neurodesarrollo, el gen <span class=\"term\">Dscam</span> en Drosophila (mosca del vinagre) puede generar casi <span class=\"num\">40.000</span> variantes de proteína de superficie.",
        },
        {
          type: 'paragraph',
          html: "Cada neurona expresa una versión aleatoria para auto-evitación (rechazo de conexiones con ramas propias). Sin esa aleatoriedad, las ramas dendríticas no pueden extenderse y se amontonan.",
        },
        {
          type: 'paragraph',
          html: "Mecanismos como la señalización Notch permiten romper simetrías mediante inhibición lateral. Un proceso estocástico decide qué célula «gana» y cuál cede. El ruido puede ser parte del programa, no un error externo.",
        },
        {
          type: 'paragraph',
          html: "Esto se conecta con el concepto de <span class=\"term\">penetrancia</span> (grado en que una mutación se expresa en el fenotipo). Una mutación puede no manifestarse igual en todos los individuos por dependencia de contexto, umbrales y procesos estocásticos.",
        },
        {
          type: 'paragraph',
          html: "De ahí que la «información relevante» no sea absoluta: depende del nivel donde se evalúa el fenotipo.",
        },
        {
          type: 'key',
          html: "La precisión biológica suele surgir de ruido más selección, no de control perfecto sin variación.",
        },
        {
          type: 'paragraph',
          html: "El ruido y la selección operan en agentes que deciden localmente, sin visión del resultado global.",
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
          html: "¿Quién «decide» cada conexión sináptica? El desarrollo se entiende como interacción de <span class=\"term\">agentes autónomos</span> (filopodios, conos de crecimiento, neuronas) que toman decisiones locales sin conocer el resultado global. El genoma envía al agente de viaje, pero una vez en marcha este debe «defenderse» en su entorno.",
        },
        {
          type: 'paragraph',
          html: "La idea central es que la organización superior emerge de reglas locales con retroalimentación. Un filopodio no «sabe» el circuito final. Su dinámica de exploración y estabilización contribuye al patrón de conectividad.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger retoma debates de <span class=\"person\">Gerald Edelman</span>, biólogo que propuso selección de grupos neuronales, y la tradición cibernética de <span class=\"person\">W. Ross Ashby</span>, pionero de la autoorganización. La metáfora se extiende a enjambres, deportes colectivos y nanotecnología bottom-up.",
        },
        {
          type: 'paragraph',
          html: "Ceder control local es el precio de flexibilidad y robustez. Incluso la muerte celular programada en C. elegans (un gusano modelo de <span class=\"num\">302</span> neuronas) ilustra que el organismo selecciona la supervivencia del conjunto, no de cada célula.",
        },
        {
          type: 'paragraph',
          html: "La neurona «quiere» crecer un axón y formar sinapsis. En ausencia de señales repulsivas, lo hará donde pueda. El cableado se logra más por exclusión y guía probabilística que por un director central.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Agente autónomo",
              "description": "Actúa con reglas locales y conocimiento parcial del entorno.",
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
          html: "El cerebro se cablea porque miles de agentes locales coordinan sin un «arquitecto» global.",
        },
        {
          type: 'paragraph',
          html: "Esa lógica de agentes y selección también explica un enigma clásico de la neurogenética conductual.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La paradoja de Benzer",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo puede una mutación puntual alterar una conducta compleja sin un «gen para» esa conducta? Este tramo aborda la <span class=\"term\">paradoja de Benzer</span> (mutación conductual heredable sin mapeo uno a uno entre gen y comportamiento). El resultado emerge de trayectorias de desarrollo, no de correspondencias directas.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Seymour Benzer</span>, genetista pionero, fundó la neurogenética conductual en Drosophila en los años 60. Usó pantallas de mutagénesis y selección artificial. Encontró mutantes con fenotipos conductuales específicos y heredables.",
        },
        {
          type: 'paragraph',
          html: "Aparecen dos clases de mutaciones. Casos como period y timeless (genes del reloj circadiano molecular) enlazan mecanismo y conducta directamente. Otros, como mutaciones en enzimas metabólicas o en el factor fruitless, alteran conducta a través de cascadas de crecimiento impredecibles.",
        },
        {
          type: 'paragraph',
          html: "La evolución selecciona la salida fenotípica y no predice la trayectoria interna. <span class=\"person\">Stephen Wolfram</span>, investigador de sistemas complejos, subestimó esto al concluir que la evolución no puede «reprogramar» sistemas tan complejos como rule 110. Por eso, la selección no necesita predecir el camino interno. Solo evalúa el resultado tras el crecimiento completo.",
        },
        {
          type: 'key',
          html: "Una mutación puede reprogramar conducta sin que su función molecular «explique» linealmente esa conducta.",
        },
        {
          type: 'paragraph',
          html: "Esa paradoja se profundiza cuando se baja del gen a las moléculas que guían el cableado axonal.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Moléculas, niveles y chemoafinidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué explicar un gen no basta para explicar una conducta? El «problema de niveles» afirma que una explicación válida en un nivel molecular no siempre traduce al nivel celular, circuital o conductual. Entre gen y conducta hay una cadena larga de transformaciones con realimentación.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Roger Sperry</span> propuso la <span class=\"term\">chemoafinidad estricta</span> (emparejamiento químico uno a uno, como cerradura y llave). La búsqueda de moléculas guía (ephrinas, netrina/unc-6) validó parte de la visión, pero el mecanismo resultó más complejo.",
        },
        {
          type: 'paragraph',
          html: "Intervienen señales repulsivas y posicionamiento relativo. <span class=\"person\">Michael Gaze</span>, neurobiólogo del sistema visual, propuso este último enfoque. También hay <span class=\"term\">instrucciones compuestas</span> (decisiones por múltiples factores contextuales, sin dominancia de uno solo).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Sydney Brenner</span>, biólogo molecular, eligió C. elegans (<span class=\"num\">302</span> neuronas) para conectómica completa. El diagrama de cableado de 1985 no reveló por sí solo cómo los genes controlan el sistema. Proyectos como OpenWorm muestran que simular «vida digital» exige decidir qué nivel de detalle conservar.",
        },
        {
          type: 'paragraph',
          html: "La distinción instructivo vs permisivo es un continuo. Netrina, por ejemplo, funciona como atrayente de largo alcance, señal a lo largo del camino y factor permisivo según contexto. Cada atajo de simulación restringe qué clase de inteligencia puede emerger.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Chemoafinidad",
              "description": "Moléculas que guían crecimiento axonal; versión estricta vs general.",
              "icon": "🔑"
            },
            {
              "title": "Paradoja de Benzer",
              "description": "Mutación conductual sin gen lineal «para» esa conducta.",
              "icon": "🧬"
            },
            {
              "title": "GWAS",
              "description": "Estudios de asociación muestran límites para rasgos poligénicos.",
              "icon": "📊"
            }
          ],
        },
        {
          type: 'key',
          html: "Entender requiere cambiar de nivel sin perder de vista cómo cada nivel condiciona al siguiente.",
        },
        {
          type: 'paragraph',
          html: "Si el desarrollo es un algoritmo en el tiempo, el aprendizaje no puede ser una fase separada.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Eres tu historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿El aprendizaje es distinto del desarrollo cerebral? El capítulo sostiene que la función es continuación del desarrollo. Aprender también es crecimiento algorítmico. La frase <span class=\"term\">you are your history</span> (eres tu historia) resume que memoria y sesgo surgen de acumulación temporal.",
        },
        {
          type: 'paragraph',
          html: "La retina de vertebrados, con fotorreceptores en el lado «equivocado», ilustra la carga histórica evolutiva. No es diseño óptimo, sino consecuencia de un pliegue embrionario bloqueado por la evolución. <span class=\"person\">Stephen Jay Gould</span>, paleontólogo, llamó <span class=\"term\">spandrels</span> (subproductos estructurales, no adaptaciones directas) a rasgos que surgen como subproducto.",
        },
        {
          type: 'paragraph',
          html: "Las columnas corticales de Mountcastle y los experimentos de Hubel y Wiesel muestran plasticidad. Su necesidad funcional absoluta sigue debatida. La arquitectura puede ser spandrel de un desarrollo eficiente, no la mejor solución de ingeniería.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jeff Hawkins</span>, investigador de IA, propone memoria-predicción secuencial. Edelman describe selección de grupos neuronales por reentrada. En ambos casos, almacenar, recuperar y modificar memoria son el mismo proceso algorítmico en el tiempo.",
        },
        {
          type: 'paragraph',
          html: "Una red entrenada con datos en distinto orden será una red distinta.",
        },
        {
          type: 'key',
          html: "Toda inteligencia funciona con arrastre histórico: cada aprendizaje reescribe parcialmente la red.",
        },
        {
          type: 'paragraph',
          html: "Esa continuidad entre desarrollo y función obliga a contrastar el cerebro biológico con la estrategia dominante de la IA.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Autoensamblaje vs construir y entrenar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la IA actual parte de redes prefabricadas y el cerebro no? El capítulo contrapone dos estrategias. Una es el <span class=\"term\">diseño top-down</span> (arquitectura fija más entrenamiento posterior). La otra es el autoensamblaje (estructura que emerge durante el proceso).",
        },
        {
          type: 'paragraph',
          html: "La IA dominante usa la primera. El cerebro biológico combina crecimiento, poda, actividad y aprendizaje. Las ANN tienen topología prefijada desde el perceptrón de <span class=\"person\">Frank Rosenblatt</span> (<span class=\"num\">1958</span>) hasta las redes convolucionales actuales. Sus conexiones iniciales suelen ser aleatorias.",
        },
        {
          type: 'paragraph',
          html: "Por el contrario, el cerebro biológico nunca arranca de ese modo: el número de neuronas, los tipos celulares y las conexiones cambian mientras aprende. Una red de clasificación de imágenes con <span class=\"num\">650.000</span> neuronas supera a una mosca en visión.",
        },
        {
          type: 'paragraph',
          html: "El cerebro de Drosophila tiene ~<span class=\"num\">100.000</span> neuronas e integra vuelo, cortejo, metabolismo y más. La brecha entre IA de tarea única e inteligencia de insecto es mayor que entre mosca y humano.",
        },
        {
          type: 'paragraph',
          html: "Investigadores como Hintze y Adami evolucionan genomas que codifican redes. <span class=\"person\">Geoffrey Hinton</span>, pionero del deep learning, critica la falta de niveles estructurales y la dependencia de backpropagation. La propuesta no es copiar biología por fetichismo.",
        },
        {
          type: 'paragraph',
          html: "Busca reconocer que omitir desarrollo estructural puede ser el atajo que limita la generalidad.",
        },
        {
          type: 'key',
          html: "Entrenar redes prefabricadas funciona para tareas acotadas. Para inteligencia amplia quizá falte crecimiento.",
        },
        {
          type: 'paragraph',
          html: "Esas diferencias marcan los límites de las fronteras finales entre cerebro e IA.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Fronteras finales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Basta con más ancho de banda para conectar cerebro e IA? El capítulo final abre tres fronteras: interfaces cerebro-máquina, emulación cerebral completa y límites de predicción. La tesis común es que «más ancho de banda» no resuelve por sí solo el problema del tipo de información que se intercambia.",
        },
        {
          type: 'paragraph',
          html: "Sobre <span class=\"term\">whole brain emulation</span> (copia computacional del cerebro entero), Hiesinger advierte que cualquier simulación depende de atajos de nivel. Cuanto más se recorta detalle dinámico, más se restringe qué clase de inteligencia puede emerger o preservarse.",
        },
        {
          type: 'paragraph',
          html: "Por eso, las interfaces corticales actuales estimulan regiones, no células específicas. La integración requiere coaprendizaje en el tiempo, no solo hardware. «Crecer juntos» (desarrollo) y «aprender juntos» (función) son procesos distintos que no se pueden acortar arbitrariamente.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger explora el <span class=\"term\">sesgo cognitivo</span> (distorsión sistemática del juicio por la historia de aprendizaje). Los sesgos no son solo fallas. Son resultado natural de un sistema que aprende secuencialmente y prioriza coherencia con su historia.",
        },
        {
          type: 'paragraph',
          html: "Décadas de entrenamiento en un paradigma dificultan adoptar otro, en ciencia como en ingeniería.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Interfaz IA-cerebro",
              "description": "Requiere coaprendizaje temporal, no solo ancho de banda.",
              "icon": "🔌"
            },
            {
              "title": "Emulación total",
              "description": "Depende de qué niveles de detalle se conservan o descartan.",
              "icon": "🧬"
            },
            {
              "title": "Sesgo cognitivo",
              "description": "Efecto estructural del aprendizaje histórico y expectativas previas.",
              "icon": "🧠"
            }
          ],
        },
        {
          type: 'key',
          html: "No hay inteligencia «general» sin decidir qué historia, qué niveles y qué atajos se aceptan.",
        },
        {
          type: 'paragraph',
          html: "El epílogo cierra los diez seminarios con una posición deliberadamente abierta.",
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
          html: "¿Qué disciplina tiene el mapa completo del cerebro y la inteligencia? El epílogo, en forma de diálogo telefónico entre Alfred y Aki, cierra con una posición pragmática. Ninguna disciplina tiene el mapa completo y todas operan con sesgos de su propia tradición.",
        },
        {
          type: 'paragraph',
          html: "Mencionan el trabajo conjunto de Pramesh y Minda en evolución computacional con mecanismos de desarrollo. También el auge de <span class=\"term\">Developmental Robotics</span> (robótica que incorpora crecimiento estructural) y sistemas como AlphaZero que aprenden reglas por autojuego.",
        },
        {
          type: 'paragraph',
          html: "Aki reconoce que los atajos actuales funcionan para tareas concretas. La pregunta de qué inteligencia se desea permanece abierta. La conversación evoca evolución, entropía y la «pregunta fundamental de información».",
        },
        {
          type: 'paragraph',
          html: "¿De dónde vienen los cerebros en un universo que tiende al desorden? Hiesinger no ofrece receta única. Ofrece una advertencia consistente: cuando se ignoran desarrollo, contexto y selección, se subestima el origen real de la robustez biológica.",
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
    "description": "Proceso que consume tiempo y energía; reglas iterativas generan estados cada vez más complejos."
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
    "title": "Despliegue de información",
    "description": "Información nueva que emerge en cada paso del desarrollo; no estaba en el genoma inicial."
  },
  {
    "title": "Agentes autónomos",
    "description": "Componentes que deciden localmente sin conocimiento del resultado global."
  },
  {
    "title": "Paradoja de Benzer",
    "description": "Mutación que altera conducta heredable sin un gen lineal «para» esa conducta."
  },
  {
    "title": "Instrucción compuesta",
    "description": "Decisión biológica producida por múltiples factores contextuales, no por una sola señal."
  },
  {
    "title": "Problema de niveles",
    "description": "Dificultad de traducir sin pérdida entre explicaciones moleculares, celulares y conductuales."
  },
  {
    "title": "Programación evolutiva",
    "description": "Optimización por variación y selección de salidas tras el crecimiento completo."
  },
  {
    "title": "Función como desarrollo continuo",
    "description": "Aprendizaje, memoria y envejecimiento extienden la misma lógica de crecimiento algorítmico."
  }
],
  chronology: [
  {
    "year": "1949",
    "text": "<span class=\"person\">Donald Hebb</span> publica principios de plasticidad sináptica («fire together, wire together»)."
  },
  {
    "year": "1952",
    "text": "<span class=\"person\">W. Ross Ashby</span> publica *Design for a Brain* y formaliza autoorganización."
  },
  {
    "year": "1958",
    "text": "<span class=\"person\">Frank Rosenblatt</span> presenta el perceptrón, base histórica de las ANN modernas."
  },
  {
    "year": "1960s",
    "text": "<span class=\"person\">Seymour Benzer</span> inaugura la neurogenética conductual en Drosophila."
  },
  {
    "year": "1985",
    "text": "Primer conectoma completo de C. elegans (302 neuronas)."
  },
  {
    "year": "1994",
    "text": "Aislamiento de netrina; molécula guía clásica del cableado axonal."
  },
  {
    "year": "2012",
    "text": "Explosión de deep learning en aplicaciones masivas de IA."
  },
  {
    "year": "2017",
    "text": "Nobel de medicina por el reloj circadiano molecular (Hall, Rosbash, Young)."
  },
  {
    "year": "2018",
    "text": "Nobel de química por evolución dirigida de enzimas (Arnold)."
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
    "name": "Sydney Brenner",
    "role": "Modelo C. elegans y puente entre genética, desarrollo y conectómica."
  },
  {
    "name": "Michael Gaze",
    "role": "Posicionamiento relativo frente a códigos de dirección absolutos."
  },
  {
    "name": "W. Ross Ashby",
    "role": "Pionero de cibernética y autoorganización aplicada al cerebro."
  },
  {
    "name": "Marvin Minsky",
    "role": "Figura central de IA; define inteligencia artificial como ciencia de máquinas."
  },
  {
    "name": "Geoffrey Hinton",
    "role": "Referente de redes profundas; crítico de límites de arquitecturas actuales."
  },
  {
    "name": "Stephen Jay Gould",
    "role": "Spandrels y exaptación; límites del adaptacionismo ingenuo."
  },
  {
    "name": "Gerald Edelman",
    "role": "Selección de grupos neuronales y teoría de reentrada."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El cerebro no viene descrito en los genes como un circuito terminado.",
  "Los genes codifican reglas que se ejecutan con tiempo y energía.",
  "La inteligencia emerge cuando esas reglas interactúan con ruido, selección y retroalimentación.",
  "El desarrollo no es un prefacio de la función: es su continuidad.",
  "La IA actual muestra atajos poderosos para tareas concretas, pero no para flexibilidad amplia."
],
    highlight: "Sin crecimiento algorítmico no hay forma de «leer» toda la información que produce una red inteligente.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Peter Robin Hiesinger",
    line2: "\"The Self-Assembling Brain: How Neural Networks Grow Smarter\" · Princeton University Press · 2021",
  },
}
