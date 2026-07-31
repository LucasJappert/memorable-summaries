import type { BookSummary } from '../types/book'

export const structureScientificRevolutions: BookSummary = {
  slug: "structure-scientific-revolutions",
  meta: {
    title: "The Structure of Scientific Revolutions",
    subtitle: "Ciencia normal, crisis y cambio de paradigma",
    author: "Thomas S. Kuhn",
    meta: [
      "📖 1962 · University of Chicago Press (4.ª ed. 2012)",
      "✍️ Ensayo histórico-filosófico; Postscript 1969",
    ],
    titleEs: "La estructura de las revoluciones científicas",
  },
  toc: [
  {
    "id": "cierre",
    "num": "★",
    "label": "La idea central"
  },
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Un papel para la historia"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "El camino hacia la ciencia normal"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "La naturaleza de la ciencia normal"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Ciencia normal como rompecabezas"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "La prioridad de los paradigmas"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Anomalía y descubrimientos científicos"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Crisis y nuevas teorías científicas"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "La respuesta a la crisis"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Naturaleza y necesidad de las revoluciones científicas"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Cambios de visión del mundo"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "La invisibilidad de las revoluciones"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "La resolución de las revoluciones"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Progreso a través de revoluciones"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Postscript (1969)"
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
          html: "¿Cómo un físico teórico terminó escribiendo uno de los libros más influyentes sobre la ciencia del siglo XX?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Thomas S. Kuhn</span> era graduado en física teórica cuando un curso para no científicos, iniciado por <span class=\"person\">James B. Conant</span> en Harvard, lo expuso a teorías obsoletas. Ese contacto destruyó su imagen acumulativa de la ciencia. Las nociones de su formación física y filosófica no encajaban con la historia.",
        },
        {
          type: 'paragraph',
          html: "Estudió con historiadores como <span class=\"person\">Alexandre Koyré</span> y leyó a Piaget y Fleck. En Berkeley conversó con colegas que matizaron sus ideas. Un año en el Center for Advanced Studies (<span class=\"num\">1958–59</span>) mostró que las ciencias naturales rara vez debaten fundamentos. En ciencias sociales eso es habitual. De ahí nació el <span class=\"term\">paradigma</span>, es decir, el logro compartido que orienta la investigación normal.",
        },
        {
          type: 'paragraph',
          html: "El ensayo debía entrar en la Enciclopedia de Ciencia Unificada y quedó condensado. Kuhn advierte que trata sobre todo física y no desarrolla tecnología ni condiciones externas. Su distinción pre-paradigma/post-paradigma es esquemática. Aun así persigue cambiar la percepción de datos familiares.",
        },
        {
          type: 'key',
          html: "La historia de teorías descartadas reveló que la ciencia avanza por rupturas y reorientaciones, no solo por acumulación.",
        },
        {
          type: 'paragraph',
          html: "El primer capítulo generaliza ese hallazgo personal en una crítica de la imagen de la ciencia extraída de los manuales.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Un papel para la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué imagen de la ciencia emerge si la historia deja de servir al estereotipo acumulativo de los libros de texto?",
        },
        {
          type: 'paragraph',
          html: "Los manuales enseñan logros terminados con fines pedagógicos. Por eso sugieren que la ciencia es un stock creciente de hechos y leyes. El historiador solo debe registrar quién descubrió qué. Kuhn abre con una frase programática. La historia, leída en serio, puede transformar por completo esa imagen.",
        },
        {
          type: 'paragraph',
          html: "Los historiadores recientes tropiezan con preguntas mal planteadas. «¿Cuándo se descubrió el oxígeno?» no tiene respuesta única. Al estudiar dinámica aristotélica o química del flogisto descubren que esas visiones fueron ciencia en su tiempo. Eran incompatibles con las nuestras, pero no menos científicas. Entonces la acumulación lineal deja de ser convincente.",
        },
        {
          type: 'paragraph',
          html: "De ahí que Kuhn proponga dos polos complementarios. La <span class=\"term\">ciencia normal</span>, es decir investigación bajo un paradigma aceptado, concentra esfuerzos en rompecabezas definidos. Cuando anomalías persistentes subvierten ese marco, empiezan investigaciones extraordinarias. Son las <span class=\"term\">revoluciones científicas</span>, es decir rupturas que cambian problemas admisibles y estándares de solución.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Imagen textbook",
              "description": "Ciencia como acumulación de hechos y métodos.",
              "icon": "📚"
            },
            {
              "title": "Revolución",
              "description": "Rechazo de una teoría y adopción de otra incompatible.",
              "icon": "🔄"
            },
            {
              "title": "Descubrimiento",
              "description": "No añade un ítem: reconfigura hechos y teoría.",
              "icon": "🧪"
            }
          ],
        },
        {
          type: 'key',
          html: "La ciencia alterna ciencia normal y revoluciones, y la historia muestra un desarrollo menos acumulativo de lo que enseñan los manuales.",
        },
        {
          type: 'paragraph',
          html: "Si la investigación madura bajo paradigmas, hay que explicar cómo una comunidad llega a compartir uno.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El camino hacia la ciencia normal",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo pasa un campo de competencia entre escuelas a una tradición compartida de investigación?",
        },
        {
          type: 'paragraph',
          html: "Kuhn define ciencia normal como investigación basada en logros pasados que una comunidad reconoce como fundamento. Esos logros deben atraer adherentes lejos de modos rivales. También deben dejar problemas abiertos por resolver. A esos logros los llama <span class=\"term\">paradigmas</span>, es decir modelos compartidos de práctica científica.",
        },
        {
          type: 'paragraph',
          html: "En óptica física ilustra el patrón. Antes de Newton había escuelas corpuscular y ondulatoria. Cada una enfatizaba distintos fenómenos. Después de Newton la comunidad compartió un marco común. En electricidad del siglo XVIII hubo muchos «electricistas». La síntesis frankliniana ofreció un paradigma que orientó experimentos clave, como la jarra de Leyden.",
        },
        {
          type: 'paragraph',
          html: "Cuando un paradigma triunfa, las escuelas perdedoras desaparecen o quedan fuera del oficio. Surgen revistas especializadas y formación profesional. El científico ya no reconstruye el campo desde cero. Los manuales fijan vocabulario y problemas. La investigación avanzada se publica en artículos breves para colegas del mismo paradigma.",
        },
        {
          type: 'key',
          html: "Un paradigma une a una comunidad, define problemas legítimos y convierte la investigación dispersa en ciencia normal eficiente.",
        },
        {
          type: 'paragraph',
          html: "Con paradigma establecido, conviene describir qué hace concretamente la mayoría de los científicos cada día.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La naturaleza de la ciencia normal",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿En qué consiste la investigación profesional una vez que un campo acepta un paradigma?",
        },
        {
          type: 'paragraph',
          html: "El paradigma rara vez se replica como un molde gramatical. Funciona más como un precedente judicial que se articula bajo condiciones nuevas. Al inicio promete éxito en casos seleccionados. La ciencia normal actualiza esa promesa precisando hechos y acercando datos a la teoría.",
        },
        {
          type: 'paragraph',
          html: "Por eso Kuhn distingue tres focos empíricos principales. Uno es medir hechos especialmente reveladores, como posiciones estelares o pesos combinantes. Otro es contrastar predicción y observación, como en el paralaje o la máquina de Atwood. Un tercero es articular la teoría mediante constantes, leyes cuantitativas o resolución de ambigüedades.",
        },
        {
          type: 'paragraph',
          html: "En el plano teórico, buena parte del trabajo desarrolla las consecuencias matemáticas del paradigma. No busca inventar teorías nuevas. Después del <span class=\"person\">Principia</span>, generaciones europeas refinan la mecánica celeste. Esa visión estrecha concentra talento donde el paradigma asegura solución.",
        },
        {
          type: 'key',
          html: "La ciencia normal fuerza la naturaleza dentro de la caja del paradigma y profundiza donde ese marco promete resultados.",
        },
        {
          type: 'paragraph',
          html: "Esa actividad encaja mejor si se la entiende como resolución de rompecabezas con reglas explícitas e implícitas.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Ciencia normal como rompecabezas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué los científicos dedican años a problemas cuyo resultado general suele estar previsto?",
        },
        {
          type: 'paragraph',
          html: "Lo llamativo de la investigación normal es cuán poco busca novedades conceptuales o fenomenológicas. Los problemas valiosos son <span class=\"term\">rompecabezas</span>, es decir retos con solución garantizada dentro del paradigma. Cuando el resultado cae fuera del rango esperable, la culpa recae en el investigador y no en el marco.",
        },
        {
          type: 'paragraph',
          html: "El entusiasmo viene de la dificultad técnica. El científico demuestra ingenio al lograr lo anticipado por vías nuevas. Diseña instrumentos, sortea imprecisiones teóricas y domina matemática. Maxwell, Euler o Gauss pasaron años en puzzles celestes sin cuestionar las leyes de Newton.",
        },
        {
          type: 'paragraph',
          html: "El paradigma también filtra qué problemas son científicos. Cuestiones demasiado abiertas o «metafísicas» quedan fuera. Por eso la ciencia normal progresa rápido: casi todos los esfuerzos admisibles deberían resolver algo. Las reglas pueden ser leyes explícitas, compromisos instrumentales o supuestos metafísicos compartidos (corpuscularismo en el siglo XVII).",
        },
        {
          type: 'key',
          html: "La ciencia normal es puzzle-solving regido: éxito técnico dentro de reglas, no búsqueda abierta de lo inesperado.",
        },
        {
          type: 'paragraph',
          html: "Si las reglas no agotan la práctica, hay que mostrar que el paradigma concreto precede a cualquier lista de reglas.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La prioridad de los paradigmas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué una comunidad científica puede investigar sin acordar reglas generales formuladas?",
        },
        {
          type: 'paragraph',
          html: "El historiador encuentra paradigmas en ejemplos recurrentes de libros, cursos y laboratorio, pero extraer reglas explícitas compartidas es frustrante. Científicos eminentes pueden coincidir en un logro paradigmático y discrepar sobre su interpretación abstracta. Aun así, la ciencia normal funciona.",
        },
        {
          type: 'paragraph',
          html: "Según <span class=\"person\">Wittgenstein</span>, no hay rasgos necesarios y suficientes para «juego» o «silla». Hay parecidos de familia. Igual ocurre con problemas y técnicas de una tradición. Los científicos aprenden qué es la fuerza o la masa resolviendo problemas modelo. Por eso el paradigma concreto es anterior y más vinculante que las reglas.",
        },
        {
          type: 'paragraph',
          html: "Cuando el paradigma está seguro, nadie discute reglas. En pre-paradigma o crisis, los debates sobre métodos reaparecen. Un químico y un físico pueden responder distinto si un átomo de helio es molécula. Cada uno ve la pregunta desde su formación. Revoluciones pequeñas en una subspecialidad no conmocionan a toda la física.",
        },
        {
          type: 'key',
          html: "Los paradigmas guían por modelado directo, y las reglas se derivan de esos ejemplos compartidos cuando existen.",
        },
        {
          type: 'paragraph',
          html: "Paradigma rígido hace paradójico que surjan descubrimientos; hay que explicar anomalía y emergencia de lo nuevo.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Anomalía y descubrimientos científicos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo aparecen hechos nuevos si la ciencia normal no los busca?",
        },
        {
          type: 'paragraph',
          html: "El descubrimiento empieza con <span class=\"term\">anomalía</span>, es decir una violación de las expectativas del paradigma. Luego sigue exploración prolongada hasta reencuadrar teoría y percepción. Priestley aisló un gas en <span class=\"num\">1774–75</span> pero lo interpretó como aire desflogisticado. Lavoisier tardó años en ver un elemento distinto. No hay fecha única porque reconocer qué es algo exige categorías preparadas.",
        },
        {
          type: 'paragraph',
          html: "Los rayos X muestran la misma estructura. Roentgen notó en <span class=\"num\">1895</span> que una pantalla brillaba cuando no debía. Semanas de trabajo aislaron un agente distinto de los rayos catódicos. Otros habían visto el brillo sin descubrir nada. Después de asimilar el fenómeno cambiaron instrumentos y expectativas. Apareció blindaje con plomo y se releen experimentos previos.",
        },
        {
          type: 'paragraph',
          html: "Bruner y Postman usaron naipes anómalos, como un seis rojo de picas. Primero los sujetos «normalizan» lo anómalo. Solo después reconfiguran categorías, a veces con angustia. En ciencia, resistencia y reencuadre van juntos.",
        },
        {
          type: 'key',
          html: "Descubrir es un proceso de anomalía y reajuste conceptual, no un acto instantáneo de ver.",
        },
        {
          type: 'paragraph',
          html: "Cuando anomalías se acumulan y resisten, la comunidad entra en crisis y abre paso a teorías nuevas.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Crisis y nuevas teorías científicas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué condiciones históricas preceden a una teoría revolucionaria?",
        },
        {
          type: 'paragraph',
          html: "Las teorías nuevas surgen cuando falla el puzzle-solving normal. Entonces proliferan articulaciones rivales del paradigma. Antes de Copérnico, la astronomía ptolemaica acumulaba complejidad sin ganar precisión. Alfonso X dijo que habría aconsejado mejor a Dios al crear el cosmos. Copérnico describe un monstruo hecho de piezas excelentes pero incoherentes.",
        },
        {
          type: 'paragraph',
          html: "En química de los <span class=\"num\">1770</span>, la química neumática multiplicó gases que el flogisto explicaba peor. Coexistían casi tantas versiones de la teoría como químicos. El peso al calcinar se volvió problema central. Lavoisier depositó una nota sellada en <span class=\"num\">1772</span> antes de articular la teoría del oxígeno.",
        },
        {
          type: 'paragraph',
          html: "En física del siglo XIX, la teoría del éter chocó con experimentos de deriva nula. Proliferaron articulaciones de Lorentz y Fitzgerald. La relatividad especial de <span class=\"person\">Einstein</span> en <span class=\"num\">1905</span> cerró esa crisis. Anticipaciones como Aristarco no prosperaron sin crisis previa en la tradición dominante.",
        },
        {
          type: 'key',
          html: "Crisis prolongada y sensación de seguridad rota preceden casi siempre a teorías que reemplazan un paradigma agotado.",
        },
        {
          type: 'paragraph',
          html: "En crisis, la comunidad no abandona el paradigma por una instancia negativa; hay que ver cómo responde.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "La respuesta a la crisis",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo reaccionan los científicos cuando lo normal deja de funcionar?",
        },
        {
          type: 'paragraph',
          html: "Nunca renuncian al paradigma solo porque una anomalía lo contradiga. Rechazar un paradigma sin sustituto es, para Kuhn, rechazar la ciencia misma. La decisión compara paradigmas con la naturaleza y entre sí. Popper veía refutación en la lógica del método. Kuhn insiste en que la historia no muestra falsación directa.",
        },
        {
          type: 'paragraph',
          html: "Discrepancias hay siempre en ciencia normal, pero no todas provocan crisis. La crisis empieza cuando una anomalía importa y proliferan soluciones ad hoc. Entonces aparece investigación extraordinaria con ensayos aleatorios, especulación y descontento explícito. <span class=\"person\">Pauli</span> escribió en <span class=\"num\">1924</span> que la física estaba «terriblemente confusa». Meses después celebraba la mecánica de matrices.",
        },
        {
          type: 'paragraph',
          html: "A menudo un nuevo paradigma germina antes de que la crisis sea reconocida. El cierre no es acumulativo. Es reconstrucción desde fundamentos nuevos, como ver un dibujo gestáltico distinto sin poder alternar a voluntad.",
        },
        {
          type: 'key',
          html: "La crisis afloja reglas e invita candidatos alternativos, pero el cambio exige sustituto y no mera negación.",
        },
        {
          type: 'paragraph',
          html: "Cuando hay candidato, ocurre revolución; hay que definir su naturaleza y necesidad.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Naturaleza y necesidad de las revoluciones científicas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué llamar revolución al cambio de paradigma y por qué es casi inevitable?",
        },
        {
          type: 'paragraph',
          html: "Una revolución científica reemplaza en todo o en parte un paradigma incompatible por otro. El paralelo político importa porque no hay tribunal neutral superior. Cada bando usa su paradigma para defenderse. La elección es circular, pero muestra cómo será practicar bajo el nuevo marco.",
        },
        {
          type: 'paragraph',
          html: "La novedad genuina rara vez es acumulativa. La ciencia normal resuelve puzzles definidos por lo ya conocido. Lo inesperado surge cuando expectativas fallan. Casi toda asimilación de fenómenos nuevos exige destruir parte del logro anterior. Newton no fue mero añadido a Aristóteles. Lavoisier reorientó la química entera.",
        },
        {
          type: 'paragraph',
          html: "Objetores dicen que Einstein no «refutó» a Newton porque ingenieros siguen usando mecánica clásica. Kuhn responde que salvar teorías restringiéndolas impide investigar donde fallan. El flogisto también «funcionaba» si se limitaba a fenómenos que explicaba.",
        },
        {
          type: 'key',
          html: "Las revoluciones son episodios no acumulativos necesarios para incorporar lo que el paradigma anterior no puede absorber.",
        },
        {
          type: 'paragraph',
          html: "Cambiar paradigma implica ver la naturaleza de investigación de otro modo.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Cambios de visión del mundo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿En qué sentido una revolución cambia la visión del mundo del científico?",
        },
        {
          type: 'paragraph',
          html: "Después de una revolución, los científicos usan instrumentos familiares pero ven cosas distintas. Kuhn sugiere, en modo exploratorio, que pueden «trabajar en un mundo diferente». No hay otro planeta. Cambia la red de relaciones entre datos, teoría y práctica. Es como el experimento gestáltico con patos y conejos.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Herschel</span> identificó Urano en <span class=\"num\">1781</span> porque notó tamaño anómalo. Otros habían registrado el objeto como estrella. Después de Copérnico, los cometas dejaron de ser fenómenos sublunares aislados. <span class=\"person\">Lavoisier</span> vio oxígeno donde <span class=\"person\">Priestley</span> vio aire desflogisticado. <span class=\"person\">Galileo</span> vio péndulo donde Aristóteles veía cuerpo que cae con dificultad.",
        },
        {
          type: 'paragraph',
          html: "No se trata de que «cualquier cosa valga». La formación previa canaliza percepción. Por eso la comunicación entre escuelas rivales es parcial. Hablan palabras parecidas con significados distintos. Eso prepara el terreno para la resolución revolucionaria.",
        },
        {
          type: 'key',
          html: "La revolución re-educa percepción y práctica organizando los mismos objetos en otro gestalt profesional.",
        },
        {
          type: 'paragraph',
          html: "Si el cambio es tan profundo, ¿por qué la historia oficial rara vez lo muestra?",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "La invisibilidad de las revoluciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué las revoluciones parecen invisibles en la imagen habitual de la ciencia?",
        },
        {
          type: 'paragraph',
          html: "La autoridad formativa son manuales, divulgaciones y filosofía que analizan ciencia ya estabilizada. Presentan vocabulario y problemas del paradigma vigente. Ocultan cómo se llegó a él. Después de cada revolución reescriben la historia como línea recta hacia el presente.",
        },
        {
          type: 'paragraph',
          html: "Los héroes quedan, pero obras y contextos se depuran. Newton atribuye a <span class=\"person\">Galileo</span> la ley de caída en términos newtonianos que Galileo no usaba. <span class=\"person\">Dalton</span> reescribió sus propias rutas hacia el atomismo. <span class=\"person\">Boyle</span> no «definió» elemento como enseña el manual. Parafraseó una noción antigua para negar que existan elementos químicos.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Whitehead</span> dijo que una ciencia que duda en olvidar a sus fundadores está perdida. Olvidar revoluciones agiliza la enseñanza. El científico pierde sensibilidad histórica y cree que siempre se buscó lo que hoy importa.",
        },
        {
          type: 'key',
          html: "Los manuales convierten revoluciones en aparente acumulación y hacen difícil ver la estructura real del desarrollo científico.",
        },
        {
          type: 'paragraph',
          html: "Si están ocultas, conviene analizar cómo se cierran: competencia entre paradigmas y conversión comunitaria.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "La resolución de las revoluciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo un nuevo paradigma reemplaza al anterior?",
        },
        {
          type: 'paragraph',
          html: "No hay prueba neutral previa al paradigma. El test ocurre en competencia entre candidatos cuando la crisis ya maduró. Comparar probabilidades de teorías imaginadas exige lenguaje no neutral. La elección es como selección natural entre alternativas históricas reales.",
        },
        {
          type: 'paragraph',
          html: "Proponentes rivales hablan parcialmente a través del otro. Eso es la <span class=\"term\">incommensurabilidad</span>, es decir comparación sin marco totalmente compartido. Discrepan sobre qué problemas debe resolver un paradigma. Cambiar de paradigma es conversión y no deducción paso a paso. <span class=\"person\">Planck</span> observó que la verdad triunfa cuando mueren oponentes y crece una generación nueva.",
        },
        {
          type: 'paragraph',
          html: "Aun así hay argumentos persuasivos. Resolver crisis aguda ayuda. Mayor precisión cuantitativa también, como las tablas de Kepler. Importa conservar capacidad de resolver puzzles del paradigma anterior. La resistencia de científicos mayores protege la eficacia de la ciencia normal hasta que la crisis lo justifica.",
        },
        {
          type: 'key',
          html: "La resolución es persuasión comunitaria entre marcos incompatibles, no verificación lógica independiente.",
        },
        {
          type: 'paragraph',
          html: "Si hay cambios destructivos, ¿cómo hablar de progreso científico?",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Progreso a través de revoluciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la ciencia progresa y en qué sentido lo hace si las revoluciones destruyen continuidad?",
        },
        {
          type: 'paragraph',
          html: "Llamamos «ciencia» a campos que progresan de modo visible. En pre-paradigma o en crisis, el avance es dudoso. En ciencia normal, el progreso parece obvio porque la comunidad comparte un marco y evalúa puzzles resueltos.",
        },
        {
          type: 'paragraph',
          html: "La eficiencia viene de aislamiento profesional, educación por manuales y consenso sobre reglas del juego. El científico elige problemas con herramientas disponibles. Cuando vence un paradigma, la comunidad reescribe historia como progreso y descarta libros del marco anterior. Hay pérdidas. Preguntas válidas bajo flogisto dejan de hacerse.",
        },
        {
          type: 'paragraph',
          html: "Kuhn pregunta si ayuda imaginar una sola descripción objetiva completa de la naturaleza como meta. Él duda. Progreso es alejarse de esquemas que fallaron y resolver más puzzles con precisión creciente. Autoridad para elegir paradigma pertenece a la comunidad especializada.",
        },
        {
          type: 'key',
          html: "Progreso científico es real dentro de tradiciones, pero no garantía de convergencia hacia una verdad única prefijada.",
        },
        {
          type: 'paragraph',
          html: "El Postscript de 1969 aclara malentendidos sobre paradigma, comunidad e incommensurabilidad.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Postscript (1969)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué matizó Kuhn siete años después sobre paradigma, racionalidad y revolución?",
        },
        {
          type: 'paragraph',
          html: "Kuhn reconoce la circularidad inicial entre paradigma y comunidad. Por eso propone empezar por la estructura comunitaria, especialidades de unos cien miembros o menos, y luego hallar compromisos compartidos. Introduce la <span class=\"term\">matriz disciplinar</span>, es decir la constelación de valores, técnicas y exemplars de una especialidad.",
        },
        {
          type: 'paragraph',
          html: "Distingue paradigma-exemplar del sentido sociológico. Retracta parcialmente la idea de un periodo sin paradigma. Todas las escuelas tienen algo paradigmático. Cambia la naturaleza del paradigma al madurar el campo. Revoluciones pueden ser pequeñas en comunidades de unas veinticinco personas. Crisis no siempre es prerequisito absoluto.",
        },
        {
          type: 'paragraph',
          html: "Kuhn defiende racionalidad. El conocimiento tácito en ejemplos es sistemático y corregible. Incommensurabilidad se parece a traducción entre comunidades lingüísticas. Niega relativismo total. Hay estándares de precisión, coherencia, amplitud y fructíferidad. Críticos confundieron tesis descriptivas con negación de verdad.",
        },
        {
          type: 'key',
          html: "Separar comunidad y exemplar disuelve vaguedades del «paradigma» sin abandonar la estructura revolucionaria central.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Paradigma",
    "description": "Logro científico compartido que modela problemas, métodos e instrumentos."
  },
  {
    "title": "Ciencia normal",
    "description": "Investigación puzzle-solving bajo un paradigma aceptado."
  },
  {
    "title": "Anomalía",
    "description": "Resultado que viola expectativas inducidas por el paradigma."
  },
  {
    "title": "Crisis",
    "description": "Fallo persistente del puzzle-solving; proliferación de versiones rivales."
  },
  {
    "title": "Revolución científica",
    "description": "Reemplazo de un paradigma incompatible y reorientación comunitaria."
  },
  {
    "title": "Incommensurabilidad",
    "description": "Comunicación parcial entre marcos; comparación sin neutralidad total."
  },
  {
    "title": "Matriz disciplinar",
    "description": "Compromisos compartidos de una especialidad (Postscript)."
  },
  {
    "title": "Exemplar",
    "description": "Solución concreta usada como modelo en formación y research."
  },
  {
    "title": "Progreso «away from»",
    "description": "Avance alejándose de esquemas fallidos, no hacia verdad única dada."
  }
],
  chronology: [
  {
    "year": "1740s",
    "text": "Jarra de Leyden y consolidación del paradigma frankliniano en electricidad."
  },
  {
    "year": "1772",
    "text": "Lavoisier deposita nota sellada sobre peso al calcinar."
  },
  {
    "year": "1774–77",
    "text": "Priestley, Scheele y Lavoisier: oxígeno y reorientación química."
  },
  {
    "year": "1781",
    "text": "Herschel identifica Urano tras reinterpretar observaciones previas."
  },
  {
    "year": "1895",
    "text": "Roentgen descubre rayos X (noviembre–diciembre)."
  },
  {
    "year": "1905",
    "text": "Einstein publica relatividad especial tras crisis del éter."
  },
  {
    "year": "1962",
    "text": "Publicación de Structure (Chicago); ensayo en Enciclopedia de Ciencia Unificada."
  },
  {
    "year": "1969",
    "text": "Postscript aclara paradigma, comunidad e incommensurabilidad."
  },
  {
    "year": "2012",
    "text": "4.ª edición con ensayo introductorio de Ian Hacking."
  }
],
  figures: [
  {
    "name": "Thomas S. Kuhn",
    "role": "Autor; físico → historiador y filósofo de la ciencia"
  },
  {
    "name": "James B. Conant",
    "role": "Introduce a Kuhn a la historia de la ciencia en Harvard"
  },
  {
    "name": "Alexandre Koyré",
    "role": "Modelo de historiografía que respeta teorías pasadas en contexto"
  },
  {
    "name": "Ludwik Fleck",
    "role": "Antecedente sobre hechos científicos y pensamiento colectivo"
  },
  {
    "name": "Copernicus / Newton / Lavoisier / Einstein",
    "role": "Revoluciones paradigmáticas centrales del ensayo"
  },
  {
    "name": "Priestley / Lavoisier",
    "role": "Oxígeno: descubrimiento vs reencuadre revolucionario"
  },
  {
    "name": "Roentgen",
    "role": "Rayos X como anomalía instrumental (1895)"
  },
  {
    "name": "Planck / Pauli / Heisenberg",
    "role": "Crisis y conversión en física cuántica"
  },
  {
    "name": "Ian Hacking",
    "role": "Ensayo introductorio en la edición conmemorativa 2012"
  }
],
  closing: {
    title: "La idea central",
    lines: [],
    highlight: "",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Thomas S. Kuhn",
    line2: "\"The Structure of Scientific Revolutions\" · University of Chicago Press · 1962",
  },
}
