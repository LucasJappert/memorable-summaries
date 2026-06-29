import type { BookSummary } from '../types/book'

export const blackSwan: BookSummary = {
  slug: "black-swan",
  meta: {
    title: "The Black Swan: The Impact of the Highly Improbable",
    subtitle: "Cómo los eventos raros e imprevisibles gobiernan la historia, los mercados y la vida",
    author: "Nassim Nicholas Taleb",
    meta: [
      "📖 2007 · Random House",
      "✍️ Ensayo sobre incertidumbre radical, sesgos cognitivos y gestión de riesgo",
    ],
    titleEs: "El cisne negro",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Prologue: el triplete del cisne negro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Taleb define un <span class=\"term\">Cisne Negro</span> por tres rasgos: <span class=\"term\">rareza</span>, <span class=\"term\">impacto extremo</span> y <span class=\"term\">predictibilidad retrospectiva</span>. El evento parece imposible antes de ocurrir, pero luego se vuelve \"obvio\" en los relatos de expertos y medios.",
        },
        {
          type: 'paragraph',
          html: "La tesis central es que el mundo social e histórico no lo dominan variaciones pequeñas, sino saltos discontinuos que no caben en modelos normales. En contextos donde importa lo que no sabemos, la confianza en pronósticos lineales crea una falsa sensación de control.",
        },
        {
          type: 'key',
          html: "Vivimos en un universo donde unos pocos eventos improbables explican gran parte de los resultados, y los relatos posteriores ocultan esa incertidumbre radical.",
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
          html: "Taleb combina autobiografía intelectual e historia para mostrar que la experiencia no enseña automáticamente a pensar bien sobre el azar. En dominios de alta incertidumbre, los agentes confunden supervivencia con habilidad y convierten coincidencias en causalidades.",
        },
        {
          type: 'paragraph',
          html: "Presenta la <span class=\"term\">opacidad histórica</span>: vemos secuencias narradas, no procesos reales con bifurcaciones posibles. La historia parece continua cuando se la mira hacia atrás, pero en tiempo real avanza con rupturas.",
        },
        {
          type: 'key',
          html: "El principal aprendizaje escéptico es desconfiar de explicaciones elegantes sobre procesos que, en realidad, estuvieron gobernados por el azar.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Yevgenia y su cisne negro",
      blocks: [
        {
          type: 'paragraph',
          html: "Este capítulo usa la anécdota de <span class=\"person\">Yevgenia</span> para mostrar la asimetría entre lo que esperamos y lo que sucede. Un solo hallazgo inesperado derriba sistemas completos de creencias sostenidas por años de evidencia confirmatoria.",
        },
        {
          type: 'paragraph',
          html: "Taleb insiste en que las creencias generalizadas suelen estar construidas sobre muestras incompletas y sesgadas. La fragilidad no está en un dato aislado, sino en el exceso de confianza con que lo convertimos en ley.",
        },
        {
          type: 'key',
          html: "Una sola observación fuera de patrón puede invalidar un edificio entero de certidumbres.",
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
          html: "Taleb contrasta profesiones con ingresos <span class=\"term\">escalables</span> y no escalables para introducir la diferencia entre <span class=\"term\">Mediocristán</span> y <span class=\"term\">Extremistán</span>. En lo no escalable, el rendimiento se distribuye de forma relativamente acotada; en lo escalable, unos pocos concentran resultados desproporcionados.",
        },
        {
          type: 'paragraph',
          html: "La globalización amplifica esta dinámica porque permite que una sola obra, idea o producto capture mercados enteros. En esos entornos, el ganador se lleva una parte enorme del total y el promedio deja de describir la realidad.",
        },
        {
          type: 'key',
          html: "Cuando la escalabilidad domina, pequeñas ventajas iniciales pueden transformarse en diferencias gigantescas de resultado.",
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
          html: "El ejemplo del <span class=\"term\">pavo</span> resume la trampa inductiva: una larga serie de días favorables aumenta la confianza justo antes del desastre. La ausencia de eventos negativos no prueba seguridad; puede ser solo acumulación de riesgo invisible.",
        },
        {
          type: 'paragraph',
          html: "Taleb recorre tradiciones escépticas para mostrar que el problema no es nuevo, pero sí sistemáticamente ignorado. El conocimiento práctico exige imaginar rupturas, no extrapolar tranquilidad pasada.",
        },
        {
          type: 'key',
          html: "La evidencia repetida de estabilidad puede ser precisamente lo que nos vuelve más vulnerables al quiebre.",
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
          html: "El autor explica cómo opera el <span class=\"term\">sesgo de confirmación</span>: buscamos datos que validen hipótesis previas y descartamos contraejemplos. Ese mecanismo fortalece teorías débiles y vuelve lenta la corrección de errores.",
        },
        {
          type: 'paragraph',
          html: "Propone una forma de empirismo <span class=\"term\">negativo</span>: avanzar por refutación más que por confirmación. En sistemas complejos, una sola excepción significativa informa más que cientos de casos rutinarios.",
        },
        {
          type: 'key',
          html: "Para pensar mejor bajo incertidumbre, vale más identificar lo que puede falsear una idea que acumular pruebas favorables.",
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
          html: "La mente humana necesita historias coherentes; por eso simplifica cadenas causales y rellena huecos con relatos plausibles. Taleb llama a esto <span class=\"term\">falacia narrativa</span>: convertir ruido y contingencia en guiones con sentido.",
        },
        {
          type: 'paragraph',
          html: "Esa tendencia produce <span class=\"term\">ceguera al cisne negro</span>, porque prestamos atención a lo vívido y reciente, no a riesgos extremos fuera del foco. Cuanto más convincente suena una historia, más fácil es sobreestimar nuestro entendimiento.",
        },
        {
          type: 'key',
          html: "La claridad narrativa no es evidencia de verdad; muchas veces es solo compresión psicológica de la complejidad.",
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
          html: "Taleb describe contextos de recompensas desiguales, donde largos periodos de espera sostienen la ilusión de un gran resultado futuro. Esa <span class=\"term\">antesala de esperanza</span> mantiene a muchos agentes en estrategias frágiles por miedo a abandonar \"justo antes\" del éxito.",
        },
        {
          type: 'paragraph',
          html: "La evaluación por resultados visibles de corto plazo oculta procesos que acumulan riesgos de cola. Por eso insiste en distinguir entre calidad del proceso y resultado puntual.",
        },
        {
          type: 'key',
          html: "No todo resultado bueno valida una estrategia; en entornos no lineales, también puede ser azar favorable temporal.",
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
          html: "Aquí aparece la <span class=\"term\">evidencia silenciosa</span>: juzgamos fenómenos por los casos visibles (supervivientes) y olvidamos los invisibles (fracasos). Historias de éxito sin base de comparación producen reglas engañosas de imitación.",
        },
        {
          type: 'paragraph',
          html: "Taleb muestra que gran parte del conocimiento práctico debería partir de lo que no observamos directamente. En selección natural, mercados y cultura, la ausencia de los perdedores sesga cualquier inferencia.",
        },
        {
          type: 'key',
          html: "Lo que falta en la muestra puede ser más informativo que lo que vemos en primer plano.",
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
          html: "La <span class=\"term\">falacia lúdica</span> consiste en modelar la incertidumbre real como si fuera un juego de reglas cerradas y probabilidades conocidas. Taleb critica trasladar a la vida social herramientas diseñadas para casinos o experimentos controlados.",
        },
        {
          type: 'paragraph',
          html: "En el mundo real, las reglas cambian, los eventos extremos dominan y las distribuciones no son estables. Confundir riesgo mensurable con incertidumbre abierta genera decisiones técnicamente sofisticadas pero frágiles.",
        },
        {
          type: 'key',
          html: "No todo lo incierto es calculable; tratar lo incalculable como juego probabilístico es un error estructural.",
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
          html: "Taleb cuestiona la autoridad de expertos en dominios donde los resultados dependen de shocks improbables. En esos campos, pronósticos detallados suelen fallar de forma sistemática, pero el prestigio del experto sobrevive mediante explicaciones post hoc.",
        },
        {
          type: 'paragraph',
          html: "También señala que más información no siempre mejora comprensión: puede aumentar ruido, sobreajuste y confianza injustificada. La ilusión de precisión estadística reemplaza el reconocimiento de límites epistémicos.",
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
          html: "El capítulo propone una actitud práctica: en vez de predecir eventos concretos, diseñar estrategias que se beneficien de la sorpresa positiva y limiten la negativa. Buscar \"excremento de pájaro\" es buscar oportunidades inesperadas con asimetría favorable.",
        },
        {
          type: 'paragraph',
          html: "Taleb distingue entre descubrimiento planificado y <span class=\"term\">serendipia</span>. Muchas innovaciones relevantes emergen cuando se explora con opciones abiertas y bajo costo de error.",
        },
        {
          type: 'key',
          html: "La robustez práctica no exige adivinar el futuro, sino construir exposición inteligente a sorpresas favorables.",
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
          html: "Taleb imagina una <span class=\"term\">epistemocracia</span>: un orden social que premia la humildad epistemológica y penaliza la sobreconfianza experta. El foco no es quién sabe más, sino quién reconoce mejor lo que ignora.",
        },
        {
          type: 'paragraph',
          html: "Recupera una tradición escéptica asociada a <span class=\"person\">Montaigne</span> y otros autores para oponerla al dogmatismo tecnocrático. En incertidumbre extrema, una sociedad prudente debería preferir márgenes de seguridad a narrativas cerradas.",
        },
        {
          type: 'key',
          html: "Gobernar bien bajo incertidumbre requiere instituciones que incorporen duda, no que la oculten.",
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
          html: "Ante la imposibilidad de predecir cisnes negros, Taleb propone reglas de acción. La más conocida es la <span class=\"term\">estrategia de barra</span>: combinar una zona muy segura con una pequeña exposición altamente especulativa y convexa.",
        },
        {
          type: 'paragraph',
          html: "La lógica es evitar ruina y, al mismo tiempo, conservar opción de ganancias desproporcionadas. En vez de apostar por escenarios medios, conviene prepararse para extremos.",
        },
        {
          type: 'key',
          html: "Si la predicción falla en los extremos, la estrategia debe diseñarse para sobrevivir a ellos y capturar su lado favorable.",
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
          html: "Taleb formaliza dos dominios. En <span class=\"term\">Mediocristán</span>, ninguna observación individual domina el total; en <span class=\"term\">Extremistán</span>, pocos casos explican una gran parte del agregado.",
        },
        {
          type: 'paragraph',
          html: "Confundir ambos mundos es fuente principal de error analítico y político. Herramientas útiles en variables físicas estables fallan cuando se aplican a riqueza, fama, ventas o retornos financieros globales.",
        },
        {
          type: 'key',
          html: "La primera decisión metodológica correcta es identificar en qué tipo de mundo estadístico estamos.",
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
          html: "El autor critica el uso indiscriminado de la <span class=\"term\">distribución gaussiana</span> en fenómenos de cola gruesa. En Extremistán, la campana subestima eventos raros y extremos, precisamente los que más importan.",
        },
        {
          type: 'paragraph',
          html: "Introduce el enfoque <span class=\"term\">mandelbrotiano</span> y leyes de potencia para describir mejor desigualdades y concentraciones observadas. Su argumento no es eliminar matemáticas, sino usar las adecuadas al dominio.",
        },
        {
          type: 'key',
          html: "Aplicar Gauss donde mandan colas gruesas no es un error menor: es una forma sistemática de ceguera al riesgo real.",
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
          html: "Taleb recurre a <span class=\"person\">Mandelbrot</span> y a la <span class=\"term\">fractalidad</span> para mostrar patrones de irregularidad que conservan estructura a distintas escalas. Esa geometría ofrece una intuición más realista del desorden que los modelos suavizados.",
        },
        {
          type: 'paragraph',
          html: "La búsqueda de precisión excesiva en parámetros inestables puede empeorar decisiones. En contextos complejos, preferir rangos robustos es más útil que exactitudes espurias.",
        },
        {
          type: 'key',
          html: "Comprender el azar exige aceptar formas rugosas y escalables, no forzar simetrías cómodas.",
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
          html: "Este capítulo muestra consecuencias sociales de aplicar modelos equivocados: se normalizan diagnósticos deficientes, políticas frágiles y métricas engañosas. Lo \"científico\" puede volverse ritual cuando no respeta la estructura del fenómeno.",
        },
        {
          type: 'paragraph',
          html: "Taleb insiste en distinguir señal de artefacto metodológico. Muchas regularidades son producto del instrumento estadístico, no de la realidad observada.",
        },
        {
          type: 'key',
          html: "La mala modelización no solo falla en teoría: produce decisiones públicas y privadas con costos acumulativos altos.",
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
          html: "Taleb critica al experto que proyecta dominio técnico en ámbitos donde no hay base predictiva sólida. Ese <span class=\"term\">farsante</span> suele ocultarse tras jerga, formalismo y retrospectivas autojustificatorias.",
        },
        {
          type: 'paragraph',
          html: "El problema no es la especialización, sino la falta de responsabilidad por error y la desconexión entre teoría y práctica. Para reducir daño, propone evaluar credenciales por desempeño en decisiones reales, no solo por discurso.",
        },
        {
          type: 'key',
          html: "En incertidumbre extrema, la mejor defensa contra el falso experto es exigir skin in the game y límites explícitos de conocimiento.",
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
          html: "En la parte final, Taleb sintetiza una ética operativa: evitar ruina, reducir fragilidad y preservar opcionalidad. La venganza contra el cisne negro no es dominarlo, sino dejar de ser su víctima sistemática.",
        },
        {
          type: 'paragraph',
          html: "La combinación de prudencia extrema en una parte del portafolio y exposición selectiva a convexidad en otra permite convivir con la incertidumbre sin depender de pronósticos finos.",
        },
        {
          type: 'key',
          html: "La estrategia correcta frente al azar extremo es asimétrica: mucha protección abajo y apertura acotada al upside.",
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
          html: "En el epílogo, Taleb invierte la perspectiva y discute eventos muy esperados que no ocurren, una forma simétrica del problema del cisne negro. También responde objeciones y aclara malentendidos sobre su propuesta.",
        },
        {
          type: 'paragraph',
          html: "El cierre enfatiza que la meta no es eliminar incertidumbre, sino abandonar modelos ingenuos y prácticas de gestión que la empeoran. Pensar en extremos sigue siendo la condición para decisiones menos frágiles.",
        },
        {
          type: 'key',
          html: "Tanto lo inesperado que ocurre como lo esperado que no ocurre revelan los límites de nuestra capacidad predictiva.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Cisne negro",
    "description": "Evento raro, de impacto extremo y explicado solo retrospectivamente."
  },
  {
    "title": "Mediocristán",
    "description": "Dominio donde los extremos individuales no alteran demasiado el total."
  },
  {
    "title": "Extremistán",
    "description": "Dominio donde unos pocos casos concentran gran parte de los resultados."
  },
  {
    "title": "Falacia narrativa",
    "description": "Tendencia a crear relatos causales coherentes sobre procesos azarosos."
  },
  {
    "title": "Evidencia silenciosa",
    "description": "Sesgo por observar solo supervivientes y omitir fracasos invisibles."
  },
  {
    "title": "Falacia lúdica",
    "description": "Error de tratar incertidumbre abierta como juego cerrado con probabilidades conocidas."
  },
  {
    "title": "Sesgo de confirmación",
    "description": "Preferencia por datos que validan creencias previas, ignorando refutaciones."
  },
  {
    "title": "Fraude gaussiano",
    "description": "Uso impropio de curva normal para fenómenos con colas gruesas."
  },
  {
    "title": "Estrategia de barra",
    "description": "Combinación de máxima seguridad y pequeña exposición convexa a extremos favorables."
  },
  {
    "title": "Epistemocracia",
    "description": "Ideal institucional basado en humildad epistemológica y control de sobreconfianza experta."
  },
  {
    "title": "Escalabilidad",
    "description": "Capacidad de multiplicar resultados sin aumentar proporcionalmente esfuerzo o costos."
  }
],
  chronology: [
  {
    "year": "1697",
    "text": "Expedición de Willem de Vlamingh en Australia registra cisnes negros y desarma una certeza europea."
  },
  {
    "year": "1748",
    "text": "David Hume publica su crítica de la inducción, antecedente filosófico del problema."
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
    "text": "Atentados del 11 de septiembre, ejemplo de evento de alto impacto subestimado ex ante."
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
    "role": "Autor; ensayista sobre incertidumbre, riesgo y fragilidad en sistemas complejos."
  },
  {
    "name": "Yevgenia Krasnova",
    "role": "Personaje narrativo usado para mostrar imprevisibilidad y sesgos retrospectivos."
  },
  {
    "name": "Benoit Mandelbrot",
    "role": "Matemático de la geometría fractal; referencia para modelar colas gruesas."
  },
  {
    "name": "David Hume",
    "role": "Filósofo escéptico sobre la inducción y la causalidad en la experiencia."
  },
  {
    "name": "Karl Popper",
    "role": "Filósofo de la falsación; inspira el énfasis en refutar más que confirmar."
  },
  {
    "name": "Michel de Montaigne",
    "role": "Ensayista escéptico citado como modelo de modestia epistemológica."
  },
  {
    "name": "Fat Tony",
    "role": "Figura conceptual de la intuición práctica frente al modelador excesivamente formal."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La historia no está gobernada por promedios estables, sino por discontinuidades improbables de gran impacto.",
  "Nuestra mente y nuestras instituciones sobrevaloran lo predecible porque prefieren relatos simples a incertidumbre radical.",
  "La tarea no es adivinar el próximo shock, sino construir asimetrías favorables y evitar la ruina.",
  "Pensar en extremos corrige el exceso de confianza de expertos y modelos.",
  "Aceptar lo que ignoramos es, para Taleb, una forma superior de racionalidad práctica."
],
    highlight: "No podemos predecir bien los cisnes negros, pero sí podemos diseñar vidas, organizaciones y carteras menos frágiles a ellos.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Nassim Nicholas Taleb",
    line2: "\"The Black Swan: The Impact of the Highly Improbable\" · Random House · 2007",
  },
}
