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
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Un misterio resuelto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué tantas personas ignoran el mayor misterio de la biología? <span class=\"person\">Richard Dawkins</span>, el etólogo y divulgador que escribió *The Selfish Gene*, sostiene que nuestra existencia ya no es un enigma sin resolver. <span class=\"person\">Charles Darwin</span> resolvió el enigma junto con <span class=\"person\">Alfred Wallace</span>. Explicaron la <span class=\"term\">complejidad por diseño</span> (la apariencia de que los organismos fueron planificados).",
        },
        {
          type: 'paragraph',
          html: "Un cerebro humano contiene unos diez millones de kiloneuronas. Cada célula guarda en su ADN mil veces más información que un ordenador de <span class=\"num\">64 kilobytes</span>. El autor no se rinde cuando alguien niega que esa complejidad exige explicación. Insiste en transmitir primero la maravilla del diseño biológico.",
        },
        {
          type: 'paragraph',
          html: "El libro no pretende ser un tratado científico frío. Dawkins quiere informar, persuadir e inspirar: el darwinismo no solo es cierto. Es la única teoría conocida que puede resolver el misterio de nuestra existencia en principio. El autor distingue su defensa de la de un abogado que defiende causas en las que no cree.",
        },
        {
          type: 'paragraph',
          html: "El darwinismo parece necesitar más defensa que otras verdades científicas. La mente humana está predispuesta a malinterpretarlo por el azar, las escalas temporales evolutivas y la analogía con el diseño consciente. El biólogo <span class=\"person\">Jacques Monod</span> observó que todo el mundo cree que lo entiende. Casi nadie había pensado en la idea hasta Darwin y Wallace en el siglo XIX.",
        },
        {
          type: 'key',
          html: "El darwinismo resuelve la complejidad biológica, pero nuestra mente está predispuesta a malinterpretar el azar y las escalas evolutivas.",
        },
        {
          type: 'paragraph',
          html: "Para entender por qué la vida parece diseñada, hace falta plantear el problema con la misma claridad que lo hizo el teólogo William Paley.",
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
          html: "¿Por qué los organismos parecen diseñados a propósito? Los animales son las cosas más complicadas del universo conocido. La biología estudia entidades que parecen <span class=\"term\">diseñadas con un propósito</span> (como si un artífice las hubiera fabricado). La física estudia cosas simples que no invitan a invocar diseño.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">William Paley</span>, teólogo natural del siglo XIX, argumentó en <em>Natural Theology</em> (<span class=\"num\">1802</span>) que un reloj encontrado en un brezal exige un artífice. La naturaleza muestra un diseño incomparablemente mayor. Pero la analogía reloj-organismo es falsa: el único relojero en la naturaleza son las fuerzas ciegas de la física, desplegadas de modo especial.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">selección natural</span> (la reproducción no aleatoria de variantes hereditarias) no tiene propósito, mente ni visión de futuro. Es el <span class=\"term\">relojero ciego</span> del título: produce diseño sin prever el futuro. Una cosa compleja tiene partes dispuestas de forma improbable por azar, con una cualidad especificada de antemano. En los seres vivos, esa cualidad es la capacidad de sobrevivir y reproducirse.",
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
        {
          type: 'paragraph',
          html: "El argumento filosófico cobra fuerza cuando se examina un órgano concreto que impresionaría a cualquier ingeniero.",
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
          html: "¿Qué significa decir que un órgano está «bien diseñado»? La selección natural es el relojero ciego: no ve adelante ni planifica, pero sus resultados impresionan como diseño de un maestro relojero. Este capítulo refuerza esa ilusión con el <span class=\"term\">sonar</span> (localización por eco de sonidos) en los murciélagos.",
        },
        {
          type: 'paragraph',
          html: "Los murciélagos cazan de noche sin luz. Fabricar luz propia consume demasiada energía. Por eso la evolución favoreció otra solución. Los murciélagos ciegos se orientan mediante <span class=\"term\">ecolocalización</span> (escuchan el eco de sus propios sonidos). Los pioneros del sonar en la Segunda Guerra Mundial no sabían que la selección natural lo había perfeccionado millones de años antes.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Donald Griffin</span>, el zoólogo que acuñó «ecolocalización», mostró que distintos grupos de murciélagos usan el sonar de modos radicalmente distintos. El capítulo recorre el problema como lo haría un ingeniero: plantear el problema, imaginar soluciones y mostrar la adoptada por la naturaleza. Paley apenas empezaba a describir el caso del diseño biológico.",
        },
        {
          type: 'quote',
          text: "«La selección natural es el relojero ciego, ciego porque no ve adelante, no planifica consecuencias, no tiene propósito alguno.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "Un órgano está <span class=\"key-term\">bien diseñado</span> si un ingeniero inteligente podría haberlo construido para un fin sensato, aunque no sea el mejor diseño imaginable.",
        },
        {
          type: 'paragraph',
          html: "Ver un diseño tan refinado obliga a preguntar cómo puede surgir esa complejidad sin un diseñador consciente.",
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
          html: "¿Cómo surge lo muy improbable sin un solo golpe de azar? Los seres vivos son demasiado improbables para aparecer de un solo paso. La respuesta de Darwin son transformaciones graduales desde entidades simples. Cada paso es lo bastante pequeño para ser plausible.",
        },
        {
          type: 'paragraph',
          html: "Las olas ordenan guijarros en franjas sin intención: es un <span class=\"term\">cribado de un solo paso</span> (un filtro que actúa una sola vez). La organización viva exige, además, un candado combinacional con millones de diales. Mezclar aminoácidos al azar para ensamblar la hemoglobina da un número de ~<span class=\"num\">10<sup>190</sup></span> combinaciones. El cribado simple no basta.",
        },
        {
          type: 'paragraph',
          html: "En la <span class=\"term\">selección acumulativa</span> (variación retenida generación tras generación), las entidades se «reproducen» con variación. Cada generación parte del resultado anterior. El experimento del mono que escribe «METHINKS IT IS LIKE A WEASEL» tarda ~<span class=\"num\">10<sup>40</sup></span> intentos en un solo paso. Con selección acumulativa, la frase emerge en minutos.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">biomorfos</span> (formas generadas por un programa de ordenador con nueve «genes») muestran lo mismo con figuras en árbol. El programador no puede predecir qué criaturas emergerán.",
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
          html: "La evolución no es azar puro: es <span class=\"key-term\">selección acumulativa</span>, mutaciones aleatorias filtradas paso a paso durante millones de generaciones.",
        },
        {
          type: 'paragraph',
          html: "Si el mecanismo funciona, debe poder explicar el órgano más citado como «imposible por pasos graduales»: el ojo.",
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
          html: "¿Puede un ojo complejo surgir por pasos graduales? Muchos dudan de ello. Dawkins reformula el problema con una serie de preguntas sobre el <span class=\"term\">espacio animal</span> (el espacio de todas las formas posibles de cuerpos).",
        },
        {
          type: 'paragraph',
          html: "¿Pudo el ojo humano surgir de la nada en un paso? No: las probabilidades son astronómicas. ¿De algo ligeramente distinto, X? Sí, si X es suficientemente parecido. Por eso, repitiendo la pregunta con pasos cada vez menores, se traza una cadena de Xs desde «sin ojo» hasta el ojo moderno.",
        },
        {
          type: 'paragraph',
          html: "Con suficientes generaciones, medidas en miles de millones, la transición es plausible. Cada mutación modifica un proceso embriológico existente. Cuanto menor el cambio, más plausible embriológicamente. Y cada intermediario debe funcionar lo bastante bien como para ayudar a sobrevivir y reproducirse.",
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
          html: "El ojo no salta en el <span class=\"key-term\">espacio animal</span>: camina en pasos diminutos, cada uno seleccionado por utilidad inmediata.",
        },
        {
          type: 'paragraph',
          html: "Explicar la forma del cuerpo exige bajar al nivel de las instrucciones que la construyen: los genes.",
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
          html: "¿Qué hay realmente en el corazón de un ser vivo? Llueve ADN en el jardín del autor: semillas de sauce flotan por el canal de Oxford. Lo que importa no es la celulosa del paracaídas, sino las instrucciones digitales para construir sauces que las esparcen.",
        },
        {
          type: 'paragraph',
          html: "La vieja noción de <span class=\"term\">protoplasma</span> (sustancia viva misteriosa e indivisible) está muerta como el flogisto. De ahí que lo especial de la vida no sea la sustancia, sino la información. Son instrucciones digitales en un medio de almacenamiento con muchas posiciones discretas. Los genes son tecnología de la información.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Gregor Mendel</span>, el monje botánico, descubrió la herencia digital: no mezclamos rasgos de padres, los recibimos en partículas discretas. <span class=\"person\">Fleeming Jenkin</span> argumentó en <span class=\"num\">1867</span> que la herencia mezcladora, creída en tiempos de Darwin, casi descartaba la selección natural. La genética particulada salvó el darwinismo moderno.",
        },
        {
          type: 'quote',
          text: "«Llueven instrucciones; llueven programas; llueven algoritmos para hacer crecer árboles y esparcir algodón. No es una metáfora: es la pura verdad.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "En el corazón de todo ser vivo hay <span class=\"key-term\">información</span> (palabras, instrucciones), no fuego ni chispa vital.",
        },
        {
          type: 'paragraph',
          html: "Si la vida es información replicada, queda el límite más difícil: cómo empezó la primera copia.",
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
          html: "¿Cuánta suerte puede postularse en el origen de la vida? Los «milagros» son sucesos naturales en el extremo improbable del espectro. Cuánto azar podemos postular depende del tiempo y las oportunidades disponibles. La selección acumulativa convierte sucesos aceptablemente afortunados en un producto final que parece imposiblemente milagroso.",
        },
        {
          type: 'paragraph',
          html: "La selección acumulativa necesitó arrancar con un primer paso de azar puro. Ahí está la paradoja del origen de la vida: la replicación exige maquinaria compleja (ADN, proteínas, RNA). Pero la única vía conocida hacia tal complejidad es la selección acumulativa.",
        },
        {
          type: 'paragraph',
          html: "Invocar un diseñador sobrenatural no explica nada: un Dios capaz de diseñar esa maquinaria sería al menos tan complejo como ella. Cuánta suerte máxima podemos permitirnos en un solo paso es una pregunta legítima. El mono que escribe «Methinks it is like a weasel» de un golpe (~<span class=\"num\">10<sup>40</sup></span>) es demasiado.",
        },
        {
          type: 'paragraph',
          html: "El argumento «hay tantos planetas que la vida debe ser común» asume lo que pretende demostrar. Dawkins explora química autorreplicante y el experimento de <span class=\"person\">Spiegelman</span> con RNA como vías hacia el primer replicador.",
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
        {
          type: 'paragraph',
          html: "Una vez iniciada la replicación, la evolución no solo elimina lo defectuoso: también construye complejidad nueva.",
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
          html: "¿La selección natural solo elimina lo defectuoso? Algunos ven la selección natural solo como fuerza negativa, comparable al escultor que quita mármol. La <span class=\"term\">mutación</span> (cambio aleatorio en el ADN) introduce variación nueva. Juntas pueden construir complejidad en dos vías.",
        },
        {
          type: 'paragraph',
          html: "Un gen solo tiene efecto sobre una estructura ya existente. Por eso, desde el punto de vista de cada gen, el ambiente más importante son los otros genes de la población. Genes que colaboran en vías bioquímicas o en equipos evolucionan juntos. Un equipo dominante resiste ser desplazado por alternativas equivalentes.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">genotipos coadaptados</span> (conjuntos de genes que funcionan bien juntos) explican por qué dientes de carnívoro van con intestino carnívoro. Las <span class=\"term\">carreras armamentísticas</span> (escalada evolutiva entre rivales) escalan la complejidad como una espiral. Cada mejora de un bando selecciona contramedidas en el otro.",
        },
        {
          type: 'paragraph',
          html: "Leones y antílopes podrían haber invertido roles por accidente inicial. Una vez iniciado un equipo de genes para carne o hierba, el proceso se autorreforzó.",
        },
        {
          type: 'key',
          html: "La evolución <span class=\"key-term\">construye</span> complejidad cuando genes cooperan en equipos y cuando rivales se superan mutuamente en espiral.",
        },
        {
          type: 'paragraph',
          html: "Esa espiral de rivales conduce a analogías tentadoras — y a malentendidos si se las lleva demasiado lejos.",
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
          html: "¿Cuándo una analogía ayuda y cuándo confunde? La mente humana analogiza con facilidad, a veces demasiado. Este capítulo explora dos analogías fructíferas pero peligrosas. Una es el proceso tipo <span class=\"term\">explosión</span> (retroalimentación positiva). La otra es la semejanza entre evolución darwiniana y <span class=\"term\">evolución cultural</span> (cambio de ideas y costumbres por imitación y selección).",
        },
        {
          type: 'paragraph',
          html: "La retroalimentación negativa estabiliza (como el governador de Watt en las máquinas de vapor). La positiva amplifica perturbaciones hasta el desastre o un nuevo equilibrio, como una explosión química. En biología, la coevolución depredador-presa puede dispararse en espiral.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">memes</span> (unidades de transmisión cultural que se copian entre cerebros con variación y selección) son una analogía con los genes. Dawkins advierte, no obstante, que la analogía puede llevarse demasiado lejos. El criterio es la calidad de la inspiración y la capacidad de descartar analogías frívolas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Retroalimentación positiva",
              "description": "Pequeñas desviaciones se amplifican en espiral; útil como modelo de coevolución acelerada.",
              "icon": "💥"
            },
            {
              "title": "Memes",
              "description": "Ideas que se copian entre cerebros con variación y selección; evolución cultural.",
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
        {
          type: 'paragraph',
          html: "Entre los malentendidos contemporáneos que más ruido hacen está el punctuationismo evolutivo.",
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
          html: "¿Es el punctuationismo un rival del darwinismo? Dawkins parodia a historiadores «punctuationistas» bíblicos que acusan a los «gradualistas» de creer que los israelitas avanzaban <span class=\"num\">24 yardas</span> al día sin parar. La parábola satiriza el punctuationismo evolutivo: no es tan revolucionario ni tan opuesto a Darwin como su publicidad sugiere.",
        },
        {
          type: 'paragraph',
          html: "Los punctuationistas, muchos paleontólogos, enfatizan <span class=\"term\">estasis</span> (periodos largos sin cambio visible en el registro fósil) y cambios rápidos en eventos de especiación. Los «gradualistas» de paja avanzarían a ritmo constante generación tras generación. En cambio, casi todos los darwinianos son gradualistas en el sentido de que no hay saltos macromutacionales milagrosos.",
        },
        {
          type: 'paragraph',
          html: "El registro fósil es incompleto por naturaleza. La datación radiométrica (carbono-<span class=\"num\">14</span>, potasio-argón, uranio-plomo) permite pruebas temporales. Un fósil humano auténtico en rocas de <span class=\"num\">500 millones</span> de años destruiría la evolución: prueba de que la teoría es falsable. La controversia real es menor de lo que venden las revistas.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">punctuationismo</span> es una variedad menor de darwinismo, no un rival. Los «gradualistas» que critica son un hombre de paja.",
        },
        {
          type: 'paragraph',
          html: "Despejado ese falso debate, queda la segunda gran función de la evolución: explicar parentescos entre formas vivas.",
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
          html: "¿Por qué la clasificación biológica no es como ordenar libros en una biblioteca? Además de explicar el diseño (ojos, ecolocalización), la evolución explica la diversidad: patrones de parentesco entre formas vivas. Este capítulo trata la <span class=\"term\">taxonomía</span> (clasificación biológica) y por qué solo la evolución ofrece un árbol único y correcto.",
        },
        {
          type: 'paragraph',
          html: "Clasificar libros en una biblioteca admite muchos sistemas igualmente válidos por conveniencia. Clasificar organismos es distinto: la evolución implica un solo <span class=\"term\">árbol genealógico</span> (historia de descendencia con ramificaciones) verdadero con anidamiento perfecto. Todo subgrupo está completamente contenido en un grupo mayor, sin solapamientos parciales.",
        },
        {
          type: 'paragraph',
          html: "Los taxonomistas cladistas agrupan por <span class=\"term\">parentesco reciente</span> (ancestro común más cercano), no por parecido superficial. Los ornitorrincos ponen huevos, pero pertenecen a los mamíferos porque comparten ancestro mamífero más reciente que con aves o reptiles. La biología molecular confirma el árbol independientemente de la morfología.",
        },
        {
          type: 'key',
          html: "Solo la evolución justifica buscar el <span class=\"key-term\">único árbol verdadero</span> de la vida con anidamiento perfecto.",
        },
        {
          type: 'paragraph',
          html: "Con el árbol establecido, resta examinar las teorías rivales que pretenden explicar la complejidad adaptativa.",
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
          html: "¿Existe alguna alternativa seria al darwinismo? Ningún biólogo serio niega que la evolución ocurrió ni que todos los seres vivos son primos. Algunos dudan del mecanismo darwiniano. Este capítulo examina rivales reales. Argumenta que el darwinismo es la única teoría capaz, en principio, de explicar la <span class=\"term\">complejidad adaptativa</span> (organización improbable útil para vivir).",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">lamarckismo</span> (herencia de caracteres adquiridos por uso o desuso) combina uso y desuso con herencia de lo adquirido. Los músculos crecen con el ejercicio, pero no hay evidencia de que el hijo herede el bíceps del padre. Darwin mismo creía en la herencia de lo adquirido, pero eso no era el núcleo de su teoría.",
        },
        {
          type: 'paragraph',
          html: "El neutralismo explica variación molecular sin selección, no el diseño adaptativo del ojo. El <span class=\"term\">creacionismo</span> (complejidad organizada atribuida a un diseñador sin explicar cómo surgió) postula complejidad sin explicarla. Dawkins predice que si alguna vez se descubre vida extraterrestre, también habrá evolucionado por selección natural darwiniana.",
        },
        {
          type: 'quote',
          text: "«Predigo que, si alguna vez se descubre una forma de vida en otra parte del universo, por muy extraña que sea, se parecerá a la vida terrestre en un aspecto clave: habrá evolucionado mediante algún tipo de selección natural darwiniana.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "El darwinismo es la única teoría conocida que puede explicar la <span class=\"key-term\">complejidad adaptativa</span>. Los rivales fallan incluso antes de mirar la evidencia.",
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
  "Paley tenía razón en la pregunta, pero se equivocó en la respuesta.",
  "La selección natural es el relojero ciego: sin mente, sin plan, sin visión.",
  "Ninguna otra teoría conocida explica, en principio, la complejidad adaptativa.",
  "El misterio de nuestra existencia está resuelto, aunque sigamos añadiendo notas a pie de página."
],
    highlight: "Acumula pequeños cambios aleatorios filtrados por supervivencia y reproducción",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Richard Dawkins",
    line2: "\"The Blind Watchmaker\" · W. W. Norton & Company · 1986",
  },
}
