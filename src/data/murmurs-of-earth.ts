import type { BookSummary } from '../types/book'

export const murmursOfEarth: BookSummary = {
  slug: "murmurs-of-earth",
  meta: {
    title: "Murmurs of Earth",
    subtitle: "El mensaje de la humanidad a las estrellas en el Disco de las Voyager",
    author: "Carl Sagan",
    meta: [
      "📖 1978 · Random House / Ballantine Books",
      "✍️ Coautores: F. D. Drake, Ann Druyan, Timothy Ferris, Jon Lomberg, Linda Salzman Sagan",
    ],
    titleEs: "Murmullo de la Tierra",
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
    "label": "Prefacio"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Para tiempos y seres futuros"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Los cimientos del Disco Voyager"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Imágenes de la Tierra"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Saludos de una Voyager"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Los sonidos de la Tierra"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "La música de Voyager"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "La misión Voyager al sistema solar exterior"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Epílogo"
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
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Emisarios hacia las estrellas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"num\">20 de agosto</span> y el <span class=\"num\">5 de septiembre de 1977</span> se lanzaron dos naves <span class=\"term\">Voyager</span> hacia las estrellas. Las naves explorarán el sistema solar exterior de Júpiter a Urano y luego abandonarán el sistema solar como emisarios de la Tierra. A cada una se fijó un disco fonográfico de cobre recubierto de oro como mensaje a posibles civilizaciones extraterrestres.",
        },
        {
          type: 'paragraph',
          html: "El registro contiene <span class=\"num\">118</span> fotografías de nuestro planeta, nosotros mismos y nuestra civilización. Incluye casi <span class=\"num\">90</span> minutos de la música más selecta del mundo y un ensayo sonoro evolutivo llamado «The Sounds of Earth». También lleva saludos en casi sesenta idiomas humanos (y uno de ballena), con mensajes del presidente de EE. UU. y del secretario general de la ONU.",
        },
        {
          type: 'paragraph',
          html: "Este libro, escrito por quienes diseñaron el contenido del Disco, explica por qué lo hicieron, cómo seleccionaron el repertorio y qué contiene exactamente.",
        },
        {
          type: 'key',
          html: "Voyager lleva un mensaje físico a posibles civilizaciones lejanas —y, sobre todo, un espejo para la humanidad que lo envía.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Para tiempos y seres futuros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Carl Sagan</span> abre con la tradición de las <span class=\"term\">cápsulas del tiempo</span>: desde las inscripciones de <span class=\"person\">Esarhaddon</span> en el siglo VII a.C. hasta la Cápsula del Tiempo de la Feria Mundial de Nueva York de <span class=\"num\">1939</span>. Comunicar con el futuro expresa esperanza, enlaza a la especie a través del tiempo y da perspectiva sobre el significado de nuestras acciones.",
        },
        {
          type: 'paragraph',
          html: "La era espacial amplía el horizonte a intervalos incomparablemente mayores. Somos jóvenes en un planeta mil veces más viejo, y nuestra civilización técnica dura una diezmilésima parte de la humanidad. Las civilizaciones alienígenas serían radicalmente distintas, pero la física y la química son universales. La primera comunicación exitosa, si ocurre, será científica. Las naves viajan muy lento (~<span class=\"num\">10 km/s</span>). La radio viaja a la velocidad de la luz, pero recibir monólogos de civilizaciones avanzadas es más plausible que un diálogo interestelar.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"term\">Pioneer 10</span> y <span class=\"term\">11</span> fueron las primeras sondas interestelares, con placas de oro-anodizado. El satélite <span class=\"term\">LAGEOS</span>, con vida útil de <span class=\"num\">8 millones</span> de años, lleva una placa sobre deriva continental. En diciembre de <span class=\"num\">1976</span>, el director del proyecto Voyager, <span class=\"person\">John Casani</span>, pidió a Sagan organizar un mensaje para las dos naves.",
        },
        {
          type: 'paragraph',
          html: "Un grupo de consultores científicos debatió el contenido. <span class=\"person\">B. M. Oliver</span> señaló que casi ningún extraterrestre verá el mensaje, pero billones de terrícolas sí: su función real es expandir el espíritu humano. En enero de <span class=\"num\">1977</span>, en Honolulu, <span class=\"person\">Frank Drake</span> sugirió un disco fonográfico de larga duración: la información grabada en los surcos puede durar eones e incluir imágenes codificadas en audio y música. El disco gira a <span class=\"num\">16⅔</span> rpm para albergar ~<span class=\"num\">90</span> minutos de música.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Disco LP",
              "description": "Información duradera en surcos físicos; imágenes y música en un solo artefacto.",
              "icon": "📻"
            },
            {
              "title": "Música como emoción",
              "description": "Lo que la ciencia no transmite: sentimientos humanos codificados en armonía.",
              "icon": "🎵"
            },
            {
              "title": "Audiencia terrestre",
              "description": "Oliver: billones de terrícolas verán el mensaje; casi ningún extraterrestre.",
              "icon": "🌍"
            }
          ],
        },
        {
          type: 'key',
          html: "El Disco Voyager es cápsula del tiempo cósmica: ciencia, arte, sonido y saludo reunidos en un artefacto que puede durar mil millones de años.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Los cimientos del Disco Voyager",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Frank Drake</span>, pionero del <span class=\"term\">SETI</span>, relata cómo la búsqueda de inteligencia extraterrestre y las técnicas de mensajería interestelar convergen en el Disco Voyager. La convicción de que hay vida más allá de la Tierra impulsa codificar información comprensible sin contacto previo.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1959</span>, <span class=\"person\">Philip Morrison</span> y <span class=\"person\">Giuseppe Coconni</span> propusieron buscar señales de radio interestelares. Drake inició <span class=\"term\">Proyecto OZMA</span> en <span class=\"num\">1960</span>. En la conferencia de Green Bank (<span class=\"num\">1961</span>) nació el «Orden del Delfín» y las ecuaciones básicas del SETI. Pronto Drake ideó enviar imágenes como secuencias de puntos blancos y negros: un lenguaje más simple que transmitir π o números primos.",
        },
        {
          type: 'paragraph',
          html: "La placa de <span class=\"term\">Pioneer 10/11</span> (<span class=\"num\">1972</span>) incluyó un mapa de púlsares para datar el mensaje y figuras humanas dibujadas por <span class=\"person\">Linda Salzman Sagan</span>. La reacción pública enseñó humildad, con censura de desnudos y críticas de representatividad. En noviembre de <span class=\"num\">1974</span>, en la rededicación del radiotelescopio de <span class=\"term\">Arecibo</span>, se transmitió el primer mensaje humano deliberado al espacio. Era un bitmap de <span class=\"num\">1679</span> caracteres (<span class=\"num\">73×23</span>) con números, ADN, figura humana, sistema solar y el propio telescopio, dirigido al cúmulo <span class=\"term\">Messier 13</span> a <span class=\"num\">25.000</span> años-luz.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Carl Sagan</span> actuó como extraterrestre de prueba en un almuerzo y decodificó el mensaje. No fue un intento serio de contacto, sino demostración de capacidad técnica. La portada del Disco Voyager repite esta lógica: instrucciones científicas para reproducir el registro, heredera de Pioneer y Arecibo.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1959",
              "text": "Morrison/Coconni proponen SETI por radio en Nature."
            },
            {
              "year": "1960",
              "text": "Drake lanza Proyecto OZMA en Green Bank."
            },
            {
              "year": "1972",
              "text": "Pioneer 10/11 llevan placas interestelares al espacio."
            },
            {
              "year": "1974",
              "text": "Mensaje de Arecibo: 1679 bits hacia Messier 13."
            }
          ],
        },
        {
          type: 'key',
          html: "Antes del Disco físico, Arecibo demostró que podemos hablar al cosmos en el lenguaje de la matemática y la física.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Imágenes de la Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Jon Lomberg</span>, artista y diseñador, describe cómo seleccionar y codificar <span class=\"num\">118</span> imágenes en el ancho de banda del disco. El reto era pensar como un extraterrestre sin saber nada de nosotros, con apenas seis semanas de plazo.",
        },
        {
          type: 'paragraph',
          html: "El equipo adoptó el ejercicio mental de «ser el extraterrestre». Seis imágenes originales crecieron a más de cien cuando <span class=\"person\">Frank Drake</span> y <span class=\"person\">Valentin Boriakoff</span> redujeron el tiempo de grabación a <span class=\"num\">8</span> segundos por imagen. <span class=\"person\">Colorado Video</span> convirtió las fotos en señal de audio sin costo. Se evitó deliberadamente guerra, enfermedad, pobreza, declaraciones políticas y religión explícita: el mensaje debía sobrevivirnos como lo mejor de la humanidad, no lo peor.",
        },
        {
          type: 'paragraph',
          html: "La secuencia abre con matemáticas básicas (diccionario numérico). Sigue con química atmosférica, estructura del <span class=\"term\">ADN</span> y replicación celular. Luego muestra anatomía humana (láminas del World Book), reproducción humana, paisajes, arquitectura y actividades cotidianas. La NASA rechazó una fotografía de dos desnudos. Se conservó la silueta para no romper la secuencia reproductiva.",
        },
        {
          type: 'list',
          items: [
            "**Apertura matemática** — Números, operaciones y unidades como diccionario para imágenes posteriores.",
            "**Biología** — ADN, división celular, anatomía y secuencia de reproducción humana.",
            "**Civilización** — Ciudades, transporte, comida, familia, ciencia y el propio Voyager."
          ],
        },
        {
          type: 'paragraph',
          html: "Cada imagen fue debatida con dos preguntas: si representa diversidad y si evita chauvinismo occidental. Los autores escribieron «cytosine» con S en el diagrama del ADN para evitar ambigüedad química. Los números del atlas anatómico quedaron en las láminas por falta de tiempo para pintarlos.",
        },
        {
          type: 'key',
          html: "Las imágenes no son postal turística: son lección autocontenida sobre quiénes somos, diseñada para mentes sin contexto terrestre.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Saludos de una Voyager",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Linda Salzman Sagan</span> coordinó los saludos hablados como celebración del espíritu humano gregario. Somos <span class=\"term\">Robinson Crusoe</span> en la isla Tierra, gritando al horizonte: «¿Hay alguien en casa?» El tono busca ser más festivo que un simple hola y menos sombrío que un suspiro.",
        },
        {
          type: 'paragraph',
          html: "Se grabaron más de <span class=\"num\">55</span> saludos breves en idiomas distintos, sin guion fijo: cada hablante elegía sus palabras. Se priorizaron los <span class=\"num\">25</span> idiomas más hablados del mundo (<span class=\"person\">Steven Soter</span> aportó la lista) y luego tantos más como el tiempo permitió. Incluso sumerio, acadio, hitita y latín entraron por valor histórico. El mandarín suena casual, como una postal: «Esperamos que todos estén bien. Vengan a visitarnos cuando tengan tiempo».",
        },
        {
          type: 'paragraph',
          html: "El equipo sabía que ningún lingüista alienígena podría descifrar la mayoría de los idiomas. Aun así prefirió un coro planetario a uno o dos idiomas con diccionario, que habría levantado la pregunta de cuáles elegir. Los saludos son un <span class=\"term\">Gestalt</span> auditivo: cada cultura es una voz en el coro. Las sesiones en Cornell (<span class=\"num\">8</span> y <span class=\"num\">13</span> de junio de <span class=\"num\">1977</span>) generaron camaradería entre participantes de todo el mundo.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Bishun Khare</span> reclutó casi solo a los hablantes indios. El suajili quedó fuera por cancelaciones de último minuto, una omisión lamentable. También se incluyeron mensajes del presidente Carter, del secretario general Kurt Waldheim y cantos de ballena jorobada de <span class=\"person\">Roger Payne</span>.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "55+",
              "label": "Idiomas humanos en el Disco"
            },
            {
              "value": "1",
              "label": "«Idioma» de ballena jorobada"
            },
            {
              "value": "2",
              "label": "Sesiones de grabación en Cornell (jun 1977)"
            }
          ],
        },
        {
          type: 'key',
          html: "Decir «hola» al cosmos exigió un coro multilingüe: diversidad humana como gesto, no como manual de descifrado.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Los sonidos de la Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Ann Druyan</span> produjo «The Sounds of Earth», un ensayo sonoro de <span class=\"num\">12</span> minutos concebido para dos audiencias: humanos que reconocen y extraterrestres que intuyen. Recuerda las palabras de Shakespeare en <em>The Tempest</em>: la isla está llena de ruidos, sonidos y aires dulces.",
        },
        {
          type: 'paragraph',
          html: "La selección comenzó con una lluvia de onomatopeyas en la mesa de los Sagan. Luego el equipo recorrió bibliotecas de sonido, universidades y grabaciones de campo. <span class=\"person\">Roger Payne</span> aportó el saludo de ballena grabado en Bermuda en <span class=\"num\">1970</span>. <span class=\"person\">Alan Botto</span> proporcionó el despegue del Saturno V con la voz «Fly, bird» en Mission Control. Algunos colaboradores rechazaron participar por desconfianza hacia el gobierno. Otros exigieron dinero que el proyecto no tenía.",
        },
        {
          type: 'paragraph',
          html: "En la Biblioteca del Congreso, Druyan y <span class=\"person\">Timothy Ferris</span> oyeron una grabación de campo de la Primera Guerra Mundial y debatieron si incluir violencia. <span class=\"person\">Murry Sidlin</span> insistió en enviar «lo mejor de nosotros», pero esa noche no hubo conclusión. El montaje sigue una estructura evolutiva amplia, de lo geológico a lo biológico y luego a lo tecnológico. La escala temporal real dejaría casi todo el disco en olas y viento.",
        },
        {
          type: 'list',
          items: [
            "**Música de las Esferas** — Tonos de Kepler (Spiegel/Bell Labs) abren el ensayo.",
            "**Vida y humanidad** — De volcanes y grillos a herramientas de piedra, fuego y habla !Kung.",
            "**Tecnología** — Morse «Ad astra per aspera», trenes, cohete, beso, latidos de bebé, EEG de Druyan, pulsar CP1133 cierra."
          ],
        },
        {
          type: 'key',
          html: "Los sonidos narran la historia de un planeta: de la física elemental al rugido de un despegue espacial.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "La música de Voyager",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Timothy Ferris</span> documenta la selección musical del disco, unos <span class=\"num\">87,5</span> minutos enviados a las estrellas. Los criterios fueron amplitud cultural y pasión genuina. El musicólogo <span class=\"person\">Robert Brown</span> lo resumió así: «Si no enviamos lo que nos importa profundamente, ¿para qué enviar nada?»",
        },
        {
          type: 'paragraph',
          html: "El corte a <span class=\"num\">16⅔</span> rpm triplicó el tiempo disponible, pero todo debía elegirse en menos de dos meses. La mitad del disco es música no occidental gracias a <span class=\"person\">Alan Lomax</span>, Brown y otros asesores. Debates maratonianos enfrentaron jazz, rock, ópera y música folklórica. Se descartó «Here Comes the Sun» de los Beatles por problemas de copyright. Horas antes del corte del disco maestro, Carol Kulig localizó el coro georgiano «Tchakrulo», que reemplazó una pieza soviética más derivativa.",
        },
        {
          type: 'paragraph',
          html: "La secuencia abre con el <span class=\"term\">Brandenburg Concerto No. 2</span> de Bach y cierra con la <span class=\"term\">Cavatina</span> de Beethoven. Los dos primeros compases del disco son precisamente esa Cavatina. El repertorio incluye gamelán javanés, canto de iniciación pigmea, raga indio, ch'in chino «Flowing Streams», Louis Armstrong, Chuck Berry («Johnny B. Goode»), Stravinsky, Mozart y «Dark Was the Night» de Blind Willie Johnson. En el espacio entre surcos finales se grabó la dedicatoria «To the makers of music—all worlds, all times».",
        },
        {
          type: 'quote',
          text: "«Para los creadores de la música —todos los mundos, todos los tiempos.»",
          attribution: "Dedicatoria grabada en el Disco Voyager",
        },
        {
          type: 'key',
          html: "La música expresa lo que la ciencia no alcanza: emociones humanas elegidas con pasión, no por deber protocolario.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "La misión Voyager al sistema solar exterior",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Carl Sagan</span> describe la ciencia que hace posible el viaje interestelar. La Tierra es un <span class=\"term\">planeta terrestre</span> pequeño. Más allá de Marte reinan los gigantes gaseosos (Júpiter, Saturno, Urano y Neptuno), con masas y atmósferas radicalmente distintas.",
        },
        {
          type: 'paragraph',
          html: "Júpiter tiene <span class=\"num\">317</span> veces la masa terrestre y emite más energía de la que recibe del Sol. Sus nubes de colores pueden contener moléculas orgánicas formadas por rayos ultravioleta y descargas eléctricas, incluidos aminoácidos. Titán, luna de Saturno, tiene atmósfera densa de metano. Sus mares podrían albergar materia orgánica acumulada durante eones. En <span class=\"num\">1976</span> se descubrieron anillos alrededor de Urano, lo que alivió la pregunta de por qué solo Saturno los tenía.",
        },
        {
          type: 'paragraph',
          html: "Las Voyager llevan <span class=\"num\">11</span> experimentos científicos, cada uno con un equipo que trabajó casi una década. Las trayectorias asistidas por gravedad de Júpiter y Saturno aceleran las naves hacia escape interestelar —accidente de mecánica celeste que hizo posible el Disco. Los compromisos entre objetivos científicos son dolorosos: volar cerca de Ío, ocultar Saturno tras sus anillos o alcanzar Urano excluyen otras mediciones igualmente valiosas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Gigantes gaseosos",
              "description": "Júpiter y compañía retienen hidrógeno; los terrestres lo perdieron al calentarse el sistema interior.",
              "icon": "🪐"
            },
            {
              "title": "Anillos",
              "description": "Saturno, Urano y quizá más: escombros orbitales o lunas destrozadas por mareas.",
              "icon": "💍"
            },
            {
              "title": "Gravedad asistida",
              "description": "El «billar» planetario acelera Voyager y la expulsa del sistema solar.",
              "icon": "🚀"
            }
          ],
        },
        {
          type: 'key',
          html: "Voyager es simultáneamente exploradora del sistema solar exterior y mensajera al vacío entre las estrellas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Epílogo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Al ver la llama final del cohete Titan partir de Cabo Cañaveral, Sagan contempló el destino del Disco. Fijado al exterior de la nave, enfrenta rayos cósmicos, radiación solar y, sobre todo, <span class=\"term\">micrometeoritos</span>: partículas del tamaño del polvo de cometa que llenan el espacio interplanetario.",
        },
        {
          type: 'paragraph',
          html: "A ~<span class=\"num\">15 km/s</span>, sin cubierta de aluminio, el disco acumularía daño en ~<span class=\"num\">10 %</span> de su superficie en un año-luz. La funda de <span class=\"num\">0,08 cm</span> de aluminio limita el daño a menos del <span class=\"num\">2 %</span> a esa distancia. El lado interior, protegido, sobrevive esencialmente intacto ~<span class=\"num\">10⁹</span> años: ahí están saludos, sonidos y el primer tercio de la música.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"term\">Voyager 1</span> saldrá hacia Ofiuco y <span class=\"term\">Voyager 2</span> hacia Capricornio. En ~<span class=\"num\">40.000</span> años, la enana roja <span class=\"term\">AC+79 3888</span> estará a solo <span class=\"num\">3</span> años-luz del Sol. Voyager 1 pasará a <span class=\"num\">1,7</span> años-luz de ella. Si esa estrella tiene planetas, una maniobra final podría dirigir la nave hacia su sistema en ~<span class=\"num\">60.000</span> años.",
        },
        {
          type: 'paragraph',
          html: "Quien encuentre el Disco sabrá que enviar tal mensaje solo tiene sentido con pasión por el futuro: una especie con esperanza, perseverancia, inteligencia modesta, generosidad y deseo genuino de contacto con el cosmos.",
        },
        {
          type: 'key',
          html: "El mensaje es frágil y eterno a la vez: un susurro de cobre y oro atravesando el vacío interestelar.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Disco de las Voyager",
    "description": "Registro fonográfico de cobre/dorado con sonido, imágenes y saludos; instrucciones científicas en la cubierta."
  },
  {
    "title": "SETI",
    "description": "Búsqueda de inteligencia extraterrestre por radio; escuchar es más plausible que dialogar a distancias interestelares."
  },
  {
    "title": "Mensaje de Arecibo",
    "description": "Bitmap de 1679 caracteres transmitido en 1974; ADN, humano, sistema solar y telescopio emisor."
  },
  {
    "title": "Cápsula del tiempo",
    "description": "Comunicación con el futuro lejano; tradición desde Esarhaddon hasta la era espacial."
  },
  {
    "title": "Codificación de imágenes",
    "description": "Fotografías convertidas a señal de audio en los surcos del disco fonográfico."
  },
  {
    "title": "Micrometeoritos",
    "description": "Principal amenaza al Disco en el vacío; la cubierta de aluminio mitiga el daño."
  },
  {
    "title": "Música como emoción",
    "description": "Complemento a la ciencia; posible lenguaje de sentimientos humanos."
  },
  {
    "title": "Audiencia dual",
    "description": "Terrícolas (lectores seguros) vs extraterrestres (probabilidad infinitesimal)."
  }
],
  chronology: [
  {
    "year": "1959",
    "text": "Morrison/Coconni proponen SETI por radio; Drake calcula viabilidad."
  },
  {
    "year": "1960",
    "text": "Proyecto OZMA escucha Tau Ceti y Epsilon Eridani."
  },
  {
    "year": "1971–72",
    "text": "Pioneer 10 y 11 con placas interestelares."
  },
  {
    "year": "1974",
    "text": "Mensaje de Arecibo; satélite LAGEOS con placa de deriva continental."
  },
  {
    "year": "1976",
    "text": "John Casani encarga a Sagan el mensaje Voyager."
  },
  {
    "year": "1977",
    "text": "Lanzamiento Voyager 2 (20 ago) y 1 (5 sep); disco completado mayo–junio."
  },
  {
    "year": "1979–86",
    "text": "Encuentros previstos con Júpiter, Saturno y posiblemente Urano."
  },
  {
    "year": "1978",
    "text": "Publicación de «Murmurs of Earth»."
  }
],
  figures: [
  {
    "name": "Carl Sagan",
    "role": "Coordinador del proyecto; ensayos sobre tiempo, misión y epílogo."
  },
  {
    "name": "Frank Drake",
    "role": "SETI y mensaje de Arecibo; sugirió el disco fonográfico en Honolulu."
  },
  {
    "name": "Jon Lomberg",
    "role": "Diseño y selección de las 118 imágenes codificadas."
  },
  {
    "name": "Linda Salzman Sagan",
    "role": "Saludos en decenas de idiomas; figuras de la placa Pioneer."
  },
  {
    "name": "Ann Druyan",
    "role": "«The Sounds of Earth» y producción creativa del registro."
  },
  {
    "name": "Timothy Ferris",
    "role": "Selección musical y asistencia en el ensayo sonoro."
  },
  {
    "name": "John Casani",
    "role": "Director del proyecto Voyager en JPL; encargó el mensaje (1976)."
  },
  {
    "name": "Alan Lomax",
    "role": "Asesoría en música étnica mundial para el Disco."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La humanidad fabricó un artefacto que puede sobrevivir eones en el vacío interestelar.",
  "El Disco Voyager codifica ciencia, imagen, sonido, música y saludo en un solo objeto físico.",
  "Casi ningún extraterrestre lo verá; billones de terrícolas sí, y eso basta para justificar el gesto.",
  "Voyager parte lenta pero irrevocablemente hacia el vacío entre las estrellas.",
  "Enviar tal mensaje solo tiene sentido si se cree en un futuro."
],
    highlight: "Es mensaje a las estrellas —y, sobre todo, un espejo de lo que elegimos conservar de nosotros mismos.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Carl Sagan y colaboradores",
    line2: "\"Murmurs of Earth\" · Random House · 1978",
  },
}
