import type { BookSummary } from '../types/book'

export const blindWatchmaker: BookSummary = {
  slug: "blind-watchmaker",
  meta: {
    title: "The Blind Watchmaker",
    subtitle: "¿Por qué la evolución explica el diseño sin un diseñador?",
    author: "Richard Dawkins",
    meta: [
      "📖 1986 · W. W. Norton & Company",
      "✍️ Premio de la Royal Society of Literature (1987)",
    ],
    titleEs: "El relojero ciego",
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
    "label": "Explicar lo muy improbable"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Buen diseño"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Acumulando pequeños cambios"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Trazando rutas por el espacio animal"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El poder y los archivos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Orígenes y milagros"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Evolución constructiva"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Explosiones y espirales"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Desinflando el punctuationismo"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "El único árbol verdadero de la vida"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Rivales condenados"
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
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Un misterio resuelto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Dawkins escribe convencido de que nuestra existencia fue el mayor de los misterios y que ya no lo es: <span class=\"person\">Darwin</span> y <span class=\"person\">Wallace</span> lo resolvieron. Le sorprende que tantas personas ignoren no solo la solución elegante, sino que ni siquiera perciban el problema: el de la <span class=\"term\">complejidad por diseño</span>.",
        },
        {
          type: 'paragraph',
          html: "Un cerebro humano contiene unos diez millones de kiloneuronas. Cada célula del cuerpo guarda en su ADN mil veces más información digital que un ordenador de <span class=\"num\">64 kilobytes</span>. Si alguien niega que esa complejidad exige explicación, el autor no se rinde: quiere transmitir la maravilla del diseño biológico y luego disipar el misterio.",
        },
        {
          type: 'paragraph',
          html: "El libro no pretende ser un tratado científico frío. Busca informar, persuadir e inspirar: el darwinismo no solo es cierto, sino la única teoría conocida que, en principio, puede resolver el misterio de nuestra existencia. Dawkins distingue su defensa de la de un abogado que defiende causas en las que no cree: nunca dice lo que no considera verdadero.",
        },
        {
          type: 'key',
          html: "El darwinismo parece necesitar más defensa que otras verdades científicas establecidas; la mente humana está predispuesta a malinterpretarlo por el azar, las escalas temporales y la analogía con el diseño consciente.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Explicar lo muy improbable",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los animales son las cosas más complicadas del universo conocido. La biología estudia entidades que parecen <span class=\"term\">diseñadas con un propósito</span>. La física estudia cosas simples que no invitan a invocar diseño. Ordenadores y coches, aunque no vivos, se tratan aquí como objetos biológicos: cualquier máquina de esa complejidad en un planeta diagnosticaría vida.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">William Paley</span>, en <em>Natural Theology</em> (<span class=\"num\">1802</span>), argumentó que un reloj encontrado en un brezal exige un artífice. La naturaleza muestra un diseño incomparablemente mayor. La analogía reloj-organismo es falsa: el único relojero en la naturaleza son las fuerzas ciegas de la física, desplegadas de modo especial. La <span class=\"term\">selección natural</span> no tiene propósito, mente ni visión de futuro: es el <span class=\"term\">relojero ciego</span>.",
        },
        {
          type: 'paragraph',
          html: "Una cosa compleja tiene partes dispuestas de forma improbable por azar, con una cualidad especificada de antemano. En los seres vivos, esa cualidad es la <span class=\"term\">competencia</span>: volar, nadar o, más en general, sobrevivir y reproducirse. Hay muchas formas de estar vivo, pero infinitamente más de estar muerto. Mezclar células al azar no produce nunca un organismo funcional.",
        },
        {
          type: 'quote',
          text: "«A pesar de las apariencias en contrario, el único relojero en la naturaleza son las fuerzas ciegas de la física, aunque desplegadas de un modo muy especial.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Argumento del diseño",
              "description": "La aparente finalidad de los organismos sugiere un diseñador consciente; Paley lo formuló con claridad en el ejemplo del reloj.",
              "icon": "🔭"
            },
            {
              "title": "Relojero ciego",
              "description": "La selección natural produce diseño sin prever el futuro: ciega, automática e inconsciente.",
              "icon": "👁️"
            },
            {
              "title": "Improbabilidad especificada",
              "description": "La complejidad biológica no es cualquier arreglo improbable, sino uno que cumple un criterio definido (vivir, ver, volar).",
              "icon": "🎲"
            }
          ],
        },
        {
          type: 'key',
          html: "<span class=\"key-term\">Darwin</span> hizo posible ser un ateo intelectualmente satisfecho: antes de <span class=\"num\">1859</span> faltaba una explicación alternativa al diseño organizado.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Buen diseño",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La selección natural es el relojero ciego: no ve adelante ni planifica, pero sus resultados impresionan como diseño de un maestro relojero. Este capítulo refuerza esa ilusión con un ejemplo que impresionaría a cualquier ingeniero: el <span class=\"term\">sonar</span> en los murciélagos.",
        },
        {
          type: 'paragraph',
          html: "Los murciélagos cazan de noche sin luz. Fabricar luz propia consume demasiada energía. La evolución favoreció otra solución. Los ciegos usan <span class=\"term\">ecolocalización</span>: ecos de sus propios sonidos. Los pioneros del sonar en la Segunda Guerra Mundial no sabían que la selección natural lo había perfeccionado millones de años antes.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Donald Griffin</span> acuñó «ecolocalización» para cubrir sonar y radar. Diferentes grupos de murciélagos usan el sonar de modos radicalmente distintos. El capítulo recorre el problema como lo haría un ingeniero (plantear el problema, imaginar soluciones, mostrar la adoptada por la naturaleza) para demostrar que Paley apenas empezaba a describir el caso del diseño biológico.",
        },
        {
          type: 'quote',
          text: "«La selección natural es el relojero ciego, ciego porque no ve adelante, no planifica consecuencias, no tiene propósito alguno.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "Un órgano o cuerpo está <span class=\"key-term\">bien diseñado</span> si un ingeniero inteligente podría haberlo construido para un fin sensato — volar, ver, comer, reproducirse — aunque no sea el mejor diseño imaginable.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Acumulando pequeños cambios",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los seres vivos son demasiado improbables para surgir de un solo golpe de azar. La respuesta darwiniana: transformaciones graduales desde entidades simples, cada paso lo bastante pequeño para ser plausible, dirigidos en conjunto por la <span class=\"term\">selección no aleatoria</span>.",
        },
        {
          type: 'paragraph',
          html: "Las olas ordenan guijarros en franjas sin intención: es un <span class=\"term\">cribado de un solo paso</span>. La organización viva exige, además, un candado combinacional con millones de diales, como ensamblar la hemoglobina mezclando aminoácidos al azar. El número hemoglobina (~<span class=\"num\">10<sup>190</sup></span>) muestra que el cribado simple no basta.",
        },
        {
          type: 'paragraph',
          html: "En la <span class=\"term\">selección acumulativa</span>, las entidades se «reproducen» con variación. Cada generación parte del resultado anterior. El experimento del mono que escribe «METHINKS IT IS LIKE A WEASEL»: en un solo paso tardaría ~<span class=\"num\">10<sup>40</sup></span> intentos. Con selección acumulativa que retiene las frases más parecidas al objetivo, la frase emerge en minutos. Los <span class=\"term\">biomorfos</span> del ordenador muestran lo mismo con formas en árbol.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Cribado simple",
              "description": "Procesos físicos (olas, coladores, órbitas planetarias) generan orden limitado en un solo paso.",
              "icon": "🌊"
            },
            {
              "title": "Selección acumulativa",
              "description": "Variación + retención de lo que se acerca al objetivo, generación tras generación.",
              "icon": "🔄"
            },
            {
              "title": "Mono de Weasel",
              "description": "Metáfora que contrasta azar puro con evolución dirigida por selección.",
              "icon": "🐒"
            }
          ],
        },
        {
          type: 'key',
          html: "La evolución no es azar puro: es <span class=\"key-term\">selección acumulativa</span> — mutaciones aleatorias filtradas paso a paso durante millones de generaciones.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Trazando rutas por el espacio animal",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Muchos dudan de que un ojo complejo surja por pasos graduales. Dawkins reformula el problema con una serie de preguntas sobre el <span class=\"term\">espacio animal</span>: el espacio de todas las formas posibles de cuerpos.",
        },
        {
          type: 'paragraph',
          html: "¿Pudo el ojo humano surgir de la nada en un paso? No: las probabilidades son astronómicas. ¿De algo ligeramente distinto, X? Sí, si X es suficientemente parecido. Repitiendo la pregunta con pasos cada vez menores, se traza una cadena de Xs desde «sin ojo» hasta el ojo moderno — caminando por el espacio animal en pasos pequeños.",
        },
        {
          type: 'paragraph',
          html: "Con suficientes generaciones, medidas en miles de millones, la transición es plausible. Cada mutación modifica un proceso embriológico existente. Cuanto menor el cambio, más plausible embriológicamente. Y cada intermediario debe funcionar lo bastante bien como para ayudar a sobrevivir y reproducirse: un ojo imperfecto sigue siendo mejor que ninguno.",
        },
        {
          type: 'list',
          items: [
            "**Pregunta 1** — Un salto directo de «sin ojo» a ojo humano es estadísticamente imposible.",
            "**Pregunta 2** — De un vecino inmediato en el espacio morfológico, sí es plausible en un paso.",
            "**Pregunta 5** — Cada intermediario debe ser funcional; la selección no espera perfección futura."
          ],
        },
        {
          type: 'key',
          html: "El ojo no salta en el <span class=\"key-term\">espacio animal</span>; camina en pasos diminutos, cada uno seleccionado por utilidad inmediata.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El poder y los archivos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Llueve ADN en el jardín del autor: semillas de sauce flotan por el canal de Oxford. Lo que importa no es la celulosa del paracaídas, sino las instrucciones digitales para construir sauces que las esparcen. Llueven programas, algoritmos de crecimiento arbóreo.",
        },
        {
          type: 'paragraph',
          html: "La vieja noción de <span class=\"term\">protoplasma</span> vitalista está muerta como el flogisto. Lo especial de la vida no es la sustancia, sino la información: instrucciones digitales en un medio de almacenamiento con muchas posiciones discretas. Los genes son tecnología de la información. Pensar en gel vibrante es el camino equivocado.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Gregor Mendel</span> descubrió la herencia digital: no mezclamos rasgos de padres, los recibimos en partículas discretas. <span class=\"person\">Fleeming Jenkin</span> argumentó que la herencia mezcladora, creída en tiempos de Darwin, casi descartaba la selección natural. La genética particulada salvó el darwinismo moderno.",
        },
        {
          type: 'quote',
          text: "«Llueven instrucciones; llueven programas; llueven algoritmos para hacer crecer árboles y esparcir algodón. No es una metáfora: es la pura verdad.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "En el corazón de todo ser vivo hay <span class=\"key-term\">información</span> — palabras, instrucciones — no fuego ni chispa vital.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Orígenes y milagros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los «milagros» son sucesos naturales en el extremo improbable del espectro. Cuánto azar podemos postular depende del tiempo y las oportunidades disponibles. La <span class=\"term\">selección acumulativa</span> convierte sucesos aceptablemente afortunados en un producto final que parece imposiblemente milagroso.",
        },
        {
          type: 'paragraph',
          html: "La selección acumulativa necesitó arrancar con un primer paso de azar puro. Ahí está la paradoja del origen de la vida: la replicación exige maquinaria compleja (ADN, proteínas, RNA), y la única vía conocida hacia tal complejidad es la selección acumulativa. Invocar un diseñador sobrenatural no explica nada: un Dios capaz de diseñar esa maquinaria sería al menos tan complejo como ella.",
        },
        {
          type: 'paragraph',
          html: "Cuánta suerte máxima podemos permitirnos en un solo paso es una pregunta legítima. El mono que escribe «Methinks it is like a weasel» de un golpe (~<span class=\"num\">10<sup>40</sup></span>) es demasiado. El argumento «hay tantos planetas que la vida debe ser común» asume lo que pretende demostrar. Dawkins explora química autorreplicante y el experimento de <span class=\"person\">Spiegelman</span> con RNA como vías hacia el primer replicador.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Paradoja del origen",
              "description": "La replicación compleja parece requerir evolución, pero la evolución requiere replicación.",
              "icon": "🧬"
            },
            {
              "title": "Límite de suerte",
              "description": "Podemos postular un solo evento muy improbable, pero no infinitamente improbable.",
              "icon": "🎰"
            },
            {
              "title": "Química prebiótica",
              "description": "Moléculas autorreplicantes podrían haber iniciado la selección acumulativa.",
              "icon": "⚗️"
            }
          ],
        },
        {
          type: 'key',
          html: "Postular un diseñador para explicar la maquinaria replicadora deja sin explicar el origen del <span class=\"key-term\">diseñador</span>.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Evolución constructiva",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Algunos ven la selección natural solo como fuerza negativa que elimina defectos. Como el escultor que resta mármol, la selección resta. Pero la <span class=\"term\">mutación</span> suma. Juntas pueden construir complejidad en dos vías: <span class=\"term\">genotipos coadaptados</span> y <span class=\"term\">carreras armamentísticas</span>.",
        },
        {
          type: 'paragraph',
          html: "Un gen solo tiene efecto sobre una estructura ya existente. Desde el punto de vista de cada gen, el ambiente más importante son los otros genes del <span class=\"term\">pool génico</span>. Genes que colaboran en vías bioquímicas o en equipos (dientes de carnívoro con intestino carnívoro) evolucionan juntos. Un equipo dominante resiste ser desplazado por alternativas equivalentes.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">carreras armamentísticas</span> entre depredador y presa, huésped y parásito, macho y hembra, escalan la complejidad como una espiral: cada mejora de un bando selecciona contramedidas en el otro. Leones y antílopes podrían haber invertido roles por accidente inicial. Una vez iniciado un equipo de genes para carne o hierba, el proceso se autorreforzó.",
        },
        {
          type: 'key',
          html: "La evolución <span class=\"key-term\">construye</span> complejidad cuando genes cooperan en equipos y cuando rivales se superan mutuamente en espiral.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Explosiones y espirales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mente humana analogiza con facilidad — a veces demasiado. Este capítulo explora dos analogías fructíferas pero peligrosas: procesos tipo <span class=\"term\">explosión</span> (retroalimentación positiva) y la semejanza entre evolución darwiniana y <span class=\"term\">evolución cultural</span>.",
        },
        {
          type: 'paragraph',
          html: "La retroalimentación negativa estabiliza (governador de Watt). La positiva amplifica perturbaciones hasta el desastre o un nuevo equilibrio, como una explosión química. En biología, la coevolución depredador-presa puede dispararse en espiral. Los cuerpos usan más retroalimentación negativa que positiva porque la regulación estable es útil. Pero las explosiones importan aquí.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">memes</span>, unidades de transmisión cultural, se replican con variación y selección, analogía con los genes. Dawkins advierte: la analogía puede llevarse demasiado lejos, como ocurre con los cranks que ven evolución en todo. El criterio es la calidad de la inspiración y la capacidad de descartar analogías frívolas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Retroalimentación positiva",
              "description": "Pequeñas desviaciones se amplifican en espiral — útil como modelo de coevolución acelerada.",
              "icon": "💥"
            },
            {
              "title": "Memes",
              "description": "Ideas que se copian entre cerebros con variación y selección — evolución cultural.",
              "icon": "🧠"
            },
            {
              "title": "Analogía prudente",
              "description": "Las mejores analogías comparten matemática subyacente; las frívolas confunden.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "La evolución biológica y la cultural comparten replicación con variación y selección, pero la analogía no debe <span class=\"key-term\">sustituir</span> el análisis riguroso.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Desinflando el punctuationismo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Dawkins parodia a historiadores «punctuationistas» bíblicos que acusan a los «gradualistas» de creer que los israelitas avanzaban <span class=\"num\">24 yardas</span> al día sin parar. La parábola satiriza el punctuationismo evolutivo: no es tan revolucionario ni tan opuesto a Darwin como su publicidad sugiere.",
        },
        {
          type: 'paragraph',
          html: "Los punctuationistas, muchos paleontólogos, enfatizan <span class=\"term\">estasis</span> en el registro fósil y cambios rápidos en eventos de especiación. Los «gradualistas» de paja avanzarían a ritmo constante generación tras generación. En realidad, casi todos los darwinianos son gradualistas en el sentido de que no hay saltos macromutacionales milagrosos.",
        },
        {
          type: 'paragraph',
          html: "El registro fósil es incompleto por naturaleza. La datación radiométrica (carbono-<span class=\"num\">14</span>, potasio-argon, uranio-plomo) permite pruebas temporales. Un fósil humano auténtico en rocas de <span class=\"num\">500 millones</span> de años destruiría la evolución: prueba de que la teoría es falsable. La controversia real es menor de lo que venden las revistas.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">punctuationismo</span> es una variedad menor de darwinismo, no un rival; los «gradualistas» de Dawkins son un hombre de paja.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El único árbol verdadero de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Además de explicar el diseño (ojos, ecolocalización), la evolución explica la <span class=\"term\">diversidad</span>: patrones de parentesco entre formas vivas. Este capítulo trata la <span class=\"term\">taxonomía</span>, clasificación biológica, y por qué solo la evolución ofrece un árbol único y correcto.",
        },
        {
          type: 'paragraph',
          html: "Clasificar libros en una biblioteca admite muchos sistemas igualmente válidos por conveniencia. Clasificar organismos es distinto: la evolución implica un solo <span class=\"term\">árbol genealógico</span> verdadero con anidamiento perfecto — todo subgrupo está completamente contenido en un grupo mayor, sin solapamientos parciales.",
        },
        {
          type: 'paragraph',
          html: "Los taxonomistas cladistas agrupan por <span class=\"term\">parentesco reciente</span>, no por parecido superficial. Los ornitorrincos ponen huevos, pero pertenecen a los mamíferos porque comparten ancestro mamífero más reciente que con aves o reptiles. La biología molecular confirma el árbol independientemente de la morfología.",
        },
        {
          type: 'key',
          html: "Solo la evolución justifica buscar el <span class=\"key-term\">único árbol verdadero</span> de la vida con anidamiento perfecto.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Rivales condenados",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Ningún biólogo serio niega que la evolución ocurrió ni que todos los seres vivos son primos. Algunos dudan del mecanismo darwiniano. Este capítulo examina rivales reales (no el punctuationismo) y argumenta que el darwinismo es la única teoría capaz, en principio, de explicar la <span class=\"term\">complejidad adaptativa</span>.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">lamarckismo</span> combina uso y desuso con herencia de caracteres adquiridos. Los músculos crecen con el ejercicio, pero no hay evidencia de que el hijo herede el bíceps del padre. Darwin mismo creía en la herencia de lo adquirido, pero eso no era el núcleo de su teoría. El neutralismo explica variación molecular sin selección, no el diseño adaptativo del ojo.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">creacionismo</span> postula complejidad organizada sin explicarla. Dawkins predice que si alguna vez se descubre vida extraterrestre, también habrá evolucionado por selección natural darwiniana — apuesta no comprobable pronto, pero que dramatiza una verdad: ninguna otra teoría conocida explica el diseño adaptativo.",
        },
        {
          type: 'quote',
          text: "«Predigo que, si alguna vez se descubre una forma de vida en otra parte del universo, por muy extraña que sea, se parecerá a la vida terrestre en un aspecto clave: habrá evolucionado mediante algún tipo de selección natural darwiniana.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "El darwinismo es la única teoría conocida que, en principio, puede explicar la <span class=\"key-term\">complejidad adaptativa</span>; los rivales fallan incluso antes de mirar la evidencia.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Relojero ciego",
    "description": "Metáfora central: la selección natural produce diseño sin visión ni propósito, como un relojero ciego."
  },
  {
    "title": "Selección natural",
    "description": "Reproducción no aleatoria con variación hereditaria; consecuencias acumulativas en escalas temporales evolutivas."
  },
  {
    "title": "Selección acumulativa",
    "description": "Variación aleatoria filtrada generación tras generación; explica lo improbable sin un solo golpe de azar."
  },
  {
    "title": "Complejidad adaptativa",
    "description": "Organización estadísticamente improbable especificada de antemano por utilidad (vivir, ver, volar)."
  },
  {
    "title": "Ecolocalización",
    "description": "Sistema de sonar biológico en murciélagos; ejemplo paradigmático de «buen diseño»."
  },
  {
    "title": "Espacio animal",
    "description": "Espacio de todas las formas corporales posibles; la evolución camina por él en pasos pequeños."
  },
  {
    "title": "Genes como información",
    "description": "La vida es instrucción digital replicada, no protoplasma misterioso."
  },
  {
    "title": "Pool génico",
    "description": "Conjunto de genes intercambiables en una población; ambiente en que cada gen evoluciona."
  },
  {
    "title": "Carrera armamentística",
    "description": "Coevolución escalatoria entre rivales (depredador-presa, parásito-huésped)."
  },
  {
    "title": "Punctuationismo",
    "description": "Énfasis en estasis fósil y cambios rápidos; compatible con darwinismo, no rival."
  },
  {
    "title": "Árbol de la vida",
    "description": "Árbol genealógico único que impone taxonomía con anidamiento perfecto."
  },
  {
    "title": "Lamarckismo",
    "description": "Herencia de lo adquirido; no explica la complejidad adaptativa."
  }
],
  chronology: [
  {
    "year": "1802",
    "text": "William Paley publica *Natural Theology* y el argumento del diseño con el ejemplo del reloj."
  },
  {
    "year": "1859",
    "text": "Charles Darwin publica *El origen de las especies*; Alfred Wallace llegó independientemente a la selección natural."
  },
  {
    "year": "1860s",
    "text": "Gregor Mendel descubre la herencia particulada; ignorado hasta después de su muerte."
  },
  {
    "year": "1867",
    "text": "Fleeming Jenkin argumenta que la herencia mezcladora socavaría la selección natural."
  },
  {
    "year": "1900",
    "text": "Redescubrimiento de Mendel; base genética del neodarwinismo."
  },
  {
    "year": "1930s",
    "text": "R. A. Fisher y otros sintetizan genética mendeliana con selección natural."
  },
  {
    "year": "1940s",
    "text": "Donald Griffin demuestra la ecolocalización en murciélagos."
  },
  {
    "year": "1976",
    "text": "Richard Dawkins publica *The Selfish Gene*, precedente directo de este libro."
  },
  {
    "year": "1986",
    "text": "Dawkins publica *The Blind Watchmaker* en Oxford."
  },
  {
    "year": "1987",
    "text": "Premio de la Royal Society of Literature y premio Sci-Tech del documental *Horizon*."
  }
],
  figures: [
  {
    "name": "Richard Dawkins",
    "role": "Autor · etólogo · defensor del darwinismo moderno"
  },
  {
    "name": "Charles Darwin",
    "role": "Selección natural · *El origen de las especies* (1859)"
  },
  {
    "name": "Alfred Wallace",
    "role": "Co-descubridor de la selección natural"
  },
  {
    "name": "William Paley",
    "role": "Argumento del diseño · ejemplo del reloj (1802)"
  },
  {
    "name": "Donald Griffin",
    "role": "Descubridor de la ecolocalización en murciélagos"
  },
  {
    "name": "Gregor Mendel",
    "role": "Herencia particulada · genética mendeliana"
  },
  {
    "name": "R. A. Fisher",
    "role": "Neodarwinismo · crítica a la herencia mezcladora"
  },
  {
    "name": "David Hume",
    "role": "Crítica lógica al argumento del diseño (sin alternativa)"
  },
  {
    "name": "Fleeming Jenkin",
    "role": "Objeción de la herencia mezcladora contra Darwin"
  },
  {
    "name": "Jacques Monod",
    "role": "«Todo el mundo cree que entiende el darwinismo»"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La complejidad de la vida parece exigir un diseñador consciente.",
  "Paley tenía razón en la pregunta, equivocado en la respuesta.",
  "La selección natural es el relojero ciego: sin mente, sin plan, sin visión.",
  "Ninguna otra teoría conocida explica, en principio, la complejidad adaptativa.",
  "El misterio de nuestra existencia está resuelto — aunque sigamos añadiendo notas a pie de página."
],
    highlight: "Acumula pequeños cambios aleatorios filtrados por supervivencia y reproducción",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Richard Dawkins",
    line2: "\"The Blind Watchmaker\" · W. W. Norton & Company · 1986",
  },
}
