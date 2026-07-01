import type { BookSummary } from '../types/book'

export const selfishGene: BookSummary = {
  slug: "selfish-gene",
  meta: {
    title: "The Selfish Gene",
    subtitle: "¿Por qué somos altruistas si nuestros genes son egoístas?",
    author: "Richard Dawkins",
    meta: [
      "📖 1976 · Oxford University Press (ed. ampliada 1989)",
      "✍️ Capítulos 12–13 añadidos en la segunda edición",
    ],
    titleEs: "El gen egoísta",
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
    "label": "¿Por qué existen las personas?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Los replicadores"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Espirales inmortales"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "La máquina génica"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Agresión: estabilidad y la máquina egoísta"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Genesmanía"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Planificación familiar"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Batalla de las generaciones"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Batalla de los sexos"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Rascas mi espalda, yo me subo a la tuya"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Memes: los nuevos replicadores"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Los buenos terminan primero"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "El largo alcance del gen"
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
      title: "Tres lectores imaginarios y la perspectiva del gen",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Dawkins dedica el libro a tres lectores imaginarios: el lego, el experto y el estudiante en transición. Su ambición es popularizar ideas sutiles sin perder su esencia ni tratar al lector como idiota, y hacer que la biología parezca tan apasionante como una novela de misterio.",
        },
        {
          type: 'paragraph',
          html: "En el prefacio a la edición de <span class=\"num\">1989</span>, Dawkins observa una paradoja: el libro pasó de parecer ortodoxo a ser visto como extremista, mientras su contenido se volvió moneda corriente. La teoría del gen egoísta es el darwinismo expresado desde la perspectiva del gen — no una teoría distinta, sino otra forma de ver el mismo neo-darwinismo, como el cubo de Necker que puede voltearse entre dos interpretaciones equivalentes.",
        },
        {
          type: 'paragraph',
          html: "Los capítulos <span class=\"num\">12</span> y <span class=\"num\">13</span> se añadieron en la segunda edición, inspirados en la cooperación evolutiva (<span class=\"person\">Robert Axelrod</span>) y el fenotipo extendido. Dawkins insiste en que explicar ideas técnicas al público no es mera divulgación: a veces una nueva metáfora puede cambiar la forma de ver la ciencia.",
        },
        {
          type: 'key',
          html: "La perspectiva del gen no sustituye al darwinismo clásico: lo reformula como si los <span class=\"key-term\">replicadores</span> fueran los agentes fundamentales de la evolución.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Por qué existen las personas?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La vida inteligente «llega a la mayoría de edad» cuando descubre la razón de su propia existencia. <span class=\"person\">Charles Darwin</span> fue quien primero articuló una explicación coherente de por qué existimos. Antes de <span class=\"num\">1859</span>, todas las respuestas a «¿para qué somos?» son, según <span class=\"person\">G. G. Simpson</span>, inútiles.",
        },
        {
          type: 'paragraph',
          html: "Este libro no defiende el darwinismo en general, sino que explora sus consecuencias para el egoísmo y el altruismo biológico — temas con profunda importancia humana: amor, odio, cooperación, codicia y generosidad. Autores como <span class=\"person\">Lorenz</span>, <span class=\"person\">Ardrey</span> y <span class=\"person\">Eibl-Eibesfeldt</span> se equivocaron al suponer que la evolución actúa «para el bien de la especie» o del grupo.",
        },
        {
          type: 'paragraph',
          html: "La tesis central: somos máquinas de supervivencia creadas por nuestros genes. Un gen exitoso tiende al <span class=\"term\">egoísmo despiadado</span>, aunque en circunstancias especiales puede favorecer un altruismo limitado. El amor universal y el bien de la especie no tienen sentido evolutivo.",
        },
        {
          type: 'quote',
          text: "«Seamos generosos y altruistas, porque nacemos egoístas. Entendamos qué traman nuestros genes egoístas, porque así podremos frustrar sus diseños — algo que ninguna otra especie ha intentado.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Altruismo conductual",
              "description": "Acto que aumenta la supervivencia de otro a costa propia, medido en probabilidades de supervivencia, no en motivos psicológicos.",
              "icon": "🧬"
            },
            {
              "title": "Ejemplos",
              "description": "Gaviota que devora crías ajenas; mantis hembra que canibaliza al macho; abejas obreras que mueren al picar.",
              "icon": "🐦"
            },
            {
              "title": "Selección grupal",
              "description": "Teoría errónea: un grupo de altruistas sería invadido por un rebelde egoísta que se aprovecha y prolifera.",
              "icon": "⚔️"
            }
          ],
        },
        {
          type: 'key',
          html: "El argumento no prescribe moral alguna: describe cómo evolucionaron las cosas, con advertencia de que la naturaleza no ayudará a construir una sociedad cooperativa.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Los replicadores",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En el principio hubo simplicidad. El universo está poblado de cosas <span class=\"term\">estables</span> — patrones de átomos que perduran. La selección natural es un caso especial de «supervivencia de lo estable».",
        },
        {
          type: 'paragraph',
          html: "Antes de la vida, moléculas orgánicas se formaron en el «caldo primordial» (agua, CO₂, metano, amoniaco) bajo energía ultravioleta o chispas eléctricas, produciendo aminoácidos y bases de ADN. En algún momento surgió por accidente el <span class=\"term\">Replicador</span>: una molécula capaz de copiarse a sí misma, propagándose hasta agotar los bloques constructores.",
        },
        {
          type: 'paragraph',
          html: "Los replicadores competían por materiales. Los más estables, longevos y fieles en copiarse prevalecían. Surgieron «proteínas» protectoras y, eventualmente, vehículos cada vez más elaborados: las <span class=\"term\">máquinas de supervivencia</span>. Los errores de copia, las mutaciones, eran la materia prima de la evolución.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~3–4 mil millones de años",
              "label": "Edad estimada del caldo primordial"
            },
            {
              "value": "Copias exponenciales",
              "label": "Un replicador ventajoso se extiende «como un incendio»"
            }
          ],
        },
        {
          type: 'key',
          html: "La evolución darwiniana comienza en cuanto los replicadores construyen cuerpos que los protegen y transportan.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Espirales inmortales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Somos máquinas de supervivencia para los genes — moléculas de <span class=\"term\">ADN</span> en espiral doble, con cuatro letras (A, T, C, G). Cada célula humana contiene un juego completo de <span class=\"num\">46</span> cromosomas, como planos del arquitecto en cada habitación del edificio.",
        },
        {
          type: 'paragraph',
          html: "El ADN replica y supervisa la fabricación de <span class=\"term\">proteínas</span>. Un cuerpo es la forma del gen de preservarse sin alteración. Las características adquiridas no se heredan. La selección favorece genes que construyen buenas máquinas de supervivencia.",
        },
        {
          type: 'paragraph',
          html: "Los genes son gregarios: una máquina contiene miles. El <span class=\"term\">cruzamiento</span> (crossing-over) en la meiosis mezcla material materno y paterno, haciendo que cada espermatozoide sea único. Un gen, en la definición de <span class=\"person\">G. C. Williams</span>, es cualquier porción cromosómica que dura suficientes generaciones como para ser unidad de selección.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Gen vs. cistron",
              "description": "Un cistron codifica una proteína; el gen del libro es más sutil — puede ser fracción de cistron si persiste como unidad seleccionable.",
              "icon": "🧬"
            },
            {
              "title": "Meiosis",
              "description": "División que produce gametos con 23 cromosomas; el crossing-over rompe y recombina cromosomas materno y paterno.",
              "icon": "🔀"
            },
            {
              "title": "Longevidad génica",
              "description": "Unidades pequeñas sobreviven más generaciones sin ser partidas por el cruzamiento.",
              "icon": "♾️"
            }
          ],
        },
        {
          type: 'key',
          html: "Los cuerpos son <span class=\"key-term\">vehículos temporales</span>; los genes son replicadores potencialmente inmortales que los abandonan generación tras generación.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La máquina génica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las máquinas de supervivencia comenzaron como receptáculos pasivos. Cuando el caldo orgánico se agotó, las plantas explotaron la luz solar y los animales explotaron a las plantas o a otros animales. Ambas ramas evolucionaron cuerpos pluricelulares, colonias de genes.",
        },
        {
          type: 'paragraph',
          html: "Los animales desarrollaron <span class=\"term\">músculos</span> para movimiento rápido y reversible, coordinados por <span class=\"term\">neuronas</span> — unidades de procesamiento más sofisticadas que transistores. El cerebro humano contiene unos <span class=\"num\">10 mil millones</span> de neuronas. Los sentidos traducen eventos externos en códigos de impulsos nerviosos.",
        },
        {
          type: 'paragraph',
          html: "El comportamiento parece teleológico, como el regulador de Watt con <span class=\"term\">retroalimentación negativa</span>. Los animales aprenden (memoria) y, en algunos casos, son conscientes. Aun así, podemos analizar el comportamiento «como si» tuviera propósito sin asumir consciencia.",
        },
        {
          type: 'paragraph',
          html: "Conveniencia analítica: tratar al organismo individual como agente que maximiza la propagación de todos sus genes. El capítulo explora tácticas de supervivencia, señales y engaño en el comportamiento animal.",
        },
        {
          type: 'key',
          html: "Los animales son <span class=\"key-term\">máquinas génicas</span>, vehículos activos programados para preservar replicadores, con cerebros que coordinan músculos mediante computación biológica.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Agresión: estabilidad y la máquina egoísta",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Para una máquina de supervivencia, otra del mismo sexo es competidor directo por parejas y recursos. Otra de distinta especie puede ser presa, depredador o competidor indirecto. La agresión parece inevitable, pero no vemos asesinato indiscriminado.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Konrad Lorenz</span> enfatizó la ritualización de las peleas animales. Dawkins señala que la violencia interespecífica existe. Matar rivales tiene costos (tiempo, energía, riesgo de contraataque) y puede beneficiar a un tercero competidor. La pugnacidad selectiva, esperar, crecer y elegir momentos, puede ser mejor estrategia.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">J. Maynard Smith</span> introdujo la <span class=\"term\">estrategia evolutivamente estable (ESS)</span>: una estrategia que, si la adopta la mayoría, no puede ser superada por una alternativa. Con estrategias «halcón» (lucha sin cuartel) y «paloma» (amenaza sin daño), ninguna pura es ESS: la mezcla estable incluye ambas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Halcón",
              "description": "Lucha hasta herir gravemente o morir; gana contra paloma pero sufre en encuentros halcón-halcón.",
              "icon": "🦅"
            },
            {
              "title": "Paloma",
              "description": "Postura y retirada; nunca hiere pero cede ante halcón.",
              "icon": "🕊️"
            },
            {
              "title": "ESS",
              "description": "Equilibrio donde desviarse empeora el resultado del desviado.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "La agresión ritualizada no es altruismo grupal: emerge de equilibrios donde la escalada total es demasiado costosa para todos.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Genesmanía",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un gen egoísta es todas las copias de un segmento de ADN distribuidas en el mundo. Puede ayudar a réplicas en otros cuerpos — altruismo individual producido por egoísmo génico. La clave es el <span class=\"term\">parentesco</span>.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">W. D. Hamilton</span> (<span class=\"num\">1964</span>) formalizó la selección de parentesco. Un gen que induce altruismo hacia familiares puede propagarse si el beneficio ponderado por el coeficiente de parentesco supera el costo. Entre hermanos, la relación es <span class=\"num\">1/2</span>. Entre padre e hijo, también <span class=\"num\">1/2</span>. Entre primos, <span class=\"num\">1/8</span>.",
        },
        {
          type: 'paragraph',
          html: "El «efecto barba verde» (reconocer copias del gen por una etiqueta visible) es teóricamente posible pero improbable. El parentesco es el mecanismo plausible: los parientes comparten genes raros con mayor probabilidad que extraños.",
        },
        {
          type: 'list',
          items: [
            "**Coeficiente de parentesco (r)** — probabilidad de que dos individuos compartan un gen particular por descendencia común.",
            "**Regla de Hamilton** — altruismo evolutivo si r × beneficio > costo (en unidades de aptitud inclusiva).",
            "**Barba verde** — gen que produce señal visible y preferencia por portadores de la señal; posible pero poco probable."
          ],
        },
        {
          type: 'key',
          html: "El altruismo familiar no sirve a la especie: sirve a copias del mismo <span class=\"key-term\">gen</span> en cuerpos emparentados.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Planificación familiar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La planificación familiar humana es decisional. En animales es programación instintiva sobre cuántos hijos tener y cuándo. Los genes «programan» tamaño de camada, intervalos reproductivos e inversión por cría según el entorno.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">K</span> seleccionado vs. <span class=\"term\">r</span> seleccionado describe estrategias de muchos hijos poco cuidados vs. pocos hijos muy cuidados. Un animal ajusta su fecundidad al número de crías que puede realistamente criar — no por bien de la especie sino por maximización génica.",
        },
        {
          type: 'paragraph',
          html: "El infanticidio, el abandono de crías y la competencia entre hermanos por recursos maternos son fenómenos explicables desde la perspectiva del gen: cada individuo compite por la inversión parental que maximice su propia supervivencia reproductiva.",
        },
        {
          type: 'key',
          html: "La «planificación familiar» animal es <span class=\"key-term\">táctica reproductiva</span> egoísta, no control demográfico benévolo de la población.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Batalla de las generaciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hay conflicto de intereses entre padres e hijos: ambos comparten el <span class=\"num\">50 %</span> de genes, pero cada hijo compite con sus hermanos y presiona a los padres por más inversión de la «justa».",
        },
        {
          type: 'paragraph',
          html: "Un gen en el cuerpo del hijo puede favorecer extraer más recursos de la madre de lo que a ella le conviene dar. El weaning conflict, el sibling rivalry y el infanticidio por parte de padres o hermanos ilustran esta tensión. Cada lado evoluciona contramedidas.",
        },
        {
          type: 'paragraph',
          html: "Desde la perspectiva del gen materno, todos los hijos son igualmente valiosos (salvo diferencias de parentesco). Desde la del hijo, él mismo vale más que sus hermanos. Esta asimetría explica gran parte del conflicto familiar en animales.",
        },
        {
          type: 'key',
          html: "Padres e hijos son aliados genéticos parciales y <span class=\"key-term\">rivales tácticos</span> en la distribución de recursos parentales.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Batalla de los sexos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si hay conflicto entre padres e hijos, ¿cuánto más entre compañeros sexuales no emparentados? Solo comparten el <span class=\"num\">50 %</span> de genes en los hijos comunes. Cada uno intenta explotar al otro para invertir menos en la cría.",
        },
        {
          type: 'paragraph',
          html: "La asimetría fundamental es el tamaño del gameto. Los masculinos (esperma) son pequeños y numerosos. Los femeninos (óvulos) son grandes y escasos. De la isogamia evolucionaron estrategias «honesta» (óvulo, gran inversión) y «explotadora» (esperma, móvil y barato). Los machos tienden a copular ampliamente. Las hembras son el factor limitante.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Robert Trivers</span> enfatizó la desconfianza mutua: el cortejo, la guardia de pareja, el celo y el cuidado parental son campos de negociación y engaño. Lo que parecía cooperación sexual era, en parte, explotación disfrazada.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Óvulo",
              "description": "Gameto grande, nutritivo, limita el número de crías.",
              "icon": "🥚"
            },
            {
              "title": "Esperma",
              "description": "Gameto pequeño y móvil; estrategia de muchas copias baratas.",
              "icon": "🏃"
            },
            {
              "title": "Conflicto sexual",
              "description": "Cada sexo presiona para que el otro invierta más en la descendencia.",
              "icon": "⚔️"
            }
          ],
        },
        {
          type: 'key',
          html: "Maleness y femaleness se definen por el tamaño del gameto — no por anatomía visible — y de ahí fluye casi toda la asimetría sexual.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Rascas mi espalda, yo me subo a la tuya",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El altruismo entre no parientes puede evolucionar por <span class=\"term\">altruismo recíproco</span> (<span class=\"person\">Robert Trivers</span>): ayudar a quien te ayudará en el futuro, siempre que el costo sea menor que el beneficio esperado de retribución.",
        },
        {
          type: 'paragraph',
          html: "Dawkins introduce las estrategias Sucker (siempre ayuda), Cheat (nunca ayuda) y Grudger (ayuda hasta que le fallan, luego retiene ayuda). Grudger domina en simulaciones porque explota a Suckers y castiga a Cheats. Ejemplos: peces limpiadores, aves que se quitan garrapatas, el canto del estornino.",
        },
        {
          type: 'paragraph',
          html: "La cooperación requiere memoria, reconocimiento individual y repetición de encuentros. En interacciones únicas, el egoísmo puro prevalece. En interacciones iteradas, la retribución puede estabilizarse.",
        },
        {
          type: 'key',
          html: "«Rascas mi espalda, yo me subo a la tuya» ilustra simbiosis donde una especie transporta parásitos que, a cambio, limpian — o altruismo recíproco con riesgo de engaño.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Memes: los nuevos replicadores",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Lo inusual del ser humano se resume en una palabra: <span class=\"term\">cultura</span>. La transmisión cultural es análoga a la genética — conservadora pero capaz de evolución a velocidades órdenes de magnitud superiores. El lenguaje de <span class=\"person\">Chaucer</span> a un inglés moderno lo demuestra.",
        },
        {
          type: 'paragraph',
          html: "Dawkins propone el <span class=\"term\">meme</span> (de mimema griego, abreviado para parecerse a «gen»): unidad de transmisión cultural. Melodías, ideas, modas, arquitectura — se propagan de cerebro a cerebro por imitación. Ejemplos: la idea de Dios, que replica por palabra, arte y música por su atractivo psicológico.",
        },
        {
          type: 'paragraph',
          html: "Los memes pueden ser «parasitarios» — el meme de la vida después de la muerte se realiza físicamente en millones de cerebros. Para entender al hombre moderno hay que considerar replicadores culturales además de genes, sin reducir todo a ventaja biológica.",
        },
        {
          type: 'quote',
          text: "«Cuando plantas un meme fértil en mi mente, literalmente parasitas mi cerebro, convirtiéndolo en vehículo de propagación del meme.»",
          attribution: "Richard Dawkins (citando a N. K. Humphrey)",
        },
        {
          type: 'key',
          html: "Los <span class=\"key-term\">memes</span> son replicadores en el caldo de la cultura humana — tan reales técnicamente como los virus parasitan células.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Los buenos terminan primero",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "«Los buenos terminan últimos» parece obvio en darwinismo — pero Dawkins explora un sentido técnico de «bueno»: cooperadores en el <span class=\"term\">Dilema del Prisionero</span> iterado, donde los encuentros se repiten indefinidamente.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Robert Axelrod</span> organizó torneos de estrategias computacionales. La ganadora, <span class=\"term\">Tit-for-Tat</span> (cooperar primero, luego copiar la jugada del rival), es «nice» (nunca traiciona primero), «forgiving» (no guarda rencor prolongado) y «clear» (fácil de leer). En juegos repetidos, la cooperación puede ser ESS.",
        },
        {
          type: 'paragraph',
          html: "El capítulo conecta juegos matemáticos con comportamiento animal y humano: aves Grudger, simbiosis, e incluso esperanza para la cooperación humana si diseñamos instituciones que favorezcan interacciones iteradas y reputación.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tit-for-Tat",
              "description": "Cooperar, luego imitar; vence a estrategias puramente agresivas en torneos iterados.",
              "icon": "🤝"
            },
            {
              "title": "PD iterado",
              "description": "La repetición permite castigar traiciones y construir confianza.",
              "icon": "🔁"
            },
            {
              "title": "«Nice»",
              "description": "Nunca ser el primero en defectar — condición para cooperación estable.",
              "icon": "😇"
            }
          ],
        },
        {
          type: 'key',
          html: "En el Dilema del Prisionero <span class=\"key-term\">iterado</span>, los buenos — cooperadores condicionales — pueden terminar primero.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "El largo alcance del gen",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Tensión al corazón de la teoría: genes como replicadores independientes vs. cuerpos como máquinas integradas y unificadas. ¿Cómo resolver la paradoja de las dos formas de ver la vida?",
        },
        {
          type: 'paragraph',
          html: "La selección no actúa sobre ADN aislado sino sobre sus <span class=\"term\">efectos fenotípicos</span>. Dawkins introduce el <span class=\"term\">fenotipo extendido</span>: los efectos de un gen incluyen todas sus consecuencias en el mundo, no solo dentro del cuerpo — presas de castor, nidos, casas de cadís, manipulación de hormigas por hongos.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">distorsionadores de segregación</span> (gen <span class=\"term\">t</span> en ratones) muestran genes que «hacen trampa» en la meiosis, propagándose a pesar de efectos destructivos en el organismo. Existen pero son raros porque la meiosis justa es estabilizada por selección a nivel corporal.",
        },
        {
          type: 'paragraph',
          html: "Los organismos existen porque los genes se benefician de agruparse en vehículos cooperativos grandes. El fenotipo extendido disuelve la tensión. El cuerpo es herramienta del gen, y las herramientas pueden extenderse más allá de la piel.",
        },
        {
          type: 'key',
          html: "El gen tiene <span class=\"key-term\">largo alcance</span>: su fenotipo incluye castores, presas, nidos y hasta el comportamiento manipulado de otros organismos.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Gen egoísta",
    "description": "Unidad de selección natural; replicador que persiste generaciones y programa cuerpos para su propagación."
  },
  {
    "title": "Máquina de supervivencia",
    "description": "Organismo como vehículo temporal de genes — desde bacterias hasta humanos."
  },
  {
    "title": "ESS",
    "description": "Estrategia evolutivamente estable; no puede ser superada si domina la población."
  },
  {
    "title": "Coeficiente de parentesco",
    "description": "Probabilidad (r) de compartir un gen por ancestro común; base del altruismo familiar."
  },
  {
    "title": "Altruismo recíproco",
    "description": "Ayuda a no parientes que retribuirán; requiere memoria y encuentros repetidos."
  },
  {
    "title": "Meme",
    "description": "Unidad de transmisión cultural; replicador en el «caldo» de la cultura humana."
  },
  {
    "title": "Fenotipo extendido",
    "description": "Efectos de un gen fuera del cuerpo que lo aloja — nidos, presas, comportamiento ajeno."
  },
  {
    "title": "Selección grupal",
    "description": "Error común: evolución «para el bien de la especie»; invadida por egoístas individuales."
  },
  {
    "title": "Crossing-over",
    "description": "Recombinación en meiosis que mezcla cromosomas parentales y define unidades genéticas."
  },
  {
    "title": "Isogamia",
    "description": "Sistema sin sexos diferenciados; precursor de la asimetría óvulo/esperma."
  }
],
  chronology: [
  {
    "year": "1859",
    "text": "Darwin publica *El origen de las especies*; explica la diversidad sin diseño consciente."
  },
  {
    "year": "~1930s",
    "text": "Neo-darwinismo: Fisher, Haldane, Wright integran genética y selección natural."
  },
  {
    "year": "1964",
    "text": "W. D. Hamilton formula la selección de parentesco y altruismo inclusivo."
  },
  {
    "year": "1960s",
    "text": "Williams y Hamilton hacen explícita la perspectiva del gen."
  },
  {
    "year": "1972–1975",
    "text": "Dawkins escribe *The Selfish Gene* durante un sabático tras interrupciones laborales."
  },
  {
    "year": "1976",
    "text": "Primera edición; capítulos 1–11."
  },
  {
    "year": "1984",
    "text": "Documental BBC *Nice Guys Finish First* con Jeremy Taylor."
  },
  {
    "year": "1989",
    "text": "Segunda edición: texto original intacto + capítulos 12–13 y notas al final."
  }
],
  figures: [
  {
    "name": "Charles Darwin",
    "role": "Teoría de la evolución por selección natural"
  },
  {
    "name": "W. D. Hamilton",
    "role": "Selección de parentesco · Altruismo inclusivo (1964)"
  },
  {
    "name": "G. C. Williams",
    "role": "*Adaptation and Natural Selection* · Definición del gen como unidad de selección"
  },
  {
    "name": "J. Maynard Smith",
    "role": "Teoría de juegos · Estrategias evolutivamente estables"
  },
  {
    "name": "Robert Trivers",
    "role": "Altruismo recíproco · Conflicto parental y sexual"
  },
  {
    "name": "Robert Axelrod",
    "role": "*The Evolution of Cooperation* · Tit-for-Tat en Dilema del Prisionero"
  },
  {
    "name": "Niko Tinbergen",
    "role": "Etología · Influencia formativa en Dawkins"
  },
  {
    "name": "R. A. Fisher",
    "role": "Neo-darwinismo · Genética de poblaciones"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Somos máquinas de supervivencia construidas por genes replicadores egoístas.",
  "La unidad de selección no es la especie ni el individuo, sino el gen que persiste.",
  "El altruismo por parentesco o reciprocidad es egoísmo génico disfrazado, no bondad abstracta.",
  "Entender la lógica evolutiva no nos obliga a obedecerla: abre la puerta a desafiar a nuestros diseñadores.",
  "Genes y memes nos moldean, pero solo nosotros podemos rebelarnos contra ambos replicadores."
],
    highlight: "pero podemos rebelarnos contra ellos",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Richard Dawkins",
    line2: "\"The Selfish Gene\" · Oxford University Press · 1976 (ed. ampliada 1989)",
  },
}
