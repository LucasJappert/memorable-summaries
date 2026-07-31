import type { BookSummary } from '../types/book'

export const whatIsLife: BookSummary = {
  slug: "what-is-life",
  meta: {
    title: "What Is Life?",
    subtitle: "El aspecto físico de la célula viva — con Mente y materia",
    author: "Erwin Schrödinger",
    meta: [
      "📖 What Is Life? 1944 · Mind and Matter 1958 · Canto Classics",
      "✍️ Ed. combinada Cambridge · Incluye Autobiographical Sketches",
    ],
    titleEs: "¿Qué es la vida?",
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
    "label": "El enfoque del físico clásico"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "El mecanismo hereditario"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Mutaciones"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Evidencia mecanocuántica"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El modelo de Delbrück"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Orden, desorden y entropía"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "¿Obedece la vida a las leyes de la física?"
  },
  {
    "id": "epilogo",
    "num": "★",
    "label": "Sobre determinismo y libre albedrío"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Base física de la conciencia"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "El futuro del entendimiento"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "El principio de objetivación"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "La paradoja aritmética: la unidad de la mente"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Ciencia y religión"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "El misterio de las cualidades sensibles"
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
          html: "¿Por qué un especialista se atreve a escribir sobre vida y mente?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Erwin Schrödinger</span> renuncia a la «noblesse oblige» de hablar solo de lo que se domina. Heredamos de nuestros antepasados el anhelo de un saber unificado. En los últimos dos siglos el conocimiento se multiplicó en anchura y profundidad. Ya no cabe en una sola cabeza.",
        },
        {
          type: 'paragraph',
          html: "La salida, dice Schrödinger, es que algunos se arriesguen a una síntesis con conocimiento incompleto. El riesgo de parecer necio es el precio de no perder el objetivo de unificar lo conocido. El libro nació de conferencias en Dublín en <span class=\"num\">septiembre de 1944</span>.",
        },
        {
          type: 'paragraph',
          html: "Las dificultades del inglés no son triviales. Los titulares marginales debían resumir secciones, pero el texto de cada capítulo debe leerse en continuo. El epígrafe de <span class=\"person\">Spinoza</span> (Ética IV, prop. 67) fija el tono: meditar sobre la vida, no sobre la muerte.",
        },
        {
          type: 'key',
          html: "Un físico puede y debe intentar la síntesis interdisciplinar porque el saber especializado ya no cabe en una cabeza y perderíamos la meta de un conocimiento unificado.",
        },
        {
          type: 'paragraph',
          html: "Tras disculparse por el atrevimiento, el capítulo 1 plantea la gran pregunta biológica que animará toda la primera parte.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El enfoque del físico clásico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo pueden contabilizarse física y química los eventos dentro de un organismo?",
        },
        {
          type: 'paragraph',
          html: "La pregunta central es cómo explicar lo que ocurre en el espacio y el tiempo dentro del límite de un ser vivo. La respuesta preliminar de Schrödinger es positiva. La incapacidad actual de la física no prueba imposibilidad. La explica porque los arreglos atómicos vitales difieren radicalmente de los estudiados en el laboratorio.",
        },
        {
          type: 'paragraph',
          html: "La diferencia clave es la <span class=\"term\">estructura estadística</span> (el tipo de orden que permite leyes aproximadas en sistemas grandes). El cromosoma puede llamarse <span class=\"term\">cristal aperiódico</span>: no repite un patrón como el papel tapiz, sino un diseño complejo como un tapiz de Rafael. Schrödinger propone partir del «físico ingenuo» que pregunta por qué los átomos son tan pequeños. En realidad pregunta por qué nuestros cuerpos son tan grandes comparados con ellos.",
        },
        {
          type: 'paragraph',
          html: "El pensamiento ordenado exige leyes físicas aproximadas basadas en promedios de muchos átomos. El calor molecular perturba sistemas pequeños. Schrödinger ilustra con paramagnetismo, movimiento browniano, difusión y balance de torsión. La regla <span class=\"term\">√n</span> (error relativo proporcional a 1/√n) fija la precisión según cuántos átomos cooperan.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Leyes aproximadas",
              "description": "Emergen solo con millones de átomos; sistemas pequeños escapan a regularidad estadística.",
              "icon": "📐"
            },
            {
              "title": "Cristal aperiódico",
              "description": "Orden complejo sin repetición periódica; portador del código genético.",
              "icon": "🧬"
            },
            {
              "title": "Calor molecular",
              "description": "Perturba continuamente grupos pequeños de átomos.",
              "icon": "🌡️"
            }
          ],
        },
        {
          type: 'key',
          html: "La imposibilidad actual de la física para explicar la vida no prueba que sea imposible, sino que los organismos dependen de estructuras atómicas cuyo estatuto estadístico difiere de la materia inerte.",
        },
        {
          type: 'paragraph',
          html: "Si hace falta tantos átomos para leyes fiables, el capítulo 2 pregunta cómo encaja eso con lo que la genética revela sobre grupos minúsculos pero decisivos.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El mecanismo hereditario",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo encajan los hechos genéticos con la exigencia de «muchos átomos» de la física?",
        },
        {
          type: 'paragraph',
          html: "La expectativa del físico ingenuo parecía trivial porque cada célula contiene un número cosmológico de átomos. Hoy sabemos que grupos increíblemente pequeños gobiernan el patrón hereditario. Los <span class=\"term\">cromosomas</span> (hebras que portan el código genético) contienen el guion completo del desarrollo. Son código y poder ejecutivo a la vez.",
        },
        {
          type: 'paragraph',
          html: "El cuerpo crece por <span class=\"term\">mitosis</span> (división celular que duplica cromosomas). En humanos hay <span class=\"num\">48</span> cromosomas. Bastan ~<span class=\"num\">50–60</span> divisiones desde el huevo hasta el adulto.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">meiosis</span> (división reductiva) produce gametos haploides y la fecundación restaura la diploidía. El crossing-over, intercambio de tramos entre cromosomas homólogos, permite mapas de ligamiento. El gen ocupa un locus, sitio en el cromosoma. Dos estimaciones dan ~<span class=\"num\">300 Å</span> de lado (~<span class=\"num\">10⁶</span> átomos), demasiado pequeño para estadística clásica. Aun así, el patrimonio genético se transmite con permanencia casi absoluta durante siglos.",
        },
        {
          type: 'key',
          html: "Contrariamente a lo que un físico estadístico esperaría, grupos minúsculos de átomos en los genes gobiernan con ley estricta el patrón hereditario cuatridimensional del organismo.",
        },
        {
          type: 'paragraph',
          html: "La permanencia del código solo se explica plenamente si admitimos cambios discretos —las mutaciones— como material de la selección.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Mutaciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué tipo de cambio hereditario alimenta la selección natural y cómo se localiza?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Darwin</span> se equivocó al pensar que las variaciones continuas pequeñas eran heredadas. En cebada pura, seleccionar awns largos o cortos no desplaza la curva. Las mutaciones de <span class=\"person\">de Vries</span> (<span class=\"num\">1902</span>) son discontinuas: saltos sin formas intermedias. Recuerdan a la física cuántica. De hecho, son saltos cuánticos en la molécula genética.",
        },
        {
          type: 'paragraph',
          html: "Las mutaciones se heredan perfectamente y afectan un solo cromosoma homólogo. En cruces, la mitad de la descendencia las muestra. Muchas son <span class=\"term\">recesivas</span> (latentes en heterocigosis) y solo se manifiestan en homocigosis. La consanguinidad concentra alelos dañinos con riesgo <span class=\"num\">1:16</span> en incesto.",
        },
        {
          type: 'paragraph',
          html: "Mendel publicó sus leyes en <span class=\"num\">1866</span>, olvidadas hasta <span class=\"num\">1900</span>. Las mutaciones deben ser raras para que la selección funcione. Los rayos X multiplican la tasa. Timoféëff-Ressovsky formuló en <span class=\"num\">1934</span> dos leyes: proporcionalidad con la dosis y evento único en ~<span class=\"num\">10³</span> átomos según Delbrück.",
        },
        {
          type: 'key',
          html: "La evolución darwiniana depende de mutaciones discontinuas y heredables cuyas leyes de inducción por rayos X apuntan a un evento molecular único y cuántico.",
        },
        {
          type: 'paragraph',
          html: "Si un gen tiene solo miles de átomos y muta por saltos, el capítulo 4 pregunta cómo puede ser tan estable durante siglos.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Evidencia mecanocuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo reconciliar pocos átomos con regularidad y durabilidad hereditaria?",
        },
        {
          type: 'paragraph',
          html: "El labio Habsburgo se transmitió siglos a ~<span class=\"num\">37 °C</span>. Un físico del siglo XIX no tenía respuesta sin química cuántica. Por eso, la teoría cuántica de Planck (<span class=\"num\">1900</span>) funda la herencia. Los sistemas pequeños poseen niveles discretos. Las transiciones son <span class=\"term\">saltos cuánticos</span> (cambios discretos de energía, no graduales).",
        },
        {
          type: 'paragraph',
          html: "Las moléculas estables requieren energía W para cambiar de configuración. El tiempo de expectativa depende de W/kT según Polanyi-Wigner. A mayor W/kT, el tiempo crece exponencialmente desde fracciones de segundo hasta decenas de miles de años. Los isómeros del propanol ilustran umbrales entre alelos.",
        },
        {
          type: 'paragraph',
          html: "Las vibraciones finas no cuentan. Solo interesan transiciones isoméricas con umbral entre configuraciones. El salto cuántico entre alelos es la mutación. Heitler-London (<span class=\"num\">1926–27</span>) explica el enlace químico que sostiene esa estabilidad.",
        },
        {
          type: 'key',
          html: "La permanencia milagrosa de los genes solo se comprende con estados discretos, estabilidad térmica según W/kT e isomerismo con umbral energético entre alelos.",
        },
        {
          type: 'paragraph',
          html: "Delbrück convertirá este esquema en modelo explícito del gen y lo contrastará con los datos genéticos.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El modelo de Delbrück",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Resiste el modelo molecular la comparación con la genética experimental?",
        },
        {
          type: 'paragraph',
          html: "El gen es una molécula gigante con cambios discretos por reordenamiento isomérico. Los umbrales altos hacen raras las mutaciones espontáneas, y no hay alternativa molecular para la permanencia del código. Por eso, Schrödinger resume que molécula equivale a sólido y cristal, mientras gas equivale a líquido amorfo.",
        },
        {
          type: 'paragraph',
          html: "El gen es un <span class=\"term\">sólido aperiódico</span> (estructura ordenada sin repetición periódica). La analogía Morse muestra cuánta información cabe en pocos átomos. Los umbrales ~<span class=\"num\">0,9–1,8 eV</span> a temperatura ambiente explican estabilidad de siglos. La radiación natural no basta para la tasa espontánea. Los mutantes inestables mutan más con el calor (factor van't Hoff ~<span class=\"num\">2,5</span> por +10 °C).",
        },
        {
          type: 'paragraph',
          html: "Los rayos X producen ionización (~<span class=\"num\">30 eV</span>) en volumen ~10 distancias atómicas. Eso supera el umbral local. Las mutaciones reversibles pueden tener umbrales distintos según el alelo inicial. En conjunto, el modelo de <span class=\"person\">Delbrück</span> resiste las pruebas.",
        },
        {
          type: 'key',
          html: "El gen es una molécula gigante cuyas reordenaciones isoméricas raras son mutaciones. El modelo cuántico-molecular no tiene alternativa y encaja con estabilidad, temperatura, rayos X y reversibilidad.",
        },
        {
          type: 'paragraph',
          html: "El modelo explica estabilidad del código, pero no cómo opera el desarrollo; de ahí la pregunta termodinámica del capítulo 6.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Orden, desorden y entropía",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo evita un organismo el decaimiento termodinámico hacia el equilibrio?",
        },
        {
          type: 'paragraph',
          html: "Del modelo molecular emerge una conclusión general. La vida no elude las leyes físicas, pero puede implicar un principio distinto de orden. La vida se apoya en orden molecular cuántico, no solo en estadística disgregadora. Schrödinger lo llama «orden basado en orden».",
        },
        {
          type: 'paragraph',
          html: "Un sistema aislado tiende al equilibrio. La <span class=\"term\">entropía</span> (medida de desorden, k log D según Boltzmann) crece hasta el máximo. La vida evita la muerte alimentándose de entropía negativa, es decir orden del ambiente. El alimento aporta compuestos orgánicos muy ordenados. El calor corporal exporta entropía sobrante.",
        },
        {
          type: 'paragraph',
          html: "Colegas físicos dudaron del término «entropía negativa». Simon señaló que no basta carbón: hace falta la vía metabólica. La energía libre también importa para reponer calor disipado. La temperatura corporal alta acelera reacciones (van't Hoff) y acelera eliminar entropía.",
        },
        {
          type: 'key',
          html: "La vida no elude las leyes físicas pero se sostiene extrayendo entropía negativa del ambiente mediante metabolismo, sobre estructuras moleculares cuánticas.",
        },
        {
          type: 'paragraph',
          html: "¿Significa esto nuevas leyes físicas en el organismo o una forma distinta de orden ya presente en la física?",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "¿Obedece la vida a las leyes de la física?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hay que postular fuerzas vitales o leyes no físicas?",
        },
        {
          type: 'paragraph',
          html: "La vida funciona de modo no reducible a leyes ordinarias, no por fuerzas nuevas sino por construcción distinta. Schrödinger lo compara con un motor eléctrico frente a uno térmico. Un grupo minúsculo de átomos gobierna el desarrollo.",
        },
        {
          type: 'paragraph',
          html: "Hay dos mecanismos de orden. El <span class=\"term\">orden desde el desorden</span> (estadístico) y el <span class=\"term\">orden desde el orden</span> (dinámico). Los relojes y planetas parecen dinámicos, pero en realidad son estadísticos salvo a T→0 (teorema de Nernst). A temperatura ambiente un reloj de péndulo funciona «dinámicamente» porque es sólido.",
        },
        {
          type: 'paragraph',
          html: "El cromosoma es un sólido aperiódico retirado del desorden térmico. Schrödinger advierte que no debemos reducir la mente a «engranajes». La distribución poética de cromosomas en células subraya lo sin precedente. La vida obedece a la física conocida con el principio orden-desde-orden de la mecánica cuántica.",
        },
        {
          type: 'key',
          html: "La vida obedece a la física conocida, pero se apoya en el principio orden-desde-orden en sólidos aperiódicos, no solo en el orden-desde-desorden estadístico.",
        },
        {
          type: 'paragraph',
          html: "Si el cuerpo es mecanismo estadístico, el epílogo pregunta cómo compatibilizar eso con libertad y responsabilidad.",
        },
      ],
    },
    {
      id: "epilogo",
      num: "★",
      title: "Sobre determinismo y libre albedrío",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Son compatibles mecanismo físico y libre albedrío?",
        },
        {
          type: 'paragraph',
          html: "Los procesos corporales son estadístico-deterministas. La indeterminación cuántica no importa biológicamente salvo en mutaciones. Mi cuerpo funciona como mecanismo según leyes naturales, y yo dirijo sus movimientos sintiéndome responsable. De ahí sigue que yo controlo el movimiento de los átomos.",
        },
        {
          type: 'paragraph',
          html: "En terminología cristiana suena a blasfemia decir «soy Dios Todopoderoso». Pero es la lectura biológica más cercana a inmortalidad. La doctrina Upanishad Atman = Brahman tiene <span class=\"num\">2500</span> años. La conciencia nunca aparece en plural. La pluralidad de cuerpos sugiere muchas almas, pero Schrödinger la considera absurda.",
        },
        {
          type: 'paragraph',
          html: "La alternativa es una sola mente. La pluralidad sería Maya, ilusión, como un mismo pico visto desde valles distintos. Schrödinger alinea esto con la filosofía perenne de Aldous Huxley. Kant es criticado por la «imagen del árbol» que separa sujeto y objeto.",
        },
        {
          type: 'key',
          html: "Aunque los procesos corporales son estadístico-deterministas, la inferencia coherente con la experiencia de agencia es que el Yo consciente dirige los átomos según las leyes naturales.",
        },
        {
          type: 'paragraph',
          html: "Si la mente no es mero epifenómeno cerebral, el capítulo 8 pregunta qué procesos materiales acompañan la conciencia.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Base física de la conciencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué procesos materiales están ligados a conciencia?",
        },
        {
          type: 'paragraph',
          html: "El mundo es construcción de sensaciones y percepciones. Solo se manifiesta en cerebros. No todo proceso nervioso acompaña conciencia. Lo repetido desaparece de ella según la <span class=\"term\">Mneme</span> (memoria por repetición) de Semon. Respiración, llanto y hábitos ontogenéticos son inconscientes.",
        },
        {
          type: 'paragraph',
          html: "Lo nuevo permanece consciente. El niño aprende a caminar con atención plena. El adulto se viste pensando en otra cosa. Schrödinger cita al matemático que se acostó tras quitarse la camisa en una fiesta. El sistema nervioso es la punta vegetativa evolutiva de la especie.",
        },
        {
          type: 'paragraph',
          html: "Schrödinger extiende la noción a procesos orgánicos nuevos, no solo nerviosos. La conciencia es fenómeno de la zona evolutiva. Esto abre vía a la ética porque el «debes» choca con el yo primitivo. Cada día somos cincel y escultura a la vez. La conciencia y la discordia interior son proporcionales.",
        },
        {
          type: 'key',
          html: "La conciencia acompaña procesos orgánicos novedosos, sobre todo nerviosos en aprendizaje. No acompaña toda actividad fisiológica. Es fenómeno de la zona evolutiva, no de rutina memorizada.",
        },
        {
          type: 'paragraph',
          html: "Si conciencia marca lo evolutivo, el capítulo 9 pregunta cómo influye el comportamiento en la evolución futura.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "El futuro del entendimiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Sigue evolucionando la especie humana y depende de nosotros?",
        },
        {
          type: 'paragraph',
          html: "Nuestro cerebro probablemente no es el óptimo final. Algunas especies llegaron a callejones sin salida evolutivos. En humanos, mutaciones raras y selección positiva parecen bloqueadas. Guerra, medicina y protección social eliminan selección.",
        },
        {
          type: 'paragraph',
          html: "El darwinismo parece sombrío frente al Lamarckismo porque lo adquirido no se hereda. Aun así el comportamiento canaliza la selección. Schrödinger lo llama Lamarckismo fingido. El órgano usado se fija genéticamente junto con el hábito. Las flores peludas suben la ladera y las aves en árboles refuerzan el vuelo.",
        },
        {
          type: 'paragraph',
          html: "En humanos, la estupidización industrial amenaza degeneración intelectual. Julian Huxley advierte que sin selección las mutaciones degenerativas se acumulan. Depende de nosotros. Las charlas BBC de <span class=\"num\">1950</span> originaron este capítulo.",
        },
        {
          type: 'key',
          html: "El comportamiento canaliza la selección y simula Lamarckismo. En el hombre la evolución no está cerrada sino amenazada por eugenesia negativa, guerra y estupidización industrial.",
        },
        {
          type: 'paragraph',
          html: "Para pensar mente y ciencia hace falta examinar cómo la ciencia construye su objeto excluyendo al sujeto.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El principio de objetivación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo construye la ciencia su imagen del mundo y qué precio paga?",
        },
        {
          type: 'paragraph',
          html: "La ciencia occidental hereda de los griegos naturaleza inteligible y <span class=\"term\">objetivación</span> (exclusión del sujeto del modelo). Construimos un mundo objetivo retirándonos como observadores. Mi cuerpo y los de otros entran en ese mundo, lo que genera paradojas.",
        },
        {
          type: 'paragraph',
          html: "El mundo científico carece de color, sonido y calor. Tampoco hay lugar donde mente actúe sobre materia, como muestran Sherrington y Spinoza. Eddington contrasta el escritorio familiar con el de átomos en el vacío.",
        },
        {
          type: 'paragraph',
          html: "La incertidumbre cuántica no reintroduce al sujeto como observador activo. Schrödinger concluye que el mismo elemento compone mente y mundo. Sujeto y objeto son uno. Jung lamenta la exclusión del alma. Schrödinger prefiere retirada gradual.",
        },
        {
          type: 'key',
          html: "La ciencia descansa en objetivación, es decir excluir al sujeto del mundo construido. Eso simplifica el dominio natural pero genera antinomias como mundo sin color y mente que no actúa sobre materia.",
        },
        {
          type: 'paragraph',
          html: "La exclusión del sujeto produce la paradoja aritmética de muchas mentes y un solo mundo.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "La paradoja aritmética: la unidad de la mente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué hay pluralidad aparente de conciencias si el mundo es uno?",
        },
        {
          type: 'paragraph',
          html: "La mente no cabe en el cuadro científico porque es ella quien lo construye. Aparece entonces la paradoja aritmética de muchas conciencias y un solo mundo. Leibniz y sus mónadas sin ventanas es un escape poco atractivo.",
        },
        {
          type: 'paragraph',
          html: "La alternativa Upanishad postula una sola mente. Aziz Nasafi (s. XIII) habla de luz única tras ventanas distintas. Sherrington muestra células como vidas unitarias, pero no hay pluralidad mental. El parpadeo binocular a <span class=\"num\">60 Hz</span> frente al monocular revela sub-cerebros visuales sin mentes separadas.",
        },
        {
          type: 'paragraph',
          html: "El mundo científico carece de valores éticos y estéticos. «No hay bien ni mal sino pensamiento lo hace.» La entropía universal y la mente finita inquietan. Schrödinger compara al artista dentro de su obra (Homero, Dürer). Hablar de indestructibilidad de la mente es religión, no ciencia, pero apoyada en investigación desinteresada.",
        },
        {
          type: 'key',
          html: "La paradoja de muchas conciencias y un solo mundo se resuelve admitiendo una sola mente. La ciencia objetivada no puede contener al sujeto que la produce.",
        },
        {
          type: 'paragraph',
          html: "Si mente escapa al tiempo-espacio del modelo, el capítulo 12 pregunta qué puede decir ciencia sobre religión.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Ciencia y religión",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la ciencia informar actitudes religiosas razonables?",
        },
        {
          type: 'paragraph',
          html: "La ciencia ayuda a desmaterializar dogmas. Mapas medievales con infierno y cielo físicos cedieron ante geología y astronomía. La contribución mayor es la idealización del tiempo. <span class=\"person\">Platón</span> vio verdades matemáticas como atemporales. El teorema de Goldbach o la intersección de alturas de un triángulo no «nacen» al descubrirlos.",
        },
        {
          type: 'paragraph',
          html: "Kant enseñó idealidad de espacio y tiempo como formas de intuición. Eso libera creer en lo no espacio-temporal. La experiencia no sobrevive la destrucción del cuerpo en sentido temporal. Fuera del tiempo, la noción de «después» carece de sentido. Einstein debilitó simultaneidad absoluta con regiones de simultaneidad potencial.",
        },
        {
          type: 'paragraph',
          html: "Boltzmann y Gibbs explicaron la flecha del tiempo como estadística, no insertada en mecanismos reversibles. El tiempo fluye donde la estadística lo define. Schrödinger cree que la física actual sugiere indestructibilidad de la mente frente al tiempo. No responde si hay vida tras muerte, solo remueve obstáculos conceptuales.",
        },
        {
          type: 'key',
          html: "La ciencia no demuestra dogmas religiosos pero ayuda a desmaterializarlos y, vía idealización del tiempo, sugiere que la mente no está subordinada al tirano temporal.",
        },
        {
          type: 'paragraph',
          html: "Un caso concreto del precio de la objetivación es la desaparición de cualidades sensibles del mundo científico.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "El misterio de las cualidades sensibles",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué el mundo científico carece de las cualidades que nos dieron acceso a él?",
        },
        {
          type: 'paragraph',
          html: "Todo conocimiento científico parte de percepción sensorial. El modelo físico excluye color, sabor y sonido desde el primer paso con rejilla de difracción, no con el ojo.",
        },
        {
          type: 'paragraph',
          html: "Amarillo equivale a λ≈<span class=\"num\">590 nm</span>, no a la sensación de amarillo. Mezclas aditivas y triángulo de colores muestran que la sensación no se deduce de longitudes de onda. Ni fisiología contiene «amarillo» en descripción objetiva.",
        },
        {
          type: 'paragraph',
          html: "El oído discrimina timbre y octavas con la cóclea amortiguada. Abejas ven ultravioleta y detectan polarización según Frisch. Murciélagos usan ultrasonido. Demócrito (fr. 125) decía que ostensiblemente hay color pero en realidad solo átomos y vacío.",
        },
        {
          type: 'key',
          html: "Todo conocimiento científico parte de la percepción sensorial, pero el modelo físico excluye las cualidades sensibles desde el primer paso. Las teorías facilitan memoria de hechos medidos y nunca explican color, sabor ni sonido vividos.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Cristal aperiódico",
    "description": "Estructura molecular con orden complejo sin repetición periódica; portador del código genético."
  },
  {
    "title": "Estructura estadística / regla √n",
    "description": "Leyes macroscópicas emergen de millones de átomos; error relativo ~1/√n."
  },
  {
    "title": "Gen / locus / alelo",
    "description": "Unidad hereditaria en cromosoma; diferencia discreta entre variantes; base de mutación."
  },
  {
    "title": "Mutación cuántica / isomerismo",
    "description": "Cambio discontinuo por reordenamiento molecular con umbral W; analogía de Vries con saltos cuánticos."
  },
  {
    "title": "W/kT y tiempo de expectativa",
    "description": "Ratio fija estabilidad térmica del gen; τe^(W/kT) explica duración hereditaria y efecto temperatura/rayos X."
  },
  {
    "title": "Entropía negativa",
    "description": "Vida mantiene baja entropía importando orden (alimento, luz) y exportando entropía (calor)."
  },
  {
    "title": "Orden desde orden vs. orden desde desorden",
    "description": "Dos vías de regularidad; vida y cromosomas usan la primera; física térmica la segunda."
  },
  {
    "title": "Objetivación",
    "description": "Exclusión del sujeto del modelo científico; habilita predicción pero excluye mente, valor y cualidades sensibles."
  },
  {
    "title": "Mneme / novedad y conciencia",
    "description": "Lo repetido se inconsciente; lo nuevo (aprendizaje, evolución) permanece consciente."
  },
  {
    "title": "Unidad de la mente (Atman = Brahman)",
    "description": "Resolución de paradoja aritmética de conciencias múltiples; compatible con epílogo y cap. 11."
  }
],
  chronology: [
  {
    "year": "~450 a.C.",
    "text": "Demócrito: átomos vs. sentidos (fr. 125)"
  },
  {
    "year": "1866",
    "text": "Mendel publica leyes de herencia en Brünn"
  },
  {
    "year": "1900",
    "text": "Planck descubre cuantización de energía"
  },
  {
    "year": "1900",
    "text": "Redescubrimiento de Mendel (Correns, de Vries, Tschermak)"
  },
  {
    "year": "1901–03",
    "text": "de Vries: mutaciones discontinuas"
  },
  {
    "year": "1926–27",
    "text": "Heitler-London: teoría del enlace químico"
  },
  {
    "year": "1934",
    "text": "Timoféëff-Ressovsky: leyes de mutación por rayos X"
  },
  {
    "year": "1935",
    "text": "Delbrück, Timoféëff, Zimmer: modelo molecular del gen (Göttingen)"
  },
  {
    "year": "1944",
    "text": "Schrödinger: conferencias *What Is Life?* en Dublín"
  },
  {
    "year": "1946",
    "text": "Huxley: *The Perennial Philosophy*"
  },
  {
    "year": "1950",
    "text": "Charlas BBC que originan *Mind and Matter*"
  },
  {
    "year": "1954",
    "text": "Schrödinger publica *La naturaleza y los griegos*"
  },
  {
    "year": "1958",
    "text": "Publicación de *Mind and Matter*"
  }
],
  figures: [
  {
    "name": "Erwin Schrödinger",
    "role": "Autor · conferencias Dublín 1944 · ensayos *Mind and Matter* (BBC 1950)"
  },
  {
    "name": "Ludwig Boltzmann / Willard Gibbs",
    "role": "Mecánica estadística · entropía · flecha del tiempo"
  },
  {
    "name": "Max Planck",
    "role": "Cuantización de energía · 1900"
  },
  {
    "name": "Max Delbrück / N. W. Timoféëff-Ressovsky / K. G. Zimmer",
    "role": "Modelo molecular del gen · mutaciones por rayos X · Göttingen 1935"
  },
  {
    "name": "Gregor Mendel / Hugo de Vries",
    "role": "Leyes de herencia · mutaciones discontinuas"
  },
  {
    "name": "Walther Nernst",
    "role": "Tercera ley de la termodinámica · comportamiento dinámico a T→0"
  },
  {
    "name": "Charles Sherrington",
    "role": "Fisiología · imposibilidad mente-mover dedo · *Man on his Nature*"
  },
  {
    "name": "Baruch Spinoza",
    "role": "Ética · mente y cuerpo · DEUS sive natura"
  },
  {
    "name": "Immanuel Kant / Albert Einstein",
    "role": "Idealidad de espacio-tiempo · relatividad especial"
  },
  {
    "name": "Julian Huxley",
    "role": "*Evolution* (1942) · selección orgánica · Lamarckismo fingido"
  },
  {
    "name": "Aldous Huxley",
    "role": "*The Perennial Philosophy* (1946) · filosofía perenne"
  },
  {
    "name": "Demócrito / Aziz Nasafi",
    "role": "Átomos vs. sentidos · unidad de la luz (s. XIII)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Vida, herencia, metabolismo y conciencia no contradicen la física, pero exigen dos principios de orden distintos.",
  "El código genético es un sólido aperiódico cuántico; la vida se alimenta de entropía negativa; la mente construye el mundo excluyéndose a sí misma.",
  "Schrödinger une física cuántica, genética y filosofía sin postular fuerzas vitales ni abandonar rigor.",
  "El observador no puede entrar en su propio cuadro sin paradojas: las cualidades sensibles, el libre albedrío y el sentido quedan fuera del modelo, no fuera de la experiencia.",
  "Meditar sobre la vida —no sobre la muerte— sigue siendo el mandato spinozista que abre y cierra la obra."
],
    highlight: "La unidad de la conciencia es la clave para entender permanencia del código, ética, evolución futura y límites de lo que la ciencia puede decir sobre lo religioso",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Erwin Schrödinger",
    line2: "\"What Is Life?\" / \"Mind and Matter\" · Cambridge University Press · Canto Classics",
  },
}
