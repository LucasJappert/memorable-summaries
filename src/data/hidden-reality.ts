import type { BookSummary } from '../types/book'

export const hiddenReality: BookSummary = {
  slug: "hidden-reality",
  meta: {
    title: "The Hidden Reality",
    subtitle: "Universos paralelos y las leyes profundas del cosmos",
    author: "Brian Greene",
    meta: [
      "📖 2011 · Alfred A. Knopf",
      "✍️ Nueve rutas hacia el multiverso desde cosmología, cuántica y cuerdas",
    ],
    titleEs: "La realidad oculta",
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
    "label": "Los límites de la realidad"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Gemelos sin fin"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Eternidad e infinito"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Unificar las leyes de la naturaleza"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Universos flotantes en dimensiones cercanas"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Nueva luz sobre una vieja constante"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Ciencia y el multiverso"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Los muchos mundos cuánticos"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Agujeros negros y hologramas"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Universos, computadoras y matemática"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Los límites de la indagación"
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
      num: "Prefacio",
      title: "Más allá de la apariencia cotidiana",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la experiencia cotidiana ocultar la naturaleza profunda de la realidad? Para finales del siglo XX, la física ya había mostrado que sí. <span class=\"person\">Brian Greene</span>, físico de cuerdas y divulgador, abre *The Hidden Reality* con esa lección. Anuncia un recorrido accesible hacia una posibilidad que antes parecía ciencia ficción: que nuestro universo no sea el único.",
        },
        {
          type: 'paragraph',
          html: "El libro no asume dominio previo de relatividad o cuántica e introduce lo necesario sobre la marcha. Tampoco pretende convencer de que vivimos en un multiverso, porque ningún experimento lo ha establecido. Su objetivo es trazar con claridad la cadena de razonamientos que lleva a considerar nueve variedades de realidades paralelas.",
        },
        {
          type: 'paragraph',
          html: "Greene advierte que algunos tramos finales de capítulos son más técnicos, pero el lector puede saltarlos sin perder continuidad. Las notas al final profundizan para quien tenga formación matemática. El tono es de exploración honesta: especulación informada, no fantasía descontrolada.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">física moderna</span> empuja hacia universos paralelos, y el libro mapea ese camino sin afirmar que ya hayamos llegado a la prueba definitiva.",
        },
        {
          type: 'paragraph',
          html: "Antes de recorrer cada ruta, Greene aclara qué significa hoy la palabra «universo» y por qué nueve caminos distintos convergen en lo paralelo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Los límites de la realidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la palabra «universo» ya no basta para nombrar todo lo real? De niño, <span class=\"person\">Greene</span> veía en dos espejos enfrentados un corredor infinito de reflexiones. Esa imagen infantil prefigura un tema central de la física teórica: lo que llamamos universo puede ser solo una parte de algo mucho mayor.",
        },
        {
          type: 'paragraph',
          html: "Antaño «universo» significaba «todo lo que existe». Desarrollos de relatividad, cuántica, cosmología y computación han matizado el término. A veces denota lo accesible a la observación. A veces denota un miembro entre muchos. Greene recorrerá nueve variantes del <span class=\"term\">multiverso</span> (la idea de que existen muchos universos paralelos).",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">mecánica cuántica</span> (la teoría de partículas y probabilidades a escala microscópica) predice resultados posibles, pero no explica por qué vemos uno solo. Una respuesta temprana, <span class=\"term\">Many Worlds</span> (la interpretación de que cada medición abre ramas paralelas), propone que todos los resultados ocurren en universos separados. Greene anticipa también el multiverso acolchado y el inflacionario. Ninguno está confirmado, pero todos emergen de matemáticas construidas para explicar datos convencionales.",
        },
        {
          type: 'paragraph',
          html: "Algunos ven en el multiverso una humillación cósmica. Greene responde que el valor está en la profundidad del entendimiento alcanzado. Hemos avanzado mucho desde un punto de vista aparentemente insignificante en el cosmos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Reflexión vs realidad",
              "description": "Los espejos infantiles prefiguran copias paralelas separadas por distancia o lógica.",
              "icon": "🪞"
            },
            {
              "title": "Multiverso",
              "description": "Familia de propuestas según las cuales nuestra región observable no agota la realidad.",
              "icon": "🌌"
            },
            {
              "title": "Many Worlds",
              "description": "Interpretación cuántica en la que cada medición abre ramas paralelas incoherentes.",
              "icon": "⚛️"
            }
          ],
        },
        {
          type: 'key',
          html: "Nueve caminos teóricos distintos convergen en universos paralelos. Ninguno está probado, pero todos nacen de física establecida llevada al límite.",
        },
        {
          type: 'paragraph',
          html: "La primera ruta concreta pregunta qué pasa si el espacio no tiene fin: entonces deben existir copias lejanas de nosotros mismos.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Gemelos sin fin",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un espacio infinito obligarnos a existir otra vez, muy lejos? Si el cosmos no tiene fin, más allá de nuestro <span class=\"term\">horizonte cósmico</span> (el límite de la luz que alcanzamos) deben existir parches iguales al nuestro.",
        },
        {
          type: 'paragraph',
          html: "Entonces habría copias tuyas leyendo este resumen, y variantes casi iguales o radicalmente distintas.",
        },
        {
          type: 'paragraph',
          html: "Greene repasa cosmología básica. Lemaître mostró con la relatividad general de Einstein que el universo puede expandirse. Friedmann lo formalizó matemáticamente. Hubble lo confirmó observacionalmente en <span class=\"num\">1929</span>. El <span class=\"term\">principio cosmológico</span> (la suposición de que el cosmos es homogéneo a gran escala) simplifica el análisis.",
        },
        {
          type: 'paragraph',
          html: "Observaciones modernas favorecen un universo espacialmente plano. En un espacio infinito, parches del tamaño del horizonte (~<span class=\"num\">41 mil millones</span> de años luz de radio) no se han influido mutuamente. El principio de incertidumbre limita las configuraciones microscópicas distintas por parche a un número finito gigantesco (~10^(10^122)). Por eso, en un cosmos infinito, las repeticiones son inevitables.",
        },
        {
          type: 'paragraph',
          html: "Greene asume que la disposición de partículas fija mental y materialmente un individuo. Cada decisión ramifica en algún parche lejano. La objeción más convincente al multiverso acolchado sería un universo finito demasiado pequeño. La inflación, en el capítulo siguiente, refuerza el escenario infinito.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~13.7 mil millones de años",
              "label": "Edad del universo"
            },
            {
              "value": "~41 mil millones de años luz",
              "label": "Radio del horizonte observable"
            },
            {
              "value": "~10^(10^122)",
              "label": "Configuraciones distintas por parche cósmico"
            }
          ],
        },
        {
          type: 'key',
          html: "Espacio infinito y configuraciones finitas por horizonte implican copias infinitas de cada arreglo de partículas, incluidos tú y tu entorno.",
        },
        {
          type: 'paragraph',
          html: "Si el espacio infinito parece especulativo, la inflación cósmica ofrece un mecanismo concreto para generarlo y llenarlo de burbujas-universo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Eternidad e infinito",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el cielo entero tiene casi la misma temperatura si regiones opuestas no tuvieron tiempo de igualarse? El <span class=\"term\">fondo cósmico de microondas</span> (la radiación remanente del universo caliente primordial, llamado CMB) es uniforme hasta ~cuatro decimales. En el big bang estándar, eso plantea el <span class=\"term\">problema del horizonte</span> (la dificultad de explicar esa uniformidad sin contacto previo entre regiones lejanas).",
        },
        {
          type: 'paragraph',
          html: "Alan Guth propuso en <span class=\"num\">1979</span> la <span class=\"term\">inflación</span> (una fase de expansión ultra-rápida del universo temprano). Un campo hipotético llamado inflatón genera gravedad repulsiva con energía y presión negativa. Linde, Steinhardt y Albrecht refinaron la idea. Gamow, Alpher y Herman habían predicho el CMB. Penzias y Wilson lo detectaron en <span class=\"num\">1965</span>.",
        },
        {
          type: 'paragraph',
          html: "La inflación eterna ocurre cuando el volumen que aún infla crece más rápido que el que «cae» del plateau del inflatón. Eso produce un «queso suizo» cósmico de burbujas que dejan de inflar y se enfrían en universos como el nuestro. Cada burbuja puede ser internamente infinita. Desde fuera parece finita, pero desde dentro el espacio es infinito. Entonces reintroduce el multiverso acolchado dentro del inflacionario.",
        },
        {
          type: 'paragraph',
          html: "Las fluctuaciones cuánticas del inflatón, estiradas por la expansión, imprimen las manchas del CMB (~milésima de grado). Smoot y Mather recibieron el Nobel en <span class=\"num\">2006</span> por medirlas con precisión. Campos Higgs distintos en otras burbujas cambiarían masas y fuerzas, haciendo muchos universos inhóspitos.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1940s",
              "text": "Gamow y Alpher predicen CMB (~3 K)."
            },
            {
              "year": "1965",
              "text": "Penzias/Wilson detectan microondas isotrópicas."
            },
            {
              "year": "1979–1980s",
              "text": "Guth, Linde, Steinhardt: inflación y multiverso eterno."
            },
            {
              "year": "2006",
              "text": "Nobel por mapas de temperatura del CMB."
            }
          ],
        },
        {
          type: 'key',
          html: "La inflación eterna genera burbujas-universo separadas causalmente. Dentro de cada una, el espacio puede ser infinito y repetir el multiverso acolchado.",
        },
        {
          type: 'paragraph',
          html: "Para entender por qué surgen branas, paisajes y hologramas, Greene primero recorre el intento de unificar gravedad y cuántica en la teoría de cuerdas.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Unificar las leyes de la naturaleza",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la gravedad resiste unirse al resto de la física? <span class=\"person\">Einstein</span> soñó con unificar gravedad y electromagnetismo. La física del siglo XX unificó fuerzas nucleares y electromagnética con campos cuánticos. Al mezclar gravedad y cuántica las ecuaciones divergen y arrojan probabilidades infinitas.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría de cuerdas</span> (la propuesta de que las partículas son filamentos vibrantes, no puntos) reemplaza puntos por cuerdas de escala de Planck (~<span class=\"num\">10^-33</span> cm). Un patrón de vibración equivale a una partícula. Incluye naturalmente el <span class=\"term\">gravitón</span> (la partícula hipotética que transporta la gravedad). Requiere <span class=\"num\">10</span> dimensiones espaciales enrolladas en formas Calabi-Yau.",
        },
        {
          type: 'paragraph',
          html: "El logro central es fusionar relatividad general y cuántica. Pero explicar propiedades concretas de partículas sigue abierto porque hay muchísimas formas Calabi-Yau sin criterio único. A baja energía, las cuerdas parecen puntos. Experimentos en el LHC, la gravedad a submilímetro, las ondas gravitacionales o el CMB podrían dar pistas indirectas. Ninguna prueba definitiva existe aún.",
        },
        {
          type: 'paragraph',
          html: "Las cuerdas tamea singularidades donde la relatividad clásica falla. La entropía de agujeros negros, calculada por Strominger y Vafa, coincide con Bekenstein-Hawking. La teoría es excelente en gravedad cuántica y unificación. Sigue indeterminada en predicciones experimentales y propiedades de partículas.",
        },
        {
          type: 'list',
          items: [
            "**Planck** — Escala ~10^-33 cm donde gravedad y cuántica chocan; tamaño típico de una cuerda.",
            "**Calabi-Yau** — Formas compactas de dimensiones extra que dictan el «menú» de partículas.",
            "**Dualidad** — Distintas descripciones matemáticas de la misma física; clave en capítulo 5."
          ],
        },
        {
          type: 'key',
          html: "Las cuerdas unifican gravedad y cuántica, pero la falta de una forma extra-dimensional única impide predicciones numéricas definitivas de las partículas.",
        },
        {
          type: 'paragraph',
          html: "Cuando los métodos perturbativos fallaron, las dualidades revelaron que nuestro universo podría ser una rebanada flotando en dimensiones extra.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Universos flotantes en dimensiones cercanas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede nuestro universo ser solo una rebanada en dimensiones ocultas? Métodos perturbativos en cuerdas ocultaron física esencial hasta mediados de los <span class=\"num\">1990</span>. Entonces <span class=\"person\">Edward Witten</span> mostró que cinco formulaciones de supercuerdas son aspectos de una <span class=\"term\">M-teoría</span> (la propuesta unificadora en once dimensiones) unida por dualidades.",
        },
        {
          type: 'paragraph',
          html: "Surgen <span class=\"term\">branas</span> (membranas extendidas en varias dimensiones). Nuestra experiencia de tres dimensiones espaciales podría ser una 3-brane flotando en un bulk de dimensiones extra. Las cuerdas abiertas terminan en branas, la materia queda confinada, pero la gravedad se propaga por el bulk. Eso explicaría la debilidad aparente de la gravedad.",
        },
        {
          type: 'paragraph',
          html: "Los choques entre branas paralelas, el «big splat» de <span class=\"person\">Paul Steinhardt</span> y colaboradores, reinician un universo cíclico cada ~<span class=\"num\">10^12</span> años. Ese modelo evita el problema entropico de ciclos clásicos al diluir entropía en branas en expansión. Predice pocas ondas gravitacionales primordiales fuertes, a diferencia de muchos modelos inflacionarios.",
        },
        {
          type: 'paragraph',
          html: "Los campos flux multiplican las formas posibles del vacío. Eso abre unas ~<span class=\"num\">10^500</span> «atuendos» para dimensiones extra. Agudiza el problema de selección y abre la puerta al multiverso paisaje del capítulo 6.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Braneworld",
              "description": "Universo = rebanada en dimensiones extra; luz confinada, gravedad libre.",
              "icon": "🍞"
            },
            {
              "title": "Multiverso cíclico",
              "description": "Branas colisionan, rebotan y reinician eras; paralelos en el tiempo.",
              "icon": "🔄"
            },
            {
              "title": "Flux",
              "description": "Campos que visten Calabi-Yau y multiplican vacíos posibles.",
              "icon": "🧲"
            }
          ],
        },
        {
          type: 'key',
          html: "Branas y dualidades revelan universos paralelos separados por dimensiones extra o por ciclos temporales de colisiones cósmicas.",
        },
        {
          type: 'paragraph',
          html: "Si hay millones de formas posibles del vacío, la pregunta urgente pasa a ser por qué la constante cosmológica medida es tan minúscula.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Nueva luz sobre una vieja constante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la expansión del universo acelera con una fuerza tan débil? En <span class=\"num\">1998</span>, supernovas tipo Ia lejanas mostraron aceleración desde hace ~<span class=\"num\">7 mil millones</span> de años. La <span class=\"term\">energía oscura</span> (energía del vacío repulsiva) domina el universo. La constante cosmológica Λ mide ~<span class=\"num\">10^-123</span> en unidades de Planck.",
        },
        {
          type: 'paragraph',
          html: "Einstein introdujo Λ en <span class=\"num\">1917</span> para un cosmos estático, pero Hubble lo hizo prescindible. La cuántica predice energía del vacío enorme, unas 10^120 veces mayor. Simetrías como la supersimetría intentaban cancelarla a cero. <span class=\"person\">Steven Weinberg</span> sugirió en <span class=\"num\">1987</span> un valor pequeño vía razonamiento antrópico: en un multiverso, solo burbujas con Λ baja forman galaxias y vida.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">paisaje de cuerdas</span> (el conjunto de ~10^500 vacíos posibles) combinado con inflación eterna llena el cosmos de burbujas anidadas. Eso define el multiverso paisaje. El «model building» busca vacíos parecidos al nuestro, aunque aún no hay réplica exacta.",
        },
        {
          type: 'paragraph',
          html: "Greene pregunta si esto es ciencia. Explica Λ donde la física de vacío falla, pero invoca entidades inaccesibles. Comparar infinitos de universos es difícil. El capítulo siguiente analiza criterios de legitimidad.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~10^-123",
              "label": "Constante cosmológica (unidades Planck)"
            },
            {
              "value": "~10^500",
              "label": "Vacíos posibles en el paisaje de cuerdas"
            },
            {
              "value": "~73%",
              "label": "Fracción de energía oscura en densidad crítica"
            }
          ],
        },
        {
          type: 'key',
          html: "Un Λ minúsculo pero no nulo encaja con selección antrópica en un paisaje de ~10^500 vacíos generados por inflación eterna y cuerdas.",
        },
        {
          type: 'paragraph',
          html: "Antes de cerrar con cuántica e información, Greene evalúa si invocar multiversos puede seguir siendo ciencia rigurosa.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Ciencia y el multiverso",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede ser científico hablar de universos que jamás visitaremos? El multiverso paisaje divide a la comunidad. Para algunos es física profunda, para otros metafísica disfrazada. El debate toca el «alma de la ciencia»: inferencia, explicación, predicción y falsabilidad cuando hay universos inobservables.",
        },
        {
          type: 'paragraph',
          html: "Greene distingue multiversos que surgen por extensión espacial de los definidos por ramas cuánticas o simulación. Entre los criterios útiles está preguntarse si la teoría base está anclada en datos. También si el multiverso es predicción o añadido oportunista. Y si hay consecuencias estadísticas testables en el CMB, en Λ o en ondas primordiales.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">principio antrópico</span> (la advertencia de que solo medimos parámetros compatibles con observadores) alerta contra explicar «coincidencias» sin contar el sesgo de selección. Eso requiere multiverso vasto y variación real de constantes.",
        },
        {
          type: 'paragraph',
          html: "Comparar teorías con multiversos infinitos exige reglas de conteo sobre universos. Sin ellas, las probabilidades antrópicas son ambiguas. Aun así, Greene defiende que hablar de multiverso puede ser ciencia con inferencia indirecta, no mera evasión.",
        },
        {
          type: 'key',
          html: "Multiversos pueden ser científicos si emergen de teorías contrastadas y dejan huellas estadísticas o indirectas, aunque no se visiten otros universos.",
        },
        {
          type: 'paragraph',
          html: "Una ruta histórica distinta al multiverso viene de la cuántica misma: si Schrödinger gobierna también a los observadores, cada medición abre ramas paralelas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Los muchos mundos cuánticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la cuántica predice probabilidades pero nos muestra un solo resultado? El experimento de doble rendija muestra interferencia: cada electrón «siente» ambas rendijas. <span class=\"person\">Max Born</span> interpretó la onda como probabilidad, y la medición parece colapsar la onda a un resultado.",
        },
        {
          type: 'paragraph',
          html: "La interpretación de <span class=\"term\">Copenhague</span> (la lectura estándar que suspende Schrödinger al medir) lo hace de forma ad hoc y mal definida. En <span class=\"num\">1957</span>, <span class=\"person\">Hugh Everett</span> propuso en cambio que la ecuación es lineal y universal. Aparato, observador y sistema entran en superposición. Cuando se miden posiciones en superposición, no hay colapso: las ramas coexisten, cada una con un resultado distinto. Eso forma el <span class=\"term\">Multiverso Cuántico</span> (el conjunto de ramas paralelas incoherentes entre sí).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Bryce DeWitt</span> popularizó la idea en los <span class=\"num\">1970</span>. Aún persisten problemas sobre el origen de probabilidades en Many Worlds. La decoherencia suprime interferencia entre ramas, pero no elige una por sí sola. Para objetos macroscópicos las ondas son ultra-estrechas y recuperan Newton. En lo micro la indeterminación domina.",
        },
        {
          type: 'paragraph',
          html: "Everett pagó el precio académico cuando su tesis fue recortada por <span class=\"person\">John Wheeler</span> tras crítica de <span class=\"person\">Niels Bohr</span>. La interpretación sigue viva entre quienes «toman en serio la ecuación» como Einstein pidió con Maxwell y Schrödinger.",
        },
        {
          type: 'quote',
          text: "Seguir la matemática cuántica sin colapso ad hoc implica que cada resultado posible persiste en una rama paralela del multiverso.",
          attribution: "Hugh Everett (parafraseado)",
        },
        {
          type: 'key',
          html: "Si Schrödinger gobierna también a observadores, cada medición divide la realidad en ramas paralelas que no se comunican: Many Worlds.",
        },
        {
          type: 'paragraph',
          html: "Otra consecuencia de unir cuántica y gravedad aparece en los agujeros negros: su entropía escala con el área, no con el volumen.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Agujeros negros y hologramas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un agujero negro guardar toda su información en una superficie bidimensional? <span class=\"person\">John Wheeler</span> apostó por «información» como núcleo de la física. Los agujeros negros desafiaron la <span class=\"term\">Segunda Ley</span> (el principio termodinámico de que la entropía total tiende a aumentar): ¿entropía que desaparece al caer dentro? <span class=\"person\">Jacob Bekenstein</span> propuso que el agujero almacena entropía proporcional al área del horizonte, no al volumen.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Stephen Hawking</span> calculó radiación térmica de agujeros negros con temperatura inversamente proporcional a la masa. La entropía S es proporcional al área, en células de Planck en el horizonte. Strominger y Vafa contaron estados microscópicos con cuerdas, confirmando la fórmula. La entropía mide información oculta sobre microestados compatibles con macroobservables.",
        },
        {
          type: 'paragraph',
          html: "La dualidad interior y exterior muestra que quien cae libremente atraviesa el horizonte sin drama. Un observador lejano ve radiación térmica e «incineración» en el horizonte. Ambas descripciones son complementarias. El <span class=\"term\">principio holográfico</span> (la idea de codificar la física tridimensional en una superficie bidimensional) sugiere que la información de un volumen cabe en su borde. AdS/CFT, de <span class=\"person\">Juan Maldacena</span>, es el ejemplo riguroso.",
        },
        {
          type: 'paragraph',
          html: "Greene llama al multiverso holográfico la variante más extraña. Es la propuesta de que nuestra experiencia es proyección de procesos en un universo paralelo de menor dimensión. Hay evidencia fuerte en anti-de Sitter, pero la extensión a cosmología real sigue en desarrollo.",
        },
        {
          type: 'key',
          html: "La entropía de agujeros negros escala con el área, no con el volumen: pista de que la realidad puede ser holográfica, codificada en un borde paralelo.",
        },
        {
          type: 'paragraph',
          html: "Si la información basta para describir un cosmos, la pregunta final es si civilizaciones avanzadas podrían crear o simular universos enteros.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Universos, computadoras y matemática",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Podrían civilizaciones avanzadas crear universos enteros? La inflación sugiere una semilla de ~<span class=\"num\">10 gramos</span> de inflatón en ~<span class=\"num\">10^-26 cm</span>. Guth y Farhi encontraron que haría falta un <span class=\"term\">agujero blanco</span> (el reverso temporal de un agujero negro) para arrancar la expansión. Ese obstáculo parece prácticamente insuperable.",
        },
        {
          type: 'paragraph',
          html: "Crear burbujas inflacionarias aisladas dejaría solo un agujero negro aparente en el laboratorio. Eso haría imposible verificar el hijo cósmico. Es más plausible considerar <span class=\"term\">universos simulados</span> (realidades generadas por cómputo con suficiente potencia). El functionalismo sostiene que la mente es procesamiento de información y que no importa si el sustrato es carbono o silicio.",
        },
        {
          type: 'paragraph',
          html: "El filósofo <span class=\"person\">Nick Bostrom</span> argumenta que, si las simulaciones conscientes son baratas, la mayoría de seres sintientes serían simulados. Eso sugiere estadísticamente que podríamos estar en uno. Detectarlo sería casi imposible salvo fallos de malla.",
        },
        {
          type: 'paragraph',
          html: "El físico <span class=\"person\">Max Tegmark</span> lleva al extremo la fe en matemáticas. Postula que toda estructura matemática consistente existe físicamente. En la Biblioteca de Babel o en el experimento mental de Nozick, la realidad sería matemática realizada.",
        },
        {
          type: 'list',
          items: [
            "**Semilla inflacionaria** — ~10 g, densidad extrema; gravedad repulsiva alimenta energía de materia.",
            "**Argumento de Bostrom** — Muchas simulaciones ⇒ probabilidad alta de ser simulado.",
            "**Ultimate multiverso** — Cada ecuación consistente = un cosmos."
          ],
        },
        {
          type: 'key',
          html: "Crear universos «reales» parece bloqueado. Simularlos o postular todos los mundos matemáticos posibles extiende el multiverso al software y a la física platónica.",
        },
        {
          type: 'paragraph',
          html: "Greene cierra el recorrido preguntando qué nos enseña la historia de la física sobre confiar en las matemáticas hasta el final.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Los límites de la indagación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Debemos creer en multiversos solo porque las ecuaciones los sugieren? <span class=\"person\">Isaac Newton</span> comparó su ciencia con jugar en la orilla, y la física posterior confirmó que lo profundo supera la intuición. Greene resume nueve multiversos y admite que ninguno está verificado. El veredicto requiere más teoría, datos y observación.",
        },
        {
          type: 'paragraph',
          html: "¿Es copernicano el patrón? Cada ampliación del cosmos nos descentró, y el multiverso sería la última vuelta. No fue buscado a propósito sino encontrado al seguir ecuaciones. Condiciones iniciales, constantes y hasta leyes podrían ser estadísticas en lugar de explicables únicamente desde primeros principios.",
        },
        {
          type: 'paragraph',
          html: "Confiar en matemáticas funcionó con Maxwell y Einstein. La relatividad especial emergió de ecuaciones de Maxwell. Einstein rechazó agujeros negros, expansión y a veces sus propias implicaciones. <span class=\"person\">Hugh Everett</span> sí siguió Schrödinger hasta Many Worlds. La lección es que saber qué ecuaciones tomar «en serio» es arte y riesgo.",
        },
        {
          type: 'paragraph',
          html: "Quedan preguntas abiertas sobre si el patrón copernicano es fundamental y si la matemática descubre o inventa. Greene cierra invitando a explorar sin miedo. La realidad puede ser más rica que la experiencia cotidiana, y entenderla sigue valiendo la pena.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Copernicano",
              "description": "Cada descubrimiento nos quita del centro; multiverso continúa la serie.",
              "icon": "🧭"
            },
            {
              "title": "Matemática",
              "description": "Historia muestra que ecuaciones serias suelen revelar realidad oculta.",
              "icon": "📐"
            },
            {
              "title": "Juicio pendiente",
              "description": "Nueve multiversos, cero confirmación experimental directa hasta hoy.",
              "icon": "❓"
            }
          ],
        },
        {
          type: 'key',
          html: "Ningún multiverso está probado, pero seguir las matemáticas de la física moderna ha reconfigurado el cosmos antes y puede hacerlo otra vez.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Multiverso acolchado",
    "description": "Repeticiones por espacio infinito y configuraciones finitas por horizonte."
  },
  {
    "title": "Multiverso inflacionario",
    "description": "Burbujas eternas separadas más rápido que la luz; interiores posiblemente infinitos."
  },
  {
    "title": "Braneworld",
    "description": "Universo en una brana; gravedad se filtra por dimensiones extra."
  },
  {
    "title": "Multiverso paisaje",
    "description": "~10^500 vacíos de cuerdas + inflación + túnel cuántico."
  },
  {
    "title": "Many Worlds",
    "description": "Schrödinger lineal sin colapso → ramas cuánticas paralelas."
  },
  {
    "title": "Principio holográfico",
    "description": "Información de volumen codificada en superficie boundary."
  },
  {
    "title": "Constante cosmológica",
    "description": "Energía del vacío con gravedad repulsiva; medida ~10^-123 (Planck)."
  },
  {
    "title": "Principio antrópico",
    "description": "Observadores solo miden parámetros compatibles con su existencia."
  },
  {
    "title": "Entropía / información",
    "description": "Microestados ocultos; en agujeros negros, escala con área del horizonte."
  },
  {
    "title": "Inflatón",
    "description": "Campo que impulsa inflación con presión negativa y energía de vacío."
  }
],
  chronology: [
  {
    "year": "1915",
    "text": "Einstein publica relatividad general."
  },
  {
    "year": "1917",
    "text": "Einstein introduce constante cosmológica; Lemaître propone expansión."
  },
  {
    "year": "1927",
    "text": "Solvay: Lemaître vs Einstein sobre universo dinámico."
  },
  {
    "year": "1929",
    "text": "Hubble observa recesión galáctica."
  },
  {
    "year": "1957",
    "text": "Everett: interpretación Many Worlds (tesis Princeton)."
  },
  {
    "year": "1965",
    "text": "Penzias/Wilson detectan CMB; inflación aún no formulada."
  },
  {
    "year": "1970s",
    "text": "Bekenstein/Hawking: entropía y radiación de agujeros negros."
  },
  {
    "year": "1979–1980s",
    "text": "Guth, Linde, Steinhardt: inflación cosmológica."
  },
  {
    "year": "1980s",
    "text": "Revolución supercuerdas (Green, Schwarz)."
  },
  {
    "year": "1995",
    "text": "Witten: dualidades, branas, M-teoría."
  },
  {
    "year": "1998",
    "text": "Supernovas Ia: expansión acelerada y energía oscura."
  },
  {
    "year": "2006",
    "text": "Nobel a Smoot/Mather por anisotropías del CMB."
  },
  {
    "year": "2011",
    "text": "Publicación de *The Hidden Reality*."
  }
],
  figures: [
  {
    "name": "Brian Greene",
    "role": "Autor; físico de cuerdas y divulgador"
  },
  {
    "name": "Albert Einstein",
    "role": "Relatividad general; constante cosmológica"
  },
  {
    "name": "Georges Lemaître",
    "role": "Expansión y «átomo primitivo»"
  },
  {
    "name": "Edwin Hubble",
    "role": "Ley de recesión galáctica"
  },
  {
    "name": "Alan Guth",
    "role": "Inflación cosmológica"
  },
  {
    "name": "Andrei Linde",
    "role": "Inflación caótica y multiverso eterno"
  },
  {
    "name": "Edward Witten",
    "role": "M-teoría y dualidades"
  },
  {
    "name": "Saul Perlmutter / Brian Schmidt",
    "role": "Aceleración cósmica (1998)"
  },
  {
    "name": "Steven Weinberg",
    "role": "Antrópica y constante cosmológica"
  },
  {
    "name": "Hugh Everett",
    "role": "Many Worlds (1957)"
  },
  {
    "name": "Jacob Bekenstein / Stephen Hawking",
    "role": "Entropía y radiación de agujeros negros"
  },
  {
    "name": "Juan Maldacena",
    "role": "AdS/CFT / holografía"
  },
  {
    "name": "Paul Steinhardt",
    "role": "Cosmología cíclica de branas"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Seguir las matemáticas de la física moderna hasta sus últimas consecuencias lleva una y otra vez a universos paralelos, aunque ninguno esté aún demostrado.",
  "La pregunta decisiva no es si nos gusta la idea, sino si las teorías que explican nuestros datos la exigen.",
  "Confiar en ecuaciones ha reconfigurado antes el cosmos, y hacerlo de nuevo exige humildad y rigor.",
  "Medir importa, pero también saber cuándo una explicación indirecta es la única disponible.",
  "Al final, explorar lo extremo nos recuerda que la experiencia cotidiana no es juez suficiente de lo real."
],
    highlight: "La realidad oculta puede ser más vasta que todo lo que vemos: multiversos que surgen de la lógica, no del capricho.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Brian Greene",
    line2: "\"The Hidden Reality\" · Knopf · 2011",
  },
}
