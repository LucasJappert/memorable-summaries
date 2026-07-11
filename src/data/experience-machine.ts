import type { BookSummary } from '../types/book'

export const experienceMachine: BookSummary = {
  slug: "experience-machine",
  meta: {
    title: "The Experience Machine",
    subtitle: "Cómo la mente predice y moldea la realidad",
    author: "Andy Clark",
    meta: [
      "📖 2023 · Pantheon Books",
      "✍️ Filósofo cognitivo · Sussex · procesamiento predictivo",
    ],
    titleEs: "La máquina de la experiencia",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Prefacio"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Abrir la máquina de predicción"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Psiquiatría y neurología"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Acción como profecía autocumplida"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Predecir el cuerpo"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "El problema difícil"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Esperar mejor"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Más allá del cerebro desnudo"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Hackear la máquina"
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
    "num": "★",
    "label": "La idea central"
  }
],
  sections: [
    {
      id: "prefacio",
      num: "Prefacio",
      title: "Moldear la experiencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Andy Clark</span> espera backstage en el festival <span class=\"term\">New Scientist Live</span> cuando siente una vibración clara en el bolsillo. Su teléfono no está ahí: lo dejó bajo el podio en modo avión. Es un <span class=\"term\">síndrome de vibración fantasma</span>, fenómeno moderno donde el cerebro espera tanto el zumbido habitual que lo fabrica.",
        },
        {
          type: 'paragraph',
          html: "Un estudio de <span class=\"num\">2012</span> encontró que el <span class=\"num\">89%</span> de universitarios reportaba esas sensaciones, sobre todo bajo estrés. En <span class=\"num\">2013</span> Australia la eligió «palabra del año». Clark encaja el fenómeno en la tesis del libro. Según el <span class=\"term\">procesamiento predictivo</span>, la realidad vivida se arma desde nuestras propias predicciones, no solo desde el mundo externo.",
        },
        {
          type: 'paragraph',
          html: "El modelo tradicional veía los sentidos como ventana pasiva de afuera hacia adentro. La ciencia emergente invierte la dirección. El cerebro predice de adentro hacia afuera y la señal sensorial corrige el error. Emoción, dolor, ansiedad y planificación siguen la misma lógica. Reencuadrar la adrenalina pre-escena como «preparación química para un buen desempeño» altera la experiencia y la acción.",
        },
        {
          type: 'quote',
          text: "«Nada de lo que hacemos o experimentamos queda intacto por nuestras expectativas. Toda experiencia humana es en parte fantasma.»",
          attribution: "Andy Clark",
        },
        {
          type: 'key',
          html: "La experiencia es siempre un encuentro entre <span class=\"key-term\">predicciones informadas</span> y estimulación sensorial, nunca un reflejo desnudo del mundo.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Abrir la máquina de predicción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Clark despierta antes de la alarma y oye canto de pájaros en un cuarto silencioso. Su pareja usa una app que simula un coro matutino gradual. El cerebro, entrenado por esa rutina, alucina auditivamente el inicio del chirp aunque la alarma no suene y no haya pájaros reales tras el doble vidrio.",
        },
        {
          type: 'paragraph',
          html: "Esas alucinaciones breves se corrigen cuando llega evidencia de silencio mediante señales de <span class=\"term\">error de predicción</span>. Pero cuando las expectativas son fuertes o la evidencia es sutil, la predicción puede sobreescribir la señal real. El cerebro no espera pasivamente. Intenta alucinar el mundo y deja que los sentidos empuen el pincel cuando falla.",
        },
        {
          type: 'paragraph',
          html: "Durante décadas dominó el modelo de la <span class=\"term\">cámara inteligente</span>. La información visual avanzaba en capas desde la retina hacia abstracciones, como en <span class=\"person\">David Marr</span> o en <span class=\"person\">Descartes</span> (<span class=\"num\">1664</span>). El procesamiento predictivo invierte el flujo. Las predicciones profundas bajan hasta la piel y los ojos, y solo sube lo inesperado. Esa lógica recuerda la codificación predictiva lineal de <span class=\"person\">Claude Shannon</span> (<span class=\"num\">1948</span>) o formatos como JPEG y MP3.",
        },
        {
          type: 'paragraph',
          html: "Varias demos perceptivas lo confirman. En una cuadrícula ambigua, ver «13» o «B» cambia la experiencia del mismo trazo central. Escuchar «White Christmas» distorsionado o decodificar <span class=\"term\">sine-wave speech</span> muestra cómo el conocimiento previo transforma lo auditivo. La percepción es pintura guiada por historia y necesidades, no fotografía instantánea.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Predicción",
              "description": "El cerebro adivina cómo deberían ser mundo y cuerpo antes de mirar.",
              "icon": "🧠"
            },
            {
              "title": "Error",
              "description": "La diferencia señal-real vs. esperada corrige o aprende.",
              "icon": "⚡"
            },
            {
              "title": "Frugalidad",
              "description": "Solo asciende lo imprevisto; eficiencia metabólica y computacional.",
              "icon": "📉"
            }
          ],
        },
        {
          type: 'key',
          html: "Percepción exitosa es <span class=\"key-term\">alucinación controlada</span>: predicción lidera y la evidencia sensorial corrige.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Psiquiatría y neurología: cerrar la brecha",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Un obrero ve un clavo de <span class=\"num\">15 cm</span> atravesando su bota y siente dolor agónico hasta que los médicos descubren que el clavo pasó entre los dedos sin lesionarlo. El dolor fue real pero generado por predicciones visuales de lesión grave, no por daño tisular.",
        },
        {
          type: 'paragraph',
          html: "Los nociceptores aportan evidencia, pero no son lo que sentimos. Podemos sentir dolor sin ellos o no sentirlo con actividad intensa si la acción urgente domina. <span class=\"person\">Helmholtz</span> ya hablaba de inferencia inconsciente. El marco unifica percepción externa e interna y erosiona el dualismo psiquiatría/neurología.",
        },
        {
          type: 'paragraph',
          html: "El dolor crónico afecta hasta el <span class=\"num\">10%</span> de la población mundial. En el Reino Unido, entre un tercio y la mitad de las personas lo padecen. En <span class=\"num\">2016</span>, tras reconocer categorías nociceptiva y neuropática, la medicina añadió el <span class=\"term\">dolor nociplástico</span>, definido como procesamiento anómalo sin daño claro. <span class=\"person\">Irene Tracey</span> mostró con fMRI que expectativas y creencias religiosas modulan circuitos del dolor. El dentista que llama «cosquilleo suave» al taladro altera la experiencia.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">trastornos funcionales</span> incluyen parálisis, ceguera o temblor sin causa estructural. Son reales, no simulación, y representan alrededor del <span class=\"num\">16%</span> de derivaciones neurológicas nuevas. Un defecto visual «tubular» imposible ópticamente revela predicciones de túnel uniforme. <span class=\"person\">Jon Stone</span> trató a una adolescente ciega funcional cuya aversión a la luz entrenó predicciones de oscuridad. Las expectativas falsas se auto-confirman cuando cada exposición parece validarlas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Nociplástico",
              "description": "Dolor genuino por procesamiento alterado, no por tejido dañado.",
              "icon": "🩹"
            },
            {
              "title": "Funcional",
              "description": "Síntoma real cuya forma sigue expectativas, no anatomía.",
              "icon": "👁️"
            },
            {
              "title": "Bucle",
              "description": "Creer que algo duele aumenta dolor y refuerza la creencia.",
              "icon": "🔄"
            }
          ],
        },
        {
          type: 'key',
          html: "El dolor y los síntomas funcionales son <span class=\"key-term\">construcciones predictivas</span> tan reales como ver un escarabajo rojo.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Acción como profecía autocumplida",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "La acción no es un apéndice de la percepción: es el lugar donde el cerebro debe «ganarse» metabólicamente su costo evolutivo. Según la <span class=\"term\">inferencia activa</span>, los movimientos se causan prediciendo las sensaciones que ocurrirían si ya los estuviéramos ejecutando.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">teoría ideomotora</span> de <span class=\"person\">Hermann Lotze</span> y <span class=\"person\">William James</span> sostenía que la imagen del efecto completado provoca la acción. Clark ilustra el punto con una marioneta. Tirar del hilo de la mano mueve hombro y codo sin planificarlos. El cerebro aprende qué vería y sentiría si una fuerza externa tirara hacia la meta, y esas predicciones proprioceptivas actúan como comandos motores.",
        },
        {
          type: 'paragraph',
          html: "Para mirar gaviotas desde su ventana, Clark predice verlas. Como aún mira la pantalla, surgen errores que elimina girando cuello y ojos. Hay dos vías para minimizar error. Una cambia la predicción en percepción. La otra cambia el mundo o el cuerpo en acción. Un jardinero de béisbol corre manteniendo constante la aceleración aparente de la pelota. Un conductor experto ve la trayectoria y deja que el cerebro corrija micro-errores de volante y pedal.",
        },
        {
          type: 'paragraph',
          html: "La fluidez exige entrenamiento. <span class=\"person\">Muhammad Ali</span> sabía que sin práctica no hay «suerte». Aprendemos las consecuencias sensoriales de hacer bien algo, no «cómo mover el músculo». Las metas a largo plazo usan predicciones contrafácticas sobre qué pasaría si actuamos o no.",
        },
        {
          type: 'key',
          html: "Actuar es hacer cumplir predicciones de <span class=\"key-term\">sensaciones corporales</span> que aún no ocurren.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Predecir el cuerpo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si solo importara minimizar error, ¿por qué no quedarnos en una habitación oscura hasta morir? El <span class=\"term\">puzzle de la habitación oscura</span> se resuelve porque organismos como nosotros predicen forrajeo, movimiento y supervivencia, y esas predicciones se cumplen con acción.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">homeostasis</span>, desarrollada por <span class=\"person\">Claude Bernard</span> y <span class=\"person\">Walter Bradford Cannon</span>, mantiene rangos vitales. La <span class=\"term\">alostasis</span> ajusta los setpoints antes del peligro. El cortisol prepara glucosa para huir. Hambre y sueño anticipan necesidades futuras, no solo estados actuales. El sistema <span class=\"term\">interoceptivo</span> informa vísceras, glucosa y temperatura. El exteroceptivo mira afuera. El proprioceptivo guía postura.",
        },
        {
          type: 'paragraph',
          html: "La valencia, lo atractivo frente a lo repulsivo, refleja <span class=\"term\">dinámicas de error</span>. Pregunta si vamos mejor o peor de lo esperado al reducir error. La curiosidad explora cuando el error es manejable y prometedor. Las emociones integran señales corporales con predicciones de causa. Un corazón acelerado en el gimnasio frente a un posible infarto produce sentimientos distintos. No hay «sentimiento crudo» previo al reencuadre.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">córtex insular anterior</span> integra interocepción, acción y percepción externa en bucles cortico-subcorticales. No opera como jerarquía donde la razón reprime emoción primitiva. Experimentos con feedback cardíaco falso inflan atractivo o intensidad emocional de caras neutras. Rostros enojados subliminales alteran confianza hacia caras visibles neutras mediante cambios fisiológicos.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Interocepción",
              "description": "Predicción de estados internos que da valencia y urgencia.",
              "icon": "🫀"
            },
            {
              "title": "Alostasis",
              "description": "Ajuste preemptivo del cuerpo, no solo corrección reactiva.",
              "icon": "⚖️"
            },
            {
              "title": "Bucles",
              "description": "Cuerpo, subcorteza y corteza se co-construyen mutuamente.",
              "icon": "🔁"
            }
          ],
        },
        {
          type: 'key',
          html: "Emoción es predicción integrada de <span class=\"key-term\">cuerpo en contexto</span>, no lectura pasiva de señales viscerales.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "El problema difícil: ¿predecir a los predictores?",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El marco explica percepción, acción y valencia, pero ¿qué dice de las <span class=\"term\">qualia</span> —el rojo de ver rojo, el sabor del kombucha de frambuesa? Clark aborda el <span class=\"term\">problema difícil</span> de la conciencia de forma especulativa: parte del enigma es conceptual, no científico.",
        },
        {
          type: 'paragraph',
          html: "Clark propone atacar el <span class=\"term\">meta-problema</span> que plantea <span class=\"person\">David Chalmers</span>. La pregunta es por qué sentimos que hay un abismo explicativo. La <span class=\"term\">sentience</span> básica, acuñada por <span class=\"person\">Jeremy Bentham</span> en <span class=\"num\">1789</span>, surge cuando el modelo del mundo dialoga con el modelo corporal. Surge un mundo de <span class=\"term\">affordances</span>, oportunidades de comer, huir o fotografiar, cuyo atractivo cambia con hambre o satisfacción.",
        },
        {
          type: 'paragraph',
          html: "Agentes inteligentes con acceso solo a las «mejores conjeturas» finales, no al procesamiento intermedio, simplifican su auto-modelo: «veo un perro», «siento dolor». Esa opacidad sobre el mecanismo predictivo nos empuja a posular qualia misteriosas. Un zombi filosófico que describiera perros, colores y preferencias sin experiencia interna resulta cada vez menos imaginable cuanto más detalle exige su comportamiento.",
        },
        {
          type: 'paragraph',
          html: "Clark concluye que la conciencia cualitativa es real, pero quizá no es lo que creemos. Resolver sentience básica con ciencia predictiva podría disolver gran parte del misterio restante ligado a la autorreflexión lingüística humana.",
        },
        {
          type: 'key',
          html: "Las qualia inferidas son herramientas para <span class=\"key-term\">predecirnos a nosotros mismos</span>, no entidades aparte del procesamiento predictivo.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Esperar mejor",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Antonie van Leeuwenhoek</span> (<span class=\"num\">1677</span>), convencido del preformacionismo, «vio» vasos en espermatozoides: las expectativas esculpieron la microscopia. El sesgo predictivo no afecta solo juicios posteriores sino la evidencia sensorial misma.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Susanna Siegel</span> imagina a Jack enojado. La cara neutral parece enfadada, lo que refuerza la creencia inicial en un «doble conteo» y altera la interacción real. En tiroteos policiales (<span class=\"num\">2007–2014</span>), el <span class=\"num\">49%</span> de víctimas desarmadas involucró fallos de percepción de amenaza. En Filadelfia, el <span class=\"num\">80%</span> eran negros. <span class=\"person\">Lisa Feldman Barrett</span> describe <span class=\"term\">realismo afectivo</span>. El arousal corporal por cafeína o turnos largos se usa como evidencia extra de peligro junto a estereotipos raciales.",
        },
        {
          type: 'paragraph',
          html: "Titulares post-maratón de Boston («Not Since 9/11» frente a «Boston Strong») cambiaron errores en tareas de disparo simulado. <span class=\"person\">Maurice Merleau-Ponty</span> comparó percepción con un teclado móvil que ofrece distintas teclas al mismo martillo del mundo. La neurodiversidad no es más ni menos «verdad». El autismo da más peso sensorial. El TEPT o la depresión rigen actualización rígida. Son otros balances predicción/evidencia.",
        },
        {
          type: 'paragraph',
          html: "Aun así, mundo físico, anatomía compartida, acción exploratoria y vida social mantienen realidad común. El mismo mecanismo que detecta preocupación en un ser querido puede, bajo presión, producir alucinaciones mortales. Hay que cambiar estereotipos y también entrenar respuestas corporales en profesiones de riesgo.",
        },
        {
          type: 'key',
          html: "Sesgos predictivos viven en la <span class=\"key-term\">percepción primaria</span>. Combatirlos exige mejor cultura y mejor entrenamiento corporal.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Más allá del cerebro desnudo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Tabitha Goldstaub</span>, disléxica, describe <span class=\"term\">SwiftKey</span> y <span class=\"term\">Grammarly</span> como amigos: sin ellas vuelve la niebla escolar. Su mente normal no es solo hardware biológico sino sistema acoplado cerebro-herramientas.",
        },
        {
          type: 'paragraph',
          html: "Desde los volúmenes <span class=\"term\">PDPD</span> (<span class=\"num\">1986</span>) en Sussex, Clark exploró la <span class=\"term\">mente extendida</span>: multiplicar <span class=\"num\">77777 × 99999</span> con lápiz reduce el problema a pasos simples. <span class=\"person\">Carolyn Baum</span> encontró pacientes con Alzheimer viviendo solos gracias a entornos con notas, etiquetas y álbumes —el mundo compensa déficits.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Richard Feynman</span> respondió a <span class=\"person\">Charles Wiener</span> que el papel no es un registro sino parte del trabajo. «Hay que trabajar en el papel», dijo. Pensar es un ciclo cerebro-papel, no solo actividad interna. Si un chip neural funciona igual dentro o fuera del cráneo vía radio, ¿por qué no contar el chip externo como parte de la mente?",
        },
        {
          type: 'paragraph',
          html: "El intestino tiene alrededor de <span class=\"num\">500 millones</span> de neuronas. La microbiota produce hasta el <span class=\"num\">95%</span> de la serotonina y modula timidez o agresión en ratones con antibióticos. Las acciones <span class=\"term\">epistémicas</span>, como mirar donde se pasará el balón, dependen de predicciones temporales. Los retrasos de red rompen pensar-vía-teclado porque el cerebro espera latencias específicas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Acoplamiento",
              "description": "Herramienta fiable integrada en predicciones de planificación.",
              "icon": "🔧"
            },
            {
              "title": "Microbioma",
              "description": "Ecología corporal que altera ánimo y aprendizaje.",
              "icon": "🧫"
            },
            {
              "title": "Epistémicas",
              "description": "Movimientos para reducir incertidumbre, no solo lograr metas.",
              "icon": "📍"
            }
          ],
        },
        {
          type: 'key',
          html: "Cerebros predictivos ensamblan <span class=\"key-term\">mentes híbridas</span> con herramientas y entornos fiables.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Hackear la máquina de predicción",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Si la experiencia refleja expectativas confiadas, podemos modularla: rituales médicos, lenguaje, placebo, reencuadre del dolor, realidad virtual e incluso psicodélicos. La bata blanca del médico activa predicciones de eficacia aun sabiendo que es convención.",
        },
        {
          type: 'paragraph',
          html: "Los placebos funcionan en dolor, ansiedad, fatiga y rendimiento deportivo. Atletas mejoraron un <span class=\"num\">1,5%</span> con salina creída ergogénica. La cirugía placebo de rodilla alivia tanto como la real. <span class=\"person\">Ted Kaptchuk</span> logró mejoría clínica en <span class=\"num\">59%</span> con placebo honesto para síndrome de intestino irritable, frente al <span class=\"num\">35%</span> del grupo control, con «placebo» impreso en el frasco.",
        },
        {
          type: 'paragraph',
          html: "En dolor lumbar crónico, el placebo abierto redujo un <span class=\"num\">30%</span> el dolor y un <span class=\"num\">29%</span> la discapacidad. Los placebos de dosis extendida enseñan al cuerpo la cascada de alivio. Cuando pacientes con Parkinson recibieron cuatro dosis reales de apomorphina, la salina posterior replicó la respuesta. Reencuadrar adrenalina pre-escena o describir batidos idénticos como «cremosos» frente a «ligeros» cambia saciedad y <span class=\"term\">ghrelina</span>.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">reprocesamiento del dolor</span> desafía la inferencia «duele, no debo moverme» en dolor crónico nociplástico. Hannah Vickers evitó escaleras y reforzó el dolor. Renombrar ejercicios como «entrenamiento» alteró predicciones. La VR de Karuna Labs permite movimientos temidos en cuerpos virtuales y baja predicciones de dolor al moverse. El dolor sigue siendo real y neuronal. La intervención apunta a precisiones erróneas, no a negar sufrimiento.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "59%",
              "label": "Mejoría IBS con placebo honesto (Kaptchuk)"
            },
            {
              "value": "30%",
              "label": "Reducción dolor lumbar con placebo abierto"
            },
            {
              "value": "1,5%",
              "label": "Mejora atlética con inyección salina creída dopante"
            }
          ],
        },
        {
          type: 'key',
          html: "Hackear la mente es reentrenar <span class=\"key-term\">expectativas confiadas</span> con ritual, palabras, evidencia corporal y entorno.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Procesamiento predictivo",
    "description": "Marco donde cerebro genera predicciones y las corrige con error de predicción."
  },
  {
    "title": "Error de predicción",
    "description": "Diferencia entre señal sensorial y predicción; impulsa aprendizaje y percepción."
  },
  {
    "title": "Modelo generativo",
    "description": "Recurso interno capaz de producir datos plausibles (frases, imágenes, sensaciones)."
  },
  {
    "title": "Ponderación de precisión",
    "description": "Peso relativo de predicción vs. evidencia; implementa atención y saliencia."
  },
  {
    "title": "Inferencia activa",
    "description": "Percepción cambia predicciones; acción cambia el mundo/cuerpo para cumplirlas."
  },
  {
    "title": "Interocepción",
    "description": "Predicción de estados internos (corazón, vísceras, metabolismo)."
  },
  {
    "title": "Alostasis",
    "description": "Ajuste anticipado de parámetros corporales según contexto y metas."
  },
  {
    "title": "Trastorno funcional",
    "description": "Síntoma neurológico real sin causa estructural clásica; predicción patológica."
  },
  {
    "title": "Mente extendida",
    "description": "Herramientas acopladas forman un solo sistema cognitivo con el cerebro."
  },
  {
    "title": "Placebo honesto",
    "description": "Alivio clínico pese a saber que la intervención es inerte; señales inconscientes."
  }
],
  chronology: [
  {
    "year": "1664",
    "text": "Descartes describe percepción feedforward en *Tratado del hombre*."
  },
  {
    "year": "1677",
    "text": "Leeuwenhoek observa espermatozoides bajo fuertes expectativas preformacionistas."
  },
  {
    "year": "1789",
    "text": "Bentham introduce «sentience» en moral y legislación."
  },
  {
    "year": "1948",
    "text": "Shannon publica codificación predictiva lineal para compresión eficiente."
  },
  {
    "year": "1959",
    "text": "Codificación de video interframe explota predicción entre cuadros."
  },
  {
    "year": "1986",
    "text": "PDPD en Sussex inspira a Clark sobre mente extendida y redes."
  },
  {
    "year": "2012",
    "text": "Estudio: 89% universitarios siente vibraciones fantasma de móvil."
  },
  {
    "year": "2016",
    "text": "Se añade categoría clínica de dolor nociplástico."
  },
  {
    "year": "2023",
    "text": "Publicación de *The Experience Machine* (Pantheon)."
  }
],
  figures: [
  {
    "name": "Andy Clark",
    "role": "Filósofo cognitivo · arquitecto del procesamiento predictivo aplicado a mente y sociedad"
  },
  {
    "name": "David Marr",
    "role": "Neurociencia clásica de visión feedforward que el libro invierte"
  },
  {
    "name": "Claude Shannon",
    "role": "Teoría de información · raíces de compresión predictiva"
  },
  {
    "name": "David Chalmers",
    "role": "Problema difícil y meta-problema de la conciencia"
  },
  {
    "name": "Lisa Feldman Barrett",
    "role": "Realismo afectivo · sesgo de amenaza en percepción policial"
  },
  {
    "name": "Ted Kaptchuk",
    "role": "Placebos honestos en Harvard · IBS y dolor crónico"
  },
  {
    "name": "Richard Feynman",
    "role": "Pensamiento matemático como ciclo papel-cerebro, no registro pasivo"
  },
  {
    "name": "Anil Seth",
    "role": "Colega Sussex · cita a Anaïs Nin sobre percepción y expectativa"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "No percibimos el mundo como una ventana transparente.",
  "Lo construimos en cada instante mezclando predicciones del cerebro con señales sensoriales corregidas por error.",
  "Percepción, acción, emoción y dolor comparten la misma moneda.",
  "Esa moneda es minimizar error de predicción ponderado.",
  "Al entenderlo ganamos margen clínico y asumimos responsabilidad por los mundos que entrenan nuestras expectativas."
],
    highlight: "Somos océanos de predicción orquestados por cerebro, cuerpo y mundo",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Andy Clark",
    line2: "\"The Experience Machine\" · Pantheon Books · 2023",
  },
}
