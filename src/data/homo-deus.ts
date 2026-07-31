import type { BookSummary } from '../types/book'

export const homoDeus: BookSummary = {
  slug: "homo-deus",
  meta: {
    title: "Homo Deus: A Brief History of Tomorrow",
    subtitle: "Cuando hambre, enfermedad y guerra dejan de ser destino, ¿en qué se convierte el ser humano?",
    author: "Yuval Noah Harari",
    meta: [
      "📖 2015 · Vintage / Spiegel & Grau",
      "✍️ Secuela de Sapiens; dedicado a S. N. Goenka",
    ],
    titleEs: "Homo Deus: Una breve historia del mañana",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "De Sapiens a Homo Deus",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué sigue después de conquistar la Tierra? En <span class=\"term\">Sapiens</span> (su libro anterior), el historiador <span class=\"person\">Yuval Noah Harari</span> explicó cómo una especie insignificante dominó el planeta. Ahora pregunta qué haremos con ese poder cuando la tecnología nos dé capacidades casi divinas.",
        },
        {
          type: 'paragraph',
          html: "La tesis inquietante es clara. En la codicia por salud, felicidad y poder, el <span class=\"person\">Homo sapiens</span> podría fabricar un <span class=\"term\">Homo deus</span> (un humano mejorado biotecnológicamente). Sería más distinto de nosotros que nosotros del neandertal. Harari advierte que las máquinas podrían superarnos en casi todo. Entonces habría que repensar qué queda del humano y del <span class=\"term\">humanismo</span> (la fe moderna que hizo del ser humano la medida de todas las cosas).",
        },
        {
          type: 'paragraph',
          html: "El libro avanza en tres movimientos. Primero, cómo el sapiens conquistó el mundo. Segundo, cómo le dio sentido con ficciones compartidas. Tercero, cómo pierde el control ante la biotecnología, la inteligencia artificial y la religión de los datos. Harari aclara que el ocaso del humanismo no tiene por qué ser catastrófico. Cayeron faraones y «murió Dios» sin fin del mundo. Harari recuerda que la historia no tolera vacíos. Algo ocupará el trono.",
        },
        {
          type: 'key',
          html: "El sapiens está por convertirse en <span class=\"key-term\">Homo deus</span>. La pregunta del libro no es si tendremos poderes divinos, sino qué quedará del humano cuando los usemos.",
        },
        {
          type: 'paragraph',
          html: "Antes de imaginar dioses tecnológicos, Harari muestra que los viejos azotes ya dejaron de ser destino.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "La nueva agenda humana",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando hambre, peste y guerra dejan de mandar? Al amanecer del tercer milenio, la humanidad descubre algo asombroso. Esos tres problemas milenarios dejaron de ser fuerzas incontrolables de la naturaleza. Pasaron a ser retos gestionables.",
        },
        {
          type: 'paragraph',
          html: "Harari no dice que esos males desaparecieron, pero sí que cambió su estatus. Ya no rezamos para que un dios nos libre de ellos: sabemos qué hacer y solemos lograrlo. Por primera vez mueren más personas por comer demasiado que por comer poco. Mueren más por vejez que por epidemias. Mueren más por suicidio que por soldados, terroristas y criminales juntos. El hambre moderno es casi siempre político, no natural.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~15%",
              "label": "Población de Francia muerta de hambre (1692–94)"
            },
            {
              "value": "2.100 M",
              "label": "Personas con sobrepeso (2014) frente a 850 M subnutridas"
            },
            {
              "value": "3 M",
              "label": "Muertes por obesidad (2010) frente a 1 M por hambre"
            },
            {
              "value": "~1%",
              "label": "Muertes por violencia humana a inicios del s. XXI"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Las pandemias históricas ceden ante vacunas, antibióticos e infraestructura. En <span class=\"num\">1979</span>, la OMS declaró erradicada la viruela. El sida pasó de sentencia de muerte a enfermedad crónica en unos años. Las armas nucleares volvieron la guerra entre potencias un suicidio colectivo. El conocimiento, no el territorio, se convirtió en la fuente de riqueza. Harari resume: «el azúcar resultó más peligroso que la pólvora».",
        },
        {
          type: 'paragraph',
          html: "Contenidos los viejos enemigos, la pregunta urgente cambia. ¿Qué queremos ser con el poder de la biotecnología y la informática? Harari anticipa tres proyectos del siglo XXI: <span class=\"term\">inmortalidad</span> (vencer la muerte), felicidad y divinidad. Nacen del éxito, no del fracaso. Una humanidad que ya no teme morir de hambre empieza a soñar con no morir en absoluto.",
        },
        {
          type: 'key',
          html: "Cuando el hambre, la peste y la guerra dejan de ser destino, la humanidad reorienta su ambición hacia vencer la muerte, comprar la felicidad y volverse dioses.",
        },
        {
          type: 'paragraph',
          html: "Para entender esa ambición nueva, hay que ver primero cómo el sapiens se convirtió en fuerza planetaria.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El Antropoceno",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué importa cómo tratamos a los demás animales? Los humanos llevan milenios comportándose como dioses para ellos, poco justos y menos misericordiosos. Hoy el planeta está poblado sobre todo por nosotros y nuestros domesticados. Hay unos <span class=\"num\">400 millones</span> de perros frente a unos <span class=\"num\">200.000</span> lobos salvajes.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": ">90%",
              "label": "Biomasa de grandes animales: humanos o domesticados"
            },
            {
              "value": "~70.000 a",
              "label": "Inicio del Antropoceno: el sapiens, fuerza ecológica global"
            },
            {
              "value": "~50%",
              "label": "Grandes mamíferos terrestres extintos antes de la agricultura"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Por eso, la idea central es que el <span class=\"term\">Antropoceno</span> (la era en que el humano transforma la biosfera) no empezó con las fábricas. Empezó con la expansión del sapiens hace unos <span class=\"num\">70.000</span> años. Alteró la ecología como antes solo lo hacían glaciaciones o asteroides. Los cazadores-recolectores animistas trataban a los animales como interlocutores. La revolución agrícola, legitimada por dioses, y luego el humanismo industrial degradaron al ganado a mera mercancía optimizada.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "El trato agrícola",
              "description": "Los dioses legitimaron la granja tradicional; el humanismo, la industrial.",
              "icon": "🌾"
            },
            {
              "title": "Analogía del futuro",
              "description": "Cómo tratamos a los animales anticipa cómo una superinteligencia podría tratarnos.",
              "icon": "🤖"
            },
            {
              "title": "Organismos como algoritmos",
              "description": "Las emociones son cálculos bioquímicos de probabilidad afinados por la evolución.",
              "icon": "🧬"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Aquí Harari introduce la tesis biológica que recorrerá todo el libro. Los organismos son algoritmos que procesan datos sensoriales. Las emociones no son un misterio del alma: son cálculos de supervivencia. Esa idea parece inofensiva aplicada a los cerdos. Se volverá explosiva cuando se aplique a nosotros.",
        },
        {
          type: 'key',
          html: "Nuestra relación de amos con los demás animales es el mejor espejo de cómo un futuro superhumano podría tratar al humano corriente.",
        },
        {
          type: 'paragraph',
          html: "Ese espejo obliga a preguntar qué separa realmente al humano del cerdo o de una máquina.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La chispa humana",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué vale más una vida humana que la de un cerdo? La respuesta teísta, el alma inmortal, no resiste el laboratorio. Ni en cerdos ni en humanos aparece rastro alguno de un alma. La evolución tampoco admite un «yo» indivisible e inmutable.",
        },
        {
          type: 'paragraph',
          html: "Por eso <span class=\"person\">Charles Darwin</span>, el naturalista que formuló la selección natural, sigue inquietando. Despoja al individuo de un núcleo eterno y lo explica como un ensamblaje gradual de partes combinables. Harari sostiene que la resistencia masiva a la evolución no nace de la ciencia. Nace del miedo a perder el alma, es decir, aquello que supuestamente nos hace superiores.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Triple realidad",
              "description": "Objetiva (los árboles), subjetiva (el miedo) e intersubjetiva (las leyes, el dinero).",
              "icon": "📜"
            },
            {
              "title": "Historia frente a biología",
              "description": "La biología no explica por sí sola las cruzadas: las ficciones tienen poder real.",
              "icon": "🏛️"
            },
            {
              "title": "Dilema moral",
              "description": "Sin chispa mágica, ¿qué justifica anteponer el humano al cerdo o a una IA?",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Harari responde con un superpoder concreto. Se llama <span class=\"term\">ficción intersubjetiva</span> (entidades que existen solo porque muchos las creen). Los animales tienen conciencia, emociones y hasta planificación. El chimpancé Santino apilaba piedras para lanzarlas. Solo el sapiens teje dinero, naciones y derecho. Son entidades que existen únicamente en relatos compartidos y que, sin embargo, mueven el mundo.",
        },
        {
          type: 'key',
          html: "No hay alma ni chispa detectable. La supremacía humana descansa en inventar y creer ficciones cooperativas a escala masiva.",
        },
        {
          type: 'paragraph',
          html: "Esas ficciones no son adorno: son el motor de la historia humana.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Los narradores de historias",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo avanza la historia si gran parte de ella es inventada? Tras la revolución cognitiva (hace unos <span class=\"num\">70.000</span> años), el sapiens empezó a hablar de entidades imaginarias. La agricultura (~<span class=\"num\">12.000</span> a) trajo dioses que funcionan como marcas. La escritura y el dinero (~<span class=\"num\">5.000</span> a) permitieron imperios y burocracias.",
        },
        {
          type: 'paragraph',
          html: "La tesis del capítulo es que la escritura no solo describe la realidad: la moldea. Y al hacerlo puede desacoplarse de ella. Las fronteras africanas trazadas en la Conferencia de Berlín (<span class=\"num\">1884</span>) ignoraron ríos y etnias. Aun así fabricaron países reales. Las historias son herramientas poderosísimas. También son trampas cuando confundimos el mapa con el territorio.",
        },
        {
          type: 'paragraph',
          html: "Harari propone un criterio de realidad simple y radical. Consiste en preguntar <span class=\"term\">«¿sufre?»</span> (si la entidad puede sentir dolor). Zeus, el euro o «Francia» no sufren. El soldado herido en nombre de la nación sí. Las ficciones son vitales: sin reglas compartidas no hay mercados ni fútbol. Se vuelven peligrosas cuando dejan de ser medios y se convierten en fines.",
        },
        {
          type: 'quote',
          text: "Las historias son solo instrumentos. Si olvidamos que son ficciones, perdemos el contacto con la realidad y peleamos guerras por el PIB o el interés nacional.",
          attribution: "Yuval Noah Harari",
        },
        {
          type: 'key',
          html: "La historia avanza sobre redes de ficciones cada vez más potentes, y distinguir la ficción del sufrimiento real será más urgente que nunca en el siglo XXI.",
        },
        {
          type: 'paragraph',
          html: "Esas ficciones incluyen religiones y ciencia: no siempre como enemigas.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "La extraña pareja",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué ciencia y religión no son enemigas eternas? Harari define la <span class=\"term\">religión</span> (cualquier sistema que legitime normas apelando a un orden sobre-humano) por su función, no por lo sobrenatural. Dios, la naturaleza o la nación pueden cumplir ese papel.",
        },
        {
          type: 'paragraph',
          html: "El choque real entre ciencia y religión no ocurre en los valores. Choca en los hechos empíricos, como cuándo empieza la vida o si la evolución es guiada. Harari sostiene que la ciencia moderna no sustituyó los mitos por datos. Los reforzó, prometiendo super-cosechas y juventud eterna. Y no floreció en el tolerante Cairo otomano. Floreció en la Europa confesionalmente intolerante.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Gérmenes o demonios",
              "description": "Lo «sobrenatural» depende del marco: para el vudú los demonios son naturales.",
              "icon": "🦠"
            },
            {
              "title": "La caza de brujas",
              "description": "En la Europa del s. XVII conviven guerras de religión y revolución científica.",
              "icon": "⚔️"
            },
            {
              "title": "El pacto",
              "description": "La modernidad es un acuerdo entre el método científico y la ideología humanista.",
              "icon": "🤝"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La conclusión es incómoda. A las instituciones les importa más el orden que aporta la religión y el poder que aporta la ciencia que la verdad abstracta. Por eso el liberalismo actual no es el fin de la religión. Es una religión implementada científicamente: la pareja de baile que hace funcionar el mundo moderno.",
        },
        {
          type: 'key',
          html: "La ciencia no derrotó a la religión: se alió con una nueva, el humanismo, para darle un poder que ninguna otra tuvo antes.",
        },
        {
          type: 'paragraph',
          html: "Harari llama a esa alianza el pacto moderno entre poder y sentido.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El pacto moderno",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ganó la humanidad al renunciar al sentido cósmico prefijado? El trato moderno cabe en una frase. La humanidad renuncia al guion divino. Recibe a cambio <span class=\"term\">poder</span> (capacidad real de transformar el mundo). Con él puede remediar hambre, enfermedad y muerte mediante ciencia y tecnología.",
        },
        {
          type: 'paragraph',
          html: "Sin guion divino no hay garantía de final feliz. Solo hay causas y efectos. Pero tampoco hay límites de rol asignado. Nadie escribió el libreto, así que podemos aspirar a crear paraísos terrenales. El motor de ese salto es una alianza inédita entre el crédito (confianza en el futuro), el capitalismo (reinvertir las ganancias) y la ciencia aplicada.",
        },
        {
          type: 'paragraph',
          html: "El crecimiento infinito chocaba con recursos finitos hasta que la ciencia prometió energía casi ilimitada. La energía solar contrasta con el petróleo agotable. El capitalismo santificó la codicia y el desequilibrio. Aun así, en apenas dos siglos, redujo el hambre, la peste y la guerra mejor que milenios de teología. Esa es la prueba de fuego que hizo irresistible al pacto.",
        },
        {
          type: 'paragraph',
          html: "Queda una pregunta que Harari deja abierta hacia el capítulo siguiente. ¿Cómo sobrevivieron la moral, la belleza y la compasión sin cielo ni infierno que las respaldaran? No por la mano invisible del mercado. Sino por una nueva fe capaz de rellenar el vacío de sentido.",
        },
        {
          type: 'key',
          html: "La modernidad regala poder a cambio de sentido, y el humanismo llenó ese vacío haciendo del sentir humano la brújula moral.",
        },
        {
          type: 'paragraph',
          html: "Ese humanismo no es un bloque único: tres corrientes disputan quién manda.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "La revolución humanista",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Quién da sentido al cosmos si ya no lo escribe un dios? El humanismo invierte el guion milenario. Ya no es un plan cósmico el que da sentido a las vidas humanas. Son las <span class=\"term\">experiencias humanas</span> (sentimientos, deseos y sufrimientos reales) las que dan sentido al cosmos. Su mandamiento central es «escucha tu corazón».",
        },
        {
          type: 'paragraph',
          html: "Harari lo muestra con un cambio de autoridad. Donde el sacerdote medieval interpretaba el pecado con la Biblia, hoy el terapeuta pregunta «¿cómo se siente usted?». El matrimonio pasó de sacramento impuesto a contrato de amor auténtico. Pero el humanismo no es un bloque: tres corrientes disputan quién manda cuando los sentimientos chocan.",
        },
        {
          type: 'list',
          items: [
            "**Liberalismo** — la autoridad reside en el individuo y sus deseos; mercado y democracia escuchan al consumidor y al votante.",
            "**Socialismo humanista** — el sentido está en la experiencia colectiva; el partido y el sindicato pesan más que el yo.",
            "**Humanismo evolutivo** — la selección favorece a los fuertes; su versión nazi quedó repudiada, pero su lógica darwiniana sigue presente."
          ],
        },
        {
          type: 'paragraph',
          html: "El liberalismo ganó las guerras y los mercados del siglo XX. Harari señala una trampa. Su propio éxito impulsa proyectos como la inmortalidad, la felicidad y la divinidad. Esos proyectos pueden destruir sus cimientos. La ciencia puede demostrar que votantes y consumidores no eligen libremente. Los algoritmos pueden conocernos mejor que nosotros mismos. Entonces, ¿qué autoridad le queda al «corazón»?",
        },
        {
          type: 'key',
          html: "El humanismo destronó a Dios y coronó al ser humano, y sus victorias tecnológicas amenazan ahora con vaciar al individuo libre que lo fundó.",
        },
        {
          type: 'paragraph',
          html: "Esa amenaza empieza en el laboratorio, con la ciencia del cerebro y del yo.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "La bomba de tiempo en el laboratorio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Sobre qué descansa el liberalismo en los hechos, no solo en valores? No descansa solo en un ideal moral. Supone que existe el <span class=\"term\">libre albedrío</span> (la capacidad real de elegir) y un «yo» único que elige. La neurociencia abre esa caja negra y encuentra genes, hormonas y neuronas, no a un soberano interior.",
        },
        {
          type: 'paragraph',
          html: "El argumento es demoledor porque es empírico. Las decisiones combinan procesos deterministas y azar. Ninguno de los dos es «libre». La neuroimagen puede predecir una elección antes de que el sujeto sea consciente de haberla tomado. No hay un yo permanente que elija sus deseos. Hay un flujo de experiencias y un <span class=\"term\">yo narrador</span> (una voz que arma coherencia después) que fabrica sentido a posteriori. Así lo describió Gazzaniga con el «intérprete» del hemisferio izquierdo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Yo que experimenta y yo que recuerda",
              "description": "Kahneman: elegimos según una memoria editada, no según lo vivido.",
              "icon": "🧠"
            },
            {
              "title": "La vida como relato",
              "description": "El liberalismo pide que cada uno escriba su drama; la biología dice que es ficción.",
              "icon": "📖"
            },
            {
              "title": "La amenaza práctica",
              "description": "No es la filosofía, sino las apps y algoritmos que ignoran al individuo libre.",
              "icon": "⚡"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Harari insiste en que el peligro no es un debate de facultad de filosofía. La bomba de tiempo estalla cuando esa duda teórica se traduce en tecnología. El individuo soberano puede ser una ficción útil. Entonces las institucciones construidas sobre él empiezan a quedar obsoletas. La democracia, el mercado libre y los derechos dependen de ese supuesto.",
        },
        {
          type: 'key',
          html: "El libre albedrío es un relato útil, no una entidad detectable, y las tecnologías del siglo XXI convierten esa duda en obsolescencia institucional.",
        },
        {
          type: 'paragraph',
          html: "Si el yo libre es ficción, la utilidad humana puede caer ante algoritmos más competentes.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La gran desacoplación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué amenazas prácticas enfrenta hoy el liberalismo? Harari expone tres. Primero, los humanos pierden su valor militar y económico. Segundo, el sistema seguirá valorando a la masa pero no al individuo. Tercero, podría valorar solo a una élite de superhumanos optimizados.",
        },
        {
          type: 'paragraph',
          html: "El nudo del argumento es otro. La <span class=\"term\">inteligencia</span> (capacidad de resolver problemas) se está desacoplando de la conciencia (capacidad de sentir). Durante milenios, la utilidad bélica e industrial justificó los derechos, desde la leva en masa hasta el sufragio. Hoy los drones, la ciberguerra y el trading algorítmico vuelven prescindibles a masas de soldados y oficinistas. Una IA como Watson diagnostica sin sentir nada. Para ejércitos y empresas, la inteligencia es imprescindible y la conciencia, opcional.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "87%",
              "label": "Riesgo de cáncer que el gen BRCA1 calculó para Angelina Jolie (2013)"
            },
            {
              "value": "87%",
              "label": "Acierto que Google promete al recomendarte pareja según tus datos"
            },
            {
              "value": "Clase inútil",
              "label": "Masa sin valor económico ni militar en la economía algorítmica"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Harari usa esas cifras para ilustrar el desplazamiento de autoridad. Angelina Jolie se operó guiada por una probabilidad estadística. Pronto Google, que ha leído nuestros correos y medido nuestro pulso, podrá decir a quién amar con más acierto que nuestra intuición. El riesgo final no es solo el desempleo. Es una desigualdad biológica: optimizar a unos pocos «deus» y abandonar a los demás como vagones de tercera clase.",
        },
        {
          type: 'key',
          html: "Si la utilidad humana cae y los algoritmos nos conocen mejor que nosotros mismos, el liberalismo pierde la base fáctica que lo legitimaba.",
        },
        {
          type: 'paragraph',
          html: "Ese vacío abre la puerta a nuevas religiones nacidas en Silicon Valley.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El océano de la conciencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué religiones nuevas compiten por suceder al humanismo? Nacen en los laboratorios de Silicon Valley, no en las madrasas. Harari distingue dos. El <span class=\"term\">tecno-humanismo</span> (mejorar al Homo sapiens con biotecnología) quiere volverlo Homo deus. El dataísmo quiere pasarle la antorcha a los datos.",
        },
        {
          type: 'paragraph',
          html: "El tecno-humanismo tropieza con un mapa que no existe. Optimizar la mente sin conocer el espectro completo de estados posibles es navegar a ciegas. La psicología estudió sobre todo mentes WEIRD (occidentales, educadas, industrializadas) y sus patologías. Ya sacrificamos el olfato fino, la atención plena y la cultura onírica a las exigencias urbano-industriales. Hicimos eso sin saber muy bien qué perdíamos.",
        },
        {
          type: 'paragraph',
          html: "La contradicción de fondo es letal para el propio proyecto. Harari muestra que podemos diseñar los deseos, reprogramar el miedo o el amor como Romeo con una píldora. Entonces el «corazón» deja de ser la autoridad final que el humanismo veneraba. Y como no tenemos un mapa de ese «océano de la conciencia», el sistema optimizará lo que necesita. La lectura y la productividad, no la riqueza interior. Así se abre la puerta al dataísmo.",
        },
        {
          type: 'key',
          html: "Mejorar la mente sin cartografiarla es peligroso, y controlar el deseo anula al humanismo que había elevado ese deseo a la categoría de supremo.",
        },
        {
          type: 'paragraph',
          html: "Si el tecno-humanismo fracasa, el dataísmo ofrece una ideología más audaz.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "La religión de los datos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué propone el dataísmo como nueva fe? Ve el universo como flujos de datos y mide el valor de cualquier fenómeno por su aporte al procesamiento. Une la biología algorítmica de Darwin con la informática de Turing. Organismos y máquinas obedecen las mismas matemáticas.",
        },
        {
          type: 'paragraph',
          html: "Desde esa óptica, la economía es un sistema de procesamiento de información. El mercado libre «ganó» la Guerra Fría no por superioridad moral. Ganó por eficiencia informacional frente a la planificación centralizada de Moscú. La nueva divinidad ya no es la libertad de opinión. Es la <span class=\"term\">libertad de información</span> (el flujo abierto de datos), cuyo mártir simbólico fue el activista Aaron Swartz en <span class=\"num\">2013</span>.",
        },
        {
          type: 'paragraph',
          html: "El dataísmo invierte la pirámide del conocimiento. Por eso, los humanos dejan de destilar datos en sabiduría y ceden esa tarea a los grandes algoritmos. «Conócete a ti mismo» pasa de la introspección a la monitorización biométrica permanente. Harari advierte un paralelo inquietante. El dataísmo puede hacerle al sapiens lo que el sapiens hizo a los demás animales. Puede volverlo irrelevante en cuanto pierda su función.",
        },
        {
          type: 'paragraph',
          html: "El libro no cierra con una profecía sino con un horizonte abierto. Tres procesos convergen a la vez. La vida se entiende como algoritmos. La inteligencia se separa de la conciencia. Los algoritmos empiezan a conocernos mejor que nosotros mismos. Harari deja tres preguntas. ¿Somos solo algoritmos? ¿Qué vale más, inteligencia o conciencia? ¿Qué será de nosotros cuando máquinas sin conciencia nos conozcan por dentro?",
        },
        {
          type: 'key',
          html: "El dataísmo es la primera ideología con un valor nuevo desde 1789, la libertad de información, y la principal candidata a suceder al humanismo liberal.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Homo deus",
    "description": "Proyección del humano mejorado biotecnológicamente; sucesor del sapiens con capacidades casi divinas."
  },
  {
    "title": "Antropoceno",
    "description": "Era en que el Homo sapiens es la principal fuerza que transforma la biosfera (~70.000 años)."
  },
  {
    "title": "Ficción intersubjetiva",
    "description": "Entidad (dinero, nación, derecho) que existe solo en la creencia colectiva pero ejerce poder real."
  },
  {
    "title": "Organismos son algoritmos",
    "description": "Tesis biológica de que sentir y decidir son cálculos bioquímicos; puente hacia el dataísmo."
  },
  {
    "title": "Humanismo",
    "description": "Religión moderna que hace de la experiencia humana la fuente de sentido y autoridad moral."
  },
  {
    "title": "Pacto moderno",
    "description": "Renunciar al sentido cósmico dado a cambio de poder tecnológico para transformar el mundo."
  },
  {
    "title": "Libre albedrío (crisis)",
    "description": "Pilar liberal cuestionado por la neurociencia: decisiones como bioquímica determinista y azar."
  },
  {
    "title": "Desacoplamiento",
    "description": "Separación entre inteligencia y conciencia; una IA útil que no siente."
  },
  {
    "title": "Clase inútil",
    "description": "Masas humanas sin valor económico ni militar en una economía algorítmica."
  },
  {
    "title": "Tecno-humanismo",
    "description": "Actualizar al sapiens (genética, interfaces cerebro-máquina) para que siga siendo el centro."
  },
  {
    "title": "Dataísmo",
    "description": "Ideología que venera el flujo de datos por encima de humanos y dioses."
  }
],
  chronology: [
  {
    "year": "~70.000 a",
    "text": "Revolución cognitiva: el lenguaje de las ficciones compartidas."
  },
  {
    "year": "~12.000 a",
    "text": "Revolución agrícola: ciudades y mitos ampliados."
  },
  {
    "year": "~5.000 a",
    "text": "Escritura y dinero en Sumer; imperios burocráticos."
  },
  {
    "year": "1692–94",
    "text": "Hambrunas masivas en Francia (~15% de muertes)."
  },
  {
    "year": "1789",
    "text": "Revolución francesa: derechos universales y leva en masa."
  },
  {
    "year": "1884",
    "text": "Conferencia de Berlín: fronteras africanas arbitrarias."
  },
  {
    "year": "1918",
    "text": "Gripe española: 50–100 M de muertes; la Gran Guerra, ~40 M."
  },
  {
    "year": "1979",
    "text": "La OMS declara erradicada la viruela."
  },
  {
    "year": "1981",
    "text": "Primeros casos reconocidos de sida."
  },
  {
    "year": "2013",
    "text": "Muerte de Aaron Swartz; debate sobre la libertad de información."
  },
  {
    "year": "2015",
    "text": "Publicación de Homo Deus, con el liberalismo global bajo presión."
  }
],
  figures: [
  {
    "name": "Yuval Noah Harari",
    "role": "Historiador; autor de Sapiens y Homo Deus; tesis sobre el futuro post-humanista."
  },
  {
    "name": "Charles Darwin",
    "role": "Evolución por selección natural; desafío al alma y al yo indivisible."
  },
  {
    "name": "S. N. Goenka",
    "role": "Maestro de meditación vipassana; dedicatoria del libro (1924–2013)."
  },
  {
    "name": "Michael Gazzaniga",
    "role": "Neurocientífico; el «intérprete» del hemisferio izquierdo en pacientes con cerebro dividido."
  },
  {
    "name": "Daniel Kahneman",
    "role": "Yo que experimenta frente a yo que recuerda; economía del comportamiento."
  },
  {
    "name": "Aaron Swartz",
    "role": "Activista de la información; mártir simbólico del dataísmo (1986–2013)."
  },
  {
    "name": "Alan Turing",
    "role": "Fundamentos de la computación; algoritmos electrónicos frente a bioquímicos."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Harari parte de una conquista histórica: hambre, enfermedad y guerra dejaron de ser destinos y se volvieron problemas técnicos.",
  "Por eso, la nueva agenda —inmortalidad, felicidad y divinidad— nace del humanismo victorioso y de su pacto con la ciencia.",
  "Organismos como algoritmos, inteligencia sin conciencia y datos que nos conocen mejor que nosotros: tres oleadas convergentes.",
  "El liberalismo no caería por un argumento filosófico, sino por la obsolescencia práctica de votantes, consumidores y trabajadores.",
  "La religión del mañana podría venerar el flujo de información más que la experiencia humana, y quien controle ese flujo tendrá el poder que antes tuvo quien controlaba la verdad."
],
    highlight: "Las mismas herramientas que prometen cumplir el sueño humanista pueden vaciar al humano libre que lo soñó.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Yuval Noah Harari",
    line2: "\"Homo Deus: A Brief History of Tomorrow\" · Vintage · 2015",
  },
}
