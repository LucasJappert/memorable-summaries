import type { BookSummary } from '../types/book'

export const biggestIdeasUniverse: BookSummary = {
  slug: "biggest-ideas-universe",
  meta: {
    title: "The Biggest Ideas in the Universe: Space, Time and Motion",
    subtitle: "Entender la física moderna de verdad — con ecuaciones, no solo metáforas",
    author: "Sean Carroll",
    meta: [
      "📖 2022 · Dutton (vol. 1 de 3)",
      "✍️ Serie: Quanta and Fields · Complexity and Emergence",
    ],
    titleEs: "Las mayores ideas del universo: espacio, tiempo y movimiento",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Conservación"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Cambio"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Dinámica"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Espacio"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Tiempo"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Espaciotiempo"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Geometría"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Gravedad"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Agujeros negros"
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
      num: "Introducción",
      title: "Entender ecuaciones, no solo metáforas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El sueño de <span class=\"person\">Sean Carroll</span> es un mundo donde la gente discuta física moderna con la misma pasión con que debate economía o política. Hoy la física es un campo de especialistas. El público general recibe metáforas, no la esencia matemática.",
        },
        {
          type: 'paragraph',
          html: "Hay dos caminos: quedarse en divulgación popular (imágenes útiles pero incompletas) o convertirse en estudiante formal (años de cálculo antes de relatividad o mecánica cuántica). Este libro cierra esa brecha: exige solo álgebra de secundaria, pero enseña a <span class=\"term\">entender</span> ecuaciones, no a resolverlas.",
        },
        {
          type: 'paragraph',
          html: "La distinción clave es <strong>entender vs. resolver</strong>. Las ecuaciones de Einstein no piden calcular cada curvatura del espaciotiempo. Piden comprender qué significa cada símbolo. Al capítulo 8 el lector entiende la ecuación de Einstein completa.",
        },
        {
          type: 'key',
          html: "Este volumen cubre física clásica ampliada hasta relatividad general y agujeros negros — ideas con excelentes razones para seguir vigentes dentro de <span class=\"key-term\">cien años</span>.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Conservación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La física arranca en lo cotidiano: objetos con posición y propiedades que cambian. El salto rápido va de observaciones mundanas a patrones — las <span class=\"term\">leyes de la física</span>.",
        },
        {
          type: 'paragraph',
          html: "El patrón más simple es la <span class=\"term\">conservación</span>: ciertas cantidades permanecen constantes con el tiempo. La energía no es una sustancia. Es una propiedad asociada a movimiento, altura, temperatura, masa o carga, convertible entre formas pero cuya suma total se mantiene si las leyes no cambian.",
        },
        {
          type: 'paragraph',
          html: "Antes de la física moderna, <span class=\"person\">Aristóteles</span> separaba movimientos «naturales» y «violentos», con reposo como estado preferido. La revolución newtoniana mostró que el movimiento uniforme es natural y que las fuerzas cambian la velocidad, no el reposo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Energía",
              "description": "Propiedad conservada que puede transformarse entre formas (cinética, potencial, térmica).",
              "icon": "⚡"
            },
            {
              "title": "Momento",
              "description": "Cantidad conservada ligada al movimiento; clave en colisiones elásticas.",
              "icon": "🎯"
            },
            {
              "title": "Simetrías",
              "description": "El teorema de Noether vincula simetrías de las leyes con cantidades conservadas.",
              "icon": "🔄"
            }
          ],
        },
        {
          type: 'key',
          html: "Conservar energía y momento no es truco contable: refleja que las leyes de la física no cambian con el tiempo ni con traslaciones espaciales.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Cambio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El cambio en física exige <span class=\"term\">cálculo</span>: derivadas (tasas instantáneas) e integrales (acumulación). La posición x(t) de un auto permite calcular velocidad v = dx/dt y aceleración a = dv/dt.",
        },
        {
          type: 'paragraph',
          html: "El paradigma laplaciano: dado estado inicial (posición y velocidad), las leyes determinan toda la trayectoria. <span class=\"person\">Newton</span>, presionado por <span class=\"person\">Halley</span>, publicó los <em>Principia</em> (<span class=\"num\">1687</span>): F = ma y gravitación universal F ∝ 1/r².",
        },
        {
          type: 'paragraph',
          html: "La gravedad es <span class=\"term\">universal</span>: la misma ley explica manzanas cayendo y planetas orbitando. Newton derivó las leyes de <span class=\"person\">Kepler</span> desde principios locales (fuerza en cada instante), no desde descripciones globales de órbitas elípticas.",
        },
        {
          type: 'list',
          items: [
            "**Función** — mapa de un argumento a un valor (p. ej. posición en función del tiempo).",
            "**Derivada** — pendiente de la tangente; límite de Δx/Δt cuando Δt → 0.",
            "**Integral** — área bajo la curva; acumula cambios para reconstruir trayectorias."
          ],
        },
        {
          type: 'key',
          html: "El cálculo convierte el «saber ahora» en «predecir siempre»: posición + velocidad + fuerzas → aceleración → integración → futuro (y pasado).",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Dinámica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La dinámica estudia cambios que obedecen ecuaciones físicas. El modelo «bola en colina», una partícula sin fricción en un paisaje de energía potencial V(x), reaparece hasta en campos cuánticos.",
        },
        {
          type: 'paragraph',
          html: "Energía cinética K = ½mv² más potencial V(x) suman un total conservado. Desde un valle parabólico surge el <span class=\"term\">oscilador armónico simple</span>: movimiento sinusoidal exactamente soluble y omnipresente (muelles, átomos, campos).",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">espacio de fases</span> {posición, momento} fija la evolución. Alternativamente, el <span class=\"term\">principio de mínima acción</span> (Lagrange) postula que, entre dos eventos, la trayectoria real minimiza la acción S = ∫(K − V)dt. Es una formulación global equivalente a Newton.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Energía potencial",
              "description": "V(x); fuerza = −dV/dx empuja hacia mínimos.",
              "icon": "🎢"
            },
            {
              "title": "Oscilador armónico",
              "description": "Cerca del equilibrio, casi todo sistema se comporta como parábola.",
              "icon": "〰️"
            },
            {
              "title": "Acción",
              "description": "Integral del Lagrangiano; unifica dinámica sin hablar de «fuerza».",
              "icon": "🎯"
            }
          ],
        },
        {
          type: 'key',
          html: "Newton, Lagrange y Hamilton describen lo mismo con vocabularios distintos; elegir uno u otro puede abrir atajos hacia leyes más profundas.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Espacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es el <span class=\"term\">espacio</span>? Debate clásico: sustancia (contenedor) vs. relacional (solo distancias entre objetos). Hoy los campos llenan el espacio y Einstein mostró que su geometría responde a la energía.",
        },
        {
          type: 'paragraph',
          html: "El espacio es <span class=\"term\">tridimensional</span>: tres direcciones independientes (adelante/atrás, izquierda/derecha, arriba/abajo). En d dimensiones, fuerzas como gravedad siguen ley 1/r^(d−1). En 3D, la ley es del inverso del cuadrado.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">mecánica hamiltoniana</span> eleva el momento a variable independiente (no definido como mv). Lo especial del espacio: las interacciones son <span class=\"term\">locales en posición</span> — objetos se influyen cuando coinciden en el mismo lugar, mediados por campos.",
        },
        {
          type: 'list',
          items: [
            "**Localidad** — lo que ocurre en un punto solo afecta lo inmediatamente cercano; los efectos se propagan con el tiempo.",
            "**Campo** — función con valor en cada punto; el Sol deforma el campo gravitatorio, no «tira» mágicamente a distancia.",
            "**Simetría galileana** — no hay posición ni velocidad preferidas; sí aceleración cero (trayectorias inerciales)."
          ],
        },
        {
          type: 'key',
          html: "Vivimos en espacio de posiciones, no en espacio de momentos, porque los hamiltonianos reales acoplan objetos por proximidad espacial.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Tiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sin tiempo no hay movimiento ni cambio. Medimos duración con <span class=\"term\">relojes</span>: sistemas periódicos (Tierra, osciladores) comparables entre sí. El tiempo se parece al espacio (localización en espaciotiempo) pero también difiere profundamente.",
        },
        {
          type: 'paragraph',
          html: "La mecánica clásica es <span class=\"term\">reversible</span>: con el estado actual se predice futuro y pasado por igual. A nivel macroscópico, no obstante, el hielo se derrite y no vuelve a formarse. Esa irreversibilidad es la <span class=\"term\">flecha del tiempo</span>.",
        },
        {
          type: 'paragraph',
          html: "La entropía (Boltzmann) crece porque hay vastly más microestados de alta entropía que de baja. La <span class=\"term\">hipótesis del pasado</span>: el universo empezó en entropía extremadamente baja (Big Bang denso y uniforme). Eso rompe la simetría pasado/futuro.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Flecha termodinámica",
              "description": "Calor fluye de caliente a frío; irreversibilidad emergente.",
              "icon": "⏱️"
            },
            {
              "title": "T-inversión",
              "description": "Las leyes microscópicas son simétricas; CPT se conserva en partículas.",
              "icon": "🔙"
            },
            {
              "title": "Presentismo vs. eternalismo",
              "description": "¿Solo el «ahora» es real, o todo el bloque espaciotemporal?",
              "icon": "🌅"
            }
          ],
        },
        {
          type: 'key',
          html: "La flecha del tiempo no está en las ecuaciones fundamentales: emerge del universo de baja entropía cerca del Big Bang.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Espaciotiempo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La relatividad especial (Einstein <span class=\"num\">1905</span>, Minkowski <span class=\"num\">1907</span>) unifica espacio y tiempo en un continuo 4D. No hay tiempo absoluto: cada observador divide espaciotiempo de forma distinta.",
        },
        {
          type: 'paragraph',
          html: "Hay dos nociones de tiempo: <span class=\"term\">coordenada t</span> (etiqueta convencional) y <span class=\"term\">tiempo propio τ</span> (lo que marca un reloj viajero). En espacio, la recta es el camino más corto. En espaciotiempo, la trayectoria inercial maximiza el tiempo propio.",
        },
        {
          type: 'paragraph',
          html: "El intervalo de Minkowski: τ² = Δt² − Δx² (con c = 1). Más movimiento espacial → menos tiempo propio. El experimento de los gemelos no es paradoja: caminos distintos, duraciones distintas. La velocidad c convierte unidades espacio↔tiempo.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "c ≈ 3×10⁸ m/s",
              "label": "Velocidad universal; límite para materia"
            },
            {
              "value": "v = 0,99c",
              "label": "~7 años externos por 1 año propio del viajero"
            },
            {
              "value": "Conos de luz",
              "label": "Sustituyen «simultaneidad» absoluta"
            }
          ],
        },
        {
          type: 'key',
          html: "E = mc² unifica energía y momento: la componente temporal del cuadrimomento incluye energía en reposo más cinética.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Geometría",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Einstein necesitó <span class=\"term\">geometría riemanniana</span> para curvar el espaciotiempo. Euclides axiomatizó el plano. El quinto postulado (paralelas) puede reemplazarse y surgen geometrías esférica (curvatura +) e hiperbólica (−).",
        },
        {
          type: 'paragraph',
          html: "Gauss y <span class=\"person\">Riemann</span> desarrollaron geometría <span class=\"term\">intrínseca</span>, medible desde dentro sin embedding en espacio mayor. Una <span class=\"term\">variedad</span> (manifold) es un conjunto de puntos con dimensión definida. Al hacer zoom infinitesimal, parece plano euclídeo.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">tensor métrico</span> g_ij codifica toda la geometría via elemento de línea ds² = g_ij dx^i dx^j. Los tensores generalizan funciones y vectores. Las contracciones con métrica e inversa definen productos internos y curvatura.",
        },
        {
          type: 'list',
          items: [
            "**Geometría plana** — paralelas permanecen equidistantes; Pitágoras clásico.",
            "**Geometría esférica** — triángulos suman >180°; circunferencias < 2πr.",
            "**Transporte paralelo** — comparar vectores en puntos distintos revela curvatura."
          ],
        },
        {
          type: 'key',
          html: "La curvatura no es «cómo se dobla en un espacio mayor»: es propiedad interna medible con círculos, ángulos y geodésicas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Gravedad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La gravedad es curvatura del espaciotiempo. La ecuación de Einstein (<span class=\"num\">25 nov 1915</span>) relaciona tensor de Einstein (curvatura) con tensor energía-momento (materia). <span class=\"person\">Wheeler</span> lo resumió así: «el espaciotiempo dice a la materia cómo moverse, y la materia dice al espaciotiempo cómo curvarse».",
        },
        {
          type: 'paragraph',
          html: "El tensor T_μν describe fluidos extendidos: densidad de energía ρ, presión p, velocidades. La constante 8πG fija la fuerza gravitatoria comparando con el límite newtoniano débil. También existe acción Einstein-Hilbert: S = ∫ R √−g d⁴x.",
        },
        {
          type: 'paragraph',
          html: "Pruebas clásicas: precesión de Mercurio (+0,012°/siglo exacto), desviación de luz (<span class=\"person\">Eddington</span>, eclipse <span class=\"num\">1919</span>), redshift gravitacional, ondas gravitacionales (LIGO <span class=\"num\">2015</span>), expansión del universo (Hubble).",
        },
        {
          type: 'quote',
          text: "«El espaciotiempo dice a la materia cómo moverse; la materia dice al espaciotiempo cómo curvarse.»",
          attribution: "John Wheeler (resumen citado por Carroll)",
        },
        {
          type: 'key',
          html: "Einstein no resolvió ecuaciones: las <span class=\"key-term\">entendió</span>; Schwarzschild, sentado en el frente, encontró la primera solución exacta semanas después.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Agujeros negros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La métrica de <span class=\"person\">Schwarzschild</span> (<span class=\"num\">1915</span>) describe el vacío fuera de un cuerpo esférico. Radio de Schwarzschild r_s = 2GM: horizonte de sucesos. Dentro, r se vuelve coordenada <em>temporal</em>: caer al centro es avanzar en el futuro inevitable hacia singularidad r = 0.",
        },
        {
          type: 'paragraph',
          html: "Dilatación gravitacional: relojes cerca de masas marcan menos tiempo propio. Coordenadas Eddington-Finkelstein eliminan la singularidad de coordenadas en el horizonte. Teorema «no-hair»: agujeros negros quedan caracterizados solo por masa, carga y spin (<span class=\"term\">solución de Kerr</span> para rotación).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Hawking</span> (<span class=\"num\">1971</span>) demostró que el área del horizonte solo crece, análogo a entropía. <span class=\"person\">Bekenstein</span> propuso entropía proporcional al área. <span class=\"person\">Hawking</span> calculó radiación térmica: los agujeros negros «brillan» cuánticamente. LIGO detectó fusiones (p. ej. 36 + 29 masas solares, <span class=\"num\">2015</span>). El Nobel <span class=\"num\">2020</span> fue para Penrose, Genzel y Ghez.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Horizonte",
              "description": "Frontera unidireccional; escapar requeriría velocidad > c.",
              "icon": "🕳️"
            },
            {
              "title": "Kerr",
              "description": "Agujero rotatorio; proceso de Penrose extrae energía del spin.",
              "icon": "🌀"
            },
            {
              "title": "Ondas G",
              "description": "Ripples de curvatura a c; fusiones binarias las generan.",
              "icon": "📡"
            }
          ],
        },
        {
          type: 'key',
          html: "Los agujeros negros pasaron de curiosidad teórica a protagonistas observacionales: millones en la Vía Láctea, ~4 millones M☉ en Sagitario A*.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Conservación",
    "description": "Cantidades (energía, momento) invariantes si las leyes no cambian."
  },
  {
    "title": "Paradigma laplaciano",
    "description": "Estado en un instante determina toda la evolución."
  },
  {
    "title": "Principio de mínima acción",
    "description": "Trayectoria real extremiza (típicamente minimiza) la acción."
  },
  {
    "title": "Espacio de fases",
    "description": "Posición + momento; evolución hamiltoniana."
  },
  {
    "title": "Localidad",
    "description": "Interacciones mediadas por campos en el mismo punto."
  },
  {
    "title": "Entropía",
    "description": "Medida de microestados compatibles con un macroestado; flecha del tiempo."
  },
  {
    "title": "Espaciotiempo de Minkowski",
    "description": "Plano 4D; intervalo τ² = Δt² − Δx²."
  },
  {
    "title": "Tensor métrico",
    "description": "Define distancias y curvatura en una variedad."
  },
  {
    "title": "Ecuación de Einstein",
    "description": "Curvatura ∝ energía-momento; gravedad como geometría."
  },
  {
    "title": "Horizonte de sucesos",
    "description": "Superficie de no retorno alrededor de un agujero negro."
  }
],
  chronology: [
  {
    "year": "~350 a.C.",
    "text": "Aristóteles: movimiento natural vs. violento; reposo preferido."
  },
  {
    "year": "1687",
    "text": "Newton publica Principia: F = ma y gravitación 1/r²."
  },
  {
    "year": "1687–1700s",
    "text": "Desarrollo del cálculo (Newton, Leibniz)."
  },
  {
    "year": "1870s",
    "text": "Boltzmann conecta entropía con microestados."
  },
  {
    "year": "1905",
    "text": "Einstein: relatividad especial; Minkowski unifica espaciotiempo (1907)."
  },
  {
    "year": "1915",
    "text": "Einstein presenta relatividad general (25 nov); Schwarzschild solución exacta."
  },
  {
    "year": "1919",
    "text": "Eddington confirma desviación de luz estelar."
  },
  {
    "year": "1963",
    "text": "Kerr describe agujeros negros rotatorios."
  },
  {
    "year": "1971",
    "text": "Hawking: teorema del área; radiación Hawking (1974)."
  },
  {
    "year": "2015",
    "text": "LIGO detecta ondas gravitacionales de fusión de agujeros negros."
  },
  {
    "year": "2020",
    "text": "Nobel a Penrose, Genzel y Ghez por agujeros negros."
  }
],
  figures: [
  {
    "name": "Isaac Newton",
    "role": "Mecánica clásica · Ley de gravitación universal"
  },
  {
    "name": "Gottfried Leibniz",
    "role": "Cálculo · Correspondencia con Clarke sobre espacio"
  },
  {
    "name": "Joseph-Louis Lagrange",
    "role": "Mecánica lagrangiana · Principio de acción"
  },
  {
    "name": "William Rowan Hamilton",
    "role": "Mecánica hamiltoniana"
  },
  {
    "name": "Albert Einstein",
    "role": "Relatividad especial y general"
  },
  {
    "name": "Hermann Minkowski",
    "role": "Formalismo espaciotiempo 4D"
  },
  {
    "name": "Bernhard Riemann",
    "role": "Geometría de variedades"
  },
  {
    "name": "Karl Schwarzschild",
    "role": "Primera solución exacta a Einstein (1915)"
  },
  {
    "name": "Roy Kerr",
    "role": "Métrica de agujero negro rotatorio (1963)"
  },
  {
    "name": "Roger Penrose",
    "role": "Teoremas de singularidad · Área de horizontes"
  },
  {
    "name": "Stephen Hawking",
    "role": "Radiación de agujeros negros · Teorema del área"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La física moderna cabe en ecuaciones comprensibles.",
  "No hace falta resolverlas todas. Basta entender qué dicen.",
  "Espacio, tiempo y movimiento forman un solo escenario curvable.",
  "Desde conservación hasta agujeros negros, un hilo continuo.",
  "El volumen 1 abre la puerta. Cuántica y emergencia vienen después."
],
    highlight: "Entender las ecuaciones es la forma auténtica de conocer el universo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Sean Carroll",
    line2: "\"The Biggest Ideas in the Universe: Space, Time and Motion\" · Dutton · 2022",
  },
}
