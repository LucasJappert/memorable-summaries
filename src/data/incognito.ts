import type { BookSummary } from '../types/book'

export const incognito: BookSummary = {
  slug: "incognito",
  meta: {
    title: "Incognito: The Secret Lives of the Brain",
    subtitle: "¿Quién conduce el barco si no eres tú?",
    author: "David Eagleman",
    meta: [
      "📖 2011 · Pantheon Books / Canongate",
      "✍️ Neurocientífico · Initiative on Neuroscience and Law (Baylor)",
    ],
    titleEs: "Incógnito: Las vidas secretas del cerebro",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prólogo"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Hay alguien en mi cabeza, pero no soy yo"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "El testimonio de los sentidos"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Mente: la brecha"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Las clases de pensamientos pensables"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El cerebro es un equipo de rivales"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Por qué la culpabilidad es la pregunta equivocada"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Vida después de la monarquía"
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
      num: "Prólogo",
      title: "El yo no está al volante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El epígrafe del libro cita a <span class=\"person\">Blaise Pascal</span>, quien sostiene que el hombre es incapaz de ver «la nada de la que emerge» y «el infinito en que se pierde». <span class=\"person\">David Eagleman</span> propone una caída paralela a la de Galileo: no solo fuimos expulsados del centro del universo, sino del centro de nosotros mismos.",
        },
        {
          type: 'paragraph',
          html: "Antes del capítulo 1, el autor enumera enigmas que el libro resolverá: ¿cómo puedes enfadarte contigo mismo?, ¿por qué las rocas «suben» tras mirar una cascada?, ¿por qué <span class=\"person\">William Douglas</span> decía que podía jugar al fútbol estando paralizado?, ¿por qué <span class=\"person\">Thomas Edison</span> electrocutó a Topsy?, ¿por qué las stripers ganan más en ciertos días del mes?, ¿qué comparten <span class=\"person\">Ulises</span> y la crisis de las hipotecas subprime?",
        },
        {
          type: 'quote',
          text: "«El hombre es igualmente incapaz de ver la nada de la que emerge y el infinito en que se pierde.»",
          attribution: "Blaise Pascal, Pensées",
        },
        {
          type: 'key',
          html: "La neurociencia moderna confirma la intuición de Pascal: la mayor parte de lo que hacemos y pensamos ocurre <span class=\"key-term\">incógnito</span>, bajo el umbral de la conciencia.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Hay alguien en mi cabeza, pero no soy yo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El cerebro pesa unos <span class=\"num\">1,4 kg</span> y contiene cientos de miles de millones de neuronas. Cada una es tan compleja como una ciudad. Una célula típica hace unas <span class=\"num\">10 000</span> conexiones, y en un solo centímetro cúbico hay tantas sinapsis como estrellas en la Vía Láctea.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1949</span>, <span class=\"person\">Arthur Alberts</span> grabó música en África occidental, y un nativo acusó al magnetófono de «robarle la lengua». Igual que la voz es física aunque parezca etérea, los pensamientos dependen de sustancia cerebral. El sueño profundo los elimina, el alcohol o el café los modulan, y una lesión del tamaño de un ded meñique puede cambiar la música, el color o el riesgo que percibes.",
        },
        {
          type: 'paragraph',
          html: "Un experimento reciente mostró que hombres califican fotos de mujeres. Las pupilas dilatadas (señal de excitación sexual) las eligen como más atractivas, pero ninguno puede explicar por qué. Algo en el cerebro «sabía» lo que la conciencia ignoraba. La conciencia es como un periódico ligero (<em>USA Today</em>): resume lo ya decidido en coaliciones neuronales, y llegas tarde a la información.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Conciencia mínima",
              "description": "El «yo» consciente es la parte más pequeña de la actividad cerebral; la mayoría opera sin permiso de acceso.",
              "icon": "🧠"
            },
            {
              "title": "Tremendous magic",
              "description": "Alberts: capturar voz parecía magia; capturar pensamiento es igual de contraintuitivo.",
              "icon": "🎙️"
            },
            {
              "title": "Analogía Galileo",
              "description": "Como los satélites de Júpiter destrozaron la Tierra en el centro del cosmos, la neurociencia nos saca del centro del yo.",
              "icon": "🌙"
            }
          ],
        },
        {
          type: 'quote',
          text: "«Hay alguien en mi cabeza, pero no soy yo.»",
          attribution: "Pink Floyd (citado por Eagleman)",
        },
        {
          type: 'key',
          html: "El primer hallazgo al estudiar nuestro propio circuito: casi todo lo que hacemos, pensamos y sentimos <em>no</em> está bajo control consciente.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El testimonio de los sentidos: ¿cómo es realmente la experiencia?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Ernst Mach</span> notó que tiras de papel uniformes, juntas, parecen tener gradiente de sombra (<span class=\"term\">bandas de Mach</span>). Llevamos siglos sin ver lo obvio hasta que alguien lo señala. Somos observadores pésimos de nuestra propia experiencia, y la introspección no ayuda.",
        },
        {
          type: 'paragraph',
          html: "Mover el brazo no revela la tormenta neural subyacente. <span class=\"person\">Charles Sherrington</span> concluyó que la experiencia del movimiento es un «producto mental» distinto de los músculos. La visión ocupa cerca de un tercio del cerebro humano, y escenas ambiguas (Torre de Pisa lejana vs. maqueta cercana) se desambiguan con contexto y trucos. Pacientes que recuperan la vista tras décadas de ceguera deben <em>reaprender</em> a ver.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~⅓",
              "label": "Cerebro humano dedicado a visión"
            },
            {
              "value": "~0,4 s",
              "label": "Tiempo de una recta de Nolan Ryan (100,9 mph)"
            },
            {
              "value": "~0,5 s",
              "label": "Retraso de la conciencia respecto al acto"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Ilusiones como la <span class=\"term\">ceguera al cambio</span> muestran que cambios enormes (caja, jeep) pasan desapercibidos si no prestas atención. En un experimento, el experimentador se sustituye por otro tras una puerta y la mayoría sigue dando indicaciones. La periferia tiene resolución pésima, y el cerebro construye un boceto <span class=\"term\">2½-D</span>, no un modelo 3-D completo. <span class=\"person\">Alfred Yarbus</span> (<span class=\"num\">1967</span>) demostró que, según la pregunta sobre un cuadro de Repin, los ojos muestrean distintas zonas (caras, ropa, edades).",
        },
        {
          type: 'paragraph',
          html: "El punto ciego ocupa el diámetro de <span class=\"num\">17 lunas</span>, y el cerebro «rellena» el fondo. <span class=\"person\">Helmholtz</span> llamó <span class=\"term\">inferencia inconsciente</span> a las suposiciones sobre la luz desde arriba. Después de una cascada, las rocas parecen subir (<span class=\"term\">efecto post-movimiento</span>): el movimiento se percibe sin cambio de posición. <span class=\"person\">Mike McBeath</span> demostró que los jardineros de béisbol no calculan posición ni velocidad, sino que mantienen la trayectoria en línea recta desde su punto de vista.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Paul Bach-y-Rita</span> conectó una cámara a vibradores en la espalda, y los ciegos acabaron «viendo». <span class=\"person\">Eric Weihenmayer</span> escala con <span class=\"term\">BrainPort</span> (electrodos en la lengua). El cerebro en la oscuridad del cráneo no importa de dónde vengan los impulsos si correlacionan con el movimiento. El sistema nervioso central genera actividad interna <em>modulada</em> por los sentidos, no construida desde cero, como mostró <span class=\"person\">Thomas Graham Brown</span> con un gato en cinta sin nervios sensoriales.",
        },
        {
          type: 'key',
          html: "Primera lección: no confíes en los sentidos; la percepción es construcción activa, no registro fiel del mundo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Mente: la brecha",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Cambiar de carril en un simulador revela una brecha: casi todos giran a la derecha y enderezan, pero la maniobra real exige girar a la derecha, cruzar el centro y corregir a la izquierda. Sabes hacerlo al volante, pero no puedes describirlo. Es <span class=\"term\">memoria procedimental</span>, un tipo de <span class=\"term\">memoria implícita</span>.",
        },
        {
          type: 'paragraph',
          html: "Los mejores <span class=\"term\">sexadores de pollos</span> japoneses distinguen machos y hembras por vent sexing sin poder articular las señales. El maestro solo dice sí o no. Igual ocurre con los <span class=\"term\">spotters</span> de aviones en la Segunda Guerra Mundial. Pacientes con amnesia anterógrada mejoran en Tetris sin recordar haber jugado.",
        },
        {
          type: 'paragraph',
          html: "Los tests de asociación implícita (IAT) muestran que los tiempos de reacción revelan sesgos raciales, de peso o religiosos que la introspección niega. <span class=\"person\">John Jones</span> (<span class=\"num\">2004</span>) encontró en Georgia y Florida más matrimonios entre personas cuya inicial coincide (<span class=\"term\">egotismo implícito</span>). El <span class=\"term\">priming</span>, el <span class=\"term\">efecto mera exposición</span> y la <span class=\"term\">ilusión de verdad</span> hacen que lo oído antes parezca más creíble. <span class=\"person\">Antoine Bechara</span> mostró que la conductancia cutánea advierte de mazos malos ~<span class=\"num\">13</span> cartas antes de que la conciencia lo sepa (~<span class=\"num\">25</span>).",
        },
        {
          type: 'paragraph',
          html: "La conciencia entrena al «robot»: el tenista consciente al aprender, automático en Wimbledon. «Quemar» tareas en el circuito aporta <span class=\"term\">velocidad</span> y <span class=\"term\">eficiencia energética</span> (Kasparov ~<span class=\"num\">20 W</span> vs. Deep Blue miles de vatios). Tetris: cerebro muy activo al aprender, casi silencioso como experto.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Brecha conocimiento-acceso",
              "description": "Lo que el cerebro sabe ≠ lo que la mente puede verbalizar.",
              "icon": "🚗"
            },
            {
              "title": "Intuición corporal",
              "description": "Damasio: estados físicos guían decisiones antes que el razonamiento explícito.",
              "icon": "🎯"
            },
            {
              "title": "CEO vs. robot",
              "description": "La conciencia fija metas; el resto aprende a cumplirlas sin acceso consciente.",
              "icon": "🎾"
            }
          ],
        },
        {
          type: 'quote',
          text: "«No puedo abarcar todo lo que soy.»",
          attribution: "Agustín de Hipona",
        },
        {
          type: 'key',
          html: "Hay un abismo entre lo que el cerebro ejecuta y lo que la mente puede inspeccionar; la conciencia interfiere si se mete en detalles que no comprende.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Las clases de pensamientos pensables",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Una rana no desea a un humano, y un koala come heces maternales para digerir eucalipto. Nada es inherentemente sabroso: la deliciosidad indexa utilidad evolutiva. Lo mismo aplica a lógica, ética, belleza y amor. Hay pensamientos que <em>puedes</em> pensar y categorías enteras que no.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jakob von Uexküll</span> (<span class=\"num\">1909</span>) argumentó que cada especie habita su <span class=\"term\">Umwelt</span> (mundo percibido) dentro del <span class=\"term\">Umgebung</span> (realidad más amplia). Veemos menos de una diez billonésima del espectro electromagnético. ~<span class=\"num\">15 %</span> de mujeres tienen un cuarto tipo de fotorreceptor y ven colores indistinguibles para el resto.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">sinestesia</span> afecta a ~<span class=\"num\">1 %</span> de la población y fusiona sentidos (días en color, números en espacio). Los bebés no son tabula rasa: prefieren caras, sorprenden ante objetos sólidos que se traspasan y distinguen animado de inanimado. <span class=\"person\">Leda Cosmides</span> y <span class=\"person\">John Tooby</span> mostraron que el problema lógico de cartas falla, pero la versión «menores y alcohol» se resuelve fácil, porque el cerebro está especializado en <span class=\"term\">intercambio social</span>, no en lógica abstracta.",
        },
        {
          type: 'paragraph',
          html: "En belleza, la proporción cintura-cadera ~<span class=\"num\">0,67–0,8</span> atrae, y la dilatación pupilar atrae sin que el hombre lo sepa. El efecto «vislumbre» hace que rostros breves parezcan más bellos. Las strippers ganan ~<span class=\"num\">68 $/h</span> en pico de fertilidad frente a ~<span class=\"num\">35 $/h</span> menstruando, y las anticonceptivas pierden el pico. Las feromonas/MHC hacen que las mujeres prefieran olores de hombres con MHC disímil. La <span class=\"term\">vasopresina</span> y el gen RS3 334 correlacionan con infidelidad en hombres suecos.",
        },
        {
          type: 'list',
          items: [
            "**Instinto vs. automatización** — Instintos vienen en el ADN; automatizar (bicicleta, tenis) ocurre en la vida; ambos quedan fuera del acceso consciente.",
            "**Instinct blindness** — Cosmides/Tooby: no vemos los programas que más nos gobiernan porque funcionan demasiado bien.",
            "**James** — Hacer «extraño lo natural»: preguntar por qué sonreímos, por qué palpita el corazón ante multitudes."
          ],
        },
        {
          type: 'key',
          html: "La evolución talló un <span class=\"key-term\">Umwelt</span> estrecho de pensamientos posibles; lo «obvio» es solo lo que nuestro hardware permite captar.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El cerebro es un equipo de rivales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Mel Gibson</span> (<span class=\"num\">2006</span>) borracho profirió insultos antisemitas, y sobrio ofreció disculpas sinceras. ¿Cuál es el «verdadero» Gibson? Eagleman responde que ambos, porque el cerebro contiene multitudes (<span class=\"person\">Walt Whitman</span>).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Marvin Minsky</span> describió la mente como una sociedad de subagentes especializados sin mente propia. La democracia neuronal compite por un único canal de comportamiento: tarta de chocolate frente a dieta. Los sistemas <span class=\"term\">racional</span> (mundo externo) y <span class=\"term\">emocional</span> (estado interno) chocan. En el dilema del tranvía, cambiar agujas (abstracto) difiere de empujar al hombre (activa emoción), según <span class=\"person\">Joshua Greene</span>.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Kahneman</span> y <span class=\"person\">Tversky</span> mostraron que la gente prefiere $100 ahora frente a $110 en una semana, pero $100 en 52 semanas frente a $110 en 53. El <span class=\"term\">descuento temporal</span> tiene forma de dos procesos (<span class=\"person\">Sam McClure</span>). Las hipotecas subprime explotaron el «lo quiero ya». Los <span class=\"term\">contratos de Ulises</span> atan al mástil: clubes navideños, IRS como «alcancía», depósitos para adelgazar.",
        },
        {
          type: 'paragraph',
          html: "En el cerebro dividido (<span class=\"person\">Roger Sperry</span>, Nobel), los hemisferios pueden aprender por separado. La mano derecha elige «manzana», la izquierda «lápiz». Gazzaniga/LeDoux mostraron que, ante gallina y pala de nieve, el hemisferio izquierdo inventa: «Necesitas pala para limpiar el gallinero». La <span class=\"term\">anosognosia</span> ilustra a <span class=\"person\">William O. Douglas</span>, quien negaba su parálisis. El cerebro fabrica narrativas coherentes (test de Stroop, lápiz entre dientes).",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Team of rivals",
              "description": "Partidos neuronales compiten; Lincoln aplicó lo mismo a su gabinete.",
              "icon": "⚖️"
            },
            {
              "title": "Ulises",
              "description": "El yo presente negocia con el yo futuro antes de pasar las Sirenas.",
              "icon": "⏳"
            },
            {
              "title": "Reinventión",
              "description": "La biología no cierra un subroutine: memoria duplicada (hipocampo + amígdala), múltiples detectores de movimiento.",
              "icon": "🧩"
            }
          ],
        },
        {
          type: 'key',
          html: "No hay un solo «yo» al volante: hay coaliciones en conflicto y un intérprete narrativo que justifica lo ya decidido.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Por qué la culpabilidad es la pregunta equivocada",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"num\">1 de agosto de 1966</span>, <span class=\"person\">Charles Whitman</span>, ex marine, disparó desde la torre de Texas (<span class=\"num\">13</span> muertos, <span class=\"num\">33</span> heridos). La autopsia reveló un glioblastoma que comprimía la amígdala. ¿Cambia eso su culpa?",
        },
        {
          type: 'paragraph',
          html: "El caso «Alex» muestra un tumor orbitofrontal que provocó pedofilia repentina. Al extirparlo, volvió a la normalidad, y al recidivar el tumor, reapareció el comportamiento. La demencia frontotemporal causa desinhibición social masiva. El Parkinson con pramipexol (dopamina) provoca ludopatía compulsiva reversible al bajar la dosis. Genes, plomo y maltrato infantil marcan distintos puntos de partida, y no elegimos ni naturaleza ni crianza.",
        },
        {
          type: 'paragraph',
          html: "El «gen peligroso» que multiplica por <span class=\"num\">8–44</span> la violencia es el cromosoma Y. La metáfora del elefante Tyke (<span class=\"num\">86</span> disparos en Honolulu) pregunta por qué no exigimos culpa del elefante, pero sí del humano si el hardware es homólogo.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> registró un potencial de readiness ~<span class=\"num\">1 s</span> antes del «impulso» consciente de mover el dedo. El veto de Libet no salva el libre albedrío con evidencia. El principio de <span class=\"term\">automatismo suficiente</span> sostiene que, aunque existiera libre albedrío, sería un margen mínimo sobre maquinaria automática.",
        },
        {
          type: 'paragraph',
          html: "Eagleman propone sustituir la <span class=\"term\">culpabilidad</span> por la <span class=\"term\">modificabilidad</span>: sentencia prospectiva (¿reincidirá?) con tablas actuariales para delitos sexuales (mejor que psiquiatras). El <span class=\"term\">prefrontal workout</span> usa neurofeedback para fortalecer control de impulsos frente a lobotomía. No exculpar: <em>explicar ≠ exculpar</em>, y aún hay que apartar peligrosos.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1966",
              "text": "Whitman en la torre de Texas; tumor en amígdala"
            },
            {
              "year": "1987",
              "text": "Kenneth Parks: homicidio sonambúlico; absuelto"
            },
            {
              "year": "2008",
              "text": "Gen RS3 334 de vasopresina y parejas en Suecia"
            },
            {
              "year": "s. XXI",
              "text": "Eagleman: Initiative on Neuroscience and Law"
            }
          ],
        },
        {
          type: 'key',
          html: "La pregunta legal no debe ser «¿cuánto culpable?» sino «¿qué hacemos desde aquí?» — <span class=\"key-term\">modificabilidad</span> y riesgo futuro.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Vida después de la monarquía",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Después de Galileo, Hutton, Darwin, cuántica, ADN y neurociencia, ¿queda algo del hombre? Eagleman responde que cada «destronamiento» abrió realidades más vastas: millones de planetas con vida, selección natural aplicada en laboratorio, transistores y MRI.",
        },
        {
          type: 'paragraph',
          html: "Entender el cerebro mejora la política social: contratos de Ulises para dietas o jubilación, virtud como frenos que dominan motores fuertes, no ausencia de tentación. <span class=\"person\">Montaigne</span> en su torre preguntó «¿Qué sé yo?». Conocerse exige ciencia <em>y</em> introspección, con límites (100 millones de neuronas entéricas inaccesibles).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Phineas Gage</span> (<span class=\"num\">1848</span>) recibió una barra de hierro por el lóbulo frontal y «ya no era Gage». Drogas, serotonina, epilepsia temporal (voces «proféticas») y rabia muestran microcambios con macroconducta. Aun así, el <span class=\"term\">reduccionismo</span> solo no basta: genes más ambiente (Caspi: depresión con alelo corto más eventos adversos, abuso infantil más MAOA).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"term\">Emergencia</span>: propiedades del conjunto (vuelo, contención) no están en piezas sueltas. Analogía radio Kalahari: dañar circuitos silencia voces, pero ondas existían sin conocerlas. Materialismo no implica cinismo: «si el cerebro fuera lo bastante simple para entenderlo, no seríamos lo bastante listos».",
        },
        {
          type: 'key',
          html: "Caer del trono consciente no empobrece: revela un cosmos interior tan prodigioso como el exterior.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Incógnito",
    "description": "Operaciones neuronales sin acceso consciente; el yo es un resumen tardío."
  },
  {
    "title": "Umwelt",
    "description": "Mundo subjetivo que cada especie (o cerebro) puede captar; fracción del Umgebung."
  },
  {
    "title": "Memoria implícita",
    "description": "Saber hacer sin poder declarar cómo (cambiar de carril, Tetris en amnésicos)."
  },
  {
    "title": "Inferencia inconsciente",
    "description": "El cerebro completa datos sensoriales con suposiciones previas (Helmholtz)."
  },
  {
    "title": "Team of rivals",
    "description": "Subpoblaciones neuronales compiten por el control del comportamiento."
  },
  {
    "title": "Contrato de Ulises",
    "description": "El yo presente ata al futuro contra tentaciones (club navideño, depósito)."
  },
  {
    "title": "Automatismo suficiente",
    "description": "El libre albedrío, si existe, es marginal; la política legal puede prescindir de él."
  },
  {
    "title": "Modificabilidad",
    "description": "Criterio prospectivo para castigo/rehabilitación: ¿puede cambiar el cerebro?"
  },
  {
    "title": "Instinct blindness",
    "description": "Invisibilidad de programas evolutivos que funcionan demasiado bien."
  },
  {
    "title": "Emergencia",
    "description": "Mente no reducible a piezas; propiedades nuevas del sistema completo."
  }
],
  chronology: [
  {
    "year": "1225–74",
    "text": "Aquino: acciones sin deliberación → categoría aparte (semilla de lo inconsciente)"
  },
  {
    "year": "1610",
    "text": "Galileo observa lunas de Júpiter; caída del geocentrismo"
  },
  {
    "year": "1646–1716",
    "text": "Leibniz: percepciones «petites», apetencias inconscientes"
  },
  {
    "year": "1765",
    "text": "Publicación póstuma de Leibniz, New Essays"
  },
  {
    "year": "1895",
    "text": "Freud y Breuer: Studies on Hysteria; iceberg mental"
  },
  {
    "year": "1900",
    "text": "Freud: The Interpretation of Dreams"
  },
  {
    "year": "1949",
    "text": "Alberts graba música en África; metáfora «tremendous magic»"
  },
  {
    "year": "1960s",
    "text": "Libet: actividad cerebral antes del impulso consciente"
  },
  {
    "year": "1961",
    "text": "Primera cirugía de cerebro dividido en humanos (epilepsia)"
  },
  {
    "year": "1966",
    "text": "Masacre de la torre de Texas (Whitman)"
  },
  {
    "year": "1981",
    "text": "Gazzaniga/LeDoux: narrador post hoc en split-brain"
  },
  {
    "year": "2004",
    "text": "Jones: egotismo implícito en matrimonios por inicial"
  },
  {
    "year": "2011",
    "text": "Publicación de Incognito (Pantheon/Canongate)"
  }
],
  figures: [
  {
    "name": "David Eagleman",
    "role": "Autor · Percepción y acción · Neurociencia y derecho"
  },
  {
    "name": "Blaise Pascal",
    "role": "Epígrafe: nada e infinito; Umwelt filosófico"
  },
  {
    "name": "Galileo Galilei",
    "role": "Modelo de destronamiento: Tierra pierde el centro"
  },
  {
    "name": "Sigmund Freud",
    "role": "Iceberg psíquico; acceso limitado a lo inconsciente"
  },
  {
    "name": "Hermann von Helmholtz",
    "role": "Inferencia inconsciente en visión"
  },
  {
    "name": "Paul Bach-y-Rita",
    "role": "Sustitución sensorial: «ver» con la espalda o la lengua"
  },
  {
    "name": "Marvin Minsky",
    "role": "Sociedad de mentes · subagentes"
  },
  {
    "name": "Antonio Damasio",
    "role": "Marcador somático · decisiones y emoción"
  },
  {
    "name": "Benjamin Libet",
    "role": "Potencial de readiness vs. conciencia"
  },
  {
    "name": "Charles Whitman",
    "role": "Torre de Texas · tumor y culpabilidad"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La conciencia es un monarca que hereda un reino que no construyó.",
  "Neuronas, genes y rivales internos deciden antes de que llegue el titular.",
  "Confiar solo en introspección es chocar como un piloto que ignora sus instrumentos.",
  "Pero destronar al yo abre un cosmos interior tan vasto como el cielo de Galileo.",
  "La pregunta útil no es «¿soy libre?» sino qué hacemos con el cerebro en política, derecho y virtud."
],
    highlight: "No conduces el barco: eres pasajero de una maquinaria que aún apenas empezamos a cartografiar",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David Eagleman",
    line2: "\"Incognito: The Secret Lives of the Brain\" · Pantheon Books · 2011",
  },
}
