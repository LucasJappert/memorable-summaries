import type { BookSummary } from '../types/book'

export const fabricOfReality: BookSummary = {
  slug: "fabric-of-reality",
  meta: {
    title: "The Fabric of Reality",
    subtitle: "Una teoría unificada de universos paralelos, conocimiento, vida y cómputo",
    author: "David Deutsch",
    meta: [
      "📖 1997 · Allen Lane / Penguin",
      "✍️ Dedicado a Karl Popper, Hugh Everett y Alan Turing",
    ],
    titleEs: "El tejido de la realidad",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "La Teoría del Todo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo entender la realidad sin fragmentarla en especialidades? <span class=\"person\">David Deutsch</span> (físico británico) parte de una idea exigente. El conocimiento científico consiste sobre todo en <span class=\"term\">explicaciones</span> (decir por qué ocurre algo, no solo predecir). Los hechos se consultan y las predicciones solo sirven para diseñar experimentos que deciden entre teorías rivales.",
        },
        {
          type: 'paragraph',
          html: "Contra la intuición de fragmentación, nuestras mejores teorías se vuelven más profundas y se integran. Por eso nos acercamos a un estado en que una sola persona podría entender todo lo entendido. Esa <span class=\"term\">Teoría del Todo</span> (una visión unificada de la realidad) es más amplia que la que buscan los físicos de partículas. La realidad no se compone solo de espacio, tiempo y partículas. También incluye vida, pensamiento y cómputo. La sostienen cuatro hilos que se explican mejor juntos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Física cuántica",
              "description": "El multiverso de universos paralelos que interfieren entre sí.",
              "icon": "⚛️"
            },
            {
              "title": "Epistemología",
              "description": "Cómo crece el conocimiento por conjetura y crítica (Popper).",
              "icon": "🧠"
            },
            {
              "title": "Computación",
              "description": "La universalidad que hace comprensible la realidad (Turing).",
              "icon": "💻"
            },
            {
              "title": "Evolución",
              "description": "La vida como replicadores que encarnan conocimiento.",
              "icon": "🧬"
            }
          ],
        },
        {
          type: 'key',
          html: "Entender la realidad no es acumular datos, sino explicar en profundidad, hasta que las mejores teorías solo puedan comprenderse juntas.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Sombras",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué abrir una rendija extra puede oscurecer un punto de luz? Los experimentos de <span class=\"term\">interferencia</span> (patrones donde ondas de luz se suman o se cancelan) esconden un hecho perturbador. En un patrón de sombras hay puntos que se oscurecen al abrir nuevas rendijas en la barrera. Esto ocurre incluso lanzando <span class=\"term\">fotones</span> (partículas de luz) de a uno.",
        },
        {
          type: 'paragraph',
          html: "Si un solo fotón atraviesa el aparato, algo tiene que interferir con él. Ese algo bloquea la luz justo donde antes había claridad. Deutsch argumenta que son fotones sombra que viajan por otros universos. Solo se detectan por su interferencia con el nuestro.",
        },
        {
          type: 'paragraph',
          html: "La conclusión es clara. El universo que vemos no es toda la realidad física. Existe un <span class=\"term\">multiverso</span> (muchos universos paralelos que interfieren entre sí). Lo que vuelve creíble la idea no es su rareza. Toda alternativa exige maniobras artificiales que explican menos.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">interferencia</span> de partículas individuales solo tiene una explicación no forzada: universos paralelos físicamente reales.",
        },
        {
          type: 'paragraph',
          html: "Si el multiverso es real, hay que explicar cómo crece el conocimiento sobre él sin caer en la inducción.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Resolución de problemas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo crece el conocimiento si la inducción no funciona? Deutsch ataca el <span class=\"term\">inductivismo</span> (la idea de que las teorías se justifican acumulando observaciones). Repetir casos nunca prueba una ley. Ni siquiera se puede extrapolar una observación sin un marco explicativo previo.",
        },
        {
          type: 'paragraph',
          html: "Siguiendo a <span class=\"person\">Karl Popper</span> (filósofo de la ciencia), propone que la ciencia es resolución de problemas. Aparece un problema cuando nuestras explicaciones fallan. Entonces formulamos <span class=\"term\">conjeturas</span> (hipótesis tentativas), las criticamos y descartamos las peores. El experimento refuta errores, pero no otorga certeza final.",
        },
        {
          type: 'paragraph',
          html: "Ese proceso se parece a la evolución biológica, donde sobreviven las variantes mejor adaptadas. Las teorías que superan la crítica se vuelven las vigentes. Nuevos problemas exigen explicaciones aún mejores.",
        },
        {
          type: 'key',
          html: "El conocimiento crece por crítica racional entre explicaciones rivales, no por acumular observaciones que «confirmen».",
        },
        {
          type: 'paragraph',
          html: "Aceptar universos invisibles obliga a preguntar qué criterio nos autoriza a llamarlos reales.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Criterios de realidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué nos autoriza a llamar «real» a algo que no vemos, como los universos paralelos? Deutsch responde con un criterio simple. Es real aquello complejo y autónomo que «devuelve el golpe». Eso es el <span class=\"term\">criterio de Dr. Johnson</span> (probar la realidad chocando contra ella).",
        },
        {
          type: 'paragraph',
          html: "Lo defiende tomando en serio el <span class=\"term\">solipsismo</span> (la tesis de que solo existe mi mente). Resulta autoconsistente. Al usarlo como explicación se vuelve un realismo disfrazado y recargado. Necesita reintroducir toda la complejidad del mundo dentro de la mente. Por eso lo descarta la <span class=\"term\">navaja de Occam</span> (preferir la explicación más simple).",
        },
        {
          type: 'paragraph',
          html: "Tomamos como real lo que nuestras mejores explicaciones necesitan para funcionar. Ese mundo es autosemejante, es decir, un trozo de realidad puede representar a otro. Esa propiedad la estudiaron primero los teóricos de la computación.",
        },
        {
          type: 'key',
          html: "Es real lo que nuestras mejores explicaciones no pueden evitar usar, aunque nunca lo observemos de forma directa.",
        },
        {
          type: 'paragraph',
          html: "Si la realidad puede representarse a sí misma, la simulación de entornos deja de ser un mero truco técnico.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Realidad virtual",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué enseña la simulación de mundos sobre la estructura del mundo? La <span class=\"term\">realidad virtual</span> (entornos generados por computadora que el usuario puede explorar) parece un asunto tecnológico. Para Deutsch es una pista sobre la estructura del mundo. Un generador da al usuario la experiencia de estar en un entorno determinado.",
        },
        {
          type: 'paragraph',
          html: "Conviene distinguir dos cosas. Una <span class=\"term\">imagen</span> (representación fija) produce sensaciones. Un entorno renderizado además responde de la forma esperada a cada acción posible del usuario. Que esto sea posible no es un detalle de ingeniería. Es la base de la computación, la imaginación, la ciencia y hasta el arte.",
        },
        {
          type: 'paragraph',
          html: "El alcance de la realidad virtual no lo fija la técnica actual. Lo fijan las leyes físicas y la capacidad de cómputo. Esa pregunta por sus límites abre el capítulo siguiente.",
        },
        {
          type: 'key',
          html: "Que se puedan simular entornos enteros es un hecho profundo sobre la realidad, no un mero truco de las computadoras.",
        },
        {
          type: 'paragraph',
          html: "La pregunta siguiente es hasta dónde llega esa simulación y dónde se detiene para siempre.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Universalidad y límites del cálculo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hasta dónde llega la realidad virtual? Deutsch da una respuesta doble, con un techo altísimo y un límite tajante. Por un lado formula el <span class=\"term\">principio de Turing</span> (la tesis de que es físicamente posible simular cualquier entorno posible). Ese generador universal podría reproducir cualquier entorno físicamente posible.",
        },
        {
          type: 'paragraph',
          html: "La razón es la máquina universal de Turing, un único objeto capaz de imitar a cualquier otro. Esa universalidad es lo que hace comprensible la realidad. Una parte del mundo puede modelar a todas las demás. Por otro lado, un <span class=\"term\">argumento diagonal</span> (razonamiento al estilo de Cantor y Turing) muestra un límite. La inmensa mayoría de entornos lógicamente posibles nunca podrán renderizarse. Deutsch los llama entornos Cantgotu. La universalidad es enorme, aunque no abarca todo lo imaginable.",
        },
        {
          type: 'key',
          html: "La computación puede ser universal dentro de lo físicamente posible, aunque casi todo lo lógicamente posible quede para siempre fuera de su alcance.",
        },
        {
          type: 'paragraph',
          html: "Si el conocimiento es falible, conviene desmontar la última ilusión de que la ciencia descansa en un principio oculto de inducción.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Una conversación sobre justificación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se justifica el conocimiento sin fundamentos infalibles? En forma de diálogo, Deutsch remata la discusión sobre justificación. Su blanco es el <span class=\"term\">cripto-inductivista</span> (quien niega la inducción pero busca otra garantía oculta). Concede que la inducción es inválida. Pero sigue creyendo que hace falta algún principio que garantice confiar en la ciencia.",
        },
        {
          type: 'paragraph',
          html: "El error está en suponer un principio oculto según el cual «el futuro se parecerá al pasado». No existe tal principio. Cuando predecimos, lo hacemos apoyados en explicaciones sobre cómo funcionan las cosas. No en una fe en la repetición.",
        },
        {
          type: 'paragraph',
          html: "La justificación no descansa en fundamentos infalibles. Descansa en argumentos que comparan explicaciones y eliminan las que empeoran el cuadro. El conocimiento es falible y, aun así, puede ser objetivo.",
        },
        {
          type: 'key',
          html: "No hay un principio de inducción escondido detrás de la ciencia, solo crítica racional de explicaciones frente a problemas concretos.",
        },
        {
          type: 'paragraph',
          html: "Con ese marco epistemológico, Deutsch puede replantear el lugar de la vida en el cosmos.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "El significado de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la vida no es un accidente marginal del universo? La ciencia desde <span class=\"person\">Galileo</span> (astrónomo pionero del método experimental) pareció mostrar que la vida es marginal en un universo inmenso. Deutsch invierte esa impresión sin caer en el <span class=\"term\">vitalismo</span> (la idea de que la vida requiere una fuerza especial).",
        },
        {
          type: 'paragraph',
          html: "La clave está en los <span class=\"term\">replicadores</span> (entidades que logran que su entorno las copie). Los genes son replicadores hechos de ADN. Una idea que se propaga es un meme, en el sentido de Dawkins. Estar adaptado a un nicho significa encarnar conocimiento que hace que ese nicho conserve ese conocimiento.",
        },
        {
          type: 'paragraph',
          html: "Además, la vida fue el primer modo en que la realidad virtual se realizó en la naturaleza. Eso la liga al principio de Turing. A gran escala, la estructura más regular a través de los universos aparece donde hay materia que porta conocimiento, como el ADN o los cerebros.",
        },
        {
          type: 'key',
          html: "La vida es creación y transmisión de conocimiento codificado en procesos físicos, y por eso resulta fundamental, no marginal.",
        },
        {
          type: 'paragraph',
          html: "Ese vínculo entre vida y cómputo se vuelve explícito cuando entra la computación cuántica.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Computadoras cuánticas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la computación cuántica refuerza la lectura realista de la cuántica? La <span class=\"term\">computación cuántica</span> (cálculo que explota propiedades cuánticas de la materia) demuestra que la teoría cuántica describe recursos físicos reales. No solo un formalismo matemático. Deutsch la presenta como un modo cualitativamente nuevo de aprovechar la naturaleza.",
        },
        {
          type: 'paragraph',
          html: "La universalidad no solo es posible, también es tratable. Un computador puede reproducir cualquier entorno físicamente posible sin recursos desmesurados. Un computador cuántico resuelve de forma eficiente problemas clásicamente <span class=\"term\">intratables</span> (imposibles de resolver en tiempo razonable), como la factorización de números grandes.",
        },
        {
          type: 'paragraph',
          html: "¿De dónde sale esa potencia? Deutsch responde que el cálculo se reparte entre universos paralelos que interfieren. Ese rendimiento es, por tanto, otra evidencia a favor del multiverso. El obstáculo práctico principal es la decoherencia, que degrada la interferencia entre ramas.",
        },
        {
          type: 'key',
          html: "El poder de la computación cuántica refuerza una lectura realista de la cuántica, porque se explica mejor admitiendo universos que colaboran.",
        },
        {
          type: 'paragraph',
          html: "Si el cómputo es físico, la certeza matemática también depende de lo que sabemos del mundo.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La naturaleza de las matemáticas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la matemática no es un reino de certeza absoluta? Deutsch desafía esa creencia. Sostiene que el conocimiento matemático es derivado y depende de nuestra física. Una <span class=\"term\">demostración</span> (argumento que prueba una proposición) no es una cadena de símbolos infalible. Es un cómputo físico que modela las propiedades de una entidad abstracta.",
        },
        {
          type: 'paragraph',
          html: "Su validez depende de que sean correctas nuestras teorías sobre los objetos con que demostramos. Por eso no otorga certeza. El <span class=\"term\">teorema de incompletitud</span> (límite de Gödel para sistemas formales) hundió el sueño de Hilbert de fijar de una vez la certeza matemática. Aun así, Deutsch mantiene el realismo. Las entidades abstractas complejas existen objetivamente, incluso las incomprensibles.",
        },
        {
          type: 'key',
          html: "Las verdades matemáticas son objetivas pero no ciertas, porque conocerlas depende de lo que sepamos del mundo físico.",
        },
        {
          type: 'paragraph',
          html: "Ese realismo sobre el cambio prepara el terreno para repensar el tiempo como concepto cuántico.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El tiempo: primer concepto cuántico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el tiempo es el primer concepto cuántico aunque lo descubrimos mucho antes que la cuántica? Deutsch sostiene que el <span class=\"term\">tiempo</span> (la dimensión en que ocurren los cambios) encierra una tesis provocadora. El tiempo no fluye. La sensación de que el presente «se mueve» hacia el futuro no describe nada real.",
        },
        {
          type: 'paragraph',
          html: "La realidad es un multiverso. Lo que llamamos otros momentos son casos especiales de otros universos. No etapas por las que algo se desplaza. Por eso la física del <span class=\"term\">espacio-tiempo</span> (el continuo unificado de Einstein) es a lo sumo una aproximación. Nuestras intuiciones temporales clásicas bloquean las buenas explicaciones. Conviene revisarlas para entender el cambio y la causalidad.",
        },
        {
          type: 'key',
          html: "El tiempo no fluye, y pensar «otros tiempos» como otros universos disuelve las paradojas de un presente en movimiento.",
        },
        {
          type: 'paragraph',
          html: "Repensar el tiempo abre la puerta a analizar los viajes al pasado sin paradojas lógicas.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Viajes en el tiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Son los viajes al pasado una fantasía o un problema de coherencia física? Deutsch trata los <span class=\"term\">viajes en el tiempo</span> (desplazamiento a momentos anteriores o posteriores) como un problema de coherencia física. Distingue el viaje al futuro, que solo dilata el tiempo, del viaje al pasado, que es el interesante.",
        },
        {
          type: 'paragraph',
          html: "Las paradojas clásicas se disuelven con el multiverso. En la <span class=\"term\">paradoja del abuelo</span> (¿qué pasa si matas a tu antepasado?) el viajero conserva su libertad de acción. En general llega al pasado de un universo distinto. Así no borra su propio origen. Algo parecido ocurre con la paradoja del conocimiento.",
        },
        {
          type: 'paragraph',
          html: "Que el viaje al pasado sea factible o no queda abierto. Lo que Deutsch muestra es que analizarlo exige los cuatro hilos a la vez. Desde la cuántica hasta la epistemología que limita cómo puede aparecer el conocimiento.",
        },
        {
          type: 'key',
          html: "Viajar al pasado no es paradójico, porque uno actúa con libertad pero en el pasado de otro universo.",
        },
        {
          type: 'paragraph',
          html: "Ese análisis prepara la síntesis explícita de los cuatro hilos que sostienen todo el libro.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Los cuatro hilos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué las cuatro grandes teorías parecen frías cuando se leen por separado? Aquí Deutsch une explícitamente los cuatro hilos y señala un patrón histórico llamativo. Las cuatro teorías fundamentales fueron a la vez aceptadas para usarlas y rechazadas como descripción de la realidad.",
        },
        {
          type: 'paragraph',
          html: "Tomada por separado, cada teoría deja huecos y suena fría o pesimista. Basar en una sola toda la visión del mundo es una forma de reduccionismo. Unidas, en cambio, se corrigen y se completan. La <span class=\"term\">interpretación de Copenhague</span> (lectura que evita afirmar qué es real en la cuántica) ejemplifica una maniobra evasiva. Evita lo que la cuántica dice sobre lo real.",
        },
        {
          type: 'paragraph',
          html: "Ese rechazo no nace de fallas de las teorías. Nace de sostener un solo <span class=\"term\">paradigma</span> (marco de ideas dominante) a la vez, como describió Kuhn. La visión conjunta explica mejor por qué el universo puede contener conocimiento y cómo ese conocimiento progresa.",
        },
        {
          type: 'key',
          html: "Los cuatro hilos parecen fríos por separado, pero leídos como una sola explicación vuelven inteligible la trama de la realidad.",
        },
        {
          type: 'paragraph',
          html: "La síntesis final proyecta ese marco hasta el destino último del cosmos.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Los fines del universo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede el conocimiento perdurar hasta el fin del universo? En el cierre, Deutsch proyecta el marco hasta el final del cosmos. Se apoya en el <span class=\"term\">punto Omega</span> (destino final del universo según Frank Tipler). La pregunta ya no es el pasado del universo. Es la mayor parte del espacio-tiempo, que está en su futuro.",
        },
        {
          type: 'paragraph',
          html: "En ciertos modelos del Big Crunch (colapso final del universo), la violencia del colapso permitiría memoria y pasos de cómputo infinitos en un tiempo finito. Sostener ese cómputo, sin embargo, exige «pilotear» el colapso. Eso obliga a crear conocimiento sin cesar. Del principio de Turing se sigue entonces que la inteligencia debe sobrevivir hasta el fin.",
        },
        {
          type: 'paragraph',
          html: "Ese destino impone fechas límite. Hay que dominar el Sol antes de unos <span class=\"num\">5000 millones</span> de años. Luego colonizar la galaxia y el universo entero. Deutsch defiende solo el componente científico. Rechaza la lectura casi religiosa de Tipler. El futuro no será una mente única. Serán comunidades que discrepan y se equivocan a escala titánica.",
        },
        {
          type: 'key',
          html: "Si el principio de Turing es cierto, el conocimiento y la inteligencia deben perdurar hasta el fin del universo, aunque siempre falibles.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Multiverso",
    "description": "Toda la realidad física: muchos universos paralelos que interfieren débilmente."
  },
  {
    "title": "Explicación",
    "description": "Decir por qué pasa algo, no solo prever que pasará; es el núcleo de la ciencia."
  },
  {
    "title": "Inductivismo",
    "description": "Doctrina que se critica: pretende justificar teorías acumulando observaciones."
  },
  {
    "title": "Conjetura y refutación",
    "description": "Dinámica popperiana: el conocimiento progresa por crítica de explicaciones rivales."
  },
  {
    "title": "Criterio de realidad",
    "description": "Es real lo complejo y autónomo que «devuelve el golpe» (Dr. Johnson)."
  },
  {
    "title": "Principio de Turing",
    "description": "Es físicamente posible construir un generador de realidad virtual universal."
  },
  {
    "title": "Entornos Cantgotu",
    "description": "Entornos lógicamente posibles que ningún generador físico puede renderizar."
  },
  {
    "title": "Replicador",
    "description": "Entidad que causa copias de sí misma en ciertos entornos (gen, meme, programa)."
  },
  {
    "title": "Conocimiento objetivo",
    "description": "Información explicativa criticable y mejorable, con estructura a través de universos."
  },
  {
    "title": "Cuatro hilos",
    "description": "Integración de cuántica, epistemología, evolución y computación."
  }
],
  chronology: [
  {
    "year": "1633",
    "text": "Proceso a Galileo: autoridad doctrinal frente a método científico."
  },
  {
    "year": "1859",
    "text": "Darwin publica la teoría de la selección natural."
  },
  {
    "year": "1931",
    "text": "Gödel establece los límites de los sistemas formales (incompletitud)."
  },
  {
    "year": "1936",
    "text": "Turing, Church y Post formalizan la computación universal."
  },
  {
    "year": "1957",
    "text": "Everett presenta la interpretación de muchos mundos."
  },
  {
    "year": "1985",
    "text": "Deutsch publica un artículo fundacional de computación cuántica universal."
  },
  {
    "year": "1997",
    "text": "Se publica *The Fabric of Reality*."
  }
],
  figures: [
  {
    "name": "David Deutsch",
    "role": "Físico; autor del marco unificado de los cuatro hilos."
  },
  {
    "name": "Karl Popper",
    "role": "Filósofo; conjeturas y refutaciones como base epistemológica."
  },
  {
    "name": "Hugh Everett III",
    "role": "Físico; interpretación de muchos mundos en mecánica cuántica."
  },
  {
    "name": "Alan Turing",
    "role": "Matemático; computación universal y sus límites."
  },
  {
    "name": "Frank Tipler",
    "role": "Físico; teoría del punto Omega sobre el fin del universo."
  },
  {
    "name": "Galileo Galilei",
    "role": "Método experimental y realismo científico."
  },
  {
    "name": "Charles Darwin",
    "role": "Selección natural como origen de la adaptación."
  },
  {
    "name": "Kurt Gödel",
    "role": "Lógico; límites de la demostración en sistemas formales."
  },
  {
    "name": "Richard Dawkins",
    "role": "Biólogo; desarrollo del concepto de replicador y meme."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La tesis de Deutsch es que la realidad se vuelve inteligible solo cuando unimos física cuántica, teoría del conocimiento, computación y evolución.",
  "Ese cruce reemplaza la búsqueda de certezas finales por un programa de mejora constante de explicaciones.",
  "En ese marco, los universos paralelos, los límites del cálculo y la vida como información replicable dejan de ser temas separados.",
  "La racionalidad no garantiza infalibilidad, pero sí progreso crítico.",
  "El tejido de la realidad es, también, el tejido de cómo aprendemos a entenderla."
],
    highlight: "La realidad no se entiende acumulando datos, sino creando explicaciones cada vez mejores y más difíciles de reemplazar.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David Deutsch",
    line2: "\"The Fabric of Reality\" · Allen Lane / Penguin · 1997",
  },
}
