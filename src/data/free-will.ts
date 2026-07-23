import type { BookSummary } from '../types/book'

export const freeWill: BookSummary = {
  slug: "free-will",
  meta: {
    title: "Free Will",
    subtitle: "¿Somos autores de nuestros pensamientos o testigos de una ilusión?",
    author: "Sam Harris",
    meta: [
      "📖 2012 · Free Press / Simon & Schuster",
      "✍️ Ensayo breve · neurociencia y filosofía",
    ],
    titleEs: "Libre albedrío",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prólogo"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Orígenes inconscientes de la voluntad"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Cambiar de tema"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Causa y efecto"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Elecciones, esfuerzos e intenciones"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "¿La verdad nos haría daño?"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Responsabilidad moral"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Política"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Conclusión"
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
      num: "Prólogo",
      title: "La ilusión que sostiene la moral",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Somos autores de nuestros pensamientos o testigos de una ilusión? El filósofo y neurocientífico <span class=\"person\">Sam Harris</span> abre con un caso extremo: el crimen de Cheshire (<span class=\"num\">2007</span>).",
        },
        {
          type: 'paragraph',
          html: "La pregunta del <span class=\"term\">libre albedrío</span> (la creencia de poder elegir libremente) toca casi todo lo que nos importa. Afecta la moral, la ley y la culpa personal. Los criminales serían como relojes mal calibrados si no existiera el libre albedrío. La justicia retributiva perdería sentido.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Steven Hayes</span> y <span class=\"person\">Joshua Komisarjevsky</span> asesinaron a Jennifer Petit y a sus hijas tras una noche de violencia. Ante semejante horror, casi todos sentimos que los culpables deben responder moralmente.",
        },
        {
          type: 'paragraph',
          html: "Intercambiados átomo por átomo con Komisarjevsky, actuaríamos igual que él. La <span class=\"term\">suerte</span> (genes, infancia y cerebro que no elegimos) parece decisiva. Un tumor cerebral que explique la violencia desplazaría nuestra culpa. La neurofisiología ordinaria haría lo mismo: ambos son eventos físicos que producen pensamientos y actos.",
        },
        {
          type: 'paragraph',
          html: "Harris sostiene que el libre albedrío no solo es una ilusión. Tampoco puede hacerse conceptualmente coherente. O nuestras voluntades están determinadas por causas previas y no somos responsables de ellas, o son producto del azar y tampoco lo somos. Las dos suposiciones populares son falsas: que podríamos haber actuado distinto y que somos la fuente consciente de nuestros actos.",
        },
        {
          type: 'quote',
          text: "El libre albedrío es una ilusión. Nuestras voluntades no son de nuestra propia creación.",
          attribution: "Sam Harris",
        },
        {
          type: 'key',
          html: "No somos los autores conscientes de nuestros pensamientos: las intenciones surgen de causas de las que no somos testigos ni dueños.",
        },
        {
          type: 'paragraph',
          html: "Para ver por qué esa tesis no es solo abstracta, Harris recurre a lo que el cerebro hace antes de que sintamos decidir.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Orígenes inconscientes de la voluntad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué elegimos café y no té sin saber el motivo? Procesamos solo una fracción minúscula de lo que el cerebro calcula en cada instante. Esta mañana Harris tomó café, no té, y no sabe por qué.",
        },
        {
          type: 'paragraph',
          html: "La «elección» apareció en conciencia, pero no se originó allí. El deseo surgió en la mente sin que él pudiera inspeccionarlo ni influirlo. Somos testigos tardíos de impulsos, no su fuente última.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1983</span>, el neurocientífico <span class=\"person\">Benjamin Libet</span> detectó actividad motora unos 300 ms antes de que la persona sintiera haber decidido moverse. Mediante resonancia magnética, <span class=\"person\">John-Dylan Haynes</span> predijo la elección varios segundos antes.",
        },
        {
          type: 'paragraph',
          html: "Registros directos de <span class=\"num\">256</span> neuronas alcanzaron cerca del <span class=\"num\">80 %</span> de precisión. Lo hicieron unos <span class=\"num\">700 ms</span> antes de la sensación de decidir. Antes de que parezcamos libres, el cerebro ya decidió. La conciencia llega tarde a decisiones ya iniciadas.",
        },
        {
          type: 'paragraph',
          html: "Incluso si el alma fuera inmaterial, no ayudaría. Quien no sabe qué hará su alma no controla nada. La distinción voluntario/involuntario existe y dice mucho sobre el carácter futuro de una persona, pero no salva el libre albedrío.",
        },
        {
          type: 'paragraph',
          html: "Habría que controlar todas las influencias que moldean cada pensamiento para tenerlo de verdad. Entonces surge la pregunta de qué influiría en esas influencias. No controlamos la tormenta. Somos la tormenta.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Retraso consciente",
              "description": "La conciencia llega tarde a decisiones ya iniciadas en el cerebro.",
              "icon": "⏱️"
            },
            {
              "title": "Testigo, no autor",
              "description": "Somos testigos de impulsos, no su fuente última.",
              "icon": "🧠"
            },
            {
              "title": "Alma sin ventaja",
              "description": "Incluso el dualismo deja intacto el problema de la responsabilidad.",
              "icon": "👻"
            }
          ],
        },
        {
          type: 'key',
          html: "Las intenciones aparecen en conciencia como si brotaran del vacío, pero el cerebro ya las había determinado antes de que sintiéramos decidir.",
        },
        {
          type: 'paragraph',
          html: "La evidencia experimental choca con cómo la filosofía y el sentido común suelen definir la libertad.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Cambiar de tema",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la gente cree tener libre albedrío aunque el cerebro decida antes? El libre albedrío nace de una <span class=\"term\">experiencia sentida</span> (la sensación de ser autor de lo que hacemos), no de un argumento abstracto.",
        },
        {
          type: 'paragraph',
          html: "En filosofía conviven el <span class=\"term\">determinismo</span> (la idea de que todo tiene causa previa), el libertarianismo y el <span class=\"term\">compatibilismo</span> (libertad compatible con causas previas). Hoy solo el compatibilismo es respetable, porque el determinismo relevante para el comportamiento humano es cierto.",
        },
        {
          type: 'paragraph',
          html: "Los compatibilistas, como el filósofo <span class=\"person\">Daniel Dennett</span>, dicen que actuar según tus deseos sin coacción externa es libertad. Eso no coincide con lo que la gente siente. La gente cree poder haber actuado de otro modo con el universo idéntico.",
        },
        {
          type: 'paragraph',
          html: "Si las causas cerebrales son totalmente eficaces, la responsabilidad personal convencional pierde anclaje. Dennett afirma que «somos» también la neurofisiología inconsciente. Es como decir que todos vivimos de luz porque la cadena alimentaria depende de la fotosíntesis. Eso no es la capacidad que la gente cree tener.",
        },
        {
          type: 'paragraph',
          html: "Harris responde que somos polvo de estrellas, pero no nos <em>sentimos</em> estrellas. Esa identidad no guía la intuición moral ni el sistema penal. Cerca del <span class=\"num\">90 %</span> de las células de nuestro cuerpo son microbios: ¿nos sentimos idénticos a ellos?",
        },
        {
          type: 'paragraph',
          html: "El psicólogo <span class=\"person\">Daniel Wegner</span> mostró que atribuimos agencia donde no la hay. El compatibilismo ignora la fuente del problema: la sensación de autoría consciente que hizo surgir la idea de libre albedrío.",
        },
        {
          type: 'quote',
          text: "Un títere es libre mientras ame sus cuerdas.",
          attribution: "Crítica al compatibilismo (parafraseado)",
        },
        {
          type: 'key',
          html: "El compatibilismo sustituye la <span class=\"key-term\">experiencia psicológica de agencia</span> por una definición técnica de «persona» que no explica por qué nos importa el libre albedrío.",
        },
        {
          type: 'paragraph',
          html: "Si ni la conciencia tardía ni las definiciones filosóficas salvan la libertad, queda preguntar qué papel juegan la causalidad y el azar.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Causa y efecto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede el azar cuántico abrir espacio al libre albedrío? Toda acción humana puede reducirse a eventos impersonales: genes transcritos, neurotransmisores, fibras musculares.",
        },
        {
          type: 'paragraph',
          html: "Nuestra moralidad cotidiana parece exigir que las acciones no sean meramente productos de biología o condicionamiento. Algunos esperan que el azar cuántico o la aleatoriedad sináptica (como la que observa <span class=\"person\">Martin Heisenberg</span> en canales iónicos) abra ese espacio.",
        },
        {
          type: 'paragraph',
          html: "Pero un neurotransmisor liberado al azar no es «yo» decidiendo: es suerte, no responsabilidad. Cada acto genuinamente aleatorio haría imposible una mente coherente y el razonamiento con otros.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">indeterminación cuántica</span> (eventos subatómicos sin causa local previa) opera en la evolución. Los rayos cósmicos mutan ADN. Pero eso no hace inteligible el concepto de libre albedrío en la vida diaria.",
        },
        {
          type: 'paragraph',
          html: "Si el determinismo es cierto, el futuro, incluidos nuestros estados mentales, ya está fijado. Si hay azar genuino, tampoco merecemos crédito y diríamos «no sé qué me pasó». No hay combinación de verdad causal y azar compatible con la noción popular de libre albedrío.",
        },
        {
          type: 'key',
          html: "Ni determinismo ni azar cuántico producen la libertad que la gente cree tener: en ambos casos no somos los autores últimos de lo que hacemos.",
        },
        {
          type: 'paragraph',
          html: "Aun sin libre albedrío, las elecciones parecen reales y a veces cambian vidas: hay que explicar esa paradoja.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Elecciones, esfuerzos e intenciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Importan las elecciones si no somos autores últimos? Podemos distinguir estados volicionales de reflejos automáticos, y la atención consciente importa para planificar y corregir.",
        },
        {
          type: 'paragraph',
          html: "No se puede decidir ir al fisioterapeuta sin darse cuenta del dolor. Aun así, todo el proceso (dolor, pensamientos, terapia) surge sin que el yo consciente lo haya creado. La diferencia entre volición y reflejo no ofrece fundamento para la libertad de la voluntad.",
        },
        {
          type: 'paragraph',
          html: "Confundir determinismo con fatalismo es un error. Sentarse a esperar también es una elección con consecuencias. Las decisiones son estados causales del cerebro que producen resultados reales en el mundo.",
        },
        {
          type: 'paragraph',
          html: "Aun así, la próxima elección emergerá de causas previas que el testigo consciente no trajo a la existencia. La conciencia no nos hace más responsables del próximo pensamiento que de haber nacido.",
        },
        {
          type: 'paragraph',
          html: "Harris relata cambios de vida que parecen prueba de voluntad: dieta, emprendimiento con dominio de <span class=\"num\">10 dólares</span>, entrenamiento con <span class=\"person\">Tim Ferriss</span>. Reemplazó <span class=\"num\">20 libras</span> de grasa por músculo.",
        },
        {
          type: 'paragraph',
          html: "No puede explicar por qué funcionó <em>esta</em> vez y no antes. Puedes elegir lo que quieres, pero no elegir <em>qué</em> quieres ni por qué un deseo vence a otro. La voluntad es un fenómeno biológico: tienes exactamente la capacidad de esfuerzo que tienes ahora, ni un ápice más.",
        },
        {
          type: 'quote',
          text: "Puedes hacer lo que decidas —pero no puedes decidir qué decidirás.",
          attribution: "Sam Harris (siguiendo a Schopenhauer/Einstein)",
        },
        {
          type: 'key',
          html: "Las elecciones importan causalmente, pero cada una surge de un regresión de causas que termina siempre en la oscuridad: no elegimos qué elegimos.",
        },
        {
          type: 'paragraph',
          html: "Si negar el libre albedrío es verdad, el temor es que esa verdad corrompa la moral: Harris examina esa objeción.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "¿La verdad nos haría daño?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Nos volveríamos peores si dejáramos de creer en el libre albedrío? Estudios muestran efectos preocupantes. Leer argumentos contra el libre albedrío puede aumentar la trampa en exámenes (<span class=\"person\">Vohs & Schooler</span>, <span class=\"num\">2008</span>).",
        },
        {
          type: 'paragraph',
          html: "Otros trabajos (<span class=\"person\">Baumeister</span> et al., <span class=\"num\">2009</span>) vinculan esa lectura con menos ayuda y más agresividad. La preocupación no es infundada, pero Harris no teme «degradar» la moral de sus lectores.",
        },
        {
          type: 'paragraph',
          html: "Perder la ilusión aumentó su compasión, su perdón y disminuyó el sentido de merecer la buena suerte. En clase de autodefensa, en cambio, un «golpea los ojos» sigue siendo útil. El agresor es víctima de causas previas, pero hay verdades científicas, éticas y prácticas para cada ocasión.",
        },
        {
          type: 'paragraph',
          html: "Conocer las causas del humor o del azúcar en sangre puede mejorar el control práctico sin restaurar libre albedrío. Cambiar inputs (habilidades, relaciones, hábitos de atención) transforma vidas aunque nada sea «libre» en el sentido mítico. Reconocer la ilusión puede, paradójicamente, aumentar la libertad vivida.",
        },
        {
          type: 'key',
          html: "Reconocer que no somos autores últimos puede aumentar compasión y espacio para cambiar, sin caer en fatalismo ni nihilismo.",
        },
        {
          type: 'paragraph',
          html: "Esa compasión no elimina la necesidad de juzgar conductas: la pregunta es cómo responsabilizar sin ilusión.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Responsabilidad moral",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo castigar sin creer en un agente autónomo? La Corte Suprema de EE. UU. (<span class=\"num\">1978</span>, caso United States v. Grayson) vincula el libre albedrío al sistema penal.",
        },
        {
          type: 'paragraph',
          html: "Harris propone responsabilidad sin ilusión. Ser responsable es que la conducta refleje la mente global (creencias, deseos, historial). No que exista un agente inmune a la causalidad.",
        },
        {
          type: 'paragraph',
          html: "Cinco casos graduales muestran cómo el contexto modula la indignación aunque el cerebro sea siempre la causa. Un niño de <span class=\"num\">4 años</span>, un abusado de <span class=\"num\">12</span>, un adulto abusado, un psicópata y un psicópata con tumor en corteza prefrontal medial.",
        },
        {
          type: 'paragraph',
          html: "El tumor «absuelve» porque parece adventicio. Entender más causas difumina la línea entre psicópata y paciente con tumor. Encarcelar peligrosos protege a otros sin necesidad de odiar al agente.",
        },
        {
          type: 'paragraph',
          html: "Retener una cura barata del «mal» en el suministro alimentario solo para castigar sería absurdo. Eso revela cuánto depende la venganza de ignorar causas.",
        },
        {
          type: 'paragraph',
          html: "El historiador <span class=\"person\">Jared Diamond</span> contrasta dos historias de venganza. En Nueva Guinea, quien se vengó quedó satisfecho. Quien no mató al asesino de su familia en el Holocausto se arrepintió. La retribución pura descansa en una ilusión cognitiva y moral.",
        },
        {
          type: 'list',
          items: [
            "**Contención** — Alejar peligros sin odiar al agente como autor inmortal.",
            "**Disuasión** — Amenazas pueden modificar conducta aunque no haya libre albedrío.",
            "**Gradación** — Edad, abuso, intención consciente informan riesgo futuro, no mérito metafísico."
          ],
        },
        {
          type: 'key',
          html: "Podemos responsabilizar conductas compatibles con el carácter y contener peligros sin creer en un agente autónomo ni en castigo retributivo puro.",
        },
        {
          type: 'paragraph',
          html: "La misma lógica se extiende a la política: el mérito absoluto del éxito y del fracaso también depende de la suerte.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Política",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué cambia en política si la suerte es constitutiva? Negar la ilusión tiene implicaciones políticas. Los liberales suelen reconocer la suerte en el éxito.",
        },
        {
          type: 'paragraph',
          html: "Los conservadores a menudo fetichizan el individualismo sin ver cuánta fortuna requiere «trabajar duro». Hace falta inteligencia, salud y no quebrar por enfermedad de un cónyuge. Nadie eligió su genoma, país, salud ni economía familiar.",
        },
        {
          type: 'paragraph',
          html: "Incluso la disciplina para esforzarse es condición neurológica, no mérito. La pereza y la diligencia son estados del cerebro. Aun así, exigir esfuerzo y disuadir free riders sigue siendo útil socialmente.",
        },
        {
          type: 'paragraph',
          html: "Podemos tratar a personas como responsables en la medida en que eso cambie comportamientos, sin creer en el libre albedrío. Mejorar la sociedad es trabajar con la naturaleza, porque no hay otra cosa con qué trabajar, no contra ella.",
        },
        {
          type: 'key',
          html: "La suerte es constitutiva de la moralidad misma y debería moderar el mérito absoluto del éxito y del fracaso.",
        },
        {
          type: 'paragraph',
          html: "Harris cierra volviendo a la experiencia íntima: observar de cerca cómo surgen los pensamientos.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Conclusión",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué queda al observar de cerca cómo surgen los pensamientos? El misterio del libre albedrío no es solo objetivo sino subjetivo. Al observar de cerca, la libertad desaparece.",
        },
        {
          type: 'paragraph',
          html: "Harris «elige» escribir lo que quiera en el resto del libro. Al prestar atención a su flujo de conciencia pregunta: ¿de dónde salió «conejo» y no «elefante»? No sabe la causa de ninguna elección.",
        },
        {
          type: 'paragraph',
          html: "Podría cambiar «conejo» por «elefante», pero tampoco explicaría por qué. Ni la ley de la naturaleza ni el azar parecen libertad. ¿Es libre de sentir que «elefante» es mejor palabra si no lo siente así? No: solo la palabra puede cambiarlo a él.",
        },
        {
          type: 'paragraph',
          html: "La ilusión de libre albedrío es, en sí misma, otra ilusión. No sentimos tanta libertad como creemos cuando prestamos atención. Los pensamientos simplemente surgen. ¿Qué más podrían hacer?",
        },
        {
          type: 'quote',
          text: "¿Conejo o elefante? No soy libre de sentir que «elefante» es mejor palabra si no lo siente así.",
          attribution: "Sam Harris (experimento en el texto)",
        },
        {
          type: 'key',
          html: "La verdad sobre nosotros es más extraña: somos <span class=\"key-term\">tormentas</span>, no capitanes que las gobiernan, y la introspección lo confirma.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Libre albedrío",
    "description": "Creencia en ser fuente consciente de pensamientos y actos; Harris la considera incoherente objetiva y subjetivamente."
  },
  {
    "title": "Compatibilismo",
    "description": "Libertad como actuar según deseos sin coacción; compatible con determinismo pero ajeno a la experiencia sentida."
  },
  {
    "title": "Potencial de preparación",
    "description": "Señal cerebral (Libet) que precede ~300 ms a la sensación de decidir moverse."
  },
  {
    "title": "Suerte constitutiva",
    "description": "Genes, infancia y entorno que no elegimos pero moldean cada elección y el carácter."
  },
  {
    "title": "Responsabilidad pragmática",
    "description": "Ajuste entre conducta y carácter mental; sin agente inmortal ni retribución pura."
  },
  {
    "title": "Fatalismo vs determinismo",
    "description": "El determinismo no implica inacción: cada omisión también tiene causas y consecuencias."
  },
  {
    "title": "Voluntad biológica",
    "description": "Capacidad de esfuerzo fija en cada momento; no se elige qué se quiere ni por qué un deseo vence."
  },
  {
    "title": "Ilusión de la ilusión",
    "description": "Creemos sentir más libertad de la que la introspección revela al prestar atención."
  }
],
  chronology: [
  {
    "year": "1978",
    "text": "United States v. Grayson: libre albedrío como base del sistema penal en EE. UU."
  },
  {
    "year": "1983",
    "text": "Libet: actividad motora ~300 ms antes de la conciencia de decidir."
  },
  {
    "year": "2007",
    "text": "Crimen de Cheshire; Harris lo usa para ilustrar suerte y culpa moral."
  },
  {
    "year": "2008",
    "text": "Vohs & Schooler: negar libre albedrío aumenta trampa en exámenes."
  },
  {
    "year": "2011",
    "text": "Haynes: fMRI predice elección hasta 10 s antes; Fried: neuronas individuales ~700 ms antes."
  },
  {
    "year": "2012",
    "text": "Publicación de Free Will (Free Press)."
  }
],
  figures: [
  {
    "name": "Sam Harris",
    "role": "Autor; neurocientífico y filósofo, argumenta contra el libre albedrío."
  },
  {
    "name": "Benjamin Libet",
    "role": "EEG y potencial de preparación; debate sobre «veto» consciente tardío."
  },
  {
    "name": "Daniel Dennett",
    "role": "Compatibilista; defiende libertad como actuar según deseos propios."
  },
  {
    "name": "John-Dylan Haynes",
    "role": "fMRI: predicción de decisiones segundos antes de la conciencia."
  },
  {
    "name": "Itzhak Fried",
    "role": "Registros neuronales directos en pacientes epilépticos (~80 % precisión)."
  },
  {
    "name": "Eddy Nahmias",
    "role": "Crítica: capacidades de planificación no equivalen a libre albedrío."
  },
  {
    "name": "Jared Diamond",
    "role": "Venganza cumplida vs. arrepentimiento por no vengarse (Holocaust)."
  },
  {
    "name": "Daniel Wegner",
    "role": "Ilusión de voluntad consciente; atribución errónea de agencia."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Las intenciones aparecen en conciencia como si brotaran del vacío.",
  "En realidad vienen de causas ocultas que no elegimos ni controlamos.",
  "Podemos reformar justicia y compasión sin el fantasma del autor inmortal.",
  "Reconocerlo no anula elecciones ni esfuerzos: cambia cómo los juzgamos.",
  "Perder la ilusión puede aumentar la libertad vivida y la compasión."
],
    highlight: "La ilusión de libre albedrío es, a su vez, una ilusión",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Sam Harris",
    line2: "\"Free Will\" · Free Press · 2012",
  },
}
