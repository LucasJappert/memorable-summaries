import type { BookSummary } from '../types/book'

export const godelEscherBach: BookSummary = {
  slug: "godel-escher-bach",
  meta: {
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    subtitle: "¿Cómo puede surgir un «yo» con sentido de reglas sin sentido?",
    author: "Douglas R. Hofstadter",
    meta: [
      "📖 1979 · Basic Books · Pulitzer 1980",
      "✍️ Ciencia cognitiva · La metáfora del bucle extraño",
    ],
    titleEs: "Gödel, Escher, Bach: Un eterno y grácil bucle",
  },
  toc: [
  {
    "id": "cierre",
    "num": "★",
    "label": "La idea central"
  },
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción: una ofrenda músico-lógica"
  },
  {
    "id": "cap1",
    "num": "I",
    "label": "El acertijo MU"
  },
  {
    "id": "cap2",
    "num": "II",
    "label": "Significado y forma en matemáticas"
  },
  {
    "id": "cap3",
    "num": "III",
    "label": "Figura y fondo"
  },
  {
    "id": "cap4",
    "num": "IV",
    "label": "Consistencia, completitud y geometría"
  },
  {
    "id": "cap5",
    "num": "V",
    "label": "Estructuras y procesos recursivos"
  },
  {
    "id": "cap6",
    "num": "VI",
    "label": "La ubicación del significado"
  },
  {
    "id": "cap7",
    "num": "VII",
    "label": "El cálculo proposicional"
  },
  {
    "id": "cap8",
    "num": "VIII",
    "label": "Teoría tipográfica de números (TNT)"
  },
  {
    "id": "cap9",
    "num": "IX",
    "label": "Mumon y Gödel"
  },
  {
    "id": "cap10",
    "num": "Preludio",
    "label": "Holismo, reduccionismo y la hormiga"
  },
  {
    "id": "cap11",
    "num": "X",
    "label": "Niveles de descripción y sistemas informáticos"
  },
  {
    "id": "cap12",
    "num": "XI",
    "label": "Cerebros y pensamientos"
  },
  {
    "id": "cap13",
    "num": "XII",
    "label": "Mentes y pensamientos"
  },
  {
    "id": "cap14",
    "num": "XIII",
    "label": "BlooP, FlooP y GlooP"
  },
  {
    "id": "cap15",
    "num": "XIV",
    "label": "Proposiciones formalmente indemostrables"
  },
  {
    "id": "cap16",
    "num": "XV",
    "label": "Saltar fuera del sistema"
  },
  {
    "id": "cap17",
    "num": "XVI",
    "label": "Autoref y autorrep"
  },
  {
    "id": "cap18",
    "num": "XVII",
    "label": "Church, Turing, Tarski y otros"
  },
  {
    "id": "cap19",
    "num": "XVIII",
    "label": "Inteligencia artificial: retrospectiva"
  },
  {
    "id": "cap20",
    "num": "XIX",
    "label": "Inteligencia artificial: perspectivas"
  },
  {
    "id": "cap21",
    "num": "XX",
    "label": "Bucles extraños o jerarquías enredadas"
  },
  {
    "id": "conceptos",
    "num": "✦",
    "label": "Conceptos clave"
  },
  {
    "id": "cronologia",
    "num": "◈",
    "label": "Cronología de hitos citados"
  },
  {
    "id": "figuras",
    "num": "✦",
    "label": "Figuras clave"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "Introducción: una ofrenda músico-lógica",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo puede surgir un «yo» con sentido dentro de un mundo hecho de materia y reglas mecánicas? El autor, el científico cognitivo <span class=\"person\">Douglas R. Hofstadter</span>, abre con una anécdota real. En <span class=\"num\">1747</span>, <span class=\"person\">Johann Sebastian Bach</span> visitó al rey prusiano Federico el Grande. Improvisó sobre un tema que le propuso el monarca. De ahí nació la <span class=\"term\">Ofrenda musical</span> (<em>Musikalisches Opfer</em>), obra sobre la que Hofstadter «improvisa» todo el libro.",
        },
        {
          type: 'paragraph',
          html: "Su apuesta es que la respuesta ya está insinuada en un patrón común a tres genios. Bach juega con niveles en sus fugas. Escher dibuja jerarquías que se muerden la cola. Gödel demuestra que la aritmética puede hablar de sí misma. Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span>, con el Cangrejo y el Hormiguero, no son adorno. Cada diálogo imita una forma musical y encarna en su estructura la idea del capítulo siguiente.",
        },
        {
          type: 'paragraph',
          html: "Por eso Hofstadter prepara al lector recorriendo la historia de la lógica y las paradojas de autorreferencia. Llega al debate sobre si una máquina podría pensar, y ese recorrido muestra el mismo truco en la música, el arte y las demostraciones matemáticas.",
        },
        {
          type: 'key',
          html: "Bach, Escher y Gödel comparten un mismo truco de <span class=\"key-term\">autorreferencia</span> entre niveles, y ahí se esconde cómo puede surgir la mente.",
        },
        {
          type: 'paragraph',
          html: "El primer ejemplo concreto es un juego de letras tan simple que parece un acertijo infantil.",
        },
      ],
    },
    {
      id: "cap1",
      num: "I",
      title: "El acertijo MU",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se puede obtener la cadena MU aplicando reglas mecánicas? Hofstadter presenta el <span class=\"term\">sistema MIU</span> (un juego formal con las letras M, I y U). Se parte del axioma MI y se aplican reglas de producción que alargan o acortan cadenas. El reto es sencillo de enunciar y difícil de cerrar.",
        },
        {
          type: 'paragraph',
          html: "Sin embargo, por más reglas que uno aplique desde dentro, MU no aparece nunca. La razón solo se ve al salir del juego y observar una propiedad invariante que ninguna regla altera. Por eso la distinción entre trabajar ciegamente dentro del sistema y comprenderlo desde fuera es la lección central.",
        },
        {
          type: 'paragraph',
          html: "A partir de este ejemplo mínimo, el autor introduce el vocabulario que usará todo el libro. Aparecen cadenas, axiomas, reglas de inferencia, derivaciones y teoremas. Una máquina puede generar teoremas sin entenderlos. La inteligencia detecta el patrón que los gobierna.",
        },
        {
          type: 'key',
          html: "El significado no vive dentro de las reglas, sino en la mirada que observa el sistema <span class=\"key-term\">desde fuera</span>.",
        },
        {
          type: 'paragraph',
          html: "Si el significado no está en las reglas, ¿de dónde sale cuando los símbolos parecen marcas vacías?",
        },
      ],
    },
    {
      id: "cap2",
      num: "II",
      title: "Significado y forma en matemáticas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Pueden unos signos sin sentido aparente reflejar verdades numéricas? El <span class=\"term\">sistema pq</span> (un formalismo aún más simple que el MIU) usa símbolos que, a primera vista, parecen marcas arbitrarias. La sorpresa llega cuando se revela que cada teorema tiene una forma que refleja una suma verdadera.",
        },
        {
          type: 'paragraph',
          html: "La cadena «xpyqz» resulta verdadera exactamente cuando x más y es igual a z. Ese descubrimiento es la primera intuición profunda del libro sobre el significado. Los símbolos no significan porque alguien lo decrete. Significan porque su forma es <span class=\"term\">isomorfa</span> (estructuralmente equivalente) a algo del mundo real.",
        },
        {
          type: 'key',
          html: "Sin un <span class=\"key-term\">isomorfismo</span> que refleje hechos reales, los símbolos de un sistema formal serían marcas vacías.",
        },
        {
          type: 'paragraph',
          html: "Esa distinción entre lo destacado y lo omitido prepara el siguiente paso: figura y fondo en la lógica.",
        },
      ],
    },
    {
      id: "cap3",
      num: "III",
      title: "Figura y fondo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Contiene la figura la misma información que su fondo? Hofstadter traslada al terreno lógico la distinción que en arte separa la <span class=\"term\">figura</span> (lo que destaca) del <span class=\"term\">fondo</span> (lo que queda en segundo plano). Los teoremas de un sistema son la figura y los no-teoremas son el fondo.",
        },
        {
          type: 'paragraph',
          html: "La respuesta obliga a distinguir dos tipos de conjuntos. Un conjunto <span class=\"term\">recursivamente enumerable</span> (generable con reglas finitas paso a paso) puede producirse mecánicamente. Su complemento no siempre es también generable. Existen fondos que ninguna regla puede dibujar a partir de la figura.",
        },
        {
          type: 'key',
          html: "Lo omitido puede ser tan informativo como lo destacado, y a veces ninguna regla logra reconstruirlo.",
        },
        {
          type: 'paragraph',
          html: "Esa idea de múltiples lecturas posibles conecta con un capítulo sobre geometría y sistemas formales.",
        },
      ],
    },
    {
      id: "cap4",
      num: "IV",
      title: "Consistencia, completitud y geometría",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un mismo conjunto de axiomas admitir interpretaciones distintas sin contradecirse? La historia de la geometría lo ilustra. Durante siglos se intentó demostrar el <span class=\"term\">quinto postulado</span> (el postulado de las paralelas) de Euclides. Cuando se lo negó, no surgió una contradicción sino otra geometría igualmente consistente.",
        },
        {
          type: 'paragraph',
          html: "De ahí Hofstadter extrae dos ideas decisivas. Los <span class=\"term\">términos indefinidos</span> (como «punto» o «línea») reciben su sentido del modelo que se elija, no de una verdad absoluta. Además, consistencia y completitud son propiedades distintas. Un sistema puede no contradecirse y aun así ser incapaz de decidir todas sus afirmaciones.",
        },
        {
          type: 'key',
          html: "Varias interpretaciones pueden ser consistentes a la vez, así que ningún sistema formal es el único verdadero.",
        },
        {
          type: 'paragraph',
          html: "El mismo patrón de anidamiento aparece en la música, el lenguaje y los programas: la recursión.",
        },
      ],
    },
    {
      id: "cap5",
      num: "V",
      title: "Estructuras y procesos recursivos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la misma estructura se repite dentro de sí misma en tantos dominios? La <span class=\"term\">recursión</span> (definir algo en términos de versiones más pequeñas de sí mismo) es el patrón de las estructuras que se anidan. Hofstadter la rastrea en la música, el lenguaje, la geometría, la física y los programas de computadora.",
        },
        {
          type: 'paragraph',
          html: "El ejemplo del Little Harmonic Labyrinth encadena historias dentro de historias que nunca se cierran del todo. Ese esquema aparece en gramáticas que encajan frases dentro de frases y en funciones definidas en términos de sí mismas. La recursión puede terminar, y por eso no es lo mismo que una regresión infinita paralizante.",
        },
        {
          type: 'key',
          html: "Un mismo esquema puede contenerse dentro de sí mismo, como una fuga que suena dentro de otra fuga.",
        },
        {
          type: 'paragraph',
          html: "Si la forma se repite en tantos niveles, queda preguntarse dónde vive el significado de un mensaje.",
        },
      ],
    },
    {
      id: "cap6",
      num: "VI",
      title: "La ubicación del significado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Dónde reside el significado de un mensaje? Hofstadter sostiene que se reparte entre tres piezas: el mensaje codificado, el decodificador y el receptor que lo interpreta. Ningún fragmento por sí solo garantiza el sentido.",
        },
        {
          type: 'paragraph',
          html: "Sus ejemplos van de las hebras de <span class=\"term\">ADN</span> (el ácido desoxirribonucleico que codifica instrucciones genéticas) a inscripciones antiguas sin descifrar. También incluye discos lanzados al espacio para eventuales inteligencias. En todos, un mensaje solo significa si existe un mecanismo capaz de leerlo. Aun así, un mensaje muy estructurado puede llevar pistas para ser decodificado.",
        },
        {
          type: 'key',
          html: "El sentido no está solo en el símbolo ni solo en quien lo lee, sino en la relación entre mensaje y decodificador.",
        },
        {
          type: 'paragraph',
          html: "Antes de llegar a la aritmética, Hofstadter muestra que la lógica más simple ya puede formalizarse con reglas tipográficas.",
        },
      ],
    },
    {
      id: "cap7",
      num: "VII",
      title: "El cálculo proposicional",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Pueden palabras lógicas como «y», «o» y «no» gobernarse con reglas puramente tipográficas? Hofstadter construye un pequeño sistema cuyos teoremas coinciden con las verdades de la lógica proposicional. Otra vez el significado aparece de forma automática por isomorfismo.",
        },
        {
          type: 'paragraph',
          html: "El autor toma sus ejemplos de los koans zen y los llama «Zentences», medio en broma. La elección es deliberadamente irónica: los koans buscan burlar la lógica mientras el sistema los trata como fórmulas. Por eso el contraste anticipa que la lógica formal todavía es demasiado débil para la aritmética.",
        },
        {
          type: 'key',
          html: "Reglas puramente formales bastan para reproducir la lógica, aunque todavía no alcanzan para los números.",
        },
        {
          type: 'paragraph',
          html: "El siguiente paso es extender ese formalismo hasta cubrir toda la aritmética elemental.",
        },
      ],
    },
    {
      id: "cap8",
      num: "VIII",
      title: "Teoría tipográfica de números (TNT)",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se puede tratar la aritmética como manipulación mecánica de signos? La <span class=\"term\">TNT</span> (Teoría Tipográfica de Números) extiende el cálculo proposicional para tratar toda la aritmética elemental. Añade cuantificadores y símbolos numéricos. Enunciados como la conmutatividad de la suma se escriben y derivan como cadenas de signos.",
        },
        {
          type: 'paragraph',
          html: "El objetivo de Hofstadter es doble. Primero demuestra que la aritmética puede formalizarse sin apelar a intuición sobre qué «son» los números. Después contrasta ese proceso rígido con el pensamiento humano, que salta, ve patrones y no procede paso a paso como el sistema. Por eso TNT prepara el terreno para Gödel.",
        },
        {
          type: 'key',
          html: "TNT convierte la aritmética en tipografía, y así prepara el sistema sobre el que caerá el teorema de Gödel.",
        },
        {
          type: 'paragraph',
          html: "Antes del golpe lógico definitivo, Hofstadter hace un rodeo por el zen y la numeración gödeliana.",
        },
      ],
    },
    {
      id: "cap9",
      num: "IX",
      title: "Mumon y Gödel",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué tienen que ver los koans zen con los límites de la matemática? Hofstadter da un rodeo por el zen. Los koans del monje <span class=\"person\">Mumon</span> intentan cortocircuitar el pensamiento dualista y mostrar los límites del lenguaje para atrapar la verdad. Esa actitud rima, de forma metafórica, con la filosofía de la matemática.",
        },
        {
          type: 'paragraph',
          html: "Sobre ese fondo introduce la idea decisiva de Gödel. La <span class=\"term\">numeración de Gödel</span> (codificar cada cadena y cada demostración como un número único) permite que la aritmética hable de sí misma. Con esa herramienta el autor hace un primer recorrido por el teorema de incompletitud, y de ahí que este capítulo sea la bisagra del libro.",
        },
        {
          type: 'key',
          html: "Codificar enunciados como números permite que la aritmética se refiera a sí misma, la puerta de entrada a Gödel.",
        },
        {
          type: 'paragraph',
          html: "Esas ideas sobre niveles y totalidades preparan el debate entre reduccionismo y holismo.",
        },
      ],
    },
    {
      id: "cap10",
      num: "Preludio",
      title: "Holismo, reduccionismo y la hormiga",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se oye una fuga como suma de voces separadas o como un todo indivisible? El diálogo del Preludio y la Fuga de la hormiga plantea esa pregunta. Abre el debate entre <span class=\"term\">reduccionismo</span> (explicar un fenómeno descomponiéndolo en partes) y <span class=\"term\">holismo</span> (entenderlo como un todo irreducible).",
        },
        {
          type: 'paragraph',
          html: "La respuesta llega con <span class=\"person\">Aunt Hillary</span>, una colonia de hormigas que conversa como si fuera una mente. Ninguna hormiga individual piensa. Su «pensamiento» vive en el nivel de la colonia y se apoya en niveles intermedios, desde la hormiga suelta hasta los equipos y las señales. Por eso entender ese sistema exige combinar la mirada de las partes con la del todo.",
        },
        {
          type: 'key',
          html: "Una mente puede emerger de piezas que, por separado, no piensan, si se leen en el nivel adecuado.",
        },
        {
          type: 'paragraph',
          html: "Esa idea de niveles se generaliza después a computadoras, imágenes y el propio cerebro.",
        },
      ],
    },
    {
      id: "cap11",
      num: "X",
      title: "Niveles de descripción y sistemas informáticos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Existe un solo nivel «verdadero» para describir la realidad? Hofstadter defiende que una misma realidad se describe en muchos niveles simultáneos, cada uno con su vocabulario. En una computadora conviven el lenguaje de máquina, el ensamblador, el compilador y el sistema operativo.",
        },
        {
          type: 'paragraph',
          html: "Cada capa habla de lo mismo con distinto grado de detalle. La idea se generaliza a imágenes, tableros de ajedrez, equipos deportivos, átomos y el clima. Por eso ningún nivel tiene el monopolio: los niveles altos pueden ser causalmente reales aunque se apoyen en los bajos.",
        },
        {
          type: 'key',
          html: "Cada nivel describe la misma realidad con un lenguaje propio, y ninguno es el único legítimo.",
        },
        {
          type: 'paragraph',
          html: "Si los niveles importan, hay que preguntarse en cuál viven los pensamientos dentro del cerebro.",
        },
      ],
    },
    {
      id: "cap12",
      num: "XI",
      title: "Cerebros y pensamientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo el hardware neuronal puede sostener algo tan escurridizo como un pensamiento? Hofstadter repasa la estructura del cerebro en su escala grande y pequeña. Luego busca el nivel en el que viven los conceptos.",
        },
        {
          type: 'paragraph',
          html: "Su hipótesis especulativa es que un concepto no corresponde a una neurona suelta. Corresponde a un <span class=\"term\">símbolo activo</span> (un patrón de muchas neuronas que se enciende y puede disparar a otros símbolos). Así, el pensamiento habitaría un nivel de descripción distinto del de las células. La relación exacta entre concepto y actividad neural queda planteada como conjetura, no como hecho probado.",
        },
        {
          type: 'key',
          html: "Los pensamientos se apoyan en neuronas pero viven en el nivel de los símbolos, no en células aisladas.",
        },
        {
          type: 'paragraph',
          html: "Si los símbolos pueden traducirse entre lenguajes, ¿se pueden mapear también entre mentes distintas?",
        },
      ],
    },
    {
      id: "cap13",
      num: "XII",
      title: "Mentes y pensamientos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué se conserva al traducir un poema a otro idioma? Las tres versiones de <span class=\"term\">Jabberwocky</span> (el poema nonsense de Lewis Carroll), en inglés, francés y alemán, sirven de experimento. Muestran que la forma lingüística y el contenido mental pueden separarse y volver a encarnarse en otro idioma.",
        },
        {
          type: 'paragraph',
          html: "Traducir el poema obliga a preguntarse qué se conserva y qué se pierde. De ahí surge la cuestión de si distintas mentes o lenguajes pueden mapearse unos sobre otros. Hofstadter propone una analogía geográfica en la que dos cerebros se solapan de forma parcial, nunca perfecta. Queda abierto si un cerebro puede entenderse de manera objetiva desde fuera.",
        },
        {
          type: 'key',
          html: "Mentes y lenguajes se pueden mapear de forma aproximada porque comparten una estructura profunda, no idéntica.",
        },
        {
          type: 'paragraph',
          html: "Para fijar los límites de lo mecánico, Hofstadter inventa lenguajes de programación didácticos.",
        },
      ],
    },
    {
      id: "cap14",
      num: "XIII",
      title: "BlooP, FlooP y GlooP",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué cálculos pueden garantizar terminar y cuáles no? Hofstadter inventa tres lenguajes para separar tipos de cálculo. <span class=\"term\">BlooP</span> (Bounded loop, bucle acotado) solo admite bucles con límite fijo y realiza búsquedas cuyo final está garantizado. <span class=\"term\">FlooP</span> (Free loop, bucle libre) permite bucles sin cota y puede lanzarse a búsquedas potencialmente infinitas.",
        },
        {
          type: 'paragraph',
          html: "Esa diferencia captura la distinción entre funciones recursivas primitivas y recursivas generales. Importa porque no todo lo que se puede definir se puede calcular con búsquedas siempre finitas. Esa frontera es exactamente la que necesita la prueba de Gödel para funcionar.",
        },
        {
          type: 'key',
          html: "Distinguir lo que siempre termina de lo que puede buscar sin límite es la base computacional del argumento de Gödel.",
        },
        {
          type: 'paragraph',
          html: "Con esa base computacional lista, llega el clímax lógico del libro.",
        },
      ],
    },
    {
      id: "cap15",
      num: "XIV",
      title: "Proposiciones formalmente indemostrables",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un sistema formal demostrar todas sus verdades? Este es el clímax lógico del libro. Su título parafrasea el artículo que <span class=\"person\">Kurt Gödel</span> publicó en <span class=\"num\">1931</span>. Usando la numeración de Gödel, TNT puede construir una cadena que habla de sus propias cadenas. Se fabrica un enunciado G que afirma «G no es un teorema de TNT».",
        },
        {
          type: 'paragraph',
          html: "El razonamiento se cierra sobre sí mismo. Hofstadter muestra que demostrar G haría inconsistente a TNT, porque probaría algo falso. Demostrar su negación tiene el mismo efecto. Por tanto, si TNT es consistente, G es verdadera pero indemostrable dentro del sistema.",
        },
        {
          type: 'paragraph',
          html: "La conclusión es que ningún sistema formal rico y consistente puede probar todas sus verdades. La incompletitud no es un fallo que se pueda parchear. Añadir G como nuevo axioma genera de inmediato otro enunciado indemostrable.",
        },
        {
          type: 'key',
          html: "Todo sistema capaz de hablar de sí mismo alberga verdades que no puede demostrar sin dejar de ser consistente.",
        },
        {
          type: 'paragraph',
          html: "Esa incompletitud obliga a preguntarse qué significa «saltar fuera» de un sistema formal.",
        },
      ],
    },
    {
      id: "cap16",
      num: "XV",
      title: "Saltar fuera del sistema",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Demuestra la incompletitud que la mente humana no puede ser mecánica? El argumento de Gödel es repetible, y esa repetición vuelve a TNT «esencialmente incompleta». Cada vez que uno salta fuera y agrega la verdad gödeliana como axioma, el sistema ampliado genera su propia verdad inalcanzable. No hay una escalera finita que agote todas las verdades.",
        },
        {
          type: 'paragraph',
          html: "Hofstadter usa esto para examinar el argumento de <span class=\"person\">J. R. Lucas</span>, según el cual Gödel demostraría que la mente humana no puede ser mecánica. El autor lo encuentra defectuoso. El humano que «salta fuera» también queda atrapado en su propio nivel superior. Saltar fuera es una habilidad que una máquina lo bastante rica también podría tener.",
        },
        {
          type: 'key',
          html: "Que podamos saltar fuera de un sistema no prueba que la mente escape a toda máquina.",
        },
        {
          type: 'paragraph',
          html: "La autorreferencia formal se conecta después con la autorreproducción biológica.",
        },
      ],
    },
    {
      id: "cap17",
      num: "XVI",
      title: "Autoref y autorrep",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Son la autorreferencia y la autorreproducción el mismo fenómeno visto desde ángulos distintos? Hofstadter conecta ambas y las presenta como dos caras de un mismo bucle. Un programa que imprime su propio código, un virus que se autoensambla y una molécula de ADN que se copia comparten la misma lógica. Todos se codifican a sí mismos y necesitan una maquinaria externa para replicarse.",
        },
        {
          type: 'paragraph',
          html: "El punto sutil es que la frontera entre el sistema que se reproduce y el entorno que lo ayuda resulta difusa. Por eso la información viaja de un nivel a otro, y decidir dónde termina el «yo» que se copia es en parte una convención. Ese bucle une el juego formal de Gödel con el bucle biológico de la vida.",
        },
        {
          type: 'key',
          html: "Referirse a sí mismo y reproducirse a sí mismo son el mismo bucle, visto en lo formal y en lo vivo.",
        },
        {
          type: 'paragraph',
          html: "Los teóricos que fijaron los límites de lo mecánico completan el mapa antes del capítulo sobre inteligencia artificial.",
        },
      ],
    },
    {
      id: "cap18",
      num: "XVII",
      title: "Church, Turing, Tarski y otros",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué significa que algo sea computable o decidible? El capítulo reúne a los teóricos que fijaron los límites de lo mecánico. La <span class=\"term\">tesis de Church-Turing</span> (la hipótesis de que todo cálculo efectivo puede simularse con una máquina de Turing) propone qué significa que algo sea computable. Hofstadter la presenta en varias versiones, de las más débiles a las más fuertes.",
        },
        {
          type: 'paragraph',
          html: "Dos resultados afilan esos límites. El <span class=\"term\">problema de la parada</span> (decidir si un cálculo cualquiera terminará) de <span class=\"person\">Alan Turing</span> muestra que no existe un procedimiento general que lo resuelva. El teorema de <span class=\"person\">Alfred Tarski</span> muestra, además, que la verdad aritmética no puede definirse dentro del propio sistema que la enuncia.",
        },
        {
          type: 'key',
          html: "Church, Turing y Tarski trazan juntos la frontera de lo computable, lo decidible y lo definible.",
        },
        {
          type: 'paragraph',
          html: "Con esos límites claros, Hofstadter repasa lo que la inteligencia artificial logró hasta la década de 1970.",
        },
      ],
    },
    {
      id: "cap19",
      num: "XVIII",
      title: "Inteligencia artificial: retrospectiva",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Se puede detectar el pensamiento conversando con una máquina? Hofstadter abre con el <span class=\"term\">test de Turing</span> (un diálogo ciego donde la máquina debe parecer humana). Es una propuesta para detectar el pensamiento por conversación, no por definición. Sobre esa base repasa una historia abreviada de la inteligencia artificial.",
        },
        {
          type: 'paragraph',
          html: "Menciona programas que juegan, prueban teoremas, componen música o usan lenguaje natural. El caso destacado es <span class=\"person\">SHRDLU</span>, el programa de <span class=\"person\">Terry Winograd</span> que dialoga con soltura sobre un «mundo de bloques». Su aparente comprensión funciona solo porque representa ese micromundo completo, no porque analice frases sueltas. Entender exige un modelo del mundo, y escalar de un micromundo a la vida real es el verdadero problema.",
        },
        {
          type: 'key',
          html: "Comprender el lenguaje exige representar un mundo entero, no solo analizar frases con reglas.",
        },
        {
          type: 'paragraph',
          html: "Mirando hacia adelante, Hofstadter apuesta por marcos flexibles y analogía, no por reglas rígidas.",
        },
      ],
    },
    {
      id: "cap20",
      num: "XIX",
      title: "Inteligencia artificial: perspectivas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo podría una máquina ser creativa sin un catálogo fijo de reglas? Mirando hacia adelante, Hofstadter sostiene que el conocimiento se organiza en capas de contexto llamadas <span class=\"term\">frames</span> (marcos mentales con expectativas por defecto). Un frame trae supuestos que se ajustan según la situación. Lo ilustra con puzzles visuales que se resuelven encajando y corrigiendo esos marcos.",
        },
        {
          type: 'paragraph',
          html: "Su apuesta más fuerte es sobre la creatividad. La inteligencia no nace de reglas rígidas. Nace del deslizamiento y la mezcla de conceptos, es decir, de la <span class=\"term\">analogía</span> (transferir estructura de un dominio a otro). Por eso el capítulo termina con preguntas y especulaciones personales, sin cerrar si la máquina alcanzará esa maleabilidad.",
        },
        {
          type: 'key',
          html: "La inteligencia pide marcos flexibles y analogía, no un catálogo fijo de reglas de manipulación.",
        },
        {
          type: 'paragraph',
          html: "Todas las hebras convergen en el capítulo final sobre bucles extraños y el «yo».",
        },
      ],
    },
    {
      id: "cap21",
      num: "XX",
      title: "Bucles extraños o jerarquías enredadas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué es un bucle extraño y por qué aparece en Gödel, Escher y Bach? El capítulo final reúne todas las hebras en la idea de <span class=\"term\">bucle extraño</span> (una jerarquía que, al subir de nivel, regresa al punto de partida). Ocurre en la cascada de Escher y en el enunciado gödeliano.",
        },
        {
          type: 'paragraph',
          html: "Hofstadter lo encuentra en sistemas que se vuelven sobre sí mismos. La ciencia estudia la ciencia. El gobierno se investiga a sí mismo. El arte rompe las reglas del arte. El cerebro piensa sobre el cerebro. En cada caso surge una <span class=\"term\">jerarquía enredada</span> (niveles que se cruzan y se refieren entre sí).",
        },
        {
          type: 'paragraph',
          html: "Su hipótesis es que el «yo» y la conciencia son precisamente eso. El «yo» sería un símbolo que representa al sistema entero dentro del propio sistema, un bucle que se observa observándose. Por eso esa imagen ata de nuevo a Gödel, Escher y Bach. El libro cierra donde empezó, en la ofrenda que se refiere a sí misma.",
        },
        {
          type: 'key',
          html: "El «yo» es un <span class=\"key-term\">bucle extraño</span>: un símbolo que representa al sistema entero dentro de ese sistema.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "🔁",
    "description": "Bucle extraño"
  },
  {
    "title": "🪜",
    "description": "Jerarquía enredada"
  },
  {
    "title": "⚙️",
    "description": "Sistema formal"
  },
  {
    "title": "🪞",
    "description": "Isomorfismo"
  },
  {
    "title": "🔢",
    "description": "Numeración de Gödel"
  },
  {
    "title": "∞",
    "description": "Incompletitud"
  },
  {
    "title": "🧮",
    "description": "TNT"
  },
  {
    "title": "🌀",
    "description": "Recursión"
  },
  {
    "title": "🧠",
    "description": "Niveles de descripción"
  },
  {
    "title": "🐜",
    "description": "Símbolo activo"
  }
],
  chronology: [
  {
    "year": "1747",
    "text": "Bach visita a Federico el Grande y nace la Ofrenda musical."
  },
  {
    "year": "1895",
    "text": "Lewis Carroll publica el diálogo de la Tortuga y Aquiles."
  },
  {
    "year": "1931",
    "text": "Gödel demuestra sus teoremas de incompletitud."
  },
  {
    "year": "1936",
    "text": "Turing y Church definen la computabilidad y el problema de la parada."
  },
  {
    "year": "1950",
    "text": "Turing propone su test de inteligencia."
  },
  {
    "year": "1970s",
    "text": "Winograd desarrolla SHRDLU en el mundo de bloques."
  },
  {
    "year": "1979",
    "text": "Se publica GEB, que gana el Pulitzer en 1980."
  }
],
  figures: [
  {
    "name": "Douglas R. Hofstadter",
    "role": "Autor · teje la metáfora GEB y el bucle extraño"
  },
  {
    "name": "Kurt Gödel",
    "role": "Teoremas de incompletitud · autorreferencia en la aritmética"
  },
  {
    "name": "M. C. Escher",
    "role": "Bucles visuales y jerarquías imposibles"
  },
  {
    "name": "Johann Sebastian Bach",
    "role": "Fugas, cánones y la Ofrenda musical"
  },
  {
    "name": "Alan Turing",
    "role": "Máquina universal, problema de la parada y test de inteligencia"
  },
  {
    "name": "Alonzo Church",
    "role": "Tesis de computabilidad y cálculo lambda"
  },
  {
    "name": "Alfred Tarski",
    "role": "Indefinibilidad de la verdad aritmética"
  },
  {
    "name": "Lewis Carroll",
    "role": "Paradoja de la regresión infinita"
  },
  {
    "name": "Terry Winograd",
    "role": "SHRDLU: lenguaje natural en un mundo de bloques"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Mente y máquina comparten un mismo patrón que sube de nivel y vuelve al origen.",
  "Por eso la incompletitud no es un defecto, sino la señal de un sistema lo bastante rico para hablar de sí mismo.",
  "Bach, Escher y Gödel son tres caras del mismo bucle dorado.",
  "Comprender pide danzar entre las partes y el todo, entre la forma y el significado.",
  "El libro cierra como empezó, en una ofrenda que se refiere a sí misma."
],
    highlight: "El «yo» emerge de bucles extraños que nos observan observándonos",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Douglas R. Hofstadter",
    line2: "\"Gödel, Escher, Bach\" · Basic Books · 1979",
  },
}
