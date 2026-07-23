---
title: "How We Learn: Why Brains Learn Better Than Any Machine Today"
title_es: "Cómo aprendemos: Por qué el cerebro aprende mejor que cualquier máquina hoy"
subtitle: "¿Qué enseña la neurociencia sobre atención, error y sueño?"
author: "Stanislas Dehaene"
meta:
  - "📖 2020 · Viking / Odile Jacob (Apprendre!, 2018)"
  - "✍️ Neurocientífico · Collège de France"
slug: how-we-learn
lang: es
---

# Contenido

| id | num | label |
|----|-----|-------|
| prefacio | 00 | Introducción |
| cap1 | 01 | Siete definiciones de aprendizaje |
| cap2 | 02 | Por qué el cerebro aprende mejor que las máquinas |
| cap3 | 03 | Conocimiento invisible de los bebés |
| cap4 | 04 | Nacimiento de un cerebro |
| cap5 | 05 | Parte del entorno |
| cap6 | 06 | Recicla tu cerebro |
| cap7 | 07 | Atención |
| cap8 | 08 | Compromiso activo |
| cap9 | 09 | Retroalimentación del error |
| cap10 | 10 | Consolidación |
| conclusion | 11 | Reconciliar educación y neurociencia |
| conceptos | ✦ | Conceptos clave |
| cronologia | ◈ | Cronología |
| figuras | ✦ | Figuras clave |
| cierre | — | La idea central |

---

# prefacio

## num: Introducción
## title: Homo docens

<!-- paragraph lead -->
¿Qué reglas gobiernan el aprendizaje cuando el cerebro se recupera de traumas enormes y falla de formas selectivas? En <span class="num">2009</span>, <span class="person">Felipe</span>, un niño brasileño tetrapléjico y ciego por un disparo, escribía novelas trilingües desde su cama en el hospital Sarah de Brasilia. Casos como el suyo muestran la extraordinaria <span class="term">plasticidad</span> (capacidad del cerebro de reorganizarse tras una lesión).

<!-- paragraph -->
<span class="person">Helen Keller</span> confirma ese poder. También el matemático ciego Emmanuel Giroux y el pintor Nico con medio cerebro. Pero la plasticidad es caprichosa. La <span class="term">alexia pura</span> (pérdida de la lectura con el resto del lenguaje intacto) puede dejar a lectores brillantes incapaces de leer «perro» tras un microictus. Otros niños superan lesiones enormes.

<!-- paragraph -->
El neurocientífico <span class="person">Stanislas Dehaene</span> pregunta qué reglas gobiernan el aprendizaje. También pregunta si entenderlas ayudaría a enseñar mejor y a construir máquinas más eficientes. El genoma humano (~<span class="num">750 MB</span>) no puede pre-cablear las ~<span class="num">10¹⁵</span> conexiones sinápticas posibles: aprender complementa los genes.

<!-- paragraph -->
Incluso el nematodo <span class="term">C. elegans</span> (un gusano microscópico con solo <span class="num">302</span> neuronas) aprende por habituación y asociación. Adaptarse al entorno concreto es más rápido que esperar mutaciones. Dehaene llama a nuestra especie <span class="term">Homo docens</span> (la que se enseña a sí misma). La escuela amplifica esa capacidad si respeta los cuatro pilares cerebrales.

<!-- quote -->
> Si no supiéramos cómo aprendemos, ¿cómo sabríamos enseñar?
— L. Rafael Reif, MIT (2017)

<!-- key -->
Aprender es la mayor ventaja evolutiva humana. La escuela la multiplica, pero solo si se apoyan en los algoritmos reales del cerebro.

<!-- bridge -->
Para entender esos algoritmos, Dehaene empieza traduciendo el aprendizaje en definiciones precisas que también usan las máquinas.

---

# cap1

## num: 01
## title: Siete definiciones de aprendizaje

<!-- paragraph lead -->
¿Qué significa «aprender» en términos concretos? Dehaene propone siete definiciones que también guían a las redes neuronales artificiales. La primera dice que <span class="term">aprender es formar un modelo interno del mundo exterior</span> (mapas mentales del barrio, del cuerpo, del lenguaje o de otras mentes). Incluso soñar es simular con esos modelos.

<!-- paragraph -->
Los datos sensoriales carecen de sentido cuando faltan esos modelos internos. La segunda definición es <span class="term">ajustar parámetros</span> — calibrar variables del modelo, como prismas que desplazan la visión. La tercera aprovecha la <span class="term">explosión combinatoria</span> (combinar pocos parámetros genera un espacio enorme de hipótesis).

<!-- paragraph -->
Unos ~<span class="num">50</span> parámetros binarios de gramática generan millones de lenguas posibles en una jerarquía de modelos anidados. La cuarta minimiza errores, como hace LeNet de <span class="person">Yann LeCun</span> para códigos postales. Cada error indica cómo corregir conexiones mediante descenso de gradiente.

<!-- paragraph -->
La quinta explora el espacio de posibilidades con aleatoriedad y curiosidad. La sexta optimiza una función de recompensa (actor-crítico, AlphaGo). La séptima restringe la búsqueda e impone hipótesis a priori. Las redes convolucionales asumen que lo aprendido en un punto sirve en todo el campo visual, como el genoma fija hiperparámetros cerebrales.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🎯 | Modelo interno | Representación jerárquica que predice y da sentido a los sentidos. |
| 🔧 | Parámetros | Ajuste sináptico tras error (prismas, fonemas, sintaxis). |
| 📉 | Gradiente | Cada error señala la dirección de corrección del modelo. |
| 🧬 | A priori | Genes acotan el espacio de hipótesis antes de la experiencia. |

<!-- key -->
Las siete definiciones convergen: aprender es ajustar un modelo jerárquico minimizando sorpresa sobre restricciones innatas.

<!-- bridge -->
Con ese marco algorítmico, Dehaene compara cerebro y máquina para ver dónde sigue ganando la biología.

---

# cap2

## num: 02
## title: Por qué el cerebro aprende mejor que las máquinas

<!-- paragraph lead -->
¿Por qué el cerebro humano sigue aprendiendo mejor que las mejores máquinas? Las redes profundas imitan el procesamiento visual inconsciente de los primeros <span class="num">200 ms</span>, pero el cerebro humano tiene razonamiento lento, simbólico y explícito. El investigador <span class="person">Yoshua Bengio</span> advierte que muchas redes aprenden regularidades superficiales, no conceptos abstractos.

<!-- paragraph -->
Un banano con un sticker puede clasificarse como tostadora. El cerebro conserva ventajas claras. La <span class="term">abstracción</span> (captar la esencia de «A» en cualquier fuente) supera a los píxeles. La <span class="term">eficiencia de datos</span> (aprender mucho de pocos ejemplos) hace que niños Tsimane aprendan con ~<span class="num">60 h</span>/año de habla. Los sistemas artificiales necesitan miles de horas.

<!-- paragraph -->
También destacan el aprendizaje social y el aprendizaje en un solo ensayo. La <span class="term">sistematicidad</span> (aplicar reglas generales como «cada número tiene sucesor») y la composición de habilidades aprendidas completan la ventaja. El filósofo <span class="person">Jerry Fodor</span> postuló un lenguaje del pensamiento recursivo. <span class="person">Descartes</span> ya sospechaba que las máquinas no compondrían significados como los humanos.

<!-- paragraph -->
AlphaGo no generaliza a variantes del tablero. El cerebro actúa además como estadístico bayesiano: rastrea probabilidades de forma óptima desde el nacimiento. Eso complementa, no sustituye, el reconocimiento rápido tipo red profunda.

<!-- list -->
- **Conceptos abstractos** — Esencia de objetos, no píxeles superficiales.
- **Datos eficientes** — Aprender mucho de pocos ejemplos.
- **Gramática de dominio** — Inferir leyes generales, no solo patrones.

<!-- key -->
<span class="key-term">Homo sapiens</span> combina reconocimiento rápido y razonamiento simbólico consciente que las máquinas aún no igualan.

<!-- bridge -->
Esas ventajas empiezan muy pronto, porque los bebés ya traen hipótesis innatas que la conducta aún no revela.

---

# cap3

## num: 03
## title: Conocimiento invisible de los bebés

<!-- paragraph lead -->
¿Los bebés son pizarras vacías? <span class="person">John Locke</span> y <span class="person">Jean-Jacques Rousseau</span> popularizaron esa metáfora. Pero el recién nacido ya tiene <span class="term">conocimiento núcleo</span> (intuiciones innatas sobre objetos, número y personas). Ese saber es invisible porque aún no se manifiesta en conducta madura.

<!-- paragraph -->
En el concepto de objeto, los bebés se sorprenden si un sólido desaparece, atravesa paredes o se parte en dos varillas. En el <span class="term">sentido numérico</span> (capacidad innata de discriminar cantidades), discriminan cardinalidades. Incluso reaccionan a «1+1=2» y a «5+5≠5». Según Dehaene, <span class="person">Jean Piaget</span> subestimó lo innato.

<!-- paragraph -->
Objetos y números se refinan con experiencia, no se inventan de cero. En probabilidad bayesiana, los bebés miran más tiempo resultados improbables en urnas de bolas. También hacen inferencia inversa. La psicóloga <span class="person">Fei Xu</span> y colegas muestran deducción lógica antes del lenguaje articulado.

<!-- paragraph -->
Los bebés infieren intenciones ajenas y actúan como científicos estadísticos. Simulan, predicen y se sorprenden ante violaciones de sus expectativas.

<!-- big-numbers -->
| value | label |
|-------|-------|
| 1+1 | Suma sorpresa en bebés de meses |
| 3:1 | Bolas rojas vs. verdes en experimentos de probabilidad |

<!-- key -->
Los bebés proyectan hipótesis innatas sobre el mundo y las ponen a prueba estadísticamente desde el primer año de vida.

<!-- bridge -->
Ese conocimiento temprano descansa sobre un cerebro que ya nace preorganizado, no vacío.

---

# cap4

## num: 04
## title: Nacimiento de un cerebro

<!-- paragraph lead -->
¿Nace el cerebro vacío o ya estructurado? Según el filósofo <span class="person">Gaston Bachelard</span>, el niño nace con cerebro <em>inacabado</em>, no vacío. La resonancia magnética funcional de <span class="person">Ghislaine Dehaene-Lambertz</span> mostró que bebés de <span class="num">2 meses</span> activan la misma jerarquía lingüística que adultos.

<!-- paragraph -->
El sonido llega al auditivo, luego al temporal y finalmente al área de <span class="term">Broca</span> (región clave del lenguaje articulado). El <span class="term">fascículo arcuato</span> (autopista de fibras que conecta áreas de lenguaje) ya existe al nacer. Las autopistas principales están en su lugar. Durante el tercer trimestre, los axones siguen gradientes químicos genéticos.

<!-- paragraph -->
A las <span class="num">35 semanas</span> los surcos principales y la asimetría temporal ya existen. El ADN no detalla cada sinapsis, pero sí el andamiaje regional. Áreas de cara, lugar, número y lenguaje emergen por autoorganización. La experiencia refina los últimos milímetros de conexión.

<!-- paragraph -->
Dislexia y discalculia muestran vulnerabilidades de conectividad, no ausencia total de plasticidad. No es tabula rasa. La naturaleza provee el mapa y la experiencia ajusta conexiones locales.

<!-- key -->
La naturaleza provee el mapa cortical especializado. La experiencia ajusta conexiones locales sobre ese esqueleto genético.

<!-- bridge -->
Sobre ese esqueleto, la experiencia modifica sinapsis concretas bajo reglas precisas.

---

# cap5

## num: 05
## title: Parte del entorno

<!-- paragraph lead -->
¿Dónde se almacena lo aprendido en el cerebro? El histólogo <span class="person">Santiago Ramón y Cajal</span> descubrió neuronas, dendritas, axones y <span class="term">sinapsis</span> (puntos de contacto entre neuronas donde se guarda lo aprendido). Aprender modifica la fuerza sináptica con la regla hebbiana «neuronas que disparan juntas, se conectan juntas», formulada por <span class="person">Donald Hebb</span> en <span class="num">1949</span>.

<!-- paragraph -->
Los moduladores químicos marcan qué episodios merecen memoria. La <span class="term">dopamina</span> (neuromodulador del refuerzo y la motivación) y la acetilcolina, junto con la serotonina, etiquetan lo relevante. La amígdala y el hipocampo consolidan lo emocionalmente significativo. La plasticidad presenta <span class="term">ventanas sensibles</span> (periodos en los que el cerebro aprende con especial facilidad).

<!-- paragraph -->
Esas ventanas cubren fonemas no nativos, visión binocular y segunda lengua. El declive marcado llega hacia los <span class="num">17</span> años. Hay sobreproducción y poda sináptica masiva en la infancia. El proyecto de Bucarest muestra que la adopción temprana puede rescatar desarrollo tras privación extrema.

<!-- paragraph -->
Pero las trazas de la primera lengua pueden persistir dormidas. Plasticidad no significa reescribir todo el cableado: refina conexiones locales, no borra el mapa entero.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🔗 | Sinapsis | Punto de contacto donde se almacena información aprendida. |
| ⚡ | Hebb | Refuerzo correlacionado de actividad pre/postsináptica. |
| 🧪 | Neuromoduladores | Etiquetan importancia emocional para consolidar. |

<!-- key -->
Aprender es cambiar sinapsis bajo reglas hebbianas moduladas por emoción, atención y ventanas sensibles del desarrollo.

<!-- bridge -->
Esa plasticidad permite que la cultura reconvierta circuitos ancestrales hacia funciones nuevas.

---

# cap6

## num: 06
## title: Recicla tu cerebro

<!-- paragraph lead -->
¿Cómo encaja la lectura o las matemáticas en un cerebro evolutivo? Los adultos analfabetos difieren en memoria verbal, reconocimiento de formas y espejos. Leer <em>mejora</em> la memoria, no la arruina: <span class="person">Platón</span> se equivocaba. La escolarización transforma el sentido numérico. La recta numérica exacta y «n+1» son logros culturales, no innatos.

<!-- paragraph -->
La <span class="term">hipótesis del reciclaje neuronal</span> (cada invención cultural busca un nicho en circuitos ya existentes) explica cómo el alfabeto reconvierte áreas evolutivas. Lo mismo ocurre con las cifras. Esos circuitos deben ser lo bastante similares y flexibles. Leer recicla áreas visuales hacia el <span class="term">área de forma visual de palabras</span> (región que reconoce letras y palabras escritas). Calcular recicla circuitos de cantidad.

<!-- paragraph -->
A diferencia de la exaptación evolutiva (adaptación genética lenta), el reciclaje ocurre en días o años dentro de un individuo. No cualquier circuito sirve para cualquier cultura. El escritor <span class="person">Vladimir Nabokov</span> subrayaba lo milagroso de que signos escritos contengan mundos enteros.

<!-- key -->
Educar es reconverter circuitos ancestrales hacia funciones culturales nuevas sobre un sustrato cerebral ya especializado.

<!-- bridge -->
Para que ese reciclaje funcione, el cerebro necesita cuatro pilares que modulan la plasticidad sináptica.

---

# cap7

## num: 07
## title: Atención

<!-- paragraph lead -->
¿Por qué la atención es el primer pilar del aprendizaje? La <span class="term">atención</span> (filtro que selecciona información bajo saturación sensorial) elige qué entra en memoria. El psicólogo <span class="person">Michael Posner</span> distingue alerta, orientación y control ejecutivo. Sin atención, aprender es buscar una aguja en un pajar.

<!-- paragraph -->
En <span class="num">2014</span>, Yoshua Bengio y Kyunghyun Cho integraron atención en traducción automática. La IA «ilumina» píxeles o palabras relevantes. En humanos, la atención consciente amplifica disparos hasta la corteza prefrontal. Eso favorece potenciación a largo plazo.

<!-- paragraph -->
Lo no atendido queda confinado a áreas sensoriales tempranas. Los sistemas de alerta químicos pueden reabrir plasticidad, como mostraron los experimentos de <span class="person">Michael Merzenich</span> en ratones. Una pasión temprana puede invadir mapas corticales vecinos. El docente debe capturar y guiar la atención, eliminando distracciones innecesarias.

<!-- key -->
Sin <span class="key-term">atención</span> correcta no hay aprendizaje profundo: la información debe amplificarse antes de consolidarse.

<!-- bridge -->
Pero seleccionar información no basta, porque hace falta compromiso activo con lo seleccionado.

---

# cap8

## num: 08
## title: Compromiso activo

<!-- paragraph lead -->
¿Por qué la pasividad deja tan poca huella? El segundo pilar es el <span class="term">compromiso activo</span> (generar hipótesis y probarlas, no solo recibir datos). En el experimento de carrusel de <span class="num">1963</span>, Richard Held y Alan Hein mostraron algo decisivo en gatitos.

<!-- paragraph -->
Un gatito que explora por sí solo desarrolla visión normal. El que se mueve igual pero sin controlar su desplazamiento queda ciego en la práctica. Ser activo no es moverse sin parar en clase. El cerebro aprende cuando genera hipótesis y las pone a prueba.

<!-- paragraph -->
En el experimento de <span class="term">profundidad de procesamiento</span> (cuán hondo se analiza el significado), tres grupos reciben la misma lista con tareas distintas. Procesar el significado deja memoria explícita. Lo superficial casi no deja huella.

<!-- big-numbers -->
| value | label |
|-------|-------|
| ~33 % | Recuerdo si juzgan mayúsculas |
| ~52 % | Recuerdo si juzgan rimas |
| ~75 % | Recuerdo si juzgan si es animal |

<!-- paragraph -->
<span class="person">Henry Roediger</span> mostró que la dificultad deseable mejora la retención. La pasividad deja huellas mínimas, pero hace falta currículo estructurado que guíe la exploración.

<!-- key -->
El cerebro aprende formulando modelos y sometiéndolos a prueba activa, no acumulando datos pasivamente.

<!-- bridge -->
Las predicciones activas solo sirven si el error las corrige con feedback adecuado.

---

# cap9

## num: 09
## title: Retroalimentación del error

<!-- paragraph lead -->
¿Por qué el error es indispensable para aprender? El tercer pilar es la <span class="term">retroalimentación del error</span> (señal que corrige predicciones fallidas). El matemático <span class="person">Alexander Grothendieck</span> creyó π=3 por trazar círculos: su «error» fue descubrimiento genuino. Sin error no hay progreso.

<!-- paragraph -->
En <span class="num">1972</span>, Robert Rescorla y Allan Wagner mostraron que el cerebro aprende solo si hay <span class="term">error de predicción</span> (sorpresa ante un resultado inesperado). Los organismos condicionan cuando los eventos violan expectativas. La sorpresa impulsa el condicionamiento pavloviano y las reglas delta del aprendizaje automático.

<!-- paragraph -->
Los cuatro pilares se entrelazan en un ciclo. La atención selecciona, el compromiso activo genera predicciones y el error las corrige. Castigar errores con notas o estigma destruye plasticidad emocional. El feedback debe ser correctivo, no punitivo.

<!-- quote -->
> Pensar es pasar de un error al siguiente.
— Alain, Propos sur l'éducation (1932)

<!-- key -->
La calidad del feedback correctivo, no la humillación, determina la velocidad de aprendizaje.

<!-- bridge -->
Corregido el modelo, falta consolidarlo, es decir automatizar lo aprendido y dejarlo fijo con el tiempo.

---

# cap10

## num: 10
## title: Consolidación

<!-- paragraph lead -->
¿Cómo pasa lo consciente y lento a automático y rápido? El cuarto pilar es la <span class="term">consolidación</span> (proceso que fija y automatiza lo aprendido). Un lector principiante tarda ~<span class="num">0,2 s</span> por letra. Después de ~<span class="num">3 años</span> lee palabras de 3–8 letras en paralelo.

<!-- paragraph -->
Lo consciente y lento se automatiza. Los lectores expertos liberan corteza parietal y prefrontal. La lectura migra a circuitos especializados. Lo mismo ocurre con mecanografía, música o cálculo. El control pasa a los ganglios basales. Automatizar libera recursos ejecutivos para tareas superiores.

<!-- paragraph -->
Los experimentos de Jenkins y Dallenbach (<span class="num">1924</span>) muestran que el <span class="term">sueño</span> (estado en el que el cerebro repasa lo aprendido) consolida memoria. Distribuir el estudio y dormir multiplica la retención. De noche el cerebro repasa modelos en bucle.

<!-- paragraph -->
Según Dehaene, la mejora nocturna puede alcanzar un factor de <span class="num">10 a 100</span>. Consolidar no es trivializar: libera corteza para razonamiento superior.

<!-- big-numbers -->
| value | label |
|-------|-------|
| ~3 años | Pasar de lectura serial a paralela |
| ×10–100 | Mejora nocturna de retención (según Dehaene) |

<!-- key -->
Consolidar automatiza habilidades y el sueño es parte esencial del algoritmo de aprendizaje humano.

<!-- bridge -->
Con los cuatro pilares claros, Dehaene vuelve a la escuela para desmontar mitos y traducir neurociencia en práctica.

---

# conclusion

## num: 11
## title: Reconciliar educación y neurociencia

<!-- paragraph lead -->
¿Qué mitos educativos conviene desechar y qué hacer en su lugar? Dehaene sostiene que la pedagogía es un arte basado en ciencia precisa del cerebro, como la medicina. Los bebés no son esponjas pasivas. La plasticidad no es ilimitada. Los errores son necesarios. El sueño no es descanso vacío.

<!-- paragraph -->
Las máquinas tampoco superan a un recién nacido en eficiencia global. Dehaene traduce la neurociencia en mensajes prácticos concretos. No hay que subestimar a los niños. Conviene aprovechar ventanas sensibles del lenguaje y enriquecer el entorno. Los estilos de aprendizaje distintos son un mito.

<!-- paragraph -->
Hay que enseñar con los cuatro pilares, valorar sueño y espaciado, tolerar errores sin castigo y formar docentes en ciencia del aprendizaje. Las comparaciones TIMSS son alarmantes. Francia cayó al último lugar europeo en matemáticas entre <span class="num">2003</span> y <span class="num">2015</span>, mientras Asia avanza.

<!-- paragraph -->
La ciencia del aprendizaje puede invertir la tendencia si se aplica en el aula y en la política educativa. No culpa solo a docentes, porque las causas son multifactoriales. Pero la ciencia puede orientar decisiones con humildad y rigor.

<!-- key -->
Educar bien exige aplicar neurociencia con humildad: mismos algoritmos cerebrales en todos, pilares compartidos, condiciones ambientales decisivas.

---

# conceptos

## num: ✦
## title: Conceptos clave

<!-- concept-grid -->
| title | description |
|-------|-------------|
| Cuatro pilares | Atención, compromiso activo, error, consolidación (incl. sueño). |
| Conocimiento núcleo | Intuiciones innatas de objetos, número, probabilidad, personas. |
| Reciclaje neuronal | Reorientar circuitos evolutivos hacia lectura, matemáticas, etc. |
| Error de predicción | Señal de sorpresa que ajusta modelos internos. |
| Plasticidad sináptica | Cambio hebbiano de conexiones según experiencia. |
| Explosión combinatoria | Combinar parámetros genera espacio vasto de hipótesis. |
| Lenguaje del pensamiento | Símbolos recursivos para abstracción y reglas generales. |
| Homo docens | Especie que se enseña mediante cultura y escuela. |

---

# cronologia

## num: ◈
## title: Cronología

<!-- timeline -->
| year | text |
|------|------|
| 1762 | Rousseau: mente infantil como «pizarra» (refutada). |
| 1904 | Cajal: neuronas, sinapsis y plasticidad estructural. |
| 1949 | Hebb: regla «fire together, wire together». |
| 1963 | Held & Hein: aprendizaje activo en visión felina. |
| 1972 | Rescorla-Wagner: aprendizaje por error de predicción. |
| 2009 | Felipe en Brasilia inspira el enfoque del libro. |
| 2014 | Atención integrada en redes neuronales (Bengio & Cho). |
| 2018–20 | Apprendre! (FR) → How We Learn (EN). |

---

# figuras

## num: ✦
## title: Figuras clave

<!-- figures -->
| name | role |
|------|------|
| Stanislas Dehaene | Autor; pionero en lectura, número y aprendizaje. |
| Ghislaine Dehaene-Lambertz | RMf funcional en lactantes; lenguaje temprano. |
| Santiago Ramón y Cajal | Anatomía neuronal y sinapsis. |
| Donald Hebb | Regla hebbiana de plasticidad. |
| Jean Piaget | Teoría del desarrollo (superada en número/objeto). |
| Yoshua Bengio / Yann LeCun | Aprendizaje profundo e inspiración comparativa. |
| Richard Held | Experimento carrusel: visión requiere acción. |

---

# cierre

## title: La idea central

<!-- closing -->
Aprender es ajustar modelos internos jerárquicos minimizando error, sobre un cerebro ya estructurado al nacer.
La escuela recicla circuitos evolutivos hacia cultura simbólica; las máquinas aún no igualan nuestra abstracción ni eficiencia.
<!-- highlight -->Atención, compromiso activo, feedback correctivo y consolidación —incluido el sueño— son los cuatro pilares de toda enseñanza eficaz.<!-- /highlight -->
Negar la ciencia del aprendizaje perjudica a millones de niños.
Educar bien es aplicar neurociencia con humildad y rigor.
Homo docens puede seguir mejorando mientras entienda su propio algoritmo.

---

# footer

line1: Resumen generado a partir de la obra de Stanislas Dehaene
line2: "How We Learn" · Viking · 2020
