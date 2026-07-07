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
          html: "Una de las preguntas más apasionantes para la humanidad es si estamos solos en el universo. Desde la prehistoria hasta la antigüedad se creyó en seres inteligentes no humanos, pero la ciencia moderna muestra que, desde la revolución copernicana, todo intento de definir nuestra posición como excepcional ha fracasado.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Ulmschneider</span> organiza el libro en tres partes (planetas, vida e inteligencia) porque la respuesta exige encadenar disciplinas. Sin estrellas no hay elementos pesados. Sin planetas estables no hay océanos. Sin evolución en tierra firme no hay manos libres para la tecnología. Si otras civilizaciones existen, ¿por qué no hay rastro astronómico ni terrestre de ellas? La segunda edición (<span class=\"num\">2006</span>) añade el capítulo geológico sobre la Tierra y actualiza la búsqueda de planetas, el LUCA y la inteligencia animal en primates, delfines y cuervos.",
        },
        {
          type: 'paragraph',
          html: "El autor sostiene que reflexionar sobre el futuro de la humanidad ilumina la naturaleza de civilizaciones extraterrestres avanzadas. La singularidad de la inteligencia humana no es absoluta: depende de un cerebro muy grande y de especializaciones en comunicación y uso de herramientas, requisitos evolutivos ligados a la conquista de la tierra, no accidentes cosméticos.",
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
          html: "La vida, aquí y probablemente en otros mundos, surge en estrecha asociación con planetas, estrellas y galaxias. Los organismos vivos y los planetas están hechos de elementos sintetizados en estrellas, y comprender esa historia es el primer paso hacia la astrobiología.",
        },
        {
          type: 'paragraph',
          html: "Hace unos <span class=\"num\">14 mil millones de años</span> el universo apareció en el <span class=\"term\">Big Bang</span>. La ley de Hubble (<span class=\"person\">Edwin Hubble</span>, <span class=\"num\">1924</span>) y la radiación cósmica de fondo de <span class=\"num\">3 K</span> confirman un origen caliente y denso. Después de una «edad oscura» de ~1 mil millones de años aparecieron las primeras estrellas de la <span class=\"term\">población III</span>. Eran muy masivas y de vida corta. Fusionaron elementos hasta el hierro y los expulsaron en supernovas.",
        },
        {
          type: 'paragraph',
          html: "Generaciones sucesivas enriquecieron el medio interestelar hasta formar la mezcla metálica de la <span class=\"term\">población I</span>, de la que nació el Sol y los planetas. Las nubes moleculares (hasta 10⁶ M☉, núcleos a 5–10 K) son cunas del colapso gravitacional. Los <span class=\"term\">relojes radiométricos</span> (²⁶Al, ²³⁸U) datan meteoritos y la formación planetaria en ~4,567 Ga.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Nubes moleculares",
              "description": "Hasta 10⁶ M☉; núcleos fríos donde nace el colapso gravitacional.",
              "icon": "☁️"
            },
            {
              "title": "Secuencia principal",
              "description": "Fusión H→He en el núcleo; etapa estable de la mayoría de las estrellas.",
              "icon": "⭐"
            },
            {
              "title": "Supernova",
              "description": "Expulsión de elementos pesados; enriquece el medio para nuevas generaciones.",
              "icon": "💥"
            },
            {
              "title": "Relojes radiométricos",
              "description": "Decaimiento de isótopos data meteoritos y formación planetaria.",
              "icon": "🕐"
            }
          ],
        },
        {
          type: 'key',
          html: "Sin estrellas no hay carbono ni metales: la química de la vida es herencia directa de la evolución estelar y galáctica.",
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
          html: "En el <span class=\"term\">disco solar</span>, la fricción desacelera la rotación y permite que la materia migre hacia la estrella. La temperatura decrece con la distancia. Cerca del Sol (menos de <span class=\"num\">3 AU</span>) se acumulan silicatos y hierro. Más allá de la <span class=\"term\">línea de hielo</span> (~150 K) dominan los granos de hielo. El polvo sedimenta en el plano ecuatorial. Las fuerzas eléctricas aglutinan granos hasta planetesimales de ~10 km en ~100 000 años.",
        },
        {
          type: 'paragraph',
          html: "Simulaciones de <span class=\"person\">Wetherill</span> muestran que de ~500 planetesimales entre 0,4 y 2 AU quedan pocos protoplanetas en decenas de millones de años. Los planetas jovianos se forman más allá de la línea de hielo, pero la <span class=\"term\">migración joviana</span> puede desplazarlos hacia la estrella y perturbar los planetas interiores. Solo ~<span class=\"num\">6 %</span> de los sistemas conservan planetas terrestres sin destrucción por migración.",
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
              "description": "Júpiteres desplazados hacia la estrella perturban planetas interiores.",
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
          html: "La temperatura del disco determina la composición química de cada planeta. La Tierra se formó seca en la zona caliente interior.",
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
          html: "La vida está ligada a planetas terrestres. La Tierra ofrece tres propiedades esenciales que Ulmschneider considera requisitos para la inteligencia tecnológica: <span class=\"term\">tectónica de placas</span> que creó continentes y la división tierra-mar, una Luna estabilizadora del eje de rotación, y condiciones primitivas que permitieron el origen de la vida.",
        },
        {
          type: 'paragraph',
          html: "La acumulación por planetesimales terminó ~<span class=\"num\">30–40 Ma</span> después del inicio del sistema solar (<span class=\"num\">4,567 Ga</span>). El bombardeo intenso duró ~600 Ma más. Impactos del tamaño de Ceres o Marte vaporizaban océanos enteros. La Luna se formó por impacto de un planetesimal del tamaño de Marte hace <span class=\"num\">4,527 Ga</span>. Las mareas frenaron la rotación de ~5 h a 24 h y alejaron la Luna hasta ~63 radios terrestres.",
        },
        {
          type: 'paragraph',
          html: "La sismología revela núcleo de hierro-níquel, manto silicatado y corteza. El campo magnético y la expansión del suelo oceánico confirman la tectónica de placas. La vida dominó los océanos durante ~3,5 Ga antes de conquistar la tierra firme hace ~<span class=\"num\">470 Ma</span>. Ese mutualismo entre plantas y animales hizo posible la bipedestación y las manos libres. Marte y Venus probablemente carecen de tectónica activa comparable.",
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
          type: 'key',
          html: "Sin tierra firme y tectónica activa, la inteligencia capaz de comunicación interestelar sería improbable, pues requiere manos libres y bipedestación en tierra.",
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
          html: "Hasta <span class=\"num\">1995</span> los exoplanetas eran teóricos. En octubre de <span class=\"num\">2005</span> ya se habían detectado más de <span class=\"num\">165</span> alrededor de estrellas de secuencia principal, casi todos tipo Júpiter e inhóspitos para la vida.",
        },
        {
          type: 'paragraph',
          html: "Un tercio de los exoplanetas detectados supera 2 M<sub>Júpiter</sub>. El más pequeño (Gliese 876 d) tiene 7,3 M<sub>Tierra</sub>. Curiosamente, la mitad orbita dentro de <span class=\"num\">0,5 AU</span>, mucho más cerca que Mercurio. Esto contradice la teoría clásica de formación joviana más allá de 3 AU. Ulmschneider interpreta los «Júpiteres calientes» como evidencia de migración y sesgo observacional, no como la distribución real de planetas en la galaxia.",
        },
        {
          type: 'paragraph',
          html: "Los métodos incluyen <span class=\"term\">velocidad radial</span> (variaciones Doppler), tránsitos, microlentes gravitacionales e imagen directa futura (coronografía, nulling). Misiones como Gaia, SIM, Kepler, Darwin y TPF permitirán detectar planetas terrestres y analizar atmósferas buscando H₂O y O₃ como biosignaturas.",
        },
        {
          type: 'list',
          items: [
            "**Velocidad radial** — La estrella oscila alrededor del baricentro; Júpiter desplaza al Sol ~780 000 km.",
            "**Tránsito** — Atenuación periódica del brillo estelar al pasar el planeta.",
            "**Microlente** — Curvatura de la luz por gravedad de un sistema estelar lejano.",
            "**Disco circumestelar** — Polvo residual indica formación planetaria en curso o reciente."
          ],
        },
        {
          type: 'key',
          html: "Los «Júpiteres calientes» reflejan migración y sesgo observacional, no la distribución real de planetas en la galaxia.",
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
          html: "El <span class=\"term\">carbono</span> es excepcional: más de 10 millones de compuestos orgánicos frente a ~200 000 inorgánicos. La <span class=\"term\">zona habitable</span> solar se estima entre <span class=\"num\">0,7 y 1,4 AU</span>, pero la <span class=\"term\">zona habitables continuamente habitable</span> (CHZ), considerando el aumento de luminosidad solar, inestabilidades atmosféricas y efectos de Júpiter sobre Marte, se estrecha a <span class=\"num\">0,95–1,01 AU</span>. Solo estrellas G de población I, sin bloqueo mareal, cumplen los requisitos.",
        },
        {
          type: 'paragraph',
          html: "El ciclo <span class=\"term\">carbonato-silicato</span> actúa como termostato geológico. Su fallo produce invernadero runaway (Venus) o <span class=\"term\">glaciation irreversible</span> (Marte). Ulmschneider estima N_HP ≈ <span class=\"num\">4×10⁶</span> planetas habitables en la Vía Láctea (1 cada 40 000 estrellas) y ~<span class=\"num\">4×10¹⁷</span> en el universo observable.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Efecto invernadero",
              "description": "CO₂ atrapa calor; descontrol → runaway (Venus) o glaciation (Marte).",
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
          type: 'key',
          html: "Un planeta apto para inteligencia necesita masa, atmósfera, agua líquida, estrella G estable y permanecer en la CHZ durante miles de millones de años.",
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
          html: "La bioquímica terrestre se basa en cuatro clases de compuestos. Son las <span class=\"term\">proteínas</span> (20 aminoácidos L-quirales), los <span class=\"term\">carbohidratos</span>, los <span class=\"term\">lípidos</span> y los <span class=\"term\">ácidos nucleicos</span>. El código genético traduce tripletes en aminoácidos. El ATP es la moneda energética. El experimento <span class=\"person\">Urey-Miller</span> (<span class=\"num\">1953</span>) sintetizó aminoácidos abióticos en atmósfera reductora simulada.",
        },
        {
          type: 'paragraph',
          html: "Las teorías del origen incluyen el mundo del ARN, la arcilla autorreplicante de <span class=\"person\">Cairns-Smith</span>, el <span class=\"term\">mundo hierro-azufre</span> de Wächtershäuser en chimeneas hidrotermales y las microcavernas de «fumadores negros» de <span class=\"person\">Martin & Russell</span>. La búsqueda del LUCA sugiere un mínimo de ~256–300 genes. <span class=\"person\">Christian de Duve</span> argumenta que el origen vino por pasos pequeños con probabilidad plausible. Ulmschneider concluye que no sabemos el detalle, pero debe haber una ruta química plausible.",
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
          type: 'key',
          html: "Una vez iniciada, la competencia darwiniana seleccionó los organismos más eficientes. El origen exacto sigue abierto, pero no su plausibilidad general.",
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
          html: "¿La vida extraterrestre evolucionaría hacia la inteligencia? En la Tierra, las primeras células aparecieron en pocos cientos de millones de años, pero los eucariotas y la multicelularidad tardaron ~3 Ga más, y la inteligencia humana otros ~800 Ma. Los dos motores del cambio son la mutación (azar) y la selección natural (direccional).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Darwin</span> argumentó que mutaciones aleatorias del ADN producen variantes y la selección favorece las más eficientes. Ulmschneider sostiene que la <span class=\"term\">convergencia evolutiva</span> demuestra que la selección también gobierna la evolución a largo plazo. La inteligencia comparable en cuervos y monos es un ejemplo de ello.",
        },
        {
          type: 'paragraph',
          html: "Entre los hitos figuran la endosimbiosis hacia eucariotas y el oxígeno como catástrofe ambiental (~<span class=\"num\">2,4 Ga</span>). También la multicelularidad y los genes <span class=\"term\">HOX</span> (~630–542 Ma), la conquista de la tierra por plantas (~<span class=\"num\">470 Ma</span>) y animales, y el evento K/T (<span class=\"num\">65 Ma</span>). Este último extinguió dinosaurios no aviares y abrió camino a mamíferos. La inteligencia humana requiere visión estereoscópica, bipedestación con manos libres, vida social, lenguaje y cultura de herramientas. El volumen cerebral se triplicó desde Australopithecus.",
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
          type: 'key',
          html: "Acumular información, de genes a cultura, es la estrategia evolutiva ganadora. Las mismas leyes de la naturaleza deberían producir inteligencia en planetas similares.",
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
          html: "La investigación combina dos vías: la búsqueda directa en el Sistema Solar y en exoplanetas, o la inferencia de probabilidades a partir del origen terrestre. Hasta ahora no hay detección confirmada, pero las técnicas mejoran rápidamente.",
        },
        {
          type: 'paragraph',
          html: "En el Sistema Solar, <span class=\"term\">Europa</span> (Júpiter) tiene océano subsuperficial bajo hielo donde la vida primitiva es posible. <span class=\"term\">Marte</span> tuvo ríos, deltas y océano norteño con atmósfera densa de CO₂ durante cientos de millones de años. Luego sufrió glaciation irreversible al cesar la tectónica (~2 Ga). Las misiones Viking (<span class=\"num\">1976</span>) no detectaron vida. Los meteoritos marcianos (ALH84001) suscitaron debate sobre fósiles microscópicos.",
        },
        {
          type: 'paragraph',
          html: "Fuera del Sistema Solar conviene detectar H₂O y O₃ como <span class=\"term\">biosignaturas</span>. Son compuestos fuera del equilibrio termodinámico. <span class=\"person\">Lovelock</span> (<span class=\"num\">1965</span>) señaló que la vida produce compuestos inesperados. El metano terrestre es 10¹⁴ veces más abundante de lo esperado. Los <span class=\"term\">OVNI</span> generaron miles de avistamientos desde <span class=\"num\">1947</span>, pero el informe Condon (<span class=\"num\">1969</span>) concluyó que 21 años de estudio no añadieron conocimiento científico.",
        },
        {
          type: 'list',
          items: [
            "**Viking** — Tres experimentos bioquímicos en Marte; resultados ambiguos, interpretados como abióticos.",
            "**Mars Express / Odyssey** — Hielo subsuperficial detectado bajo el casquete polar.",
            "**Biosignaturas IR** — O₃ indica fotosíntesis &gt;2 Ga; CH₄ podría señalar bacterias metanogénicas."
          ],
        },
        {
          type: 'key',
          html: "La detección de O₃ y H₂O en exoplanetas terrestres será el método más prometedor para detectar vida. El SETI por radio se trata en el capítulo 10.",
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
          html: "La colonización del Sistema Solar incluye estaciones espaciales, bases lunares y marcianas, y minería de asteroides. Los hábitats de <span class=\"person\">O'Neill</span> podrían albergar hasta 20 millones de personas autosuficientes. El viaje interestelar es lento. Un viaje a α Centauri a ~100 km/s requeriría ~12 000 años.",
        },
        {
          type: 'paragraph',
          html: "El dominio biológico avanza con la secuenciación del genoma humano (<span class=\"num\">2001–2003</span>, ~30 000 genes) y la creación de vida mínima en laboratorio. Los peligros externos (supernovas, rayos gamma, impactos) son poco probables como extinción total. Los internos (daño ambiental, invenciones incontrolables, guerra y terrorismo) son los formidables. Ulmschneider propone distribuir la humanidad en colonias espaciales, controlar armas de destrucción masiva y educar la responsabilidad social.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Guerra y terrorismo",
              "description": "Mayor peligro actual: destrucción deliberada global.",
              "icon": "☢️"
            },
            {
              "title": "Volcanismo extremo",
              "description": "Supervolcanes pueden alterar clima global.",
              "icon": "🌋"
            },
            {
              "title": "Impactos",
              "description": "Programa Spaceguard identifica asteroides &gt;1 km.",
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
          type: 'key',
          html: "El crecimiento incesante de conocimiento y poder aumenta al mismo tiempo la capacidad de autodestrucción. L es el factor más incierto de la ecuación de Drake.",
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
          html: "El argumento a favor es que la evolución química hacia la vida parece plausible y la convergencia evolutiva sugiere que acumular información es estrategia universal. Su estimación da ~<span class=\"num\">4000</span> civilizaciones tecnológicas existentes en la galaxia, con distancia media ~<span class=\"num\">1700 Ly</span>.",
        },
        {
          type: 'paragraph',
          html: "Sobre la naturaleza de los extraterrestres, una civilización mil millones de años más avanzada difiere de nosotros tanto como nosotros de un organismo unicelular. En etapa comparable a la nuestra podrían parecerse a humanos. Millones de años después, probablemente serían androides no orgánicos. <span class=\"term\">SETI</span> abarca desde Ozma (<span class=\"person\">Frank Drake</span>, <span class=\"num\">1960</span>) hasta META, BETA y SERENDIP. La banda <span class=\"term\">water hole</span> (1–20 GHz) tiene mínimo ruido de fondo. Hasta <span class=\"num\">2005</span>, el resultado fue nulo. Los receptores actuales detectarían una emisora de 3 kW a 100 Ly, no a 1700 Ly.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">paradoja de Fermi</span> (<span class=\"person\">Enrico Fermi</span>, <span class=\"num\">1950</span>) pregunta: si hay millones de civilizaciones, ¿dónde están? Las respuestas posibles son cuatro: no existen o ya perecieron, la visita es técnicamente imposible, están cerca pero son indetectables, o no les interesamos (<span class=\"term\">hipótesis del zoo</span>). Ulmschneider favorece que la mayoría se autodestruyeron y que las supervivientes evitan contacto o usan medios que no detectamos.",
        },
        {
          type: 'quote',
          text: "«Si nunca buscamos, la probabilidad de éxito es cero.»",
          attribution: "Giuseppe Cocconi y Philip Morrison (1959)",
        },
        {
          type: 'key',
          html: "La vida inteligente probablemente es común, pero la comunicación detectable es rara porque L es corto y las distancias galácticas son enormes.",
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
  "También exige química orgánica, selección darwiniana y manos libres para manipular el entorno.",
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
