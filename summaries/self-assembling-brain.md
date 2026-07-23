---
title: "The Self-Assembling Brain: How Neural Networks Grow Smarter"
title_es: "El cerebro autoensamblado: cómo las redes neuronales se vuelven más inteligentes"
subtitle: "Del código genético al aprendizaje: por qué la inteligencia emerge en el tiempo"
author: "Peter Robin Hiesinger"
meta:
  - "📖 2021 · Princeton University Press"
  - "✍️ Neurobiología del desarrollo, información algorítmica e inteligencia artificial"
slug: self-assembling-brain
lang: es
---

# Contenido

<!-- toc: id | num | label -->
| id | num | label |
|----|-----|-------|
| cierre | ★ | La idea central |
| prefacio | 00 | Prólogo |
| cap1 | 01 | Introducción |
| cap2 | 02 | Crecimiento algorítmico |
| cap3 | 03 | Ruido e información relevante |
| cap4 | 04 | Agentes autónomos y reglas locales |
| cap5 | 05 | La paradoja de Benzer |
| cap6 | 06 | Moléculas, niveles y chemoafinidad |
| cap7 | 07 | Eres tu historia |
| cap8 | 08 | Autoensamblaje vs construir y entrenar |
| cap9 | 09 | Fronteras finales |
| cap10 | 10 | Epílogo |
| conceptos | ✦ | Conceptos clave |
| cronologia | ◈ | Cronología |
| figuras | ✦ | Figuras clave |

---

# cierre

## title: La idea central

<!-- closing -->
El cerebro no viene descrito en los genes como un circuito terminado.
Los genes codifican reglas que se ejecutan con tiempo y energía.
La inteligencia emerge cuando esas reglas interactúan con ruido, selección y retroalimentación.
<!-- highlight -->Sin crecimiento algorítmico no hay forma de «leer» toda la información que produce una red inteligente.<!-- /highlight -->
El desarrollo no es un prefacio de la función: es su continuidad.
La IA actual muestra atajos poderosos para tareas concretas, pero no para flexibilidad amplia.

---

# prefacio

## num: Prefacio
## title: La semilla, el alien y la información que se despliega

<!-- paragraph lead -->
¿Qué información contienen los genes cuando «codifican» un cerebro? El libro abre con una fábula: un alien escanea una semilla de manzana y obtiene toda su química molecular. Aun así, no puede anticipar la forma del árbol sin dejarla crecer.

<!-- paragraph -->
Esa escena introduce la tesis central. El cerebro no se entiende como <span class="term">plano final</span> (un diagrama de cableado terminado). Es un <span class="term">autoensamblaje</span> (formación gradual por reglas locales). El proceso requiere <span class="num">tiempo</span> y energía.

<!-- paragraph -->
<span class="person">Peter Robin Hiesinger</span>, neurobiólogo autor del libro, sostiene que el genoma no trae un mapa de conexiones. Trae reglas que se ejecutan en interacción con el entorno celular cambiante.

<!-- paragraph -->
El prólogo prepara un puente entre <span class="term">neurobiología del desarrollo</span> (cómo madura el cerebro desde el embrión) e <span class="term">inteligencia artificial</span> (sistemas informáticos que aprenden). En ambos campos importa menos fotografiar el estado final que comprender cómo las reglas locales generan organización global.

<!-- key -->
El cerebro se parece más a un programa que se ejecuta que a un cableado prefijado.

<!-- bridge -->
Para ver por qué esa metáfora importa, hay que enfrentar dos tradiciones que parecen opuestas pero comparten el mismo problema.

---

# cap1

## num: 01
## title: Introducción

<!-- paragraph lead -->
¿Qué debe estar codificado para que una red cerebral funcione? La introducción enfrenta dos tradiciones. La <span class="term">neurobiología</span> (ciencia del cerebro biológico) estudia cómo se cablea el órgano. La inteligencia artificial suele partir de redes prefabricadas y luego entrenarlas.

<!-- paragraph -->
El ejemplo de la mariposa monarca resume la dificultad. Migra hasta <span class="num">3.000 millas</span> hacia zonas de invernada precisas. El ciclo completo puede tomar <span class="num">3–5 generaciones</span>. La ruta no puede explicarse solo por aprendizaje individual.

<!-- paragraph -->
Hay información de desarrollo ya incorporada antes del aprendizaje. El autor estructura el libro en diez seminarios ficticios. Participan un neurocientífico, una genetista del desarrollo, un ingeniero de robots y un investigador de IA.

<!-- paragraph -->
Un seminario histórico recorre las dicotomías que enmarcan el debate. Aparecen el procesamiento simbólico frente al conexionismo. <span class="person">Roger Sperry</span>, neurocientífico pionero, reclamó cableado específico frente a redes aleatorias aprendidas.

<!-- paragraph -->
Hiesinger propone mirar el cableado cerebral como navegación en un mapa que se construye mientras se navega. No hay un «GPS» con destino final inscrito. Hay una secuencia de estados donde cada etapa habilita o restringe la siguiente.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🧠 | Problema de información | Qué debe estar codificado para generar conectividad funcional. |
| 🦋 | Monarca | Conducta heredada difícil de reducir a aprendizaje posterior. |
| 🧭 | Mapa en obra | El desarrollo cambia las condiciones de decisión a cada paso. |

<!-- key -->
Sin crecimiento temporal no se puede leer toda la información que «hay» en el genoma.

<!-- bridge -->
Esa intuición se formaliza cuando se distingue la información para generar un sistema de la información para describir su resultado.

---

# cap2

## num: 02
## title: Crecimiento algorítmico

<!-- paragraph lead -->
¿Por qué escanear el genoma no basta para predecir el cerebro? El capítulo distingue <span class="term">información algorítmica</span> (reglas que generan un resultado paso a paso) de información de endpoint (descripción del estado final). Describir el resultado puede requerir enormemente más bits que las reglas que lo producen.

<!-- paragraph -->
Hiesinger usa el <span class="term">Game of Life</span> de Conway (un autómata celular en una cuadrícula). También usa la <span class="term">rule 110</span> (la regla más simple conocida con completitud de Turing). En ambos casos no se deduce el estado final sin ejecutar todas las iteraciones.

<!-- paragraph -->
Desde la teoría de la información, la complejidad de Kolmogorov mide cuán comprimible es una descripción. Un conjunto corto de reglas puede producir patrones cuya descripción explícita es enorme. Lo decisivo es que sistemas deterministas pueden ser matemáticamente indecidibles.

<!-- paragraph -->
No hay atajo analítico: solo ejecutar el algoritmo completo. El paralelo biológico aparece con L-systems (reglas que generan formas ramificadas como árboles), cascadas de factores de transcripción y la relación entre entropía e información.

<!-- paragraph -->
Maxwell's demon ilustra que reducir desorden local exige información y energía. Crecer un cerebro consume ambas. A diferencia de un autómata celular con regla fija, el crecimiento biológico combina reglas que cambian en cada iteración.

<!-- paragraph -->
También hay retroalimentación entre genoma y productos génicos, y componentes estocásticos. La metáfora del blueprint (plano) falla: el genoma es una receta, no un diagrama de cableado.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| ♟️ | Rule 110 | El autómata más simple conocido con completitud de Turing. |
| 📦 | Kolmogorov | Distingue información para generar vs describir el resultado. |
| 🌿 | L-systems | Reglas iteradas que producen morfologías ramificadas complejas. |

<!-- key -->
El desarrollo cerebral usa información algorítmica: no describe el cerebro, lo hace emerger.

<!-- bridge -->
Pero un algoritmo biológico no siempre busca precisión perfecta: a veces incorpora variación aleatoria como parte del programa.

---

# cap3

## num: 03
## title: Ruido e información relevante

<!-- paragraph lead -->
¿El ruido siempre destruye la precisión biológica? Aquí el autor invierte una intuición habitual. El <span class="term">ruido</span> (variación aleatoria en un proceso) no siempre perjudica. Muchas veces la habilita.

<!-- paragraph -->
Procesos como la quimiotaxis bacteriana o la diversidad del sistema inmune funcionan gracias a variación aleatoria seguida de selección. En neurodesarrollo, el gen <span class="term">Dscam</span> en Drosophila (mosca del vinagre) puede generar casi <span class="num">40.000</span> variantes de proteína de superficie.

<!-- paragraph -->
Cada neurona expresa una versión aleatoria para auto-evitación (rechazo de conexiones con ramas propias). Sin esa aleatoriedad, las ramas dendríticas no pueden extenderse y se amontonan.

<!-- paragraph -->
Mecanismos como la señalización Notch permiten romper simetrías mediante inhibición lateral. Un proceso estocástico decide qué célula «gana» y cuál cede. El ruido puede ser parte del programa, no un error externo.

<!-- paragraph -->
Esto se conecta con el concepto de <span class="term">penetrancia</span> (grado en que una mutación se expresa en el fenotipo). Una mutación puede no manifestarse igual en todos los individuos por dependencia de contexto, umbrales y procesos estocásticos.

<!-- paragraph -->
La «información relevante» no es absoluta. Depende del nivel donde se evalúa el fenotipo.

<!-- key -->
La precisión biológica suele surgir de ruido más selección, no de control perfecto sin variación.

<!-- bridge -->
El ruido y la selección operan en agentes que deciden localmente, sin visión del resultado global.

---

# cap4

## num: 04
## title: Agentes autónomos y reglas locales

<!-- paragraph lead -->
¿Quién «decide» cada conexión sináptica? El desarrollo se entiende como interacción de <span class="term">agentes autónomos</span> (filopodios, conos de crecimiento, neuronas) que toman decisiones locales sin conocer el resultado global. El genoma envía al agente de viaje, pero una vez en marcha este debe «defenderse» en su entorno.

<!-- paragraph -->
La idea central es que la organización superior emerge de reglas locales con retroalimentación. Un filopodio no «sabe» el circuito final. Su dinámica de exploración y estabilización contribuye al patrón de conectividad.

<!-- paragraph -->
Hiesinger retoma debates de <span class="person">Gerald Edelman</span>, biólogo que propuso selección de grupos neuronales, y la tradición cibernética de <span class="person">W. Ross Ashby</span>, pionero de la autoorganización. La metáfora se extiende a enjambres, deportes colectivos y nanotecnología bottom-up.

<!-- paragraph -->
Ceder control local es el precio de flexibilidad y robustez. Incluso la muerte celular programada en C. elegans (un gusano modelo de <span class="num">302</span> neuronas) ilustra que el organismo selecciona la supervivencia del conjunto, no de cada célula.

<!-- paragraph -->
La neurona «quiere» crecer un axón y formar sinapsis. En ausencia de señales repulsivas, lo hará donde pueda. El cableado se logra más por exclusión y guía probabilística que por un director central.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🤝 | Agente autónomo | Actúa con reglas locales y conocimiento parcial del entorno. |
| 🔁 | Retroalimentación | Cada interacción altera el estado para la iteración siguiente. |
| 🧩 | Autoorganización | Orden global sin controlador central explícito. |

<!-- key -->
El cerebro se cablea porque miles de agentes locales coordinan sin un «arquitecto» global.

<!-- bridge -->
Esa lógica de agentes y selección también explica un enigma clásico de la neurogenética conductual.

---

# cap5

## num: 05
## title: La paradoja de Benzer

<!-- paragraph lead -->
¿Cómo puede una mutación puntual alterar una conducta compleja sin un «gen para» esa conducta? Este tramo aborda la <span class="term">paradoja de Benzer</span> (mutación conductual heredable sin mapeo uno a uno entre gen y comportamiento). El resultado emerge de trayectorias de desarrollo, no de correspondencias directas.

<!-- paragraph -->
<span class="person">Seymour Benzer</span>, genetista pionero, fundó la neurogenética conductual en Drosophila en los años 60. Usó pantallas de mutagénesis y selección artificial. Encontró mutantes con fenotipos conductuales específicos y heredables.

<!-- paragraph -->
Aparecen dos clases de mutaciones. Casos como period y timeless (genes del reloj circadiano molecular) enlazan mecanismo y conducta directamente. Otros, como mutaciones en enzimas metabólicas o en el factor fruitless, alteran conducta a través de cascadas de crecimiento impredecibles.

<!-- paragraph -->
La evolución selecciona la salida fenotípica y no predice la trayectoria interna. <span class="person">Stephen Wolfram</span>, investigador de sistemas complejos, subestimó esto al concluir que la evolución no puede «reprogramar» sistemas tan complejos como rule 110. La selección no necesita predecir.

<!-- paragraph -->
Solo evalúa el resultado tras el crecimiento completo.

<!-- key -->
Una mutación puede reprogramar conducta sin que su función molecular «explique» linealmente esa conducta.

<!-- bridge -->
Esa paradoja se profundiza cuando se baja del gen a las moléculas que guían el cableado axonal.

---

# cap6

## num: 06
## title: Moléculas, niveles y chemoafinidad

<!-- paragraph lead -->
¿Por qué explicar un gen no basta para explicar una conducta? El «problema de niveles» afirma que una explicación válida en un nivel molecular no siempre traduce al nivel celular, circuital o conductual. Entre gen y conducta hay una cadena larga de transformaciones con realimentación.

<!-- paragraph -->
<span class="person">Roger Sperry</span> propuso la <span class="term">chemoafinidad estricta</span> (emparejamiento químico uno a uno, como cerradura y llave). La búsqueda de moléculas guía (ephrinas, netrina/unc-6) validó parte de la visión, pero el mecanismo resultó más complejo.

<!-- paragraph -->
Intervienen señales repulsivas y posicionamiento relativo. <span class="person">Michael Gaze</span>, neurobiólogo del sistema visual, propuso este último enfoque. También hay <span class="term">instrucciones compuestas</span> (decisiones por múltiples factores contextuales, sin dominancia de uno solo).

<!-- paragraph -->
<span class="person">Sydney Brenner</span>, biólogo molecular, eligió C. elegans (<span class="num">302</span> neuronas) para conectómica completa. El diagrama de cableado de 1985 no reveló por sí solo cómo los genes controlan el sistema. Proyectos como OpenWorm muestran que simular «vida digital» exige decidir qué nivel de detalle conservar.

<!-- paragraph -->
La distinción instructivo vs permisivo es un continuo. Netrina, por ejemplo, funciona como atrayente de largo alcance, señal a lo largo del camino y factor permisivo según contexto. Cada atajo de simulación restringe qué clase de inteligencia puede emerger.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🔑 | Chemoafinidad | Moléculas que guían crecimiento axonal; versión estricta vs general. |
| 🧬 | Paradoja de Benzer | Mutación conductual sin gen lineal «para» esa conducta. |
| 📊 | GWAS | Estudios de asociación muestran límites para rasgos poligénicos. |

<!-- key -->
Entender requiere cambiar de nivel sin perder de vista cómo cada nivel condiciona al siguiente.

<!-- bridge -->
Si el desarrollo es un algoritmo en el tiempo, el aprendizaje no puede ser una fase separada.

---

# cap7

## num: 07
## title: Eres tu historia

<!-- paragraph lead -->
¿El aprendizaje es distinto del desarrollo cerebral? El capítulo sostiene que la función es continuación del desarrollo. Aprender también es crecimiento algorítmico. La frase <span class="term">you are your history</span> (eres tu historia) resume que memoria y sesgo surgen de acumulación temporal.

<!-- paragraph -->
La retina de vertebrados, con fotorreceptores en el lado «equivocado», ilustra la carga histórica evolutiva. No es diseño óptimo, sino consecuencia de un pliegue embrionario bloqueado por la evolución. <span class="person">Stephen Jay Gould</span>, paleontólogo, llamó <span class="term">spandrels</span> (subproductos estructurales, no adaptaciones directas) a rasgos que surgen como subproducto.

<!-- paragraph -->
Las columnas corticales de Mountcastle y los experimentos de Hubel y Wiesel muestran plasticidad. Su necesidad funcional absoluta sigue debatida. La arquitectura puede ser spandrel de un desarrollo eficiente, no la mejor solución de ingeniería.

<!-- paragraph -->
<span class="person">Jeff Hawkins</span>, investigador de IA, propone memoria-predicción secuencial. Edelman describe selección de grupos neuronales por reentrada. En ambos casos, almacenar, recuperar y modificar memoria son el mismo proceso algorítmico en el tiempo.

<!-- paragraph -->
Una red entrenada con datos en distinto orden será una red distinta.

<!-- key -->
Toda inteligencia funciona con arrastre histórico: cada aprendizaje reescribe parcialmente la red.

<!-- bridge -->
Esa continuidad entre desarrollo y función obliga a contrastar el cerebro biológico con la estrategia dominante de la IA.

---

# cap8

## num: 08
## title: Autoensamblaje vs construir y entrenar

<!-- paragraph lead -->
¿Por qué la IA actual parte de redes prefabricadas y el cerebro no? El capítulo contrapone dos estrategias. Una es el <span class="term">diseño top-down</span> (arquitectura fija más entrenamiento posterior). La otra es el autoensamblaje (estructura que emerge durante el proceso).

<!-- paragraph -->
La IA dominante usa la primera. El cerebro biológico combina crecimiento, poda, actividad y aprendizaje. Las ANN tienen topología prefijada desde el perceptrón de <span class="person">Frank Rosenblatt</span> (<span class="num">1958</span>) hasta las redes convolucionales actuales. Sus conexiones iniciales suelen ser aleatorias.

<!-- paragraph -->
El cerebro biológico nunca arranca de ese modo. El número de neuronas, los tipos celulares y las conexiones cambian mientras aprende. Una red de clasificación de imágenes con <span class="num">650.000</span> neuronas supera a una mosca en visión.

<!-- paragraph -->
El cerebro de Drosophila tiene ~<span class="num">100.000</span> neuronas e integra vuelo, cortejo, metabolismo y más. La brecha entre IA de tarea única e inteligencia de insecto es mayor que entre mosca y humano.

<!-- paragraph -->
Investigadores como Hintze y Adami evolucionan genomas que codifican redes. <span class="person">Geoffrey Hinton</span>, pionero del deep learning, critica la falta de niveles estructurales y la dependencia de backpropagation. La propuesta no es copiar biología por fetichismo.

<!-- paragraph -->
Busca reconocer que omitir desarrollo estructural puede ser el atajo que limita la generalidad.

<!-- key -->
Entrenar redes prefabricadas funciona para tareas acotadas. Para inteligencia amplia quizá falte crecimiento.

<!-- bridge -->
Esas diferencias marcan los límites de las fronteras finales entre cerebro e IA.

---

# cap9

## num: 09
## title: Fronteras finales

<!-- paragraph lead -->
¿Basta con más ancho de banda para conectar cerebro e IA? El capítulo final abre tres fronteras: interfaces cerebro-máquina, emulación cerebral completa y límites de predicción. La tesis común es que «más ancho de banda» no resuelve por sí solo el problema del tipo de información que se intercambia.

<!-- paragraph -->
Sobre <span class="term">whole brain emulation</span> (copia computacional del cerebro entero), Hiesinger advierte que cualquier simulación depende de atajos de nivel. Cuanto más se recorta detalle dinámico, más se restringe qué clase de inteligencia puede emerger o preservarse.

<!-- paragraph -->
Las interfaces corticales actuales estimulan regiones, no células específicas. La integración requiere coaprendizaje en el tiempo, no solo hardware. «Crecer juntos» (desarrollo) y «aprender juntos» (función) son procesos distintos que no se pueden acortar arbitrariamente.

<!-- paragraph -->
Hiesinger explora el <span class="term">sesgo cognitivo</span> (distorsión sistemática del juicio por la historia de aprendizaje). Los sesgos no son solo fallas. Son resultado natural de un sistema que aprende secuencialmente y prioriza coherencia con su historia.

<!-- paragraph -->
Décadas de entrenamiento en un paradigma dificultan adoptar otro, en ciencia como en ingeniería.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🔌 | Interfaz IA-cerebro | Requiere coaprendizaje temporal, no solo ancho de banda. |
| 🧬 | Emulación total | Depende de qué niveles de detalle se conservan o descartan. |
| 🧠 | Sesgo cognitivo | Efecto estructural del aprendizaje histórico y expectativas previas. |

<!-- key -->
No hay inteligencia «general» sin decidir qué historia, qué niveles y qué atajos se aceptan.

<!-- bridge -->
El epílogo cierra los diez seminarios con una posición deliberadamente abierta.

---

# cap10

## num: 10
## title: Epílogo

<!-- paragraph lead -->
¿Qué disciplina tiene el mapa completo del cerebro y la inteligencia? El epílogo, en forma de diálogo telefónico entre Alfred y Aki, cierra con una posición pragmática. Ninguna disciplina tiene el mapa completo y todas operan con sesgos de su propia tradición.

<!-- paragraph -->
Mencionan el trabajo conjunto de Pramesh y Minda en evolución computacional con mecanismos de desarrollo. También el auge de <span class="term">Developmental Robotics</span> (robótica que incorpora crecimiento estructural) y sistemas como AlphaZero que aprenden reglas por autojuego.

<!-- paragraph -->
Aki reconoce que los atajos actuales funcionan para tareas concretas. La pregunta de qué inteligencia se desea permanece abierta. La conversación evoca evolución, entropía y la «pregunta fundamental de información».

<!-- paragraph -->
¿De dónde vienen los cerebros en un universo que tiende al desorden? Hiesinger no ofrece receta única. Ofrece una advertencia consistente: cuando se ignoran desarrollo, contexto y selección, se subestima el origen real de la robustez biológica.

<!-- key -->
La pregunta no es solo cómo entrenar mejor, sino qué proceso completo de crecimiento queremos modelar.

---

# conceptos

## num: ✦
## title: Conceptos clave

<!-- concept-grid -->
| title | description |
|-------|-------------|
| Crecimiento algorítmico | Proceso que consume tiempo y energía; reglas iterativas generan estados cada vez más complejos. |
| Autoensamblaje | Formación de conectividad y función sin plano final explícito, mediante interacciones locales. |
| Complejidad de Kolmogorov | Distinción entre información para generar un sistema e información para describir su estado final. |
| Despliegue de información | Información nueva que emerge en cada paso del desarrollo; no estaba en el genoma inicial. |
| Agentes autónomos | Componentes que deciden localmente sin conocimiento del resultado global. |
| Paradoja de Benzer | Mutación que altera conducta heredable sin un gen lineal «para» esa conducta. |
| Instrucción compuesta | Decisión biológica producida por múltiples factores contextuales, no por una sola señal. |
| Problema de niveles | Dificultad de traducir sin pérdida entre explicaciones moleculares, celulares y conductuales. |
| Programación evolutiva | Optimización por variación y selección de salidas tras el crecimiento completo. |
| Función como desarrollo continuo | Aprendizaje, memoria y envejecimiento extienden la misma lógica de crecimiento algorítmico. |

---

# cronologia

## num: ◈
## title: Cronología de referencias y hitos

<!-- timeline -->
| year | text |
|------|------|
| 1949 | <span class="person">Donald Hebb</span> publica principios de plasticidad sináptica («fire together, wire together»). |
| 1952 | <span class="person">W. Ross Ashby</span> publica *Design for a Brain* y formaliza autoorganización. |
| 1958 | <span class="person">Frank Rosenblatt</span> presenta el perceptrón, base histórica de las ANN modernas. |
| 1960s | <span class="person">Seymour Benzer</span> inaugura la neurogenética conductual en Drosophila. |
| 1985 | Primer conectoma completo de C. elegans (302 neuronas). |
| 1994 | Aislamiento de netrina; molécula guía clásica del cableado axonal. |
| 2012 | Explosión de deep learning en aplicaciones masivas de IA. |
| 2017 | Nobel de medicina por el reloj circadiano molecular (Hall, Rosbash, Young). |
| 2018 | Nobel de química por evolución dirigida de enzimas (Arnold). |
| 2021 | Publicación de este libro, integrando neurodesarrollo, teoría de información e IA. |

---

# figuras

## num: ✦
## title: Figuras clave

<!-- figures -->
| name | role |
|------|------|
| Peter Robin Hiesinger | Autor; integra neurobiología del desarrollo con teoría algorítmica e IA. |
| Roger Sperry | Impulsa la especificidad del cableado y la hipótesis de chemoafinidad. |
| Seymour Benzer | Fundador de la neurogenética conductual en mosca. |
| Sydney Brenner | Modelo C. elegans y puente entre genética, desarrollo y conectómica. |
| Michael Gaze | Posicionamiento relativo frente a códigos de dirección absolutos. |
| W. Ross Ashby | Pionero de cibernética y autoorganización aplicada al cerebro. |
| Marvin Minsky | Figura central de IA; define inteligencia artificial como ciencia de máquinas. |
| Geoffrey Hinton | Referente de redes profundas; crítico de límites de arquitecturas actuales. |
| Stephen Jay Gould | Spandrels y exaptación; límites del adaptacionismo ingenuo. |
| Gerald Edelman | Selección de grupos neuronales y teoría de reentrada. |

---

# footer

line1: Resumen generado a partir de la obra de Peter Robin Hiesinger
line2: "The Self-Assembling Brain: How Neural Networks Grow Smarter" · Princeton University Press · 2021
