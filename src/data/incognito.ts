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
    "label": "El yo no está al volante"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Hay alguien en mi cabeza, pero no soy yo"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "El testimonio de los sentidos: ¿cómo es realmente la experiencia?"
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
      num: "Prólogo",
      title: "El yo no está al volante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué tienen en común enfadarse contigo mismo, las rocas que «suben» tras una cascada y las hipotecas subprime? El filósofo <span class=\"person\">Blaise Pascal</span> abrió el libro con una intuición inquietante. El hombre, escribió, es incapaz de ver «la nada de la que emerge» y «el infinito en que se pierde».",
        },
        {
          type: 'paragraph',
          html: "El neurocientífico <span class=\"person\">David Eagleman</span> propone una caída paralela a la de Galileo. No solo fuimos expulsados del centro del universo. También lo fuimos del centro de nosotros mismos. Antes del capítulo 1 enumera enigmas que el libro resolverá. ¿Por qué un juez paralizado decía que podía jugar al fútbol? ¿Por qué Edison electrocutó a Topsy? ¿Qué comparten Ulises y la crisis hipotecaria?",
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
        {
          type: 'paragraph',
          html: "Para entender ese abismo invisible, Eagleman empieza midiendo cuán pequeña es la capa consciente sobre la maquinaria cerebral.",
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
          html: "¿Quién conduce el barco si casi todo ocurre sin que lo notes? El cerebro pesa unos <span class=\"num\">1,4 kg</span> y contiene cientos de miles de millones de neuronas. Cada una es tan compleja como una ciudad. Una célula típica hace unas <span class=\"num\">10 000</span> conexiones.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1949</span>, <span class=\"person\">Arthur Alberts</span> grabó música en África occidental. Por eso, un habitante local acusó al magnetófono de «robarle la lengua». Igual que la voz es física aunque parezca etérea, los pensamientos dependen de sustancia cerebral. El sueño profundo los elimina. El alcohol o el café los modulan. Una lesión del tamaño de un meñique puede cambiar la música, el color o el riesgo que percibes.",
        },
        {
          type: 'paragraph',
          html: "Un experimento reciente mostró que hombres califican fotos de mujeres. Las pupilas dilatadas (señal de excitación sexual) las eligen como más atractivas. Ninguno puede explicar por qué. Algo en el cerebro «sabía» lo que la conciencia ignoraba. La conciencia es como un periódico ligero (<em>USA Today</em>): resume lo ya decidido en coaliciones neuronales, y llegas tarde a la información.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Galileo</span> observó en <span class=\"num\">1610</span> las lunas de Júpiter y destrozó el geocentrismo. Eagleman argumenta que la neurociencia repite ese gesto con el yo: no estamos al volante. Desde Tomás de Aquino hasta Freud, la idea del inconsciente fue madurando. Freud la popularizó con la metáfora del iceberg: la mayor parte queda bajo la superficie.",
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
              "title": "Magia tremenda",
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
        {
          type: 'paragraph',
          html: "Si el yo consciente llega tarde, tampoco podemos confiar en lo que los sentidos nos muestran.",
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
          html: "¿Por qué las rocas parecen subir tras mirar una cascada? El físico <span class=\"person\">Ernst Mach</span> notó que tiras de papel uniformes, juntas, parecen tener gradiente de sombra. Eso se llama <span class=\"term\">bandas de Mach</span> (un patrón de sombra que el ojo inventa donde no hay). Llevamos siglos sin ver lo obvio hasta que alguien lo señala.",
        },
        {
          type: 'paragraph',
          html: "Mover el brazo no revela la tormenta neural subyacente. <span class=\"person\">Charles Sherrington</span> concluyó que la experiencia del movimiento es un «producto mental» distinto de los músculos. La visión ocupa cerca de un tercio del cerebro humano. Escenas ambiguas (Torre de Pisa lejana vs. maqueta cercana) se desambiguan con contexto y trucos. Pacientes que recuperan la vista tras décadas de ceguera deben <em>reaprender</em> a ver.",
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
          html: "Ilusiones como la <span class=\"term\">ceguera al cambio</span> (no ver cambios grandes si no prestas atención) muestran que la percepción es construcción, no registro. En un experimento, el experimentador se sustituye por otro tras una puerta. La mayoría sigue dando indicaciones. El cerebro construye un boceto bidimensional y medio, no un modelo tridimensional completo. <span class=\"person\">Alfred Yarbus</span> (<span class=\"num\">1967</span>) demostró que, según la pregunta sobre un cuadro de Repin, los ojos muestrean distintas zonas.",
        },
        {
          type: 'paragraph',
          html: "El punto ciego ocupa el diámetro de <span class=\"num\">17 lunas</span>, y el cerebro «rellena» el fondo. <span class=\"person\">Hermann von Helmholtz</span> llamó <span class=\"term\">inferencia inconsciente</span> (completar datos sensoriales con suposiciones previas) a las suposiciones sobre la luz desde arriba. Después de mirar una cascada, las rocas parecen subir porque el cerebro sigue percibiendo movimiento sin cambio de posición. <span class=\"person\">Mike McBeath</span> demostró que los jardineros de béisbol no calculan posición ni velocidad. Mantienen la trayectoria en línea recta desde su punto de vista.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Paul Bach-y-Rita</span> conectó una cámara a vibradores en la espalda, y los ciegos acabaron «viendo». <span class=\"person\">Eric Weihenmayer</span> escala con BrainPort (electrodos en la lengua). El cerebro en la oscuridad del cráneo no importa de dónde vengan los impulsos si correlacionan con el movimiento. El sistema nervioso central genera actividad interna <em>modulada</em> por los sentidos, no construida desde cero. <span class=\"person\">Thomas Graham Brown</span> lo mostró con un gato en cinta sin nervios sensoriales.",
        },
        {
          type: 'key',
          html: "La percepción es construcción activa del cerebro, no un registro fiel del mundo exterior.",
        },
        {
          type: 'paragraph',
          html: "Si los sentidos construyen la experiencia, la introspección tampoco accede a lo que el cerebro sabe hacer.",
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
          html: "¿Por qué sabes cambiar de carril al volante pero no puedes explicarlo? Cambiar de carril en un simulador revela una brecha. Casi todos giran a la derecha y enderezan. La maniobra real exige girar a la derecha, cruzar el centro y corregir a la izquierda. Es <span class=\"term\">memoria implícita</span> (saber hacer sin poder declarar cómo), un tipo de memoria procedimental.",
        },
        {
          type: 'paragraph',
          html: "Los mejores sexadores de pollos japoneses distinguen machos y hembras sin poder articular las señales. El maestro solo dice sí o no. Igual ocurre con los observadores de aviones en la Segunda Guerra Mundial. Pacientes con amnesia anterógrada mejoran en Tetris sin recordar haber jugado.",
        },
        {
          type: 'paragraph',
          html: "Los tests de asociación implícita (IAT) muestran sesgos raciales, de peso o religiosos que la introspección niega. <span class=\"person\">John Jones</span> (<span class=\"num\">2004</span>) encontró en Georgia y Florida más matrimonios entre personas cuya inicial coincide. Eso se llama <span class=\"term\">egotismo implícito</span> (preferir lo que se parece a uno sin saberlo). El <span class=\"term\">priming</span> (activar ideas de forma inconsciente con estímulos previos) hace que lo oído antes parezca más creíble.",
        },
        {
          type: 'paragraph',
          html: "Antoine Bechara mostró que la conductancia cutánea advierte de mazos malos ~<span class=\"num\">13</span> cartas antes de que la conciencia lo sepa (~<span class=\"num\">25</span>). La conciencia entrena al «robot»: el tenista consciente al aprender, automático en Wimbledon. «Quemar» tareas en el circuito aporta velocidad y eficiencia energética (Kasparov ~<span class=\"num\">20 W</span> vs. Deep Blue miles de vatios). Tetris: cerebro muy activo al aprender, casi silencioso como experto.",
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
              "title": "Directivo vs. robot",
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
          html: "Hay un abismo entre lo que el cerebro ejecuta y lo que la mente puede inspeccionar. La conciencia interfiere si se mete en detalles que no comprende.",
        },
        {
          type: 'paragraph',
          html: "Ese inconsciente no es ruido: la evolución limitó qué pensamientos son posibles para cada especie.",
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
          html: "¿Por qué una rana no desea a un humano, y un koala come heces maternales para digerir eucalipto? Nada es inherentemente sabroso: la deliciosidad indexa utilidad evolutiva. Lo mismo aplica a lógica, ética, belleza y amor. Hay pensamientos que <em>puedes</em> pensar y categorías enteras que no.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1909</span>, el biólogo Jakob von Uexküll argumentó que cada especie habita su <span class=\"term\">Umwelt</span> (el mundo que puede percibir) dentro de una realidad más amplia. Veemos menos de una diez billonésima del espectro electromagnético. ~<span class=\"num\">15 %</span> de mujeres tienen un cuarto tipo de fotorreceptor y ven colores indistinguibles para el resto.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">sinestesia</span> (fusionar sentidos, como días en color o números en espacio) afecta a ~<span class=\"num\">1 %</span> de la población. Los bebés no son tabula rasa: prefieren caras, sorprenden ante objetos sólidos que se traspasan y distinguen animado de inanimado. <span class=\"person\">Leda Cosmides</span> y <span class=\"person\">John Tooby</span> mostraron que el problema lógico de cartas falla. La versión «menores y alcohol» se resuelve fácil, porque el cerebro está especializado en <span class=\"term\">intercambio social</span> (negociar favores y engaños), no en lógica abstracta.",
        },
        {
          type: 'paragraph',
          html: "En belleza, la proporción cintura-cadera ~<span class=\"num\">0,67–0,8</span> atrae. La dilatación pupilar atrae sin que el hombre lo sepa. El efecto «vislumbre» hace que rostros breves parezcan más bellos. Las strippers ganan ~<span class=\"num\">68 $/h</span> en pico de fertilidad frente a ~<span class=\"num\">35 $/h</span> menstruando. Las anticonceptivas pierden el pico. Las feromonas/MHC hacen que las mujeres prefieran olores de hombres con MHC disímil. La vasopresina y el gen RS3 334 correlacionan con infidelidad en hombres suecos.",
        },
        {
          type: 'list',
          items: [
            "**Instinto vs. automatización** — Instintos vienen en el ADN; automatizar (bicicleta, tenis) ocurre en la vida; ambos quedan fuera del acceso consciente.",
            "**Ceguera instintiva** — Cosmides/Tooby: no vemos los programas que más nos gobiernan porque funcionan demasiado bien.",
            "**James** — Hacer «extraño lo natural»: preguntar por qué sonreímos, por qué palpita el corazón ante multitudes."
          ],
        },
        {
          type: 'key',
          html: "La evolución talló un <span class=\"key-term\">Umwelt</span> estrecho de pensamientos posibles. Lo «obvio» es solo lo que nuestro hardware permite captar.",
        },
        {
          type: 'paragraph',
          html: "Esos programas evolutivos no actúan solos: compiten entre sí dentro del mismo cráneo.",
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
          html: "¿Cuál es el «verdadero» Mel Gibson? En <span class=\"num\">2006</span>, borracho profirió insultos antisemitas, y sobrio ofreció disculpas sinceras. Eagleman responde que ambos, porque el cerebro contiene multitudes (<span class=\"person\">Walt Whitman</span>).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Marvin Minsky</span> describió la mente como una sociedad de subagentes especializados sin mente propia. La democracia neuronal compite por un único canal de comportamiento: tarta de chocolate frente a dieta. Los sistemas racional (mundo externo) y emocional (estado interno) chocan. En el dilema del tranvía, cambiar agujas (abstracto) difiere de empujar al hombre (activa emoción), según <span class=\"person\">Joshua Greene</span>.",
        },
        {
          type: 'paragraph',
          html: "Daniel Kahneman y Amos Tversky mostraron que la gente prefiere $100 ahora frente a $110 en una semana. La misma gente prefiere $100 en 52 semanas frente a $110 en 53. El <span class=\"term\">descuento temporal</span> (valorar menos una recompensa futura) tiene forma de dos procesos, según <span class=\"person\">Sam McClure</span>. Las hipotecas subprime explotaron el «lo quiero ya». Los contratos de Ulises atan al mástil: clubes navideños, IRS como «alcancía», depósitos para adelgazar.",
        },
        {
          type: 'paragraph',
          html: "En el cerebro dividido (<span class=\"person\">Roger Sperry</span>, Nobel), los hemisferios pueden aprender por separado. La mano derecha elige «manzana», la izquierda «lápiz». Gazzaniga/LeDoux mostraron que, ante gallina y pala de nieve, el hemisferio izquierdo inventa: «Necesitas pala para limpiar el gallinero». La <span class=\"term\">anosognosia</span> (negar una discapacidad propia) ilustra a <span class=\"person\">William O. Douglas</span>, quien negaba su parálisis. El cerebro fabrica narrativas coherentes (test de Stroop, lápiz entre dientes).",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Equipo de rivales",
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
        {
          type: 'paragraph',
          html: "Si somos multitudes sin libre albedrío unitario, la culpa retrospectiva pierde sentido jurídico.",
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
          html: "¿Cambia la culpa si un tumor comprime la amígdala? El <span class=\"num\">1 de agosto de 1966</span>, <span class=\"person\">Charles Whitman</span>, ex marine, disparó desde la torre de Texas. Mató a <span class=\"num\">13</span> personas e hirió a <span class=\"num\">33</span>. La autopsia reveló un glioblastoma que comprimía la amígdala. ¿Cambia eso su culpa?",
        },
        {
          type: 'paragraph',
          html: "El caso «Alex» muestra un tumor orbitofrontal que provocó pedofilia repentina. Al extirparlo, volvió a la normalidad, y al recidivar el tumor, reapareció el comportamiento. La demencia frontotemporal causa desinhibición social masiva. El Parkinson con pramipexol (dopamina) provoca ludopatía compulsiva reversible al bajar la dosis. Genes, plomo y maltrato infantil marcan distintos puntos de partida, y no elegimos ni naturaleza ni crianza.",
        },
        {
          type: 'paragraph',
          html: "El «gen peligroso» que multiplica por <span class=\"num\">8–44</span> la violencia es el cromosoma Y. La metáfora del elefante Tyke (<span class=\"num\">86</span> disparos en Honolulu) pregunta por qué no exigimos culpa del elefante. Pero sí del humano si el hardware es homólogo.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> registró un potencial de readiness ~<span class=\"num\">1 s</span> antes del «impulso» consciente de mover el dedo. El veto de Libet no salva el libre albedrío con evidencia. El <span class=\"term\">automatismo suficiente</span> (margen mínimo de libre albedrío sobre maquinaria automática) sostiene que la política legal puede prescindir de él, aunque existiera libre albedrío.",
        },
        {
          type: 'paragraph',
          html: "Eagleman propone sustituir la culpabilidad (castigo por merecer) por la <span class=\"term\">modificabilidad</span> (¿puede cambiar el cerebro y reincidir?). Sentencia prospectiva con tablas actuariales para delitos sexuales (mejor que psiquiatras). El entrenamiento prefrontal usa <span class=\"term\">neurofeedback</span> (retroalimentación cerebral en tiempo real) para fortalecer el control de impulsos frente a la lobotomía. En todo caso, <em>explicar ≠ exculpar</em>: aún hay que apartar a los peligrosos.",
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
        {
          type: 'paragraph',
          html: "Tras repensar la ley, Eagleman cierra con el tono filosófico del destronamiento consciente.",
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
          html: "¿Queda algo del hombre tras tantos destronamientos? Galileo nos sacó del centro del cosmos. Hutton, Darwin, la cuántica, el ADN y la neurociencia repitieron el gesto. Eagleman responde que cada «destronamiento» abrió realidades más vastas. Millones de planetas con vida, selección natural en laboratorio, transistores y MRI.",
        },
        {
          type: 'paragraph',
          html: "Entender el cerebro mejora la política social: contratos de Ulises para dietas o jubilación, virtud como frenos que dominan motores fuertes, no ausencia de tentación. <span class=\"person\">Montaigne</span> en su torre preguntó «¿Qué sé yo?». Conocerse exige ciencia <em>y</em> introspección, con límites (100 millones de neuronas entéricas inaccesibles).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Phineas Gage</span> (<span class=\"num\">1848</span>) recibió una barra de hierro por el lóbulo frontal y «ya no era Gage». Drogas, serotonina, epilepsia temporal (voces «proféticas») y rabia muestran microcambios con macroconducta. Aun así, el <span class=\"term\">reduccionismo</span> (explicar solo por piezas sueltas) no basta solo. Genes y ambiente interactúan. Caspi vinculó depresión con alelo corto más eventos adversos, y abuso infantil más MAOA.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">emergencia</span> (propiedades del conjunto, como vuelo o contención, que no están en piezas sueltas) completa el cuadro. La analogía de la radio en el Kalahari ilustra esto: dañar circuitos silencia voces, pero las ondas existían sin conocerlas. Materialismo no implica cinismo: «si el cerebro fuera lo bastante simple para entenderlo, no seríamos lo bastante listos».",
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
    "title": "Equipo de rivales",
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
    "title": "Ceguera instintiva",
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
    "text": "Publicación póstuma de Leibniz, <em>Nuevos ensayos</em>"
  },
  {
    "year": "1895",
    "text": "Freud y Breuer: <em>Estudios sobre la histeria</em>; metáfora del iceberg mental"
  },
  {
    "year": "1900",
    "text": "Freud: <em>La interpretación de los sueños</em>"
  },
  {
    "year": "1949",
    "text": "Alberts graba música en África; metáfora de la «magia tremenda»"
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
    "text": "Gazzaniga/LeDoux: narrador <em>post hoc</em> en cerebro dividido"
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
