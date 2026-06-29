import type { BookSummary } from '../types/book'

export const determined: BookSummary = {
  slug: "determined",
  meta: {
    title: "Determined: A Science of Life Without Free Will",
    subtitle: "¿Tortugas hasta el fondo o una tortuga flotando en el aire?",
    author: "Robert M. Sapolsky",
    meta: [
      "📖 2023 · Penguin Press",
      "✍️ Neurobiólogo · Stanford · babuinos en Kenia",
    ],
    titleEs: "Determinado: Una ciencia de la vida sin libre albedrío",
  },
  toc: [
  {
    "id": "cap1",
    "num": "01",
    "label": "Tortugas hasta el fondo"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Los tres minutos finales de una película"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "¿De dónde viene la intención?"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Voluntad de hierro: mito del grit"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Introducción al caos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "¿Tu libre albedrío es caótico?"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Introducción a la complejidad emergente"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "¿Tu libre albedrío emerge?"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Introducción a la indeterminación cuántica"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "¿Tu libre albedrío es aleatorio?"
  },
  {
    "id": "interlude",
    "num": "10.5",
    "label": "Interludio"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "¿Nos descontrolaremos?"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Engranajes antiguos: ¿cómo cambia?"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Ya lo hicimos antes"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "El placer del castigo"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Si mueres pobre"
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
      id: "cap1",
      num: "01",
      title: "Tortugas hasta el fondo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Robert M. Sapolsky</span> abre con la anécdota de <span class=\"person\">William James</span> y la anciana que cree que el mundo descansa sobre tortugas infinitas. Burlarse de ella es fácil; lo absurdo es creer que <em>alguna</em> tortuga flota sin causa.",
        },
        {
          type: 'paragraph',
          html: "Cada comportamiento —heroico o vil— tiene causas previas: neuronas del segundo anterior, pensamientos, hormonas, meses de experiencia, adolescencia, infancia, feto, genes, cultura, ecología y evolución. No hay <span class=\"term\">causa sin causa</span>. Somos «suerte biológica y ambiental acumulada» sobre la que no tuvimos control.",
        },
        {
          type: 'paragraph',
          html: "Negar libre albedrío implica: no hay culpa retributiva merecida; el castigo solo por contener peligro; el elogio como herramienta instrumental, no merecimiento. La mayoría cree en libre albedrío cuando importa —filósofos (~<span class=\"num\">90 %</span>), jueces, padres, incluso primates atribuyen más culpa a conductores humanos que a coches autónomos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tortugas",
              "description": "Causalidad determinista en cadena, sin excepción flotante.",
              "icon": "🐢"
            },
            {
              "title": "Disciplinas entrelazadas",
              "description": "Genética, neurociencia, endocrina, desarrollo: un solo cuerpo de conocimiento.",
              "icon": "🔗"
            },
            {
              "title": "Incompatibilismo duro",
              "description": "Determinismo → no hay libre albedrío → no hay desierto moral básico.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "Ninguna disciplina sola falsifica el libre albedrío; todas juntas no dejan grieta alguna.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Los tres minutos finales de una película",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Una escena nocturna en un aeródromo: un civil dispara a un militar; un policía no lo detiene. Sin contexto, parece corrupción y asesinato frío. Es el final de <em>Casablanca</em> —la intención microscópica no basta para entender la acción.",
        },
        {
          type: 'paragraph',
          html: "Décadas de estudios <span class=\"term\">libetianos</span> (<span class=\"person\">Benjamin Libet</span>, <span class=\"num\">1983</span>): potencial de preparación ~<span class=\"num\">300 ms</span> antes de sentir decidir; fMRI hasta <span class=\"num\">10 s</span> antes (<span class=\"person\">Haynes</span>); neuronas individuales ~<span class=\"num\">80 %</span> precisión (<span class=\"person\">Itzhak Fried</span>). Compatibilistas contraatacan: tareas artificiales, predicción ~<span class=\"num\">60 %</span>, «free won't» como veto.",
        },
        {
          type: 'paragraph',
          html: "Sapolsky concluye: aunque Libet no mate el libre albedrío, es <em>irrelevante</em>. Falta la pregunta central: ¿de dónde vino la intención? Podemos hacer lo que intendemos, nunca intendemos lo que intendimos. Juzgar solo el presente —como <span class=\"person\">Daniel Dennett</span> diciendo que «la suerte se promedia con el tiempo»— es miopía moral.",
        },
        {
          type: 'key',
          html: "Estudiar los últimos segundos antes del acto es ver solo el final de la película.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "¿De dónde viene la intención?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Este capítulo recorre la cadena causal completa: desde estímulos sensoriales y memoria hasta circuitos frontales, historial de estrés, epigenética, genes y cultura. La intención consciente es un epifenómeno tardío en una cascada mucho más larga.",
        },
        {
          type: 'paragraph',
          html: "Experimentos de «priming» (p. ej. la palabra «ocean» inclina a elegir «Tide») muestran influencias inconscientes; incluso resistir el priming es estar determinado por reconocerlo. Meta-consciencia no restaura libertad.",
        },
        {
          type: 'paragraph',
          html: "El desafío permanece: mostrar una neurona causa de comportamiento independiente de toda biología previa — nadie lo ha hecho.",
        },
        {
          type: 'key',
          html: "La intención es el último eslabón visible de una cadena que empezó mucho antes del acto.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Voluntad de hierro: mito del grit",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Algunos compatibilistas postergan libre albedrío al pasado: «tuviste tiempo de convertirte en otra persona». <span class=\"person\">Neil Levy</span> resume esa postura; Sapolsky responde: el <em>was</em> fue alguna vez <em>now</em> — también determinado.",
        },
        {
          type: 'paragraph',
          html: "Mito central: «lo que te dieron» vs. «lo que haces con ello» (grit, resistir impulsos). Caso <span class=\"person\">Jerry Sandusky</span>: <span class=\"person\">James Cantor</span> admite que no se elige ser pedófilo, pero sí «elegir no ser abusador» — dualismo falso.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">corteza prefrontal</span> (PFC) madura hacia mediados de los veinte; regula impulsos, reglas reversibles, control social. Ambos lados de la tabla (atributos biológicos y «carácter») son biología + entorno.",
        },
        {
          type: 'key',
          html: "Willpower no es polvo de hadas sobre neuronas: es PFC moldeada por genes y experiencia.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Introducción al caos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El universo lineal permitía predecir <span class=\"term\">X+1</span> desde <span class=\"term\">X</span> con error proporcional —base del <span class=\"term\">reduccionismo</span>. <span class=\"person\">Edward Lorenz</span> (<span class=\"num\">1963</span>) descubrió lo contrario: redondear <span class=\"num\">0,506127</span> a <span class=\"num\">0,506</span> desvió totalmente el clima simulado.",
        },
        {
          type: 'paragraph',
          html: "Tres o más cuerpos interactuando (problema de tres cuerpos) vuelven impredecible el futuro: <span class=\"term\">dependencia sensible de condiciones iniciales</span> y <span class=\"term\">efecto mariposa</span>. Aun así, el sistema es determinista —caótico, no aleatorio.",
        },
        {
          type: 'paragraph',
          html: "Automatons celulares (reglas locales tipo Conway) muestran patrones complejos imposibles de predecir reductivamente. No hay libre albedrío en esas grietas.",
        },
        {
          type: 'key',
          html: "Caos = determinismo + impredecibilidad práctica, no libertad.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "¿Tu libre albedrío es caótico?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Algunos buscan libre albedrío en sistemas caóticos biológicos: comportamiento complejo emergente de reglas simples. Sapolsky rechaza la inferencia: impredecibilidad no es autonomía.",
        },
        {
          type: 'paragraph',
          html: "El cerebro puede ser sensible a condiciones iniciales, pero sigue siendo máquina causal. Confundir «no puedo predecir» con «nadie causó» es error lógico repetido en debates filosóficos.",
        },
        {
          type: 'key',
          html: "Caos no inserta un agente libre en la ecuación.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Introducción a la complejidad emergente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"term\">Emergencia</span>: propiedades del conjunto (húmedo, vivo, consciente) que no aparecen en piezas aisladas. Las interacciones no lineales producen patrones nuevos —flocking, mercados, mente.",
        },
        {
          type: 'paragraph',
          html: "Compatibilistas como <span class=\"person\">Michael Gazzaniga</span> ubican responsabilidad en el «nivel social», no en neuronas. Sapolsky: la socialidad también es producto biológico; declararla libre por convención no la hace causa sui.",
        },
        {
          type: 'key',
          html: "Emergencia explica novedad, no exoneración.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "¿Tu libre albedrío emerge?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Argumento: la mente «emerge» del cerebro, luego controla al cerebro —círculo que salvaría agencia. Sapolsky: es circular; niveles superiores siguen siendo físicos.",
        },
        {
          type: 'paragraph',
          html: "Consciencia puede ser necesaria para ciertas conductas flexibles, pero no introduce causalidad acausal. El compatibilismo social repite el truco de cambiar de nivel sin escapar determinismo.",
        },
        {
          type: 'key',
          html: "Emerger no es flotar: sigue siendo tortugas.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Introducción a la indeterminación cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mecánica cuántica introduce genuina indeterminación en partículas. ¿Rescata libre albedrío? Laplace estaba incompleto; el universo no es billar clásico.",
        },
        {
          type: 'paragraph',
          html: "Mutaciones por rayos cósmicos ilustran azar en evolución, pero escala subatómica rara vez altera decisiones humanas macroscópicas. Usar cuántica para moral es mezclar niveles de análisis.",
        },
        {
          type: 'key',
          html: "Indeterminación cuántica ≠ elección responsable.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "¿Tu libre albedrío es aleatorio?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si decisiones fueran aleatorias cuánticas, serían suerte, no «yo» eligiendo. <span class=\"person\">Robert Kane</span> propuso «Self-Forming Actions» en momentos de crisis — Sapolsky las disuelve en biología igual que impulsos ordinarios.",
        },
        {
          type: 'paragraph',
          html: "Azar y determinismo son las únicas opciones; ninguna produce el libre albedrío que la gente cree tener.",
        },
        {
          type: 'key',
          html: "Randomness no es agency.",
        },
      ],
    },
    {
      id: "interlude",
      num: "10.5",
      title: "Interludio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Breve pausa narrativa en el libro: diálogo interno («my brain: click them / me: why? / my brain: you gotta») ilustra la dissociación entre impulsos neuronales y narrativa consciente de control.",
        },
        {
          type: 'paragraph',
          html: "Refuerza que la voz que cree decidir llega después de procesos subterráneos — tono lúdico antes de preguntar si negar libre albedrío desata el caos social.",
        },
        {
          type: 'key',
          html: "La conversación cerebro-yo resume el libro en tres líneas.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "¿Nos descontrolaremos?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Temor clásico: sin libre albedrío, todos «correrían amok». Estudios de <span class=\"person\">Katherine Vohs</span>: leer a <span class=\"person\">Francis Crick</span> sobre determinismo aumenta trampa, agresión con salsa picante, reduce gratitud —pero efectos pequeños y replicación mixta.",
        },
        {
          type: 'paragraph',
          html: "Meta-análisis <span class=\"num\">2022</span> (~<span class=\"num\">145</span> experimentos): manipulaciones reducen creencia en libre albedrío sin efecto consistente en ética. Paralelo con ateísmo: la gente teme inmoralidad atea, pero observando conducta real, diferencias desaparecen al controlar edad, sexo, red social.",
        },
        {
          type: 'paragraph',
          html: "Priming religioso mejora prosocialidad en creyentes; priming secular («deber cívico») hace lo mismo en ateos. Valores distintos, decencia comparable cuando se activan.",
        },
        {
          type: 'key',
          html: "Negar libre albedrío no convierte automáticamente a la gente en jerks de laboratorio.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Engranajes antiguos: ¿cómo cambia?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Determinismo no implica estasis: cerebros cambian, comportamientos cambian. Plasticidad, terapia, hormonas, entorno —todo causal, nada libre.",
        },
        {
          type: 'paragraph',
          html: "Sapolsky revisa mecanismos de cambio (extinción, aprendizaje, intervención social) compatibles con incompatibilismo. La pregunta «¿puede cambiar?» es distinta de «¿puede elegir libremente cambiar?».",
        },
        {
          type: 'key',
          html: "Un mundo determinista puede ser un mundo donde las personas se transforman.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Ya lo hicimos antes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Precedentes históricos de abandonar ideas morales basadas en fantasía: fin de brujería como crimen real, avances en psiquiatría, abolición progresiva de castigos corporales.",
        },
        {
          type: 'paragraph',
          html: "Sociedades funcionan sin creer en brujas poseídas; pueden reorientarse hacia cuarentena médica en lugar de retribución. Cambio radical de marco es posible — ya ocurrió.",
        },
        {
          type: 'key',
          html: "Rechazar libre albedrío no es sin precedente cultural.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "El placer del castigo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "«Reforma» de sistemas basados en tonterías no basta — brujas con glándulas lagrimales atrofiadas siguen siendo brujas en el marco. Retribución disfrutada: masacre de leprosos (<span class=\"num\">1321</span>), ejecución de <span class=\"person\">Damiens</span> (<span class=\"num\">1757</span>), último ahorcamiento público de <span class=\"person\">Rainey Bethea</span> (<span class=\"num\">1936</span>).",
        },
        {
          type: 'paragraph',
          html: "Modelos alternativos: comisiones de verdad y reconciliación (Sudáfrica), justicia restaurativa — útiles pero aún asumen culpa libre. <span class=\"term\">Cuarentena</span> (<span class=\"person\">Derk Pereboom</span>, <span class=\"person\">Gregg Caruso</span>): contener peligro como aislar enfermedad, mínima restricción, atacar determinantes sociales.",
        },
        {
          type: 'paragraph',
          html: "Escandinavia (p. ej. Noruega): más «confort» carcelario, menos reincidencia, costo social menor que EE. UU. El placer de castigar —evolución de normas de cooperación— puede sabotear el cambio.",
        },
        {
          type: 'key',
          html: "Retribución satisface emociones antiguas; cuarentena protege sin merecer odio.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Si mueres pobre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "No hay «por qué» más allá de «porque lo anterior». Universo indiferente; mecanismos de <span class=\"term\">terror management</span> ante muerte y falta de sentido. Compatibilistas a veces defienden libre albedrío porque «sería un downer» sin él (<span class=\"person\">Stephen Cave</span>, <span class=\"num\">2016</span>).",
        },
        {
          type: 'paragraph',
          html: "Deprimidos estiman control con más precisión que otros —«más tristes pero más sabios». Verdad puede ser estrés según timing; aun así Sapolsky defiende enfrentarla. Implicaciones: menos auto-bullying por obesidad, TDAH, bipolaridad cuando se entiende biología.",
        },
        {
          type: 'paragraph',
          html: "Graduado vs. basurero intercambiando genes e infancia — determinismo puro. Si la conclusión te parece liberatoria, probablemente fuiste afortunado. Ciencia «liberatoria» sin lengua en mejilla: entender causas reduce estigma y puede mejorar política.",
        },
        {
          type: 'key',
          html: "Sin libre albedrío no hay mérito absoluto ni culpa absoluta — hay causas, contención y compasión posible.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Incompatibilismo duro",
    "description": "Determinismo universal incompatible con libre albedrío y desierto moral."
  },
  {
    "title": "Tortugas",
    "description": "Metáfora de causas en cadena sin causa flotante."
  },
  {
    "title": "Libet / readiness potential",
    "description": "Actividad cerebral antes de la sensación de decidir."
  },
  {
    "title": "Grit falso",
    "description": "Creer que carácter escapa a biología del PFC."
  },
  {
    "title": "Caos determinista",
    "description": "Impredecible pero causal; no es libertad."
  },
  {
    "title": "Emergencia",
    "description": "Propiedades nuevas del sistema sin agente libre."
  },
  {
    "title": "Cuarentena",
    "description": "Modelo penal: contener peligro, no castigar merecidamente."
  },
  {
    "title": "Suerte constitutiva",
    "description": "Genes, feto, infancia, cultura fuera de control personal."
  }
],
  chronology: [
  {
    "year": "1321",
    "text": "«Complot de los leprosos»; linchamientos en Francia/Alemania."
  },
  {
    "year": "1757",
    "text": "Ejecución de Robert-François Damiens en París."
  },
  {
    "year": "1848",
    "text": "Phineas Gage; lesión frontal y cambio de carácter."
  },
  {
    "year": "1936",
    "text": "Último ahorcamiento público en EE. UU. (Rainey Bethea)."
  },
  {
    "year": "1983",
    "text": "Libet publica experimento de potencial de preparación."
  },
  {
    "year": "1994",
    "text": "Crick: «solo un paquete de neuronas»."
  },
  {
    "year": "2023",
    "text": "Publicación de Determined (Penguin Press)."
  }
],
  figures: [
  {
    "name": "Robert M. Sapolsky",
    "role": "Autor; primatólogo y neurobiólogo, incompatibilista."
  },
  {
    "name": "Benjamin Libet",
    "role": "EEG y debate sobre veto consciente."
  },
  {
    "name": "Daniel Dennett",
    "role": "Compatibilista; «suerte se promedia», maratón vs. dash."
  },
  {
    "name": "Derk Pereboom",
    "role": "Modelo de cuarentena penal."
  },
  {
    "name": "Gregg Caruso",
    "role": "Cuarentena + determinantes sociales del crimen."
  },
  {
    "name": "Edward Lorenz",
    "role": "Caos y efecto mariposa en meteorología."
  },
  {
    "name": "Francis Crick",
    "role": "Determinismo duro citado en experimentos psicológicos."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "No hay tortuga flotando: cada acto es biología e historia que no elegimos.",
  "Estudiar solo intención o segundos previos es mirar el final de Casablanca sin la película.",
  "Retribución placentera sobrevive porque ignora causas.",
  "Aceptar determinismo puede liberar de culpa absurda y estigma biológico.",
  "La ciencia no da «sentido» cósmico, pero sí menos odio y más cuarentena sensata."
],
    highlight: "Somos tortugas hasta el fondo; eso no impide cambiar cerebros, leyes ni compasión.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Robert M. Sapolsky",
    line2: "\"Determined\" · Penguin Press · 2023",
  },
}
