import type { BookSummary } from '../types/book'

export const beginningOfInfinity: BookSummary = {
  slug: "beginning-of-infinity",
  meta: {
    title: "The Beginning of Infinity: Explanations that Transform the World",
    subtitle: "Explicaciones que transforman el mundo: problemas, soluciones y progreso sin techo",
    author: "David Deutsch",
    meta: [
      "📖 2011 · Viking",
      "✍️ Epistemología popperiana, física y futuro de la civilización",
    ],
    titleEs: "El inicio del infinito",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el progreso rápido en ciencia, tecnología e instituciones ocurrió una sola vez? <span class=\"person\">David Deutsch</span>, físico y filósofo de la ciencia, plantea ese enigma histórico. El avance estable comenzó con la <span class=\"term\">revolución científica</span> (el giro del siglo XVII que convirtió la investigación en crítica abierta) y sigue en curso. Muchos pensadores negaron que fuera genuino o deseable.",
        },
        {
          type: 'paragraph',
          html: "Deutsch responde que hay diferencia objetiva entre explicación falsa y verdadera. También entre estancamiento y mejora real. Todo ese progreso proviene de buscar <span class=\"term\">buenas explicaciones</span>, es decir, teorías difíciles de variar sin perder sentido. No es casualidad humana: la realidad obedece leyes universales que son, ellas mismas, buenas explicaciones.",
        },
        {
          type: 'paragraph',
          html: "El título pregunta si el progreso debe terminar en catástrofe o completitud. Deutsch sostiene que es <span class=\"term\">ilimitado</span>, o sea, sin techo fijo de mejora. Cada campo tiene su propio «inicio del infinito»: la condición que permite despegar. Esos inicios parecen inconexos, pero son facetas de un mismo atributo de la realidad.",
        },
        {
          type: 'key',
          html: "El progreso ilimitado comienza cuando una tradición prioriza buenas explicaciones y crítica de errores por encima de la autoridad.",
        },
        {
          type: 'paragraph',
          html: "Para entender ese mecanismo, hay que preguntarse cómo conocemos un cosmos que nunca visitamos.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El alcance de las explicaciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo sabemos tanto del cielo sin haber visitado ninguna estrella? El capítulo abre con un contraste. El cielo nocturno muestra puntos y manchas. La astrofísica explica estrellas, transmutación nuclear, supernovas y cuásares. La respuesta no es la experiencia sensorial pura, sino las <span class=\"term\">explicaciones</span>, o sea, teorías que conectan apariencias con causas reales.",
        },
        {
          type: 'paragraph',
          html: "Deutsch refuta el <span class=\"term\">empirismo</span> (la idea de que el conocimiento nace solo de los sentidos). También refuta el <span class=\"term\">inductivismo</span> (la creencia de que basta acumular observaciones para inferir leyes). <span class=\"person\">John Locke</span>, filósofo inglés del siglo XVII, imaginaba la mente como papel en blanco. Pero las teorías son conjeturas creativas que la experiencia solo sirve para elegir entre ellas.",
        },
        {
          type: 'paragraph',
          html: "El inductivismo falla por dos motivos. Confunde predicción de experiencias con conocimiento de la realidad. Supone que el futuro se parece al pasado. La ciencia predice fenómenos radicalmente nuevos, como el vuelo o amaneceres cada noventa minutos en órbita. Frente al justificationism, Deutsch defiende el falibilismo: no hay fuentes autoritarias ni justificación infalible.",
        },
        {
          type: 'paragraph',
          html: "Una buena explicación es difícil de variar: cambiar un detalle arruina el poder explicativo. El mito de Perséfone «explica» estaciones, pero cada dios podría sustituirse. La inclinación del eje terrestre no admite variantes triviales y predice hemisferios desfasados.",
        },
        {
          type: 'quote',
          text: "Detrás de todo hay seguramente una idea tan simple, tan bella, que cuando la comprendamos diremos: ¿cómo pudo ser de otro modo?",
          attribution: "John Archibald Wheeler",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Problema",
              "description": "Conflicto entre ideas: apariencias vs. lo que debería ocurrir.",
              "icon": "🔭"
            },
            {
              "title": "Conjetura",
              "description": "Origen real de las teorías; la experiencia solo las selecciona.",
              "icon": "💡"
            },
            {
              "title": "Testabilidad",
              "description": "Criterio popperiano: predicciones que podrían refutar la teoría.",
              "icon": "🧪"
            },
            {
              "title": "Alcance",
              "description": "Una buena explicación resuelve problemas más allá de su origen.",
              "icon": "🌐"
            }
          ],
        },
        {
          type: 'key',
          html: "El progreso científico nació al buscar buenas explicaciones difíciles de variar, no al acumular observaciones ni justificar creencias.",
        },
        {
          type: 'paragraph',
          html: "Si el conocimiento crece corrigiendo teorías, ¿qué significa acercarse a la realidad con instrumentos?",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Más cerca de la realidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué los instrumentos nos acercan a la realidad alejándonos físicamente del fenómeno? Parece paradójico, pero nunca observamos «en crudo». Toda percepción está <span class=\"term\">cargada de teoría</span>, es decir, interpretada mediante explicaciones previas. Incluso el dolor de cabeza es una interpretación cerebral de señales eléctricas. La esfera celeste parecía observada directamente y no existía.",
        },
        {
          type: 'paragraph',
          html: "Cada error es un error en una explicación, no un dato puro. Por eso podemos corregir el engaño de los sentidos. La esfera celeste geocéntrica fue reemplazada por un sistema heliocéntrico en movimiento. El crecimiento del conocimiento consiste en corregir conceptos erróneos en nuestras teorías.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Thomas Edison</span>, inventor estadounidense, dijo que investigar es un uno por ciento inspiración y noventa y nueve transpiración. Deutsch lee esa «transpiración» como el trabajo sistemático de detectar y corregir errores en explicaciones provisionales. Los instrumentos amplían ese proceso porque refinan la teoría en lugar de sustituirla.",
        },
        {
          type: 'key',
          html: "Estar más cerca de la realidad significa tener mejores explicaciones que corrigen errores, no acceder a datos sin interpretar.",
        },
        {
          type: 'paragraph',
          html: "Corregir teorías sobre el cosmos lleva a preguntarse qué papel tienen los humanos en ese universo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La chispa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Somos insignificantes frente al cosmos o centralmente importantes? El <span class=\"term\">principio de mediocridad</span> (la idea de que la Tierra no ocupa un lugar especial) intenta humillar al ser humano. Lo mismo hace la metáfora de la <span class=\"term\">Nave Tierra</span> (tratar el planeta como nave cerrada). Deutsch sostiene que ambas son tan parroquiales como el geocentrismo.",
        },
        {
          type: 'paragraph',
          html: "Pero desde la perspectiva menos provincial disponible, las personas son las entidades más significativas. <span class=\"term\">Crean conocimiento</span>, es decir, generan explicaciones que se sostienen a sí mismas. El problema cosmológico no es que el universo nos hospede, sino cómo los sistemas complejos sobreviven. Los humanos, con el conocimiento de la Ilustración, no dependen pasivamente del entorno: lo transforman.",
        },
        {
          type: 'paragraph',
          html: "Solo la evolución biológica y las personas crean conocimiento. El oro en cualquier parte del cosmos implica una supernova previa o un ser inteligente con la explicación adecuada. Toda explicación encontrada implica un ser capaz de conjeturar y criticar. La «chispa» no es privilegio místico sino capacidad de generar conocimiento de alcance universal.",
        },
        {
          type: 'key',
          html: "La relevancia humana proviene de crear conocimiento universal, no de ocupar el centro del espacio.",
        },
        {
          type: 'paragraph',
          html: "Si los humanos crean conocimiento, conviene comparar ese proceso con la evolución biológica.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Creación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo surge el conocimiento en la naturaleza y en la cultura? Deutsch compara la <span class=\"term\">evolución biológica</span> (selección de genes por variación y supervivencia) y la creación de conocimiento humano. Ambas usan variación y selección, pero en dominios distintos. Los genes codifican adaptaciones. Las ideas codifican teorías sujetas a crítica explícita.",
        },
        {
          type: 'paragraph',
          html: "La similitud profunda es que adaptaciones y buenas teorías son <span class=\"term\">difíciles de variar</span>, o sea, no admiten cambios triviales sin perder función. La diferencia decisiva es el <span class=\"term\">alcance explicativo</span> (la capacidad de resolver problemas fuera del nicho original). Las adaptaciones no explican ni trascienden su nicho. Las ideas humanas sí.",
        },
        {
          type: 'paragraph',
          html: "El lamarckismo, que supone herencia de caracteres adquiridos, es el análogo biológico del inductivismo. La evolución cultural puede corregir errores de forma intencional y acelerada. La biológica opera sin diseño. Ese contraste prepara el análisis de memes y creatividad en capítulos posteriores.",
        },
        {
          type: 'key',
          html: "Genes e ideas se replican y seleccionan, pero solo las ideas humanas pueden explicar y mejorarse deliberadamente.",
        },
        {
          type: 'paragraph',
          html: "¿Las abstracciones que usan las ideas humanas son reales o solo palabras?",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La realidad de las abstracciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Son reales las ideas abstractas o solo convenientes para hablar? Ni el <span class=\"term\">reduccionismo</span> (explicar todo solo con partículas) ni el holismo vago resuelven el problema de los niveles de descripción. Deutsch sostiene que las explicaciones no forman una jerarquía donde solo lo microscópico es fundamental. Hay leyes autónomas en cada nivel de emergencia.",
        },
        {
          type: 'paragraph',
          html: "Si una entidad abstracta es indispensable en la mejor explicación disponible, es real en sentido causal-explicativo. La <span class=\"term\">causalidad</span>, o sea, la relación de causa y efecto, es una abstracción real y no un epifenómeno del lenguaje. Negarlo obliga a empobrecer teorías que funcionan.",
        },
        {
          type: 'paragraph',
          html: "Por eso importa para física, mente y moral. No hay que «reducir» todo a partículas para tener conocimiento fundamental. Las explicaciones de alto nivel capturan regularidades que el microfísico solo no revela.",
        },
        {
          type: 'key',
          html: "Lo abstracto es real cuando participa causalmente en la mejor explicación y no puede eliminarse sin arruinarla.",
        },
        {
          type: 'paragraph',
          html: "Si las abstracciones pueden volverse universales, hay que entender qué significa ese salto.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El salto a la universalidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué convierte una mejora local en plataforma de progreso sin fin? Muchos sistemas mejoran incrementalmente hasta un punto de inflexión. Se vuelven <span class=\"term\">universales</span>, es decir, capaces de representar o ejecutar cualquier caso relevante en un dominio. El problema previo era la parcialidad. La solución abre un régimen de alcance ilimitado en ese ámbito.",
        },
        {
          type: 'paragraph',
          html: "Por eso Deutsch cita escritura, cómputo, el código genético y el método científico. Antes de la Ilustración, los innovadores rara vez buscaban la universalidad a propósito. Después, las explicaciones universales se valoran por sí mismas y por su utilidad. La corrección de errores es esencial en procesos potencialmente infinitos.",
        },
        {
          type: 'paragraph',
          html: "En física, las funciones que aparecen suelen ser <span class=\"term\">analíticas</span> (funciones suaves con propiedades matemáticas restrictivas). Eso conecta matemática y realidad y será relevante para cosmología y antropicidad. Un sistema universal sin crítica acumula fallos.",
        },
        {
          type: 'key',
          html: "Un salto a la universalidad convierte mejoras locales en plataforma de progreso potencialmente sin fin en ese dominio.",
        },
        {
          type: 'paragraph',
          html: "La universalidad humana plantea si las máquinas pueden replicar la creatividad explicativa.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Creatividad artificial",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la inteligencia artificial general no avanza como se esperaba? Deutsch sostiene que enfrenta un problema filosófico sin resolver: no entendemos cómo funciona la <span class=\"term\">creatividad</span>, es decir, la capacidad de conjeturar y criticar explicaciones nuevas. Más hardware no compensa la ausencia de buena explicación del fenómeno.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">test de Turing</span> (probar si una máquina imita conversación humana) y enfoques conductistas confunden imitación de salida con comprensión explicativa. Deutsch argumenta que, una vez resuelto el problema epistemológico, programar creatividad será difícil pero no misterioso. Lo mismo aplica a la «evolución artificial»: quizá no se ha logrado porque no comprendemos la universalidad del sistema de replicación del ADN.",
        },
        {
          type: 'paragraph',
          html: "La universalidad de los explicadores humanos implica que no habrá mentes «superhumanas» en sentido cualitativo. Solo más velocidad, memoria y automatización del trabajo ya humano.",
        },
        {
          type: 'key',
          html: "Sin teoría de la creatividad, la IA general permanece bloqueada por un problema filosófico, no solo técnico.",
        },
        {
          type: 'paragraph',
          html: "Si el progreso puede ser ilimitado, hay que comprender qué significa el infinito en física y en epistemología.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Una ventana al infinito",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo puede el infinito ser comprensible y físicamente relevante? El <span class=\"term\">infinito</span>, o sea, lo que no tiene fin, no es extravagancia matemática: entra en física y en la teoría de la explicación. El problema es intuir propiedades que parecen imposibles. La solución pasa por buenas explicaciones que las hacen coherentes.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">hotel de Hilbert</span> (un hotel con infinitas habitaciones siempre lleno) muestra una paradoja. Aún puede alojar más huéspedes. El infinito no se comporta como lo finito. <span class=\"person\">Georg Cantor</span>, matemático alemán, demostró con el argumento diagonal que hay infinitos de distinto tamaño. Si el progreso es ilimitado, siempre estamos casi al comienzo, nunca «casi al final».",
        },
        {
          type: 'paragraph',
          html: "Por eso esa paradoja desarma profecías de completitud. Quien predice que el saber está casi agotado confunde ignorancia infinita con proximidad a un techo.",
        },
        {
          type: 'key',
          html: "Comprender el infinito amplía qué problemas consideramos solubles y nos sitúa siempre en un comienzo del progreso.",
        },
        {
          type: 'paragraph',
          html: "Entender el infinito del progreso lleva a preguntarse qué actitud adoptar frente a los males persistentes.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Optimismo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Significa optimismo creer que todo saldrá bien? Deutsch redefine el <span class=\"term\">optimismo</span>, es decir, la confianza en que los problemas son solubles, como tesis epistemológica y no como actitud complaciente. Todo mal persistente es un problema de <span class=\"term\">conocimiento insuficiente</span>, o sea, de explicaciones que aún no hemos encontrado. No es garantía de éxito: exige responsabilidad y crítica institucional.",
        },
        {
          type: 'paragraph',
          html: "El pesimismo paraliza porque trata los males como inevitables. El optimismo racional parte de que no hay autoridad final: siempre puede haber mejor explicación. Incluso moral y política admiten progreso objetivo mediante buenas explicaciones, no solo consenso relativo.",
        },
        {
          type: 'paragraph',
          html: "Historias de «mini-ilustraciones» truncadas muestran que sin tradición de crítica el progreso se apaga. El problema nunca desaparece del todo: evolucionamos de problemas a mejores problemas, no a un estado sin conflicto.",
        },
        {
          type: 'key',
          html: "Optimismo racional es la convicción de que los males son problemas soluble en principio mediante mejores explicaciones.",
        },
        {
          type: 'paragraph',
          html: "Esa actitud falibilista tiene raíces antiguas: Deutsch la dramatiza en un diálogo con Sócrates.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Un sueño de Sócrates",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué significa «conocer» si no hay certeza infalible? En un diálogo onírico, <span class=\"person\">Hermes</span> (Apolo) enseña a <span class=\"person\">Sócrates</span>, filósofo griego, epistemología. El problema del oráculo («nadie es más sabio que Sócrates») introduce la distinción entre saber y creer justificado.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">creencia verdadera justificada</span> (la definición clásica de «conocimiento») es una quimera. La justificación infinita o la autoridad no producen conocimiento objetivo. Por eso quien busca certeza rechaza como «conocimiento» lo que ya comprende hasta que un dios lo confirme. El conocimiento objetivo es falible y mejorable, mientras que la certeza es innecesaria y dañina.",
        },
        {
          type: 'paragraph',
          html: "Según Hermes, nada es «fácil de ver». Lo que parece obvio requiere teorías para interpretarse. El diálogo dramatiza el mensaje popperiano del capítulo 1 para quien prefiera el mito al tratado.",
        },
        {
          type: 'key',
          html: "Conocer no es justificar infaliblemente, sino mejorar explicaciones en conversación crítica consciente de la falibilidad.",
        },
        {
          type: 'paragraph',
          html: "El falibilismo tiene consecuencias en física: Deutsch las desarrolla con la interpretación cuántica del multiverso.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "El multiverso",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué implica tomar en serio la mecánica cuántica? La mejor explicación implica un <span class=\"term\">multiverso</span>, es decir, una realidad física con flujos de información en historias cuasi autónomas. Un «universo» clásico es una característica emergente, no el todo.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">interferencia cuántica</span> (patrones de ondas que revelan superposición de estados) evidencia otras historias. Negarlas obliga a postular colapsos ad hoc. Deutsch defiende nubes de instancias fungibles de partículas con atributos discretos. El problema de la gravedad cuántica muestra que nuestras mejores teorías aún fallan.",
        },
        {
          type: 'paragraph',
          html: "Por eso contar «copias» de observadores sin teoría de medida produce paradojas antrópicas. La ontología ampliada no es adorno: resuelve problemas concretos de probabilidad y estructura.",
        },
        {
          type: 'key',
          html: "Tomar en serio la cuántica implica un multiverso de historias múltiples, no solo predicciones instrumentales.",
        },
        {
          type: 'paragraph',
          html: "Negar explicaciones reales en física es síntoma de una tradición filosófica que Deutsch llama «mala filosofía».",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Historia de la mala filosofía",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué tipo de filosofía frena el progreso del conocimiento? Deutsch define <span class=\"term\">mala filosofía</span> (doctrinas que impiden activamente el crecimiento del saber) como la que bloquea la crítica. Antes de la Ilustración predominaba. Después creció la buena filosofía, pero la mala empeoró.",
        },
        {
          type: 'paragraph',
          html: "Descendió del empirismo al positivismo, al instrumentalismo, a la filosofía lingüística y al postmodernismo. El daño central es separar predicción de explicación: la teoría se reduce a fórmula útil más «interpretación» arbitraria. Eso legitimó interpretaciones de la mecánica cuántica que renuncian a describir la realidad.",
        },
        {
          type: 'paragraph',
          html: "También dehumanizó campos como la psicología. La salida no es eliminar la filosofía de la ciencia, sino exigir explicaciones buenas y criticables. La ciencia progresa integrando filosofía crítica, no fingiendo prescindir de ella.",
        },
        {
          type: 'key',
          html: "La mala filosofía bloquea el progreso al tratar las teorías como oráculos predictivos sin explicación real.",
        },
        {
          type: 'paragraph',
          html: "Ese bloqueo también afecta cómo pensamos las decisiones colectivas y las instituciones políticas.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Elecciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Basta elegir entre opciones ya dadas para decidir bien en política? Los sistemas de decisión colectiva enfrentan un problema. No existe regla perfecta que agregue preferencias sin paradojas. Deutsch advierte que modelar la política como selección entre opciones fijas omite lo esencial: <span class=\"term\">crear nuevas opciones</span>, es decir, inventar alternativas que antes no existían.",
        },
        {
          type: 'paragraph',
          html: "Las buenas políticas, como las buenas explicaciones, son difíciles de variar. Mezclar arbitrariamente principios incompatibles produce malas soluciones. Los gobiernos de coalición no son un ideal electoral: son síntoma de marcos que no permiten crítica clara.",
        },
        {
          type: 'paragraph',
          html: "Por eso decidir racionalmente replica el método científico: conjeturar alternativas, criticarlas y mejorar instituciones. La democracia falla cuando se congela en fórmulas supuestamente definitivas.",
        },
        {
          type: 'key',
          html: "Elegir bien exige creatividad institucional y revisión continua, no obediencia a algoritmos de agregación fijos.",
        },
        {
          type: 'paragraph',
          html: "Deutsch analiza cómo las instituciones transmiten ideas mediante evolución cultural.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "¿Por qué son bellas las flores?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hay belleza objetiva o solo gusto personal? El empirismo no puede fundar estética. Deutsch sostiene que existen <span class=\"term\">verdades objetivas en estética</span>, es decir, criterios convergentes sobre qué formas importan, ligadas a hechos mediante explicaciones.",
        },
        {
          type: 'paragraph',
          html: "Las flores parecen bellas a los humanos aunque su diseño evolucionó para polinizadores, no para nosotros. Esa convergencia sugiere criterios de belleza independientes de la función original. Son señales difíciles de falsificar cuando falta conocimiento compartido previo.",
        },
        {
          type: 'paragraph',
          html: "El arte también resuelve problemas. Por eso admite crítica más allá del relativismo total. Las buenas obras son difíciles de variar sin perder lo que logran.",
        },
        {
          type: 'key',
          html: "La estética participa del proyecto racional: explicar por qué ciertas formas importan con criterios convergentes y objetivos.",
        },
        {
          type: 'paragraph',
          html: "El arte y la cultura se transmiten por memes: ideas que compiten por replicarse en mentes.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "La evolución de la cultura",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo evolucionan las culturas sin reducir todo a genes o a elección individual? Las culturas evolucionan mediante <span class=\"term\">memes</span>, es decir, ideas que se replican en mentes y conductas. El problema es explicar su dinámica sin perder de vista la selección y la crítica.",
        },
        {
          type: 'paragraph',
          html: "A diferencia de los genes, cada meme incluye su mecanismo de réplica. Se selecciona de dos maneras distintas. Una es la capacidad de producir conducta. La otra es que esa conducta contagie el meme. Los portadores rara vez saben por qué un meme funciona.",
        },
        {
          type: 'paragraph',
          html: "Por eso Deutsch distingue culturas <span class=\"term\">dinámicas</span> (que toleran corrección) y <span class=\"term\">estáticas</span> (que priorizan preservación sobre verdad). El destino de una sociedad depende de cuál predominio.",
        },
        {
          type: 'key',
          html: "La evolución cultural decide si una sociedad corrige errores o queda atrapada en memes anti-críticos.",
        },
        {
          type: 'paragraph',
          html: "Para que los memes complejos se transmitan, hace falta creatividad: Deutsch explica por qué evolucionó.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "La evolución de la creatividad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué evolucionó la creatividad si el conocimiento crecía demasiado lento para dar ventaja selectiva? Deutsch plantea dos enigmas. ¿Cómo se transmiten memes complejos si el cerebro no los «descarga» como archivos? La misma respuesta resuelve ambos.",
        },
        {
          type: 'paragraph',
          html: "Los memes complejos no mandan acciones fijas sino <span class=\"term\">reglas</span>, es decir, principios que hay que inferir desde comportamientos observados. Replicarlos requiere creatividad para deducir la regla. La creatividad fue seleccionada para copiar memes con fidelidad suficiente, no como ornamento.",
        },
        {
          type: 'paragraph',
          html: "Eso conecta biología, cultura y epistemología. Sin creatividad no hay transmisión cultural de explicaciones. Sin crítica no hay progreso.",
        },
        {
          type: 'key',
          html: "La creatividad evolucionó porque replicar memes complejos exige inferir reglas invisibles detrás de las acciones.",
        },
        {
          type: 'paragraph',
          html: "Las culturas estáticas pueden durar siglos, pero Deutsch muestra por qué no son sostenibles.",
        },
      ],
    },
    {
      id: "cap17",
      num: "17",
      title: "Insostenible",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede una sociedad durar siglos sin crear conocimiento nuevo? Las sociedades estáticas pueden persistir mucho tiempo, pero colapsan cuando un problema supera su capacidad de generar conocimiento correctivo. El problema no es solo recursos: es la imposibilidad de crear soluciones nuevas.",
        },
        {
          type: 'paragraph',
          html: "Deutsch critica narrativas simplistas sobre <span class=\"person\">Rapa Nui</span> (isla de Pascua). Rechaza el determinismo geográfico que defiende el historiador <span class=\"person\">Jared Diamond</span>. También critica esa lectura en <span class=\"person\">Marx</span> y <span class=\"person\">Engels</span>. Para él, la historia es historia de ideas, no de biogeografía mecánica.",
        },
        {
          type: 'paragraph',
          html: "Analogizar el Occidente tecnológico con civilizaciones estáticas es falaz. Estrategias que solo previenen desastres previsibles fallarán ante lo imprevisible. La sostenibilidad real requiere progreso científico-tecnológico continuo y apertura a la corrección.",
        },
        {
          type: 'key',
          html: "Nada es sostenible sin capacidad abierta de crear conocimiento nuevo frente a crisis imprevisibles.",
        },
        {
          type: 'paragraph',
          html: "Esa tesis cierra el libro: rechazar que «ya casi llegamos» es condición para el progreso ilimitado.",
        },
      ],
    },
    {
      id: "cap18",
      num: "18",
      title: "El comienzo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Estamos cerca del final del saber o siempre al comienzo? El cierre retoma la profecía de «casi llegamos». En <span class=\"num\">1894</span>, el físico <span class=\"person\">Albert Michelson</span> creía que la física solo fijaría el sexto decimal. En <span class=\"num\">1965</span>, <span class=\"person\">Richard Feynman</span> vaticinó mil años sin leyes nuevas. Ambos casos muestran la falacia profética de convertir el saber actual en techo permanente.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Eratóstenes</span>, geógrafo griego del siglo III a.C., midió la Tierra sin recorrerla. Hoy la vemos pequeña. Lo mismo ocurre con el conocimiento: lo que parece casi completo es parroquial. El periodista <span class=\"person\">John Horgan</span> publicó *The End of Science* en <span class=\"num\">1996</span>. Partió de empirismo y declaró la ciencia fundamental terminada.",
        },
        {
          type: 'paragraph',
          html: "Hoy hay problemas más profundos, como la gravedad cuántica y la <span class=\"term\">energía oscura</span> (la fuerza que acelera la expansión del universo). Deutsch critica la «singularidad» tecnológica porque los humanos ya son explicadores universales. La IA no creará mentes cualitativamente superiores, solo acelerará lo que hacemos.",
        },
        {
          type: 'paragraph',
          html: "Cita a <span class=\"person\">Isaac Asimov</span> (*The End of Eternity*, <span class=\"num\">1955</span>) para recordar un contraste. Abandonar la sociedad estática es el fin de la eternidad estancada y el comienzo del infinito. Especular más allá del horizonte predictivo es legítimo, pero profetizar no lo es.",
        },
        {
          type: 'quote',
          text: "Creo que no habrá novedad, digamos, en mil años… Tenemos la suerte de vivir en una era en la que aún hacemos descubrimientos.",
          attribution: "Richard Feynman (citado y refutado por Deutsch)",
        },
        {
          type: 'key',
          html: "Rechazar que el conocimiento está casi completo es condición para el progreso ilimitado: siempre estamos en un inicio del infinito.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Buena explicación",
    "description": "Teoría difícil de variar sin perder poder explicativo; reguladora del progreso."
  },
  {
    "title": "Problema",
    "description": "Conflicto entre ideas que impulsa conjetura y crítica."
  },
  {
    "title": "Falibilismo",
    "description": "Todo conocimiento es corregible; no hay justificación infalible."
  },
  {
    "title": "Alcance (reach)",
    "description": "Capacidad de una explicación de resolver problemas fuera de su origen."
  },
  {
    "title": "Salto a la universalidad",
    "description": "Mejora que hace un sistema capaz de todo un dominio."
  },
  {
    "title": "Optimismo racional",
    "description": "Los males persistentes son problemas de conocimiento, no límites fijos."
  },
  {
    "title": "Multiverso",
    "description": "Estructura de historias cuánticas múltiples con flujo de información."
  },
  {
    "title": "Memes",
    "description": "Replicadores culturales con selección dual de conducta y contagio."
  },
  {
    "title": "Mala filosofía",
    "description": "Doctrinas que separan predicción de explicación y frenan el saber."
  },
  {
    "title": "Inicio del infinito",
    "description": "Condición donde la mejora abierta se vuelve posible y sostenida."
  }
],
  chronology: [
  {
    "year": "s. III a.C.",
    "text": "<span class=\"person\">Eratóstenes</span> estima la circunferencia terrestre (~40 000 km)."
  },
  {
    "year": "1660",
    "text": "Fundación de la Royal Society; lema «Nullius in verba»."
  },
  {
    "year": "1689",
    "text": "<span class=\"person\">John Locke</span> formula el empirismo del «papel en blanco»."
  },
  {
    "year": "1901",
    "text": "<span class=\"person\">Soddy</span> y <span class=\"person\">Rutherford</span> demuestran transmutación radiactiva."
  },
  {
    "year": "1936",
    "text": "<span class=\"person\">Alan Turing</span> funda la teoría de la computación universal."
  },
  {
    "year": "1945",
    "text": "<span class=\"person\">Karl Popper</span> publica *La sociedad abierta y sus enemigos* (*The Open Society and Its Enemies*)."
  },
  {
    "year": "1955",
    "text": "<span class=\"person\">Isaac Asimov</span> publica *El fin de la eternidad* (*The End of Eternity*)."
  },
  {
    "year": "1963",
    "text": "Popper: «en nuestra ignorancia infinita somos todos iguales»."
  },
  {
    "year": "1965",
    "text": "<span class=\"person\">Feynman</span> profetiza mil años sin novedad en física."
  },
  {
    "year": "1993",
    "text": "<span class=\"person\">Vernor Vinge</span> escribe sobre la «singularidad tecnológica»."
  },
  {
    "year": "1996",
    "text": "<span class=\"person\">John Horgan</span> publica *El fin de la ciencia* (*The End of Science*)."
  },
  {
    "year": "2011",
    "text": "Publicación de *El inicio del infinito* (*The Beginning of Infinity*)."
  }
],
  figures: [
  {
    "name": "David Deutsch",
    "role": "Autor; defiende progreso ilimitado mediante buenas explicaciones."
  },
  {
    "name": "Karl Popper",
    "role": "Falibilismo, conjeturas y refutaciones, sociedad abierta."
  },
  {
    "name": "John Locke",
    "role": "Empirismo clásico criticado como origen del conocimiento."
  },
  {
    "name": "Eratóstenes de Cirene",
    "role": "Alcance explicativo: midió la Tierra sin recorrerla."
  },
  {
    "name": "Alan Turing",
    "role": "Universalidad computacional e IA."
  },
  {
    "name": "Richard Feynman",
    "role": "Ejemplo de profecía de «casi completitud» refutada."
  },
  {
    "name": "Isaac Asimov",
    "role": "*The End of Eternity*; metáfora del inicio del infinito."
  },
  {
    "name": "John Horgan",
    "role": "*The End of Science*; empirismo y fin del saber."
  },
  {
    "name": "Galileo Galilei",
    "role": "Experimentos como pruebas (cimenti) frente a «leer la naturaleza»."
  },
  {
    "name": "Jared Diamond",
    "role": "Determinismo geográfico criticado en cap. 17."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El universo es explicable, y por eso mejorable sin límite fijo.",
  "Cada mal persistente es un problema de conocimiento, no un destino escrito.",
  "No hay justificación infalible ni punto final del saber.",
  "Sí hay una elección permanente entre dogma y creatividad explicativa.",
  "Nuestro destino depende de instituciones que permitan corregir errores sin fin."
],
    highlight: "Cuando una sociedad protege la crítica y busca buenas explicaciones, abre un inicio del infinito.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David Deutsch",
    line2: "\"The Beginning of Infinity: Explanations that Transform the World\" · Viking · 2011",
  },
}
