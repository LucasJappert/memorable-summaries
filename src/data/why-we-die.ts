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
          html: "¿Por qué la humanidad lleva milenios negando la muerte mientras la biología empieza a ofrecer palancas reales sobre el envejecimiento? Hace un siglo, el arqueólogo <span class=\"person\">Howard Carter</span> abrió la tumba de <span class=\"person\">Tutankamón</span>. El ritual egipcio buscaba trascender la muerte con máscara de oro y dios <span class=\"person\">Anubis</span> pesando el corazón.",
        },
        {
          type: 'paragraph',
          html: "Toda cultura niega la finalidad de la muerte. El filósofo <span class=\"person\">Stephen Cave</span> describe cuatro planes para afrontarla. Vivir lo más posible, renacer en otro cuerpo, conservar un alma inmortal o dejar legado biológico y cultural. La conciencia de la propia muerte requirió cerebro autorreflexivo y lenguaje. Vivimos en negación mediante eufemismos, hospitales alejados y distracciones.",
        },
        {
          type: 'paragraph',
          html: "El Ilustracionismo desplazó la fe hacia la ciencia, pero el legado no basta porque los hijos son otros seres conscientes. Plan A, que consiste en evitar accidentes y enfermedades, sigue vigente. En <span class=\"num\">150</span> años duplicamos la esperanza de vida reduciendo mortalidad infantil. Pero alargar el máximo (~<span class=\"num\">120</span> años) es otro reto. La revolución genética plantea si podemos frenar el envejecimiento. Más de <span class=\"num\">300 000</span> artículos y <span class=\"num\">700</span> startups surgieron en una década. El químico <span class=\"person\">Venki Ramakrishnan</span> se pregunta si no es arrogancia pretender vencer la muerte. Un virus como el COVID-19 recuerda que la evolución no nos debe nada.",
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
          html: "¿Por qué morimos si muchas células del cuerpo siguen vivas después? Una célula es una ciudad con transporte, residuos, comunicación y crecimiento controlado. Las ciudades también nacen y mueren: <span class=\"person\">Hampi</span> fue el Londres de su época y hoy son ruinas.",
        },
        {
          type: 'paragraph',
          html: "Cuando morimos, un riñón trasplantado funciona y las bacterias prosperan. Morimos cuando las células dejan de cooperar como un <span class=\"term\">organismo coherente</span> (un cuerpo que funciona como un solo ser vivo). El envejecimiento es daño químico acumulado que reduce la capacidad física y mental hasta el fallo sistémico. <span class=\"person\">Hemingway</span> lo resume: «Poco a poco, luego de repente».",
        },
        {
          type: 'paragraph',
          html: "La paradoja central sostiene que aunque individuos mueren, la vida continúa. Cada ser vivo desciende de una célula ancestral de hace miles de millones de años. Lo que no muere es la <span class=\"term\">información genética</span> (el código heredado que se transmite de generación en generación). El naturalista <span class=\"person\">Charles Darwin</span> explicó la selección natural en <span class=\"num\">1858</span>, junto con el biólogo Wallace. El cuello de la jirafa no se estira por esfuerzo, sino por variantes favorables.",
        },
        {
          type: 'key',
          html: "Los <span class=\"key-term\">genes son inmortales</span> entre generaciones, pero nuestros cuerpos son vehículos desechables diseñados para reproducirse, no para durar.",
        },
        {
          type: 'paragraph',
          html: "Si los genes persisten pero los cuerpos caducan, la pregunta siguiente es por qué unos organismos viven días y otros milenios.",
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
          html: "¿Por qué una mariposa vive días y un tejo británico más de <span class=\"num\">3000</span> años? La <span class=\"term\">hidra</span> (un animal de agua dulce diminuto) y la medusa Turritopsis dohrnii parecen no envejecer. Pueden regenerarse o revertir etapas, pero no son mamíferos y sus trucos distan de traducirse fácilmente a humanos.",
        },
        {
          type: 'paragraph',
          html: "Entre mamíferos, el tamaño correlaciona con longevidad: más grandes, metabolismo más lento, menos latidos por gramo. La ley de <span class=\"person\">Max Kleiber</span> escala el metabolismo a masa<sup>¾</sup>. <span class=\"person\">Geoffrey West</span> nota ~<span class=\"num\">1 500 millones</span> latidos por vida, como revoluciones de un motor de auto. Humanos hoy casi duplican eso gracias a medicina, pero el máximo sigue en ~<span class=\"num\">120</span> años.",
        },
        {
          type: 'paragraph',
          html: "El biólogo <span class=\"person\">Steven Austad</span> busca especies que batan la escala esperada: aves vuelan y viven más que roedores similares. La evolución optimiza la <span class=\"term\">aptitud reproductiva</span> (dejar más descendencia viable), no longevidad absoluta. Cuando un depredador mata a un animal joven, vivir siglo y medio no ayuda. Por eso vivir más vale solo si sobrevives lo suficiente para reproducirte.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">longevidad</span> refleja presiones evolutivas y metabolismo, no un límite físico fijo para todos los organismos.",
        },
        {
          type: 'paragraph',
          html: "Esas presiones actúan sobre el programa que mantiene cada célula funcionando: el material genético.",
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
          html: "¿Qué ocurre cuando una célula pierde el control central de su programa? <span class=\"person\">Hampi</span>, gran ciudad del sur de India, colapsó cuando perdió gobierno, como una célula sin regulación. Los <span class=\"term\">genes</span> (unidades de información heredada) no solo transmiten rasgos, sino que dan instrucciones para construir y mantener un organismo.",
        },
        {
          type: 'paragraph',
          html: "Hasta <span class=\"num\">1953</span>, el ADN era misterio. Los biólogos <span class=\"person\">James Watson</span> y <span class=\"person\">Francis Crick</span> dedujeron la doble hélice: A-T, C-G, cada hebra copia a la otra. El mensaje se transcribe y los ribosomas ensamblan <span class=\"term\">proteínas</span> (moléculas que ejecutan casi todas las funciones vitales). Estas se pliegan solas en formas funcionales —milagro que Ramakrishnan estudió toda su carrera.",
        },
        {
          type: 'paragraph',
          html: "El genoma no dicta como un plano rígido, sino que forma una red que responde al entorno. El ADN se deteriora con el tiempo, y las mutaciones son errores de letras que alteran el significado. Por eso el programa no puede correr eternamente sin fallos.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">envejecimiento</span> empieza cuando el ADN y su programa génico se dañan o desregulan.",
        },
        {
          type: 'paragraph',
          html: "Un fallo crítico aparece cada vez que una célula se divide: el problema de copiar los extremos del cromosoma.",
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
          html: "¿Por qué las células normales dejan de dividirse mientras las cancerosas no? El cirujano <span class=\"person\">Alexis Carrel</span>, en el Rockefeller, anunció en los años <span class=\"num\">20</span> células de embrión de pollo «inmortales» en cultivo. Estaba equivocado, pues probablemente hubo contaminación con células frescas o cáncer de pollo vecino.",
        },
        {
          type: 'paragraph',
          html: "El anatomista <span class=\"person\">Leonard Hayflick</span> demostró en los <span class=\"num\">50-60</span> que células humanas normales dividen un número finito. Entran en <span class=\"term\">senescencia celular</span> (un freno que detiene la división): las viejas recuerdan su edad aunque rodeadas de jóvenes. Publicado en <span class=\"num\">1961</span> tras rechazo inicial. El límite de Hayflick (~<span class=\"num\">40-60</span> divisiones) diferencia células normales de cancerosas.",
        },
        {
          type: 'paragraph',
          html: "El problema surge porque la maquinaria copia ADN en una dirección y deja un trozo sin duplicar bajo el «tren». Cada división acorta los cromosomas. Los extremos naturales, los <span class=\"term\">telómeros</span> (capas protectoras en los extremos del cromosoma), no se fusionan como roturas. La bioquímica <span class=\"person\">Elizabeth Blackburn</span> y el genetista <span class=\"person\">Jack Szostak</span> secuenciaron repeticiones TTGGGG en Tetrahymena y estabilizaron cromosomas artificiales en levadura.",
        },
        {
          type: 'key',
          html: "Los <span class=\"key-term\">telómeros</span> y el límite de Hayflick explican por qué las células normales no son inmortales.",
        },
        {
          type: 'paragraph',
          html: "Si los telómeros marcan un reloj celular, la pregunta es si ese reloj se puede rebobinar sin cambiar el ADN.",
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
          html: "¿El genoma humano es un destino escrito o un programa que se puede reprogramar? En junio de <span class=\"num\">2000</span>, Clinton y Blair anunciaron el borrador del genoma humano. El ADN no es libro legible: flujo sin puntuación, <span class=\"num\">2 %</span> codifica proteínas, resto «basura» aún enigma.",
        },
        {
          type: 'paragraph',
          html: "Gemelos idénticos muestran que el genoma no es destino: pueden diferir en esquizofrenia pese a mismos genes. La <span class=\"term\">epigenética</span> (capa de control «sobre» los genes) explica por qué una célula piel no vuelve a ser neurona. El biólogo <span class=\"person\">Conrad Waddington</span> (<span class=\"num\">1942</span>) imaginó una bola rodando por valles del desarrollo. Es difícil subir de nuevo.",
        },
        {
          type: 'paragraph',
          html: "La clonación (<span class=\"num\">1952</span>, rana) y los factores Yamanaka demostraron que el núcleo de célula especializada puede reprogramarse a estado pluripotente. No es Lamarckismo: son cambios reversibles en control génico, no en secuencia. La pregunta es hasta dónde se puede «rebobinar» sin tumores.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">epigenética</span> explica identidades celulares distintas con el mismo ADN y abre la puerta a revertir parte del envejecimiento.",
        },
        {
          type: 'paragraph',
          html: "Reprogramar el reloj no basta si la célula acumula proteínas dañadas que no puede reciclar.",
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
          html: "¿Por qué el envejecimiento se parece tanto a una casa que se llena de chatarra? Ramakrishnan, a los <span class=\"num\">70</span>, olvida citas y pierde guantes, pero recuerda haber olvidado una cena a los <span class=\"num\">20</span>. La demencia es otra cosa. Hoy afecta a más de <span class=\"num\">50 millones</span> de personas. En <span class=\"num\">2050</span> habrá cerca de <span class=\"num\">139 millones</span> de casos.",
        },
        {
          type: 'paragraph',
          html: "El neurólogo <span class=\"person\">Alois Alzheimer</span> (~<span class=\"num\">1900</span>) describió pérdida de identidad progresiva. Enfermedades neurodegenerativas comparten proteínas mal plegadas. Las cadenas deben esconder partes hidrofóbicas. Cuando se despliegan, se pegan como huevo hervido. Las <span class=\"term\">chaperonas moleculares</span> (proteínas auxiliares que ayudan a plegar otras) corrigen el proceso.",
        },
        {
          type: 'paragraph',
          html: "A medida que envejecemos, el control de calidad celular se debilita. La <span class=\"term\">autofagia</span> (reciclaje interno que degrada proteínas defectuosas) falla con la edad. La glicación aleatoria daña lentes y retina. Cuando el reciclaje falla, la célula se llena de chatarra molecular.",
        },
        {
          type: 'key',
          html: "El envejecimiento acelera cuando fallan el plegamiento, la calidad y el <span class=\"key-term\">reciclaje de proteínas</span>.",
        },
        {
          type: 'paragraph',
          html: "Parte del reciclaje celular responde a cuánto comemos: menos nutrientes pueden activar vías de mantenimiento.",
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
          html: "¿Comer menos puede alargar la vida? En la India de Ramakrishnan todos ayunaban: hindúes, musulmanes en Ramadán, cristianos en Cuaresma. La abundancia occidental trajo obesidad —factor de riesgo para COVID-19, diabetes, cáncer y Alzheimer. Comer menos prolonga vida en ratones desde experimentos de <span class=\"num\">1917</span>.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">restricción calórica</span>, o sea comer mucho menos sin malnutrición, alarga la vida en roedores. El aumento puede ir del veinte al cincuenta por ciento. También funciona en levadura. Estudios en monos Wisconsin vs NIA se contradicen: dieta control sana vs sobrealimentación importa. Hayflick sospecha que la restricción solo corrige dietas de laboratorio excesivas.",
        },
        {
          type: 'paragraph',
          html: "La rapamicina, hallada en isla de Pascua (<span class=\"num\">1964</span>), inhibe <span class=\"term\">mTOR</span> (una vía que detecta nutrientes y acelera el crecimiento). Imida hambre celular. Ayuno intermitente y alineación con ritmo circadiano ayudan. Comer menos trae hambre, frío y pérdida muscular. La industria anti-edad quiere una píldora sin renunciar al postre.",
        },
        {
          type: 'key',
          html: "Comer menos activa vías de <span class=\"key-term\">mantenimiento celular</span>, pero no es panacea humana probada a largo plazo.",
        },
        {
          type: 'paragraph',
          html: "El metabolismo no es solo dieta: un solo gen en un gusano diminuto reveló vías hormonales conservadas hasta los humanos.",
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
          html: "¿Puede un solo gen cambiar cuánto vive un animal? La heredabilidad de longevidad humana en gemelos daneses era solo ~<span class=\"num\">25 %</span>. Pero el nematodo <span class=\"term\">C. elegans</span> (un gusano transparente de laboratorio) revolucionó el campo. El biólogo <span class=\"person\">Sydney Brenner</span> lo eligió por transparencia, corta generación y linaje trazable de <span class=\"num\">900</span> células.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Tom Johnson</span> publicó en <span class=\"num\">1990</span> que mutación en un solo gen duplicaba la vida máxima. Recibió escepticismo dos años. La genetista <span class=\"person\">Cynthia Kenyon</span> en <span class=\"num\">1993</span> halló el gen daf-2: gusanos con mutación vivían el doble. El biólogo <span class=\"person\">Gary Ruvkun</span> identificó que daf-2 es receptor de hormona tipo insulina y daf-16 es factor de transcripción FOXO.",
        },
        {
          type: 'paragraph',
          html: "El estado <span class=\"term\">dauer</span> (suspensión del desarrollo por hambre) suspende envejecimiento en juveniles ~<span class=\"num\">2</span> meses. Eso equivale a ~<span class=\"num\">300</span> años humanos relativos, pero adultos ya no entran. Un gen grande, no mil factores diminutos, puede cambiar el reloj.",
        },
        {
          type: 'key',
          html: "Un solo gen en gusanos reveló la vía <span class=\"key-term\">insulina/IGF-1</span> que regula longevidad en muchos animales.",
        },
        {
          type: 'paragraph',
          html: "Esa vía hormonal depende de la energía celular, producida por organelas que alguna vez fueron bacterias independientes.",
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
          html: "¿De dónde sale la energía que mantiene viva cada célula? Hace ~<span class=\"num\">2000 millones</span> de años, una célula ancestral tragó una bacteria que no murió: simbiosis. La bióloga <span class=\"person\">Lynn Margulis</span> defendió la endosimbiosis contra el dogma de evolución lineal. Hoy las <span class=\"term\">mitocondrias</span> (organelas que producen energía dentro de la célula) son descendientes de ese polizón.",
        },
        {
          type: 'paragraph',
          html: "Las mitocondrias convierten carbohidratos en <span class=\"term\">ATP</span> (moneda energética universal de la célula). El cuerpo genera aproximadamente su peso en ATP al día. El cerebro consume una quinta parte. La producción usa un gradiente de protones y una turbina molecular llamada ATP sintasa.",
        },
        {
          type: 'paragraph',
          html: "Perdieron la mayoría de genes al núcleo host. El minúsculo ADN mitocondrial muta y causa enfermedades. Se heredan solo de madre. Reino Unido legalizó bebés de «tres padres». Mitocondrias fusionan y dividen. Sus defectos se segregan. Por eso su desgaste impulsa envejecimiento.",
        },
        {
          type: 'key',
          html: "Las <span class=\"key-term\">mitocondrias</span> nos dan energía, pero su daño acumulado contribuye al declive.",
        },
        {
          type: 'paragraph',
          html: "Cuando la energía falla y las células dañadas no mueren, el cuerpo envejecido se vuelve frágil e inflamado.",
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
          html: "¿Por qué envejecer duele tanto en las articulaciones y en todo el cuerpo? En el coast-to-coast walk de <span class=\"num\">2013</span>, Ramakrishnan abandonó la travesía por una rodilla con menisco roto y <span class=\"term\">osteoartritis</span> (desgaste del cartílago articular). La inflamación articular es local, pero con la edad aparece un <span class=\"term\">inflammaging</span> (inflamación crónica de bajo grado en la vejez).",
        },
        {
          type: 'paragraph',
          html: "Daño al ADN puede matar la célula, repararla o mandarla a senescencia (freno anticancerígeno). Si el sistema inmune envejece, las <span class=\"term\">células senescentes</span> (células «zombie» que dejaron de dividirse pero siguen activas) se acumulan y secretan citocinas que dañan tejido. El oncólogo <span class=\"person\">Jan van Deursen</span> eliminó senescentes en ratones: +<span class=\"num\">20-30 %</span> vida, riñones y corazón mejores.",
        },
        {
          type: 'paragraph',
          html: "Las células madre regeneran tejidos pero pierden balance y número. Clones mutados dominan y pueden dar cáncer. Reprogramación Yamanaka completa puede generar teratomas. La transfusión de sangre joven a viejos en ratones inspiró terapias «vampiro» controvertidas en humanos.",
        },
        {
          type: 'key',
          html: "Eliminar <span class=\"key-term\">células senescentes</span> y restaurar células madre podría revertir fragilidad, con riesgos reales.",
        },
        {
          type: 'paragraph',
          html: "Entre esas intervenciones serias y las fantasías sin evidencia está la promesa de congelar cuerpos para renacer.",
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
          html: "¿Puede congelarse un cuerpo muerto para revivir en el futuro? Los egipcios momificaron faraones para renacer. Hoy la <span class=\"term\">criogenia</span> (congelación en nitrógeno líquido tras la muerte legal) promete resurrección. <span class=\"person\">Robert Ettinger</span> fundó el Cryonics Institute en <span class=\"num\">1976</span>. El servicio cuesta unos <span class=\"num\">28 000</span> dólares. La empresa Alcor cobra cerca de <span class=\"num\">200 000</span>.",
        },
        {
          type: 'paragraph',
          html: "No hay evidencia creíble de que funcione. Minutos u horas después de la muerte, las células colapsan bioquímicamente. La <span class=\"term\">conectómica</span> (mapa de conexiones neuronales) avanza en moscas, pero un mapa estático no captura estados dinámicos, hormonas ni cuerpo. El neurocientífico <span class=\"person\">Albert Cardona</span> (MRC) sostiene que un cerebro sin cuerpo no es la persona.",
        },
        {
          type: 'paragraph',
          html: "Entre los casos legales, una niña británica de <span class=\"num\">14</span> años con cáncer quiso criogenia. <span class=\"person\">Ted Williams</span> quería cremación pero hijos congelaron su cabeza (<span class=\"num\">2002</span>). Científicos UK pidieron restringir marketing a vulnerables. Criopreservar células y embriones sí funciona. Personas enteras, no.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">criogenia</span> promete resurrección futura sin base científica seria hoy.",
        },
        {
          type: 'paragraph',
          html: "Separar ciencia seria de profecías obliga a preguntar qué haríamos con años extra si realmente los consiguiéramos.",
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
          html: "¿Qué pasaría con pensiones y desigualdad si alargáramos la vida sin replantear la sociedad? Ramakrishnan, activo a la edad en que murieron sus abuelos, ve un mundo con ~<span class=\"num\">20 %</span> mayores de <span class=\"num\">65</span> en países ricos. Hay menos hijos por familia y sistemas de pensiones diseñados para pocos años post-<span class=\"num\">65</span>.",
        },
        {
          type: 'paragraph',
          html: "Extender vida sin <span class=\"term\">comprimir morbilidad</span> (acortar años enfermos, no solo alargar la cuenta total) empeora todo. En Inglaterra hay <span class=\"num\">10</span> años de brecha de vida, casi el doble en años sanos. En EE.UU. la brecha entre ricos y pobres llega a <span class=\"num\">15</span> años. Medicina avanzada beneficia primero a ricos y puede crear dos clases humanas.",
        },
        {
          type: 'paragraph',
          html: "Sobre la sobrepoblación, Japón vive más pero su población cae desde <span class=\"num\">2010</span>. Carreras más largas son la salida si jubilación a los <span class=\"num\">65</span> es insostenible.",
        },
        {
          type: 'paragraph',
          html: "Un obrero de sesenta y cinco años no desea otros cincuenta de faena física. En dos mil veintitrés, en Francia marcharon <span class=\"num\">1,2 millones</span> contra subir la jubilación de sesenta y dos a sesenta y cuatro años.",
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
