import type { BookSummary } from '../types/book'

export const death: BookSummary = {
  slug: "death",
  meta: {
    title: "Death",
    subtitle: "Una introducción filosófica a la mortalidad, el alma y el valor de vivir",
    author: "Shelly Kagan",
    meta: [
      "📖 2012 · Yale University Press",
      "✍️ Basado en el curso Open Yale Courses (2007)",
    ],
    titleEs: "La muerte",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Agradecimientos"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Pensar la muerte"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Dualismo frente a fisicalismo"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Argumentos a favor del alma"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "El argumento de Descartes"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Platón y la inmortalidad del alma"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Identidad personal"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Elegir entre las teorías"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "La naturaleza de la muerte"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Dos afirmaciones sorprendentes"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "La mala de la muerte"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "Inmortalidad"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "El valor de la vida"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Otros aspectos de la muerte"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "Vivir frente a la muerte"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Suicidio"
  },
  {
    "id": "cap16",
    "num": "16",
    "label": "Conclusión: una invitación"
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
    "num": "★",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Agradecimientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Este libro proviene de un curso sobre la muerte que <span class=\"person\">Shelly Kagan</span> enseñó durante años en Yale y, antes, en la Universidad de Illinois en Chicago. En el semestre de primavera de <span class=\"num\">2007</span>, las clases se grabaron para <span class=\"term\">Open Yale Courses</span>, y las transcripciones formaron el primer borrador de la obra.",
        },
        {
          type: 'paragraph',
          html: "Al revisar esas transcripciones, Kagan eliminó repeticiones, corrigió errores y acortó la discusión de Platón, pero conservó el tono informal de las conferencias. La muerte es un tema serio, escribe, pero no hace falta un academicismo pesado para tratarlo. Agradece a estudiantes y oyentes en línea cuyas preguntas le mostraron que estas ideas interesan más allá de la academia.",
        },
        {
          type: 'paragraph',
          html: "El libro es introductorio en dos sentidos. No exige formación previa en filosofía, pero tampoco promete facilidad. Algunas ideas requieren una segunda lectura. Además, no agota los temas, porque cada capítulo podría extenderse mucho más. Lo que ofrece son primeras palabras, no la última sobre la muerte.",
        },
        {
          type: 'key',
          html: "Un curso universitario grabado en línea se transformó en una introducción filosófica accesible pero exigente sobre la mortalidad.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Pensar la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Este libro trata la muerte desde la filosofía, no desde la psicología del duelo ni la sociología del morir. <span class=\"person\">Shelly Kagan</span> deja fuera el proceso de morir, el luto, la industria funeraria y las actitudes sociales que ocultan a los moribundos. En cambio, plantea preguntas como qué somos, si tenemos <span class=\"term\">alma</span>, qué significa sobrevivir y si la muerte puede ser mala.",
        },
        {
          type: 'paragraph',
          html: "La primera mitad del libro es metafísica: existencia del alma, naturaleza de la muerte, identidad personal. La segunda mitad es <span class=\"term\">teoría del valor</span>: mala de la muerte, deseabilidad de la inmortalidad, actitud ante la finitud y racionalidad del suicidio. A diferencia de muchos textos introductorios, Kagan no se declara neutral: defenderá una línea de pensamiento concreta y tratará de convencer al lector.",
        },
        {
          type: 'paragraph',
          html: "La visión común que combate incluye creer en alma inmaterial, esperar supervivencia, temer la muerte como misterio horrible, desear inmortalidad y rechazar el suicidio siempre. En cambio, defiende que no hay alma, que la inmortalidad no sería buena, que el miedo no siempre es apropiado, que la muerte no es especialmente misteriosa y que el suicidio puede justificarse en algunos casos.",
        },
        {
          type: 'paragraph',
          html: "El libro no apela a autoridad religiosa. Puede leerse como un gran hipotético secular: qué conclusiones alcanzaríamos usando solo la razón, sin revelación ni Biblia. Kagan advierte que la filosofía puede ser difícil y que cada tema admite argumentos más complejos de los que caben aquí.",
        },
        {
          type: 'key',
          html: "La muerte se aborda con argumentos filosóficos y secularmente, rechazando la visión popular del alma, el miedo y la inmortalidad deseable.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Dualismo frente a fisicalismo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Para saber si podemos sobrevivir a la muerte hay que aclarar dos cosas: qué clase de cosa soy y qué significa <span class=\"term\">sobrevivir</span>. El problema de la <span class=\"term\">identidad personal</span> pregunta qué hace que la persona de mañana sea la misma que la de hoy. Sin esas definiciones, la pregunta «¿hay vida después de la muerte?» queda confusa.",
        },
        {
          type: 'paragraph',
          html: "Una objeción inicial dice que la pregunta es trivial: «vida después del fin de la vida» debe responderse con un no obvio, como preguntar si queda comida después de comerse todo el plato. Kagan responde que esa objeción apresura el análisis. Si «yo» soy algo que podría continuar sin mi cuerpo, la pregunta no es vacía.",
        },
        {
          type: 'paragraph',
          html: "Las dos posturas rivales son el <span class=\"term\">dualismo</span> y el <span class=\"term\">fisicalismo</span>. El dualista cree que somos cuerpo más alma inmaterial. Para él, la mente es un alma no físico. El fisicalista también cree en mentes, pero las entiende como capacidades del cuerpo, como pensar, sentir y planear. En este libro, «alma» designa solo la entidad inmaterial del dualismo. Los fisicalistas niegan almas, no mentes.",
        },
        {
          type: 'paragraph',
          html: "La pregunta central del bloque metafísico queda planteada: ¿debemos creer en almas o solo en cuerpos que funcionan mentalmente? Los capítulos siguientes examinan argumentos para cada lado.",
        },
        {
          type: 'key',
          html: "Sobrevivir a la muerte solo tiene sentido tras definir qué somos, y la disputa básica es dualismo del alma frente a fisicalismo del cuerpo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Argumentos a favor del alma",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Después de presentar dualismo y fisicalismo, Kagan pregunta si hay buenas razones para creer en el <span class=\"term\">alma</span>. Ambas posturas aceptan cuerpos y divergen en si hace falta añadir una sustancia inmaterial. Los argumentos que examina apelan a experiencias, explicación y coherencia metafísica.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">experiencias cercanas a la muerte</span> no demuestran alma, porque pueden interpretarse como fenómenos cerebrales bajo estrés extremo. El <span class=\"term\">problema de la interacción</span> tampoco prueba dualismo. Solo señala una dificultad de la postura dualista (¿cómo lo inmaterial mueve lo material?) sin validarla.",
        },
        {
          type: 'paragraph',
          html: "El argumento más prometedor es la <span class=\"term\">inferencia a la mejor explicación</span>: quizá el alma explica conciencia, libre albedrío o unidad de la experiencia mejor que el fisicalismo. Kagan concluye que, hoy, el dualismo no ofrece explicación real en los casos difíciles sino que postula lo inmaterial como etiqueta. Eso no basta.",
        },
        {
          type: 'paragraph',
          html: "Ninguno de estos caminos convence. Queda por considerar un argumento distinto, puramente filosófico: el de Descartes.",
        },
        {
          type: 'key',
          html: "Los argumentos empíricos y explicativos revisados no ofrecen hoy una razón convincente para postular un alma inmaterial.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "El argumento de Descartes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">René Descartes</span> ofrece un argumento desde el sillón, sin premisas empíricas fuertes. Pide imaginar una mañana en la que existe mi mente pero no mi cuerpo: si puedo concebir esa situación, parecería que mente y cuerpo son distintos, y entonces podría haber almas.",
        },
        {
          type: 'paragraph',
          html: "El argumento seduce porque apela a la imaginación, no a laboratorios. Kagan sostiene, sin embargo, que Descartes falla ya en la primera premisa. En realidad no estoy imaginando un mundo donde mi mente existe sin cuerpo, sino un mundo donde alguien sin cuerpo cree erróneamente ser yo. Eso podría mostrar que las mentes sin cuerpo son lógicamente posibles, no que la mía lo sea.",
        },
        {
          type: 'paragraph',
          html: "Después de revisar también otros intentos de inferencia a la mejor explicación, Kagan concluye con escepticismo que no tenemos buena razón para creer en el alma. Debemos rechazar el dualismo y adoptar el fisicalismo. Si alguien sigue creyendo en alma, debería poder decir cuál es el argumento, no solo encontrar la idea reconfortante.",
        },
        {
          type: 'key',
          html: "El argumento cartesiano de concebibilidad no demuestra que mi mente sea distinta de mi cuerpo ni que yo tenga alma.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Platón y la inmortalidad del alma",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aunque existiera alma, no seguiría siendo inmortal. <span class=\"person\">Platón</span>, en el <span class=\"term\">Fedón</span>, intenta demostrar lo contrario. Kagan examina varios argumentos del diálogo aunque el libro acorte esa sección respecto a las clases originales.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">argumento de las Formas</span> sostiene que el alma, como lo invisible y eterno, se asemeja a las Formas y por eso perdura. El <span class=\"term\">argumento de la simplicidad</span> afirma que el alma es simple, sin partes, y lo simple no puede descomponerse. El de <span class=\"term\">reminiscencia</span> dice que aprendemos recordando verdades de vidas anteriores.",
        },
        {
          type: 'paragraph',
          html: "Ninguno convence a Kagan. Además, Platón critica el fisicalismo con analogías de instrumentos (la armonía no sobrevive al laúd roto). Eran los mejores esbozos posibles en su época, pero no refutan una biología moderna del cuerpo pensante.",
        },
        {
          type: 'paragraph',
          html: "Cuando el alma no está bien fundamentada, la inmortalidad platónica pierde suelo. El libro pasa entonces a preguntar qué somos si solo hay cuerpos, es decir, la identidad personal.",
        },
        {
          type: 'key',
          html: "Los argumentos platónicos por la inmortalidad del alma y contra el fisicalismo no resisten un escrutinio filosófico cuidadoso.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Identidad personal",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Kagan resume su conclusión previa: no hay buenas razones para creer en alma. Si no hay alma, debemos explicar la <span class=\"term\">identidad personal</span> de otro modo. Presenta tres teorías rivales: la del alma, la del cuerpo y la de la personalidad.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría del cuerpo</span> ve a la persona como un cuerpo con etapas continuas, como un sándwich o un salame de rebanadas conectadas. La <span class=\"term\">teoría de la personalidad</span>, asociada a <span class=\"person\">John Locke</span>, identifica al yo con un conjunto de recuerdos, creencias, deseos y proyectos con continuidad.",
        },
        {
          type: 'paragraph',
          html: "En la vida ordinaria las tres teorías coinciden. Mismo cuerpo, misma personalidad, misma persona. Pero en casos fantásticos divergen. La teoría de la personalidad no exige conservar cada recuerdo infantil. Basta un patrón de solapamiento y continuidad entre etapas.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Peter van Inwagen</span> y otros exploran variantes corporales, y <span class=\"person\">John Perry</span> dramatiza el debate en diálogos. El capítulo prepara experimentos mentales para decidir cuál teoría es más plausible.",
        },
        {
          type: 'key',
          html: "Sin alma, la identidad personal debe explicarse por continuidad del cuerpo o de la personalidad psicológica, no por un yo inmaterial.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Elegir entre las teorías",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Kagan no acepta la teoría del alma, así que la elección queda entre cuerpo y personalidad. Recurre a casos imaginarios de <span class=\"person\">Bernard Williams</span> y <span class=\"person\">Derek Parfit</span> para forzar la decisión, como torturas con cambio de cerebro, teletransportación, duplicación y fisión.",
        },
        {
          type: 'paragraph',
          html: "Si solo importara la personalidad, una copia con mis recuerdos podría contar como yo. Si importa el cuerpo, necesito continuidad corporal biológica. Los casos muestran tensiones: a veces queremos decir que sobrevivo, a veces que solo hay un sucesor o dos personas distintas.",
        },
        {
          type: 'paragraph',
          html: "Kagan no cree en resurrección corporal ni en trasplante de personalidad a cuerpos nuevos por decisión divina. Deja abierta la discusión teológica, pero su conclusión secular es clara: la muerte será el fin de él y de su personalidad.",
        },
        {
          type: 'paragraph',
          html: "Esa conclusión habilita preguntar qué es morir en sí mismo, no solo si hay algo después.",
        },
        {
          type: 'key',
          html: "Los experimentos mentales sobre duplicación y tortura favorecen teorías corporales o psicológicas y apoyan que la muerte será el fin del yo.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "La naturaleza de la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Para el fisicalista, una persona es un cuerpo con <span class=\"term\">funciones P</span>: capacidades de pensar, sentir, amar, planear, ser racional y autoconsciente. Un cuerpo <span class=\"term\">P-funcionante</span> es una persona viva. Morir es dejar de ser eso.",
        },
        {
          type: 'paragraph',
          html: "La respuesta básica parece simple. Vivo mientras el cuerpo funciona correctamente y muero cuando deja de hacerlo. Pero hay que precisar qué funciones cuentan. Hay funciones vitales <span class=\"term\">B</span>, como respirar y circular sangre, y funciones cognitivas superiores P.",
        },
        {
          type: 'paragraph',
          html: "Mientras las funciones B siguen, el cuerpo está vivo biológicamente. Con P activas, hay persona. Cuando el cuerpo pierde P, ya no hay persona viva, aunque B puedan continuar un tiempo. Cuando también fallan las B, muere el cuerpo.",
        },
        {
          type: 'paragraph',
          html: "Desde la filosofía no hay misterio: el cuerpo funciona y luego se rompe. Los detalles son científicos, no metafísicos.",
        },
        {
          type: 'key',
          html: "Morir, para el fisicalista, es perder las funciones cognitivas que hacen de un cuerpo una persona viva.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Dos afirmaciones sorprendentes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Kagan examina dos frases populares sobre la muerte. La primera, asociada a <span class=\"person\">Sigmund Freud</span>, dice que en el fondo no creemos que vamos a morir: operamos como si fuéramos inmortales, aunque intelectualmente sepamos lo contrario.",
        },
        {
          type: 'paragraph',
          html: "La segunda afirma que «todos morimos solos». Kagan prueba interpretaciones literales, sociales, psicológicas y religiosas. En ninguna sale una verdad profunda: o es falsa (puedes morir acompañado) o es trivial (todos experimentamos cosas por nosotros mismos).",
        },
        {
          type: 'paragraph',
          html: "La lectura psicológica tampoco funciona, porque morir solo no implica sentirse abandonado en el momento final. Kagan sospecha que la frase se repite sin pensar, como lugar común vacío.",
        },
        {
          type: 'paragraph',
          html: "Despejadas estas ideas, puede abordarse la pregunta central de la segunda mitad: ¿por qué la muerte es mala?",
        },
        {
          type: 'key',
          html: "Ni la negación inconsciente de nuestra muerte ni el eslogan «todos morimos solos» resisten un análisis filosófico riguroso.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "La mala de la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La intuición dice que la muerte es mala. Pero <span class=\"person\">Epicuro</span> plantea un puzzle. Si después de morir no existo, ¿cómo puede ser mala para mí? No parece mala ahora, vivo, ni después, cuando ya no habrá yo. <span class=\"person\">Lucrecio</span> extiende la simetría al período prenatal. Antes de nacer tampoco existía yo, y no me lamenta.",
        },
        {
          type: 'paragraph',
          html: "La respuesta que Kagan favorece es la <span class=\"term\">cuenta de privación</span>: la muerte es mala porque me priva de los bienes que la vida me habría dado. <span class=\"person\">Thomas Nagel</span> y <span class=\"person\">Derek Parfit</span> ayudan a ver cómo algo puede perjudicarme aunque no me «ocurra» en un momento experienciable.",
        },
        {
          type: 'paragraph',
          html: "Quedan puzzles residuales sobre cuándo ocurre el daño y cómo comparar vidas posibles. Pero la privación captura el núcleo: estar muerto es perder lo que habría disfrutado o logrado si siguiera vivo.",
        },
        {
          type: 'paragraph',
          html: "Si la muerte priva de bienes, surge la tentación de pensar que nunca morir sería ideal. El siguiente capítulo cuestiona esa idea.",
        },
        {
          type: 'key',
          html: "La muerte es mala principalmente porque nos priva de bienes futuros, no porque nos haga sufrir estando muertos.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Inmortalidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Muchos desean vivir para siempre. <span class=\"person\">Bernard Williams</span>, en el <span class=\"term\">caso Makropulos</span>, argumenta lo contrario: Elfa lleva <span class=\"num\">342</span> años con el mismo carácter y encuentra la eternidad insoportablemente aburrida.",
        },
        {
          type: 'paragraph',
          html: "La inmortalidad no garantiza felicidad. Puede producir tedio, alienación y pérdida de sentido. <span class=\"person\">Jonathan Swift</span> imaginó a los Struldbrugs, condenados a envejecer sin morir. Incluso la fantasía literaria sugiere que la vida sin fin no es obviamente deseable.",
        },
        {
          type: 'paragraph',
          html: "Kagan concluye que no ser inmortales puede ser bueno, porque evita ese infierno interminable. Eso no implica que morir cuando morimos sea siempre a tiempo. Aún puede ser demasiado pronto.",
        },
        {
          type: 'paragraph',
          html: "La muerte como fin no es el peor escenario posible. La inmortalidad tampoco es el mejor.",
        },
        {
          type: 'key',
          html: "La inmortalidad sería indeseable porque una vida sin fin puede volverse tediosa y vacía, como muestra el caso Makropulos.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "El valor de la vida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué hace valiosa una vida? No solo la cantidad de placer. <span class=\"person\">Robert Nozick</span> mostró que no elegiríamos una máquina de experiencias placenteras si perdiéramos proyectos reales. Importan bienes internos, relaciones y la <span class=\"term\">forma</span> global de la vida.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría del contenedor valioso</span> compara la vida con un recipiente. Lo que importa es lo que contiene, no solo el hecho de seguir existiendo. Los optimistas creen que el próximo tramo de vida casi siempre vale la pena. Los pesimistas niegan eso siempre.",
        },
        {
          type: 'paragraph',
          html: "Kagan se inclina por una posición moderada. Muchas personas, quizá la mayoría, ven llegar la muerte demasiado pronto. Pero no para todos. Hay situaciones de dolor incurable y deterioro irreversible donde continuar viviendo deja de ser un beneficio.",
        },
        {
          type: 'paragraph',
          html: "Esa gradación del valor vital prepara el terreno para el suicidio y para preguntar cómo deberíamos vivir sabiendo que moriremos.",
        },
        {
          type: 'key',
          html: "El valor de la vida depende de proyectos y bienes reales, y la muerte puede llegar demasiado pronto para muchos, aunque no para todos.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Otros aspectos de la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Además de si la muerte es mala, Kagan señala otros rasgos: la <span class=\"term\">universalidad</span> de la muerte, su <span class=\"term\">impredecibilidad</span> y la pregunta filosófica de si habría sido mejor no nacer. Todos hemos nacido y todos moriremos, pero rara vez sabemos cuándo.",
        },
        {
          type: 'paragraph',
          html: "Algunos filósofos sostienen que sería mejor no haber existido. Kagan discute esa línea sin concederla del todo, y subraya que aun si fuera cierta no seguiría que el suicidio sea la respuesta correcta. De la desvaloración del nacimiento no se deduce automáticamente que deba acabarse la vida.",
        },
        {
          type: 'paragraph',
          html: "Kagan pide, con ironía, mostrar «a una persona entre mil» tan afortunada que justifique el optimismo antinatalista. El punto es separar la mala metafísica de existir de la decisión práctica de seguir viviendo.",
        },
        {
          type: 'paragraph',
          html: "Antes de juzgar el suicidio, hay que preguntar cómo vivir conscientes de estos hechos. Ese es el tema del capítulo siguiente.",
        },
        {
          type: 'key',
          html: "La muerte es universal e impredecible, y aun la duda sobre si valió la pena nacer no implica por sí sola que el suicidio sea adecuado.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "Vivir frente a la muerte",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mayoría evita pensar en la muerte y pasa cementerios sin mirar. Kagan propone estrategias para vivir con la finitud. Una es ignorarla. Otra es el miedo paralizante. La que él prefiere para la mayoría es un conjunto de actitudes optimistas.",
        },
        {
          type: 'paragraph',
          html: "Esas actitudes incluyen comprometerse en proyectos significativos, cultivar relaciones y apreciar la vida como privilegio. <span class=\"person\">Kurt Vonnegut</span>, en <span class=\"term\">Cat's Cradle</span>, celebra ser «barro sentado», materia organizada que por un tiempo puede reflexionar sobre el universo. Kagan leía ese pasaje a sus alumnos. Vonnegut murió en <span class=\"num\">2007</span> mientras se grababa el curso.",
        },
        {
          type: 'paragraph',
          html: "El miedo a la muerte no siempre es racional. A veces refleja confundir finitud con castigo. <span class=\"person\">Friedrich Hölderlin</span> invita a recordar que «una vez vivimos como dioses» al valorar los momentos intensos. Vías pesimistas como <span class=\"person\">Arthur Schopenhauer</span> o cierto budismo enseñan desapego, pero Kagan solo esboza esas rutas sin adoptarlas plenamente.",
        },
        {
          type: 'paragraph',
          html: "La pregunta práctica es cómo hacer la vida más valiosa antes de que termine, no solo cómo negar el final.",
        },
        {
          type: 'key',
          html: "Ante la muerte como fin, conviene más cultivar proyectos y gratitud que el miedo paralizante o la negación ciega.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Suicidio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Podemos controlar, en parte, cuándo termina nuestra vida. La cultura suele ver el suicidio como siempre irracional e inmoral. Kagan pregunta bajo qué condiciones podría tener sentido. Recurre a gráficos de bienestar para mostrar que hay momentos en que estar muerto sería mejor que seguir vivo.",
        },
        {
          type: 'paragraph',
          html: "El caso real de <span class=\"person\">Donald «Dax» Cowart</span>, quemado gravemente y obligado a tratamientos que no deseaba, ilustra tensiones entre autonomía y paternalismo. <span class=\"person\">David Hume</span>, en «On Suicide», defiende que la libertad de quitarse la vida puede ser racional cuando el balance de bienes es negativo.",
        },
        {
          type: 'paragraph',
          html: "Kagan formula un <span class=\"term\">principio de consentimiento</span>. El suicidio es permisible si la persona está informada, competente, actúa voluntariamente y tiene buenas razones. Ante intentos, conviene una presunción de cautela y preguntarse si la persona piensa con claridad. Esa cautela no equivale a prohibición absoluta.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Philippa Foot</span> y la doctrina del doble efecto aparecen en casos límite de ayudar a morir. Si se cumplen las condiciones, puede ser legítimo dejar morir a quien ha decidido con razón.",
        },
        {
          type: 'key',
          html: "El suicidio puede ser racional y moralmente permisible cuando quien decide está informado, competente y tiene buenas razones.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "Conclusión: una invitación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Al inicio, Kagan invitó a pensar la muerte. Al cerrar, recuerda que pocos lo hacen. Caminamos junto a cementerios sin detenernos. Leer este libro ya es una excepción.",
        },
        {
          type: 'paragraph',
          html: "Lo más importante no es que el lector acepte cada tesis suya sobre alma, inmortalidad, miedo o suicidio. Lo crucial es haber examinado críticamente las propias creencias y preguntarse qué se puede defender con argumentos, no solo desear.",
        },
        {
          type: 'paragraph',
          html: "Aun así, admite sin disimulo que sí quiere convencer y cree que sus posiciones son verdaderas. Valorará sobre todo que el lector haya mirado de frente un tema que la mayoría evita.",
        },
        {
          type: 'paragraph',
          html: "La muerte merece reflexión racional. Estas páginas fueron un comienzo, no el final del debate.",
        },
        {
          type: 'key',
          html: "El libro cierra invitando a examinar críticamente las propias creencias sobre la muerte, más que a aceptar sin pensar la visión común.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Dualismo",
    "description": "Postura según la cual somos cuerpo más alma inmaterial; la mente no es solo el cerebro."
  },
  {
    "title": "Fisicalismo",
    "description": "Somos cuerpos; la mente es el conjunto de capacidades cognitivas y afectivas del cuerpo."
  },
  {
    "title": "Alma (jerga de Kagan)",
    "description": "Sustancia inmaterial distinta del cuerpo; los fisicalistas niegan almas pero no mentes."
  },
  {
    "title": "Identidad personal",
    "description": "Criterio de lo que hace que el yo de un tiempo sea el mismo que el de otro."
  },
  {
    "title": "Funciones P y B",
    "description": "Cognitivas superiores (persona) y vitales (organismo); su pérdida define muerte fisicalista."
  },
  {
    "title": "Cuenta de privación",
    "description": "La muerte es mala porque quita bienes que la vida futura habría proporcionado."
  },
  {
    "title": "Puzzle de Epicuro",
    "description": "Cómo puede perjudicarme algo cuando ya no existo para experimentarlo."
  },
  {
    "title": "Caso Makropulos",
    "description": "Ejemplo de Williams: inmortalidad con el mismo carácter produce tedio insoportable."
  },
  {
    "title": "Principio de consentimiento",
    "description": "Suicidio moral si hay información, competencia, voluntariedad y buenas razones."
  },
  {
    "title": "Inferencia a la mejor explicación",
    "description": "Razonar que el alma explica mejor la mente; Kagan lo encuentra insuficiente hoy."
  }
],
  chronology: [
  {
    "year": "s. IV a. C.",
    "text": "Platón escribe el Fedón y argumenta por la inmortalidad del alma."
  },
  {
    "year": "s. III a. C.",
    "text": "Epicuro formula la paradoja de por qué la muerte no parece mala para el muerto."
  },
  {
    "year": "s. I a. C.",
    "text": "Lucrecio extiende la simetría temporal al período prenatal."
  },
  {
    "year": "1689",
    "text": "Locke publica su teoría de identidad personal por continuidad de conciencia."
  },
  {
    "year": "2007",
    "text": "Yale graba el curso «Death» para Open Yale Courses; Vonnegut muere ese año."
  },
  {
    "year": "2012",
    "text": "Yale University Press publica el libro basado en las transcripciones revisadas."
  }
],
  figures: [
  {
    "name": "Shelly Kagan",
    "role": "Autor; profesor de filosofía en Yale; conductor del curso y del argumento fisicalista."
  },
  {
    "name": "René Descartes",
    "role": "Filósofo del argumento de concebibilidad mente/cuerpo."
  },
  {
    "name": "Platón",
    "role": "Autor del Fedón; defensor clásico de alma e inmortalidad."
  },
  {
    "name": "John Locke",
    "role": "Teoría de la personalidad y continuidad psicológica."
  },
  {
    "name": "Bernard Williams",
    "role": "Casos de tortura, identidad y tedio de la inmortalidad (Makropulos)."
  },
  {
    "name": "Derek Parfit",
    "role": "Teletransportación, privación y valor de vidas futuras."
  },
  {
    "name": "Epicuro",
    "role": "Paradoja sobre la mala de la muerte para quien ya no existe."
  },
  {
    "name": "Lucrecio",
    "role": "Simetría entre daño prenatal y post mortem."
  },
  {
    "name": "Thomas Nagel",
    "role": "Articulación moderna de la mala de la muerte por privación."
  },
  {
    "name": "David Hume",
    "role": "Defensa filosófica de la racionalidad del suicidio."
  },
  {
    "name": "Kurt Vonnegut",
    "role": "Cat's Cradle y la metáfora del «barro sentado» ante la finitud."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La muerte no es un enigma metafísico que exija alma, miedo o desesperación.",
  "Somos cuerpos que piensan y sienten; morir es dejar de funcionar así, y eso puede ser malo porque nos priva de vida, no porque nos duela estando muertos.",
  "La inmortalidad no salvaría el problema: una vida sin fin podría volverse insoportable.",
  "El suicidio no es siempre locura ni crimen; a veces es la respuesta racional de quien ha pensado sus razones.",
  "Lo esencial es examinar las propias creencias, no solo heredarlas."
],
    highlight: "Pensar la muerte con rigor secular cambia cómo vivimos, qué tememos y cuándo tiene sentido elegir morir.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Shelly Kagan",
    line2: "\"Death\" · Yale University Press · 2012",
  },
}
