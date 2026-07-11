import type { BookSummary } from '../types/book'

export const beingYou: BookSummary = {
  slug: "being-you",
  meta: {
    title: "Being You: A New Science of Consciousness",
    subtitle: "Una nueva ciencia de la conciencia encarnada",
    author: "Anil Seth",
    meta: [
      "📖 2021 · Faber & Faber / Dutton",
      "✍️ Neurocientífico · Sackler Centre for Consciousness Science",
    ],
    titleEs: "Ser tú",
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
    "label": "El problema real"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Medir la conciencia"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Phi"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Percibir de adentro hacia afuera"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El mago de las probabilidades"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "La parte del espectador"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Delirio"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Espérate a ti mismo"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Ser una máquina bestia"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Un pez en el agua"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Grados de libertad"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Más allá de lo humano"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Mentes artificiales"
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
    "num": "★",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prólogo",
      title: "Tres veces dejé de existir",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Anil Seth</span> abre con la anestesia general: no es dormir, sino apagar la conciencia hasta convertir al paciente en objeto quirúrgico y luego devolverlo sin continuidad subjetiva. Esa nada reconfortante pero total anticipa la muerte y muestra que «ser» depende del equilibrio electroquímico del cerebro.",
        },
        {
          type: 'paragraph',
          html: "Seth plantea un experimento mental en el que reemplazarían tu cerebro por una máquina funcionalmente idéntica sin garantía de experiencia consciente. Casi nadie aceptaría el trato porque, sin conciencia, importa poco vivir cinco años o quinientos. La conciencia importa clínicamente en anestesia, lesiones y demencia, y también filosóficamente al pensar en animales, fetos, máquinas o la empatía con HAL y los replicantes.",
        },
        {
          type: 'paragraph',
          html: "Su ciencia no busca un único descubrimiento tipo genoma humano. Busca explicar propiedades fenomenológicas con mecanismos en cerebros y cuerpos encarnados. Rechaza el misterianismo y también reducir la mente a software. La tesis central sostiene que somos máquinas bestia conscientes y que el yo profundo no es razón pura sino regulación biológica del cuerpo vivo.",
        },
        {
          type: 'quote',
          text: "«La conciencia no se 'resolverá' como el genoma humano ni cederá a un único eureka. Lo que mostraré es cómo sus propiedades dependen de operaciones del wetware neuronal.»",
          attribution: "Anil Seth",
        },
        {
          type: 'key',
          html: "La conciencia se aborda como <span class=\"key-term\">problema real</span>: explicar propiedades de la experiencia, no solo por qué hay experiencia en el universo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El problema real",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Conciencia, para <span class=\"person\">Thomas Nagel</span>, es «lo que se siente» ser un organismo. Hay algo que es ser tú, oveja o murciélago, pero probablemente nada que sea ser una bacteria.",
        },
        {
          type: 'paragraph',
          html: "Esa <span class=\"term\">fenomenología</span> no debe confundirse con lenguaje, inteligencia ni comportamiento flexible, como en las teorías de workspace global o higher-order thought.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">David Chalmers</span> separa el <span class=\"term\">problema difícil</span> de los «fáciles». Seth recorre fisicalismo, idealismo, dualismo, funcionalismo, panpsiquismo y misterianismo, y desarma el <span class=\"term\">zombi filosófico</span> porque concebir un zombi no implica que sea posible dado lo que sabemos del cerebro.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">problema real</span> pide explicar, predecir y controlar propiedades fenomenológicas con mecanismos. Los <span class=\"term\">correlatos neuronales de conciencia</span> (NCC) de <span class=\"person\">Crick</span> y <span class=\"person\">Koch</span>, definidos en rivalidad binocular, son útiles pero la correlación no explica. La analogía con el <span class=\"term\">vitalismo</span> sugiere que al explicar propiedades como nivel, contenido y yo el misterio global puede desvanecerse.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Problema real",
              "description": "Explicar por qué la experiencia de rojo es como es, no solo cuándo ocurre actividad neural.",
              "icon": "🎯"
            },
            {
              "title": "Zombi",
              "description": "Argumento de concebibilidad débil; más sabes neurociencia, menos plausible el zombi.",
              "icon": "🧟"
            },
            {
              "title": "NCC",
              "description": "Mecanismos mínimos suficientes para un percepto; riesgo de confundir prerrequisitos y reporte.",
              "icon": "🔬"
            }
          ],
        },
        {
          type: 'key',
          html: "El progreso viene de <span class=\"key-term\">puentes explicativos</span> mecanismo→fenomenología, no de acumular correlaciones ni de perseguir solo el problema difícil.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Medir la conciencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Medir transforma lo cualitativo en cuantitativo, como la termodinámica hizo con el calor. Un «medidor de conciencia» no solo diría sí/no, sino grados. Eso sería útil en anestesia, con millones de operaciones diarias, y en pacientes con daño cerebral en estado vegetativo, mínimamente consciente o locked-in.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">nivel de conciencia</span> no coincide con la vigilia. Puedes soñar dormido o estar despierto pero inconsciente, como en el síndrome de vigilia sin respuesta. <span class=\"person\">Marcello Massimini</span> y <span class=\"person\">Giulio Tononi</span> desarrollaron el <span class=\"term\">PCI</span> (perturbational complexity index), que aplica un «zap» de TMS y mide la complejidad LZW del eco cortical. Los valores bajos aparecen en sueño sin sueños y bajo anestesia. En <span class=\"num\">2013</span> el índice distinguió vegetativo de mínimamente consciente y locked-in.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Adrian Owen</span> demostró conciencia encubierta pidiendo a pacientes imaginar tenis frente a recorrer mentalmente su casa durante fMRI. Los psicodélicos como LSD o psilocibina elevan la complejidad medida, y hay interacción entre nivel y contenido. En <span class=\"num\">1998</span>, Tononi y Edelman propusieron que toda experiencia es <span class=\"term\">informática e integrada</span>. Las medidas deben captar el punto medio entre orden y desorden, no solo aleatoriedad.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~10–20%",
              "label": "Posible conciencia encubierta en estado vegetativo (meta-análisis)"
            },
            {
              "value": "PCI",
              "label": "Escala continua que separa conciencia de mera arousal"
            }
          ],
        },
        {
          type: 'key',
          html: "Medir conciencia construye <span class=\"key-term\">puentes reales</span> entre mecanismo y experiencia, con impacto clínico inmediato.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Phi",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Giulio Tononi</span> lleva información e integración hasta la <span class=\"term\">teoría de información integrada</span> (IIT). Para IIT, la conciencia <em>es</em> <span class=\"term\">Φ</span> (phi), información integrada intrínseca al sistema, como la temperatura es energía cinética. Seth debatió con Tononi en Las Vegas en <span class=\"num\">2006</span>. Hoy IIT es influyente y controvertida.",
        },
        {
          type: 'paragraph',
          html: "Un Φ alto exige que el todo supere a sus partes en información, no un simple array de fotodiodos independientes. La teoría explica por qué el cerebelo no entra en la conciencia y por qué Φ cae en sueño profundo. La medición de Φ es difícil porque exige conocer estados <em>posibles</em>, no solo observados. Esa distinción entre información intrínseca y de Shannon vuelve casi intratable la identidad central IIT/conciencia.",
        },
        {
          type: 'paragraph',
          html: "IIT predice casos extraños, como neuronas inactivas que aun así cambian Φ, panpsiquismo restringido o dos consciencias en un cerebro dividido. Seth propone retener información e integración como propiedades generales del problema real, sin identidad ontológica. Versiones observables de Φ, como las de Barrett y Mediano, permiten contrastar la teoría con datos empíricos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Identidad",
              "description": "IIT: nivel consciente = phi del mecanismo, no correlato.",
              "icon": "Φ"
            },
            {
              "title": "Fotodiodo",
              "description": "Mucha información sin integración → Φ≈0, sin conciencia.",
              "icon": "📷"
            },
            {
              "title": "Testabilidad",
              "description": "Ambición hard problem choca con medición intrínseca imposible.",
              "icon": "🧪"
            }
          ],
        },
        {
          type: 'key',
          html: "IIT aporta intuición sobre <span class=\"key-term\">integración e información</span>, pero su claim identitario Φ=conciencia escapa a la evidencia empírica.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Percibir de adentro hacia afuera",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Desde una terraza en California, Seth insiste en que el mundo que ves es construcción cerebral, una <span class=\"term\">alucinación controlada</span>. Imagina ser el cerebro en oscuridad total: solo recibes señales eléctricas sin etiqueta de modalidad y debes inferir sus causas.",
        },
        {
          type: 'paragraph',
          html: "La vista «bottom-up» de Marr y del deep learning encaja con anatomía jerárquica, pero Wittgenstein sobre Copérnico advierte que cómo parece no es cómo es. Desde Helmholtz y Kant hasta predictive coding, la percepción es inferencia inconsciente. El contenido consciente son predicciones top-down, no señales crudas. La alucinación clínica surge cuando esas predicciones carecen de anclaje sensorial.",
        },
        {
          type: 'paragraph',
          html: "El color lo ilustra bien. «Rojo» no está en la silla ni en el cerebro como pigmento, según la falla de doble transducción de Dennett, sino en la interacción superficie-perceptor. <span class=\"term\">The Dress</span> (<span class=\"num\">2015</span>), el tablero de Adelson y las imágenes Mooney muestran cómo expectativas previas moldean lo que ves con los mismos píxeles.",
        },
        {
          type: 'quote',
          text: "«Cuando estamos de acuerdo en nuestras alucinaciones, a eso lo llamamos realidad.»",
          attribution: "Baba Brinkman (citado por Seth)",
        },
        {
          type: 'key',
          html: "Percibir es <span class=\"key-term\">predicción top-down</span> restringida por error sensorial, no lectura pasiva del mundo.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El mago de las probabilidades",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Thomas Bayes</span> formaliza inferencia bajo incertidumbre mediante prior × likelihood → posterior. El césped mojado puede deberse a lluvia o a una regadera olvidada. Nueva evidencia, como el césped vecino seco, invierte la mejor explicación. El cerebro hace lo mismo con señales ambiguas.",
        },
        {
          type: 'paragraph',
          html: "Las creencias bayesianas usan distribuciones con media y precisión. Señales poco fiables, como un gorila lejano o una ventana sucia, mueven poco el posterior. La <span class=\"term\">minimización de error de predicción</span> implementa Bayes aproximado con modelos generativos, jerarquías y <span class=\"term\">ponderación de precisión</span>. La atención sube la ganancia sensorial. La ceguera inatencional de Simons demuestra datos ignorados cuando la precisión estimada es baja.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Karl Friston</span> añade la <span class=\"term\">inferencia activa</span>, según la cual también se minimiza error actuando para cumplir predicciones, como buscar llaves o mover los ojos. Las acciones son predicciones propioceptivas auto-cumplidas con atenuación sensorial, una «desatención» al cuerpo. Percepción y acción son dos caras del mismo proceso predictivo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Bayes",
              "description": "Priors + likelihood → percepto; ciclo continuo.",
              "icon": "📊"
            },
            {
              "title": "Precisión",
              "description": "Atención modula cuánto pesa lo sensorial vs lo esperado.",
              "icon": "👁️"
            },
            {
              "title": "Active inference",
              "description": "Actuar para hacer verdad la predicción, no solo actualizarla.",
              "icon": "🏃"
            }
          ],
        },
        {
          type: 'key',
          html: "El contenido consciente <em>son</em> las predicciones top-down, no un readout de datos sensoriales.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "La parte del espectador",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En Viena fin de siècle, <span class=\"person\">Alois Riegl</span> y <span class=\"person\">Ernst Gombrich</span> hablaron de la <span class=\"term\">parte del espectador</span>. El observador completa la obra, como el impresionismo deja margen para inferir escenas. Kandel une esto a predictive processing.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Yair Pinto</span> mostró con flash suppression que las expectativas aceleran ver caras o casas. El LSD y la «máquina de alucinaciones» basada en deep dream en VR exageran priors top-down. La estructura profunda incluye <span class=\"term\">objecthood</span>, predicciones condicionales sensorimotoras, cambio y tiempo sin reloj interno. <span class=\"person\">Warrick Roseboom</span> mostró que la duración se infiere del ritmo de cambio visual. La «realidad» aparece en <span class=\"term\">substitutional reality</span>.",
        },
        {
          type: 'paragraph',
          html: "Hume proyectó causalidad al mundo. Lo «objetivamente real» en percepción es propiedad fenomenológica útil para guiar acción, no prueba de noumeno. Disolver esa ilusión debilita el hard problem: la silla existe, pero «sillidad» y rojo son construcciones.",
        },
        {
          type: 'key',
          html: "Toda la escena perceptual, incluidos tiempo, objetos, causalidad y realidad, es <span class=\"key-term\">proyección inferencial</span> útil, no ventana transparente.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Delirio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En <span class=\"num\">2014</span> la madre de Seth entró en estado vegetativo por encefalopatía. En <span class=\"num\">2018</span> sufrió <span class=\"term\">delirium</span> hospitalario con alucinaciones y paranoia, creyendo que él experimentaba con ella, y fuga del ward. Hasta un tercio de ancianos en cuidados agudos lo padecen, con secuelas cognitivas.",
        },
        {
          type: 'paragraph',
          html: "El delirio no es aleatorio. Encaja con su rol de neurocientífico hijo que lee notas clínicas en la cama. Factores como fiebre, sedación o lugar extraño rompen el modelo predictivo del self. Las palabras se separan y la identidad fluctúa. El yo puede fragmentarse y recomponerse.",
        },
        {
          type: 'paragraph',
          html: "El capítulo pregunta qué es un «self» al que se puede salir y volver. Esa pregunta abre la Parte III: el yo tampoco es lo que parece.",
        },
        {
          type: 'key',
          html: "Delirio muestra que <span class=\"key-term\">identidad y realidad</span> son logros cerebrales frágiles, no entidades fijas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Espérate a ti mismo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El yo no es el que percibe, sino también percepción. La paradoja de teletransportación con Eva1 y Eva2, ambas «reales», desafía la identidad única. Hume, Metzinger y el budismo niegan un self sustancial. Los craniopagus comparten sensaciones.",
        },
        {
          type: 'paragraph',
          html: "El yo tiene capas. El <span class=\"term\">cuerpo</span> incluye propiedad y emoción. La <span class=\"term\">perspectiva</span> aparece en Mach y en OBE por estimulación de Blanke o Penfield. La <span class=\"term\">volición</span>, el <span class=\"term\">yo narrativo</span> de Clive Wearing con amnesia de segundos y el <span class=\"term\">yo social</span> con teoría de mente anidada completan el haz. Rubber hand y body swap en VR muestran plasticidad, aunque las ilusiones corporales suelen ser débiles frente a la clínica, como en somatoparaphrenia.",
        },
        {
          type: 'paragraph',
          html: "La estabilidad subjetiva del yo es <span class=\"term\">ceguera al cambio</span>. Evolucionamos para controlarnos, no conocernos con precisión. Donne escribió que «ningún hombre es una isla». La self-awareness social puede requerir otros.",
        },
        {
          type: 'key',
          html: "Ser tú es un haz de <span class=\"key-term\">percepciones del yo</span>, tan inferidas y revisables como ver un vaso rojo.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Ser una máquina bestia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Descartes llamó a los animales <span class=\"term\">bête-machine</span> sin alma racional. <span class=\"person\">La Mettrie</span> extendió la máquina al hombre. Seth invierte la idea: la conciencia liga más a estar vivo que a ser inteligente. Bajo capas narrativas y perspectivales hay afecto e interocepción.",
        },
        {
          type: 'paragraph',
          html: "Según James-Lange, la emoción es percepción de cambio corporal: «lloramos, luego estamos tristes». La <span class=\"term\">inferencia interoceptiva</span> unifica emoción sin dualismo cognitivo/corporal. El miedo es predicción sobre estado visceral ante un oso. Ashby sostuvo que todo buen regulador debe ser modelo del sistema. Las emociones regulan <span class=\"term\">variables esenciales</span> como temperatura o glucosa mediante acciones externas e intero-acciones.",
        },
        {
          type: 'paragraph',
          html: "La percepción epistémica trata objetos y la instrumental busca control. Esa distinción explica la fenomenología: la taza tiene «dorso», la ansiedad no. La sensación basal de «simplemente estar vivo» es predicción interoceptiva profunda. Priors precisos de supervivencia explican estabilidad del yo y autoengaño fisiológico.",
        },
        {
          type: 'quote',
          text: "«No somos computadoras cognitivas; somos máquinas de sentir.»",
          attribution: "Anil Seth",
        },
        {
          type: 'key',
          html: "Somos <span class=\"key-term\">máquinas bestia conscientes</span>. Mundo y yo son alucinaciones al servicio de seguir vivos.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Un pez en el agua",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"term\">principio de energía libre</span> (FEP) de <span class=\"person\">Karl Friston</span> parte de que existir es mantener frontera y estados de baja entropía contra la segunda ley. Un pez en agua ocupa estados esperados. Fuera del agua, se desintegra.",
        },
        {
          type: 'paragraph',
          html: "Los organismos minimizan sorpresa sensorial aproximada por <span class=\"term\">free energy</span>, que equivale al error de predicción. Eso requiere modelos generativos. Friston resume: «me predigo, luego existo». No implica quedarse en habitación oscura, porque el hambre sube entropía y hay que explorar mediante <span class=\"term\">allostasis</span> anticipatoria.",
        },
        {
          type: 'paragraph',
          html: "FEP no es teoría de conciencia sino marco filosófico-matemático. Refuerza beast machine desde la física de lo vivo. En el encuentro de Aegina de <span class=\"num\">2018</span>, FEP e IIT hablaron poco entre sí. Hoy hay adversarial collaborations en curso.",
        },
        {
          type: 'key',
          html: "La vida persiste <span class=\"key-term\">minimizando sorpresa</span>. La mente predictiva es consecuencia, no excepción dualista.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Grados de libertad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Ian McEwan</span>, vía Briony, pregunta si la intención causa el dedo o el dedo a la intención. El <span class=\"term\">libre albedrío</span> «spooky», con dualismo e indeterminismo necesario, queda descartado. El compatibilismo basta.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> registró potencial de readiness unos <span class=\"num\">500</span> ms antes del «urge» consciente. <span class=\"person\">Aaron Schurger</span> reinterpretó en <span class=\"num\">2012</span> que la pendiente puede ser fluctuación cercana a umbral, no causa especial. La voluntad se percibe cuando la acción parece venir de dentro, alineada con deseos y con alternativas aparentes. Eso es útil para aprender, no magia.",
        },
        {
          type: 'paragraph',
          html: "La red de <span class=\"person\">Patrick Haggard</span> distingue what, when y whether. Los grados de libertad de Ashby cuantifican flexibilidad motora. Wegner no prueba que la experiencia volitiva sea falsa. Es tan real como el rojo, con contenido metafísico engañoso. Tumores como el de Whitman muestran fragilidad legal y moral.",
        },
        {
          type: 'key',
          html: "Libre albedrío es <span class=\"key-term\">percepción de agencia</span> voluntaria, no interrupción acausal del flujo físico.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Más allá de lo humano",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tribunales medievales juzgaron cerdos. Descartes negó mente animal. Hoy sabemos que conciencia no equivale a lenguaje ni a metacognición. El antropomorfismo y el antropocentrismo distorsionan. La inteligencia abre estados ramificados como el arrepentimiento, pero no define conciencia.",
        },
        {
          type: 'paragraph',
          html: "Seth, Baars y Edelman listaron en <span class=\"num\">2005</span> <span class=\"num\">17</span> propiedades testeables, entre ellas corteza de seis capas, tálamo, dinámica sueño-vigilia y anestesia similar. Los mamíferos probablemente son conscientes. Pocos pasan el test del espejo: grandes simios, delfines y un elefante. Monos en Cayo Santiago «se divierten» y capuchinos protestan unfairness, pero sin espejo su selfhood difiere del humano.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Peter Godfrey-Smith</span> describe pulpos con mente evolutivamente alienígena, neuronas en brazos y camuflaje sin ver color. Podrían tener conciencia distribuida sin propiedad corporal unificada. Aves, dolor en peces y moscas, anestésicos amplios. Un gusano con <span class=\"num\">302</span> neuronas probablemente no siente. Perfil multidimensional de Birch y precaución ética guían la frontera.",
        },
        {
          type: 'key',
          html: "Conciencia se extiende por <span class=\"key-term\">mecanismos compartidos y vida</span>, no por parecerse a Homo sapiens inteligente.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Mentes artificiales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Golem, Frankenstein y HAL muestran que crear mentes sintéticas invita hubris. La IA actual no implica conciencia. El funcionalismo es necesario pero insuficiente. Inteligencia avanzada no arrastra qualia, y la Singularidad está sobrevalorada.",
        },
        {
          type: 'paragraph',
          html: "Dehaene propone criterios de procesamiento global. IIT permite zombis conductuales con Φ=0. Un robot «beast machine» de silicio con interocepción sintética podría parecer sentiente. Seth sospecha que la <span class=\"term\">materialidad viva</span>, con autopoiesis celular, importa. GPT-3 pasa Turing estrecho sin entender. El <span class=\"term\">Garland test</span> de Ex Machina prueba al humano, no la máquina.",
        },
        {
          type: 'paragraph',
          html: "El valle inquietante con Geminoid Ishiguro, los deepfakes y la ética preventiva complican el panorama. <span class=\"person\">Thomas Metzinger</span> pidió moratoria de <span class=\"num\">30</span> años a fenomenología sintética. Los organoides cerebrales complican la frontera. Dennett ve herramientas inteligentes, no colegas. Subir upload o Simulation argument rechaza funcionalismo ingenuo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "IA actual",
              "description": "Patrón estadístico; baja en escala inteligencia general.",
              "icon": "🤖"
            },
            {
              "title": "Organoides",
              "description": "Neuronas reales; conciencia remota pero no descartable.",
              "icon": "🧬"
            },
            {
              "title": "Ética",
              "description": "Si hay qualia sintética, sufrimiento importa aunque no lo reconozcamos.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "Máquinas pueden ser <span class=\"key-term\">inteligentes sin sentir</span>. La conciencia artificial exige más que information processing.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Problema real",
    "description": "Explicar propiedades fenomenológicas (nivel, contenido, yo) con mecanismos; disolver el hard problem indirectamente."
  },
  {
    "title": "Alucinación controlada",
    "description": "Percepción = predicción top-down acotada por error sensorial y acción."
  },
  {
    "title": "PCI",
    "description": "Índice de complejidad perturbacional; TMS + LZW; clínica de conciencia residual."
  },
  {
    "title": "Φ (IIT)",
    "description": "Información integrada como medida identitaria de conciencia; difícil de medir."
  },
  {
    "title": "Inferencia interoceptiva",
    "description": "Emociones y yo profundo como predicciones sobre estado corporal y regulación."
  },
  {
    "title": "Máquina bestia",
    "description": "Conciencia encarnada al servicio de variables esenciales y supervivencia."
  },
  {
    "title": "Energía libre",
    "description": "Cota de sorpresa sensorial; minimizarla ≈ minimizar error predictivo."
  },
  {
    "title": "Inferencia activa",
    "description": "Actuar para cumplir predicciones; acción y percepción unificadas."
  },
  {
    "title": "Grados de libertad",
    "description": "Flexibilidad de control corporal; base de agencia voluntaria percibida."
  }
],
  chronology: [
  {
    "year": "1884",
    "text": "William James (y Lange): emoción como percepción corporal."
  },
  {
    "year": "1974",
    "text": "Nagel: «What is it like to be a bat?»"
  },
  {
    "year": "1990",
    "text": "Crick & Koch proponen buscar NCC."
  },
  {
    "year": "1995",
    "text": "Chalmers formula el problema difícil."
  },
  {
    "year": "1998",
    "text": "Tononi & Edelman: conciencia informática e integrada."
  },
  {
    "year": "2005",
    "text": "Seth, Baars & Edelman: propiedades animales de conciencia."
  },
  {
    "year": "2006",
    "text": "Owen: conciencia encubierta con imaginación motora."
  },
  {
    "year": "2012",
    "text": "Schurger reinterpreta experimentos de Libet."
  },
  {
    "year": "2013",
    "text": "Casali et al.: PCI en pacientes con daño cerebral."
  },
  {
    "year": "2021",
    "text": "Publicación de *Being You*; debates FEP vs IIT activos."
  }
],
  figures: [
  {
    "name": "Anil Seth",
    "role": "Autor; teoría beast machine e interoceptive inference · Sackler Centre"
  },
  {
    "name": "David Chalmers",
    "role": "Problema difícil y meta-problema · filósofo"
  },
  {
    "name": "Giulio Tononi",
    "role": "IIT, Φ, PCI con Massimini · neurocientífico"
  },
  {
    "name": "Karl Friston",
    "role": "Inferencia activa y principio de energía libre"
  },
  {
    "name": "Adrian Owen",
    "role": "Diagnóstico de conciencia encubierta con neuroimagen"
  },
  {
    "name": "Thomas Metzinger",
    "role": "Crítica del self · ética de fenomenología sintética"
  },
  {
    "name": "Hermann von Helmholtz",
    "role": "Percepción como inferencia inconsciente"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La conciencia no es un misterio único que exija un alma o un eureka cuántico.",
  "Es un conjunto de propiedades — nivel, contenido y yo — explicables en términos de cerebro encarnado que predice para seguir vivo.",
  "Percibimos mundo y yo de adentro hacia afuera, no como ventanas transparentes al real.",
  "Cuando la ciencia explica cada propiedad fenomenológica, el problema difícil se disuelve en lugar de exigir magia.",
  "Al final, la experiencia en primera persona sigue siendo personal; solo cambia cómo la entendemos y la cuidamos."
],
    highlight: "Ser tú es una alucinación controlada al servicio de la vida",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Anil Seth",
    line2: "\"Being You: A New Science of Consciousness\" · Faber & Faber · 2021",
  },
}
