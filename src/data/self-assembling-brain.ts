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
          html: "Para <span class=\"person\">Hiesinger</span>, la pregunta clave es qué tipo de información contienen los genes cuando «codifican» un cerebro. El genoma no trae un diagrama de conectividad terminado. Trae reglas que se ejecutan paso a paso en interacción con el entorno celular cambiante.",
        },
        {
          type: 'paragraph',
          html: "El prólogo prepara un puente entre <span class=\"term\">neurobiología del desarrollo</span> e <span class=\"term\">inteligencia artificial</span>: en ambos campos importa menos fotografiar el estado final que comprender cómo las reglas locales generan organización global. El desafío no es solo describir conexiones, sino explicar cómo emergen.",
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
          html: "La introducción enfrenta dos tradiciones: la <span class=\"term\">neurobiología</span>, que estudia cómo se cablea el cerebro biológico, y la <span class=\"term\">inteligencia artificial</span>, que suele iniciar con redes prefabricadas y luego entrenarlas. En ambos casos aparece el mismo problema: qué información es realmente necesaria para lograr una red funcional.",
        },
        {
          type: 'paragraph',
          html: "El ejemplo de la mariposa monarca resume la dificultad: migra hasta <span class=\"num\">3.000 millas</span> hacia zonas de invernada precisas. El ciclo completo puede tomar <span class=\"num\">3–5 generaciones</span>. La ruta no puede explicarse solo por aprendizaje individual. Hay información de desarrollo ya incorporada antes del aprendizaje.",
        },
        {
          type: 'paragraph',
          html: "El autor estructura el libro en diez seminarios ficticios entre cuatro personajes: un neurocientífico, una genetista del desarrollo, un ingeniero de robots y un investigador de IA. Un seminario histórico recorre las dicotomías que enmarcan el debate: neat vs scruffy, procesamiento simbólico vs conexionismo, y la transición que <span class=\"person\">Roger Sperry</span> marcó al reclamar cableado específico frente a redes aleatorias aprendidas.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger propone mirar el cableado cerebral como navegación en un mapa que se construye mientras se navega. No hay un «GPS» con destino final inscrito, sino una secuencia de estados donde cada etapa habilita o restringe la siguiente.",
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
          html: "El capítulo introduce la distinción entre <span class=\"term\">información algorítmica</span> e <span class=\"term\">información de endpoint</span>: describir el resultado final puede requerir enormemente más bits que las reglas que lo generan. Con ejemplos como el <span class=\"term\">Game of Life</span> de Conway y la <span class=\"term\">rule 110</span>, Hiesinger muestra sistemas donde no se puede deducir el estado final sin ejecutar todas las iteraciones.",
        },
        {
          type: 'paragraph',
          html: "Desde la teoría de la información, la <span class=\"term\">complejidad de Kolmogorov</span> mide cuán comprimible es una descripción. Un conjunto corto de reglas puede producir patrones cuya descripción explícita es enorme. Lo decisivo es que sistemas deterministas pueden ser matemáticamente <span class=\"term\">indecidibles</span>: no hay atajo analítico, solo ejecutar el algoritmo completo.",
        },
        {
          type: 'paragraph',
          html: "El paralelo biológico aparece con <span class=\"term\">L-systems</span> (árboles y dendritas), cascadas de <span class=\"term\">factores de transcripción</span> y la relación entre entropía e información. Maxwell's demon ilustra que reducir desorden local exige información y energía: crecer un cerebro consume ambas.",
        },
        {
          type: 'paragraph',
          html: "A diferencia de un autómata celular con regla fija, el crecimiento biológico combina reglas que cambian en cada iteración, retroalimentación entre genoma y productos génicos, y componentes estocásticos. La metáfora del <span class=\"term\">blueprint</span> (plano) falla: el genoma es una receta, no un diagrama de cableado.",
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
          html: "Aquí el autor invierte una intuición habitual: el <span class=\"term\">ruido</span> no siempre destruye precisión. Muchas veces la habilita. Procesos como la quimiotaxis bacteriana o la diversidad del <span class=\"term\">sistema inmune</span> funcionan gracias a variación aleatoria seguida de selección.",
        },
        {
          type: 'paragraph',
          html: "En neurodesarrollo, el gen <span class=\"term\">Dscam</span> en Drosophila puede generar casi <span class=\"num\">40.000</span> variantes de proteína de superficie. Cada neurona expresa una versión aleatoria para <span class=\"term\">auto-evitación</span> de ramas propias. Si esa aleatoriedad falta, las ramas dendríticas dejan de extenderse y se amontonan.",
        },
        {
          type: 'paragraph',
          html: "Mecanismos como la señalización <span class=\"term\">Notch</span> permiten romper simetrías mediante inhibición lateral: un proceso estocástico decide qué célula «gana» y cuál cede. El ruido puede ser parte del programa, no un error externo.",
        },
        {
          type: 'paragraph',
          html: "Esto se conecta con el concepto de <span class=\"term\">penetrancia</span>. Una mutación puede no expresarse igual en todos los individuos por dependencia de contexto, umbrales y procesos estocásticos. La «información relevante» no es absoluta. Depende del nivel donde se evalúa el fenotipo.",
        },
        {
          type: 'key',
          html: "La precisión biológica suele surgir de ruido más selección, no de control perfecto sin variación.",
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
          html: "El desarrollo se entiende como interacción de <span class=\"term\">agentes autónomos</span> (filopodios, conos de crecimiento, neuronas) que toman decisiones locales sin conocer el resultado global. El genoma envía al agente de viaje, pero una vez en marcha este debe «defenderse» en su entorno.",
        },
        {
          type: 'paragraph',
          html: "La idea central es que la organización superior emerge de reglas locales con retroalimentación. Un filopodio no «sabe» el circuito final, pero su dinámica de exploración y estabilización contribuye al patrón de conectividad. Hiesinger retoma debates de <span class=\"person\">Gerald Edelman</span> (selección de grupos neuronales) y la tradición cibernética de <span class=\"person\">Ross Ashby</span>.",
        },
        {
          type: 'paragraph',
          html: "La metáfora se extiende a enjambres, deportes colectivos y nanotecnología bottom-up: ceder control local es el precio de flexibilidad y robustez. Incluso la <span class=\"term\">muerte celular programada</span> en C. elegans ilustra que el organismo selecciona la supervivencia del conjunto, no de cada célula.",
        },
        {
          type: 'paragraph',
          html: "La neurona «quiere» crecer un axón y formar sinapsis. En ausencia de señales repulsivas, lo hará donde pueda. El cableado se logra más por exclusión y guía probabilística que por un director central que asigne cada conexión.",
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
          html: "Este tramo aborda la <span class=\"term\">paradoja de Benzer</span>: mutaciones puntuales pueden alterar conductas heredables y seleccionables, aunque no exista un «gen para» cada conducta compleja. El resultado conductual emerge de trayectorias de desarrollo, no de mapeos uno a uno.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Seymour Benzer</span> fundó la neurogenética conductual en Drosophila en los años 60 con pantallas de mutagénesis y selección artificial. Encontró mutantes con fenotipos conductuales específicos y heredables, demostrando base genética del comportamiento.",
        },
        {
          type: 'paragraph',
          html: "Aparecen dos clases de mutaciones. Casos como <span class=\"term\">period</span> y <span class=\"term\">timeless</span> (reloj circadiano molecular) enlazan mecanismo y conducta directamente. Otros, como mutaciones en enzimas metabólicas o factores de transcripción como <span class=\"term\">fruitless</span>, alteran conducta a través de cascadas de crecimiento algorítmico impredecibles.",
        },
        {
          type: 'paragraph',
          html: "La evolución selecciona la salida fenotípica y no predice la trayectoria interna. <span class=\"person\">Stephen Wolfram</span> subestimó esto al concluir que la evolución no puede «reprogramar» sistemas tan complejos como rule 110. La selección no necesita predecir. Solo evalúa el resultado tras el crecimiento completo.",
        },
        {
          type: 'key',
          html: "Una mutación puede reprogramar conducta sin que su función molecular «explique» linealmente esa conducta.",
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
          html: "El «problema de niveles» afirma que una explicación válida en un nivel (molecular) no siempre traduce al siguiente (celular, circuital, conductual). Entre gen y conducta hay una cadena larga de transformaciones con realimentación.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Roger Sperry</span> propuso la <span class=\"term\">chemoafinidad estricta</span>, con etiquetas químicas que emparejan neuronas como cerraduras y llaves. La búsqueda de moléculas guía (ephrinas, netrina/unc-6) validó parte de la visión, pero el mecanismo resultó más complejo. Intervienen señales repulsivas, posicionamiento relativo (<span class=\"person\">Michael Gaze</span>) e <span class=\"term\">instrucciones compuestas</span> donde ningún factor domina solo.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Sydney Brenner</span> eligió C. elegans (<span class=\"num\">302</span> neuronas) para conectómica completa, pero el diagrama de cableado de 1985 no reveló por sí solo cómo los genes controlan el sistema. Proyectos como OpenWorm muestran que simular «vida digital» exige decidir qué nivel de detalle conservar.",
        },
        {
          type: 'paragraph',
          html: "La distinción instructivo vs permisivo es un continuo: netrina, por ejemplo, funciona como atrayente de largo alcance, señal a lo largo del camino y factor permisivo según contexto. Cada atajo de simulación restringe qué clase de inteligencia puede emerger.",
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
          html: "El capítulo sostiene que la función es continuación del desarrollo: aprender también es crecimiento algorítmico. La frase «<span class=\"term\">you are your history</span>» resume que memoria y sesgo surgen de acumulación temporal.",
        },
        {
          type: 'paragraph',
          html: "La retina de vertebrados, con fotorreceptores en el lado «equivocado», ilustra la <span class=\"term\">carga histórica evolutiva</span>: no es diseño óptimo, sino consecuencia de un pliegue embrionario bloqueado por la evolución. <span class=\"person\">Stephen Jay Gould</span> llamó <span class=\"term\">spandrels</span> a rasgos que surgen como subproducto, no como adaptación directa.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">columnas corticales</span> de Mountcastle y los experimentos de Hubel y Wiesel muestran plasticidad, pero su necesidad funcional absoluta sigue debatida. La arquitectura puede ser spandrel de un desarrollo eficiente, no la mejor solución de ingeniería.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jeff Hawkins</span> propone memoria-predicción secuencial. <span class=\"person\">Gerald Edelman</span> describe selección de grupos neuronales por reentrada. En ambos casos, almacenar, recuperar y modificar memoria son el mismo proceso algorítmico en el tiempo. Una red entrenada con datos en distinto orden será una red distinta.",
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
      title: "Autoensamblaje vs construir y entrenar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El capítulo contrapone dos estrategias. Una es el <span class=\"term\">diseño top-down</span> (arquitectura fija más entrenamiento). La otra es el <span class=\"term\">autoensamblaje</span> (estructura que emerge durante el proceso). La IA dominante usa la primera. El cerebro biológico combina crecimiento, poda, actividad y aprendizaje.",
        },
        {
          type: 'paragraph',
          html: "Desde el perceptrón de <span class=\"person\">Rosenblatt</span> (<span class=\"num\">1958</span>) hasta las redes convolucionales actuales, las ANN parten de topología prefijada y conexiones aleatorias iniciales. El cerebro biológico nunca arranca de ese modo. El número de neuronas, los tipos celulares y las conexiones cambian mientras aprende.",
        },
        {
          type: 'paragraph',
          html: "Una red de clasificación de imágenes con <span class=\"num\">650.000</span> neuronas supera a una mosca en visión, pero el cerebro de Drosophila (~<span class=\"num\">100.000</span> neuronas) integra vuelo, cortejo, metabolismo y más. La brecha entre IA de tarea única e inteligencia de insecto es mayor que entre mosca y humano.",
        },
        {
          type: 'paragraph',
          html: "Investigadores como Hintze y Adami evolucionan genomas que codifican redes. Hinton critica la falta de niveles estructurales y la dependencia de backpropagation. La propuesta no es copiar biología por fetichismo. Busca reconocer que omitir desarrollo estructural puede ser el atajo que limita la generalidad.",
        },
        {
          type: 'key',
          html: "Entrenar redes prefabricadas funciona para tareas acotadas. Para inteligencia amplia quizá falte crecimiento.",
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
          html: "El capítulo final abre tres fronteras: interfaces cerebro-máquina, emulación cerebral completa y límites de predicción. La tesis común es que «más ancho de banda» no resuelve por sí solo el problema del tipo de información que se intercambia.",
        },
        {
          type: 'paragraph',
          html: "Sobre <span class=\"term\">whole brain emulation</span>, Hiesinger advierte que cualquier simulación depende de atajos de nivel. Cuanto más se recorta detalle dinámico, más se restringe qué clase de inteligencia puede emerger o preservarse.",
        },
        {
          type: 'paragraph',
          html: "Las interfaces corticales actuales estimulan regiones, no células específicas. La integración requiere coaprendizaje en el tiempo, no solo hardware. «Crecer juntos» (desarrollo) y «aprender juntos» (función) son procesos distintos que no se pueden acortar arbitrariamente.",
        },
        {
          type: 'paragraph',
          html: "Hiesinger explora el <span class=\"term\">sesgo cognitivo</span>: los sesgos no son solo fallas, sino resultado natural de un sistema que aprende secuencialmente y prioriza coherencia con su historia. Décadas de entrenamiento en un paradigma dificultan adoptar otro, en ciencia como en ingeniería.",
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
          html: "El epílogo, en forma de diálogo telefónico entre Alfred y Aki, cierra con una posición pragmática: ninguna disciplina tiene el mapa completo y todas operan con sesgos de su propia tradición.",
        },
        {
          type: 'paragraph',
          html: "Mencionan el trabajo conjunto de Pramesh y Minda en evolución computacional con mecanismos de desarrollo, el auge de <span class=\"term\">Developmental Robotics</span> y sistemas como AlphaZero que aprenden reglas por autojuego. Aki reconoce que los atajos actuales funcionan para tareas concretas, pero la pregunta de qué inteligencia se desea permanece abierta.",
        },
        {
          type: 'paragraph',
          html: "La conversación evoca evolución, entropía y la «pregunta fundamental de información»: de dónde vienen los cerebros en un universo que tiende al desorden. Hiesinger no ofrece receta única, sino advertencia consistente: cuando se ignoran desarrollo, contexto y selección, se subestima el origen real de la robustez biológica.",
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
    "text": "<span class=\"person\">Seymour Benzer</span> inaugura la neurogenética conductual en <span class=\"term\">Drosophila</span>."
  },
  {
    "year": "1985",
    "text": "Primer conectoma completo de <span class=\"term\">C. elegans</span> (302 neuronas)."
  },
  {
    "year": "1994",
    "text": "Aislamiento de netrina; molécula guía clásica del cableado axonal."
  },
  {
    "year": "2012",
    "text": "Explosión de <span class=\"term\">deep learning</span> en aplicaciones masivas de IA."
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
  "El cerebro no viene descrito en los genes como un circuito terminado; viene codificado como reglas que se ejecutan con tiempo y energía.",
  "La inteligencia emerge cuando esas reglas interactúan con ruido, selección y retroalimentación a lo largo del desarrollo y el aprendizaje.",
  "Por eso el desarrollo no es un prefacio de la función: es su continuidad.",
  "La IA actual muestra que muchos atajos son poderosos para tareas concretas.",
  "El límite aparece cuando se busca flexibilidad amplia, historia integrada y adaptación de largo alcance."
],
    highlight: "Sin crecimiento algorítmico no hay forma de «leer» toda la información que produce una red inteligente.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Peter Robin Hiesinger",
    line2: "\"The Self-Assembling Brain: How Neural Networks Grow Smarter\" · Princeton University Press · 2021",
  },
}
