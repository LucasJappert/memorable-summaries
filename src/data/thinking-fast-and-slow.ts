import type { BookSummary } from '../types/book'

export const thinkingFastAndSlow: BookSummary = {
  slug: "thinking-fast-and-slow",
  meta: {
    title: "Thinking, Fast and Slow",
    subtitle: "Dos sistemas, sesgos predecibles y cómo mejorar juicios y decisiones",
    author: "Daniel Kahneman",
    meta: [
      "📖 2011 · Farrar, Straus and Giroux",
      "✍️ Nobel de Economía 2002 · Colaboración con Amos Tversky",
    ],
    titleEs: "Pensar rápido, pensar despacio",
  },
  toc: [
  {
    "id": "cierre",
    "num": "★",
    "label": "La idea central"
  },
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Los protagonistas de la historia"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Atención y esfuerzo"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "El controlador perezoso"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "La máquina asociativa"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Facilidad cognitiva"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Normas, sorpresas y causas"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Una máquina para saltar a conclusiones"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Cómo ocurren los juicios"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Responder una pregunta más fácil"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "La ley de los números pequeños"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Anclas"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "La ciencia de la disponibilidad"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Disponibilidad, emoción y riesgo"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "La especialidad de Tom W"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Linda: menos es más"
  },
  {
    "id": "cap16",
    "num": "16",
    "label": "Las causas vencen a las estadísticas"
  },
  {
    "id": "cap17",
    "num": "17",
    "label": "Regresión a la media"
  },
  {
    "id": "cap18",
    "num": "18",
    "label": "Domar las predicciones intuitivas"
  },
  {
    "id": "cap19",
    "num": "19",
    "label": "La ilusión de entender"
  },
  {
    "id": "cap20",
    "num": "20",
    "label": "La ilusión de validez"
  },
  {
    "id": "cap21",
    "num": "21",
    "label": "Intuición frente a fórmulas"
  },
  {
    "id": "cap22",
    "num": "22",
    "label": "Intuición experta: ¿cuándo confiar?"
  },
  {
    "id": "cap23",
    "num": "23",
    "label": "La visión externa"
  },
  {
    "id": "cap24",
    "num": "24",
    "label": "El motor del capitalismo"
  },
  {
    "id": "cap25",
    "num": "25",
    "label": "Los errores de Bernoulli"
  },
  {
    "id": "cap26",
    "num": "26",
    "label": "Teoría de las perspectivas"
  },
  {
    "id": "cap27",
    "num": "27",
    "label": "El efecto dotación"
  },
  {
    "id": "cap28",
    "num": "28",
    "label": "Malos eventos"
  },
  {
    "id": "cap29",
    "num": "29",
    "label": "El patrón cuádruple"
  },
  {
    "id": "cap30",
    "num": "30",
    "label": "Eventos raros"
  },
  {
    "id": "cap31",
    "num": "31",
    "label": "Políticas de riesgo"
  },
  {
    "id": "cap32",
    "num": "32",
    "label": "Llevar la cuenta"
  },
  {
    "id": "cap33",
    "num": "33",
    "label": "Reversiones"
  },
  {
    "id": "cap34",
    "num": "34",
    "label": "Marcos y realidad"
  },
  {
    "id": "cap35",
    "num": "35",
    "label": "Dos yoes"
  },
  {
    "id": "cap36",
    "num": "36",
    "label": "La vida como historia"
  },
  {
    "id": "cap37",
    "num": "37",
    "label": "Bienestar experimentado"
  },
  {
    "id": "cap38",
    "num": "38",
    "label": "Pensar sobre la vida"
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
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Para qué sirve un vocabulario más preciso sobre errores de juicio en la charla cotidiana?",
        },
        {
          type: 'paragraph',
          html: "Kahneman imagina la charla junto a la fuente del agua de la oficina. Es más fácil detectar errores ajenos que los propios. Un lenguaje compartido permite diagnosticar sesgos con la misma claridad que un médico nombra enfermedades. Los <span class=\"term\">sesgos</span>, es decir errores sistemáticos y predecibles, aparecen en contextos concretos. Cuando un orador carismático sube al escenario, el público lo juzga mejor de lo merecido. Eso ilustra el <span class=\"term\">efecto halo</span>, la extensión de una impresión favorable a rasgos no observados.",
        },
        {
          type: 'paragraph',
          html: "La mayoría de impresiones surgen sin que sepamos cómo. Creemos conocer nuestra mente, pero gran parte del trabajo es silencioso. Kahneman no menosprecia la inteligencia porque la mayoría de juicios son acertados. A menudo estamos seguros estando equivocados. El libro nace de décadas con <span class=\"person\">Amos Tversky</span>. En <span class=\"num\">1969</span> descubrieron que expertos en estadística exageraban la replicabilidad de muestras pequeñas.",
        },
        {
          type: 'paragraph',
          html: "Hoy la imagen es más rica sobre la intuición experta. El bombero que gritó «¡Salgan!» antes del colapso actuó por reconocimiento entrenado, no por heurísticas defectuosas. Cuando no hay expertise, respondemos preguntas más fáciles sin notarlo. El libro se divide en cinco partes sobre dos sistemas, heurísticas, sobreconfianza, elecciones y dos yoes.",
        },
        {
          type: 'key',
          html: "Un vocabulario de sesgos convierte charlas vagas en autocrítica posible, sin negar que la intuición acierta a menudo.",
        },
        {
          type: 'paragraph',
          html: "Antes de nombrar sesgos hay que presentar a los dos «personajes» mentales que los producen.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Los protagonistas de la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué son el Sistema 1 y el Sistema 2, y cuál manda en la vida diaria?",
        },
        {
          type: 'paragraph',
          html: "Kahneman adopta términos de <span class=\"person\">Keith Stanovich</span> y <span class=\"person\">Richard West</span>. El <span class=\"term\">Sistema 1</span>, el modo rápido e intuitivo, opera sin esfuerzo voluntario. Completa «pan y…», detecta hostilidad en una voz y conduce en ruta vacía. El <span class=\"term\">Sistema 2</span>, el modo lento y deliberado, asigna atención a lo difícil. Multiplica <span class=\"num\">17 × 24</span>, aparca en hueco estrecho y vigila modales sociales. Nos identificamos con el segundo, pero el primero origina impresiones que el segundo convierte en creencias.",
        },
        {
          type: 'paragraph',
          html: "Ambos comparten un presupuesto limitado de atención, y «pagar atención» es literal. No podés calcular <span class=\"num\">17 × 24</span> mientras girás en tráfico denso. Los pasajeros callan cuando el conductor adelanta un camión porque saben que distraen. El experimento del gorila invisible muestra que contar pases de baloncesto deja ciego ante una figura inesperada. La mitad no la ve y se resisten a creerlo.",
        },
        {
          type: 'key',
          html: "El Sistema 1 es el protagonista silencioso y el Sistema 2 delega en automáticos porque la atención escasea.",
        },
        {
          type: 'paragraph',
          html: "Si la atención es finita, conviene medir cuándo el esfuerzo mental se dispara de verdad.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Atención y esfuerzo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo sabemos que el Sistema 2 está trabajando en serio?",
        },
        {
          type: 'paragraph',
          html: "El esfuerzo mental tiene huellas corporales. En tareas como retener dígitos o multiplicar en la cabeza, la pupila se dilata y el pulso sube. La pupila es un indicador sensible porque crece con la carga y se contrae al rendirse o acertar. Esto confirma que «pagar atención» agota un recurso finito compartido por tareas cognitivas.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Mihaly Csikszentmihalyi</span> describió el <span class=\"term\">flow</span>, es decir concentración placentera sin forcejeo de autocontrol. En ese estado, mantener foco no consume el mismo presupuesto que forzar atención contra la distracción. Por eso caminar despacio permite pensar, pero acelerar destruye la coherencia del pensamiento.",
        },
        {
          type: 'key',
          html: "La pupila y la carga cardiovascular muestran esfuerzo real del Sistema 2, y el flow es la excepción placentera.",
        },
        {
          type: 'paragraph',
          html: "El presupuesto limitado explica por qué el Sistema 2 evita trabajar más de lo necesario.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "El controlador perezoso",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué pensamos menos y peor de lo que creemos?",
        },
        {
          type: 'paragraph',
          html: "Kahneman distingue velocidad de paseo y de carrera mental. Pedir a un amigo que calcule <span class=\"num\">23 × 78</span> mientras camina lo detiene en seco. Las tareas pesadas para memoria de trabajo compiten con el movimiento. Acelerar el paso roba recursos al pensamiento coherente. Mirar el correo al escribir revela escape hacia lo fácil.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">ley del mínimo esfuerzo</span>, es decir la tendencia a evitar esfuerzo mental, gobierna la vida mental. Evitamos tareas que exigen Sistema 2 salvo necesidad. Cuando Sistema 2 está ocupado o depletado, cedemos más a impulsos. Sistema 2 perezoso valida respuestas heurísticas sin escrutinio. Solo cuando la respuesta falla o choca con creencias se activa revisión.",
        },
        {
          type: 'key',
          html: "El Sistema 2 es perezoso y comparte presupuesto con autocontrol, por eso aceptamos atajos sin detectarlos.",
        },
        {
          type: 'paragraph',
          html: "Debajo del esfuerzo consciente opera una maquinaria asociativa que construye sentido al instante.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La máquina asociativa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo la mente construye historias coherentes en segundos a partir de estímulos mínimos?",
        },
        {
          type: 'paragraph',
          html: "Leé «Bananas Vómito» y en un segundo sentís disgusto, alejás el libro y acelera el pulso. Sistema 1 asumió causalidad entre plátanos y enfermedad. Activó memoria de «vómito», «amarillo» y «fruta», y preparó respuestas futuras. Eso es <span class=\"term\">activación asociativa</span>, es decir ideas encadenadas en cascada con coherencia emocional y corporal.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">David Hume</span> redujo asociación a semejanza, contigüidad y causalidad. Hoy vemos la memoria como red de nodos. Una idea activada dispara muchas otras, casi todas fuera de conciencia. Sistema 1 trató la yuxtaposición de palabras como si fuera realidad. Por eso sabemos menos de nosotros mismos de lo que sentimos.",
        },
        {
          type: 'key',
          html: "Sistema 1 teje historias causales automáticas desde fragmentos, y la coherencia emocional no garantiza verdad.",
        },
        {
          type: 'paragraph',
          html: "La fluidez con que procesamos información genera sensaciones de verdad, familiaridad y comodidad.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Facilidad cognitiva",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué lo fácil de leer o recordar se siente verdadero y agradable?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">facilidad cognitiva</span>, es decir la sensación de procesamiento fácil, es un estado donde Sistema 2 está relajado. Texto en fuente clara, rimas y frases repetidas producen ilusión de verdad y familiaridad. Mensajes persuasivos deben maximizar legibilidad y minimizar esfuerzo. La tensión cognitiva activa Sistema 2 y vigilancia.",
        },
        {
          type: 'paragraph',
          html: "Estado de ánimo y facilidad se mezclan porque buen humor aumenta confianza intuitiva. Mala tipografía o complejidad generan sospecha. Priming sutil puede ralentizar caminar sin que lo notes. Lo cómodo no siempre es correcto, pero Sistema 1 lo trata como señal de verdad.",
        },
        {
          type: 'key',
          html: "Lo fácil de procesar se confunde con lo verdadero y lo familiar, mientras la tensión activa la duda.",
        },
        {
          type: 'paragraph',
          html: "Las expectativas de normalidad organizan qué nos sorprende y qué atribuimos a causas.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Normas, sorpresas y causas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo detectamos lo anormal y por qué vemos causas e intenciones en el azar?",
        },
        {
          type: 'paragraph',
          html: "Sistema 1 compara cada instante con modelos de normalidad almacenados. Lo que rompe expectativas capta atención y exige explicación. Buscamos causas e intenciones aunque los datos sean ruido. La mente prefiere un relato causal a «fue casual». Evaluar si algo es normal es rápido, pero pensar estadísticamente no lo es.",
        },
        {
          type: 'paragraph',
          html: "Atribuir intención a eventos aleatorios satisface pero engaña en mercados, deportes y política. La causalidad psicológica domina tasas base. Esto prepara el terreno para conclusiones apresuradas con evidencia escasa.",
        },
        {
          type: 'key',
          html: "Sistema 1 detecta sorpresas y fabrica causas coherentes, aunque la estadística diga otra cosa.",
        },
        {
          type: 'paragraph',
          html: "Con poca evidencia, la mente salta a conclusiones firmes y suprime la duda.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Una máquina para saltar a conclusiones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué creemos historias incompletas con tanta confianza?",
        },
        {
          type: 'paragraph',
          html: "Sistema 1 es una máquina de inferencias rápidas. El sesgo de confirmación busca evidencia compatible y descarta la ambigua. El <span class=\"term\">efecto halo</span>, la extensión de una impresión favorable a rasgos no observados, distorsiona evaluaciones. <span class=\"term\">WYSIATI</span>, es decir «what you see is all there is», significa que tratamos la información disponible como si fuera toda.",
        },
        {
          type: 'paragraph',
          html: "Suprimimos duda cuando la coherencia interna basta. En condiciones favorables esto es eficiente, pero en juicios complejos produce sobreconfianza. La regla WYSIATI explica ilusiones de entender el pasado y predecir el futuro.",
        },
        {
          type: 'key',
          html: "Sistema 1 concluye con lo visible, confirma lo que encaja y extiende halos donde no hay datos.",
        },
        {
          type: 'paragraph',
          html: "Antes de sustituir preguntas, conviene ver cómo se combinan evaluaciones básicas en juicios.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Cómo ocurren los juicios",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿De dónde salen juicios complejos sin que los pidamos explícitamente?",
        },
        {
          type: 'paragraph',
          html: "Sistema 1 dispara evaluaciones básicas de intensidad, calidad, sorpresa y prototipos. El <span class=\"term\">emparejamiento de intensidades</span>, es decir traducir sentimientos a otras escalas, mantiene intensidad relativa. Conjuntos y prototipos guían impresiones de frecuencia y típicidad.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">escopeta mental</span>, es decir respuestas automáticas extra, responde a una pregunta disparando evaluaciones no solicitadas. Por eso una sola pregunta activa muchas respuestas listas para mapearse. Este mecanismo alimenta la sustitución de preguntas difíciles por fáciles.",
        },
        {
          type: 'key',
          html: "Juicios complejos surgen de evaluaciones básicas automáticas y emparejamientos de intensidad, no de cálculo consciente.",
        },
        {
          type: 'paragraph',
          html: "A menudo no respondemos la pregunta difícil sino otra más fácil que viene a la mente.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Responder una pregunta más fácil",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo formamos opiniones intuitivas sobre temas imposibles de resolver al instante?",
        },
        {
          type: 'paragraph',
          html: "Ante una pregunta objetivo difícil, Sistema 1 busca una <span class=\"term\">heurística</span>, es decir un atajo mental simplificado, y responde esa. ¿Cuánto donarías para salvar delfines? Se sustituye por qué emoción siento al pensar delfines muriendo. ¿Qué tan feliz soy con mi vida? Se sustituye por cuál es mi ánimo ahora. La <span class=\"term\">sustitución</span>, es decir responder otra pregunta en lugar de la difícil, ocurre sin aviso.",
        },
        {
          type: 'paragraph',
          html: "La heurística <span class=\"term\">afectiva</span>, es decir basada en sensaciones de agrado o rechazo, guía juicios y elecciones. Un directivo invierte millones en Ford porque le gustaron los autos en una feria. Sistema 2 perezoso valida la respuesta sustituida. Polya aconseja buscar problemas más fáciles, pero aquí la sustitución es automática.",
        },
        {
          type: 'key',
          html: "Ante preguntas duras respondemos otra más fácil y creemos haber contestado bien.",
        },
        {
          type: 'paragraph',
          html: "Una forma de confiar demasiado en muestras pequeñas abre la Parte II sobre heurísticas.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "La ley de los números pequeños",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué inferimos demasiado de pocos casos?",
        },
        {
          type: 'paragraph',
          html: "Creemos que las leyes de los pequeños números imitan a las grandes. Un estudio con <span class=\"num\">40</span> participantes parece revelador. Kahneman y Tversky mostraron que psicólogos expertos exageraban la probabilidad de replicar resultados con muestras chicas. También aconsejaban tamaños muestrales absurdamente bajos.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">ley de los números pequeños</span>, es decir creer que pocas muestras representan al todo, explica confianza en estudios preliminares. También explica anécdotas médicas y encuestas locales. Sistema 1 busca patrones y los encuentra en ruido. Sistema 2 debería corregir pero a menudo no interviene.",
        },
        {
          type: 'key',
          html: "Tratamos muestras pequeñas como representativas del universo, y hasta expertos caen en el error.",
        },
        {
          type: 'paragraph',
          html: "Otra distorsión numérica poderosa es el anclaje, donde un número irrelevante mueve estimaciones.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Anclas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un número aleatorio sesga negociaciones y estimaciones?",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">anclaje</span>, es decir la influencia de un número previo, ocurre cuando una cifra previa infla o reduce juicios posteriores. En experimentos, girar una rueda de la fortuna con números absurdos antes de estimar edad de Gandhi mueve respuestas. Anclas pueden ser estratégicas en negociación porque quien fija el primer número arrastra el acuerdo.",
        },
        {
          type: 'paragraph',
          html: "Sistema 2 debería ajustar desde el ancla hacia lo correcto, pero el ajuste suele ser insuficiente. Incluso anclas obviamente irrelevantes dejan huella. Conocer el mecanismo no lo elimina del todo.",
        },
        {
          type: 'key',
          html: "El primer número en mesa ancla estimaciones, y el ajuste consciente rara vez corrige lo bastante.",
        },
        {
          type: 'paragraph',
          html: "Otra heurística mide frecuencia por lo fácil que traemos ejemplos a la mente.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "La ciencia de la disponibilidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo estimamos riesgos y frecuencias sin contar datos?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">heurística de disponibilidad</span>, es decir juzgar por facilidad de evocar ejemplos, distorsiona frecuencia. ¿Letra K al inicio o en tercera posición? Respondemos inicio porque es más fácil listar palabras por primera letra. K es más frecuente en tercera posición. ¿Divorcios de profesores o médicos? Exageramos políticos infieles porque los escándalos son noticia.",
        },
        {
          type: 'paragraph',
          html: "Lo disponible en memoria puede reflejar frecuencia real o visibilidad mediática. Cobertura repetida hace temas parecer urgentes aunque estadísticamente sean marginales. Autoritarismos presionan medios porque disponibilidad moldea agenda pública.",
        },
        {
          type: 'key',
          html: "Confundimos «fácil de recordar» con «frecuente», y los medios amplifican lo dramático, no lo importante.",
        },
        {
          type: 'paragraph',
          html: "Cuando la emoción entra, la disponibilidad distorsiona aún más el riesgo percibido.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Disponibilidad, emoción y riesgo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué tememos lo espectacular y subestimamos amenazas silenciosas?",
        },
        {
          type: 'paragraph',
          html: "Eventos vívidos y emotivos dominan memoria y parecen probables. Accidentes aéreos y terrorismo ilustran el patrón. Expertos y público usan disponibilidad distinta porque especialistas pueden tener ejemplos más representativos. Las <span class=\"term\">cascadas de disponibilidad</span>, es decir refuerzo mediático mutuo, ocurren cuando medios y público se refuerzan.",
        },
        {
          type: 'paragraph',
          html: "Regulación y miedo comparten raíz en lo disponible. Riesgo objetivo y riesgo percibido divergen sistemáticamente. Políticas basadas solo en pánico ignoran tasas base.",
        },
        {
          type: 'key',
          html: "Lo emotivo y mediático infla riesgo percibido, y las cascadas de disponibilidad distorsionan prioridades colectivas.",
        },
        {
          type: 'paragraph',
          html: "Otra heurística central juzga probabilidad por parecido a un estereotipo, no por frecuencia real.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "La especialidad de Tom W",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué una descripción vívida vence a las estadísticas de base?",
        },
        {
          type: 'paragraph',
          html: "Tom W es un estudiante de humanidades descrito como nerd, desordenado y apasionado por la ciencia ficción. ¿Es más probable que sea bibliotecario o vendedor? Casi todos eligen especialidad de informática por representatividad. Ignoran que hay muchísimos más humanistas que informáticos. La <span class=\"term\">frecuencia base</span>, es decir la tasa real en la población, debería moderar el juicio.",
        },
        {
          type: 'paragraph',
          html: "Cuando se dan tasas explícitas, mejoramos pero no desaparece el sesgo. Sistema 1 responde qué tan similar es. Sistema 2 debe integrar qué tan común es la categoría. Sin esfuerzo, gana la historia.",
        },
        {
          type: 'key',
          html: "La representatividad domina la frecuencia base, así que lo típico parece más probable aunque sea raro en el mundo.",
        },
        {
          type: 'paragraph',
          html: "El problema Linda lleva esa lógica a una violación formal de probabilidad.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Linda: menos es más",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué una historia más detallada parece más probable que una general?",
        },
        {
          type: 'paragraph',
          html: "Linda es activista feminista y graduada en filosofía. ¿Es más probable que sea cajera o cajera y activista feminista? La mayoría elige la conjunción, imposible lógicamente. Toda conjunción es menos probable que cada parte. Lo <span class=\"term\">representativo</span>, es decir la coherencia narrativa, vence a la lógica.",
        },
        {
          type: 'paragraph',
          html: "En evaluación conjunta a veces corregimos, pero en evaluación separada el efecto «menos es más» persiste. Demuestra que intuición de probabilidad obedece a historia, no a axiomas.",
        },
        {
          type: 'key',
          html: "Historias coherentes hacen conjunciones parecer más probables que sus partes, y violamos lógica sin dudar.",
        },
        {
          type: 'paragraph',
          html: "Preferimos causas individuales y estereotipos a tasas estadísticas frías.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "Las causas vencen a las estadísticas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un caso concreto anula datos agregados?",
        },
        {
          type: 'paragraph',
          html: "En el experimento del autobús de cuidadores, estadísticas sobre violencia en instituciones psiquiátricas no tranquilizan tanto como conocer que el conductor es buena persona. Los <span class=\"term\">estereotipos causales</span>, es decir relatos de cómo actúa alguien, pesan más que tasas base.",
        },
        {
          type: 'paragraph',
          html: "Pensar estadísticamente exige Sistema 2 y considerar muchas cosas a la vez. Sistema 1 piensa asociativo y causal. Por eso enseñar probabilidad en escuela rinde poco si no cambia hábitos intuitivos. Las causas «vencen» en juicio moral y político cotidiano.",
        },
        {
          type: 'key',
          html: "Relatos causales concretos eclipsan estadísticas válidas, y pensar en tasas exige esfuerzo que evitamos.",
        },
        {
          type: 'paragraph',
          html: "Un patrón estadístico malinterpretado en evaluación es la regresión a la media.",
        },
      ],
    },
    {
      id: "cap17",
      num: "17",
      title: "Regresión a la media",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué elogiar parece empeorar y castigar parece mejorar?",
        },
        {
          type: 'paragraph',
          html: "Un instructor de vuelo israelí notó que tras elogiar maniobras buenas venía una peor. Cuando gritaba por errores venía mejora, y concluyó que castigo funciona. Kahneman vio <span class=\"term\">regresión a la media</span>, es decir tendencia al promedio tras extremos. Después de desempeño extremo, el siguiente resultado suele acercarse al promedio por azar.",
        },
        {
          type: 'paragraph',
          html: "Por eso, en la demostración con monedas al blanco, quien acertó mucho la primera vez suele empeorar la segunda sin intervención. La retroalimentación de la vida es perversa. Somos amables cuando otros nos complacen y duros cuando fallan, confundiendo regresión con efecto propio.",
        },
        {
          type: 'key',
          html: "Tras extremos el azar empuja al promedio, y confundimos regresión con efecto de elogio o castigo.",
        },
        {
          type: 'paragraph',
          html: "Las predicciones intuitivas ignoran regresión y se mantienen demasiado extremas.",
        },
      ],
    },
    {
      id: "cap18",
      num: "18",
      title: "Domar las predicciones intuitivas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo corregir pronósticos que no regresan hacia la media?",
        },
        {
          type: 'paragraph',
          html: "Predicciones intuitivas son <span class=\"term\">no regresivas</span>, es decir sin corregir hacia el promedio. Entrevistas generan confianza extrema en GPA futuro aunque correlación sea modesta. Deberíamos mover predicciones hacia la media del grupo con peso según validez del dato.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Paul Meehl</span> mostró que reglas estadísticas vencen a clínicos. Entonces Kahneman propone corrección explícita que combina impresión subjetiva con promedio poblacional. Extremos solo se justifican con evidencia muy fuerte. Cierra Parte II con remedio parcial contra heurísticas.",
        },
        {
          type: 'key',
          html: "Intuición predice sin regresar, y mezclar señal débil con promedio poblacional vence entrevistas confiadas.",
        },
        {
          type: 'paragraph',
          html: "Parte III pregunta por qué creemos entender el pasado más de lo que realmente entendemos.",
        },
      ],
    },
    {
      id: "cap19",
      num: "19",
      title: "La ilusión de entender",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el pasado parece inevitable una vez que ocurrió?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Nassim Taleb</span> llamó <span class=\"term\">falacia narrativa</span>, es decir historias simples del pasado, a relatos que moldean expectativas. Google parece un relato de genios acertando cada paso. Omitimos suerte y competidores ciegos. Mencionar un golpe de suerte hace la historia más creíble, no menos.",
        },
        {
          type: 'paragraph',
          html: "La regla WYSIATI impide incluir eventos que no ocurrieron. Tras la crisis de <span class=\"num\">2008</span>, muchos «sabían» que era inevitable. «Saber» exige verdad demostrable entonces, no retrospectiva. Limpiar lenguaje ayuda a pensar el futuro sin ilusión de certeza.",
        },
        {
          type: 'key',
          html: "Narrativas coherentes del pasado crean falsa sensación de predictibilidad, y la suerte pesa más de lo que admiten las historias.",
        },
        {
          type: 'paragraph',
          html: "La coherencia interna alimenta creer que nuestras evaluaciones actuales son válidas.",
        },
      ],
    },
    {
      id: "cap20",
      num: "20",
      title: "La ilusión de validez",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué confiamos en evaluaciones que no predicen resultados?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">ilusión de validez</span>, es decir confundir coherencia con poder predictivo, engaña en entrevistas. Generan confianza extrema pero correlacionan poco con desempeño futuro. Gestores de fondos muestran skill aparente en datos ruidosos. El azar explica casi todo en mercados eficientes.",
        },
        {
          type: 'paragraph',
          html: "El mundo es difícil porque señal baja y ruido alto. Expertos pundits construyen narrativas convincentes sin track record verificable. Conocer límites de validez no elimina sensación de certeza porque WYSIATI opera otra vez.",
        },
        {
          type: 'key',
          html: "Coherencia de información no implica validez predictiva, y entrevistas ilustran confianza sin poder.",
        },
        {
          type: 'paragraph',
          html: "¿Cuándo conviene confiar en reglas simples en lugar de expertos?",
        },
      ],
    },
    {
      id: "cap21",
      num: "21",
      title: "Intuición frente a fórmulas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Las fórmulas simples superan a expertos con décadas de experiencia?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Paul Meehl</span> revisó decenas de estudios sobre predicción clínica versus estadística. Las reglas, incluso lineales simples, ganan o empatan sistemáticamente. Hay hostilidad emocional hacia algoritmos porque preferimos caras humanas aunque sean peores.",
        },
        {
          type: 'paragraph',
          html: "La excepción «pierna rota», cuando hay dato decisivo fuera del modelo, no justifica rechazar fórmulas en masa. En dominios de baja validez, confiar en intuición es arrogancia. Combinar modelo y juicio humano rara vez mejora si el humano anula la regla.",
        },
        {
          type: 'key',
          html: "Fórmulas simples suelen vencer intuición experta, y resistimos algoritmos por preferencia emocional, no por evidencia.",
        },
        {
          type: 'paragraph',
          html: "Hay contextos donde la intuición experta sí es reconocimiento válido.",
        },
      ],
    },
    {
      id: "cap22",
      num: "22",
      title: "Intuición experta: ¿cuándo confiar?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuándo la intuición profesional es reconocimiento fiable y no sesgo?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Herbert Simon</span> definió que la intuición es reconocimiento tras miles de horas. Bomberos, maestros de ajedrez y médicos en casos repetitivos leen señales almacenadas. Requiere <span class=\"term\">entorno regular</span>, es decir contexto con patrones repetibles, y práctica con <span class=\"term\">feedback</span>, es decir retroalimentación clara y rápida.",
        },
        {
          type: 'paragraph',
          html: "El CIO que compró Ford porque le gustaron autos en feria muestra intuición inválida. El mercado accionario es irregular y la retroalimentación es ruidosa. Confianza subjetiva no garantiza acierto. Validar intuición exige preguntar si el entorno permite aprender regularidades.",
        },
        {
          type: 'key',
          html: "Intuición fiable es reconocimiento entrenado, y sin entorno regular ni retroalimentación clara la confianza subjetiva engaña.",
        },
        {
          type: 'paragraph',
          html: "Los planes ignoran estadísticas de proyectos similares porque caen en visión interna.",
        },
      ],
    },
    {
      id: "cap23",
      num: "23",
      title: "La visión externa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué proyectos siempre cuestan más y tardan más de lo previsto?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">falacia de planificación</span>, es decir subestimar plazos y costos, usa visión interna. El caso único, las mejores intenciones y los obstáculos subestimados dominan. Kahneman diseñó currículo en Israel con estimaciones irreales. La <span class=\"term\">visión externa</span>, es decir estimar con estadísticas de casos similares, pregunta cuánto tomaron proyectos similares.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">premortem</span>, es decir imaginar fracaso antes de empezar, pide listar causas antes de arrancar. Mitiga sobreconfianza grupal. Por eso combinar visión externa y premortem mejora pronósticos organizacionales sin negar ambición.",
        },
        {
          type: 'key',
          html: "Planificar mirando solo este caso sesga, y estadísticas de proyectos similares corrigen optimismo.",
        },
        {
          type: 'paragraph',
          html: "El optimismo excesivo de emprendedores alimenta el motor del capitalismo.",
        },
      ],
    },
    {
      id: "cap24",
      num: "24",
      title: "El motor del capitalismo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué tantos emprendedores apuestan contra probabilidades objetivas?",
        },
        {
          type: 'paragraph',
          html: "Encuestas muestran que emprendedores califican su éxito como muy probable aunque la mayoría fracasa. <span class=\"term\">Negligencia de competencia</span>, es decir ignorar rivales, ilusión de control y sesgo optimista explican la apuesta. Sobrevivencia selectiva hace visibles solo ganadores, y los perdedores desaparecen del relato.",
        },
        {
          type: 'paragraph',
          html: "La sociedad se beneficia porque innovación requiere optimistas dispuestos a arriesgar. Los individuos confunden supervivencia con talento. Reconocer rol del azar no destruye emprendimiento informado.",
        },
        {
          type: 'key',
          html: "Optimismo excesivo impulsa capitalismo y fracasos masivos, y confundimos supervivencia selectiva con talento puro.",
        },
        {
          type: 'paragraph',
          html: "Parte IV abre cuestionando cómo economía clásica modela elecciones bajo riesgo.",
        },
      ],
    },
    {
      id: "cap25",
      num: "25",
      title: "Los errores de Bernoulli",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué falló en la utilidad esperada clásica de Bernoulli?",
        },
        {
          type: 'paragraph',
          html: "Bernoulli en <span class=\"num\">1738</span> midió utilidad de riqueza final. Experimentos con centavos asumían que pequeños cambios reflejaban psicología de riqueza. Kahneman señaló que no evaluamos patrimonio con precisión de miles. <span class=\"person\">Harry Markowitz</span> propuso utilidad sobre cambios, no estados.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">ceguera inducida por teoría</span>, es decir no ver lo obvio por el modelo, impidió ver asimetría ganancias y pérdidas durante siglos. Cambiar referencia a ganancias y pérdidas abrió prospect theory. Buen avance teórico es cuando lo obvio anterior parece absurdo.",
        },
        {
          type: 'key',
          html: "Medir utilidad de riqueza total falla porque importan cambios respecto a referencia y asimetría pérdida y ganancia.",
        },
        {
          type: 'paragraph',
          html: "La teoría de perspectivas formaliza esas asimetrías.",
        },
      ],
    },
    {
      id: "cap26",
      num: "26",
      title: "Teoría de las perspectivas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo elegimos realmente entre riesgos y certezas?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría de perspectivas</span>, es decir modelo de elección con referencia, define valor sobre ganancias y pérdidas respecto a referencia. Por eso, en ganancias preferimos certeza sobre apuesta arriesgada, y en pérdidas preferimos apuesta arriesgada sobre pérdida segura.",
        },
        {
          type: 'paragraph',
          html: "Problemas idénticos en riqueza final para Bernoulli producen respuestas distintas. El marco de ganancia versus pérdida cambia preferencia. La curva de valor en S es cóncava en ganancias y convexa en pérdidas. Las pérdidas duelen más que las ganancias equivalentes.",
        },
        {
          type: 'key',
          html: "Valor depende de referencia y signo, y odiamos perder más de lo que nos gusta ganar.",
        },
        {
          type: 'paragraph',
          html: "Poseer algo ancla referencia y aumenta valor subjetivo.",
        },
      ],
    },
    {
      id: "cap27",
      num: "27",
      title: "El efecto dotación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué no vendemos lo que tenemos al precio que pagaríamos por ello?",
        },
        {
          type: 'paragraph',
          html: "En el <span class=\"term\">efecto dotación</span>, es decir que poseer aumenta valor subjetivo, tener un bien lo hace valer más que para quien no lo tiene. Punto de referencia se ancla en status quo. Vender implica pérdida relativa, no intercambio simétrico.",
        },
        {
          type: 'paragraph',
          html: "Comerciantes aprenden a pensar como negociadores, moviendo referencia. El efecto dotación explica inercia legal y negociación porque renunciar a lo actual duele más que obtener equivalente. No es universal pero es robusto.",
        },
        {
          type: 'key',
          html: "Poseer cambia referencia y valor, y renunciar pesa como pérdida aunque el intercambio sea neutro en dinero.",
        },
        {
          type: 'paragraph',
          html: "Los malos eventos dominan psicológicamente a los buenos simétricos.",
        },
      ],
    },
    {
      id: "cap28",
      num: "28",
      title: "Malos eventos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué reaccionamos más fuerte a lo malo que a lo bueno equivalente?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">dominancia de lo negativo</span>, es decir que lo malo pesa más, implica que amenazas captan atención con más fuerza. Críticas y pérdidas dominan memoria más que elogios o ganancias similares. Objetivos actúan como puntos de referencia. Quedar debajo duele más que quedar arriba alegra.",
        },
        {
          type: 'paragraph',
          html: "Defendemos status quo porque cambiar implica riesgo de pérdida. Ley y negociación explotan aversión a pérdida con concesiones enmarcadas como evitar perder. Evolutivamente adaptativo, pero distorsiona reformas necesarias.",
        },
        {
          type: 'key',
          html: "Lo malo pesa más que lo bueno simétrico, y referencias y status quo se defienden por miedo a perder.",
        },
        {
          type: 'paragraph',
          html: "Combinar probabilidad y signo produce el patrón cuádruple de elecciones.",
        },
      ],
    },
    {
      id: "cap29",
      num: "29",
      title: "El patrón cuádruple",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo cambian preferencias en las cuatro celdas ganancia/pérdida × probable/improbable?",
        },
        {
          type: 'paragraph',
          html: "Cuatro combinaciones muestran aversión o búsqueda de riesgo distintos. La <span class=\"term\">paradoja de Allais</span>, es decir violación de axiomas de utilidad, viola utilidad esperada. Preferimos certeza en ganancias pequeñas y apostamos para evitar pérdida segura.",
        },
        {
          type: 'paragraph',
          html: "Pesos decisionales no son lineales en probabilidad porque sobreponderamos certeza y eventos muy improbables. El patrón cuádruple organiza seguros, loterías, litigios y refugios fiscales. Economía normativa no predice estas violaciones sistemáticas.",
        },
        {
          type: 'key',
          html: "Probabilidad y signo interactúan, y certeza y eventos raros reciben peso emocional desproporcionado.",
        },
        {
          type: 'paragraph',
          html: "Eventos raros vívidos distorsionan aún más juicio y elección.",
        },
      ],
    },
    {
      id: "cap30",
      num: "30",
      title: "Eventos raros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué sobreestimamos lo improbable cuando es emocionante?",
        },
        {
          type: 'paragraph',
          html: "Combinamos sobreestimación de probabilidad pequeña con sobreponderación emocional. Seguros, terrorismo y lotería comparten mecanismo porque outcomes vívidos dominan cálculo frío. Decisiones desde impresión global ignoran detalle probabilístico.",
        },
        {
          type: 'paragraph',
          html: "Políticas de riesgo pueden segregar o agregar mentalmente apuestas. Encuadre estrecho amplifica miedo a pérdidas repetidas. Raro no es imposible, pero tampoco tan frecuente como sentimos.",
        },
        {
          type: 'key',
          html: "Eventos raros vívidos se sobreponderan, e impresión global reemplaza probabilidad fina.",
        },
        {
          type: 'paragraph',
          html: "Cómo agregamos riesgos en el tiempo importa para aceptar apuestas favorables.",
        },
      ],
    },
    {
      id: "cap31",
      num: "31",
      title: "Políticas de riesgo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué rechazamos muchas apuestas pequeñas favorables juntas?",
        },
        {
          type: 'paragraph',
          html: "En el problema de <span class=\"person\">Paul Samuelson</span>, rechazamos apuesta <span class=\"num\">50/50</span> de ganar doscientos o perder cien. Pero ¿rechazaríamos cien repeticiones? Encuadre estrecho evalúa cada ronda aislada. Encuadre amplio ve portfolio favorable.",
        },
        {
          type: 'paragraph',
          html: "Inversores miran cuentas frecuentemente y sufren <span class=\"term\">aversión miópica a pérdidas</span>, es decir miedo a bajas temporales. Venden acciones por miedo a bajas temporales. Política de riesgo consciente corrige parcialmente.",
        },
        {
          type: 'key',
          html: "Encuadre estrecho rechaza apuestas buenas repetidas, y agregar ganancias guía preferencias.",
        },
        {
          type: 'paragraph',
          html: "Llevamos score emocional en cuentas mentales separadas.",
        },
      ],
    },
    {
      id: "cap32",
      num: "32",
      title: "Llevar la cuenta",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué tratamos el mismo dinero distinto según la cuenta mental?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"term\">Cuentas mentales</span>, es decir categorías separadas de dinero, tienen reglas propias. Gastar de «bonificación» es más fácil que de salario. El <span class=\"term\">arrepentimiento</span>, es decir dolor por la opción no elegida, depende de qué tan cerca estuviste de la alternativa ganadora.",
        },
        {
          type: 'paragraph',
          html: "Responsabilidad y «blame» moldean elecciones médicas y financieras. Economía estándar asume fungibilidad del dinero, pero humanos no. A veces cuentas ayudan autocontrol, a veces distorsionan.",
        },
        {
          type: 'key',
          html: "Dividimos dinero en cuentas con reglas emocionales, y arrepentimiento viola fungibilidad racional.",
        },
        {
          type: 'paragraph',
          html: "Preferencias revierten al comparar opciones en distinto orden o encuadre.",
        },
      ],
    },
    {
      id: "cap33",
      num: "33",
      title: "Reversiones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué cambiamos de preferencia al evaluar opciones juntas?",
        },
        {
          type: 'paragraph',
          html: "Reversiones de preferencia desafían axiomas de utilidad. En la versión enfermo-tiempo libre elegimos enfermedad corta intensa versus moderada larga según si comparamos finales o duraciones. Evaluación conjunta versus separada altera ranking.",
        },
        {
          type: 'paragraph',
          html: "Categorías y contexto de comparación mueven elecciones «irracionales» para economía clásica pero predecibles psicológicamente. No hay lista estable de preferencias en la cabeza.",
        },
        {
          type: 'key',
          html: "Preferencias no son fijas, y encuadre y modo de comparación producen reversiones sistemáticas.",
        },
        {
          type: 'paragraph',
          html: "Pequeños cambios de formulación alteran decisiones sin cambiar hechos.",
        },
      ],
    },
    {
      id: "cap34",
      num: "34",
      title: "Marcos y realidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Las decisiones dependen de cómo se formula la pregunta?",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">encuadre</span>, es decir formulación que moldea la elección, es inevitable porque no hay formulación neutra. En el problema de enfermedad asiática, salvar doscientos de seiscientos versus perder cuatrocientos produce distinta elección. Donación de órganos cambia con opt-in versus opt-out.",
        },
        {
          type: 'paragraph',
          html: "Encuadre emocional en medicina, derecho y finanzas mueve decisiones irrelevantes para axiomas. <span class=\"term\">Libertad paternalista</span>, es decir marcos que empujan sin prohibir, propone marcos que empujan hacia decisiones mejores. Sistema 1 responde a redacción, y Sistema 2 rara vez recalcula.",
        },
        {
          type: 'key',
          html: "Redacción altera preferencias sin alterar hechos, y diseñar buenos marcos es política legítima y necesaria.",
        },
        {
          type: 'paragraph',
          html: "Parte V separa al yo que vive del yo que recuerda.",
        },
      ],
    },
    {
      id: "cap35",
      num: "35",
      title: "Dos yoes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Quién decide cuando el yo que vive y el yo que recuerda quieren cosas distintas?",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">yo que experimenta</span>, es decir quien vive el momento, vive momentos. El <span class=\"term\">yo que recuerda</span>, es decir quien guarda la historia, guarda historia. En el experimento mano fría, exponerse más tiempo al frío puede ser preferido si el final es menos doloroso.",
        },
        {
          type: 'paragraph',
          html: "Recordar ignora tiempo finito y favorece picos intensos y finales sobre periodos moderados largos. Consecuencias absurdas en elecciones médicas si solo cuenta memoria. Ambos yoes importan, pero no coinciden.",
        },
        {
          type: 'key',
          html: "Memoria obedece pico y final, no duración, y elegimos sufrimientos mal distribuidos si la historia queda mejor.",
        },
        {
          type: 'paragraph',
          html: "Evaluamos vidas enteras como historias, no como suma de momentos.",
        },
      ],
    },
    {
      id: "cap36",
      num: "36",
      title: "La vida como historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un final feliz redime una biografía en nuestra mente?",
        },
        {
          type: 'paragraph',
          html: "Por eso, en el caso Jen, años felices más años tristes mejoran evaluación total si se agregan años felices al final. Eso ocurre aunque aumente sufrimiento experimentado. Colonoscopia extendida con final menos doloroso hace recuerdo mejor y aumenta probabilidad de repetir.",
        },
        {
          type: 'paragraph',
          html: "Vacaciones amnésicas importan poco al yo recordador aunque fueron placenteras. Evaluamos óperas y vidas por momentos salientes. Políticas que solo miran satisfacción recordada ignoran sufrimiento real.",
        },
        {
          type: 'key',
          html: "Juzgamos vidas por desenlaces y picos, no por tiempo vivido, y finales felices reescriben evaluación global.",
        },
        {
          type: 'paragraph',
          html: "Medir bienestar momentáneo requiere métodos distintos del recuerdo.",
        },
      ],
    },
    {
      id: "cap37",
      num: "37",
      title: "Bienestar experimentado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo medir felicidad real en el momento, no recordada?",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">Day Reconstruction Method</span>, es decir reconstrucción hora a hora del día, reconstruye día hora a hora con emociones. El <span class=\"term\">U-index</span>, es decir proporción de tiempo en sufrimiento, mide tiempo en sufrimiento. Datos muestran diferencias entre actividades, países y grupos distintas a encuestas de satisfacción vital.",
        },
        {
          type: 'paragraph',
          html: "Políticas públicas deben decidir qué yo optimizar entre experiencia momentánea o satisfacción recordada. Ceguera, diálisis y colonoscopia tienen rankings distintos según métrica. No hay solución fácil pero ignorar dualidad es error.",
        },
        {
          type: 'key',
          html: "Bienestar experimentado se mide momento a momento, y difiere de satisfacción recordada y cambia prioridades.",
        },
        {
          type: 'paragraph',
          html: "Al pensar la vida sobreestimamos impacto de eventos aislados.",
        },
      ],
    },
    {
      id: "cap38",
      num: "38",
      title: "Pensar sobre la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pesa al elegir carrera, pareja o lugar de vida?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">ilusión focalizadora</span>, es decir sobreestimar impacto de un factor, sobreestima efecto de un factor en felicidad total. «Nada en la vida importa tanto como piensas mientras lo estás pensando.» Atención limitada hace que lo presente domine juicio.",
        },
        {
          type: 'paragraph',
          html: "Pensar sobre vida es necesario pero sesgado. Ninguna métrica única captura bienestar entre experiencia, memoria y satisfacción. Humildad metodológica antes de grandes elecciones.",
        },
        {
          type: 'key',
          html: "Al focalizar un factor inflamos su peso, y pensar sobre la vida es inevitable pero sistemáticamente sesgado.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Sistema 1 / Sistema 2",
    "description": "Pensamiento rápido automático vs lento deliberado; el primero domina."
  },
  {
    "title": "Heurística y sesgo",
    "description": "Atajo mental útil que produce error sistemático predecible."
  },
  {
    "title": "WYSIATI",
    "description": "Concluir con lo visible ignorando lo ausente."
  },
  {
    "title": "Sustitución",
    "description": "Responder pregunta fácil en lugar de la difícil sin notarlo."
  },
  {
    "title": "Disponibilidad",
    "description": "Juzgar frecuencia por facilidad de evocar ejemplos."
  },
  {
    "title": "Representatividad",
    "description": "Juzgar probabilidad por parecido a estereotipo, no por base rate."
  },
  {
    "title": "Regresión a la media",
    "description": "Tras extremos, resultados tienden al promedio por azar."
  },
  {
    "title": "Teoría de perspectivas",
    "description": "Valor sobre ganancias/pérdidas con referencia y aversión a pérdida."
  },
  {
    "title": "Visión externa",
    "description": "Estimar proyectos con estadísticas de clase, no solo detalle interno."
  },
  {
    "title": "Dos yoes",
    "description": "Yo que experimenta vs yo que recuerda (pico-final, duración)."
  }
],
  chronology: [
  {
    "year": "1738",
    "text": "Bernoulli formula utilidad esperada sobre riqueza."
  },
  {
    "year": "1969",
    "text": "Kahneman invita a Tversky; nace colaboración en Jerusalén."
  },
  {
    "year": "1974",
    "text": "«Juicio bajo incertidumbre: heurísticas y sesgos» en Science."
  },
  {
    "year": "1979",
    "text": "«Teoría de perspectivas: un análisis de la decisión bajo riesgo»."
  },
  {
    "year": "1996",
    "text": "Muere Amos Tversky, 59 años."
  },
  {
    "year": "2002",
    "text": "Nobel de Economía a Kahneman."
  },
  {
    "year": "2011",
    "text": "Publicación de «Pensar rápido, pensar despacio»."
  }
],
  figures: [
  {
    "name": "Daniel Kahneman",
    "role": "Autor; psicología del juicio y decisión; Nobel 2002."
  },
  {
    "name": "Amos Tversky",
    "role": "Coautor 1969–1996; teoría de perspectivas y heurísticas."
  },
  {
    "name": "Herbert Simon",
    "role": "Intuición experta como reconocimiento, no magia."
  },
  {
    "name": "Gary Klein",
    "role": "Estudios de intuición en bomberos y emergencias."
  },
  {
    "name": "Nassim Taleb",
    "role": "Falacia narrativa e ilusión de entender el pasado."
  },
  {
    "name": "Paul Meehl",
    "role": "Fórmulas superan predicción clínica intuitiva."
  },
  {
    "name": "Daniel Bernoulli",
    "role": "Utilidad esperada clásica sobre estados de riqueza."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La mente no es una calculadora racional sino un escenario donde un pensamiento rápido e intuitivo domina al deliberado.",
  "Por eso reconocer sesgos, usar la visión externa, fórmulas simples y mejores marcos puede mejorar juicios sin negar nuestra inteligencia cotidiana.",
  "De ahí que tres distinciones recapitulen el libro: dos yoes, econs frente a humanos, dos sistemas.",
  "Las organizaciones pueden educar el «chisme informado» en lugar de confiar ciegamente en intuición o narrativas.",
  "Por eso la humildad ante el azar es tan importante como cualquier técnica."
],
    highlight: "Pensar bien exige nombrar los errores del Sistema 1 y activar con parsimonia al Sistema 2.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Daniel Kahneman",
    line2: "\"Thinking, Fast and Slow\" · Farrar, Straus and Giroux · 2011",
  },
}
