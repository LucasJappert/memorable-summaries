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
          html: "La neurociencia avanza tan rápido que rara vez nos detenemos a preguntar qué significa para nuestras vidas ser criaturas biológicas. <span class=\"person\">David Eagleman</span> escribe este libro para tender un puente entre la literatura académica y quienes «poseen» un cerebro sin formación especializada: cómo decidimos, percibimos la realidad, quiénes somos y hacia dónde se dirige la especie.",
        },
        {
          type: 'paragraph',
          html: "El tejido computacional del cráneo es la maquinaria perceptual con la que navegamos el mundo, el material del que surgen decisiones e imaginación. Comprenderlo arroja luz sobre lo que damos por real en las relaciones personales y en la política social: cómo peleamos, por qué amamos, qué aceptamos como verdad y cómo educar.",
        },
        {
          type: 'paragraph',
          html: "Raramente hablamos del cerebro en la cultura popular. Eagleman lo interpreta como pista de que estamos tan atrapados dentro de nuestra realidad que cuesta notar la trampa. Damos por hecho que los colores existen «afuera», que la memoria funciona como una cámara de video y que conocemos las razones reales de nuestras creencias. Las páginas siguientes ponen esas suposiciones bajo el foco.",
        },
        {
          type: 'key',
          html: "Este libro explora la identidad, la percepción, el control, la decisión, la socialidad y el futuro de una especie que empieza a tomar sus propias riendas.",
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
          html: "Un cerebro adulto pesa unas <span class=\"num\">1,4 kg</span> (tres libras), con consistencia de gelatina firme. Pensamientos, sueños y recuerdos surgen de patrones de pulsos electroquímicos. Cuando esa actividad cesa, tú cesas. A diferencia de otros órganos, dañar un fragmento pequeño del cerebro puede cambiar radicalmente quién eres.",
        },
        {
          type: 'paragraph',
          html: "Los humanos nacen <span class=\"term\">inacabados</span> y dependemos años de cuidadores mientras el cerebro se moldea por experiencia. A los dos años hay más de <span class=\"num\">100 billones</span> de sinapsis, el doble que en la adultez. Luego la <span class=\"term\">poda neuronal</span> elimina conexiones no usadas: te conviertes en quien eres no por lo que crece, sino por lo que se elimina.",
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
          html: "La adolescencia trae una segunda oleada de poda en la corteza prefrontal (hasta ~<span class=\"num\">25</span> años). Los adolescentes muestran mayor ansiedad social y más búsqueda de recompensa con control de impulsos inmaduro. Los taxistas londinenses que memorizan «The Knowledge» (~<span class=\"num\">25 000</span> calles) desarrollan un hipocampo posterior agrandado: la plasticidad no termina en la adultez.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Whitman</span> (<span class=\"num\">1966</span>) pidió autopsia tras una matanza en la Torre de Texas. Un tumor del tamaño de una moneda presionaba la amígdala. <span class=\"person\">Elizabeth Loftus</span> demostró que recuerdos falsos, como perderse de niño en un centro comercial, pueden implantarse y enriquecerse con el tiempo. La memoria no es un video: es reconstrucción frágil que el presente colorea.",
        },
        {
          type: 'paragraph',
          html: "El estudio de órdenes religiosas dirigido por <span class=\"person\">David Bennett</span> en Rush University mostró que la <span class=\"term\">reserva cognitiva</span> puede compensar la patología de Alzheimer en autopsia. La actividad mental, las redes sociales y el propósito protegen la cognición. La conciencia emerge cuando neuronas coordinan ritmos complejos. En sueño profundo, la sincronía apaga el «yo» consciente.",
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
          html: "El cerebro, sellado en la oscuridad del cráneo, nunca experimentó directamente el mundo exterior. Los sentidos traducen fotones, ondas de presión, moléculas y textura a señales electroquímicas. Cerca de un tercio del cerebro humano se dedica a la visión. Todo lo que experimentas es una representación electroquímica en un teatro oscuro.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Mike May</span> recuperó la vista tras más de <span class=\"num\">40</span> años de ceguera. Los ojos funcionaban, pero el cerebro no «veía»: no reconocía rostros ni profundidad. En el experimento de <span class=\"person\">Held</span> y <span class=\"person\">Hein</span> (<span class=\"num\">1963</span>), solo el gatito que caminaba, no el que iba en góndola, desarrolló visión normal. Ver exige entrenar cuerpo y sentidos juntos.",
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
          html: "Gafas de prisma invierten izquierda y derecha. En minutos provocan náusea, pero tras una semana el cerebro re-mapea el espacio. El cerebro sincroniza sentidos con retraso, de modo que vives en el pasado para que todo parezca simultáneo. En el «Hole» de Alcatraz, sin luz ni sonido, el <span class=\"term\">modelo interno</span> sigue generando imágenes vívidas. La corteza visual envía diez veces más señales al tálamo que las que recibe de los ojos.",
        },
        {
          type: 'paragraph',
          html: "El color no existe fuera del cerebro: solo una fracción minúscula del espectro electromagnético es «visible». La sinestesia (~<span class=\"num\">3 %</span> de la población) demuestra que cada cerebro habita una realidad distinta. En esquizofrenia, como en los sueños, la narrativa interna puede ser indistinguible de la vigilia. El «tiempo lento» en accidentes es ilusión retrospectiva: la amígdala graba recuerdos densos que al reproducirse parecen más largos.",
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
          html: "Al leer, los ojos saltan en <span class=\"term\">sacadas</span> de ~<span class=\"num\">20 ms</span>. El cerebro estabiliza la escena mientras tú crees mirar de forma continua. Levantar una taza de café exige coordinación de visión, memoria, corteza motora, cerebelo y ganglios basales en fracciones de segundo, con un gasto energético comparable a decenas de supercomputadoras, todo sin que la conciencia lo note.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Ian Waterman</span> perdió la propiocepción y el tacto por daño nervioso. Debe planificar cada movimiento con atención consciente y vigilar sus extremidades visualmente. Una distracción le hace caer. Su caso revela lo que el inconsciente hace por nosotros al caminar. <span class=\"person\">Austin Naber</span>, campeón infantil de apilar vasos, muestra ondas alfa de reposo mientras un adulto novato quema ondas beta de esfuerzo. La práctica graba la habilidad en el hardware neuronal.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Iceberg de Freud",
              "description": "La conciencia es la punta; lo oculto dirige pensamientos y conducta.",
              "icon": "🧊"
            },
            {
              "title": "Priming",
              "description": "Bebida caliente, olor fétido o silla dura sesgan juicios sin que lo notes.",
              "icon": "🎯"
            },
            {
              "title": "Ken Parks",
              "description": "Sonambulismo: la conciencia puede ausentarse en actos extremos.",
              "icon": "😴"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Habilidades automatizadas (conducir «en piloto automático», escalar en <span class=\"term\">flow</span>) liberan recursos conscientes. Interferir deliberadamente empeora el rendimiento. El inconsciente también fabrica lenguaje, ideas y narrativas de elección: el <span class=\"term\">priming</span> y el egotismo implícito influyen en profesión y pareja sin entrar en la historia que contamos.",
        },
        {
          type: 'paragraph',
          html: "En experimentos de <span class=\"person\">Alvaro Pascual-Leone</span>, la estimulación magnética transcraneal inclina la mano que se mueve, pero los participantes reportan haber querido esa mano. La conciencia narra como propia lo que ya decidieron otras redes. Aun así, Eagleman sugiere que la conciencia actúa como CEO ante lo inesperado y ante conflictos internos (helado vs. dieta). La complejidad del cerebro hace impredecible cada acción en la práctica.",
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
          html: "¿Como el helado o no? ¿Responder el correo ahora? Miles de microdecisiones al día. Eagleman rechaza el modelo del actor racional: el cerebro es un <span class=\"term\">parlamento neural</span> de redes rivales que compiten por el control.",
        },
        {
          type: 'paragraph',
          html: "Durante cirugía despierta, los «pops» de neuronas de Jim reflejan cuándo su cerebro elige ver a la joven o a la anciana en una imagen ambigua. Cada decisión perceptual es winner-take-all entre coaliciones. En la heladería, redes de «menta» y «limón» se excitan y suprimen mutuamente hasta que una gana.",
        },
        {
          type: 'paragraph',
          html: "Pacientes con <span class=\"term\">cerebro dividido</span> muestran una mano «alienígena» que deshace lo que la otra hace. El test Stroop obliga a suprimir la lectura automática para nombrar colores. En el dilema del tranvía, tirar de la palanca activa redes lógicas. Empujar a alguien activa emociones y cambia la respuesta, aunque la ecuación sea la misma.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Tammy Myers</span>, con daño en la corteza orbitofrontal, puede listar pros y contras pero no decidir: sin señales corporales que resuman «esto importa», queda paralizada. El cuerpo dialoga con el cerebro en cada elección, desde un perro que gruñe hasta elegir sopa en el supermercado. <span class=\"person\">Read Montague</span> correlaciona respuesta de asco neural con ideología política con ~<span class=\"num\">95 %</span> de precisión en un solo estímulo.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "65 %",
              "label": "Probabilidad de libertad condicional tras descanso del juez"
            },
            {
              "value": "20 %",
              "label": "Probabilidad al final de la sesión (hambre / agotamiento)"
            },
            {
              "value": "2×",
              "label": "Propinas a bailarinas en ovulación vs. menstruación"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "El cerebro <span class=\"term\">viaja en el tiempo</span> al simular futuros y valorarlos en moneda de recompensa. La dopamina codifica el error de predicción. El <span class=\"term\">poder del ahora</span> vence las simulaciones futuras en préstamos subprime, drogas o aventuras. El <span class=\"term\">contrato de Ulises</span> ata al yo futuro, por ejemplo con un gimnasio concertado con un amigo.",
        },
        {
          type: 'paragraph',
          html: "La adicción es batalla entre redes de craving y de supresión. En el laboratorio de Eagleman, adictas como Karen aprenden con neuroimagen en tiempo real a inclinar la aguja. Mendota Juvenile Treatment Center entrena a adolescentes a pausar y simular consecuencias, alineando justicia penal con neurociencia del impulso.",
        },
        {
          type: 'key',
          html: "Decidir no es un acto único del yo: es competencia entre sistemas automáticos, emoción corporal, simulación del futuro y un sesgo hacia el presente.",
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
          html: "Más allá de nutrientes y oxígeno, el cerebro necesita <span class=\"term\">otros cerebros</span>. La función neural normal depende de la red social: somos una especie profundamente social cuyo cableado incluye vastos circuitos para leer intenciones, emociones y pertenencia.",
        },
        {
          type: 'paragraph',
          html: "En la animación de <span class=\"person\">Heider</span> y <span class=\"person\">Simmel</span>, triángulos y círculos se perciben como persecución y romance. Bebés de menos de un año eligen, en un títere, al oso amable sobre el malo sin necesidad de palabras. Nacemos con antenas sociales para confianza y desconfianza.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">John Robison</span>, con Asperger, tras estimulación TMS en corteza prefrontal dorsolateral percibió por primera vez el canal social de expresiones faciales. El <span class=\"term\">espejeo facial</span> automático ayuda a leer emociones. El Botox, al paralizar músculos, empeora esa lectura. Ver dolor ajeno activa la <span class=\"term\">matriz del dolor</span> emocional. La empatía es simulación neural.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Sarah Shourd</span> pasó <span class=\"num\">410</span> días en confinamiento solitario, y la privación de interacción convirtió su cerebro en fuente de tortura. En experimentos de <span class=\"person\">Naomi Eisenberger</span>, la exclusión en un juego de pelota activa las mismas áreas que el dolor físico. La evolución favoreció el <span class=\"term\">eusocialismo</span>. Cooperar en grupo supera al individuo aislado, pero genera ingroups y outgroups.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Síndrome E",
              "description": "Violencia masiva con empatía «desconectada» (Itzhak Fried).",
              "icon": "⚔️"
            },
            {
              "title": "Etiqueta mínima",
              "description": "Una palabra (cristiano, ateo, musulmán) reduce empatía preconsciente.",
              "icon": "🏷️"
            },
            {
              "title": "Ojos azules/marrones",
              "description": "Jane Elliott enseña arbitrariedad del prejuicio a niños.",
              "icon": "👁️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Eagleman midió menor respuesta empática al ver dolor en manos etiquetadas como outgroup religioso. <span class=\"person\">Lasana Harris</span> muestra que ver personas sin hogar desactiva la corteza prefrontal medial. La deshumanización facilita la indiferencia y el horror colectivo. La propaganda explota estos circuitos. La educación en perspectiva ajena, como el ejercicio de Elliott, puede contrarrestarlo.",
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
          html: "El cuerpo humano reúne unos <span class=\"num\">40 billones</span> de células, pero sus sentidos y límites físicos no son el techo. La <span class=\"term\">plasticidad</span> cerebral permite acoplar tecnología y expandir qué podemos percibir, controlar y quizá ser.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">2007</span>, <span class=\"person\">Cameron Mott</span> se sometió a una <span class=\"term\">hemisferectomía</span> y recuperó lenguaje y escuela con medio cerebro. El tejido restante reasignó funciones. Implantes cocleares y retinianos demuestran que el cerebro aprende a interpretar señales artificiales como un idioma nuevo. La <span class=\"term\">sustitución sensorial</span> (espalda, lengua, chaleco VEST) prueba que no importa el canal: importa el patrón de datos.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jan Scheuermann</span> controla un brazo robótico con electrodos en la corteza motora: «es como andar en bicicleta». Interfaces cerebro-máquina podrían extender el cuerpo a distancia, con fuerza hidráulica o tareas en la Luna mientras comes un sándwich en la Tierra.",
        },
        {
          type: 'paragraph',
          html: "La criogenia en Alcor congela cuerpos o cabezas a <span class=\"num\">−196 °C</span> apostando a una segunda oportunidad futura. Mapear el <span class=\"term\">conectoma</span> completo exigiría un zettabyte y aún faltaría la dinámica eléctrica. La <span class=\"term\">hipótesis computacional</span> pregunta si la mente podría correr en silicio. iCub y la habitación china de <span class=\"person\">John Searle</span> muestran lo lejos que está la IA consciente.",
        },
        {
          type: 'paragraph',
          html: "La conciencia podría ser una propiedad <span class=\"term\">emergente</span> de interacciones, como en colonias de hormigas o ciudades. Tononi propone medir integración y diferenciación. Subir la mente a una simulación plantea si sería «tú» o una copia. Eagleman cierra que la especie está al inicio de hackear su hardware. Quiénes seremos depende de las decisiones que tomemos ahora.",
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
    "title": "Parlamento neural",
    "description": "Decisiones como competencia winner-take-all entre coaliciones de neuronas."
  },
  {
    "title": "Poda sináptica",
    "description": "Eliminación de conexiones no usadas; escultura de la identidad desde la infancia."
  },
  {
    "title": "Reserva cognitiva",
    "description": "Redes alternativas que compensan daño por envejecimiento o enfermedad."
  },
  {
    "title": "Matriz del dolor",
    "description": "Circuitos compartidos entre dolor propio y observación del dolor ajeno (empatía)."
  },
  {
    "title": "Sustitución sensorial",
    "description": "El cerebro interpreta datos por cualquier canal periférico plug-and-play."
  },
  {
    "title": "Conectoma",
    "description": "Mapa completo de conexiones neuronales; frontera de neurociencia y simulación."
  },
  {
    "title": "Contrato de Ulises",
    "description": "Comprometer al yo futuro contra el sesgo del «ahora»."
  }
],
  chronology: [
  {
    "year": "1963",
    "text": "Held y Hein: solo el gatito que camina desarrolla visión normal."
  },
  {
    "year": "1966",
    "text": "Matanza en la Torre de Texas; políticas de Ceauşescu y huérfanos de Rumanía."
  },
  {
    "year": "1969",
    "text": "Bach-y-Rita: «ver» con cámara traducida a presión en la espalda."
  },
  {
    "year": "1987",
    "text": "Ken Parks: homicidio en sonambulismo; absuelto por trastorno del sueño."
  },
  {
    "year": "1994",
    "text": "Inicia el Religious Orders Study sobre envejecimiento cerebral."
  },
  {
    "year": "2007",
    "text": "Hemisferectomía de Cameron Mott; recuperación sorprendente."
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
    "name": "Charles Nelson",
    "role": "Estudios de huérfanos de Rumanía y desarrollo cerebral."
  },
  {
    "name": "Elizabeth Loftus",
    "role": "Pionera en memoria maleable y recuerdos implantados."
  },
  {
    "name": "Mike May",
    "role": "Recuperó la vista tras décadas de ceguera; demuestra que ver ≠ ojos sanos."
  },
  {
    "name": "Ian Waterman",
    "role": "Sin propiocepción; cada movimiento requiere planificación consciente."
  },
  {
    "name": "Alvaro Pascual-Leone",
    "role": "TMS y la ilusión de libre albedrío en elección de mano."
  },
  {
    "name": "Read Montague",
    "role": "Asocia respuesta de asco neural con ideología política."
  },
  {
    "name": "Jane Elliott",
    "role": "Experimento ojos azules/marrones contra el prejuicio arbitrario."
  },
  {
    "name": "Francis Crick",
    "role": "Buscaba el «significado» en la neurociencia de la conciencia."
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
