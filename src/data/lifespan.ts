import type { BookSummary } from '../types/book'

export const lifespan: BookSummary = {
  slug: "lifespan",
  meta: {
    title: "Lifespan: Why We Age—and Why We Don't Have To",
    subtitle: "Por qué envejecemos y por qué no tenemos que hacerlo",
    author: "David A. Sinclair",
    meta: [
      "📖 2019 · Atria Books / Simon & Schuster",
      "✍️ Genetista · Harvard Medical School · coautor Matthew D. LaPlante",
    ],
    titleEs: "La vida longeva",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "La oración de una abuela",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué aceptamos el declive como destino? El genetista <span class=\"person\">David Sinclair</span> lo aprendió de niño en los suburbios del norte de Sídney. Exploraba el monte como quien aún no ha aprendido que «el reloj corre».",
        },
        {
          type: 'paragraph',
          html: "Su abuela <span class=\"person\">Vera</span> huyó de Hungría tras la revolución de <span class=\"num\">1956</span>. Vivió con espíritu bohemio hasta bien entrados los <span class=\"num\">70</span> años. Les leía el poema «Now We Are Six» de Milne. Les decía que seis era la mejor edad y que nunca dejaran de ser jóvenes.",
        },
        {
          type: 'paragraph',
          html: "Pero el reloj sí corría. A mediados de los <span class=\"num\">80</span>, Vera era una sombra: sin música, sin silla vacía, sin la mujer que había sido. Murió a los <span class=\"num\">92</span> con la frase resignada «así es como va». Sinclair cree que la persona que fue había muerto años antes.",
        },
        {
          type: 'paragraph',
          html: "La muerte de su madre <span class=\"person\">Diana</span> le mostró lo que nadie cuenta. Asfixia por líquido en el pulmón. Neuronas borrando recuerdos en minutos. Morir no es dormir tranquilo. El documentalista <span class=\"person\">Claude Lanzmann</span> advirtió que toda muerte es violenta.",
        },
        {
          type: 'paragraph',
          html: "Los niños entienden la irreversibilidad entre los <span class=\"num\">5</span> y <span class=\"num\">7</span> años. Luego entierran el pensamiento. Hemos ganado años en el siglo pasado, pero no vida valiosa: ventiladores, quimio, facturas hospitalarias. El cirujano <span class=\"person\">Atul Gawande</span> señaló que convertimos la mortalidad en experiencia médica.",
        },
        {
          type: 'paragraph',
          html: "Sinclair se pregunta si pudiéramos ser jóvenes más tiempo. No solo años, sino décadas, sin que el final se parezca al declive que ya conocemos.",
        },
        {
          type: 'quote',
          text: "«Nadie te cuenta cómo es morir. ¿Por qué nadie lo dice?»",
          attribution: "David Sinclair",
        },
        {
          type: 'key',
          html: "El envejecimiento tal como lo vivimos roba décadas de vitalidad y no debe aceptarse como <span class=\"key-term\">destino natural</span>.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Viva primordium",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué envejecemos si la evolución solo «quiere» reproducirse? Sinclair imagina la Tierra hace <span class=\"num\">4000 millones</span> de años. Océanos tóxicos, sin oxígeno, hasta que ARN y membranas forman las primeras células en charcos junto a respiraderos termales.",
        },
        {
          type: 'paragraph',
          html: "Una especie ficticia, <span class=\"term\">Magna superstes</span> (un «gran superviviente» imaginado), evoluciona un circuito genético. El gen A frena la reproducción en tiempos duros. El gen B lo silencia cuando conviene dividirse. Cuando el ADN se rompe, la proteína de B sale a repararlo y A vuelve a activarse.",
        },
        {
          type: 'paragraph',
          html: "Cuando rayos cósmicos destrozan el ADN de casi todo el lago, solo M. superstes pausa todo para reparar antes de reproducirse. Ese circuito, conservado en plantas, hongos y animales, explica por qué sobrevivimos décadas más allá de la reproducción. Pero también tiene un costo. Es la razón por la que <span class=\"term\">envejecemos</span> (perdemos función con el tiempo).",
        },
        {
          type: 'paragraph',
          html: "Muchos biólogos nunca preguntaron por qué envejecemos. Los gerontólogos trataban síntomas. El cáncer cambió de paradigma en los <span class=\"num\">70</span>. El virólogo <span class=\"person\">Peter Vogt</span> y Peter Duesberg hallaron <span class=\"term\">oncogenes</span> (genes que, mutados, empujan a la célula a dividirse sin freno). Dejó de ser «así es la vida» y pasó a ser un blanco molecular.",
        },
        {
          type: 'paragraph',
          html: "Sinclair propone el mismo giro para el envejecimiento: una causa unificada, no miles de enfermedades sueltas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Circuito A/B",
              "description": "Pausa reproducción mientras repara ADN; ancestro de las sirtuinas.",
              "icon": "🧬"
            },
            {
              "title": "Rayos cósmicos",
              "description": "Seleccionan células que reparan antes de dividirse.",
              "icon": "☢️"
            },
            {
              "title": "Una causa",
              "description": "Como oncogenes para cáncer: un mecanismo unificador del declive.",
              "icon": "🎯"
            }
          ],
        },
        {
          type: 'key',
          html: "Heredamos un <span class=\"key-term\">circuito de supervivencia</span> primordial que nos mantiene vivos y, a la vez, nos hace envejecer.",
        },
        {
          type: 'paragraph',
          html: "Si el envejecimiento tiene un circuito universal, falta explicar qué información perdemos con el tiempo.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El pianista demente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Dónde está el «gen del envejecimiento» si el genoma ya está «completo»? En <span class=\"num\">2003</span> anunciaron el genoma humano terminado, pero faltaban huecos enormes. Ignoraron hasta el <span class=\"num\">69 %</span> del «ADN basura» y genes menores de <span class=\"num\">300</span> pares de bases.",
        },
        {
          type: 'paragraph',
          html: "No encontrarás un gen del envejecimiento porque los genes no evolucionaron para envejecernos. La clave está en la <span class=\"term\">información epigenética</span> (las marcas químicas que dicen a las células qué ser), como la partitura de un pianista.",
        },
        {
          type: 'paragraph',
          html: "El camino empezó con el genetista <span class=\"person\">Robert Mortimer</span> en Berkeley. Convirtió la levadura de panadería en modelo accesible. Comparte <span class=\"num\">70 %</span> de nuestros genes y envejece en una semana. El biólogo <span class=\"person\">Leonard Guarente</span> en MIT buscaba genes de longevidad. Sinclair llegó en <span class=\"num\">1995</span> con una beca Whitney tras convencer al embriólogo <span class=\"person\">Douglas Melton</span>.",
        },
        {
          type: 'paragraph',
          html: "El gen WRN del síndrome de Werner provoca envejecimiento prematuro a los <span class=\"num\">30-40</span> años. En levadura existe un homólogo llamado <span class=\"term\">Sir2</span> (la primera sirtuina descubierta). Sir2 silencia genes y repara ADN. En levadura vieja, círculos de ADN ribosomal secuestran Sir2. La célula madre envejece y la hija nace vieja.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría de la información del envejecimiento</span> (el declive como pérdida de lectura epigenética, no de secuencia) sostiene que perdemos la partitura correcta. Los ratones ICE, con roturas de ADN inducidas sin mutar secuencia, envejecen antes: el reloj epigenético acelera.",
        },
        {
          type: 'key',
          html: "Envejecemos por <span class=\"key-term\">pérdida de información epigenética</span>, como un pianista que olvida la partitura mientras el piano sigue intacto.",
        },
        {
          type: 'paragraph',
          html: "Entender la partitura epigenética cambia cómo vemos las enfermedades del declive.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "La epidemia ciega",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la medicina trata el cáncer y no el reloj que lo precede? En mayo de <span class=\"num\">2010</span>, mientras Londres celebraba fútbol y política, la <span class=\"person\">Royal Society</span> reunió a luminarias del envejecimiento. Convergieron en una tesis subversiva.",
        },
        {
          type: 'paragraph',
          html: "La genetista <span class=\"person\">Cynthia Kenyon</span> sostuvo que el envejecimiento no es inevitable. Colegas como <span class=\"person\">Brian Kennedy</span> y <span class=\"person\">Nir Barzilai</span> coincidieron. Es un <span class=\"term\">proceso patológico</span> (un proceso de enfermedad) del que cáncer, Alzheimer y diabetes son síntomas. El biólogo <span class=\"person\">David Gems</span> resumió que envejecer es una enfermedad con espectro amplio de consecuencias.",
        },
        {
          type: 'paragraph',
          html: "Históricamente, «decrepitud» figuraba en certificados de defunción junto a «susto» o «vómito». Hoy la OMS tiene <span class=\"num\">14 000</span> códigos y los médicos evitan citar la edad como causa inmediata. Aun así, envejecer sigue empujándonos al precipicio.",
        },
        {
          type: 'paragraph',
          html: "El actuario <span class=\"person\">Benjamin Gompertz</span> formuló en <span class=\"num\">1825</span> una ley de mortalidad. Describe un reloj interno más probabilidad de muerte que se duplica cada <span class=\"num\">8</span> años. Solo el <span class=\"num\">3 %</span> llegan al siglo.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"num\">115</span> años son una apuesta de <span class=\"num\">1 en 100 millones</span>.",
        },
        {
          type: 'paragraph',
          html: "La madre de Sinclair, fumadora, fue diagnosticada de cáncer de pulmón a los <span class=\"num\">50</span> años. Eso fue <span class=\"num\">21</span> años antes que el promedio. Tabaco, genética y tiempo matan juntos. Tratar cada enfermedad por separado sin atacar el envejecimiento subyacente es un error. Es como estudiar por qué alguien cayó del acantilado sin preguntar qué lo llevó hasta el borde.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "3 %",
              "label": "Probabilidad de llegar a 100 años (países desarrollados)"
            },
            {
              "value": "×2 cada 8 años",
              "label": "Probabilidad de muerte por envejecimiento (Gompertz)"
            },
            {
              "value": "69 %",
              "label": "Genoma humano inicialmente «no codificante»"
            }
          ],
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">envejecimiento</span> debe tratarse como enfermedad unificadora, no como destino natural fuera de la medicina.",
        },
        {
          type: 'paragraph',
          html: "Si el envejecimiento es enfermedad, ¿qué puede hacer alguien hoy sin esperar fármacos?",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Longevidad ahora",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hay algo que hacer ya, sin píldoras ni ensayos clínicos? Cada día Sinclair recibe correos pidiendo plaza en estudios. Mientras tanto, cualquiera puede activar sus <span class=\"term\">genes de longevidad</span> (circuitos ancestrales de supervivencia) con hábitos concretos.",
        },
        {
          type: 'paragraph',
          html: "Las zonas azules de Okinawa, Nicoya y Cerdeña muestran el patrón. Más verduras, legumbres y menos carne y azúcar ayudan. En <span class=\"num\">1900</span> neumonía, tuberculosis y gripe mataban a la mitad. Hoy esas causas son raras y el declive llega décadas después, debilitado por el envejecimiento.",
        },
        {
          type: 'paragraph',
          html: "El consejo más sólido tras <span class=\"num\">25</span> años de investigación es comer menos a menudo. No malnutrición, que acorta la vida, sino ayuno o restricción que activa el circuito de supervivencia. Hipócrates y el veneciano <span class=\"person\">Luigi Cornaro</span> (siglo <span class=\"num\">XV</span>) vivieron casi un siglo comiendo poco. La ciencia moderna lo confirma en levadura, moscas y ratones.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">restricción calórica</span> (comer menos sin privarse de nutrientes) compacta el ADN y retrasa el envejecimiento en levadura. En Okinawa los adultos comían <span class=\"num\">20 %</span> menos calorías. En Biosfera 2 (<span class=\"num\">1991-1993</span>) la escasez de cultivo imitó ese patrón. Los biomarcadores del gerontólogo <span class=\"person\">Roy Walford</span> parecieron los de ratones longevos.",
        },
        {
          type: 'paragraph',
          html: "Ejercicio vigoroso, exposición al frío y calor y dieta basada en plantas también activan AMPK y sirtuinas. Ese estrés leve se llama <span class=\"term\">hormesis</span> (beneficio de un desafío pequeño).",
        },
        {
          type: 'list',
          items: [
            "**Ayuno intermitente** — activa defensas celulares sin privación extrema.",
            "**Hormesis** — estrés leve (frío, calor, ejercicio) fortalece el organismo.",
            "**Dieta vegetal** — reduce aminoácidos que aceleran vías de crecimiento."
          ],
        },
        {
          type: 'key',
          html: "Sin esperar fármacos, podemos <span class=\"key-term\">activar genes de longevidad</span> con comer menos, moverse más y estrés controlado.",
        },
        {
          type: 'paragraph',
          html: "El estilo de vida activa circuitos; la química ya ofrece moléculas que los empujan más lejos.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Una mejor píldora",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede la química ralentizar el reloj biológico? El físico <span class=\"person\">Richard Feynman</span> dijo que nada en biología indica la inevitabilidad de la muerte. A escala nanométrica, la vida es química ordenada. Cuando el caos enzimático se detiene, morimos en segundos.",
        },
        {
          type: 'paragraph',
          html: "Las herramientas genéticas y epigenéticas ya permiten modular ese orden con fármacos existentes. La <span class=\"term\">rapamicina</span> (descubierta en bacterias bajo un moái de la Isla de Pascua en <span class=\"num\">1964</span>) suprime el sistema inmune y salva trasplantes. También alarga la vida en levadura, moscas y ratones entre un <span class=\"num\">9</span> y un <span class=\"num\">14 %</span>, equivalente a una década humana.",
        },
        {
          type: 'paragraph',
          html: "La rapamicina inhibe <span class=\"term\">mTOR</span> (la vía que dice a la célula «hay comida, crece»). La <span class=\"term\">metformina</span> (usada en diabetes) activa AMPK y muestra señales de protección en humanos. Los activadores de sirtuinas como resveratrol estimulan SIRT1.",
        },
        {
          type: 'paragraph',
          html: "Precursores como el NMN restauran NAD+, cofactor que cae con la edad y sin el cual las sirtuinas no reparan el epigenoma. En humanos hay ensayos en curso. En animales, el NMN mejora vasos, energía y fertilidad en ratones viejos. No es inmortalidad mañana, pero son los primeros pasos que Feynman anticipó.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Rapamicina",
              "description": "Inhibe mTOR; extiende vida en múltiples especies.",
              "icon": "💊"
            },
            {
              "title": "NAD+ / NMN",
              "description": "Restaura cofactor de sirtuinas; cae con la edad.",
              "icon": "🔋"
            },
            {
              "title": "STACs",
              "description": "Activadores de SIRT1; resveratrol y análogos sintéticos.",
              "icon": "🍇"
            }
          ],
        },
        {
          type: 'key',
          html: "Moléculas que modulan <span class=\"key-term\">sirtuinas, AMPK y mTOR</span> ya pueden ralentizar el envejecimiento en laboratorio y ensayos humanos tempranos.",
        },
        {
          type: 'paragraph',
          html: "Las píldoras modulan vías; el siguiente paso es eliminar células dañadas y reprogramar tejidos.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Grandes pasos adelante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pasa si el envejecimiento no es mil problemas distintos? Pensábamos que sería intratablemente complejo. Pero si hay reguladores universales en levadura, gusanos, ratones y humanos, el panorama se simplifica. Sería más fácil que curar todos los cánceres uno a uno.",
        },
        {
          type: 'paragraph',
          html: "Entender el problema lo vuelve soluble, como Lavoisier con el lavado de manos o Jenner con la vacuna. Las <span class=\"term\">células senescentes</span> (células «zombie» que dejan de dividirse pero no mueren) secretan citocinas e inflaman tejidos. Eso se llama inflammaging.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Darren Baker</span> y <span class=\"person\">Jan van Deursen</span> en la Mayo Clinic eliminaron senescentes en ratones. Ganaron entre un <span class=\"num\">20</span> y un <span class=\"num\">30 %</span> de vida con riñones y corazones más sanos. Los <span class=\"term\">senolíticos</span> (fármacos que destruyen esas células) buscan replicar ese efecto.",
        },
        {
          type: 'paragraph',
          html: "La senescencia evolucionó por <span class=\"term\">pleiotropía antagonista</span> (un rasgo útil en la juventud que daña en la vejez). Frena cáncer en la treintena, pero perjudica en la setentena cuando pocos morían de viejo en la evolución. Telómeros cortos activan el circuito de supervivencia permanentemente. La reprogramación epigenética con factores Yamanaka, en dosis controladas, rejuvenece ratones ICE sin borrar identidad celular.",
        },
        {
          type: 'key',
          html: "Eliminar <span class=\"key-term\">células senescentes</span> y revertir el epigenoma podrían rejuvenecer tejidos enteros en las próximas décadas.",
        },
        {
          type: 'paragraph',
          html: "Los tratamientos futuros necesitarán diagnosticar a cada persona, no solo a la «edad del carnet».",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "La era de la innovación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué tratar un tumor por su ubicación si el ADN del cáncer ya puede leerse? La anciana tailandesa <span class=\"person\">Kuhn Lawan</span> recibía quimio correcta para el tumor equivocado. En realidad tenía leucemia sólida en el pulmón.",
        },
        {
          type: 'paragraph',
          html: "El pionero <span class=\"person\">Mark Boguski</span> acuñó la <span class=\"term\">medicina de precisión</span> (tratamiento según el genoma y los datos de cada persona). Diagnosticar por ubicación anatómica sin secuenciar es como clasificar ballenas como peces porque nadan. Con ADN del tumor, Lawan cambió de tratamiento y mejoró.",
        },
        {
          type: 'paragraph',
          html: "La secuenciación cayó de miles de millones de dólares a menos de <span class=\"num\">100</span> dólares en un dispositivo del tamaño de una barra de chocolate. Pronto dirá qué comer, qué microbioma cultivar y qué fármaco evitar. Por ejemplo, la deficiencia de G6PD en <span class=\"num\">300 millones</span> de personas, donde antipalúdicos comunes provocan hemólisis.",
        },
        {
          type: 'paragraph',
          html: "Terapias como CAR-T e inhibidores de puntos de control inmunitario muestran remisiones superiores al <span class=\"num\">80 %</span> en algunos cánceres. Uno de esos casos fue el melanoma cerebral de <span class=\"person\">Jimmy Carter</span>. Además, los dispositivos portátiles detectarán arritmias y los analizadores de aliento, infecciones. El <span class=\"term\">reloj epigenético</span> (medida de edad biológica por metilación del ADN) anticipará el declive antes de que sea irreversible.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">medicina de precisión</span> permitirá diagnosticar y tratar antes de que el declive sea irreversible.",
        },
        {
          type: 'paragraph',
          html: "Con medicina personalizada y relojes biológicos, la pregunta pasa a cuántos años saludables suma cada avance.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "La forma de las cosas por venir",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuántos años saludables podrían sumar estas tecnologías juntas? Sinclair hace aritmética conservadora. Monitoreo temprano suma <span class=\"num\">10</span> años saludables. Estilo de vida, <span class=\"num\">5</span>. Moléculas longevas, <span class=\"num\">8</span>. Reprogramación y senolíticos, <span class=\"num\">10</span> más.",
        },
        {
          type: 'paragraph',
          html: "El total llega a una expectativa de <span class=\"num\">113</span> años en países desarrollados, con más de la mitad superando esa cifra. <span class=\"person\">Jeanne Calment</span> saldrá del top 100 de longevos en décadas. La mitad de los niños japoneses nacidos hoy podrían pasar los <span class=\"num\">107</span> años. En EE.UU. la proyección ronda los <span class=\"num\">104</span>.",
        },
        {
          type: 'paragraph',
          html: "La reprogramación celular podría hacer alcanzables los <span class=\"num\">150</span> años antes de fin de siglo. Si la teoría de la información es correcta, el epigenoma podría resetearse repetidamente sin límite superior conocido.",
        },
        {
          type: 'paragraph',
          html: "Su hijo <span class=\"person\">Alex</span>, de <span class=\"num\">16</span> años, ve calentamiento global, guerras y terrorismo y duda del optimismo. Los críticos no son trolls, sino colegas y familia. Aun así, un tercio de los científicos del campo ya toman metformina o NAD+. Las conferencias serias debaten cuántas décadas extra llegarán, no si llegarán.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~113 años",
              "label": "Estimación conservadora de expectativa futura"
            },
            {
              "value": "107 años",
              "label": "Mitad de niños japoneses actuales (proyección)"
            },
            {
              "value": "+1 semana/mes",
              "label": "Ganancia de vida al ritmo actual de avances"
            }
          ],
        },
        {
          type: 'key',
          html: "Combinando tecnologías emergentes, la <span class=\"key-term\">vida saludable</span> podría superar ampliamente el siglo en personas nacidas hoy.",
        },
        {
          type: 'paragraph',
          html: "Proyectar décadas extra obliga a preguntar quién pagará ese futuro y quién quedará afuera.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Un camino adelante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Quién pagará el futuro de la longevidad? El escritor <span class=\"person\">H.G. Wells</span> predijo guerra aérea en <span class=\"num\">1908</span>, cinco años después del primer vuelo. El futurista <span class=\"person\">Arthur C. Clarke</span> advirtió que científicos mayores de <span class=\"num\">50</span> solo sirven para reuniones.",
        },
        {
          type: 'paragraph',
          html: "Clarke también dijo que cuando un distinguido anciano afirma que algo es imposible, probablemente se equivoca. Sinclair, a los <span class=\"num\">50</span>, predice el primer supercentenario joven del siglo <span class=\"num\">XXII</span>. El futuro puede ser desigualdad extrema y escasez, o prosperidad con ancianos reverenciados por sabiduría.",
        },
        {
          type: 'paragraph',
          html: "Para el segundo escenario hace falta trabajo. El NIH de EE.UU. gasta menos del <span class=\"num\">1 %</span> en biología del envejecimiento. En <span class=\"num\">2018</span> etiquetaron <span class=\"num\">3.5</span> mil millones como «aging». Menos del <span class=\"num\">3 %</span> iba a entender por qué envejecemos.",
        },
        {
          type: 'paragraph',
          html: "El biólogo <span class=\"person\">Leonard Hayflick</span> calculó que curar Alzheimer añade <span class=\"num\">19</span> días a la expectativa.",
        },
        {
          type: 'paragraph',
          html: "El café cuesta <span class=\"num\">300</span> mil millones al año en EE.UU. Un caza F-22 cuesta <span class=\"num\">335</span> millones la unidad. Invertir en envejecimiento no es lujo: el <span class=\"num\">93 %</span> de mayores de <span class=\"num\">50</span> está discapacitado por él. Hace falta equilibrio público-privado, redefinir envejecimiento como enfermedad en agencias de financiación y evitar que solo los ricos compren décadas extra.",
        },
        {
          type: 'key',
          html: "Prolongar la salud exige <span class=\"key-term\">inversión pública</span> en biología del envejecimiento y políticas que eviten desigualdad y colapso ambiental.",
        },
        {
          type: 'paragraph',
          html: "La inversión y la equidad dependen de laboratorios que ya convierten la promesa en datos.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Conclusión",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué laboratorios ya mueven la promesa de la longevidad? El de Sinclair en Harvard, en el noveno piso del New Research Building, reúne a entre <span class=\"num\">30</span> y <span class=\"num\">40</span> científicos de todo el mundo.",
        },
        {
          type: 'paragraph',
          html: "Entre ellos, <span class=\"person\">Jae-Hyun Yang</span> aceleró el reloj epigenético en ratones ICE y <span class=\"person\">Yuancheng Lu</span> reprogramó animales viejos con virus modificado. <span class=\"person\">Michael Bonkowski</span> tiene el récord de ratón longevo: <span class=\"num\">5</span> años.",
        },
        {
          type: 'paragraph',
          html: "También <span class=\"person\">João Amorim</span> prueba si el resveratrol activa SIRT1 directamente, mientras que <span class=\"person\">Lindsay Wu</span> restauró fertilidad con NMN.",
        },
        {
          type: 'paragraph',
          html: "Pero no es un laboratorio aislado. El Glenn Center en Harvard y MIT, el Buck Institute en California y centros en cada universidad importante forman un campo global. Además, la industria privada busca fármacos con IA. La financiación pública para «envejecimiento» sigue siendo gota frente a cáncer o Alzheimer. Hace una década casi nadie trabajaba esto. Hoy es campo global.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Susan DeStefano</span>, cristiana devota que cree que curar enfermos es obra de Dios, gestiona el caos administrativo. La diversidad de creencias y orígenes no impide la convicción compartida. Por eso la vitalidad prolongada viene en camino: la pregunta ya no es si, sino cuándo y para quién.",
        },
        {
          type: 'key',
          html: "Cientos de laboratorios en el mundo ya hacen inevitable una humanidad con <span class=\"key-term\">vitalidad prolongada</span>.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Teoría de la información del envejecimiento",
    "description": "El declive es pérdida de lectura epigenética, no mutaciones primarias del ADN."
  },
  {
    "title": "Circuito de supervivencia",
    "description": "Genes A/B ancestrales que pausan reproducción para reparar ADN; origen de sirtuinas."
  },
  {
    "title": "Sirtuinas / NAD+",
    "description": "Enzimas que mantienen el epigenoma; requieren NAD+, restaurable con NMN."
  },
  {
    "title": "mTOR / AMPK",
    "description": "Vías nutricionales: mTOR crece con abundancia; AMPK y ayuno activan defensas."
  },
  {
    "title": "Células senescentes",
    "description": "Dejan de dividirse pero secretan inflamación; objetivo de senolíticos."
  },
  {
    "title": "Reloj epigenético",
    "description": "Metilación del ADN que mide edad biológica vs cronológica."
  },
  {
    "title": "Medicina de precisión",
    "description": "Diagnóstico y tratamiento según genoma y datos individuales."
  },
  {
    "title": "Vida saludable (healthspan)",
    "description": "Años de vida activa y sana, no solo conteo total."
  },
  {
    "title": "Inflammaging",
    "description": "Inflamación crónica de bajo grado impulsada por senescencia."
  },
  {
    "title": "Envejecimiento como enfermedad",
    "description": "Marco que unifica patologías del declive bajo una causa tratable."
  }
],
  chronology: [
  {
    "year": "~4000 M años",
    "text": "Circuito genético de supervivencia en primeras células (hipótesis M. superstes)."
  },
  {
    "year": "1825",
    "text": "Gompertz formula la ley de mortalidad humana creciente."
  },
  {
    "year": "1956",
    "text": "Vera huye de Hungría a Australia tras la revolución."
  },
  {
    "year": "1959",
    "text": "Mortimer y Johnston demuestran envejecimiento distinto en levadura madre/hija."
  },
  {
    "year": "1961",
    "text": "Hayflick descubre el límite de divisiones celulares humanas."
  },
  {
    "year": "1995",
    "text": "Sinclair se une al laboratorio de Guarente en MIT."
  },
  {
    "year": "2003",
    "text": "Anuncio del borrador del genoma humano (con huecos importantes)."
  },
  {
    "year": "2010",
    "text": "Royal Society: consenso de que envejecer es enfermedad tratable."
  },
  {
    "year": "2019",
    "text": "Publicación de Lifespan; campo de longevidad en expansión global."
  }
],
  figures: [
  {
    "name": "David Sinclair",
    "role": "Autor; teoría de información del envejecimiento; Harvard Medical School"
  },
  {
    "name": "Vera (abuela)",
    "role": "Inspiración personal; vitalidad hasta los 70, declive hasta los 92"
  },
  {
    "name": "Leonard Guarente",
    "role": "Pionero de sirtuinas en levadura; MIT"
  },
  {
    "name": "Robert Mortimer",
    "role": "Elevó la levadura a modelo genético accesible; Berkeley"
  },
  {
    "name": "Cynthia Kenyon",
    "role": "Mutación daf-2 duplica vida en gusanos; IGF-1"
  },
  {
    "name": "Benjamin Gompertz",
    "role": "Ley matemática de mortalidad creciente; 1825"
  },
  {
    "name": "Leonard Hayflick",
    "role": "Límite replicativo celular; crítico del foco en enfermedades aisladas"
  },
  {
    "name": "Linda Partridge / David Gems",
    "role": "Royal Society 2010; envejecimiento como patología"
  },
  {
    "name": "Mark Boguski",
    "role": "Acuñó «medicina de precisión»; diagnóstico genómico de cáncer"
  },
  {
    "name": "Darren Baker / Jan van Deursen",
    "role": "Eliminación de senescentes prolonga vida en ratones"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "El envejecimiento no es el precio inevitable de vivir.",
  "Es una pérdida tratable de información que las células olvidan leer.",
  "Podemos activar circuitos ancestrales con estilo de vida, fármacos y reprogramación celular.",
  "Pero hace falta inversión pública y equidad para que el futuro no sea solo para quienes puedan pagarlo.",
  "La ciencia ya avanza; la sociedad debe decidir qué mundo quiere cuando la juventud dure mucho más."
],
    highlight: "Envejecer es una enfermedad, y las enfermedades se tratan",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David A. Sinclair y Matthew D. LaPlante",
    line2: "\"Lifespan: Why We Age—and Why We Don't Have To\" · Atria Books · 2019",
  },
}
