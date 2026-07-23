import type { BookSummary } from '../types/book'

export const universoNada: BookSummary = {
  slug: "universo-de-la-nada",
  meta: {
    title: "Un universo de la nada",
    subtitle: "¿Por qué hay algo en vez de nada?",
    author: "Lawrence M. Krauss",
    meta: [
      "📖 2012 · Ed. Pasado & Presente",
      "✍️ Postfacio de Richard Dawkins",
    ],
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "La pregunta fundamental",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Hace falta un creador para que exista el universo? Krauss confiesa desde el arranque que no le convence esa idea. Los copos de nieve y los arcoíris surgen solos a partir de <span class=\"term\">leyes físicas simples</span> (reglas generales que describen cómo se comporta la materia). Nadie sostiene que un dios los fabrique uno por uno. Krauss cree que con el universo entero podría ocurrir lo mismo.",
        },
        {
          type: 'paragraph',
          html: "La apelación a una <span class=\"term\">Causa Primera</span> (un origen absoluto que no necesita explicación previa) no resuelve nada. Enseguida obliga a preguntar quién creó al creador. Es la vieja imagen de la mujer que sostiene que el mundo descansa sobre una tortuga, y esa sobre otra, «y así hasta el fondo». Trasladar el misterio a un dios eterno no explica más que postular un universo eterno.",
        },
        {
          type: 'paragraph',
          html: "Contra quienes redefinen «nada» como un vago «no-ser» para dejarla fuera de la ciencia, Krauss responde que sin ciencia toda definición son solo palabras. La pregunta «¿por qué hay algo en vez de nada?» es una cuestión sobre el mundo natural. Por eso el lugar para responderla es la ciencia, guiada por la evidencia y el experimento.",
        },
        {
          type: 'quote',
          text: "«El universo es como es, nos guste o no.»",
          attribution: "Lawrence M. Krauss",
        },
        {
          type: 'key',
          html: "La pregunta por el origen del universo dejó de ser teológica: es una cuestión sobre la naturaleza que le corresponde a la <span class=\"key-term\">ciencia</span>.",
        },
        {
          type: 'paragraph',
          html: "Para responderla con datos, primero hay que saber si el cosmos tuvo un comienzo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Un relato de misterio cósmico: el principio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿El universo siempre existió o tuvo un principio? En <span class=\"num\">1916</span>, el físico <span class=\"person\">Albert Einstein</span> completó la relatividad general. Fue la primera teoría capaz de describir no solo cómo se mueven los objetos, sino cómo evoluciona el propio universo. Había un problema: la gravedad es solo atractiva. Un conjunto de masas en reposo terminaría colapsando, en contra del universo estático que todos daban por supuesto.",
        },
        {
          type: 'paragraph',
          html: "El sacerdote y físico <span class=\"person\">Georges Lemaître</span> resolvió las ecuaciones y dedujo que el universo se expande. Einstein rechazó la idea de plano. La prueba llegó de la observación. Usando las <span class=\"term\">cefeidas</span> (estrellas cuyo brillo revela su distancia), calibradas por Henrietta Leavitt, el astrónomo <span class=\"person\">Edwin Hubble</span> demostró primero que existen otras galaxias. Luego, en <span class=\"num\">1929</span>, mostró que se alejan más rápido cuanto más lejos están. El universo se expande. En el pasado estuvo comprimido: hubo un principio.",
        },
        {
          type: 'paragraph',
          html: "Que el universo tuviera un comienzo confirmado por datos no lo vuelve una prueba de la creación. El propio Lemaître negó que su teoría tuviera consecuencias religiosas. La cosmología se volvió medible. La abundancia de elementos ligeros y las supernovas de tipo Ia fijaron la edad del universo en unos <span class=\"num\">13,7 mil millones</span> de años.",
        },
        {
          type: 'quote',
          text: "«Sus cálculos son correctos, pero su física es abominable.»",
          attribution: "Albert Einstein, a Lemaître",
        },
        {
          type: 'key',
          html: "El universo tuvo un <span class=\"key-term\">principio</span>, no es eterno ni estático, y eso convirtió la cosmología en ciencia medible.",
        },
        {
          type: 'paragraph',
          html: "Si el cosmos tuvo un origen, la pregunta siguiente es cómo terminará, y eso exige pesarlo.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Pesar el universo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuánta materia hay en el universo y cómo afecta su destino? Sabido el principio, hay que pesar el cosmos. La astrónoma <span class=\"person\">Vera Rubin</span> descubrió en los años setenta que las estrellas alejadas del centro galáctico giran demasiado rápido para la masa visible. Algo invisible sujeta la galaxia.",
        },
        {
          type: 'paragraph',
          html: "Ya en <span class=\"num\">1933</span>, el astrónomo Fritz Zwicky había visto un patrón parecido. Las galaxias del cúmulo de Coma se movían tan deprisa que deberían haberse dispersado. Solo tenía sentido si hubiera mucha más masa de la observable. Esa <span class=\"term\">materia oscura</span> (materia que no brilla ni emite luz detectable) no puede ser protones y neutrones. La nucleosíntesis del Big Bang limita cuántos hay. Es un tipo nuevo de partícula.",
        },
        {
          type: 'paragraph',
          html: "La gravedad misma sirve para pesarla. Las <span class=\"term\">lentes gravitacionales</span> (curvatura de la luz por la masa) deforman imágenes distantes. Revelan dónde está la masa oculta. Combinadas con los rayos X de los cúmulos, muestran unas diez veces más materia que la visible. Y sin embargo, toda esa materia suma apenas el <span class=\"num\">30 %</span> de lo necesario para un universo plano.",
        },
        {
          type: 'key',
          html: "La mayor parte de la materia es invisible, pero ni siquiera así se llega a la densidad de un universo plano: falta la mayor parte de la <span class=\"key-term\">energía</span>.",
        },
        {
          type: 'paragraph',
          html: "En lugar de sumar masas, se puede medir la geometría del cosmos directamente.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Luz del principio de los tiempos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cuál es la forma del universo a gran escala? La herramienta es el <span class=\"term\">fondo cósmico de microondas</span> (CMB, la luz remanente del universo primitivo). Quedó cuando el cosmos tenía unos 300.000 años y se volvió transparente. El tamaño angular de sus manchas calientes y frías depende de la curvatura del espacio.",
        },
        {
          type: 'paragraph',
          html: "En un universo plano esas manchas mayores abarcan alrededor de un grado. En uno curvo se ven mayores o menores. Los experimentos BOOMERANG (<span class=\"num\">1998</span>) y luego el satélite WMAP midieron justo ese tamaño. Concluyeron, con una precisión del 1 %, que el universo es plano. La expectativa teórica quedaba confirmada.",
        },
        {
          type: 'paragraph',
          html: "Aquí aparece una contradicción flagrante. La geometría dice que el universo es plano, lo que exige la densidad de energía crítica. La materia, en cambio, aporta solo un tercio de esa cantidad. Falta el <span class=\"num\">70 %</span> de la energía. No está en las galaxias, ni en los cúmulos, ni en ninguna forma de materia.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~1%",
              "label": "Materia visible (átomos)"
            },
            {
              "value": "~30%",
              "label": "Materia total (con la oscura)"
            },
            {
              "value": "~70%",
              "label": "Energía que falta"
            }
          ],
        },
        {
          type: 'key',
          html: "Medido directamente, el universo es <span class=\"key-term\">plano</span>, pero la materia solo aporta un tercio de la energía que un universo plano requiere.",
        },
        {
          type: 'paragraph',
          html: "La energía que falta podría estar en el sitio más inesperado: el espacio vacío.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Mucho ruido y pocas nueces",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede el vacío tener peso y energía? La <span class=\"term\">constante cosmológica</span> (un término que Einstein añadió a sus ecuaciones para sostener un universo estático) reaparece hoy como energía del propio vacío. Einstein la llamó su mayor error. Si al vaciar una región de todo sigue pesando algo, esa es la energía del espacio vacío.",
        },
        {
          type: 'paragraph',
          html: "Que el vacío no esté vacío se sigue de unir la cuántica con la relatividad. El físico <span class=\"person\">Paul Dirac</span> lo hizo y su ecuación predijo la antimateria. El positrón se halló poco después. Richard Feynman mostró que, en tiempos muy cortos, pares de partícula y antipartícula surgen y se aniquilan sin cesar. Son las <span class=\"term\">partículas virtuales</span> (pares que existen un instante y desaparecen). No se ven, pero sus efectos son medibles.",
        },
        {
          type: 'paragraph',
          html: "Esos efectos se miden con una precisión sin igual. Explican el corrimiento de Lamb en el hidrógeno y casi toda la masa del protón. El problema es el vacío puro. Al sumar todas las partículas virtuales, la energía del vacío sale unos <span class=\"num\">120 órdenes de magnitud</span> mayor que la observada. Es el peor cálculo de la física, y sigue sin resolverse.",
        },
        {
          type: 'quote',
          text: "«Las partículas que aparecen y desaparecen en tiempos demasiado cortos para medirlas se llaman partículas virtuales.»",
          attribution: "Lawrence M. Krauss",
        },
        {
          type: 'key',
          html: "El espacio vacío no está vacío: la cuántica lo llena de <span class=\"key-term\">partículas virtuales</span> y le da energía, aunque nadie sepa aún por qué es tan pequeña.",
        },
        {
          type: 'paragraph',
          html: "Si el vacío tiene energía, debería acelerar la expansión del universo.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El universo desbocado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la expansión del universo se acelera en lugar de frenarse? Si el vacío tiene energía, esta produce una repulsión que aceleraría la expansión. En 1995, Krauss y Michael Turner defendieron esa idea «herética»: 30 % de materia y 70 % de energía en el espacio vacío. Casi nadie los tomó en serio.",
        },
        {
          type: 'paragraph',
          html: "La prueba llegó de dos equipos rivales. <span class=\"person\">Saul Perlmutter</span> por un lado. Brian Schmidt con Adam Riess por otro. Midieron supernovas de tipo Ia muy lejanas y las encontraron más tenues de lo esperado. La conclusión era inevitable: la expansión del universo se acelera. El ajuste que mejor encaja es un universo plano con <span class=\"num\">70 %</span> de energía oscura y 30 % de materia.",
        },
        {
          type: 'paragraph',
          html: "Krauss, fiel a que «las afirmaciones extraordinarias exigen pruebas extraordinarias», desconfió al principio. La confirmación llegó por otras vías. La edad del universo encajaba. Las galaxias se agrupaban como predecía el modelo. El paso de frenado a aceleración también cuadraba. Todo eso asentó la <span class=\"term\">energía oscura</span> (la energía repulsiva alojada en el vacío). Ese hallazgo resolvió la contradicción del capítulo anterior.",
        },
        {
          type: 'key',
          html: "La expansión se acelera porque una <span class=\"key-term\">energía oscura</span> alojada en el espacio vacío domina el universo y aporta el 70 % que faltaba.",
        },
        {
          type: 'paragraph',
          html: "Con el universo plano y acelerado, queda un enigma: ¿cómo llegó a ser tan uniforme?",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Regalos a cambio de nada",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo llegó el universo a ser tan plano y tan uniforme? La respuesta es la <span class=\"term\">inflación</span> (una expansión exponencial del cosmos en una fracción de segundo), que el físico <span class=\"person\">Alan Guth</span> propuso en 1981. Una transición de fase en el universo primitivo liberó la energía de un «falso vacío» y disparó esa expansión.",
        },
        {
          type: 'paragraph',
          html: "Esa expansión resuelve dos enigmas a la vez. Estiró cualquier curvatura hasta volver el universo plano. Llevó regiones que ya estaban a la misma temperatura a cubrir todo el cielo. Eso explica la uniformidad del fondo de microondas. Además, estiró las <span class=\"term\">fluctuaciones cuánticas</span> (pequeñas variaciones de energía en el vacío) hasta escalas enormes. Esas semillas se convirtieron después en galaxias. En sentido literal, surgimos de fluctuaciones en lo que era casi nada.",
        },
        {
          type: 'paragraph',
          html: "Queda la pregunta de dónde salió toda esa energía. Guth la llamó el «almuerzo gratis». Al incluir la gravedad, la energía positiva de la materia se cancela con la energía gravitatoria negativa. En un universo plano la energía total de cada objeto es exactamente <span class=\"num\">cero</span>. La presión negativa del vacío hace el trabajo y mantiene constante la densidad de energía mientras el espacio crece.",
        },
        {
          type: 'key',
          html: "En un universo plano la energía total de todo objeto es <span class=\"key-term\">cero</span>, así que la inflación pudo crear todo lo que vemos sin coste alguno.",
        },
        {
          type: 'paragraph',
          html: "Pero vivir en un universo dominado por la energía del vacío tiene una cara sombría.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Nuestro deprimente futuro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué futuro le espera a un universo acelerado por la energía del vacío? Krauss lo presenta como el peor de los universos posibles para la vida. La aceleración no se detendrá, y con el tiempo veremos cada vez menos.",
        },
        {
          type: 'paragraph',
          html: "Dentro de unos <span class=\"num\">2 billones</span> de años, todas las galaxias fuera de nuestro grupo local se habrán alejado más allá del horizonte. Su luz estirada hasta hacerse invisible. Los cosmólogos de ese futuro verán una sola galaxia en un vacío estático. No habrá fondo de microondas ni expansión observable. Reconstruirán, con datos honestos, la imagen equivocada que teníamos en 1915.",
        },
        {
          type: 'paragraph',
          html: "Krauss presenta esto como «el futuro tal como podría ser», al modo del fantasma de Dickens. Un cambio en la energía oscura alteraría el destino. La lección inquieta más de lo que consuela. Se puede usar la mejor ciencia posible y aun así llegar a una imagen falsa del universo. Vivimos en el único instante en que toda la evidencia todavía es visible.",
        },
        {
          type: 'quote',
          text: "«Para quienes les parece asombroso que vivamos en un universo de Algo, esperen: ¡la Nada viene directo hacia nosotros!»",
          attribution: "Christopher Hitchens",
        },
        {
          type: 'key',
          html: "La aceleración borrará toda huella del Big Bang, así que vivimos en el único <span class=\"key-term\">instante</span> en que el origen del universo es verificable.",
        },
        {
          type: 'paragraph',
          html: "Que vivamos justo en ese instante especial resulta sospechoso y abre otra pregunta.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "¿Un accidente magnífico?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Por qué la energía del vacío es comparable a la de la materia justo «ahora»? Eso choca con el principio copernicano de que nuestro lugar no tiene nada de excepcional. La energía del vacío solo es comparable a la de la materia en este instante cósmico.",
        },
        {
          type: 'paragraph',
          html: "El físico <span class=\"person\">Steven Weinberg</span> ofreció una salida. Una energía del vacío cincuenta veces mayor habría impedido que se formaran galaxias. Por tanto no habría estrellas, planetas ni astrónomos. Quizá medimos un valor tan pequeño porque solo en un universo así podríamos existir. Ese razonamiento <span class=\"term\">antrópico</span> (basado en que observamos un cosmos compatible con nuestra existencia) solo tiene sentido si hay muchos universos.",
        },
        {
          type: 'paragraph',
          html: "La física actual apunta en esa dirección. La inflación eterna de Andrei Linde y Alex Vilenkin genera regiones que dejan de inflarse como burbujas separadas. El «paisaje» de la teoría de cuerdas admite del orden de <span class=\"num\">10⁵⁰⁰</span> universos posibles, cada uno con leyes distintas. El <span class=\"term\">multiverso</span> (un conjunto de universos causalmente separados) no es una excusa, sino una consecuencia casi inevitable de las mejores teorías.",
        },
        {
          type: 'key',
          html: "Las constantes de la naturaleza podrían ser <span class=\"key-term\">accidentes ambientales</span> seleccionados en un multiverso, no verdades fundamentales.",
        },
        {
          type: 'paragraph',
          html: "Con ese mapa completo, Krauss vuelve a la pregunta central: ¿cómo puede surgir algo de la nada?",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "La nada es algo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo puede surgir algo de la nada? Krauss vuelve a la pregunta central mejor armado. Desde Newton sabemos que el universo es explicable por leyes. En ciencia un «por qué» suele ser en realidad un «cómo». La cuestión útil es cómo puede surgir algo de la nada.",
        },
        {
          type: 'paragraph',
          html: "En su primer sentido, la <span class=\"term\">nada</span> (el espacio vacío, sin materia ni radiación) ya genera algo. Dotado de energía, el vacío infla y convierte esa energía en toda la materia y la radiación que observamos. Deja las fluctuaciones cuánticas como semillas de la estructura. Que el universo sea plano, con energía gravitatoria total cero, es justo lo que se espera si nació así.",
        },
        {
          type: 'paragraph',
          html: "Krauss subraya que esto era un postulado falsable. Nada obligaba a que el universo fuera plano, y sin embargo lo es. Aun así, esta «nada» todavía supone que el espacio y las leyes existen. No es la nada última, sino el primer peldaño de una escalera que sigue bajando.",
        },
        {
          type: 'key',
          html: "En su primer sentido, la nada es el <span class=\"key-term\">espacio vacío</span>, y la inflación muestra cómo de él surge todo lo que vemos.",
        },
        {
          type: 'paragraph',
          html: "El siguiente peldaño es más radical: hacer que el propio espacio surja de la nada.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "La nada es inestable",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede el espacio y el tiempo mismos surgir de la nada? Las reglas cuánticas ya insinúan el camino. La nada siempre produce algo, aunque sea por un instante. Mientras nadie mide, el sistema visita todos los estados posibles.",
        },
        {
          type: 'paragraph',
          html: "Hay casos en que ese algo se vuelve real y duradero. El físico <span class=\"person\">Stephen Hawking</span> mostró en 1974 que los agujeros negros radían. Un par surgido junto al horizonte se separa y una partícula escapa. La <span class=\"term\">asimetría materia-antimateria</span> (ligera preferencia por la materia) dejó un excedente minúsculo. Fue apenas 1 parte en mil millones. Ese resto formó toda la materia que hoy nos compone. Frank Wilczek resumió la idea que da título al capítulo.",
        },
        {
          type: 'paragraph',
          html: "Con la gravedad cuántica, mediante la suma de caminos de Feynman, no solo pueden aparecer partículas. Puede aparecer el <span class=\"term\">espacio-tiempo</span> (el tejido unificado de espacio y tiempo) mismo. Un universo cerrado tiene energía total exactamente <span class=\"num\">cero</span>. Puede nacer «con impunidad» y, si infla, sobrevivir en lugar de colapsar de inmediato. No prueba que el nuestro surgiera así, pero elimina la objeción de que hacía falta un espacio previo.",
        },
        {
          type: 'quote',
          text: "«La respuesta a la vieja pregunta “¿por qué hay algo en vez de nada?” sería que la nada es inestable.»",
          attribution: "Frank Wilczek",
        },
        {
          type: 'key',
          html: "Incluso la ausencia de espacio y tiempo es <span class=\"key-term\">inestable</span>: la gravedad cuántica permite que universos enteros surjan sin coste de energía.",
        },
        {
          type: 'paragraph',
          html: "Queda un último refugio para el creador: ¿de dónde salen las reglas, es decir, las leyes de la física?",
        },
      ],
    },
    {
      id: "cap11",
      num: "11",
      title: "Mundos felices",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿De dónde salen las leyes de la física si no hay un legislador? Krauss lo aborda con una analogía sobre la moral que aprendió de Steven Pinker. Si se dice que sin Dios no hay bien ni mal, cabe preguntar si Dios podría decretar que asesinar es bueno. Casi nadie lo aceptaría, porque suponemos que Dios tendría una razón.",
        },
        {
          type: 'paragraph',
          html: "Si esa razón hace falta, entonces basta con ella y sobra el intermediario. Lo mismo pasa con las leyes del universo. Poner a Dios a fijarlas solo traslada la pregunta: ¿quién fija las reglas de Dios? La necesidad lógica de una Causa Primera no lleva, además, al Dios personal de las religiones.",
        },
        {
          type: 'paragraph',
          html: "La respuesta física es el multiverso. Si las leyes mismas pueden variar de un universo a otro, no hace falta ningún legislador. Bajo el principio de que todo lo que no está prohibido ocurre, alguna región tendrá las leyes que descubrimos. La máxima «de la nada, nada surge» no tiene fundamento científico. Y el futuro probable vuelve a la nada, cuando los protones decaigan y el cosmos se vacíe.",
        },
        {
          type: 'quote',
          text: "«¿Por qué hay algo en vez de nada? La respuesta será, simplemente: no lo habrá por mucho tiempo.»",
          attribution: "Lawrence M. Krauss",
        },
        {
          type: 'key',
          html: "Ni siquiera las <span class=\"key-term\">leyes</span> necesitan un legislador: en un multiverso son posibles sin más, y un creador resulta innecesario.",
        },
        {
          type: 'paragraph',
          html: "Krauss cierra el libro retomando la pregunta que Einstein consideraba la más profunda.",
        },
      ],
    },
    {
      id: "epilogo",
      num: "✎",
      title: "Epílogo y postfacio",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Tuvo Dios alguna elección al crear el universo? En el epílogo, Krauss retoma la pregunta que <span class=\"person\">Albert Einstein</span> consideraba la más profunda. Sea el universo único, sea parte de un multiverso, un ser omnipotente no tendría libertad para hacerlo de otro modo. Por eso resulta, a lo sumo, redundante.",
        },
        {
          type: 'paragraph',
          html: "La ciencia, insiste, no vuelve imposible creer en Dios, pero sí hace posible no creer. Sin ciencia todo es un milagro, y con ciencia queda la posibilidad de que nada lo sea. La elección es de cada uno, siempre que sea una elección informada por los hechos y no por la revelación.",
        },
        {
          type: 'paragraph',
          html: "En el postfacio, el biólogo <span class=\"person\">Richard Dawkins</span> equipara el libro con «El origen de las especies». Si Darwin expulsó al diseñador de la biología, la cosmología de Krauss lo hace del origen del universo. La física predice el mundo con una exactitud asombrosa. La teología no ofrece ni una sola cifra decimal.",
        },
        {
          type: 'quote',
          text: "«Nada expande tanto la mente como el universo en expansión.»",
          attribution: "Richard Dawkins",
        },
        {
          type: 'key',
          html: "La ciencia no prohíbe creer en Dios, pero lo vuelve <span class=\"key-term\">innecesario</span>: seguimos la evidencia, no la revelación.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Nada (tres sentidos)",
    "description": "Espacio vacío, luego ausencia de espacio y tiempo, y por último ausencia de leyes. En los tres niveles la física permite que surja algo."
  },
  {
    "title": "Energía oscura / constante cosmológica",
    "description": "Energía del espacio vacío, gravitatoriamente repulsiva. Es ~70 % del universo y acelera la expansión."
  },
  {
    "title": "Materia oscura",
    "description": "Materia invisible, no hecha de protones ni neutrones, que domina galaxias y cúmulos. Aporta ~30 % de la energía."
  },
  {
    "title": "Partículas virtuales",
    "description": "Pares que surgen y se aniquilan según el principio de incertidumbre. Dan casi toda la masa del protón y energía al vacío."
  },
  {
    "title": "Inflación",
    "description": "Expansión exponencial temprana. Explica la planitud y la uniformidad, y estira las fluctuaciones cuánticas hasta convertirlas en galaxias."
  },
  {
    "title": "Universo plano",
    "description": "Geometría en la que la energía gravitatoria total de cada objeto es cero, lo que hace posible el «almuerzo gratis»."
  },
  {
    "title": "Multiverso",
    "description": "Conjunto de universos causalmente separados, con leyes posiblemente distintas. Base del razonamiento antrópico."
  },
  {
    "title": "Principio antrópico",
    "description": "Observamos un universo compatible con nuestra existencia porque solo en uno así podríamos existir."
  }
],
  chronology: [
  {
    "year": "1916",
    "text": "Einstein completa la relatividad general, que describe la evolución del universo."
  },
  {
    "year": "1929",
    "text": "Hubble descubre la expansión del universo (ley de Hubble)."
  },
  {
    "year": "1933",
    "text": "Zwicky infiere materia oscura en el cúmulo de Coma."
  },
  {
    "year": "1965",
    "text": "Penzias y Wilson descubren el fondo cósmico de microondas."
  },
  {
    "year": "1974",
    "text": "Hawking muestra que los agujeros negros radian."
  },
  {
    "year": "1981",
    "text": "Alan Guth propone la inflación cósmica."
  },
  {
    "year": "1998",
    "text": "BOOMERANG mide un universo plano y las supernovas revelan la expansión acelerada."
  },
  {
    "year": "2001",
    "text": "El satélite WMAP confirma la planitud y el dominio de la energía oscura."
  },
  {
    "year": "2011",
    "text": "Nobel de Física a Perlmutter, Schmidt y Riess por la aceleración cósmica."
  }
],
  figures: [
  {
    "name": "Albert Einstein",
    "role": "Relatividad general · Constante cosmológica · Lentes gravitacionales"
  },
  {
    "name": "Georges Lemaître",
    "role": "Primer proponente del Big Bang"
  },
  {
    "name": "Edwin Hubble",
    "role": "Expansión del universo (con las cefeidas de Leavitt)"
  },
  {
    "name": "Vera Rubin",
    "role": "Evidencia de materia oscura por rotación galáctica"
  },
  {
    "name": "Paul Dirac",
    "role": "Unión de cuántica y relatividad · Antimateria"
  },
  {
    "name": "Alan Guth",
    "role": "Inflación cósmica y el «almuerzo gratis»"
  },
  {
    "name": "Perlmutter/Schmidt/Riess",
    "role": "Expansión acelerada (Nobel 2011)"
  },
  {
    "name": "Stephen Hawking",
    "role": "Radiación de Hawking · Cosmología cuántica"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La nada no es la nada tranquila que imaginábamos: es inestable.",
  "Un universo puede surgir de ella sin espacio, sin tiempo y sin un creador.",
  "La energía total del cosmos puede ser exactamente cero.",
  "Todo lo que existe sería una fluctuación sobre ese cero.",
  "Somos la parte de la nada que, por un instante, aprendió a preguntarse por sí misma."
],
    highlight: "el universo no solo pudo surgir de la nada: probablemente debía hacerlo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Lawrence M. Krauss",
    line2: "\"Un universo de la nada\" · Ediciones de Pasado & Presente · 2012",
  },
}
