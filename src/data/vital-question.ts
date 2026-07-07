import type { BookSummary } from '../types/book'

export const vitalQuestion: BookSummary = {
  slug: "vital-question",
  meta: {
    title: "The Vital Question",
    subtitle: "Energía, evolución y el origen de la vida compleja",
    author: "Nick Lane",
    meta: [
      "📖 2015 · W. W. Norton & Company",
      "✍️ Edición original británica: Why is Life the Way It Is?",
    ],
    titleEs: "La cuestión vital",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "¿Por qué es la vida como es?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hay un <span class=\"term\">agujero negro</span> en el corazón de la biología. Toda la vida compleja en la Tierra comparte un ancestro común que surgió una sola vez en <span class=\"num\">4 000 millones</span> de años: una célula ya tan sofisticada como las nuestras, que transmitió esa complejidad a árboles, abejas y hongos. Las células humanas son prácticamente indistinguibles de las de un hongo al microscopio.",
        },
        {
          type: 'paragraph',
          html: "La vida apareció hacia los <span class=\"num\">4 000 millones</span> de años, pero permaneció atrapada en la simplicidad bacteriana más de <span class=\"num\">2 000 millones</span>. Plantas, animales, hongos y protistas descienden de un único ancestro hace <span class=\"num\">1 500–2 000 millones</span> de años, sin eslabones perdidos entre la simplicidad morfológica de las bacterias y la complejidad de todo lo demás. Gastamos miles de millones en biomedicina sin entender cómo evolucionaron las piezas de la célula.",
        },
        {
          type: 'paragraph',
          html: "Tres revoluciones moldearon el panorama. La <span class=\"term\">endosimbiosis</span> de <span class=\"person\">Lynn Margulis</span> (<span class=\"num\">1967</span>), el árbol filogenético de <span class=\"person\">Carl Woese</span> (tres dominios) y la genómica moderna confirman la predicción de <span class=\"person\">Bill Martin</span> (<span class=\"num\">1998</span>). La célula huésped era un <span class=\"term\">arquea</span> morfológicamente simple que incorporó la bacteria ancestro de las mitocondrias. La clave, según Lane, está en la generación de energía mediante gradientes de protones, la <span class=\"term\">quimiosmosis</span> de <span class=\"person\">Peter Mitchell</span>.",
        },
        {
          type: 'key',
          html: "La energía celular impone <span class=\"key-term\">restricciones físicas</span> que explican por qué las bacterias permanecen simples y por qué la vida compleja surgió una sola vez.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "¿Qué es la vida?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los telescopios de <span class=\"term\">SETI</span> en California buscan señales extraterrestres, pero sus preguntas rebotan sobre la biología terrestre. La biología evolutiva conoce la historia molecular, pero predice poco sobre qué partes del relato son contingencia y cuáles leyes físicas. <span class=\"person\">Jacques Monod</span> veía el origen de la vida como accidente. Otros lo consideran inevitable.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Erwin Schrödinger</span>, en <em>What is Life?</em> (<span class=\"num\">1944</span>), propuso que la vida elude localmente la entropía mediante los genes como «cristal aperiódico» portador de código. La era del ADN, iniciada por <span class=\"person\">Crick</span> y <span class=\"person\">Watson</span> (<span class=\"num\">1953</span>), convirtió la biología en ciencia de la información. Los genomas varían enormemente. Si la información no impone límites estructurales, no podemos predecir la vida en otros planetas.",
        },
        {
          type: 'paragraph',
          html: "La historia temprana de la Tierra (<span class=\"num\">~4 500 millones</span> de años) muestra océanos desde los cristales de circón más antiguos. La vida aparece hacia los <span class=\"num\">3 800–3 500 millones</span> de años. Hacia los <span class=\"num\">3 200 millones</span> de años, las bacterias ya dominaban casi todas las vías metabólicas. La fotosíntesis oxigénica y el <span class=\"term\">Gran Evento de Oxidación</span> (~<span class=\"num\">2 400 millones</span> de años) transformaron el planeta. La versión textbook, que el oxígeno liberó restricciones y permitió células complejas por endosimbiosis gradual, es incorrecta según Lane.",
        },
        {
          type: 'paragraph',
          html: "Si el oxígeno hubiera liberado restricciones, esperaríamos una <span class=\"term\">radiación polifilética</span>: distintos grupos bacterianos dando origen independiente a algas, hongos o fagocitos. La evidencia apunta a una <span class=\"term\">radiación monofilética</span>: un solo origen eucariota con estasis prolongada. Los «archezoa» (como <span class=\"person\">Giardia</span>) no son eslabones perdidos: perdieron mitocondrias por evolución reductiva.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Agujero negro evolutivo",
              "description": "Vacío inexplicado entre bacterias morfológicamente simples y eucariotas universalmente complejos.",
              "icon": "🕳️"
            },
            {
              "title": "Genes vs. estructura",
              "description": "La hegemonía del ADN oculta restricciones físico-energéticas independientes del entorno.",
              "icon": "🧬"
            },
            {
              "title": "Gran Evento de Oxidación",
              "description": "Subida de oxígeno atmosférico ~2 400 Ma; no explica por sí sola el origen eucariota.",
              "icon": "🌬️"
            },
            {
              "title": "Monofilia eucariota",
              "description": "Plantas, animales y hongos comparten un único ancestro con casi todos los rasgos complejos.",
              "icon": "🌳"
            }
          ],
        },
        {
          type: 'key',
          html: "La discontinuidad entre bacterias y eucariotas exige <span class=\"key-term\">restricciones estructurales</span>, no solo genes y ambiente.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "¿Qué es lo viviente?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un virus es un asesino calculado que la mayoría de los biólogos no clasificarían como vivo. No tiene metabolismo propio y depende por completo de su huésped. Nosotros también parasitamos el entorno, y sin oxígeno, agua o alimento morimos en minutos. La diferencia con un virus es solo el grado de exigencia del entorno inmediato.",
        },
        {
          type: 'paragraph',
          html: "Hay un continuo entre lo no vivo y lo vivo, y trazar una línea es inútil. La definición de la NASA («sistema químico autosustentable capaz de evolución darwiniana») ignora la dependencia del entorno. Lo que importa es la interrelación entre estructura y entorno. Las esporas bacterianas y los tardígrados resisten deshidratación, radiación y vacío sin metabolizar, porque su estructura molecular es estable.",
        },
        {
          type: 'paragraph',
          html: "La segunda ley de la termodinámica exige que la entropía aumente, pero una espora triturada apenas cambia la entropía total: las membranas lipídicas y las proteínas plegadas liberan calor al formarse, compensando el orden local. <span class=\"person\">Ted Battley</span> midió que destruir una espora no aumenta la entropía global. Vivir, en cambio, requiere flujo continuo de energía para mantener estructuras ordenadas lejos del equilibrio.",
        },
        {
          type: 'paragraph',
          html: "Todas las células vivas usan <span class=\"term\">reacciones redox</span> y <span class=\"term\">acoplamiento quimiosmótico</span>. Bombean protones a través de membranas para generar ATP. <span class=\"person\">Peter Mitchell</span> propuso esta idea en los años sesenta, contra la opinión de la época. La cadena respiratoria y la ATP sintasa son nanomáquinas universales. La fermentación es la única alternativa conocida, pero es menos eficiente. La respiración es universal y la fotosíntesis no lo es.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Quimiosmosis",
              "description": "Gradientes de protones a través de membranas; mecanismo universal de energía celular.",
              "icon": "⚡"
            },
            {
              "title": "ATP",
              "description": "Moneda energética; un humano recicla ~60 g de ATP por día.",
              "icon": "🔋"
            },
            {
              "title": "Redox",
              "description": "Transferencia de electrones; base de respiración y fotosíntesis.",
              "icon": "🧪"
            },
            {
              "title": "Continuo vida/no-vida",
              "description": "Virus, esporas y plásmidos desdibujan fronteras rígidas.",
              "icon": "🦠"
            }
          ],
        },
        {
          type: 'key',
          html: "Vivir es flujo energético continuo mediado por <span class=\"key-term\">gradientes de protones</span>, no solo información genética.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Energía en el origen de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las células canalizan el carbono orgánico como un molino canaliza el agua. Las enzimas confinan las reacciones y maximizan el rendimiento. Antes de las enzimas, crecer costaba muchísimo más. Una célula moderna simple produce <span class=\"num\">40 veces</span> más desecho respiratorio que biomasa nueva. Si faltaban catalizadores, el primer gramo de vida podría haber exigido <span class=\"num\">40 toneladas</span> de subproductos.",
        },
        {
          type: 'paragraph',
          html: "El experimento <span class=\"term\">Miller-Urey</span> (<span class=\"num\">1953</span>), publicado el mismo año que el ADN de Watson y Crick, fijó la imagen de una «sopa primordial» como cuna de la vida. Lane argumenta que esa imagen cegó al campo durante generaciones. La replicación y la selección natural son vitales, pero aislarlas del problema energético distrajo de la pregunta central: ¿de dónde salió el flujo masivo de energía y carbono?",
        },
        {
          type: 'paragraph',
          html: "Muy pocos ambientes naturales cumplen los requisitos: flujo continuo y alto de carbono y energía utilizable a través de catalizadores minerales, microcompartimentado para concentrar productos y ventilar desechos. Los <span class=\"term\">respiraderos hidrotermales alcalinos</span>, formados por serpentinización de olivina con agua y CO₂, encajan. Generan gradientes naturales de protones entre fluidos alcalinos del interior y océanos más ácidos.",
        },
        {
          type: 'paragraph',
          html: "La lista de compras para la vida en estos respiraderos es solo roca, agua y CO₂, tres de las sustancias más ubicuas del cosmos. Lane postula que los gradientes de protones naturales impulsaron el origen de la vida en un entorno casi seguramente común en planetas rocosos húmedos. Eso abre la puerta a una biología más predictiva.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "40×",
              "label": "Desecho respiratorio vs. biomasa en células simples actuales"
            },
            {
              "value": "40 t",
              "label": "Desperdicio energético estimado por 1 g de vida primitiva sin enzimas"
            },
            {
              "value": "3",
              "label": "Sustancias del origen: roca (olivina), agua, CO₂"
            }
          ],
        },
        {
          type: 'key',
          html: "El origen de la vida requiere un <span class=\"key-term\">flujo energético colosal</span> que solo los respiraderos alcalinos pueden haber provisto de forma sostenida.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La emergencia de las células",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El árbol de la vida de Darwin asumía herencia vertical, pero en bacterias la <span class=\"term\">transferencia génica lateral</span> intercambia genes como monedas sueltas. <span class=\"person\">Carl Woese</span> construyó el árbol de los tres dominios con un solo gen (ARN ribosomal), pero ese árbol es engañoso: la mayoría de genes eucariotas con homólogos procariotas provienen de bacterias (~75 %), no de arqueas.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Bill Martin</span> demostró el «árbol desapareciente»: 48 genes universales concuerdan en las puntas y en la raíz (bacterias vs. arqueas), pero ninguno coincide en las ramas profundas internas. No podemos reconstruir con precisión el ancestro común de toda la vida. Lo que sí sabemos es que <span class=\"term\">LUCA</span> dependía de gradientes de protones naturales en respiraderos.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">acetógenos</span> (bacterias) y <span class=\"term\">metanógenos</span> (arqueas) reducen CO₂ con H₂ mediante la vía del acetil-CoA. <span class=\"person\">Rolf Thauer</span> descubrió la <span class=\"term\">bifurcación electrónica</span>: un préstamo energético que usa energía de pasos exergónicos para pagar pasos endergónicos iniciales. Las diferencias en el cableado entre ambos grupos sugieren que la bomba activa de iones surgió dos veces, de forma independiente.",
        },
        {
          type: 'paragraph',
          html: "La dirección del flujo de protones a través de la proteína Ech dividió bacterias y arqueas. Los acetógenos invirtieron el flujo y crearon una bomba. Los metanógenos inventaron una bomba nueva. Solo entonces hubo ventaja en membranas estancas a protones con glicerol fosfolípidos, cada dominio usando el estereoisómero opuesto. Las células libres emergieron del respiradero hacia los océanos abiertos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Árbol desapareciente",
              "description": "48 genes universales: misma raíz, ramas internas discordantes.",
              "icon": "🌳"
            },
            {
              "title": "Bifurcación electrónica",
              "description": "Truco energético de Thauer para reducir CO₂ con H₂.",
              "icon": "⚡"
            },
            {
              "title": "LUCA",
              "description": "Último ancestro común de bacterias y arqueas; vivió de gradientes en respiraderos.",
              "icon": "🦠"
            },
            {
              "title": "Ech",
              "description": "Proteína cuya dirección de flujo de protones explica la divergencia bacterias/arqueas.",
              "icon": "🔄"
            }
          ],
        },
        {
          type: 'key',
          html: "LUCA vivió de <span class=\"key-term\">gradientes naturales de protones</span>. La bomba activa y membranas estancas dividieron bacterias y arqueas.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El origen de las células complejas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Durante <span class=\"num\">2 000 millones</span> de años de «paz bacteriana», los procariontes no produjeron nada tan complejo como un reloj de cuco. Las bacterias y arqueas tienen versatilidad metabólica extraordinaria, pero su volumen celular es aproximadamente <span class=\"num\">15 000 veces</span> menor que el de un eucariota típico. Los genomas bacterianos más grandes rondan <span class=\"num\">12 megabases</span>. Los eucariotas alcanzan <span class=\"num\">100 000 megabases</span> o más.",
        },
        {
          type: 'paragraph',
          html: "Las explicaciones habituales (pérdida de pared celular, cromosomas lineales) fallan porque hay excepciones abundantes. <span class=\"person\">John Maynard Smith</span> desestimaba esas propuestas con cortesía demoledora. La genómica revela que los eucariotas son quimeras: ~75 % de sus genes con homólogos procariotas son bacterianos, ~25 % arqueanos. El huésped era un arquea tipo <span class=\"term\">eocito</span> (superfilo TACK), no una fagocito primitiva.",
        },
        {
          type: 'paragraph',
          html: "La clave es la <span class=\"term\">energía por gen</span>. Lane y Martin calcularon que los eucariotas disponen de hasta <span class=\"num\">200 000 veces</span> más energía por gen que los procariontes. Las bacterias bombean protones a través de su membrana externa y eso limita su superficie energética por unidad de ADN. Solo una <span class=\"term\">endosimbiosis</span>, una bacteria dentro de un arquea, multiplicó la membrana energética interna (mitocondrias) y liberó el techo genómico.",
        },
        {
          type: 'paragraph',
          html: "La selección natural sobre poblaciones infinitas de procariontes durante eones no produce complejidad morfológica si falta la endosimbiosis. El evento fue singular y transformó el paisaje evolutivo. Los eucariotas exploraron tamaño y estructura. Las bacterias exploraron química. No veremos alienígenas hechos de células bacterianas grandes.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "200 000×",
              "label": "Energía por gen: eucariotas vs. procariontes (Lane y Martin)"
            },
            {
              "value": "15 000×",
              "label": "Diferencia típica de volumen celular eucariota vs. procarionte"
            },
            {
              "value": "1",
              "label": "Vez que surgió la complejidad morfológica en la Tierra"
            }
          ],
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">endosimbiosis mitocondrial</span> rompió el techo energético que mantuvo a las bacterias simples durante eones.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Sexo y los orígenes de la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La endosimbiosis fue el comienzo, no el fin. De una bacteria dentro de un arquea hay que llegar a una célula con núcleo, compartimentos internos, citoesqueleto dinámico y sexo. Los intermediarios evolutivos genuinos no sobreviven. Los «archezoa» resultaron derivados, no primitivos. Si la transición hubiera sido lenta, deberían quedar fósiles vivos de etapas parciales, pero no los hay.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Martin</span> y <span class=\"person\">Koonin</span> proponen que la invasión de <span class=\"term\">intrones</span> bacterianos del endosimbionte amenazó con catástrofe de errores en la traducción. El <span class=\"term\">núcleo</span> separó transcripción (lenta, con empalme) de traducción (rápida, en ribosomas). Las membranas lipídicas bacterianas precipitadas al azar alrededor del ADN ofrecieron una barrera imperfecta que la selección refinó en doble membrana con poros.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">sexo</span> recombina genes nucleares dañados por intrones y mutaciones. Los <span class=\"term\">dos sexos</span> filtran mitocondrias defectuosas: la herencia mitocondrial uniparental (materna en animales) evita que mutaciones acumuladas en ambos progenitores arruinen la descendencia. La evolución eucariota fue rápida en población pequeña e genéticamente inestable, comparable al ojo en el Cámbrico (~<span class=\"num\">2 millones</span> de años).",
        },
        {
          type: 'paragraph',
          html: "Todos los eucariotas comparten exactamente los mismos rasgos complejos, lo que implica un cuello de botella estrecho y transición veloz. La endosimbiosis no fue un salto no darwiniano: cambió el paisaje selectivo y luego operó la selección normal. El huésped arquea sufrió una transformación más dramática que sus endosimbiontes.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Hipótesis de intrones",
              "description": "Invasión bacteriana explica origen del núcleo y del empalme.",
              "icon": "🧬"
            },
            {
              "title": "Sexo",
              "description": "Recombinación para reparar genomas nucleares dañados.",
              "icon": "🔀"
            },
            {
              "title": "Dos sexos",
              "description": "Filtrado de calidad mitocondrial; herencia materna.",
              "icon": "♀"
            },
            {
              "title": "Velocidad",
              "description": "Eucariogénesis posible en ~2 Ma tras levantar frenos energéticos.",
              "icon": "⏱️"
            }
          ],
        },
        {
          type: 'key',
          html: "Tras la endosimbiosis, la invasión de intrones forzó <span class=\"key-term\">núcleo, sexo y dos sexos</span> en una transición rápida sin intermedios sobrevivientes.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "El poder y la gloria",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las mitocondrias son mosaicos: la cadena respiratoria combina subunidades codificadas en el genoma mitocondrial y en el nuclear. Los electrones saltan entre centros redox separados por menos de <span class=\"num\">14 ångströms</span> mediante túnel cuántico. Cada <span class=\"num\">1 Å</span> adicional de distancia reduce la velocidad de transferencia ~<span class=\"num\">10 veces</span>. Una mutación que desplace un aminoácido puede ser catastrófica.",
        },
        {
          type: 'paragraph',
          html: "Los genes mitocondriales mutan <span class=\"num\">10–50 veces</span> más rápido que los nucleares y no se recombinan (salvo en el óvulo materno). La evolución «corta de miras» dividió la respiración entre dos genomas que deben mantener precisión atómica. La transferencia de genes al núcleo fue casi universal: solo quedan <span class=\"num\">13</span> genes codificantes en las mitocondrias humanas.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">leyes de potencia</span> biológicas reflejan límites de superficie mitocondrial. El metabolismo escala con la masa elevada a aproximadamente 3/4 (ley de Kleiber). <span class=\"person\">Ursula Mittwoch</span> argumentó durante décadas que el sexo se determina por tasa metabólica y crecimiento, más que por genes específicos. La <span class=\"term\">regla de Haldane</span> (1922) predice que en cruzas híbridas el sexo con mayor demanda metabólica, los machos en mamíferos, sufre más esterilidad o inviabilidad.",
        },
        {
          type: 'paragraph',
          html: "Las enfermedades mitocondriales afectan sobre todo tejidos de alta demanda: cerebro, músculo, retina. La muerte celular por apoptosis se activa cuando la capacidad mitocondrial no cubre la demanda. El epílogo presenta <span class=\"term\">Parakaryon myojinensis</span>, un microbio de ventilas hidrotermales del Pacífico (2010) que podría estar recapitulando la vía hacia la complejidad: grande, con «núcleo» rudimentario y endosimbiontes, pero sin rasgos eucariotas completos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Túnel cuántico",
              "description": "Electrones saltan solo a distancias atómicas; sensibilidad extrema a mutaciones.",
              "icon": "⚛️"
            },
            {
              "title": "Leyes de potencia",
              "description": "Metabolismo, longevidad y tamaño escalan con restricciones energéticas.",
              "icon": "📐"
            },
            {
              "title": "Dos genomas",
              "description": "Coevolución nuclear-mitocondrial bajo selección de función respiratoria.",
              "icon": "🧫"
            },
            {
              "title": "Parakaryon",
              "description": "Posible procarionte con endosimbiontes en vía paralela hacia complejidad.",
              "icon": "🌊"
            }
          ],
        },
        {
          type: 'key',
          html: "La coevolución <span class=\"key-term\">nuclear-mitocondrial</span> explica enfermedad, longevidad, dos sexos y las leyes de escala de la biología.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Agujero negro evolutivo",
    "description": "Vacío sin intermedios entre bacterias simples y eucariotas complejos."
  },
  {
    "title": "Quimiosmosis",
    "description": "Acoplamiento energético por gradientes de protones; universal en la vida."
  },
  {
    "title": "Energía por gen",
    "description": "Métrica que separa procariontes de eucariotas (~200 000× más en estos)."
  },
  {
    "title": "Respiraderos alcalinos",
    "description": "Entorno probable del origen: olivina, agua, CO₂, gradientes H⁺ naturales."
  },
  {
    "title": "LUCA",
    "description": "Último ancestro común de bacterias y arqueas; dependiente de quimiosmosis."
  },
  {
    "title": "Endosimbiosis",
    "description": "Fusión arquea + bacteria; evento singular que habilitó complejidad."
  },
  {
    "title": "Bifurcación electrónica",
    "description": "Préstamo energético para fijar carbono con H₂; clave en acetógenos/metanógenos."
  },
  {
    "title": "Hipótesis de intrones",
    "description": "Invasión bacteriana post-endosimbiosis explica núcleo, sexo y empalme."
  },
  {
    "title": "Leyes de potencia",
    "description": "Escalamiento metabólico (Kleiber) ligado a superficie mitocondrial."
  },
  {
    "title": "Coevolución mitocondrial",
    "description": "Dos genomas deben mantener precisión atómica en la cadena respiratoria."
  }
],
  chronology: [
  {
    "year": "~4 500 Ma",
    "text": "Formación de la Tierra; océanos tempranos según circones."
  },
  {
    "year": "~3 800–3 500 Ma",
    "text": "Primeras evidencias de vida microbiana."
  },
  {
    "year": "~3 200 Ma",
    "text": "Bacterias con casi todas las vías metabólicas actuales."
  },
  {
    "year": "~2 400 Ma",
    "text": "Gran Evento de Oxidación; oxígeno atmosférico."
  },
  {
    "year": "~2 000 Ma",
    "text": "Fin de la estasis bacteriana morfológica; inicio eucariotas."
  },
  {
    "year": "1944",
    "text": "Schrödinger publica <em>What is Life?</em>"
  },
  {
    "year": "1953",
    "text": "Miller-Urey y estructura del ADN (Watson y Crick)."
  },
  {
    "year": "1967",
    "text": "Margulis propone endosimbiosis."
  },
  {
    "year": "1990",
    "text": "Woese publica árbol de tres dominios."
  },
  {
    "year": "1998",
    "text": "Martin predice huésped arquea en origen eucariota."
  },
  {
    "year": "2010",
    "text": "Descubrimiento de Parakaryon myojinensis en ventila del Pacífico."
  }
],
  figures: [
  {
    "name": "Nick Lane",
    "role": "Autor; bioenergética, origen de la vida y evolución eucariota."
  },
  {
    "name": "Peter Mitchell",
    "role": "Quimiosmosis; premio Nobel; fundó el Glynn Institute."
  },
  {
    "name": "Lynn Margulis",
    "role": "Endosimbiosis serial (1967); mitocondrias y cloroplastos."
  },
  {
    "name": "Carl Woese",
    "role": "Tres dominios de la vida; filogenia por ARN ribosomal."
  },
  {
    "name": "Bill Martin",
    "role": "Huésped arquea; energía por gen; árbol desapareciente."
  },
  {
    "name": "Rolf Thauer",
    "role": "Bifurcación electrónica en metanógenos y acetógenos."
  },
  {
    "name": "Martin y Koonin",
    "role": "Hipótesis intrones-invasión y origen del núcleo."
  },
  {
    "name": "Ursula Mittwoch",
    "role": "Sexo determinado por tasa metabólica y crecimiento."
  },
  {
    "name": "J. B. S. Haldane",
    "role": "Regla de Haldane (1922) en híbridos."
  },
  {
    "name": "Erwin Schrödinger",
    "role": "<em>What is Life?</em> (1944); genes y entropía."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La vida es como es porque la energía celular impone leyes físicas, no solo genes.",
  "Una endosimbiosis singular liberó la complejidad; el cosmos probablemente repite la receta.",
  "Sin gradientes de protones no hay predicción posible.",
  "Con ellos, la biología empieza a parecer física aplicada.",
  "El océano profundo aún puede estar escribiendo el siguiente capítulo."
],
    highlight: "La quimiosmosis en respiraderos alcalinos explica por qué la vida compleja surgió una sola vez",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Nick Lane",
    line2: "\"The Vital Question\" · W. W. Norton · 2015",
  },
}
