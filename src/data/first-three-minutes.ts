import type { BookSummary } from '../types/book'

export const firstThreeMinutes: BookSummary = {
  slug: "first-three-minutes",
  meta: {
    title: "The First Three Minutes",
    subtitle: "Una visión moderna del origen del universo",
    author: "Steven Weinberg",
    meta: [
      "📖 1977 · Afterword Cosmology Since 1976 · Basic Books",
      "✍️ Subtítulo EN: A Modern View of the Origin of the Universe",
    ],
    titleEs: "Los tres primeros minutos",
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
    "label": "Introducción: el gigante y la vaca"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "La expansión del universo"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "El fondo de radiación cósmica de microondas"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Receta para un universo caliente"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Los tres primeros minutos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Una digresión histórica"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "El primer centésimo de segundo"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Epílogo: el futuro"
  },
  {
    "id": "afterword",
    "num": "09",
    "label": "Postfacio: cosmología desde 1976"
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
  },
  {
    "id": "cierre",
    "num": "★",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Prefacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué vale la pena escribir ahora un libro sobre el universo temprano?",
        },
        {
          type: 'paragraph',
          html: "El libro nació de una charla en Harvard en <span class=\"num\">noviembre de 1973</span>. <span class=\"person\">Steven Weinberg</span>, físico de partículas, dudó al principio porque la cosmología no era su hábitat habitual. Aun así, siguió pensando en el problema del Génesis. En el universo temprano, sobre todo en el primer centésimo de segundo, convergen la cosmología y la física de partículas.",
        },
        {
          type: 'paragraph',
          html: "En la última década había surgido un «modelo estándar» ampliamente aceptado del universo temprano. Por primera vez se podía decir con alguna confianza qué temperatura tenía el cosmos al final del primer segundo. También se conocían su densidad y composición química al final del minuto o del año. Esa posibilidad de calcular numéricamente era lo que Weinberg quería transmitir.",
        },
        {
          type: 'paragraph',
          html: "El libro va dirigido a un lector inteligente sin formación en física ni astronomía. Solo usa aritmética, define los términos y evita la notación científica en prosa. No es cosmología «clásica» completa ni historia definitiva de treinta años de investigación. El foco es el universo temprano tras el descubrimiento del fondo de radiación cósmica en <span class=\"num\">1965</span>.",
        },
        {
          type: 'key',
          html: "Es el momento oportuno para contar el universo temprano porque existe un modelo estándar que permite calcular numéricamente sus condiciones desde el primer segundo en adelante.",
        },
        {
          type: 'paragraph',
          html: "El prefacio delimita el alcance; el capítulo 1 presenta en síntesis ese modelo estándar cuyos fundamentos desarrollará el resto del libro.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Introducción: el gigante y la vaca",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo llegamos al modelo estándar del universo temprano y por qué desplazó teorías filosóficamente más atractivas, como el estado estacionario?",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">Edda menor</span> (mitos nórdicos compilados ~1220 por <span class=\"person\">Snorri Sturleson</span>) explica el origen con Ymer, la vaca Audhumla y la sal. Cada respuesta exige una nueva complicación. No podemos renunciar a la cosmogonía científica. Durante décadas, sin embargo, el estudio del universo temprano pareció indigno de un científico respetable porque faltaba base observacional y teórica.",
        },
        {
          type: 'paragraph',
          html: "En la última década todo cambió. Existe un «modelo estándar» del universo temprano, similar al big bang pero con una receta específica de contenidos. Lo aceptaron por presión de datos, no por modas filosóficas. Al inicio hubo una explosión simultánea en todo el espacio: cada partícula se alejó de las demás.",
        },
        {
          type: 'paragraph',
          html: "A ~<span class=\"num\">10⁻² s</span> y ~<span class=\"num\">10¹¹ °C</span>, la materia era una sopa de electrones, positrones, neutrinos y fotones en equilibrio dinámico. Había ~<span class=\"num\">10⁹</span> fotones por partícula nuclear, dato tomado de la observación del <span class=\"term\">fondo de radiación cósmica de microondas</span> (CMB).",
        },
        {
          type: 'paragraph',
          html: "Al cabo de tres minutos quedaban ~<span class=\"num\">73 %</span> hidrógeno y ~<span class=\"num\">27 %</span> helio. El modelo deja vaguedad vergonzosa en el instante inicial y exige fijar condiciones iniciales, sobre todo el ratio fotones/nucleones. El estado estacionario (Bondi, Gold, Hoyle) evitaba el problema negando un universo temprano. Los capítulos 2 y 3 describirán las dos pistas observacionales que impusieron el modelo estándar: la recesión galáctica y la radiación estática universal.",
        },
        {
          type: 'key',
          html: "La cosmogonía ganó respetabilidad porque un modelo estándar del universo temprano impuso consenso por datos empíricos, no por mandarines ni preferencias filosóficas.",
        },
        {
          type: 'paragraph',
          html: "El capítulo 1 resume el modelo; el capítulo 2 reconstruye la primera pila empírica: la expansión de las galaxias.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "La expansión del universo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué nos dicen las observaciones sobre el movimiento de las galaxias y qué implica eso sobre el origen del universo?",
        },
        {
          type: 'paragraph',
          html: "El cielo nocturno parece inmutable, pero es ilusión. Las galaxias se alejan con velocidad proporcional a la distancia, así que el universo está en una explosión violenta. El <span class=\"term\">efecto Doppler</span> (cambio de longitud de onda según el movimiento fuente-observador) permite medir velocidades radiales con gran precisión en líneas espectrales.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Johann Christian Doppler</span> lo propuso en 1842. <span class=\"person\">William Huggins</span> lo aplicó a estrellas en 1868.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Edwin Hubble</span> resolvió la nebulosa de Andrómeda (M31) en estrellas en 1923, usando variables Cefeidas: estrellas pulsantes cuya luminosidad revela la distancia. Estaba a millones de años luz: una galaxia como la nuestra.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Vesto Slipher</span> ya había medido corrimientos al rojo. En 1929, Hubble anunció que esos corrimientos crecen con la distancia.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">principio cosmológico</span> (homogeneidad e isotropía a escala de cúmulos) exige esa proporcionalidad: la ley de Hubble. Con H₀ ~<span class=\"num\">15 km/s por millón de años luz</span>, la edad característica es ~<span class=\"num\">20.000 millones de años</span>, menor si la gravedad frena la expansión.",
        },
        {
          type: 'paragraph',
          html: "Los modelos de <span class=\"person\">Alexandre Friedmann</span> describen dos destinos según la densidad. Si supera la crítica (~3 átomos de H por 1000 litros), el universo es cerrado y acabará contrayéndose. Si no, la expansión es eterna. El corrimiento al rojo también estira longitudes de onda con la expansión. Astrónomos como <span class=\"person\">Halton Arp</span> dudan de la interpretación Doppler, pero el <span class=\"term\">horizonte cósmico</span> (límite causal que encoge hacia el pasado) permite inferir el universo temprano.",
        },
        {
          type: 'key',
          html: "La impresión de cielo fijo es falsa: las galaxias se apartan proporcionalmente a su distancia, lo que exige un pasado denso donde no existían galaxias, estrellas ni átomos.",
        },
        {
          type: 'paragraph',
          html: "Si el universo estuvo más caliente y denso, la luz dominante debió dejar un fondo detectable hoy: el capítulo 3 trata esa radiación.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "El fondo de radiación cósmica de microondas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es el «exceso de temperatura de antena» que Penzias y Wilson detectaron en 1964–1965?",
        },
        {
          type: 'paragraph',
          html: "En Holmdel, Nueva Jersey, <span class=\"person\">Arno Penzias</span> y <span class=\"person\">Robert Wilson</span> midieron ruido de microondas isotrópico con una antena de Bell Labs. La señal equivalía a ~<span class=\"num\">3,5 K</span> a 7,35 cm. No variaba con dirección, hora ni estación, y no venía de la galaxia. Incluso expulsaron palomas que ensuciaban la antena. Describieron el ruido como «temperatura equivalente» de cuerpo opaco.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Robert Dicke</span> y <span class=\"person\">Jim Peebles</span> en Princeton habían predicho radiación residual del universo caliente. La estimaban en ~<span class=\"num\">10 K</span>. Alpher y Herman la habían calculado en ~<span class=\"num\">5 K</span> en <span class=\"num\">1948</span>. La radiación fósil sobrevivió la expansión porque su temperatura cae en proporción inversa al tamaño del universo.",
        },
        {
          type: 'paragraph',
          html: "A los ~<span class=\"num\">700.000 años</span> de equilibrio térmico, a ~<span class=\"num\">3000 K</span>, el universo alcanzó la «recombinación». Entonces electrones y núcleos formaron átomos, y el universo se volvió transparente.",
        },
        {
          type: 'paragraph',
          html: "Medidas en decenas de longitudes de onda confirman distribución de <span class=\"term\">cuerpo negro</span> (Planck) a ~<span class=\"num\">3 K</span>. La excitación rotacional del cianuro (CN) en la nebulosa de Ofiuco (~<span class=\"num\">2,3 K</span>, 1941) anticipó el resultado. Hay ~<span class=\"num\">550.000 fotones/litro</span> y entre <span class=\"num\">100 y 20.000 millones</span> fotones por protón.",
        },
        {
          type: 'paragraph',
          html: "Ese ratio, casi constante, gobernará la nucleosíntesis. La masa de Jeans impedía formar galaxias antes de átomos estables. La transición radiación/materia (~<span class=\"num\">4000 K</span>) y la transparencia (~<span class=\"num\">3000 K</span>) coinciden sin explicación clara.",
        },
        {
          type: 'key',
          html: "El ruido isotrópico de ~3 K es radiación fósil de un universo en equilibrio térmico y fija el ratio crucial de fotones a partículas nucleares (~10⁹).",
        },
        {
          type: 'paragraph',
          html: "Con expansión, CMB y equilibrio térmico, el capítulo 4 puede escribir la receta de ingredientes del universo caliente.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Receta para un universo caliente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ingredientes y qué parámetros conservados definen el universo caliente en equilibrio térmico?",
        },
        {
          type: 'paragraph',
          html: "Por encima de temperaturas umbral, colisiones de fotones crean pares partícula-antipartícula (E=mc²). La temperatura escala con el tamaño del universo. Por ejemplo, electrones y positrones aparecen en masa por encima de ~<span class=\"num\">6×10⁹ K</span>. En equilibrio térmico, la cantidad de cada especie queda fijada por creación y aniquilación mutuas.",
        },
        {
          type: 'paragraph',
          html: "Cuando materia y antimateria fueran exactamente iguales, solo quedaría radiación. Estamos aquí porque hubo un exceso minúsculo, una partícula extra por cada mil millones, sin explicación satisfactoria. La población de neutrinos se infiere, no se observa directamente. La era de radiación pura empieza tras los primeros minutos, no desde t=0.",
        },
        {
          type: 'paragraph',
          html: "En equilibrio térmico bastan tres cantidades conservadas más la temperatura. La <span class=\"term\">carga eléctrica</span> (debe ser cero) debe cancelarse en total. El <span class=\"term\">número bariónico</span> (protones y neutrones menos antipartículas) ronda ~<span class=\"num\">10⁻⁹</span> por fotón. El <span class=\"term\">número leptónico</span> (electrones, muones, neutrinos) es pequeño, por analogía. Sus densidades por fotón quedan fijas de una vez.",
        },
        {
          type: 'paragraph',
          html: "En conjunto, la receta incluye carga cero, bariones ~10⁻⁹ por fotón y leptones inciertos pero pequeños. La temperatura escala como 3 K multiplicado por el cociente entre el tamaño actual y el entonces. Después basta dejar evolucionar el universo en expansión.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Umbral térmico",
              "description": "Por encima de mc²/k_B, fotones crean pares materia-antimateria en equilibrio.",
              "icon": "⚡"
            },
            {
              "title": "Tres conservadas",
              "description": "Carga, bariones y leptones reducen la arbitrariedad de la receta cosmológica.",
              "icon": "📊"
            },
            {
              "title": "Era radiación",
              "description": "Tras nucleosíntesis, radiación domina hasta ~700.000 años y recombinación.",
              "icon": "🌡️"
            }
          ],
        },
        {
          type: 'key',
          html: "El contenido del universo temprano queda determinado por equilibrio térmico más tres cantidades conservadas cuyas densidades por fotón fijan la receta.",
        },
        {
          type: 'paragraph',
          html: "Con la receta en mano, el capítulo 5 reconstruye cuadro a cuadro los primeros tres minutos.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Los tres primeros minutos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurrió, paso a paso, en los primeros tres minutos del universo?",
        },
        {
          type: 'paragraph',
          html: "Weinberg reconstruye cuadro a cuadro desde ~<span class=\"num\">10⁻² s</span> y ~<span class=\"num\">10¹¹ K</span>, por debajo de los umbrales de mesones π. En el primer instante hay una sopa de electrones, positrones, neutrinos y fotones en equilibrio perfecto. Hay ~1 protón o neutrón por mil millones de fotones, y protones y neutrones están ~50-50.",
        },
        {
          type: 'paragraph',
          html: "A ~<span class=\"num\">0,11 s</span> y 3×10¹⁰ K, la proporción es 38 % neutrones y 62 % protones. A ~<span class=\"num\">1 s</span>, los neutrinos se desacoplan y siguen expandiéndose sin interactuar.",
        },
        {
          type: 'paragraph',
          html: "A ~<span class=\"num\">14 s</span> y 3×10⁹ K, la aniquilación e⁺e⁻ calienta los fotones. El «cuello de botella del deuterio» impide la nucleosíntesis porque el D se destruye al formarse. A ~<span class=\"num\">3 min 2 s</span> y 10⁹ K, casi no quedan e⁺e⁻.",
        },
        {
          type: 'paragraph',
          html: "Poco después, al ~<span class=\"num\">0,9×10⁹ K</span>, llega ~<span class=\"num\">3 min 46 s</span>. Entonces el deuterio se estabiliza y la cadena p+n → D → He ensambla ~<span class=\"num\">26 %</span> de helio primordial. La fracción final varía entre 22 y 28 % según la densidad. No hay núcleos estables con 5 u 8 partículas.",
        },
        {
          type: 'paragraph',
          html: "Peebles (<span class=\"num\">1965</span>) y Wagoner–Fowler–Hoyle calcularon el helio cosmológico, y la abundancia estelar (~20–30 % He) encaja con la predicción.",
        },
        {
          type: 'paragraph',
          html: "El deuterio (~<span class=\"num\">20 ppm</span>, satélite Copernicus, 1973) sugiere un universo abierto, pero Weinberg duda de inferir la densidad solo a partir del deuterio. El fondo de neutrinos (~<span class=\"num\">2 K</span>, 71,38 % de la temperatura fotónica) sería una confirmación decisiva, aunque indetectable con la tecnología de entonces. Además, el principio cosmológico no está probado antes del primer segundo, y los modelos <span class=\"term\">mixmaster</span> de Misner (universo caótico con expansiones desiguales) siguen siendo especulativos.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~26 %",
              "label": "Helio primordial (predicción central)"
            },
            {
              "value": "~10⁹",
              "label": "Fotones por partícula nuclear"
            },
            {
              "value": "3 min 46 s",
              "label": "Inicio de nucleosíntesis primordial"
            }
          ],
        },
        {
          type: 'key',
          html: "Siguiendo expansión y enfriamiento cuadro a cuadro, equilibrio térmico y reacciones nucleares producen ~22–28 % de helio primordial, predicción verificable que consolida el modelo estándar.",
        },
        {
          type: 'paragraph',
          html: "Si la teoría ya permitía predecir el CMB, ¿por qué nadie lo buscó antes de 1965? El capítulo 6 explora esa omisión histórica.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Una digresión histórica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el fondo de microondas no se buscó años antes de su descubrimiento fortuito?",
        },
        {
          type: 'paragraph',
          html: "Alpher y Herman predijeron ~<span class=\"num\">5 K</span> en <span class=\"num\">1948</span>. Recalcularon en <span class=\"num\">1953</span>. Dicke fijó límite menor que 20 K en <span class=\"num\">1946</span>. La tecnología viable existía desde mediados de los años cuarenta y cincuenta. Penzias y Wilson desconocían la predicción. En <span class=\"num\">1964</span>, Zeldovich, Hoyle, Tayler y Peebles redescubrieron la conexión mientras Penzias y Wilson ya observaban.",
        },
        {
          type: 'paragraph',
          html: "Tres razones explican la omisión. La primera es que la teoría de Gamow intentaba sintetizar todos los elementos en el big bang. Perdió credibilidad cuando Fermi y Turkevich mostraron que no hay núcleos estables con 5 u 8 partículas. La nucleosíntesis estelar (Salpeter, Burbidge, Fowler y Hoyle) monopolizó prestigio. La segunda fue fallas de comunicación entre teoría y experimento. Zeldovich malinterpretó la «temperatura del cielo» medida por Ohm como menor que 1 K. La tercera fue resistencia a tomar en serio el universo temprano como tema respetable.",
        },
        {
          type: 'paragraph',
          html: "Hoyle y Tayler calcularon ~<span class=\"num\">36 %</span> de helio cosmológico en <span class=\"num\">1964</span> sin inferir el CMB. Gamow citó ~<span class=\"num\">7 K</span> en <span class=\"num\">1953</span> con argumento matemático falaz. Weinberg concluye que el descubrimiento de <span class=\"num\">1965</span> «nos obligó a tomar en serio que hubo un universo temprano». El error habitual en física no es tomar las teorías demasiado en serio, sino no tomarlas lo bastante.",
        },
        {
          type: 'key',
          html: "La detección del CMB en 1965 fue accidental porque, pese a predicciones teóricas, nadie emprendió una búsqueda sistemática: fallas de comunicación, prestigio de la nucleosíntesis estelar y resistencia al universo temprano.",
        },
        {
          type: 'paragraph',
          html: "Tras la historia reciente, el capítulo 7 retrocede más allá del primer fotograma del capítulo 5, hacia el centésimo de segundo.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "El primer centésimo de segundo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué podemos saber sobre el primer centésimo de segundo y el «verdadero» comienzo, y qué queda fuera de alcance?",
        },
        {
          type: 'paragraph',
          html: "Por encima de ~<span class=\"num\">10¹¹ K</span> aparecen hadrones (mesones π, etc.). Dos escuelas rivalizan. Una defiende la «democracia nuclear» (Hagedorn, temperatura máxima ~<span class=\"num\">2×10¹² K</span>) y la otra apuesta por quarks. En <span class=\"num\">1973</span>, Gross, Politzer y Wilczek demostraron <span class=\"term\">libertad asintótica</span> (fuerzas entre quarks se debilitan a distancias cortas). Eso implica quarks libres antes del centésimo de segundo.",
        },
        {
          type: 'paragraph',
          html: "La transición de fase <span class=\"term\">electrodébil</span> (~<span class=\"num\">3×10¹⁵ K</span>, Weinberg–Salam, Kirzhnits–Linde) unificó fuerzas débiles y electromagnéticas y luego se «congeló». La gravedad cuántica importa a ~<span class=\"num\">10³² K</span> (~<span class=\"num\">10⁻⁴³ s</span>): ahí falla toda extrapolación. Posible universo sin singularidad (rebote), y el tiempo cero absoluto puede ser límite lógico. Quarks confinados no son observables libres, y radiación gravitacional de fondo ~<span class=\"num\">1 K</span> sería indetectable.",
        },
        {
          type: 'paragraph',
          html: "Aun así, el equilibrio térmico del primer segundo elimina la memoria de condiciones iniciales anteriores. Lo hace para todo lo observable hoy, como una cena hervida que borra los ingredientes originales. Nada de lo que medimos (helio, CMB, neutrinos) depende del pasado previo al primer segundo, salvo quizá el ratio fotones/nucleones.",
        },
        {
          type: 'key',
          html: "Antes del centésimo de segundo un velo de física de partículas impide calcular con confianza, pero el equilibrio térmico del primer segundo borra la memoria de condiciones iniciales anteriores para todo lo observable hoy.",
        },
        {
          type: 'paragraph',
          html: "Si el pasado remoto es opaco, el capítulo 8 proyecta el futuro lejano: expansión eterna o colapso final.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Epílogo: el futuro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hacia dónde va el universo y qué sentido tiene la existencia humana frente a ese destino?",
        },
        {
          type: 'paragraph',
          html: "Si la densidad supera la crítica, el universo es finito y recontraerá. En el escenario de densidad igual al doble de la crítica y H₀ ~15 km/s/Mly, el universo tiene una edad de ~<span class=\"num\">10.000 millones de años</span>. Entonces expandiría ~<span class=\"num\">50.000 millones</span> más y luego colapsaría.",
        },
        {
          type: 'paragraph',
          html: "En recontracción el cielo dominaría radiación (~<span class=\"num\">300 K</span> al 1 % del tamaño actual). Galaxias, átomos y núcleos se desharían en calor creciente. Serían los primeros tres minutos a la inversa.",
        },
        {
          type: 'paragraph',
          html: "Incertidumbres del capítulo 7 (anisotropía, gravedad cuántica) invalidarían predicciones del «último centésimo de segundo». Algunos esperan un «rebote» cosmológico, con Ragnarök en la Edda como analogía, pero la entropía creciente por viscosidad bulk dificulta ciclos infinitos sin inicio. El modelo oscilante evita Génesis pero choca con el ratio fotones/nucleones finito.",
        },
        {
          type: 'paragraph',
          html: "Weinberg admite tentación de creer que la vida humana estaba «incorporada desde el principio». Volando sobre Wyoming, el paisaje parece acogedor, pero el cosmos es hostil. Evolucionó desde condiciones insospechadas hacia frío eterno o calor intolerable. Cuanto más comprensible parece el universo, más carente de propósito.",
        },
        {
          type: 'key',
          html: "El destino del universo depende de si la densidad supera la crítica: expansión eterna hacia frío y vacío, o contracción que deshace galaxias, átomos y núcleos repitiendo a la inversa los primeros tres minutos.",
        },
        {
          type: 'paragraph',
          html: "El epílogo cierra el arco temporal; el postfacio resume qué cambió en cosmología desde 1976 sin derribar el esquema central.",
        },
      ],
    },
    {
      id: "afterword",
      num: "09",
      title: "Postfacio: cosmología desde 1976",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ha cambiado en cosmología desde la publicación original del libro?",
        },
        {
          type: 'paragraph',
          html: "El esquema general sigue vigente desde 1976. Incluye expansión, CMB como cuerpo negro y nucleosíntesis a ~3 min. La anisotropía del CMB confirma movimiento de la galaxia ~<span class=\"num\">400 km/s</span> hacia Virgo. H₀ posiblemente ronda ~<span class=\"num\">30 km/s/Mly</span>, aunque no es universalmente aceptado. La densidad total equivale a ~⅓–½ de la crítica, y los bariones aportan solo pocos %. Aparece entonces una paradoja. ¿Dónde está la masa faltante?",
        },
        {
          type: 'paragraph',
          html: "Entre los candidatos a <span class=\"term\">masa oscura</span> figuran neutrinos masivos (10–40 eV, según experimentos en Novosibirsk) y photinos, partículas supersimétricas hipotéticas.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Vera Rubin</span> mostró velocidades rotacionales altas en galaxias. La violación de bariones/leptones y la generación cosmológica de bariones (Sakharov, Yoshimura) explicarían el ratio ~10⁻⁹ sin fijarlo ad hoc.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Alan Guth</span> propuso <span class=\"term\">inflación</span> (expansión ultrarrápida inicial) y superenfriamiento para homogeneidad, monopolos magnéticos y abundancia de materia.",
        },
        {
          type: 'paragraph',
          html: "La formación de galaxias sigue sin resolver: «la Vía Láctea y M31 siguen burlando nuestra ignorancia». Valores teóricos y experimentales del ratio bariones/fotones aún son demasiado inciertos para un test crítico. El progreso llena vacíos observacionales y empuja teoría hacia GUT e inflación, sin alterar el esquema central de 1977.",
        },
        {
          type: 'key',
          html: "Desde 1976 el esquema general se mantiene. El progreso llena vacíos observacionales y empuja la teoría hacia el universo ultratemprano (GUT, inflación, origen de bariones, masa oscura).",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Modelo estándar del universo temprano",
    "description": "Big bang con receta específica de contenidos; distinto del término genérico «big bang»."
  },
  {
    "title": "Principio cosmológico",
    "description": "Homogeneidad e isotropía a escala de cúmulos; fundamenta la ley de Hubble."
  },
  {
    "title": "Equilibrio térmico",
    "description": "Colisiones fijan distribuciones de partículas; borra memoria de condiciones iniciales detalladas."
  },
  {
    "title": "Radiación de cuerpo negro (Planck)",
    "description": "Distribución universal de energía vs longitud de onda; clave para interpretar el CMB."
  },
  {
    "title": "Ratio fotones / nucleones (~10⁹)",
    "description": "Parámetro observacional crucial, medido vía CMB, que gobierna nucleosíntesis y abundancias."
  },
  {
    "title": "Nucleosíntesis primordial",
    "description": "Ensamblaje de H, He y trazas en los primeros minutos; helio ~22–28 % es predicción central."
  },
  {
    "title": "Constante / ley de Hubble",
    "description": "Velocidad de recesión proporcional a distancia; fija escala temporal del universo."
  },
  {
    "title": "Cantidades conservadas",
    "description": "Carga, bariones y leptones reducen la arbitrariedad de la receta cosmológica."
  },
  {
    "title": "Corrimiento al rojo cosmológico",
    "description": "Longitudes de onda estiradas proporcionalmente a la separación entre galaxias típicas."
  },
  {
    "title": "Horizonte cósmico",
    "description": "Límite causal que encoge hacia el pasado y permite inferir el universo temprano."
  }
],
  chronology: [
  {
    "year": "~1220",
    "text": "Snorri Sturleson compila la Edda menor"
  },
  {
    "year": "1842",
    "text": "Doppler formula el efecto que lleva su nombre"
  },
  {
    "year": "1868",
    "text": "Espectroscopía estelar; Huggins aplica Doppler a estrellas"
  },
  {
    "year": "1923",
    "text": "Hubble resuelve M31 en estrellas Cefeidas"
  },
  {
    "year": "1929",
    "text": "Ley de Hubble: corrimiento al rojo proporcional a distancia"
  },
  {
    "year": "1946",
    "text": "Dicke fija límite &lt;20 K al fondo de microondas"
  },
  {
    "year": "1948",
    "text": "Alpher y Herman predicen CMB ~5 K"
  },
  {
    "year": "1964–1965",
    "text": "Penzias y Wilson detectan exceso de temperatura ~3,5 K"
  },
  {
    "year": "1972–1976",
    "text": "Globos Berkeley confirman cuerpo negro del CMB"
  },
  {
    "year": "1973",
    "text": "Libertad asintótica (Gross, Politzer, Wilczek); corrientes neutras"
  },
  {
    "year": "1976",
    "text": "Publicación original de *The First Three Minutes*"
  },
  {
    "year": "~1981–1982",
    "text": "Datos del postfacio: anisotropía CMB, inflación, masa oscura"
  }
],
  figures: [
  {
    "name": "Snorri Sturleson",
    "role": "Compila mitos nórdicos de cosmogonía (Edda menor)"
  },
  {
    "name": "Johann Christian Doppler",
    "role": "Efecto Doppler en ondas sonoras y luminosas · 1842"
  },
  {
    "name": "Edwin Hubble",
    "role": "Resuelve naturaleza extragaláctica de nebulosas · ley de Hubble · 1923–1929"
  },
  {
    "name": "Albert Einstein / Alexandre Friedmann",
    "role": "Relatividad general · modelos cosmológicos homogéneos e isotrópicos"
  },
  {
    "name": "George Gamow / Ralph Alpher / Robert Herman",
    "role": "Teoría del big bang · predicción del CMB ~5 K · 1948"
  },
  {
    "name": "Arno Penzias / Robert Wilson",
    "role": "Descubrimiento fortuito del CMB · Holmdel · 1964–1965"
  },
  {
    "name": "Robert Dicke / Jim Peebles / P. G. Roll / D. T. Wilkinson",
    "role": "Interpretación cosmológica del CMB · Princeton"
  },
  {
    "name": "Steven Weinberg",
    "role": "Autor · teoría electrodébil · unificación de fuerzas"
  },
  {
    "name": "Fred Hoyle / Halton Arp",
    "role": "Estado estacionario · crítica a interpretación del corrimiento al rojo"
  },
  {
    "name": "Alan Guth",
    "role": "Inflación y superenfriamiento · postfacio"
  },
  {
    "name": "Andrei Sakharov / Vera Rubin / G. de Vaucouleurs",
    "role": "Generación de bariones · rotación galáctica · velocidades peculiares"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Podemos describir con confianza cuantitativa el universo desde el primer centésimo de segundo: temperatura, densidad y composición química.",
  "El «modelo estándar» del universo temprano descansa en datos empíricos —expansión galáctica y CMB— y en leyes conocidas de la física, no en preferencias filosóficas.",
  "Antes del centésimo de segundo un velo de física de partículas limita lo calculable; después, la historia es numérica y verificable.",
  "Por eso el cosmos parece más comprensible cuanto más lejos miramos —y, para Weinberg, más carente de propósito trascendente.",
  "Entender ese origen eleva la vida humana del absurdo hacia la tragedia."
],
    highlight: "El equilibrio térmico borra la memoria del instante inicial, pero deja predicciones testeables como el helio primordial y la radiación de 3 K",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Steven Weinberg",
    line2: "\"The First Three Minutes\" · Basic Books · 1977",
  },
}
