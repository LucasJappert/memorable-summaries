import type { BookSummary } from '../types/book'

export const elegantUniverse: BookSummary = {
  slug: "elegant-universe",
  meta: {
    title: "The Elegant Universe",
    subtitle: "Supercuerdas, dimensiones ocultas y la búsqueda de la teoría final",
    author: "Brian Greene",
    meta: [
      "📖 1999 · ed. actualizada 2003/2011 · W. W. Norton / Random House",
      "✍️ Subtítulo EN: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
    ],
    titleEs: "El universo elegante",
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
    "label": "Atados con una cuerda"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Espacio, tiempo y el ojo del observador"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "De deformaciones y ondas"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Extrañeza microscópica"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "La necesidad de una nueva teoría"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Nada más que música"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "La «super» de las supercuerdas"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Más dimensiones de las que aparentan"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "La pistola humeante"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Geometría cuántica"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Desgarrando el tejido del espacio"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Más allá de las cuerdas: en busca de la M-teoría"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Agujeros negros"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Reflexiones sobre cosmología"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Perspectivas"
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
          html: "¿Por qué contar la historia de la teoría de supercuerdas y qué hilo temático la organiza?",
        },
        {
          type: 'paragraph',
          html: "Durante los últimos treinta años de su vida, <span class=\"person\">Albert Einstein</span> buscó una <span class=\"term\">teoría de campo unificada</span> (marco único para todas las fuerzas de la naturaleza). No lo impulsaba un dato experimental aislado, sino la convicción de que las leyes más profundas deben ser simples y elegantes.",
        },
        {
          type: 'paragraph',
          html: "Medio siglo después de su muerte, muchos físicos creen haber encontrado ese marco. Es la <span class=\"term\">teoría de supercuerdas</span> (cuerdas unidimensionales que aspiran a unificar todas las fuerzas). Por eso Greene elige como eje narrativo nuestra evolución en el entendimiento del <span class=\"term\">espacio-tiempo</span> (fusión de espacio y tiempo en un solo continuo). Einstein lo revolucionó, y la cuerda lo revoluciona de nuevo con dimensiones ocultas enroscadas en el cosmos.",
        },
        {
          type: 'paragraph',
          html: "La teoría aún no está completa ni confirmada experimentalmente. Parte IV es más abstracta y puede omitirse sin romper el hilo. Greene advierte su papel parcial en la investigación: más de mil físicos participan en la búsqueda de la teoría final.",
        },
        {
          type: 'key',
          html: "La supercuerda aspira a ser el marco unificado que Einstein buscó: elegante, profundo y capaz de integrar gravedad y cuántica, aunque aún incompleto y sin prueba definitiva.",
        },
        {
          type: 'paragraph',
          html: "El prefacio enmarca la promesa; el capítulo 1 plantea el conflicto concreto que la motiva: la incompatibilidad entre relatividad general y mecánica cuántica.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Atados con una cuerda",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuál es el problema central de la física moderna y cómo la teoría de cuerdas promete resolverlo?",
        },
        {
          type: 'paragraph',
          html: "Dos pilares sostienen la física del siglo XX: la <span class=\"term\">relatividad general</span> (gravedad como curvatura del espacio-tiempo) y la <span class=\"term\">mecánica cuántica</span> (micromundo probabilístico). Cada una está confirmada con precisión asombrosa en su dominio. Al combinarse, ambas predicen respuestas absurdas en el interior de agujeros negros o en el instante del big bang.",
        },
        {
          type: 'paragraph',
          html: "La materia se organiza en tres familias de partículas (quarks, electrones, neutrinos y sus variantes) y cuatro fuerzas. El electromagnetismo es unos <span class=\"num\">10⁴²</span> veces más fuerte que la gravedad. ¿Por qué esas masas y cargas tan particulares? El modelo estándar (~19 parámetros libres) describe tres fuerzas, pero no incluye gravedad.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría de cuerdas</span> (sustituye puntos por lazos unidimensionales de escala de Planck) propone que cada partícula es un modo resonante de vibración. Lo mismo vale para las fuerzas. En 1984, Michael Green y John Schwarz mostraron que la supercuerda reconcilia gravedad y cuántica. Podría ser la teoría del todo (T.O.E.), aunque aún sin ecuaciones exactas ni predicciones definitivas.",
        },
        {
          type: 'key',
          html: "Relatividad general y mecánica cuántica, cada una triunfante por separado, chocan en el microuniverso. Las cuerdas vibrantes prometen unificarlos en un solo marco.",
        },
        {
          type: 'paragraph',
          html: "Ese tercer conflicto fue precedido por otros dos: la luz frente a la mecánica newtoniana, resuelto en 1905.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Espacio, tiempo y el ojo del observador",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo la velocidad constante de la luz obliga a revisar la intuición newtoniana de espacio y tiempo?",
        },
        {
          type: 'paragraph',
          html: "A los <span class=\"num\">16</span> años, <span class=\"person\">Albert Einstein</span> se preguntó qué pasaría si persiguiera un rayo de luz. Según Maxwell, la luz viaja siempre a c (~670 millones de mph) y nunca puede quedar «quieta». En <span class=\"num\">1905</span>, la <span class=\"term\">relatividad especial</span> (marco donde las leyes son iguales en todo movimiento uniforme) resolvió el primer conflicto del libro.",
        },
        {
          type: 'paragraph',
          html: "El principio de relatividad (Galileo y Einstein) declara que las leyes físicas son idénticas en todo marco de movimiento uniforme. Pero como c es constante, observadores en movimiento relativo miden distancias y tiempos distintos. De ahí que la simultaneidad deje de ser universal. El experimento del foco en el tren lo muestra sin ecuaciones.",
        },
        {
          type: 'paragraph',
          html: "Un reloj de luz imaginario demuestra la <span class=\"term\">dilatación temporal</span> (los relojes en movimiento marcan más despacio). La <span class=\"term\">contracción de Lorentz</span> (acortamiento de longitudes en la dirección del movimiento) explica por qué los objetos en movimiento parecen comprimidos. Los muones a ~99,5% de c viven ~10 veces más desde el laboratorio.",
        },
        {
          type: 'paragraph',
          html: "Minkowski unificó espacio y tiempo. Según su visión, todos los objetos se mueven a velocidad fija c a través del espacio-tiempo. De ahí que E = mc²: más energía implica más masa, y nada supera c.",
        },
        {
          type: 'key',
          html: "La constancia de la luz destruye el espacio y el tiempo absolutos: son relativos al observador y están entrelazados en el espacio-tiempo.",
        },
        {
          type: 'paragraph',
          html: "La relatividad especial prohíbe influencias más rápidas que la luz, pero la gravedad newtoniana actúa instantáneamente. De ahí nace el segundo conflicto.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "De deformaciones y ondas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es la gravedad y cómo puede ser compatible con el límite de velocidad de la luz?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Isaac Newton</span> unificó cielo y tierra con una fuerza gravitatoria instantánea, pero no explicaba cómo actúa a distancia. En <span class=\"num\">1907</span>, el «pensamiento más feliz» de Einstein mostró que gravedad e aceleración son indistinguibles. Eso es el <span class=\"term\">principio de equivalencia</span> (base de la relatividad general).",
        },
        {
          type: 'paragraph',
          html: "La relatividad general (1915) identifica gravedad con la curvatura del espacio-tiempo. La masa deforma el «tejido» como una bola de boliche sobre una lona. La Tierra orbita por la curvatura, no por un tirón invisible. Las perturbaciones se propagan a c, no al instante.",
        },
        {
          type: 'paragraph',
          html: "En 1916, <span class=\"person\">Karl Schwarzschild</span> encontró soluciones con agujeros negros. <span class=\"person\">Alexander Friedmann</span> y <span class=\"person\">Edwin Hubble</span> mostraron expansión cósmica. <span class=\"person\">Arthur Eddington</span> confirmó en 1919 (Príncipe, 29 mayo) la desviación de la luz: 1,75″ de arco. <span class=\"person\">John Wheeler</span> dijo que «la masa agarra al espacio… y el espacio agarra a la masa».",
        },
        {
          type: 'key',
          html: "Einstein reformuló la gravedad. Ya no es fuerza a distancia, sino geometría dinámica del espacio-tiempo que se curva y ondula a la velocidad de la luz.",
        },
        {
          type: 'paragraph',
          html: "A escalas microscópicas hace falta la mecánica cuántica, cuyas reglas contradicen la geometría suave de Einstein.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Extrañeza microscópica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué revela la mecánica cuántica sobre el microuniverso que invalida el determinismo clásico?",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1900</span>, <span class=\"person\">Max Planck</span> repartió la energía en cuantos. La constante <span class=\"term\">h</span> (≈ 10⁻³⁴ J·s en unidades cotidianas) fija el tamaño mínimo de esos paquetes. Un horno perfectamente aislado tendría energía infinita si la energía fuera continua. En <span class=\"num\">1905</span>, Einstein mostró que los <span class=\"term\">fotones</span> (paquetes de luz) explican el efecto fotoeléctrico: importa la frecuencia, no la intensidad.",
        },
        {
          type: 'paragraph',
          html: "El experimento de la doble rendija (Young, luego celebrado por Feynman) muestra interferencia incluso con fotones uno a uno. La luz es onda y partícula. <span class=\"person\">Louis de Broglie</span> extendió la dualidad a la materia. <span class=\"person\">Max Born</span> interpretó la función de onda como probabilidad. <span class=\"person\">Werner Heisenberg</span> formuló el <span class=\"term\">principio de incertidumbre</span> (posición y velocidad no pueden conocerse a la vez con precisión total).",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Richard Feynman</span> propuso sumar sobre todas las trayectorias posibles. El túnel cuántico permite atravesar barreras «imposibles». Einstein rechazó el azar («Dios no juega a los dados»), pero experimentos de Bell y Aspect lo desmintieron. Según <span class=\"person\">Stephen Hawking</span>, «Einstein estaba confundido, no la teoría cuántica».",
        },
        {
          type: 'key',
          html: "El mundo cuántico es probabilístico, cuantizado y dual: la intuición clásica de trayectorias definidas falla en la escala de h.",
        },
        {
          type: 'paragraph',
          html: "Unir geometría suave (GR) con frenesí cuántico (QM) produce infinitos y probabilidades imposibles a escala de Planck.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La necesidad de una nueva teoría",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el conflicto entre relatividad general y mecánica cuántica es el problema central de la física contemporánea?",
        },
        {
          type: 'paragraph',
          html: "El principio de incertidumbre genera fluctuaciones perpetuas de energía en el vacío: pares partícula-antipartícula aparecen y desaparecen. A distancias de escala de Planck (~10⁻³³ cm), la <span class=\"term\">espuma cuántica</span> (imagen de Wheeler) destruye la geometría lisa de Einstein. Los cálculos combinados dan infinitos.",
        },
        {
          type: 'paragraph',
          html: "La electrodinámica cuántica (QED) predice propiedades del electrón con precisión de una parte en mil millones. <span class=\"person\">Toichiro Kinoshita</span> verificó esas cifras. Glashow, Salam y Weinberg unificaron electromagnetismo y fuerza débil en la interacción <span class=\"term\">electrodébil</span> (una sola fuerza a altas energías). Tres fuerzas quedaron en el modelo estándar. La gravedad, fuera.",
        },
        {
          type: 'paragraph',
          html: "Las fuerzas respetan simetrías gauge. Los cambios de «carga de color» en quarks exigen la fuerza fuerte. Unificar gravedad con cuántica mediante campos puntuales falla una y otra vez. Solo con la supercuerda, escribe Greene, aparece salida.",
        },
        {
          type: 'key',
          html: "A escala de Planck, la espuma cuántica rompe la geometría riemanniana. El modelo estándar unifica tres fuerzas pero no puede fusionarse con la gravedad sin una teoría nueva.",
        },
        {
          type: 'paragraph',
          html: "La teoría de cuerdas modifica el punto por cuerda extendida y reconcilia ambos marcos.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Nada más que música",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo la idea básica de cuerdas vibrantes resuelve el conflicto gravedad-cuántica y promete una T.O.E.?",
        },
        {
          type: 'paragraph',
          html: "Las cuerdas unidimensionales de escala de Planck sustituyen puntos. El punto de partida fue <span class=\"person\">Gabriele Veneziano</span> (1968) y la función beta de Euler. Cada modo resonante determina masa y cargas: el electrón es una nota, el fotón otra. <span class=\"person\">Joël Scherk</span> y <span class=\"person\">John Schwarz</span> (1974) vieron el gravitón (spin-2) entre las vibraciones.",
        },
        {
          type: 'paragraph',
          html: "La tensión de Planck (~10³⁹ toneladas) encoge las cuerdas a ~10⁻³³ cm. Las cancelaciones cuánticas explican masas bajas: la mayoría de modos pesa ~10¹⁹ veces el protón, pero unos pocos «afortunados» coinciden con las partículas observadas. La primera revolución supercuerda (1984–86) reunió a ~1000 físicos.",
        },
        {
          type: 'paragraph',
          html: "Una cuerda extendida «difumina» la sonda más allá de Planck. <span class=\"person\">David Gross</span> y Paul Mende (1988) lo demostraron: no puede resolver sub-Planck. Por eso la espuma cuántica deja de ser catastrófica. La gravedad cuántica con partículas puntuales daba infinitos. La cuerda los evita.",
        },
        {
          type: 'key',
          html: "Partículas y fuerzas son modos resonantes de cuerdas minúsculas. Su extensión espacial suaviza la espuma cuántica y unifica materia, interacciones y gravedad.",
        },
        {
          type: 'paragraph',
          html: "Las cuerdas requieren supersimetría para consistencia y eliminar el taquión del string bosónico.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "La «super» de las supercuerdas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué aporta la supersimetría a la física de partículas y por qué es esencial para las supercuerdas?",
        },
        {
          type: 'paragraph',
          html: "Las leyes físicas respetan simetrías como relatividad, equivalencia y gauge. Coleman y Mandula (1967) probaron que no hay más simetrías espacio-temporales, salvo un «agujero»: el <span class=\"term\">spin</span> (momento angular intrínseco de las partículas). Uhlenbeck y Goudsmit (1925) mostraron spin-½ en electrones. Los fotones tienen spin-1. El gravitón, spin-2.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">supersimetría</span> (SUSY) empareja bosones y fermiones en superpartners como selectrón, fotino y squarks. Ningún superpartner observado aún. Podrían ser muy masivos. Aun así, SUSY cancela fluctuaciones cuánticas finas y estabiliza el modelo estándar. Georgi, Quinn y Weinberg calcularon que sin SUSY las tres fuerzas casi convergen. La supersimetría activa hace que las tres fuerzas sí converjan (~10²⁸ K).",
        },
        {
          type: 'paragraph',
          html: "El string bosónico tenía un taquión (masa² negativa). Ramond, Neveu, Schwarz y Gliozzi introdujeron fermiones en la cuerda y nació la supercuerda. Cinco teorías distintas (Type I, IIA, IIB, Heterotic O(32) y E₈×E₈) parecían minar la unicidad. Witten planteó entonces esta pregunta abierta: «Si una describe nuestro universo, ¿quién vive en los otros cuatro?»",
        },
        {
          type: 'key',
          html: "La supersimetría extiende las simetrías al spin, empareja bosones y fermiones, y es indispensable para supercuerdas consistentes sin taquión.",
        },
        {
          type: 'paragraph',
          html: "Las supercuerdas exigen dimensiones espaciales adicionales más allá de las tres visibles.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Más dimensiones de las que aparentan",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la teoría de cuerdas necesita dimensiones extra y cómo pueden estar ocultas?",
        },
        {
          type: 'paragraph',
          html: "Greene ilustra las dimensiones extra con la manguera: vista de lejos, parece 1D, y de cerca tiene grosor circular. Así lo había imaginado <span class=\"person\">Theodor Kaluza</span> (1919), quien unificó gravedad y electromagnetismo en 5D. <span class=\"person\">Oskar Klein</span> enroscó la extra a escala de Planck. Einstein dudó, pero luego elogió la idea.",
        },
        {
          type: 'paragraph',
          html: "Las cuerdas necesitan 9 direcciones espaciales de vibración independientes para evitar probabilidades negativas. Con 3 grandes y 6 compactas (10D total con tiempo), la teoría es consistente. Witten luego argumentó 11D (cap. 12).",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1984</span>, Candelas, Horowitz, <span class=\"person\">Strominger</span> y Witten mostraron que las 6 extra deben ser espacios Calabi-Yau (formas complejas de 6D). La geometría compacta fija masas, cargas y número de familias de partículas. Decenas de miles de formas posibles. Elegir la correcta sigue abierto (la «pregunta de los 64.000 dólares»).",
        },
        {
          type: 'key',
          html: "Dimensiones extra enroscadas a escala sub-Planck son obligatorias en cuerdas, y su geometría Calabi-Yau determina la física observable en 3+1 dimensiones.",
        },
        {
          type: 'paragraph',
          html: "Si la geometría extra fija la física, ¿hay firmas experimentales de la teoría?",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La pistola humeante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la teoría de cuerdas contrastarse con la experimentación y con qué grado de certeza?",
        },
        {
          type: 'paragraph',
          html: "Witten señala que la cuerda «predice» gravedad, pero en realidad es post-dicción. Confirmar cuerdas directamente requeriría un acelerador del tamaño de galaxia o universo, según <span class=\"person\">Shmuel Nussinov</span>. Solo quedan pruebas indirectas.",
        },
        {
          type: 'paragraph',
          html: "Los agujeros de Calabi-Yau se relacionan con familias de partículas: 3 agujeros implican 3 familias (Candelas et al.). Masas dependen de intersecciones de agujeros (Strominger-Witten). Pero sin saber qué Calabi-Yau elegir, no hay predicciones numéricas definitivas.",
        },
        {
          type: 'paragraph',
          html: "Entre las firmas genéricas figuran superpartners en el LHC (Ginebra, ~2010 en el texto original). También cargas fraccionarias exóticas (1/5, 1/11…), materia oscura y una constante cosmológica ~10¹²⁰ veces mayor de lo observado. Glashow y Feynman fueron escépticos. Witten, Vafa y Gell-Mann, entusiastas. Encontrar SUSY no probaría cuerdas únicamente. No encontrarla no las refutaría.",
        },
        {
          type: 'key',
          html: "La cuerda carece aún de predicciones numéricas precisas, pero ofrece firmas indirectas (SUSY, cargas exóticas, cosmología) mientras la escala de Planck permanece inaccesible.",
        },
        {
          type: 'paragraph',
          html: "La geometría del espacio-tiempo misma debe generalizarse a geometría cuántica en escala de Planck.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Geometría cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo modifica la teoría de cuerdas la noción de geometría del espacio-tiempo en el límite de Planck?",
        },
        {
          type: 'paragraph',
          html: "Riemann, Gauss y Einstein midieron curvatura por distancias. En cuerdas, sin embargo, un punto no existe. Por eso la geometría riemanniana falla bajo Planck y surge la <span class=\"term\">geometría cuántica</span> (marco aún en construcción matemática).",
        },
        {
          type: 'paragraph',
          html: "Las cuerdas pueden enrollarse (winding) alrededor de dimensiones circulares. Kikkawa y Yamasaki (1984) mostraron que radio R e 1/R son indistinguibles en energía total. Eso es la <span class=\"term\">dualidad T</span> (intercambio entre tamaño compacto y modo de enrollamiento). Un universo-jardín colapsando no llega a tamaño cero: rebota. Vibración y winding intercambian roles.",
        },
        {
          type: 'paragraph',
          html: "La simetría espejo (mirror symmetry) relaciona pares de Calabi-Yau distintos con la misma física. Candelas et al. la usaron para contar esferas racionales. A macroescala, la relatividad general sigue siendo excelente aproximación.",
        },
        {
          type: 'key',
          html: "En escala de Planck, modos de enrollamiento y vibración de cuerdas reescriben la geometría: radios dualizados, colapsos evitados y Calabi-Yau espejo equivalentes.",
        },
        {
          type: 'paragraph',
          html: "Si la geometría puede dualizarse, ¿puede también romperse y repararse?",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Desgarrando el tejido del espacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede el tejido del espacio romperse y recomponerse sin catástrofe física?",
        },
        {
          type: 'paragraph',
          html: "La relatividad general prohíbe desgarros porque la geometría debe ser suave. Yau y Tian describieron transiciones flop. Una 2-esfera dentro de Calabi-Yau se pinza, el espacio se desgarra y se repara con topología distinta.",
        },
        {
          type: 'paragraph',
          html: "Greene, Aspinwall y Morrison (1992, Institute for Advanced Study) calcularon masas de partículas antes y después del flop. Resultado: 9 = 9. Witten explicó que la hoja de mundo (world-sheet) de la cuerda envuelve la esfera y protege al universo de la catástrofe. La gravedad con partículas puntuales no puede hacerlo.",
        },
        {
          type: 'paragraph',
          html: "Strominger mostró que 3-esferas pueden colapsar sin catástrofe si una 3-brana las envuelve. Las cuerdas 1D lazan 2-esferas, no 3-esferas. Las transiciones <span class=\"term\">conifold</span> (colapso controlado de ciclos) cambian agujeros de Calabi-Yau y conectan teorías duales.",
        },
        {
          type: 'key',
          html: "En cuerdas, el espacio Calabi-Yau puede desgarrarse y recomponerse topológicamente gracias a cuerdas y branas que estabilizan la geometría donde GR clásica fallaría.",
        },
        {
          type: 'paragraph',
          html: "Las cinco teorías de cuerdas y sus branas piden un marco más amplio: M-teoría.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Más allá de las cuerdas: en busca de la M-teoría",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo se unifican las cinco teorías de cuerdas aparentemente distintas y qué es M-teoría?",
        },
        {
          type: 'paragraph',
          html: "Cinco supercuerdas (1980s) parecían teorías separadas. Las ecuaciones exactas son desconocidas, y solo tenemos aproximaciones perturbativas. Cada teoría tiene acoplamiento de cuerdas g, y cuando g ≥ 1 la perturbación falla.",
        },
        {
          type: 'paragraph',
          html: "En Strings '95 (USC), Witten anunció entonces la segunda revolución. Las dualidades (T, S, U) muestran que las cinco teorías son ventanas a una sola estructura: M-teoría (Membrane/Mystery/Magic/Mother). Tiene 11 dimensiones (10 espacio + 1 tiempo), no 10.",
        },
        {
          type: 'paragraph',
          html: "M-teoría incluye no solo cuerdas (1-branes) sino membranas 2D, 3-branes y más. Greene compara acoplamiento fuerte y débil con hielo y agua: lo fuerte en una teoría equivale a lo débil en otra. Muchas soluciones Calabi-Yau implican multiverso posible. La unicidad prometida queda para ecuaciones exactas futuras.",
        },
        {
          type: 'key',
          html: "Las cinco supercuerdas son dualidades de una sola M-teoría de once dimensiones con cuerdas, branes y simetrías ocultas por métodos perturbativos.",
        },
        {
          type: 'paragraph',
          html: "M-teoría y branas permiten abordar agujeros negros y entropía Bekenstein-Hawking microscópicamente.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Agujeros negros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué dice la teoría de cuerdas sobre agujeros negros, su entropía y su relación con partículas?",
        },
        {
          type: 'paragraph',
          html: "Wheeler resumió que «los agujeros negros no tienen pelo»: solo masa, carga y spin. Por eso los hace parecidos a partículas elementales. En relatividad general, los agujeros negros tienen singularidad, y en cuántica el conflicto persiste.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jacob Bekenstein</span> (1970) propuso que la entropía es proporcional al área del horizonte. <span class=\"person\">Stephen Hawking</span> (1974) mostró radiación de agujeros negros: son casi negros (~10⁻⁸ K para uno solar). Durante 25 años, nadie contó los estados microscópicos.",
        },
        {
          type: 'paragraph',
          html: "Strominger y Vafa (1996) construyeron agujeros extremos con branas BPS y contaron estados. El acuerdo con Bekenstein-Hawking es exacto. En transiciones conifold, un agujero negro «se derrite» en partícula sin masa (fotón). Greene, Morrison y Strominger mostraron un cambio de fase, no catástrofe.",
        },
        {
          type: 'key',
          html: "Cuerdas/M-teoría calculan por primera vez la entropía de agujeros negros contando estados microscópicos de branas y conectan agujeros extremos con partículas elementales.",
        },
        {
          type: 'paragraph',
          html: "Los mismos límites Planck y branas aplican al origen del universo.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Reflexiones sobre cosmología",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo modifica la teoría de cuerdas la cosmología, especialmente el instante inicial y la estructura del universo?",
        },
        {
          type: 'paragraph',
          html: "El modelo estándar cosmológico sitúa el big bang hace ~15 mil millones de años. Incluye nucleosíntesis primordial y CMB ~2,7 K (Penzias-Wilson, 1965, y COBE). Antes de ~10⁻⁴³ s (tiempo de Planck), la relatividad general predice singularidad infinita. Ahí falla.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Alan Guth</span> (1979) propuso la <span class=\"term\">inflación</span> (expansión exponencial ~10⁻³⁶–10⁻³⁴ s, factor ≥10³⁰) para resolver el problema del horizonte. Simetrías rotas dejan la interacción electrodébil a ~10²⁸ K. Brandenberger y Vafa sugieren que el universo comienza como «nugget» de Planck. La dualidad T evita singularidad. Tres dimensiones se expanden porque cuerdas 1D chocan más en ≤3D.",
        },
        {
          type: 'paragraph',
          html: "Gasperini y Veneziano proponen un escenario pre-big bang: universo frío e infinito antes del Planck. En M-teoría (Witten), las cuatro fuerzas pueden unificarse en el origen (Figura 14.2). La selección de Calabi-Yau y tres dimensiones grandes siguen conjeturales.",
        },
        {
          type: 'key',
          html: "La cosmología de cuerdas evita la singularidad clásica con nugget de Planck, dualidad de radios e inflación, pero las ecuaciones exactas del instante inicial aún faltan.",
        },
        {
          type: 'paragraph',
          html: "Quedan preguntas abiertas sobre principio fundamental, pruebas y límites de la explicación.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Perspectivas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué queda por resolver para saber si la teoría de cuerdas es la descripción final de la naturaleza?",
        },
        {
          type: 'paragraph',
          html: "Greene enumera cinco preguntas centrales. Primero, ¿hay un principio de inevitabilidad subyacente? Einstein tuvo equivalencia. La cuerda aún busca su análogo. Segundo, ¿qué son espacio y tiempo realmente? Gravitones serían estados coherentes de cuerdas. Podría haber origen sin espacio ni tiempo mediante <span class=\"term\">zero-branes</span> (objetos puntuales de dimensión cero) y geometría no conmutativa de Connes.",
        },
        {
          type: 'paragraph',
          html: "Tercero, ¿hace falta reformular la mecánica cuántica? Vafa y Witten sostienen que QM debe nacer cuántica, no cuantizarse clásicamente. Cuarto, ¿habrá pruebas experimentales? SUSY en el LHC sería circunstancial pero dramática. Quinto, ¿hay límites a la explicación? ¿Parámetros «por accidente» o multiverso?",
        },
        {
          type: 'paragraph',
          html: "Witten reflexiona en que «Podría ser que la forma final caiga del cielo… pero más realistamente, bien entrado el siglo XXI, físicos más jóvenes decidirán». Bronowski recuerda que «En cada época hay un punto de inflexión, una nueva forma de ver la coherencia del mundo».",
        },
        {
          type: 'key',
          html: "La cuerda/M-teoría es la candidata más prometedora a T.O.E., pero requiere principio organizador, origen del espacio-tiempo, QM reformulada y confirmación experimental aún pendientes.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Espacio-tiempo",
    "description": "De absoluto newtoniano a relativo (SR), dinámico y curvo (GR), espuma cuántica (QM), emergente de cuerdas/M-teoría."
  },
  {
    "title": "Unificación",
    "description": "Kaluza-Klein → modelo estándar → cuerdas → M-teoría; simetrías gauge y supersimetría."
  },
  {
    "title": "Cuerdas vibrantes",
    "description": "Partículas y fuerzas como modos resonantes; «música» cósmica a escala de Planck."
  },
  {
    "title": "Dimensiones extra",
    "description": "Compactas Calabi-Yau; geometría fija masas, cargas y familias de partículas."
  },
  {
    "title": "Dualidades",
    "description": "T (R ↔ 1/R), simetría espejo, S/U entre cinco cuerdas → M-teoría unificada."
  },
  {
    "title": "Escala de Planck",
    "description": "Longitud ~10⁻³³ cm, tiempo ~10⁻⁴³ s, energía/tensión donde GR y QM deben fusionarse."
  },
  {
    "title": "Perturbación vs. no perturbación",
    "description": "Métodos aproximados hasta revolución de 1995; acoplamiento fuerte invalida loops."
  },
  {
    "title": "Branes",
    "description": "0-branes a 3-branes; envolturas que estabilizan geometría y construyen agujeros negros."
  },
  {
    "title": "Topología del espacio",
    "description": "Flop, conifold, cambio de agujeros Calabi-Yau sin catástrofe en cuerdas."
  },
  {
    "title": "Entropía de agujeros negros",
    "description": "Puente termodinámico (Bekenstein-Hawking) y conteo microscópico string (Strominger-Vafa)."
  }
],
  chronology: [
  {
    "year": "1900",
    "text": "Planck: cuantización de la energía"
  },
  {
    "year": "1905",
    "text": "Einstein: relatividad especial y fotones"
  },
  {
    "year": "1907",
    "text": "Principio de equivalencia"
  },
  {
    "year": "1915",
    "text": "Relatividad general"
  },
  {
    "year": "1919",
    "text": "Eddington confirma curvatura de la luz; Kaluza propone 5D"
  },
  {
    "year": "1925",
    "text": "Spin (Uhlenbeck/Goudsmit); 1926: Klein compactifica extra"
  },
  {
    "year": "1968",
    "text": "Veneziano y función beta; cuerdas como modelo de hadrones"
  },
  {
    "year": "1974",
    "text": "Scherk/Schwarz: cuerdas incluyen gravedad; Hawking: radiación de agujeros negros"
  },
  {
    "year": "1984",
    "text": "Green/Schwarz: primera revolución supercuerda; Calabi-Yau (Candelas et al.)"
  },
  {
    "year": "1991",
    "text": "Transiciones flop; 1995: Witten anuncia M-teoría (Strings '95)"
  },
  {
    "year": "1995–96",
    "text": "Transiciones conifold; Strominger-Vafa: entropía de agujeros negros"
  },
  {
    "year": "~1990s",
    "text": "COBE confirma CMB; inflación ~10⁻³⁶ s ATB"
  },
  {
    "year": "~15 mil millones de años",
    "text": "Big bang; límite clásico ~10⁻⁴³ s ATB"
  }
],
  figures: [
  {
    "name": "Albert Einstein",
    "role": "Búsqueda de unificación; relatividad especial y general"
  },
  {
    "name": "Isaac Newton / James Clerk Maxwell",
    "role": "Gravedad clásica; electromagnetismo y velocidad de la luz"
  },
  {
    "name": "Max Planck / Albert Einstein / Werner Heisenberg",
    "role": "Cuantización, fotones, incertidumbre"
  },
  {
    "name": "Richard Feynman",
    "role": "«Nadie entiende la mecánica cuántica»; sum-over-paths"
  },
  {
    "name": "Theodor Kaluza / Oskar Klein",
    "role": "Dimensiones extra para unificar fuerzas"
  },
  {
    "name": "Gabriele Veneziano / John Schwarz / Michael Green",
    "role": "Origen y revolución de la teoría de cuerdas"
  },
  {
    "name": "Edward Witten",
    "role": "M-teoría; segunda revolución supercuerda"
  },
  {
    "name": "Philip Candelas / Andrew Strominger / Shing-Tung Yau",
    "role": "Calabi-Yau, simetría espejo, transiciones topológicas"
  },
  {
    "name": "Jacob Bekenstein / Stephen Hawking",
    "role": "Entropía y radiación de agujeros negros"
  },
  {
    "name": "Alan Guth / Alexander Friedmann / Edwin Hubble",
    "role": "Inflación y expansión cósmica"
  },
  {
    "name": "Robert Brandenberger / Gabriele Veneziano",
    "role": "Cosmología string; pre-big bang"
  },
  {
    "name": "Brian Greene",
    "role": "Autor-investigador; transiciones flop y conifold"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La física fundamental puede unificarse en cuerdas/M-teoría: partículas y fuerzas son modos de vibración unidimensionales y la gravedad emerge de la geometría del espacio-tiempo.",
  "Greene reconstruye tres conflictos del siglo XX — luz, gravedad, cuántica — y muestra cómo la cuerda los reconcilia con dimensiones ocultas, supersimetría y geometría cuántica.",
  "Einstein buscó leyes simples y bellas; la supercuerda continúa esa búsqueda con espuma cuántica, dualidades y un cosmos que puede desgarrarse y recomponerse.",
  "La confirmación vendrá indirectamente — SUSY, cosmología, entropía de agujeros negros — mientras la escala de Planck permanece fuera del alcance directo.",
  "En suma, el relato del espacio-tiempo no ha terminado: es la aventura más ambiciosa de la física teórica contemporánea."
],
    highlight: "La promesa es elegante y profunda, pero la teoría aún carece de ecuaciones exactas, selección de vacío Calabi-Yau y prueba experimental definitiva",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Brian Greene",
    line2: "\"The Elegant Universe\" · W. W. Norton · 1999",
  },
}
