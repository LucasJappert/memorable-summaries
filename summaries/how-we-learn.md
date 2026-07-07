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
En <span class="num">2009</span>, <span class="person">Felipe</span>, un niño brasileño tetrapléjico y ciego por un disparo, escribía novelas trilingües desde su cama en el hospital Sarah de Brasilia. Casos como el suyo, junto a <span class="person">Helen Keller</span>, el matemático ciego <span class="person">Emmanuel Giroux</span> o el pintor <span class="person">Nico</span> con medio cerebro, demuestran la extraordinaria <span class="term">plasticidad</span> humana: el lenguaje, la lectura y las abstracciones resisten traumas masivos.

<!-- paragraph -->
Pero la plasticidad es caprichosa. La <span class="term">alexia pura</span> puede dejar a lectores brillantes incapaces de leer «perro» tras un microictus, mientras otros niños superan lesiones enormes. <span class="person">Dehaene</span> pregunta qué reglas gobiernan el aprendizaje y si entenderlas ayudaría a enseñar mejor y a construir máquinas más eficientes.

<!-- paragraph -->
El genoma humano (~<span class="num">750 MB</span>) no puede pre-cablear las ~<span class="num">10¹⁵</span> conexiones sinápticas posibles: aprender complementa los genes. Incluso el nematodo <span class="term">C. elegans</span>, con solo <span class="num">302</span> neuronas, aprende por habituación y asociación porque adaptarse al entorno concreto es más rápido que esperar mutaciones. Dehaene llama a nuestra especie <span class="term">Homo docens</span>, la que se enseña a sí misma, y la escuela amplifica esa capacidad si respeta los cuatro pilares cerebrales.

<!-- quote -->
> Si no supiéramos cómo aprendemos, ¿cómo sabríamos enseñar?
— L. Rafael Reif, MIT (2017)

<!-- key -->
Aprender es la mayor ventaja evolutiva humana. La escuela la multiplica, pero solo si se apoyan en los algoritmos reales del cerebro.

---

# cap1

## num: 01
## title: Siete definiciones de aprendizaje

<!-- paragraph lead -->
La primera definición propone que <span class="term">aprender es formar un modelo interno del mundo exterior</span>. Son mapas mentales del barrio, del cuerpo, del lenguaje o de otras mentes. Incluso soñar es simular con esos modelos. Los datos sensoriales carecen de sentido cuando faltan esos modelos internos.

<!-- paragraph -->
La segunda es <span class="term">ajustar parámetros</span> del modelo: prismas que desplazan la visión, fonemas del japonés frente al inglés, el parámetro de «posición de cabeza» en sintaxis. La tercera aprovecha la <span class="term">explosión combinatoria</span>: ~<span class="num">50</span> parámetros binarios de gramática generan millones de lenguas posibles en una jerarquía de modelos anidados.

<!-- paragraph -->
La cuarta es <span class="term">minimizar errores</span>, como hace LeNet de <span class="person">Yann LeCun</span> para códigos postales. Cada error indica cómo corregir conexiones (descenso de gradiente). La quinta <span class="term">explora el espacio de posibilidades</span> con aleatoriedad y curiosidad. La sexta <span class="term">optimiza una función de recompensa</span> (actor-crítico, AlphaGo). La séptima <span class="term">restringe la búsqueda e impone hipótesis a priori</span>. Las redes convolucionales asumen que lo aprendido en un punto sirve en todo el campo visual, como el genoma fija hiperparámetros cerebrales.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🎯 | Modelo interno | Representación jerárquica que predice y da sentido a los sentidos. |
| 🔧 | Parámetros | Ajuste sináptico tras error (prismas, fonemas, sintaxis). |
| 📉 | Gradiente | Cada error señala la dirección de corrección del modelo. |
| 🧬 | A priori | Genes acotan el espacio de hipótesis antes de la experiencia. |

<!-- key -->
Las siete definiciones convergen: aprender es ajustar un modelo jerárquico minimizando sorpresa sobre restricciones innatas.

---

# cap2

## num: 02
## title: Por qué el cerebro aprende mejor que las máquinas

<!-- paragraph lead -->
Las redes profundas imitan el procesamiento visual inconsciente de los primeros <span class="num">200 ms</span>, pero el cerebro humano añade razonamiento lento, simbólico y explícito. <span class="person">Yoshua Bengio</span> advierte que muchas redes aprenden regularidades superficiales, no conceptos abstractos: un banano con un sticker puede clasificarse como tostadora.

<!-- paragraph -->
El cerebro conserva ventajas claras. La <span class="term">abstracción</span> reconoce «A» en cualquier fuente. La <span class="term">eficiencia de datos</span> hace que niños Tsimane aprendan con ~<span class="num">60 h</span>/año de habla frente a sistemas que necesitan miles de horas. También destacan el <span class="term">aprendizaje social</span>, el <span class="term">aprendizaje en un ensayo</span>, la <span class="term">sistematicidad</span> (reglas como «cada número tiene sucesor») y la <span class="term">composición</span> de habilidades aprendidas.

<!-- paragraph -->
<span class="person">Jerry Fodor</span> postuló un <span class="term">lenguaje del pensamiento</span> recursivo. <span class="person">Descartes</span> ya sospechaba que las máquinas no compondrían significados como los humanos. AlphaGo no generaliza a variantes del tablero. El cerebro actúa además como <span class="term">estadístico bayesiano</span>, rastreando probabilidades de forma óptima desde el nacimiento.

<!-- list -->
- **Conceptos abstractos** — Esencia de objetos, no píxeles superficiales.
- **Datos eficientes** — Aprender mucho de pocos ejemplos.
- **Gramática de dominio** — Inferir leyes generales, no solo patrones.

<!-- key -->
Homo sapiens combina reconocimiento rápido (tipo red profunda) y razonamiento simbólico consciente que las máquinas aún no igualan.

---

# cap3

## num: 03
## title: Conocimiento invisible de los bebés

<!-- paragraph lead -->
Contrario a <span class="person">Locke</span>, <span class="person">Rousseau</span> o la metáfora de la pizarra vacía, el recién nacido posee <span class="term">conocimiento núcleo</span> invisible porque aún no se manifiesta en conducta madura.

<!-- paragraph -->
En el <span class="term">concepto de objeto</span>, los bebés se sorprenden si un sólido desaparece, atraviesa paredes o se parte en dos varillas. En el <span class="term">sentido numérico</span>, discriminan cardinalidades e incluso reaccionan a «1+1=2» y a «5+5≠5». Según Dehaene, <span class="person">Piaget</span> subestimó lo innato. Objetos y números se refinan con experiencia, no se inventan de cero.

<!-- paragraph -->
En <span class="term">probabilidad bayesiana</span>, los bebés miran más tiempo resultados improbables en urnas de bolas e hacen inferencia inversa. <span class="person">Fei Xu</span> y colegas muestran deducción lógica e inferencia de intenciones antes del lenguaje articulado: los bebés son científicos estadísticos que simulan, predicen y se sorprenden ante violaciones.

<!-- big-numbers -->
| value | label |
|-------|-------|
| 1+1 | Suma sorpresa en bebés de meses |
| 3:1 | Bolas rojas vs. verdes en experimentos de probabilidad |

<!-- key -->
Los bebés proyectan hipótesis innatas sobre el mundo y las ponen a prueba estadísticamente desde el primer año de vida.

---

# cap4

## num: 04
## title: Nacimiento de un cerebro

<!-- paragraph lead -->
Según <span class="person">Gaston Bachelard</span>, el niño nace con cerebro <em>inacabado</em>, no vacío. La RMf de <span class="person">Ghislaine Dehaene-Lambertz</span> mostró que bebés de <span class="num">2 meses</span> activan la misma jerarquía lingüística que adultos (auditivo → temporal → <span class="term">Broca</span>).

<!-- paragraph -->
El <span class="term">fascículo arcuato</span> conecta áreas de lenguaje desde el nacimiento. Las autopistas de fibras principales ya están en su lugar. Durante el tercer trimestre, los axones siguen gradientes químicos genéticos. A las <span class="num">35 semanas</span> los surcos principales y la asimetría temporal ya existen.

<!-- paragraph -->
El ADN no detalla cada sinapsis, pero sí el andamiaje regional. Áreas de cara, lugar, número y lenguaje emergen por autoorganización. La experiencia refina los últimos milímetros de conexión. Dislexia y discalculia muestran vulnerabilidades de conectividad, no ausencia total de plasticidad.

<!-- key -->
La naturaleza provee el mapa cortical especializado. La experiencia ajusta conexiones locales sobre ese esqueleto genético.

---

# cap5

## num: 05
## title: Parte del entorno

<!-- paragraph lead -->
<span class="person">Santiago Ramón y Cajal</span> descubrió neuronas, dendritas, axones y <span class="term">sinapsis</span>, unidades de cómputo donde se almacena lo aprendido. Aprender modifica la fuerza sináptica con la regla hebbiana «neuronas que disparan juntas, se conectan juntas», formulada por <span class="person">Donald Hebb</span> (<span class="num">1949</span>).

<!-- paragraph -->
Los moduladores (<span class="term">dopamina</span>, <span class="term">acetilcolina</span>, serotonina) marcan qué episodios merecen memoria. La amígdala y el hipocampo consolidan lo emocionalmente relevante. La plasticidad presenta <span class="term">ventanas sensibles</span> para fonemas no nativos, visión binocular y segunda lengua, con declive marcado hacia los <span class="num">17</span> años.

<!-- paragraph -->
Hay sobreproducción y poda sináptica masiva en la infancia. El proyecto de Bucarest muestra que la adopción temprana puede rescatar desarrollo tras privación extrema, pero las trazas de la primera lengua pueden persistir dormidas. Plasticidad no significa reescribir todo el cableado.

<!-- concept-grid -->
| icon | title | description |
|------|-------|-------------|
| 🔗 | Sinapsis | Punto de contacto donde se almacena información aprendida. |
| ⚡ | Hebb | Refuerzo correlacionado de actividad pre/postsináptica. |
| 🧪 | Neuromoduladores | Etiquetan importancia emocional para consolidar. |

<!-- key -->
Aprender es cambiar sinapsis bajo reglas hebbianas moduladas por emoción, atención y ventanas sensibles del desarrollo.

---

# cap6

## num: 06
## title: Recicla tu cerebro

<!-- paragraph lead -->
Los adultos analfabetos difieren en memoria verbal, reconocimiento de formas y espejos. Leer <em>mejora</em> la memoria, no la arruina (<span class="person">Platón</span> se equivocaba). La escolarización transforma el sentido numérico: la recta numérica exacta y «n+1» son logros culturales, no innatos.

<!-- paragraph -->
La <span class="term">hipótesis del reciclaje neuronal</span> sostiene que cada invención cultural (alfabeto, cifras) debe encontrar un «nicho neuronal». Circuitos evolutivos deben ser lo bastante similares y flexibles. Leer recicla áreas visuales hacia el <span class="term">área de forma visual de palabras</span>. Calcular recicla circuitos de cantidad.

<!-- paragraph -->
A diferencia de la <span class="term">exaptación</span> evolutiva (lenta y genética), el reciclaje ocurre en días o años dentro de un individuo. <span class="person">Nabokov</span> subrayaba lo milagroso de que signos escritos contengan mundos enteros.

<!-- key -->
Educar es reconverter circuitos ancestrales hacia funciones culturales nuevas sobre un sustrato cerebral ya especializado.

---

# cap7

## num: 07
## title: Atención

<!-- paragraph lead -->
El primer pilar es la <span class="term">atención</span>, que selecciona información bajo saturación sensorial. <span class="person">Michael Posner</span> distingue alerta, orientación y control ejecutivo. Sin atención, aprender es buscar una aguja en un pajar.

<!-- paragraph -->
<span class="person">Yoshua Bengio</span> y <span class="person">Kyunghyun Cho</span> (<span class="num">2014</span>) integraron atención en traducción automática. La IA «ilumina» píxeles o palabras relevantes. En humanos, la atención consciente amplifica disparos hasta la corteza prefrontal y favorece potenciación a largo plazo. Lo no atendido queda confinado a áreas sensoriales tempranas.

<!-- paragraph -->
Los sistemas de alerta (dopamina, acetilcolina) pueden reabrir plasticidad, como mostraron los experimentos de <span class="person">Michael Merzenich</span> en ratones. Una pasión temprana puede invadir mapas corticales vecinos. El docente debe capturar y guiar la atención, eliminando distracciones innecesarias.

<!-- key -->
Sin atención correcta no hay aprendizaje profundo: la información debe amplificarse antes de consolidarse.

---

# cap8

## num: 08
## title: Compromiso activo

<!-- paragraph lead -->
El segundo pilar es el <span class="term">compromiso activo</span>. En el experimento de carrusel de <span class="person">Richard Held</span> y <span class="person">Alan Hein</span> (<span class="num">1963</span>), un gatito que explora por sí solo desarrolla visión normal. El que se mueve igual pero sin controlar su desplazamiento queda ciego en la práctica.

<!-- paragraph -->
Ser activo no es moverse sin parar en clase. El cerebro aprende cuando genera hipótesis y las pone a prueba. En el experimento de <span class="term">profundidad de procesamiento</span>, tres grupos reciben la misma lista de palabras con tareas distintas.

<!-- big-numbers -->
| value | label |
|-------|-------|
| ~33 % | Recuerdo si juzgan mayúsculas |
| ~52 % | Recuerdo si juzgan rimas |
| ~75 % | Recuerdo si juzgan si es animal |

<!-- paragraph -->
Procesar el significado deja memoria explícita. Lo superficial casi no deja huella. <span class="person">Henry Roediger</span> mostró que la dificultad deseable mejora la retención. La pasividad deja huellas mínimas, pero hace falta currículo estructurado que guíe la exploración.

<!-- key -->
El cerebro aprende formulando modelos y sometiéndolos a prueba activa, no acumulando datos pasivamente.

---

# cap9

## num: 09
## title: Retroalimentación del error

<!-- paragraph lead -->
El tercer pilar es la <span class="term">retroalimentación del error</span>. <span class="person">Alexander Grothendieck</span> creyó π=3 por trazar círculos: su «error» fue descubrimiento genuino. Sin error no hay progreso.

<!-- paragraph -->
<span class="person">Robert Rescorla</span> y <span class="person">Allan Wagner</span> (<span class="num">1972</span>) mostraron que el cerebro aprende solo si hay <span class="term">error de predicción</span>: los organismos condicionan cuando los eventos violan expectativas. La sorpresa impulsa el condicionamiento pavloviano y las reglas delta del aprendizaje automático.

<!-- paragraph -->
Los cuatro pilares se entrelazan en un ciclo. La atención selecciona, el compromiso activo genera predicciones y el error las corrige. Castigar errores con notas o estigma destruye plasticidad emocional. El feedback debe ser correctivo, no punitivo.

<!-- quote -->
> Pensar es pasar de un error al siguiente.
— Alain, Propos sur l'éducation (1932)

<!-- key -->
La calidad del feedback correctivo, no la humillación, determina la velocidad de aprendizaje.

---

# cap10

## num: 10
## title: Consolidación

<!-- paragraph lead -->
El cuarto pilar es la <span class="term">consolidación</span>. Un lector principiante tarda ~<span class="num">0,2 s</span> por letra. Después de ~<span class="num">3 años</span> lee palabras de 3–8 letras en paralelo. Lo consciente y lento se automatiza.

<!-- paragraph -->
Los lectores expertos liberan corteza parietal y prefrontal. La lectura migra a circuitos especializados. Lo mismo ocurre con mecanografía, música o cálculo. El control pasa a los ganglios basales. Automatizar libera recursos ejecutivos para tareas superiores.

<!-- paragraph -->
Desde los experimentos de <span class="person">Jenkins y Dallenbach</span> (<span class="num">1924</span>) se sabe que el <span class="term">sueño</span> consolida lo aprendido. Distribuir el estudio y dormir multiplica la retención: de noche el cerebro repasa modelos en bucle, con mejoras de un factor de <span class="num">10 a 100</span> según Dehaene.

<!-- big-numbers -->
| value | label |
|-------|-------|
| ~3 años | Pasar de lectura serial a paralela |
| ×10–100 | Mejora nocturna de retención (según Dehaene) |

<!-- key -->
Consolidar automatiza habilidades y el sueño es parte esencial del algoritmo de aprendizaje humano.

---

# conclusion

## num: 11
## title: Reconciliar educación y neurociencia

<!-- paragraph lead -->
Mitad de los mitos educativos conviene desechar: los bebés no son esponjas pasivas, la plasticidad no es ilimitada, los errores son necesarios, el sueño no es descanso vacío, y las máquinas no superan a un recién nacido en eficiencia global. Pedagogía es un arte basado en ciencia precisa del cerebro, como la medicina.

<!-- paragraph -->
Dehaene enumera mensajes prácticos: no subestimar a los niños, aprovechar ventanas sensibles del lenguaje, enriquecer el entorno, desechar el mito de estilos de aprendizaje distintos, enseñar con los cuatro pilares, valorar sueño y espaciado, tolerar errores sin castigo y formar docentes en ciencia del aprendizaje.

<!-- paragraph -->
Las comparaciones TIMSS son alarmantes. Francia cayó al último lugar europeo en matemáticas entre <span class="num">2003</span> y <span class="num">2015</span>, mientras Asia avanza. La ciencia del aprendizaje puede invertir la tendencia si se aplica en el aula y en la política educativa.

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
