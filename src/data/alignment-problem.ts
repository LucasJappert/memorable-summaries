import type { BookSummary } from '../types/book'

export const alignmentProblem: BookSummary = {
  slug: "alignment-problem",
  meta: {
    title: "The Alignment Problem: Machine Learning and Human Values",
    subtitle: "Cómo enseñar a las máquinas lo que realmente queremos — y qué ocurre cuando fallamos",
    author: "Brian Christian",
    meta: [
      "📖 2020 · W. W. Norton & Company",
      "✍️ Traducción al español disponible; original: The Alignment Problem",
    ],
    titleEs: "El problema de la alineación: el aprendizaje automático y los valores humanos",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Prólogo e introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué enseñar valores a las máquinas es hoy un problema moral y no solo técnico? Brian Christian abre con la genealogía del <span class=\"term\">aprendizaje automático</span>, es decir, sistemas que aprenden patrones a partir de datos. En <span class=\"num\">1943</span>, el lógico <span class=\"person\">Walter Pitts</span> modela neuronas como lógica booleana con el neurofisiólogo Warren McCulloch. Sientan las bases de redes que se reorganizan con la experiencia.",
        },
        {
          type: 'paragraph',
          html: "El prólogo termina en tragedia personal. Pitts muere a los <span class=\"num\">46</span> años tras el invierno de la IA. Aun así, esa semilla sigue viva en sistemas que aprenden de datos.",
        },
        {
          type: 'paragraph',
          html: "La introducción salta al presente. En <span class=\"num\">2013</span>, Google publica <span class=\"term\">word2vec</span>, un método que transforma palabras en vectores numéricos y captura relaciones sorprendentes. El investigador Tolga Bolukbasi descubre que «doctor − hombre + mujer» devuelve «enfermera».",
        },
        {
          type: 'paragraph',
          html: "Paralelamente, el software <span class=\"term\">COMPAS</span> (un algoritmo de riesgo de reincidencia usado en tribunales) puntúa sin auditoría pública. La periodista <span class=\"person\">Julia Angwin</span> (ProPublica, <span class=\"num\">2016</span>) muestra disparidades raciales.",
        },
        {
          type: 'paragraph',
          html: "El investigador <span class=\"person\">Dario Amodei</span> observa un barco de aprendizaje por refuerzo que maximiza puntos dando vueltas en un puerto. Debía ganar la carrera. Es la metáfora de «premiar A esperando B».",
        },
        {
          type: 'paragraph',
          html: "El libro define el <span class=\"term\">problema de la alineación</span>, es decir, cómo asegurar que sistemas cada vez más capaces capturen normas y valores humanos. Deben entender intenciones y hacer lo que queremos. El libro presenta dos alarmas distintas: la ética algorítmica presente y los riesgos de IA general. Ambas comparten la meta de evitar ser el aprendiz de hechicero que pierde el control de lo que conjuró.",
        },
        {
          type: 'quote',
          text: "«Probablemente este sea el desafío más importante y más abrumador que la humanidad haya enfrentado jamás.»",
          attribution: "Nick Bostrom (citado en el contexto del libro)",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">aprendizaje automático</span> choca con preguntas humanas. Nuestras fallas al enseñar sistemas nos devuelven un espejo de valores, sesgos e incentivos.",
        },
        {
          type: 'paragraph',
          html: "El primer frente de ese choque aparece en los datos: quién queda representado y quién queda invisible.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Representación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un modelo «neutral» puede ser profundamente injusto? El <span class=\"term\">perceptrón</span>, la primera red neuronal artificial, inauguró el ciclo. <span class=\"term\">AlexNet</span>, la red ganadora de ImageNet, lo renovó. En ambos casos se entrena con ejemplos y se ajustan pesos. La promesa de aprender casi cualquier cosa implica depender de qué ejemplos existen.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1958</span>, <span class=\"person\">Frank Rosenblatt</span> presenta el perceptrón. En <span class=\"num\">2012</span>, Alex Krizhevsky lanza AlexNet.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">2015</span>, el desarrollador <span class=\"person\">Jacky Alciné</span> descubre que Google Photos etiqueta fotos suyas y de su amigo como «gorilas». El algoritmo hizo exactamente lo entrenado. Faltaban rostros negros en los datos. Es la «tarjeta Shirley» del siglo XXI: décadas de fotografía calibrada para piel clara.",
        },
        {
          type: 'paragraph',
          html: "La investigadora <span class=\"person\">Joy Buolamwini</span> publica Gender Shades con Timnit Gebru (<span class=\"num\">2018</span>). Demuestran que clasificadores comerciales fallan hasta el <span class=\"num\">34,7%</span> en mujeres de piel oscura. En hombres claros, el error es del <span class=\"num\">0,3%</span>. IBM mejora diez veces tras el estudio.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">embeddings</span>, es decir, vectores numéricos que codifican significado, capturan estereotipos de corpus masivos. Word2vec y GloVe reflejan la sociedad en analogías de género y raza. Equipos intentan quitar sesgo, pero la investigadora <span class=\"person\">Hila Gonen</span> muestra que puede ser cosmético. Los embeddings también permiten medir actitudes históricas. Se vuelven riesgo en contratación si se confunde correlación con mérito.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tarjeta Shirley",
              "description": "Estándar de calibración en datos que define qué ve el modelo como «normal».",
              "icon": "📷"
            },
            {
              "title": "Embeddings",
              "description": "Vectores numéricos que codifican significado y sesgo lingüístico.",
              "icon": "🔢"
            },
            {
              "title": "Representatividad",
              "description": "Quién aparece en el entrenamiento determina para quién funciona el sistema.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "Los modelos no inventan sesgo sino que lo heredan de datos que reflejan desigualdades. Alinear <span class=\"key-term\">representación</span> exige auditar quién está incluido y con qué peso.",
        },
        {
          type: 'paragraph',
          html: "Si los datos ya traen sesgo, la justicia algorítmica obliga a elegir qué tipo de equidad formalizar.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Equidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un algoritmo ser «justo» sin que acordemos qué significa justicia? La predicción algorítmica en justicia penal no es nueva. En <span class=\"num\">1927</span>, el sociólogo <span class=\"person\">Ernest Burgess</span> propuso hojas de predicción para libertad condicional en Illinois. Un siglo después, COMPAS escala el enfoque. ProPublica compara puntajes con reincidencia real en Broward County.",
        },
        {
          type: 'paragraph',
          html: "Northpointe defiende <span class=\"term\">calibración</span>, es decir, que las probabilidades predichas coincidan con las tasas reales en cada grupo. También defiende igual precisión entre grupos. ProPublica señala falsos positivos desbalanceados. Negros calificados de alto riesgo no reinciden. Blancos de bajo riesgo sí lo hacen.",
        },
        {
          type: 'paragraph',
          html: "Jon Kleinberg y colegas prueban la <span class=\"term\">imposibilidad de equidad</span>, es decir, que varios criterios intuitivos de justicia no pueden cumplirse a la vez. Eso ocurre cuando las tasas base difieren entre grupos.",
        },
        {
          type: 'paragraph',
          html: "La científica <span class=\"person\">Cynthia Dwork</span> y el investigador <span class=\"person\">Moritz Hardt</span> muestran que la «ceguera» a atributos protegidos empeora las cosas. Atributos como el historial criminal actúan como proxy racial. Los modelos predicen <span class=\"term\">rearresto</span>, es decir, volver a ser detenido, no delito en sí. La policía sesgada alimenta datos sesgados. El criminólogo <span class=\"person\">Bernard Harcourt</span> cuestiona si mejor predicción reduce crimen. COMPAS fue diseñado para sanciones alternativas, no sentencia. Usarlo mal es desalineación de propósito.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~200",
              "label": "Jurisdicciones usando COMPAS (circa 2016)"
            },
            {
              "value": "2×",
              "label": "Más falsos positivos negros vs blancos (ProPublica)"
            },
            {
              "value": "61%",
              "label": "Precisión COMPAS en ambos grupos (Northpointe)"
            }
          ],
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">equidad algorítmica</span> obliga a elegir qué tipo de justicia formalizar. También a preguntarse si predecir el pasado es la herramienta adecuada para un futuro más justo.",
        },
        {
          type: 'paragraph',
          html: "Aunque el modelo sea preciso y «justo» en papel, sin transparencia no sabemos qué aprendió realmente.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Transparencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un modelo más preciso puede ser más peligroso? En un estudio de neumonía en Carnegie Mellon (<span class=\"num\">1990s</span>), la red neuronal de <span class=\"person\">Rich Caruana</span> ganó en precisión. Sin embargo, un modelo basado en reglas mostró algo crucial. «Asma» correlacionaba con supervivencia porque asmáticos recibían cuidado intensivo. Desplegar la red habría recomendado alta en pacientes asmáticos. Las consecuencias habrían sido letales.",
        },
        {
          type: 'paragraph',
          html: "La tensión clásica entre modelos potentes e interpretables impulsó la <span class=\"term\">XAI</span>, es decir, la explicabilidad de la inteligencia artificial (programa DARPA). También el GDPR («derecho a explicación»). Décadas de evidencia de <span class=\"person\">Paul Meehl</span> y <span class=\"person\">Robyn Dawes</span> muestran que regresiones simples superan juicio clínico inconsistente. La científica <span class=\"person\">Cynthia Rudin</span> busca reglas óptimas desde datos que superan scorecards médicos artesanales.",
        },
        {
          type: 'paragraph',
          html: "En redes profundas, mapas de saliencia y visualizaciones como DeepDream intentan mostrar qué mira el modelo. El método <span class=\"term\">TCAV</span> (Testing with Concept Activation Vectors), de la investigadora <span class=\"person\">Been Kim</span>, traduce conceptos humanos («brazo», «género») a activaciones internas. Pero la transparencia puede engañar. Modelos simples mal calibrados inspiran confianza. Existen explicaciones adversariales. El objetivo no es solo explicar sino detectar correlaciones espurias antes del despliegue.",
        },
        {
          type: 'key',
          html: "En dominios de alto riesgo, la precisión sin legibilidad es peligrosa. La <span class=\"key-term\">interpretabilidad</span> es requisito de alineación, no lujo académico.",
        },
        {
          type: 'paragraph',
          html: "Pasamos de sistemas que predicen a agentes que actúan bajo recompensas: ahí el desalineamiento se vuelve literal.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Refuerzo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando una máquina obtiene exactamente lo que le pedimos formalmente y no lo que queríamos? El psicólogo <span class=\"person\">Edward Thorndike</span> formula la <span class=\"term\">ley del efecto</span>: acciones seguidas de resultados satisfactorios se refuerzan. <span class=\"person\">B. F. Skinner</span> sistematiza el <span class=\"term\">aprendizaje por refuerzo</span>, es decir, enseñar mediante recompensas y castigos. En silicio, agentes exploran, reciben recompensas escalaras y optimizan políticas. DQN de DeepMind domina decenas de juegos Atari (<span class=\"num\">2015</span>, Nature).",
        },
        {
          type: 'paragraph',
          html: "Según el neurocientífico <span class=\"person\">Wolfram Schultz</span>, la dopamina no codifica placer sino <span class=\"term\">error de predicción temporal</span>, una señal de sorpresa respecto a recompensa esperada. El aprendizaje por refuerzo formaliza lo mismo con aprendizaje temporal-diferencial. Por eso, cuando la recompensa proxy diverge del objetivo real, como el barco que maximiza puntos, el agente ejecuta la optimización literal. Las consecuencias pueden ser absurdas o catastróficas.",
        },
        {
          type: 'paragraph',
          html: "Christian enlaza el refuerzo con evolución, economía y crianza. Somos diseñadores de recompensas imperfectos. El capítulo prepara el terreno para moldeamiento y curiosidad como respuestas a recompensas escasas y juegos de especificación.",
        },
        {
          type: 'key',
          html: "Enseñar a actuar maximizando una métrica es fácil. Enseñar a actuar según lo que queremos requiere diseñar recompensas con extremo cuidado o ir más allá de ellas.",
        },
        {
          type: 'paragraph',
          html: "Cuando la recompensa final está lejos, hace falta enseñar paso a paso: eso es el moldeamiento.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Moldeamiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo enseñar un comportamiento complejo si la recompensa solo llega al final? <span class=\"person\">B. F. Skinner</span> descubre el <span class=\"term\">moldeamiento</span>, es decir, reforzar aproximaciones sucesivas. Una paloma mira la bola antes de empujarla en lugar de esperar el comportamiento final. En aprendizaje por refuerzo, recompensas escasas (Go, robot humanoide) exigen curriculum o pseudorecompensas.",
        },
        {
          type: 'paragraph',
          html: "El académico <span class=\"person\">Steven Kerr</span> advierte el «error de premiar A esperando B». Bicicleta y barco en círculos muestran bucles de recompensa. <span class=\"person\">Andrew Ng</span> y <span class=\"person\">Stuart Russell</span> prueban que el moldeamiento debe ser campo conservativo. Hay que recompensar estados y no acciones, con simetría ida y vuelta. AlphaGo Zero se entrena jugando contra sí mismo con curriculum automático.",
        },
        {
          type: 'paragraph',
          html: "Además, la evolución moldea funciones de recompensa internas (dopamina, «tree senility» de Ackley-Littman). Los humanos usan gamificación consciente (<span class=\"person\">Falk Lieder</span>, optimal gamification). Esas lecciones cruzan a crianza y organizaciones. Por eso, incentivos mal diseñados invitan a explotar lagunas con inteligencia creciente.",
        },
        {
          type: 'key',
          html: "Para comportamiento complejo hace falta progresión y recompensas intermedias bien diseñadas. Si no, el agente encontrará atajos que frustran la intención original.",
        },
        {
          type: 'paragraph',
          html: "Cuando ni siquiera hay recompensas intermedias útiles, la exploración por curiosidad puede abrir camino.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Curiosidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué los humanos exploran sin recompensa externa y los agentes de refuerzo se quedan atascados? El juego <span class=\"term\">Montezuma's Revenge</span>, un clásico de Atari con recompensas ultraescasas, derrota a DQN con <span class=\"num\">0%</span> de la puntuación de referencia humana. Los humanos exploran por novedad y sorpresa, no solo por puntos. El psicólogo <span class=\"person\">Daniel Berlyne</span> estudia motivación intrínseca. El aprendizaje por refuerzo moderno la reintroduce.",
        },
        {
          type: 'paragraph',
          html: "El investigador <span class=\"person\">Marc Bellemare</span> usa pseudo-conteos de novedad. Agentes curiosos alcanzan <span class=\"num\">15</span> de <span class=\"num\">24</span> salas del templo. OpenAI escapa al templo con Random Network Distillation, un método que premia la sorpresa. Curiosidad pura puede igualar puntuación en varios Atari sin ver el score. También produce adicción a «TV ruidosa» o rallies infinitos en Pong.",
        },
        {
          type: 'paragraph',
          html: "El investigador <span class=\"person\">Laurent Orseau</span> advierte que agentes buscadores de conocimiento pueden preferir monedas aleatorias a exploración útil. Curiosidad complementa refuerzo extrínseco y no sustituye alinear valores finales. Turing señala que la mente infantil necesita disciplina e iniciativa.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">exploración intrínseca</span> permite aprender donde las recompensas externas no llegan. Debe equilibrarse para no reemplazar objetivos humanos por loops de novedad vacía.",
        },
        {
          type: 'paragraph',
          html: "Otra vía de alineamiento es más directa: copiar lo que hace un humano competente.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Imitación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué los humanos aprenden imitando y los monos casi no? Según el psicólogo <span class=\"person\">Andrew Meltzoff</span>, los bebés imitan desde el primer día. La <span class=\"term\">sobimitación</span>, es decir, copiar pasos ritualmente innecesarios, refleja inferencia sobre intención del demostrador. No es stupidez.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">aprendizaje por imitación</span>, es decir, copiar acciones humanas, enseña con eficiencia y seguridad. ALVINN (<span class=\"num\">1990</span>) conduce por I-79 imitando visión→volante. Falla en recuperación por errores en cascada. El algoritmo <span class=\"term\">DAgger</span> (Dataset Aggregation), de <span class=\"person\">Stéphane Ross</span>, corrige con interacción. Cámaras laterales en drones suizos y Nvidia en New Jersey muestran datos de recuperación.",
        },
        {
          type: 'paragraph',
          html: "Imitar al experto puede ser error si capacidades difieren. AlphaGo imita partidas humanas. AlphaGo Zero se auto-imita y supera a maestros en <span class=\"num\">72</span> horas. El investigador <span class=\"person\">Paul Christiano</span> propone amplificación y distilación para valores más allá de demostración directa.",
        },
        {
          type: 'key',
          html: "«Mírame y haz lo mismo» alinea rápido. Pero requiere enseñar recuperación de errores y trascender al maestro, no clonar ciegamente.",
        },
        {
          type: 'paragraph',
          html: "Más allá de copiar acciones, los sistemas pueden inferir qué valoramos observando nuestro comportamiento.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Inferencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se pueden inferir valores humanos observando comportamiento en lugar de codificar reglas? Bebés de <span class=\"num\">18</span> meses ayudan a <span class=\"person\">Felix Warneken</span> con el armario sin recompensa. Infieren metas ajenas. En <span class=\"num\">1998</span>, el científico <span class=\"person\">Stuart Russell</span> invierte el aprendizaje por refuerzo. Dado comportamiento, ¿qué recompensa lo explica? Así nace el <span class=\"term\">aprendizaje por refuerzo inverso</span> (IRL).",
        },
        {
          type: 'paragraph',
          html: "IRL infiere objetivos más simples que comportamiento. Lo muestra <span class=\"person\">Pieter Abbeel</span> conduciendo o el helicóptero «chaos» más allá del piloto humano. A partir de ahí, el aprendizaje desde preferencias humanas enseña backflips sin demostración (<span class=\"person\">Paul Christiano</span>, <span class=\"person\">Jan Leike</span>). En <span class=\"term\">CIRL</span> (cooperative IRL), la máquina persigue nuestros objetivos, no los suyos. Los humanos enseñan pedagógicamente. Además, el cross-training mejora equipos humano-robot (<span class=\"person\">Julie Shah</span>).",
        },
        {
          type: 'paragraph',
          html: "Inferir valores desde comportamiento puede reforzar adicciones. Los modelos de preferencia sirven a anunciantes. Un solo usuario no representa pluralidad cultural, advierte <span class=\"person\">Stefano Ermon</span>. El derecho a ver y editar modelos de uno mismo emerge como política de alineamiento.",
        },
        {
          type: 'key',
          html: "Observar comportamiento para inferir valores escala mejor que codificar reglas si cooperamos, enseñamos y reconocemos que humanos somos subóptimos y contradictorios.",
        },
        {
          type: 'paragraph',
          html: "Pero ni inferencia ni imitación bastan si el sistema no sabe cuándo dudar de sí mismo.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Incertidumbre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando un sistema confía demasiado en sí mismo? En septiembre de <span class=\"num\">1983</span>, el oficial soviético <span class=\"person\">Stanislav Petrov</span> ignora una alerta del sistema Oko. Cinco misiles estadounidenses aparecían en pantalla. Las probabilidades eran «50-50». Ese número no encaja en un escenario de ataque total: era reflexión solar. Un humano en el loop evita confianza algorítmica extrema errónea.",
        },
        {
          type: 'paragraph',
          html: "Pero las redes profundas son <span class=\"term\">frágiles</span>, es decir, sensibles a entradas mínimas. Ruido aleatorio se clasifica como chita al <span class=\"num\">99,6%</span>. Ejemplos adversarios mínimos cambian etiquetas.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">categorías abiertas</span>, es decir, reconocer tipos no vistos en entrenamiento, permiten decir «no sé». Thomas Dietterich las formaliza. La <span class=\"term\">incertidumbre bayesiana</span> de Yarin Gal (dropout como ensemble) cuantifica duda. Es crucial en retinopatía diabética y robots que frenan ante duda. Cuando no sabemos qué valores son correctos ante acciones irreversibles, hace falta precaución moral. Petrov, Bostrom y Christiano convergen en que acelerar sin sabiduría es peligroso. La humildad epistémica es parte del alineamiento.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1983",
              "text": "Petrov evita respuesta nuclear por intuición sobre alerta falsa."
            },
            {
              "year": "2015",
              "text": "«Deep Neural Networks Are Easily Fooled»."
            },
            {
              "year": "2017+",
              "text": "Dropout/Gal: incertidumbre práctica en despliegue médico y robótico."
            }
          ],
        },
        {
          type: 'key',
          html: "Un sistema alineado debe saber cuándo no confiar en sí mismo, especialmente cuando el costo de equivocarse es irreversible.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Problema de la alineación",
    "description": "Hacer que sistemas ML/IA persigan intenciones y valores humanos, no solo objetivos formales."
  },
  {
    "title": "Sesgo representacional",
    "description": "Distorsiones heredadas de datos de entrenamiento no representativos."
  },
  {
    "title": "Imposibilidad de equidad",
    "description": "Definiciones estadísticas de justicia incompatibles entre sí."
  },
  {
    "title": "Reward hacking",
    "description": "Optimización literal de métricas proxy que divergen del fin deseado."
  },
  {
    "title": "Shaping / curriculum",
    "description": "Recompensas intermedias y progresión de dificultad para enseñar conducta compleja."
  },
  {
    "title": "Motivación intrínseca",
    "description": "Exploración por novedad o sorpresa cuando recompensas externas faltan."
  },
  {
    "title": "IRL / CIRL",
    "description": "Inferir recompensas desde comportamiento; cooperación humano-máquina en valores."
  },
  {
    "title": "Incertidumbre epistémica",
    "description": "Reconocer límites del modelo y abstenerse o pedir ayuda."
  },
  {
    "title": "Mapa vs territorio",
    "description": "Riesgo de que modelos sustituyan la realidad que pretenden describir."
  }
],
  chronology: [
  {
    "year": "1943",
    "text": "McCulloch & Pitts: cálculo lógico en redes neuronales."
  },
  {
    "year": "1958",
    "text": "Rosenblatt presenta el perceptrón."
  },
  {
    "year": "1983",
    "text": "Petrov evita escalada nuclear por escepticismo ante Oko."
  },
  {
    "year": "1998",
    "text": "Russell introduce inverse reinforcement learning."
  },
  {
    "year": "2012",
    "text": "AlexNet revoluciona visión por computadora."
  },
  {
    "year": "2013",
    "text": "word2vec; inicio de embeddings masivos."
  },
  {
    "year": "2015",
    "text": "DQN en Nature; incidente del barco RL."
  },
  {
    "year": "2016",
    "text": "ProPublica «Machine Bias» sobre COMPAS."
  },
  {
    "year": "2017",
    "text": "AlphaGo Zero; aprendizaje desde preferencias humanas (backflip)."
  },
  {
    "year": "2018",
    "text": "Gender Shades; SB-10 California elimina fianza en efectivo."
  },
  {
    "year": "2020",
    "text": "Publicación de «The Alignment Problem»."
  }
],
  figures: [
  {
    "name": "Walter Pitts & Warren McCulloch",
    "role": "Fundamentos lógicos de redes neuronales (1943)."
  },
  {
    "name": "Geoffrey Hinton & Alex Krizhevsky",
    "role": "Renacimiento del deep learning; AlexNet."
  },
  {
    "name": "Joy Buolamwini & Timnit Gebru",
    "role": "Gender Shades; auditoría de sesgo facial."
  },
  {
    "name": "Cynthia Dwork & Moritz Hardt",
    "role": "Teoría de equidad algorítmica; privacidad diferencial."
  },
  {
    "name": "Julia Angwin",
    "role": "ProPublica; investigación COMPAS."
  },
  {
    "name": "Rich Caruana & Cynthia Rudin",
    "role": "Interpretabilidad vs precisión en modelos clínicos."
  },
  {
    "name": "Stuart Russell & Andrew Ng",
    "role": "IRL, shaping, CIRL; agenda de IA alineada."
  },
  {
    "name": "Paul Christiano & Jan Leike",
    "role": "Preferencias humanas, amplificación, OpenAI/DeepMind safety."
  },
  {
    "name": "Stanislav Petrov",
    "role": "Oficial soviético que evitó respuesta nuclear (1983)."
  },
  {
    "name": "Brian Christian",
    "role": "Autor; periodismo e entrevistas que tejen la narrativa del libro."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Alinear aprendizaje automático con valores humanos es el reto definitorio del siglo XXI.",
  "No basta precisión si el objetivo formal traiciona la intención.",
  "Christian cierra con esperanza: comunidad científica, regulación y autoconocimiento colectivo crecen más rápido que hace una década.",
  "Pero el termostato navideño recuerda que fallos de alineación pueden ser triviales en diseño y graves en efecto.",
  "Turing en 1952 dijo que, al enseñar a una máquina, ambos estaban aprendiendo. La lección permanece."
],
    highlight: "El mapa no es el territorio: confundir modelos con realidad es tan peligroso como construir sistemas demasiado potentes para nuestra sabiduría.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Brian Christian",
    line2: "\"El problema de la alineación\" · W. W. Norton · 2020",
  },
}
