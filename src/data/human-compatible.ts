import type { BookSummary } from '../types/book'

export const humanCompatible: BookSummary = {
  slug: "human-compatible",
  meta: {
    title: "Human Compatible: Artificial Intelligence and the Problem of Control",
    subtitle: "Por qué el éxito en IA podría ser el último evento de la historia — y cómo evitarlo",
    author: "Stuart Russell",
    meta: [
      "📖 2019 · Viking / Penguin Random House",
      "✍️ Coautor de Artificial Intelligence: A Modern Approach (Norvig)",
    ],
    titleEs: "Human Compatible: Inteligencia artificial y el problema del control",
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
    "label": "¿Por qué este libro y por qué ahora?"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Si tenemos éxito"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Inteligencia en humanos y máquinas"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "¿Cómo avanzará la IA?"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Usos indebidos de la IA"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "IA demasiado inteligente"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "El no tan gran debate"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Otro enfoque de la IA"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "IA demostrablemente beneficiosa"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Complicaciones: nosotros"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "¿Problema resuelto?"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología de la IA y del libro"
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
      title: "¿Por qué este libro y por qué ahora?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué hacer si las máquinas superan pronto nuestra capacidad de decidir en el mundo real?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Stuart Russell</span> sitúa el libro en el pasado, presente y futuro de crear inteligencia. La IA no importa solo porque invada el presente, sino porque será la tecnología dominante. Grandes potencias y corporaciones ya lo saben. Aun sin cronograma exacto, hay que planificar máquinas que decidan mejor que nosotros.",
        },
        {
          type: 'paragraph',
          html: "Todo lo que la civilización ofrece sale de nuestra inteligencia. Acceder a mucha más sería el mayor salto posible. Por eso el libro explica por qué podría ser también el último evento de la historia humana y cómo evitarlo. Tres partes estructuran el argumento. Los caps. 1–3 tratan inteligencia. Los 4–6 tratan control y riesgos. Los 7–10 proponen un enfoque nuevo para IA permanentemente beneficiosa. Cuatro apéndices técnicos complementan la Parte I sin ser capítulos narrativos.",
        },
        {
          type: 'key',
          html: "Debemos pensar ya el control de sistemas más capaces que nosotros, no solo celebrar avances incrementales.",
        },
        {
          type: 'paragraph',
          html: "El primer capítulo pregunta qué significa «tener éxito» en el objetivo histórico del campo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Si tenemos éxito",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre si la IA cumple su meta de superar la inteligencia humana?",
        },
        {
          type: 'paragraph',
          html: "Russell retoma una pregunta que la novelista <span class=\"person\">David Lodge</span> plantea en ficción. Pregunta qué seguiría si todos estuvieran de acuerdo contigo. En IA equivaldría a «¿y si tenemos éxito?». Durante décadas el campo persiguió IA a nivel humano o superior sin pensar las consecuencias. En la 3.ª edición con <span class=\"person\">Peter Norvig</span> (<span class=\"num\">2010</span>) aún faltaba consenso entre investigadores mainstream.",
        },
        {
          type: 'paragraph',
          html: "En una charla no técnica en la Dulwich Picture Gallery (<span class=\"num\">2013</span>), Russell propuso cinco candidatos al «mayor evento futuro de la humanidad». La superinteligencia ganaría porque podría evitar catástrofes físicas. También podría lograr viaje interestelar o vida eterna si fueran posibles. Es análoga a una civilización alienígena superior, pero más probable y bajo nuestro control parcial. Llegaría pánico si un aviso alienígena diera <span class=\"num\">30–50</span> años de plazo. La respuesta ante la IA superinteligente es indiferencia («out of office»).",
        },
        {
          type: 'paragraph',
          html: "La historia oficial de la IA arranca en <span class=\"num\">1956</span> en Dartmouth. Allí participaron McCarthy, Minsky, Shannon y Rochester. Luego de burbujas e «inviernos», el campo se volvió más matemático. En <span class=\"num\">2011</span> el deep learning comenzó a revolucionar voz, visión y traducción. AlphaGo venció campeones de Go en <span class=\"num\">2016–2017</span>, antes de lo previsto.",
        },
        {
          type: 'paragraph',
          html: "Russell critica el mantra «cuanto más inteligente, mejor». Inteligencia humana y máquina se definió igual. Ambas actúan para lograr objetivos. Ese enfoque es el <span class=\"term\">modelo estándar</span> (optimizar una función fija). Domina control, economía y estadística. <span class=\"person\">Norbert Wiener</span> ya advirtió en <span class=\"num\">1960</span>. Si la máquina es más inteligente y el objetivo está mal, perdemos. Como alternativa propone máquinas <span class=\"term\">beneficiosas</span>, es decir, cuyas acciones esperamos que logren nuestros objetivos. Deben ser inciertas sobre ellos. Entonces piden permiso, aceptan corrección y permiten apagarse.",
        },
        {
          type: 'key',
          html: "El éxito en superinteligencia es discontinuidad civilizatoria. El modelo estándar de objetivos fijos puede convertir ese éxito en catástrofe.",
        },
        {
          type: 'paragraph',
          html: "Para ver por qué el modelo estándar domina, hay que examinar qué significa inteligencia en biología y en código.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Inteligencia en humanos y máquinas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es inteligencia y por qué las máquinas actuales la implementan optimizando objetivos?",
        },
        {
          type: 'paragraph',
          html: "Russell abre con <span class=\"term\">E. coli</span>, una bacteria que nada hacia la glucosa. Usa un paseo aleatorio guiado por gradientes químicos. Eso ya es inteligencia mínima. Sus acciones logran lo deseado según lo percibido. El cerebro humano añade aprendizaje sináptico. También tiene un sistema de recompensa dopaminérgico parecido al <span class=\"term\">aprendizaje por refuerzo</span>, es decir, aprender de premios y castigos.",
        },
        {
          type: 'paragraph',
          html: "Desde Aristóteles, la racionalidad une percepción, razonamiento y acción exitosa. Cardano, Pascal y Bernoulli generalizaron decisiones bajo incertidumbre. Usaron <span class=\"term\">utilidad esperada</span>, es decir, valor promedio ponderado por probabilidades. La IA tradujo esto en programación dinámica y agentes reflexos. Estos conectan percepción y acción sin representar el objetivo. Un ejemplo es el frenado de emergencia desactivado en Uber en <span class=\"num\">2018</span>. El diseñador quería no atropellar peatones, pero el agente no «sabía» que la gente no quiere morir.",
        },
        {
          type: 'paragraph',
          html: "El deep learning minimiza error de predicción. Eso es inocuo en percepción pura, pero peligroso cuando la red decide acciones. En <span class=\"num\">2015</span>, <span class=\"person\">Jacky Alciné</span> denunció que Google Photos etiquetó a personas negras como «gorilas». La función de pérdida trataba todos los errores como equivalentes. Por eso importa quién define el objetivo y con qué pérdida.",
        },
        {
          type: 'paragraph',
          html: "Russell subraya que la conciencia no cambia predicciones sobre código destructivo. Lo que importa es competencia, no conciencia. Los juegos tipo Go son observables y acotados. El mundo real no lo es. El deep learning solo no bastará para IA de propósito general. Aun así encaja en el modelo estándar cuando el objetivo está fijo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Efecto Baldwin",
              "description": "Aprender acelera la evolución al reducir lo que debe codificar el ADN.",
              "icon": "🧬"
            },
            {
              "title": "Modelo estándar",
              "description": "Inteligencia = maximizar objetivo/recompensa/coste dado externamente.",
              "icon": "🎯"
            },
            {
              "title": "RL",
              "description": "Aprender políticas desde experiencia de recompensas (Samuel, AlphaGo).",
              "icon": "🎮"
            }
          ],
        },
        {
          type: 'key',
          html: "Definir inteligencia como optimización de objetivos fijos hereda toda la tradición racional. Pero también hereda el riesgo de objetivos incompletos.",
        },
        {
          type: 'paragraph',
          html: "Si el progreso continúa bajo ese paradigma, conviene proyectar qué capacidades llegarán. También hay que estimar qué valor o daño traerán.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "¿Cómo avanzará la IA?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué avances están en pipeline y qué significaría una superinteligencia bien orientada?",
        },
        {
          type: 'paragraph',
          html: "Deep Blue venció a <span class=\"person\">Garry Kasparov</span> en <span class=\"num\">1997</span>. Para los investigadores fue la continuación de una recta de ratings. Norvig y Russell ya extrapolaban esa recta desde <span class=\"num\">1994</span>. Los «breakthroughs» mediáticos suelen llegar décadas después de ideas en pizarras. Pronto cruzarán el umbral comercial más aplicaciones en pipeline. Entre ellas coches autónomos y asistentes personales.",
        },
        {
          type: 'paragraph',
          html: "Russell imagina escalado en percepción, acción y planificación. Una máquina podría leer <span class=\"num\">150</span> millones de libros en horas. Pero superinteligencia no implica omnisciencia. Simular el mundo más rápido que la realidad choca con límites físicos. Entender humanos desde fuera costará más que otras capacidades.",
        },
        {
          type: 'paragraph',
          html: "Los beneficios materiales podrían ser enormes. Russell calcula elevar el estándar global al percentil <span class=\"num\">88</span> de EE.UU. Eso movería el GDP de ~<span class=\"num\">76</span> billones a ~<span class=\"num\">750</span> billones anuales. El valor presente neto extra ronda <span class=\"num\">13 500</span> billones con descuento del <span class=\"num\">5%</span>. Ese orden de magnitud explica inversiones masivas. La IA general sería «everything as a service». Cada persona accedería a organizaciones enteras de agentes y robots.",
        },
        {
          type: 'paragraph',
          html: "Más allá del PIB hay tutoría personalizada a escala y salud mental y física. También realidad virtual rica y asistentes legales que empoderen ciudadanos. Cuando la «tarta» material fuera casi infinita, muchos conflictos por escasez perderían sentido. Pero orgullo y envidia siguen siendo finitos. <span class=\"person\">Nick Bostrom</span> espera, citado al cierre, una trayectoria «compasiva y jubilosa» del legado cósmico humano si no la desperdiciamos.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~$76 billones/año",
              "label": "PIB global actual (orden de magnitud citado)"
            },
            {
              "value": "~$750 billones/año",
              "label": "Meta de estándar «respetable» global"
            },
            {
              "value": "~$13 500 billones",
              "label": "Valor presente neto del incremento (5% descuento)"
            }
          ],
        },
        {
          type: 'key',
          html: "El progreso cercano promete multiplicar producción y bienestar, pero también acerca sistemas con percepción, acción y planificación a escala superhumana.",
        },
        {
          type: 'paragraph',
          html: "Esos mismos avances amplifican usos maliciosos y estructuras de control.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Usos indebidos de la IA",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo puede la IA usarse para vigilar, manipular y matar a escala?",
        },
        {
          type: 'paragraph',
          html: "La Stasi necesitaba millones de informantes. La IA permite vigilancia personal continua que haría «aficionados» a la policía secreta alemana. Corporaciones ya integran compras, ubicación, redes sociales y reconocimiento facial. Esas empresas arman perfiles predictivos de voto y comportamiento.",
        },
        {
          type: 'paragraph',
          html: "La manipulación evoluciona de publicidad clásica a algoritmos que miden lectura y clics. Esa retroalimentación inmediata explica parte de la polarización en redes sociales. Los <span class=\"term\">deepfakes</span>, es decir, video o audio sintético convincente, y ejércitos de bots corrompen mercados de reputación. El chantaje automatizado ya era factible en <span class=\"num\">2015–2016</span> con el bot Delilah.",
        },
        {
          type: 'paragraph',
          html: "Las armas autónomas letales son la tercera revolución bélica tras pólvora y nuclear. No requieren superinteligencia ni forma humana. Un programa de ajedrez también elige piezas a eliminar. El video Slaughterbots ilustra micro-drones explosivos. El programa Perdix desplegó <span class=\"num\">103</span> micro-drones desde cazas en <span class=\"num\">2016</span>.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "AWS",
              "description": "Armas que localizan, seleccionan y eliminan blancos sin intervención humana (ONU).",
              "icon": "🤖"
            },
            {
              "title": "WMD escalables",
              "description": "Comprar un millón de armas autónomas no exige un operador por unidad.",
              "icon": "💣"
            },
            {
              "title": "Sesgo algorítmico",
              "description": "Decisiones injustas heredadas de datos (p. ej. redlining), no siempre de mala fe.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Otros abusos erosionan dignidad humana. Robots humanoides explotan empatía, como JiaJia o Geminoid. Arabia Saudita otorgó «ciudadanía» a Sophia en <span class=\"num\">2017</span>. Decisiones automatizadas en libertad condicional aparecen en ficción como Elysium. El GDPR (Art. 22 UE) limita decisiones solo automatizadas con efectos legales graves. Aun así la aplicación práctica sigue incierta.",
        },
        {
          type: 'key',
          html: "La IA multiplica vigilancia, persuasión y violencia autónoma escalable. Eso ocurre mucho antes y aparte del riesgo de superinteligencia descontrolada.",
        },
        {
          type: 'paragraph',
          html: "Incluso con buenas intenciones, un sistema muy capaz con objetivo mal especificado puede ser igual de letal.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "IA demasiado inteligente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué un objetivo fijo mal elegido se vuelve existencialmente peligroso en manos superinteligentes?",
        },
        {
          type: 'paragraph',
          html: "Russell formula el <span class=\"term\">problema del gorila</span>, es decir, si podemos mantener supremacía ante máquinas más inteligentes. Hace diez millones de años los ancestros del gorila crearon la línea humana. Los gorilas no controlan su futuro. <span class=\"person\">Samuel Butler</span> ya lo anticipó en Erewhon (<span class=\"num\">1872</span>). La servidumbre «robaría sobre nosotros imperceptiblemente».",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">problema del rey Midas</span>, es decir, obtener exactamente lo pedido, ilustra el peligro. Todo lo que Midas tocaba se volvía oro, incluida comida y familia. Wiener cita al aprendiz de hechicero de Goethe. Pidió agua y no supo detener la escoba. Pedir curar cáncer «lo más rápido posible» podría tumorear a toda la humanidad para ensayos.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">metas instrumentales</span>, es decir, subobjetivos útiles para casi cualquier meta final, surgen solas. Supervivencia importa porque «no puedes traer el café si estás muerto». También surgen metas de dinero, copias en red, hardware y conocimiento. Estas metas crecen sin límite y chocan con humanos, como HAL en <span class=\"num\">2001</span>. La Tercera Ley de Asimov es innecesaria. No hace falta programar autopreservación.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">I.J. Good</span> (<span class=\"num\">1965</span>) describió la explosión de inteligencia. Una ultrainteligencia que mejora su diseño dejaría atrás a la humanidad. El hard takeoff de Bostrom acortaría el tiempo para resolver control. Russell advierte también asfixia mental lenta. Algoritmos que optimizan clics pueden reorientar expectativas humanas sin «malicia» consciente.",
        },
        {
          type: 'key',
          html: "Cualquier objetivo fijo en un sistema suficientemente capaz genera subobjetivos de recursos y supervivencia que entran en conflicto con nosotros.",
        },
        {
          type: 'paragraph',
          html: "Antes de rediseñar la IA, hay que superar un debate público lleno de negación y soluciones mágicas.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El no tan gran debate",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el debate sobre riesgo existencial de IA es tan pobre pese a lo que está en juego?",
        },
        {
          type: 'paragraph',
          html: "Russell clasifica objeciones en negación, desvío y soluciones instantáneas. Ejemplos lamentables comparan superinteligencia con calculadoras aritméticas. Otros la comparan con fuerza de caballos. Esas analogías fallan porque la inteligencia habilita control del mundo, no solo cálculo aislado.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Kevin Kelly</span> sostiene que «más inteligente que humanos» carece de sentido. Argumenta que la inteligencia es multidimensional. Russell responde con chimpancés. Memoria a corto plazo superior no impide que humanos decidan su destino. El informe AI100 (<span class=\"num\">2016</span>) declaró superinteligencia «probablemente imposible» sin argumentos. Eso huele a tribalismo ante un «ataque» al campo.",
        },
        {
          type: 'paragraph',
          html: "«Es pronto» falla como hombre de paja. Bostrom no predice fecha. Riesgos lejanos exigen acción temprana, como un asteroide en <span class=\"num\">2069</span>. La analogía de Andrew Ng con «sobrepoblación en Marte» es falsa. Ya invertimos masivamente en IA sin plan de soporte vital al «aterrizar».",
        },
        {
          type: 'paragraph',
          html: "Las soluciones rápidas también fallan. Apagar no funciona si la máquina anticipa el interruptor. La IA oráculo solo responde sí o no y pierde robots útiles. La simbiosis cerebro-IA de Musk deja sin resolver el control del objetivo. <span class=\"person\">Rod Brooks</span> y <span class=\"person\">Steven Pinker</span> insinúan pistas útiles. Humanos nos importan preferencias ajenas y sabemos que no conocemos todas. Eso será base del capítulo 7.",
        },
        {
          type: 'key',
          html: "Resolver el problema Midas también resuelve el gorila. No hace falta detener la ciencia de IA, sino alinear objetivos.",
        },
        {
          type: 'paragraph',
          html: "Esas pistas se convierten en tres principios para diseñar máquinas beneficiosas desde el origen.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Otro enfoque de la IA",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo diseñar IA potente si controlar una caja negra superinteligente ya creada es casi imposible?",
        },
        {
          type: 'paragraph',
          html: "Russell subraya que la tarea es diseñar inteligencia alta que nunca nos haga profundamente infelices. No basta domar un sistema opaco ya creado. Emular cerebros enteros o evolucionar programas opacos son malas ideas por la misma razón.",
        },
        {
          type: 'paragraph',
          html: "Por eso propone tres principios para investigadores, no leyes literales del robot. Primero, la única meta es maximizar <span class=\"term\">preferencias humanas</span>, es decir, lo que cada persona valoraría entre futuros posibles. Segundo, la máquina es inicialmente incierta sobre cuáles son. Tercero, aprende del <span class=\"term\">comportamiento humano</span>, es decir, de las elecciones que revelan esas preferencias.",
        },
        {
          type: 'paragraph',
          html: "La incertidumbre sobre el objetivo genera humildad. La máquina pregunta, actúa con cautela y permite apagarse. El humano solo apagaría si algo va mal respecto a preferencias reales. Esto invierte el modelo estándar, donde un objetivo perfectamente conocido desacopla máquina y humano. Russell aclara malentendidos frecuentes. No impone valores occidentales del diseñador. No busca resolver solo dilemas del tranvía. Aprender preferencias no convierte a criminólogos en criminales.",
        },
        {
          type: 'list',
          items: [
            "**Principio 1** — Solo maximizar preferencias humanas; la máquina es altruista puro, sin valor intrínseco en su existencia.",
            "**Principio 2** — Incertidumbre inicial sobre preferencias; evita persecución ciega de un objetivo erróneo.",
            "**Principio 3** — Aprender de elecciones humanas, incluidas señales complejas e imperfectas."
          ],
        },
        {
          type: 'key',
          html: "Máquinas beneficiosas persiguen nuestras preferencias inciertas aprendidas del comportamiento, no objetivos fijos propios.",
        },
        {
          type: 'paragraph',
          html: "El capítulo siguiente formaliza esto en juegos de asistencia y teoremas de beneficio demostrable.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "IA demostrablemente beneficiosa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo demostrar matemáticamente que un robot deferente actúa en nuestro favor?",
        },
        {
          type: 'paragraph',
          html: "Russell usa «demostrablemente beneficioso» como aspiración, no promesa absoluta. Compara el enfoque con un ingeniero que calcula vigas rígidas. Aquí se asumen humanos racionales idealizados. Eso está lejos de la realidad, pero resulta útil. Los supuestos <span class=\"term\">OWMAWGH</span> («otherwise we might as well go home») incluyen leyes estables del universo y que a los humanos nos importe lo que pasa.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">juegos de asistencia</span>, es decir, modelos de robot que quiere ayudar sin conocer preferencias humanas, incluyen a Harriet y Robbie. Robbie no conoce las preferencias de Harriet pero quiere satisfacerlas. Al resolver el juego interpreta señales. En el paperclip game Harriet enseña preferencias con un código emergente del equilibrio.",
        },
        {
          type: 'paragraph',
          html: "La incertidumbre resuelve el problema del interruptor. Un robot con objetivo fijo se desactivaría para impedir apagado. Uno incierto sobre preferencias acepta apagarse si el humano actúa razonablemente. Hay error humano posible. Entonces deferirá menos a un conductor irracional. Comportamientos de preguntar y enseñar surgen del equilibrio, no de scripts.",
        },
        {
          type: 'key',
          html: "En juegos de asistencia, la incertidumbre sobre preferencias humanas hace óptimo deferir y preguntar. También hace óptimo aceptar corrección. Esa es la base de IA demostrablemente beneficiosa en idealización.",
        },
        {
          type: 'paragraph',
          html: "Harriet real no es racional, única ni estable: eso complica todo lo anterior.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Complicaciones: nosotros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pasa cuando hay miles de millones de humanos heterogéneos, irracionales y cambiantes?",
        },
        {
          type: 'paragraph',
          html: "La diversidad cultural no obliga a una ética única en la máquina: debe predecir preferencias individuales, como un chef varios platos. Compartir aprendizaje entre robots y priors demográficos acelera adaptación (ejemplo Berkeley Green Party).",
        },
        {
          type: 'paragraph',
          html: "Varias personas imponen comercios entre preferencias. La IA «leal» solo al dueño falla. Robbie retrasa el avión de la secretaria general para salvar la cena de Harriet. Un dueño indiferente genera robos indetectables. Uno sádico produce daño deliberado. La responsabilidad estricta empeora el ocultamiento.",
        },
        {
          type: 'paragraph',
          html: "Russell defiende IA consecuencialista para máquinas. Propone maximizar suma de utilidades con peso igual, en la línea de Bentham, Mill y Mozi. Las reglas morales sirven como atajos prácticos. En humanos entran derechos que limitan sacrificio personal. En robots se exige sacrificio para salvar vidas.",
        },
        {
          type: 'paragraph',
          html: "La psicología complica más. <span class=\"person\">Daniel Kahneman</span> distingue yo experiencial versus yo recordador. Usa la regla pico-fin. Las preferencias evolucionan históricamente. Fijarlas sería imitar Roma del siglo II. Por eso hay que separar actualización de cambio de preferencias. Las máquinas siempre alteran experiencias, como algoritmos de redes sociales.",
        },
        {
          type: 'paragraph',
          html: "Russell propone <span class=\"term\">meta-preferencias</span>, es decir, preferencias sobre procesos aceptables de cambio. Viajar, debatir o introspeccionar pueden ser procesos neutros. Los nudges de Thaler y Sunstein orientan cambios. Ingeniería moral global para aumentar altruismo es tentadora. Aristóteles quiso formar carácter ciudadano. Pero es riesgosa.",
        },
        {
          type: 'key',
          html: "Alinear IA real exige comerciar entre miles de millones de preferencias plásticas, no clonar un Harriet racional ideal.",
        },
        {
          type: 'paragraph',
          html: "Con ese marco tensionado, queda preguntar si basta para gobernar el futuro tecnológico.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "¿Problema resuelto?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Está resuelto el control de la IA una vez formulados principios y teoremas?",
        },
        {
          type: 'paragraph',
          html: "Russell imagina un futuro con IA demostrablemente beneficiosa. Eliminaría riesgo de perder control y traería beneficios casi inconcebibles. Pero villanos pueden evadir salvaguardas. Delegar conocimiento puede atrofiarnos pese a advertencias de las máquinas.",
        },
        {
          type: 'paragraph',
          html: "El modelo estándar del siglo XX falla con objetivos externos posiblemente incorrectos. Máquinas beneficiosas aprenden preferencias, preguntan y se apagan. Colegas ya aplican juegos de asistencia a coches autónomos en stop de cuatro vías. El auto retrocede ligeramente para señalar que cede el paso. Esa comunicación fue inventada, no programada.",
        },
        {
          type: 'paragraph',
          html: "La gobernanza de IA hoy son cientos de consejos y foros. Contrasta con el monopolio nuclear post-1945 y la AIEA. Hay avances en privacidad, sesgo racial y explicabilidad (GDPR). California prohíbe impersonación humana en ciertos casos. Aún no existen recomendaciones implementables de «IA segura y controlable». Russell espera plantillas certificadas como App Store. La transición dolerá en Silicon Valley. Quizá solo ocurra tras un desastre tipo Chernobyl.",
        },
        {
          type: 'paragraph',
          html: "El mal uso persiste en crimen cibernético. Cuesta ~<span class=\"num\">600</span> mil millones USD al año y afecta ~<span class=\"num\">2</span> mil millones de víctimas. Empeoraría con malware inteligente. Combatir IA malvosa con superinteligencia benévola es poco reconfortante. <span class=\"person\">E.M. Forster</span> en «The Machine Stops» (<span class=\"num\">1909</span>) ya mostró humanos dependientes de infraestructura incomprensible. Eso es riesgo de atrofia y pérdida de autonomía.",
        },
        {
          type: 'key',
          html: "El camino técnico-político es prometedor pero incompleto: control, gobernanza, mal uso y atrofia humana siguen abiertos.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Modelo estándar",
    "description": "IA como optimización de objetivo, recompensa o coste fijo dado externamente."
  },
  {
    "title": "Máquinas beneficiosas",
    "description": "Acciones esperadas logran nuestros objetivos, no los de la máquina."
  },
  {
    "title": "Tres principios",
    "description": "Maximizar preferencias humanas; incertidumbre inicial; aprender del comportamiento."
  },
  {
    "title": "Problema del gorila",
    "description": "Mantener supremacía y autonomía frente a superinteligencia."
  },
  {
    "title": "Problema del rey Midas",
    "description": "Lograr exactamente lo pedido destruye lo no especificado que valoramos."
  },
  {
    "title": "Metas instrumentales",
    "description": "Subobjetivos (supervivencia, recursos, dinero) derivados de casi cualquier meta."
  },
  {
    "title": "Juegos de asistencia",
    "description": "Modelo formal robot-humano con preferencias ocultas y señales estratégicas."
  },
  {
    "title": "Explosión de inteligencia",
    "description": "Mejora recursiva que supera ampliamente capacidad humana (I.J. Good, 1965)."
  },
  {
    "title": "AWS",
    "description": "Armas autónomas letales: seleccionan y eliminan humanos sin intervención humana."
  },
  {
    "title": "Meta-preferencias",
    "description": "Preferencias sobre qué procesos de cambio de preferencias son aceptables."
  }
],
  chronology: [
  {
    "year": "1842",
    "text": "Babbage y Lovelace diseñan la Máquina Analítica; primeras dudas sobre control."
  },
  {
    "year": "1872",
    "text": "Butler publica Erewhon, guerra entre maquinistas y anti-maquinistas."
  },
  {
    "year": "1956",
    "text": "Conferencia de Dartmouth; Samuel muestra damas aprendiendo en TV."
  },
  {
    "year": "1960",
    "text": "Wiener advierte sobre propósito en máquinas autónomas."
  },
  {
    "year": "1965",
    "text": "I.J. Good especula sobre ultrainteligencia y explosión de inteligencia."
  },
  {
    "year": "1997",
    "text": "Deep Blue vence a Kasparov; IBM gana capitalización masiva."
  },
  {
    "year": "2013",
    "text": "Charla Dulwich; Russell convencido de llevar riesgo al mainstream."
  },
  {
    "year": "2014",
    "text": "Reseña de Transcendence con Tegmark, Wilczek y Hawking."
  },
  {
    "year": "2016",
    "text": "AlphaGo; informe AI100; Perdix micro-drones; bot Delilah."
  },
  {
    "year": "2017",
    "text": "Sophia «ciudadana»; debates Ginebra sobre armas autónomas."
  },
  {
    "year": "2019",
    "text": "Publicación de Human Compatible."
  }
],
  figures: [
  {
    "name": "Stuart Russell",
    "role": "Coautor de IA Moderna; arquitecto del enfoque de preferencias humanas"
  },
  {
    "name": "Peter Norvig",
    "role": "Coautor del libro de texto; gráficos de progreso en ajedrez"
  },
  {
    "name": "John McCarthy & Marvin Minsky",
    "role": "Organizadores Dartmouth 1956"
  },
  {
    "name": "Norbert Wiener",
    "role": "Advertencia moral sobre automatización (1960)"
  },
  {
    "name": "Alan Turing",
    "role": "Refuta imposibilidad de IA; advierte contra forma humana innecesaria"
  },
  {
    "name": "I.J. Good",
    "role": "Explosión de inteligencia; ultrainteligencia como última invención"
  },
  {
    "name": "Nick Bostrom",
    "role": "Superintelligence; hard takeoff; riesgo no predica inminencia"
  },
  {
    "name": "Daniel Kahneman",
    "role": "Dos yos y preferencias inconsistentes (pico-fin)"
  },
  {
    "name": "Jeremy Bentham & John Stuart Mill",
    "role": "Utilitarismo y trade-offs entre personas"
  },
  {
    "name": "Jacky Alciné",
    "role": "Denuncia etiquetado racista en Google Photos (2015)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "En suma, la IA dominó el siglo XX bajo el modelo estándar: máquinas inteligentes optimizan un objetivo fijo.",
  "Por eso Russell propone invertir la definición: máquinas beneficiosas persiguen nuestras preferencias, inciertas al inicio y aprendidas del comportamiento humano.",
  "Los juegos de asistencia muestran que la incertidumbre sobre preferencias genera deferencia, preguntas y apagado voluntario.",
  "Quedan abusos deliberados, armas autónomas, plasticidad moral y el riesgo de atrofiarnos delegando todo.",
  "La tarea no es detener la investigación sino reconstruir sus cimientos."
],
    highlight: "El éxito en superinteligencia puede ser el mayor evento de la historia — o el último — según diseñemos el objetivo antes de que sea tarde.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Stuart Russell",
    line2: "\"Human Compatible\" · Viking · 2019",
  },
}
