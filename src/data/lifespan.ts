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
          html: "<span class=\"person\">David Sinclair</span> creció en los suburbios del norte de Sídney, explorando el monte como un niño que aún no ha aprendido que «el reloj corre». Su abuela <span class=\"person\">Vera</span>, refugiada húngara que huyó de los soviéticos en <span class=\"num\">1956</span>, vivió con espíritu bohemio hasta bien entrados los <span class=\"num\">70</span> años. Les leía el poema «Now We Are Six» de Milne y les decía que seis era la mejor edad y que nunca dejaran de ser jóvenes.",
        },
        {
          type: 'paragraph',
          html: "Pero el reloj sí corría. A mediados de los <span class=\"num\">80</span>, Vera era una sombra: sin música, sin silla vacía, sin la mujer que había sido. Murió a los <span class=\"num\">92</span> con la frase resignada «así es como va». Sinclair cree que la persona que fue había muerto años antes. La muerte de su madre <span class=\"person\">Diana</span> —asfixia por líquido en el pulmón, neuronas borrando recuerdos en minutos, le mostró lo que nadie cuenta: morir no es dormir tranquilo.",
        },
        {
          type: 'paragraph',
          html: "El documentalista <span class=\"person\">Claude Lanzmann</span> advirtió que toda muerte es violenta. Los niños entienden la irreversibilidad entre los <span class=\"num\">5</span> y <span class=\"num\">7</span> años y luego entierran el pensamiento. Hemos ganado años en el siglo pasado, pero no vida valiosa: ventiladores, quimio, facturas hospitalarias. <span class=\"person\">Atul Gawande</span> señaló que convertimos la mortalidad en experiencia médica. Sinclair pregunta si ¿y si pudiéramos ser jóvenes más tiempo —no solo años, sino décadas, sin que el final se parezca al declive que ya conocemos?",
        },
        {
          type: 'quote',
          text: "«No one tells you what it is like to die. Why doesn't anyone tell you?»",
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
          html: "Sinclair imagina la Tierra hace <span class=\"num\">4000 millones</span> de años: océanos tóxicos, sin oxígeno, hasta que ARN y membranas de ácidos grasos forman las primeras células en charcos junto a respiraderos termales. Una especie ficticia, <span class=\"term\">Magna superstes</span>, evoluciona un circuito genético: el gen A frena la reproducción en tiempos duros y el gen B lo silencia cuando conviene dividirse, pero si el ADN se rompe, la proteína de B sale a repararlo y A vuelve a activarse.",
        },
        {
          type: 'paragraph',
          html: "Cuando rayos cósmicos destrozan el ADN de casi todo el lago, solo M. superstes pausa todo para reparar antes de reproducirse. Ese circuito, conservado en plantas, hongos y animales —incluidos nosotros, es la razón por la que sobrevivimos décadas más allá de la reproducción. Pero tiene un costo, pues es también la razón por la que <span class=\"term\">envejecemos</span>.",
        },
        {
          type: 'paragraph',
          html: "Muchos biólogos nunca preguntaron por qué envejecemos. los gerontólogos trataban síntomas. El cáncer cambió de paradigma cuando <span class=\"person\">Peter Vogt</span> y <span class=\"person\">Peter Duesberg</span> hallaron <span class=\"term\">oncogenes</span> en los <span class=\"num\">70</span>: dejó de ser «así es la vida» y pasó a ser un blanco molecular. Sinclair propone el mismo giro para el envejecimiento: una causa unificada, no miles de enfermedades sueltas.",
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
          html: "En <span class=\"num\">2003</span> anunciaron el genoma humano «completo», pero faltaban huecos enormes: hasta <span class=\"num\">69 %</span> del «ADN basura» y genes menores de <span class=\"num\">300</span> pares de bases ignorados. No encontrarás un gen del envejecimiento porque los genes no evolucionaron para envejecernos. La clave está en la <span class=\"term\">información epigenética</span>: las marcas que dicen a las células qué ser, como la partitura de un pianista.",
        },
        {
          type: 'paragraph',
          html: "El camino empezó con <span class=\"person\">Robert Mortimer</span> en Berkeley, quien convirtió la levadura <span class=\"term\">Saccharomyces cerevisiae</span> en modelo accesible. Comparte <span class=\"num\">70 %</span> de nuestros genes y envejece en una semana. <span class=\"person\">Leonard Guarente</span> en MIT buscaba genes de longevidad. Sinclair llegó en <span class=\"num\">1995</span> con una beca Whitney tras convencer a <span class=\"person\">Douglas Melton</span>. El gen <span class=\"term\">WRN</span> de síndrome de Werner —envejecimiento prematuro a los <span class=\"num\">30-40</span>, tenía homólogo en levadura: <span class=\"term\">Sir2</span>.",
        },
        {
          type: 'paragraph',
          html: "Sir2 silencia genes y repara ADN. En levadura vieja, círculos de ADN ribosomal (<span class=\"term\">ERC</span>) secuestran Sir2, la célula madre envejece y la hija nace vieja. La <span class=\"term\">teoría de la información del envejecimiento</span> sostiene que perdemos la lectura epigenética correcta —ruido, no mutaciones primarias, . Los ratones ICE, con roturas de ADN inducidas sin mutar secuencia, envejecen antes: el reloj epigenético acelera.",
        },
        {
          type: 'key',
          html: "Envejecemos por <span class=\"key-term\">pérdida de información epigenética</span>, como un pianista que olvida la partitura mientras el piano sigue intacto.",
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
          html: "En mayo de <span class=\"num\">2010</span>, mientras Londres celebraba fútbol y política, la <span class=\"person\">Royal Society</span> reunió a luminarias del envejecimiento. <span class=\"person\">Cynthia Kenyon</span>, <span class=\"person\">Brian Kennedy</span>, <span class=\"person\">Nir Barzilai</span> y otros convergieron en una tesis subversiva: el envejecimiento no es inevitable, es un <span class=\"term\">proceso patológico</span> del que cáncer, Alzheimer y diabetes son síntomas. <span class=\"person\">David Gems</span> resumió que envejecer es una enfermedad con espectro amplio de consecuencias.",
        },
        {
          type: 'paragraph',
          html: "Históricamente, «decrepitud» figuraba en certificados de defunción junto a «susto» o «vómito». Hoy la OMS tiene <span class=\"num\">14 000</span> códigos y los médicos evitan citar la edad como causa inmediata. Pero envejecer nos lleva al precipicio: la ley de <span class=\"person\">Benjamin Gompertz</span> (<span class=\"num\">1825</span>) describe un reloj interno más probabilidad de muerte que se duplica cada <span class=\"num\">8</span> años. Solo <span class=\"num\">3 %</span> llegan al siglo. <span class=\"num\">115</span> es una apuesta de <span class=\"num\">1 en 100 millones</span>.",
        },
        {
          type: 'paragraph',
          html: "La madre de Sinclair, fumadora, fue diagnosticada de cáncer de pulmón a los <span class=\"num\">50</span> —<span class=\"num\">21</span> años antes que el promedio, . Tabaco, genética y tiempo matan juntos. Tratar cada enfermedad por separado sin atacar el envejecimiento subyacente es como estudiar por qué alguien cayó del acantilado sin preguntar qué lo llevó hasta el borde.",
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
          html: "Cada día Sinclair recibe correos pidiendo píldoras o plaza en ensayos clínicos. Mientras tanto, cualquiera puede activar sus <span class=\"term\">genes de longevidad</span> ya: las zonas azules de Okinawa, Nicoya y Cerdeña muestran que más verduras, legumbres y menos carne y azúcar ayudan. En <span class=\"num\">1900</span> neumonía, tuberculosis y gripe mataban a la mitad. hoy esas causas son raras y el declive llega décadas después, debilitado por el envejecimiento.",
        },
        {
          type: 'paragraph',
          html: "El consejo más sólido tras <span class=\"num\">25</span> años de investigación: <span class=\"term\">comer menos a menudo</span>. No malnutrición —eso acorta la vida, sino ayuno o restricción que activa el circuito de supervivencia. Hipócrates y el veneciano <span class=\"person\">Luigi Cornaro</span> (siglo <span class=\"num\">XV</span>) vivieron casi un siglo comiendo poco. la ciencia moderna lo confirma en levadura, moscas y ratones.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">restricción calórica</span> compacta el ADN y retrasa ERC en levadura. En Okinawa los adultos comían <span class=\"num\">20 %</span> menos calorías. en Biosfera 2 (<span class=\"num\">1991-1993</span>) la escasez de cultivo imitó CR y los biomarcadores de <span class=\"person\">Roy Walford</span> parecieron los de ratones longevos. Ejercicio vigoroso, exposición al frío y calor (<span class=\"term\">hormesis</span>) y dieta basada en plantas también activan AMPK y sirtuinas.",
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
          html: "<span class=\"person\">Richard Feynman</span> dijo que nada en biología indica la inevitabilidad de la muerte. A escala nanométrica, la vida es química ordenada: enzimas como <span class=\"term\">catalasa</span> procesan miles de reacciones por segundo. Si el caos enzimático se detiene, morimos en segundos. Las herramientas genéticas y epigenéticas ya permiten modular ese orden con <span class=\"term\">medicinas</span> existentes.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">rapamicina</span>, descubierta en bacterias bajo un moái de la Isla de Pascua (<span class=\"num\">1964</span>), suprime el sistema inmune y salva trasplantes, pero también alarga la vida en levadura, moscas y ratones (<span class=\"num\">9-14 %</span>, equivalente a una década humana). Inhibe <span class=\"term\">mTOR</span>, la vía que dice a la célula «hay comida, crece». La <span class=\"term\">metformina</span>, usada en diabetes, activa AMPK y muestra señales de protección en humanos. Los <span class=\"term\">STACs</span> (activadores de sirtuinas) como resveratrol y compuestos sintéticos estimulan SIRT1.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">NMN</span> y precursores restauran <span class=\"term\">NAD+</span>, cofactor que cae con la edad y sin el cual las sirtuinas no reparan el epigenoma. En humanos hay ensayos en curso. en animales, NMN mejora vasos, energía y fertilidad en ratones viejos. No es inmortalidad mañana, pero son los primeros pasos que Feynman anticipó.",
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
          html: "Pensábamos que envejecer sería intratablemente complejo. Pero si hay reguladores universales en levadura, gusanos, ratones y humanos, y si moléculas como NMN o horas de ejercicio los cambian, y si todo es <span class=\"term\">una enfermedad</span>, el panorama se simplifica: más fácil que curar todos los cánceres uno a uno. Como Lavoisier con el lavado de manos o Jenner con la vacuna, entender el problema lo vuelve soluble.",
        },
        {
          type: 'paragraph',
          html: "Las <span class=\"term\">células senescentes</span> dejan de dividirse pero no mueren: secretan citocinas, inflaman tejidos (<span class=\"term\">inflammaging</span>) y convierten vecinas en «zombies». <span class=\"person\">Darren Baker</span> y <span class=\"person\">Jan van Deursen</span> en la Mayo Clinic eliminaron senescentes en ratones y ganaron <span class=\"num\">20-30 %</span> de vida con riñones y corazones más sanos. Los <span class=\"term\">senolíticos</span> buscan destruirlas selectivamente.",
        },
        {
          type: 'paragraph',
          html: "La senescencia evolucionó por <span class=\"term\">pleiotropía antagonista</span> (<span class=\"person\">George Williams</span>, <span class=\"person\">Judith Campisi</span>): frena cáncer en la treintena, pero daña en la setentena cuando pocos morían de viejo en la evolución. Telómeros cortos activan el circuito de supervivencia permanentemente. La reprogramación epigenética con factores Yamanaka, en dosis controladas, rejuvenece ratones ICE sin borrar identidad celular.",
        },
        {
          type: 'key',
          html: "Eliminar <span class=\"key-term\">células senescentes</span> y revertir el epigenoma podrían rejuvenecer tejidos enteros en las próximas décadas.",
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
          html: "<span class=\"person\">Kuhn Lawan</span>, anciana tailandesa con cáncer de pulmón, recibía quimio correcta para el tumor equivocado: en realidad tenía leucemia sólida en el pulmón. <span class=\"person\">Mark Boguski</span>, pionero de la <span class=\"term\">medicina de precisión</span>, argumenta que diagnosticar por ubicación anatómica sin secuenciar es como clasificar ballenas como peces porque nadan. Con ADN del tumor, Lawan cambió de tratamiento y mejoró.",
        },
        {
          type: 'paragraph',
          html: "La secuenciación cayó de miles de millones de dólares a menos de <span class=\"num\">100</span> dólares en un dispositivo <span class=\"term\">MinION</span> del tamaño de una barra de chocolate. Pronto dirá qué comer, qué microbioma cultivar y qué fármaco evitar —como la deficiencia de <span class=\"term\">G6PD</span> en <span class=\"num\">300 millones</span> de personas, donde antipalúdicos comunes provocan hemólisis. CAR-T y checkpoint inhibitors (usados en el melanoma cerebral de <span class=\"person\">Jimmy Carter</span>) muestran remisiones > <span class=\"num\">80 %</span> en algunos cánceres.",
        },
        {
          type: 'paragraph',
          html: "Wearables detectarán arritmias, analizadores de aliento infecciones, patrones de teclado Parkinson. El <span class=\"term\">reloj epigenético</span> mide edad biológica por metilación del ADN. La medicina dejará de ser «lo que funciona para la mayoría» y pasará a ser individual, preventiva y anticipatoria.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">medicina de precisión</span> permitirá diagnosticar y tratar antes de que el declive sea irreversible.",
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
          html: "Sinclair hace aritmética conservadora y suma monitoreo temprano suma <span class=\"num\">10</span> años saludables. estilo de vida <span class=\"num\">5</span>. moléculas longevas <span class=\"num\">8</span>. reprogramación y senolíticos <span class=\"num\">10</span> más. Total: expectativa de <span class=\"num\">113</span> años en países desarrollados, con más de la mitad superando esa cifra. <span class=\"person\">Jeanne Calment</span> saldrá del top 100 de longevos en décadas.",
        },
        {
          type: 'paragraph',
          html: "La mitad de los niños japoneses nacidos hoy podrían pasar los <span class=\"num\">107</span> años, y en EE.UU. la proyección ronda los <span class=\"num\">104</span>. La reprogramación celular podría hacer alcanzables los <span class=\"num\">150</span> años antes de fin de siglo. Si la teoría de la información es correcta, el epigenoma podría resetearse repetidamente sin límite superior conocido.",
        },
        {
          type: 'paragraph',
          html: "Su hijo <span class=\"person\">Alex</span>, de <span class=\"num\">16</span> años, ve calentamiento global, guerras y terrorismo y duda del optimismo. Los críticos no son trolls, sino colegas y familia. Aun así, un tercio de los científicos del campo ya toman metformina o NAD+, y las conferencias serias debaten cuántas décadas extra llegarán, no si llegarán. El riesgo es extrapolar de forma lineal cuando las tecnologías avanzan en exponencial.",
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
          html: "<span class=\"person\">H.G. Wells</span> predijo guerra aérea en <span class=\"num\">1908</span>, cinco años después del primer vuelo. <span class=\"person\">Arthur C. Clarke</span> advirtió que científicos mayores de <span class=\"num\">50</span> solo sirven para reuniones —pero también dijo que cuando un distinguido anciano dice que algo es imposible, probablemente se equivoca. Sinclair, a los <span class=\"num\">50</span>, predice el primer supercentenario joven del siglo <span class=\"num\">XXII</span>.",
        },
        {
          type: 'paragraph',
          html: "El futuro puede ser desigualdad extrema y escasez, o prosperidad con ancianos reverenciados por sabiduría y recursos liberados de una medicina que combate enfermedades una por una. Para el segundo hace falta trabajo. El NIH de EE.UU. gasta menos del <span class=\"num\">1 %</span> en biología del envejecimiento. de <span class=\"num\">3.5</span> mil millones etiquetados «aging» en <span class=\"num\">2018</span>, menos del <span class=\"num\">3 %</span> iba a entender por qué envejecemos. <span class=\"person\">Leonard Hayflick</span> calculó que curar Alzheimer añade <span class=\"num\">19</span> días a la expectativa.",
        },
        {
          type: 'paragraph',
          html: "El café cuesta <span class=\"num\">300</span> mil millones al año en EE.UU.. un caza F-22, <span class=\"num\">335</span> millones la unidad. Invertir en envejecimiento no es lujo: el <span class=\"num\">93 %</span> de mayores de <span class=\"num\">50</span> está discapacitado por él. Equilibrio público-privado, redefinir envejecimiento como enfermedad en agencias de financiación y evitar que solo los ricos compren décadas extra.",
        },
        {
          type: 'key',
          html: "Prolongar la salud exige <span class=\"key-term\">inversión pública</span> en biología del envejecimiento y políticas que eviten desigualdad y colapso ambiental.",
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
          html: "El laboratorio de Sinclair en Harvard, en el noveno piso del New Research Building, reúne a <span class=\"num\">30-40</span> científicos de todo el mundo. <span class=\"person\">Jae-Hyun Yang</span> aceleró el reloj epigenético en ratones ICE. <span class=\"person\">Yuancheng Lu</span> reprogramó animales viejos con virus modificado. <span class=\"person\">Michael Bonkowski</span> tiene el récord de ratón longevo: <span class=\"num\">5</span> años. <span class=\"person\">João Amorim</span> prueba si resveratrol activa SIRT1 directamente. <span class=\"person\">Lindsay Wu</span> restauró fertilidad con NMN.",
        },
        {
          type: 'paragraph',
          html: "No es un laboratorio aislado: el Glenn Center en Harvard y MIT, el Buck Institute en California, centros en cada universidad importante. Industria privada busca fármacos con IA. la financiación pública para «envejecimiento» sigue siendo gota frente a cáncer o Alzheimer. Hace una década casi nadie trabajaba esto. hoy es campo global.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Susan DeStefano</span>, cristiana devota que cree que curar enfermos es obra de Dios, gestiona el caos administrativo. La diversidad de creencias y orígenes no impide la convicción compartida: la vitalidad prolongada viene en camino. La pregunta ya no es si, sino cuándo y para quién.",
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
    "title": "Healthspan",
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
  "El envejecimiento no es el precio inevitable de vivir: es una pérdida tratable de información epigenética.",
  "Podemos activar circuitos ancestrales de supervivencia con estilo de vida, fármacos y reprogramación celular.",
  "La medicina de precisión y los senolíticos podrían añadir décadas de salud en este siglo.",
  "Pero hace falta inversión pública y equidad para que el futuro no sea solo para quienes puedan pagarlo.",
  "La ciencia ya avanza; la sociedad debe decidir qué mundo quiere cuando la juventud dure mucho más."
],
    highlight: "envejecer es una enfermedad, y las enfermedades se tratan",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de David A. Sinclair y Matthew D. LaPlante",
    line2: "\"Lifespan: Why We Age—and Why We Don't Have To\" · Atria Books · 2019",
  },
}
