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
          html: "La pregunta del <span class=\"term\">libre albedrío</span> toca casi todo lo que nos importa: moral, ley, política, religión, culpa y logro personal. Si no existiera, criminales y pecadores serían «relojes mal calibrados» y la justicia retributiva perdería sentido. <span class=\"person\">Sam Harris</span> abre con el caso de Cheshire (<span class=\"num\">2007</span>): <span class=\"person\">Steven Hayes</span> y <span class=\"person\">Joshua Komisarjevsky</span> asesinaron a <span class=\"person\">Jennifer Petit</span> y a sus hijas tras una noche de violencia.",
        },
        {
          type: 'paragraph',
          html: "Ante semejante horror, casi todos sentimos que los culpables deben responder moralmente. Si intercambiáramos átomo por átomo con Komisarjevsky (genes, infancia y cerebro idénticos), actuaríamos igual que él. El papel de la <span class=\"term\">suerte</span> parece decisivo. Un tumor cerebral que explique la violencia desplazaría nuestra culpa, y la neurofisiología ordinaria haría lo mismo, porque ambos son eventos físicos que producen pensamientos y actos.",
        },
        {
          type: 'paragraph',
          html: "Harris sostiene que el libre albedrío no solo es una ilusión, sino que no puede hacerse conceptualmente coherente. O nuestras voluntades están determinadas por causas previas y no somos responsables de ellas, o son producto del azar y tampoco lo somos. Las dos suposiciones populares (que podríamos haber actuado distinto y que somos la fuente consciente de nuestros actos) son falsas.",
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
          html: "Procesamos solo una fracción minúscula de lo que el cerebro calcula en cada instante. Esta mañana Harris tomó café, no té, y no sabe por qué. La «elección» apareció en conciencia, pero no se originó allí: el deseo surgió en la mente sin que él pudiera inspeccionarlo ni influirlo.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> (<span class=\"num\">1983</span>) detectó actividad motora unos <span class=\"num\">300 ms</span> antes de que la persona sintiera haber decidido moverse. Mediante fMRI, <span class=\"person\">John-Dylan Haynes</span> predijo la elección <span class=\"num\">7–10 s</span> antes. Registros directos de <span class=\"num\">256</span> neuronas alcanzaron ~<span class=\"num\">80 %</span> de precisión a <span class=\"num\">700 ms</span>. Antes de que parezcamos libres, el cerebro ya decidió.",
        },
        {
          type: 'paragraph',
          html: "Incluso si el alma fuera inmaterial, no ayudaría, porque quien no sabe qué hará su alma no controla nada. La distinción voluntario/involuntario existe y dice mucho sobre el carácter futuro de una persona, pero no salva el libre albedrío. Habría que controlar todas las influencias que moldean cada pensamiento para tenerlo de verdad, y entonces surge la pregunta de qué influiría en esas influencias. No controlamos la tormenta. Somos la tormenta.",
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
          html: "El libre albedrío nace de una <span class=\"term\">experiencia sentida</span>, no de un argumento abstracto. En filosofía conviven <span class=\"term\">determinismo</span>, <span class=\"term\">libertarianismo</span> y <span class=\"term\">compatibilismo</span>. Hoy solo el compatibilismo es respetable, porque el determinismo relevante para el comportamiento humano es cierto.",
        },
        {
          type: 'paragraph',
          html: "Los compatibilistas, como <span class=\"person\">Daniel Dennett</span>, dicen que actuar según tus deseos sin coacción externa es libertad. Eso no coincide con lo que la gente siente, que es creer poder haber actuado de otro modo con el universo idéntico. Si las causas cerebrales son totalmente eficaces, la responsabilidad personal convencional pierde anclaje. Dennett afirma que «somos» también la neurofisiología inconsciente, como quien dice que todos vivimos de luz porque la cadena alimentaria depende de la fotosíntesis, pero eso no es la capacidad que la gente cree tener.",
        },
        {
          type: 'paragraph',
          html: "Harris responde que somos polvo de estrellas, pero no nos <em>sentimos</em> estrellas, y esa identidad no guía la intuición moral ni el sistema penal. El <span class=\"term\">90 %</span> de las células de nuestro cuerpo son microbios: ¿nos sentimos idénticos a ellos? <span class=\"person\">Daniel Wegner</span> mostró que atribuimos agencia donde no la hay. El compatibilismo ignora la fuente del problema: la sensación de autoría consciente que hizo surgir la idea de libre albedrío.",
        },
        {
          type: 'quote',
          text: "Un títere es libre mientras ame sus cuerdas.",
          attribution: "Crítica al compatibilismo (parafraseado)",
        },
        {
          type: 'key',
          html: "El compatibilismo sustituye la experiencia psicológica de agencia por una definición técnica de «persona» que no explica por qué nos importa el libre albedrío.",
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
          html: "Toda acción humana puede reducirse a eventos impersonales: genes transcritos, neurotransmisores, fibras musculares. Nuestra moralidad cotidiana parece exigir que las acciones no sean meramente productos de biología o condicionamiento. Algunos esperan que el azar cuántico o la aleatoriedad sináptica (como la que observa <span class=\"person\">Martin Heisenberg</span> en canales iónicos) abra espacio al libre albedrío.",
        },
        {
          type: 'paragraph',
          html: "Pero un neurotransmisor liberado al azar no es «yo» decidiendo: es suerte, no responsabilidad. Si cada acto fuera genuinamente aleatorio, no habría mente coherente ni posibilidad de razonar con otros. La <span class=\"term\">indeterminación cuántica</span> opera en la evolución (rayos cósmicos mutando ADN), pero no hace inteligible el concepto de libre albedrío en la vida diaria.",
        },
        {
          type: 'paragraph',
          html: "Si el determinismo es cierto, el futuro, incluidos nuestros estados mentales, ya está fijado. Si hay azar genuino, tampoco merecemos crédito y diríamos «no sé qué me pasó». No hay combinación de verdad causal y azar compatible con la noción popular de libre albedrío.",
        },
        {
          type: 'key',
          html: "Ni determinismo ni azar cuántico producen la libertad que la gente cree tener: en ambos casos no somos los autores últimos de lo que hacemos.",
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
          html: "Podemos distinguir estados volicionales de reflejos automáticos, y la atención consciente importa para planificar y corregir. No se puede decidir ir al fisioterapeuta sin darse cuenta del dolor. Aun así, todo el proceso (dolor, pensamientos, terapia) surge sin que el yo consciente lo haya creado. La diferencia entre volición y reflejo no ofrece fundamento para la libertad de la voluntad.",
        },
        {
          type: 'paragraph',
          html: "Confundir determinismo con fatalismo es un error: sentarse a esperar también es una elección con consecuencias. Las decisiones son estados causales del cerebro que producen resultados reales en el mundo. Aun así, la próxima elección emergerá de causas previas que el testigo consciente no trajo a la existencia. Desde la perspectiva de la conciencia, no somos más responsables del próximo pensamiento que de haber nacido.",
        },
        {
          type: 'paragraph',
          html: "Harris relata cambios de vida que parecen prueba de voluntad: dieta, emprendimiento con dominio de <span class=\"num\">10 dólares</span>, entrenamiento con <span class=\"person\">Tim Ferriss</span> y <span class=\"num\">20 libras</span> de grasa reemplazadas por músculo. No puede explicar por qué funcionó <em>esta</em> vez y no antes. Puedes elegir lo que quieres, pero no elegir <em>qué</em> quieres ni por qué un deseo vence a otro. La voluntad es un fenómeno biológico: tienes exactamente la capacidad de esfuerzo que tienes ahora, ni un ápice más.",
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
          html: "Estudios muestran que leer argumentos contra el libre albedrío puede aumentar la trampa en exámenes (<span class=\"person\">Vohs & Schooler</span>, <span class=\"num\">2008</span>) o reducir la ayuda y aumentar la agresividad (<span class=\"person\">Baumeister</span> et al., <span class=\"num\">2009</span>). La preocupación no es infundada, pero Harris no teme «degradar» la moral de sus lectores.",
        },
        {
          type: 'paragraph',
          html: "Perder la ilusión aumentó su compasión, su perdón y disminuyó el sentido de merecer la buena suerte. En clase de autodefensa, en cambio, un «golpea los ojos» sigue siendo útil aunque el agresor sea víctima de causas previas: hay verdades científicas, éticas y prácticas para cada ocasión.",
        },
        {
          type: 'paragraph',
          html: "Conocer las causas del humor o del azúcar en sangre puede mejorar el control práctico sin restaurar libre albedrío. Cambiar inputs (habilidades, relaciones, hábitos de atención) transforma vidas aunque nada sea «libre» en el sentido mítico. Reconocer la ilusión puede, paradójicamente, aumentar la libertad vivida.",
        },
        {
          type: 'key',
          html: "Reconocer que no somos autores últimos puede aumentar compasión y espacio para cambiar, sin caer en fatalismo ni nihilismo.",
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
          html: "La Corte Suprema de EE. UU. (<span class=\"term\">United States v. Grayson</span>, <span class=\"num\">1978</span>) vincula el libre albedrío al sistema penal. Harris propone responsabilidad sin ilusión: ser responsable es que la conducta refleje la mente global (creencias, deseos, historial), no que exista un agente inmune a la causalidad.",
        },
        {
          type: 'paragraph',
          html: "Cinco casos graduales muestran cómo el contexto modula la indignación aunque el cerebro sea siempre la causa: niño de <span class=\"num\">4 años</span>, abusado de <span class=\"num\">12</span>, adulto abusado, psicópata y psicópata con tumor en corteza prefrontal medial. El tumor «absuelve» porque parece adventicio, pero a medida que entendemos causas, la línea entre psicópata y paciente con tumor se difumina.",
        },
        {
          type: 'paragraph',
          html: "Encarcelar peligrosos protege a otros sin necesidad de odiar al agente. Si existiera una cura barata del «mal» en el suministro alimentario, retenerla como castigo sería absurdo: eso revela cuánto depende la venganza de ignorar causas. <span class=\"person\">Jared Diamond</span> contrasta la satisfacción de quien se vengó en Nueva Guinea con el arrepentimiento de quien no mató al asesino de su familia en el Holocausto. La retribución pura descansa en una ilusión cognitiva y moral.",
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
          html: "Negar la ilusión tiene implicaciones políticas. Los liberales suelen reconocer la suerte en el éxito. Los conservadores a menudo fetichizan el individualismo sin ver cuánta fortuna requiere «trabajar duro»: inteligencia, salud, no quebrar por enfermedad de un cónyuge.",
        },
        {
          type: 'paragraph',
          html: "Nadie eligió su genoma, país, salud ni economía familiar. Incluso la disciplina para esforzarse es condición neurológica, no mérito: la pereza y la diligencia son estados del cerebro. Aun así, exigir esfuerzo y disuadir free riders sigue siendo útil socialmente.",
        },
        {
          type: 'paragraph',
          html: "Podemos tratar a personas como responsables en la medida en que eso cambie comportamientos, sin creer en el libre albedrío. Mejorar la sociedad es trabajar con la naturaleza, porque no hay otra cosa con qué trabajar, no contra ella.",
        },
        {
          type: 'key',
          html: "La suerte es constitutiva de la moralidad misma y debería moderar el mérito absoluto del éxito y del fracaso.",
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
          html: "El misterio del libre albedrío no es solo objetivo sino subjetivo: al observar de cerca, la libertad desaparece. Harris «elige» escribir lo que quiera en el resto del libro, pero al prestar atención a su flujo de conciencia pregunta: ¿de dónde salió «conejo» y no «elefante»?",
        },
        {
          type: 'paragraph',
          html: "No sabe la causa de ninguna elección. Podría cambiar «conejo» por «elefante», pero tampoco explicaría por qué. Ni la ley de la naturaleza ni el azar parecen libertad. ¿Es libre de sentir que «elefante» es mejor palabra si no lo siente así? No: solo la palabra puede cambiarlo a él.",
        },
        {
          type: 'paragraph',
          html: "La ilusión de libre albedrío es, en sí misma, otra ilusión: no sentimos tanta libertad como creemos cuando prestamos atención. Los pensamientos simplemente surgen. ¿Qué más podrían hacer?",
        },
        {
          type: 'quote',
          text: "¿Conejo o elefante? No soy libre de sentir que «elefante» es mejor palabra si no lo siente así.",
          attribution: "Sam Harris (experimento en el texto)",
        },
        {
          type: 'key',
          html: "La verdad sobre nosotros es más extraña: somos tormentas, no capitanes que las gobiernan, y la introspección lo confirma.",
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
