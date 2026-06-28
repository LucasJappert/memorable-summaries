import type { BookSummary } from '../types/book'

export const homoDeus: BookSummary = {
  slug: "homo-deus",
  meta: {
    title: "Homo Deus: A Brief History of Tomorrow",
    titleEs: "Homo Deus: Una breve historia del mañana",
    subtitle: "¿Qué proyectos reemplazarán a hambre, enfermedad y guerra en el siglo XXI?",
    author: "Yuval Noah Harari",
    meta: [
      "📖 2015 · Vintage / Spiegel & Grau",
      "✍️ Secuela de Sapiens; dedicado a S. N. Goenka",
    ],
  },
  toc: [
    { id: "prefacio", num: "00", label: "Prefacio" },
    { id: "cap1", num: "01", label: "La nueva agenda humana" },
    { id: "cap2", num: "02", label: "El Antropoceno" },
    { id: "cap3", num: "03", label: "La chispa humana" },
    { id: "cap4", num: "04", label: "Los narradores de historias" },
    { id: "cap5", num: "05", label: "La extraña pareja" },
    { id: "cap6", num: "06", label: "El pacto moderno" },
    { id: "cap7", num: "07", label: "La revolución humanista" },
    { id: "cap8", num: "08", label: "La bomba de tiempo en el laboratorio" },
    { id: "cap9", num: "09", label: "La gran desacoplación" },
    { id: "cap10", num: "10", label: "El océano de la conciencia" },
    { id: "cap11", num: "11", label: "La religión de los datos" },
    { id: "conceptos", num: "✦", label: "Conceptos clave" },
    { id: "cronologia", num: "◈", label: "Cronología" },
    { id: "figuras", num: "✦", label: "Figuras clave" },
  ],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "De Sapiens a Deus",
      blocks: [
        {
                  type: 'paragraph',
                  variant: 'lead',
                  html: "Tras explicar en <span class=\"term\">Sapiens</span> cómo la especie conquistó la Tierra, Harari proyecta el futuro del mañana: ¿qué ocurre cuando las nuevas tecnologías otorgan poderes casi divinos —creativos y destructivos— y elevan la vida a otra etapa evolutiva?",
                }
,
        {
                  type: 'paragraph',
                  html: "¿Cómo le irá al <span class=\"person\">Homo sapiens</span> cuando fabrique un <span class=\"term\">Homo deus</span> tecno-reforzado, más distinto del humano actual que este del neandertal? ¿Qué queda de nosotros y del <span class=\"term\">humanismo</span> si construimos máquinas que nos superan en casi todo? En la codicia por salud, felicidad y poder podríamos transformarnos hasta dejar de ser humanos.",
                }
,
        {
                  type: 'paragraph',
                  html: "El libro se organiza en tres partes: (I) cómo el sapiens conquistó el mundo; (II) cómo dio sentido al mundo con ficciones compartidas; (III) cómo pierde el control ante biotecnología, IA y la <span class=\"term\">religión de los datos</span>. Harari advierte que el colapso del humanismo no tiene por qué ser catastrófico —como la caída de faraones o la «muerte de Dios»—, pero la historia no tolera vacíos.\n\n---",
                }

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
                  html: "Al amanecer del tercer milenio, la humanidad descubre que los tres problemas milenarios —<span class=\"term\">hambre</span>, <span class=\"term\">enfermedad</span> y <span class=\"term\">guerra</span>— ya no dominan la agenda como fuerzas incontrolables de la naturaleza, sino como retos gestionables.",
                }
,
        {
                  type: 'paragraph',
                  html: "Por primera vez mueren más personas por comer demasiado que por comer poco; más por vejez que por epidemias; más por suicidio que por soldados, terroristas y criminales juntos. Si esos tres enemigos quedan contenidos, la pregunta urgente es otra: ¿qué queremos <span class=\"term\">ser</span> con el poder de la biotecnología y la informática?",
                }
,
        {
                  type: 'big-numbers',
                  items: [
                    { value: "~15%", label: "Población de Francia que murió de hambre (1692–94)" },
                    { value: "2.100 M", label: "Personas con sobrepeso (2014) vs. 850 M con subnutrición" },
                    { value: "~1%", label: "Muertes por violencia humana a inicios del s. XXI" },
                    { value: "3 M", label: "Muertes por obesidad (2010) vs. 1 M por hambre" }
                  ],
                }
,
        {
                  type: 'paragraph',
                  html: "El hambre moderno es casi siempre <span class=\"term\">político</span>, no natural. Las pandemias históricas (Peste Negra, viruela en México, gripe española) ceden ante vacunas, antibióticos e infraestructura; incluso el sida pasó de sentencia a enfermedad crónica en unos años. La «Nueva Paz» hace la guerra entre potencias casi impensable: el azúcar mata más que la pólvora, y el terrorismo es teatro que provoca sobre-reacción estatal.",
                }
,
        {
                  type: 'paragraph',
                  html: "Los nuevos objetivos del siglo XXI serán probablemente <span class=\"term\">inmortalidad</span>, <span class=\"term\">felicidad</span> y <span class=\"term\">divinidad</span>: vencer el envejecimiento, optimizar la bioquímica del placer y convertir al sapiens en deus. La felicidad, según la ciencia, no depende de eventos externos sino de sensaciones corporales; la evolución premia la supervivencia, no la satisfacción duradera.",
                }
,
        {
                  type: 'key',
                  html: "Cuando hambre, peste y guerra dejan de ser destino, la agenda humana se reorienta hacia la inmortalidad, la felicidad y el poder divino —con riesgos ecológicos y existenciales nuevos.\n\n---",
                }

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
                  html: "Los humanos llevan siglos siendo dioses para otros animales —poco justos ni misericordiosos. Hoy el planeta está poblado sobre todo por humanos y sus <span class=\"term\">domesticados</span>: ~400 M perros vs. ~200.000 lobos salvajes; más gallinas que águilas.",
                }
,
        {
                  type: 'big-numbers',
                  items: [
                    { value: ">90%", label: "Biomasa de grandes animales: humanos o domesticados" },
                    { value: "70.000 a", label: "Inicio del <span class=\"term\">Antropoceno</span>: sapiens como fuerza ecológica global" },
                    { value: "~50%", label: "Grandes mamíferos terrestres extintos antes de la agricultura" }
                  ],
                }
,
        {
                  type: 'paragraph',
                  html: "Ninguna especie había alterado la ecología global sola; ahora el sapiens compite con glaciaciones y asteroides y podría reemplazar la <span class=\"term\">selección natural</span> por diseño inteligente y vida no orgánica. Los cazadores-recolectores <span class=\"term\">animistas</span> trataban a animales como interlocutores; la revolución agrícola y el humanismo industrial convirtieron al ganado en mercancía optimizada con ciencia veterinaria.",
                }
,
        {
                  type: 'concept-grid',
                  items: [
                    {icon: "icon", title: "title", description: "description"},
                    {icon: "🌾", title: "Trato agrícola", description: "Dioses/teísmo legitimaron la agricultura tradicional; el humanismo legitimó la granja industrial."},
                    {icon: "🤖", title: "Analogía futura", description: "Cómo tratamos animales modela cómo superinteligencias podrían tratarnos."},
                    {icon: "🧬", title: "Algoritmo", description: "Organismos procesan datos sensoriales con algoritmos bioquímicos; emociones son cálculos de probabilidad evolutiva."}
                  ],
                }
,
        {
                  type: 'key',
                  html: "El Antropoceno no empezó con fábricas sino con la expansión del sapiens; nuestra relación con otros animales anticipa la del superhumano con el humano corriente.\n\n---",
                }

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
                  html: "¿Por qué vale más una vida humana que una de cerdo? La respuesta teísta —el alma inmortal— no resiste el laboratorio: ni cerdos ni humanos muestran rastro de alma; la evolución tampoco admite un «yo» indivisible e inmutable.",
                }
,
        {
                  type: 'paragraph',
                  html: "<span class=\"person\">Darwin</span> inquieta porque despoja al individuo de núcleo eterno: ojos, mentes y personalidades son productos graduales de partes combinables. Las encuestas en EE.UU. muestran resistencia masiva al origen evolutivo sin intervención divina, no tanto por la ciencia en sí como por el miedo a perder el alma.",
                }
,
        {
                  type: 'paragraph',
                  html: "La conciencia y la inteligencia son problemas distintos: la Bolsa no tiene conciencia pero procesa datos; los animales muestran emociones, planificación (ej. chimpancé Santino) y empatía (ratas liberando compañeras). El verdadero superpoder humano es la <span class=\"term\">ficción intersubjetiva</span>: dinero, naciones, derecho —entidades que existen solo en narrativas compartidas.",
                }
,
        {
                  type: 'concept-grid',
                  items: [
                    {icon: "icon", title: "title", description: "description"},
                    {icon: "📜", title: "Triple realidad", description: "Objetiva (árboles), subjetiva (miedo), intersubjetiva (leyes, dinero)."},
                    {icon: "🏛️", title: "Historia vs biología", description: "Biología no explica sola cruzadas o Corea; las ficciones tienen poder real."},
                    {icon: "⚖️", title: "Dilema moral", description: "Sin chispa mágica, ¿qué justifica privilegiar al humano sobre cerdo o IA?"}
                  ],
                }
,
        {
                  type: 'key',
                  html: "No hay alma ni chispa detectable; la supremacía humana descansa en inventar y creer ficciones cooperativas a escala masiva.\n\n---",
                }

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
                  html: "Tras la revolución cognitiva (~<span class=\"num\">70.000</span> años), el sapiens habla de entidades imaginarias. Con la agricultura (~<span class=\"num\">12.000</span> a), dioses sumerios actúan como marcas corporativas; con la <span class=\"term\">escritura</span> y el <span class=\"term\">dinero</span> (~<span class=\"num\">5.000</span> a) surgen imperios, burocracias y el faraón-vivo como «marca» tipo Elvis.",
                }
,
        {
                  type: 'paragraph',
                  html: "La escritura permite algoritmos sociales complejos, pero también desacopla registro y realidad: fronteras africanas trazadas en Berlín (<span class=\"num\">1884</span>) ignoraron ríos y etnias; las notas escolares reconfiguran la experiencia educativa. Las historias pueden moldear la realidad más que describirla.",
                }
,
        {
                  type: 'paragraph',
                  html: "Evaluar imperios solo por sus propios mitos es circular. Criterio de realidad: ¿<span class=\"term\">sufre</span>? Zeus, el euro o «Francia» no sufren; el soldado herido sí. Las ficciones son herramientas vitales —sin reglas compartidas no hay fútbol ni mercados— pero no deben convertirse en fines.",
                }
,
        {
                  type: 'quote',
                  text: "Las historias son solo instrumentos. Si olvidamos que son ficciones, perdemos el contacto con la realidad y peleamos guerras por el PIB o el interés nacional.",
                  attribution: "Yuval Noah Harari",
                }
,
        {
                  type: 'key',
                  html: "La historia avanza gracias a redes de ficciones cada vez más potentes; distinguir ficción de sufrimiento real será más difícil —y más urgente— en el siglo XXI.\n\n---",
                }

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
                  html: "Ciencia y religión no son opuestos eternos: la <span class=\"term\">religión</span> (definición funcional) legitima normas humanas apelando a leyes sobre-humanas —Dios, naturaleza, nación—, no solo «supernatural».",
                }
,
        {
                  type: 'paragraph',
                  html: "Ciencia y religión colisionan en <span class=\"term\">hechos</span>, no en valores: ¿cuándo empieza la vida?, ¿existió la Donación de Constantino?, ¿es la evolución guiada? La ciencia moderna no sustituyó mitos por hechos; los reforzó —prometiendo super-cocodrilos y juventud eterna para élites.",
                }
,
        {
                  type: 'paragraph',
                  html: "La revolución científica floreció en Europa confesionalmente intolerante, no en El Cairo otomano multicultural. A las instituciones les importan más <span class=\"term\">orden</span> (religión) y <span class=\"term\">poder</span> (ciencia) que la verdad abstracta. El pacto moderno es ciencia al servicio del <span class=\"term\">humanismo</span>, no laica neutralidad pura.",
                }
,
        {
                  type: 'concept-grid',
                  items: [
                    {icon: "icon", title: "title", description: "description"},
                    {icon: "🦠", title: "Keims vs demonios", description: "Para el vudú los demonios son naturales; lo «sobrenatural» depende del marco."},
                    {icon: "⚔️", title: "Hexenjagd", description: "Europa del s. XVII: guerras de religión y ciencia conviven."},
                    {icon: "🤝", title: "Pacto", description: "Modernidad = acuerdo entre método científico e ideología humanista."}
                  ],
                }
,
        {
                  type: 'key',
                  html: "Ciencia amplifica mitos humanistas; el liberalismo actual es una religión científicamente implementada, no el fin de la religión.\n\n---",
                }

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
                  html: "El trato moderno en una frase: la humanidad renuncia al <span class=\"term\">sentido cósmico</span> prefijado y recibe a cambio <span class=\"term\">poder</span> para remediar hambre, enfermedad y muerte con ciencia y tecnología.",
                }
,
        {
                  type: 'paragraph',
                  html: "Sin guion divino no hay garantía de final feliz —solo causas—, pero tampoco límites de rol: podemos crear paraísos terrenales. El motor es la alianza entre <span class=\"term\">crédito</span> (confianza en el futuro), <span class=\"term\">capitalismo</span> (reinvertir ganancias) y <span class=\"term\">imperio</span> + ciencia (recursos y exploración).",
                }
,
        {
                  type: 'paragraph',
                  html: "El crecimiento infinito chocaba con recursos finitos hasta que la ciencia prometió energía y materiales ilimitados (ej. energía solar vs. petróleo finito). El capitalismo santificó la codicia y el desequilibrio; sorprendentemente redujo hambruna, peste y guerra en dos siglos mejor que milenios de teología.",
                }
,
        {
                  type: 'paragraph',
                  html: "¿Cómo sobrevivieron moral, belleza y compasión sin cielo ni infierno? No por la mano invisible sola —sino por una nueva fe: el <span class=\"term\">humanismo</span>, que convirtió la experiencia humana en fuente de sentido.",
                }
,
        {
                  type: 'key',
                  html: "Modernidad = poder sin sentido dado; el humanismo rellenó el vacío haciendo del sentir humano la brújula moral.\n\n---",
                }

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
                  html: "El humanismo invierte el guion: no un plan cósmico da sentido a las vidas humanas, sino que las <span class=\"term\">experiencias humanas</span> dan sentido al cosmos. Mandamiento central: «Escucha tu corazón».",
                }
,
        {
                  type: 'paragraph',
                  html: "En la Edad Media el sacerdote interpretaba pecado con la Biblia; hoy el terapeuta pregunta «¿cómo se siente usted?». El matrimonio pasó de sacramento impuesto a contrato de amor auténtico. Tres ramas compiten: <span class=\"term\">liberal</span> (mi sentir interior), <span class=\"term\">socialista</span> (sentir colectivo de la clase), <span class=\"term\">evolucionista</span> (conflictos como selección —vía nazi, hoy tabú).",
                }
,
        {
                  type: 'paragraph',
                  html: "El liberalismo ganó guerras frías y mercados, pero su éxito impulsa proyectos —inmortalidad, felicidad, deus— que podrían destruir sus premisas. Si la ciencia demuestra que votantes y consumidores no eligen libremente y que algoritmos nos conocen mejor, ¿qué queda del humanismo?",
                }
,
        {
                  type: 'list',
                  items: [
                    "**Liberalismo** — autoridad en el individuo y sus deseos; mercado y democracia escuchan al consumidor/votante.",
                    "**Socialismo humanista** — sentido en la experiencia colectiva; partido y sindicato sobre el yo.",
                    "**Humanismo evolutivo** — selección favorece a los fuertes; línea nazi repudiada pero lógica darwiniana explícita."
                  ],
                }
,
        {
                  type: 'key',
                  html: "El humanismo reemplazó a Dios con el hombre; sus victorias tecnológicas amenazan con vaciar al hombre libre que las fundó.\n\n---",
                }

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
                  html: "El liberalismo descansa en el <span class=\"term\">libre albedrío</span> —hecho, no solo valor moral. La neurociencia abre la «caja negra» y encuentra genes, hormonas y neuronas, no un «yo» soberano.",
                }
,
        {
                  type: 'paragraph',
                  html: "Decisiones = determinismo + azar cuántico; ninguno es «libre». Experimentos de neuroimagen predicen pulsaciones antes de la conciencia de elegir. No hay yo permanente que «elija» deseos: solo un flujo de experiencias y un <span class=\"term\">yo narrativo</span> que inventa coherencia (Gazzaniga: hemisferio izquierdo como «interprete»).",
                }
,
        {
                  type: 'concept-grid',
                  items: [
                    {icon: "icon", title: "title", description: "description"},
                    {icon: "🧠", title: "Yo experimentador vs recordador", description: "Kahneman: elegimos repetir tortura «larga» por memoria editada."},
                    {icon: "📖", title: "Vida como narrativa", description: "Liberalismo pide que cada uno escriba su drama; biología dice que es ficción biochemica."},
                    {icon: "⚡", title: "Amenaza práctica", description: "No la filosofía, sino apps y algoritmos que ignoran al libre individuo, desestabilizan democracia y mercado."}
                  ],
                }
,
        {
                  type: 'key',
                  html: "El libre albedrío es narrativa útil, no entidad detectable; las tecnologías del s. XXI convierten la duda en obsolescencia institucional.\n\n---",
                }

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
                  html: "Tres amenazas prácticas al liberalismo: (1) humanos pierden valor militar/económico; (2) el sistema valora a la masa, no al individuo; (3) una élite de <span class=\"term\">superhumanos</span> optimizados reemplaza a la plebe.",
                }
,
        {
                  type: 'paragraph',
                  html: "La levée en masse y el sufragio femenino ligaron derechos a utilidad bélica/industrial. Hoy drones, ciber-guerra y algoritmos de trading hacen prescindible a masas de soldados y oficinistas. <span class=\"term\">Inteligencia</span> se desacopla de <span class=\"term\">conciencia</span>: Watson diagnostica sin sentir; carros autónomos sin experiencia.",
                }
,
        {
                  type: 'big-numbers',
                  items: [
                    { value: "87%", label: "Probabilidad (Harari cita) de que algoritmos superen capacidades humanas medias" },
                    { value: "50%", label: "Profesiones en riesgo de automatización (estimaciones citadas)" },
                    { value: "Clase inútil", label: "Nueva masa sin rol económico ni militar" }
                  ],
                }
,
        {
                  type: 'paragraph',
                  html: "Algoritmos externos pueden «hackear» deseos mejor que el yo introspectivo (Google, wearables, «quantified self»). Medicina ya delega en sensores e IA (páncreas artificial con iPhone). Riesgo: optimizar pocos «deus» y abandonar vagones de tercera clase —como colonias del s. XIX.",
                }
,
        {
                  type: 'key',
                  html: "Si la utilidad humana cae y los algoritmos nos conocen mejor que nosotros, liberalismo, democracia y mercado libre pierden su base de legitimidad.\n\n---",
                }

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
                  html: "Las nuevas religiones nacen en laboratorios, no en madrasas. Harari distingue <span class=\"term\">tecno-humanismo</span> (mejorar al Homo sapiens → Homo deus) y <span class=\"term\">dataísmo</span> (traspasar la antorcha a flujos de datos).",
                }
,
        {
                  type: 'paragraph',
                  html: "Optimizar la mente sin mapa es navegar a ciegas: la psicología estudió sobre todo mentes <span class=\"term\">WEIRD</span> (occidentales, educadas, industrializadas) y patologías, no el espectro completo de estados posibles —chamanes, monjes, neandertales. Perdimos olfato fino, atención plena y cultura onírica por exigencias urbano-industriales (FOMO).",
                }
,
        {
                  type: 'paragraph',
                  html: "El tecno-humanismo choca con su premisa: si podemos diseñar deseos, el «corazón» deja de ser autoridad final. ¿Reprogramar orientación sexual, miedos o amor como Romeo con píldora? Sin mapa del «océano de la conciencia», optimizamos lo que el sistema necesita —lectura, no olfato— y abrimos la puerta al dataísmo.",
                }
,
        {
                  type: 'key',
                  html: "Mejorar la mente sin cartografiarla es peligroso; controlar el deseo anula al humanismo que lo elevó a supremo.\n\n---",
                }

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
                  html: "El <span class=\"term\">dataísmo</span> ve el universo como flujos de datos; el valor de cualquier fenómeno = su contribución al procesamiento. Une biología algorítmica (Darwin) e informática (Turing): organismos y máquinas obedecen las mismas matemáticas.",
                }
,
        {
                  type: 'paragraph',
                  html: "Economía = sistema de procesamiento: capitalismo distribuye (mercado/Bolsa); comunismo centraliza (Moscú). El mercado libre «ganó» la Guerra Fría por eficiencia informacional, no por moral superior. Nueva divinidad: <span class=\"term\">libertad de información</span> —no de opinión— (Aaron Swartz, <span class=\"num\">2013</span>).",
                }
,
        {
                  type: 'paragraph',
                  html: "Google detecta epidemias antes que la OMS si accede a búsquedas; coches compartidos algorítmicos podrían reemplazar propiedad privada. El dataísmo invierte la pirámide conocimiento: humanos ya no destilan datos → sabiduría; ceden a Big Data. «Conócete a ti mismo» pasa de introspección a monitorización biometrica.",
                }
,
        {
                  type: 'paragraph',
                  html: "Tres procesos convergentes: (1) vida = algoritmos; (2) inteligencia sin conciencia; (3) algoritmos que nos conocen mejor que nosotros. Preguntas abiertas: ¿valen más datos que sufrimiento consciente? ¿Qué religión post-humanista llenará el vacío?",
                }
,
        {
                  type: 'key',
                  html: "Dataísmo es la primera ideología desde 1789 con valor nuevo —información libre— y candidata a suceder al humanismo liberal.\n\n---",
                }

      ],
    },
  ],
  keyConcepts: [
    { title: "Homo deus", description: "Proyección humano mejorado biotecnológicamente; sucesor del sapiens con capacidades casi divinas." },
    { title: "Antropoceno", description: "Era geológica donde Homo sapiens es la principal fuerza que transforma la biosfera (~70.000 años)." },
    { title: "Ficción intersubjetiva", description: "Entidad (dinero, nación, derecho) existente solo en creencia colectiva pero con poder real." },
    { title: "Humanismo", description: "Religión moderna que hace de la experiencia humana la fuente de sentido y autoridad moral." },
    { title: "Pacto moderno", description: "Renunciar al sentido cósmico dado a cambio de poder tecnológico para transformar el mundo." },
    { title: "Libre albedrío (crisis)", description: "Pilar liberal cuestionado por neurociencia: decisiones = bioquímica determinista/aleatoria." },
    { title: "Desacoplamiento", description: "Separación de inteligencia y conciencia; IA útil sin sentir." },
    { title: "Clase inútil", description: "Masas humanas sin valor económico/militar en economía algorítmica." },
    { title: "Tecno-humanismo", description: "Upgrade del sapiens para competir con IA (genética, interfaces cerebro-máquina)." },
    { title: "Dataísmo", description: "Ideología que maximiza flujo y procesamiento de datos por encima de humanos o dioses." },
  ],
  chronology: [
    { year: "~70.000 a", text: "Revolución cognitiva: lenguaje de ficciones compartidas." },
    { year: "~12.000 a", text: "Revolución agrícola: ciudades, mitos ampliados." },
    { year: "~5.000 a", text: "Escritura y dinero en Sumer; imperios burocráticos." },
    { year: "1692–94", text: "Hambrunas masivas en Francia (~15% muertes)." },
    { year: "1789", text: "Revolución francesa: derechos universales y levée en masse." },
    { year: "1884", text: "Conferencia de Berlín: fronteras africanas arbitrarias." },
    { year: "1918", text: "Gripe española: ~50–100 M muertes; WWI ~40 M." },
    { year: "1979", text: "OMS declara viruela erradicada." },
    { year: "1981", text: "Primeros casos reconocidos de sida." },
    { year: "2013", text: "Muerte de Aaron Swartz; debate libertad de información." },
    { year: "2016", text: "Contexto de publicación: liberalismo global bajo presión algorítmica." },
  ],
  figures: [
    { name: "Yuval Noah Harari", role: "Historiador; autor de Sapiens y Homo Deus; tesis sobre futuro post-humanista." },
    { name: "Charles Darwin", role: "Evolución por selección natural; desafío al alma y al yo indivisible." },
    { name: "S. N. Goenka", role: "Maestro de meditación; dedicatoria del libro (1924–2013)." },
    { name: "Michael Gazzaniga", role: "Neurocientífico; «interprete» del hemisferio izquierdo en pacientes split-brain." },
    { name: "Daniel Kahneman", role: "Yo experimentador vs yo recordador; economía del comportamiento." },
    { name: "Aaron Swartz", role: "Hacker y activista; mártir simbólico del dataísmo (1990–2013)." },
    { name: "Friedrich Hayek", role: "Economista; mercado como procesador distribuido de información." },
    { name: "Alan Turing", role: "Fundamentos de computación; algoritmos electrónicos vs bioquímicos." },
  ],
  closing: {
    title: "La idea central",
    lines: [
      "Harari parte de una conquista: hambre, enfermedad y guerra dejaron de ser destinos y pasaron a ser problemas técnicos.",
      "La nueva agenda —inmortalidad, felicidad, divinidad— nace del humanismo victorioso y de su pacto con la ciencia.",
    ],
    highlight: "",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Yuval Noah Harari",
    line2: "\"Homo Deus: A Brief History of Tomorrow\" · Vintage · 2015",
  },
}
