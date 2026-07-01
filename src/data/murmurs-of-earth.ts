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
      num: "Prefacio",
      title: "Emisarios hacia las estrellas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"num\">20 de agosto</span> y el <span class=\"num\">5 de septiembre de 1977</span> se lanzaron dos naves Voyager hacia las estrellas. Las dos naves explorarán Júpiter, Saturno y más allá, y luego abandonarán el sistema solar como emisarios de la Tierra. A cada una se fijó un disco fonográfico de cobre recubierto de oro.",
        },
        {
          type: 'paragraph',
          html: "El registro contiene <span class=\"num\">118</span> fotografías de nuestro planeta y civilización, casi <span class=\"num\">90</span> minutos de música y un ensayo sonoro evolutivo llamado «The Sounds of Earth». También incluye saludos en casi sesenta idiomas humanos (y uno de ballena), con mensajes del presidente de EE. UU. y del secretario general de la ONU.",
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
          html: "<span class=\"person\">Carl Sagan</span> abre con cápsulas del tiempo: desde las inscripciones de <span class=\"person\">Esarhaddon</span> en el siglo VII a.C. hasta la Feria Mundial de Nueva York de <span class=\"num\">1939</span>. Comunicar con el futuro expresa esperanza y enlaza a la especie a través del tiempo.",
        },
        {
          type: 'paragraph',
          html: "La era espacial amplía el horizonte. Las civilizaciones alienígenas serían radicalmente distintas, pero la física y la química son universales. La primera comunicación exitosa, si ocurre, será científica. Las naves viajan muy lento (~<span class=\"num\">10 km/s</span>). La radio viaja a la velocidad de la luz, pero recibir monólogos de civilizaciones avanzadas es más plausible que un diálogo.",
        },
        {
          type: 'paragraph',
          html: "Pioneer 10 y 11 fueron las primeras sondas interestelares, con placas de oro-anodizado. LAGEOS orbitará millones de años con una placa sobre deriva continental. En <span class=\"num\">1976</span>, <span class=\"person\">John Casani</span> pidió a Sagan organizar un mensaje para Voyager.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Disco LP",
              "description": "Frank Drake sugirió un disco: información duradera, imágenes en audio y música.",
              "icon": "📻"
            },
            {
              "title": "Matemática y música",
              "description": "Relación pitagórica; quizá lenguaje universal para emociones humanas.",
              "icon": "🎵"
            },
            {
              "title": "Público terrestre",
              "description": "Oliver: billones de terrícolas verán el mensaje; casi ningún extraterrestre.",
              "icon": "🌍"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "El disco gira a <span class=\"num\">16⅔</span> rpm para ~<span class=\"num\">90</span> minutos de música. Debates nocturnos eligieron Bach, Beethoven, música étnica (Alan Lomax), blues de Louis Armstrong y la Cavatina de Beethoven como cierre emotivo. CBS Records obtuvo liberaciones de copyright «para fines extraterrestres».",
        },
        {
          type: 'key',
          html: "El Disco Voyager es cápsula del tiempo cósmica: ciencia, arte, sonido y saludo en un solo artefacto físico.",
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
          html: "<span class=\"person\">Frank Drake</span>, pionero del SETI, relata el desarrollo de técnicas de mensajería interestelar desde los años cincuenta. La convicción de vida más allá de la Tierra impulsa codificar información comprensible sin contacto previo.",
        },
        {
          type: 'paragraph',
          html: "En noviembre de <span class=\"num\">1974</span>, en la rededicación del radiotelescopio de Arecibo, se transmitió el primer mensaje humano deliberado al espacio: un bitmap de <span class=\"num\">551</span> caracteres con el sistema solar, ADN, figura humana y el propio radiotelescopio. No fue un intento serio de contacto, sino demostración de capacidad técnica.",
        },
        {
          type: 'paragraph',
          html: "Drake diseñó el mensaje con ayuda de <span class=\"person\">Carl Sagan</span>. Los números binarios codifican longitudes. Los caracteres forman una imagen que un receptor inteligente podría decodificar. La portada del Disco Voyager repite esta lógica con instrucciones científicas para reproducir el registro.",
        },
        {
          type: 'key',
          html: "Antes del Disco físico, Arecibo probó que podemos hablar al cosmos en el lenguaje de la matemática y la física.",
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
          html: "<span class=\"person\">Jon Lomberg</span>, artista y diseñador, describe cómo seleccionar y codificar <span class=\"num\">118</span> imágenes en el ancho de banda del disco. El reto: pensar como un extraterrestre sin saber nada de nosotros.",
        },
        {
          type: 'paragraph',
          html: "El equipo (Drake, Lomberg, Amanda Zangari y otros) adoptó el ejercicio mental de «ser el extraterrestre». <span class=\"person\">Philip Morrison</span> influyó en priorizar claridad sobre belleza. Las imágenes van de matemáticas básicas (diccionario numérico) a anatomía humana, paisajes, arquitectura y actividades cotidianas.",
        },
        {
          type: 'paragraph',
          html: "Siluetas y diagramas aseguran legibilidad si la decodificación de fotografías falla. Cada imagen fue debatida: ¿representa la diversidad humana? ¿Evita chauvinismo occidental? ¿Puede malinterpretarse? Lomberg jugó el papel de crítico alienígena en cada selección.",
        },
        {
          type: 'list',
          items: [
            "**Apertura matemática** — Números, operaciones y unidades como diccionario para imágenes posteriores.",
            "**Biología y química** — Estructura del ADN, células, anatomía.",
            "**Civilización** — Ciudades, transporte, comida, familia, ciencia."
          ],
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
          html: "<span class=\"person\">Linda Salzman Sagan</span> coordinó los saludos hablados, buscando un tono más festivo que un simple «hola» y menos sombrío que un suspiro. El reto burocrático de la ONU casi impidió el proyecto. Al final, delegados del Comité del Espacio Exterior grabaron mensajes, a menudo demasiado largos.",
        },
        {
          type: 'paragraph',
          html: "Se buscó diversidad de idiomas y voces masculinas y femeninas. En la práctica, casi todos los jefes de delegación eran hombres. <span class=\"person\">Timothy Ferris</span> asistió a la sesión de la ONU y recortó discursos poéticos (Baudelaire, Martinson) a fragmentos breves. Un delegado australiano habló en esperanto.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Roger Payne</span> aportó cantos de ballena jorobada como saludo de otra especie inteligente terrestre. También se incluyeron saludos del presidente Carter y del secretario general Kurt Waldheim, más saludos en ~<span class=\"num\">54</span> idiomas de hablantes de al menos un millón de personas.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "54+",
              "label": "Idiomas humanos en el Disco"
            },
            {
              "value": "1",
              "label": "«Idioma» de ballena jorobada"
            },
            {
              "value": "118",
              "label": "Fotografías codificadas en el registro"
            }
          ],
        },
        {
          type: 'key',
          html: "Decir «hola» al cosmos exigió diplomacia terrestre: la ONU, la ballena y la diversidad lingüística en minutos de audio.",
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
          html: "<span class=\"person\">Ann Druyan</span> produjo «The Sounds of Earth», un ensayo sonoro evolutivo: del Big Bang conceptual al hombre y su tecnología. Cita a Shakespeare (<em>The Tempest</em>): la isla está llena de ruidos, sonidos y aires dulces.",
        },
        {
          type: 'paragraph',
          html: "La selección comenzó en la Biblioteca del Congreso y en grabaciones de campo. Incluye latidos, llanto de bebé, pájaros, viento, surf, truenos, volcanes, herramientas primitivas, trenes, cohete Saturno V, código Morse y un pulsar. Amigos y artistas contribuyeron. Algunos rechazaron participar por desconfianza hacia el proyecto.",
        },
        {
          type: 'paragraph',
          html: "Murry Sidlin insistió en enviar «lo mejor de nosotros». El ensayo abre con tonos que reflejan movimientos del Sol y la Tierra, sigue con convulsiones geológicas tempranas, evolución de la vida y culmina con la civilización técnica que lanzó Voyager.",
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
          html: "<span class=\"person\">Timothy Ferris</span> documenta la selección musical, que él llamó «los mayores éxitos de la Tierra». Los criterios fueron representatividad cultural, profundidad emocional y coherencia con el resto del mensaje. Bach y Beethoven representan la tradición occidental que lanzó la nave. Lomax amplió la selección con música étnica global.",
        },
        {
          type: 'paragraph',
          html: "Debates maratonianos (hasta las 3 a.m. en el Smithsonian) enfrentaron jazz, rock, ópera y música folklórica. Se descartó «Here Comes the Sun» de los Beatles por problemas de copyright. Se incluyeron Navajo night chant, Louis Armstrong, Stravinsky, Mozart (aria de la Reina de la Noche), Bach (Partita para violín solo) y «Dark Was the Night» de Blind Willie Johnson junto a la Cavatina de Beethoven.",
        },
        {
          type: 'paragraph',
          html: "La secuencia alterna culturas y contrastes emocionales. Los últimos dos temas expresan soledad cósmica y anhelo de contacto —eco del mensaje principal del Disco.",
        },
        {
          type: 'quote',
          text: "«Para futuros tiempos y seres.»",
          attribution: "Dedicatoria del libro",
        },
        {
          type: 'key',
          html: "No hubo respuesta única correcta; cada elección musical fue negociación entre belleza, diversidad y el espacio limitado del vinilo interestelar.",
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
          html: "<span class=\"person\">Carl Sagan</span> cierra con la ciencia de la misión. Júpiter, Saturno, Urano y Neptuno revelaron mundos inesperados. Los gigantes gaseosos giran rápido. Sus lunas guardan hielo, volcanes y quizá océanos subterráneos.",
        },
        {
          type: 'paragraph',
          html: "Voyager 1 fotografió la Tierra como punto pálido. Voyager 2 visitó los cuatro gigantes exteriores. Europa, Ío, Titán y Tritón ampliaron nuestra noción de habitabilidad. La gravedad de Júpiter aceleró las naves hacia trayectorias de escape interestelar.",
        },
        {
          type: 'paragraph',
          html: "Las imágenes científicas del capítulo complementan las del Disco: no solo saludo, sino testimonio de la exploración que hizo posible el mensaje. Cada luna es un mundo con historia propia de cuatro mil millones de años.",
        },
        {
          type: 'key',
          html: "Voyager es simultáneamente exploradora del sistema solar y mensajera al vacío entre las estrellas.",
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
          html: "Al ver la llama final del cohete Titan partir de Cabo Cañaveral, Sagan contempló el destino del Disco. Fijado al exterior de la nave, el registro enfrenta rayos cósmicos, radiación solar y, sobre todo, micrometeoritos.",
        },
        {
          type: 'paragraph',
          html: "A ~<span class=\"num\">15 km/s</span>, partículas del tamaño de polvo de cometa pueden picar el registro. La cubierta de aluminio evita que aproximadamente el <span class=\"num\">10 %</span> del disco se dañe en un año-luz de viaje. La funda de <span class=\"num\">0,08 cm</span> protege contra micrometeoritos más masivos que ~<span class=\"num\">5 μg</span>.",
        },
        {
          type: 'paragraph',
          html: "El campo estelar hacia la Osa Menor incluye AC+79 3888, hacia donde se dirige Voyager 1. El Disco orbitará el centro galáctico cada ~<span class=\"num\">250 millones</span> de años, esencialmente para siempre —o hasta que alguien lo encuentre.",
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
    "description": "Registro fonográfico de cobre/dorado con sonido, imágenes y saludos; instrucciones en la cubierta."
  },
  {
    "title": "Mensaje de Arecibo",
    "description": "Bitmap de 551 caracteres transmitido por radio en 1974; prueba de mensajería SETI."
  },
  {
    "title": "Cápsula del tiempo",
    "description": "Comunicación con el futuro lejano; tradición desde Esarhaddon hasta la era espacial."
  },
  {
    "title": "SETI",
    "description": "Búsqueda de inteligencia extraterrestre; escuchar es más plausible que dialogar a distancias interestelares."
  },
  {
    "title": "Micrometeoritos",
    "description": "Principal amenaza al Disco en el vacío; la cubierta de aluminio mitiga el daño."
  },
  {
    "title": "Lingua cosmica",
    "description": "Código basado en matemática y física para comunicar sin idioma compartido."
  },
  {
    "title": "Música como emoción",
    "description": "Lo que la ciencia no transmite: sentimientos humanos codificados en armonía."
  }
],
  chronology: [
  {
    "year": "1971–72",
    "text": "Lanzamiento de Pioneer 10 y 11 con placas interestelares."
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
    "text": "Lanzamiento de Voyager 1 (5 sep) y 2 (20 ago); disco completado en mayo–junio."
  },
  {
    "year": "1979–81",
    "text": "Voyager explora Júpiter y Saturno; posible ruta a Urano."
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
    "role": "SETI y mensaje de Arecibo; sugirió el disco fonográfico."
  },
  {
    "name": "Jon Lomberg",
    "role": "Diseño y selección de las 118 imágenes codificadas."
  },
  {
    "name": "Linda Salzman Sagan",
    "role": "Saludos en decenas de idiomas y coordinación ONU."
  },
  {
    "name": "Ann Druyan",
    "role": "«The Sounds of Earth» y producción creativa del registro."
  },
  {
    "name": "Timothy Ferris",
    "role": "Selección musical y asistencia en saludos de la ONU."
  },
  {
    "name": "John Casani",
    "role": "Director del proyecto Voyager en JPL; encargó el mensaje."
  },
  {
    "name": "Alan Lomax",
    "role": "Asesoría en música étnica mundial para el Disco."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La humanidad fabricó un artefacto que sobrevivirá a sus autores por eones.",
  "El Disco Voyager codifica ciencia, imagen, sonido, música y saludo en un solo objeto físico.",
  "La burocracia, el copyright y la diplomacia terrestre fueron tan decisivos como la física.",
  "Voyager parte lenta pero irrevocablemente hacia el vacío entre las estrellas.",
  "Que alguien lo encuentre algún día es probabilidad minúscula; que valga la pena enviarlo, certeza humana."
],
    highlight: "Es mensaje a las estrellas —y, sobre todo, un espejo de lo que elegimos conservar de nosotros mismos.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Carl Sagan y colaboradores",
    line2: "\"Murmurs of Earth\" · Random House · 1978",
  },
}
