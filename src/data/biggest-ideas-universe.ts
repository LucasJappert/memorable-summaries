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
          html: "¿Se puede discutir física moderna con la misma pasión con que se debate economía o política? El físico teórico <span class=\"person\">Sean Carroll</span> sueña con ese mundo. Hoy la física queda confinada a especialistas, y el público recibe metáforas en lugar de la esencia matemática que sostiene las teorías.",
        },
        {
          type: 'paragraph',
          html: "Hay dos caminos habituales. Uno es la divulgación popular: imágenes útiles, pero incompletas. El otro es la formación formal: años de cálculo antes de llegar a relatividad o mecánica cuántica. Este libro cierra esa brecha. Solo exige álgebra de secundaria, pero enseña a <span class=\"term\">entender</span> (leer qué significa cada símbolo) las ecuaciones, no a resolverlas como en un curso universitario.",
        },
        {
          type: 'paragraph',
          html: "La distinción clave es <strong>entender frente a resolver</strong>. Las ecuaciones de Einstein no piden calcular cada curvatura del espaciotiempo. Piden comprender qué significa cada símbolo. Al capítulo 8 el lector entiende la ecuación de Einstein completa. Este volumen cubre física clásica ampliada hasta relatividad general y agujeros negros. Se limita a ideas con excelentes razones para seguir vigentes dentro de <span class=\"num\">cien años</span>.",
        },
        {
          type: 'key',
          html: "La física moderna cabe en ecuaciones comprensibles: basta entender qué dicen los símbolos, no resolver cada una como un profesional.",
        },
        {
          type: 'paragraph',
          html: "El primer paso es ver qué cantidades del mundo permanecen constantes aunque todo lo demás cambie.",
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
          html: "¿Qué patrones del mundo físico no cambian con el tiempo? La física arranca en lo cotidiano: objetos con posición y propiedades que varían. El salto rápido va de observaciones mundanas a <span class=\"term\">patrones</span> (regularidades que se repiten) invariables, que llamamos leyes de la física.",
        },
        {
          type: 'paragraph',
          html: "El patrón más simple es la <span class=\"term\">conservación</span> (que ciertas cantidades permanecen constantes). La energía no es una sustancia fluida. Es una propiedad asociada a movimiento, altura, temperatura, masa o carga. La revolución frente al filósofo <span class=\"person\">Aristóteles</span> pasa por <span class=\"person\">Ibn Sīnā</span>, quien sostuvo un impetus conservado hasta el momento p = mv. <span class=\"person\">Émilie du Châtelet</span> demostró después que energía y momento son cantidades distintas, pero ambas conservadas.",
        },
        {
          type: 'paragraph',
          html: "¿Por qué existen leyes de conservación? El teorema de la matemática <span class=\"person\">Emmy Noether</span> las vincula con <span class=\"term\">simetrías</span> (propiedades que no cambian bajo ciertas transformaciones). Cuando las leyes no cambian al desplazar el espacio, el momento se conserva. Cuando no cambian al desplazar el tiempo, se conserva la energía. Cuando no cambian al rotar, se conserva el momento angular. En un universo en expansión la simetría temporal global se rompe, y la energía total cósmica deja de ser constante de forma trivial.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Energía",
              "description": "Propiedad conservada convertible entre formas (cinética, potencial, térmica).",
              "icon": "⚡"
            },
            {
              "title": "Momento",
              "description": "Vector conservado; clave en colisiones y en la mecánica newtoniana.",
              "icon": "🎯"
            },
            {
              "title": "Simetrías",
              "description": "El teorema de Noether une simetrías continuas con cantidades conservadas.",
              "icon": "🔄"
            }
          ],
        },
        {
          type: 'key',
          html: "Conservar energía y momento no es truco contable: refleja que las leyes de la física no cambian con el tiempo ni con traslaciones espaciales.",
        },
        {
          type: 'paragraph',
          html: "Si las leyes fijan qué se conserva, el siguiente paso es describir cómo cambia todo lo demás.",
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
          html: "¿Cómo pasa la física de «saber ahora» a «predecir siempre»? El cambio en física exige <span class=\"term\">cálculo</span> (derivadas e integrales). La posición x(t) de un auto permite calcular velocidad v = dx/dt y aceleración a = dv/dt.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">paradigma laplaciano</span> (la idea de que el estado inicial fija toda la evolución) sostiene una tesis fuerte. Dado el estado inicial, las leyes determinan toda la trayectoria pasada y futura. <span class=\"person\">Isaac Newton</span> publicó los <em>Principia</em> en <span class=\"num\">1687</span>, presionado por el astrónomo Edmond Halley. Allí aparecen F = ma y la gravitación universal F ∝ 1/r². Newton derivó las leyes de Johannes Kepler desde fuerzas locales en cada instante, no desde descripciones globales de órbitas elípticas.",
        },
        {
          type: 'paragraph',
          html: "La gravedad es <span class=\"term\">universal</span> (la misma ley rige en la Tierra y en el cielo). Explica manzanas cayendo y planetas orbitando. Integrar aceleración reconstruye velocidad y posición. Derivar posición da velocidad. Son operadores inversos entre sí, aunque integrar suele ser más difícil que derivar.",
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
          html: "El cálculo convierte el «saber ahora» en «predecir siempre»: posición + velocidad + fuerzas → aceleración → integración → futuro y pasado.",
        },
        {
          type: 'paragraph',
          html: "Con las herramientas del cambio ya se puede estudiar cómo evolucionan los sistemas físicos concretos.",
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
          html: "¿Por qué una misma física admite descripciones tan distintas? La dinámica estudia cambios que obedecen ecuaciones físicas. El modelo «bola en colina», una partícula sin fricción en un paisaje de energía potencial V(x), reaparece hasta en campos cuánticos y el Modelo Estándar.",
        },
        {
          type: 'paragraph',
          html: "Energía cinética K = ½mv² más potencial V(x) suman un total conservado. En un valle parabólico aparece el <span class=\"term\">oscilador armónico simple</span> (movimiento sinusoidal alrededor de un equilibrio). Es exactamente soluble y omnipresente: muelles, átomos, campos. Cerca de cualquier equilibrio, casi todo sistema se comporta como parábola.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">espacio de fases</span> (el par {posición, momento}) fija la evolución. Alternativamente, el <span class=\"term\">principio de mínima acción</span> (formulación de Lagrange) postula que la trayectoria real extremiza la acción S = ∫(K − V)dt. Es equivalente a Newton, aunque el físico <span class=\"person\">Richard Feynman</span> advirtió que formulaciones matemáticamente equivalentes no son psicológicamente idénticas al explorar lo desconocido.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Energía potencial",
              "description": "V(x); la fuerza es −dV/dx y empuja hacia mínimos.",
              "icon": "🎢"
            },
            {
              "title": "Oscilador armónico",
              "description": "Cerca del equilibrio, casi todo sistema se aproxima a una parábola.",
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
          html: "Newton, Lagrange y Hamilton describen lo mismo con vocabularios distintos. Elegir uno u otro puede abrir atajos hacia leyes más profundas.",
        },
        {
          type: 'paragraph',
          html: "Antes de unificar espacio y tiempo, Carroll pregunta qué hace especial a cada uno por separado.",
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
          html: "¿Qué es el <span class=\"term\">espacio</span> (el escenario donde ocurren las posiciones)? El debate clásico enfrenta sustancialismo (contenedor) y relacionalismo (solo distancias entre objetos). Hoy los <span class=\"term\">campos</span> (funciones con valor en cada punto) llenan el espacio. Einstein mostró además que su geometría responde a la energía.",
        },
        {
          type: 'paragraph',
          html: "El espacio es tridimensional: tiene tres direcciones independientes. En d dimensiones, fuerzas como la gravedad siguen ley 1/r^(d−1). En 3D, la ley es del inverso del cuadrado. La mecánica hamiltoniana eleva el momento a variable independiente, no definido como mv. En un instante basta posición y momento, sin mirar instantes vecinos.",
        },
        {
          type: 'paragraph',
          html: "Lo que distingue al espacio es que las interacciones son <span class=\"term\">locales en posición</span> (los objetos se influyen cuando coinciden en el mismo lugar). Los campos median esa influencia. Newton temía la «acción a distancia», pero el matemático <span class=\"person\">Pierre-Simon Laplace</span> mostró que un campo gravitatorio local reproduce la misma física. Einstein luego limitó la propagación de cambios a la velocidad de la luz.",
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
        {
          type: 'paragraph',
          html: "El espacio tiene estructura clara; el tiempo, en cambio, plantea un misterio distinto: por qué solo avanza hacia delante.",
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
          html: "¿Por qué el pasado parece fijo y el futuro abierto? Sin tiempo no hay movimiento ni cambio. La duración se mide con relojes: sistemas periódicos (Tierra, osciladores) comparables entre sí. El tiempo se parece al espacio, pero también difiere profundamente.",
        },
        {
          type: 'paragraph',
          html: "La mecánica clásica es reversible: con el estado actual se predice futuro y pasado por igual. A nivel macroscópico, no obstante, el hielo se derrite y no vuelve a formarse. Esa irreversibilidad es la <span class=\"term\">flecha del tiempo</span> (la dirección preferida del cambio). El físico <span class=\"person\">Ludwig Boltzmann</span> conectó entropía con el número de microestados compatibles con un macroestado.",
        },
        {
          type: 'paragraph',
          html: "La flecha no está en las ecuaciones fundamentales. Emerge de la <span class=\"term\">hipótesis del pasado</span> (que el universo empezó en entropía extremadamente baja). El Big Bang denso y uniforme cumple esa condición. Con gravedad relevante, un plasma uniforme es de baja entropía porque la gravedad prefiere la irregularidad. T, P y C se violan en partículas, pero CPT se conserva. Eso no explica la flecha macroscópica.",
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
        {
          type: 'paragraph',
          html: "Einstein unificó espacio y tiempo cuando mostró que ninguno es absoluto por separado.",
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
          html: "¿Qué queda cuando espacio y tiempo dejan de ser independientes? La relatividad especial (<span class=\"num\">1905</span>) unifica ambos en un continuo 4D. El matemático <span class=\"person\">Hermann Minkowski</span> formalizó ese espaciotiempo en <span class=\"num\">1907</span>. No hay tiempo absoluto: cada observador divide espaciotiempo de forma distinta.",
        },
        {
          type: 'paragraph',
          html: "Hay dos nociones de tiempo. Una es la coordenada t (etiqueta convencional). La otra es el <span class=\"term\">tiempo propio τ</span> (lo que marca un reloj viajero). En espacio, la recta es el camino más corto. En espaciotiempo, la trayectoria inercial maximiza el tiempo propio. El <span class=\"term\">intervalo de Minkowski</span> (medida de separación en 4D) se define como τ² = Δt² − Δx² con c = 1.",
        },
        {
          type: 'paragraph',
          html: "Más movimiento espacial implica menos tiempo propio. El experimento de los gemelos no es paradoja: caminos distintos, duraciones distintas. La velocidad c convierte unidades espacio↔tiempo y fija conos de luz que sustituyen la simultaneidad absoluta. E = mc² unifica energía y momento como componente temporal del cuadrimomento.",
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
          html: "En relatividad especial lo real es el espaciotiempo 4D. Espacio y tiempo son cortes convencionales, no divisiones objetivas del mundo.",
        },
        {
          type: 'paragraph',
          html: "Para curvar ese espaciotiempo hace falta una geometría distinta de la euclídea del plano escolar.",
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
          html: "¿Cómo se mide la curvatura sin imaginar un espacio mayor? Einstein necesitó <span class=\"term\">geometría riemanniana</span> (geometría de superficies y espacios curvos) para curvar el espaciotiempo. Euclides axiomatizó el plano. El quinto postulado (paralelas) puede reemplazarse y surgen geometrías esférica (curvatura +) e hiperbólica (−).",
        },
        {
          type: 'paragraph',
          html: "Los matemáticos <span class=\"person\">Carl Friedrich Gauss</span> y <span class=\"person\">Bernhard Riemann</span> desarrollaron geometría intrínseca, medible desde dentro sin embedding en espacio mayor. Una <span class=\"term\">variedad</span> (manifold, conjunto de puntos con dimensión definida) es el objeto básico. Al hacer zoom infinitesimal, parece plano euclídeo. Un cilindro es plano intrínsecamente aunque parezca curvo desde fuera.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">tensor métrico</span> (objeto que define distancias locales) g_ij codifica toda la geometría vía elemento de línea ds² = g_ij dx^i dx^j. Los tensores generalizan funciones y vectores. El tensor de curvatura de Riemann se construye a partir de derivadas del métrico. Einstein aprendió esto con <span class=\"person\">Marcel Grossmann</span> antes de formular la relatividad general.",
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
        {
          type: 'paragraph',
          html: "Con esa geometría en mano, la gravedad deja de ser una fuerza misteriosa y pasa a ser curvatura.",
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
          html: "¿Qué es realmente la gravedad? Para Einstein es curvatura del espaciotiempo. La ecuación de Einstein (<span class=\"num\">25 nov 1915</span>) relaciona tensor de Einstein (curvatura) con tensor energía-momento (materia). Según el físico <span class=\"person\">John Wheeler</span>, el espaciotiempo dice a la materia cómo moverse y la materia dice al espaciotiempo cómo curvarse.",
        },
        {
          type: 'paragraph',
          html: "La masa inercial y la gravitatoria son iguales. Eso lleva al <span class=\"term\">principio de equivalencia</span> (indistinguibilidad local entre gravedad y aceleración). En regiones pequeñas, la gravedad es indistinguible de la aceleración. La caída libre es movimiento geodésico. Quien está en el suelo experimenta la fuerza del suelo que lo desvía de esa geodésica. El tensor T_μν describe fluidos extendidos con densidad ρ, presión p y velocidades.",
        },
        {
          type: 'paragraph',
          html: "Einstein no resolvió sus ecuaciones, pero las comprendió a fondo. El astrónomo <span class=\"person\">Karl Schwarzschild</span>, sentado en el frente, encontró la primera solución exacta semanas después. Las pruebas abarcan precesión de Mercurio y desviación de luz. El eclipse de <span class=\"num\">1919</span>, observado por <span class=\"person\">Arthur Eddington</span>, confirmó la segunda. También están el redshift gravitacional, las ondas gravitacionales (LIGO <span class=\"num\">2015</span>) y la expansión cósmica.",
        },
        {
          type: 'quote',
          text: "«El espaciotiempo dice a la materia cómo moverse; la materia dice al espaciotiempo cómo curvarse.»",
          attribution: "John Wheeler (resumen citado por Carroll)",
        },
        {
          type: 'key',
          html: "La gravedad no es una fuerza ordinaria en el espaciotiempo: es la curvatura del espaciotiempo determinada por la materia y la radiación.",
        },
        {
          type: 'paragraph',
          html: "Una de las predicciones más extremas de esa curvatura son los agujeros negros.",
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
          html: "¿Qué ocurre cuando la gravedad atrapa incluso a la luz? La métrica de <span class=\"person\">Karl Schwarzschild</span> (<span class=\"num\">1915</span>) describe el vacío fuera de un cuerpo esférico. Radio de Schwarzschild r_s = 2GM: horizonte de sucesos. Dentro, r se vuelve coordenada temporal. Caer al centro es avanzar en el futuro inevitable hacia singularidad r = 0.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">dilatación gravitacional</span> (relojes más lentos cerca de masas) implica que relojes cercanos marcan menos tiempo propio que relojes lejanos. Las coordenadas Eddington-Finkelstein eliminan la singularidad de coordenadas en el horizonte. Teorema «no-hair»: agujeros negros quedan caracterizados solo por masa, carga y spin. La <span class=\"term\">solución de Kerr</span> (métrica para agujeros rotatorios) describe el caso con rotación.",
        },
        {
          type: 'paragraph',
          html: "El físico <span class=\"person\">Stephen Hawking</span> (<span class=\"num\">1971</span>) demostró que el área del horizonte solo crece, análogo a entropía. <span class=\"person\">Jacob Bekenstein</span> propuso entropía proporcional al área. Más tarde, Hawking calculó radiación térmica y mostró que los agujeros negros «brillan» cuánticamente. LIGO detectó fusiones (p. ej. 36 + 29 masas solares, <span class=\"num\">2015</span>). El Nobel <span class=\"num\">2020</span> fue para Penrose, Genzel y Ghez.",
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
  "No hace falta resolverlas todas; basta entender qué dicen.",
  "Espacio, tiempo y movimiento forman un solo escenario curvable.",
  "Desde conservación hasta agujeros negros, un hilo continuo.",
  "El volumen 1 abre la puerta; cuántica y emergencia vienen después."
],
    highlight: "Entender las ecuaciones es la forma auténtica de conocer el universo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Sean Carroll",
    line2: "\"The Biggest Ideas in the Universe: Space, Time and Motion\" · Dutton · 2022",
  },
}
