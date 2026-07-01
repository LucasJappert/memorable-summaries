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
    "label": "Prefacio (ed. 1999)"
  },
  {
    "id": "prologo",
    "num": "—",
    "label": "Prólogo"
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
    "label": "Epílogo"
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
      title: "Diez años después (edición 1999)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En el prefacio de <span class=\"num\">1999</span>, <span class=\"person\">Penrose</span> recuerda que este libro fue su primera incursión seria en la divulgación. Su tesis central no cambió: la <span class=\"term\">conciencia</span> no puede alojarse en el marco de la física actual ni reducirse a computación pura.",
        },
        {
          type: 'paragraph',
          html: "El argumento tiene dos hilos. Primero, los teoremas de <span class=\"person\">Gödel</span> y <span class=\"person\">Turing</span> muestran que el pensamiento matemático, y por extensión el pensamiento consciente, trasciende cualquier modelo puramente computacional. Segundo, existe un vacío en nuestra imagen física del mundo, entre la escala cuántica y la macroscópica, donde debería residir la física que explique la mente consciente.",
        },
        {
          type: 'paragraph',
          html: "Penrose ilustra el primer hilo con el <span class=\"term\">teorema de Goodstein</span>: una proposición aritmética verdadera e inteligible que no es demostrable por inducción matemática sola. Comprender su verdad requiere algo más que seguir reglas mecánicas. Ese «algo», la comprensión, parece ligado a la conciencia y ser esencialmente no computacional.",
        },
        {
          type: 'key',
          html: "La comprensión matemática trasciende cualquier conjunto fijo de reglas; la conciencia exige física nueva en el puente entre lo cuántico y lo clásico.",
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
          html: "Una fábula de ciencia ficción abre el libro: el presidente <span class=\"person\">Pollo</span> inaugura la supercomputadora <span class=\"term\">Ultronic</span>, con más de <span class=\"num\">10¹⁷</span> unidades lógicas. Su padre, activista de la «Gran Junta de Conciencia Psíquica», intentó volarla. El niño <span class=\"person\">Adam</span>, criado casi por máquinas, se atreve a hacer la primera pregunta.",
        },
        {
          type: 'paragraph',
          html: "La escena anticipa el conflicto del libro: si una máquina supera al cerebro humano en capacidad, ¿debemos atribuirle mente, sentimientos y responsabilidad moral? El título alude al cuento de Andersen: creer en la «mente» de la máquina sería como admirar el traje invisible del emperador.",
        },
        {
          type: 'key',
          html: "La pregunta de Adam al final del prólogo —«¿cómo se siente ser tú?»— reaparecerá en el epílogo como prueba de que la computación por sí sola no basta.",
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
          html: "El avance de la informática plantea una inquietud profunda: si las máquinas igualan o superan capacidades humanas, ¿hemos cedido la prerrogativa del pensamiento? <span class=\"person\">Penrose</span> no busca adivinar respuestas definitivas, sino mostrar que nuestra física actual es insuficiente para explicar la mente.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">prueba de Turing</span> (<span class=\"num\">1950</span>) propone que una máquina «piensa» si sus respuestas son indistinguibles de las de un humano en un diálogo ciego. Penrose la acepta como criterio operativo aproximado, pero advierte que una teoría futura de la conciencia podría invalidarla —como un «detector de conciencia» fiable para humanos pero no para computadoras.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">IA fuerte</span> identifica estados mentales con algoritmos: desde un termostato hasta un cerebro, todo sería ejecución de procedimientos. <span class=\"person\">John Searle</span> refuta esto con la <span class=\"term\">habitación china</span>: manipular símbolos según reglas no implica comprensión. Penrose concede fuerza al argumento, pero critica a Searle por aceptar que «todo es una computadora digital».",
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
          html: "Un <span class=\"term\">algoritmo</span> es un procedimiento finito y determinista: en cada paso la acción siguiente está claramente prescrita. El algoritmo de <span class=\"person\">Euclides</span> (~<span class=\"num\">300 a. C.</span>) para el máximo común divisor es el ejemplo clásico.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Alan Turing</span> (<span class=\"num\">1936-37</span>) formalizó la noción de procedimiento mecánico con la <span class=\"term\">máquina de Turing</span>: estados internos finitos, cinta infinita de símbolos 0/1, lectura/escritura paso a paso. Sorprendentemente, demostró que existen problemas bien definidos que ninguna máquina puede resolver —como decidir si otra máquina se detendrá (<span class=\"term\">problema de la detención</span>).",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">tesis de Church-Turing</span> afirma que toda computación efectiva es equivalente a una máquina de Turing. La <span class=\"term\">máquina universal</span> puede simular cualquier otra: de ahí la equivalencia entre computadoras modernas. Pero Turing también mostró límites absolutos a lo algorítmico —un posible resquicio para la mente.",
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
          html: "El capítulo abre con la fantasía de <span class=\"term\">Tor'Bled-Nam</span>: un paisaje infinitamente detallado generado por una regla simple, el <span class=\"term\">conjunto de Mandelbrot</span>. Ilustra cómo la matemática abstracta puede ser «más real» que muchos objetos físicos.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">números reales</span> extienden racionales e irracionales (√2, π). Cantor demostró con el <span class=\"term\">argumento diagonal</span> que hay «más» reales que naturales: los reales no son contables. Los <span class=\"term\">números computables</span> son los generables por algoritmo, pero la mayoría de los reales no lo son.",
        },
        {
          type: 'paragraph',
          html: "Penrose defiende una forma de <span class=\"term\">realismo platónico</span>: los conceptos matemáticos habitan un mundo ideal accesible por la inteligencia, no inventado arbitrariamente. La pregunta «¿es recursivo el Mandelbrot?» conecta geometría fractal con límites de la computación.",
        },
        {
          type: 'key',
          html: "La matemática no computable sugiere que la realidad mental no cabe en el universo algorítmico de la IA fuerte.",
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
          html: "¿Cómo conocemos la verdad matemática? <span class=\"person\">Hilbert</span> soñó con un sistema formal completo y consistente para toda la aritmética. La <span class=\"term\">paradoja de Russell</span> (<span class=\"num\">1902</span>), el conjunto de todos los conjuntos que no se contienen a sí mismos, mostró que la ingenua teoría de conjuntos colapsa.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1931</span>, <span class=\"person\">Kurt Gödel</span> destruyó el programa de Hilbert: en cualquier sistema formal suficientemente potente y consistente existe una proposición G(P) verdadera pero indemostrable dentro del sistema. La consistencia del propio sistema tampoco es demostrable internamente.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">comprensión matemática</span>, el «insight», permite ver la verdad de G(P) desde fuera del sistema. Eso no es un algoritmo ejecutándose dentro del formalismo. Penrose argumenta que la conciencia humana accede a verdades de forma similar, trascendiendo cualquier procedimiento mecánico fijo.",
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
          html: "Antes de la cuántica, Penrose clasifica las teorías físicas en <span class=\"term\">SUPERB</span> (precisión fenomenal), <span class=\"term\">USEFUL</span> (útiles pero incompletas) y <span class=\"term\">TENTATIVE</span> (sin apoyo experimental). En SUPERB: geometría euclidiana, mecánica de Newton, electromagnetismo de Maxwell, relatividades de Einstein, mecánica cuántica y QED.",
        },
        {
          type: 'paragraph',
          html: "La dinámica clásica es <span class=\"term\">determinista</span>: el futuro queda fijado por el pasado. Galileo introdujo la inercia y la relatividad galileana. Newton unificó leyes de movimiento y gravitación universal. Maxwell añadió campos electromagnéticos ondulatorios.",
        },
        {
          type: 'paragraph',
          html: "¿Es la vida en el «mundo de billar» newtoniano computable? Penrose explora si la evolución de sistemas clásicos, incluso campos continuos, puede simularse algorítmicamente. La respuesta es matizada: muchos sistemas son computables en principio, pero la no linealidad y el caos plantean dudas sobre si el cerebro es «solo» un autómata clásico.",
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
          html: "La mecánica cuántica nació de anomalías que la física clásica no podía explicar: espectros atómicos discretos, catástrofe ultravioleta del cuerpo negro, inestabilidad del átomo de Rutherford. <span class=\"person\">Planck</span> (<span class=\"num\">1900</span>) introdujo cuantos de energía E = hν.",
        },
        {
          type: 'paragraph',
          html: "El experimento de las <span class=\"term\">dos rendijas</span> muestra interferencia: un fotón parece pasar por ambas rendijas a la vez hasta que se «mide». La evolución unitaria <span class=\"term\">U</span> (ecuación de Schrödinger) es determinista. La reducción <span class=\"term\">R</span> del estado es probabilística y marca el colapso al observar.",
        },
        {
          type: 'paragraph',
          html: "El gato de Schrödinger expone el problema de la medición: ¿cuándo ocurre R? ¿Se necesita un observador consciente? Penrose rechaza el subjetivismo de Bohr y defiende realismo sobre el <span class=\"term\">estado cuántico</span>, pero admite que la teoría actual es incompleta —un «parche» entre U y R.",
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
          html: "Nuestra experiencia del <span class=\"term\">flujo del tiempo</span>, con pasado fijo y futuro abierto, choca con las ecuaciones físicas, casi todas reversibles en el tiempo. La relatividad elimina incluso un «ahora» absoluto: la simultaneidad depende del observador.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">segunda ley de la termodinámica</span> introduce asimetría: la <span class=\"term\">entropía</span> de un sistema aislado crece. Un vaso que se rompe no se recompone espontáneamente —no por las leyes newtonianas, sino porque el orden coordinado de átomos es astronómicamente improbable.",
        },
        {
          type: 'paragraph',
          html: "El universo comenzó en un estado de entropía gravitacional extraordinariamente bajo: la <span class=\"term\">hipótesis de curvatura de Weyl</span> (WCH) postula WEYL = 0 en el big bang. Los agujeros negros concentran entropía. Su evaporación por <span class=\"person\">Hawking</span> conecta gravedad, cuántica y termodinámica.",
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
          html: "Penrose argumenta que la <span class=\"term\">gravedad cuántica correcta</span> (CQG) debe ser <span class=\"term\">asimétrica en el tiempo</span> y unificar U con R —no solo cuantizar la relatividad general dejando intacta la mecánica cuántica.",
        },
        {
          type: 'paragraph',
          html: "La WCH no es mera «condición de frontera» inexplicable: es tan precisa como las leyes dinámicas. La reducción R también es asimétrica: la probabilidad de detectar un fotón dado que la fuente emitió uno es ½, pero la probabilidad inversa no lo es.",
        },
        {
          type: 'paragraph',
          html: "El experimento de <span class=\"person\">Hawking</span> con una caja caliente ilustra cómo la gravedad podría forzar el colapso del estado cuántico. La escala relevante no es necesariamente el absurdamente pequeño <span class=\"term\">longitud de Planck</span> (10⁻³⁵ m), sino un criterio gravitacional más plausible —desarrollado luego en *Sombras de la mente*.",
        },
        {
          type: 'key',
          html: "CQG debe explicar WCH y reemplazar el parche R por una física genuina —con posible no computabilidad.",
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
          html: "El cerebro humano, «como un cuenco de gachas frías» según <span class=\"person\">Turing</span>, es en realidad extraordinariamente estructurado: corteza cerebral, cerebelo, tálamo, hipocampo, tronco encefálico. La corteza tiene áreas primarias (sensoriales, motoras) y terciarias (asociación, lenguaje).",
        },
        {
          type: 'paragraph',
          html: "Los experimentos de <span class=\"term\">cerebro dividido</span> (<span class=\"person\">Sperry</span>) muestran dos hemisferios que pueden comportarse casi como individuos separados. El cerebelo ejecuta movimientos aprendidos sin conciencia. El hipocampo fija memorias a largo plazo. La IA fuerte ve el cerebro como Turing machine. Penrose lo disputa.",
        },
        {
          type: 'paragraph',
          html: "¿Dónde está el «asiento» de la conciencia? Candidatos: corteza cerebral, tálamo, formación reticular, hipocampo. Penrose es escéptico de atribuir conciencia solo al lenguaje (hemisferio izquierdo) o solo a estructuras «primitivas». Los microtúbulos, sugeridos después con <span class=\"person\">Stuart Hameroff</span>, podrían albergar coherencia cuántica a gran escala.",
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
          html: "El cerebro no es un autómata homogéneo: mucha actividad es inconsciente; la conciencia parece selectiva y escasa.",
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
          html: "Si la conciencia tiene ventaja selectiva, ¿qué hace que no pueda hacer un autómata? Penrose distingue procesos <span class=\"term\">algorítmicos</span> (inconscientes, cerebelo) de juicios <span class=\"term\">no algorítmicos</span> (conscientes): formar juicios nuevos cuando no hay reglas prefijadas.",
        },
        {
          type: 'paragraph',
          html: "La selección natural no puede «evolucionar» algoritmos que validen otros algoritmos. Eso requiere comprensión, no mutación ciega. El matemático confía en su conciencia para elegir el algoritmo correcto. La verdad de Gödel se ve por insight, no por cálculo.",
        },
        {
          type: 'paragraph',
          html: "Penrose conjetura contacto con el <span class=\"term\">mundo platónico</span> de las matemáticas, tilings no periódicos (los <span class=\"term\">azulejos de Penrose</span>) y coherencia cuántica en microtúbulos neuronales. La conciencia podría explotar fenómenos no computables de la CQG. El «retraso» de la percepción consciente sugiere que la mente no es instantánea ni puramente reactiva.",
        },
        {
          type: 'quote',
          text: "«La conciencia es de ninguna ayuda para adivinar el número ganador de una lotería. Me refiero a los juicios que formamos continuamente mientras estamos conscientes.»",
          attribution: "Roger Penrose",
        },
        {
          type: 'key',
          html: "La conciencia forma juicios no algorítmicos; la física que la sustenta debe trascender la computación digital.",
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
          html: "El epílogo retoma la escena del prólogo. El diseñador jefe consulta a Ultronic sobre «cómo se siente» ser la máquina. La computadora responde que no entiende la pregunta —ni siquiera puede comprender de qué se habla.",
        },
        {
          type: 'paragraph',
          html: "La sala estalla en risas. <span class=\"person\">Adam</span> siente vergüenza: «Lo que hubieran debido hacer, no era reírse». La escena resume la tesis del libro: pasar el test de Turing en tareas acotadas no equivale a conciencia. La pregunta por la experiencia subjetiva desborda la computación.",
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
  "La mente consciente no es un algoritmo ejecutándose en hardware biológico.",
  "Gödel y Turing demuestran límites absolutos de la computación. La física actual, con su parche cuántico R, tampoco basta.",
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
