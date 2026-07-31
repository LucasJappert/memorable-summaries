import type { BookSummary } from '../types/book'

export const emperorsNewMind: BookSummary = {
  slug: "emperors-new-mind",
  meta: {
    title: "The Emperor's New Mind: Concerning Computers, Minds, and the Laws of Physics",
    subtitle: "¿Puede pensar una máquina? ¿Qué física falta para explicar la conciencia?",
    author: "Roger Penrose",
    meta: [
      "📖 1989 · Oxford University Press (ed. popular 1999)",
      "✍️ Premio Rhône-Poulenc de divulgación científica (1990)",
    ],
    titleEs: "La mente nueva del emperador: Sobre computadoras, mentes y las leyes de la física",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Diez años después (edición 1999)"
  },
  {
    "id": "prologo",
    "num": "—",
    "label": "La inauguración de Ultronic"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "¿Puede una computadora tener mente?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Algoritmos y máquinas de Turing"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Matemáticas y realidad"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Verdad, demostración e intuición"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El mundo clásico"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Magia y misterio cuánticos"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Cosmología y la flecha del tiempo"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "En busca de la gravedad cuántica"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Cerebros reales y cerebros modelo"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "¿Dónde reside la física de la mente?"
  },
  {
    "id": "epilogo",
    "num": "—",
    "label": "La risa en el auditorio"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología de hitos del libro"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Diez años después (edición 1999)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Sigue vigente la tesis del libro una década después? En el prefacio de <span class=\"num\">1999</span>, el físico matemático <span class=\"person\">Roger Penrose</span> confirma que no cambió de opinión. La <span class=\"term\">conciencia</span> (la experiencia subjetiva de sentir y comprender) no cabe en la física actual ni en la computación pura.",
        },
        {
          type: 'paragraph',
          html: "El argumento tiene dos hilos. Primero, los teoremas de Gödel y Turing muestran límites de cualquier modelo puramente computacional. El pensamiento matemático, y por extensión el consciente, los traspasa. Segundo, falta física entre la escala cuántica y la macroscópica. Ahí debería residir la ley que explique la mente.",
        },
        {
          type: 'paragraph',
          html: "Por eso, Penrose ilustra el primer hilo con el <span class=\"term\">teorema de Goodstein</span> (una proposición aritmética verdadera que la inducción sola no demuestra). Comprender su verdad exige algo más que seguir reglas mecánicas. Ese «algo», la comprensión, parece ligado a la conciencia y esencialmente no computacional.",
        },
        {
          type: 'key',
          html: "La comprensión matemática trasciende cualquier conjunto fijo de reglas. La conciencia exige física nueva en el puente entre lo cuántico y lo clásico.",
        },
        {
          type: 'paragraph',
          html: "Antes de los teoremas, Penrose plantea la pregunta en una fábula: ¿qué pasaría si una máquina superara al cerebro humano?",
        },
      ],
    },
    {
      id: "prologo",
      num: "—",
      title: "La inauguración de Ultronic",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando una supercomputadora parece más capaz que cualquier cerebro? Una fábula abre el libro. El presidente Pollo inaugura Ultronic, una supercomputadora ficticia con más de <span class=\"num\">10¹⁷</span> unidades lógicas. Su padre, activista de la «Gran Junta de Conciencia Psíquica», intentó volarla.",
        },
        {
          type: 'paragraph',
          html: "El niño Adam, criado casi por máquinas, se atreve a hacer la primera pregunta. Entonces la escena anticipa el conflicto del libro: cuando una máquina supera al cerebro en capacidad, ¿debemos atribuirle mente, sentimientos y responsabilidad moral?",
        },
        {
          type: 'paragraph',
          html: "El título alude al cuento de Andersen. Creer en la «mente» de la máquina sería como admirar el traje invisible del emperador.",
        },
        {
          type: 'key',
          html: "La pregunta de Adam al final del prólogo, «¿cómo se siente ser tú?», reaparecerá en el epílogo como prueba de que la computación por sí sola no basta.",
        },
        {
          type: 'paragraph',
          html: "Esa pregunta exige definir qué entendemos por «mente» y qué puede hacer realmente una computadora.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Puede una computadora tener mente?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hemos cedido la prerrogativa del pensamiento a las máquinas? El avance de la informática plantea esa inquietud. Penrose no busca adivinar respuestas definitivas. Quiere mostrar que nuestra física actual es insuficiente para explicar la mente.",
        },
        {
          type: 'paragraph',
          html: "La mayoría de físicos cree que las leyes del cerebro ya están resueltas a escala humana. Penrose sostiene lo contrario. Hay un vacío enorme en nuestra comprensión física justo «detrás de nuestras narices». Sorprendentemente, los agujeros negros y el big bang sí importan para la mente.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">prueba de Turing</span> (un diálogo ciego donde la máquina debe parecer humana) propone un criterio operativo de «pensamiento». Penrose la acepta como aproximación. También advierte que una teoría futura de la conciencia podría invalidarla.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">IA fuerte</span> (la tesis de que la mente es solo software) identifica estados mentales con algoritmos. Un termostato y un cerebro serían igualmente ejecución de procedimientos. John Searle refuta esto con la <span class=\"term\">habitación china</span> (manipular símbolos sin comprenderlos). Penrose concede fuerza al argumento, pero critica a Searle por aceptar que «todo es una computadora digital».",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "IA fuerte",
              "description": "Los estados mentales son aspectos de algoritmos; el hardware es irrelevante.",
              "icon": "🤖"
            },
            {
              "title": "Habitación china",
              "description": "Seguir reglas sintácticas no produce comprensión ni intencionalidad.",
              "icon": "🏠"
            },
            {
              "title": "Teletransporte",
              "description": "El patrón importa, no los átomos; la IA fuerte extiende esto al «software» mental.",
              "icon": "📡"
            }
          ],
        },
        {
          type: 'key',
          html: "La creencia de que «todo es computadora digital» ignora un vacío físico crucial justo «detrás de nuestras narices».",
        },
        {
          type: 'paragraph',
          html: "Para evaluar esa creencia hace falta precisar qué es un algoritmo y qué límites tiene la computación mecánica.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Algoritmos y máquinas de Turing",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué significa «computar» con rigor matemático? Un <span class=\"term\">algoritmo</span> (un procedimiento finito paso a paso) prescribe en cada etapa la acción siguiente. El algoritmo de Euclides (~<span class=\"num\">300 a. C.</span>) para el máximo común divisor es el ejemplo clásico.",
        },
        {
          type: 'paragraph',
          html: "Alan Turing formalizó la noción de procedimiento mecánico con la <span class=\"term\">máquina de Turing</span> (un modelo abstracto con cinta de símbolos y estados internos). Demostró que existen problemas bien definidos que ninguna máquina resuelve. Uno es decidir si otra máquina se detendrá: el <span class=\"term\">problema de la detención</span> (imposible de resolver con un algoritmo general).",
        },
        {
          type: 'paragraph',
          html: "Hay ironía en que Turing modeló el cerebro como «máquina» al definir lo mecánico. Aun así demostró límites absolutos a lo algorítmico. Eso abre un posible resquicio para la mente.",
        },
        {
          type: 'paragraph',
          html: "El capítulo «cómo superar un algoritmo» anticipa el argumento de Gödel. Siempre que formalizamos parte de nuestra comprensión, podemos ver verdades que escapan a esa formalización.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tesis de Church-Turing",
              "description": "Toda computación efectiva equivale a una máquina de Turing.",
              "icon": "⚙️"
            },
            {
              "title": "Máquina universal",
              "description": "Puede emular cualquier otra MT; base teórica de la computación moderna.",
              "icon": "🖥️"
            }
          ],
        },
        {
          type: 'list',
          items: [
            "**Máquina de Turing** — Modelo abstracto de procedimiento mecánico con cinta y estados finitos.",
            "**Problema de la detención** — No existe algoritmo general que decida si una MT se detiene.",
            "**Máquina universal** — Puede emular cualquier otra MT; base teórica de la computación moderna."
          ],
        },
        {
          type: 'key',
          html: "Los límites de Gödel y Turing sugieren que el pensamiento humano no está acotado por ningún algoritmo fijo.",
        },
        {
          type: 'paragraph',
          html: "Esos límites cobran sentido cuando Penrose pregunta si la matemática describe una realidad más allá de lo computable.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Matemáticas y realidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la matemática ser «más real» que muchos objetos físicos? El capítulo abre con la fantasía de Tor'Bled-Nam. Es un paisaje infinitamente detallado generado por una regla simple: el <span class=\"term\">conjunto de Mandelbrot</span> (un fractal definido por una ecuación iterativa).",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">números reales</span> (decimales que incluyen irracionales como √2 o π) extienden a racionales e irracionales. Cantor demostró con el argumento diagonal que hay «más» reales que naturales. Los reales no son contables.",
        },
        {
          type: 'paragraph',
          html: "Penrose defiende una forma de <span class=\"term\">realismo platónico</span> (la idea de que las verdades matemáticas existen independientemente de nosotros). Los conceptos habitan un mundo ideal accesible por la inteligencia, no inventado arbitrariamente. Por eso, la pregunta «¿es recursivo el Mandelbrot?» conecta geometría fractal con límites de la computación.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Números computables",
              "description": "Los generables por algoritmo; la mayoría de los reales no lo son.",
              "icon": "🔢"
            },
            {
              "title": "Argumento diagonal",
              "description": "Prueba de Cantor de que los reales no se pueden listar uno a uno.",
              "icon": "📐"
            }
          ],
        },
        {
          type: 'key',
          html: "La matemática no computable sugiere que la realidad mental no cabe en el universo algorítmico de la IA fuerte.",
        },
        {
          type: 'paragraph',
          html: "Si la mente accede a verdades matemáticas, hay que explicar cómo conocemos la verdad más allá de la demostración formal.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Verdad, demostración e intuición",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo conocemos la verdad matemática? Hilbert soñó con un sistema formal completo y consistente para toda la aritmética. La paradoja de Russell (<span class=\"num\">1902</span>) mostró el colapso de la teoría ingenua de conjuntos. El conjunto de todos los conjuntos que no se contienen a sí mismos genera contradicción.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1931</span>, Kurt Gödel destruyó el programa de Hilbert. En cualquier sistema formal suficientemente potente y consistente existe una proposición G(P) verdadera pero indemostrable dentro del sistema. La consistencia del propio sistema tampoco es demostrable internamente.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">comprensión matemática</span> (el «insight» o intuición que ve la verdad) permite ver G(P) desde fuera del sistema. Eso no es un algoritmo ejecutándose dentro del formalismo. Penrose argumenta que la conciencia humana accede a verdades de forma similar.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Teorema de Gödel",
              "description": "Verdades aritméticas inaccesibles a la demostración formal interna.",
              "icon": "📐"
            },
            {
              "title": "Insight",
              "description": "Comprensión que no se reduce a aplicar reglas de un sistema.",
              "icon": "💡"
            },
            {
              "title": "Platonismo",
              "description": "Las verdades matemáticas existen independientemente de su formalización.",
              "icon": "🏛️"
            }
          ],
        },
        {
          type: 'key',
          html: "Si la mente solo fuera algoritmo, no podría ver la verdad de las proposiciones de Gödel que escapan al sistema.",
        },
        {
          type: 'paragraph',
          html: "Antes de la cuántica, Penrose examina si la física clásica ya bastaría para explicar la mente como autómata.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El mundo clásico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué tan sólida es la física «de todos los días»? Antes de la cuántica, Penrose clasifica las teorías en tres niveles. <span class=\"term\">SUPERB</span> (precisión fenomenal probada) agrupa las teorías más fiables. <span class=\"term\">USEFUL</span> (útiles pero incompletas) y TENTATIVE (sin apoyo experimental sólido) ocupan los otros dos escalones.",
        },
        {
          type: 'paragraph',
          html: "En SUPERB entran la geometría euclidiana, la mecánica de Newton, el electromagnetismo de Maxwell y las relatividades de Einstein. También la mecánica cuántica y la QED. La dinámica clásica es determinista: el futuro queda fijado por el pasado.",
        },
        {
          type: 'paragraph',
          html: "Galileo introdujo la inercia y la relatividad galileana. Newton unificó leyes de movimiento y gravitación universal. Maxwell añadió campos electromagnéticos ondulatorios.",
        },
        {
          type: 'paragraph',
          html: "¿Es la vida en el «mundo de billar» newtoniano computable? Penrose explora si la evolución de sistemas clásicos puede simularse algorítmicamente. La respuesta es matizada. Muchos sistemas son computables en principio, pero la no linealidad y el caos plantean dudas.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "~300 a. C.",
              "text": "Euclides: geometría y rigor axiomático."
            },
            {
              "year": "1687",
              "text": "Newton: *Principia* — dinámica y gravitación."
            },
            {
              "year": "1865",
              "text": "Maxwell: unificación electricidad, magnetismo y luz."
            },
            {
              "year": "1905",
              "text": "Einstein: relatividad especial; E = mc²."
            },
            {
              "year": "1915",
              "text": "Einstein: relatividad general — gravedad como curvatura del espacio-tiempo."
            }
          ],
        },
        {
          type: 'key',
          html: "Aunque la física clásica es determinista y en gran parte computable, eso no implica que la conciencia lo sea.",
        },
        {
          type: 'paragraph',
          html: "La cuántica introduce fenómenos que el mundo clásico no puede explicar y que podrían importar para la mente.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Magia y misterio cuánticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la física cuántica parece tan extraña? Nació de anomalías que la física clásica no podía explicar. Espectros atómicos discretos, catástrofe ultravioleta del cuerpo negro, inestabilidad del átomo de Rutherford. Planck (<span class=\"num\">1900</span>) introdujo cuantos de energía E = hν.",
        },
        {
          type: 'paragraph',
          html: "El experimento de las <span class=\"term\">dos rendijas</span> (dos aberturas por las que pasa un fotón) muestra interferencia. Un fotón parece pasar por ambas rendijas a la vez hasta que se «mide». La evolución unitaria U (ecuación de Schrödinger) es determinista.",
        },
        {
          type: 'paragraph',
          html: "La reducción <span class=\"term\">R</span> (el colapso probabilístico del estado al observar) marca el colapso al medir. El gato de Schrödinger expone el problema de la medición. ¿Cuándo ocurre R? ¿Se necesita un observador consciente?",
        },
        {
          type: 'paragraph',
          html: "Penrose rechaza el subjetivismo de Bohr y defiende realismo sobre el <span class=\"term\">estado cuántico</span> (la descripción matemática completa del sistema). Pero admite que la teoría actual es incompleta. Es un «parche» entre U y R.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Procedimiento U",
              "description": "Evolución determinista según Schrödinger.",
              "icon": "🌊"
            },
            {
              "title": "Procedimiento R",
              "description": "Colapso probabilístico al medir; origen del problema mente-materia.",
              "icon": "🎲"
            },
            {
              "title": "Dos rendijas",
              "description": "Superposición e interferencia; partícula y onda unificadas.",
              "icon": "🔬"
            }
          ],
        },
        {
          type: 'key',
          html: "La cuántica es precisa pero misteriosa: U y R no encajan en un marco coherente —y eso podría importar para la mente.",
        },
        {
          type: 'paragraph',
          html: "El misterio cuántico se entrelaza con otra asimetría profunda: por qué el tiempo solo avanza hacia el futuro.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Cosmología y la flecha del tiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué recordamos el pasado y no el futuro? Nuestra experiencia del <span class=\"term\">flujo del tiempo</span> (pasado fijo y futuro abierto) choca con ecuaciones casi reversibles. La relatividad elimina incluso un «ahora» absoluto. La simultaneidad depende del observador.",
        },
        {
          type: 'paragraph',
          html: "La segunda ley de la termodinámica introduce asimetría. La <span class=\"term\">entropía</span> (medida de desorden) de un sistema aislado crece. Un vaso que se rompe no se recompone espontáneamente. No por las leyes newtonianas, sino porque el orden coordinado de átomos es astronómicamente improbable.",
        },
        {
          type: 'paragraph',
          html: "El universo comenzó en un estado de entropía gravitacional extraordinariamente bajo. La <span class=\"term\">hipótesis de curvatura de Weyl</span> (WCH: curvatura de Weyl nula en el big bang) postula WEYL = 0 al origen. Los agujeros negros concentran entropía. Su evaporación por Hawking conecta gravedad, cuántica y termodinámica.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~10¹²³",
              "label": "Bits de «especialidad» del big bang (orden de fase)"
            },
            {
              "value": "h ~ 6,6×10⁻³⁴ J·s",
              "label": "Constante de Planck"
            }
          ],
        },
        {
          type: 'key',
          html: "La flecha del tiempo exige condiciones iniciales cósmicas extremas —no solo ecuaciones simétricas en el tiempo.",
        },
        {
          type: 'paragraph',
          html: "Esa asimetría cósmica sugiere que la gravedad debe modificar la mecánica cuántica, no al revés.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "En busca de la gravedad cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Debe la gravedad cambiar la cuántica en lugar de cuantizarse a ciegas? La mayoría de físicos cuantizan la relatividad general sin tocar la mecánica cuántica. Penrose invierte la prioridad. Los problemas de la QM (incompatibilidad de U y R) exigen que la gravedad de Einstein modifique la estructura cuántica.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">gravedad cuántica correcta</span> (unificación de gravedad y cuántica, abreviada CQG) debe ser <span class=\"term\">asimétrica en el tiempo</span> (con flecha temporal incorporada en las leyes). Debe unificar U con R.",
        },
        {
          type: 'paragraph',
          html: "La WCH no es mera «condición de frontera» inexplicable. Es tan precisa como las leyes dinámicas. La reducción R también es asimétrica. La probabilidad de detectar un fotón dado que la fuente emitió uno es ½. La probabilidad inversa no lo es.",
        },
        {
          type: 'paragraph',
          html: "El experimento de Hawking con una caja caliente ilustra cómo la gravedad podría forzar el colapso del estado cuántico. La escala relevante no es necesariamente el absurdamente pequeño <span class=\"term\">longitud de Planck</span> (<span class=\"num\">10⁻³⁵</span> m). Penrose propone un criterio gravitacional más plausible, desarrollado luego en *Sombras de la mente*.",
        },
        {
          type: 'key',
          html: "CQG debe explicar WCH y reemplazar el parche R por una física genuina —con posible no computabilidad.",
        },
        {
          type: 'paragraph',
          html: "Si la física futura puede ser no computable, hay que mirar cómo funciona el cerebro real, no solo sus modelos digitales.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Cerebros reales y cerebros modelo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Es el cerebro realmente «un cuenco de gachas frías», como dijo Turing? En realidad es extraordinariamente estructurado. Tiene corteza cerebral, cerebelo, tálamo, hipocampo y tronco encefálico. La corteza tiene áreas primarias (sensoriales y motoras) y terciarias (asociación y lenguaje).",
        },
        {
          type: 'paragraph',
          html: "Los experimentos de <span class=\"term\">cerebro dividido</span> (corte del cuerpo calloso entre hemisferios) muestran dos mitades que pueden comportarse casi como individuos separados. El cerebelo ejecuta movimientos aprendidos sin conciencia. El hipocampo fija memorias a largo plazo.",
        },
        {
          type: 'paragraph',
          html: "Sin embargo, la IA fuerte ve el cerebro como máquina de Turing, y Penrose lo disputa. ¿Dónde está el «asiento» de la conciencia? Candidatos: corteza cerebral, tálamo, formación reticular, hipocampo. Penrose es escéptico de atribuir conciencia solo al lenguaje o solo a estructuras «primitivas».",
        },
        {
          type: 'paragraph',
          html: "Los microtúbulos neuronales, sugeridos después con Stuart Hameroff, podrían albergar coherencia cuántica a gran escala. Penrose lo explora más adelante.",
        },
        {
          type: 'list',
          items: [
            "**Corteza cerebral** — Pensamiento de alto nivel, lenguaje (Broca, Wernicke).",
            "**Cerebelo** — Coordinación motora fina; «segunda naturaleza» sin conciencia.",
            "**Cerebro dividido** — Dos hemisferios con preferencias distintas tras cortar el cuerpo calloso."
          ],
        },
        {
          type: 'key',
          html: "El cerebro no es un autómata homogéneo, pues mucha actividad ocurre de forma inconsciente. La conciencia parece selectiva y escasa.",
        },
        {
          type: 'paragraph',
          html: "Con el mapa cerebral en mano, Penrose pregunta dónde encaja la física de la conciencia consciente.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "¿Dónde reside la física de la mente?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué hace la conciencia que un autómata no puede hacer? Penrose distingue procesos <span class=\"term\">algorítmicos</span> (inconscientes, como en el cerebelo) de juicios <span class=\"term\">no algorítmicos</span> (conscientes: formar juicios nuevos sin reglas prefijadas).",
        },
        {
          type: 'paragraph',
          html: "Por eso, la selección natural actúa sobre el comportamiento observable, no sobre las ideas subyacentes a un algoritmo. No puede «evolucionar» procedimientos que validen otros procedimientos. Eso exige comprensión directa, no mutación ciega. El matemático usa la conciencia para decidir si un algoritmo es el adecuado.",
        },
        {
          type: 'paragraph',
          html: "Penrose distingue dos niveles. Procesos inconscientes (cerebelo, reflejos) pueden ser algorítmicos. Juicios conscientes surgen al formar decisiones nuevas sin reglas prefijadas. Un programa que contiene un modelo de otro programa no adquiere comprensión. Una cámara frente a un espejo no se vuelve autoconsciente.",
        },
        {
          type: 'paragraph',
          html: "Penrose conjetura contacto con el mundo platónico de las matemáticas. Menciona tilings no periódicos (azulejos de Penrose) y coherencia cuántica en microtúbulos neuronales. La conciencia podría explotar fenómenos no computables de la CQG. El «retraso» de la percepción consciente sugiere que la mente no es instantánea ni puramente reactiva.",
        },
        {
          type: 'quote',
          text: "«La conciencia es de ninguna ayuda para adivinar el número ganador de una lotería. Me refiero a los juicios que formamos continuamente mientras estamos conscientes.»",
          attribution: "Roger Penrose",
        },
        {
          type: 'key',
          html: "La conciencia forma juicios no algorítmicos. La física que la sustenta debe trascender la computación digital.",
        },
        {
          type: 'paragraph',
          html: "La fábula del prólogo cierra el círculo: la misma pregunta de Adam pone a prueba la tesis del libro.",
        },
      ],
    },
    {
      id: "epilogo",
      num: "—",
      title: "La risa en el auditorio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué responde una supercomputadora cuando le preguntan cómo se siente? El epílogo retoma la escena del prólogo. El diseñador jefe consulta a Ultronic sobre «cómo se siente» ser la máquina.",
        },
        {
          type: 'paragraph',
          html: "La computadora responde que no entiende la pregunta. Ni siquiera puede comprender de qué se habla. La sala estalla en risas.",
        },
        {
          type: 'paragraph',
          html: "Adam siente vergüenza. «Lo que hubieran debido hacer, no era reírse». La escena resume la tesis del libro. Pasar el test de Turing en tareas acotadas no equivale a conciencia. La pregunta por la experiencia subjetiva desborda la computación.",
        },
        {
          type: 'key',
          html: "Ultronic calcula pero no comprende «cómo se siente» —la diferencia que la IA fuerte no puede cerrar.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "IA fuerte",
    "description": "Tesis de que la mente es ejecución de algoritmos; el hardware es irrelevante."
  },
  {
    "title": "Prueba de Turing",
    "description": "Test operativo: indistinguibilidad de respuestas humano/máquina."
  },
  {
    "title": "Máquina de Turing",
    "description": "Modelo abstracto de computación; límites vía problema de la detención."
  },
  {
    "title": "Teorema de Gödel",
    "description": "Verdades indemostrables dentro de sistemas formales consistentes."
  },
  {
    "title": "Procedimientos U y R",
    "description": "Evolución unitaria cuántica vs. colapso estocástico al medir."
  },
  {
    "title": "Entropía",
    "description": "Medida de desorden manifiesto; segunda ley y flecha del tiempo."
  },
  {
    "title": "Hipótesis de Weyl",
    "description": "Curvatura de Weyl nula en el big bang; explica baja entropía inicial."
  },
  {
    "title": "CQG",
    "description": "Gravedad cuántica correcta: unificar gravedad, cuántica y colapso R."
  },
  {
    "title": "No computabilidad",
    "description": "Procesos deterministas que ningún algoritmo puede replicar."
  },
  {
    "title": "Realismo platónico",
    "description": "Realidad independiente de las ideas matemáticas."
  }
],
  chronology: [
  {
    "year": "~300 a. C.",
    "text": "Euclides: algoritmos y geometría axiomática."
  },
  {
    "year": "1900",
    "text": "Planck: cuantización de la radiación del cuerpo negro."
  },
  {
    "year": "1902",
    "text": "Russell: paradoja de la teoría de conjuntos."
  },
  {
    "year": "1905",
    "text": "Einstein: relatividad especial; fotones."
  },
  {
    "year": "1913",
    "text": "Bohr: átomo cuántico y niveles discretos."
  },
  {
    "year": "1925-26",
    "text": "Heisenberg y Schrödinger: mecánica cuántica moderna."
  },
  {
    "year": "1931",
    "text": "Gödel: teoremas de incompletitud."
  },
  {
    "year": "1936-37",
    "text": "Turing: máquinas y problema de la detención."
  },
  {
    "year": "1950",
    "text": "Turing: «Computing Machinery and Intelligence» — el test."
  },
  {
    "year": "1980",
    "text": "Searle: habitación china contra IA fuerte."
  },
  {
    "year": "1989",
    "text": "Publicación de *The Emperor's New Mind*."
  }
],
  figures: [
  {
    "name": "Roger Penrose",
    "role": "Autor · Gravedad cuántica · Teoría de azulejos · Conciencia y computación"
  },
  {
    "name": "Alan Turing",
    "role": "Máquinas de Turing · Test de inteligencia · Criptoanálisis"
  },
  {
    "name": "Kurt Gödel",
    "role": "Teoremas de incompletitud · Límites del formalismo"
  },
  {
    "name": "David Hilbert",
    "role": "Programa de formalización · Entscheidungsproblem"
  },
  {
    "name": "John Searle",
    "role": "Habitación china · Crítica a la IA fuerte"
  },
  {
    "name": "Albert Einstein",
    "role": "Relatividad · Gravedad como geometría del espacio-tiempo"
  },
  {
    "name": "Stephen Hawking",
    "role": "Radiación de agujeros negros · Entropía y cosmología"
  },
  {
    "name": "Stuart Hameroff",
    "role": "Microtúbulos y coherencia cuántica en neuronas (trabajo posterior con Penrose)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "En suma, la mente consciente no es un algoritmo ejecutándose en hardware biológico.",
  "Gödel y Turing demuestran límites absolutos de la computación; la física actual, con su parche cuántico R, tampoco basta.",
  "Comprender la mente exige nueva física, no solo más velocidad de procesador.",
  "La pregunta «¿cómo se siente?» no admite respuesta algorítmica.",
  "Hace falta gravedad cuántica asimétrica en el tiempo, con no computabilidad."
],
    highlight: "La conciencia es el emperador desnudo de la IA fuerte: impresionante la pantomima, pero la ropa no existe",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Roger Penrose",
    line2: "\"The Emperor's New Mind\" · Oxford University Press · 1989",
  },
}
