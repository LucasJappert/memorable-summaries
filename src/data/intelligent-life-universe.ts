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
    "label": "¿Estamos solos?"
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
    "label": "Cronología de hitos astrobiológicos"
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
          html: "¿Estamos solos en el universo? Es una de las preguntas más apasionantes para la humanidad. En la prehistoria y la antigüedad se creyó en seres inteligentes no humanos. La ciencia moderna, desde la revolución copernicana, ha fracasado una y otra vez al tratar de hacer excepcional nuestro lugar en el cosmos.",
        },
        {
          type: 'paragraph',
          html: "El astrofísico <span class=\"person\">Peter Ulmschneider</span> (Heidelberg) organiza el libro en tres partes: planetas, vida e inteligencia. La respuesta exige encadenar disciplinas. Sin estrellas no hay elementos pesados. Sin planetas estables no hay océanos. Sin evolución en tierra firme no hay manos libres para la tecnología. Si otras civilizaciones existen, ¿por qué no hay rastro astronómico ni terrestre de ellas?",
        },
        {
          type: 'paragraph',
          html: "La segunda edición (<span class=\"num\">2006</span>) añade un capítulo geológico sobre la Tierra. También actualiza la búsqueda de planetas, el ancestro común de toda la vida y la inteligencia animal en primates, delfines y cuervos. Reflexionar sobre el futuro humano ilumina la naturaleza de civilizaciones extraterrestres avanzadas.",
        },
        {
          type: 'quote',
          text: "«La singularidad de la inteligencia humana es consecuencia de un cerebro muy grande y de nuestras excepcionales especializaciones en comunicación y uso de herramientas.»",
          attribution: "Peter Ulmschneider",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">inteligencia tecnológica</span> humana está ligada a la vida en tierra: manos libres, visión aguda y vida social en grupo son requisitos evolutivos, no accidentes cosméticos.",
        },
        {
          type: 'paragraph',
          html: "Para saber si esos requisitos pueden repetirse en otros mundos, hay que entender primero de dónde vienen los átomos que componen planetas y organismos.",
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
          html: "¿De dónde salen los átomos que forman planetas y seres vivos? La vida, aquí y probablemente en otros mundos, surge en estrecha asociación con planetas, estrellas y galaxias. Comprender esa historia química es el primer paso de la astrobiología.",
        },
        {
          type: 'paragraph',
          html: "Hace unos <span class=\"num\">14 mil millones de años</span> el universo apareció en el <span class=\"term\">Big Bang</span> (origen caliente y denso del espacio, el tiempo y la materia). La ley de Hubble confirma ese origen expansivo. El astrónomo <span class=\"person\">Edwin Hubble</span> la formuló en <span class=\"num\">1924</span>. Además, la radiación cósmica de fondo de <span class=\"num\">3 K</span> apunta en la misma dirección.",
        },
        {
          type: 'paragraph',
          html: "Al terminar una «edad oscura» de unos mil millones de años aparecieron las primeras estrellas, la <span class=\"term\">población III</span> (formadas solo de hidrógeno y helio). Eran muy masivas y de vida corta. Fusionaron elementos hasta el hierro y los expulsaron en supernovas. Generaciones sucesivas enriquecieron el medio interestelar hasta formar estrellas ricas en metales como el Sol.",
        },
        {
          type: 'paragraph',
          html: "Las nubes moleculares, hasta un millón de masas solares con núcleos a <span class=\"num\">5–10 K</span>, son cunas del colapso gravitacional. Los <span class=\"term\">relojes radiométricos</span> (decaimiento de isótopos como el aluminio-26 o el uranio-238) datan meteoritos y la formación planetaria en unos <span class=\"num\">4.567 Ga</span>.",
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
          html: "Sin estrellas no hay carbono ni metales: la <span class=\"key-term\">química de la vida</span> es herencia directa de la evolución estelar y galáctica.",
        },
        {
          type: 'paragraph',
          html: "Si los átomos pesados existen, el siguiente paso es ver cómo se agrupan en discos planetarios alrededor de estrellas jóvenes.",
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
          html: "¿Cómo nacen los planetas a partir de polvo interestelar? No se forman solos. Son subproducto del colapso gravitacional de gas y polvo, que produce discos de acreción alimentando la protostrella y dando origen a planetesimales.",
        },
        {
          type: 'paragraph',
          html: "En el <span class=\"term\">disco solar</span> (el anillo de gas y polvo que rodea una estrella joven), la fricción desacelera la rotación. La materia migra hacia la estrella y, por eso, la temperatura decrece con la distancia. Cerca del Sol, a menos de <span class=\"num\">3 AU</span>, se acumulan silicatos y hierro. Más allá de la <span class=\"term\">línea de hielo</span> (donde el agua se congela, ~150 K) dominan los granos helados.",
        },
        {
          type: 'paragraph',
          html: "El polvo sedimenta en el plano ecuatorial. Las fuerzas eléctricas aglutinan granos hasta planetesimales de unos <span class=\"num\">10 km</span> en unos <span class=\"num\">100 000 años</span>. Simulaciones de <span class=\"person\">George Wetherill</span> muestran que de unos quinientos planetesimales entre 0,4 y 2 AU quedan pocos protoplanetas en decenas de millones de años.",
        },
        {
          type: 'paragraph',
          html: "Los planetas jovianos se forman más allá de la línea de hielo. La <span class=\"term\">migración joviana</span> (desplazamiento de gigantes gaseosos hacia la estrella) puede perturbar los planetas interiores. Solo alrededor del <span class=\"num\">6 %</span> de los sistemas conservan planetas terrestres sin destrucción por migración.",
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
          html: "La temperatura del disco determina la composición química de cada planeta. La <span class=\"key-term\">Tierra se formó seca</span> en la zona caliente interior.",
        },
        {
          type: 'paragraph',
          html: "Una vez formado un planeta rocoso, importa saber qué lo hace estable y distinto durante miles de millones de años.",
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
          html: "¿Qué hace de la Tierra un escenario plausible para la inteligencia tecnológica? La vida está ligada a planetas terrestres. Ulmschneider destaca tres propiedades esenciales. La <span class=\"term\">tectónica de placas</span> (convección del manto que crea continentes) divide tierra y mar. Una Luna estabiliza el eje de rotación. Las condiciones primitivas permitieron el origen de la vida.",
        },
        {
          type: 'paragraph',
          html: "La acumulación por planetesimales terminó unos <span class=\"num\">30–40 Ma</span> después del inicio del sistema solar (<span class=\"num\">4.567 Ga</span>). Pero el bombardeo intenso duró unos <span class=\"num\">600 Ma</span> más. Impactos del tamaño de Ceres o Marte vaporizaban océanos enteros.",
        },
        {
          type: 'paragraph',
          html: "La Luna se formó por impacto de un planetesimal del tamaño de Marte hace <span class=\"num\">4.527 Ga</span>. Las mareas frenaron la rotación de unas cinco horas a veinticuatro horas y alejaron la Luna hasta unos sesenta y tres radios terrestres. La sismología revela núcleo de hierro-níquel, manto silicatado y corteza.",
        },
        {
          type: 'paragraph',
          html: "El campo magnético y la expansión del suelo oceánico confirman la tectónica activa. La vida dominó los océanos durante unos <span class=\"num\">3,5 Ga</span> antes de conquistar la tierra firme hace unos <span class=\"num\">470 Ma</span>. Ese mutualismo entre plantas y animales hizo posible la bipedestación y las manos libres. Marte y Venus probablemente carecen de tectónica activa comparable.",
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
          html: "Sin tierra firme y tectónica activa, la <span class=\"key-term\">inteligencia comunicante</span> sería improbable, pues requiere manos libres y bipedestación en tierra.",
        },
        {
          type: 'paragraph',
          html: "Si la Tierra cumple requisitos tan exigentes, conviene preguntar cuántos mundos parecidos existen en otras estrellas.",
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
          html: "¿Cuántos planetas orbitan otras estrellas? Antes de <span class=\"num\">1995</span> los exoplanetas eran solo teóricos. En octubre de <span class=\"num\">2005</span> ya se habían detectado más de <span class=\"num\">165</span>. Orbitaban estrellas de secuencia principal. Casi todos eran tipo Júpiter e inhóspitos para la vida.",
        },
        {
          type: 'paragraph',
          html: "Un tercio de los exoplanetas detectados supera dos masas jovianas. El más pequeño (Gliese 876 d) tiene 7,3 masas terrestres. Curiosamente, la mitad orbita dentro de <span class=\"num\">0,5 AU</span>, mucho más cerca que Mercurio. Por eso contradice la teoría clásica de formación joviana más allá de 3 AU.",
        },
        {
          type: 'paragraph',
          html: "Ulmschneider interpreta los «Júpiteres calientes» como evidencia de migración y sesgo observacional, no como la distribución real de planetas en la galaxia. Los métodos incluyen <span class=\"term\">velocidad radial</span> (variaciones Doppler en la luz estelar) y tránsitos (atenuación periódica del brillo al pasar el planeta). Misiones como Gaia, Kepler, Darwin y TPF apuntan a planetas terrestres y atmósferas con agua u ozono.",
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
          html: "Los «Júpiteres calientes» reflejan <span class=\"key-term\">migración y sesgo observacional</span>, no la distribución real de planetas en la galaxia.",
        },
        {
          type: 'paragraph',
          html: "Detectar un planeta es solo el primer paso: falta saber si su tamaño, atmósfera y órbita permiten vida durante eones.",
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
          html: "¿Qué hace habitable un planeta, más allá de existir? Buscar vida inteligente implica buscar planetas tipo Tierra. La mayoría de organismos son vulnerables. Los extremófilos terrestres se adaptaron por selección darwiniana, pero no contradicen que la vida florece en condiciones benignas.",
        },
        {
          type: 'paragraph',
          html: "El carbono es excepcional: más de diez millones de compuestos orgánicos frente a unos doscientos mil inorgánicos. La zona donde el agua puede ser líquida en el Sistema Solar se estima entre <span class=\"num\">0,7 y 1,4 AU</span>. La <span class=\"term\">zona habitables continuamente habitables</span> (CHZ: órbita estable para evolución durante miles de millones de años) es mucho más estrecha. Ulmschneider la fija en <span class=\"num\">0,95–1,01 AU</span> al considerar el aumento de luminosidad solar.",
        },
        {
          type: 'paragraph',
          html: "Solo estrellas G de población I, sin bloqueo mareal, cumplen los requisitos. El ciclo <span class=\"term\">carbonato-silicato</span> (intercambio geológico que regula el CO₂ atmosférico) actúa como termostato planetario. Su fallo produce invernadero descontrolado en Venus o congelación irreversible en Marte. Ulmschneider estima unos <span class=\"num\">4×10⁶</span> planetas habitables en la Vía Láctea y unos <span class=\"num\">4×10¹⁷</span> en el universo observable.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Efecto invernadero",
              "description": "CO₂ atrapa calor; descontrol → runaway (Venus) o glaciación irreversible (Marte).",
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
          html: "Un planeta apto para inteligencia necesita masa, atmósfera, agua líquida, estrella G estable y permanecer en la <span class=\"key-term\">CHZ</span> durante miles de millones de años.",
        },
        {
          type: 'paragraph',
          html: "Tener el escenario correcto no basta: hay que explicar cómo la química abiótica dio el salto a organismos vivos.",
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
          html: "¿Qué es la vida y cómo pudo surgir de la química? Al secuenciar genomas de organismos primitivos, incluidas micoplasmas con unos trescientos genes, la definición precisa está al alcance. Fenomenológicamente implica metabolismo y crecimiento. También uso de energía, individualidad, reproducción y mutación en ambiente abiótico. Los virus no califican.",
        },
        {
          type: 'paragraph',
          html: "La bioquímica terrestre se basa en cuatro clases de compuestos: proteínas, carbohidratos, lípidos y ácidos nucleicos. El código genético traduce tripletes en aminoácidos. El ATP es la moneda energética. El experimento <span class=\"person\">Urey-Miller</span> (<span class=\"num\">1953</span>) sintetizó aminoácidos abióticos en atmósfera reductora simulada.",
        },
        {
          type: 'paragraph',
          html: "Las teorías del origen incluyen el <span class=\"term\">mundo del ARN</span> (ARN que copia y cataliza reacciones antes del ADN). También la arcilla autorreplicante de <span class=\"person\">Graham Cairns-Smith</span>. También el mundo hierro-azufre de Wächtershäuser en chimeneas hidrotermales y las microcavernas de «fumadores negros» de <span class=\"person\">Martin & Russell</span>.",
        },
        {
          type: 'paragraph',
          html: "La búsqueda del ancestro común de toda la vida sugiere un mínimo de unos <span class=\"num\">256–300</span> genes. <span class=\"person\">Christian de Duve</span> argumenta que el origen vino por pasos pequeños con probabilidad plausible. Ulmschneider concluye que no sabemos el detalle, pero debe haber una ruta química plausible.",
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
              "description": "Plantilla para síntesis proteica; ribozimas pueden catalizar reacciones.",
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
          html: "Una vez iniciada, la competencia darwiniana seleccionó los organismos más eficientes. El <span class=\"key-term\">origen exacto</span> sigue abierto, pero no su plausibilidad general.",
        },
        {
          type: 'paragraph',
          html: "Si la vida puede empezar, la pregunta siguiente es cuánto tarda en producir cerebros capaces de tecnología.",
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
          html: "¿La vida extraterrestre evolucionaría hacia la inteligencia? En la Tierra, las primeras células aparecieron en pocos cientos de millones de años. Los eucariotas y la multicelularidad tardaron unos <span class=\"num\">3 Ga</span> más. La inteligencia humana otros unos <span class=\"num\">800 Ma</span>. Los dos motores del cambio son la mutación (azar) y la selección natural (direccional).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Charles Darwin</span> argumentó que mutaciones aleatorias del ADN producen variantes y la selección favorece las más eficientes. Ulmschneider sostiene que la <span class=\"term\">convergencia evolutiva</span> (aparición independiente de rasgos similares bajo presiones parecidas) demuestra que la selección también gobierna la evolución a largo plazo. La inteligencia comparable en cuervos y monos es un ejemplo.",
        },
        {
          type: 'paragraph',
          html: "Entre los hitos figura la endosimbiosis hacia eucariotas, seguida del oxígeno como catástrofe ambiental (~<span class=\"num\">2,4 Ga</span>). Más tarde llegaron la multicelularidad y los genes reguladores del desarrollo (~630–542 Ma). Por último, plantas y animales conquistaron la tierra (~<span class=\"num\">470 Ma</span>). El evento K/T (<span class=\"num\">65 Ma</span>) extinguió dinosaurios no aviares y abrió camino a mamíferos.",
        },
        {
          type: 'paragraph',
          html: "La inteligencia humana requiere visión estereoscópica, bipedestación con manos libres, vida social, lenguaje y cultura de herramientas. El volumen cerebral se triplicó desde Australopithecus.",
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
          html: "Acumular información, de genes a cultura, es la estrategia evolutiva ganadora. Las mismas leyes de la naturaleza deberían producir <span class=\"key-term\">inteligencia</span> en planetas similares.",
        },
        {
          type: 'paragraph',
          html: "Si la evolución puede crear mentes, el siguiente paso es buscar señales de vida más simple en el Sistema Solar y más allá.",
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
          html: "¿Cómo buscamos vida fuera de la Tierra sin ir allí? La investigación combina dos vías: la búsqueda directa en el Sistema Solar y en exoplanetas, o la inferencia de probabilidades a partir del origen terrestre. Hasta ahora no hay detección confirmada, pero las técnicas mejoran rápidamente.",
        },
        {
          type: 'paragraph',
          html: "En el Sistema Solar, el satélite <span class=\"term\">Europa</span> (luna helada de Júpiter con océano subsuperficial) ofrece un posible hábitat primitivo. <span class=\"term\">Marte</span> (el planeta rojo vecino) tuvo ríos, deltas y un océano norteño con atmósfera densa de CO₂ durante cientos de millones de años. Luego sufrió congelación irreversible al cesar la tectónica (~<span class=\"num\">2 Ga</span>).",
        },
        {
          type: 'paragraph',
          html: "Las misiones Viking (<span class=\"num\">1976</span>) no detectaron vida en Marte. Los meteoritos marcianos (ALH84001) suscitaron debate sobre fósiles microscópicos. Fuera del Sistema Solar conviene detectar agua y ozono como <span class=\"term\">biosignaturas</span> (compuestos atmosféricos fuera del equilibrio termodinámico que sugieren vida).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">James Lovelock</span> (<span class=\"num\">1965</span>) señaló que la vida produce compuestos inesperados. El metano terrestre es un billón de veces más abundante de lo esperado en equilibrio químico. Miles de avistamientos de objetos voladores no identificados se reportaron desde <span class=\"num\">1947</span>. El informe Condon (<span class=\"num\">1969</span>) concluyó que veintiún años de estudio no añadieron conocimiento científico.",
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
          html: "La detección de ozono y agua en exoplanetas terrestres será el método más prometedor para detectar <span class=\"key-term\">vida</span>. El SETI por radio se trata en el capítulo 10.",
        },
        {
          type: 'paragraph',
          html: "Mientras buscamos señales biológicas, conviene preguntar qué futuro le espera a la única civilización tecnológica que conocemos.",
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
          html: "¿Qué nos dice el futuro humano sobre civilizaciones extraterrestres? Reflexionar sobre nuestro devenir ilumina la naturaleza de civilizaciones avanzadas. Ulmschneider describe tres desarrollos paralelos: conquista del espacio, dominio de la biología e inteligencia artificial.",
        },
        {
          type: 'paragraph',
          html: "La colonización del Sistema Solar incluye estaciones espaciales, bases lunares y marcianas, y minería de asteroides. Los hábitats cilíndricos de <span class=\"person\">Gerard O'Neill</span> podrían albergar hasta veinte millones de personas autosuficientes. El viaje interestelar es lento. Un viaje a α Centauri a unos cien km/s requeriría unos doce mil años.",
        },
        {
          type: 'paragraph',
          html: "El dominio biológico avanza con la secuenciación del genoma humano (<span class=\"num\">2001–2003</span>, unos treinta mil genes) y la creación de vida mínima en laboratorio. Los peligros externos (supernovas, rayos gamma, impactos) son poco probables como extinción total.",
        },
        {
          type: 'paragraph',
          html: "Los peligros internos, sin embargo, son los formidables. Entre ellos figuran el daño ambiental, las invenciones incontrolables, la guerra y el terrorismo. Ulmschneider propone distribuir la humanidad en colonias espaciales, controlar armas de destrucción masiva y educar la responsabilidad social. El factor <span class=\"term\">L de Drake</span> (duración media de una civilización tecnológica comunicante) es el más incierto de la ecuación de Drake.",
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
          html: "El crecimiento incesante de conocimiento y poder aumenta al mismo tiempo la capacidad de <span class=\"key-term\">autodestrucción</span>. L es el factor más incierto de la ecuación de Drake.",
        },
        {
          type: 'paragraph',
          html: "Si las civilizaciones suelen durar poco, eso explica por qué aún no hemos oído a ninguna, a pesar de los millones de planetas habitables.",
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
          html: "¿Existen civilizaciones inteligentes y por qué no las vemos? Ulmschneider ya construyó el marco de planetas habitables, origen y evolución de la vida. Ahora aborda la pregunta central. El argumento a favor es que la evolución química hacia la vida parece plausible. La convergencia evolutiva sugiere que acumular información es estrategia universal.",
        },
        {
          type: 'paragraph',
          html: "Su estimación da unos <span class=\"num\">4000</span> civilizaciones tecnológicas existentes en la galaxia, con distancia media de unos <span class=\"num\">1700 años luz</span>. Sobre la naturaleza de los extraterrestres, una civilización mil millones de años más avanzada difiere de nosotros tanto como nosotros de un organismo unicelular.",
        },
        {
          type: 'paragraph',
          html: "En etapa comparable a la nuestra podrían parecerse a humanos. Millones de años después, probablemente serían androides no orgánicos. La búsqueda por radio llamada <span class=\"term\">SETI</span> (Search for Extraterrestrial Intelligence) abarca desde Ozma (<span class=\"num\">1960</span>) hasta META, BETA y SERENDIP. La inició el radioastrónomo <span class=\"person\">Frank Drake</span>.",
        },
        {
          type: 'paragraph',
          html: "La banda de microondas de uno a veinte GHz, llamada «water hole», tiene mínimo ruido de fondo. Hasta <span class=\"num\">2005</span>, el resultado fue nulo. Los receptores actuales detectarían una emisora de 3 kW a 100 años luz, no a 1700.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">paradoja de Fermi</span> (el enigma de por qué no vemos civilizaciones pese a los millones de planetas habitables) admite cuatro respuestas. No existen o ya perecieron. La visita es técnicamente imposible. Están cerca pero son indetectables. O no les interesamos, como en la <span class=\"term\">hipótesis del zoo</span> (civilizaciones avanzadas que observan sin intervenir). El físico <span class=\"person\">Enrico Fermi</span> la formuló en <span class=\"num\">1950</span>.",
        },
        {
          type: 'paragraph',
          html: "Ulmschneider favorece que la mayoría se autodestruyeron y que las supervivientes evitan contacto o usan medios que no detectamos.",
        },
        {
          type: 'quote',
          text: "«Si nunca buscamos, la probabilidad de éxito es cero.»",
          attribution: "Giuseppe Cocconi y Philip Morrison (1959)",
        },
        {
          type: 'key',
          html: "La vida inteligente probablemente es común, pero la comunicación detectable es rara porque <span class=\"key-term\">L es corto</span> y las distancias galácticas son enormes.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Zona habitables continuamente habitables (CHZ)",
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
    "text": "Gran oxidación; atmósfera rica en O₂."
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
  "La vida inteligente no es un accidente cósmico aislado.",
  "Requiere estrellas que forjen carbono, planetas estables en la zona habitable y millones de años de evolución en tierra firme.",
  "Por eso la paradoja de Fermi no prueba nuestra singularidad.",
  "Prueba que el conocimiento sin responsabilidad es letal.",
  "Buscar por radio, espectroscopía o geología planetaria sigue siendo la única forma de saberlo."
],
    highlight: "Si las leyes de la naturaleza son universales, la inteligencia debería ser frecuente; pero si no la vemos, el cuello de botella es la supervivencia de las civilizaciones tecnológicas, no el origen de la vida.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Peter Ulmschneider",
    line2: "\"Intelligent Life in the Universe\" · Springer · 2006 (2.ª ed.)",
  },
}
