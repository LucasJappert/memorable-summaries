import type { BookSummary } from '../types/book'

export const whyEvolutionIsTrue: BookSummary = {
  slug: "why-evolution-is-true",
  meta: {
    title: "Why Evolution Is True",
    subtitle: "La evidencia abrumadora de que la vida cambió y sigue cambiando",
    author: "Jerry A. Coyne",
    meta: [
      "📖 2009 · Viking Penguin",
      "✍️ Profesor emérito de Ecología y Evolución, Universidad de Chicago",
    ],
    titleEs: "Por qué la evolución es verdad",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio e introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "¿Qué es la evolución?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Escrito en las rocas"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Vestigios: remanentes, embriones y mal diseño"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "La geografía de la vida"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El motor de la evolución"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Cómo el sexo impulsa la evolución"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "El origen de las especies"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "¿Qué hay de nosotros?"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Evolución revisitada"
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
      title: "Dover, encuestas y por qué importa la evidencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"num\">20 de diciembre de 2005</span>, el juez <span class=\"person\">John Jones III</span> falló en *Kitzmiller v. Dover*: el «diseño inteligente» en las escuelas de Pensilvania era inconstitucional — teología disfrazada de ciencia. Coyne lo vivió como victoria temporal: el creacionismo es como un payaso inflable que siempre vuelve a levantarse.",
        },
        {
          type: 'paragraph',
          html: "El mantra de los opositores, «la teoría de la evolución está en crisis», es falso. La evolución no es solo una «teoría». Es un <span class=\"term\">hecho</span> respaldado por un siglo y medio de evidencia que confirma la propuesta darwiniana, especialmente la selección natural. Este libro resume las líneas principales de prueba para quienes dudan o necesitan argumentos.",
        },
        {
          type: 'paragraph',
          html: "En la introducción, Coyne recuerda a <span class=\"person\">Darwin</span>. Según él, la evolución muestra nuestro lugar en el árbol de la vida y reemplaza mitos milenarios. La selección natural es un mecanismo de belleza asombrosa y simplicidad. Los biólogos confían en el darwinismo tanto como en la existencia de átomos, pero fuera de la ciencia persisten resistencias psicológicas y religiosas: solo el <span class=\"num\">40 %</span> de estadounidenses acepta que los humanos descendemos de otros animales, frente a más del <span class=\"num\">80 %</span> en Francia o Escandinavia.",
        },
        {
          type: 'quote',
          text: "«Hay grandeza en esta visión de la vida... de tan simple un principio han continuado y continúan evolucionando formas infinitas, las más hermosas y maravillosas.»",
          attribution: "Charles Darwin, *El origen de las especies*",
        },
        {
          type: 'key',
          html: "Coyne escribe para quienes aceptan la evolución pero no saben cómo defenderla, y para mostrar que el darwinismo es <span class=\"key-term\">hecho científico</span>, no especulación en crisis.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Qué es la evolución?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La naturaleza parece diseñada. Camaleones, colibríes y orquídeas que engañan a polinizadores sugieren un relojero celestial. <span class=\"person\">William Paley</span> (<span class=\"num\">1802</span>) argumentó que, como un reloj implica relojero, la complejidad biológica implica un Diseñador. Darwin ofreció la alternativa de <span class=\"term\">evolución</span> y <span class=\"term\">selección natural</span>.",
        },
        {
          type: 'paragraph',
          html: "La evolución moderna se resume en seis componentes: cambio genético en el tiempo, <span class=\"term\">gradualismo</span> (cambios grandes requieren miles o millones de generaciones), <span class=\"term\">especiación</span> (linajes que dejan de intercambiar genes), <span class=\"term\">ascendencia común</span> (todos compartimos ancestros), selección natural como mecanismo principal, y otros mecanismos menores como la deriva génica. Los árboles filogenéticos muestran jerarquías anidadas que Linneo reconoció antes de Darwin, quien explicó por qué existen: divergencia por descendencia con modificación.",
        },
        {
          type: 'paragraph',
          html: "La selección natural no es un diseñador consciente. Es un chapucero que remodela lo existente y produce el más apto, no el óptimo. El rinoceronte indio tiene un solo cuerno porque la mutación de dos quizá no surgió. La evolución puede ocurrir sin selección natural, pero solo la selección produce adaptación. En ciencia, «teoría» no significa conjetura. La evolución es marco verificable, teoría y hecho a la vez, como la gravedad.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Ascendencia común",
              "description": "Todo ser vivo comparte ancestros; cuanto más reciente el ancestro común, más parecidos dos especies.",
              "icon": "🌳"
            },
            {
              "title": "Especiación",
              "description": "Poblaciones que evolucionan barreras reproductivas — dejan de intercambiar genes.",
              "icon": "🔀"
            },
            {
              "title": "ADN",
              "description": "Secuencias genéticas confirman independientemente los árboles basados en anatomía.",
              "icon": "🧬"
            }
          ],
        },
        {
          type: 'key',
          html: "El darwinismo moderno agrupa evolución, gradualismo, especiación, ancestro común y selección natural. No es dogma, sino el conjunto de hechos y mecanismos que explican la diversidad de la vida.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Escrito en las rocas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La historia de la vida está escrita en fósiles, un museo desgarrado pero legible. Paleontólogos como <span class=\"person\">Paul Sereno</span> arriesgan el Sahara para descubrir especies que reescriben la evolución de los dinosaurios. Si no hubiera fósiles, inferiríamos relaciones solo por anatomía y ADN.",
        },
        {
          type: 'paragraph',
          html: "Formarse fósiles requiere enterramiento rápido, y los tejidos blandos casi nunca fossilizan. De entre <span class=\"num\">17 millones</span> y <span class=\"num\">4 mil millones</span> de especies estimadas, conocemos unas <span class=\"num\">250.000</span> fósiles, una muestra pequeña pero suficiente. Geólogos creacionistas ordenaron capas por <span class=\"term\">superposición</span> (<span class=\"person\">Nicolaus Steno</span>) antes del darwinismo. Desde <span class=\"num\">1945</span>, la datación radiométrica fija edades absolutas. La Tierra tiene unos <span class=\"num\">4.600 millones</span> de años.",
        },
        {
          type: 'paragraph',
          html: "El registro confirma predicciones evolutivas. Las formas simples preceden a las complejas. El cambio es gradual en foraminíferos y trilobites, y la especiación aparece en plancton marino. Las «formas de transición» no son el ancestro exacto, sino especies con mezcla de rasgos en la edad correcta. <span class=\"person\">Tiktaalik</span> (~<span class=\"num\">375 Ma</span>) fue predicho y hallado en el Ártico canadiense. <span class=\"term\">Archaeopteryx</span> y los dinosaurios emplumados de China enlazan reptiles y aves. Las ballenas derivan de <span class=\"term\">Indohyus</span> y <span class=\"term\">Pakicetus</span> en unos <span class=\"num\">10 millones</span> de años. Como dijo <span class=\"person\">J. B. S. Haldane</span>, un conejo fósil en el Precámbrico refutaría la evolución, y nunca apareció.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~250.000",
              "label": "Especies fósiles descritas"
            },
            {
              "value": "0,1–1 %",
              "label": "Especies que dejaron registro fósil"
            },
            {
              "value": "~3.500 Ma",
              "label": "Primeras formas de vida en el registro"
            }
          ],
        },
        {
          type: 'key',
          html: "Los fósiles cumplen predicciones evolutivas en orden temporal y anatomía. Remodelar lo viejo en lo nuevo es la firma de la evolución, no del diseño desde cero.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Vestigios: remanentes, embriones y mal diseño",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los organismos son <span class=\"term\">palimpsestos</span> evolutivos, como manuscritos medievales reescritos donde trazas del texto original persisten. <span class=\"person\">Theodosius Dobzhansky</span> afirmó que «nada en biología tiene sentido excepto a la luz de la evolución».",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">órganos vestigiales</span> perdieron la función para la cual evolucionaron, aunque puedan tener usos secundarios. Ejemplos: alas del avestruz, apéndice humano y pelvis de ballenas. Los <span class=\"term\">atavismos</span> reactivan genes silenciados, como patas en ballenas o colas en humanos. Los <span class=\"term\">pseudogenes</span> son genes muertos. ψGLO explica por qué los primates no sintetizan vitamina C. Los delfines tienen <span class=\"num\">80 %</span> de genes olfativos inactivos.",
        },
        {
          type: 'paragraph',
          html: "El desarrollo embrionario recapitula etapas evolutivas de forma limitada. Aparecen arcos branquiales, una circulación que pasa por fases de pez y un anillo lanoso fetal. El «mal diseño» incluye el nervio laríngeo recurrente que rodea la aorta, el descenso testicular que causa hernias y el parto humano doloroso. Todo encaja con historia evolutiva, no con diseño óptimo de novo.",
        },
        {
          type: 'list',
          items: [
            "**Palimpsesto** — Capas de historia legibles en anatomía, ADN y desarrollo.",
            "**Vestigio** — Rasgo heredado cuya función original ya no aplica.",
            "**Pseudogen** — Gen inactivado por mutaciones; cementerio del genoma."
          ],
        },
        {
          type: 'key',
          html: "Vestigios, embriones y mal diseño son <span class=\"key-term\">firmas de historia</span> que la creación especial no explica sin forzar coincidencias imposibles.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La geografía de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">biogeografía</span>, el estudio de dónde viven las especies, fue crucial para Darwin en el *Beagle* y ocupa dos capítulos del *Origen*. Los creacionistas no han refutado seriamente esta evidencia. Simplemente la ignoran.",
        },
        {
          type: 'paragraph',
          html: "Desiertos similares en continentes distintos albergan suculentas no emparentadas. En América hay cactus y en el Viejo Mundo euforbias, un caso de <span class=\"term\">convergencia</span> por selección similar, no de diseño repetido. Australia tiene marsupiales que imitan roedores, topos y comadrejas placentales porque el ancestro marsupial colonizó Gondwana. Fósiles de marsupiales en la Antártida (<span class=\"num\">35–40 Ma</span>) cumplieron la predicción evolutiva.",
        },
        {
          type: 'paragraph',
          html: "Las islas oceánicas carecen de mamíferos, anfibios y peces de agua dulce nativos, pero abundan en aves, insectos y plantas que pueden dispersarse. Sus especies se parecen a las del continente más cercano (Galápagos/Sudamérica, Hawai/Indo-Pacífico). Radiaciones adaptativas como pinzones de Darwin y honeycreepers hawaianos llenan nichos vacíos. <span class=\"term\">Glossopteris</span> y huellas glaciares del Pérmico solo tienen sentido con Gondwana unida. Darwin predijo ancestros humanos en África, y <span class=\"person\">Raymond Dart</span> los encontró en <span class=\"num\">1924</span>.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Islas oceánicas",
              "description": "Fauna desequilibrada: faltan malos dispersores, abundan radiaciones de buenos colonizadores.",
              "icon": "🏝️"
            },
            {
              "title": "Deriva continental",
              "description": "Continentes unidos explican similitudes entre África y Sudamérica, Asia y Norteamérica.",
              "icon": "🌎"
            },
            {
              "title": "Convergencia",
              "description": "Ambientes parecidos moldean linajes no emparentados en formas similares.",
              "icon": "🔄"
            }
          ],
        },
        {
          type: 'key',
          html: "La geografía de la vida es un mapa de <span class=\"key-term\">dispersión, especiación y deriva continental</span>. No puede explicarse con creaciones independientes en cada lugar.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El motor de la evolución",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">selección natural</span> esculpe adaptaciones que parecen diseñadas. El avispón gigante asiático masacra colmenas de abejas europeas introducidas. Las abejas nativas de Japón, en cambio, forman una bola caliente a <span class=\"num\">117 °F</span> y «cocinan» al explorador en <span class=\"num\">20 minutos</span>.",
        },
        {
          type: 'paragraph',
          html: "Las abejas europeas carecen de defensa porque no coevolucionaron con el depredador, exactamente lo que predice la evolución. Coyne documenta adaptaciones integradas. Un gusano parásito convierte hormigas en «bayas» rojas para que las coman los pájaros. Las orquídeas imitan insectos para polinizarse. La lengua del pájaro carpintero rodea el cráneo del ave. La selección actúa sobre variación heredable. No es consciente ni orientada al bien del individuo.",
        },
        {
          type: 'paragraph',
          html: "Los experimentos confirman el mecanismo. Lentejas evolucionan resistencia a herbicidas y Drosophila se adapta al frío o al calor. La complejidad irreducible alegada por el diseño inteligente se desmonta caso por caso. La naturaleza es «roja en diente y garra», pero la crueldad del parasitismo también es producto evolutivo.",
        },
        {
          type: 'key',
          html: "La selección natural es el <span class=\"key-term\">motor</span> que, sin prever el resultado, acumula pequeñas ventajas hasta producir la ilusión de diseño.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Cómo el sexo impulsa la evolución",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La cola del pavo parece refutar la evolución: pesada, llamativa, costosa. A <span class=\"person\">Darwin</span> le «enfermaba» contemplarla. La clave es que la moneda de la selección no es la supervivencia, sino la <span class=\"term\">reproducción exitosa</span>.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">selección sexual</span> opera de dos maneras. Hay competencia directa entre machos, como en cornamentas del alce irlandés o harenes de elefantes marinos. También hay <span class=\"term\">elección de pareja</span> por hembras, como en la cola del pavo, los cantos o los bowers de las aves constructoras. Los experimentos lo confirman. Recortar ojos en colas de pavos reduce copulas. Alargar colas de viudas africanas duplica el éxito reproductivo. Pintar epauletas de arrendajos elimina territorios en el <span class=\"num\">70 %</span> de machos.",
        },
        {
          type: 'paragraph',
          html: "La asimetría de gametos explica por qué machos compiten y hembras eligen. Hay muchos espermatozoides baratos y pocos óvulos costosos. El sexo tiene «costo doble» frente a la partenogénesis, pero domina porque mezcla genes. Hipótesis como la del <span class=\"term\">Rey Rojo</span> siguen debatiéndose. En especies con «sexo invertido» (caballitos de mar, falaropos), es la hembra la ornamentada, como predice la teoría. La correlación entre dimorfismo sexual y poliginia refuta al creacionismo mejor que cualquier argumento retórico.",
        },
        {
          type: 'key',
          html: "La selección sexual explica ornamentos aparentemente antiadaptativos: evolucionan porque <span class=\"key-term\">dejar más descendencia</span> compensa el costo de sobrevivir.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "El origen de las especies",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Darwin tituló su libro *El origen de las especies*, pero sin genética no explicó bien las barreras reproductivas. La comprensión moderna, área de investigación de Coyne, maduró en la década de <span class=\"num\">1930</span> con <span class=\"person\">Ernst Mayr</span> y <span class=\"person\">Theodosius Dobzhansky</span>.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">concepto biológico de especie</span> (BSC) define especie como grupo de poblaciones que se cruzan entre sí y están reproductivamente aisladas de otros grupos. Las barreras pueden ser ecológicas, temporales, conductuales o genéticas, como en las mulas estériles. Mayr encontró que nativos de Nueva Guinea nombraban <span class=\"num\">136</span> tipos de aves y los ornitólogos <span class=\"num\">137</span>. Las discontinuidades de la naturaleza son reales.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">especiación alopátrica</span> domina el registro. Poblaciones separadas geográficamente divergen hasta perder compatibilidad, como gambas a ambos lados del istmo de Panamá o mimulos con polinizadores distintos. La especiación es accidente evolutivo, no meta de llenar nichos. A veces se observa en tiempo real, como la poliploidía en <span class=\"term\">Senecio cambrensis</span>, descubierta en Gales en <span class=\"num\">1958</span>. En Drosophila, el aislamiento reproductivo completo tarda unos <span class=\"num\">2,7 millones</span> de años. La diversidad actual solo requiere una bifurcación cada <span class=\"num\">200 millones</span> de años.",
        },
        {
          type: 'key',
          html: "Las especies son <span class=\"key-term\">comunidades génicas aisladas</span>. La especiación es la evolución de barreras reproductivas, no un salto misterioso.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "¿Qué hay de nosotros?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Somos primates evolucionados en África. Compartimos ~<span class=\"num\">98,5 %</span> de secuencia proteica con chimpancés, pero más del <span class=\"num\">80 %</span> de nuestras proteínas difieren en al menos un aminoácido. Además, más de <span class=\"num\">1.400</span> genes humanos no existen en chimps.",
        },
        {
          type: 'paragraph',
          html: "Los fósiles confirman la predicción darwiniana. <span class=\"term\">Australopithecus afarensis</span> («Lucy», <span class=\"num\">3,2 Ma</span>) caminaba erguida con cerebro de chimpancé. Existen huellas de Laetoli, <span class=\"term\">Homo habilis</span> con herramientas y <span class=\"term\">Homo erectus</span> fuera de África con control del fuego. El registro es un arbusto, no una escalera, y varias especies de homínidos coexistieron. Los creacionistas no clasifican los mismos fósiles como «humano» o «simio» de forma consistente, lo que señala intermedios reales.",
        },
        {
          type: 'paragraph',
          html: "La «raza» humana muestra poca divergencia genética. Solo el <span class=\"num\">10–15 %</span> de la variación total ocurre entre grupos continentales, y somos una especie joven. La tolerancia a la lactosa evolucionó hace <span class=\"num\">3.000–8.000</span> años en pastores, un ejemplo de coevolución gen-cultura observable. La evolución no dicta moral. Quien invoca Darwin para justificar crímenes comete falacia naturalista. Seguimos llevando el «sello indeleble» de un origen humilde en cuerpo y genoma.",
        },
        {
          type: 'key',
          html: "Los humanos somos <span class=\"key-term\">homininos africanos</span> con la misma evidencia fósil, genética y vestigial que el resto de la vida.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Evolución revisitada",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tras exponer la evidencia, Coyne enfrenta la objeción recurrente: «La encontré convincente, pero no la creo.» El problema no es falta de pruebas. Electrones y agujeros negros son menos intuitivos. La resistencia viene de implicaciones emocionales y religiosas.",
        },
        {
          type: 'paragraph',
          html: "La evolución es hecho tan sólido como cualquier verdad científica. No hay fósiles fuera de orden ni diseños que beneficien solo a otra especie. Hay genes muertos y vestigios por doquier. Las controversias internas sobre selección sexual, deriva o detalles homínidos discuten mecanismos, no si evolucionó la vida. La psicología evolutiva exige cautela. Muchas historias «just-so» son especulación, aunque otras conductas como lenguaje o parentalidad tienen apoyo.",
        },
        {
          type: 'paragraph',
          html: "Aceptar evolución no elimina propósito ni moral. Europa acepta Darwin y sigue siendo civilizada. Los genes no son destino. La diabetes juvenil es genética pero tratable con insulina. La evolución dice de dónde venimos, no adónde podemos ir. Somos el único animal que comprende las leyes que nos formaron.",
        },
        {
          type: 'quote',
          text: "«No hay razón para vernos como marionetas de la evolución... la evolución nos dice de dónde venimos, no adónde podemos ir.»",
          attribution: "Jerry A. Coyne (parafraseando el cierre del capítulo)",
        },
        {
          type: 'key',
          html: "La evolución no está en crisis. Es el <span class=\"key-term\">marco unificador</span> de la biología, y la resistencia es emocional y religiosa, no científica.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Evolución",
    "description": "Cambio genético en poblaciones a través del tiempo; descendencia con modificación."
  },
  {
    "title": "Selección natural",
    "description": "Diferencial de supervivencia y reproducción por variación heredable; esculpe adaptaciones."
  },
  {
    "title": "Selección sexual",
    "description": "Subconjunto: competencia o elección de pareja que favorece rasgos reproductivos."
  },
  {
    "title": "Especiación",
    "description": "Formación de nuevas especies por barreras al flujo génico entre poblaciones."
  },
  {
    "title": "Ascendencia común",
    "description": "Todos los organismos comparten ancestros; árboles filogenéticos lo documentan."
  },
  {
    "title": "Gradualismo",
    "description": "Cambios evolutivos grandes acumulan muchas generaciones de cambio pequeño."
  },
  {
    "title": "Órgano vestigial",
    "description": "Rasgo heredado con función ancestral distinta de la actual."
  },
  {
    "title": "Biogeografía",
    "description": "Distribución geográfica de especies como registro de historia evolutiva."
  },
  {
    "title": "Convergencia",
    "description": "Linajes independientes evolucionan rasgos similares por presiones ambientales parecidas."
  },
  {
    "title": "Palimpsesto evolutivo",
    "description": "Capas de historia legibles en ADN, anatomía y desarrollo embrionario."
  }
],
  chronology: [
  {
    "year": "1635",
    "text": "Linneo inicia clasificación natural de especies."
  },
  {
    "year": "1802",
    "text": "Paley argumenta diseño inteligente con la analogía del reloj."
  },
  {
    "year": "1859",
    "text": "Darwin publica *El origen de las especies*."
  },
  {
    "year": "1860s",
    "text": "Aceptación general de evolución; escepticismo sobre selección natural."
  },
  {
    "year": "1924",
    "text": "Dart describe *Australopithecus* en Sudáfrica."
  },
  {
    "year": "1925",
    "text": "Juicio Scopes (Tennessee)."
  },
  {
    "year": "1942",
    "text": "Mayr formula el concepto biológico de especie."
  },
  {
    "year": "1974",
    "text": "Johanson descubre «Lucy»."
  },
  {
    "year": "2004",
    "text": "Shubin halla *Tiktaalik* en el Ártico."
  },
  {
    "year": "2005",
    "text": "Kitzmiller v. Dover: diseño inteligente declarado no científico."
  },
  {
    "year": "2009",
    "text": "Coyne publica *Why Evolution Is True*."
  }
],
  figures: [
  {
    "name": "Charles Darwin",
    "role": "*El origen de las especies* · Selección natural · Predicción de ancestros humanos en África"
  },
  {
    "name": "Jerry A. Coyne",
    "role": "Genética de especiación · Autor del libro"
  },
  {
    "name": "Theodosius Dobzhansky",
    "role": "«Nada en biología tiene sentido excepto a la luz de la evolución»"
  },
  {
    "name": "William Paley",
    "role": "Argumento del diseño (reloj/relojero) — refutado por Darwin"
  },
  {
    "name": "Ernst Mayr",
    "role": "Concepto biológico de especie (1942)"
  },
  {
    "name": "John Jones III",
    "role": "Fallo Kitzmiller v. Dover (2005)"
  },
  {
    "name": "Raymond Dart",
    "role": "*Australopithecus africanus* (1924)"
  },
  {
    "name": "Donald Johanson",
    "role": "Descubridor de «Lucy» (1974)"
  },
  {
    "name": "Neil Shubin",
    "role": "*Tiktaalik roseae* — transición pez-anfibio"
  },
  {
    "name": "Paul Sereno",
    "role": "Paleontología de dinosaurios africanos"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La evolución no es una creencia opcional: es hecho científico.",
  "Fósiles, genes, geografía y desarrollo convergen en la misma historia.",
  "La selección natural explica la complejidad sin diseñador.",
  "Entenderla no empobrece la vida humana: revela nuestro parentesco con todo lo vivo.",
  "La resistencia viene de la religión y el miedo, no de lagunas en la evidencia."
],
    highlight: "La evolución es verdad tan cierta como la gravedad",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Jerry A. Coyne",
    line2: "\"Why Evolution Is True\" · Viking Penguin · 2009",
  },
}
