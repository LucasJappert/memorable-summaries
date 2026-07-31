import type { BookSummary } from '../types/book'

export const theInformation: BookSummary = {
  slug: "the-information",
  meta: {
    title: "The Information: A History, a Theory, a Flood",
    subtitle: "De los tambores africanos al bit cuántico",
    author: "James Gleick",
    meta: [
      "📖 2011 · Pantheon / Random House",
      "✍️ Subtítulo EN: A History, a Theory, a Flood",
    ],
    titleEs: "La información: Historia, teoría, diluvio",
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
    "label": "Prólogo"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Tambores que hablan"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "La persistencia de la palabra"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Dos diccionarios"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Lanzar el pensamiento a ruedas"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Un sistema nervioso para la Tierra"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Nuevos cables, nueva lógica"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Teoría de la información"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "El giro informacional"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Entropía y sus demonios"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "El código de la vida"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Al estanque de los memes"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "El sentido del azar"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "La información es física"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Después del diluvio"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Noticias nuevas cada día"
  },
  {
    "id": "cap16",
    "num": "16",
    "label": "El regreso del significado"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología de hitos informacionales"
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
      title: "Prólogo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué <span class=\"num\">1948</span> marca el nacimiento de la era informacional más que el transistor?",
        },
        {
          type: 'paragraph',
          html: "En ese año, <span class=\"person\">Bell Labs</span> anunció el transistor, un cristal minúsculo que revolucionó la electrónica. Pero el avance más profundo fue otro. Fue el artículo «A Mathematical Theory of Communication» de <span class=\"person\">Claude Shannon</span>, de setenta y nueve páginas casi ignoradas por la prensa. Shannon acuñó el <span class=\"term\">bit</span>, es decir, la unidad mínima de elección informacional, comparable al metro o al segundo.",
        },
        {
          type: 'paragraph',
          html: "El prólogo recorre el arco completo del libro. <span class=\"person\">John Archibald Wheeler</span> resumió la física futura con «It from Bit». El ADN encierra instrucciones. La economía digital convierte dinero en bits. Gleick advierte también el cansancio contemporáneo (TMI, sobrecarga). Aun así sostiene que la información siempre estuvo presente, desde tambores hasta alfabeto.",
        },
        {
          type: 'key',
          html: "El bit cuantificó lo intangible y conectó comunicación, vida, economía y cosmos en una sola historia.",
        },
        {
          type: 'paragraph',
          html: "Antes del bit hubo tambores que europeos no supieron leer.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Tambores que hablan",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo transmitían mensajes complejos los tambores africanos sin alfabeto ni código Morse?",
        },
        {
          type: 'paragraph',
          html: "Nadie hablaba «simplemente» en el tambor. Decían «haz volver tus pies por donde fueron» en lugar de «vuelve a casa». Durante siglos, europeos no entendieron que era lenguaje. El misionero lingüista <span class=\"person\">John F. Carrington</span> descubrió que los tambores mapean lenguas <span class=\"term\">tonales</span>, es decir, donde el tono distingue palabras como «luna» y «pollo».",
        },
        {
          type: 'paragraph',
          html: "Al perder consonantes y vocales, cada golpe ambiguo exige <span class=\"term\">redundancia</span>, es decir, frases fijas que despejan el sentido («la luna mira a la tierra»). Por eso los mensajes de tambor son unas ocho veces más largos que el habla. <span class=\"person\">Ralph Hartley</span> en Bell Labs formuló H = n log s: cuantos menos símbolos, más hay que enviar.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tambor tonal",
              "description": "Solo dos tonos, pero lenguaje completo.",
              "icon": "🥁"
            },
            {
              "title": "Analogía Morse",
              "description": "Europeos forzaron la comparación y fallaron.",
              "icon": "📡"
            },
            {
              "title": "Alfa aviación",
              "description": "Redundancia como bravo/victor contra ruido.",
              "icon": "✈️"
            }
          ],
        },
        {
          type: 'key',
          html: "Los tambores resolvieron ambigüadad con redundancia antes de que existiera la teoría de Shannon.",
        },
        {
          type: 'paragraph',
          html: "La escritura fue otro salto de canal, con efectos cognitivos aún más profundos.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "La persistencia de la palabra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pierde y qué gana una cultura cuando las palabras dejan de ser solo sonido?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Walter J. Ong</span> invitaba a imaginar una cultura sin «buscar» nada. En la <span class=\"term\">oralidad primaria</span>, las palabras no tienen presencia visual. Escribir las fijó en arcilla, papiro o papel. De ahí que surgieran historia, ley y abstracción. <span class=\"person\">Platón</span>, por boca de Sócrates, temió que la escritura debilitara la memoria viva.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Milman Parry</span> demostró que Homero cantó epopeyas sin letras. Transcribirlas fue un trueno cultural. <span class=\"person\">Eric Havelock</span> vio en Aristóteles el nacimiento del pensamiento categorial. El alfabeto, inventado una sola vez cerca del Mediterráneo, redujo símbolos a sonidos mínimos y se propagó como virus.",
        },
        {
          type: 'key',
          html: "Escribir fija palabras y reestructura la conciencia, multiplicando el vocabulario disponible.",
        },
        {
          type: 'paragraph',
          html: "Palabras fijas pidieron definirlas y ordenarlas en libros de consulta.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Dos diccionarios",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo pasó el inglés de ortografías caóticas a entradas buscables en orden alfabético?",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1604</span>, el párroco <span class=\"person\">Robert Cawdrey</span> publicó «A Table Alphabeticall» con 2.500 palabras «difíciles» para damas y clérigos. Antes, «cony» podía escribirse de una docena de maneras. La imprenta impuso formas «correctas». El verbo <span class=\"term\">spell</span>, es decir deletrear, pasó de «hablar» a «escribir letra por letra».",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Samuel Johnson</span>, casi dos siglos después, completó el gran diccionario inglés con citas literarias y norma social. <span class=\"person\">Gottfried Leibniz</span> distinguió orden alfabético (de palabra a cosa) y orden natural (de cosa a palabra). Por eso el alfabeto habilitó catálogos, índices y la búsqueda binaria antes de las computadoras.",
        },
        {
          type: 'key',
          html: "El diccionario convirtió el lenguaje en base de datos consultable gracias al orden alfabético.",
        },
        {
          type: 'paragraph',
          html: "Paralelamente, otros compilaban tablas numéricas destinadas a máquinas.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Lanzar el pensamiento a ruedas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede una máquina de vapor «fabricar» números y pensamiento?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Babbage</span> fue un genio errático de la era del vapor. Diseñó el Difference Engine y el Analytical Engine. Miles de engranajes imprimirían tablas sin error humano. Por eso el Estado británico financió el proyecto, aunque luego lo canceló tras veinte años. Sus tablas de logaritmos y seguros anticiparon economía del cálculo precomputado.",
        },
        {
          type: 'paragraph',
          html: "Por eso <span class=\"person\">Ada Lovelace</span> vio más allá del número: la máquina analítica manipularía símbolos y podría componer música si se le dieran reglas. Separó datos e instrucciones antes de que existiera software. Babbage preguntó irónicamente si meter «figuras equivocadas» produciría respuestas correctas — confusión que persiste hoy.",
        },
        {
          type: 'key',
          html: "Babbage y Lovelace concibieron la computación como manipulación simbólica, no solo aritmética.",
        },
        {
          type: 'paragraph',
          html: "Mientras tanto, cables eléctricos comenzaron a coser continentes.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Un sistema nervioso para la Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué compararon el telégrafo eléctrico con nervios y cerebro planetario?",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1846</span>, tres empleados en Jersey City manejaban todo el tráfico telegráfico de Nueva York. Solo tenían un par de hilos. <span class=\"person\">Samuel Morse</span> y <span class=\"person\">Alfred Vail</span> diseñaron un alfabeto de puntos, rayas y pausas. Contaron tipos en una imprenta de Morristown. E y T recibieron señales cortas por ser frecuentes.",
        },
        {
          type: 'paragraph',
          html: "Antes, los hermanos <span class=\"person\">Chappe</span> en Francia usaron brazos mecánicos visibles. Su código binario de posiciones precedió al eléctrico. Por eso el telégrafo nuevo exigió traducir lenguaje a impulsos. Metáforas biológicas de Hawthorne y Scientific American resultaron proféticas. Cables como nervios, nación como cuerpo.",
        },
        {
          type: 'key',
          html: "El telégrafo obligó a inventar códigos que mapean lenguaje sobre un canal eléctrico limitado.",
        },
        {
          type: 'paragraph',
          html: "Maxwell, Hartley y un joven Shannon prepararon la teoría de ese canal.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Nuevos cables, nueva lógica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo un niño en Michigan con alambre de púas prefiguró la teoría de la comunicación?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Claude Shannon</span>, hijo de un juez en Gaylord, construyó un telégrafo casero con alambre de cercas y código Morse. En MIT aplicó el álgebra de <span class=\"person\">George Boole</span> a circuitos eléctricos (<span class=\"num\">1937</span>). <span class=\"person\">James Clerk Maxwell</span> ya había notado la simetría perfecta: dos teléfonos, un hilo, dos conversadores.",
        },
        {
          type: 'paragraph',
          html: "Cooperativas rurales convirtieron cercas en líneas telefónicas. Telégrafo, teléfono y radio reconfiguraron la topología social. Shannon leyó códigos en Poe y criptogramas. Así que la lógica simbólica se cruzó con relés y ruido de circuito. Este capítulo une física, ingeniería y juego intelectual antes de la guerra.",
        },
        {
          type: 'key',
          html: "Shannon heredó la tradición de traducir señales físicas en símbolos manipulables.",
        },
        {
          type: 'paragraph',
          html: "En 1943 se encontró con Turing en Bell Labs y ambos guardaron secretos de guerra.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Teoría de la información",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué mide un bit si el significado del mensaje queda fuera de la ecuación?",
        },
        {
          type: 'paragraph',
          html: "Shannon analizó el sistema X que cifraba la voz Roosevelt-Churchill y probó su seguridad. <span class=\"person\">Alan Turing</span> mostró su paper de <span class=\"num\">1936</span> sobre números computables y la máquina universal U que simula cualquier computadora. Entonces demostró que la mayoría de números son incalculables y que el Entscheidungsproblem de Hilbert tiene respuesta negativa.",
        },
        {
          type: 'paragraph',
          html: "Shannon definió información como elección entre mensajes posibles. El significado es «irrelevante al problema de ingeniería». Estimó ~50% de redundancia en inglés. De ahí el cartel «if u cn rd ths». Introdujo entropía H, capacidad de canal y teorema de codificación.",
        },
        {
          type: 'paragraph',
          html: "En paralelo, el Bombe de Turing quebró Enigma y procesaba interceptos a escala industrial.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Bit",
              "description": "Elección binaria medible.",
              "icon": "🎰"
            },
            {
              "title": "Criptografía",
              "description": "Mensaje estocástico visto como ruido.",
              "icon": "🔐"
            },
            {
              "title": "Máquina U",
              "description": "Programa que simula todos los programas.",
              "icon": "♾️"
            }
          ],
        },
        {
          type: 'key',
          html: "Shannon cuantificó la sorpresa informacional separándola del sentido humano del mensaje.",
        },
        {
          type: 'paragraph',
          html: "Wiener y los cibernéticos llevaron esas ideas a cerebros y máquinas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "El giro informacional",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la teoría de Shannon desató la cibernética y el mito del «cerebro electrónico»?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Norbert Wiener</span> acuñó <span class=\"term\">cibernética</span>, es decir el estudio del control y la comunicación, del griego timonel, en 1948. Unifica control y comunicación en animales y máquinas. Su libro fue un éxito de ventas. Time lo retrató como profeta de ENIAC y Mark I. Wiener vio retroalimentación negativa estabilizando sistemas. Aplicaba desde cañones antiaéreos hasta neuronas, como el regulador de Maxwell.",
        },
        {
          type: 'paragraph',
          html: "Las conferencias Macy reunieron a Mead, Bateson, von Neumann y McCulloch. <span class=\"person\">Warren McCulloch</span> modeló neuronas como relés binarios. <span class=\"person\">J. C. R. Licklider</span> cuantizó voz en ~60 bits/s. Gerard advirtió contra equiparar cerebro y computadora. Aun así el término «teoría de la información» se extendió más allá de la ingeniería.",
        },
        {
          type: 'key',
          html: "La cibernética extendió información y retroalimentación más allá de los cables telefónicos.",
        },
        {
          type: 'paragraph',
          html: "Entropía física y entropía informacional convergen en el demonio de Maxwell.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Entropía y sus demonios",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué Shannon tomó prestada la entropía termodinámica para medir mensajes?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Rudolf Clausius</span> acuñó entropía en <span class=\"num\">1865</span> como energía no disponible para trabajo. <span class=\"person\">Lord Kelvin</span> anunció la muerte térmica del universo. <span class=\"person\">James Clerk Maxwell</span> imaginó un «ser finito» que ordena moléculas en una caja de gas. Ese <span class=\"term\">demonio de Maxwell</span> (ente imaginario) convierte azar en propósito usando información. Por eso medir y borrar memoria tiene un coste termodinámico.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Leó Szilárd</span> mostró que medir y borrar memoria cuesta k log 2 por bit. La información no es gratuita. La mezcla irreversible de gas es probabilística: hay muchísimos más microestados desordenados. Shannon reinventó la matemática sin leer a Szilárd, pero el puente estaba listo.",
        },
        {
          type: 'key',
          html: "Ordenar el mundo exige pagar en bits: el demonio une termodinámica e información.",
        },
        {
          type: 'paragraph',
          html: "Los genes son el siguiente mensaje codificado que la biología aprendió a leer.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El código de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo pasó la herencia de «partículas» a instrucciones digitales en cuatro letras?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Wilhelm Johannsen</span> inventó «gene» en 1910 para separar potencial hereditario de rasgos personales. <span class=\"person\">Erwin Schrödinger</span> comparó genes con código Morse en «What Is Life?». Por eso en <span class=\"num\">1953</span> Watson y Crick publicaron la doble hélice: las secuencias A, C, G, T son complementarias y replicables.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">George Gamow</span> fundó el RNA Tie Club para descifrar tripletes codón-aminoácido. La solución llegó en los 60 con redundancia genética tolerante a errores. Crick formuló entonces el Dogma Central. ADN produce ARN y luego proteína. Así la biología molecular adoptó bits, ruido y canal sin dejar de ser química.",
        },
        {
          type: 'key',
          html: "El ADN es información cuya función principal es almacenar y transmitir instrucciones.",
        },
        {
          type: 'paragraph',
          html: "Las ideas culturales imitan replicadores genéticos en otro medio.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Al estanque de los memes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Existe evolución más allá de genes y qué son los memes?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jacques Monod</span> situó un «reino abstracto» de ideas sobre la biosfera. <span class=\"person\">Richard Dawkins</span> propuso el <span class=\"term\">meme</span>, es decir una unidad cultural replicable, al cerrar «The Selfish Gene» en 1976. Salta de cerebro a cerebro por imitación. Melodías, frases («Read my lips») y creencias compiten por atención limitada.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Daniel Dennett</span> comparó cerebros con composteras de larvas ajenas. <span class=\"person\">Douglas Hofstadter</span> popularizó el «texto viral». Así que los memes no son verdaderos por definición y pueden ser perjudiciales. Dawkins actualizó el «soup» primordial de memes. Pasó de cerebros humanos a discos, redes y virus informáticos.",
        },
        {
          type: 'key',
          html: "Los memes extienden la lógica replicadora más allá del ácido nucleico hacia la cultura.",
        },
        {
          type: 'paragraph',
          html: "Los límites formales del conocimiento aparecen en Gödel y en el azar algorítmico.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "El sentido del azar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué significa «aleatorio» cuando todo parece azar, información y caos a la vez?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Gregory Chaitin</span>, adolescente, leyó «Gödel's Proof». De este modo conectó incompletitud, incertidumbre cuántica y entropía de Shannon. <span class=\"person\">Kurt Gödel</span> demostró que toda matemática formal genera enunciados indemostrables. Turing mostró números incalculables. Por eso Chaitin definió aleatoriedad algorítmica: lo comprimible no es aleatorio.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">John von Neumann</span> admitió que generar dígitos aleatorios con algoritmos es «estar en estado de pecado». RAND publicó «A Million Random Digits» en 1955 con ruleta electrónica. Humanos detectan patrones donde no los hay. Shannon mostró que un mensaje repetitivo sorprende menos que uno impredecible de igual longitud.",
        },
        {
          type: 'key',
          html: "Lo aleatorio es lo incompressible: azar, información y límites del saber se superponen.",
        },
        {
          type: 'paragraph',
          html: "Si la información es física, el universo mismo puede leerse como computación.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "La información es física",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la materia emergir de bits, como propuso Wheeler con «It from Bit»?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Christopher Fuchs</span> y otros replantean la mecánica cuántica desde teoría de información. <span class=\"person\">John Archibald Wheeler</span> sugirió que preguntas sí/no participan en crear realidad. El <span class=\"term\">entrelazamiento</span>, es decir correlación cuántica a distancia, une partículas separadas. Los <span class=\"term\">qubits</span> (bits cuánticos) generalizan la informática clásica.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Seth Lloyd</span> estima operaciones y bits cósmicos. Los agujeros negros devoran información y desafían termodinámica. Computación cuántica trata leyes físicas como algoritmos. Por eso Gleick cierra el arco del tambor tonal al bit fundamental de la existencia.",
        },
        {
          type: 'key',
          html: "Información deja de ser metáfora y se vuelve ingrediente físico de partículas y espaciotiempo.",
        },
        {
          type: 'paragraph',
          html: "Tener bits por doquier no garantiza saber: llega el diluvio.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Después del diluvio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando toda información existe y nada se olvida?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jorge Luis Borges</span> imaginó la Biblioteca de Babel: contiene todos los libros posibles y ninguna verdad seleccionable. Wikipedia genera páginas de desambiguación sin fin, como si cada nombre propio exigiera su propia enciclopedia.",
        },
        {
          type: 'paragraph',
          html: "Tlön de Borges mezcla ficción y hecho en ciclopedia falsa. Tener catálogo completo no es conocimiento: es parálisis. Por eso Gleick conecta el glut contemporáneo con ansiedad antigua y acentúa volumen y persistencia digital sin precedente.",
        },
        {
          type: 'key',
          html: "El exceso informacional reproduce la Biblioteca de Babel: todo está, nada se elige solo.",
        },
        {
          type: 'paragraph',
          html: "Cada revolución mediática prometió — y temió — la misma saturación.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Noticias nuevas cada día",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿La imprenta y los medios modernos empeoraron realmente la comunicación humana?",
        },
        {
          type: 'paragraph',
          html: "Carl Bridenbaugh, presidente de la Asociación Histórica Americana en 1962, lamentó amnesia histórica. Temió Kodak y radios de transistor. <span class=\"person\">Elizabeth Eisenstein</span> trabajó quince años en «The Printing Press as an Agent of Change» (1979). Demostró que Gutenberg catalizó Reforma, ciencia moderna y alfabetización masiva.",
        },
        {
          type: 'paragraph',
          html: "Por eso cada gran tecnología inspiró euforia y queja de exceso. La prensa, el telégrafo, el teléfono, la TV e Internet repiten el patrón. Eisenstein situó la imprenta en el centro histórico. McLuhan comparó era eléctrica con era tipográfica elisabetiana. Vivimos dos formas de experiencia a la vez.",
        },
        {
          type: 'key',
          html: "La sobrecarga informacional es recurrente y la imprenta fue el primer diluvio moderno medible.",
        },
        {
          type: 'paragraph',
          html: "Tras el diluvio, Gleick pregunta si el significado puede regresar.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "El regreso del significado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿El mundo de datos es infernal, vacío de gracia, o habitable?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Marshall McLuhan</span> vio confusión elisabetina repetida en la era eléctrica. <span class=\"person\">H. G. Wells</span> soñó un «World Brain» microfilmado en 1938. Teilhard de Chardin habló de noosfera. Shannon excluyó significado. <span class=\"person\">Jean-Pierre Dupuy</span> temió un infierno sin sorpresa. Gleick ve gracia en redes.",
        },
        {
          type: 'paragraph',
          html: "Google PageRank explota enlaces como votos. Watts y Strogatz explicaron «small world» con pocos atajos. Wikipedia, Twitter en Mumbai y Teherán, fraude Hatto y Google Flu muestran inteligencia colectiva. También riesgo de manadas. No hay demonio de Maxwell que filtre por nosotros. Elegir sigue costando trabajo.",
        },
        {
          type: 'key',
          html: "El significado vuelve porque humanos siguen buscando patrones, no porque los bits lo traigan gratis.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Bit",
    "description": "Unidad de elección informacional; sí o no medible."
  },
  {
    "title": "Redundancia",
    "description": "Repetición que reduce ambigüedad ante ruido del canal."
  },
  {
    "title": "Entropía informacional",
    "description": "Incertidumbre o sorpresa promedio en un mensaje."
  },
  {
    "title": "Canal",
    "description": "Medio con capacidad limitada que exige codificación."
  },
  {
    "title": "Algoritmo",
    "description": "Procedimiento finito; base de computación y vida digital."
  },
  {
    "title": "Código genético",
    "description": "Mapa de tripletes de ADN a aminoácidos con tolerancia a error."
  },
  {
    "title": "Meme",
    "description": "Replicador cultural transmitido por imitación y medios."
  },
  {
    "title": "Cibernética",
    "description": "Estudio unificado de control y comunicación en máquinas y seres vivos."
  },
  {
    "title": "Demonio de Maxwell",
    "description": "Experimento mental que convierte información en orden local."
  },
  {
    "title": "Glut informacional",
    "description": "Exceso de datos que dificulta seleccionar significado."
  }
],
  chronology: [
  {
    "year": "~1500 a.C.",
    "text": "Invención única del alfabeto semítico; difusión por Mediterráneo."
  },
  {
    "year": "1604",
    "text": "Cawdrey publica el primer diccionario inglés alfabético."
  },
  {
    "year": "1837",
    "text": "Morse presenta telégrafo eléctrico y código."
  },
  {
    "year": "1865",
    "text": "Clausius acuña «entropía»; Maxwell plantea su demonio (1867)."
  },
  {
    "year": "1936",
    "text": "Turing publica máquina universal e indemostrabilidad."
  },
  {
    "year": "1948",
    "text": "Shannon teoría de comunicación; Wiener «Cybernetics»; transistor."
  },
  {
    "year": "1953",
    "text": "Watson y Crick describen estructura del ADN."
  },
  {
    "year": "1976",
    "text": "Dawkins acuña «meme» en The Selfish Gene."
  },
  {
    "year": "1979",
    "text": "Eisenstein consolida imprenta como agente de cambio."
  },
  {
    "year": "2011",
    "text": "Gleick publica The Information integrando historia y física cuántica."
  }
],
  figures: [
  {
    "name": "Claude Shannon",
    "role": "Teoría de la información y bit · criptografía Bell Labs"
  },
  {
    "name": "Alan Turing",
    "role": "Máquina universal · Bombe Enigma"
  },
  {
    "name": "Charles Babbage",
    "role": "Motores de cálculo mecánico · tablas numéricas"
  },
  {
    "name": "Ada Lovelace",
    "role": "Primer programa simbólico · visión del Analytical Engine"
  },
  {
    "name": "James Clerk Maxwell",
    "role": "Ecuaciones electromagnéticas · demonio termodinámico"
  },
  {
    "name": "John F. Carrington",
    "role": "Descifra tambores habladores africanos"
  },
  {
    "name": "Norbert Wiener",
    "role": "Cibernética · retroalimentación"
  },
  {
    "name": "Watson & Crick",
    "role": "Doble hélice del ADN como código"
  },
  {
    "name": "Richard Dawkins",
    "role": "Memes como replicadores culturales"
  },
  {
    "name": "Gregory Chaitin",
    "role": "Aleatoriedad e información algorítmica"
  },
  {
    "name": "John Archibald Wheeler",
    "role": "«It from Bit» · física participativa"
  },
  {
    "name": "Elizabeth Eisenstein",
    "role": "Imprenta como revolución cognitiva y social"
  }
],
  closing: {
    title: "La idea central",
    lines: [],
    highlight: "",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de James Gleick",
    line2: "\"The Information\" · Pantheon · 2011",
  },
}
