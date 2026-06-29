import type { BookSummary } from '../types/book'

export const freeWill: BookSummary = {
  slug: "free-will",
  meta: {
    title: "Free Will",
    titleEs: "Libre albedrío",
    subtitle: "¿Somos autores de nuestros pensamientos o ilusiones convencidas?",
    author: "Sam Harris",
    meta: [
      "📖 2012 · Free Press / Simon & Schuster",
      "✍️ Ensayo breve · neurociencia y filosofía",
    ],
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
          html: "La pregunta del <span class=\"term\">libre albedrío</span> toca casi todo lo que nos importa: moral, ley, política, religión, culpa y logro personal. Sin ella, criminales y pecadores serían «relojes mal calibrados» y la justicia retributiva perdería sentido. <span class=\"person\">Sam Harris</span> abre con el caso de Cheshire (<span class=\"num\">2007</span>): <span class=\"person\">Steven Hayes</span> y <span class=\"person\">Joshua Komisarjevsky</span> asesinaron a <span class=\"person\">Jennifer Petit</span> y a sus hijas tras una noche de violencia.",
        },
        {
          type: 'paragraph',
          html: "Ante semejante horror, casi todos sentimos que los culpables deben responder moralmente. Pero si intercambiáramos átomo por átomo con Komisarjevsky —genes, infancia, cerebro idéntico— actuaríamos igual que él. El papel de la <span class=\"term\">suerte</span> parece decisivo. Un tumor cerebral que explique la violencia desplazaría nuestra culpa; la neurofisiología ordinaria haría lo mismo.",
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
          html: "Procesamos solo una fracción minúscula de lo que el cerebro calcula en cada instante. Esta mañana Harris tomó café, no té; no sabe por qué. La «elección» apareció en conciencia, no la originó allí.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benjamin Libet</span> (<span class=\"num\">1983</span>) detectó actividad motora unos <span class=\"num\">300 ms</span> antes de que la persona sintiera haber decidido moverse. Con fMRI, <span class=\"person\">John-Dylan Haynes</span> predijo la elección <span class=\"num\">7–10 s</span> antes; registros directos de <span class=\"num\">256</span> neuronas alcanzaron ~<span class=\"num\">80 %</span> de precisión a <span class=\"num\">700 ms</span>. Antes de que parezcamos libres, el cerebro ya decidió.",
        },
        {
          type: 'paragraph',
          html: "Aunque el alma fuera inmaterial, no ayudaría: si no sabes qué hará tu alma, no controlas nada. La distinción voluntario/involuntario existe, pero no salva el libre albedrío: las intenciones siguen siendo misteriosas en origen.",
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
              "description": "Incluso dualismo deja intacto el problema de la responsabilidad.",
              "icon": "👻"
            }
          ],
        },
        {
          type: 'key',
          html: "Para tener libre albedrío «de verdad» habría que controlar todas las influencias que moldean cada pensamiento —pero ¿qué influiría en esas influencias?",
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
          html: "El libre albedrío nace de una <span class=\"term\">experiencia sentida</span>, no de un argumento abstracto. En filosofía conviven <span class=\"term\">determinismo</span>, <span class=\"term\">libertarianismo</span> y <span class=\"term\">compatibilismo</span>.",
        },
        {
          type: 'paragraph',
          html: "Los compatibilistas —como <span class=\"person\">Daniel Dennett</span>— dicen que actuar según tus deseos sin coacción externa es libertad. Pero eso no coincide con lo que la gente siente: creer poder haber actuado de otro modo con el universo idéntico. Si las causas cerebrales son totalmente eficaces, la responsabilidad personal convencional pierde anclaje.",
        },
        {
          type: 'paragraph',
          html: "Dennett afirma que «somos» también la neurofisiología inconsciente. Harris responde: somos polvo de estrellas, pero no nos <em>sentimos</em> estrellas; esa identidad no guía la intuición moral. El compatibilismo ignora la fuente del problema: la sensación de autoría consciente.",
        },
        {
          type: 'quote',
          text: "Un títere es libre mientras ame sus cuerdas.",
          attribution: "Crítica al compatibilismo (parafraseado)",
        },
        {
          type: 'key',
          html: "Los compatibilistas cambian el tema: sustituyen la experiencia psicológica de agencia por una definición técnica de «persona».",
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
          html: "Toda acción humana puede reducirse a eventos impersonales: genes, neurotransmisores, músculos. Algunos esperan que el azar cuántico o la aleatoriedad sináptica —como la de <span class=\"person\">Martin Heisenberg</span>— abra espacio al libre albedrío.",
        },
        {
          type: 'paragraph',
          html: "Pero un neurotransmisor liberado al azar no es «yo» decidiendo: es suerte, no responsabilidad. Si cada acto fuera aleatorio, no habría mente coherente. La <span class=\"term\">indeterminación cuántica</span> no hace inteligible el concepto: si todo está determinado, el futuro ya está fijado; si hay azar, tampoco merecemos crédito.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~300 ms",
              "label": "Ventaja neural sobre la conciencia de moverse (Libet)"
            },
            {
              "value": "7–10 s",
              "label": "Predicción fMRI de elección (Haynes)"
            }
          ],
        },
        {
          type: 'key',
          html: "Ni determinismo ni azar cuántico producen la libertad que la gente cree tener.",
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
          html: "Podemos distinguir estados volicionales de reflejos automáticos; la atención consciente importa para planificar y corregir. Pero todo el proceso —dolor, pensamientos, terapia física— surge sin que el yo consciente lo haya creado.",
        },
        {
          type: 'paragraph',
          html: "Confundir determinismo con fatalismo es un error: sentarse a esperar también es una elección con consecuencias. Las decisiones son estados causales del cerebro que producen resultados reales. Aun así, la próxima elección emergerá de causas previas que el testigo consciente no trajo a la existencia.",
        },
        {
          type: 'paragraph',
          html: "Harris relata cambios de vida —dieta, artes marciales, emprendimiento— que parecen prueba de voluntad. Pero no puede explicar por qué funcionó <em>esta</em> vez y no antes. Puedes elegir lo que quieres, pero no elegir <em>qué</em> quieres ni por qué un deseo vence a otro.",
        },
        {
          type: 'quote',
          text: "Puedes hacer lo que decidas —pero no puedes decidir qué decidirás.",
          attribution: "Sam Harris",
        },
        {
          type: 'key',
          html: "La voluntad es un fenómeno biológico: tienes exactamente la capacidad de esfuerzo que tienes ahora, ni un ápice más.",
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
          html: "Estudios muestran que leer argumentos contra el libre albedrío puede aumentar trampa en exámenes o agresividad. La preocupación no es infundada, pero Harris no teme «degradar» la moral de sus lectores.",
        },
        {
          type: 'paragraph',
          html: "Perder la ilusión aumentó su compasión, perdón y disminuyó el sentido de merecer la buena suerte. En clase de autodefensa, en cambio, un «golpea los ojos» sigue siendo útil aunque el agresor sea víctima de causas previas.",
        },
        {
          type: 'paragraph',
          html: "Conocer causas de humor o azúcar en sangre puede mejorar el control práctico sin restaurar libre albedrío. Cambiar inputs —habilidades, relaciones, hábitos de atención— transforma vidas aunque nada sea «libre» en el sentido mítico.",
        },
        {
          type: 'key',
          html: "Reconocer la ilusión puede aumentar la libertad vivida: menos identificación rígida con el pasado y más espacio para cambiar.",
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
          html: "La Corte Suprema de EE. UU. (<span class=\"term\">United States v. Grayson</span>, <span class=\"num\">1978</span>) vincula el libre albedrío al sistema penal. Harris propone responsabilidad sin ilusión: ser responsable es que la conducta refleje la mente global —creencias, deseos, historial.",
        },
        {
          type: 'paragraph',
          html: "Cinco casos graduales (niño de 4 años, abusado de 12, adulto abusado, psicópata, psicópata con tumor) muestran cómo el contexto modula la indignación aunque el cerebro sea siempre la causa. El tumor «absuelve» porque parece adventicio; pero a medida que entendemos causas, la línea entre casos 4 y 5 se difumina.",
        },
        {
          type: 'paragraph',
          html: "Encarcelar peligrosos protege a otros; el odio retributivo se debilita al ver a depredadores como desafortunados. Si existiera cura barata del «mal», retenerla como castigo sería absurdo —lo que revela cuánto depende la venganza de ignorar causas.",
        },
        {
          type: 'list',
          items: [
            "**Contención** — Alejar peligros sin odiar al agente.",
            "**Disuasión** — Amenazas pueden modificar conducta aunque no haya libre albedrío.",
            "**Gradación** — Edad, abuso, intención consciente informan riesgo futuro, no mérito metafísico."
          ],
        },
        {
          type: 'key',
          html: "Podemos responsabilizar conductas compatibles con el carácter sin creer en un agente autónomo inmune a la causalidad.",
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
          html: "Negar la ilusión tiene implicaciones políticas: liberales suelen reconocer la suerte en el éxito; conservadores a menudo fetichizan el individualismo sin ver cuánta fortuna requiere «trabajar duro».",
        },
        {
          type: 'paragraph',
          html: "Nadie eligió su genoma, país, salud ni economía familiar. Incluso la disciplina para esforzarse es condición neurológica, no mérito. Aun así, exigir esfuerzo y disuadir free riders sigue siendo útil socialmente.",
        },
        {
          type: 'paragraph',
          html: "Podemos tratar a personas como responsables en la medida en que eso cambie comportamientos —sin creer en el libre albedrío. Mejorar sociedad es trabajar con la naturaleza, no contra ella.",
        },
        {
          type: 'key',
          html: "La suerte en la moralidad misma debería moderar el mérito absoluto del éxito y del fracaso.",
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
          html: "El misterio del libre albedrío no es solo objetivo sino subjetivo: al observar de cerca, la libertad desaparece. Harris «elige» escribir lo que quiera —pero ¿de dónde salió «conejo» y no «elefante» en su ejemplo?",
        },
        {
          type: 'paragraph',
          html: "Los pensamientos simplemente surgen. La ilusión de libre albedrío es, en sí misma, otra ilusión: no sentimos tanta libertad como creemos cuando prestamos atención.",
        },
        {
          type: 'quote',
          text: "¿Conejo o elefante? No soy libre de sentir que «elefante» es mejor palabra si no lo siente así.",
          attribution: "Sam Harris (experimento en el texto)",
        },
        {
          type: 'key',
          html: "La verdad sobre nosotros es más extraña: somos tormentas, no capitanes que las gobiernan.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Libre albedrío",
    "description": "Creencia en ser fuente consciente de pensamientos y actos; Harris la considera incoherente."
  },
  {
    "title": "Compatibilismo",
    "description": "Libertad como actuar según deseos sin coacción, compatible con determinismo."
  },
  {
    "title": "Potencial de preparación",
    "description": "Señal cerebral (Libet) que precede a la sensación de decidir."
  },
  {
    "title": "Suerte constitutiva",
    "description": "Genes, infancia y entorno que no elegimos pero moldean cada elección."
  },
  {
    "title": "Responsabilidad",
    "description": "Ajuste entre conducta y carácter mental, sin agente inmortal."
  },
  {
    "title": "Fatalismo vs determinismo",
    "description": "Determinismo no implica inacción: cada omisión también tiene causas."
  },
  {
    "title": "Free won't",
    "description": "Supuesto veto consciente tardío; Harris lo considera tan causal como la acción."
  },
  {
    "title": "Ilusión necesaria",
    "description": "Temor de que negar libre albedrío destruya moral; Harris argumenta lo contrario."
  }
],
  chronology: [
  {
    "year": "1983",
    "text": "Libet: actividad motora ~300 ms antes de la conciencia de decidir."
  },
  {
    "year": "2007",
    "text": "Crimen de Cheshire; Harris lo usa para ilustrar suerte y culpa."
  },
  {
    "year": "2011",
    "text": "Haynes: fMRI predice elección hasta 10 s antes."
  },
  {
    "year": "2011",
    "text": "Fried: neuronas individuales predicen decisión ~700 ms antes."
  },
  {
    "year": "2012",
    "text": "Publicación de Free Will (Free Press)."
  },
  {
    "year": "1978",
    "text": "United States v. Grayson: libre albedrío como base legal en EE. UU."
  }
],
  figures: [
  {
    "name": "Sam Harris",
    "role": "Autor; neurocientífico y filósofo, argumenta contra el libre albedrío."
  },
  {
    "name": "Benjamin Libet",
    "role": "EEG y potencial de preparación; debate sobre «veto» consciente."
  },
  {
    "name": "Daniel Dennett",
    "role": "Compatibilista; defiende libertad como actuar según deseos propios."
  },
  {
    "name": "John-Dylan Haynes",
    "role": "fMRI: predicción de decisiones segundos antes."
  },
  {
    "name": "Itzhak Fried",
    "role": "Registros neuronales directos en pacientes epilépticos."
  },
  {
    "name": "Eddy Nahmias",
    "role": "Crítica: capacidades de planificación no equivalen a libre albedrío."
  },
  {
    "name": "Jared Diamond",
    "role": "Venganza cumplida vs. arrepentimiento por no vengarse (Holocaust)."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El libre albedrío no es solo falso objetivamente: tampoco coincide con la experiencia si miramos de cerca.",
  "Las intenciones aparecen en conciencia como si brotaran del vacío, pero vienen de causas ocultas.",
  "Podemos reformar justicia y compasión sin el fantasma del autor inmortal.",
  "Reconocerlo no anula elecciones ni esfuerzos: cambia cómo los juzgamos.",
  "Somos tormentas neuronales, no capitanes de ellas."
],
    highlight: "La ilusión de libre albedrío es, a su vez, una ilusión.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Sam Harris",
    line2: "\"Free Will\" · Free Press · 2012",
  },
}
