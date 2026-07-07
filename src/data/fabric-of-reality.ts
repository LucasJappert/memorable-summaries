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
          html: "Deutsch parte de una idea exigente. El conocimiento científico consiste sobre todo en <span class=\"term\">explicaciones</span>, no en predicciones. Los hechos se consultan y las predicciones solo sirven para diseñar los experimentos que deciden entre teorías rivales que ya son buenas explicaciones.",
        },
        {
          type: 'paragraph',
          html: "Contra la intuición de que la ciencia se fragmenta en especialidades inabarcables, sostiene que nuestras mejores teorías se vuelven más profundas y se integran entre sí. Por eso nos acercamos, y no nos alejamos, de un estado en que una sola persona podría entender todo lo entendido.",
        },
        {
          type: 'paragraph',
          html: "Esa <span class=\"term\">Teoría del Todo</span> es más amplia que la que buscan los físicos de partículas, porque la realidad no se compone solo de espacio, tiempo y partículas, sino también de vida, pensamiento y cómputo. La sostienen cuatro hilos que se explican mejor juntos.",
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
          html: "Los experimentos de <span class=\"term\">interferencia</span> esconden un hecho perturbador. En un patrón de sombras hay puntos que se oscurecen cuando se abren nuevas rendijas en la barrera, y esto ocurre incluso lanzando <span class=\"term\">fotones</span> de a uno.",
        },
        {
          type: 'paragraph',
          html: "Si un solo fotón atraviesa el aparato, algo tiene que interferir con él para bloquearlo justo donde antes había luz. Deutsch argumenta que ese «algo» son fotones sombra que viajan por otros universos y solo se detectan por su interferencia con el nuestro.",
        },
        {
          type: 'paragraph',
          html: "La conclusión es que el universo que vemos no es toda la realidad física. Existe un <span class=\"term\">multiverso</span> con enormes cantidades de universos paralelos. Lo que vuelve creíble la idea no es su rareza, sino que toda alternativa exige maniobras artificiales que explican menos.",
        },
        {
          type: 'key',
          html: "La interferencia de partículas individuales solo tiene una explicación no forzada, y es que existen universos paralelos físicamente reales.",
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
          html: "Deutsch ataca el <span class=\"term\">inductivismo</span>, la idea de que las teorías se obtienen y se justifican acumulando observaciones. Repetir casos nunca prueba una ley, y ni siquiera se puede extrapolar una observación sin un marco explicativo previo.",
        },
        {
          type: 'paragraph',
          html: "Siguiendo a <span class=\"person\">Popper</span>, propone que la ciencia es resolución de problemas. Aparece un problema cuando nuestras explicaciones fallan, y entonces formulamos <span class=\"term\">conjeturas</span>, las criticamos y descartamos las peores. El experimento refuta errores, pero no otorga certeza final.",
        },
        {
          type: 'paragraph',
          html: "Ese proceso se parece a la evolución biológica, donde sobreviven las variantes mejor adaptadas. Las teorías que superan la crítica se vuelven las vigentes, hasta que nuevos problemas exigen explicaciones aún mejores.",
        },
        {
          type: 'key',
          html: "El conocimiento crece por crítica racional entre explicaciones rivales, no por acumular observaciones que «confirmen».",
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
          html: "¿Qué nos autoriza a llamar «real» a algo que no vemos, como los universos paralelos? Deutsch responde con un criterio simple. Es real aquello complejo y autónomo que «devuelve el golpe», el <span class=\"term\">criterio de Dr. Johnson</span>.",
        },
        {
          type: 'paragraph',
          html: "Lo defiende tomando en serio el <span class=\"term\">solipsismo</span>, la tesis de que solo existe mi mente. Resulta autoconsistente, pero al usarlo como explicación se vuelve un realismo disfrazado y recargado, porque necesita reintroducir toda la complejidad del mundo dentro de la mente. Por eso lo descarta la <span class=\"term\">navaja de Occam</span>.",
        },
        {
          type: 'paragraph',
          html: "Tomamos como real lo que nuestras mejores explicaciones necesitan para funcionar. Ese mismo mundo tiene una <span class=\"term\">autosemejanza</span> que permite que un trozo de realidad represente a otro, la propiedad que estudiaron primero los teóricos de la computación.",
        },
        {
          type: 'key',
          html: "Es real lo que nuestras mejores explicaciones no pueden evitar usar, aunque nunca lo observemos de forma directa.",
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
          html: "La <span class=\"term\">realidad virtual</span> parece un asunto tecnológico, pero para Deutsch es una pista sobre la estructura del mundo. Un generador de realidad virtual da al usuario la experiencia de estar en un entorno determinado.",
        },
        {
          type: 'paragraph',
          html: "Conviene distinguir dos cosas. Una <span class=\"term\">imagen</span> produce sensaciones, mientras que un entorno renderizado además responde de la forma esperada a cada acción posible del usuario. Que esto sea posible no es un detalle de ingeniería, sino la base de la computación, la imaginación, la ciencia y hasta el arte.",
        },
        {
          type: 'paragraph',
          html: "El alcance de la realidad virtual no lo fija la técnica actual, sino las leyes físicas y la capacidad de cómputo. Esa pregunta por sus límites abre el capítulo siguiente.",
        },
        {
          type: 'key',
          html: "Que se puedan simular entornos enteros es un hecho profundo sobre la realidad, no un mero truco de las computadoras.",
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
          html: "¿Hasta dónde llega la realidad virtual? Deutsch da una respuesta doble, con un techo altísimo y un límite tajante. Por un lado formula el <span class=\"term\">principio de Turing</span>, según el cual es físicamente posible construir un generador de realidad virtual universal.",
        },
        {
          type: 'paragraph',
          html: "Ese generador universal podría reproducir cualquier entorno físicamente posible. La razón es la <span class=\"term\">máquina universal de Turing</span>, un único objeto capaz de imitar a cualquier otro. Esa universalidad es lo que hace comprensible la realidad, porque una parte del mundo puede modelar a todas las demás.",
        },
        {
          type: 'paragraph',
          html: "Por otro lado, un <span class=\"term\">argumento diagonal</span> al estilo de Cantor y Turing muestra que la inmensa mayoría de entornos lógicamente posibles nunca podrán renderizarse. Deutsch los llama entornos <span class=\"term\">Cantgotu</span>. La universalidad es enorme, aunque no abarca todo lo imaginable.",
        },
        {
          type: 'key',
          html: "La computación puede ser universal dentro de lo físicamente posible, aunque casi todo lo lógicamente posible quede para siempre fuera de su alcance.",
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
          html: "En forma de diálogo, Deutsch remata la discusión sobre cómo se justifica el conocimiento. Su blanco es el <span class=\"term\">cripto-inductivista</span>, quien concede que la inducción es inválida pero sigue creyendo que hace falta algún principio que garantice confiar en la ciencia.",
        },
        {
          type: 'paragraph',
          html: "El error está en suponer un principio oculto según el cual «el futuro se parecerá al pasado». No existe tal principio. Cuando predecimos, lo hacemos apoyados en explicaciones sobre cómo funcionan las cosas, no en una fe en la repetición.",
        },
        {
          type: 'paragraph',
          html: "La justificación no descansa en fundamentos infalibles, sino en argumentos que comparan explicaciones y eliminan las que empeoran el cuadro. El conocimiento es falible y, aun así, puede ser objetivo.",
        },
        {
          type: 'key',
          html: "No hay un principio de inducción escondido detrás de la ciencia, solo crítica racional de explicaciones frente a problemas concretos.",
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
          html: "La ciencia desde Galileo pareció mostrar que la vida es un accidente marginal en un universo inmenso. Deutsch invierte esa impresión sin caer en el <span class=\"term\">vitalismo</span>.",
        },
        {
          type: 'paragraph',
          html: "La clave está en los <span class=\"term\">replicadores</span>, entidades que logran que su entorno las copie. Los <span class=\"term\">genes</span> son replicadores hechos de ADN, y una idea que se propaga es un <span class=\"term\">meme</span>. Estar adaptado a un <span class=\"term\">nicho</span> significa encarnar conocimiento que hace que ese nicho conserve ese conocimiento.",
        },
        {
          type: 'paragraph',
          html: "Además, la vida fue el primer modo en que la realidad virtual se realizó en la naturaleza, lo que la liga al principio de Turing. A gran escala, la estructura más regular a través de los universos aparece justo donde hay materia que porta conocimiento, como el ADN o los cerebros.",
        },
        {
          type: 'key',
          html: "La vida es creación y transmisión de conocimiento codificado en procesos físicos, y por eso resulta fundamental, no marginal.",
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
          html: "La <span class=\"term\">computación cuántica</span> demuestra que la teoría cuántica describe recursos físicos reales, no solo un formalismo matemático. Deutsch la presenta como un modo cualitativamente nuevo de aprovechar la naturaleza.",
        },
        {
          type: 'paragraph',
          html: "La universalidad no solo es posible, también es tratable, porque un computador puede reproducir cualquier entorno físicamente posible sin recursos desmesurados. Un computador cuántico resuelve de forma eficiente problemas clásicamente <span class=\"term\">intratables</span>, como la <span class=\"term\">factorización</span> de números grandes.",
        },
        {
          type: 'paragraph',
          html: "¿De dónde sale esa potencia? Deutsch responde que el cálculo se reparte entre universos paralelos que interfieren. Ese rendimiento es, por tanto, otra evidencia a favor del multiverso. El obstáculo práctico principal es la <span class=\"term\">decoherencia</span>, que degrada la interferencia entre ramas.",
        },
        {
          type: 'key',
          html: "El poder de la computación cuántica refuerza una lectura realista de la cuántica, porque se explica mejor admitiendo universos que colaboran.",
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
          html: "Deutsch desafía la creencia de que la matemática es el reino de la certeza absoluta. Sostiene que el conocimiento matemático es derivado y depende de nuestra física.",
        },
        {
          type: 'paragraph',
          html: "Una <span class=\"term\">demostración</span> no es una cadena de símbolos infalible, sino un cómputo físico que modela las propiedades de una entidad abstracta. Su validez depende de que sean correctas nuestras teorías sobre los objetos con que demostramos, así que no otorga certeza.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">teorema de incompletitud</span> de <span class=\"person\">Gödel</span> hundió el sueño de <span class=\"person\">Hilbert</span> de fijar de una vez la certeza matemática. Aun así, Deutsch mantiene el realismo, porque las entidades abstractas complejas existen objetivamente, incluso las incomprensibles, que solo aparecen dentro de nuestras explicaciones de las comprensibles.",
        },
        {
          type: 'key',
          html: "Las verdades matemáticas son objetivas pero no ciertas, porque conocerlas depende de lo que sepamos del mundo físico.",
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
          html: "El <span class=\"term\">tiempo</span> es, para Deutsch, el primer concepto cuántico, aunque se descubriera milenios antes que la cuántica. Su tesis provocadora es que el tiempo no fluye.",
        },
        {
          type: 'paragraph',
          html: "La sensación de que el presente «se mueve» hacia el futuro no describe nada real. La realidad es un <span class=\"term\">multiverso</span>, y lo que llamamos otros momentos son en verdad casos especiales de otros universos, no etapas por las que algo se desplaza.",
        },
        {
          type: 'paragraph',
          html: "Por eso la física del <span class=\"term\">espacio-tiempo</span>, como la relatividad, es a lo sumo una aproximación. Nuestras intuiciones temporales clásicas bloquean las buenas explicaciones, y conviene revisarlas para entender el cambio y la causalidad.",
        },
        {
          type: 'key',
          html: "El tiempo no fluye, y pensar «otros tiempos» como otros universos disuelve las paradojas de un presente en movimiento.",
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
          html: "Deutsch trata los <span class=\"term\">viajes en el tiempo</span> como un problema de coherencia física, no como una fantasía. Distingue el viaje al futuro, que solo dilata el tiempo, del viaje al pasado, que es el interesante.",
        },
        {
          type: 'paragraph',
          html: "Las paradojas clásicas se disuelven con el multiverso. En la <span class=\"term\">paradoja del abuelo</span> el viajero conserva su libertad de acción, pero en general llega al pasado de un universo distinto, así que no borra su propio origen. Algo parecido ocurre con la <span class=\"term\">paradoja del conocimiento</span>.",
        },
        {
          type: 'paragraph',
          html: "Que el viaje al pasado sea factible o no queda abierto. Lo que Deutsch muestra es que analizarlo exige los cuatro hilos a la vez, desde la cuántica hasta la epistemología que limita cómo puede aparecer el conocimiento.",
        },
        {
          type: 'key',
          html: "Viajar al pasado no es paradójico, porque uno actúa con libertad pero en el pasado de otro universo.",
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
          html: "Aquí Deutsch une explícitamente los cuatro hilos y señala un patrón histórico llamativo. Las cuatro teorías fundamentales fueron a la vez aceptadas para usarlas y rechazadas como descripción de la realidad.",
        },
        {
          type: 'paragraph',
          html: "Tomada por separado, cada teoría deja huecos y suena fría o pesimista, y basar en una sola toda la visión del mundo es una forma de reduccionismo. Unidas, en cambio, se corrigen y se completan. La <span class=\"term\">interpretación de Copenhague</span> ejemplifica una maniobra para evadir lo que la cuántica dice sobre lo real.",
        },
        {
          type: 'paragraph',
          html: "Ese rechazo no nace de fallas de las teorías, sino de sostener un solo <span class=\"term\">paradigma</span> a la vez, como describió Kuhn. La visión conjunta explica mejor por qué el universo puede contener conocimiento y cómo ese conocimiento progresa.",
        },
        {
          type: 'key',
          html: "Los cuatro hilos parecen fríos por separado, pero leídos como una sola explicación vuelven inteligible la trama de la realidad.",
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
          html: "En el cierre, Deutsch proyecta el marco hasta el final del cosmos apoyándose en el <span class=\"term\">punto Omega</span> de <span class=\"person\">Frank Tipler</span>. La pregunta ya no es el pasado del universo, sino la mayor parte del espacio-tiempo, que está en su futuro.",
        },
        {
          type: 'paragraph',
          html: "En ciertos modelos del <span class=\"term\">Big Crunch</span>, la violencia del colapso final permitiría memoria y pasos de cómputo infinitos en un tiempo finito. Sostener ese cómputo, sin embargo, exige «pilotear» el colapso, y eso obliga a crear conocimiento sin cesar. Del <span class=\"term\">principio de Turing</span> se sigue entonces que la inteligencia debe sobrevivir hasta el fin.",
        },
        {
          type: 'paragraph',
          html: "Ese destino impone fechas límite, como dominar el Sol antes de unos <span class=\"num\">5000 millones</span> de años y luego colonizar la galaxia y el universo entero. Deutsch defiende solo el componente científico y rechaza la lectura casi religiosa de Tipler, porque el futuro no será una mente única sino comunidades que discrepan y se equivocan a escala titánica.",
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
