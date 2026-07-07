import type { BookSummary } from '../types/book'

export const determined: BookSummary = {
  slug: "determined",
  meta: {
    title: "Determined: A Science of Life Without Free Will",
    subtitle: "¿Tortugas hasta el fondo o una tortuga flotando en el aire?",
    author: "Robert M. Sapolsky",
    meta: [
      "📖 2023 · Penguin Press",
      "✍️ Neurobiólogo · Stanford · babuinos en Kenia",
    ],
    titleEs: "Determinado: Una ciencia de la vida sin libre albedrío",
  },
  toc: [
  {
    "id": "cap1",
    "num": "01",
    "label": "Tortugas hasta el fondo"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Los tres minutos finales de una película"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "¿De dónde viene la intención?"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Voluntad de hierro: mito del grit"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Introducción al caos"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "¿Tu libre albedrío es caótico?"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Introducción a la complejidad emergente"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "¿Tu libre albedrío emerge?"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Introducción a la indeterminación cuántica"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "¿Tu libre albedrío es aleatorio?"
  },
  {
    "id": "interlude",
    "num": "10.5",
    "label": "Interludio"
  },
  {
    "id": "cap11",
    "num": "11",
    "label": "¿Nos descontrolaremos?"
  },
  {
    "id": "cap12",
    "num": "12",
    "label": "Engranajes antiguos: ¿cómo cambia?"
  },
  {
    "id": "cap13",
    "num": "13",
    "label": "Ya lo hicimos antes"
  },
  {
    "id": "cap14",
    "num": "14",
    "label": "El placer del castigo"
  },
  {
    "id": "cap15",
    "num": "15",
    "label": "Si mueres pobre"
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
    "num": "—",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "cap1",
      num: "01",
      title: "Tortugas hasta el fondo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Robert M. Sapolsky</span> abre con la anécdota de <span class=\"person\">William James</span> y la anciana convencida de que el mundo descansa sobre una pila infinita de tortugas. La tesis del libro cabe en esa imagen. Reírse de ella es fácil, pero lo verdaderamente absurdo es creer que <em>alguna</em> tortuga flota sin nada debajo, es decir, que exista una conducta sin causa previa.",
        },
        {
          type: 'paragraph',
          html: "La demostración es acumulativa. Cualquier acto, heroico o vil, procede de las neuronas del segundo anterior, y esas neuronas dependen de las hormonas de esa mañana, del estrés de los meses previos, de la adolescencia, la infancia, la vida fetal, los genes, la cultura y la evolución. Cada nivel explica al siguiente sin dejar hueco. Somos, según Sapolsky, «suerte biológica y ambiental acumulada» sobre la que nunca tuvimos control.",
        },
        {
          type: 'paragraph',
          html: "Por eso su postura es el <span class=\"term\">incompatibilismo duro</span>: si todo tiene causa, no hay <span class=\"term\">desierto moral</span> básico. No existe culpa retributiva merecida ni mérito absoluto, y el castigo solo se justifica para contener un peligro, no para saldar una deuda. La resistencia es enorme porque casi todos creen en el libre albedrío cuando importa. Cerca del <span class=\"num\">90 %</span> de los filósofos lo defienden, y hasta los primates atribuyen más culpa a un humano que a una máquina.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Tortugas",
              "description": "Causalidad determinista en cadena, sin excepción flotante.",
              "icon": "🐢"
            },
            {
              "title": "Disciplinas entrelazadas",
              "description": "Genética, neurociencia, endocrina y desarrollo: un solo cuerpo de conocimiento.",
              "icon": "🔗"
            },
            {
              "title": "Incompatibilismo duro",
              "description": "Determinismo lleva a que no haya libre albedrío ni desierto moral básico.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'key',
          html: "Ninguna ciencia por sí sola derriba el libre albedrío, pero todas encadenadas no dejan grieta por donde meterlo.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Los tres minutos finales de una película",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sapolsky imagina una escena nocturna en un aeródromo donde un civil dispara a un oficial y un policía no lo arresta. Aislada, parece un asesinato a sangre fría. Es el final de <em>Casablanca</em>, y sin las dos horas previas resulta ininteligible. Lo mismo sucede con las decisiones humanas cuando solo miramos el instante del acto.",
        },
        {
          type: 'paragraph',
          html: "Ese instante es justamente lo que estudian los experimentos <span class=\"term\">libetianos</span>. <span class=\"person\">Benjamin Libet</span> (<span class=\"num\">1983</span>) midió un potencial de preparación unos <span class=\"num\">300 ms</span> antes de que el sujeto sintiera decidir. El fMRI permitió a <span class=\"person\">Haynes</span> anticipar la elección hasta <span class=\"num\">10 s</span> antes, y <span class=\"person\">Itzhak Fried</span>, registrando neuronas sueltas, acertó cerca del <span class=\"num\">80 %</span> de las veces. La conciencia llega tarde a su propia fiesta.",
        },
        {
          type: 'paragraph',
          html: "Aquí Sapolsky hace una concesión clave. Los compatibilistas objetan que las tareas son artificiales, que la predicción real ronda el <span class=\"num\">60 %</span> y que existe un «free won't», un veto de última hora. Puede que tengan razón y que Libet no mate el libre albedrío. Da igual, porque la pregunta decisiva es anterior: ¿de dónde salió la intención? Podemos hacer lo que queremos, pero no elegimos qué queremos.",
        },
        {
          type: 'key',
          html: "Discutir los milisegundos previos al acto es pelear por el desenlace ignorando toda la película que lo volvió inevitable.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "¿De dónde viene la intención?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si la intención tiene origen, hay que rastrearlo hacia atrás, y ese es el reto central del libro. Sapolsky recorre la cadena que va desde el estímulo sensorial inmediato hasta los genes, mostrando que la voluntad consciente es el último eslabón visible de una cascada larguísima que empezó mucho antes de que sintiéramos «decidir».",
        },
        {
          type: 'paragraph',
          html: "En los segundos previos, factores invisibles empujan el juicio. Un olor a basura activa la ínsula y endurece las condenas morales, mientras que un rostro bello enciende la corteza orbitofrontal y nos hace percibir a esa persona como más buena. El llamado efecto Macbeth muestra que sentirse moralmente sucio despierta ganas de lavarse las manos. Horas antes influyen las hormonas, y un juez con hambre concede menos libertades condicionales.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">priming</span> inconsciente completa el cuadro, cuando oír «ocean» inclina a nombrar la marca «Tide». Sapolsky remata señalando la trampa habitual, ya que incluso resistir un impulso o reconocer el priming es una conducta con causas, no un acto libre. La meta-conciencia no devuelve la libertad, solo agrega otro eslabón determinado a la misma cadena.",
        },
        {
          type: 'key',
          html: "Nadie ha mostrado jamás una neurona que cause una intención sin haber sido antes moldeada por la biología y el ambiente que no elegimos.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Voluntad de hierro: mito del grit",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los compatibilistas más finos aceptan la cadena causal, pero intentan colar el libre albedrío por una rendija: el pasado. Sostienen que «tuviste tiempo de convertirte en otra persona», postura que resume <span class=\"person\">Neil Levy</span>. Sapolsky responde que ese pasado también fue alguna vez un presente igual de determinado, así que trasladar la libertad atrás no la crea, solo la esconde.",
        },
        {
          type: 'paragraph',
          html: "El mito más querido es el del <span class=\"term\">grit</span>, que separa «lo que te dieron» de «lo que hiciste con ello», la fuerza de voluntad para resistir. El caso de <span class=\"person\">Jerry Sandusky</span> lo tensiona, y <span class=\"person\">James Cantor</span> admite que nadie elige ser pedófilo aunque sí podría «elegir no abusar». Sapolsky lo llama dualismo encubierto, porque ambas columnas de la tabla son biología.",
        },
        {
          type: 'paragraph',
          html: "La razón es concreta. La fuerza de voluntad vive en la <span class=\"term\">corteza prefrontal</span>, que regula impulsos y reglas sociales y no termina de madurar hasta mediados de los veinte. Esa corteza se construye con genes, hormonas fetales, infancia y cultura, todo ajeno a nuestra elección. Quien resiste una tentación lo hace con un cerebro que le fue dado.",
        },
        {
          type: 'key',
          html: "La fuerza de voluntad no es polvo mágico rociado sobre las neuronas, sino una corteza prefrontal esculpida por genes y experiencia.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Introducción al caos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Antes de refutar las escapatorias científicas, Sapolsky necesita explicarlas, y empieza por el <span class=\"term\">caos determinista</span>. El viejo mundo lineal permitía predecir el estado siguiente desde el actual con error proporcional, base del <span class=\"term\">reduccionismo</span>. El caos rompe esa comodidad sin abandonar la causalidad.",
        },
        {
          type: 'paragraph',
          html: "El ejemplo fundacional es <span class=\"person\">Edward Lorenz</span> (<span class=\"num\">1963</span>), que al redondear un dato de <span class=\"num\">0,506127</span> a <span class=\"num\">0,506</span> obtuvo un clima simulado completamente distinto. Es la <span class=\"term\">dependencia sensible de las condiciones iniciales</span>, el célebre efecto mariposa. Un cambio minúsculo en el arranque produce un futuro irreconocible, aunque cada paso siga reglas fijas.",
        },
        {
          type: 'paragraph',
          html: "Lo mismo ocurre con el problema de los tres cuerpos y con los autómatas celulares, donde reglas locales simples generan patrones ornados que ningún atajo reductivo puede anticipar. La lección es la que sostendrá los próximos capítulos: hay sistemas imposibles de predecir en la práctica que son, sin embargo, absolutamente deterministas.",
        },
        {
          type: 'key',
          html: "El caos no es azar sino orden escondido, impredecible para nosotros pero causal hasta el último decimal.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "¿Tu libre albedrío es caótico?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aquí Sapolsky derriba la primera escapatoria. Pensadores como <span class=\"person\">Eilenberger</span> creen que, si el caos vuelve el cerebro impredecible, la puerta del libre albedrío queda otra vez abierta. El argumento comete, dice, dos errores lógicos que conviene separar.",
        },
        {
          type: 'paragraph',
          html: "El primero confunde impredecible con indeterminado. El determinismo es una cuestión ontológica sobre por qué algo ocurrió, mientras que la predictibilidad es epistemológica, sobre si podemos calcularlo. La demencia frontotemporal lo ilustra: en <span class=\"num\">1922</span>, sin poder anticiparla, la habríamos llamado libre elección, y en <span class=\"num\">2022</span>, con la mutación <span class=\"term\">MAPT</span> a la vista, la llamamos biología. El libre albedrío no puede ser solo el nombre de la biología que aún no entendemos.",
        },
        {
          type: 'paragraph',
          html: "El segundo error va al revés y niega toda causa. La convergencia y la sobredeterminación, como dos incendios que juntos queman un edificio o el caso <span class=\"term\">Kingston contra Chicago</span> (<span class=\"num\">1927</span>), muestran que el reduccionismo ingenuo falla porque no siempre hay una causa única y rastreable. Que no puedas señalar cuál de dos torres de tortugas te sostiene no significa que estés flotando en el aire.",
        },
        {
          type: 'key',
          html: "Que la causa de una conducta sea imposible de calcular no la convierte en una conducta sin causa.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Introducción a la complejidad emergente",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La segunda escapatoria necesita otro concepto previo: la <span class=\"term\">emergencia</span>. De reglas locales simples, repetidas por miles de componentes tontos, brota una complejidad adaptativa y optimizada sin plano ni arquitecto. Es lo que el físico <span class=\"person\">Philip Anderson</span> resumió como «more is different», más es diferente.",
        },
        {
          type: 'paragraph',
          html: "Los ejemplos abundan en biología. Las hormigas y las abejas resuelven problemas colectivos sin líder, y un moho mucilaginoso llega a reconstruir la red ferroviaria de Tokio guiado solo por reglas de exploración y refuerzo. La bifurcación iterativa de los fractales mete estructuras casi infinitas en espacios finitos, como las miles de millas de capilares que caben en una fracción mínima del cuerpo.",
        },
        {
          type: 'paragraph',
          html: "Estos sistemas siguen distribuciones de ley de potencia, esa regla del 80 y 20 donde pocos nodos concentran casi todo, y aun así cada pieza obedece instrucciones triviales. La complejidad deslumbrante tienta a suponer que allí ocurre algo mágico o indeterminado, y ese será el gancho del siguiente capítulo.",
        },
        {
          type: 'key',
          html: "La emergencia explica cómo nace la novedad a partir de piezas simples, no cómo esas piezas dejarían de obedecer sus causas.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "¿Tu libre albedrío emerge?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Filósofos como <span class=\"person\">Christian List</span> (<span class=\"num\">2019</span>) sostienen que la mente emerge del cerebro y luego lo gobierna, rescatando así la agencia. Sapolsky responde con tres objeciones que cierran también esta puerta.",
        },
        {
          type: 'paragraph',
          html: "La primera es que el argumento repite el error del caos, tomando lo impredecible por indeterminado. La segunda ataca el truco técnico del «coarse-graining», que declara idénticos estados que solo son parecidos. Basta un contraejemplo químico, ya que dos moléculas casi iguales pueden ser estrógeno o testosterona, y esa diferencia mínima lo cambia todo, así que redondear detalles no es lícito.",
        },
        {
          type: 'paragraph',
          html: "La tercera admite que existe <span class=\"term\">causalidad descendente</span>, pero débil. El experimento de conformidad de Asch (<span class=\"num\">2005</span>) muestra que la presión del grupo llega a alterar hasta la corteza visual, prueba de que el nivel social influye en las neuronas. Aun así, una neurona no se libera de su historia por estar acompañada por millones de otras. El conjunto sigue hecho de ladrillos causales.",
        },
        {
          type: 'key',
          html: "Emerger no es flotar, porque incluso la mente que surge del cerebro sigue estando hecha de tortugas apiladas.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Introducción a la indeterminación cuántica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La tercera y más seductora escapatoria es la física cuántica, la única que ofrece indeterminación genuina. A escala subatómica el universo de <span class=\"person\">Laplace</span> se quiebra de verdad, y por eso conviene entender qué promete antes de ver si cumple.",
        },
        {
          type: 'paragraph',
          html: "Sapolsky repasa las rarezas fundacionales. La doble rendija de <span class=\"person\">Young</span> (<span class=\"num\">1801</span>) revela la dualidad onda y partícula, a la que se suman la superposición, el problema de la medición y el tunelamiento. El entrelazamiento conecta partículas a enormes distancias más rápido que la luz, y los experimentos de Bell mostraron que en esto Einstein estaba equivocado cuando insistía en que «Dios no juega a los dados».",
        },
        {
          type: 'paragraph',
          html: "El propio autor admite que apenas domina esta física y que el tema atrae a excéntricos como un imán. Reconoce que la indeterminación es real y contraintuitiva, lo que la vuelve el candidato más tentador para quienes buscan una grieta donde alojar la libertad.",
        },
        {
          type: 'key',
          html: "En el fondo del mundo hay auténtico azar cuántico, y esa rareza real es lo que hace atractiva la última escapatoria.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "¿Tu libre albedrío es aleatorio?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sapolsky cierra la puerta cuántica con tres golpes. Primero, esos efectos no «burbujean» hasta la conducta, porque el cerebro es cálido, húmedo y ruidoso, y la decoherencia los borra mucho antes de que un pensamiento se forme. <span class=\"person\">Max Tegmark</span> refutó por esta vía la teoría de los microtúbulos de <span class=\"person\">Penrose</span> y <span class=\"person\">Hameroff</span>.",
        },
        {
          type: 'paragraph',
          html: "Segundo, aunque el azar cuántico llegara a las neuronas, solo daría aleatoriedad, no agencia. Como pregunta <span class=\"person\">Searle</span>, ¿cómo se pasaría del ruido puro a la racionalidad? Lo que valoramos moralmente es la consistencia del carácter de una persona, y una conducta lanzada al azar no sería más libre, sino simplemente errática e imputable a un dado.",
        },
        {
          type: 'paragraph',
          html: "Tercero, los modelos de «aprovechar» el azar, como los de <span class=\"person\">Robert Kane</span> en sus momentos de decisión crítica, siempre necesitan un filtro que elija qué fluctuación seguir. Los criterios de ese filtro vienen otra vez de la biología y la historia del capítulo tres. El azar resulta tan implacable como la necesidad.",
        },
        {
          type: 'key',
          html: "Si una acción fuera puro azar cuántico sería suerte lanzada, no una elección tuya de la que puedas enorgullecerte.",
        },
      ],
    },
    {
      id: "interlude",
      num: "10.5",
      title: "Interludio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Sapolsky hace una pausa para recapitular la primera mitad con un diálogo interno entre su cerebro y su yo, donde el cerebro ordena y el yo obedece preguntando en vano por qué. Es la imagen viva de la tesis: la voz que cree decidir habla después de que los procesos subterráneos ya resolvieron.",
        },
        {
          type: 'paragraph',
          html: "El autor recuerda que ni siquiera pretende convencer a todos, solo desafiar la fe en la libertad. Cuenta que puede predecir qué estudiante levantará «libremente» el lápiz, y admite que hasta los chimpancés parecen creerse autores de sus actos. La impredecibilidad sigue existiendo por el caos, pero la ignorancia se achica año a año.",
        },
        {
          type: 'key',
          html: "La breve conversación entre el cerebro que manda y el yo que pregunta resume el libro entero antes de girar hacia cómo vivir sin libre albedrío.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "¿Nos descontrolaremos?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La segunda mitad enfrenta el miedo práctico: sin libre albedrío, ¿no correríamos todos «amok»? Los estudios de <span class=\"person\">Katherine Vohs</span> sugerían que leer a <span class=\"person\">Francis Crick</span> sobre determinismo aumentaba la trampa y la agresión y reducía la gratitud. El problema es que esos efectos son pequeños y replican mal.",
        },
        {
          type: 'paragraph',
          html: "Un meta-análisis de <span class=\"num\">2022</span> con unos <span class=\"num\">145</span> experimentos confirmó que se puede debilitar la creencia en el libre albedrío sin un efecto ético consistente. El paralelo con el ateísmo es esclarecedor. Se teme la inmoralidad de quien no cree en dioses moralizantes, pero al medir conducta real y controlar edad, sexo y red social, las diferencias se esfuman, y la secular Escandinavia es de las más decentes.",
        },
        {
          type: 'paragraph',
          html: "Sapolsky añade un matiz en forma de curva en U. Los que corren peligro de portarse mal son quienes tienen una creencia tibia y maleable, no los escépticos firmes ni los creyentes firmes, que en el estudio de Crone y Levy resultan igual de éticos. Quien piensa hondo llega a una moral decente sin importar su credo.",
        },
        {
          type: 'key',
          html: "Perder la fe en el libre albedrío no vuelve cruel a la gente, porque la decencia depende de la identidad moral, no de esa creencia.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Engranajes antiguos: ¿cómo cambia?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Determinismo no significa inmovilidad. Sapolsky aclara que no cambiamos de opinión por un acto libre, sino que somos cambiados por las circunstancias mediante una maquinaria neuroquímica antiquísima, y esa antigüedad es motivo de optimismo, no de resignación.",
        },
        {
          type: 'paragraph',
          html: "El modelo es la babosa marina <span class=\"person\">Aplysia</span>, cuyo estudio le dio el Nobel a <span class=\"person\">Eric Kandel</span> en <span class=\"num\">2000</span>. Un solo shock añade neurotransmisor a una sinapsis, cuatro shocks estabilizan una proteína, y la repetición construye conexiones nuevas mediante mensajeros como cAMP, PKA y CREB. Esas mismas moléculas operan en el condicionamiento del parpadeo y en el miedo de la amígdala que estudió <span class=\"person\">LeDoux</span>.",
        },
        {
          type: 'paragraph',
          html: "Lo asombroso es que humanos y Aplysia no comparten ancestro desde hace unos <span class=\"num\">500</span> millones de años y aun así usan la misma química para aprender. Lo mismo que graba un reflejo puede grabar un prejuicio, como cuando un discurso repite que cierto grupo es peligroso, y también puede grabar lo contrario. El mundo nos moldea, incluso cuando buscamos que nos moldee.",
        },
        {
          type: 'key',
          html: "Un universo sin libre albedrío es un universo donde la gente igual se transforma, movida por la misma química del aprendizaje que compartimos con una babosa.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Ya lo hicimos antes",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Abandonar el libre albedrío parece impensable, pero Sapolsky recuerda que ya lo hicimos con dominios enteros de la conducta. Cada vez que la ciencia explicó algo que atribuíamos a la voluntad o al mal, dejamos de culpar sin que la sociedad se derrumbara, y mejoramos.",
        },
        {
          type: 'paragraph',
          html: "La epilepsia fue durante cuatro mil años castigo divino o posesión, sancionada incluso por el <span class=\"term\">Malleus maleficarum</span> (<span class=\"num\">1487</span>) y por esterilizaciones como la del caso <span class=\"term\">Buck contra Bell</span> (<span class=\"num\">1927</span>). Hoy la entendemos como un exceso de excitación neuronal, y a nadie se le ocurre culpar moralmente a quien sufre un ataque súbito al volante, solo le retiramos la licencia por precaución.",
        },
        {
          type: 'paragraph',
          html: "La esquizofrenia siguió el mismo arco. La psiquiatría culpó a la «madre esquizofrenógena» hasta que se reveló como un trastorno del neurodesarrollo con base genética y dopaminérgica, y el cambio de opinión público llegó con campañas y programas de televisión que mostraban cerebros de gemelos. El caso de conductores que no toman su medicación recuerda que aún nos aferramos a la culpa en los bordes, aunque «no medicarse» sea tan biológico como el ataque mismo.",
        },
        {
          type: 'key',
          html: "Rechazar el libre albedrío no tiene nada de inédito, porque ya expulsamos la culpa de la epilepsia y la esquizofrenia y salimos ganando.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "El placer del castigo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si tenemos precedentes y argumentos, ¿por qué cuesta tanto soltar la justicia retributiva? La respuesta de Sapolsky es incómoda: castigar a quien hizo daño evolucionó para sentirse placentero, y ese placer visceral es el mayor obstáculo del libro.",
        },
        {
          type: 'paragraph',
          html: "El castigo del tramposo sostiene la cooperación, y por eso activa el circuito dopaminérgico de recompensa. Hasta los niños y los chimpancés pagan un costo con tal de ver castigado a quien se portó mal. Esa raíz antigua explica el largo desfile histórico de crueldad celebrada, desde el descuartizamiento de <span class=\"person\">Damiens</span> (<span class=\"num\">1757</span>) hasta el último ahorcamiento público de <span class=\"person\">Rainey Bethea</span> (<span class=\"num\">1936</span>).",
        },
        {
          type: 'paragraph',
          html: "La alternativa coherente es el modelo de <span class=\"term\">cuarentena</span> de <span class=\"person\">Derk Pereboom</span> y <span class=\"person\">Gregg Caruso</span>, que contiene el peligro como se aísla una enfermedad, con la mínima restricción necesaria y atacando los determinantes sociales del delito. Contra la objeción de que sin castigo nada disuade, Noruega ofrece la prueba, con una fracción de los homicidios, del encarcelamiento y de la reincidencia de Estados Unidos.",
        },
        {
          type: 'key',
          html: "La retribución sobrevive porque satisface una vieja sed de venganza, mientras que la cuarentena protege a la sociedad sin necesitar que nadie merezca sufrir.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "Si mueres pobre",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El cierre es a la vez filosófico y consolador. No hay un «por qué» cósmico ni un mérito absoluto, solo la larga cadena de causas. Algunos defienden el libre albedrío porque negarlo «sería deprimente», como confiesa <span class=\"person\">Stephen Cave</span> (<span class=\"num\">2016</span>), pero Sapolsky insiste en que la verdad, aun incómoda, libera.",
        },
        {
          type: 'paragraph',
          html: "La evidencia es delicada. Las personas deprimidas estiman su grado de control con más exactitud que las demás, más tristes pero más lúcidas, y saber esto puede estresar según el momento. Aun así, entender la biología frena el auto-castigo, ya se trate de obesidad ligada a la leptina, de TDAH o de orientación sexual, porque deja de haber un yo culpable al que fustigar.",
        },
        {
          type: 'paragraph',
          html: "Vuelve entonces la imagen del graduado y el basurero. Si intercambiaran genes, vida fetal e infancia, intercambiarían destinos, y el fenómeno del «John Henryism» muestra que creer que solo el esfuerzo vence a un sistema injusto llega a enfermar el cuerpo. Si esta conclusión te parece liberadora en lugar de amenazante, probablemente fuiste de los afortunados.",
        },
        {
          type: 'key',
          html: "Sin libre albedrío nadie merece de veras su fortuna ni su miseria, y asumirlo abre la puerta a menos estigma y más compasión.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Incompatibilismo duro",
    "description": "Determinismo universal incompatible con libre albedrío y desierto moral."
  },
  {
    "title": "Tortugas hasta el fondo",
    "description": "Metáfora de causas encadenadas sin ninguna causa flotante."
  },
  {
    "title": "Determinismo vs. predictibilidad",
    "description": "Lo ontológico de por qué pasó frente a lo epistémico de poder calcularlo."
  },
  {
    "title": "Caos determinista",
    "description": "Sensible a las condiciones iniciales, impredecible pero causal."
  },
  {
    "title": "Complejidad emergente",
    "description": "Propiedades nuevas del conjunto sin ningún agente libre añadido."
  },
  {
    "title": "Indeterminación cuántica",
    "description": "Azar real subatómico que se decohere antes de llegar a la conducta."
  },
  {
    "title": "Modelo de cuarentena",
    "description": "Contener el peligro con mínima restricción, sin castigo merecido."
  },
  {
    "title": "Suerte constitutiva",
    "description": "Genes, feto, infancia y cultura, todo fuera del control personal."
  }
],
  chronology: [
  {
    "year": "1801",
    "text": "Young y la doble rendija: dualidad onda y partícula."
  },
  {
    "year": "1487",
    "text": "El Malleus maleficarum codifica la caza de brujas."
  },
  {
    "year": "1757",
    "text": "Ejecución y descuartizamiento de Damiens en París."
  },
  {
    "year": "1848",
    "text": "Phineas Gage: lesión frontal que cambia el carácter."
  },
  {
    "year": "1927",
    "text": "Buck contra Bell avala la esterilización forzada."
  },
  {
    "year": "1936",
    "text": "Último ahorcamiento público en EE. UU. (Rainey Bethea)."
  },
  {
    "year": "1963",
    "text": "Lorenz descubre el caos y el efecto mariposa."
  },
  {
    "year": "1983",
    "text": "Libet publica el potencial de preparación."
  },
  {
    "year": "2000",
    "text": "Kandel recibe el Nobel por la plasticidad de la Aplysia."
  },
  {
    "year": "2023",
    "text": "Publicación de Determined (Penguin Press)."
  }
],
  figures: [
  {
    "name": "Robert M. Sapolsky",
    "role": "Autor, neurobiólogo y primatólogo, incompatibilista duro."
  },
  {
    "name": "Benjamin Libet",
    "role": "Potencial de preparación y debate del veto consciente."
  },
  {
    "name": "Daniel Dennett",
    "role": "Compatibilista al que Sapolsky rebate sobre la suerte y el tiempo."
  },
  {
    "name": "Christian List",
    "role": "Defensor del libre albedrío emergente mediante coarse-graining."
  },
  {
    "name": "Max Tegmark",
    "role": "Refutó los microtúbulos cuánticos de Penrose y Hameroff."
  },
  {
    "name": "Eric Kandel",
    "role": "Plasticidad de la Aplysia, Nobel en 2000."
  },
  {
    "name": "Derk Pereboom",
    "role": "Impulsor del modelo penal de cuarentena."
  },
  {
    "name": "Gregg Caruso",
    "role": "Cuarentena más determinantes sociales del delito."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "No hay tortuga flotando en el aire, porque cada acto es biología e historia que no elegimos.",
  "Estudiar solo la intención o los segundos previos es mirar el final de Casablanca sin haber visto la película.",
  "El caos, la emergencia y el azar cuántico asombran, pero ninguno inserta un agente libre en la ecuación.",
  "El placer de castigar sobrevive porque ignora las causas que produjeron al culpable.",
  "Aceptar el determinismo no da un sentido cósmico, pero sí menos crueldad y más cuarentena sensata."
],
    highlight: "Somos tortugas hasta el fondo, y eso no impide cambiar cerebros, leyes ni compasión.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Robert M. Sapolsky",
    line2: "\"Determined\" · Penguin Press · 2023",
  },
}
