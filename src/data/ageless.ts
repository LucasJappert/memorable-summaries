import type { BookSummary } from '../types/book'

export const ageless: BookSummary = {
  slug: "ageless",
  meta: {
    title: "Ageless",
    subtitle: "La nueva ciencia de envejecer sin envejecer",
    author: "Andrew Steele",
    meta: [
      "📖 2021 · Bloomsbury",
      "✍️ Divulgación científica sobre biogerontología",
    ],
    titleEs: "Sin edad",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Introducción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué envejecemos si algunos animales casi no lo hacen? <span class=\"person\">Andrew Steele</span>, físico y divulgador británico, abre con las tortugas gigantes de Galápagos. Harriet vivió <span class=\"num\">175</span> años con <span class=\"term\">senescencia negligible</span> (riesgo de muerte que no sube con la edad). Los humanos, en cambio, ven duplicarse ese riesgo cada <span class=\"num\">ocho años</span>.",
        },
        {
          type: 'paragraph',
          html: "A los <span class=\"num\">80</span>, la probabilidad de morir ese año se dispara. Es unas <span class=\"num\">60 veces</span> mayor que a los 30. Definido biológicamente, envejecer es el aumento exponencial de muerte y sufrimiento. Ser viejo es el mayor factor de riesgo para cáncer, demencia y enfermedad cardiovascular. Supera al tabaco o a la obesidad. Más de <span class=\"num\">100.000</span> de las <span class=\"num\">150.000</span> muertes diarias en el planeta se atribuyen al envejecimiento. Ignoramos la causa raíz y tratamos cada enfermedad por separado.",
        },
        {
          type: 'paragraph',
          html: "La buena noticia llegó en <span class=\"num\">1935</span>, cuando el nutricionista <span class=\"person\">Clive McCay</span> demostró que ratas con dieta restringida vivían más y mejor. Hoy sabemos qué ocurre a nivel molecular y celular. Ya hay tratamientos en ensayo. En <span class=\"num\">2011</span> se eliminaron células senescentes en ratones. En <span class=\"num\">2018</span>, fármacos similares entraron en ensayos clínicos humanos.",
        },
        {
          type: 'quote',
          text: "Curar el envejecimiento no significa vivir para siempre, sino reducir el sufrimiento y hacer que el riesgo de muerte deje de depender de cuántos años llevas en el calendario.",
          attribution: "Andrew Steele",
        },
        {
          type: 'key',
          html: "El envejecimiento concentra la mayor parte de la muerte y el sufrimiento del planeta, pero la biología demuestra que es un proceso tratable.",
        },
        {
          type: 'paragraph',
          html: "Antes de hablar de curas, Steele sitúa el problema en la historia reciente de la humanidad.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "La era del envejecimiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué cambió cuando la humanidad empezó a vivir mucho más? Durante milenios la esperanza de vida rondó los <span class=\"num\">30–35 años</span> por la mortalidad infantil. Quien sobrevivía a la adolescencia podía llegar a los <span class=\"num\">50</span> o más. El país más longevo gana unos <span class=\"num\">tres meses</span> de esperanza de vida cada año desde 1840.",
        },
        {
          type: 'paragraph',
          html: "La victoria sobre infecciosas, vacunas, nutrición y el declive del tabaco duplicó la vida media en países ricos. Eso abrió paso al envejecimiento como nuevo enemigo principal. Hoy un joven de <span class=\"num\">20</span> años tiene más probabilidades de tener abuela viva que un joven del siglo XIX de tener madre viva.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"num\">1960</span> había <span class=\"num\">150 millones</span> de personas mayores de 65. En 2020 eran 700 millones.",
        },
        {
          type: 'paragraph',
          html: "El modelo educación-trabajo-jubilación quedó obsoleto. La edad de pensión de <span class=\"num\">65</span> años en el Reino Unido no cambió casi un siglo. Mientras tanto, la esperanza de vida subió <span class=\"num\">23 años</span>. Un adulto mayor de <span class=\"num\">80</span> cuesta al sistema sanitario unas cinco veces más que uno de <span class=\"num\">30</span>. Aun así, la discapacidad grave en muy ancianos ha bajado.",
        },
        {
          type: 'paragraph',
          html: "Nunca hubo fármacos aprobados específicamente contra el envejecimiento. Los reguladores solo autorizan tratamientos para enfermedades concretas. En <span class=\"num\">2018</span> la OMS añadió el código <span class=\"term\">XT9T</span> (clasificación internacional para condiciones relacionadas con la edad). Extrapolar la tendencia actual sugiere que muchos nacidos este siglo podrían llegar al siglo XXII en países ricos.",
        },
        {
          type: 'key',
          html: "La humanidad duplicó su esperanza de vida sin tratar el envejecimiento y entró en una era demográfica que redefine economía, pensiones y biografía personal.",
        },
        {
          type: 'paragraph',
          html: "Para entender por qué el envejecimiento se volvió el enemigo principal, hay que preguntarse por qué evolucionó en primer lugar.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El origen del envejecimiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué evolucionó el envejecimiento si la selección natural favorece la supervivencia? La segunda ley de la termodinámica no obliga a envejecer. Los seres vivos importan energía y se reparan. El enigma es evolutivo, no físico.",
        },
        {
          type: 'paragraph',
          html: "Las primeras teorías de «selección de grupo» fallan. La idea era que animales viejos consumen recursos de los jóvenes. Un mutante longevo siempre ganaría en esa lógica. La explicación moderna es la <span class=\"term\">mortalidad extrínseca</span> (depredadores, accidentes, enfermedades): como la mayoría muere joven, la selección apenas optimiza la edad avanzada.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Acumulación de mutaciones",
              "description": "Mutaciones tardías (como Huntington) persisten porque la selección es débil después de reproducirse.",
              "icon": "🧬"
            },
            {
              "title": "Pleiotropía antagonista",
              "description": "Genes útiles en la juventud perjudican después; la evolución acepta el trueque.",
              "icon": "⚖️"
            },
            {
              "title": "Soma desechable",
              "description": "Energía limitada: más mantenimiento o más reproducción; ratas viven meses, ballenas siglos.",
              "icon": "🔋"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La diversidad vital desafía el fatalismo. Los peces BOFFFF (hembras viejas, gordas y fértiles) reducen su riesgo de muerte con la edad. Las tortugas de Michigan no muestran aumento de mortalidad. Las hidras en laboratorio parecen inmortales. Incluso existe <span class=\"term\">senescencia negativa</span> (riesgo de muerte que baja con la edad) en algunas especies.",
        },
        {
          type: 'paragraph',
          html: "Estas excepciones importan porque comparar especies longevas revela genes y mecanismos que podríamos imitar. Las teorías evolutivas advirtieron durante décadas que el envejecimiento sería intratablemente complejo. La biología molecular demostró lo contrario.",
        },
        {
          type: 'key',
          html: "El envejecimiento evolucionó por negligencia selectiva, no por un reloj programado, y por eso es un mosaico de procesos reparables.",
        },
        {
          type: 'paragraph',
          html: "Si el envejecimiento es modificable en la naturaleza, la pregunta es cuándo la ciencia lo demostró en el laboratorio.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "El nacimiento de la biogerontología",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo nació la ciencia moderna del envejecimiento? La <span class=\"term\">biogerontología</span> (estudio biológico del envejecimiento) llegó tarde porque el tema parecía demasiado complejo y poco glamoroso. Dos líneas de evidencia lo cambiaron: hambre controlada y genética de gusanos.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Clive McCay</span> alimentó <span class=\"num\">106</span> ratas con dietas estrictas en 1934–1935. La última rata restringida murió a los <span class=\"num\">1.321</span> días. Las bien alimentadas llegaron a 927. La <span class=\"term\">restricción dietética</span> (comer menos con nutrición completa) funciona desde levaduras hasta perros. Probablemente activa rutas de mantenimiento celular vía mTOR e insulina.",
        },
        {
          type: 'paragraph',
          html: "En un compost de Bristol, la genetista <span class=\"person\">Cynthia Kenyon</span> y <span class=\"person\">Tom Johnson</span> encontraron mutantes de un nematodo llamado C. elegans. El gen daf-2 (receptor de insulina) duplicó la vida del gusano. Un solo cambio de nucleótido en age-1 la multiplicó por <span class=\"num\">10</span>. Cambiar una letra de ADN alteró todo el ritmo de envejecimiento.",
        },
        {
          type: 'paragraph',
          html: "Los mutantes longevos pierden ante gusanos normales en condiciones de competencia real. Los humanos del mundo rico viven en un entorno más parecido al laboratorio que a la selva prehistórica. La restricción dietética en macacos rhesus alarga la salud. No siempre la vida total. Eso sugiere efectos decrecientes en especies largas como la nuestra.",
        },
        {
          type: 'key',
          html: "McCay y los nematodos demostraron que el envejecimiento es un proceso genéticamente modificable, no un desgaste irreducible.",
        },
        {
          type: 'paragraph',
          html: "Una vez probada esa plasticidad, hace falta un mapa de qué falla dentro del cuerpo al envejecer.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Por qué envejecemos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué todo el cuerpo parece fallar a la vez con la edad? Steele organiza el envejecimiento en diez marcas inspiradas en los «Hallmarks of Aging» (2013) y en SENS de <span class=\"person\">Aubrey de Grey</span>. Cada marca aumenta con la edad. Empeora la salud si se acelera y mejora si se frena.",
        },
        {
          type: 'paragraph',
          html: "Steele agrupa daño al ADN, acortamiento de telómeros y problemas de proteínas. También alteraciones epigenéticas (cambios químicos que regulan genes sin mutar el ADN). El reloj epigenético del biólogo <span class=\"person\">Steve Horvath</span> predice la edad con correlación <span class=\"num\">0,96</span>. Otras marcas incluyen células senescentes, mitocondrias disfuncionales y señalización alterada.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Células senescentes",
              "description": "Células que dejan de dividirse pero secretan inflamación (SASP) que daña tejidos vecinos.",
              "icon": "🧟"
            },
            {
              "title": "Inflammaging",
              "description": "Inflamación crónica de bajo grado que aumenta con la edad y acelera enfermedades.",
              "icon": "🔥"
            },
            {
              "title": "Microbioma",
              "description": "Comunidad intestinal que envejece con nosotros; menos diversidad, más inflamación.",
              "icon": "🦠"
            },
            {
              "title": "Inmunosenescencia",
              "description": "Declive del sistema inmune: involución tímica, CMV persistente, aterosclerosis.",
              "icon": "🛡️"
            }
          ],
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~100.000",
              "label": "Daños al ADN por célula y día"
            },
            {
              "value": "~10",
              "label": "Marcas causales principales (Steele)"
            },
            {
              "value": ">90%",
              "label": "Cánceres que reactivan telomerasa"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Las marcas se entrelazan. Los telómeros cortos provocan senescencia. El SASP alimenta inflamación crónica. La diabetes acelera la glicación del colágeno. Por eso un tratamiento contra una marca puede aliviar varias enfermedades. La Parte 2 del libro explora cómo intervenir cada una.",
        },
        {
          type: 'key',
          html: "El envejecimiento no es una sola causa ni miles: es un puñado de marcas moleculares interconectadas que explican por qué todo empeora a la vez.",
        },
        {
          type: 'paragraph',
          html: "Con ese mapa en mano, Steele recorre primero la estrategia más intuitiva: sacar del cuerpo lo que se acumula con los años.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Fuera lo viejo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se puede simplemente eliminar lo que se acumula con los años? La estrategia más intuitiva apunta a las <span class=\"term\">células senescentes</span> (células «zombie» que dejan de dividirse pero inflaman tejidos). Representan apenas un pequeño porcentaje de células. Aun así dañan tejidos enteros.",
        },
        {
          type: 'paragraph',
          html: "En 2011 el <span class=\"person\">Mayo Clinic</span> activó suicidio genético en senescentes de ratones envejecidos prematuramente. En <span class=\"num\">2015</span>, el cóctel <span class=\"term\">senolítico</span> D+Q (dasatinib más quercetina) rejuveneció ratones de 24 meses. También extendió su vida.",
        },
        {
          type: 'paragraph',
          html: "En 2019 un piloto en humanos con fibrosis pulmonar idiopática mostró seguridad y mejoría modesta.",
        },
        {
          type: 'paragraph',
          html: "Contra la basura intracelular, los miméticos de restricción dietética como rapamycin y metformina activan la autofagia (reciclaje celular). Se investigan enzimas bacterianas para degradar lipofuscina en ojos y arterias. Contra amiloides (proteínas plegadas que se agregan), anticuerpos y el motivo GAIM atacan agregados de Alzheimer, Parkinson y transtiretina cardiaca.",
        },
        {
          type: 'paragraph',
          html: "Las senescentes cumplen funciones en desarrollo y cicatrización. El objetivo no es borrarlas todas sino periódicamente, como una visita al dentista. La hipótesis amiloide de Alzheimer sigue debatiéndose. Pero limpiar placas puede ser prudente incluso antes de demencia.",
        },
        {
          type: 'key',
          html: "Eliminar senescentes, basura celular y amiloides es el frente terapéutico más cercano a la clínica y prueba que atacar el envejecimiento funciona.",
        },
        {
          type: 'paragraph',
          html: "Donde la limpieza no basta, hay que reponer lo que el cuerpo ya no produce con la misma eficacia.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Dentro lo nuevo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pasa cuando eliminar no basta y hay que reponer? A veces hay que regenerar tejidos. Las <span class=\"term\">células madre</span> (células capaces de diferenciarse en tipos especializados) y los trasplantes de médula ósea ya salvan vidas. <span class=\"person\">Shinya Yamanaka</span> (<span class=\"num\">2006</span>) permitió revertir células adultas a estado pluripotente (iPSC) sin rechazo inmune si provienen del propio paciente.",
        },
        {
          type: 'paragraph',
          html: "Ensayos con células RPE derivadas de madre embrionaria mejoraron la visión en degeneración macular. Parkinson avanza con neuronas dopaminérgicas desde iPSC. La involutión del <span class=\"term\">timo</span> (glándula que madura linfocitos T) explica por qué las vacunas fallan en ancianos. Hormonas, el gen FOXN1 o un timo cultivado en laboratorio podrían rejuvenecer la inmunidad.",
        },
        {
          type: 'paragraph',
          html: "El microbioma intestinal envejece con nosotros: menos diversidad, más inflamación. Probióticos, prebióticos y trasplantes fecales (ya usados para C. difficile) podrían restaurar equilibrio. El ácido colánico de bacterias extendió la vida de gusanos un <span class=\"num\">10 %</span>.",
        },
        {
          type: 'paragraph',
          html: "Fuera de la célula, el colágeno y la elastina acumulan AGEs y pierden flexibilidad. Endurecen piel y arterias. Romper AGEs o estimular recambio (el ejercicio ayuda) podría devolver elasticidad vascular. Eso importa más que la cosmética.",
        },
        {
          type: 'key',
          html: "Regenerar tejidos, rejuvenecer la inmunidad y reequilibrar el microbioma complementan la limpieza para reponer capacidad perdida con la edad.",
        },
        {
          type: 'paragraph',
          html: "Muchos daños, sin embargo, deben repararse in situ sin reemplazar tejidos enteros.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Reparaciones en marcha",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se pueden reparar los daños sin reemplazar todo el tejido? Los telómeros (capas protectoras en los extremos de los cromosomas) se acortan en cada división. Eventualmente provocan senescencia o muerte celular.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Elizabeth Blackburn</span> y Carol Greider descubrieron la <span class=\"term\">telomerasa</span> (enzima que alarga telómeros) en 1984. Ganaron el Nobel en 2009. El cáncer explota esa enzima en el 90 % de tumores.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">María Blasco</span> mostró que telomerasa más genes protectores extendió la vida de ratones un <span class=\"num\">40 %</span> sin más cáncer. La <span class=\"term\">parabiosis heterocrónica</span> (suturar ratones jóvenes y viejos) rejuveneció músculo, hígado y cerebro. Lo logró al cambiar señales sanguíneas, no al trasplantar células jóvenes. El plasma joven solo no basta: la sangre vieja también envenena.",
        },
        {
          type: 'paragraph',
          html: "Fármacos como inhibidores de TGF-beta más oxitocina imitaron beneficios de parabiosis en una semana. Los exosomas de células madre hipotalámicas alargaron la vida de ratones un <span class=\"num\">10 %</span>. En mitocondrias, antioxidantes dirigidos (MitoQ) y urolithin A mejoran la función. La expresión alotópica movería genes mitocondriales al núcleo.",
        },
        {
          type: 'paragraph',
          html: "El secuenciado masivo reveló expansiones clonales de mutaciones conductoras en piel y esófago ancianos. Es una vía evolutiva celular similar al cáncer. Aprender de elefantes (múltiples copias de p53) y ballenas (reparación de ADN) sugiere reforzar defensas genómicas.",
        },
        {
          type: 'key',
          html: "Reparar telómeros, señales, mitocondrias y ADN muestra que células viejas conservan capacidad latente si se corrige su entorno.",
        },
        {
          type: 'paragraph',
          html: "La reparación pieza a pieza abre paso a una visión más ambiciosa: resetear el reloj biológico entero.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Reprogramar el envejecimiento",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se puede reprogramar el reloj biológico entero? La reprogramación con <span class=\"term\">factores Yamanaka</span> (cuatro genes, OKSM) resetea la identidad celular. Usada de forma cíclica, extendió la vida un <span class=\"num\">30 %</span> en ratones envejecidos prematuramente. Lo hizo sin tumores teratoma.",
        },
        {
          type: 'paragraph',
          html: "La clonación y la medusa Turritopsis demuestran que el reloj biológico puede retroceder. En humanos, activar OKSM de forma continua sería letal. La clave es revertir marcas epigenéticas sin borrar la función del tejido. Células humanas en cultivo rejuvenecieron según relojes epigenéticos y mitocondrias. No se convirtieron en iPSC.",
        },
        {
          type: 'paragraph',
          html: "La cura definitiva exigirá biología de sistemas con modelos computacionales. Deben predecir cómo una intervención afecta redes enteras. La secuenciación cuesta ya menos de <span class=\"num\">1.000 dólares</span> por genoma. La potencia de cálculo crece exponencialmente. El fin último es restaurar la <span class=\"term\">homeostasis</span> (equilibrio interno) de un adulto joven. Entonces el cuerpo se autorregula.",
        },
        {
          type: 'paragraph',
          html: "La reprogramación completa puede tardar décadas. Los hallazgos de Yamanaka demuestran que la naturaleza ya nos dio palancas amplias. Tratar el envejecimiento será, en el fondo, reprogramar la biología humana con datos, genes y fármacos en combinación inteligente.",
        },
        {
          type: 'key',
          html: "La reprogramación epigenética transitoria apunta a revertir el envejecimiento de forma holística, no solo a parchar síntomas aislados.",
        },
        {
          type: 'paragraph',
          html: "Con tantas vías prometedoras, la pregunta práctica es si alguna «cura» llegará a tiempo para nosotros.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La búsqueda de la cura",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Llegará alguna vez una «cura» del envejecimiento a tiempo para nosotros? Steele es cauteloso con fechas, pero optimista con mecanismos. Hay demasiadas vías distintas que alargan vida en ratones para que todas fallen en humanos.",
        },
        {
          type: 'paragraph',
          html: "Curar una enfermedad aislada aporta poco. Eliminar el cáncer sumaría menos de <span class=\"num\">tres años</span> de esperanza de vida. Otra patología ocupará su lugar. Tratar el envejecimiento ataca muchas causas a la vez. Efectos sinérgicos (dos mutaciones en gusanos que quintuplican la vida) y círculos virtuosos refuerzan la estrategia.",
        },
        {
          type: 'paragraph',
          html: "La meta práctica es la <span class=\"term\">velocidad de escape de longevidad</span> (ganar al menos un año de esperanza de vida por cada año vivido). No hace falta una cura instantánea. Basta mantenerse un paso adelante del deterioro con un rompecabezas de tratamientos que mejora con cada década.",
        },
        {
          type: 'paragraph',
          html: "La primera generación «sin edad» quizá no lo note en el día a día. Verá cómo cada avance médico empuja su funeral más lejos. Eventualmente el riesgo de muerte dejará de crecer con la edad. Eso será obvio en retrospecto en las estadísticas vitales.",
        },
        {
          type: 'key',
          html: "La cura del envejecimiento será un rompecabezas evolutivo de terapias, no una píldora única, y la velocidad de escape es la meta alcanzable.",
        },
        {
          type: 'paragraph',
          html: "Mientras esas terapias maduran, cada persona puede ganar años con decisiones cotidianas.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Vivir lo suficiente para vivir más",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué puede hacer cada persona mientras espera esas terapias? Solo una fracción pequeña de la longevidad es genética. El estilo de vida con la suerte mandan. Cinco hábitos sanos pueden añadir unos <span class=\"num\">10 años</span> de vida y salud a los <span class=\"num\">50</span>.",
        },
        {
          type: 'list',
          items: [
            "**No fumar** — Resta ~10 años; acelera casi todas las marcas (ADN, telómeros, senescencia, AGEs). Dejarlo recupera riesgo en años.",
            "**Peso saludable** — La grasa visceral secreta inflamación; el IMC alto resta años y empeora diabetes.",
            "**Ejercicio** — Incluso 30 minutos diarios reducen mortalidad; fortalece músculo, mitocondrias, telómeros y recambia colágeno.",
            "**Sueño (7–8 h)** — El cerebro elimina amiloide al dormir; cataratas alteran ritmos circadianos.",
            "**Vacunas e higiene** — Menos infecciones significa menos inflamación crónica de por vida."
          ],
        },
        {
          type: 'paragraph',
          html: "La restricción calórica extrema en humanos sigue sin prueba de longevidad. Los macacos NIA frente a Wisconsin muestran que una dieta ya sana limita ganancias extra. El ayuno intermitente puede ayudar a algunos, con riesgos inmunes y óseos. Los suplementos antioxidantes generales no funcionan e incluso dañan (vitamina E, beta-caroteno).",
        },
        {
          type: 'paragraph',
          html: "No hay píldora anti-edad probada para sanos todavía. Espere ensayos de metformina (TAME) y senolíticos. Mientras tanto, hábitos básicos son la mejor apuesta para llegar vivo a la medicina del futuro.",
        },
        {
          type: 'key',
          html: "Optimizar estilo de vida compra décadas de salud para beneficiarse de terapias anti-edad aún en desarrollo.",
        },
        {
          type: 'paragraph',
          html: "Los hábitos individuales no bastan sin convertir la ciencia en medicina regulada y financiada.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "De la ciencia a la medicina",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué falta para que la biogerontología llegue a la clínica? La disciplina necesita visibilidad y dinero. El <span class=\"term\">NIA</span> (Instituto Nacional sobre el Envejecimiento de EE. UU.) recibe unos <span class=\"num\">6 %</span> del presupuesto del NIH. El envejecimiento causa unos <span class=\"num\">85 %</span> de muertes.",
        },
        {
          type: 'paragraph',
          html: "Los reguladores no aprueban fármacos «contra el envejecimiento». El ensayo <span class=\"term\">TAME</span> (Targeting Aging with Metformin) testará metformina en 3.000 adultos de 65–80 años. Lo lidera el geriatra <span class=\"person\">Nir Barzilai</span>. Medirá aparición tardía de cáncer, cardiovascular y demencia. Busca establecer precedente con la FDA aunque el efecto sea modesto.",
        },
        {
          type: 'paragraph',
          html: "Los ensayos largos en sanos son caros. Los <span class=\"term\">biomarcadores</span> (relojes epigenéticos, fuerza de agarre, apariencia facial con IA) permitirían ensayos más cortos y baratos. Deben responder a intervenciones como restricción dietética o senolíticos. Hay que incluir ancianos reales y ratones viejos, no solo modelos juveniles de enfermedad.",
        },
        {
          type: 'paragraph',
          html: "Cuando lleguen terapias, cada persona deberá sopesar riesgos de tratamientos preventivos. Mientras tanto, combatir charlatanes y canalizar autoexperimentadores con protocolos mínimos evitará desperdiciar datos. Cada día que adelantamos la cura salva unas <span class=\"num\">100.000</span> vidas.",
        },
        {
          type: 'key',
          html: "Convertir la biogerontología en medicina exige financiación, regulación y biomarcadores, no solo descubrimientos de laboratorio.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Senescencia negligible",
    "description": "Riesgo de muerte que no aumenta con la edad cronológica; modelo de «inmortalidad biológica»."
  },
  {
    "title": "Marcas del envejecimiento",
    "description": "Cambios moleculares causales (ADN, telómeros, senescencia, etc.) que explican el deterioro sincronizado."
  },
  {
    "title": "Células senescentes",
    "description": "Células que dejan de dividirse pero secretan SASP inflamatorio; blanco de senolíticos."
  },
  {
    "title": "Restricción dietética",
    "description": "Reducir calorías con nutrición completa; activa mTOR/autofagia y ralentiza envejecimiento en muchas especies."
  },
  {
    "title": "Pleiotropía antagonista",
    "description": "Genes beneficiosos en la reproducción temprana que dañan después; motor evolutivo del envejecimiento."
  },
  {
    "title": "Soma desechable",
    "description": "Teoría de que el cuerpo es prescindible frente a la reproducción bajo mortalidad extrínseca alta."
  },
  {
    "title": "Reloj epigenético",
    "description": "Patrones de metilación del ADN que predicen edad biológica y riesgo de muerte con alta precisión."
  },
  {
    "title": "Senolíticos",
    "description": "Fármacos que eliminan células senescentes (p. ej. dasatinib + quercetina)."
  },
  {
    "title": "Miméticos de DR",
    "description": "Compuestos (rapamycin, metformina, spermidina) que imitan señales de escasez sin ayunar."
  },
  {
    "title": "Velocidad de escape de longevidad",
    "description": "Ganar ≥1 año de esperanza de vida por cada año vivido mediante terapias sucesivas."
  }
],
  chronology: [
  {
    "year": "1840+",
    "text": "País líder gana ~3 meses de esperanza de vida por año, tendencia sostenida."
  },
  {
    "year": "1934–1935",
    "text": "McCay demuestra restricción dietética en ratas."
  },
  {
    "year": "1961",
    "text": "Hayflick describe senescencia replicativa en cultivo."
  },
  {
    "year": "1984",
    "text": "Blackburn y Greider descubren telomerasa."
  },
  {
    "year": "1988–1993",
    "text": "Genes age-1 y daf-2 extienden vida en C. elegans."
  },
  {
    "year": "2006",
    "text": "Yamanaka genera células iPSC."
  },
  {
    "year": "2011",
    "text": "Eliminación de senescentes retrasa enfermedades en ratones (Mayo Clinic)."
  },
  {
    "year": "2013",
    "text": "Publicación de «Hallmarks of Aging»; reloj epigenético de Horvath."
  },
  {
    "year": "2018",
    "text": "Primer ensayo senolítico en humanos (IPF); código OMS XT9T."
  },
  {
    "year": "2019+",
    "text": "Ensayos TAME, Unity Biotechnology, biomarcadores en auge."
  }
],
  figures: [
  {
    "name": "Andrew Steele",
    "role": "Autor; físico y divulgador que argumenta por tratar el envejecimiento como medicina"
  },
  {
    "name": "Clive McCay",
    "role": "Pionero de la restricción calórica (1930s)"
  },
  {
    "name": "Cynthia Kenyon",
    "role": "Descubrió daf-2 y popularizó la genética de la longevidad en gusanos"
  },
  {
    "name": "Shinya Yamanaka",
    "role": "Factores de reprogramación e iPSC (Nobel 2012)"
  },
  {
    "name": "Elizabeth Blackburn / Carol Greider",
    "role": "Telomerasa (Nobel 2009)"
  },
  {
    "name": "Darren Baker",
    "role": "Senolíticos en ratones, Mayo Clinic 2011"
  },
  {
    "name": "Irina y Michael Conboy",
    "role": "Rejuvenecieron tejidos vía parabiosis y señales sanguíneas"
  },
  {
    "name": "Steve Horvath",
    "role": "Reloj epigenético de edad biológica"
  },
  {
    "name": "Nir Barzilai",
    "role": "Lidera ensayo TAME con metformina"
  },
  {
    "name": "Aubrey de Grey",
    "role": "SENS: estrategias de daño acumulado y senescencia negligible"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El envejecimiento no es un reloj misterioso ni un castigo inevitable.",
  "Es un conjunto de procesos biológicos que la ciencia ya puede ralentizar en el laboratorio.",
  "La cura no llegará en una píldora milagrosa, sino como un rompecabezas de terapias que se renuevan con cada generación.",
  "Mientras tanto, estilo de vida y política pública pueden comprarnos años para llegar a esas medicinas.",
  "El objetivo final es la senescencia negligible: envejecer sin perder salud solo por haber cumplido años."
],
    highlight: "curar el envejecimiento sería la mayor revolución médica desde los antibióticos",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Andrew Steele",
    line2: "\"Ageless: The New Science of Getting Older Without Getting Old\" · Bloomsbury · 2021",
  },
}
