import type { BookSummary } from '../types/book'

export const sapiens: BookSummary = {
  slug: "sapiens",
  meta: {
    title: "Sapiens: A Brief History of Humankind",
    subtitle: "Tres revoluciones que convirtieron un simio insignificante en el dueño del planeta",
    author: "Yuval Noah Harari",
    meta: [
      "📖 2011 (hebreo) · 2014 (inglés) · Harvill Secker",
      "✍️ Macro-historia desde el Big Bang hasta el posible fin de Homo sapiens",
    ],
    titleEs: "Sapiens: De animales a dioses",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Tres revoluciones que marcaron la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Yuval Noah Harari</span> propone leer la trayectoria de <span class=\"term\">Homo sapiens</span> como una cadena de transformaciones: primero la física del <span class=\"term\">Big Bang</span>, luego la química de las moléculas, la biología de los organismos y, hace unos <span class=\"num\">70.000</span> años, la <span class=\"term\">historia</span> propiamente dicha, cuando los sapiens empezaron a tejer culturas.",
        },
        {
          type: 'paragraph',
          html: "Tres revoluciones marcan esa historia. La <span class=\"term\">revolución cognitiva</span> (~<span class=\"num\">70.000</span> a) permitió mitos y cooperación flexible entre miles de extraños. La <span class=\"term\">revolución agrícola</span> (~<span class=\"num\">12.000</span> a) multiplicó la población y fijó al humano al campo. La <span class=\"term\">revolución científica</span> (últimos <span class=\"num\">500</span> años) admitió la ignorancia y desató un poder tecnológico sin precedentes que podría poner fin a la historia tal como la conocemos.",
        },
        {
          type: 'key',
          html: "La historia humana es la historia de tres revoluciones que redefinieron cómo imaginamos y cooperamos.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Un animal sin importancia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Durante millones de años los humanos ocuparon el centro de la cadena alimenticia: cazaban conejos y recolectaban plantas mientras leones y osos los cazaban a ellos. Solo hace unos <span class=\"num\">100.000</span> años <span class=\"term\">Homo sapiens</span> saltó al tope, demasiado rápido para que el ecosistema y nuestra psicología se ajustaran.",
        },
        {
          type: 'paragraph',
          html: "El género <span class=\"term\">Homo</span> incluyó muchas especies hermanas: neandertales, erectus, floresiensis, denisovanos. Hace <span class=\"num\">70.000</span> años los sapiens salieron de África y, en pocas decenas de milenios, las extinguieron o absorbieron. El ADN neandertal compone un <span class=\"num\">1-4 %</span> del genoma de poblaciones europeas y de Medio Oriente, lo que sugiere contactos raros pero reales.",
        },
        {
          type: 'paragraph',
          html: "El cerebro humano consume un <span class=\"num\">25 %</span> de la energía en reposo pese a representar solo el <span class=\"num\">2-3 %</span> del peso corporal. El fuego, usado a diario desde hace unos <span class=\"num\">300.000</span> años, permitió cocinar, acortar el intestino y abrir camino a cráneos más grandes. Aun así, durante dos millones de años ese cerebro costoso apenas produjo herramientas de piedra.",
        },
        {
          type: 'key',
          html: "Fuimos animales marginales hasta un ascenso reciente al tope de la pirámide, demasiado abrupto para asimilarlo.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El árbol del conocimiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hace <span class=\"num\">150.000</span> años ya existían sapiens anatómicamente modernos en África Oriental, pero solo hace unos <span class=\"num\">70.000</span> empezaron a conquistar el mundo, crear arte, comercio y religiones. La causa probable es la <span class=\"term\">revolución cognitiva</span>: un cambio en el cableado cerebral que habilitó un lenguaje capaz de hablar de lo inexistente.",
        },
        {
          type: 'paragraph',
          html: "El lenguaje sapiens no solo describe leones: puede narrar que «el león es el espíritu guardián de la tribu». Las <span class=\"term\">ficciones intersubjetivas</span> permiten que extraños cooperen en cruzadas, empresas o estados. La leyenda de <span class=\"term\">Peugeot</span> ilustra una «persona jurídica» que existe solo en la ley y en la creencia colectiva, pero puede poseer propiedades y demandar en tribunales.",
        },
        {
          type: 'paragraph',
          html: "Mientras la evolución genética avanza lento, la evolución cultural aceleró: un papa católico renuncia a reproducirse sin transmitir un «gen de celibato», sino una historia que moldea conducta. La revolución cognitiva separó la historia de la biología: para entender el cristianismo o la Revolución Francesa no alcanza con genes y hormonas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Chisme",
              "description": "Cooperación en grupos de hasta ~150 personas mediante información social.",
              "icon": "🗣️"
            },
            {
              "title": "Ficción",
              "description": "Mitos, dioses y corporaciones como pegamento de miles de extraños.",
              "icon": "🦁"
            },
            {
              "title": "Cultura rápida",
              "description": "Cambio de normas en décadas, sin esperar mutaciones.",
              "icon": "⚡"
            }
          ],
        },
        {
          type: 'key',
          html: "Sapiens conquistó el mundo porque su lenguaje inventa realidades imaginadas que unen a multitudes.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Un día en la vida de Adán y Eva",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Durante decenas de milenios nuestros ancestros fueron <span class=\"term\">cazadores-recolectores</span>. La <span class=\"term\">psicología evolutiva</span> sostiene que comemos en exceso hoy porque el cerebro sigue programado para la escasez del Pleistoceno: un árbol de higos era devorarlo entero antes que los babuinos.",
        },
        {
          type: 'paragraph',
          html: "La evidencia arqueológica es escasa: la Edad de Piedra debió ser en gran medida la Edad de la Madera. Los foragers modernos no son buen espejo del pasado, pero sugieren bandas de decenas o cientos de personas, gran conocimiento del territorio y enorme diversidad cultural. No hay un «modo de vida natural» único desde la revolución cognitiva: Oxford y Cambridge, imaginadas hace <span class=\"num\">30.000</span> años, habrían tenido lenguas, mitos y normas opuestas.",
        },
        {
          type: 'paragraph',
          html: "Harari describe la sociedad de foragers como la «<span class=\"term\">sociedad afluente original</span>»: menos horas de trabajo que el campesino, dieta variada, pero también violencia entre bandas y abandono de ancianos en tiempos duros. Los perros, domesticados hace unos <span class=\"num\">15.000</span> años, fueron la primera alianza interespecie antes de la agricultura.",
        },
        {
          type: 'key',
          html: "No existe un solo modo humano «natural»: la revolución cognitiva abrió un abanico enorme de culturas posibles.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "La inundación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La expansión de Sapiens fue la primera gran catástrofe ecológica. En Australia, hace unos <span class=\"num\">45.000</span> años, desapareció la megafauna local poco después de la llegada humana. En América, hace unos <span class=\"num\">13.000</span> años, el mismo patrón: perezosos gigantes, mastodontes y armadillos gigantes se extinguieron.",
        },
        {
          type: 'paragraph',
          html: "Hace <span class=\"num\">70.000</span> años existían unos <span class=\"num\">200</span> géneros de mamíferos terrestres mayores de <span class=\"num\">50</span> kg. Al inicio de la revolución agrícola quedaban unos <span class=\"num\">100</span>. Madagascar perdió su megafauna hace unos <span class=\"num\">1.500</span> años. La polinización de islas del Pacífico repitió el guion durante milenios.",
        },
        {
          type: 'paragraph',
          html: "Harari rechaza la imagen romántica del humano en armonía con la naturaleza. La primera ola de extinciones precedió a la rueda, la escritura y el hierro. La segunda vendría con los agricultores. La tercera, con la industria.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~50 %",
              "label": "Megafauna terrestre extinguida antes de la agricultura"
            },
            {
              "value": "45.000 a",
              "label": "Llegada a Australia y extinción local"
            },
            {
              "value": "13.000 a",
              "label": "Extinción de megafauna americana"
            }
          ],
        },
        {
          type: 'key',
          html: "Sapiens fue el depredador más letal de la biosfera mucho antes de la revolución industrial.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El mayor fraude de la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Durante <span class=\"num\">2,5 millones</span> de años los humanos recolectaron y cazaron sin domesticar. Hace unos <span class=\"num\">12.000</span> años, en el Cercano Oriente, empezaron a sembrar trigo y criar cabras. Eso fue la <span class=\"term\">revolución agrícola</span>: no un progreso obvio para el individuo, sino una trampa.",
        },
        {
          type: 'paragraph',
          html: "Harari invierte la metáfora: el <span class=\"term\">trigo</span> domesticó a Sapiens. Exigió despejar campos, regar, luchar contra plagas y quedarse en un lugar. Esqueletos agrícolas muestran hernias, artritis y dientes cariados. El oasis de Jericó pasó de unos <span class=\"num\">100</span> nómadas saludables (~<span class=\"num\">13.000</span> a.C.) a unos <span class=\"num\">1.000</span> aldeanos enfermizos (~<span class=\"num\">8.500</span> a.C.).",
        },
        {
          type: 'paragraph',
          html: "La moneda de la evolución son copias de ADN, no felicidad. Más personas en peores condiciones pueden ser «éxito» biológico. El campesino aceptó cada mejora, como sembrar en surcos o regar, sin ver el resultado acumulado: más trabajo, más hijos, más epidemias. Hoy más del <span class=\"num\">90 %</span> de las calorías humanas provienen de un puñado de cultivos domesticados entre <span class=\"num\">9.500</span> y <span class=\"num\">3.500</span> a.C.",
        },
        {
          type: 'key',
          html: "La agricultura multiplicó la especie a costa de empeorar la vida del agricultor medio: el mayor fraude de la historia.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Construir pirámides",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los excedentes agrícolas alimentaron reyes, sacerdotes y soldados. Millones de extraños no cooperan sin mitos compartidos, porque no saben repartir tierra ni resolver conflictos. La Revolución Francesa estalló en tiempos de abundancia, no solo de hambre.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">órdenes imaginados</span>, códigos legales inspirados en dioses o en derechos, hacen creer que la jerarquía es natural. El código de <span class=\"person\">Hammurabi</span> fija superiores, plebeyos y esclavos con valores distintos. La Declaración de <span class=\"num\">1776</span> proclama igualdad, pero sus firmantes eran esclavistas. Biológicamente, «creados iguales» sería «evolucionados distinto».",
        },
        {
          type: 'paragraph',
          html: "Para sostener un orden imaginado hace falta violencia y verdaderos creyentes: un sacerdote convence mejor que un batallón. El orden se incrusta en casas con habitaciones privadas, en moda, en deseos de viajar al extranjero moldeados por el <span class=\"term\">consumismo romántico</span>.",
        },
        {
          type: 'key',
          html: "La cooperación masiva descansa en ficciones legales y religiosas que nadie puede señalar con el dedo.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Sobrecarga de memoria",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">escritura</span> surgió hace unos <span class=\"num\">5.000-3.500</span> años como herramienta parcial para registrar deudas e impuestos, no para literatura. Los sumerios guardaban cebada y cantidades. La epopeya vino después.",
        },
        {
          type: 'paragraph',
          html: "Los imperios en crecimiento necesitaban archivar cada vez más datos. El rey Zimrilim de Mari no podía hallar una escritura entre miles de tablillas. Surgieron catálogos, escuelas de escribas y un pensamiento compartimentado. El cerebro asocia libremente. La burocracia exige cajones separados.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">números arábigos</span> y luego el binario ampliaron la brecha entre pensamiento humano y procesamiento de datos. Hoy traducimos pobreza, felicidad y honor a cifras porque las máquinas solo entienden números.",
        },
        {
          type: 'key',
          html: "La escritura nació para el impuesto y terminó reprogramando cómo pensamos: como archiveros, no como narradores holísticos.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "No hay justicia en la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Toda jerarquía afirma ser natural. Los defensores de la esclavitud invocaban una naturaleza servil. Los supremacistas raciales hablaban de inferioridad biológica. Los capitalistas invocaban el mérito individual. En todos los casos, la desigualdad es una <span class=\"term\">ficción legitimada</span>, no un hecho biológico.",
        },
        {
          type: 'paragraph',
          html: "Harari distingue <span class=\"term\">sexo</span>, definido por cromosomas, de <span class=\"term\">género</span>, los roles culturales de hombre y mujer. «Biology enables, Culture forbids»: la biología permite muchos comportamientos. La cultura prohíbe la mayoría. El patriarcado domina desde la agricultura, pero ninguna teoría (fuerza muscular, agresión, genes) lo explica del todo.",
        },
        {
          type: 'paragraph',
          html: "Las jerarquías permiten a extraños saber cómo tratarse sin intimidad previa. Por eso casi ninguna sociedad grande eliminó la discriminación por completo. Las diferencias de aptitud real existen, pero se amplifican por acceso desigual a educación y poder.",
        },
        {
          type: 'key',
          html: "Toda desigualdad social masiva es imaginada y se disfraza de ley de la naturaleza.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La flecha de la historia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las culturas no son esencias inmutables. Cambian por contradicciones internas. La nobleza medieval debía ser cristiana (humilde) y caballeresca (violenta). Reconciliar ambas tensiones alimentó cruzadas y literatura artúrica.",
        },
        {
          type: 'paragraph',
          html: "La modernidad enfrenta otra contradicción entre <span class=\"term\">igualdad</span> y <span class=\"term\">libertad</span>. Garantizar igualdad restringe la libertad de los más ricos. Maximizar libertad profundiza la brecha. Esa tensión impulsa la política desde <span class=\"num\">1789</span>.",
        },
        {
          type: 'paragraph',
          html: "Tres fuerzas unifican a la humanidad: <span class=\"term\">dinero</span>, <span class=\"term\">imperio</span> y <span class=\"term\">religión</span> universal. La historia tiene dirección hacia la unificación global, pero no garantía de bienestar.",
        },
        {
          type: 'key',
          html: "Las culturas avanzan por contradicciones internas hacia redes cada vez más vastas de cooperación humana.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El aroma del dinero",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"term\">dinero</span> es el sistema de confianza mutua más tolerante, pues cristianos y musulmanes que no comparten fe pueden comerciar si comparten creencia en el oro o el dólar. Los sumerios usaban cebada como unidad. Las primeras monedas aparecieron en Lidia hacia el <span class=\"num\">640 a.C.</span>",
        },
        {
          type: 'paragraph',
          html: "El dinero cumple convertibilidad universal y confianza en terceros. Eso tiene un precio, porque corroe valores íntimos y sustituye comunidad por mercado. En hambrunas se vendían hijos y se compraban indulgencias. Aun así, el equilibrio entre mercado y tradición se renegocia sin cesar.",
        },
        {
          type: 'paragraph',
          html: "Harari subraya que la unificación humana no es solo economía, pues tras el dinero viene el acero imperial.",
        },
        {
          type: 'key',
          html: "El dinero es confianza materializada: convierte casi cualquier cosa en casi cualquier otra entre desconocidos.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Visiones imperiales",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un <span class=\"term\">imperio</span> gobierna muchos pueblos distintos con fronteras flexibles y apetito de expandirse. Roma destruyó Numancia, pero los patriotas españoles de hoy hablan romance, usan leyes romanas y profesan una religión nacida en el Imperio.",
        },
        {
          type: 'paragraph',
          html: "Los imperios suelen ser estables y difíciles de derrocar desde dentro. Las culturas «puras» son ilusión: la India independiente conserva democracia británica, ferrocarriles, inglés y té. Retirar todo legado imperial sería amputar la cultura actual.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Ciro el Grande</span> prometió conquistar «por beneficio de todos», no solo de Persia. Hoy emerge un imperio global multiétnico que podría responder al calentamiento planetario donde el estado-nación falla.",
        },
        {
          type: 'key',
          html: "Los imperios masacraron y fusionaron pueblos. Casi todos hoy somos herederos de su legado cultural.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "La ley de la religión",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">religión</span> legitima órdenes frágiles invocando un superorden no humano y normas vinculantes. Debe ser universal y misionera para unir masas: cristianismo, islam, budismo. El animismo local no buscaba convertir al mundo.",
        },
        {
          type: 'paragraph',
          html: "La agricultura degradó plantas y animales de interlocutores espirituales a propiedad. Surgieron dioses que mediaban fertilidad y cosecha. El politeísmo toleraba dioses ajenos. El monoteísmo evangelizador fue más exclusivo y, a menudo, más sangriento entre variantes.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">humanismo</span> moderno, ya sea liberal, socialista o evolutivo, es una religión que coloca a la humanidad (o al individuo, la especie o el superhombre) como fuente de autoridad moral.",
        },
        {
          type: 'key',
          html: "Las religiones universales dieron a millones de extraños mitos comunes más poderosos que la tribu.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "El secreto del éxito",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La historia no es determinista. Lo que parece inevitable hoy fue impredecible para quienes lo vivieron. <span class=\"person\">Constantino</span> eligió el cristianismo cuando era secta marginal. En <span class=\"num\">1913</span> los bolcheviques eran grupo diminuto.",
        },
        {
          type: 'paragraph',
          html: "La historia es un caos de «nivel dos»: las predicciones alteran el resultado (mercados, revoluciones). Estudiarla no predice el futuro, pero muestra que el presente no era inevitable.",
        },
        {
          type: 'paragraph',
          html: "Las culturas exitosas propagan <span class=\"term\">memes</span>, no necesariamente bienestar. El nacionalismo, el cristianismo o el capitalismo triunfaron sin prueba de que sean lo mejor para Homo sapiens.",
        },
        {
          type: 'key',
          html: "El éxito histórico de una cultura no prueba que beneficie a quienes la sufren.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "El descubrimiento de la ignorancia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En el año <span class=\"num\">1500</span> había unos <span class=\"num\">500 millones</span> de humanos. Hoy somos unos <span class=\"num\">7.000 millones</span>. La producción global pasó de unos <span class=\"num\">250.000 millones</span> de dólares actuales a unos <span class=\"num\">60 billones</span>. Un campesino del siglo XVI reconocería el mundo de <span class=\"num\">1800</span>. Un marinero de Colón quedaría extraviado ante un iPhone.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">revolución científica</span> comenzó al admitir ignorancia y buscar métodos para llenarla. Antes, tradiciones afirmaban que todo lo esencial ya estaba revelado. <span class=\"person\">Benjamin Franklin</span> demostró que el rayo es electricidad. La pobreza dejó de verse como destino divino.",
        },
        {
          type: 'paragraph',
          html: "La ciencia no elige sola sus prioridades. Reyes, capitalistas e imperios financian lo útil para el poder. El <span class=\"term\">Proyecto Gilgamesh</span>, vencer la muerte, es el sueño científico moderno. La esperanza de vida global ronda los <span class=\"num\">67</span> años.",
        },
        {
          type: 'key',
          html: "Admitir ignorancia y financiar investigación desató un poder sin precedentes, siempre ligado a intereses políticos y económicos.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "El matrimonio entre ciencia e imperio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Explorar el mundo fue proyecto científico e imperial a la vez. La Royal Society quiso medir la distancia Tierra-Sol durante el tránsito de Venus de 1769 y envió a James Cook a Tahití. Llevaba botánicos y artistas bajo bandera británica.",
        },
        {
          type: 'paragraph',
          html: "Los británicos en la India cartografiaron el territorio. Excavaron Mohenjo-daro y descifraron escrituras que los gobernantes locales habían olvidado. <span class=\"person\">Henry Rawlinson</span> copió la inscripción de Behistún. <span class=\"person\">William Jones</span> fundó la lingüística comparada. Menos de <span class=\"num\">5.000</span> funcionarios británicos gobernaron unos <span class=\"num\">300 millones</span> de indios gracias a conocimiento y legitimidad de «progreso».",
        },
        {
          type: 'paragraph',
          html: "La ciencia también sirvió ideologías racistas (teoría aria) que hoy mutaron en «culturismo». Imperio y laboratorio compartían bomba atómica y hambruna de Bengala (~<span class=\"num\">10 millones</span> de muertos, <span class=\"num\">1769-1773</span>).",
        },
        {
          type: 'key',
          html: "Ciencia e imperio se necesitaron mutuamente, porque explorar, clasificar y explotar el mundo fue la misma empresa moderna.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "El credo capitalista",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La palabra clave de la economía moderna es <span class=\"term\">crecimiento</span>. El PIB per cápita pasó de unos <span class=\"num\">550</span> dólares en <span class=\"num\">1500</span> a unos <span class=\"num\">8.800</span> hoy. Ese salto depende del <span class=\"term\">crédito</span>, porque los bancos crean dinero confiando en beneficios futuros. Hasta el <span class=\"num\">90 %</span> del dinero en cuentas no tiene respaldo en efectivo.",
        },
        {
          type: 'paragraph',
          html: "El capitalismo reinvirtió ganancias en producción y, cuando faltó mano de obra barata, recurrió a la esclavitud atlántica: unos <span class=\"num\">10 millones</span> de africanos, acciones en Ámsterdam y Londres, rendimientos del ~<span class=\"num\">6 %</span> anual. Leopoldo II en el Congo mató a millones persiguiendo caucho sin control estatal.",
        },
        {
          type: 'paragraph',
          html: "El capitalismo responde que no hay alternativa viable y que el crecimiento eventualmente elevará a todos. Harari advierte que puede ser otro fraude a escala planetaria.",
        },
        {
          type: 'key',
          html: "El capitalismo convierte la confianza en el futuro en crecimiento, con atroces costos humanos cuando no hay freno ético.",
        },
      ],
    },
    {
      id: "cap17",
      num: "17",
      title: "Las ruedas de la industria",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">revolución industrial</span> fue una revolución en convertir energía: el motor de vapor tomó calor del carbón y lo volvió movimiento. Antes, casi toda la energía humana provenía de plantas y del sol que las alimentaba.",
        },
        {
          type: 'paragraph',
          html: "La química industrial creó materiales desconocidos como aluminio y plásticos, además de alimentos sintéticos. El proceso Haber-Bosch sintetizó amoníaco del aire y prolongó guerras y agricultura industrial. El sol aporta millones de exajulios al año. La humanidad consume una fracción minúscula comparada con lo disponible.",
        },
        {
          type: 'paragraph',
          html: "La agricultura industrial trata animales como máquinas: gallinas en jaulas de <span class=\"num\">25×22</span> cm, cerdas que no pueden girar. La revolución industrial fue, sobre todo, la segunda revolución agrícola.",
        },
        {
          type: 'key',
          html: "Aprender a convertir energía y materia a voluntad multiplicó la producción y convirtió gran parte de la biosfera en fábrica.",
        },
      ],
    },
    {
      id: "cap18",
      num: "18",
      title: "Una revolución permanente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El orden social moderno es <span class=\"term\">elástico</span>: cada generación encuentra un mundo distinto. Pese a guerras del siglo XX, la era post-<span class=\"num\">1945</span> es la más pacífica en términos macro: en el año <span class=\"num\">2000</span>, unas <span class=\"num\">310.000</span> muertes por guerra frente a <span class=\"num\">56 millones</span> de muertes totales.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">estado</span> redujo la violencia local. La bomba atómica encareció la guerra entre superpotencias. Conquistar territorio ya no paga como antes (el valor está en capital humano, no en campos). El comercio hace la paz rentable. Los imperios europeos se retiraron con relativa calma. La URSS se disolvió sin guerra civil total.",
        },
        {
          type: 'paragraph',
          html: "La paz real es <span class=\"term\">improbabilidad</span> de guerra, no ausencia de sufrimiento. Optimistas y pesimistas pueden mirar el mismo siglo XX y ver cielo o infierno según el foco.",
        },
        {
          type: 'key',
          html: "Vivimos cambio acelerado constante y, paradójicamente, la era más pacífica a escala internacional.",
        },
      ],
    },
    {
      id: "cap19",
      num: "19",
      title: "Y vivieron felices para siempre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿El progreso nos hizo más felices? Los historiadores rara vez preguntan. Las ideologías asumen que democracia, mercado o revolución proletaria traen bienestar, pero la evidencia es ambigua.",
        },
        {
          type: 'paragraph',
          html: "La agricultura empeoró la vida del campesino. Los imperios europeos beneficiaron a Europa más que a africanos o aborígenes. La familia y la comunidad intimas cedieron ante estado y mercado. Estudios de <span class=\"term\">bienestar subjetivo</span> no muestran incremento claro de felicidad pese a riqueza material.",
        },
        {
          type: 'paragraph',
          html: "La biología sugiere un <span class=\"term\">termostato hedónico</span>: logros y tragedias nos devuelven a un nivel base. Conquistar el mundo no garantizó conquistar la satisfacción.",
        },
        {
          type: 'key',
          html: "Más poder y riqueza colectivos no se tradujeron en más felicidad individual demostrable.",
        },
      ],
    },
    {
      id: "cap20",
      num: "20",
      title: "El final de Homo sapiens",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Durante miles de millones de años reinó la <span class=\"term\">selección natural</span>. Hace <span class=\"num\">10.000</span> años Sapiens empezó a criar animales por diseño. Hoy la <span class=\"term\">ingeniería biológica</span>, los <span class=\"term\">ciborgs</span> y la vida inorgánica amenazan con reemplazarla por diseño inteligente.",
        },
        {
          type: 'paragraph',
          html: "El conejo <span class=\"term\">Alba</span> fluorescente, el ratón con oreja de cartílago cultivada y la posibilidad de revivir neandertales muestran que ya cruzamos umbrales. Prótesis biónicas, insectos cyborg militares y cerebros conectados a redes apuntan a seres que no serían Homo sapiens.",
        },
        {
          type: 'paragraph',
          html: "Harari cierra donde empezó: éramos un animal sin importancia. Podemos convertirnos en dioses o en una especie distinta. La historia como la conocemos podría ser solo el aprendizaje previo a algo radicalmente otro.",
        },
        {
          type: 'key',
          html: "Por primera vez podemos alterar las reglas de la vida y dejar de ser <span class=\"key-term\">Homo sapiens</span>.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Revolución cognitiva",
    "description": "~70.000 a: lenguaje ficticio y cooperación masiva entre extraños."
  },
  {
    "title": "Ficción intersubjetiva",
    "description": "Mitos, dinero, naciones y corporaciones con fuerza real colectiva."
  },
  {
    "title": "Orden imaginado",
    "description": "Jerarquías y leyes que existen solo en creencia compartida."
  },
  {
    "title": "Revolución agrícola",
    "description": "~12.000 a: más población, peor dieta y más trabajo para el campesino."
  },
  {
    "title": "Dinero",
    "description": "Sistema de confianza mutua; máxima tolerancia entre culturas."
  },
  {
    "title": "Imperio",
    "description": "Gobierno multiétnico con fronteras flexibles; forma dominante 2.500 años."
  },
  {
    "title": "Religión universal",
    "description": "Superorden sobrenatural + normas + misión de expandirse."
  },
  {
    "title": "Revolución científica",
    "description": "Ignorancia admitida + método empírico + financiación ideológica."
  },
  {
    "title": "Crédito y crecimiento",
    "description": "Confianza en el futuro como motor del capitalismo moderno."
  },
  {
    "title": "Diseño inteligente",
    "description": "Reemplazo de selección natural por ingeniería biológica y digital."
  }
],
  chronology: [
  {
    "year": "13.500 millones a",
    "text": "Big Bang; inicio de física, química y eventualmente vida."
  },
  {
    "year": "200.000-150.000 a",
    "text": "Homo sapiens anatómicamente moderno en África Oriental."
  },
  {
    "year": "70.000 a",
    "text": "Revolución cognitiva; expansión global y arte."
  },
  {
    "year": "45.000 a",
    "text": "Llegada a Australia; extinción de megafauna local."
  },
  {
    "year": "13.000 a",
    "text": "América; fin de perezosos y mastodontes."
  },
  {
    "year": "12.000 a",
    "text": "Revolución agrícola en Cercano Oriente."
  },
  {
    "year": "3.500 a.C.",
    "text": "Escritura sumeria para administración."
  },
  {
    "year": "2.250 a.C.",
    "text": "Imperio acadio de Sargón."
  },
  {
    "year": "1.776 a.C.",
    "text": "Código de Hammurabi."
  },
  {
    "year": "500 a.C.-1.400 d.C.",
    "text": "Imperios, monedas y religiones universales."
  },
  {
    "year": "1500-2014",
    "text": "Revolución científica, imperialismo europeo, industrialización y era nuclear."
  },
  {
    "year": "Siglo XXI",
    "text": "Biotecnología, IA y posible fin de Homo sapiens."
  }
],
  figures: [
  {
    "name": "Yuval Noah Harari",
    "role": "Historiador; autor de la macro-narrativa de las tres revoluciones."
  },
  {
    "name": "Sargón de Acad",
    "role": "Primer imperio documentado (~2.250 a.C.)."
  },
  {
    "name": "Hammurabi",
    "role": "Rey babilónico; código que legitima jerarquía como voluntad divina."
  },
  {
    "name": "Ciro el Grande",
    "role": "Imperio persa presentado como beneficio universal."
  },
  {
    "name": "James Cook",
    "role": "Explorador; alianza de ciencia, imperio y cartografía (1760s-1770s)."
  },
  {
    "name": "Henry Rawlinson",
    "role": "Militar y erudito; descifró escritura cuneiforme en Behistún."
  },
  {
    "name": "William Jones",
    "role": "Juez en Bengala; pionero de la lingüística comparada."
  },
  {
    "name": "Benjamin Franklin",
    "role": "Experimento del cometa; rayo como fenómeno eléctrico."
  },
  {
    "name": "Eduardo Kac",
    "role": "Artista; conejo Alba como símbolo de diseño biológico."
  },
  {
    "name": "Charles Darwin",
    "role": "Selección natural; contraste con diseño inteligente futuro."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Somos un animal que triunfó cooperando en masa gracias a ficciones compartidas.",
  "Cada revolución cognitiva, agrícola y científica nos dio poder y nos cobró un precio enorme.",
  "El trigo, el dinero y el algoritmo nos domesticaron tanto como nosotros a ellos.",
  "La pregunta ya no es de dónde venimos, sino hacia qué nos convertimos.",
  "Cada capítulo de esta obra fue, en el fondo, una pregunta sobre ese destino."
],
    highlight: "la historia no nos hizo más felices, y por primera vez podemos dejar de ser Homo sapiens",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Yuval Noah Harari",
    line2: "\"Sapiens: A Brief History of Humankind\" · Harvill Secker · 2014",
  },
}
