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
    "label": "El material que te hace ser tú"
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
    "label": "Cronología de hitos citados"
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
          html: "¿Qué cambia en tu vida cuando descubres que «tú» eres un órgano de tres kilos? El neurocientífico <span class=\"person\">David Eagleman</span> escribe para quien tiene cerebro pero no formación especializada. Quiere tender un puente entre la ciencia académica y la vida cotidiana.",
        },
        {
          type: 'paragraph',
          html: "Ese tejido dentro del cráneo es la maquinaria con la que percibes, decides e imaginas. Comprenderlo arroja luz sobre lo que damos por real. Afecta cómo peleamos, por qué amamos y qué aceptamos como verdad.",
        },
        {
          type: 'paragraph',
          html: "Rara vez hablamos del cerebro en la cultura popular. Eagleman lo interpreta como señal de que estamos atrapados dentro de nuestra propia experiencia. Damos por hecho que los colores existen «afuera». Creemos que la memoria funciona como una cámara de video. Suponemos conocer las razones reales de nuestras creencias. Las páginas siguientes ponen esas suposiciones bajo el foco.",
        },
        {
          type: 'key',
          html: "Este libro explora identidad, percepción, control, decisión, socialidad y el futuro de una especie que empieza a tomar sus propias riendas.",
        },
        {
          type: 'paragraph',
          html: "Para empezar, Eagleman pregunta quién eres si el cerebro se reescribe con cada experiencia.",
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
          html: "¿Quién eres si cada conversación y cada cultura que te rodea deja huella microscópica en el cerebro? Neuronalmente, quién eres depende de dónde has estado. El cerebro es un <span class=\"term\">livewire</span> (cableado vivo que reescribe su propia circuitería). La identidad es un blanco en movimiento que nunca alcanza un punto final.",
        },
        {
          type: 'paragraph',
          html: "Un cerebro adulto pesa unas <span class=\"num\">1,4 kg</span>, con consistencia de gelatina firme. Pensamientos, sueños y recuerdos surgen de pulsos electroquímicos. Por eso, cuando esa actividad cesa, tú cesas. A diferencia de otros órganos, dañar un fragmento pequeño puede cambiar radicalmente quién eres.",
        },
        {
          type: 'paragraph',
          html: "Los humanos nacen incompletos y dependen años de cuidadores mientras el cerebro se moldea por experiencia. A los dos años hay más de <span class=\"num\">100 billones</span> de sinapsis, el doble que en la adultez. Luego la <span class=\"term\">poda sináptica</span> (eliminación de conexiones no usadas) esculpe la identidad. Te conviertes en quien eres no por lo que crece, sino por lo que se elimina.",
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
          html: "La adolescencia trae una segunda oleada de poda en la corteza prefrontal (hasta ~<span class=\"num\">25</span> años). Los adolescentes muestran mayor ansiedad social y más búsqueda de recompensa. Los taxistas londinenses que memorizan «The Knowledge» (~<span class=\"num\">25 000</span> calles) desarrollan un hipocampo posterior agrandado. La plasticidad no termina en la adultez.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Whitman</span> pidió autopsia tras una matanza en la Torre de Texas (<span class=\"num\">1966</span>). Un tumor del tamaño de una moneda presionaba la amígdala. La psicóloga <span class=\"person\">Elizabeth Loftus</span> demostró que recuerdos falsos pueden implantarse y enriquecerse con el tiempo. La memoria no es un video: es reconstrucción frágil que el presente colorea.",
        },
        {
          type: 'paragraph',
          html: "Un estudio de órdenes religiosas en Rush University, dirigido por <span class=\"person\">David Bennett</span>, mostró algo sorprendente. La <span class=\"term\">reserva cognitiva</span> (redes alternativas que compensan daño cerebral) puede enmascarar la patología de Alzheimer en autopsia. La actividad mental, las redes sociales y el propósito protegen la cognición. La conciencia emerge cuando neuronas coordinan ritmos complejos. En sueño profundo, la sincronía apaga el «yo» consciente.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">identidad</span> no es un núcleo fijo: es un patrón neural en constante reescritura, desde la cuna hasta la vejez.",
        },
        {
          type: 'paragraph',
          html: "Si el yo es un proceso cambiante, la siguiente pregunta es qué ocurre con el mundo que damos por «real».",
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
          html: "¿Y si el mundo de colores, texturas y olores fuera un espectáculo montado por el cerebro? Fuera del cráneo solo hay energía y materia. La evolución convirtió eso en experiencia rica. Ilusiones como las serpientes rotatorias de <span class=\"person\">Akiyoshi Kitaoka</span> muestran que la percepción depende más de adentro que de afuera.",
        },
        {
          type: 'paragraph',
          html: "El cerebro, sellado en la oscuridad del cráneo, nunca experimentó directamente el mundo exterior. Los sentidos traducen fotones, ondas de presión, moléculas y textura a señales electroquímicas. Cerca de un tercio del cerebro humano se dedica a la visión. Todo lo que experimentas es una representación electroquímica en un teatro oscuro.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Mike May</span> recuperó la vista tras más de <span class=\"num\">40</span> años de ceguera. Los ojos funcionaban, pero el cerebro no «veía»: no reconocía rostros ni profundidad. En el experimento de <span class=\"person\">Held</span> y Hein (<span class=\"num\">1963</span>), solo el gatito que caminaba desarrolló visión normal. Ver exige entrenar cuerpo y sentidos juntos.",
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
          html: "Gafas de prisma invierten izquierda y derecha. En minutos provocan náusea, pero tras una semana el cerebro re-mapea el espacio. El cerebro sincroniza sentidos con retraso, de modo que vives en el pasado para que todo parezca simultáneo. En el «Hole» de Alcatraz, sin luz ni sonido, el <span class=\"term\">modelo interno</span> (predicción cerebral que compara expectativas con datos sensoriales) sigue generando imágenes vívidas.",
        },
        {
          type: 'paragraph',
          html: "El color no existe fuera del cerebro: solo una fracción minúscula del espectro electromagnético es «visible». La sinestesia (~<span class=\"num\">3 %</span> de la población) demuestra que cada cerebro habita una realidad distinta. En esquizofrenia, como en los sueños, la narrativa interna puede ser indistinguible de la vigilia. El «tiempo lento» en accidentes es ilusión retrospectiva: la amígdala graba recuerdos densos que al reproducirse parecen más largos.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">realidad consciente</span> es construcción cerebral: predicción, comparación de errores y edición temporal, no registro fiel del exterior.",
        },
        {
          type: 'paragraph',
          html: "Si el mundo es una representación interna, conviene preguntar quién dirige lo que ocurre bajo la superficie consciente.",
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
          html: "¿Quién conduce el barco si reconocer un rostro, conducir o entender un chiste exige cálculos masivos bajo el umbral de la conciencia? Actos simples esconden trabajo invisible. La mayor parte del cerebro opera sin que «tú» lo notes.",
        },
        {
          type: 'paragraph',
          html: "Al leer, los ojos saltan en <span class=\"term\">sacadas</span> (movimientos rápidos de unas <span class=\"num\">20 ms</span>). El cerebro estabiliza la escena mientras tú crees mirar de forma continua. Levantar una taza exige coordinar visión, memoria, corteza motora, cerebelo y ganglios basales en fracciones de segundo. Todo ocurre sin que la conciencia lo note.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Ian Waterman</span> perdió la propiocepción y el tacto por daño nervioso. Debe planificar cada movimiento con atención consciente y vigilar sus extremidades visualmente. Una distracción le hace caer. Su caso revela lo que el inconsciente hace por nosotros al caminar. El campeón infantil <span class=\"person\">Austin Naber</span>, experto en apilar vasos, muestra ondas alfa de reposo mientras un adulto novato quema ondas beta de esfuerzo. La práctica graba la habilidad en el hardware neuronal.",
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
          html: "Habilidades automatizadas (conducir «en piloto automático», escalar en estado de flujo) liberan recursos conscientes. Interferir deliberadamente empeora el rendimiento. El inconsciente también fabrica lenguaje, ideas y narrativas de elección. El <span class=\"term\">priming</span> (influencia previa invisible en juicios) y el egotismo implícito influyen en profesión y pareja sin entrar en la historia que contamos.",
        },
        {
          type: 'paragraph',
          html: "En experimentos del neurocientífico <span class=\"person\">Alvaro Pascual-Leone</span>, la estimulación magnética transcraneal inclina la mano que se mueve. Los participantes reportan haber querido esa mano. La conciencia narra como propia lo que ya decidieron otras redes. Aun así, Eagleman sugiere que la conciencia actúa como CEO ante lo inesperado y ante conflictos internos (helado vs. dieta). La complejidad del cerebro hace impredecible cada acción en la práctica.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">yo consciente</span> es la punta del iceberg: la mayoría de las decisiones y percepciones ya están resueltas cuando «tú» te enteras.",
        },
        {
          type: 'paragraph',
          html: "Si gran parte del trabajo es inconsciente, la elección consciente merece un capítulo aparte.",
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
          html: "¿Como el helado o no? ¿Responder el correo ahora? Miles de microdecisiones al día. Eagleman rechaza el modelo del actor racional. El cerebro es un <span class=\"term\">parlamento neural</span> (redes rivales que compiten por el control en cada elección).",
        },
        {
          type: 'paragraph',
          html: "Durante cirugía despierta, los «pops» de neuronas de Jim marcan elecciones perceptuales. Reflejan cuándo su cerebro elige ver a la joven o a la anciana en una imagen ambigua. Cada decisión perceptual es winner-take-all entre coaliciones. En la heladería, redes de «menta» y «limón» se excitan y suprimen mutuamente hasta que una gana.",
        },
        {
          type: 'paragraph',
          html: "Pacientes con <span class=\"term\">cerebro dividido</span> (mitades cerebrales con vías cortadas) muestran una mano «alienígena» que deshace lo que la otra hace. El test Stroop obliga a suprimir la lectura automática para nombrar colores. En el dilema del tranvía, tirar de la palanca activa redes lógicas. Empujar a alguien activa emociones y cambia la respuesta, aunque la ecuación sea la misma.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Tammy Myers</span>, con daño en la corteza orbitofrontal, puede listar pros y contras pero no decidir. Le faltan señales corporales que resuman «esto importa», y eso la paraliza. El cuerpo dialoga con el cerebro en cada elección. El neurocientífico <span class=\"person\">Read Montague</span> correlaciona respuesta de asco neural con ideología política con ~<span class=\"num\">95 %</span> de precisión en un solo estímulo.",
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
          html: "El cerebro simula futuros y los valora en moneda de recompensa. La dopamina codifica el error de predicción. El sesgo hacia el presente vence las simulaciones futuras en préstamos subprime, drogas o aventuras. El <span class=\"term\">contrato de Ulises</span> (comprometer al yo futuro contra el sesgo del «ahora») es una herramienta contra ese sesgo. Por ejemplo, concertar el gimnasio con un amigo.",
        },
        {
          type: 'paragraph',
          html: "La adicción es batalla entre redes de craving y de supresión. En el laboratorio de Eagleman, adictas como Karen aprenden con neuroimagen en tiempo real a inclinar la aguja. Mendota Juvenile Treatment Center entrena a adolescentes a pausar y simular consecuencias, alineando justicia penal con neurociencia del impulso.",
        },
        {
          type: 'key',
          html: "<span class=\"key-term\">Decidir</span> no es un acto único del yo: es competencia entre sistemas automáticos, emoción corporal, simulación del futuro y un sesgo hacia el presente.",
        },
        {
          type: 'paragraph',
          html: "Las decisiones no ocurren en el vacío: el cerebro humano está cableado para necesitar a otros.",
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
          html: "¿Puede un cerebro funcionar bien aislado del contacto humano? Más allá de nutrientes y oxígeno, necesita otros cerebros. La función neural normal depende de la red social. Somos una especie profundamente social cuyo cableado incluye vastos circuitos para leer intenciones, emociones y pertenencia.",
        },
        {
          type: 'paragraph',
          html: "En la animación de <span class=\"person\">Heider</span> y Simmel, triángulos y círculos se perciben como persecución y romance. Bebés de menos de un año eligen, en un títere, al oso amable sobre el malo sin necesidad de palabras. Nacemos con antenas sociales para confianza y desconfianza.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">John Robison</span>, con Asperger, tras estimulación TMS en corteza prefrontal dorsolateral percibió por primera vez el canal social de expresiones faciales. El <span class=\"term\">espejeo facial</span> (imitación automática que ayuda a leer emociones) facilita esa lectura. El Botox, al paralizar músculos, empeora esa lectura. Ver dolor ajeno activa la <span class=\"term\">matriz del dolor</span> (circuitos compartidos entre dolor propio y observación del ajeno). La empatía es simulación neural.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Sarah Shourd</span> pasó <span class=\"num\">410</span> días en confinamiento solitario. La privación de interacción convirtió su cerebro en fuente de tortura. En experimentos de <span class=\"person\">Naomi Eisenberger</span>, la exclusión en un juego de pelota activa las mismas áreas que el dolor físico. La evolución favoreció el <span class=\"term\">eusocialismo</span> (cooperación extrema en grupo). Cooperar en grupo supera al individuo aislado, pero genera ingroups y outgroups.",
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
          html: "Eagleman midió menor respuesta empática al ver dolor en manos etiquetadas como outgroup religioso. La psicóloga <span class=\"person\">Lasana Harris</span> muestra que ver personas sin hogar desactiva la corteza prefrontal medial. La deshumanización facilita la indiferencia y el horror colectivo. La propaganda explota estos circuitos. La educación en perspectiva ajena, como el ejercicio de <span class=\"person\">Jane Elliott</span>, puede contrarrestarlo.",
        },
        {
          type: 'key',
          html: "No hay <span class=\"key-term\">cerebro aislado</span>: tu identidad es negociación continua entre tu red neural y las de los demás.",
        },
        {
          type: 'paragraph',
          html: "Entender el cerebro social abre la pregunta final: qué pasa cuando la biología deja de ser el límite.",
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
          html: "¿Qué somos cuando el cuerpo deja de ser el techo de lo que podemos percibir y controlar? El cuerpo humano reúne unos <span class=\"num\">40 billones</span> de células. Sus sentidos y límites físicos no son el final. La plasticidad cerebral permite acoplar tecnología y expandir capacidades.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">2007</span>, Cameron Mott se sometió a una <span class=\"term\">hemisferectomía</span> (extirpación de un hemisferio cerebral) y recuperó lenguaje y escuela con medio cerebro. El tejido restante reasignó funciones. Implantes cocleares y retinianos demuestran que el cerebro aprende a interpretar señales artificiales como un idioma nuevo.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">sustitución sensorial</span> (traducir datos por cualquier canal periférico) prueba que no importa el canal: importa el patrón de datos. Por eso, Bach-y-Rita mostró «ver» con cámara traducida a presión en la espalda. El chaleco VEST lleva el mismo principio al oído y al tacto.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jan Scheuermann</span> controla un brazo robótico con electrodos en la corteza motora: «es como andar en bicicleta». Interfaces cerebro-máquina podrían extender el cuerpo a distancia, con fuerza hidráulica o tareas en la Luna mientras comes un sándwich en la Tierra.",
        },
        {
          type: 'paragraph',
          html: "La criogenia en Alcor congela cuerpos o cabezas a <span class=\"num\">−196 °C</span> apostando a una segunda oportunidad futura. Mapear el <span class=\"term\">conectoma</span> (mapa completo de conexiones neuronales) exigiría un zettabyte y aún faltaría la dinámica eléctrica. La hipótesis computacional pregunta si la mente podría correr en silicio. iCub y la habitación china de <span class=\"person\">John Searle</span> muestran lo lejos que está la IA consciente.",
        },
        {
          type: 'paragraph',
          html: "La conciencia podría ser una propiedad emergente de interacciones, como en colonias de hormigas o ciudades. Tononi propone medir integración y diferenciación. Subir la mente a una simulación plantea si sería «tú» o una copia. Eagleman cierra que la especie está al inicio de hackear su hardware. Quiénes seremos depende de las decisiones que tomemos ahora.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">futuro</span> no es solo más tecnología: es redefinir identidad, muerte y capacidad cuando el cerebro deje de ser territorio exclusivamente biológico.",
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
    "text": "Eagleman publica «El cerebro: La historia de ti»."
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
  "Por eso, cada experiencia deja huella en el cableado que define quién eres.",
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
