import type { BookSummary } from '../types/book'

export const intelligentLifeUniverse: BookSummary = {
  slug: "intelligent-life-universe",
  meta: {
    title: "Intelligent Life in the Universe",
    subtitle: "Principios y requisitos de su aparición",
    author: "Peter Ulmschneider",
    meta: [
      "📖 2006 · 2.ª ed. Springer (Advances in Astrobiology and Biogeophysics)",
      "✍️ Actualizado con cap. geológico sobre la Tierra y avances 2003–2006",
    ],
    titleEs: "Vida inteligente en el universo",
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
    "label": "Estrellas, galaxias y origen de los elementos químicos"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Formación de planetas"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "La Tierra"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Búsqueda de exoplanetas"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Planetas aptos para la vida"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Vida y su origen en la Tierra"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Evolución"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Búsqueda de vida extraterrestre"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Futuro de la humanidad"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Vida inteligente extraterrestre"
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
      title: "¿Estamos solos?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Una de las preguntas más apasionantes para la humanidad es si estamos solos en el universo. Desde la prehistoria hasta la antigüedad se creyó en seres inteligentes no humanos. Hoy la ciencia muestra que, desde la revolución copernicana, todo intento de definir nuestra posición como excepcional ha fracasado.",
        },
        {
          type: 'paragraph',
          html: "Si otras civilizaciones existen, ¿cómo encontrarlas? ¿Por qué no hay rastro astronómico ni terrestre de ellas pese a los avances tecnológicos? ¿Son demasiado pocas las planetas habitables, o la vida (y sobre todo la inteligencia) es un evento extremadamente raro? <span class=\"person\">Ulmschneider</span> organiza el libro en tres partes: planetas, vida e inteligencia.",
        },
        {
          type: 'paragraph',
          html: "La segunda edición (<span class=\"num\">2006</span>) añade el capítulo geológico sobre la Tierra (tectónica de placas, conquista de la tierra por plantas y animales) y actualiza avances recientes: búsqueda de planetas, secuenciación del ancestro común universal (LUCA) y comprensión de la inteligencia animal en primates, delfines y cuervos.",
        },
        {
          type: 'quote',
          text: "«La singularidad de la inteligencia humana es consecuencia de un cerebro muy grande y de nuestras excepcionales especializaciones en comunicación y uso de herramientas.»",
          attribution: "Peter Ulmschneider",
        },
        {
          type: 'key',
          html: "La inteligencia tecnológica humana está ligada a la vida en tierra: manos libres, visión aguda y vida social en grupo son requisitos evolutivos, no accidentes cosméticos.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Estrellas, galaxias y origen de los elementos químicos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La vida, aquí y probablemente en otros mundos, surge en estrecha asociación con planetas, estrellas y galaxias. Los organismos vivos y los planetas están hechos de elementos sintetizados en estrellas. Comprender su historia es el primer paso hacia la astrobiología.",
        },
        {
          type: 'paragraph',
          html: "Hace unos <span class=\"num\">14 mil millones de años</span> el universo apareció en el <span class=\"term\">Big Bang</span>. La ley de Hubble (<span class=\"person\">Edwin Hubble</span>, <span class=\"num\">1924</span>) y la radiación cósmica de fondo de <span class=\"num\">3 K</span> confirman un origen caliente y denso. Un millón de años después se formaron H y He. Cien millones de años más tarde el universo se enfrió por debajo de <span class=\"num\">300 K</span> y entró en una «edad oscura» de ~1 mil millones de años.",
        },
        {
          type: 'paragraph',
          html: "Luego aparecieron las primeras estrellas (<span class=\"term\">población III</span>): muy masivas (<span class=\"num\">100–300 M☉</span>), de vida corta, que fusionaron elementos hasta el Fe y los expulsaron en supernovas. Generaciones sucesivas enriquecieron el medio interestelar hasta formar la mezcla metálica de la <span class=\"term\">población I</span>, de la que nació el Sol y los planetas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Nubes moleculares",
              "description": "Hasta 10⁶ M☉; núcleos fríos (5–10 K) donde nace el colapso gravitacional.",
              "icon": "☁️"
            },
            {
              "title": "Secuencia principal",
              "description": "Fusión H→He en el núcleo; etapa estable donde permanece la mayoría de las estrellas.",
              "icon": "⭐"
            },
            {
              "title": "Supernova",
              "description": "Expulsión de elementos pesados; enriquece el medio para nuevas generaciones estelares.",
              "icon": "💥"
            },
            {
              "title": "Relojes radiométricos",
              "description": "Decaimiento de isótopos (p. ej. ²⁶Al, ²³⁸U) data meteoritos y formación planetaria.",
              "icon": "🕐"
            }
          ],
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~14 Ga",
              "label": "Edad del universo (Big Bang)"
            },
            {
              "value": "~10¹¹ M☉",
              "label": "Masa de la Vía Láctea"
            },
            {
              "value": "~10¹¹",
              "label": "Estrellas en nuestra galaxia"
            },
            {
              "value": "1 pc = 3,26 Ly",
              "label": "Unidad astronómica de distancia"
            }
          ],
        },
        {
          type: 'key',
          html: "Sin estrellas no hay carbono ni metales; la química de la vida es herencia directa de la evolución estelar y galáctica.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Formación de planetas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los planetas no se forman solos: son subproducto inevitable del colapso gravitacional de gas y polvo interestelar, que produce discos de acreción que alimentan la protostrella y dan origen a planetesimales.",
        },
        {
          type: 'paragraph',
          html: "En el <span class=\"term\">disco solar</span>, la fricción entre material interno y externo desacelera la rotación y permite que la materia migre hacia la estrella. La temperatura decrece con la distancia. Cerca del Sol (menos de <span class=\"num\">3 AU</span>) se acumulan silicatos y hierro. Más allá de la <span class=\"term\">línea de hielo</span> (~150 K, ~3 AU) dominan los granos de hielo (H₂O).",
        },
        {
          type: 'paragraph',
          html: "El polvo sedimenta en el plano ecuatorial del disco. Fuerzas eléctricas aglutinan granos menores de 1 μm hasta ~1 mm en ~10 000 años, y cuerpos de ~10 km (planetesimales tipo Ceres) en ~100 000 años. Simulaciones de <span class=\"person\">Wetherill</span> muestran que de ~500 planetesimales entre 0,4 y 2 AU quedan pocos protoplanetas en decenas de millones de años.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Planetas jovianos",
              "description": "Más allá de la línea de hielo; H₂ y He con núcleo rocoso.",
              "icon": "🪐"
            },
            {
              "title": "Planetas terrestres",
              "description": "Zona interior; silicatos e hierro, poca agua incorporada.",
              "icon": "🌍"
            },
            {
              "title": "Migración joviana",
              "description": "Júpiteres pueden desplazarse hacia la estrella y perturbar planetas interiores.",
              "icon": "🔄"
            },
            {
              "title": "Cinturón de Kuiper",
              "description": "Objetos helados pequeños en la periferia del sistema.",
              "icon": "☄️"
            }
          ],
        },
        {
          type: 'key',
          html: "La temperatura del disco determina la composición química de cada planeta; la Tierra se formó seca en la zona caliente interior.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La vida está ligada a planetas terrestres. La Tierra tiene propiedades esenciales: <span class=\"term\">tectónica de placas</span> que creó continentes y división tierra-mar, una Luna estabilizadora y condiciones en la Tierra primitiva que permitieron el origen de la vida.",
        },
        {
          type: 'paragraph',
          html: "La acumulación por planetesimales terminó ~<span class=\"num\">30–40 Ma</span> después del inicio del sistema solar (<span class=\"num\">4,567 Ga</span>). El bombardeo intenso duró ~600 Ma más, con impactos del tamaño de Ceres, la Luna o Marte que vaporizaban océanos enteros.",
        },
        {
          type: 'paragraph',
          html: "La Luna se formó por impacto de un planetesimal del tamaño de Marte con la proto-Tierra hace <span class=\"num\">4,527 Ga</span>. Los núcleos metálicos se fusionaron y el manto ligero salió expulsado. Inicialmente orbitaba a ~3,6 radios terrestres. Las mareas frenaron la rotación de 5 h a 24 h y alejaron la Luna hasta ~63 radios terrestres.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "4,567 Ga",
              "text": "Inicio del sistema solar; acumulación de planetesimales."
            },
            {
              "year": "4,527 Ga",
              "text": "Impacto gigante que forma la Luna."
            },
            {
              "year": "~4,2 Ga",
              "text": "Cesan los impactos que vaporizan océanos completos."
            },
            {
              "year": "~3,9 Ga",
              "text": "Fin del bombardeo intenso tardío."
            },
            {
              "year": "~470 Ma",
              "text": "Vida domina la tierra firme tras ~3,5 Ga en los océanos."
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La sismología revela núcleo de hierro-níquel, manto silicatado y corteza. El campo magnético y la expansión del suelo oceánico confirman la tectónica de placas: convección del manto, puntos calientes y deriva continental. Marte y Venus probablemente carecen de tectónica activa comparable.",
        },
        {
          type: 'key',
          html: "Sin tierra firme y tectónica activa, la inteligencia capaz de comunicación interestelar —ligada a manos libres en tierra— sería improbable.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Búsqueda de exoplanetas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hasta <span class=\"num\">1995</span> los exoplanetas eran teóricos. En octubre de <span class=\"num\">2005</span> ya se habían detectado más de <span class=\"num\">165</span> alrededor de estrellas de secuencia principal. Todos eran tipo Júpiter, inhóspitos para la vida.",
        },
        {
          type: 'paragraph',
          html: "Las estrellas fusionan H en el núcleo (masa superior a <span class=\"num\">0,075 M☉</span>). Los planetas tienen menos de 13 M<sub>Júpiter</sub>. Entre ambos, las <span class=\"term\">enanas marrones</span> (13–75 M<sub>J</sub>) queman deuterio brevemente. Un tercio de los exoplanetas detectados supera 2 M<sub>J</sub>. El más pequeño (Gliese 876 d) tiene 7,3 M<sub>Tierra</sub>. Curiosamente, la mitad orbita dentro de 0,5 AU, mucho más cerca que Mercurio, contrario a la teoría clásica de formación joviana más allá de 3 AU.",
        },
        {
          type: 'paragraph',
          html: "Los métodos de búsqueda incluyen <span class=\"term\">velocidad radial</span> (variaciones Doppler de la estrella, usada en todos los de la Tabla 4.1), tránsitos, microlentes gravitacionales e, en el futuro, imagen directa (requiere telescopios de decenas de km o interferometría espacial). La detección directa permitiría analizar atmósferas buscando H₂O y O₃ como biosignaturas.",
        },
        {
          type: 'list',
          items: [
            "**Velocidad radial** — La estrella oscila alrededor del baricentro; Júpiter desplaza al Sol ~780 000 km (10 % del radio solar).",
            "**Tránsito** — Atenuación periódica del brillo estelar al pasar el planeta.",
            "**Microlente** — Curvatura de la luz por gravedad de un sistema estelar lejano.",
            "**Disco circumestelar** — Polvo residual indica formación planetaria en curso o reciente."
          ],
        },
        {
          type: 'key',
          html: "Los «Júpiteres calientes» probablemente reflejan sesgo observacional, no la distribución real de planetas en la galaxia.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Planetas aptos para la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Buscar vida inteligente implica buscar planetas tipo Tierra. La mayoría de organismos son vulnerables. Los extremófilos terrestres se adaptaron por selección darwiniana, pero no contradicen que la vida florece en condiciones benignas.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">carbono</span> es excepcional: más de 10 millones de compuestos orgánicos frente a ~200 000 inorgánicos. Cuatro enlaces covalentes permiten estructuras espaciales complejas. El CO₂ es gas biológicamente activo, a diferencia del SiO₂ sólido. La vida extraterrestre probablemente también usará química orgánica.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">zona habitable</span> (ecosfera) solar se estima entre <span class=\"num\">0,7 y 1,4 AU</span> (flujo solar puede variar factor 4). La <span class=\"term\">zona habitables continuamente habitable</span> (CHZ), considerando el aumento de luminosidad solar y estabilidad atmosférica, se estrecha a <span class=\"num\">0,95–1,01 AU</span> según Ulmschneider (basado en Kasting, Hart y efectos de Júpiter sobre Marte).",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Efecto invernadero",
              "description": "CO₂ atrapa calor; descontrol → invernadero runaway (Venus) o glaciation irreversible (Marte).",
              "icon": "🌡️"
            },
            {
              "title": "Ciclo carbonato-silicato",
              "description": "Termostato geológico: CO₂ liberado por volcanismo, secuestrado por meteorización.",
              "icon": "🔄"
            },
            {
              "title": "Masa planetaria",
              "description": "Gravedad debe retener atmósfera y océanos; lunas pequeñas los pierden.",
              "icon": "🌊"
            },
            {
              "title": "Fórmula de Drake (parte astronómica)",
              "description": "N_HP = N_S × f_P × n_E estima planetas habitables en la galaxia.",
              "icon": "📡"
            }
          ],
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~4×10⁶",
              "label": "Planetas tipo Tierra habitables en la Vía Láctea (estimación de Ulmschneider)"
            },
            {
              "value": "~4×10¹⁷",
              "label": "Planetas habitables en el universo observable"
            },
            {
              "value": "1/40 000",
              "label": "Proporción de estrellas con planeta en CHZ"
            },
            {
              "value": "~6 %",
              "label": "Sistemas sin migración joviana que destruya planetas terrestres"
            }
          ],
        },
        {
          type: 'key',
          html: "Un planeta apto para inteligencia necesita masa, atmósfera, agua líquida, estrella estable (G, población I) y permanecer en la CHZ durante miles de millones de años.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Vida y su origen en la Tierra",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es la vida? Tras secuenciar organismos primitivos, incluidas micoplasmas con ~300 genes, la definición precisa está al alcance. Fenomenológicamente: metabolismo, crecimiento, uso de energía, individualidad, reproducción y mutación en ambiente abiótico. Los virus no califican.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Aristóteles</span> distinguió tres niveles: vegetativo (plantas), sensitivo (animales) y consciente (humano). Ulmschneider pregunta si la naturaleza reserva etapas aún más sofisticadas para la humanidad y los extraterrestres.",
        },
        {
          type: 'paragraph',
          html: "La bioquímica terrestre se basa en cuatro clases de compuestos: <span class=\"term\">proteínas</span> (20 aminoácidos L-quirales codificados por ADN), <span class=\"term\">carbohidratos</span>, <span class=\"term\">lípidos</span> y <span class=\"term\">ácidos nucleicos</span> (ADN/ARN). El código genético traduce tripletes de bases en aminoácidos. El ATP es la moneda energética.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "ADN",
              "description": "Archivo maestro de doble hélice; A-T y G-C emparejados.",
              "icon": "🧬"
            },
            {
              "title": "ARN",
              "description": "Blueprint para síntesis proteica; ribozimas pueden catalizar reacciones.",
              "icon": "📋"
            },
            {
              "title": "Células",
              "description": "Unidad básica; eucariotas con núcleo y orgánulos (endosimbiosis).",
              "icon": "🔬"
            },
            {
              "title": "Experimento Urey-Miller",
              "description": "Aminoácidos abióticos en atmósfera reductora simulada (1953).",
              "icon": "🧪"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Las teorías del origen incluyen (1) mundo del ARN, difícil sin ribozimas previas, (2) arcilla autorreplicante (<span class=\"person\">Cairns-Smith</span>), (3) <span class=\"term\">mundo hierro-azufre</span> de Wächtershäuser en chimeneas hidrotermales y (4) «fumadores negros» con microcavernas (<span class=\"person\">Martin & Russell</span>). El LUCA sigue buscándose. Ulmschneider concluye: no sabemos el detalle, pero debe haber una ruta química plausible.",
        },
        {
          type: 'key',
          html: "Una vez iniciada, la competencia darwiniana seleccionó los organismos más eficientes; el origen exacto sigue abierto, no su plausibilidad general.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Evolución",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿La vida extraterrestre evolucionaría hacia la inteligencia? En la Tierra, las primeras células aparecieron en pocos cientos de millones de años. Los eucariotas y la multicelularidad tardaron ~3 Ga más. La inteligencia humana, otros ~800 Ma. Dos motores impulsan el cambio: mutación (azar) y selección natural (direccional).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Darwin</span> argumentó que, en la lucha por la supervivencia, mutaciones aleatorias del ADN producen variantes y la selección favorece las más eficientes. Incluso ventajas pequeñas, con tiempo suficiente, dominan. El debate persiste: ¿la selección predice inteligencia a largo plazo o solo adaptaciones locales? Ulmschneider argumenta que la <span class=\"term\">convergencia evolutiva</span> (p. ej. inteligencia en cuervos comparable a monos) demuestra direccionalidad impuesta por las leyes naturales.",
        },
        {
          type: 'paragraph',
          html: "Entre los hitos evolutivos figuran la endosimbiosis (mitocondrias, cloroplastos) hacia eucariotas, el oxígeno como catástrofe ambiental (~2,4 Ga), la multicelularidad y los genes <span class=\"term\">HOX</span> (~630–542 Ma, explosión ediacárica), la conquista de la tierra por plantas (~470 Ma, Ordovícico) y animales, y el evento K/T (<span class=\"num\">65 Ma</span>, impacto de ~10 km), que extinguió dinosaurios no aviares y abrió camino a mamíferos.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "~3,5 Ga",
              "text": "Primeras células procariotas en océanos."
            },
            {
              "year": "~2,4 Ga",
              "text": "Gran oxidación; atmósfera rica en O₂."
            },
            {
              "year": "~470 Ma",
              "text": "Primeras plantas vasculares en tierra firme."
            },
            {
              "year": "~65 Ma",
              "text": "Impacto K/T; extinción masiva, radiación de mamíferos."
            },
            {
              "year": "~2,5 Ma",
              "text": "Homo habilis; primeras herramientas de piedra."
            },
            {
              "year": "~200 ka",
              "text": "Homo sapiens anatómicamente moderno."
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La inteligencia humana requiere visión estereoscópica (árbol → sabana), bipedestación con manos libres, vida social, cerebro grande (~30 000 genes), lenguaje y cultura de herramientas. Desde Australopithecus hasta H. sapiens, el volumen cerebral se triplicó. La conquista de la tierra, con mutualismo plantas-animales y selvas tropicales, fue condición previa para primates e inteligencia tecnológica.",
        },
        {
          type: 'key',
          html: "Acumular información (genes → cultura) es la estrategia evolutiva ganadora; las mismas leyes de la naturaleza deberían producir inteligencia en planetas similares.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Búsqueda de vida extraterrestre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Dos vías: buscar directamente (Sistema Solar y exoplanetas) o inferir probabilidades estudiando el origen terrestre. Hasta ahora, sin detección confirmada — pero las técnicas mejoran rápidamente.",
        },
        {
          type: 'paragraph',
          html: "En el Sistema Solar, <span class=\"term\">Europa</span> (Júpiter) tiene océano subsuperficial bajo hielo. La vida primitiva es posible. <span class=\"term\">Marte</span> tuvo ríos, deltas y océano norteño. Mantuvo atmósfera densa de CO₂ durante cientos de millones de años, luego sufrió glaciation irreversible al cesar la tectónica (~2 Ga). Las misiones Viking (<span class=\"num\">1976</span>) no detectaron vida. Los meteoritos marcianos (ALH84001) suscitaron debate sobre fósiles microscópicos.",
        },
        {
          type: 'paragraph',
          html: "Fuera del Sistema Solar conviene detectar H₂O (banda ~8 μm), O₂ y O₃. Son biosignaturas: O₂ de fotosíntesis, O₃ fotoquímico. Lovelock (<span class=\"num\">1965</span>) señaló que la vida produce compuestos fuera del equilibrio termodinámico. El metano terrestre es 10¹⁴ veces más abundante de lo esperado. El espectro infrarrojo de la Tierra muestra H₂O y O₃. Venus y Marte solo CO₂ dominante.",
        },
        {
          type: 'list',
          items: [
            "**Viking** — Tres experimentos bioquímicos en Marte; resultados ambiguos, interpretados como abióticos.",
            "**Mars Express / Odyssey** — Hielo subsuperficial detectado; radar revela depósitos de agua bajo el casquete polar.",
            "**Biosignaturas IR** — CH₄ (7,6 μm) indicaría bacterias metanogénicas en Tierra primitiva; O₃ indica fotosíntesis &gt;2 Ga."
          ],
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">OVNI</span> generaron miles de avistamientos desde <span class=\"num\">1947</span> (Kenneth Arnold). El informe Condon (<span class=\"num\">1969</span>) concluyó que 21 años de estudio no añadieron conocimiento científico. Engelados deliberados y malinterpretaciones explican la mayoría de casos.",
        },
        {
          type: 'key',
          html: "La detección de O₃ y H₂O en exoplanetas terrestres será el método más prometedor para vida; SETI por radio se trata en el capítulo 10.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Futuro de la humanidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Reflexionar sobre el futuro humano ilumina la naturaleza de civilizaciones extraterrestres avanzadas. Ulmschneider describe tres desarrollos paralelos: conquista del espacio, dominio de la biología e inteligencia artificial.",
        },
        {
          type: 'paragraph',
          html: "La colonización del Sistema Solar incluye estaciones espaciales, bases lunares y marcianas, y minería de asteroides cercanos a la Tierra. Hábitats de <span class=\"person\">O'Neill</span>, cilindros rotatorios de ~6 km × 30 km con «valles» iluminados artificialmente, podrían albergar hasta 20 millones de personas, autosuficientes industrialmente.",
        },
        {
          type: 'paragraph',
          html: "El viaje interestelar es lento: con ~100 km/s, α Centauri requiere ~12 000 años. A c/20 (~15 000 km/s), ~80 años. Probablemente solo sondas no tripuladas (<span class=\"term\">sondas von Neumann</span> que se autorreplican) en los próximos siglos. Androides miniaturizados con reloj biológico ralentizado facilitarían viajes de siglos.",
        },
        {
          type: 'paragraph',
          html: "El dominio biológico avanza con la secuenciación del genoma humano (<span class=\"num\">2001–2003</span>, ~3,2 mil millones de bases, ~30 000 genes), la creación de vida mínima en laboratorio a partir de micoplasmas (~300 genes) y la comprensión del envejecimiento (telómeros, apoptosis). Sociedades conectadas mentalmente y androides autoconscientes son especulaciones para el siglo XXI.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Guerra y terrorismo",
              "description": "Mayor peligro actual: destrucción deliberada global (armas nucleares, biológicas).",
              "icon": "☢️"
            },
            {
              "title": "Volcanismo extremo",
              "description": "Supervolcanes pueden alterar clima global; riesgo no despreciable.",
              "icon": "🌋"
            },
            {
              "title": "Impactos",
              "description": "Programa Spaceguard identifica asteroides &gt;1 km; impacto K/T evaporó 30 cm de océano.",
              "icon": "☄️"
            },
            {
              "title": "L de Drake",
              "description": "Incertidumbre máxima: ¿cuánto dura una civilización tecnológica comunicante?",
              "icon": "💀"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Los peligros externos (supernovas, rayos gamma, impactos) son poco probables como extinción total. Los peligros internos (daño ambiental, invenciones incontrolables, guerra) son los formidables. Estrategias de supervivencia: distribuir la humanidad en colonias espaciales, controlar armas de destrucción masiva, educar responsabilidad social. Si no controlamos nuestra «oscuridad» irracional, la humanidad está condenada, y quizá lo estuvieron civilizaciones extraterrestres anteriores.",
        },
        {
          type: 'key',
          html: "El crecimiento incesante de conocimiento y poder aumenta simultáneamente capacidad de autodestrucción; L es el factor más incierto de la ecuación de Drake.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Vida inteligente extraterrestre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Después de construir el marco (planetas habitables, origen y evolución de la vida, futuro humano), Ulmschneider aborda la pregunta central: ¿existen civilizaciones inteligentes y por qué no las vemos?",
        },
        {
          type: 'paragraph',
          html: "El argumento a favor es que la evolución química hacia la vida parece plausible (<span class=\"person\">Christian de Duve</span>). La convergencia evolutiva sugiere que acumular información (genes → software cultural) es estrategia universal bajo las mismas leyes naturales. Las sociedades de estrellas G de población I podrían existir desde hace ~5 Ga (10 Ga de formación estelar − 4,6 Ga de evolución).",
        },
        {
          type: 'paragraph',
          html: "Sobre la naturaleza de los extraterrestres, la extrapolación lineal del número de genes sugiere que una civilización mil millones de años más avanzada difiere de nosotros tanto como nosotros de un organismo unicelular. Serían «casi divinos» en conocimiento y poder. En su etapa comparable a la nuestra, podrían parecerse a humanos (plan corporal dictado por visión estereoscópica, manipulación, comunicación). Millones de años después, probablemente serían androides no orgánicos.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~4 000",
              "label": "Civilizaciones tecnológicas existentes en la galaxia (estimación de Ulmschneider)"
            },
            {
              "value": "~2×10⁶",
              "label": "Sociedades inteligentes que existieron históricamente"
            },
            {
              "value": "~1 700 Ly",
              "label": "Distancia media a civilizaciones sobrevivientes"
            },
            {
              "value": "~10⁷–10⁸ años",
              "label": "L estimado (vida media logarítmica de civilizaciones)"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "<span class=\"term\">SETI</span> abarca desde el proyecto Ozma de <span class=\"person\">Frank Drake</span> (<span class=\"num\">1960</span>) hasta META, BETA, SERENDIP (Arecibo) y búsquedas ópticas de pulsos láser. La ventana de microondas «water hole» (1–20 GHz) tiene mínimo ruido de fondo galáctico. Resultado hasta <span class=\"num\">2005</span>: nulo. Los receptores actuales detectarían una emisora de 3 kW a 100 Ly, no a 1 700 Ly.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">Paradoja de Fermi</span> (<span class=\"num\">1950</span>, Los Alamos) pregunta: si hay millones de civilizaciones, ¿dónde están? Respuestas posibles: (1) no existen o ya perecieron, (2) visita técnicamente imposible, (3) están cerca pero indetectables, (4) no les interesamos (<span class=\"term\">hipótesis del zoo</span>). Ulmschneider favorece que la mayoría se autodestruyeron y que las supervivientes evitan contacto o usan medios que no detectamos.",
        },
        {
          type: 'quote',
          text: "«Si nunca buscamos, la probabilidad de éxito es cero.»",
          attribution: "Giuseppe Cocconi y Philip Morrison (1959)",
        },
        {
          type: 'key',
          html: "La vida inteligente probablemente es común; la comunicación detectable es rara porque L es corto y las distancias galácticas enormes.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Zona habitables continuamente habitable (CHZ)",
    "description": "Rango orbital (~0,95–1,01 AU) donde un planeta mantiene condiciones para evolución ininterrumpida durante miles de millones de años."
  },
  {
    "title": "Fórmula de Drake",
    "description": "N = N_HP × f_L × f_I × f_C × L/L_S; estima civilizaciones comunicantes en la galaxia."
  },
  {
    "title": "Convergencia evolutiva",
    "description": "Estructuras similares (ojos, inteligencia en cuervos y primates) surgen independientemente por las mismas presiones selectivas."
  },
  {
    "title": "Biosignatura",
    "description": "Compuesto atmosférico fuera de equilibrio termodinámico (O₂, O₃, CH₄) que indica vida."
  },
  {
    "title": "Población I / III",
    "description": "Estrellas jóvenes ricas en metales (Sol) vs. primeras estrellas de solo H y He."
  },
  {
    "title": "Endosimbiosis",
    "description": "Incorporación de bacterias como orgánulos (mitocondrias, cloroplastos); origen de eucariotas."
  },
  {
    "title": "Water hole",
    "description": "Banda de microondas 1–20 GHz con mínimo ruido de fondo; canal preferido para SETI."
  },
  {
    "title": "Hipótesis del zoo",
    "description": "Civilizaciones avanzadas observan sin intervenir, como en un zoológico cósmico."
  },
  {
    "title": "Tectónica de placas",
    "description": "Convección mantélica que regenera atmósfera y crea continentes; posible requisito para inteligencia tecnológica."
  },
  {
    "title": "Mundo hierro-azufre",
    "description": "Teoría del origen de la vida en chimeneas hidrotermales sobre superficies de pirita (FeS₂)."
  }
],
  chronology: [
  {
    "year": "~14 Ga",
    "text": "Big Bang; origen del universo, espacio, tiempo y materia."
  },
  {
    "year": "~10 Ga",
    "text": "Primeras estrellas de población I ricas en metales; posibles planetas habitables."
  },
  {
    "year": "4,567 Ga",
    "text": "Formación del Sistema Solar y la Tierra."
  },
  {
    "year": "4,527 Ga",
    "text": "Impacto gigante que forma la Luna."
  },
  {
    "year": "~3,8 Ga",
    "text": "Primeras evidencias geoquímicas de vida."
  },
  {
    "year": "~2,4 Ga",
    "text": "Evento de Great Oxidation; atmósfera rica en oxígeno."
  },
  {
    "year": "1953",
    "text": "Experimento Urey-Miller: síntesis abiótica de aminoácidos."
  },
  {
    "year": "1959",
    "text": "Cocconi y Morrison proponen búsqueda radio SETI."
  },
  {
    "year": "1960",
    "text": "Proyecto Ozma de Frank Drake; fórmula de Drake (1961)."
  },
  {
    "year": "1995",
    "text": "Primer exoplaneta confirmado alrededor de estrella solar (51 Pegasi b)."
  },
  {
    "year": "2001–2003",
    "text": "Borrador y versión final del genoma humano."
  },
  {
    "year": "2006",
    "text": "2.ª edición del libro de Ulmschneider con capítulo geológico ampliado."
  }
],
  figures: [
  {
    "name": "Peter Ulmschneider",
    "role": "Astrofísico teórico (Heidelberg) · Autor; integra astronomía, geología, biología y SETI"
  },
  {
    "name": "Frank Drake",
    "role": "Radioastrónomo · Fórmula de Drake y proyecto Ozma (1960)"
  },
  {
    "name": "Charles Darwin",
    "role": "Naturalista · Selección natural y mutación como motor evolutivo"
  },
  {
    "name": "Edwin Hubble",
    "role": "Astrónomo · Expansión del universo; ley de Hubble"
  },
  {
    "name": "Enrico Fermi",
    "role": "Físico · Paradoja «¿Dónde están?» (1950)"
  },
  {
    "name": "Giuseppe Cocconi / Philip Morrison",
    "role": "Físicos · Artículo fundacional SETI (1959)"
  },
  {
    "name": "Gerard Kasting",
    "role": "Planetólogo · Límites de la zona habitable y CHZ"
  },
  {
    "name": "Christian de Duve",
    "role": "Bioquímico · Origen de la vida como secuencia de pasos probables"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La vida inteligente no es un accidente cósmico aislado: requiere estrellas que forjen carbono, planetas estables en la CHZ y millones de años de evolución en tierra firme.",
  "También exige química orgánica, evolución darwiniana y manos libres para manipular el entorno.",
  "La paradoja de Fermi no prueba nuestra singularidad.",
  "Prueba que el conocimiento sin responsabilidad es letal.",
  "Buscar por radio, espectroscopía o geología planetaria sigue siendo la única forma de saberlo."
],
    highlight: "Si las leyes de la naturaleza son universales, la inteligencia debería ser frecuente; si no la vemos, el cuello de botella es la supervivencia de las civilizaciones tecnológicas, no el origen de la vida.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Peter Ulmschneider",
    line2: "\"Intelligent Life in the Universe\" · Springer · 2006 (2.ª ed.)",
  },
}
