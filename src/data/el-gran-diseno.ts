import type { BookSummary } from '../types/book'

export const elGranDiseno: BookSummary = {
  slug: "el-gran-diseno",
  meta: {
    title: "El gran diseño",
    subtitle: "La cuestión última de la vida, el universo y el Todo",
    author: "Stephen Hawking y Leonard Mlodinow",
    meta: [
      "📖 2010 · Ed. Crítica",
      "✍️ Traducción de David Jou i Mirabent",
    ],
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "La cuestión última",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tres décadas después de Historia del tiempo, <span class=\"person\">Stephen Hawking</span> y <span class=\"person\">Leonard Mlodinow</span> vuelven a las preguntas que aquel libro no pudo cerrar: ¿por qué existe el universo?, ¿por qué hay algo en lugar de nada?, ¿necesita el cosmos un creador? El desarrollo de la <span class=\"term\">teoría M</span> y las observaciones de satélites como los de la NASA permiten enfrentar por fin la cuestión última.",
        },
        {
          type: 'paragraph',
          html: "La tesis central es audaz y polémica: nuestro universo y muchos otros surgieron de la nada sin intervención divina. La creación no requiere un Dios ni un ser sobrenatural, sino que obedece a las <span class=\"term\">leyes físicas</span>. Si la teoría M se confirma por la observación, habremos completado una búsqueda que se remonta a más de tres mil años de reflexión sobre el cosmos.",
        },
        {
          type: 'paragraph',
          html: "El libro ofrece una imagen del universo muy distinta de la tradicional y también de la que Hawking mismo esbozó hace una o dos décadas. No es un tratado técnico, sino un mapa accesible de la cuántica, la suma de historias, el realismo dependiente del modelo y el multiverso, que hacen posible esa respuesta.",
        },
        {
          type: 'key',
          html: "El libro plantea responder, con la física del siglo <span class=\"key-term\">XXI</span>, las preguntas cosmológicas que la filosofía ya no puede abordar.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El misterio del ser",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Cada humano existe un instante brevísimo y solo explora una fracción minúscula del universo, pero la curiosidad nos empuja a preguntar por la naturaleza de la realidad, el origen de todo y la necesidad de un Creador. Tradicionalmente esas cuestiones correspondían a la filosofía, pero los autores abren con una afirmación contundente: la filosofía ha muerto porque no se mantuvo al corriente de la física moderna.",
        },
        {
          type: 'paragraph',
          html: "La imagen clásica del mundo, con objetos que tienen posiciones y trayectorias bien definidas, falló en la década de <span class=\"num\">1920</span> ante el comportamiento atómico y subatómico. La <span class=\"term\">física cuántica</span> predice esos fenómenos con precisión asombrosa y recupera las leyes clásicas en la escala cotidiana, pero descansa en una concepción de la realidad radicalmente distinta. <span class=\"person\">Richard Feynman</span> la expresó con claridad: un sistema no tiene una sola historia, sino todas las historias posibles.",
        },
        {
          type: 'paragraph',
          html: "Esa idea se extiende al cosmos entero. El universo no tiene una única historia ni una existencia independiente de la observación. Los autores manejan paradojas que chocan con el sentido común, formado por la vida diaria y no por el interior del átomo, mediante el <span class=\"term\">realismo dependiente del modelo</span>. Nuestro cerebro construye modelos a partir de los sentidos y los tomamos por realidad cuando funcionan. Si dos modelos predicen lo mismo, ninguno es más verdadero.",
        },
        {
          type: 'paragraph',
          html: "La candidata a teoría final es la <span class=\"term\">teoría M</span>, una familia de teorías solapadas como mapas de la Tierra: ninguna cubre todo el terreno, pero donde se superponen coinciden. Según sus predicciones, innumerables universos surgieron de la nada sin Dios, y nuestra presencia selecciona el que puede albergar vida.",
        },
        {
          type: 'quote',
          text: "«La filosofía ha muerto. La filosofía no se ha mantenido al corriente de los desarrollos modernos de la ciencia, en particular de la física.»",
          attribution: "Stephen Hawking y Leonard Mlodinow",
        },
        {
          type: 'key',
          html: "La física moderna, con su cuántica, sus historias múltiples y la teoría M, reemplaza a la filosofía como guía para responder por qué hay <span class=\"key-term\">algo</span> en lugar de nada.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Las reglas de la ley",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Antes de preguntar por el origen del cosmos hay que entender qué son las <span class=\"term\">leyes de la naturaleza</span>. Los griegos como <span class=\"person\">Tales de Mileto</span> y <span class=\"person\">Pitágoras</span> buscaron regularidades sin recurrir a dioses para cada fenómeno. Siglos después, <span class=\"person\">Isaac Newton</span> unificó los movimientos terrestres y celestes bajo leyes matemáticas, y <span class=\"person\">Pierre-Simon Laplace</span> imaginó un universo determinista donde conocer las leyes y el estado actual bastaría para predecir el futuro entero.",
        },
        {
          type: 'paragraph',
          html: "La ciencia avanza construyendo modelos que relacionan observaciones con leyes. Las leyes no son decretos divinos sino descripciones descubiertas de regularidades. La <span class=\"term\">relatividad general</span> de Einstein mostró además que el espacio-tiempo no es un escenario fijo: la materia lo curva y esa curvatura es lo que llamamos gravedad. La paradoja de los gemelos demuestra que el tiempo mismo es dinámico, porque el hermano que viaja al espacio envejece menos que el que se queda en la Tierra.",
        },
        {
          type: 'paragraph',
          html: "Aceptar leyes naturales abre tres preguntas que la ciencia tradicional no resolvió. ¿Por qué existen leyes en absoluto? ¿Por qué estas leyes y no otras? ¿Por qué el universo las obedece? Los autores devuelven esas preguntas a la física moderna en los capítulos siguientes, cuando la cuántica y la teoría M permitan hablar de creación sin legislador.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Leyes como regularidades",
              "description": "Patrones matemáticos descubiertos por la observación, no mandatos de un diseñador.",
              "icon": "⚖️"
            },
            {
              "title": "Espacio-tiempo dinámico",
              "description": "La gravedad curva la geometría del cosmos; el tiempo fluye distinto según la velocidad.",
              "icon": "🌀"
            },
            {
              "title": "Tres preguntas abiertas",
              "description": "Por qué hay leyes, por qué estas y por qué el universo las sigue.",
              "icon": "❓"
            }
          ],
        },
        {
          type: 'key',
          html: "Las leyes de la naturaleza son descubrimientos científicos, pero aún falta explicar por qué existen y por qué rigen el <span class=\"key-term\">universo</span>.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "¿Qué es la realidad?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si la cuántica contradice la intuición, ¿qué significa «real»? Los autores defienden el <span class=\"term\">realismo dependiente del modelo</span>, según el cual solo existe la realidad que describe un modelo coherente con las observaciones. Nuestros sentidos entregan datos y el cerebro construye una imagen del mundo. Cuando el modelo funciona, lo confundimos con la verdad absoluta.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">Juego de la Vida</span> de <span class=\"person\">John Conway</span> lo ilustra con elegancia. Unas reglas simples sobre una cuadrícula generan patrones complejos como planos, reproductores y calculadoras, sin que las reglas «contengan» esos objetos. Del mismo modo, leyes simples de la física producen la riqueza del cosmos. Las leyes no son entidades separadas del modelo: son parte de él.",
        },
        {
          type: 'paragraph',
          html: "La historia de la astronomía muestra que modelos rivales pueden ser igualmente válidos. <span class=\"person\">Ptolomeo</span> situó la Tierra en el centro con epiciclos, y <span class=\"person\">Copérnico</span> movió el Sol al centro. Ambos acordaban con las observaciones de su tiempo. Hoy usamos el modelo heliocéntrico porque es más simple, no porque hayamos «visto» la Tierra girar. En cuántica ocurre lo mismo con distintas formulaciones matemáticas.",
        },
        {
          type: 'paragraph',
          html: "Esta postura libera a la física de perseguir una imagen única del mundo. Lo que importa es que el modelo prediga mediciones. Esa flexibilidad prepara al lector para aceptar que el universo entero puede carecer de una historia única y aun así ser objeto de ciencia rigurosa.",
        },
        {
          type: 'key',
          html: "La realidad es la del mejor <span class=\"key-term\">modelo</span> predictivo, no una imagen única independiente de cómo la describamos.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Historias alternativas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mecánica cuántica es el corazón del libro. A escala microscópica, la luz se comporta como onda y como partícula. El experimento de la <span class=\"term\">doble rendija</span> muestra que un fotón parece atravesar ambas aberturas a la vez y producir un patrón de interferencia, como si interfirieran consigo mismo. La realidad clásica de trayectorias definidas colapsa.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Werner Heisenberg</span> formuló el <span class=\"term\">principio de incertidumbre</span>: cuanto más precisa es la posición de una partícula, menos precisa es su velocidad, y viceversa. No es un fallo del instrumento sino una propiedad del mundo. Feynman reformuló la teoría con la <span class=\"term\">suma de historias</span>: una partícula va de A a B por todos los caminos posibles simultáneamente, y cada trayectoria aporta una fase que determina la probabilidad del resultado.",
        },
        {
          type: 'paragraph',
          html: "La observación es decisiva. Mientras nadie mide, el sistema explora historias superpuestas. Al medir, una de ellas se actualiza. Eso no significa que la conciencia cree la realidad, sino que la interacción física selecciona un resultado entre posibilidades cuánticas. La extrañeza no es retórica: está verificada en laboratorios desde hace casi un siglo.",
        },
        {
          type: 'paragraph',
          html: "Si las partículas tienen historias múltiples, el universo entero puede tenerlas. La <span class=\"term\">cosmología cuántica</span> aplica la suma de historias al espacio-tiempo mismo, abriendo la puerta a que el cosmos no tenga un único pasado sino muchos, ponderados por probabilidad. Esa idea es la base de los capítulos cosmológicos.",
        },
        {
          type: 'quote',
          text: "«Según Feynman, un sistema no tiene una sola historia, sino todas las historias posibles.»",
          attribution: "Stephen Hawking y Leonard Mlodinow",
        },
        {
          type: 'key',
          html: "En cuántica, cada sistema recorre todas las <span class=\"key-term\">historias</span> posibles a la vez, y la observación selecciona probabilidades.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La teoría de todo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La física busca desde hace siglos una <span class=\"term\">teoría del todo</span> que unifique las cuatro fuerzas fundamentales: gravedad, electromagnetismo, fuerza nuclear débil y fuerza nuclear fuerte. <span class=\"person\">James Clerk Maxwell</span> unificó electricidad y magnetismo. Einstein intentó unir gravedad y electromagnetismo sin éxito. En la década de <span class=\"num\">1960</span>, la teoría electrodébil unió electromagnetismo y fuerza débil.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría de cuerdas</span> propone que las partículas no son puntos sino vibraciones minúsculas en objetos unidimensionales. Esa idea exige dimensiones extra enrolladas de forma compacta. Surgieron cinco versiones distintas de cuerdas, aparentemente incompatibles, hasta que la <span class=\"term\">teoría M</span> las reconcilió en un marco con <span class=\"num\">11</span> dimensiones, donde también viven las llamadas <span class=\"term\">branas</span>, variedades de distinta dimensionalidad en las que pueden vivir universos enteros.",
        },
        {
          type: 'paragraph',
          html: "La teoría M no es una sola teoría sino una familia de modelos, como un atlas de mapas. Cada versión describe bien las observaciones solo en un dominio limitado, como las energías bajas, y donde los dominios se solapan predicen lo mismo. No existe un mapa plano único del universo físico, ni una ecuación única para todo.",
        },
        {
          type: 'paragraph',
          html: "El paisaje de la teoría M admite del orden de <span class=\"num\">10⁵⁰⁰</span> configuraciones distintas de leyes y constantes. Ese número vertiginoso no es un defecto: será la base del argumento multiverso en el capítulo siguiente.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Cuatro fuerzas",
              "description": "Gravedad, electromagnetismo, nuclear débil y nuclear fuerte; objetivo de la unificación.",
              "icon": "🔗"
            },
            {
              "title": "Teoría de cuerdas",
              "description": "Partículas como vibraciones en dimensiones extra; cinco versiones unificadas en M.",
              "icon": "🎻"
            },
            {
              "title": "Familia de modelos",
              "description": "La teoría M es un atlas de teorías solapadas, no una sola ecuación para todo.",
              "icon": "🗺️"
            }
          ],
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">teoría M</span> unifica las fuerzas como un atlas de modelos solapados, con un paisaje de ~10⁵⁰⁰ configuraciones posibles.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Escogiendo nuestro universo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La cosmología moderna describe un universo que se expandió desde un estado muy denso y caliente hace unos <span class=\"num\">13.800 millones</span> de años. La <span class=\"term\">inflación</span>, una expansión exponencial fracciones de segundo después del origen, explica por qué el cosmos es tan uniforme y tan plano. Las fluctuaciones cuánticas en ese período sembraron las galaxias.",
        },
        {
          type: 'paragraph',
          html: "Pero el Big Bang de nuestro universo no tiene por qué ser único. La combinación de gravedad cuántica y la suma de historias permite que universos enteros surjan de la nada, sin coste energético neto en un cosmos cerrado. Los autores formulan la tesis más citada del libro: dado que existe una ley como la gravedad, el universo puede y va a crearse a sí mismo a partir de la nada. La <span class=\"term\">creación espontánea</span> es la razón de que haya algo y no nada.",
        },
        {
          type: 'paragraph',
          html: "Eso produce un <span class=\"term\">multiverso</span> inmenso. La mayoría de los universos tendrán leyes incompatibles con la vida. Solo unos pocos permitirán estructuras complejas. Nuestra existencia no designa el cosmos, pero selecciona cuál observamos. El <span class=\"term\">principio antrópico débil</span> dice que solo en un universo habitable podríamos formular la pregunta.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Einstein</span> preguntó si Dios tuvo elección al crear el universo. La respuesta de los autores es que, si existe un multiverso con todas las posibilidades, un diseñador que «elige» unas leyes resulta redundante: la física ya explica la variedad.",
        },
        {
          type: 'quote',
          text: "«Dado que existe una ley como la gravedad, el universo puede y va a crearse a sí mismo a partir de la nada.»",
          attribution: "Stephen Hawking y Leonard Mlodinow",
        },
        {
          type: 'key',
          html: "Los universos surgen solos de la nada por las leyes físicas, y nuestra presencia <span class=\"key-term\">selecciona</span> el cosmos habitable entre un multiverso inmenso.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "El milagro aparente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las constantes de la naturaleza parecen afinadas con precisión milimétrica para permitir la vida. Si la fuerza nuclear fuerte fuera ligeramente distinta, no existirían átomos estables. Si la fuerza débil cambiara, el hidrógeno no se quemaría en las estrellas. El carbono, base de la química vital, solo se forma gracias a una resonancia que <span class=\"person\">Fred Hoyle</span> predijo antes de que se midiera.",
        },
        {
          type: 'paragraph',
          html: "Frente a ese ajuste fino hay tres respuestas. La primera es la suerte pura: ganamos la lotería cósmica. La segunda es el diseño divino: un Creador eligió las constantes. La tercera es el multiverso: con <span class=\"num\">10⁵⁰⁰</span> configuraciones posibles, es inevitable que algún universo resulte habitable, y solo en uno así podemos preguntarnos por qué.",
        },
        {
          type: 'paragraph',
          html: "Los autores rechazan el <span class=\"term\">diseño inteligente</span> como explicación científica porque solo traslada el misterio. Si las leyes requieren un diseñador, el diseñador requiere una explicación mayor. El «dios de los huecos», que invoca lo divino solo donde la ciencia aún no llegó, se reduce con cada avance. El ajuste fino parece milagro, pero el multiverso lo convierte en consecuencia estadística.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~10⁵⁰⁰",
              "label": "Configuraciones posibles en el paisaje de la teoría M"
            },
            {
              "value": "~1/1.000M",
              "label": "Asimetría materia-antimateria que dejó el universo visible"
            }
          ],
        },
        {
          type: 'key',
          html: "El ajuste fino de las constantes parece milagro, pero el <span class=\"key-term\">multiverso</span> y el principio antrópico lo explican sin diseñador.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "El gran diseño",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El libro contrapone dos enfoques para entender el origen. El <span class=\"term\">enfoque tradicional</span> asume un Dios que creó el universo, interviene con milagros y está por encima de las leyes naturales. El <span class=\"term\">enfoque científico</span>, con leyes inviolables, creación espontánea y multiverso, explica los mismos fenómenos sin postular un agente externo.",
        },
        {
          type: 'paragraph',
          html: "El enfoque tradicional falla donde la cuántica y la cosmología moderna avanzan. Si los universos pueden crearse solos y las leyes surgen del paisaje de la teoría M, invocar a Dios para «encender la mecha» del cosmos es innecesario. Los autores recuerdan que, en el famoso debate con <span class=\"person\">Newton</span>, se afirmó que no hace falta invocar a Dios para poner en marcha el universo.",
        },
        {
          type: 'paragraph',
          html: "La creación espontánea responde a la pregunta de por qué hay algo en lugar de nada. No es que la nada sea un vacío absoluto sin leyes: la nada cuántica es inestable y produce universos. La ciencia no demuestra que Dios no exista, pero muestra que no es necesario para explicar el cosmos. La filosofía y la teología cedieron la antorcha a la física.",
        },
        {
          type: 'paragraph',
          html: "A diferencia de la Guía del autoestopista galáctico, la respuesta no es «42». Es que las leyes de la gravedad y la mecánica cuántica, encuadradas en la teoría M, bastan para que el universo, y nosotros dentro de él, existamos sin diseñador.",
        },
        {
          type: 'quote',
          text: "«No es necesario invocar a Dios para encender la mecha azul y poner en marcha el universo.»",
          attribution: "Stephen Hawking y Leonard Mlodinow",
        },
        {
          type: 'key',
          html: "La ciencia responde por qué hay algo en lugar de nada: la <span class=\"key-term\">creación espontánea</span> hace innecesario a un diseñador divino.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Realismo dependiente del modelo",
    "description": "Solo existe la realidad descrita por un modelo que predice las observaciones; no hay imagen única del mundo."
  },
  {
    "title": "Suma de historias",
    "description": "Formulación de Feynman: un sistema recorre todos los caminos posibles y la observación selecciona probabilidades."
  },
  {
    "title": "Teoría M",
    "description": "Familia de teorías unificadas con 11 dimensiones que cubren distintos dominios físicos como mapas solapados."
  },
  {
    "title": "Multiverso",
    "description": "Conjunto de universos con leyes y constantes distintas, predicción de la cosmología cuántica moderna."
  },
  {
    "title": "Principio antrópico débil",
    "description": "Observamos un universo compatible con la vida porque solo en uno así podríamos existir para preguntarlo."
  },
  {
    "title": "Creación espontánea",
    "description": "Un universo puede surgir de la nada sin coste energético neto, guiado por leyes como la gravedad."
  },
  {
    "title": "Ajuste fino",
    "description": "Las constantes fundamentales caen en rangos estrechísimos que permiten átomos, estrellas y química vital."
  },
  {
    "title": "Leyes de la naturaleza",
    "description": "Regularidades matemáticas descubiertas por la ciencia, no decretos de un legislador divino."
  }
],
  chronology: [
  {
    "year": "~600 a.C.",
    "text": "Tales y Pitágoras buscan leyes naturales sin dioses para cada fenómeno."
  },
  {
    "year": "1543",
    "text": "Copérnico propone el modelo heliocéntrico como alternativa al geocéntrico de Ptolomeo."
  },
  {
    "year": "1687",
    "text": "Newton publica las leyes del movimiento y la gravitación universal."
  },
  {
    "year": "1915",
    "text": "Einstein completa la relatividad general: la gravedad es curvatura del espacio-tiempo."
  },
  {
    "year": "1920s",
    "text": "Nace la mecánica cuántica; Heisenberg formula el principio de incertidumbre."
  },
  {
    "year": "1960s",
    "text": "Se unifican electromagnetismo y fuerza débil en la teoría electrodébil."
  },
  {
    "year": "1970",
    "text": "Conway crea el Juego de la Vida, ilustración de complejidad desde reglas simples."
  },
  {
    "year": "1980s",
    "text": "Surge la teoría de cuerdas; Feynman populariza la suma de historias."
  },
  {
    "year": "1995",
    "text": "Se propone la teoría M, unificando cinco versiones de cuerdas en 11 dimensiones."
  },
  {
    "year": "2010",
    "text": "Hawking y Mlodinow publican El gran diseño con la tesis del multiverso y la creación espontánea."
  }
],
  figures: [
  {
    "name": "Stephen Hawking",
    "role": "Cosmólogo; teoría M, agujeros negros y creación espontánea del universo."
  },
  {
    "name": "Leonard Mlodinow",
    "role": "Físico teórico; coautor y divulgador de la nueva imagen cosmológica."
  },
  {
    "name": "Richard Feynman",
    "role": "Reformuló la cuántica con la suma de historias; enfoque intuitivo del libro."
  },
  {
    "name": "Albert Einstein",
    "role": "Relatividad general; preguntó si Dios tuvo elección al crear el universo."
  },
  {
    "name": "Werner Heisenberg",
    "role": "Principio de incertidumbre; límites fundamentales del conocimiento simultáneo."
  },
  {
    "name": "Fred Hoyle",
    "role": "Predijo la resonancia del carbono que hace posible la química de la vida."
  },
  {
    "name": "John Conway",
    "role": "Creador del Juego de la Vida; metáfora de leyes simples y complejidad emergente."
  },
  {
    "name": "Pierre-Simon Laplace",
    "role": "Visión determinista del universo gobernado por leyes completas."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Las grandes preguntas sobre el origen ya no pertenecen a la filosofía ni a la teología.",
  "La física moderna muestra que los universos surgen solos de la nada, guiados por leyes naturales.",
  "La teoría M y el multiverso completan la imagen que Historia del tiempo dejó abierta.",
  "Nuestra existencia selecciona, entre innumerables cosmos, el que puede albergar vida.",
  "La ciencia lleva la antorcha del descubrimiento en la búsqueda del Gran Diseño."
],
    highlight: "no hace falta invocar a Dios para explicar por qué hay algo en lugar de nada",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Stephen Hawking y Leonard Mlodinow",
    line2: "\"El gran diseño\" · Ed. Crítica · 2010",
  },
}
