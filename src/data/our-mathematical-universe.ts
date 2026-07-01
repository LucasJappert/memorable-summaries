import type { BookSummary } from '../types/book'

export const ourMathematicalUniverse: BookSummary = {
  slug: "our-mathematical-universe",
  meta: {
    title: "Our Mathematical Universe: My Quest for the Ultimate Nature of Reality",
    subtitle: "¿Es la realidad física puramente matemática?",
    author: "Max Tegmark",
    meta: [
      "📖 2014 · Alfred A. Knopf",
      "✍️ Cosmología, cuántica y la hipótesis del universo matemático (MUH)",
    ],
    titleEs: "Nuestro universo matemático: Mi búsqueda de la naturaleza última de la realidad",
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
    "label": "¿Qué es la realidad?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Nuestro lugar en el espacio"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Nuestro lugar en el tiempo"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Nuestro universo en cifras"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Nuestros orígenes cósmicos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Bienvenidos al multiverso"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Legos cósmicos"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "El multiverso de nivel III"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Realidad interna, externa y consensuada"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Realidad física y realidad matemática"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "¿Es el tiempo una ilusión?"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "El multiverso de nivel IV"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Vida, nuestro universo y todo lo demás"
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
      title: "Agradecimientos y propósito",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tegmark agradece a familia, colegas y revisores, entre ellos <span class=\"person\">Edward Witten</span>, <span class=\"person\">David Deutsch</span> y <span class=\"person\">Andrei Linde</span>, por ayudarlo a escribir este libro autobiográfico-científico. Su esposa <span class=\"person\">Meia</span> es su musa principal.",
        },
        {
          type: 'paragraph',
          html: "El libro no es un texto de consenso comunitario: es la búsqueda personal del autor sobre la naturaleza última de la realidad, desde la cosmología hasta la mecánica cuántica y la hipótesis de que el universo físico es un objeto matemático.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Qué es la realidad?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El libro abre con un relato personal: en <span class=\"num\">1985</span>, Tegmark casi muere atropellado en bicicleta al no mirar a la derecha. La decisión dependió de si un átomo de calcio entraba o no en una sinapsis — lo que plantea el enigma cuántico de si existen universos paralelos donde murió.",
        },
        {
          type: 'paragraph',
          html: "La física revela que la realidad es mucho más extraña de lo que parece: el acero es casi vacío, las partículas pueden estar en varios lugares a la vez, el tiempo se dilata a alta velocidad y la inflación cósmica sugiere copias infinitas de nosotros en el espacio. La evolución explica por qué nuestra intuición falla fuera de la escala humana.",
        },
        {
          type: 'paragraph',
          html: "Tegmark adopta el enfoque del detective: empezar con preguntas como «¿Qué tan grande es el universo?» y «¿De qué está hecho todo?». La lectura de <span class=\"person\">Richard Feynman</span> lo llevó a abandonar la economía en Estocolmo y dedicarse a la física. <span class=\"person\">Galileo</span> dijo que la naturaleza está escrita en el lenguaje de las matemáticas, y el objetivo del libro es explorar hasta qué punto eso es literalmente cierto.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Parte I",
              "description": "Zoom hacia afuera: espacio, tiempo, cosmología de precisión, inflación y multiverso espacial.",
              "icon": "🔭"
            },
            {
              "title": "Parte II",
              "description": "Zoom hacia adentro: partículas, cuántica y multiverso de Everett.",
              "icon": "🔬"
            },
            {
              "title": "Parte III",
              "description": "Paso atrás: realidad interna/externa, MUH, tiempo, multiverso IV y futuro de la vida.",
              "icon": "🧠"
            }
          ],
        },
        {
          type: 'key',
          html: "La lección principal de la física: <span class=\"key-term\">la realidad última no es como parece</span>, ni en lo muy grande ni en lo muy pequeño.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Nuestro lugar en el espacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un niño de cinco años pregunta: «¿El espacio continúa para siempre?». Es una pregunta científica seria sin respuesta definitiva en la Tierra. Tegmark lista <span class=\"num\">16</span> preguntas cosmológicas frecuentes, y once se responden en los capítulos <span class=\"num\">2–5</span>.",
        },
        {
          type: 'paragraph',
          html: "La historia es de subestimación repetida. <span class=\"person\">Eratóstenes</span> midió la circunferencia terrestre (~<span class=\"num\">40.000 km</span>). <span class=\"person\">Aristarco</span> calculó distancias a la Luna y al Sol. <span class=\"person\">Friedrich Bessel</span> midió la paralaje de <span class=\"num\">61 Cygni</span> (~un millón de veces más lejos que el Sol). <span class=\"person\">Edwin Hubble</span> mostró que Andrómeda está a millones de años luz.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Einstein</span> permitió espacio finito sin borde (como la superficie de una esfera o un toro) y curvado. Los matemáticos tratan el espacio como objeto con propiedades puramente numéricas: dimensionalidad, curvatura, topología. Tegmark anticipa que el espacio mismo podría ser matemático.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "≥10²¹",
              "label": "Factor mínimo por el que creció nuestra estimación del tamaño del espacio desde la era cazadora-recolectora"
            },
            {
              "value": "~115×",
              "label": "Relación distancia/tamaño para objetos que cubren medio grado en el cielo"
            },
            {
              "value": "~3 millones al",
              "label": "Distancia corregida a la galaxia de Andrómeda"
            }
          ],
        },
        {
          type: 'key',
          html: "Cada vez que ampliamos el horizonte, descubrimos que lo conocido forma parte de algo <span class=\"key-term\">aún más grande</span>.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Nuestro lugar en el tiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Newton</span> unificó cielo y tierra: la Luna no cae porque orbita a ~<span class=\"num\">1 km/s</span>. Un cañón a <span class=\"num\">7,9 km/s</span> orbitaría la Tierra. Las mareas frenan la rotación terrestre, y el sistema Tierra-Luna no puede tener más de ~<span class=\"num\">4–5 mil millones</span> de años en su forma actual.",
        },
        {
          type: 'paragraph',
          html: "Las nubes moleculares gigantes colapsan por gravedad frente a presión, formando estrellas y discos protoplanetarios «en forma de pizza». La datación radiactiva del uranio fija la edad de rocas y meteoritos en ~<span class=\"num\">4,5 mil millones</span> de años. <span class=\"person\">Alexander Friedmann</span> (<span class=\"num\">1922</span>) predijo un universo en expansión. <span class=\"person\">Georges Lemaître</span> lo redescubrió, y <span class=\"person\">Edwin Hubble</span> (<span class=\"num\">1929</span>) confirmó la ley v = Hd con edad ~<span class=\"num\">14 mil millones</span> de años.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">George Gamow</span> predijo plasma caliente y radiación de microondas (~<span class=\"num\">5 K</span>, medida ~<span class=\"num\">3 K</span> por <span class=\"person\">Penzias</span> y <span class=\"person\">Wilson</span>, Nobel <span class=\"num\">1978</span>). COBE (<span class=\"num\">1992</span>), WMAP y Planck cartografiaron fluctuaciones del CMB. La nucleosíntesis del Big Bang predice ~<span class=\"num\">25%</span> de helio, confirmado. Las semillas de estructura cósmica quedan para el capítulo <span class=\"num\">5</span>.",
        },
        {
          type: 'timeline',
          items: [
            {
              "year": "1687",
              "text": "Newton unifica gravedad terrestre y celestial."
            },
            {
              "year": "1922",
              "text": "Friedmann predice expansión y Big Bang."
            },
            {
              "year": "1929",
              "text": "Hubble confirma galaxias que se alejan."
            },
            {
              "year": "1948",
              "text": "Gamow, Alpher y Herman predicen CMB ~5 K."
            },
            {
              "year": "1964",
              "text": "Penzias y Wilson detectan CMB ~3 K."
            },
            {
              "year": "1992",
              "text": "COBE detecta fluctuaciones del CMB."
            }
          ],
        },
        {
          type: 'key',
          html: "Telescopios = máquinas del tiempo: mirar lejos es mirar al pasado cósmico.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Nuestro universo en cifras",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tras el CMB, la pregunta clave es el origen del <span class=\"term\">gran patrón cósmico</span>: galaxias agrupadas en filamentos. La gravedad amplifica fluctuaciones pequeñas, pero necesita semillas. En los <span class=\"num\">90</span>, la cosmología carecía de datos de precisión.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">espectro de potencia</span> del CMB codifica información cosmológica. Los picos acústicos (~<span class=\"num\">1°</span> angular) indican espacio plano y densidad total ~<span class=\"num\">10⁻²⁶ kg/m³</span>. Materia ordinaria ~<span class=\"num\">5%</span>, materia oscura ~<span class=\"num\">25%</span>, energía oscura ~<span class=\"num\">70%</span>, confirmado por supernovas Ia (<span class=\"person\">Perlmutter</span>, <span class=\"person\">Riess</span>, Nobel <span class=\"num\">2011</span>).",
        },
        {
          type: 'paragraph',
          html: "Tegmark contribuyó al análisis de datos (Saskatoon, QMAP, WMAP). Boomerang (<span class=\"num\">2000</span>) confirmó el primer pico. DASI y MAXIMA restauraron el segundo pico (~<span class=\"num\">5%</span> átomos, coherente con nucleosíntesis). Mapas 3D de galaxias (SDSS) complementan al CMB para desambiguar parámetros. Planck (<span class=\"num\">2013</span>) confirmó el modelo estándar con precisión sin sorpresas mayores, salvo el misterioso «eje del mal» en multipolos bajos.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~5%",
              "label": "Materia ordinaria (átomos)"
            },
            {
              "value": "~25%",
              "label": "Materia oscura"
            },
            {
              "value": "~70%",
              "label": "Energía oscura"
            },
            {
              "value": "~0,002%",
              "label": "Amplitud de fluctuaciones del CMB a los 400.000 años"
            }
          ],
        },
        {
          type: 'key',
          html: "La cosmología pasó de especulativa a <span class=\"key-term\">ciencia de precisión</span> gracias al CMB y mapas de galaxias.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Nuestros orígenes cósmicos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El modelo de Friedmann tiene tres problemas: el <span class=\"term\">horizonte</span> (regiones del CMB demasiado similares para haber interactuado), la <span class=\"term\">planitud</span> (Ω≈1 es inestable) y el origen del <span class=\"term\">Big Bang</span>. <span class=\"person\">Alan Guth</span> (<span class=\"num\">~1980</span>) propuso la <span class=\"term\">inflación cósmica</span>: un fragmento de materia con presión negativa se expande exponencialmente.",
        },
        {
          type: 'paragraph',
          html: "La inflación resuelve los tres problemas. Convierte una mota subatómica en un universo observable en ~<span class=\"num\">10⁻³⁵ s</span>. Estira el espacio hasta planitud (predicción Ω=1 confirmada al <span class=\"num\">1%</span>). Las fluctuaciones cuánticas del inflatón se estiran hasta tamaños galácticos (Q ≈ <span class=\"num\">0,002%</span>, espectro casi scale-invariant con n ≈ <span class=\"num\">0,96</span>).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Andrei Linde</span> desarrolló la <span class=\"term\">inflación eterna</span>: la inflación no termina en todas partes a la vez, generando burbujas con distintas propiedades. La energía oscura actual es una «segunda inflación» lenta (doble de tamaño cada ~<span class=\"num\">8 mil millones</span> de años). Ondas gravitacionales en la polarización del CMB serían evidencia definitiva.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Problema del Bang",
              "description": "¿Qué causó la expansión inicial? Inflación: doubling exponencial.",
              "icon": "💥"
            },
            {
              "title": "Problema del horizonte",
              "description": "Regiones distantes demasiado uniformes; inflación las acercó antes de estirarlas.",
              "icon": "🌡️"
            },
            {
              "title": "Problema planitud",
              "description": "Ω=1 inestable; inflación estira curvatura hasta indetectabilidad.",
              "icon": "📐"
            }
          ],
        },
        {
          type: 'key',
          html: "La inflación conecta lo <span class=\"key-term\">más pequeño</span> (cuántica) con lo más grande (galaxias).",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Bienvenidos al multiverso",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los universos paralelos no son una teoría suelta: son predicciones de teorías aceptadas. La inflación eterna implica un <span class=\"term\">multiverso de nivel I</span>: regiones del espacio tan lejanas que la luz no alcanzó a llegar, con copias exactas y casi exactas de nosotros.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">multiverso de nivel II</span> surge cuando las ecuaciones de la inflación tienen múltiples soluciones estables: cada solución se realiza en regiones distintas con leyes físicas o constantes diferentes. Esto podría explicar el <span class=\"term\">ajuste fino</span> de constantes compatibles con la vida.",
        },
        {
          type: 'paragraph',
          html: "Los estudiantes en universos paralelos de nivel I aprenden la misma física pero distinta historia. En nivel II, distinta física también. Las constantes medidas serían parte de nuestro «código postal cósmico», no necesariamente fundamentales. La crítica pasó de «no tiene sentido» a «no me gusta».",
        },
        {
          type: 'list',
          items: [
            "**Nivel I** — Regiones inobservables del mismo espacio; mismas leyes; copias de ti a distancia finita o infinita.",
            "**Nivel II** — Regiones post-inflacionarias con distintas leyes o constantes; inflación convierte potencialidad matemática en realidad."
          ],
        },
        {
          type: 'key',
          html: "La inflación convierte ecuaciones con múltiples soluciones en <span class=\"key-term\">infinitas regiones</span> que las instancian.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Legos cósmicos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Todo está hecho de los mismos bloques: <span class=\"num\">80</span> átomos estables, compuestos de protones, neutrones y electrones. Estos a su vez se componen de <span class=\"term\">quarks</span> (up, down y cuatro inestables) y <span class=\"term\">leptones</span>. Colisiones en el LHC producen bosones W, Z, Higgs, y los neutrinos atraviesan la Tierra sin interactuar.",
        },
        {
          type: 'paragraph',
          html: "Las partículas elementales se describen solo por <span class=\"term\">números cuánticos</span> (carga, spin, masa, etc.), sin propiedades más allá de lo matemático. Colisiones pueden crear partículas más pesadas vía E=mc² conservando energía, momento y cargas. La teoría de cuerdas sugiere vibraciones fundamentales a energías ~<span class=\"num\">10¹³</span> veces mayores que las actuales.",
        },
        {
          type: 'paragraph',
          html: "La luz son fotones. El arcoíris y las líneas espectrales de Fraunhofer se explican con cuántica. Los átomos no colapsan gracias al principio de incertidumbre de Heisenberg. Tegmark relata su confusión inicial con la mecánica cuántica en Estocolmo y su posterior trabajo en Berkeley.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Átomo",
              "description": "Electrones orbitando núcleo de protones y neutrones.",
              "icon": "⚛️"
            },
            {
              "title": "Quark",
              "description": "Up y down componen protones y neutrones; seis «sabores» en total.",
              "icon": "🔴"
            },
            {
              "title": "Números cuánticos",
              "description": "Propiedades intrínsecas puramente matemáticas de cada partícula.",
              "icon": "📊"
            }
          ],
        },
        {
          type: 'key',
          html: "Los bloques más profundos parecen ser <span class=\"key-term\">objetos matemáticos</span>, no bolitas con textura.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "El multiverso de nivel III",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La versión matemáticamente más simple de la cuántica postula una sola <span class=\"term\">función de onda</span> en el espacio de Hilbert, gobernada siempre por la ecuación de <span class=\"person\">Schrödinger</span>. Las partículas pueden estar en superposición, y la «observación» no está definida en las ecuaciones.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Hugh Everett</span> propuso en <span class=\"num\">1957</span> que cada medición cuántica bifurca el universo. No hay colapso aleatorio, sino <span class=\"term\">decoherencia</span> que oculta ramas paralelas. El azar cuántico sería ilusión por ignorancia de en qué copia estás. Tu cerebro decoherencia constantemente, y la «conciencia cuántica» queda desmentida.",
        },
        {
          type: 'paragraph',
          html: "El multiverso cuántico (nivel III) se unifica con el espacial (nivel I): la función de onda describe copias infinitas en el espacio. Si el espacio es infinito y uniforme, colapsar la función de onda no cambia el resultado observable. Tegmark es escéptico sobre la «inmortalidad cuántica» subjetiva (lo retoma en cap. <span class=\"num\">11</span>).",
        },
        {
          type: 'quote',
          text: "«When you come to a fork in the road, take it.»",
          attribution: "Yogi Berra (epígrafe del capítulo)",
        },
        {
          type: 'key',
          html: "Sin colapso ad hoc, la ecuación de Schrödinger predice <span class=\"key-term\">ramificaciones paralelas</span> en cada evento cuántico.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Realidad interna, externa y consensuada",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tegmark distingue tres capas: <span class=\"term\">realidad externa</span> (mundo físico independiente), <span class=\"term\">realidad interna</span> (modelo en tu cerebro, distorsionado por sentidos) y <span class=\"term\">realidad consensuada</span> (descripción compartida entre observadores conscientes).",
        },
        {
          type: 'paragraph',
          html: "La física teórica describe la realidad externa con matemáticas muy distintas de la experiencia subjetiva. <span class=\"person\">Demócrito</span> ya separaba «por convención» (dulce, amargo) de «en verdad» (átomos y vacío). La pregunta de Douglas Adams se divide: las ciencias físicas derivan la realidad consensuada desde la externa, y las ciencias cognitivas derivan la interna desde la consensuada.",
        },
        {
          type: 'paragraph',
          html: "La conciencia no impide entender la realidad física externa por completo. Tegmark relata la pérdida de su maleta rumbo a un documental sobre Everett — metáfora de cuánto filtra nuestra percepción.",
        },
        {
          type: 'key',
          html: "Una sola realidad externa, pero <span class=\"key-term\">perspectivas complementarias</span> según el nivel de descripción.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Realidad física y realidad matemática",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Galileo</span> sostuvo que la naturaleza está escrita en matemáticas. <span class=\"person\">Eugene Wigner</span> llamó misterio a la «efectividad irrazonable» de las matemáticas en ciencia. En <span class=\"num\">1990</span>, Tegmark formuló la <span class=\"term\">Hipótesis del Universo Matemático (MUH)</span>: la realidad externa no solo se describe con matemáticas, sino que <em>es</em> una estructura matemática.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">Hipótesis de Realidad Externa</span> postula un mundo independiente de humanos. Una teoría del todo sin «equipaje» humano debe ser puramente matemática. Una estructura matemática = conjunto de entidades abstractas con relaciones entre ellas (enteros, sólidos platónicos, etc.).",
        },
        {
          type: 'paragraph',
          html: "Si aceptas realidad externa independiente de humanos, debes aceptar que la realidad física es estructura matemática. Nada más tiene descripción sin equipaje. El árbol de teorías (relatividad → mecánica clásica → química → biología) muestra derivaciones parciales, y la ToE estaría en la raíz.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "ERH",
              "description": "Existe realidad externa independiente de observadores.",
              "icon": "🌐"
            },
            {
              "title": "MUH",
              "description": "Esa realidad externa es una estructura matemática.",
              "icon": "🔢"
            },
            {
              "title": "Equipaje",
              "description": "Conceptos humanos (palabras, colores) no pertenecen a la ToE.",
              "icon": "🎒"
            }
          ],
        },
        {
          type: 'key',
          html: "Vivimos dentro de un objeto matemático gigante — más complejo que un <span class=\"key-term\">dodecaedro</span> o una variedad de Calabi-Yau.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "¿Es el tiempo una ilusión?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Einstein</span> afirmó que el pasado, presente y futuro son «ilusión persistente». Bajo la MUH, las estructuras matemáticas son eternas e inmutables: el espacio y el tiempo existen <em>en</em> ellas, no al revés. Si la historia cósmica fuera una película, la estructura matemática sería el DVD completo.",
        },
        {
          type: 'paragraph',
          html: "El flujo temporal, el cambio, la creación y la destrucción serían ilusiones. Tú eres una subestructura autoconsciente. En relatividad general, un «trenzado» complejo en el espaciotiempo. En cuántica, un patrón que ramifica. La realidad subjetiva cinematográfica existe solo en tu modelo cerebral, con recuerdos editados que simulan pasado.",
        },
        {
          type: 'paragraph',
          html: "Los qualia («yo», «rojo», «dulce») son parte del modelo interno, no de la realidad externa matemática. La percepción de un punto de vista subjetivo es qualia igual que el color.",
        },
        {
          type: 'quote',
          text: "«The distinction between past, present, and future is only a stubbornly persistent illusion.»",
          attribution: "Albert Einstein, 1955",
        },
        {
          type: 'key',
          html: "Bajo la MUH, el tiempo no fluye en la estructura matemática; <span class=\"key-term\">solo parece fluir</span> en tu cabeza.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "El multiverso de nivel IV",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La MUH implica que existencia matemática = existencia física: todo lo que existe matemáticamente existe físicamente. Esto forma el <span class=\"term\">multiverso de nivel IV</span> — otras estructuras matemáticas distintas a la nuestra.",
        },
        {
          type: 'paragraph',
          html: "Jerarquía de cuatro niveles: I (regiones lejanas del espacio), II (regiones post-inflacionarias), III (ramas cuánticas en espacio de Hilbert), IV (otras estructuras matemáticas). Explorar el nivel IV requiere computadoras e ideas, no cohetes. Estructuras simples pueden listarse como un «directorio telefónico» matemático.",
        },
        {
          type: 'paragraph',
          html: "¿Vivimos en una simulación? Tegmark argumenta que una simulación perfecta <em>es</em> otra estructura matemática y no refuta la MUH. La vida inteligente parece rara, y la mayoría de niveles I, II y IV serían inhabitables. El universo matemático más simple compatible con observaciones podría ser el nuestro.",
        },
        {
          type: 'list',
          items: [
            "**Nivel I** — Mismo espacio, mismas leyes; regiones fuera del horizonte observable.",
            "**Nivel II** — Distintas constantes o leyes en burbujas inflacionarias.",
            "**Nivel III** — Ramas cuánticas de Everett en el mismo espacio.",
            "**Nivel IV** — Otras estructuras matemáticas; realidad física = existencia matemática."
          ],
        },
        {
          type: 'key',
          html: "El multiverso IV es el más diverso: <span class=\"key-term\">cualquier estructura matemática</span> consistente existe físicamente.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Vida, nuestro universo y todo lo demás",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las expediciones hacia lo grande y lo pequeño convergen en estructuras matemáticas. En escalas humanas la tela matemática es fácil de ignorar. En las extremas, resulta evidente. Si la realidad es matemática, todo es en principio comprensible, limitados solo por la imaginación.",
        },
        {
          type: 'paragraph',
          html: "Futuro del universo: posible <span class=\"term\">Big Chill</span> (expansión acelerada), Big Crunch, Big Rip, Big Snap o burbujas de muerte. No hay evidencia de vida tan avanzada como la humana en todo el universo observable. El potencial futuro de la vida supera con creces lo visto hasta ahora.",
        },
        {
          type: 'paragraph',
          html: "Tegmark advierte sobre riesgos existenciales poco atendidos: guerra nuclear accidental e inteligencia artificial hostil. Desde una perspectiva cósmica, problemas cotidianos (multas, desamores) encogen. La responsabilidad de preservar la vida consciente en el universo es enorme.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~14 mil millones",
              "label": "Edad del universo observable"
            },
            {
              "value": "~70%",
              "label": "Fracción de energía oscura en el presupuesto cósmico"
            },
            {
              "value": "0 (evidencia)",
              "label": "Civilizaciones más avanzadas que la humana detectadas"
            }
          ],
        },
        {
          type: 'key',
          html: "Somos parte consciente de una estructura matemática; nuestro futuro depende de <span class=\"key-term\">decisiones que aún podemos tomar</span>.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "MUH",
    "description": "Hipótesis del Universo Matemático: la realidad externa es una estructura matemática."
  },
  {
    "title": "Inflación cósmica",
    "description": "Expansión exponencial temprana; resuelve horizonte, planitud y origen del Big Bang."
  },
  {
    "title": "CMB",
    "description": "Fondo cósmico de microondas; luz fósil del universo a ~400.000 años."
  },
  {
    "title": "Multiverso (I–IV)",
    "description": "Cuatro niveles: espacial, post-inflacionario, cuántico (Everett) y matemático."
  },
  {
    "title": "Decoherencia",
    "description": "Proceso que oculta superposiciones cuánticas; explica aparente colapso de la función de onda."
  },
  {
    "title": "Energía oscura",
    "description": "~70% del universo; presión negativa que acelera la expansión."
  },
  {
    "title": "Materia oscura",
    "description": "~25%; gravitación extra sin interacción electromagnética."
  },
  {
    "title": "Estructura matemática",
    "description": "Conjunto de entidades abstractas con relaciones; sin equipaje humano."
  },
  {
    "title": "Realidad consensuada",
    "description": "Descripción compartida del mundo físico entre observadores conscientes."
  },
  {
    "title": "Núcleosíntesis del Big Bang",
    "description": "Fusión primordial que produjo ~25% de helio en los primeros minutos."
  }
],
  chronology: [
  {
    "year": "~240 a.C.",
    "text": "Eratóstenes mide la circunferencia terrestre."
  },
  {
    "year": "~270 a.C.",
    "text": "Aristarco estima distancias a Luna y Sol."
  },
  {
    "year": "1687",
    "text": "Newton unifica gravedad terrestre y celestial."
  },
  {
    "year": "1915",
    "text": "Einstein publica relatividad general."
  },
  {
    "year": "1922",
    "text": "Friedmann predice universo en expansión."
  },
  {
    "year": "1929",
    "text": "Hubble confirma ley de recesión galáctica."
  },
  {
    "year": "1948",
    "text": "Gamow predice radiación de fondo de microondas."
  },
  {
    "year": "1957",
    "text": "Everett propone interpretación de muchos mundos."
  },
  {
    "year": "1964",
    "text": "Penzias y Wilson detectan CMB."
  },
  {
    "year": "1980",
    "text": "Guth propone inflación cósmica."
  },
  {
    "year": "1992",
    "text": "COBE detecta fluctuaciones del CMB."
  },
  {
    "year": "1998",
    "text": "Supernovas Ia revelan aceleración cósmica."
  },
  {
    "year": "2013",
    "text": "Planck confirma modelo cosmológico estándar."
  },
  {
    "year": "2014",
    "text": "Tegmark publica «Our Mathematical Universe»."
  }
],
  figures: [
  {
    "name": "Max Tegmark",
    "role": "Autor · Cosmólogo MIT · Defensor de la MUH"
  },
  {
    "name": "Albert Einstein",
    "role": "Relatividad general · Espaciotempo dinámico"
  },
  {
    "name": "Alexander Friedmann",
    "role": "Soluciones de universo en expansión (1922)"
  },
  {
    "name": "Edwin Hubble",
    "role": "Ley de recesión galáctica · Distancias extragalácticas"
  },
  {
    "name": "George Gamow",
    "role": "Big Bang caliente · Predicción del CMB"
  },
  {
    "name": "Alan Guth",
    "role": "Inflación cósmica · Resolución de problemas del Big Bang"
  },
  {
    "name": "Andrei Linde",
    "role": "Inflación eterna · Multiverso de nivel II"
  },
  {
    "name": "Hugh Everett",
    "role": "Interpretación de muchos mundos · Multiverso nivel III"
  },
  {
    "name": "Eratóstenes",
    "role": "Primera medición precisa de la Tierra"
  },
  {
    "name": "Aristarco de Samos",
    "role": "Heliocentrismo · Distancias celestes"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La realidad física no solo se describe con matemáticas: bajo la Hipótesis del Universo Matemático, es una estructura matemática.",
  "El multiverso tiene cuatro niveles (espacial, inflacionario, cuántico y matemático), y desde la vista de pájaro el tiempo, el cambio y el azar cuántico serían ilusiones.",
  "Las expediciones al macro y al micro convergen en la misma conclusión.",
  "Somos subestructuras autoconscientes dentro de un objeto matemático colosal.",
  "El futuro de la vida consciente depende de cómo usemos ese conocimiento."
],
    highlight: "Nuestro universo no está hecho de matemáticas: nuestro universo es matemáticas",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Max Tegmark",
    line2: "\"Our Mathematical Universe\" · Alfred A. Knopf · 2014",
  },
}
