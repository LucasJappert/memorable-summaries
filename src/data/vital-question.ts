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
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "¿Qué es la vida?"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "¿Qué es lo viviente?"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "La vida como química"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "La vida como información"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El origen de la vida"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "El acontecimiento singular"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Los dos dominios de la vida"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "El origen de la célula eucariota"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "La incorporación de las mitocondrias"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Las leyes de potencia de la biología"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Sexo y muerte"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "El sentido de la vida"
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
      title: "¿Por qué es la vida como es?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hay un <span class=\"term\">agujero negro</span> en el corazón de la biología: no sabemos por qué la vida es como es. Toda la vida compleja en la Tierra comparte un ancestro común que surgió una sola vez en <span class=\"num\">4 000 millones</span> de años — una célula ya tan sofisticada como las nuestras, que transmitió esa complejidad a árboles, abejas y hongos. Las células humanas son prácticamente indistinguibles de las de un hongo al microscopio. Sexo, suicidio celular y senescencia aparecen en formas comparables solo en eucariotas, nunca en bacterias.",
        },
        {
          type: 'paragraph',
          html: "La vida surgió hacia los <span class=\"num\">4 000 millones</span> de años, pero permaneció atrapada en la simplicidad bacteriana más de <span class=\"num\">2 000 millones</span> de años. Plantas, animales, hongos y protistas descienden de un único ancestro hace <span class=\"num\">1 500–2 000 millones</span> de años, sin eslabones perdidos entre la simplicidad morfológica de las bacterias y la complejidad de todo lo demás. Gastamos miles de millones en biomedicina sin entender cómo evolucionaron las piezas de la célula.",
        },
        {
          type: 'paragraph',
          html: "Tres revoluciones moldearon el panorama: la <span class=\"term\">endosimbiosis</span> de <span class=\"person\">Lynn Margulis</span> (<span class=\"num\">1967</span>), el árbol filogenético de <span class=\"person\">Carl Woese</span> (tres dominios) y la genómica moderna, que confirma la predicción de <span class=\"person\">Bill Martin</span> (<span class=\"num\">1998</span>): la célula huésped era un <span class=\"term\">arquea</span> morfológicamente simple que incorporó la bacteria ancestro de las mitocondrias. La clave, según Lane, está en la generación de energía mediante gradientes de protones — la <span class=\"term\">quimiosmosis</span> de <span class=\"person\">Peter Mitchell</span>.",
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
          html: "Los telescopios de <span class=\"term\">SETI</span> en California buscan señales extraterrestres, pero sus preguntas rebotan sobre la biología terrestre: ¿debería la vida usar ondas de radio, carbono, agua u oxígeno? La biología evolutiva conoce la historia molecular, pero predice poco sobre qué partes del relato son contingencia y cuáles leyes físicas. <span class=\"person\">Jacques Monod</span> veía el origen de la vida como accidente. Otros lo consideran inevitable.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Erwin Schrödinger</span>, en <em>What is Life?</em> (<span class=\"num\">1944</span>), propuso que la vida elude localmente la entropía mediante los genes como «cristal aperiódico» portador de código. La era del ADN, iniciada por <span class=\"person\">Crick</span> y <span class=\"person\">Watson</span> (<span class=\"num\">1953</span>), convirtió la biología en ciencia de la información. Los genomas varían enormemente (cebollas y salamandras superan al humano en ADN). Si la información no impone límites estructurales, no podemos predecir la vida en otros planetas.",
        },
        {
          type: 'paragraph',
          html: "La historia temprana de la Tierra (<span class=\"num\">~4 500 millones</span> de años) muestra océanos desde los cristales de circón más antiguos. La vida aparece hacia los <span class=\"num\">3 800–3 500 millones</span> de años. Hacia los <span class=\"num\">3 200 millones</span> de años, las bacterias ya dominaban casi todas las vías metabólicas. La fotosíntesis oxigénica y el <span class=\"term\">Gran Evento de Oxidación</span> (~<span class=\"num\">2 400 millones</span> de años) transformaron el planeta. La versión textbook, oxígeno como «freno liberado» que permitió células complejas por endosimbiosis gradual, es, según Lane, incorrecta.",
        },
        {
          type: 'paragraph',
          html: "Si el oxígeno hubiera liberado restricciones, esperaríamos una <span class=\"term\">radiación polifilética</span>: distintos grupos bacterianos dando origen independiente a algas, hongos o fagocitos. En cambio vemos <span class=\"term\">radiación monofilética</span>: un solo origen eucariota con estasis prolongada y cambios ocasionales. Ni la selección estándar ni la endosimbiosis serial de Margulis predicen la uniformidad interna de todos los eucariotas. Los «archezoa» (como <span class=\"person\">Giardia</span>) no son eslabones perdidos: perdieron mitocondrias por evolución reductiva.",
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
          html: "Los virus son maquinaria molecular letal, pero la mayoría de los biólogos no los clasifica como vivos: carecen de metabolismo propio y dependen del huésped. Plantas, animales y virus parasitan su entorno. La diferencia es cuántos «apoyos» externos necesitan. La definición de la NASA, sistema químico autosustentable capaz de evolución darwiniana, ignora la dependencia del medio.",
        },
        {
          type: 'paragraph',
          html: "Esporas, semillas y <span class=\"term\">tardígrados</span> sobreviven deshidratación, radiación y vacío sin metabolizar. No están «muertos» porque pueden reanudar la vida. La distinción entre vida (estructura) y lo viviente (crecer, proliferar) depende del entorno. Conocemos bien cómo los genes codifican componentes, pero poco sobre cómo las restricciones físicas moldean la evolución celular.",
        },
        {
          type: 'paragraph',
          html: "La segunda ley de la termodinámica exige aumento de entropía, pero destruir una espora apenas altera la entropía total: las membranas lipídicas y las proteínas plegadas liberan calor al formarse, compensando el orden aparente. <span class=\"person\">Schrödinger</span> acertó en que la vida extrae «ordnegativo» del entorno, aunque el orden local cuesta energía al sistema completo.",
        },
        {
          type: 'paragraph',
          html: "Esencialmente toda vida usa <span class=\"term\">quimiosmosis</span>: flujo de protones a través de membranas para sintetizar ATP. El <span class=\"term\">ATP sintasa</span>, motor rotatorio universal en bacterias, arqueas y eucariotas, debería ser tan emblemático del vivir como la doble hélice. <span class=\"person\">Peter Mitchell</span> propuso esto en <span class=\"num\">1961</span> contra décadas de resistencia («guerras ox phos»). Ganó el Nobel en <span class=\"num\">1978</span>. La vida se basa en carbono parcialmente reducido (≈ CH₂O) y en química redox. La pregunta abierta es por qué protones y electrones, no solo química en tubo de ensayo.",
        },
        {
          type: 'key',
          html: "Vivir exige flujo continuo de energía y carbono. La <span class=\"key-term\">proticidad</span> (gradientes de protones) es tan universal como el código genético.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La vida como química",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las vías metabólicas encauzan el flujo de carbono como molinos de agua. Faltando enzimas, el origen de la vida requería órdenes de magnitud más energía. Una célula primitiva sin catalizadores podría necesitar <span class=\"num\">40 toneladas</span> de «desecho» para producir <span class=\"num\">1 gramo</span> de biomasa. El experimento <span class=\"person\">Miller-Urey</span> (<span class=\"num\">1953</span>) reforzó la imagen de la <span class=\"term\">sopa primordial</span>, pero concentrar precursores en océanos abiertos es termodinámicamente inviable.",
        },
        {
          type: 'paragraph',
          html: "La química del origen necesita flujo continuo de carbono reactivo, energía libre, excreción de desechos y compartimentación — propiedades interdependientes desde el principio. Los ambientes de sopa carecen del flujo sostenido que mantiene estructuras disipativas (convección, huracanes, mancha roja de Júpiter): orden sin información genética, pero exigiendo energía incesante.",
        },
        {
          type: 'paragraph',
          html: "El carbono forma enlaces versátiles. El CO₂ actúa como «ladrillo Lego» gaseoso, imposible de replicar con silicio. La respiración moderna separa metabolismo energético y carbono, conectados por ATP. La fermentación existe pero rinde poco. La química redox es versátil: bacterias «comen» rocas, gases o minerales con el mismo equipamiento respiratorio básico.",
        },
        {
          type: 'paragraph',
          html: "Alternativas como la radiación UV o el cianuro generan precursores, pero la UV destruye orgánicos y ninguna vida actual usa cianide como fuente de carbono. Concentrar la sopa por congelación, evaporación o bombardeos de asteroides exige cambios drásticos incompatibles con la estabilidad que define a las células vivas.",
        },
        {
          type: 'key',
          html: "El origen de la vida fue impulsado por <span class=\"key-term\">flujo energético</span>, no por acumulación pasiva de moléculas en un caldo.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La vida como información",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Para muchos investigadores, la vida es información copiable. Sin replicación no hay selección natural. El <span class=\"term\">mundo del ARN</span> propone que el ARN sirvió de plantilla y catalizador antes del ADN y las proteínas. Pero los nucleótidos deben formarse y unirse en un mismo ambiente con energía para activar monómeros — la replicación sin metabolismo agota sus propios bloques de construcción en pocas generaciones.",
        },
        {
          type: 'paragraph',
          html: "Seis propiedades definen toda célula: suministro continuo de carbono, energía libre, catalizadores, excreción, compartimentación y material hereditario. El debate «¿metabolismo o replicación primero?» es estéril: duplicar ARN consume bloques que deben reponerse al mismo ritmo. Los minerales tipo arcilla (Cairns-Smith) catalizan pero no codifican complejidad comparable al ARN.",
        },
        {
          type: 'paragraph',
          html: "La termodinámica favorece cierto espectro de orgánicos (descargas eléctricas, química cósmica, reactores de alta presión), sugiriendo que nucleótidos y aminoácidos podrían formarse convergentemente. No obstante, la información biológica (código genético, ribosomas, transcripción) aparece ya operativa en el ancestro común de bacterias y arqueas (<span class=\"term\">LUCA</span>), sin intermediarios reconstruibles.",
        },
        {
          type: 'paragraph',
          html: "La hegemonía del ADN distrajo de la energía: Crick y Watson eclipsaron a Mitchell en <span class=\"num\">1953</span>, aunque ambos revolucionaron la biología. Comprender el origen exige integrar replicación con flujo químico continuo — la información emerge en ambientes que ya sostienen estructuras disipativas.",
        },
        {
          type: 'key',
          html: "Replicación e información son necesarias, pero insuficientes sin un <span class=\"key-term\">flujo metabólico</span> que las sustente.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El origen de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los <span class=\"term\">respiraderos hidrotermales alcalinos</span> ofrecen flujo continuo de H₂ y CO₂ a través de catalizadores minerales (olivino, pirita) en compartimentos microscópicos de roca porosa — exactamente lo que la sopa primordial no proporciona. La vía del <span class=\"term\">acetil-CoA</span> fija carbono con energía de gradientes naturales de protones y es la más antigua compartida por bacterias y arqueas.",
        },
        {
          type: 'paragraph',
          html: "LUCA, reconstruida por genes universales (~<span class=\"num\">100</span>), ya tenía código genético, ribosomas, ATP sintasa y quimiosmosis, pero membranas, paredes celulares y maquinaria de replicación del ADN difieren radicalmente entre bacterias y arqueas. No encaja en océano abierto. Encaja en respiraderos donde geología y bioquímica se funden sin frontera dura entre planeta vivo y célula viva.",
        },
        {
          type: 'paragraph',
          html: "Solo existen <span class=\"num\">6</span> vías de fijación de carbono. Cinco requieren energía externa. La sexta, acetil-CoA, opera con H₂ + CO₂ en condiciones geológicas de respiraderos alcalinos, donde el pH alcalino interior y el océano ligeramente ácido generan gradientes de protones naturales que podrían haber precedido a la quimiosmosis biológica.",
        },
        {
          type: 'paragraph',
          html: "El árbol filogenético basado en un solo gen (ARN ribosomal) engaña: la transferencia génica lateral en bacterias destruye correlaciones genotipo-fenotipo. El «árbol desapareciente» de Martin muestra que <span class=\"num\">48</span> genes universales concuerdan en separar bacterias y arqueas en la base, pero ninguno reconstruye ramas profundas dentro de cada dominio. LUCA fue quimiosmótica, con información genética, pero sin membrana moderna ni complejos respiratorios actuales.",
        },
        {
          type: 'key',
          html: "La vida probablemente nació en <span class=\"key-term\">respiraderos alcalinos</span> — roca, agua y CO₂, disponibles en miles de millones de planetas.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El acontecimiento singular",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Todos los eucariotas, plantas, animales, algas, hongos, protistas, comparten un ancestro común que surgió <span class=\"term\">una sola vez</span> en la historia terrestre. No hubo múltiples experimentos exitosos de complejidad morfológica en bacterias o arqueas pese a <span class=\"num\">4 000 millones</span> de años, upheavals ambientales y el Gran Evento de Oxidación.",
        },
        {
          type: 'paragraph',
          html: "El último ancestro eucariota común (<span class=\"term\">LECA</span>) ya era una célula «moderna»: núcleo, mitocondrias, citoesqueleto dinámico, sexo, cromosomas lineales y cinco supergrupos que irradian explosivamente. No hay intermediarios fósiles ni genéticos genuinos entre bacterias y eucariotas. Los archezoa son eucariotas regresivos, no eslabones perdidos.",
        },
        {
          type: 'paragraph',
          html: "Tanto la selección darwiniana estándar como la endosimbiosis serial de Margulis predicen orígenes polifiléticos con bolsas mixtas de organelas. La filogenética de genomas completos muestra lo contrario: monofilia estricta y catálogo compartido de rasgos elaborados (suicidio celular, senescencia, dos sexos) ausentes en procariotas.",
        },
        {
          type: 'paragraph',
          html: "La endosimbiosis no es un salto no darwiniano: es un evento singular que transformó el paisaje selectivo. Después todo fue evolución gradual. La rareza del cruce explica por qué la complejidad morfológica no se repitió: la barrera entre procariota y eucariota es un vacío ecológico y genético que la naturaleza «aborrece» pero no llena.",
        },
        {
          type: 'key',
          html: "La vida compleja es un <span class=\"key-term\">singleton</span> evolutivo: un solo origen, sin paralelos bacterianos ni arqueanos.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Los dos dominios de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Carl Woese</span> comparó el gen del ARN ribosomal (<span class=\"num\">1960s–70s</span>) y descubrió un tercer dominio, <span class=\"term\">Archaea</span>, tan distante de bacterias como de eucariotas en secuencia, aunque morfológicamente idénticos a bacterias. Su árbol de tres dominios equiparaba bacterias, arqueas y eucariotas como linajes primarios independientes.",
        },
        {
          type: 'paragraph',
          html: "La revolución genómica invierte parte de ese cuadro: eucariotas son quimeras — ~<span class=\"num\">75 %</span> de genes con homólogos procariotas provienen de bacterias, ~<span class=\"num\">25 %</span> de arqueas. El árbol de Woese refleja un solo gen, no la historia celular completa. Margulis tenía razón sobre mitocondrias y cloroplastos. Estaba equivocada sobre cilios, núcleo y endosimbiosis serial masiva.",
        },
        {
          type: 'paragraph',
          html: "Bacterias y arqueas comparten entornos globales pero mantienen membranas, paredes y replicación del ADN fundamentalmente distintas pese a transferencia génica lateral. Ninguna explicación convencional (LUCA con todo duplicado, o arqueas extremófilas que reemplazaron sistemas bacterianos) resuelve el patrón.",
        },
        {
          type: 'paragraph',
          html: "La genómica confirma que la célula huésped del origen eucariota era un arquea sin fagocitosis, no una ameba predadora. El huésped carecía de casi toda la complejidad eucariota. La adquirió después de incorporar la bacteria que se convertiría en mitocondria.",
        },
        {
          type: 'key',
          html: "Bacterias y arqueas son dominios <span class=\"key-term\">bioquímicamente divergentes</span>. Los eucariotas fusionaron ambos en un solo evento.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "El origen de la célula eucariota",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">hipótesis del hidrógeno</span> (Martin y Müller, <span class=\"num\">1998</span>) propone un arquea metanógeno que consumía H₂ + CO₂ y un endosimbionte bacteriano que le suministraba H₂. La simbiosis explica el mosaico génico eucariota y predice que no existió eucariota sin mitocondrias. Todas las predicciones han sido confirmadas por genómica en dos décadas.",
        },
        {
          type: 'paragraph',
          html: "Los eucariotas son quimeras genéticas: miles de genes bacterianos y arqueanos integrados en vías bioquímicas compuestas (p. ej. fermentación). Parece haber una ventana evolutiva breve de transferencias masivas seguida de <span class=\"num\">1 500 millones</span> de años de relativa quietud génica entre procariotas y eucariotas — patrón incompatible con docenas de endosimbiosis, pero coherente con una sola.",
        },
        {
          type: 'paragraph',
          html: "El huésped arqueano no podía fagocitar. La incorporación del endosimbionte requirió otro mecanismo (p. ej. predación fallida, parasitismo o fusión). Lo crucial: la simbiosis rompió restricciones energéticas que mantenían a procariotas pequeños y genomas limitados durante eones.",
        },
        {
          type: 'paragraph',
          html: "Alternativas como pérdida de pared celular, cromosomas lineales o predación habilitadora (Cavalier-Smith) tienen contraejemplos abundantes: bacterias L-form sin pared, arqueas sin pared, bacterias con cromosomas lineales — ninguno evoluciona complejidad eucariota. <span class=\"person\">John Maynard Smith</span> descartaba esas explicaciones como insuficientes.",
        },
        {
          type: 'key',
          html: "Un arquea + una bacteria = origen eucariota. La <span class=\"key-term\">hipótesis del hidrógeno</span> es la explicación más parsimoniosa y mejor corroborada.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La incorporación de las mitocondrias",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las mitocondrias derivan de <span class=\"term\">α-proteobacterias</span>. Conservan genoma propio (<span class=\"num\">13</span> genes en humanos, de miles originales) y sintetizan la mayor parte del ATP celular. Margulis demostró la endosimbiosis en los <span class=\"num\">1980</span>. Hoy sabemos que todos los eucariotas, incluidos aparentes excepciones, conservan orgánulos derivados de mitocondrias (hidrogenosomas, mitosomas).",
        },
        {
          type: 'paragraph',
          html: "La transferencia génica del endosimbionte al núcleo reemplazó la mayoría de genes mitocondriales. El huésped integró vías bacterianas y arqueanas en redes metabólicas híbridas. La cloroplasta llegó después, solo en algas y plantas. Las mitocondrias son universales y anteriores a toda complejidad eucariota.",
        },
        {
          type: 'paragraph',
          html: "La endosimbiosis explica el patrón de ~<span class=\"num\">25</span> grupos bacterianos aparentemente contribuyentes: provienen de una población ancestral de la bacteria-mitocondria que luego diversificó por transferencia lateral entre bacterias libres. Lo mismo aplica al arquea huésped con <span class=\"num\">7–8</span> grupos arqueanos reflejados.",
        },
        {
          type: 'paragraph',
          html: "Sin endosimbiosis, la selección sobre poblaciones infinitas de procariotas nunca produce células complejas: la fusión de ramas filogenéticas (no bifurcación) es el único camino conocido. La relación íntima huésped-endosimbionte impone conflictos de selección que explican la rareza del evento.",
        },
        {
          type: 'key',
          html: "Las <span class=\"key-term\">mitocondrias</span> no turbo cargaron un eucariota ya hecho: su adquisición fue el origen mismo de la vida compleja.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Las leyes de potencia de la biología",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Procariotas tienen ~<span class=\"num\">15 000</span> veces menos volumen celular que eucariotas medios. Sus genomas más grandes rondan <span class=\"num\">12 Mb</span> frente a miles de Mb eucariotas. Pese a virtuosismo bioquímico, bacterias y arqueas no cambiaron morfológicamente en <span class=\"num\">4 000 millones</span> de años. La restricción es energética: <span class=\"term\">energía por gen</span>.",
        },
        {
          type: 'paragraph',
          html: "Escalar una bacteria al tamaño eucariota aumenta el área de membrana ~<span class=\"num\">625</span> veces pero el volumen ~<span class=\"num\">15 000</span> veces. La síntesis de ATP depende de la membrana. El coste proteico escala con el volumen. Careciendo de un sistema de transporte intracelular sofisticado, una bacteria gigante necesitaría miles de copias del genoma (<span class=\"term\">poliploidia extrema</span>) solo para mantener energía por gen constante.",
        },
        {
          type: 'paragraph',
          html: "Las bacterias gigantes <span class=\"person\">Epulopiscium</span> (~<span class=\"num\">200 000</span> genomas) y <span class=\"person\">Thiomargarita</span> (~<span class=\"num\">18 000</span>) confirman la predicción: genomas periféricos junto a la membrana, interior metabólicamente inerte. Tienen ~<span class=\"num\">5 000</span> veces menos energía por gen que eucariotas — exactamente lo predicho.",
        },
        {
          type: 'paragraph',
          html: "Las mitocondrias resuelven el problema: genomas bacterianos reducidos dentro de una célula grande producen ATP localmente sin multiplicar genomas completos en la periferia. Un eucariota obtiene ~<span class=\"num\">100 000</span> veces más energía por gen que una bacteria del mismo tamaño. Las leyes de potencia de superficie/volumen impiden la complejidad procariota. Solo la endosimbiosis la liberó.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~5 000×",
              "label": "Más energía por gen en eucariotas vs. bacterias (genoma igualado)"
            },
            {
              "value": "~100 000×",
              "label": "Más energía por gen eucariota vs. bacteria gigante escalada"
            },
            {
              "value": "~15 000×",
              "label": "Ratio volumen medio eucariota / bacteria"
            }
          ],
        },
        {
          type: 'key',
          html: "La complejidad requiere <span class=\"key-term\">energía por gen</span> masiva. Solo mitocondrias endosimbióticas la hacen posible.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Sexo y muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Después de la endosimbiosis, los eucariotas acumularon en poco tiempo geológico (posiblemente ~<span class=\"num\">2 millones</span> de años) núcleo, sistemas de membranas, citoesqueleto y sexo. Son rasgos universales ausentes en procariotas. La uniformidad eucariota sugiere población pequeña, inestable, con reproducción sexual que mezcla rasgos y evita divergencia.",
        },
        {
          type: 'paragraph',
          html: "Los eucariotas tienen <span class=\"term\">genes en trozos</span> (intrones) empalados por el esplicosoma. Los precursores son intrones móviles bacterianos (grupo II) transferidos desde el endosimbionte. La invasión de intrones elevó la tasa de mutación y exigió recombinación genómica completa, sexo total, frente a transferencia génica lateral, insuficiente para genomas grandes.",
        },
        {
          type: 'paragraph',
          html: "El sexo rompe la <span class=\"term\">interferencia selectiva</span> de la reproducción clonal: permite que la selección «vea» genes individualmente. Dos sexos surgen para mantener la calidad mitocondrial: el citoplasma (y mitocondrias) se hereda de la madre. El sexo filtra compatibilidad entre genomas nuclear y mitocondrial. La línea germinal inmortal contrasta con el cuerpo mortal somático.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">apoptosis</span>, muerte celular programada, emerge de la fisiología respiratoria: genomas nuclear y mitocondrial desajustados ralentizan el flujo de electrones, generan radicales libres, liberan citocromo c y colapsan el potencial de membrana. Este mecanismo, conservado en plantas y levaduras, elimina células con genomas incompatibles — base evolutiva del suicidio celular y la senescencia.",
        },
        {
          type: 'key',
          html: "Sexo, dos sexos y muerte programada son <span class=\"key-term\">predicciones</span> de la simbiosis mitocondrial, no accidentes históricos.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "El sentido de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las cadenas respiratorias mitocondriales son mosaicos de subunidades codificadas en dos genomas que deben coincidir a escala de ångstroms: un aumento de <span class=\"num\">1 Å</span> entre centros redox reduce ~<span class=\"num\">10 veces</span> la transferencia de electrones por tunelamiento cuántico. Genes mitocondriales mutan <span class=\"num\">10–50</span> veces más rápido que los nucleares y no recombinan cada generación.",
        },
        {
          type: 'paragraph',
          html: "La coevolución mitonuclear explica enfermedades mitocondriales, apoptosis en desarrollo embrionario y el ~<span class=\"num\">40 %</span> de abortos espontáneos tempranos posiblemente bioenergéticos. Aves y murciélagos, alta demanda aeróbica, tienen umbrales bajos de muerte celular: mitocondrias casi perfectas, baja fecundidad, longevidad extendida (palomas ~<span class=\"num\">30</span> años vs. ratas ~<span class=\"num\">3–4</span>).",
        },
        {
          type: 'paragraph',
          html: "Existe un trade-off evolutivo predecible: fecundidad y adaptabilidad vs. capacidad aeróbica y riesgo de enfermedad. Especies con umbrales altos toleran más fuga de radicales libres, son más fértiles pero más propensas a patologías mitocondriales. Todo emerge de la necesidad de dos genomas para sostener células grandes.",
        },
        {
          type: 'paragraph',
          html: "El epílogo menciona <span class=\"person\">Parakaryon myojinensis</span>, microbio de respiraderos profundos que podría estar repitiendo un camino paralelo hacia la complejidad. La vida en el universo probablemente también será quimiosmótica si surge en respiraderos alcalinos de planetas rocosos con agua y CO₂ — quizá ~<span class=\"num\">40 000 millones</span> de candidatos solo en la Vía Láctea.",
        },
        {
          type: 'key',
          html: "El «sentido» biológico es energético: la vida compleja paga por su grandeza con <span class=\"key-term\">compromisos</span> entre vigor, fertilidad, enfermedad y muerte.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Quimiosmosis",
    "description": "Acoplamiento de respiración y síntesis de ATP mediante gradientes de protones a través de membranas; universal en la vida."
  },
  {
    "title": "Proticidad",
    "description": "Flujo de protones como «electricidad biológica»; mecanismo energético propuesto por Peter Mitchell (1961)."
  },
  {
    "title": "Agujero negro evolutivo",
    "description": "Vacío entre simplicidad bacteriana persistente y complejidad eucariota monofilética sin intermediarios."
  },
  {
    "title": "Hipótesis del hidrógeno",
    "description": "Origen eucariota por simbiosis arquea metanógeno + bacteria productora de H₂ (Martin & Müller, 1998)."
  },
  {
    "title": "LUCA / LECA",
    "description": "Último ancestro común universal de toda vida / de todos los eucariotas; LECA ya era célula compleja."
  },
  {
    "title": "Energía por gen",
    "description": "Métrica que limita el tamaño procariota; eucariotas ganan ~10⁴–10⁵ veces más por gen gracias a mitocondrias."
  },
  {
    "title": "Endosimbiosis",
    "description": "Incorporación permanente de una célula dentro de otra; evento singular en el origen eucariota."
  },
  {
    "title": "Respiraderos alcalinos",
    "description": "Entorno propuesto para el origen de la vida: flujo geoquímico continuo, compartimentos minerales, H₂ + CO₂."
  },
  {
    "title": "Quimera genómica",
    "description": "Eucariotas combinan genes de ancestros bacterianos (~75 %) y arqueanos (~25 %)."
  },
  {
    "title": "Intrones móviles",
    "description": "Parásitos genéticos del endosimbionte que forzaron empalme, genomas grandes y evolución del sexo."
  },
  {
    "title": "Apoptosis",
    "description": "Muerte celular programada derivada de fallos respiratorios por incompatibilidad mitonuclear."
  },
  {
    "title": "Singleton evolutivo",
    "description": "La vida morfológicamente compleja surgió una sola vez en 4 000 millones de años."
  }
],
  chronology: [
  {
    "year": "1677",
    "text": "Antony van Leeuwenhoek describe bacterias y distingue protistas complejos de «animalejos» microscópicos."
  },
  {
    "year": "1837",
    "text": "Darwin bosqueja el árbol de la vida en su cuaderno, un año después del Beagle."
  },
  {
    "year": "1944",
    "text": "Erwin Schrödinger publica *What is Life?* — genes como código y el problema de la entropía."
  },
  {
    "year": "1953",
    "text": "Miller-Urey sintetiza aminoácidos; Crick y Watson publican la estructura del ADN."
  },
  {
    "year": "1961",
    "text": "Peter Mitchell propone el acoplamiento quimiosmótico en *Nature*."
  },
  {
    "year": "1967",
    "text": "Lynn Margulis (Sagan) publica la teoría de endosimbiosis para el origen de mitocondrias."
  },
  {
    "year": "1977–90",
    "text": "Carl Woese define Archaea y los tres dominios mediante ARN ribosomal."
  },
  {
    "year": "1978",
    "text": "Mitchell recibe el Nobel de Química por la quimiosmosis."
  },
  {
    "year": "1995",
    "text": "Maynard Smith y Szathmáry formalizan transiciones evolutivas mayores incluyendo eucariogénesis."
  },
  {
    "year": "1998",
    "text": "Bill Martin y Miklós Müller publican la hipótesis del hidrógeno en *Nature*."
  },
  {
    "year": "2010",
    "text": "Descubrimiento de Parakaryon myojinensis en respiraderos del Pacífico profundo."
  },
  {
    "year": "2015",
    "text": "Nick Lane publica *The Vital Question* — síntesis energética del origen y evolución de la vida compleja."
  }
],
  figures: [
  {
    "name": "Nick Lane",
    "role": "Autor · bioquímico · defensor de la bioenergética evolutiva"
  },
  {
    "name": "Peter Mitchell",
    "role": "Quimiosmosis · gradientes de protones · Nobel 1978"
  },
  {
    "name": "Bill Martin",
    "role": "Hipótesis del hidrógeno · origen quimérico de eucariotas"
  },
  {
    "name": "Lynn Margulis",
    "role": "Endosimbiosis mitocondrial y cloroplastídea · serial endosymbiosis (parcialmente errónea)"
  },
  {
    "name": "Carl Woese",
    "role": "Tres dominios de la vida · filogenética molecular"
  },
  {
    "name": "Erwin Schrödinger",
    "role": "*What is Life?* · información genética y entropía"
  },
  {
    "name": "Jacques Monod",
    "role": "*Chance and Necessity* · contingencia vs. necesidad en el origen"
  },
  {
    "name": "Antony van Leeuwenhoek",
    "role": "Primeras observaciones de bacterias y protistas (1670s)"
  },
  {
    "name": "Miklós Müller",
    "role": "Coautor de la hipótesis del hidrógeno con Martin"
  },
  {
    "name": "Tom Cavalier-Smith",
    "role": "Archezoa · fagocitosis como clave eucariota (vista textbook refutada)"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La vida es quimiosmótica desde el origen: protones, membranas y carbono reducido.",
  "Las bacterias exploraron el metabolismo, pero una sola endosimbiosis rompió el techo energético y creó la quimera eucariota.",
  "Sexo, dos sexos, apoptosis y enfermedad son predicciones de dos genomas compartiendo una cadena respiratoria.",
  "En otros planetas rocosos con agua, la misma química de respiraderos alcalinos podría repetir el guion.",
  "La cuestión vital tiene respuesta bioenergética, no solo informacional."
],
    highlight: "La energía por gen — no solo los genes — dicta por qué la vida compleja surgió una vez y por qué es como es",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Nick Lane",
    line2: "\"The Vital Question\" · W. W. Norton & Company · 2015",
  },
}
