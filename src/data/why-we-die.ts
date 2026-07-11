import type { BookSummary } from '../types/book'

export const whyWeDie: BookSummary = {
  slug: "why-we-die",
  meta: {
    title: "Why We Die: The New Science of Aging and the Quest for Immortality",
    subtitle: "La nueva ciencia del envejecimiento y la búsqueda de la inmortalidad",
    author: "Venki Ramakrishnan",
    meta: [
      "📖 2024 · Bodley Head / Crown",
      "✍️ Nobel de Química 2009 · ribosoma · MRC Laboratory of Molecular Biology",
    ],
    titleEs: "Por qué morimos",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "Introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hace un siglo, <span class=\"person\">Howard Carter</span> abrió la tumba de <span class=\"person\">Tutankamón</span> en un ritual para trascender la muerte con máscara de oro, libro de los muertos y dios <span class=\"person\">Anubis</span> pesando el corazón. Los egipcios no eran únicos, pues toda cultura niega la finalidad de la muerte. El filósofo <span class=\"person\">Stephen Cave</span> describe cuatro planes para afrontarla: vivir lo más posible, renacer en cuerpo, conservar un alma inmortal o dejar legado biológico y cultural.",
        },
        {
          type: 'paragraph',
          html: "La conciencia de la propia muerte requirió cerebro autorreflexivo y lenguaje. Vivimos en negación mediante eufemismos, hospitales alejados, distracciones. El el Ilustracionismo desplazó la fe hacia la ciencia, pero el legado no basta, porque los hijos son otros seres conscientes. Plan A, que consiste en evitar accidentes, enfermedades, buscar curas, sigue vigente. En <span class=\"num\">150</span> años duplicamos la esperanza de vida reduciendo mortalidad infantil, pero alargar el máximo (~<span class=\"num\">120</span> años) es otro reto.",
        },
        {
          type: 'paragraph',
          html: "La revolución genética plantea si podemos frenar o abolir el envejecimiento. Más de <span class=\"num\">300 000</span> artículos y <span class=\"num\">700</span> startups surgieron en una década, y billonarios californianos financian promesas de inmortalidad. <span class=\"person\">Ramakrishnan</span> se pregunta si no es arrogancia pretender vencer la muerte cuando un virus como el COVID-19 recuerda que la evolución no nos debe nada. El libro recorre mecanismos y dilemas sin vender milagros.",
        },
        {
          type: 'key',
          html: "Por primera vez la biología ofrece palancas reales sobre el <span class=\"key-term\">envejecimiento</span>, pero la sociedad no está preparada para sus consecuencias.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El gen inmortal y el cuerpo desechable",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Una célula es una ciudad con transporte, residuos, comunicación y crecimiento controlado. Las ciudades también nacen y mueren. <span class=\"person\">Hampi</span> fue el Londres de su época y hoy son ruinas. Cuando morimos, la mayoría de las células siguen vivas, un riñón trasplantado funciona y las bacterias prosperan. Morimos cuando las células dejan de cooperar como un <span class=\"term\">organismo coherente</span>.",
        },
        {
          type: 'paragraph',
          html: "El envejecimiento es daño químico acumulado que reduce la capacidad física y mental hasta el fallo sistémico. <span class=\"person\">Hemingway</span> lo resume en una frase: «Dos maneras. Poco a poco, luego de repente». La muerte legal varía según el estado, y el momento exacto es borroso, como ocurre con el nacimiento entre la concepción, la implantación y la primitive streak a los <span class=\"num\">14</span> días.",
        },
        {
          type: 'paragraph',
          html: "La paradoja central sostiene que aunque individuos mueren, la <span class=\"term\">vida continúa</span>. Cada ser vivo desciende de una célula ancestral de hace miles de millones de años. Lo que no muere es la <span class=\"term\">información genética</span>, transmitida en cada división y, en células germinales, a la siguiente generación. <span class=\"person\">Lamarck</span> creía en herencia de caracteres adquiridos. <span class=\"person\">Darwin</span> y <span class=\"person\">Wallace</span> (carta de <span class=\"num\">1858</span>) explicaron selección natural: el cuello de la jirafa no se estira por esfuerzo, sino por variantes favorables.",
        },
        {
          type: 'key',
          html: "Los <span class=\"key-term\">genes son inmortales</span> entre generaciones. nuestros cuerpos son vehículos desechables diseñados para reproducirse, no para durar.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Vive rápido y muere joven",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Una mariposa vive días. un tejo británico, más de <span class=\"num\">3000</span> años. La <span class=\"term\">hidra</span> y la medusa <span class=\"term\">Turritopsis dohrnii</span> parecen no envejecer —pueden regenerarse o revertir etapas, , pero no son mamíferos y sus trucos de regeneración distan de traducirse fácilmente a humanos.",
        },
        {
          type: 'paragraph',
          html: "Entre mamíferos, el tamaño correlaciona con longevidad: más grandes, metabolismo más lento, menos latidos por gramo. La ley de <span class=\"person\">Kleiber</span> escala metabolismo a masa<sup>¾</sup>. <span class=\"person\">Geoffrey West</span> nota ~<span class=\"num\">1 500 millones</span> latidos por vida, como revoluciones de un motor de auto. Humanos hoy casi duplican eso gracias a medicina, pero el máximo sigue en ~<span class=\"num\">120</span> años.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Steven Austad</span> y el <span class=\"term\">cociente de longevidad</span> (LQ) buscan especies que batan la escala: aves vuelan y viven más que roedores similares. La evolución optimiza <span class=\"term\">aptitud</span>, no longevidad absoluta: si un depredador te come joven, no sirve vivir siglo y medio. Vivir más vale solo si sobrevives lo suficiente para reproducirte.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">longevidad</span> refleja presiones evolutivas y metabolismo, no un límite físico fijo para todos los organismos.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Destruyendo el controlador maestro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Hampi</span>, gran ciudad del sur de India, colapsó cuando perdió control, como una célula sin regulación. Los <span class=\"term\">genes</span> son unidades de información que no solo transmiten rasgos heredados, sino que dan instrucciones para construir y mantener un organismo. Las <span class=\"term\">proteínas</span> ejecutan casi todas las funciones vitales, desde la estructura y las señales hasta los anticuerpos y la memoria.",
        },
        {
          type: 'paragraph',
          html: "Hasta <span class=\"num\">1953</span>, el ADN era misterio. <span class=\"person\">Watson</span> y <span class=\"person\">Crick</span> dedujeron la doble hélice: A-T, C-G, cada hebra copia a la otra. El mensaje se transcribe a <span class=\"term\">ARNm</span> y los <span class=\"term\">ribosomas</span> leen codones de tres bases para ensamblar proteínas que se pliegan solas en formas funcionales —milagro que Ramakrishnan estudió toda su carrera.",
        },
        {
          type: 'paragraph',
          html: "El genoma no dicta como un plano rígido, sino que forma una red que responde al entorno. El <span class=\"term\">ADN se deteriora</span> con el tiempo, y las mutaciones son errores de letras que alteran el significado. Por eso el programa no puede correr eternamente sin fallos.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">envejecimiento</span> empieza cuando el ADN y su programa génico se dañan o desregulan.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "El problema de los extremos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Alexis Carrel</span>, cirujano francés en el Rockefeller, anunció en los años <span class=\"num\">20</span> células de embrión de pollo «inmortales» en cultivo. <span class=\"term\">Scientific American</span> (<span class=\"num\">1921</span>) soñó con vidas de mil años. Estaba equivocado, pues probable contaminación con células frescas o cáncer de pollo vecino.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Leonard Hayflick</span> en los <span class=\"num\">50-60</span> demostró que células humanas normales dividen un número finito y entran en <span class=\"term\">senescencia</span>: las viejas recuerdan su edad aunque rodeadas de jóvenes. Publicado en <span class=\"num\">1961</span> tras rechazo inicial. El <span class=\"term\">límite de Hayflick</span> (~<span class=\"num\">40-60</span> divisiones) diferencia células normales de cancerosas.",
        },
        {
          type: 'paragraph',
          html: "El problema de replicar extremos surge porque la maquinaria copia ADN en una dirección y deja un trozo sin duplicar bajo el «tren». Cada división acorta los cromosomas. <span class=\"person\">Barbara McClintock</span> y <span class=\"person\">Hermann Muller</span> vieron que los extremos naturales —<span class=\"term\">telómeros</span>, no se fusionan como roturas. <span class=\"person\">Elizabeth Blackburn</span> y <span class=\"person\">Jack Szostak</span> secuenciaron repeticiones TTGGGG en Tetrahymena y estabilizaron cromosomas artificiales en levadura.",
        },
        {
          type: 'key',
          html: "Los <span class=\"key-term\">telómeros</span> y el límite de Hayflick explican por qué las células normales no son inmortales.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Reiniciando el reloj biológico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"num\">26</span> de junio de <span class=\"num\">2000</span>, <span class=\"person\">Clinton</span> y <span class=\"person\">Blair</span> anunciaron el borrador del genoma humano. <span class=\"person\">Craig Venter</span> (Celera, privado) chocó con <span class=\"person\">John Sulston</span> (consorcio público, sandalias y bicicleta). El ADN no es libro legible: flujo sin puntuación, <span class=\"num\">2 %</span> codifica proteínas, resto «basura» aún enigma.",
        },
        {
          type: 'paragraph',
          html: "Gemelos idénticos muestran que el genoma no es destino: pueden diferir en esquizofrenia pese a mismos genes. La <span class=\"term\">epigenética</span> —capa «sobre» los genes, explica por qué una célula piel no vuelve a ser neurona. <span class=\"person\">Conrad Waddington</span> (<span class=\"num\">1942</span>) imaginó una bola rodando por valles del desarrollo. difícil subir de nuevo.",
        },
        {
          type: 'paragraph',
          html: "La clonación (Briggs-King, <span class=\"num\">1952</span>, rana) y los <span class=\"term\">factores Yamanaka</span> demostraron que el núcleo de célula especializada puede reprogramarse a estado pluripotente. No es Lamarckismo: son cambios reversibles en control génico, no en secuencia. La pregunta es hasta dónde se puede «rebobinar» sin tumores.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">epigenética</span> explica identidades celulares distintas con el mismo ADN y abre la puerta a revertir parte del envejecimiento.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Reciclando la basura",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Ramakrishnan, a los <span class=\"num\">70</span>, olvida citas y pierde guantes, pero recuerda haber olvidado una cena a los <span class=\"num\">20</span>. La demencia es otra cosa: más de <span class=\"num\">50 millones</span> de personas hoy, <span class=\"num\">139 millones</span> proyectados para <span class=\"num\">2050</span>. En Inglaterra ya superó a enfermedad cardíaca como causa de muerte.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Alois Alzheimer</span> (~<span class=\"num\">1900</span>) describió pérdida de identidad progresiva. Enfermedades neurodegenerativas comparten proteínas mal plegadas. Las cadenas deben esconder partes hidrofóbicas. si se despliegan, se pegan como huevo hervido. <span class=\"term\">Chaperonas</span> ayudan a plegar. la <span class=\"term\">respuesta a proteína desplegada</span> activa más chaperonas, frena síntesis o mata la célula.",
        },
        {
          type: 'paragraph',
          html: "A medida que envejecemos, el control de calidad celular se debilita. La <span class=\"term\">ubiquitina</span> marca proteínas defectuosas y la <span class=\"term\">autofagia</span> las degrada. La glicación aleatoria daña lentes y retina. Cuando el reciclaje falla, la célula se llena de chatarra molecular.",
        },
        {
          type: 'key',
          html: "El envejecimiento acelera cuando fallan el plegamiento, la calidad y el <span class=\"key-term\">reciclaje de proteínas</span>.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Menos es más",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En la India de Ramakrishnan todos ayunaban: hindúes, musulmanes en Ramadán, cristianos en Cuaresma. La abundancia occidental trajo obesidad —factor de riesgo para COVID-19, diabetes, cáncer, Alzheimer. Comer menos prolonga vida en ratones desde experimentos de <span class=\"num\">1917</span>.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">restricción calórica</span> reduce entre un <span class=\"num\">30</span> y un <span class=\"num\">50 %</span> las calorías sin malnutrición y alarga la vida entre un <span class=\"num\">20</span> y un <span class=\"num\">50 %</span> en roedores. También funciona en levadura. Estudios en monos Wisconsin vs NIA se contradicen: dieta control sana vs sobrealimentación importa. <span class=\"person\">Hayflick</span> sospecha que CR solo corrige dietas de laboratorio excesivas.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">rapamicina</span>, hallada en isla de Pascua (<span class=\"num\">1964</span>), inhibe <span class=\"term\">mTOR</span> y imita hambre celular. Ayuno intermitente, alineación con ritmo circadiano y menos metionina/triptófano ayudan. La restricción también trae hambre, frío, pérdida muscular y libido, y las ratas vuelven a comer en cuanto pueden. La industria anti-edad quiere una píldora sin renunciar al postre.",
        },
        {
          type: 'key',
          html: "Comer menos activa vías de <span class=\"key-term\">mantenimiento celular</span>, pero no es panacea humana probada a largo plazo.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Lecciones de un humilde gusano",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La heredabilidad de longevidad humana en gemelos daneses era solo ~<span class=\"num\">25 %</span> —muchos genes pequeños, , pero el nematodo <span class=\"term\">C. elegans</span> revolucionó el campo. <span class=\"person\">Sydney Brenner</span> lo eligió por transparencia, corta generación y linaje trazable de <span class=\"num\">900</span> células.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Tom Johnson</span> publicó en <span class=\"term\">Science</span> (<span class=\"num\">1990</span>) que mutación en un solo gen, <span class=\"term\">age-1</span>, duplicaba la vida máxima. Recibió escepticismo dos años. <span class=\"person\">Cynthia Kenyon</span> en <span class=\"term\">Nature</span> (<span class=\"num\">1993</span>) halló <span class=\"term\">daf-2</span>: gusanos con mutación vivían el doble. <span class=\"person\">Gary Ruvkun</span> identificó que daf-2 es receptor de <span class=\"term\">IGF-1</span> (insulina-like) y daf-16 es factor de transcripción FOXO: vía hormonal conservada hasta humanos.",
        },
        {
          type: 'paragraph',
          html: "El estado <span class=\"term\">dauer</span> de hambre suspende envejecimiento en juveniles ~<span class=\"num\">2</span> meses (equivalente a <span class=\"num\">300</span> años humanos relativos), pero adultos ya no entran. Un gen grande, no mil factores diminutos, puede cambiar el reloj.",
        },
        {
          type: 'key',
          html: "Un solo gen en gusanos reveló la vía <span class=\"key-term\">insulina/IGF-1</span> que regula longevidad en muchos animales.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "El polizón dentro de nosotros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Hace ~<span class=\"num\">2000 millones</span> de años, un <span class=\"term\">arqueon</span> tragó una bacteria que no murió: simbiosis. <span class=\"person\">Lynn Margulis</span> defendió la endosimbiosis contra el dogma de evolución lineal. hoy las <span class=\"term\">mitocondrias</span> son descendientes de ese polizón.",
        },
        {
          type: 'paragraph',
          html: "Las mitocondrias convierten carbohidratos en <span class=\"term\">ATP</span>, moneda energética universal de la célula —como electricidad en sociedad moderna. El cuerpo genera roughly su peso en ATP al día. el cerebro consume una quinta parte. Producción vía gradiente de protones y turbina molecular <span class=\"term\">ATP sintasa</span>.",
        },
        {
          type: 'paragraph',
          html: "Perdieron la mayoría de genes al núcleo host. el minúsculo ADN mitocondrial muta y causa enfermedades (diabetes, sordera). Se heredan solo de madre. UK legalizó bebés de «tres padres». Mitocondrias fusionan y dividen. defectos se segregan. Su desgaste impulsa envejecimiento.",
        },
        {
          type: 'key',
          html: "Las <span class=\"key-term\">mitocondrias</span> nos dan energía pero su daño acumulado contribuye al declive.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Dolores, achaques y sangre de vampiro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En el coast-to-coast walk de <span class=\"num\">2013</span>, Ramakrishnan abandonó la travesía por una rodilla con menisco roto y <span class=\"term\">osteoartritis</span>. La inflamación articular es local, pero con la edad aparece un <span class=\"term\">inflammaging</span> sistémico impulsado por células <span class=\"term\">senescentes</span>.",
        },
        {
          type: 'paragraph',
          html: "Daño al ADN puede matar la célula, repararla o mandarla a senescencia (freno anticancerígeno vía <span class=\"term\">p53</span>). Si el sistema inmune envejece, senescentes se acumulan y secretan citocinas que dañan tejido. <span class=\"person\">Jan van Deursen</span> eliminó senescentes en ratones: +<span class=\"num\">20-30 %</span> vida, riñones y corazón mejores. Pocas senescentes trasplantadas bastan para dañar ratones jóvenes.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">células madre</span> regeneran tejidos pero pierden balance y número. clones mutados dominan y pueden dar cáncer. Reprogramación Yamanaka completa puede generar teratomas. La transfusión de sangre joven a viejos (experimento en ratones) inspiró terapias «vampiro» controvertidas en humanos.",
        },
        {
          type: 'key',
          html: "Eliminar <span class=\"key-term\">células senescentes</span> y restaurar células madre podría revertir fragilidad, con riesgos reales.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "¿Locos o profetas?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los egipcios momificaron faraones para renacer. hoy la <span class=\"term\">criogenia</span> congela cuerpos en nitrógeno líquido tras la muerte. <span class=\"person\">Robert Ettinger</span> fundó el Cryonics Institute (<span class=\"num\">1976</span>, ~<span class=\"num\">28 000</span> dólares). Alcor cobra ~<span class=\"num\">200 000</span>. Transhumanistas congelan solo cerebro esperando subir la mente a computadora.",
        },
        {
          type: 'paragraph',
          html: "No hay evidencia creíble de que funcione. Minutos u horas después de la muerte, las células colapsan bioquímicamente. La <span class=\"term\">conectómica</span> avanza en moscas, pero un mapa estático no captura estados dinámicos, hormonas ni cuerpo. <span class=\"person\">Albert Cardona</span> (MRC) sostiene que un cerebro sin cuerpo no es la persona, y que el cerebro envejecido no equivale al de los <span class=\"num\">25</span> años.",
        },
        {
          type: 'paragraph',
          html: "Entre los casos legales, niña británica de <span class=\"num\">14</span> años con cáncer quiso criogenia. <span class=\"person\">Ted Williams</span> quería cremación pero hijos congelaron su cabeza (<span class=\"num\">2002</span>). Científicos UK pidieron restringir marketing a vulnerables. Criopreservar células y embriones sí funciona. personas enteras, no.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">criogenia</span> promete resurrección futura sin base científica seria hoy.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "¿Deberíamos vivir para siempre?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Ramakrishnan, activo a la edad en que murieron sus abuelos, ve un mundo con ~<span class=\"num\">20 %</span> mayores de <span class=\"num\">65</span> en países ricos, menos hijos por familia y sistemas de pensiones diseñados para pocos años post-<span class=\"num\">65</span>. Gobiernos financian gerontología para mantener ancianos productivos y sanos.",
        },
        {
          type: 'paragraph',
          html: "Extender vida sin <span class=\"term\">comprimir morbilidad</span> empeora todo. Desigualdad: en Inglaterra <span class=\"num\">10</span> años de brecha de vida, casi el doble en años sanos. en EE.UU. <span class=\"num\">15</span> años rich/poor. Medicina avanzada beneficia primero a ricos. riesgo de dos clases humanas: longevos sanos vs el resto.",
        },
        {
          type: 'paragraph',
          html: "Sobre la sobrepoblación, no es inevitable que Japón vive más pero población cae desde <span class=\"num\">2010</span>. Carreras más largas son la salida si jubilación a los <span class=\"num\">65</span> es insostenible —pero obrero de <span class=\"num\">65</span> no desea otros <span class=\"num\">50</span> de faena física. En Francia, <span class=\"num\">1,2 millones</span> marcharon en <span class=\"num\">2023</span> contra subir jubilación de <span class=\"num\">62</span> a <span class=\"num\">64</span>. Científicos creen hacer su mejor trabajo siendo jóvenes. el Nobel rara vez llega por trabajo tardío.",
        },
        {
          type: 'key',
          html: "Podemos ralentizar el envejecimiento, pero la sociedad debe decidir <span class=\"key-term\">conscientemente</span> cómo repartir años extra sin agravar desigualdad.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Gen inmortal / cuerpo desechable",
    "description": "Información genética persiste; individuos son vehículos temporales."
  },
  {
    "title": "Restricción calórica / mTOR",
    "description": "Menos nutrientes activan mantenimiento; rapamicina inhibe mTOR."
  },
  {
    "title": "Telómeros / Hayflick limit",
    "description": "Extremos cromosómicos que acortan; límite ~40-60 divisiones."
  },
  {
    "title": "Epigenética",
    "description": "Control reversible sobre genes; factores Yamanaka reprograman."
  },
  {
    "title": "daf-2 / IGF-1 / FOXO",
    "description": "Vía insulina que regula longevidad desde gusanos a mamíferos."
  },
  {
    "title": "Mitocondrias / ATP",
    "description": "Simbiontes energéticos; daño mitocondrial envejece al organismo."
  },
  {
    "title": "Células senescentes",
    "description": "Zombie celulares que inflaman; blanco de senolíticos."
  },
  {
    "title": "Autofagia",
    "description": "Reciclaje de proteínas dañadas marcadas con ubiquitina."
  },
  {
    "title": "Inflammaging",
    "description": "Inflamación crónica de bajo grado en la vejez."
  },
  {
    "title": "Compresión de morbilidad",
    "description": "Acortar años enfermos, no solo alargar la cuenta total."
  }
],
  chronology: [
  {
    "year": "~1922",
    "text": "Carter abre tumba de Tutankamón."
  },
  {
    "year": "1858",
    "text": "Wallace escribe a Darwin; selección natural publicada."
  },
  {
    "year": "1953",
    "text": "Watson y Crick deducen estructura del ADN."
  },
  {
    "year": "1961",
    "text": "Hayflick demuestra límite replicativo celular."
  },
  {
    "year": "1964",
    "text": "Expedición a isla de Pascua; suelo con rapamicina."
  },
  {
    "year": "1990",
    "text": "Johnson publica age-1 en Science (gusano longevo)."
  },
  {
    "year": "1993",
    "text": "Kenyon publica daf-2 en Nature (doble vida)."
  },
  {
    "year": "2000",
    "text": "Clinton y Blair anuncian borrador del genoma humano (26 junio)."
  },
  {
    "year": "2024",
    "text": "Publicación de Why We Die."
  }
],
  figures: [
  {
    "name": "Venki Ramakrishnan",
    "role": "Autor; Nobel Química 2009 por estructura del ribosoma"
  },
  {
    "name": "Stephen Cave",
    "role": "Cuatro planes de inmortalidad psicológica"
  },
  {
    "name": "Charles Darwin / Alfred Wallace",
    "role": "Selección natural; carta 1858"
  },
  {
    "name": "Alexis Carrel",
    "role": "Células «inmortales» en cultivo; refutado"
  },
  {
    "name": "Leonard Hayflick",
    "role": "Límite de divisiones; senescencia celular 1961"
  },
  {
    "name": "Elizabeth Blackburn / Jack Szostak",
    "role": "Secuencia y función de telómeros"
  },
  {
    "name": "Cynthia Kenyon / Tom Johnson",
    "role": "Genética de longevidad en C. elegans"
  },
  {
    "name": "Sydney Brenner",
    "role": "Introdujo C. elegans como modelo"
  },
  {
    "name": "Lynn Margulis",
    "role": "Teoría endosimbiótica de mitocondrias"
  },
  {
    "name": "Jan van Deursen",
    "role": "Eliminación de senescentes prolonga vida en ratones"
  },
  {
    "name": "Robert Ettinger",
    "role": "Pionero moderno de criogenia humana"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Morimos porque el cuerpo acumula daño y la evolución diseñó cuerpos desechables, no genes eternos.",
  "La biología molecular ya identifica telómeros, epigenética, mitocondrias y senescencia como palancas del declive.",
  "La criogenia promete sin evidencia; la ciencia seria exige ensayos, no profetas.",
  "Si comprimimos la morbilidad, ganamos años sanos; si no, empeoramos desigualdad y pensiones.",
  "La pregunta final no es solo «¿podemos?» sino «¿cómo repartimos el beneficio?»."
],
    highlight: "podemos ralentizar el envejecimiento, pero extender la vida sin pensar la sociedad sería peligroso",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Venki Ramakrishnan",
    line2: "\"Why We Die: The New Science of Aging and the Quest for Immortality\" · Bodley Head · 2024",
  },
}
