import type { BookSummary } from '../types/book'

export const origins: BookSummary = {
  slug: "origins",
  meta: {
    title: "Origins: Fourteen Billion Years of Cosmic Evolution",
    subtitle: "Del Big Bang a la vida: la historia cósmica de dónde venimos",
    author: "Neil deGrasse Tyson y Donald Goldsmith",
    meta: [
      "📖 2.ª ed. revisada y actualizada · W. W. Norton",
      "✍️ Coautoría con Donald Goldsmith",
    ],
    titleEs: "Orígenes: Catorce mil millones de años de evolución cósmica",
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
    "label": "Meditación sobre los orígenes de la ciencia y la ciencia de los orígenes"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Al principio"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "La antimateria importa"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Que brille la luz"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Que haya oscuridad"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Que haya más oscuridad"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "¡Tensión en el cosmos!"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "¿Un universo o muchos?"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Descubriendo las galaxias"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "El origen de la estructura"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Polvo al polvo"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Cuando los mundos eran jóvenes"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Planetas más allá del Sistema Solar"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Vida en el universo"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "El origen de la vida en la Tierra"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Buscando vida en el Sistema Solar"
  },
  {
    "id": "cap16",
    "num": "16",
    "label": "Buscando vida en la Vía Láctea"
  },
  {
    "id": "coda",
    "num": "—",
    "label": "La búsqueda de nosotros mismos en el cosmos"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología de los descubrimientos"
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
      num: "00",
      title: "Meditación sobre los orígenes de la ciencia y la ciencia de los orígenes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿De dónde venimos cuando la ciencia puede cruzar disciplinas? Una nueva síntesis florece al unir tres campos. La <span class=\"term\">astroquímica</span> (química aplicada al espacio) y la <span class=\"term\">astrobiología</span> (búsqueda de vida fuera de la Tierra) se suman a la física de partículas cósmica. Responder «¿de dónde venimos?» ya no depende solo de la astrofísica.",
        },
        {
          type: 'paragraph',
          html: "Esta segunda edición incorpora descubrimientos recientes. Hay unos <span class=\"num\">5.000 exoplanetas</span> detectados y ondas gravitacionales registradas por primera vez en <span class=\"num\">2017</span>. Cinco cuerpos del Sistema Solar son candidatos para buscar vida. También persiste una discrepancia entre métodos para medir la expansión cósmica: la «crisis en cosmología».",
        },
        {
          type: 'paragraph',
          html: "A los humanos les fascinan los orígenes por razones lógicas y emocionales. Cada avance revela que habitamos un <span class=\"term\">grano de polvo cósmico</span> (un planeta diminuto) en los suburbios de una galaxia común. Entre al menos <span class=\"num\">100.000 millones de galaxias</span>, no somos el centro. Los mitos de creación suelen pasar rápido del universo a la historia humana.",
        },
        {
          type: 'paragraph',
          html: "La ciencia moderna nació del <span class=\"term\">escepticismo organizado</span> (observación cuidadosa y prueba pública). Cuatro reacciones ante su éxito son posibles: abrazarlo, ignorarlo, combatirlo o aceptarlo manteniendo creencias trascendentes.",
        },
        {
          type: 'key',
          html: "El libro invita a leer el cosmos como detectives: deducir la historia de cómo parte del universo se convirtió en nosotros.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Al principio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué reglas gobiernan el universo desde el primer instante? Al principio hubo física. Materia, energía, espacio y tiempo subyacen a toda química y biología. Aplicada al cielo, esa física es <span class=\"term\">astrofísica</span> (el estudio de fenómenos celestes con leyes físicas).",
        },
        {
          type: 'paragraph',
          html: "La física clásica (pre-1900) funciona en laboratorios cotidianos, pero el cosmos temprano exige otra cosa. Por eso, la <span class=\"term\">física moderna</span> (relatividad y cuántica) describe regímenes extremos de temperatura, densidad y presión. Ahí mandan reglas donde la intuición falla, como en los primeros momentos del universo.",
        },
        {
          type: 'paragraph',
          html: "El físico <span class=\"person\">Albert Einstein</span> publicó en 1905 la ecuación <span class=\"term\">E = mc²</span> (equivalencia masa-energía). Permite rastrear el cosmos desde hoy hasta fracciones infinitesimales de segundo tras el nacimiento. En el Sol, <span class=\"num\">4,4 millones de toneladas</span> de materia se convierten en energía cada segundo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Era de quarks",
              "description": "Primeras fracciones de segundo: partículas elementales en equilibrio térmico violento.",
              "icon": "⚛️"
            },
            {
              "title": "Era de hadrones",
              "description": "Al enfriarse, los fotones ya no crean pares quark-antiquark; sobrevive una partícula de materia por cada mil millones de aniquilaciones.",
              "icon": "🔥"
            },
            {
              "title": "Nucleosíntesis",
              "description": "A ~2 minutos: 90% hidrógeno, 10% helio, trazas de deuterio y litio.",
              "icon": "🌡️"
            }
          ],
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~1 s",
              "label": "Fin de la era leptónica; un electrón por protón"
            },
            {
              "value": "~2 min",
              "label": "Formación de núcleos ligeros"
            },
            {
              "value": "380.000 años",
              "label": "Átomos estables; fotones liberados (CBR)"
            }
          ],
        },
        {
          type: 'key',
          html: "Sin física extrema en el Big Bang no habría átomos, estrellas ni personas: todo lo familiar descansa en leyes descubiertas tras 1900.",
        },
        {
          type: 'paragraph',
          html: "Si el universo primordial creó materia y antimateria por igual, la pregunta siguiente es por qué quedó algo de materia.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "La antimateria importa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué existe materia si cada partícula tiene una contraparte que la destruye? Las <span class=\"term\">antipartículas</span> (gemelas de carga opuesta) son reales. Al contacto, materia y antimateria se <span class=\"term\">aniquilan</span> (se destruyen mutuamente) convirtiendo su masa en energía pura.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1932</span>, el físico <span class=\"person\">Carl Anderson</span> descubrió el positrón. Lo había predicho la ecuación de <span class=\"person\">Paul Dirac</span>.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1996</span>, el equipo de <span class=\"person\">Walter Oelert</span> en el CERN creó átomos de antihidrógeno. Nueve sobrevivieron menos de <span class=\"num\">40 nanosegundos</span> antes de aniquilarse.",
        },
        {
          type: 'paragraph',
          html: "Por eso, los fotones gamma de alta energía pueden crear pares electrón-positrón (E = mc² al revés). El universo primordial produjo partículas y antipartículas en igual cantidad. Una asimetría minúscima dejó materia suficiente: <span class=\"num\">un billón y uno frente a un billón</span>.",
        },
        {
          type: 'quote',
          text: "Sin ese desequilibrio, toda la masa (salvo la materia oscura) se habría aniquilado antes del primer segundo, dejando un cosmos de fotones y nada más.",
          attribution: "Neil deGrasse Tyson y Donald Goldsmith",
        },
        {
          type: 'key',
          html: "Vivimos gracias a un exceso ínfimo de materia sobre antimateria en el universo recién nacido.",
        },
        {
          type: 'paragraph',
          html: "Tras esa supervivencia material, el universo tuvo que liberar la luz que aún detectamos hoy.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Que brille la luz",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo leemos la historia cósmica si no solo vemos luz visible? La cosmología moderna descansa en todo el <span class=\"term\">espectro electromagnético</span> (desde rayos gamma hasta ondas de radio). Todos son fotones a la misma velocidad, con distinta energía.",
        },
        {
          type: 'paragraph',
          html: "Tras el Big Bang, durante <span class=\"num\">380.000 años</span> el universo fue opaco. Los fotones rebotaban en electrones libres. Al bajar la temperatura por debajo de ~<span class=\"num\">3.000 K</span>, los electrones se acoplaron a núcleos formando átomos. Ese instante se llama <span class=\"term\">tiempo de desacoplamiento</span> (cuando la luz quedó libre).",
        },
        {
          type: 'paragraph',
          html: "Esa radiación primordial, hoy enfriada a microondas (<span class=\"num\">2,73 K</span>), es la <span class=\"term\">radiación cósmica de fondo</span> (CBR). Sus patrones en el cielo guardan memoria de la materia justo antes de que formaran átomos. Por eso permiten inferir edad y forma del universo.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1964",
              "text": "Detección accidental de la CBR por Penzias y Wilson."
            },
            {
              "year": "1992",
              "text": "COBE confirma fluctuaciones en la CBR."
            },
            {
              "year": "2009–2013",
              "text": "Planck mapea la CBR con precisión sin precedentes."
            }
          ],
        },
        {
          type: 'key',
          html: "El universo nació en un destello de luz que sigue llenando el espacio. La expansión lo diluyó hasta el resplandor de microondas detectable hoy.",
        },
        {
          type: 'paragraph',
          html: "Pero la luz visible no basta para explicar toda la gravedad que medimos en el cosmos.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Que haya oscuridad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la gravedad pide más masa de la que brilla? La gravedad newtoniana y la de Einstein explican la materia visible. La mayor parte de la gravedad medida proviene de algo invisible: la <span class=\"term\">materia oscura</span> (masa que no emite luz).",
        },
        {
          type: 'paragraph',
          html: "El astrónomo <span class=\"person\">Fritz Zwicky</span> analizó en la década de <span class=\"num\">1930</span> el cúmulo de Coma. Está a <span class=\"num\">325 millones de años luz</span>. Las galaxias se mueven demasiado rápido para la masa visible. El cúmulo debería desintegrarse en cientos de millones de años, pero tiene más de <span class=\"num\">10.000 millones de años</span>.",
        },
        {
          type: 'paragraph',
          html: "La astrónoma <span class=\"person\">Vera Rubin</span> confirmó el patrón en galaxias espirales. Las estrellas en los bordes orbitan más rápido de lo que permite la materia luminosa. La materia oscura no emite luz ni interactúa electromagnéticamente. Solo se detecta por gravedad y constituye la mayor parte de la masa del universo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Materia oscura",
              "description": "Masa invisible detectada solo por efectos gravitatorios en cúmulos y galaxias.",
              "icon": "🌑"
            },
            {
              "title": "Cúmulo de Coma",
              "description": "Primer laboratorio donde la «masa faltante» resultó imposible de ignorar.",
              "icon": "🔭"
            },
            {
              "title": "MOND",
              "description": "Alternativa que modifica la gravedad a grandes distancias; la materia oscura sigue siendo la explicación dominante.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "El misterio más antiguo de la astronomía: la gravedad exige mucha más masa de la que vemos brillar.",
        },
        {
          type: 'paragraph',
          html: "Descubrir la materia oscura no agotó el lado oscuro del universo: faltaba otra pieza invisible.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Que haya más oscuridad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué más esconde el universo además de la materia que no brilla? Tiene un lado luminoso (estrellas, galaxias, planetas) y un lado oscuro. Ahí entran la materia oscura y la <span class=\"term\">energía oscura</span> (energía del espacio vacío que empuja la expansión).",
        },
        {
          type: 'paragraph',
          html: "El físico <span class=\"person\">Albert Einstein</span> introdujo la constante cosmológica en <span class=\"num\">1915</span> para «congelar» un universo estático. La llamó su «mayor error» tras el descubrimiento de Hubble de la expansión. En <span class=\"num\">1998</span> las supernovas tipo Ia demostraron que la expansión <em>acelera</em>: el vacío contiene energía repulsiva.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~31%",
              "label": "Densidad de materia (ΩM)"
            },
            {
              "value": "~69%",
              "label": "Densidad de energía oscura (ΩΛ)"
            },
            {
              "value": "~5%",
              "label": "Materia ordinaria (bariones)"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La energía oscura determina el destino cósmico: expansión eterna acelerada y cada vez más espacio vacío. El universo plano (Ω total ≈ 1) encaja con inflación y observaciones del CBR.",
        },
        {
          type: 'key',
          html: "Einstein inventó la constante cosmológica por error y el universo la necesitaba de verdad: el vacío empuja la expansión hacia adelante.",
        },
        {
          type: 'paragraph',
          html: "Medir esa expansión con precisión reveló una discordancia que hoy inquieta a los cosmólogos.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "¡Tensión en el cosmos!",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué dos métodos dan velocidades distintas de expansión? Miden la <span class=\"term\">constante de Hubble</span> (H₀, la tasa de recesión por megaparsec). Un método da ~<span class=\"num\">67</span> km/s/Mpc y otro ~<span class=\"num\">73</span>: una diferencia del ~10%.",
        },
        {
          type: 'paragraph',
          html: "El método de «velas estándar» usa supernovas tipo Ia en galaxias lejanas. El de «regla estándar» explota el tamaño del universo al desacoplamiento como regla cósmica expandida. Ese tamaño en la CBR es ~<span class=\"num\">420.000 años luz</span>.",
        },
        {
          type: 'paragraph',
          html: "Sin embargo, antes del telescopio Hubble, los valores de H₀ divergían por factor 2 (50 frente a 100). Que hoy la discordancia sea solo ~10% es progreso. Una tensión persistente podría abrir nueva física más allá del modelo estándar.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1929",
              "text": "Hubble establece la ley de expansión."
            },
            {
              "year": "1998",
              "text": "Supernovas revelan aceleración y energía oscura."
            },
            {
              "year": "2010s–",
              "text": "«Tensión cosmológica»: H₀ local vs H₀ del CBR no concilian."
            }
          ],
        },
        {
          type: 'key',
          html: "La precisión creciente reveló un nuevo enigma: ¿error sistemático o física desconocida en la historia del universo?",
        },
        {
          type: 'paragraph',
          html: "Esa tensión empuja a preguntar si vivimos en un universo especial o en uno entre muchos.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "¿Un universo o muchos?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué las densidades de materia y energía oscura son comparables justo ahora? Vivimos en un universo en expansión acelerada impulsado por energía oscura. La física cuántica predice energía del vacío, pero calculada ~<span class=\"num\">10¹²⁰</span> veces mayor que la observada.",
        },
        {
          type: 'paragraph',
          html: "¿Por qué ΩM (~0,31) y ΩΛ (~0,69) son comparables <em>ahora</em>, cuando durante casi toda la historia cósmica uno dominó al otro? El cosmólogo <span class=\"person\">Michael Turner</span> lo llama el «problema Nancy Kerrigan»: ¿por qué yo, por qué ahora?",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">principio antrópico</span> (solo universos aptos para observadores pueden ser estudiados) responde que solo en universos con galaxias, estrellas y vida puede haber observadores. El <span class=\"term\">multiverso</span> (infinitos universos con leyes aleatorias) explicaría por qué el nuestro tiene valores «apenas» aptos para vida, aunque la hipótesis es difícil de verificar.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Inflación",
              "description": "Expansión exponencial inicial; explica planitud y semillas cuánticas.",
              "icon": "🫧"
            },
            {
              "title": "Multiverso",
              "description": "Universos paralelos sin interacción; selección antrópica de constantes.",
              "icon": "🌌"
            },
            {
              "title": "Coincidencia Ω",
              "description": "Solo entre ~3 y ~50 mil millones de años post-Big Bang ΩM ≈ ΩΛ.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "La aceleración cósmica y la coincidencia de densidades empujan hacia multiverso y selección antrópica — o hacia física aún no descubierta.",
        },
        {
          type: 'paragraph',
          html: "Antes de especular sobre universos múltiples, hace falta entender cómo descubrimos que las galaxias existen.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Descubriendo las galaxias",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuándo dejó de ser el universo solo nuestra Vía Láctea? El astrónomo <span class=\"person\">William Herschel</span> construyó en <span class=\"num\">1789</span> un telescopio de 48 pulgadas. Antes de él, el cosmos conocido eran estrellas, planetas y nebulosas difusas dentro de la galaxia.",
        },
        {
          type: 'paragraph',
          html: "El espectroscopio reveló que las nebulosas espirales fuera del plano galáctico se alejan a velocidades enormes. En <span class=\"num\">1923</span>, el astrónomo <span class=\"person\">Edwin Hubble</span> encontró una variable Cefeida en Andrómeda. Estaba tan lejos que no podía pertenecer a nuestra galaxia. Andrómeda <em>es</em> otra galaxia, a millones de años luz.",
        },
        {
          type: 'paragraph',
          html: "Por eso, Hubble midió la relación distancia-velocidad de recesión: cuanto más lejos una galaxia, más rápido se aleja. El universo se expande. La lección es dejar de clasificar por apariencia y preguntar qué <em>es</em> cada objeto y a qué distancia.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1789",
              "text": "Herschel cartografía nebulosas del hemisferio norte."
            },
            {
              "year": "1923",
              "text": "Hubble identifica Cefeidas en Andrómeda."
            },
            {
              "year": "1929",
              "text": "Ley de Hubble: expansión del universo."
            }
          ],
        },
        {
          type: 'key',
          html: "Las «nubes» del cielo son islas de estrellas a distancias inconcebibles. Descubrirlas transformó nuestra escala cósmica.",
        },
        {
          type: 'paragraph',
          html: "Conocer galaxias distantes permite preguntar cómo surgió su estructura desde un universo casi uniforme.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "El origen de la estructura",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo pasó el universo de casi uniforme a cúmulos, galaxias y planetas? Tras el Big Bang, la materia era casi uniforme. Hoy forma estructura compleja. Eso exige unir <span class=\"term\">mecánica cuántica</span> (fluctuaciones minúsculas) con <span class=\"term\">relatividad general</span> (gravedad a gran escala), una unificación aún incompleta.",
        },
        {
          type: 'paragraph',
          html: "Los cosmólogos asumen un universo homogéneo e isotrópico (igual en promedio en todas partes y direcciones) a gran escala. A escalas locales, la densidad varía enormemente. La Tierra tiene ~<span class=\"num\">5,5 g/cm³</span>, pero el espacio intergaláctico tiene menos de un átomo cada <span class=\"num\">10 m³</span>.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">fluctuaciones cuánticas</span> (irregularidades minúsculas del vacío) durante la inflación se estiraron hasta volverse irregularidades gravitacionales. La materia oscura aceleró el colapso y el gas bariónico se calentó y formó estrellas. El modelo ΛCDM reproduce las observaciones del CBR y la estructura a gran escala.",
        },
        {
          type: 'key',
          html: "Galaxias y cúmulos nacieron de imperfecciones cuánticas amplificadas por gravedad y materia oscura.",
        },
        {
          type: 'paragraph',
          html: "Esa estructura estelar no sería posible sin el gas y el polvo que ocultan y alimentan las estrellas.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Polvo al polvo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la Vía Láctea tiene manchas oscuras si el espacio no está vacío? Esas manchas no son agujeros al vacío: son <span class=\"term\">nubes de gas y polvo</span> (material interestelar denso) que ocultan estrellas y albergan viveros estelares. En 1610, el astrónomo <span class=\"person\">Galileo</span> resolvió la banda lechosa en innumerables estrellas con su «catalejo».",
        },
        {
          type: 'paragraph',
          html: "El astrónomo <span class=\"person\">Jacobus Kapteyn</span> identificó en 1909 el <span class=\"term\">medio interestelar</span> (gas y polvo entre las estrellas). El polvo absorbe más la luz violeta que la roja. Ese enrojecimiento interestelar engaña las distancias.",
        },
        {
          type: 'paragraph',
          html: "Por eso, las nubes gigantes (~<span class=\"num\">100 K</span> o menos) colapsan bajo gravedad pese a rotación, turbulencia, presión y campos magnéticos.",
        },
        {
          type: 'paragraph',
          html: "Además, las estrellas en fase de <span class=\"term\">gigante roja</span> (fase tardía de evolución estelar) expulsan granos de polvo al espacio. En regiones como la nebulosa de Orión, miles de estrellas nacen de nubes de ~un millón de masas solares. El polvo y el gas son indispensables para una segunda generación estelar y para los elementos pesados que forman planetas y vida.",
        },
        {
          type: 'key',
          html: "Del polvo interestelar, literalmente, nacen las estrellas que iluminan el cosmos.",
        },
        {
          type: 'paragraph',
          html: "De esas estrellas jóvenes y sus discos de material surge la pregunta sobre cómo nacieron los planetas.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Cuando los mundos eran jóvenes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se formaron los planetas si los «siglos oscuros» cósmicos dejaron pocos datos observables sobre cómo la materia se organizó en estrellas y galaxias? Los planetas son aún más misteriosos: sabemos poco de cómo <em>empezaron</em> a formarse.",
        },
        {
          type: 'paragraph',
          html: "El filósofo <span class=\"person\">Immanuel Kant</span> propuso la hipótesis nebular. Un disco de gas y polvo alrededor de la estrella en formación condensa en planetas. Es superior a la de <span class=\"person\">James Jeans</span>, que postulaba encuentros estelares rarísimos. Los exoplanetas confirman que muchas estrellas tienen planetas, pero sus órbitas extrañas complican la teoría.",
        },
        {
          type: 'paragraph',
          html: "El astrofísico <span class=\"person\">Scott Tremaine</span> bromea con dos «leyes». Toda predicción teórica sobre exoplanetas es incorrecta, y lo más seguro es que la formación planetaria «no puede ocurrir» — aunque ocurre. Las estrellas jóvenes suelen tener <span class=\"term\">discos protoplanetarios</span> (discos de gas y polvo del tamaño del Sistema Solar).",
        },
        {
          type: 'key',
          html: "Los planetas existen pero su origen inicial sigue siendo uno de los enigmas más duros de la astrofísica.",
        },
        {
          type: 'paragraph',
          html: "Confirmar planetas alrededor de otras estrellas convirtió la especulación en un catálogo observacional.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Planetas más allá del Sistema Solar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuántos mundos hay más allá del Sol? Copérnico situó la Tierra entre los planetas del Sol, lo que sugiere mundos innumerables con posibles habitantes. El filósofo <span class=\"person\">Giordano Bruno</span> pagó con la vida en <span class=\"num\">1600</span> su defensa de mundos alienígenas.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1995</span> se confirmó el primer <span class=\"term\">exoplaneta</span> (planeta orbitando otra estrella). Luego llegaron los descubrimientos en avalancha. Hoy hay más de <span class=\"num\">5.000</span> mundos conocidos con órbitas, tamaños y composiciones diversos. Algunos están en la <span class=\"term\">zona habitable</span> (distancia donde el agua líquida es posible).",
        },
        {
          type: 'paragraph',
          html: "Además, los métodos de detección incluyen la velocidad radial (wobble estelar), los tránsitos (atenuación de luz), las microlentes gravitacionales y la imagen directa. Los exoplanetas son laboratorio cósmico para preguntar cuándo y cómo surge la vida más allá del Sistema Solar.",
        },
        {
          type: 'key',
          html: "De la especulación pasamos a un catálogo de miles de mundos. La pregunta ya no es «¿hay planetas?» sino «¿cuántos son habitables?».",
        },
        {
          type: 'paragraph',
          html: "Miles de planetas plantean si la vida es un fenómeno cósmico general o un accidente terrestre.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Vida en el universo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué podemos inferir sobre vida alienígena si solo conocemos la terrestre? Conocemos un solo ejemplo, la vida basada en ADN. La astrobiología infiere principios generales desde la química y la historia de la Tierra. Evita el <span class=\"term\">antropomorfismo</span> (proyectar formas humanas en lo desconocido) porque carece de comparaciones múltiples.",
        },
        {
          type: 'paragraph',
          html: "El astrónomo <span class=\"person\">Frank Drake</span> formuló en los años 60 la <span class=\"term\">ecuación de Drake</span> (marco para estimar civilizaciones detectables). Multiplica seis factores inciertos, desde cuántas estrellas tienen planetas hasta cuánto dura una civilización tecnológica.",
        },
        {
          type: 'paragraph',
          html: "La detección masiva de exoplanetas inclina hacia el optimismo sobre vida abundante. Cada término de Drake sigue incierto. Resultados negativos fortalecerían el pesimismo. Hallazgos positivos en el Sistema Solar sugerirían vida común en la galaxia.",
        },
        {
          type: 'list',
          items: [
            "**Estrellas longevas** — la mayoría dura cientos de millones o miles de millones de años.",
            "**Planetas habitables** — requieren temperatura, solvente líquido y elementos estructurales.",
            "**Civilización tecnológica** — capaz de señales interstelares; su longevidad es el factor más desconocido."
          ],
        },
        {
          type: 'key',
          html: "Drake resume nuestra ignorancia: sabemos contar estrellas y planetas mejor que originar o sostener civilizaciones.",
        },
        {
          type: 'paragraph',
          html: "Antes de buscar vida lejos, hay que entender cómo pudo surgir la primera vez en la Tierra.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "El origen de la vida en la Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué cuenta como vida si el fuego también se propaga? Tyson define la vida de forma operativa como conjuntos de objetos que se <span class=\"term\">reproducen y evolucionan</span> (copian variaciones heredables). El fuego también se autorreplica, así que eso no basta. Hay que seguir poblaciones en el tiempo.",
        },
        {
          type: 'paragraph',
          html: "La vida terrestre se compone sobre todo de hidrógeno, oxígeno, carbono y nitrógeno. Son cuatro de los seis elementos más abundantes del universo. El helio y el neón son inertes. El principio copernicano favorece que la vida alienígena use la misma química cósmica.",
        },
        {
          type: 'paragraph',
          html: "El origen exacto en la Tierra (~<span class=\"num\">4.000–4.600 millones de años</span> atrás) carece de registro fósil claro. Los experimentos de <span class=\"person\">Miller-Urey</span> (<span class=\"num\">1953</span>) muestran aminoácidos desde atmósferas primitivas simuladas. Las hipótesis del ARN primero, la quimiosíntesis en fumarolas o la panspermia siguen en debate.",
        },
        {
          type: 'key',
          html: "La vida usa los ingredientes más comunes del cosmos. Cómo se ensamblaron la primera vez sigue en la niebla del eón Hadeano.",
        },
        {
          type: 'paragraph',
          html: "Si la vida pudo surgir aquí, el siguiente paso es buscarla en los mundos vecinos del Sistema Solar.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Buscando vida en el Sistema Solar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué condiciones generales exige la astrobiología para la vida? Cuatro: fuente de energía, átomo estructurador (carbono en la Tierra), <span class=\"term\">solvente líquido</span> (agua aquí) y tiempo suficiente para evolucionar.",
        },
        {
          type: 'paragraph',
          html: "El carbono forma hasta cuatro enlaces débiles y versátiles. El silicio, favorito de la ciencia ficción, enlaza fuerte con oxígeno en rocas estables y resulta poco apto para metabolismo acuoso. Por eso la vida alienígena probablemente también será <span class=\"term\">basada en carbono</span> (química orgánica como la terrestre).",
        },
        {
          type: 'paragraph',
          html: "Los candidatos en el Sistema Solar incluyen Marte (pasado húmedo), Europa y Encélado (océanos subterráneos bajo hielo), Titán (lagos de hidrocarburos) y Ceres. Ningún hallazgo concluyente aún, pero las misiones siguen activas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Marte",
              "description": "Evidencia de agua antigua; búsqueda de biosfirmas y fósiles microbianos.",
              "icon": "🔴"
            },
            {
              "title": "Europa / Encélado",
              "description": "Géiseres y océanos internos alimentados por calor de marea.",
              "icon": "🧊"
            },
            {
              "title": "Titán",
              "description": "Atmósfera densa; química orgánica en superficie fría.",
              "icon": "🪐"
            }
          ],
        },
        {
          type: 'key',
          html: "En nuestro vecindario, la vida, si existe, será probablemente microbiana y estará ligada al agua o a solventes alternativos bajo hielo.",
        },
        {
          type: 'paragraph',
          html: "El Sistema Solar solo puede albergar formas primitivas; la vida compleja exige mirar exoplanetas en la galaxia.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "Buscando vida en la Vía Láctea",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Estamos solos en una galaxia de <span class=\"num\">100.000 millones</span> de estrellas? Para vida <em>compleja</em> hay que mirar exoplanetas, porque en el Sistema Solar solo se esperan formas primitivas. Ya hay ~<span class=\"num\">5.000 exoplanetas</span> catalogados, y los dos primeros términos de Drake apuntan alto.",
        },
        {
          type: 'paragraph',
          html: "En el escenario optimista, con fracciones del 10% en cada paso, habría ~<span class=\"num\">1.000</span> civilizaciones activas. En el escenario pesimista (1 en 10.000 cada paso) implica ~<span class=\"num\">0,001</span> civilizaciones: estaríamos solos en la media. Los términos de habitabilidad, origen, inteligencia y longevidad civilizatoria siguen casi tan inciertos como antes.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">SETI</span> (búsqueda de inteligencia extraterrestre) busca señales de radio u ópticas artificiales sin éxito concluyente. Explorar la galaxia entera tardaría millones de años, y la escucha electromagnética es el método viable. Detectar biosfirmas espectroscópicas en atmósferas exoplanetarias es la próxima frontera.",
        },
        {
          type: 'key',
          html: "La pregunta «¿estamos solos?» se decide midiendo, no viajando: telescopios y radiotelescopios son nuestros ojos en la galaxia.",
        },
      ],
    },
    {
      id: "coda",
      num: "—",
      title: "La búsqueda de nosotros mismos en el cosmos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué sentidos necesitamos para leer el universo completo? Los cinco sentidos humanos son asombrosos pero estrechos. La ciencia moderna añade docenas de «sentidos» artificiales que convierten datos en formas que podemos interpretar.",
        },
        {
          type: 'paragraph',
          html: "Esos instrumentos incluyen telescopios, microscopios, espectrómetros de masas y detectores de radiación gravitacional. Ojos sintonizables en radio, microondas o rayos gamma habrían revelado antes la expansión, el CBR y los agujeros negros. Casi ningún descubrimiento del siglo XX vino de los sentidos directos: vino de matemática y hardware que trasciende la experiencia cotidiana.",
        },
        {
          type: 'quote',
          text: "Equipados con nuestros cinco sentidos, junto con telescopios y microscopios y espectrómetros de masas y… detectores de radiación gravitacional, exploramos el universo y llamamos a la aventura ciencia.",
          attribution: "Parafraseando a Edwin Hubble, por Tyson y Goldsmith",
        },
        {
          type: 'key',
          html: "Cada nuevo detector es una ventana cósmica. La búsqueda de nuestro lugar en el universo nos revela también quiénes somos.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Big Bang",
    "description": "Expansión del universo desde estado caliente y denso; no una explosión en el espacio sino expansión del espacio mismo."
  },
  {
    "title": "E = mc²",
    "description": "Equivalencia masa-energía; base de nucleosíntesis, estrellas y pares materia-antimateria."
  },
  {
    "title": "Radiación cósmica de fondo (CBR)",
    "description": "Fotones liberados ~380.000 años post-Big Bang; hoy microondas a 2,73 K."
  },
  {
    "title": "Materia oscura",
    "description": "Masa gravitatoria invisible; ~85% de la materia del universo."
  },
  {
    "title": "Energía oscura",
    "description": "Energía del vacío que acelera la expansión; ~69% del contenido energético."
  },
  {
    "title": "Constante de Hubble (H₀)",
    "description": "Tasa actual de expansión; objeto de la «tensión cosmológica»."
  },
  {
    "title": "Inflación cósmica",
    "description": "Expansión exponencial ultra-rápida en los primeros instantes."
  },
  {
    "title": "Multiverso",
    "description": "Hipótesis de infinitos universos con parámetros distintos; explicación antrópica."
  },
  {
    "title": "Exoplaneta",
    "description": "Planeta orbitando una estrella distinta del Sol; >5.000 catalogados."
  },
  {
    "title": "Ecuación de Drake",
    "description": "Marco para estimar civilizaciones comunicativas en la galaxia."
  }
],
  chronology: [
  {
    "year": "1610",
    "text": "Galileo resuelve la Vía Láctea en estrellas con telescopio."
  },
  {
    "year": "1789",
    "text": "Herschel construye el mayor telescopio de su época."
  },
  {
    "year": "1905",
    "text": "Einstein publica E = mc² y relatividad especial."
  },
  {
    "year": "1915",
    "text": "Einstein completa relatividad general y constante cosmológica."
  },
  {
    "year": "1929",
    "text": "Hubble demuestra expansión del universo."
  },
  {
    "year": "1932",
    "text": "Anderson descubre el positrón."
  },
  {
    "year": "1933",
    "text": "Zwicky detecta materia faltante en el cúmulo de Coma."
  },
  {
    "year": "1964",
    "text": "Penzias y Wilson detectan la CBR."
  },
  {
    "year": "1995",
    "text": "Primer exoplaneta confirmado alrededor de estrella tipo solar."
  },
  {
    "year": "1998",
    "text": "Supernovas tipo Ia revelan aceleración cósmica y energía oscura."
  },
  {
    "year": "2017",
    "text": "Primera detección directa de ondas gravitacionales (LIGO/Virgo)."
  },
  {
    "year": "2020s",
    "text": "Miles de exoplanetas; tensión en H₀; JWST imagen profunda del universo temprano."
  }
],
  figures: [
  {
    "name": "Albert Einstein",
    "role": "Relatividad, E = mc², constante cosmológica · unificó espacio, tiempo y gravedad"
  },
  {
    "name": "Edwin Hubble",
    "role": "Ley de expansión · probó que Andrómeda es galaxia externa"
  },
  {
    "name": "Fritz Zwicky",
    "role": "Materia oscura en el cúmulo de Coma · astrofísico prolífico y polémico"
  },
  {
    "name": "Vera Rubin",
    "role": "Curvas de rotación galácticas · evidencia sistemática de materia oscura"
  },
  {
    "name": "Paul Dirac",
    "role": "Ecuación que predijo la antimateria"
  },
  {
    "name": "Carl Anderson",
    "role": "Descubridor experimental del positrón (1932)"
  },
  {
    "name": "Frank Drake",
    "role": "Ecuación de Drake · pionero del SETI"
  },
  {
    "name": "Immanuel Kant",
    "role": "Hipótesis nebular de formación planetaria"
  },
  {
    "name": "Neil deGrasse Tyson y Donald Goldsmith",
    "role": "Coautores de Origins; divulgación y síntesis interdisciplinaria"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El cosmos tiene una historia continua de catorce mil millones de años.",
  "Desde física extrema y antimateria hasta luz, oscuridad y estructura.",
  "Por eso, la ciencia une astrofísica, química y biología para contar esa historia.",
  "Cada nuevo instrumento amplía sentidos que la evolución no nos dio.",
  "Explorar el universo es buscarnos a nosotros mismos en el cosmos."
],
    highlight: "Somos polvo de estrellas que aprendió a preguntarse de dónde vino.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Neil deGrasse Tyson y Donald Goldsmith",
    line2: "\"Origins: Fourteen Billion Years of Cosmic Evolution\" · W. W. Norton · 2.ª ed. revisada",
  },
}
