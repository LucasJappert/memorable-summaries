import type { BookSummary } from '../types/book'

export const howWeLearn: BookSummary = {
  slug: "how-we-learn",
  meta: {
    title: "How We Learn: Why Brains Learn Better Than Any Machine Today",
    subtitle: "¿Qué enseña la neurociencia sobre atención, error y sueño?",
    author: "Stanislas Dehaene",
    meta: [
      "📖 2020 · Viking / Odile Jacob (Apprendre!, 2018)",
      "✍️ Neurocientífico · Collège de France",
    ],
    titleEs: "Cómo aprendemos: Por qué el cerebro aprende mejor que cualquier máquina hoy",
  },
  toc: [
  {
    "id": "prefacio",
    "num": "00",
    "label": "Introducción"
  },
  {
    "id": "cap1",
    "num": "01",
    "label": "Siete definiciones de aprendizaje"
  },
  {
    "id": "cap2",
    "num": "02",
    "label": "Por qué el cerebro aprende mejor que las máquinas"
  },
  {
    "id": "cap3",
    "num": "03",
    "label": "Conocimiento invisible de los bebés"
  },
  {
    "id": "cap4",
    "num": "04",
    "label": "Nacimiento de un cerebro"
  },
  {
    "id": "cap5",
    "num": "05",
    "label": "Parte del entorno"
  },
  {
    "id": "cap6",
    "num": "06",
    "label": "Recicla tu cerebro"
  },
  {
    "id": "cap7",
    "num": "07",
    "label": "Atención"
  },
  {
    "id": "cap8",
    "num": "08",
    "label": "Compromiso activo"
  },
  {
    "id": "cap9",
    "num": "09",
    "label": "Retroalimentación del error"
  },
  {
    "id": "cap10",
    "num": "10",
    "label": "Consolidación"
  },
  {
    "id": "conclusion",
    "num": "11",
    "label": "Reconciliar educación y neurociencia"
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
      id: "prefacio",
      num: "Introducción",
      title: "Homo docens",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "En <span class=\"num\">2009</span>, <span class=\"person\">Felipe</span>, un niño brasileño tetrapléjico y ciego por un disparo, escribía novelas trilingües desde su cama en el hospital Sarah de Brasilia. Casos como el suyo, junto a <span class=\"person\">Helen Keller</span>, el matemático ciego <span class=\"person\">Emmanuel Giroux</span> o el pintor <span class=\"person\">Nico</span> con medio cerebro, muestran la extraordinaria <span class=\"term\">plasticidad</span> humana.",
        },
        {
          type: 'paragraph',
          html: "Pero la plasticidad es caprichosa: la <span class=\"term\">alexia pura</span> puede dejar a lectores brillantes incapaces de leer «perro» tras un microictus, mientras otros niños superan traumas enormes. ¿Qué reglas gobiernan el aprendizaje?",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Dehaene</span> propone que somos <span class=\"term\">Homo docens</span>: la especie que se enseña a sí misma. El genoma (~<span class=\"num\">750 MB</span>) no puede pre-cablear ~<span class=\"num\">10¹⁵</span> bits de conexiones sinápticas. El aprendizaje complementa los genes. Incluso el nematodo <span class=\"term\">C. elegans</span> aprende por habituación y asociación.",
        },
        {
          type: 'quote',
          text: "Si no supiéramos cómo aprendemos, ¿cómo sabríamos enseñar?",
          attribution: "L. Rafael Reif, MIT (2017)",
        },
        {
          type: 'key',
          html: "Aprender es la mayor ventaja evolutiva humana; la escuela la amplifica, pero depende de principios cerebrales precisos.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "Siete definiciones de aprendizaje",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Primera definición: <span class=\"term\">aprender es formar un modelo interno del mundo exterior</span> —mapas mentales del barrio, del cuerpo, del lenguaje, de otras mentes. Incluso soñar es simular con esos modelos.",
        },
        {
          type: 'paragraph',
          html: "La segunda definición es <span class=\"term\">ajustar parámetros</span> del modelo (prismas que desplazan la visión, fonemas del japonés frente al inglés, parámetro de «posición de cabeza» en sintaxis). La tercera explota la <span class=\"term\">explosión combinatoria</span>: ~<span class=\"num\">50</span> parámetros binarios de gramática generan millones de lenguas posibles.",
        },
        {
          type: 'paragraph',
          html: "La cuarta es <span class=\"term\">minimizar errores</span> como las redes profundas (LeNet de <span class=\"person\">Yann LeCun</span> para códigos postales). De la quinta a la séptima: comprimir información, seleccionar lo relevante y generalizar. Son principios compartidos con el aprendizaje automático.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Modelo interno",
              "description": "Representación mental que predice y da sentido a los sentidos.",
              "icon": "🎯"
            },
            {
              "title": "Parámetros",
              "description": "Ajuste sináptico o cognitivo tras error (prismas, fonemas).",
              "icon": "🔧"
            },
            {
              "title": "Gradiente",
              "description": "Cada error indica cómo corregir el modelo (descenso de gradiente).",
              "icon": "📉"
            }
          ],
        },
        {
          type: 'key',
          html: "Las siete definiciones convergen: aprender es ajustar un modelo jerárquico minimizando sorpresa.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Por qué el cerebro aprende mejor que las máquinas",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Las redes profundas imitan procesamiento visual rápido, pero el cerebro humano añade razonamiento lento, simbólico y explícito. <span class=\"person\">Yoshua Bengio</span> advierte que muchas redes aprenden estadísticas superficiales, no conceptos abstractos.",
        },
        {
          type: 'paragraph',
          html: "Ventajas humanas: <span class=\"term\">abstracción</span> (reconocer «A» en cualquier fuente), <span class=\"term\">eficiencia de datos</span> (niños Tsimane con ~<span class=\"num\">60 h</span>/año de habla vs. sistemas que necesitan miles de horas), <span class=\"term\">aprendizaje social</span>, <span class=\"term\">aprendizaje en un ensayo</span>, <span class=\"term\">sistematicidad</span> (reglas como «cada número tiene sucesor»), <span class=\"term\">composición</span> de habilidades.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Jerry Fodor</span> postuló un <span class=\"term\">lenguaje del pensamiento</span> recursivo. <span class=\"person\">Descartes</span> ya sospechaba que las máquinas no compondrían significados como los humanos. AlphaGo no generaliza a variantes del tablero.",
        },
        {
          type: 'list',
          items: [
            "**Conceptos abstractos** — Esencia de objetos, no píxeles superficiales.",
            "**Datos eficientes** — Aprender mucho de pocos ejemplos.",
            "**Gramática de dominio** — Inferir leyes generales, no solo patrones."
          ],
        },
        {
          type: 'key',
          html: "Homo sapiens combina dos sistemas: reconocimiento rápido (tipo red profunda) y razonamiento simbólico consciente.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Conocimiento invisible de los bebés",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Contrario a <span class=\"person\">Locke</span>, <span class=\"person\">Rousseau</span> o <span class=\"person\">Turing</span>, el recién nacido no es una pizarra vacía. Posee <span class=\"term\">conocimiento núcleo</span> invisible porque no se manifiesta en conducta madura.",
        },
        {
          type: 'paragraph',
          html: "En el <span class=\"term\">concepto de objeto</span>, los bebés se sorprenden si un sólido desaparece, atraviesa paredes o se parte en dos varillas. En el <span class=\"term\">sentido numérico</span>, discriminan cardinalidades incluso cruzando sonidos e imágenes. Hacen «1+1=2» y «5+5≠5». <span class=\"person\">Piaget</span> se equivocó: objetos y números son innatos y se refinan.",
        },
        {
          type: 'paragraph',
          html: "En <span class=\"term\">probabilidad bayesiana</span>, los bebés miran más tiempo resultados improbables en urnas de bolas. Hacen inferencia inversa (muestras rojas → urna roja). <span class=\"person\">Fei Xu</span> y <span class=\"person\">Luca Bonatti</span> muestran deducción lógica antes del lenguaje.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~1+1",
              "label": "Suma sorpresa en bebés de meses"
            },
            {
              "value": "3:1",
              "label": "Bolas rojas vs. verdes en experimentos de probabilidad"
            }
          ],
        },
        {
          type: 'key',
          html: "Los bebés son científicos estadísticos: simulan, predicen y se sorprenden ante violaciones.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Nacimiento de un cerebro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Según <span class=\"person\">Gaston Bachelard</span>, el niño nace con cerebro <em>inacabado</em>, no vacío. La RMf de <span class=\"person\">Ghislaine Dehaene-Lambertz</span> mostró que bebés de <span class=\"num\">2 meses</span> activan la misma jerarquía lingüística que adultos (auditivo → temporal → <span class=\"term\">Broca</span>).",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">fascículo arcuato</span> conecta áreas de lenguaje desde el nacimiento. Todas las «autopistas» de fibras principales están en su lugar. Durante el tercer trimestre, los axones siguen gradientes químicos genéticos, como nervios que ya apuntan a dedos en el feto.",
        },
        {
          type: 'paragraph',
          html: "La corteza se pliega progresivamente. A las <span class=\"num\">35 semanas</span> los surcos principales y la asimetría temporal ya existen. El ADN no detalla cada sinapsis, pero sí el andamiaje regional.",
        },
        {
          type: 'key',
          html: "Naturaleza provee mapa cortical especializado; nurture refina conexiones locales.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Parte del entorno",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "<span class=\"person\">Santiago Ramón y Cajal</span> descubrió neuronas, dendritas, axones y <span class=\"term\">sinapsis</span>, unidades de cómputo nanoscópicas. Aprender modifica la fuerza sináptica con la regla hebbiana «neuronas que disparan juntas, se conectan juntas», formulada por <span class=\"person\">Donald Hebb</span>.",
        },
        {
          type: 'paragraph',
          html: "Los moduladores (<span class=\"term\">dopamina</span>, <span class=\"term\">acetilcolina</span>, serotonina) marcan qué episodios merecen memoria, por ejemplo el <span class=\"num\">11-S</span>. La amígdala y el hipocampo consolidan lo emocionalmente relevante.",
        },
        {
          type: 'paragraph',
          html: "La plasticidad tiene ventanas sensibles y límites espaciales (milímetros). Experiencias enriquecen dendritas y espinas, pero sobre un esqueleto innato.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Sinapsis",
              "description": "Punto de contacto donde se almacena información aprendida.",
              "icon": "🔗"
            },
            {
              "title": "Hebb",
              "description": "Refuerzo correlacionado de actividad pre/postsináptica.",
              "icon": "⚡"
            },
            {
              "title": "Neuromoduladores",
              "description": "Etiquetan importancia emocional para consolidar.",
              "icon": "🧪"
            }
          ],
        },
        {
          type: 'key',
          html: "Aprender es cambiar sinapsis bajo reglas hebbianas moduladas por emoción y atención.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "Recicla tu cerebro",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Los adultos analfabetos difieren en memoria verbal, reconocimiento de formas y espejos. Leer <em>mejora</em> la memoria, no la arruina (<span class=\"person\">Platón</span> se equivocaba). La escolarización transforma el sentido numérico: la recta numérica exacta y «n+1» son logros culturales.",
        },
        {
          type: 'paragraph',
          html: "La <span class=\"term\">hipótesis del reciclaje neuronal</span> sostiene que cada invención cultural (alfabeto, cifras) debe encontrar un «nicho neuronal»: circuitos evolutivos lo bastante similares y flexibles. Leer recicla áreas visuales. Calcular recicla circuitos de cantidad.",
        },
        {
          type: 'paragraph',
          html: "Diferente de <span class=\"term\">exaptación</span> evolutiva (lenta, genética): el reciclaje ocurre en días o años dentro de un individuo. <span class=\"person\">Nabokov</span> subrayaba lo milagroso de que signos escritos contengan mundos.",
        },
        {
          type: 'key',
          html: "Educar es reconverter circuitos ancestrales hacia funciones culturales nuevas.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Atención",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Primer pilar: <span class=\"term\">atención</span> selecciona información bajo saturación sensorial. <span class=\"person\">Michael Posner</span> distingue alerta, orientación y control ejecutivo. Sin atención, aprender es buscar una aguja en un pajar.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Yoshua Bengio</span> y <span class=\"person\">Kyunghyun Cho</span> (<span class=\"num\">2014</span>) integraron atención en traducción automática. Hoy las IA «iluminan» píxeles relevantes. En humanos, la atención consciente amplifica disparos hasta la corteza prefrontal y favorece potenciación a largo plazo.",
        },
        {
          type: 'paragraph',
          html: "Sistemas de alerta (dopamina, acetilcolina) pueden reabrir plasticidad —experimentos de <span class=\"person\">Michael Merzenich</span> en ratones. Pasión temprana puede invadir mapas corticales.",
        },
        {
          type: 'key',
          html: "Sin atención correcta no hay aprendizaje profundo; el docente debe capturar y guiar la atención.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "Compromiso activo",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El segundo pilar es el <span class=\"term\">compromiso activo</span>. El experimento de carrusel de <span class=\"person\">Richard Held</span> y <span class=\"person\">Alan Hein</span> (<span class=\"num\">1963</span>) mostró que gatitos activos desarrollan visión normal. Los pasivos quedan ciegos funcionales.",
        },
        {
          type: 'paragraph',
          html: "Activo no es fidgeting: es generar hipótesis y probarlas mentalmente. El efecto de <span class=\"term\">profundidad de procesamiento</span>: quien juzga si una palabra es animal la recuerda ~<span class=\"num\">75 %</span> vs. ~<span class=\"num\">33 %</span> quien mira mayúsculas. La corteza frontal y el hipocampo predicen recuerdo futuro.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Henry Roediger</span> mostró que la dificultad deseable que exige esfuerzo cognitivo mejora la retención. La pasividad deja huellas mínimas.",
        },
        {
          type: 'key',
          html: "El cerebro aprende formulando modelos y sometiéndolos a prueba, no acumulando datos pasivamente.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Retroalimentación del error",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El tercer pilar es la <span class=\"term\">retroalimentación del error</span>. <span class=\"person\">Alexander Grothendieck</span> creyó π=3 por trazar círculos. Su «error» fue descubrimiento genuino. Sin error no hay progreso.",
        },
        {
          type: 'paragraph',
          html: "<span class=\"person\">Robert Rescorla</span> y <span class=\"person\">Allan Wagner</span> mostraron que el cerebro aprende solo si hay <span class=\"term\">error de predicción</span>: «organisms only learn when events violate their expectations». La sorpresa impulsa el condicionamiento pavloviano y las reglas delta del aprendizaje automático.",
        },
        {
          type: 'paragraph',
          html: "Los tres pilares se entrelazan: atención selecciona inputs, compromiso activo genera predicciones, error las corrige.",
        },
        {
          type: 'quote',
          text: "Pensar es pasar de un error al siguiente.",
          attribution: "Alain, Propos sur l'éducation (1932)",
        },
        {
          type: 'key',
          html: "La calidad del feedback determina la velocidad de aprendizaje.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Consolidación",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "El cuarto pilar es la <span class=\"term\">consolidación</span>. Un lector principiante tarda ~<span class=\"num\">0,2 s</span> por letra. Después de ~<span class=\"num\">3 años</span> lee palabras de 3–8 letras en paralelo. Lo consciente y lento se automatiza.",
        },
        {
          type: 'paragraph',
          html: "Los lectores expertos liberan corteza parietal y prefrontal. La lectura migra a circuitos especializados (<span class=\"term\">área de forma visual de palabras</span>). Igual ocurre con mecanografía, música o cálculo: el control pasa a ganglios basales.",
        },
        {
          type: 'paragraph',
          html: "El <span class=\"term\">sueño</span> consolida: desde <span class=\"person\">Jenkins y Dallenbach</span> (<span class=\"num\">1924</span>) se sabe que distribuir estudio y dormir multiplica retención. De noche el cerebro replaya lo importante.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "~3 años",
              "label": "Pasar de lectura serial a paralela"
            },
            {
              "value": "×10–100",
              "label": "Factor de mejora nocturna (según Dehaene)"
            }
          ],
        },
        {
          type: 'key',
          html: "Automatizar libera recursos ejecutivos para tareas superiores; el sueño es parte del algoritmo.",
        },
      ],
    },
    {
      id: "conclusion",
      num: "11",
      title: "Reconciliar educación y neurociencia",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "Mitad a desechar: los bebés no son esponjas pasivas. La plasticidad no es ilimitada. Los errores son necesarios. El sueño no es descanso vacío. Las máquinas no superan un recién nacido en eficiencia global.",
        },
        {
          type: 'paragraph',
          html: "Dehaene lista mensajes prácticos: no subestimar niños, aprovechar ventanas sensibles del lenguaje, enriquecer entorno, enseñar con los cuatro pilares (atención, compromiso, error, consolidación), valorar sueño y espaciado, formar docentes en ciencia del aprendizaje.",
        },
        {
          type: 'paragraph',
          html: "Comparaciones TIMSS alarman: países como Francia cayeron en matemáticas mientras Asia avanza —la ciencia del aprendizaje puede invertir la tendencia si se aplica en aula y política.",
        },
        {
          type: 'key',
          html: "Pedagogía es un arte basado en ciencia precisa del cerebro —como la medicina.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Cuatro pilares",
    "description": "Atención, compromiso activo, error, consolidación (incl. sueño)."
  },
  {
    "title": "Conocimiento núcleo",
    "description": "Intuiciones innatas de objetos, número, probabilidad, personas."
  },
  {
    "title": "Reciclaje neuronal",
    "description": "Reorientar circuitos evolutivos hacia lectura, matemáticas, etc."
  },
  {
    "title": "Error de predicción",
    "description": "Señal de sorpresa que ajusta modelos internos."
  },
  {
    "title": "Plasticidad sináptica",
    "description": "Cambio hebbiano de conexiones según experiencia."
  },
  {
    "title": "Explosión combinatoria",
    "description": "Combinar parámetros genera espacio vasto de hipótesis."
  },
  {
    "title": "Lenguaje del pensamiento",
    "description": "Símbolos recursivos para abstracción y reglas generales."
  },
  {
    "title": "Homo docens",
    "description": "Especie que se enseña mediante cultura y escuela."
  }
],
  chronology: [
  {
    "year": "1762",
    "text": "Rousseau: mente infantil como «pizarra» (refutada)."
  },
  {
    "year": "1904",
    "text": "Cajal: neuronas, sinapsis y plasticidad estructural."
  },
  {
    "year": "1949",
    "text": "Hebb: regla «fire together, wire together»."
  },
  {
    "year": "1963",
    "text": "Held & Hein: aprendizaje activo en visión felina."
  },
  {
    "year": "1972",
    "text": "Rescorla-Wagner: aprendizaje por error de predicción."
  },
  {
    "year": "2009",
    "text": "Felipe en Brasilia inspira el enfoque del libro."
  },
  {
    "year": "2014",
    "text": "Atención integrada en redes neuronales (Bengio & Cho)."
  },
  {
    "year": "2018–20",
    "text": "Apprendre! (FR) → How We Learn (EN)."
  }
],
  figures: [
  {
    "name": "Stanislas Dehaene",
    "role": "Autor; pionero en lectura, número y aprendizaje."
  },
  {
    "name": "Ghislaine Dehaene-Lambertz",
    "role": "RMf funcional en lactantes; lenguaje temprano."
  },
  {
    "name": "Santiago Ramón y Cajal",
    "role": "Anatomía neuronal y sinapsis."
  },
  {
    "name": "Donald Hebb",
    "role": "Regla hebbiana de plasticidad."
  },
  {
    "name": "Jean Piaget",
    "role": "Teoría del desarrollo (superada en número/objeto)."
  },
  {
    "name": "Yoshua Bengio / Yann LeCun",
    "role": "Aprendizaje profundo e inspiración comparativa."
  },
  {
    "name": "Richard Held",
    "role": "Experimento carrusel: visión requiere acción."
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "Aprender es ajustar modelos internos jerárquicos minimizando error, sobre un cerebro ya estructurado al nacer.",
  "La escuela recicla circuitos evolutivos hacia cultura simbólica; las máquinas aún no igualan nuestra abstracción ni eficiencia.",
  "Negar la ciencia del aprendizaje perjudica a millones de niños.",
  "Educar bien es aplicar neurociencia con humildad y rigor.",
  "Homo docens puede seguir mejorando mientras entienda su propio algorismo."
],
    highlight: "Atención, compromiso activo, feedback y consolidación —incluido el sueño— son los cuatro pilares de toda enseñanza eficaz.",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Stanislas Dehaene",
    line2: "\"How We Learn\" · Viking · 2020",
  },
}
