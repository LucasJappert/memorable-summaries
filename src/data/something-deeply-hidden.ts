import type { BookSummary } from '../types/book'

export const somethingDeeplyHidden: BookSummary = {
  slug: "something-deeply-hidden",
  meta: {
    title: "Something Deeply Hidden",
    subtitle: "Mundos cuánticos y la emergencia del espaciotiempo",
    author: "Sean Carroll",
    meta: [
      "📖 2019 · Dutton",
      "✍️ Fundamentos cuánticos, Many-Worlds y gravedad emergente",
    ],
    titleEs: "Algo profundamente oculto",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "No tengas miedo"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Qué está pasando"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "La formulación valiente"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Cómo surgió la mecánica cuántica"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Incertidumbre y complementariedad"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Entrelazamiento"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Decoherencia y mundos paralelos"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "De dónde viene la probabilidad"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Diálogo sobre los puzzles cuánticos"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Alternativas a muchos mundos"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "El lado humano"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "¿Por qué hay espacio?"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Teoría cuántica de campos"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Gravedad dentro de la cuántica"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Más allá del espacio y el tiempo"
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
    "num": "—",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "No tengas miedo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mecánica cuántica es la teoría más precisa del mundo microscópico y sostiene la tecnología moderna, desde semiconductores hasta la química de la vida. <span class=\"person\">Richard Feynman</span> admitió que «nadie entiende la mecánica cuántica». Los físicos la usan como un robot que calcula, no como una imagen coherente de la realidad.",
        },
        {
          type: 'paragraph',
          html: "El escándalo central es el <span class=\"term\">problema de la medición</span>. Mientras no miramos, los sistemas evolucionan según la ecuación de Schrödinger. Al medir, reglas extra dicen que la función de onda «colapsa» y solo vemos un resultado. Los libros de texto suelen callar qué es una medición y por qué importa, y la investigación en fundamentos sigue siendo mal vista en muchos departamentos.",
        },
        {
          type: 'paragraph',
          html: "Carroll plantea tres mensajes. Primero, entender la cuántica debería ser prioridad científica, no misterio inevitable. Segundo, el progreso más prometedor pasa por la formulación de <span class=\"person\">Hugh Everett</span> (muchos mundos): los universos paralelos no se añaden a mano, sino que surgen del formalismo. Tercero, esto importa para la gravedad y el espaciotiempo: quizá la clave no sea cuantizar la relatividad general, sino profundizar en la mecánica cuántica misma.",
        },
        {
          type: 'key',
          html: "La cuántica funciona como oráculo predictivo, pero aún no tenemos consenso sobre qué está pasando realmente detrás de las ecuaciones.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Qué está pasando",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Albert Einstein</span> llamó a la mecánica cuántica <span class=\"term\">spukhaft</span> («fantasmal»), y la cultura popular la explota con metáforas vacías. Carroll insiste en que el fenómeno es extraño pero no inexplicable: la respuesta científica es resolver el puzzle, no celebrar el misterio.",
        },
        {
          type: 'paragraph',
          html: "La mecánica clásica describe el mundo con posiciones y velocidades que evolucionan con leyes deterministas (<span class=\"person\">Isaac Newton</span>, <span class=\"person\">Pierre-Simon Laplace</span>). La cuántica reemplaza el estado clásico por una <span class=\"term\">función de onda</span> Ψ: una nube de amplitudes complejas, no probabilidades directas. La probabilidad de un resultado es el cuadrado del módulo de la amplitud (<span class=\"term\">regla de Born</span>, <span class=\"person\">Max Born</span>).",
        },
        {
          type: 'paragraph',
          html: "Las reglas estándar tienen dos partes: evolución suave con Schrödinger y, al medir, colapso instantáneo a un resultado permitido. Eso plantea preguntas sin respuesta oficial: ¿qué cuenta como medición?, ¿cuándo colapsa?, ¿qué pasa con los resultados no observados? La mecánica cuántica actual es un oráculo útil, no una comprensión genuina.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Estado clásico",
              "description": "Posición + velocidad determinan el futuro en mecánica newtoniana.",
              "icon": "🎱"
            },
            {
              "title": "Problema de medición",
              "description": "Lo observado parece distinto de lo que la ecuación describe entre mediciones.",
              "icon": "👁️"
            }
          ],
        },
        {
          type: 'key',
          html: "El lema del capítulo resume el escándalo: lo que vemos al medir parece fundamentalmente distinto de lo que la teoría dice que ocurre cuando nadie mira.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "La formulación valiente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En la conferencia de Solvay de <span class=\"num\">1927</span>, <span class=\"person\">Niels Bohr</span> defendió usar la cuántica solo para probabilidades de medición, mientras <span class=\"person\">Albert Einstein</span> exigía una descripción completa de la realidad. Carroll reconstruye el camino lógico hacia la <span class=\"term\">mecánica cuántica austera</span> (AQM): tomar la función de onda en serio y suponer que siempre obedece a Schrödinger.",
        },
        {
          type: 'paragraph',
          html: "Si la función de onda es la realidad y no hay colapsos, medir es una interacción física ordinaria. Un electrón en superposición se entrelaza con el aparato y con el observador, y todos quedan en superposición correlacionada. La salida aparente es que el observador nunca «siente» estar en superposición, lo que llevó a inventar reglas de colapso.",
        },
        {
          type: 'paragraph',
          html: "La reinterpretación valiente es la de <span class=\"person\">Hugh Everett</span> (<span class=\"num\">1957</span>). Tras la interacción no hay un observador dividido en estados mentales contradictorios, sino <span class=\"term\">múltiples ramas</span> del estado universal, cada una con un observador que vio un resultado definido. No se añadieron mundos al formalismo. Ya estaban implícitos en la superposición desde el principio.",
        },
        {
          type: 'list',
          items: [
            "**AQM** — Solo función de onda + Schrödinger; sin postulados de medición.",
            "**Entrelazamiento** — Un solo Ψ para sistema+aparato; correlaciones entre partes.",
            "**Many-Worlds** — Ramas decoherentes interpretadas como mundos que ya no interfieren."
          ],
        },
        {
          type: 'key',
          html: "La formulación valiente elimina el colapso: la medición ramifica la función de onda en mundos separados en lugar de destruir posibilidades.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Cómo surgió la mecánica cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El siglo XIX imaginaba materia como <span class=\"term\">partículas</span> y fuerzas como <span class=\"term\">campos</span> clásicos. Los experimentos obligaron a unificar todo en una sola entidad ondulatoria cuántica: al medir bajo ciertas condiciones, el mundo parece corpuscular, pero lo fundamental es la función de onda.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Max Planck</span> (<span class=\"num\">1900</span>) cuantizó la radiación del cuerpo negro. <span class=\"person\">Albert Einstein</span> (<span class=\"num\">1905</span>) propuso fotones reales. <span class=\"person\">Niels Bohr</span> (<span class=\"num\">1913</span>) postuló órbitas electrónicas cuantizadas para salvar la estabilidad atómica (sin cuántica, un electrón clásico caería al núcleo en ~10 picosegundos). <span class=\"person\">Werner Heisenberg</span>, <span class=\"person\">Erwin Schrödinger</span> y <span class=\"person\">Paul Dirac</span> cerraron la teoría nueva hacia <span class=\"num\">1927</span>.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Erwin Schrödinger</span> esperaba paquetes de onda localizados, pero su ecuación dispersa las funciones. <span class=\"person\">Max Born</span> completó el esquema al interpretar Ψ como generador de probabilidades, no de posiciones ocultas. Schrödinger detestó esa lectura. Su gato dormido/despierto buscaba mostrar el absurdo del colapso, no celebrarlo. Los fundadores triunfaron en predicciones pero no acordaron qué representa Ψ.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1900",
              "text": "Planck introduce h para el espectro del cuerpo negro."
            },
            {
              "year": "1905",
              "text": "Einstein: luz como cuantos (fotones)."
            },
            {
              "year": "1913",
              "text": "Bohr: átomos con órbitas cuantizadas."
            },
            {
              "year": "1926",
              "text": "Schrödinger y Born: ecuación de onda + interpretación probabilística."
            },
            {
              "year": "1927",
              "text": "Solvay: cuántica madura, problema de medición abierto."
            }
          ],
        },
        {
          type: 'key',
          html: "La revolución cuántica unificó partículas y campos en Ψ, pero dejó sin resolver si la función de onda describe la realidad o solo nuestra ignorancia.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Incertidumbre y complementariedad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El principio de incertidumbre no dice que «todo es incierto», sino que <span class=\"term\">posición</span> y <span class=\"term\">momento</span> no pueden ser simultáneamente definidos en un mismo estado. No es ignorancia medible: son cantidades que no existen a la vez en la ontología cuántica.",
        },
        {
          type: 'paragraph',
          html: "En la doble rendija, electrones individuales dibujan un patrón de interferencia como ondas, pero impactan como partículas. Si detectamos por qué rendija pasan, desaparece la interferencia: el entrelazamiento con el detector destruye la superposición espacial. El experimento refuta la idea de que Ψ solo codifica ignorancia sobre una trayectoria clásica oculta.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">espín</span> ofrece el modelo más simple (<span class=\"term\">qubit</span>), con solo arriba o abajo según el eje elegido. La función de onda es un vector en un espacio abstracto de resultados, y la regla de Born equivale a Pitágoras (las amplitudes al cuadrado suman 1). Bohr llamó <span class=\"term\">complementariedad</span> al hecho de que descripciones igualmente válidas (posición/momento, onda/partícula) no pueden aplicarse a la vez.",
        },
        {
          type: 'key',
          html: "La incertidumbre refleja la estructura de los estados cuánticos, no un límite accidental de nuestro conocimiento ni de nuestros instrumentos.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Entrelazamiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hay una sola función de onda para el universo entero, no una por partícula. Cuando dos electrones chocan conservando momento total cero, medir uno determina instantáneamente el otro: están <span class=\"term\">entrelazados</span>, no correlacionados por azar clásico.",
        },
        {
          type: 'paragraph',
          html: "El papel EPR de <span class=\"num\">1935</span> (<span class=\"person\">Einstein</span>, <span class=\"person\">Podolsky</span>, <span class=\"person\">Rosen</span>) argumentó que la cuántica es incompleta si exige «elementos de realidad» locales para ambos espines. <span class=\"person\">Niels Bohr</span> respondió que lo real depende del contexto de medición. La tensión quedó empírica con <span class=\"person\">John Bell</span> (<span class=\"num\">1964</span>): correlaciones cuánticas en ángulo de 45° alcanzan ~71%, imposible en teorías locales clásicas (máximo 50%).",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">teorema de no-señalización</span> impide enviar información más rápido que la luz usando entrelazamiento. En Many-Worlds, Bell no exige acción fantasmal. No hay un único resultado definido que deba «avisar» al otro sistema, sino ramas correlacionadas.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~71%",
              "label": "Correlación máxima cuántica (eje a 45°)"
            },
            {
              "value": "50%",
              "label": "Límite de cualquier teoría local clásica"
            },
            {
              "value": "~10⁸⁸",
              "label": "Partículas en el universo observable"
            }
          ],
        },
        {
          type: 'key',
          html: "El entrelazamiento demuestra que la realidad cuántica no se factoriza en historias locales independientes, como Einstein deseaba.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Decoherencia y mundos paralelos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Hugh Everett</span> propuso en <span class=\"num\">1957</span> que el universo entero tiene una sola función de onda, sin región clásica externa. La medición es entrelazamiento entre sistema, aparato y entorno. Everett aún no conocía la <span class=\"term\">decoherencia</span>, introducida por <span class=\"person\">Hans Dieter Zeh</span> en <span class=\"num\">1970</span>.",
        },
        {
          type: 'paragraph',
          html: "Un aparato macroscópico en superposición interactúa con aire, fotones y calor. El entorno se entrelaza de forma distinta con cada rama, impidiendo la <span class=\"term\">interferencia</span> entre ellas. Eso define mundos separados. Como fantasmas en un «mundo fantasma», ramas decoherentes no pueden afectarse mutuamente. La medición no es mística ni requiere conciencia. Basta un grano de polvo entrelazado con el ambiente.",
        },
        {
          type: 'paragraph',
          html: "La historia humana del descubrimiento es dramática. <span class=\"person\">John Wheeler</span> suavizó la tesis para no herir a Bohr. Everett dejó la academia y murió joven (<span class=\"num\">1982</span>). <span class=\"person\">Bryce DeWitt</span> popularizó la etiqueta «Many-Worlds» en los años 70. Carroll estima ramificaciones astronómicas (p. ej. ~2⁵⁰⁰⁰ por segundo por decaimientos en el cuerpo), pero el peso de cada rama (|amplitud|²) mantiene la economía total.",
        },
        {
          type: 'key',
          html: "La decoherencia explica el supuesto colapso: las ramas del entorno dejan de interferir y cada copia del observador experimenta un único resultado clásico.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "De dónde viene la probabilidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La ecuación de Schrödinger es determinista, así que ¿por qué vemos azar? La respuesta everettiana no añade la regla de Born como postulado: reinterpreta la probabilidad como <span class=\"term\">credenciais epistémicas</span> bajo <span class=\"term\">incertidumbre auto-localizadora</span> (<span class=\"person\">Lev Vaidman</span>).",
        },
        {
          type: 'paragraph',
          html: "Tras la ramificación, hay dos copias idénticas que no saben en qué rama están. Preguntar «¿en cuál terminaré?» es mal planteado: ambas descendientes son «yo» legítimo (<span class=\"person\">Derek Parfit</span>). El frecuentismo falla porque todos los resultados ocurren en alguna rama con peso distinto. Contar ramas por igual («branch counting») genera inconsistencias al medir de nuevo.",
        },
        {
          type: 'paragraph',
          html: "La regla «ramas de igual amplitud → igual probabilidad» se generaliza únicamente a probabilidad = amplitud² (Pitágoras en Hilbert). <span class=\"person\">David Deutsch</span> y <span class=\"person\">David Wallace</span> derivan lo mismo desde teoría de decisiones: un agente racional actúa como si viviera en un mundo estocástico con regla de Born, aunque el universo sea determinista y ramificado.",
        },
        {
          type: 'key',
          html: "La probabilidad cuántica no es frecuencia en un mundo: es el peso racional que asignamos a cada rama mientras ignoramos cuál habitamos.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Diálogo sobre los puzzles cuánticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Carroll encarna las objeciones clásicas en un diálogo entre un físico de partículas (padre) y una especialista en Many-Worlds (hija). La navaja de Occam no condena Everett. Los mundos no se postulan, sino que emergen de Ψ+Schrödinger, mientras las alternativas añaden colapsos, variables ocultas o negaciones de la realidad de Ψ.",
        },
        {
          type: 'paragraph',
          html: "Many-Worlds sigue siendo falsable porque es cuántica pura. Cualquier evidencia contra interferencia o a favor de señales superlumínicas lo refutaría. Los mundos no se «fusionan» hacia atrás por la misma razón entrópica por la que el café no se desmezcla. El universo primitivo tenía baja entropía y poco entrelazamiento. La flecha cuántica (ramificación) y la termodinámica comparten condiciones iniciales especiales.",
        },
        {
          type: 'paragraph',
          html: "La conservación de energía se mantiene al ramificar. Cada mundo conserva la energía local que percibe, pero su <span class=\"term\">peso</span> (amplitud²) disminuye, de modo que la energía total ponderada se conserva. El número de mundos puede ser indefinido o finito (~2^(10^122) según gravedad cuántica). Lo operativo es el peso relativo, no el conteo. La ramificación puede modelarse como local (a la velocidad de la luz) o global según conveniencia descriptiva.",
        },
        {
          type: 'key',
          html: "Las objeciones filosóficas más citadas contra Many-Worlds tienen respuestas internas coherentes si se acepta que los mundos son patrones emergentes, no postulados extra.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Alternativas a muchos mundos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Carroll revisa tres familias rivales, todas teorías físicas distintas, no meras «interpretaciones». La <span class=\"term\">teoría GRW</span> (<span class=\"num\">1985</span>) modifica Schrödinger con colapsos espontáneos rarísimos en partículas pero frecuentes en objetos macroscópicos entrelazados. Es testeable pero ad hoc y difícil de extender a campos.",
        },
        {
          type: 'paragraph',
          html: "La mecánica de <span class=\"person\">de Broglie</span>–<span class=\"person\">David Bohm</span> añade posiciones clásicas guiadas por Ψ de forma <span class=\"term\">no local</span>. Reproduce la cuántica en «equilibrio» pero resulta forzada en teoría cuántica de campos. El <span class=\"term\">QBism</span> trata Ψ como credencia personal del agente. Evita colapsos pero sacrifica un mundo objetivo compartido (<span class=\"person\">Christopher Fuchs</span>, <span class=\"person\">N. David Mermin</span>).",
        },
        {
          type: 'paragraph',
          html: "Carroll concede virtudes a cada vía, pero apuesta por Everett porque solo asume Ψ y Schrödinger y se adapta a QFT, cosmología y gravedad sin rehacer el formalismo cada vez. La simplicidad del postulado compensa la riqueza ontológica de las ramas. Otras teorías compran comodidad fenomenológica con ingredientes extra.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "GRW",
              "description": "Colapsos aleatorios suprimen superposiciones macroscópicas.",
              "icon": "💥"
            },
            {
              "title": "Bohm",
              "description": "Partículas con trayectorias definidas; guía no local de Ψ.",
              "icon": "🎯"
            },
            {
              "title": "QBism",
              "description": "Ψ como creencia del agente; sin realidad objetiva compartida.",
              "icon": "🧠"
            }
          ],
        },
        {
          type: 'key',
          html: "Las alternativas eliminan mundos añadiendo dinámica, variables o negando la ontología de Ψ, pero pagan complejidad y rigidez frente a la plug-and-play everettiana.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El lado humano",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aunque existan ramas donde pediste pepperoni y otras donde pediste salchicha (la app <span class=\"term\">Universe Splitter</span> lo ilustra), la vida cotidiana debe seguir la regla de Born como si hubiera un solo mundo. El «suicidio cuántico» no otorga inmortalidad significativa: las ramas donde mueres importan a quien aún está vivo.",
        },
        {
          type: 'paragraph',
          html: "Después de ramificar, las copias son personas distintas aunque compartan pasado. No comparten recompensas ni experiencias. El utilitarismo debe ponderar utilidades por peso de rama, no duplicar felicidad al medir un espín. Las decisiones humanas son procesos clásicos emergentes en el cerebro. No «causan» ramificación microscópica, aunque haya ramas con elecciones distintas por fluctuaciones diminutas.",
        },
        {
          type: 'paragraph',
          html: "La cuántica no rescata el libre albedrío fuerte. Ni el determinismo de Many-Worlds ni el azar del colapso introducen voluntad sobrenatural. El compatibilismo sigue válido a escala humana. Tampoco hace falta conciencia para colapsar ondas, porque Everett elimina ese rol. El idealismo o el dualismo son opciones filosóficas, no exigencias empíricas.",
        },
        {
          type: 'key',
          html: "Many-Worlds cambia la ontología profunda, pero no el manual de instrucciones práctico: actúa y decide como si las probabilidades cuánticas gobernaran un único mundo.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "¿Por qué hay espacio?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La Parte III pregunta cómo emerge el mundo clásico desde Ψ. Los <span class=\"term\">mundos everettianos</span> no están en los postulados: son descripciones <span class=\"term\">emergentes</span> útiles, como sillas o temperatura, que capturan patrones reales (<span class=\"person\">Daniel Dennett</span>, <span class=\"person\">David Wallace</span>).",
        },
        {
          type: 'paragraph',
          html: "La emergencia ocurre cuando podemos descartar casi toda la información microscópica y aun predecir (centro de masa de la Tierra con seis números en lugar de 6×10⁵⁰). Después de la decoherencia, las ramas independientes siguen leyes clásicas casi siempre. El <span class=\"term\">problema de la base preferida</span> pregunta por qué vemos objetos en posiciones definidas. La respuesta es que las interacciones son <span class=\"term\">locales en espacio</span>, no en momento.",
        },
        {
          type: 'paragraph',
          html: "Estados «puntero» (gato despierto/dormido, aguja arriba/abajo) coinciden con configuraciones espaciales que el entorno distingue al chocar fotones y moléculas. El espacio no es fundamental en la ontología cuántica: es la variable en la que las interacciones del Hamiltoniano son locales. Posición y momento son simétricos en el formalismo, pero la dinámica rompe la simetría a favor del espacio.",
        },
        {
          type: 'key',
          html: "El espacio emerge porque la física real acopla lo que está cerca en posición, y la decoherencia selecciona bases de estados espacialmente coherentes como mundos clásicos.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Teoría cuántica de campos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">Teoría del Núcleo</span> (Core Theory) cuantiza campos y describe partículas, gravedad débil y fenómenos cotidianos. Los electrones y quarks son vibraciones en campos. Las partículas son lo que vemos al excitar el <span class=\"term\">vacío</span> cuántico, el estado de mínima energía.",
        },
        {
          type: 'paragraph',
          html: "El vacío no «fluctúa» en el tiempo. Es un estado estacionario. Lo que llamamos fluctuaciones son efectos de medición local que distorsionan lo observado. La energía del vacío contribuye a la <span class=\"term\">constante cosmológica</span>, medida por la aceleración del universo (<span class=\"num\">1998</span>). La estimación teórica con corte de Planck erra por ~10¹²² (problema de la constante cosmológica).",
        },
        {
          type: 'paragraph',
          html: "Incluso el vacío está densamente <span class=\"term\">entrelazado</span>: modos en cajas vecinas y lejanas comparten correlaciones. El teorema <span class=\"term\">Reeh-Schlieder</span> implica que una medición local podría, con probabilidad minúscula, corresponder a estados globales arbitrarios (el «Taj Mahal en la Luna»). La localidad dinámica del QFT es la base sobre la que Carroll construirá la gravedad emergente.",
        },
        {
          type: 'key',
          html: "En QFT los campos son lo fundamental, el vacío es un estado altamente entrelazado y estacionario, y las partículas son lecturas efectivas de sus excitaciones.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Gravedad dentro de la mecánica cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Cuantizar la relatividad general directamente choca con infinitos y con la falta de un espacio de fondo fijo. Carroll invierte el problema: partir de Ψ abstracta y extraer geometría. <span class=\"person\">Ted Jacobson</span> (<span class=\"num\">1995</span>) mostró que si la entropía de entrelazamiento de una región es proporcional al área de su frontera, se puede derivar la ecuación de Einstein.",
        },
        {
          type: 'paragraph',
          html: "La estrategia «It from Qubit» descompone el Hamiltoniano en grados de libertad que interactúan solo con vecinos. Eso define una red y, vía entropía de subregiones, una <span class=\"term\">métrica</span> emergente. Trabajos recientes (Cao, Carroll, Michalakis) especifican condiciones bajo las cuales la geometría obedece relatividad general a bajas energías.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">tiempo</span> puede ser fundamental (Schrödinger) o emergente: la ecuación de <span class=\"person\">Wheeler-DeWitt</span> con energía total cero congela Ψ, y el truco de <span class=\"person\">Page</span>–<span class=\"person\">Wootters</span> (<span class=\"num\">1983</span>) recupera evolución entrelazando un reloj con el resto. La gravedad cuántica completa sigue sin datos experimentales (G es ~10⁴³ veces más débil que el electromagnetismo en escala atómica).",
        },
        {
          type: 'key',
          html: "La gravedad podría no requerir cuantizar el espaciotiempo clásico, sino emerger del patrón de entrelazamiento en la función de onda del universo.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Más allá del espacio y el tiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Stephen Hawking</span> demostró que los agujeros negros emiten radiación térmica y pierden masa. La temperatura de uno solar es ~6×10⁻⁸ K. Evaporaría en ~10⁶⁷ años. La historia popular de «pares virtuales» es metáfora. Lo real es la evolución de Ψ de campos cerca del horizonte.",
        },
        {
          type: 'paragraph',
          html: "El puzzle de la información sigue abierto. La radiación Hawking parece térmica aleatoria y destruiría la información del objeto caído, violando la reversibilidad cuántica. La mayoría apuesta a que la información escapa codificada en la radiación, pero hace falta gravedad cuántica completa.",
        },
        {
          type: 'paragraph',
          html: "La entropía de Bekenstein-Hawking (proporcional al área del horizonte) sugiere que los grados de libertad viven en la superficie, no en el volumen. Eso apunta al principio <span class=\"term\">holográfico</span>. La gravedad fuerte hace fallar la localidad estricta de vecinos cuánticos. El espacio puede ser proyección de datos en una frontera. Many-Worlds facilita aceptar que el espacio no es absoluto, sino dependiente del régimen.",
        },
        {
          type: 'key',
          html: "Los agujeros negros muestran que la localidad y el espacio tridimensional son aproximaciones: la información parece vivir en fronteras, no en el volumen que percibimos.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Función de onda",
    "description": "Estado cuántico completo; en AQM describe la realidad, no solo creencias."
  },
  {
    "title": "Problema de medición",
    "description": "Tensión entre evolución Schrödinger y resultados definidos al observar."
  },
  {
    "title": "Decoherencia",
    "description": "Entrelazamiento con el entorno que impide interferencia entre ramas."
  },
  {
    "title": "Many-Worlds",
    "description": "Formalismo mínimo: ramificación sin colapso ni variables extra."
  },
  {
    "title": "Regla de Born",
    "description": "Probabilidad ="
  },
  {
    "title": "Entrelazamiento",
    "description": "Un solo Ψ para sistemas compuestos; correlaciones no clásicas."
  },
  {
    "title": "Localidad dinámica",
    "description": "Influencias solo entre grados de libertad vecinos; base del espacio emergente."
  },
  {
    "title": "Vacío cuántico",
    "description": "Estado de mínima energía, estacionario y globalmente entrelazado."
  },
  {
    "title": "Gravedad entropica",
    "description": "Curvatura ligada a entropía de entrelazamiento (Jacobson)."
  },
  {
    "title": "Holografía",
    "description": "Información en superficies codifica el interior cuando la gravedad es fuerte."
  }
],
  chronology: [
  {
    "year": "1900",
    "text": "Planck introduce la constante h."
  },
  {
    "year": "1905",
    "text": "Einstein propone los fotones."
  },
  {
    "year": "1913",
    "text": "Bohr cuantiza los átomos."
  },
  {
    "year": "1926",
    "text": "Schrödinger y Born completan la mecánica ondulatoria probabilística."
  },
  {
    "year": "1927",
    "text": "Conferencia de Solvay; cuántica operativa, fundamentos disputados."
  },
  {
    "year": "1935",
    "text": "Einstein-Podolsky-Rosen cuestionan la completitud de la cuántica."
  },
  {
    "year": "1957",
    "text": "Everett presenta la formulación de «estado relativo»."
  },
  {
    "year": "1964",
    "text": "Bell demuestra límites para teorías locales."
  },
  {
    "year": "1970",
    "text": "Zeh introduce la decoherencia."
  },
  {
    "year": "1974",
    "text": "Hawking predice la radiación de agujeros negros."
  },
  {
    "year": "1985",
    "text": "GRW propone colapsos dinámicos."
  },
  {
    "year": "1995",
    "text": "Jacobson deriva Einstein desde entropía de entrelazamiento."
  },
  {
    "year": "1998",
    "text": "Descubrimiento de la aceleración cósmica (energía del vacío)."
  }
],
  figures: [
  {
    "name": "Albert Einstein",
    "role": "Relatividad · Crítica de la cuántica incompleta · EPR"
  },
  {
    "name": "Niels Bohr",
    "role": "Modelo atómico · Interpretación de Copenhague"
  },
  {
    "name": "Erwin Schrödinger",
    "role": "Ecuación de onda · Gato como objeción al colapso"
  },
  {
    "name": "Max Born",
    "role": "Regla probabilística"
  },
  {
    "name": "Werner Heisenberg",
    "role": "Matrices · Principio de incertidumbre"
  },
  {
    "name": "Hugh Everett",
    "role": "Formulación de muchos mundos (1957)"
  },
  {
    "name": "John Wheeler",
    "role": "Mentor de Everett · «It from Bit»"
  },
  {
    "name": "John Bell",
    "role": "Teorema sobre entrelazamiento y localidad"
  },
  {
    "name": "Hans Dieter Zeh",
    "role": "Decoherencia"
  },
  {
    "name": "David Deutsch",
    "role": "Computación cuántica · Derivación decisionista de Born"
  },
  {
    "name": "David Wallace",
    "role": "Multiverso emergente · Filosofía de Everett"
  },
  {
    "name": "Ted Jacobson",
    "role": "Gravedad entropica"
  },
  {
    "name": "Stephen Hawking",
    "role": "Radiación de agujeros negros · Entropía BH"
  },
  {
    "name": "David Bohm",
    "role": "Mecánica con variables ocultas no local"
  },
  {
    "name": "Sean Carroll",
    "role": "Divulgación y investigación en fundamentos y gravedad cuántica"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La mecánica cuántica no es un oráculo misterioso sino la descripción más profunda de la realidad.",
  "La formulación más limpia implica mundos ramificados y, a largo plazo, el espaciotiempo emergente.",
  "Entender eso no es indulgencia filosófica. Es la ruta hacia la gravedad cuántica y el futuro de la física.",
  "Todo es cuántico, y finalmente la comunidad empieza a tomárselo en serio.",
  "La función de onda y Schrödinger bastan si tenemos el valor de seguirlas hasta el final."
],
    highlight: "Algo profundamente oculto detrás de lo visible puede ser simplemente las otras ramas de la función de onda del universo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Sean Carroll",
    line2: "\"Something Deeply Hidden\" · Dutton · 2019",
  },
}
