import type { BookSummary } from '../types/book'

export const theBrain: BookSummary = {
  slug: "the-brain",
  meta: {
    title: "The Brain: The Story of You",
    subtitle: "¿Quién eres en los tres kilos de gelatina entre tus orejas?",
    author: "David Eagleman",
    meta: [
      "📖 2015 · Pantheon Books / Canongate",
      "✍️ Compañero del libro de la serie documental Blink Films",
    ],
    titleEs: "El cerebro: La historia de ti",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "¿Quién soy yo?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "¿Qué es la realidad?"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "¿Quién manda?"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "¿Cómo decido?"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "¿Te necesito?"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "¿Quiénes seremos?"
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
      num: "Introducción",
      title: "El material que te hace ser tú",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La neurociencia avanza tan rápido que rara vez nos detenemos a preguntar qué significa para nuestras vidas ser criaturas biológicas. <span class=\"person\">David Eagleman</span> escribe este libro para tender un puente entre la literatura académica y quienes «poseen» un cerebro sin formación especializada.",
        },
        {
          type: 'paragraph',
          html: "El tejido computacional del cráneo es la maquinaria perceptual con la que navegamos el mundo, el material del que surgen decisiones e imaginación. Comprenderlo arroja luz sobre lo que damos por real en las relaciones personales y en la política social: cómo peleamos, por qué amamos, qué aceptamos como verdad, cómo educar y hacia dónde se dirige una especie que empieza a tomar sus propias riendas.",
        },
        {
          type: 'paragraph',
          html: "Raramente hablamos del cerebro en la cultura popular. Eagleman lo interpreta como pista de que estamos tan atrapados dentro de nuestra realidad que cuesta notar la trampa. Damos por hecho que los colores existen «afuera», que la memoria funciona como una cámara de video y que conocemos las razones reales de nuestras creencias.",
        },
        {
          type: 'key',
          html: "Este libro pone bajo el foco esas suposiciones: identidad, percepción, control, decisión, socialidad y futuro de la especie.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Quién soy yo?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Todas las experiencias, desde una conversación hasta la cultura que te rodea, moldean los detalles microscópicos del cerebro. Neuronalmente, quién eres depende de dónde has estado. El cerebro es un <span class=\"term\">livewire</span> (cableado vivo) que reescribe su propia circuitería. La identidad es un blanco en movimiento que nunca alcanza un punto final.",
        },
        {
          type: 'paragraph',
          html: "Un cerebro adulto pesa unos <span class=\"num\">1,4 kg</span> (tres libras), con consistencia de gelatina firme. Pensamientos, sueños y recuerdos surgen de patrones de pulsos electroquímicos. Cuando esa actividad cesa, tú cesas. A diferencia de otros órganos, dañar un fragmento pequeño del cerebro puede cambiar radicalmente quién eres.",
        },
        {
          type: 'paragraph',
          html: "Los humanos nacen <span class=\"term\">inacabados</span> y dependemos años de cuidadores mientras el cerebro se moldea por experiencia. A los dos años hay más de <span class=\"num\">100 billones</span> de sinapsis, el doble que en la adultez. Luego la <span class=\"term\">poda neuronal</span> elimina conexiones no usadas. Te conviertes en quien eres no por lo que crece, sino por lo que se elimina.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Cerebro livewire",
              "description": "Genes dan planos generales; la experiencia afina el cableado detallado.",
              "icon": "🧒"
            },
            {
              "title": "Poda sináptica",
              "description": "~50 % de sinapsis infantiles se recortan; «lo que no usas, lo pierdes».",
              "icon": "✂️"
            },
            {
              "title": "Huérfanos de Rumanía",
              "description": "Privación temprana daña el cerebro; la recuperación es mejor antes de los dos años.",
              "icon": "🏚️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La adolescencia trae una segunda oleada de poda en la corteza prefrontal (hasta ~<span class=\"num\">25</span> años). Los adolescentes muestran mayor ansiedad social (corteza prefrontal medial más activa) y más búsqueda de recompensa con control de impulsos inmaduro. Los taxistas londinenses que memorizan «The Knowledge» (~<span class=\"num\">25 000</span> calles) desarrollan un hipocampo posterior agrandado.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Whitman</span> (<span class=\"num\">1966</span>) pidió autopsia tras una matanza en la Torre de Texas. Un tumor del tamaño de una moneda presionaba la amígdala. <span class=\"person\">Elizabeth Loftus</span> demostró que recuerdos falsos, como perderse de niño en un centro comercial, pueden implantarse y enriquecerse con el tiempo.",
        },
        {
          type: 'key',
          html: "La identidad no es un núcleo fijo: es un patrón neural en constante reescritura, desde la cuna hasta la vejez.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "¿Qué es la realidad?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Y si el mundo de colores, texturas y olores fuera un espectáculo montado por el cerebro? Fuera del cráneo solo hay energía y materia. La evolución convirtió eso en experiencia rica. Ilusiones como las serpientes rotatorias de <span class=\"person\">Akiyoshi Kitaoka</span> o el tablero de <span class=\"person\">Edward Adelson</span> muestran que la percepción depende más de adentro que de afuera.",
        },
        {
          type: 'paragraph',
          html: "El cerebro, sellado en la oscuridad del cráneo, nunca experimentó directamente el mundo exterior. Los sentidos traducen fotones, ondas de presión, moléculas y textura a señales electroquímicas. Cerca de un tercio del cerebro humano se dedica a la visión.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Mike May</span> recuperó la vista tras más de <span class=\"num\">40</span> años de ceguera. Los ojos funcionaban, pero el cerebro no «veía». En el experimento de <span class=\"person\">Held</span> y <span class=\"person\">Hein</span> (<span class=\"num\">1963</span>), solo el gatito que caminaba, no el que iba en góndola, desarrolló visión normal. Ver exige entrenar cuerpo y sentidos juntos.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~⅓",
              "label": "Cerebro humano dedicado a visión"
            },
            {
              "value": "~160 ms",
              "label": "Reacción a disparo de pistola (vs. ~190 ms a flash)"
            },
            {
              "value": "10×",
              "label": "Conexiones corteza→tálamo vs. tálamo→corteza visual"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Gafas de prisma invierten izquierda y derecha. En minutos provocan náusea. Después de una semana, el cerebro re-mapea el espacio. El cerebro sincroniza sentidos con retraso, de modo que vives en el pasado para que todo parezca simultáneo. En el «Hole» de Alcatraz, sin luz ni sonido, el <span class=\"term\">modelo interno</span> sigue generando imágenes vívidas.",
        },
        {
          type: 'key',
          html: "La realidad consciente es construcción cerebral: predicción, comparación de errores y edición temporal, no registro fiel del exterior.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "¿Quién manda?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Actos simples como reconocer un rostro, conducir o entender un chiste requieren cálculos masivos bajo el umbral de la conciencia. ¿Quién conduce el barco si la mayor parte del trabajo es invisible?",
        },
        {
          type: 'paragraph',
          html: "Al leer, los ojos saltan en <span class=\"term\">sacadas</span> de ~<span class=\"num\">20 ms</span>. El cerebro estabiliza la escena. La conciencia llega tarde. En experimentos de «veto», la preparación motora aparece en EEG antes de que sientas la intención de moverte.",
        },
        {
          type: 'paragraph',
          html: "Pacientes con <span class=\"term\">cerebro dividido</span> (cuerpo calloso seccionado) muestran dos sistemas de control: la mano izquierda puede elegir ropa que la boca no puede nombrar. El cerebro es un equipo de rivales, no un monarca único.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">propiocepción</span>, es decir saber dónde están las partes del cuerpo, puede fallar en el síndrome de miembro fantasma o en la «mano extraña». Las ondas cerebrales pasan de complejidad despierta a sincronía en sueño profundo. La conciencia emerge de ritmos neuronales integrados.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Monarca caído",
              "description": "La conciencia resume lo ya decidido en coaliciones neuronales.",
              "icon": "👑"
            },
            {
              "title": "Cerebro dividido",
              "description": "Dos hemisferios con agendas parcialmente independientes.",
              "icon": "✂️"
            },
            {
              "title": "Ondas y sueño",
              "description": "Conciencia = conversaciones neuronales complejas; sueño = ola mexicana sincronizada.",
              "icon": "🌊"
            }
          ],
        },
        {
          type: 'key',
          html: "El yo consciente es la punta del iceberg: la mayoría de las decisiones y percepciones ya están resueltas cuando «tú» te enteras.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "¿Cómo decido?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Como el helado o no? ¿Responder el correo ahora? Miles de microdecisiones al día. Parecen deliberadas, pero gran parte opera con modelos automáticos y sesgos inconscientes.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">cerebro emocional</span> (sistema límbico) y la corteza prefrontal negocian constantemente. La amígdala puede secuestrar decisiones antes de que la razón intervenga. El experimento del «carro del trolley» activa distintas redes según empujes un interruptor o empujes a alguien directamente.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">fuerza de voluntad</span> parece un recurso finito: tras tareas de autocontrol, las personas eligen peor en pruebas siguientes. Los hábitos liberan corteza prefrontal al automatizar rutinas en ganglios basales.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> mostró actividad preparatoria antes de la sensación de decisión consciente. Eso no elimina la responsabilidad, pero reubica la agencia: muchas «decisiones» son propuestas que la conciencia ratifica o veta tarde.",
        },
        {
          type: 'key',
          html: "Decidir no es un acto único del yo: es competencia entre sistemas automáticos, emoción, hábito y un veto consciente a menudo tardío.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "¿Te necesito?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué necesita el cerebro para funcionar? Más allá de nutrientes y oxígeno, necesita <span class=\"term\">otros cerebros</span>. Los humanos somos ultrasociales. La corteza prefrontal medial se activa al pensar en nosotros mismos y en los demás.",
        },
        {
          type: 'paragraph',
          html: "Neuronas <span class=\"term\">espejo</span> y circuitos de empatía nos permiten simular estados ajenos. La soledad crónica daña la salud como el tabaquismo. La interacción social depende de neuroquímica (oxitocina, dopamina) y no es un lujo opcional.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">autismo</span> y el <span class=\"term\">síndrome E</span> (empatía reducida) muestran espectros de conexión social. La cultura esculpe cerebros: normas, lenguaje y rituales dejan huellas físicas en redes neuronales.",
        },
        {
          type: 'paragraph',
          html: "El estudio de órdenes religiosas dirigido por <span class=\"person\">David Bennett</span> en Rush University reveló que la reserva cognitiva (actividad mental, redes sociales, propósito) puede compensar la patología de Alzheimer en autopsia.",
        },
        {
          type: 'key',
          html: "No hay cerebro aislado: tu identidad es negociación continua entre tu red neural y las de los demás.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "¿Quiénes seremos?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El cuerpo humano reúne unos <span class=\"num\">40 billones</span> de células. El cerebro es su director de orquesta. La tecnología empieza a fusionarse con la biología. Prótesis, interfaces cerebro-computadora y edición genética plantean preguntas sobre qué significará ser humano.",
        },
        {
          type: 'paragraph',
          html: "Prótesis auditivas y visuales ya traducen señales al lenguaje neural. El chaleco <span class=\"term\">Vest</span> convierte datos en patrones táctiles que el cerebro aprende a «oír». La muerte legal y la muerte cerebral divergen a medida que la tecnología mantiene funciones aisladas.",
        },
        {
          type: 'paragraph',
          html: "La microscopía electrónica serial y el <span class=\"term\">conectoma</span>, el mapa de todas las conexiones neuronales, avanzan en ratones y humanos. Subir cerebros completos a silicio sigue siendo especulativo, pero la tendencia es clara. La frontera entre máquina y mente se difumina.",
        },
        {
          type: 'paragraph',
          html: "Eagleman defiende que debemos diseñar políticas y ética a la velocidad de la neurociencia, no de la burocracia. La especie empieza a tomar sus propias riendas biológicas. Las decisiones de hoy esculpen los cerebros de mañana.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1963",
              "text": "Experimento de gatitos Held/Hein: visión requiere movimiento propio."
            },
            {
              "year": "1966",
              "text": "Caso Charles Whitman: tumor y agresión."
            },
            {
              "year": "2015",
              "text": "Publicación de este libro y serie documental asociada."
            }
          ],
        },
        {
          type: 'key',
          html: "El futuro no es solo más tecnología: es redefinir identidad, muerte y capacidad cuando el cerebro deje de ser territorio exclusivamente biológico.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Livewire",
    "description": "Cerebro humano cableado por experiencia, no preprogramado como la mayoría de mamíferos."
  },
  {
    "title": "Modelo interno",
    "description": "Predicción cerebral que compara expectativas con datos sensoriales (error = actualización)."
  },
  {
    "title": "Poda sináptica",
    "description": "Eliminación de conexiones no usadas; escultura de la identidad desde la infancia."
  },
  {
    "title": "Conciencia tardía",
    "description": "La experiencia consciente llega después de preparación neural inconsciente."
  },
  {
    "title": "Cerebro dividido",
    "description": "Hemisferios con agendas parciales tras sección del cuerpo calloso."
  },
  {
    "title": "Reserva cognitiva",
    "description": "Redes neuronales alternativas que compensan daño por envejecimiento."
  },
  {
    "title": "Conectoma",
    "description": "Mapa completo de conexiones neuronales; frontera de la neurociencia futura."
  },
  {
    "title": "Neuronas espejo",
    "description": "Circuitos que simulan acciones y estados ajenos; base de empatía social."
  }
],
  chronology: [
  {
    "year": "1963",
    "text": "Held y Hein demuestran que la visión normal exige movimiento corporal activo."
  },
  {
    "year": "1966",
    "text": "Matanza en la Torre de Texas; autopsia revela tumor en amígdala de Whitman."
  },
  {
    "year": "1967",
    "text": "Yarbus registra movimientos oculares al contemplar cuadros."
  },
  {
    "year": "1973",
    "text": "Loftus muestra cómo preguntas sugerentes distorsionan memoria de accidentes."
  },
  {
    "year": "1994",
    "text": "Inicia el Religious Orders Study sobre envejecimiento cerebral."
  },
  {
    "year": "2015",
    "text": "Eagleman publica «The Brain: The Story of You»."
  }
],
  figures: [
  {
    "name": "David Eagleman",
    "role": "Neurocientífico y autor; guía la exploración popular del cerebro."
  },
  {
    "name": "Mike May",
    "role": "Recuperó la vista tras décadas de ceguera; demuestra que ver ≠ ojos sanos."
  },
  {
    "name": "Elizabeth Loftus",
    "role": "Pionera en memoria malleable y recuerdos implantados."
  },
  {
    "name": "Charles Whitman",
    "role": "Caso extremo: lesión cerebral y cambio de personalidad violenta."
  },
  {
    "name": "Richard Held y Alan Hein",
    "role": "Experimento de gatitos en cilindro rayado (MIT, 1963)."
  },
  {
    "name": "Benjamin Libet",
    "role": "EEG y el retraso de la conciencia respecto a la preparación motora."
  },
  {
    "name": "Francis Crick",
    "role": "Colaborador de Eagleman; buscaba el «significado» en la neurociencia."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Eres el producto de un órgano que nunca deja de reescribirse.",
  "Cada experiencia deja huella en el cableado que define quién eres.",
  "Lo que llamas «tú» suele llegar cuando el trabajo neural ya está avanzado.",
  "Entender esto no nos quita agencia: nos obliga a diseñar mejor educación, justicia y futuro tecnológico.",
  "Somos obras en progreso, de la cuna a la prótesis."
],
    highlight: "No percibes el mundo: tu cerebro lo construye, lo retrasa y lo edita para ti.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David Eagleman",
    line2: "\"The Brain: The Story of You\" · Pantheon Books · 2015",
  },
}
