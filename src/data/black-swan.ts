import type { BookSummary } from '../types/book'

export const blackSwan: BookSummary = {
  slug: "black-swan",
  meta: {
    title: "The Black Swan: The Impact of the Highly Improbable",
    subtitle: "Por qué lo improbable gobierna la historia, y cómo dejar de ser su víctima",
    author: "Nassim Nicholas Taleb",
    meta: [
      "📖 2007 · Random House",
      "✍️ Ensayo sobre incertidumbre radical, sesgos cognitivos y exposición convexa al azar",
    ],
    titleEs: "El cisne negro",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Prólogo: el triplete del cisne negro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Antes del descubrimiento de Australia, el Viejo Mundo creía que todos los cisnes eran blancos. Milenios de avistamientos confirmatorios no bastaban. Un solo cisne negro invalida la generalización. <span class=\"person\">Nassim Nicholas Taleb</span> lleva esa lección al terreno empírico. Un <span class=\"term\">cisne negro</span> reúne tres atributos: <span class=\"term\">rareza</span> (queda fuera de lo esperable), <span class=\"term\">impacto extremo</span> y <span class=\"term\">predictibilidad retrospectiva</span> (después parece inevitable, aunque antes era imprevisible).",
        },
        {
          type: 'paragraph',
          html: "La tesis no es ornitológica sino epistemológica. Pocos cisnes negros explican casi todo lo significativo (ideas, religiones, guerras, mercados, vidas personales) y su peso crece con la complejidad del mundo moderno. Imaginar el mundo en la víspera de <span class=\"num\">1914</span>, del ascenso de Hitler o de Internet demuestra cuán inútil es la retrospectiva para predecir. Lo que llamamos conocimiento social opera como si esos saltos no existieran.",
        },
        {
          type: 'paragraph',
          html: "Taleb insiste en una asimetría crucial: lo que no sabemos pesa más que lo que sabemos, y muchos cisnes negros se agravan precisamente por ser inesperados (el <span class=\"num\">11-S</span> no habría ocurrido si hubiera sido «razonablemente concebible» el día anterior). Leer el periódico, paradójicamente, puede reducir el conocimiento del mundo al enfocarse en lo rutinario.",
        },
        {
          type: 'key',
          html: "Vivimos bajo el dominio de lo altamente improbable, y nuestra ceguera ante el azar convierte la incertidumbre radical en falsa sensación de control.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El aprendizaje de un escéptico empírico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb entrelaza autobiografía e historia para mostrar que la experiencia no enseña automáticamente a pensar bien sobre el azar. El Líbano de su juventud parecía un paraíso de convivencia. En pocos meses, la guerra civil lo transformó en infierno. Esa ruptura le enseñó que la «estabilidad histórica» es narrativa, no garantía.",
        },
        {
          type: 'paragraph',
          html: "Taleb introduce el <span class=\"term\">triplete de opacidad</span>, formado por la ilusión de entender el mundo, la distorsión retrospectiva y la sobrevaloración de la información factual frente a lo desconocido. La historia no arrastra. Salta. El crash de <span class=\"num\">1987</span> y la guerra lebanesa le parecieron el mismo fenómeno psicológico, porque la gente no ve los mamuts o los olvida enseguida.",
        },
        {
          type: 'paragraph',
          html: "Su carrera como trader le permitió acumular «f*** you money», capital suficiente para no prostituir el pensamiento, y dedicarse a construir un sistema entero alrededor del cisne negro. El problema no estaba en la naturaleza de los eventos, sino en cómo los percibimos.",
        },
        {
          type: 'key',
          html: "El escéptico empírico desconfía de explicaciones elegantes sobre procesos gobernados por saltos discontinuos que la mente convierte en continuidad.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "El cisne negro de Yevgenia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Yevgenia Krasnova</span> encarna la lógica del cisne negro en una carrera literaria. Rechazada por editores que «sabían» qué vendía, publica por su cuenta y su novela se convierte en fenómeno global. Un solo hallazgo imprevisto derriba años de certidumbres del mercado editorial.",
        },
        {
          type: 'paragraph',
          html: "Taleb usa la anécdota para mostrar la asimetría entre expectativa y resultado. Las creencias generalizadas se construyen sobre muestras incompletas hasta que una observación las invalida. Lo que después parece inevitable («claro que ese libro triunfaría») era imprevisible antes. La fragilidad narrativa consiste en creer que el relato posterior explica el proceso real.",
        },
        {
          type: 'paragraph',
          html: "El capítulo anticipa el epílogo, donde el éxito narrativo no garantiza el siguiente libro. La misma lógica aplica a carreras, negocios y ciencia, porque un cisne positivo redefine toda una trayectoria.",
        },
        {
          type: 'key',
          html: "Una sola observación fuera de patrón puede invalidar un edificio entero de certidumbres sostenidas por confirmación retrospectiva.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "El especulador y la prostituta",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un consejo de carrera en Wharton le abrió la puerta al problema de la inducción. Le recomendaron buscar una profesión <span class=\"term\">escalable</span>. Taleb contrasta profesiones no escalables (dentista, prostituta, masajista), donde el ingreso tiene techo y depende del tiempo, con las escalables (escritor, trader, actor), donde se pueden añadir ceros al resultado sin esfuerzo proporcional.",
        },
        {
          type: 'paragraph',
          html: "Esa distinción introduce dos mundos estadísticos. En <span class=\"term\">Mediocristán</span>, ninguna observación individual domina el total. En <span class=\"term\">Extremistán</span>, unos pocos concentran resultados desproporcionados. <span class=\"person\">J. K. Rowling</span> no reescribe su libro por cada lector, pero un panadero debe hornear cada pieza.",
        },
        {
          type: 'paragraph',
          html: "La globalización amplifica Extremistán porque permite que una sola obra capture mercados enteros. Confundir ambos mundos es el error metodológico central del libro, porque aplica herramientas de variación acotada donde mandan las colas gruesas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "No escalable",
              "description": "Ingreso acotado por tiempo y presencia física (dentista, consultor).",
              "icon": "🏥"
            },
            {
              "title": "Escalable",
              "description": "Un acierto puede multiplicarse sin límite (escritor, especulador).",
              "icon": "📈"
            },
            {
              "title": "Globalización",
              "description": "Conecta mercados y concentra ganadores en Extremistán.",
              "icon": "🌍"
            }
          ],
        },
        {
          type: 'key',
          html: "La escalabilidad separa dos tipos de incertidumbre. En Mediocristán el promedio describe la realidad. En Extremistán, unos pocos mandan.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Mil y un días, o cómo no ser un pavo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El <span class=\"term\">problema del pavo</span> condensa la inducción. Mil días de alimento refuerzan la creencia de que los humanos cuidan al pavo, hasta el miércoles anterior a Acción de Gracias, cuando llega la revisión de creencias. La ausencia de eventos negativos no prueba seguridad. Puede acumular riesgo invisible.",
        },
        {
          type: 'paragraph',
          html: "Taleb recorre la tradición escéptica (<span class=\"person\">Sexto Empírico</span>, <span class=\"person\">Algazel</span>, <span class=\"person\">David Hume</span>) para mostrar que el problema no es nuevo pero sí sistemáticamente ignorado. Los judíos alemanes en los años treinta y la población libanesa antes de la guerra son pavos reales. La mano que alimenta puede ser la que estrangula.",
        },
        {
          type: 'paragraph',
          html: "Un cisne negro es relativo al conocimiento del observador. Lo que sorprende a uno puede ser rutina para otro. El conocimiento práctico exige imaginar rupturas, no extrapolar tranquilidad pasada.",
        },
        {
          type: 'key',
          html: "Mil días de evidencia confirmatoria no protegen del día que prueba que estabas equivocado.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Confirmación shmonfirmation",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mente practica <span class=\"term\">empirismo ingenuo</span> y busca instancias que confirmen su historia. Diplomáticos muestran logros, no fracasos. Matemáticos citan aplicaciones útiles, no despilfarros. Si se busca confirmación con suficiente ingenio, casi cualquier hipótesis parece validarse.",
        },
        {
          type: 'paragraph',
          html: "Taleb propone <span class=\"term\">empirismo negativo</span> al estilo de <span class=\"person\">Karl Popper</span> y avanza por refutación, no por verificación. Ver cisnes blancos no prueba que no existan negros. Ver uno negro sí prueba que no todos son blancos. En medicina, confundir NED (No Evidence of Disease) con END (Evidence of No Disease) ha costado vidas, como ocurrió con la leche materna despreciada o las amígdalas extirpadas sin criterio.",
        },
        {
          type: 'paragraph',
          html: "No hace falta escepticismo total. Basta <span class=\"term\">semiescepticismo asimétrico</span> según el costo del error. Un día puede probarte equivocado. Mil días no pueden probarte derecho.",
        },
        {
          type: 'key',
          html: "Para pensar bajo incertidumbre, vale más buscar lo que puede falsear una idea que acumular pruebas a su favor.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "La falacia narrativa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La mente humana necesita historias coherentes. Simplifica cadenas causales y rellena huecos con relatos plausibles. Taleb llama <span class=\"term\">falacia narrativa</span> a convertir ruido y contingencia en guiones con sentido. Esa compulsión produce <span class=\"term\">ceguera al cisne negro</span> porque privilegia lo vívido, lo reciente y lo ordenado.",
        },
        {
          type: 'paragraph',
          html: "Los experimentos de Gazzaniga muestran que el hemisferio izquierdo «intérprete» inventa causas incluso cuando no las hay. La dopamina aumenta la búsqueda de patrones y reduce el escepticismo. La regla de Kolmogorov explica por qué lo narrativo se comprime y almacena fácilmente, mientras el azar puro no.",
        },
        {
          type: 'paragraph',
          html: "La narrativa es útil para la memoria pero peligrosa si se confunde con verdad o predicción. Lo que Taleb llama después «antifragilidad» frente al azar empieza aquí. Reconocer que nuestros relatos nos hacen frágiles y resistir la compulsión de explicar todo es el primer paso para no ser víctima sistemática de lo imprevisto.",
        },
        {
          type: 'key',
          html: "La claridad narrativa no es evidencia de verdad: muchas veces es compresión psicológica que oculta la incertidumbre radical.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Viviendo en la antesala de la esperanza",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Muchas carreras ofrecen recompensas <span class=\"term\">lumpadas</span> y no lineales: largos periodos de espera en la <span class=\"term\">antesala de la esperanza</span> sostienen la ilusión de un gran resultado futuro. La gente permanece en estrategias frágiles por miedo a abandonar «justo antes» del éxito.",
        },
        {
          type: 'paragraph',
          html: "Taleb distingue entre «bleed or blowup», es decir, pequeñas pérdidas continuas frente a ruina súbita. Evaluar por resultados visibles de corto plazo favorece quienes parecen estables pero acumulan riesgo de cola, como banqueros «conservadores» sentados sobre dinamita. En industrias con opcionalidad positiva (cine, biotecnología), la espera puede tener sentido. En las de solo downside (banca, seguros catastróficos), no.",
        },
        {
          type: 'paragraph',
          html: "La trampa es confundir proceso con resultado. Un buen resultado no valida la estrategia. Un mal proceso puede haber sido azar favorable temporal.",
        },
        {
          type: 'key',
          html: "No todo resultado bueno valida una estrategia. En entornos no lineales, la antesala de la esperanza puede ser una trampa de fragilidad narrativa.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "La suerte infalible de Casanova y la evidencia silenciosa",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Giacomo Casanova</span> parece tener «suerte infalible», pero solo vemos al superviviente. La <span class=\"term\">evidencia silenciosa</span> (los ahogados, los fracasados, las cartas no publicadas) desaparece de la muestra y distorsiona toda inferencia sobre éxito, talento y estrategia.",
        },
        {
          type: 'paragraph',
          html: "El cementerio de cartas, los adoradores ahogados y los emprendedores quebrados muestran el problema. Cuando falta la base de comparación, las historias de éxito generan reglas de imitación engañosas. El sesgo antrópico nos hace contar desde nuestra existencia como si fuera inevitable.",
        },
        {
          type: 'paragraph',
          html: "En mercados, ciencia y cultura, lo que falta en la muestra puede ser más informativo que lo visible. Taleb insiste en que el conocimiento práctico debe partir de lo no observado directamente.",
        },
        {
          type: 'key',
          html: "Lo que no vemos (los fracasos invisibles) distorsiona cualquier lección extraída de los éxitos visibles.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La falacia lúdica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La <span class=\"term\">falacia lúdica</span> consiste en modelar la incertidumbre real como un juego de reglas cerradas y probabilidades conocidas. <span class=\"person\">Fat Tony</span> piensa fuera de la caja. <span class=\"person\">Dr. John</span>, el «nerd», piensa dentro. Es brillante en exámenes y ciego en la vida real.",
        },
        {
          type: 'paragraph',
          html: "En un almuerzo en Lake Como con el Pentágono y el dueño de un casino, Taleb descubre que el riesgo real del casino no son tramposos ni contadores de cartas. Son eventos imprevistos (secuestro, demanda, cierre regulatorio) que ningún modelo lúdico captura. Los militares, paradójicamente, entienden mejor la epistemología del riesgo que muchos académicos.",
        },
        {
          type: 'paragraph',
          html: "El conocimiento platónico cierra la mente donde manda Extremistán. Tratar lo incalculable como casino es un error estructural que produce decisiones técnicamente sofisticadas pero frágiles.",
        },
        {
          type: 'key',
          html: "No todo lo incierto es calculable: confundir la vida con un juego de dados conocidos es la falacia del nerd.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "El escándalo de la predicción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En dominios de cisne negro, los expertos predicen mal de forma sistemática pero conservan prestigio gracias a explicaciones post hoc. Taleb cuestiona la autoridad de quienes pronostican en campos donde los resultados dependen de shocks improbables (economía, geopolítica, finanzas).",
        },
        {
          type: 'paragraph',
          html: "Más información no siempre mejora el conocimiento. Puede aumentar ruido, sobreajuste y confianza injustificada. El «traje vacío» (empty suit) sobrevive porque nadie lo hace responsable de sus errores. «Casi acerté» y «salvo por eso» son las frases de quien no tiene skin in the game.",
        },
        {
          type: 'paragraph',
          html: "Hay campos predecibles (horarios de cine, fases lunares). El error es trasladar la misma confianza a sistemas complejos donde los eventos «salidos de quicio» mandan.",
        },
        {
          type: 'key',
          html: "La predicción detallada en sistemas complejos produce más apariencia de conocimiento que conocimiento efectivo.",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Cómo buscar excremento de pájaro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "No podemos predecir descubrimientos futuros porque incorporar el futuro en el presente sería ya haberlo inventado. Taleb formula la ley de iteración del conocimiento, según la cual para entender el futuro necesitas elementos del futuro mismo.",
        },
        {
          type: 'paragraph',
          html: "La serendipia (hallazgos inadvertidos como el láser, la Viagra o la espuma de Apeles) supera la planificación. <span class=\"person\">Henri Poincaré</span> y el problema de los tres cuerpos muestran que incluso sistemas deterministas pueden ser impredecibles en la práctica. <span class=\"person\">Friedrich Hayek</span> advirtió que el conocimiento está disperso y no centralizable.",
        },
        {
          type: 'paragraph',
          html: "La historia sirve para el placer narrativo, no para teorizar ni predecir. Buscar «caca de pájaro» es mantener opciones abiertas y bajo costo de error, no adivinar el próximo hallazgo.",
        },
        {
          type: 'key',
          html: "No sabemos lo que sabremos. La serendipia y la búsqueda abierta superan la predicción planificada.",
        },
      ],
    },
    {
      id: "cap12",
      num: "12",
      title: "Epistemocracia, un sueño",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb sueña con una <span class=\"term\">epistemocracia</span>, un orden que premia la humildad epistemológica y penaliza la sobreconfianza experta. <span class=\"person\">Michel de Montaigne</span> es el modelo del epistemócrata (sabe que no sabe) frente a los bildungsphilisters que confunden cultura con comprensión.",
        },
        {
          type: 'paragraph',
          html: "La opacidad (información incompleta) es la forma práctica del azar. En la vida real no importa si el azar es «verdadero» o caos determinista disfrazado. La historia es un espejo para construir identidad, no una mina de leyes generales.",
        },
        {
          type: 'paragraph',
          html: "Predicción y felicidad son enemigos. Anticipar mal el futuro no nos hace más felices. La información incompleta no es un defecto del método, sino la condición de la acción bajo incertidumbre.",
        },
        {
          type: 'key',
          html: "Gobernar bien bajo incertidumbre requiere instituciones que incorporen duda, no que la oculten tras narrativas de certeza.",
        },
      ],
    },
    {
      id: "cap13",
      num: "13",
      title: "Apeles el pintor, o qué hacer si no se puede predecir",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Ante la imposibilidad de predecir cisnes negros, Taleb propone acción, no más teoría. La <span class=\"term\">estrategia de barra</span> combina hiperconservadurismo (<span class=\"num\">85–90 %</span> en activos máximamente seguros) con exposición hiperagresiva y convexa (<span class=\"num\">10–15 %</span> a opciones, venture capital) para que ningún cisne negativo cause ruina y los positivos puedan compensar con creces.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">William Goldman</span> gritaba «¡Nadie sabe nada!» sobre el cine. No predice qué película triunfa, pero sabe que lo imprevisible puede beneficiarlo. La asimetría grande (perder poco para ganar mucho) define negocios de cisne positivo (editorial, investigación, VC) frente a los de solo downside (banca, seguros).",
        },
        {
          type: 'paragraph',
          html: "No es comprar lotería. Los payoffs reales son escalables y las reglas desconocidas solo pueden ayudarte si tu pérdida está acotada. Maximizar la serendipia alrededor tuyo es la versión práctica de la antifragilidad narrativa. Consiste en dejar de creer que entiendes el futuro y diseñar exposición convexa a lo que no prevés.",
        },
        {
          type: 'key',
          html: "Si no puedes predecir, diseña asimetría: mucha protección abajo y apertura convexa al upside.",
        },
      ],
    },
    {
      id: "cap14",
      num: "14",
      title: "De Mediocristán a Extremistán, y de vuelta",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb formaliza los dos mundos introducidos en el capítulo 3. En <span class=\"term\">Mediocristán</span>, ninguna observación individual altera demasiado el agregado (alturas, calorías, pesos). En <span class=\"term\">Extremistán</span>, unos pocos dominan (riqueza, fama, ventas, citas) y el promedio deja de describir la realidad.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">efecto Mateo</span> («al que tiene, se le dará») y la <span class=\"term\">long tail</span> explican por qué la globalización ingenua exporta desigualdad extrema. Las ideas también contagian en Extremistán: un bestseller puede capturar toda la atención.",
        },
        {
          type: 'paragraph',
          html: "Confundir ambos mundos es la fuente principal de error analítico y político. La primera decisión metodológica correcta es identificar en cuál de los dos estamos antes de elegir herramientas estadísticas.",
        },
        {
          type: 'key',
          html: "La pregunta previa a cualquier análisis es si estamos en Mediocristán o en Extremistán.",
        },
      ],
    },
    {
      id: "cap15",
      num: "15",
      title: "La curva de campana, ese gran fraude intelectual",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb ataca el uso indiscriminado de la <span class=\"term\">distribución gaussiana</span> en fenómenos de Extremistán. La campana subestima eventos raros y extremos, precisamente los que más importan, y alimenta el <span class=\"term\">fraude gaussiano</span>, que viste de matemáticas una ceguera al riesgo real.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benoit Mandelbrot</span> y las leyes de potencia describen mejor desigualdades y concentraciones observadas. <span class=\"person\">Adolphe Quételet</span> y el «monstruo promedio» ilustran el error de buscar la normalidad donde no existe. La regla <span class=\"num\">80/20</span> es síntoma de Extremistán, no excepción.",
        },
        {
          type: 'paragraph',
          html: "El argumento no es abandonar las matemáticas, sino usar las adecuadas al dominio. Aplicar Gauss donde mandan colas gruesas no es un error menor: es una forma sistemática de fragilidad institucional.",
        },
        {
          type: 'key',
          html: "Aplicar la campana de Gauss en Extremistán es ceguera al riesgo disfrazada de ciencia.",
        },
      ],
    },
    {
      id: "cap16",
      num: "16",
      title: "La estética del azar",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Benoit Mandelbrot</span> ofrece una estética del azar más fiel que las curvas suaves platónicas. La <span class=\"term\">fractalidad</span> (irregularidad que se repite a distintas escalas) captura mejor la rugosidad de la realidad que los modelos simétricos.",
        },
        {
          type: 'paragraph',
          html: "Taleb distingue cisnes negros de <span class=\"term\">cisnes grises</span>, eventos extremos pero un poco más previsibles, en la frontera entre ambos mundos. La precisión excesiva en parámetros inestables empeora decisiones. En contextos complejos, rangos robustos superan exactitudes espurias.",
        },
        {
          type: 'paragraph',
          html: "Representar no es ser. Los modelos fractales son mapas, no territorio, pero al menos no pretenden que el azar sea una campana cómoda.",
        },
        {
          type: 'key',
          html: "Comprender el azar exige aceptar formas rugosas y escalables, no forzar simetrías que la realidad no tiene.",
        },
      ],
    },
    {
      id: "cap17",
      num: "17",
      title: "Los locos de Locke, o campanas en lugares equivocados",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Aplicar modelos mediocristánicos donde manda Extremistán produce consecuencias sociales graves. Taleb muestra cómo la obsesión por la normalidad estadística (desde <span class=\"person\">John Locke</span> hasta políticas contemporáneas) genera diagnósticos deficientes, métricas engañosas y decisiones frágiles.",
        },
        {
          type: 'paragraph',
          html: "«Cualquiera puede ser presidente» suena democrático pero ignora Extremistán político. Los burócratas confirman sus modelos con datos seleccionados y llaman «cisne negro» a lo que era previsible para quien miraba la estructura correcta.",
        },
        {
          type: 'paragraph',
          html: "Lo «científico» puede volverse ritual cuando no respeta la forma del fenómeno. La mala modelización no solo falla en teoría: acumula costos en lo público y lo privado.",
        },
        {
          type: 'key',
          html: "Poner campanas de Gauss donde mandan colas gruesas no es abstracción inocua: produce políticas y métricas que acumulan fragilidad.",
        },
      ],
    },
    {
      id: "cap18",
      num: "18",
      title: "La incertidumbre del farsante",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb critica al <span class=\"term\">farsante</span> que proyecta dominio técnico en ámbitos sin base predictiva sólida. La jerga, el formalismo y las retrospectivas autojustificatorias ocultan incapacidad real. La falacia lúdica reaparece en el nerd con título pero sin skin in the game.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Karl Popper</span> debería estar presente donde más se necesita y más se ignora. El problema no es la especialización, sino la falta de responsabilidad por el error y la desconexión entre teoría y práctica.",
        },
        {
          type: 'paragraph',
          html: "La defensa contra el falso experto es exigir exposición real a las consecuencias de sus consejos y límites explícitos de conocimiento.",
        },
        {
          type: 'key',
          html: "En incertidumbre extrema, la mejor defensa contra el farsante es exigir skin in the game y humildad epistémica.",
        },
      ],
    },
    {
      id: "cap19",
      num: "19",
      title: "Mitad y mitad, o cómo vengarse del cisne negro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb sintetiza una ética operativa en pares de «mitad y mitad». Es semiescepticismo donde otros confían y agresividad donde otros temen. Es hiperconservador en lo que otros llaman riesgo e hiperagresivo donde recomiendan cautela. Odia los cisnes negros negativos y ama los positivos (los accidentes de Apeles, la serendipia).",
        },
        {
          type: 'paragraph',
          html: "La regla es simple. Hay que ser agresivo cuando un error del modelo puede beneficiarte y paranoico cuando puede destruirte. En finanzas, la gente hace lo contrario con teorías endebles para gestionar riesgos y locuras bajo escrutinio «racional». «No corro por los trenes» resume la actitud. Perder un tren solo duele si corres tras él. Rechazar el éxito que otros esperan de ti solo duele si lo buscas.",
        },
        {
          type: 'paragraph',
          html: "La venganza contra el cisne negro no es dominarlo. Consiste en dejar de ser su víctima sistemática mediante asimetría, opcionalidad y estoicismo ante lo irrecuperable.",
        },
        {
          type: 'key',
          html: "La estrategia correcta frente al azar extremo es asimétrica: máxima protección abajo y apertura convexa al upside.",
        },
      ],
    },
    {
      id: "cap20",
      num: "20",
      title: "Epílogo: los cisnes blancos de Yevgenia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb invierte la perspectiva con los <span class=\"term\">cisnes blancos</span>, eventos muy esperados que no ocurren. <span class=\"person\">Yevgenia Krasnova</span> publica <em>The Loop</em> tras ocho años de trabajo. Las críticas son excelentes, pero casi nadie compra. El editor, que apostó la granja, culpa al libro «demasiado largo».",
        },
        {
          type: 'paragraph',
          html: "La moraleja del capítulo 2 se subvierte. El éxito narrativo pasado no predice el siguiente. El público hablaba del libro sin leerlo. El cisne blanco es la obra maestra ignorada. Por simetría, lo altamente probable que falla es tan revelador como lo improbable que ocurre.",
        },
        {
          type: 'paragraph',
          html: "El cierre recuerda que estar vivo es ya un cisne negro positivo de probabilidades astronómicas. No conviene sudar lo pequeño. Hay que aceptar la opacidad sin renunciar a la opcionalidad.",
        },
        {
          type: 'key',
          html: "Tanto lo inesperado que ocurre como lo esperado que no ocurre revelan los límites de nuestra capacidad predictiva y narrativa.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Cisne negro",
    "description": "Evento raro, de impacto extremo y explicado solo retrospectivamente; pocos explican casi todo."
  },
  {
    "title": "Mediocristán / Extremistán",
    "description": "Mundos donde el agregado es o no dominado por observaciones extremas."
  },
  {
    "title": "Falacia narrativa",
    "description": "Compulsión de comprimir el azar en relatos causales coherentes que ocultan incertidumbre."
  },
  {
    "title": "Evidencia silenciosa",
    "description": "Sesgo por observar solo supervivientes y omitir fracasos invisibles de la muestra."
  },
  {
    "title": "Falacia lúdica",
    "description": "Tratar incertidumbre abierta como juego de probabilidades conocidas (casino, examen)."
  },
  {
    "title": "Empirismo negativo",
    "description": "Avanzar por refutación (Popper): una contraejemplo vale más que mil confirmaciones."
  },
  {
    "title": "Estrategia de barra",
    "description": "Hiperseguridad (85–90 %) + exposición convexa (10–15 %) para limitar ruina y capturar upside."
  },
  {
    "title": "Opacidad histórica",
    "description": "Información incompleta que hace el azar indistinguible en la práctica de la decisión."
  },
  {
    "title": "Escalabilidad",
    "description": "Capacidad de multiplicar resultados sin aumentar proporcionalmente esfuerzo o tiempo."
  },
  {
    "title": "Epistemocracia",
    "description": "Ideal institucional de humildad epistemológica frente a sobreconfianza experta."
  },
  {
    "title": "Exposición convexa",
    "description": "Beneficiarse de la volatilidad y lo imprevisible cuando la pérdida está acotada."
  }
],
  chronology: [
  {
    "year": "1697",
    "text": "Expedición de Willem de Vlamingh en Australia registra cisnes negros y desarma la certeza europea."
  },
  {
    "year": "1748",
    "text": "David Hume publica su crítica de la inducción, antecedente filosófico del problema del pavo."
  },
  {
    "year": "1963",
    "text": "Benoit Mandelbrot desarrolla trabajos sobre variación de mercados y colas gruesas."
  },
  {
    "year": "1987",
    "text": "Crash bursátil global muestra límites de modelos de riesgo convencionales."
  },
  {
    "year": "2001",
    "text": "Atentados del 11 de septiembre: evento de alto impacto subestimado ex ante."
  },
  {
    "year": "2004",
    "text": "Tsunami del océano Índico ilustra consecuencias de eventos extremos poco previstos."
  },
  {
    "year": "2007",
    "text": "Publicación de *The Black Swan* (Random House)."
  }
],
  figures: [
  {
    "name": "Nassim Nicholas Taleb",
    "role": "Autor; trader y ensayista sobre incertidumbre radical y exposición convexa."
  },
  {
    "name": "Yevgenia Krasnova",
    "role": "Personaje narrativo; carrera literaria imprevisible (cisnes negros y blancos)."
  },
  {
    "name": "Benoit Mandelbrot",
    "role": "Matemático de la geometría fractal; colas gruesas y estética del azar."
  },
  {
    "name": "Karl Popper",
    "role": "Filósofo de la falsación; empirismo negativo y límites de la predicción."
  },
  {
    "name": "David Hume",
    "role": "Filósofo escéptico sobre la inducción y la causalidad en la experiencia."
  },
  {
    "name": "Michel de Montaigne",
    "role": "Ensayista escéptico; modelo de epistemocracia y humildad intelectual."
  },
  {
    "name": "Fat Tony",
    "role": "Figura de intuición práctica frente al modelador platónico (Dr. John)."
  },
  {
    "name": "William Goldman",
    "role": "Guionista: «Nadie sabe nada» sobre el éxito imprevisible del cine."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La historia no avanza por promedios estables, sino por un puñado de eventos improbables de impacto extremo que nuestras mentes convierten después en relatos «obvios».",
  "Leer periódicos y confiar en expertos que miden riesgo sin colas gruesas nos hace más frágiles, no más informados.",
  "La racionalidad práctica no es adivinar el futuro, sino reconocer lo que ignoramos y actuar en consecuencia.",
  "La falacia narrativa nos seduce. La estrategia de barra y la serendipia nos permiten beneficiarnos del azar sin creer que lo dominamos.",
  "Aceptar la opacidad del mundo es, para Taleb, la forma superior de inteligencia bajo incertidumbre radical."
],
    highlight: "No podemos predecir los cisnes negros, pero sí diseñar exposiciones asimétricas: máxima protección ante la ruina y apertura convexa a sorpresas favorables.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Nassim Nicholas Taleb",
    line2: "\"The Black Swan: The Impact of the Highly Improbable\" · Random House · 2007",
  },
}
