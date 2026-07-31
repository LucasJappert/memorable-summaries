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
          html: "¿Por qué un solo avistamiento puede tumbar milenios de certeza? Antes del descubrimiento de Australia, el Viejo Mundo creía que todos los cisnes eran blancos. Milenios de avistamientos confirmatorios no bastaban. Un solo cisne negro invalida la generalización. <span class=\"person\">Nassim Nicholas Taleb</span> (trader y ensayista sobre el azar) lleva esa lección al terreno empírico. Un <span class=\"term\">cisne negro</span> (evento raro, de gran impacto y explicado solo después) reúne tres rasgos. Son rareza, impacto extremo y la sensación de que «siempre fue inevitable».",
        },
        {
          type: 'paragraph',
          html: "La tesis no es ornitológica sino epistemológica. Pocos cisnes negros explican casi todo lo significativo. Por eso ideas, religiones, guerras, mercados y vidas personales dependen de saltos discontinuos. Imaginar el mundo la víspera de <span class=\"num\">1914</span> demuestra cuán inútil es la retrospectiva para predecir. Lo mismo ocurre con el ascenso de Hitler o con Internet.",
        },
        {
          type: 'paragraph',
          html: "Taleb insiste en una asimetría crucial. Lo que no sabemos pesa más que lo que sabemos. Muchos cisnes negros se agravan por ser inesperados. El <span class=\"num\">11-S</span> no habría ocurrido si hubiera sido «razonablemente concebible» el día anterior. Leer el periódico puede reducir el conocimiento del mundo al enfocarse en lo rutinario.",
        },
        {
          type: 'key',
          html: "Vivimos bajo el dominio de lo altamente improbable, y nuestra <span class=\"key-term\">ceguera ante el azar</span> convierte la incertidumbre radical en falsa sensación de control.",
        },
        {
          type: 'paragraph',
          html: "Para ver cómo se aprende esa ceguera, Taleb parte de su propia biografía y de rupturas históricas.",
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
          html: "¿Enseña la experiencia a pensar bien sobre el azar? Taleb entrelaza autobiografía e historia para mostrar que no siempre. El Líbano de su juventud parecía un paraíso de convivencia. En pocos meses, la guerra civil lo transformó en infierno. Esa ruptura le enseñó que la «estabilidad histórica» es narrativa, no garantía.",
        },
        {
          type: 'paragraph',
          html: "Taleb introduce el <span class=\"term\">triplete de opacidad</span> (tres ilusiones que nos engañan). Creemos que entendemos el mundo, distorsionamos el pasado y sobrevaloramos datos frente a lo desconocido. Por eso la historia no arrastra: salta. El crash de <span class=\"num\">1987</span> y la guerra lebanesa le parecieron el mismo fenómeno psicológico.",
        },
        {
          type: 'paragraph',
          html: "Su carrera como trader le permitió acumular capital suficiente para no prostituir el pensamiento. Ese margen le permitió dedicar años a construir un sistema entero alrededor del cisne negro. El problema no estaba en la naturaleza de los eventos, sino en cómo los percibimos.",
        },
        {
          type: 'key',
          html: "El <span class=\"key-term\">escéptico empírico</span> desconfía de explicaciones elegantes sobre procesos gobernados por saltos que la mente convierte en continuidad.",
        },
        {
          type: 'paragraph',
          html: "Esa lógica del salto imprevisible aparece con claridad en una carrera literaria ficticia.",
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
          html: "¿Puede un solo éxito derribar años de certidumbre editorial? <span class=\"person\">Yevgenia Krasnova</span> (personaje narrativo del libro) encarna la lógica del cisne negro en una carrera literaria. Rechazada por editores que «sabían» qué vendía, publica por su cuenta. Su novela se convierte en fenómeno global.",
        },
        {
          type: 'paragraph',
          html: "Taleb usa la anécdota para mostrar la asimetría entre expectativa y resultado. Las creencias generalizadas se construyen sobre muestras incompletas hasta que una observación las invalida. De ahí que lo que después parece inevitable («claro que ese libro triunfaría») era imprevisible antes.",
        },
        {
          type: 'paragraph',
          html: "El capítulo anticipa el epílogo, donde el éxito narrativo no garantiza el siguiente libro. La misma lógica aplica a carreras, negocios y ciencia. Un cisne positivo redefine toda una trayectoria.",
        },
        {
          type: 'key',
          html: "Una sola observación fuera de patrón puede invalidar un edificio entero de certidumbres sostenidas por confirmación retrospectiva.",
        },
        {
          type: 'paragraph',
          html: "Para entender por qué unos pocos triunfan tanto, Taleb distingue dos tipos de profesión y de estadística.",
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
          html: "¿Por qué algunas profesiones pueden multiplicar ingresos sin multiplicar horas? Un consejo de carrera en Wharton le abrió la puerta al problema de la inducción. Le recomendaron buscar una profesión <span class=\"term\">escalable</span> (donde un acierto puede multiplicarse sin límite de tiempo). Taleb contrasta oficios no escalables, como dentista o masajista, con los escalables, como escritor o trader.",
        },
        {
          type: 'paragraph',
          html: "Esa distinción introduce dos mundos estadísticos. En <span class=\"term\">Mediocristán</span> (mundo de promedios estables), ninguna observación individual domina el total. En <span class=\"term\">Extremistán</span> (mundo de colas gruesas), unos pocos concentran resultados desproporcionados. <span class=\"person\">J. K. Rowling</span> (autora de Harry Potter) no reescribe su libro por cada lector. Un panadero debe hornear cada pieza.",
        },
        {
          type: 'paragraph',
          html: "La globalización amplía Extremistán porque permite que una sola obra capture mercados enteros. Confundir ambos mundos es el error metodológico central del libro. Aplica herramientas de variación acotada donde mandan las colas gruesas.",
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
          html: "La <span class=\"key-term\">escalabilidad</span> separa dos tipos de incertidumbre. En Mediocristán el promedio describe la realidad. En Extremistán, unos pocos mandan.",
        },
        {
          type: 'paragraph',
          html: "Mediocristán engaña cuando la calma acumula riesgo invisible, como en la parábola del pavo.",
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
          html: "¿Por qué la ausencia de catástrofes no prueba que estamos a salvo? El <span class=\"term\">problema del pavo</span> (parábola sobre inducción engañosa) condensa la lección. Mil días de alimento refuerzan la creencia de que los humanos cuidan al pavo. Llega el miércoles anterior a Acción de Gracias y la creencia se revisa de golpe.",
        },
        {
          type: 'paragraph',
          html: "Taleb recorre la tradición escéptica para mostrar que el problema no es nuevo pero sí ignorado. <span class=\"person\">David Hume</span> (filósofo escéptico del siglo XVIII) criticó la inducción: ver el pasado no garantiza el futuro. Los judíos alemanes en los años treinta y la población libanesa antes de la guerra son pavos reales.",
        },
        {
          type: 'paragraph',
          html: "Un cisne negro es relativo al conocimiento del observador. Lo que sorprende a uno puede ser rutina para otro. El conocimiento práctico exige imaginar rupturas, no extrapolar tranquilidad pasada.",
        },
        {
          type: 'key',
          html: "Mil días de evidencia confirmatoria no protegen del día que prueba que estabas equivocado.",
        },
        {
          type: 'paragraph',
          html: "Si la inducción engaña, hay que revisar cómo buscamos pruebas a favor de nuestras ideas.",
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
          html: "¿Por qué la mente ama las pruebas que confirman lo que ya cree? La mente practica <span class=\"term\">empirismo ingenuo</span> (buscar solo ejemplos que validen la hipótesis). Diplomáticos muestran logros, no fracasos. Matemáticos citan aplicaciones útiles, no despilfarros. Si se busca con suficiente ingenio, casi cualquier idea parece validarse.",
        },
        {
          type: 'paragraph',
          html: "Taleb propone <span class=\"term\">empirismo negativo</span> (avanzar por refutación, al estilo de Popper). Ver cisnes blancos no prueba que no existan negros. Pero ver uno negro sí prueba que no todos son blancos. En medicina, confundir «no hay evidencia de enfermedad» con «hay evidencia de que no hay enfermedad» ha costado vidas.",
        },
        {
          type: 'paragraph',
          html: "No hace falta escepticismo total. Basta semiescepticismo asimétrico según el costo del error. Un día puede probarte equivocado. Mil días no pueden probarte derecho.",
        },
        {
          type: 'key',
          html: "Para pensar bajo incertidumbre, vale más buscar lo que puede falsear una idea que acumular pruebas a su favor.",
        },
        {
          type: 'paragraph',
          html: "Esa búsqueda de coherencia explica por qué convertimos el azar en historias demasiado limpias.",
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
          html: "¿Por qué necesitamos historias aunque distorsionen la realidad? La mente humana simplifica cadenas causales y rellena huecos con relatos plausibles. Taleb llama <span class=\"term\">falacia narrativa</span> (compulsión de comprimir el azar en guiones con sentido) a ese hábito. Produce ceguera al cisne negro porque privilegia lo vívido, lo reciente y lo ordenado.",
        },
        {
          type: 'paragraph',
          html: "Los experimentos de Gazzaniga muestran que el hemisferio izquierdo «intérprete» inventa causas incluso cuando no las hay. La dopamina aumenta la búsqueda de patrones y reduce el escepticismo. Por eso la narrativa es útil para la memoria pero peligrosa si se confunde con verdad o predicción.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">claridad narrativa</span> no es evidencia de verdad: muchas veces es compresión psicológica que oculta la incertidumbre radical.",
        },
        {
          type: 'paragraph',
          html: "Las narrativas de espera explican por qué mucha gente permanece en estrategias frágiles demasiado tiempo.",
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
          html: "¿Por qué seguimos en carreras que rara vez pagan? Muchas ofrecen recompensas lumpadas y no lineales. Largos periodos en la <span class=\"term\">antesala de la esperanza</span> (espera prolongada de un gran resultado) sostienen la ilusión de un éxito futuro. La gente permanece en estrategias frágiles por miedo a abandonar «justo antes» del triunfo.",
        },
        {
          type: 'paragraph',
          html: "Taleb distingue entre «bleed or blowup»: pequeñas pérdidas continuas frente a ruina súbita. Evaluar por resultados visibles de corto plazo favorece quienes parecen estables pero acumulan riesgo de cola. En industrias con opcionalidad positiva, como cine o biotecnología, la espera puede tener sentido.",
        },
        {
          type: 'paragraph',
          html: "La trampa es confundir proceso con resultado. Un buen resultado no valida la estrategia. Un mal proceso puede haber sido azar favorable temporal.",
        },
        {
          type: 'key',
          html: "No todo resultado bueno valida una estrategia. En entornos no lineales, la antesala de la esperanza puede ser una trampa de fragilidad narrativa.",
        },
        {
          type: 'paragraph',
          html: "Los éxitos visibles ocultan otra distorsión: solo vemos a quienes sobrevivieron al azar.",
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
          html: "¿Por qué los triunfadores parecen tener suerte infalible? <span class=\"person\">Giacomo Casanova</span> (aventurero del siglo XVIII) parece invencible, pero solo vemos al superviviente. La <span class=\"term\">evidencia silenciosa</span> (fracasos ausentes de la muestra) distorsiona toda inferencia sobre éxito, talento y estrategia.",
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
        {
          type: 'paragraph',
          html: "Otra distorsión aparece cuando tratamos la vida real como un juego de reglas cerradas.",
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
          html: "¿Por qué confundimos la incertidumbre real con un casino? La <span class=\"term\">falacia lúdica</span> (modelar lo incierto como juego de probabilidades conocidas) hace brillar al «nerd» en exámenes y cegarlo en la vida. <span class=\"person\">Fat Tony</span> (figura de intuición práctica del libro) piensa fuera de la caja. <span class=\"person\">Dr. John</span> (el nerd modelador) piensa dentro.",
        },
        {
          type: 'paragraph',
          html: "En un almuerzo en Lake Como con el Pentágono y el dueño de un casino, Taleb descubre algo revelador. El riesgo real del casino no son tramposos ni contadores de cartas. Son eventos imprevistos: secuestro, demanda o cierre regulatorio.",
        },
        {
          type: 'paragraph',
          html: "El conocimiento platónico cierra la mente donde manda Extremistán. Tratar lo incalculable como casino es un error estructural. Produce decisiones técnicamente sofisticadas pero frágiles.",
        },
        {
          type: 'key',
          html: "No todo lo incierto es calculable: confundir la vida con un juego de dados conocidos es la falacia del nerd.",
        },
        {
          type: 'paragraph',
          html: "Esa confianza en modelos alimenta el prestigio de quienes predicen mal en sistemas complejos.",
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
          html: "¿Por qué los expertos que fallan siguen siendo escuchados? En dominios de cisne negro, los expertos predicen mal de forma sistemática pero conservan prestigio. Las explicaciones post hoc salvan su autoridad. Taleb cuestiona a quienes pronostican en campos donde mandan shocks improbables.",
        },
        {
          type: 'paragraph',
          html: "Más información no siempre mejora el conocimiento. Puede aumentar ruido, sobreajuste y confianza injustificada. El «traje vacío» sobrevive porque nadie lo hace responsable de sus errores. «Casi acerté» y «salvo por eso» son las frases de quien no tiene skin in the game.",
        },
        {
          type: 'paragraph',
          html: "Hay campos predecibles, como horarios de cine o fases lunares. El error es trasladar la misma confianza a sistemas complejos donde los eventos «salidos de quicio» mandan.",
        },
        {
          type: 'key',
          html: "La <span class=\"key-term\">predicción detallada</span> en sistemas complejos produce más apariencia de conocimiento que conocimiento efectivo.",
        },
        {
          type: 'paragraph',
          html: "Si no podemos predecir descubrimientos, conviene cambiar la estrategia de búsqueda.",
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
          html: "¿Por qué no podemos predecir descubrimientos futuros? Incorporar el futuro en el presente sería ya haberlo inventado. Taleb formula una regla incómoda según la cual entender el futuro exige elementos del futuro mismo.",
        },
        {
          type: 'paragraph',
          html: "La serendipia supera la planificación. Por eso hallazgos inadvertidos como el láser, la Viagra o la espuma de Apeles lo demuestran. <span class=\"person\">Henri Poincaré</span> (matemático francés) mostró con el problema de los tres cuerpos que sistemas deterministas pueden ser impredecibles en la práctica.",
        },
        {
          type: 'paragraph',
          html: "La historia sirve para el placer narrativo, no para teorizar ni predecir. Buscar «caca de pájaro» es mantener opciones abiertas y bajo costo de error. No adivinar el próximo hallazgo.",
        },
        {
          type: 'key',
          html: "No sabemos lo que sabremos. La serendipia y la búsqueda abierta superan la predicción planificada.",
        },
        {
          type: 'paragraph',
          html: "Esa humildad ante lo desconocido apunta a un ideal político e intelectual.",
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
          html: "¿Cómo gobernaría una sociedad que admite no saber? Taleb sueña con una <span class=\"term\">epistemocracia</span> (orden que premia la humildad epistemológica y penaliza la sobreconfianza experta). <span class=\"person\">Michel de Montaigne</span> (ensayista escéptico del Renacimiento) es el modelo del epistemócrata: sabe que no sabe.",
        },
        {
          type: 'paragraph',
          html: "La opacidad (información incompleta) es la forma práctica del azar. En la vida real no importa si el azar es «verdadero» o caos determinista disfrazado. Por eso la historia es un espejo para construir identidad, no una mina de leyes generales.",
        },
        {
          type: 'paragraph',
          html: "Predicción y felicidad son enemigos. Anticipar mal el futuro no nos hace más felices. La información incompleta no es un defecto del método, sino la condición de la acción bajo incertidumbre.",
        },
        {
          type: 'key',
          html: "Gobernar bien bajo incertidumbre requiere instituciones que incorporen duda, no que la oculten tras narrativas de certeza.",
        },
        {
          type: 'paragraph',
          html: "La duda no paraliza. Obliga a diseñar acciones robustas cuando la predicción falla.",
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
          html: "¿Qué hacer si los cisnes negros son impredecibles? Taleb propone acción, no más teoría. La <span class=\"term\">estrategia de barra</span> (hiperseguridad abajo más exposición convexa arriba) combina dos polos. Entre <span class=\"num\">85</span> y <span class=\"num\">90 %</span> en activos máximamente seguros. Entre <span class=\"num\">10</span> y <span class=\"num\">15 %</span> a opciones o venture capital.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">William Goldman</span> (guionista de Hollywood) gritaba «¡Nadie sabe nada!» sobre el cine. No predice qué película triunfa, pero sabe que lo imprevisible puede beneficiarlo. La asimetría grande define negocios de cisne positivo frente a los de solo downside.",
        },
        {
          type: 'paragraph',
          html: "No es comprar lotería. Los payoffs reales son escalables y las reglas desconocidas solo pueden ayudarte si tu pérdida está acotada. Maximizar la serendipia alrededor tuyo es dejar de creer que entiendes el futuro.",
        },
        {
          type: 'key',
          html: "Si no puedes predecir, diseña asimetría: mucha protección abajo y apertura convexa al upside.",
        },
        {
          type: 'paragraph',
          html: "Para aplicar esa asimetría hay que saber en qué mundo estadístico estamos.",
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
          html: "¿Cómo saber si el promedio describe la realidad? Taleb formaliza los dos mundos introducidos antes. En Mediocristán, ninguna observación individual altera demasiado el agregado. Alturas, calorías y pesos son ejemplos típicos.",
        },
        {
          type: 'paragraph',
          html: "En Extremistán, unos pocos dominan riqueza, fama, ventas o citas. El promedio deja de describir la realidad. Por eso el efecto Mateo («al que tiene, se le dará») concentra riqueza y fama. La <span class=\"term\">long tail</span> (cola larga de pocos gigantes) explica por qué la globalización ingenua exporta desigualdad extrema.",
        },
        {
          type: 'paragraph',
          html: "Confundir ambos mundos es la fuente principal de error analítico y político. La primera decisión metodológica correcta es identificar en cuál de los dos estamos antes de elegir herramientas estadísticas.",
        },
        {
          type: 'key',
          html: "La pregunta previa a cualquier análisis es si estamos en Mediocristán o en Extremistán.",
        },
        {
          type: 'paragraph',
          html: "El error más costoso es aplicar la campana de Gauss donde mandan colas gruesas.",
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
          html: "¿Por qué la campana gaussiana engaña en mercados y guerras? Taleb ataca el uso indiscriminado de la <span class=\"term\">distribución gaussiana</span> (curva de campana simétrica) en fenómenos de Extremistán. Subestima eventos raros y extremos, precisamente los que más importan.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Benoit Mandelbrot</span> (matemático de colas gruesas) y las leyes de potencia describen mejor desigualdades observadas. <span class=\"person\">Adolphe Quételet</span> (pionero de la estadística social) ilustró el error de buscar la normalidad donde no existe. Por eso la regla <span class=\"num\">80/20</span> es síntoma de Extremistán, no excepción.",
        },
        {
          type: 'paragraph',
          html: "El argumento no es abandonar las matemáticas, sino usar las adecuadas al dominio. Aplicar Gauss donde mandan colas gruesas es fragilidad institucional sistemática.",
        },
        {
          type: 'key',
          html: "Aplicar la campana de Gauss en Extremistán es ceguera al riesgo disfrazada de ciencia.",
        },
        {
          type: 'paragraph',
          html: "Mandelbrot ofrece una estética del azar más fiel que las curvas platónicas.",
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
          html: "¿Cómo representar el azar sin forzar simetrías falsas? <span class=\"person\">Benoit Mandelbrot</span> ofrece una estética del azar más fiel que las curvas suaves platónicas. La <span class=\"term\">fractalidad</span> (irregularidad que se repite a distintas escalas) captura mejor la rugosidad de la realidad.",
        },
        {
          type: 'paragraph',
          html: "Taleb distingue cisnes negros de <span class=\"term\">cisnes grises</span> (eventos extremos algo más previsibles, en la frontera entre mundos). La precisión excesiva en parámetros inestables empeora decisiones. En contextos complejos, rangos robustos superan exactitudes espurias.",
        },
        {
          type: 'paragraph',
          html: "Representar no es ser. Los modelos fractales son mapas, no territorio, pero al menos no pretenden que el azar sea una campana cómoda.",
        },
        {
          type: 'key',
          html: "Comprender el azar exige aceptar formas rugosas y escalables, no forzar simetrías que la realidad no tiene.",
        },
        {
          type: 'paragraph',
          html: "Usar campanas donde no corresponde tiene consecuencias sociales concretas, no solo teóricas.",
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
          html: "¿Qué pasa cuando políticas públicas usan el modelo equivocado? Aplicar modelos mediocristánicos donde manda Extremistán produce consecuencias graves. Taleb muestra cómo la obsesión por la normalidad estadística genera diagnósticos deficientes y métricas engañosas.",
        },
        {
          type: 'paragraph',
          html: "«Cualquiera puede ser presidente» suena democrático pero ignora Extremistán político. Los burócratas confirman sus modelos con datos seleccionados. Llaman «cisne negro» a lo que era previsible para quien miraba la estructura correcta.",
        },
        {
          type: 'paragraph',
          html: "Lo «científico» puede volverse ritual cuando no respeta la forma del fenómeno. La mala modelización no solo falla en teoría. Acumula costos en lo público y lo privado.",
        },
        {
          type: 'key',
          html: "Poner campanas de Gauss donde mandan colas gruesas no es abstracción inocua: produce políticas y métricas que acumulan fragilidad.",
        },
        {
          type: 'paragraph',
          html: "Detrás de esas métricas suele esconderse el farsante que proyecta certeza sin responsabilidad.",
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
          html: "¿Cómo reconocer al experto que no sabe pero habla como si supiera? Taleb critica al <span class=\"term\">farsante</span> (quien proyecta dominio técnico sin base predictiva sólida). La jerga, el formalismo y las retrospectivas autojustificatorias ocultan incapacidad real.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Karl Popper</span> (filósofo de la falsación) debería estar presente donde más se necesita y más se ignora. El problema no es la especialización, sino la falta de responsabilidad por el error y la desconexión entre teoría y práctica.",
        },
        {
          type: 'paragraph',
          html: "La defensa contra el falso experto es exigir exposición real a las consecuencias de sus consejos. También límites explícitos de conocimiento.",
        },
        {
          type: 'key',
          html: "En incertidumbre extrema, la mejor defensa contra el farsante es exigir skin in the game y humildad epistémica.",
        },
        {
          type: 'paragraph',
          html: "Tras desenmascarar al farsante, Taleb sintetiza la respuesta práctica frente al azar extremo.",
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
          html: "¿Cómo vivir cuando el azar manda más que los promedios? Taleb sintetiza una ética operativa en pares de «mitad y mitad». Es semiescepticismo donde otros confían y agresividad donde otros temen. Odia los cisnes negros negativos y ama los positivos.",
        },
        {
          type: 'paragraph',
          html: "La regla es simple. Hay que ser agresivo cuando un error del modelo puede beneficiarte y paranoico cuando puede destruirte. Por eso en finanzas la gente hace lo contrario con teorías endebles para gestionar riesgos.",
        },
        {
          type: 'paragraph',
          html: "«No corro por los trenes» resume la actitud. Perder un tren solo duele si corres tras él. La venganza contra el cisne negro no es dominarlo. Es dejar de ser su víctima mediante asimetría y opcionalidad.",
        },
        {
          type: 'key',
          html: "La estrategia correcta frente al azar extremo es asimétrica: máxima protección abajo y apertura convexa al upside.",
        },
        {
          type: 'paragraph',
          html: "El epílogo invierte la lógica del éxito con un cisne blanco literario.",
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
          html: "¿Puede lo muy esperado fallar con la misma fuerza que lo improbable? Taleb invierte la perspectiva con los <span class=\"term\">cisnes blancos</span> (eventos muy esperados que no ocurren). <span class=\"person\">Yevgenia Krasnova</span> publica <em>The Loop</em> tras ocho años de trabajo. Las críticas son excelentes, pero casi nadie compra.",
        },
        {
          type: 'paragraph',
          html: "La moraleja del capítulo 2 se subvierte. El éxito narrativo pasado no predice el siguiente. El público hablaba del libro sin leerlo. El cisne blanco es la obra maestra ignorada.",
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
  "La historia no avanza por promedios estables.",
  "Un puñado de eventos improbables con impacto extremo explica casi todo lo que importa.",
  "Nuestras mentes los convierten después en relatos «obvios».",
  "La racionalidad práctica no es adivinar el futuro, sino reconocer lo que ignoramos y actuar en consecuencia.",
  "Aceptar la opacidad del mundo es, para Taleb, la forma superior de inteligencia bajo incertidumbre radical."
],
    highlight: "No podemos predecir los cisnes negros, pero sí diseñar exposiciones asimétricas: máxima protección ante la ruina y apertura convexa a sorpresas favorables.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Nassim Nicholas Taleb",
    line2: "\"The Black Swan: The Impact of the Highly Improbable\" · Random House · 2007",
  },
}
