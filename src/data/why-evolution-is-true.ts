import type { BookSummary } from '../types/book'

export const whyEvolutionIsTrue: BookSummary = {
  slug: "why-evolution-is-true",
  meta: {
    title: "Why Evolution Is True",
    subtitle: "La evidencia abrumadora de que la vida cambió y sigue cambiando",
    author: "Jerry A. Coyne",
    meta: [
      "📖 2009 · Viking Penguin",
      "✍️ Profesor emérito de Ecología y Evolución, Universidad de Chicago"
    ],
    titleEs: "Por qué la evolución es verdad"
  },
  toc: [
    {
      id: "prefacio",
      num: "00",
      label: "Prefacio e introducción"
    },
    {
      id: "cap1",
      num: "01",
      label: "¿Qué es la evolución?"
    },
    {
      id: "cap2",
      num: "02",
      label: "Escrito en las rocas"
    },
    {
      id: "cap3",
      num: "03",
      label: "Vestigios: remanentes, embriones y mal diseño"
    },
    {
      id: "cap4",
      num: "04",
      label: "La geografía de la vida"
    },
    {
      id: "cap5",
      num: "05",
      label: "El motor de la evolución"
    },
    {
      id: "cap6",
      num: "06",
      label: "Cómo el sexo impulsa la evolución"
    },
    {
      id: "cap7",
      num: "07",
      label: "El origen de las especies"
    },
    {
      id: "cap8",
      num: "08",
      label: "¿Qué hay de nosotros?"
    },
    {
      id: "cap9",
      num: "09",
      label: "Evolución revisitada"
    },
    {
      id: "conceptos",
      num: "✦",
      label: "Conceptos clave"
    },
    {
      id: "cronologia",
      num: "◈",
      label: "Cronología"
    },
    {
      id: "figuras",
      num: "✦",
      label: "Figuras clave"
    },
    {
      id: "cierre",
      num: "—",
      label: "La idea central"
    }
  ],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Dover, Kitzmiller y la evidencia",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "El <span class=\"num\">20 de diciembre de 2005</span>, el juez <span class=\"person\">John Jones III</span> falló en *Kitzmiller v. Dover*: el «diseño inteligente» en las escuelas de Pensilvania era inconstitucional — teología disfrazada de ciencia, no ciencia. Coyne lo vivió como victoria temporal: el creacionismo es como un payaso inflable que siempre vuelve a levantarse."
        },
        {
          type: "paragraph",
          html: "El mantra de los opositores — «la teoría de la evolución está en crisis» — es falso. La evolución no es solo una «teoría»: es un <span class=\"term\">hecho</span> respaldado por un siglo y medio de evidencia que confirma la propuesta darwiniana, especialmente la selección natural. Este libro resume las líneas principales de prueba para quienes dudan o necesitan argumentos."
        },
        {
          type: "paragraph",
          html: "En la introducción, Coyne recuerda a <span class=\"person\">Darwin</span>: la evolución muestra nuestro lugar en el árbol de la vida y reemplaza mitos milenarios. La selección natural es un mecanismo de belleza asombrosa y simplicidad. Los biólogos confían en el darwinismo tanto como en la existencia de átomos — pero fuera de la ciencia persisten resistencias psicológicas y religiosas."
        },
        {
          type: "quote",
          text: "«Hay grandeza en esta visión de la vida... de tan simple un principio han continuado y continúan evolucionando formas infinitas, las más hermosas y maravillosas.»",
          attribution: "Charles Darwin, *El origen de las especies*"
        },
        {
          type: "key",
          html: "Coyne escribe para quienes aceptan la evolución pero no saben cómo defenderla — y para mostrar que el darwinismo es <span class=\"key-term\">hecho científico</span>, no especulación en crisis."
        }
      ]
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Qué es la evolución?",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "La naturaleza parece diseñada: camaleones, colibríes, orquídeas que engañan a polinizadores. <span class=\"person\">William Paley</span> (<span class=\"num\">1802</span>) argumentó que, como un reloj implica relojero, la complejidad biológica implica un Diseñador. Darwin ofreció la alternativa: <span class=\"term\">evolución</span> y <span class=\"term\">selección natural</span>."
        },
        {
          type: "paragraph",
          html: "La evolución moderna se resume en seis componentes: (1) cambio genético en el tiempo; (2) <span class=\"term\">gradualismo</span> — cambios grandes requieren miles o millones de generaciones; (3) <span class=\"term\">especiación</span> — linajes que dejan de intercambiar genes; (4) <span class=\"term\">ascendencia común</span> — todos compartimos ancestros; (5) selección natural como mecanismo principal; (6) otros mecanismos menores (deriva génica, etc.)."
        },
        {
          type: "paragraph",
          html: "Los árboles filogenéticos muestran relaciones anidadas: vertebrados comparten columna; reptiles y mamíferos comparten huevo amniótico; mamíferos tienen pelo y leche. Esta jerarquía natural predató a Darwin; él explicó por qué existe: la divergencia por descendencia con modificación."
        },
        {
          type: "concept-grid",
          items: [
            {
              icon: "🌳",
              title: "Ascendencia común",
              description: "Todo ser vivo comparte ancestros; cuanto más reciente el ancestro común, más parecidos dos especies."
            },
            {
              icon: "🔀",
              title: "Especiación",
              description: "Poblaciones que evolucionan barreras reproductivas — dejan de intercambiar genes."
            },
            {
              icon: "🧬",
              title: "ADN",
              description: "Secuencias genéticas confirman independientemente los árboles basados en anatomía."
            }
          ]
        },
        {
          type: "key",
          html: "«Darwinismo» no es dogma: es el conjunto de hechos y mecanismos — evolución, gradualismo, especiación, ancestro común y selección natural."
        }
      ]
    },
    {
      id: "cap2",
      num: "02",
      title: "Escrito en las rocas",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "La historia de la vida está escrita en fósiles — un museo desgarrado pero legible. Paleontólogos como <span class=\"person\">Paul Sereno</span> arriesgan el Sahara para descubrir especies como *Afrovenator* y *Jobaria* que reescriben la evolución de dinosaurios."
        },
        {
          type: "paragraph",
          html: "Formarse fósiles requiere enterramiento rápido en sedimentos; los tejidos blandos casi nunca fossilizan. De entre <span class=\"num\">17 millones</span> y <span class=\"num\">4 mil millones</span> de especies estimadas, conocemos ~<span class=\"num\">250.000</span> fósiles — una muestra pequeña pero suficiente. Geólogos creacionistas ordenaron capas por <span class=\"term\">superposición</span> (<span class=\"person\">Nicolaus Steno</span>, s. XVII) antes del darwinismo."
        },
        {
          type: "paragraph",
          html: "Desde ~<span class=\"num\">1945</span>, la datación radiométrica mide edades absolutas. La secuencia confirma predicciones evolutivas: especies más primitivas en capas más antiguas, transiciones como dinosaurios emplumados entre reptiles y aves, y fósiles que combinan rasgos de grupos hoy separados."
        },
        {
          type: "big-numbers",
          items: [
            {
              value: "~250.000",
              label: "Especies fósiles descritas"
            },
            {
              value: "0,1–1 %",
              label: "Especies que dejaron registro fósil"
            },
            {
              value: "~3,5 mil millones de años",
              label: "Primeras formas de vida en registro"
            }
          ]
        },
        {
          type: "key",
          html: "Los fósiles no son prueba circunstancial: son predicciones cumplidas del árbol evolutivo, datadas con precisión radiométrica."
        }
      ]
    },
    {
      id: "cap3",
      num: "03",
      title: "Vestigios: remanentes, embriones y mal diseño",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Los organismos son <span class=\"term\">palimpsestos</span> evolutivos — como manuscritos medievales reescritos donde trazas del texto original persisten. <span class=\"person\">Theodosius Dobzhansky</span>: «Nada en biología tiene sentido excepto a la luz de la evolución.»"
        },
        {
          type: "paragraph",
          html: "Los <span class=\"term\">órganos vestigiales</span> son rasgos que perdieron la función para la cual evolucionaron: alas de avestruz (útiles pero reveladoras de ancestros voladores), apéndice, pelos erector pili. Un rasgo puede ser vestigial y funcional a la vez — lo vestigial indica la función ancestral, no ausencia de uso actual."
        },
        {
          type: "paragraph",
          html: "Los <span class=\"term\">atavismos</span> reactivan genes antiguos silenciados. El desarrollo embrionario muestra fases compartidas entre especies emparentadas. El «mal diseño» — nervio laríngeo recurrente, espalda dolorosa humana — encaja con historia evolutiva, no con diseño óptimo de novo."
        },
        {
          type: "list",
          items: [
            "**Palimpsesto** — Capas de historia evolutiva legibles en anatomía, ADN y desarrollo.",
            "**Vestigio** — Rasgo heredado cuya función original ya no aplica, aunque pueda tener usos secundarios.",
            "**Atavismo** — Expresión ocasional de rasgo ancestral (ej. cetáceos con patas)."
          ]
        },
        {
          type: "key",
          html: "Los vestigios refutan el diseño inteligente optimizado: muestran <span class=\"key-term\">historia</span>, no creación instantánea perfeccionada."
        }
      ]
    },
    {
      id: "cap4",
      num: "04",
      title: "La geografía de la vida",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "La biogeografía — dónde viven las especies — fue crucial para Darwin en las islas Galápagos y en todo su viaje en el *Beagle*. Especies similares habitan regiones próximas; islas oceánicas tienen fauna endémica emparentada con continentes vecinos."
        },
        {
          type: "paragraph",
          html: "Los patrones de distribución encajan con dispersión limitada y especiación en aislamiento: marsupiales en Australia, cactáceas en América, lemures en Madagascar. No hay explicación creacionista coherente para por qué un Diseñador pondría especies relacionadas exactamente donde la geología permite dispersión histórica."
        },
        {
          type: "paragraph",
          html: "Fósiles de la misma edad en continentes separados muestran formas emparentadas — prueba de conexiones terrestres pasadas (Pangea, puentes de tierra) o de dispersión oceánica. La geología y la biología convergen en una narrativa temporal única."
        },
        {
          type: "key",
          html: "La geografía de la vida es un mapa de <span class=\"key-term\">historia evolutiva</span>: dónde se separaron linajes y cómo dispersaron."
        }
      ]
    },
    {
      id: "cap5",
      num: "05",
      title: "El motor de la evolución",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "La <span class=\"term\">selección natural</span> explica adaptaciones asombrosas: el avispón gigante asiático que masacra colmenas europeas — las abejas nativas de Japón, en cambio, forman una bola caliente a <span class=\"num\">117 °F</span> y «cocinan» al explorador en <span class=\"num\">20 minutos</span>."
        },
        {
          type: "paragraph",
          html: "Las abejas europeas, sin historia con el depredador, carecen de defensa — exactamente lo que predice la evolución. Coyne documenta parasitismo manipulador (gusanos que convierten hormigas en «bayas» para pájaros), mimetismo (insectos hoja, orquídeas que imitan insectos) y adaptaciones de depredación especializadas."
        },
        {
          type: "paragraph",
          html: "La selección natural no es fuerza consciente: es resultado de variación heredable, superproducción y diferencias en supervivencia/reproducción. Las adaptaciones «malvadas» del parasitismo y las «ingeniosas» del mutualismo son productos del mismo motor."
        },
        {
          type: "concept-grid",
          items: [
            {
              icon: "🐝",
              title: "Selección local",
              description: "Defensas evolucionan solo donde el depredador impone presión suficiente."
            },
            {
              icon: "🦠",
              title: "Parasitismo",
              description: "Genes del parásito manipulan fenotipo del huésped para propagarse."
            },
            {
              icon: "🌸",
              title: "Coevolución",
              description: "Orquídeas y polinizadores escalan adaptaciones en carrera evolutiva."
            }
          ]
        },
        {
          type: "key",
          html: "La selección natural es el <span class=\"key-term\">motor</span> que esculpe la complejidad aparentemente diseñada de la naturaleza."
        }
      ]
    },
    {
      id: "cap6",
      num: "06",
      title: "Cómo el sexo impulsa la evolución",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "La reproducción sexual parece costosa — solo la mitad de genes pasan, hay que encontrar pareja — pero domina la vida multicelular. ¿Por qué? Porque mezcla genes y permite respuesta rápida a parásitos y cambio ambiental."
        },
        {
          type: "paragraph",
          html: "Coyne explica hipótesis clásicas: la <span class=\"term\">lotería de Weismann</span> (variabilidad), la <span class=\"term\">hipótesis del Rey Rojo</span> (carrera armamentística con parásitos que evolucionan rápido) y la recombinación que rompe combinaciones de genes deleterios."
        },
        {
          type: "paragraph",
          html: "El sexo genera variación sobre la cual actúa la selección; sin él, las especies asexuales acumulan mutaciones deleterias (declive de Muller) y quedan vulnerables a enfermedades. La paradoja del sexo sigue activa, pero la evidencia favorece ventajas evolutivas claras."
        },
        {
          type: "key",
          html: "El sexo es motor evolutivo porque genera <span class=\"key-term\">variación genética</span> — materia prima de la selección natural."
        }
      ]
    },
    {
      id: "cap7",
      num: "07",
      title: "El origen de las especies",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Darwin tituló su libro *El origen de las especies* pero, sin genética, no explicó del todo las barreras reproductivas. La comprensión moderna — área de investigación de Coyne — llegó en la década de <span class=\"num\">1930</span>."
        },
        {
          type: "paragraph",
          html: "La <span class=\"term\">especiación</span> ocurre cuando poblaciones acumulan diferencias genéticas hasta perder capacidad de intercambiar genes: aislamiento geográfico, selección divergente, incompatibilidad cromosómica. No es evento dramático visible — dos poblaciones de reptiles que dejan de cruzarse parecen idénticas al inicio."
        },
        {
          type: "paragraph",
          html: "Modos principales: <span class=\"term\">alopátrica</span> (poblaciones separadas geográficamente) y <span class=\"term\">simpátrica</span> (misma área, a menudo por cambio de host o poliploidía en plantas). El 99+ % de especies se extingue sin descendientes; la diversidad actual es fruto de ramificaciones exitosas."
        },
        {
          type: "key",
          html: "Especiación = evolución de <span class=\"key-term\">barreras reproductivas</span>; explica por qué hay millones de especies en vez de una sola."
        }
      ]
    },
    {
      id: "cap8",
      num: "08",
      title: "¿Qué hay de nosotros?",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Los humanos no estamos fuera de la evolución. Compartimos ~<span class=\"num\">98–99 %</span> del ADN con chimpancés; fósiles documentan transición de *Australopithecus* a *Homo*, con aumento cerebral, bipedestación y uso de herramientas."
        },
        {
          type: "paragraph",
          html: "Coyne aborda racionalismo vs. creacionismo humano: no hay «salto» inexplicable en complejidad. Rasgos humanos — lenguaje, moralidad, cultura — tienen precursores animales y bases cerebrales evolutivas. La evolución no dicta ética; quien saca «somos solo monos» como excusa para inmoralidad comete falacia naturalista."
        },
        {
          type: "paragraph",
          html: "La genética poblacional muestra que la raza humana es contínuo genético, no categorías discretas. Somos una especie joven (~<span class=\"num\">200.000</span>–<span class=\"num\">300.000</span> años) con poca diversidad genética comparada con otros primates — resultado de cuello de botella y expansión reciente."
        },
        {
          type: "key",
          html: "Somos <span class=\"key-term\">primates evolucionados</span> — producto del mismo proceso documentado en el resto de la vida."
        }
      ]
    },
    {
      id: "cap9",
      num: "09",
      title: "Evolución revisitada",
      blocks: [
        {
          type: "paragraph",
          variant: "lead",
          html: "Coyne cierra reafirmando: la evolución es tan cierta como cualquier hecho científico. No depende de fe; depende de evidencia convergente de fósiles, biogeografía, genética, anatomía comparada y experimentos de laboratorio (ej. evolución de bacterias resistentes en tiempo real)."
        },
        {
          type: "paragraph",
          html: "Los «agujeros» alegados por creacionistas — origen de la vida, detalles de algunas transiciones — no invalidan el núcleo darwiniano. La ciencia progresa llenando vacíos; el diseño inteligente no predice ni explica nada testeable."
        },
        {
          type: "paragraph",
          html: "Aceptar la evolución no elimina sentido ni moral — libera de mitos falsos sobre nuestros orígenes y conecta con el resto del mundo vivo. Darwin tenía razón en la grandiosidad de esta visión de la vida."
        },
        {
          type: "quote",
          text: "«En resumen, el [descargo de Dover] distingue la evolución como teoría bien establecida de una hipótesis alternativa no testeable basada en religión.»",
          attribution: "John Jones III (citado por Coyne)"
        },
        {
          type: "key",
          html: "La evolución no está en crisis: es el <span class=\"key-term\">marco unificador</span> de la biología, respaldado por evidencia abrumadora y creciente."
        }
      ]
    }
  ],
  keyConcepts: [
    {
      title: "Evolución",
      description: "Cambio genético en poblaciones a través del tiempo; descendencia con modificación."
    },
    {
      title: "Selección natural",
      description: "Diferencial de supervivencia/reproducción por variación heredable; esculpe adaptaciones."
    },
    {
      title: "Especiación",
      description: "Formación de nuevas especies por barreras al flujo génico entre poblaciones."
    },
    {
      title: "Ascendencia común",
      description: "Todos los organismos comparten ancestros; árboles filogenéticos lo documentan."
    },
    {
      title: "Gradualismo",
      description: "Cambios evolutivos grandes acumulan muchas generaciones de cambio pequeño."
    },
    {
      title: "Órgano vestigial",
      description: "Rasgo heredado con función ancestral distinta de la actual."
    },
    {
      title: "Biogeografía",
      description: "Distribución geográfica de especies como registro de historia evolutiva."
    },
    {
      title: "Deriva génica",
      description: "Cambio aleatorio de frecuencias génicas, especialmente en poblaciones pequeñas."
    },
    {
      title: "Rey Rojo",
      description: "Hipótesis: el sexo ayuda a mantener ventaja en carrera evolutiva contra parásitos."
    },
    {
      title: "Palimpsesto evolutivo",
      description: "Capas de historia legibles en ADN, anatomía y desarrollo embrionario."
    }
  ],
  chronology: [
    {
      year: "1635",
      text: "Linneo inicia clasificación natural de especies."
    },
    {
      year: "1802",
      text: "Paley argumenta diseño inteligente con la analogía del reloj."
    },
    {
      year: "1859",
      text: "Darwin publica *El origen de las especies*."
    },
    {
      year: "1860s",
      text: "Aceptación general de evolución; escepticismo sobre selección natural."
    },
    {
      year: "1900s",
      text: "Redescubrimiento de Mendel; síntesis genética de evolución."
    },
    {
      year: "1930s–40s",
      text: "Síntesis moderna: Fisher, Haldane, Wright, Dobzhansky."
    },
    {
      year: "1953",
      text: "Watson y Crick describen la estructura del ADN."
    },
    {
      year: "1965",
      text: "Penzias/Wilson (contexto cosmológico); avances en datación molecular."
    },
    {
      year: "2005",
      text: "Juicio Kitzmiller v. Dover: ID declarado no científico."
    },
    {
      year: "2009",
      text: "Coyne publica *Why Evolution Is True*."
    }
  ],
  figures: [
    {
      name: "Charles Darwin",
      role: "*El origen de las especies* · Selección natural"
    },
    {
      name: "Theodosius Dobzhansky",
      role: "«Nada en biología tiene sentido excepto a la luz de la evolución»"
    },
    {
      name: "William Paley",
      role: "Argumento del diseño (reloj/relojero) — refutado por Darwin"
    },
    {
      name: "Carl Linnaeus",
      role: "Clasificación sistemática de especies"
    },
    {
      name: "Nicolaus Steno",
      role: "Principio de superposición estratigráfica"
    },
    {
      name: "John Jones III",
      role: "Fallo Kitzmiller v. Dover (2005)"
    },
    {
      name: "Paul Sereno",
      role: "Paleontología de dinosaurios africanos"
    },
    {
      name: "Jerry A. Coyne",
      role: "Genética de especiación · Autor del libro"
    }
  ],
  closing: {
    title: "La idea central",
    lines: [
      "La evolución no es una creencia opcional: es hecho científico.",
      "Fósiles, genes, geografía y desarrollo convergen en la misma historia.",
      "La selección natural explica la complejidad sin diseñador.",
      "La evolución es verdad —",
      "tan cierta como la gravedad",
      "Entenderla no empobrece la vida humana: revela nuestro parentesco con todo lo vivo.",
      "La resistencia viene de la religión, no de lagunas en la evidencia."
    ],
    highlight: "tan cierta como la gravedad"
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Jerry A. Coyne",
    line2: "\"Why Evolution Is True\" · Viking Penguin · 2009"
  }
}
