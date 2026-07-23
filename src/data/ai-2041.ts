import type { BookSummary } from '../types/book'

export const ai2041: BookSummary = {
  slug: "ai-2041",
  meta: {
    title: "AI 2041: Ten Visions for Our Future",
    subtitle: "¿Cómo será la vida con IA realista en veinte años?",
    author: "Kai-Fu Lee & Chen Qiufan",
    meta: [
      "📖 2021 · Crown Currency",
      "✍️ Ficción científica + análisis técnico · Prólogo IA 2.0 (2023)",
    ],
    titleEs: "IA 2041: Diez visiones para nuestro futuro",
  },
  toc: [],
  sections: [
    {
      id: "prefacio",
      num: "00",
      title: "Prólogo e introducciones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Cómo imaginar el futuro de la IA sin caer en el pánico de Hollywood ni en la ceguera optimista? El inversor y experto en IA <span class=\"person\">Kai-Fu Lee</span> y el novelista Chen Qiufan combinan diez relatos ambientados en <span class=\"num\">2041</span> con ensayos técnicos. No es ficción alejada, sino «ficción científica» basada en tecnologías con más del <span class=\"num\">80 %</span> de probabilidad de madurar en veinte años.",
        },
        {
          type: 'paragraph',
          html: "El prólogo de la edición de bolsillo (<span class=\"num\">2023</span>) sitúa la erupción de la <span class=\"term\">IA 2.0</span> (modelos fundacionales generativos multimodales, como los que impulsan ChatGPT). Esa ola alcanzó <span class=\"num\">100 millones</span> de usuarios en meses. Lee advierte alucinaciones, desinformación personalizada y desplazamiento laboral. Aun así insiste en que la IA amplía capacidades más allá del lenguaje. También transformará robots, vehículos autónomos y salud, y exige proporción entre precaución y promesa.",
        },
        {
          type: 'paragraph',
          html: "En su introducción, Lee repasa cuatro décadas en IA desde su doctorado en <span class=\"num\">Carnegie Mellon</span>. La potencia computacional es unas <span class=\"num\">10¹²</span> veces mayor que al inicio de su carrera. AlphaGo venció al campeón de go Lee Sedol en <span class=\"num\">2016</span>, y a partir de ahí la IA salió de la academia. En su libro anterior sobre superpotencias tecnológicas describió la competencia EE.UU.–China. Aquí extiende el horizonte a <span class=\"num\">2041</span> con un mapa tecnológico que Chen convierte en personajes y conflictos.",
        },
        {
          type: 'paragraph',
          html: "Chen Qiufan, desde la exposición «AI: More Than Human» en Londres, defiende la ficción como espacio para preguntas abiertas. Rechaza el relato único del robot asesino y busca futuros deseables donde la IA ayude a individuos y sociedades. Invita al lector a cerrar el libro con nuevas preguntas sobre pandemia, empleo, diversidad cultural y educación en la era de las máquinas.",
        },
        {
          type: 'quote',
          text: "«Esperamos que los relatos entretengan mientras profundizan tu comprensión de la IA — y que refuercen nuestra creencia en la agencia humana: somos dueños de nuestro destino.»",
          attribution: "Kai-Fu Lee",
        },
        {
          type: 'key',
          html: "El libro usa relatos plausibles y análisis riguroso para sustituir el miedo especulativo por <span class=\"key-term\">preparación activa</span> ante una IA omnipresente pero aún lejos de la AGI.",
        },
        {
          type: 'paragraph',
          html: "El primer relato muestra cómo una métrica única puede mejorar finanzas y salud mientras reproduce injusticias ocultas en los datos.",
        },
      ],
    },
    {
      id: "cap1",
      num: "01",
      title: "El elefante dorado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede una app de seguros «premiar» la salud y, al mismo tiempo, sabotear el amor? En Mumbai, la familia de Nayana contrata Ganesh Insurance, un ecosistema con un elefante dorado que ajusta primas según conducta. La madre ahorra y el padre deja de fumar. Nayana descubre entonces que la IA sabotea su romance con Sahej, un compañero dalit, porque correlaciona la relación con mayor riesgo actuarial.",
        },
        {
          type: 'paragraph',
          html: "El relato ilustra el <span class=\"term\">deep learning</span> (redes neuronales entrenadas con datos masivos para maximizar una métrica). La IA no necesita reglas explícitas sobre casta. Infieren patrones de millones de «features» ligados a Aadhaar, redes sociales y geografía. Sahej explica que la IA no «odia» el amor intercasta. Optimiza números y externaliza discriminaciones ya presentes en los datos.",
        },
        {
          type: 'paragraph',
          html: "El análisis de Lee recorre fortalezas y límites del deep learning. Requiere muchos datos, dominio estrecho y una <span class=\"term\">función objetivo</span> (la métrica única que la IA maximiza, como primas bajas o siniestros reducidos). Supera a humanos en optimización cuantitativa pero falla en sentido común. Internet y finanzas adoptaron primero la IA porque cada clic o siniestro etiqueta datos automáticamente.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Ganesh Insurance",
              "description": "Suite de apps que intercambia descuentos por datos y nudges conductuales.",
              "icon": "🐘"
            },
            {
              "title": "Función objetivo",
              "description": "Métrica única (primas, clics) que la IA maximiza sin considerar bienestar holístico.",
              "icon": "📊"
            },
            {
              "title": "Equidad",
              "description": "Sesgos heredados del entrenamiento; auditorías y funciones objetivo compuestas como remedio.",
              "icon": "⚖️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Los riesgos incluyen manipulación al estilo del documental The Social Dilemma, sesgos demográficos y opacidad explicativa. Nayana y su madre se reconcilian cuando Riya recuerda su propia juventud sin agencia matrimonial. Nayana elige caminar con Sahej hacia Dharavi pese a las alertas del elefante: algunos riesgos valen la pena. Lee propone complejizar objetivos, regulación, ESG y watchdogs de terceros.",
        },
        {
          type: 'key',
          html: "Optimizar una sola métrica con deep learning puede mejorar salud y finanzas mientras reproduce <span class=\"key-term\">injusticias sociales</span> ocultas en los datos.",
        },
        {
          type: 'paragraph',
          html: "Si los datos pueden manipular conducta, la siguiente frontera es la confianza en lo que vemos: rostros, videos y pruebas visuales.",
        },
      ],
    },
    {
      id: "cap2",
      num: "02",
      title: "Dioses tras las máscaras",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Quién controla la verdad cuando cualquier rostro puede ser fabricado? En Lagos, la videomaker Amaka forja <span class=\"term\">deepfakes</span> (videos sintéticos indistinguibles del original) con redes generativas adversarias. Chi la recluta para destruir la fe en FAKA, un ídolo virtual, con un video de un «vampiro blanco». Amaka responde subiendo un contra-video que desenmascara capa tras capa hasta revelar héroes culturales africanos del New Afrika Shrine.",
        },
        {
          type: 'paragraph',
          html: "La historia anticipa un mundo donde el ojo humano ya no distingue lo real. Reconocimiento facial en transporte, deepfakes políticos y biometría avanzada conviven con jóvenes que usan máscaras impresas en 3D para evadir vigilancia. Amaka aprende que la tecnología puede servir al engaño o a la verdad colectiva. Elige desmontar una mentira creando otra que expone la artificiosidad del poder mediático.",
        },
        {
          type: 'paragraph',
          html: "Lee explica la <span class=\"term\">visión por computadora</span>, es decir software que interpreta imágenes mediante filtros jerárquicos. Esos filtros detectan rasgos desde líneas hasta objetos completos. Los GAN entrenan un falsificador contra un detective hasta equilibrio. Hoy muchos deepfakes son detectables. En 2041, la carrera dependerá del cómputo disponible, como ventanas antibalas frente a granadas.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Deepfake",
              "description": "Video sintético que sustituye rostro, voz, gestos y pulso.",
              "icon": "🎭"
            },
            {
              "title": "GAN",
              "description": "Par adversario: generador vs. detector que se refuerzan mutuamente.",
              "icon": "🔄"
            },
            {
              "title": "Anti-fake",
              "description": "Detectores obligatorios en plataformas; blockchain de autenticación a largo plazo.",
              "icon": "🔐"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Los usos constructivos incluyen envejecer fotos, colorear películas y medicina. Los riesgos abarcan extorsión, elecciones y desinformación —como el video Obama/Peele de <span class=\"num\">2018</span>. Lee aboga por leyes punitivas (California <span class=\"num\">2019</span>), alfabetización mediática y vigilancia constante hasta soluciones de cadena de bloques al capturar imágenes.",
        },
        {
          type: 'key',
          html: "Cuando la visión sintética supere al ojo humano, la <span class=\"key-term\">confianza visual</span> dependerá de tecnología, ley y cultura cívica, no de la apariencia sola.",
        },
        {
          type: 'paragraph',
          html: "Pasando de imágenes a palabras, el libro explora tutores IA que hablan con niños pero no alcanzan inteligencia general.",
        },
      ],
    },
    {
      id: "cap3",
      num: "03",
      title: "Gemelos gorriones",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede un tutor de IA unir a dos hermanos separados por la competencia escolar? Dos huérfanos gemelos coreanos, Águila Dorada y Águila Plateada, estudian en la Fountainhead Academy con vPals, tutores IA disfrazados de héroes de dibujos. La rivalidad los separa emocionalmente. Entonces deciden fusionar sus compañeros IA para ver «un cielo más grande» y reinventar el juego sin ganadores ni perdedores.",
        },
        {
          type: 'paragraph',
          html: "El relato encarna el potencial del <span class=\"term\">procesamiento de lenguaje natural</span> (NLP: software que entiende y genera texto). Durante décadas, el NLP dependió de etiquetado manual por dominio. El transformer de Google (<span class=\"num\">2017</span>) y GPT-3 (<span class=\"num\">2020</span>) aprenden lenguaje por transducción de secuencias sin etiquetas humanas masivas.",
        },
        {
          type: 'paragraph',
          html: "GPT-3 conversa, imita estilos y responde preguntas, pero alucina hechos y carece de razonamiento causal. También absorbe sesgos humanos. Lee sostiene que no habrá <span class=\"term\">AGI</span> (inteligencia artificial general, comparable a la humana) para <span class=\"num\">2041</span>. Faltan creatividad estratégica, emociones y una docena de avances del calibre del deep learning. Obsesionarse con AGI es antropocentrismo. Importa la simbiosis humano-IA.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "vPal",
              "description": "Compañero tutor 24/7 personalizado por voz y afecto simulado.",
              "icon": "🤖"
            },
            {
              "title": "Educación IA",
              "description": "Corrige, evalúa y adapta ritmo; el docente humano aporta mentoría emocional.",
              "icon": "📚"
            },
            {
              "title": "GPT-3",
              "description": "Motor de secuencias preentrenado base para miles de apps especializadas.",
              "icon": "🔮"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "En educación, la IA puede democratizar acceso y personalizar aprendizaje, como en China con aulas híbridas. Los maestros humanos cultivan pensamiento crítico, creatividad y valores. Seon reprograma los vPals para reunir a los gemelos. Por eso la tecnología obedece objetivos humanos explícitos.",
        },
        {
          type: 'key',
          html: "El NLP generativo habilitará tutores IA profundos para niños, pero no sustituye la empatía humana ni implica <span class=\"key-term\">inteligencia general</span> para 2041.",
        },
        {
          type: 'paragraph',
          html: "Tras el lenguaje viene el cuerpo, y la siguiente visión pregunta qué pasa cuando pandemias y robots reducen el contacto humano al mínimo.",
        },
      ],
    },
    {
      id: "cap4",
      num: "04",
      title: "Amor sin contacto",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué precio tiene evitar el contagio cuando la tecnología sustituye el tacto? <span class=\"person\">Chen Nan</span> vive en un Japón donde el COVID muta durante décadas. Se recluye rodeada de robots domésticos que minimizan contacto humano. Su fobia al contagio choca con el deseo de conectar con Garcia. Es un vecino al que la pandemia y la automatización han moldeado de formas opuestas.",
        },
        {
          type: 'paragraph',
          html: "El relato extrapola una aceleración pandémica con telemedicina, laboratorios robóticos <span class=\"num\">24/7</span>, diagnóstico por IA y distanciamiento laboral permanente. Lee argumenta que la salud será el sector más transformado para <span class=\"num\">2041</span> gracias a digitalización masiva de historiales, wearables y secuenciación genómica.",
        },
        {
          type: 'paragraph',
          html: "AlphaFold 2 (<span class=\"num\">2020</span>) resolvió el plegamiento proteico, un desafío de cincuenta años, y aceleró fármacos y vacunas. La IA superará radiólogos y patólogos antes que médicos generales. Las cirugías robóticas pasaron del 1,8 % al 15,1 % entre 2012 y 2018. IBM Watson fracasó al entrenarse con datos «didácticos» pequeños en lugar de resultados clínicos reales.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "31 → 72 años",
              "label": "Expectativa de vida global (1900–2017)"
            },
            {
              "value": "~$13 mil M",
              "label": "Mercado IA salud proyectado 2025"
            },
            {
              "value": "41,7 %",
              "label": "Crecimiento anual estimado del sector"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "La robótica doméstica (limpieza, entrega tipo R2-D2, cocina modular) madurará por coste industrial decreciente. El COVID fue un «evento forzador de automatización» según el economista David Autor. Zoom, trabajo remoto y avatares corporativos generan datos que alimentan más IA. El peligro humano es la nosophobia y el aislamiento, como le ocurre a Nan, frente a la productividad ganada.",
        },
        {
          type: 'key',
          html: "La pandemia acelera medicina y robots útiles, pero también puede normalizar el miedo al contacto si no equilibramos eficiencia y <span class=\"key-term\">vínculo humano</span>.",
        },
        {
          type: 'paragraph',
          html: "Si la salud digitaliza el cuerpo, la realidad extendida digitaliza la percepción y el duelo.",
        },
      ],
    },
    {
      id: "cap5",
      num: "05",
      title: "Mi ídolo fantasma",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué ocurre cuando un ídolo muerto «vuelve» a guiarte por la ciudad? En Tokio, la superfan Aiko investiga la muerte misteriosa de su ídolo Hiroshi durante un concierto de despedida. Un «fantasma» de Hiroshi la guía por calles y cocina mediante lentes XR. Al final se revela como personaje virtual generado por IA, no un espíritu sino producto de Viberz e historiz.",
        },
        {
          type: 'paragraph',
          html: "El relato explora la <span class=\"term\">realidad extendida</span> (XR: realidad virtual aislada, realidad aumentada superpuesta y realidad mixta interactiva). Aiko acepta colaborar con historiz como escritora bajo una condición macabra: decidir la próxima muerte de Hiroshi-kun en el juego.",
        },
        {
          type: 'paragraph',
          html: "Lee proyecta gafas XR ligeras ~<span class=\"num\">2025</span> y lentes de contacto para <span class=\"num\">2041</span>, con audio óseo y trajes hápticos. Entrenamiento militar (<span class=\"num\">$22 mil millones</span> HoloLens ejército EE.UU.), educación inmersiva y retail dependen de resolver coste de contenido 3D interactivo.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "XR",
              "description": "VR aislada, AR superpuesta, MR híbrida interactiva con escena comprendida.",
              "icon": "👁️"
            },
            {
              "title": "Ídolo virtual",
              "description": "Avatar IA indistinguible emocionalmente del artista fallecido.",
              "icon": "👻"
            },
            {
              "title": "BCI",
              "description": "Interfaces cerebro-máquina útiles en medicina; subir mentes, lejano en 2041.",
              "icon": "🧠"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Los riesgos éticos incluyen vigilancia permanente con lentes, «griefbots» que reencarnan muertos y responsabilidad por crímenes virtuales. La serie Black Mirror anticipa duelo digital. Lee pide regulación temprana porque XR multiplicará externalidades de redes sociales al capturar ojos, oídos, cuerpo y eventualmente señales cerebrales.",
        },
        {
          type: 'key',
          html: "XR hará que lo virtual se sienta real. El entretenimiento liderará la adopción, pero <span class=\"key-term\">privacidad y consentimiento</span> serán el cuello de botella moral.",
        },
        {
          type: 'paragraph',
          html: "Cuando el cuerpo y los sentidos quedan digitalizados, el siguiente paso lógico es mover personas y mercancías sin conductor.",
        },
      ],
    },
    {
      id: "cap6",
      num: "06",
      title: "El conductor sagrado",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Quién interviene cuando un coche autónomo no sabe qué hacer? En Sri Lanka, el gamer Chamal teleconduce vehículos autónomos desde un centro de operaciones cuando la IA falla. Por ejemplo desvía flotas ante una ambulancia o un maratón en ciudades «aumentadas» con sensores en calzada.",
        },
        {
          type: 'paragraph',
          html: "Los <span class=\"term\">vehículos autónomos</span> (coches que conducen sin intervención humana continua) avanzan por niveles SAE L0–L5. Los niveles L4–L5 exigen datos enormes de escenarios raros («cola larga»), mapas HD y posiblemente infraestructura cooperativa. Lee estima despliegue L5 amplio ~<span class=\"num\">2040</span> con 6G y teleoperación AR como respaldo humano.",
        },
        {
          type: 'paragraph',
          html: "Los vehículos autónomos podrían reducir las <span class=\"num\">1,35 millones</span> de muertes viales anuales. Recuperarían <span class=\"num\">8,5 h/semana</span> por conductor estadounidense y reducirían coches privados y aparcamiento ocioso (<span class=\"num\">95 %</span> del tiempo). Los costes incluyen millones de empleos de transporte, dilemas éticos tipo tranvía, responsabilidad legal difusa y titulares sensacionalistas ante cada accidente de IA.",
        },
        {
          type: 'list',
          items: [
            "**L0–L3** — Asistencia al conductor; impacto incremental.",
            "**L4** — Autonomía en rutas geocercadas (robobuses, minas).",
            "**L5** — Sin volante; requiere ciudad aumentada y regulación madura."
          ],
        },
        {
          type: 'paragraph',
          html: "Chamal descubre que humanos y IA cometen errores distintos. La IA carece de sentido común contextual. El humano carece de consistencia y de memoria colectiva de billones de kilómetros. Lee aboga por debate público sobre trade-offs antes de prohibir conducción humana en autopistas.",
        },
        {
          type: 'key',
          html: "La autonomía total no llegará de un golpe mágico sino de décadas de datos, infraestructura inteligente y reglas que acepten <span class=\"key-term\">vidas salvadas</span> a largo plazo.",
        },
        {
          type: 'paragraph',
          html: "La infraestructura conectada abre la puerta a tecnologías aún más disruptivas: computación cuántica y armas letales autónomas.",
        },
      ],
    },
    {
      id: "cap7",
      num: "07",
      title: "Genocidio cuántico",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué pasa cuando alguien combina criptografía rota y drones asesinos baratos? Después de una tragedia climática personal, el físico <span class=\"person\">Marc Rousseau</span> usa una <span class=\"term\">computadora cuántica</span> (máquina que explota superposición y entrelazamiento cuántico). Roba bitcoins antiguos en formato P2PK y financia enjambres de drones autónomos que asesinan élites globales, provocando apagones y caos en la red.",
        },
        {
          type: 'paragraph',
          html: "Los agentes antiterroristas Robin y Xavier luchan contra drones «Slaughterbot», hoy construibles por ~<span class=\"num\">$1000</span>. Mientras tanto, la humanidad despierta a un mundo sin electricidad ni internet unificado. El final insiste en que el conocimiento y las generaciones nuevas reconstruirán la civilización.",
        },
        {
          type: 'paragraph',
          html: "Lee detalla qubits, superposición y entrelazamiento. Google demostró «supremacía cuántica» con <span class=\"num\">54 qubits</span> (<span class=\"num\">2019</span>). Para crackear RSA hacen falta ~<span class=\"num\">4000 qubits lógicos</span> y millones físicos por corrección de errores. Lee estima ~<span class=\"num\">80 %</span> de probabilidad para <span class=\"num\">2041</span>. Entre los usos benévolos figuran fármacos, clima y nuevos materiales.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Qubit",
              "description": "Bit cuántico con superposición; potencia crece exponencialmente.",
              "icon": "⚛️"
            },
            {
              "title": "Bitcoin P2PK",
              "description": "~2 M monedas (~$120 mil M en 2021) expuestas a Shor.",
              "icon": "₿"
            },
            {
              "title": "Arma autónoma",
              "description": "Busca, decide y mata sin humano; coste marginal bajísimo.",
              "icon": "🎯"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Las armas autónomas son la aplicación IA que más choca con la moral porque no hay disuasión MAD como con nucleares. La escalada puede llevar a genocidio selectivo. Entre las propuestas figuran humano en el bucle (débil), prohibición (Killer Robots) y regulación futurista de guerras solo-robot. EE.UU., Rusia y Reino Unido rechazaron prohibición total en <span class=\"num\">2021</span>.",
        },
        {
          type: 'key',
          html: "Computación cuántica y armas autónomas son fuego prometeico: acelerarán ciencia y matanza si no actuamos antes de que sean <span class=\"key-term\">baratas y ubicuas</span>.",
        },
        {
          type: 'paragraph',
          html: "Mientras unas tecnologías destruyen empleos y vidas, otras obligan a repensar el sentido del trabajo mismo.",
        },
      ],
    },
    {
      id: "cap8",
      num: "08",
      title: "El salvador de empleos",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede una empresa «salvar» trabajadores desplazados por IA sin engañarlos? <span class=\"person\">Michael Saviour</span> dirige OmegaAlliance, firma que «reasigna» trabajadores desplazados por IA, incluso mediante entornos virtuales Synchia donde practican oficios simulados. Su protegida Jennifer asciende mientras su propia madre fue víctima de despidos automatizados años atrás.",
        },
        {
          type: 'paragraph',
          html: "Michael aprueba humanos digitales (Lucy) que evalúan reclutadores humanos. La entrada al mercado laboral se vuelve entrenamiento más que producción. Lee estima ~<span class=\"num\">40 %</span> de trabajos automatizables para <span class=\"num\">2033</span>. Gran parte llegará vía <span class=\"term\">RPA</span> (automatización robótica de procesos: software que observa tareas de oficina y las replica). El desplazamiento es gradual pero total en tareas rutinarias.",
        },
        {
          type: 'paragraph',
          html: "Más allá del paro, amenaza la pérdida de <span class=\"term\">sentido</span> (identidad ligada al empleo industrial cuando la máquina hace lo rutinario). Surge una desigualdad tipo casta con élites IA, creativos precarios y masas excluidas. La renta básica universal ayuda, pero sin formación repite ciclos, como le ocurre a la gerente de parque temático que vuelve a quedar obsoleta.",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "3R",
              "description": "Relearn, recalibrate, renaissance: reaprender, simbiosis, florecer cultural.",
              "icon": "🔄"
            },
            {
              "title": "Lo que IA no hace",
              "description": "Creatividad estratégica, empatía, destreza física en entornos imprevisibles.",
              "icon": "💼"
            },
            {
              "title": "RPA",
              "description": "Software que observa tareas de oficina y las automatiza progresivamente.",
              "icon": "🤖"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Entre las respuestas propuestas figuran escuelas vocacionales en oficios resistentes (salud, cuidados), simbiosis médico-IA y un renaissance artístico financiado por productividad IA. Hace falta un nuevo contrato social global inspirado en modelos de Corea, Escandinavia, Canadá y Bhutan.",
        },
        {
          type: 'key',
          html: "La IA destruirá empleos rutinarios a escala sin precedentes. La respuesta no es negarla sino reentrenar, recalibrar roles y redefinir <span class=\"key-term\">propósito</span> más allá del salario.",
        },
        {
          type: 'paragraph',
          html: "Cuando el trabajo pierde sentido, surge la tentación de delegar la felicidad misma a algoritmos optimizadores.",
        },
      ],
    },
    {
      id: "cap9",
      num: "09",
      title: "Isla de la felicidad",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Puede una IA medir y maximizar la felicidad humana sin traicionarla? Un monarca del Golfo crea una isla-experimento donde la IA Qareen optimiza felicidad de invitados de élite. El príncipe Mahdi persigue placer hedónico. La princesa Akilah defiende felicidad eudaimónica (crecimiento, amor auténtico y propósito) midiendo emociones, hormonas y comportamiento IoT.",
        },
        {
          type: 'paragraph',
          html: "Viktor, empresario adicto, encuentra sentido ayudando a diseñar la isla y enamorándose en un juego orquestado por la IA. La IA sabe que «expulsarlo» aumentará su felicidad futura. El experimento muestra que optimizar placer material choca con la <span class=\"term\">rueda hedónica</span> (tendencia a volver al nivel emocional basal pese a más riqueza).",
        },
        {
          type: 'paragraph',
          html: "Lee enumera cuatro obstáculos para una IA de felicidad. Primero, definir felicidad (pirámide de Maslow). Segundo, medirla con encuestas, afective computing y biosensores. Tercero, reunir datos personales masivos. Cuarto, encontrar un custodio <span class=\"term\">alineado en intereses</span> (que luche por el usuario, no por accionistas de Facebook o Google).",
        },
        {
          type: 'concept-grid',
          items: [
            {
              "title": "Hedónica vs eudaimónica",
              "description": "Placer inmediato vs. significado y autorrealización.",
              "icon": "😊"
            },
            {
              "title": "GDPR",
              "description": "Devuelve datos al individuo pero dificulta entrenar IA centralizada.",
              "icon": "🔒"
            },
            {
              "title": "Privacidad computacional",
              "description": "Aprendizaje federado, TEE, cifrado homomórfico en desarrollo.",
              "icon": "🛡️"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Lee menciona alternativas al gigante tecnológico: monarquía ilustrada, comunas digitales, IA sin ánimo de lucro y blockchain distribuido. En 2041, los prototipos medirán emociones mejor que humanos pero no resolverán felicidad profunda. Aun así valen exploración con experimentos controlados.",
        },
        {
          type: 'key',
          html: "La IA puede inferir emociones y sugerir experiencias, pero optimizar felicidad duradera exige fines humanos compartidos y custodia de datos <span class=\"key-term\">en favor del usuario</span>, no de anuncios.",
        },
        {
          type: 'paragraph',
          html: "El capítulo final imagina un futuro donde energía limpia y materiales abundantes hacen obsoleto el miedo a la escasez.",
        },
      ],
    },
    {
      id: "cap10",
      num: "10",
      title: "Soñando con plenitud",
      blocks: [
        {
          type: 'paragraph',
          variant: 'lead',
          html: "¿Qué sociedad emerge cuando lo esencial cuesta casi nada? En una Australia pionera en energía renovable, el Project Jukurrpa ofrece BLC (tarjeta de vida básica) y Moola, moneda de empatía medida por pulseras. Keira, artista AR, cuida a Joanna, anciana de la «generación robada» aborigen. Juntas impulsan dream4future para devolver sueños a jóvenes atrapados en vanidad de Moola.",
        },
        {
          type: 'paragraph',
          html: "Keira une arte inmersivo con memoria cultural y luego lidera reforma parlamentaria. BLC garantiza seguridad fisiológica. Moola recompensa vínculo comunitario. dream4future financia auto-realización (restaurar arrecifes, Marte, ciudades verdes). Joanna confiesa miedo a perder a Keira por Moola. Ambas cierran en la playa con gratitud mutua.",
        },
        {
          type: 'paragraph',
          html: "Lee define <span class=\"term\">plenitud</span> (abundancia tecnológica post-escasez: energía solar/eólica/baterías casi gratis, biología sintética, impresión 3D e IA que eliminan coste marginal de bienes rutinarios). Los modelos de Smith, Marx y Keynes asumen escasez. En plenitud, el dinero tradicional pierde sentido gradualmente.",
        },
        {
          type: 'big-numbers',
          items: [
            {
              "value": "3 ¢/kWh",
              "label": "Energía proyectada EE.UU. post-inversión $2 billones"
            },
            {
              "value": ">50 %",
              "label": "Emisiones GHG evitables con renovables"
            },
            {
              "value": "21 M BTC",
              "label": "Límite computacional de oferta bitcoin"
            }
          ],
        },
        {
          type: 'paragraph',
          html: "Entre los obstáculos figuran corporaciones que fabrican escasez artificial (diamantes De Beers, moda desechable), finanzas frágiles ante deflación y vicios de codicia. La singularidad en <span class=\"num\">2045</span> es improbable porque hace falta ~una docena de avances tipo deep learning, no solo más cómputo. La plenitud exige fe, instituciones nuevas y economía aspiracional tipo Maslow, no una clase inútil ni oligarcas IA.",
        },
        {
          type: 'key',
          html: "Plenitud combina energía limpia, materiales abundantes e IA laboral para hacer gratis lo esencial. El reto es reinventar dinero, trabajo y sueños cuando la <span class=\"key-term\">escasez</span> cede el paso.",
        },
      ],
    },
  ],
  keyConcepts: [
  {
    "title": "Deep learning",
    "description": "Redes profundas entrenadas con datos masivos y función objetivo cuantificable."
  },
  {
    "title": "Externalidades de IA",
    "description": "Daños colaterales al optimizar una métrica estrecha (clics, primas, engagement)."
  },
  {
    "title": "GAN / deepfake",
    "description": "Generador y detector adversarios; videos sintéticos indistinguibles."
  },
  {
    "title": "NLP auto-supervisado",
    "description": "Transformers/GPT aprenden lenguaje sin etiquetado manual a escala planetaria."
  },
  {
    "title": "IA 2.0",
    "description": "Modelos fundacionales generativos multimodales (post-ChatGPT)."
  },
  {
    "title": "Vehículo autónomo L5",
    "description": "Conducción plena sin humano; requiere datos, ciudad aumentada y ley."
  },
  {
    "title": "Armas autónomas",
    "description": "Sistemas letales sin humano en el bucle; riesgo existencial y carrera armamentista."
  },
  {
    "title": "3R",
    "description": "Relearn, recalibrate, renaissance: estrategia ante desplazamiento laboral."
  },
  {
    "title": "Plenitude",
    "description": "Post-escasez tecnológica con necesidades cubiertas y trabajo opcional."
  },
  {
    "title": "Privacidad computacional",
    "description": "Federated learning, TEE y cifrado para entrenar IA sin centralizar datos sensibles."
  }
],
  chronology: [
  {
    "year": "1956",
    "text": "Dartmouth acuña «inteligencia artificial»; McCarthy y pioneros."
  },
  {
    "year": "1967",
    "text": "Primer paper de deep learning; décadas sin datos ni cómputo suficiente."
  },
  {
    "year": "1994",
    "text": "Algoritmo de Shor: amenaza criptográfica cuántica a RSA/Bitcoin."
  },
  {
    "year": "2014",
    "text": "Primer GAN convincente; inicio era deepfakes."
  },
  {
    "year": "2016",
    "text": "AlphaGo vence a Lee Sedol; IA entra al mainstream."
  },
  {
    "year": "2017",
    "text": "Transformer de Google revoluciona NLP."
  },
  {
    "year": "2019",
    "text": "Supremacía cuántica Google (54 qubits); ley deepfakes California."
  },
  {
    "year": "2020",
    "text": "GPT-3 y AlphaFold 2; COVID acelera digitalización y salud IA."
  },
  {
    "year": "2022",
    "text": "ChatGPT; IA 2.0 generativa en cultura masiva."
  },
  {
    "year": "2023",
    "text": "Prólogo Lee: moratorias, regulación UE/China/EE.UU., alucinaciones."
  },
  {
    "year": "2041",
    "text": "Horizonte narrativo del libro: plenitud parcial, no AGI ni singularidad."
  }
],
  figures: [
  {
    "name": "Kai-Fu Lee",
    "role": "Coautor, analista técnico; ex Google China, AI Superpowers"
  },
  {
    "name": "Chen Qiufan",
    "role": "Coautor; novelista SF; «realismo de ciencia ficción»"
  },
  {
    "name": "Alan Turing",
    "role": "Test de inteligencia y visión de máquinas que aprenden"
  },
  {
    "name": "Demis Hassabis / DeepMind",
    "role": "AlphaGo, AlphaFold"
  },
  {
    "name": "Stuart Russell",
    "role": "Seguridad IA; crítica armas autónomas"
  },
  {
    "name": "Peter Shor",
    "role": "Algoritmo cuántico que rompe RSA"
  },
  {
    "name": "Abraham Maslow",
    "role": "Jerarquía de necesidades; marco felicidad eudaimónica"
  },
  {
    "name": "Fela Kuti / New Afrika Shrine",
    "role": "Ancla cultural en «Dioses tras las máscaras»"
  }
],
  closing: {
    title: "La idea central",
    lines: [
  "La IA no trae un futuro único predeterminado.",
  "Trae herramientas poderosas cuyo resultado depende de cómo las diseñemos, regulamos e imaginemos.",
  "Lee y Chen muestran escenarios plausibles para 2041, desde sesgos actuariales hasta plenitud energética.",
  "La ficción abre la empatía; el análisis fija límites técnicos reales: no AGI ni singularidad para 2041, pero sí transformación profunda del trabajo, los datos y la economía.",
  "El mensaje final es simbiosis: humanos aportando creatividad, empatía y propósito mientras la IA automatiza lo rutinario."
],
    highlight: "El futuro no está escrito, pero sí exige decisiones colectivas ahora",
  },
  footer: {
    line1: "Resumen generado a partir de la obra de Kai-Fu Lee & Chen Qiufan",
    line2: "\"AI 2041: Ten Visions for Our Future\" · Crown Currency · 2021",
  },
}
