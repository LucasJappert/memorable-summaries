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
          html: "¿Qué nos enseña la anestesia general sobre lo que significa «ser» alguien? <span class=\"person\">Anil Seth</span>, neurocientífico británico, abre con tres operaciones bajo anestesia. No es dormir: es apagar la conciencia hasta convertir al paciente en objeto quirúrgico. Luego lo devuelven sin continuidad subjetiva. Esa nada reconfortante pero total anticipa la muerte y muestra que «ser» depende del equilibrio electroquímico del cerebro.",
        },
        {
          type: 'paragraph',
          html: "Seth plantea un experimento mental. Reemplazarían tu cerebro por una máquina funcionalmente idéntica sin garantía de experiencia consciente. Casi nadie aceptaría el trato. Sin conciencia, no hay diferencia real entre vivir cinco años o quinientos. Por eso la conciencia importa en clínica: anestesia, lesiones cerebrales y demencia. También importa al pensar en animales, fetos, máquinas o la empatía con HAL y los replicantes.",
        },
        {
          type: 'paragraph',
          html: "Su ciencia no busca un único descubrimiento tipo genoma humano. Busca explicar propiedades de la experiencia con mecanismos en cerebros y cuerpos encarnados. Rechaza el misterianismo y también reducir la mente a software. La tesis central sostiene que somos máquinas bestia conscientes. El yo profundo no es razón pura sino regulación biológica del cuerpo vivo.",
        },
        {
          type: 'quote',
          text: "«La conciencia no se \"resolverá\" como el genoma humano ni cederá a un único eureka. Lo que mostraré es cómo sus propiedades dependen de operaciones del wetware neuronal.»",
          attribution: "Anil Seth",
        },
        {
          type: 'key',
          html: "La conciencia se aborda como <span class=\"key-term\">problema real</span>: explicar propiedades de la experiencia, no solo por qué hay experiencia en el universo.",
        },
        {
          type: 'paragraph',
          html: "Para avanzar hacia esa explicación, Seth primero separa el problema filosófico del enfoque científico concreto.",
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
          html: "¿Qué significa decir que un organismo «tiene conciencia»? Para el filósofo <span class=\"person\">Thomas Nagel</span>, conciencia es «lo que se siente» ser un organismo. Hay algo que es ser tú, oveja o murciélago. Probablemente no hay nada que sea ser una bacteria.",
        },
        {
          type: 'paragraph',
          html: "Esa cualidad subjetiva, la <span class=\"term\">fenomenología</span> (o sea lo que la experiencia es desde dentro), no debe confundirse con lenguaje, inteligencia ni comportamiento flexible. Teorías como workspace global o higher-order thought describen funciones, no sensaciones.",
        },
        {
          type: 'paragraph',
          html: "El filósofo <span class=\"person\">David Chalmers</span> separa el <span class=\"term\">problema difícil</span> (por qué hay experiencia en absoluto) de los «fáciles» (cómo el cerebro procesa información). Seth recorre fisicalismo, idealismo, dualismo y otras posiciones. Desarma el zombi filosófico porque concebir un zombi no implica que sea posible dado lo que sabemos del cerebro.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">problema real</span> (explicar propiedades de la experiencia con mecanismos) pide predecir y controlar la fenomenología concreta. Los correlatos neuronales de conciencia (NCC), propuestos por <span class=\"person\">Crick</span> y <span class=\"person\">Koch</span>, son útiles en rivalidad binocular. Pero la correlación no explica. La analogía con el vitalismo sugiere que al explicar nivel, contenido y yo el misterio global puede desvanecerse.",
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
        {
          type: 'paragraph',
          html: "Si el problema real exige explicar propiedades, primero hay que poder medirlas con rigor clínico.",
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
          html: "¿Se puede medir la conciencia como se midió el calor en termodinámica? Medir transforma lo cualitativo en cuantitativo. Un «medidor de conciencia» no solo diría sí/no, sino grados. Eso sería útil en anestesia, con millones de operaciones diarias. También en pacientes con daño cerebral en estado vegetativo, mínimamente consciente o locked-in.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">nivel de conciencia</span> (cuánta experiencia hay) no coincide con la vigilia. Puedes soñar dormido o estar despierto pero inconsciente, como en vigilia sin respuesta. El neurocientífico <span class=\"person\">Marcello Massimini</span> y <span class=\"person\">Giulio Tononi</span> desarrollaron el PCI (perturbational complexity index). Aplica un «zap» de TMS y mide la complejidad LZW del eco cortical. Los valores bajos aparecen en sueño sin sueños y bajo anestesia. En <span class=\"num\">2013</span> el índice distinguió vegetativo de mínimamente consciente y locked-in.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Adrian Owen</span> demostró conciencia encubierta pidiendo a pacientes imaginar tenis frente a recorrer mentalmente su casa durante fMRI. Los psicodélicos como LSD elevan la complejidad medida. En <span class=\"num\">1998</span>, Tononi y Edelman propusieron que toda experiencia es informática e integrada. Las medidas deben captar el punto medio entre orden y desorden, no solo aleatoriedad.",
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
        {
          type: 'paragraph',
          html: "Una de las teorías más ambiciosas para ese nivel consciente propone una medida única: phi.",
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
          html: "¿Puede una sola cifra capturar cuánta conciencia hay en un cerebro? <span class=\"person\">Giulio Tononi</span> lleva información e integración hasta la <span class=\"term\">teoría de información integrada</span> (IIT). Para IIT, la conciencia <em>es</em> phi (Φ), información integrada intrínseca al sistema. Es como decir que la temperatura es energía cinética. Seth debatió con Tononi en Las Vegas en <span class=\"num\">2006</span>. Hoy IIT es influyente y controvertida.",
        },
        {
          type: 'paragraph',
          html: "Un Φ alto exige que el todo supere a sus partes en información. Un simple array de fotodiodos independientes no basta. La teoría explica por qué el cerebelo no entra en la conciencia y por qué Φ cae en sueño profundo. La medición de Φ es difícil porque exige conocer estados <em>posibles</em>, no solo observados. Esa distinción entre información intrínseca y de Shannon vuelve casi intratable la identidad central IIT/conciencia.",
        },
        {
          type: 'paragraph',
          html: "IIT predice casos extraños: neuronas inactivas que aun así cambian Φ, panpsiquismo restringido o dos consciencias en un cerebro dividido. Seth propone retener información e integración como propiedades generales del problema real, sin identidad ontológica. Versiones observables de Φ, como las de Barrett y Mediano, permiten contrastar la teoría con datos empíricos.",
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
        {
          type: 'paragraph',
          html: "Medido o no el nivel, el contenido consciente —lo que vemos y sentimos— exige otra explicación.",
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
          html: "¿El mundo que ves es una copia fiel de lo que hay afuera? Desde una terraza en California, Seth insiste en que el mundo que ves es construcción cerebral. Es una <span class=\"term\">alucinación controlada</span>, o sea una predicción interna acotada por los sentidos. Imagina ser el cerebro en oscuridad total. Solo recibes señales eléctricas sin etiqueta de modalidad y debes inferir sus causas.",
        },
        {
          type: 'paragraph',
          html: "La vista «bottom-up» de Marr y del deep learning encaja con anatomía jerárquica. Pero Wittgenstein sobre Copérnico advierte que cómo parece no es cómo es. Desde Helmholtz y Kant hasta predictive coding, la percepción es inferencia inconsciente. El contenido consciente son predicciones top-down, no señales crudas. La alucinación clínica surge cuando esas predicciones carecen de anclaje sensorial.",
        },
        {
          type: 'paragraph',
          html: "El color lo ilustra bien. «Rojo» no está en la silla ni en el cerebro como pigmento, según la falla de doble transducción de Dennett. Está en la interacción superficie-perceptor. The Dress (<span class=\"num\">2015</span>), el tablero de Adelson y las imágenes Mooney muestran cómo expectativas previas moldean lo que ves con los mismos píxeles.",
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
        {
          type: 'paragraph',
          html: "Esa inferencia perceptiva se formaliza con las reglas matemáticas de la probabilidad.",
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
          html: "¿Cómo decide el cerebro entre interpretaciones cuando los datos son ambiguos? <span class=\"person\">Thomas Bayes</span> formaliza inferencia bajo incertidumbre mediante prior × likelihood → posterior. El césped mojado puede deberse a lluvia o a una regadera olvidada. Nueva evidencia, como el césped vecino seco, invierte la mejor explicación. El cerebro hace lo mismo con señales ambiguas.",
        },
        {
          type: 'paragraph',
          html: "Las creencias bayesianas usan distribuciones con media y precisión. Señales poco fiables, como un gorila lejano o una ventana sucia, mueven poco el posterior. La <span class=\"term\">minimización de error de predicción</span> (ajustar el modelo interno cuando los sentidos contradicen lo esperado) implementa Bayes aproximado con modelos generativos y jerarquías. La atención sube la ganancia sensorial. La ceguera inatencional de Simons demuestra datos ignorados cuando la precisión estimada es baja.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Karl Friston</span> añade la <span class=\"term\">inferencia activa</span> (actuar para cumplir predicciones, no solo actualizarlas). También se minimiza error moviendo el cuerpo. Buscar llaves o mover los ojos son ejemplos. Las acciones son predicciones propioceptivas auto-cumplidas con atenuación sensorial. Percepción y acción son dos caras del mismo proceso predictivo.",
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
        {
          type: 'paragraph',
          html: "Las predicciones no solo llenan objetos: también construyen tiempo, causalidad y la sensación de realidad.",
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
          html: "¿Cuánto aporta el observador a lo que ve en un cuadro? En Viena fin de siècle, el historiador del arte <span class=\"person\">Alois Riegl</span> habló de la <span class=\"term\">parte del espectador</span> (la porción que el observador completa mentalmente). <span class=\"person\">Ernst Gombrich</span> retomó la idea en arte. El impresionismo deja margen para inferir escenas. Kandel une esto a predictive processing.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Yair Pinto</span> mostró con flash suppression que las expectativas aceleran ver caras o casas. El LSD y la «máquina de alucinaciones» basada en deep dream en VR exageran priors top-down. La estructura profunda incluye objecthood, predicciones sensorimotoras, cambio y tiempo sin reloj interno. <span class=\"person\">Warrick Roseboom</span> mostró que la duración se infiere del ritmo de cambio visual.",
        },
        {
          type: 'paragraph',
          html: "Hume proyectó causalidad al mundo. Lo «objetivamente real» en percepción es propiedad fenomenológica útil para guiar acción, no prueba de noumeno. Disolver esa ilusión debilita el hard problem: la silla existe, pero «sillidad» y rojo son construcciones.",
        },
        {
          type: 'key',
          html: "Toda la escena perceptual, incluidos tiempo, objetos, causalidad y realidad, es <span class=\"key-term\">proyección inferencial</span> útil, no ventana transparente.",
        },
        {
          type: 'paragraph',
          html: "Si la percepción del mundo es inferencia frágil, el yo que percibe también puede desmoronarse.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Delirium",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué le ocurre al «yo» cuando el cerebro pierde el control narrativo? En <span class=\"num\">2014</span> la madre de Seth entró en estado vegetativo por encefalopatía. En <span class=\"num\">2018</span> sufrió <span class=\"term\">delirium</span>, un trastorno agudo de atención y cognición con alucinaciones y paranoia. Creyó que él experimentaba con ella y huyó del ward. Padecen delirium hasta un tercio de ancianos en cuidados agudos, con secuelas cognitivas.",
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
        {
          type: 'paragraph',
          html: "Para entender esa fragilidad, Seth descompone el yo en capas perceptivas distintas.",
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
          html: "¿El yo es quien percibe o también algo que se percibe? El yo no es solo el que percibe, sino también percepción. La paradoja de teletransportación con Eva1 y Eva2, ambas «reales», desafía la identidad única. Hume, Metzinger y el budismo niegan un self sustancial. Los craniopagus comparten sensaciones.",
        },
        {
          type: 'paragraph',
          html: "El yo tiene capas inferidas. Hay percepción del <span class=\"term\">cuerpo</span> (propiedad y emoción). Hay <span class=\"term\">perspectiva</span> (desde dónde se experimenta el mundo). Hay volición, identidad narrativa (como Clive Wearing con amnesia de segundos) y yo social con teoría de mente anidada. Rubber hand y body swap en VR muestran plasticidad, aunque las ilusiones corporales suelen ser débiles frente a la clínica.",
        },
        {
          type: 'paragraph',
          html: "La estabilidad subjetiva del yo es ceguera al cambio. Evolucionamos para controlarnos, no conocernos con precisión. Donne escribió que «ningún hombre es una isla». La self-awareness social puede requerir otros.",
        },
        {
          type: 'key',
          html: "Ser tú es un haz de <span class=\"key-term\">percepciones del yo</span>, tan inferidas y revisables como ver un vaso rojo.",
        },
        {
          type: 'paragraph',
          html: "Esas percepciones del yo se anclan en algo más profundo que la narrativa: el cuerpo vivo que hay que regular.",
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
          html: "¿La conciencia depende más de estar vivo que de ser inteligente? Descartes llamó a los animales bête-machine sin alma racional. <span class=\"person\">La Mettrie</span> extendió la máquina al hombre. Seth invierte la idea: la conciencia liga más a estar vivo que a ser inteligente. Bajo capas narrativas y perspectivales hay afecto e interocepción.",
        },
        {
          type: 'paragraph',
          html: "Según James-Lange, la emoción es percepción de cambio corporal: «lloramos, luego estamos tristes». La <span class=\"term\">inferencia interoceptiva</span> (predicciones sobre el estado interno del cuerpo) unifica emoción sin dualismo cognitivo/corporal. El miedo es predicción sobre estado visceral ante un oso. Ashby sostuvo que todo buen regulador debe ser modelo del sistema. Las emociones regulan variables esenciales como temperatura o glucosa.",
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
        {
          type: 'paragraph',
          html: "Esa regulación encarnada encaja con un principio más general sobre cómo persisten los organismos.",
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
          html: "¿Por qué un organismo debe predecir para seguir existiendo? El <span class=\"term\">principio de energía libre</span> (FEP) de <span class=\"person\">Karl Friston</span> parte de que existir es mantener frontera y estados de baja entropía contra la segunda ley. Un pez en agua ocupa estados esperados. Fuera del agua, se desintegra.",
        },
        {
          type: 'paragraph',
          html: "Los organismos minimizan sorpresa sensorial aproximada por free energy, que equivale al error de predicción. Eso requiere modelos generativos. Friston resume: «me predigo, luego existo». No implica quedarse en habitación oscura, porque el hambre sube entropía y hay que explorar mediante <span class=\"term\">allostasis</span> (regulación anticipatoria del cuerpo).",
        },
        {
          type: 'paragraph',
          html: "FEP no es teoría de conciencia sino marco filosófico-matemático. Refuerza beast machine desde la física de lo vivo. En el encuentro de Aegina de <span class=\"num\">2018</span>, FEP e IIT hablaron poco entre sí. Hoy hay adversarial collaborations en curso.",
        },
        {
          type: 'key',
          html: "La vida persiste <span class=\"key-term\">minimizando sorpresa</span>. La mente predictiva es consecuencia, no excepción dualista.",
        },
        {
          type: 'paragraph',
          html: "Si la mente predice para vivir, la sensación de elegir también puede ser otra predicción útil.",
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
          html: "¿Sentimos que elegimos porque realmente interrumpimos la causalidad física? <span class=\"person\">Ian McEwan</span>, vía Briony, pregunta si la intención causa el dedo o el dedo a la intención. El <span class=\"term\">libre albedrío</span> «spooky» (causa inmaterial que interrumpe la física), con dualismo e indeterminismo necesario, queda descartado. El compatibilismo basta.",
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
        {
          type: 'paragraph',
          html: "Con el yo y la acción reinterpretados, queda preguntar quién más puede tener conciencia además del humano.",
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
          html: "¿La conciencia exige parecerse a un humano inteligente? Tribunales medievales juzgaron cerdos. Descartes negó mente animal. Hoy sabemos que conciencia no equivale a lenguaje ni a metacognición. El antropomorfismo y el antropocentrismo distorsionan. La inteligencia abre estados ramificados como el arrepentimiento, pero no define conciencia.",
        },
        {
          type: 'paragraph',
          html: "Seth, Baars y Edelman listaron en <span class=\"num\">2005</span> <span class=\"num\">17</span> propiedades testeables. Entre ellas corteza de seis capas, tálamo y dinámica sueño-vigilia. Los mamíferos probablemente son conscientes. Pocos pasan el test del espejo: grandes simios, delfines y un elefante. Monos en Cayo Santiago «se divierten» y capuchinos protestan unfairness, pero sin espejo su selfhood difiere del humano.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Peter Godfrey-Smith</span>, filósofo de la biología, describe pulpos con mente evolutivamente alienígena. Tienen neuronas en brazos y camuflaje sin ver color. Podrían tener conciencia distribuida sin propiedad corporal unificada. Aves, dolor en peces y moscas, anestésicos amplios. Un gusano con <span class=\"num\">302</span> neuronas probablemente no siente. Perfil multidimensional de Birch y precaución ética guían la frontera.",
        },
        {
          type: 'key',
          html: "Conciencia se extiende por <span class=\"key-term\">mecanismos compartidos y vida</span>, no por parecerse a Homo sapiens inteligente.",
        },
        {
          type: 'paragraph',
          html: "Si otros animales pueden sentir, la pregunta natural es si las máquinas que construimos también podrían.",
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
          html: "¿Una inteligencia artificial avanzada sentiría automáticamente lo que hace? Golem, Frankenstein y HAL muestran que crear mentes sintéticas invita hubris. La IA actual no implica conciencia. El funcionalismo es necesario pero insuficiente. Inteligencia avanzada no arrastra qualia, y la Singularidad está sobrevalorada.",
        },
        {
          type: 'paragraph',
          html: "Dehaene propone criterios de procesamiento global. IIT permite zombis conductuales con Φ=0. Un robot «beast machine» de silicio con interocepción sintética podría parecer sentiente. Seth sospecha que la <span class=\"term\">materialidad viva</span> (organismos que se mantienen a sí mismos) importa. GPT-3 pasa Turing estrecho sin entender. El Garland test de Ex Machina prueba al humano, no la máquina.",
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
  "Es un conjunto de propiedades explicables en términos de cerebro encarnado que predice para seguir vivo.",
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
