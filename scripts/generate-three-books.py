#!/usr/bin/env python3
"""Generate summaries for ego-tunnel, livewired, godel-escher-bach."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def fm_block(**kwargs) -> str:
    lines = ["---"]
    for k, v in kwargs.items():
        if k == "meta":
            lines.append("meta:")
            for m in v:
                lines.append(f'  - "{m}"')
        elif k == "title_es":
            lines.append(f'title_es: "{v}"')
        else:
            lines.append(f'{k}: "{v}"')
    lines.append('lang: es')
    lines.append("---")
    return "\n".join(lines)


def section(sid, num, title, blocks: str) -> str:
    return f"""# {sid}

## num: {num}
## title: {title}

{blocks}

---"""


def p(text, lead=False) -> str:
    tag = "paragraph lead" if lead else "paragraph"
    return f"<!-- {tag} -->\n{text}\n"


def key(text) -> str:
    return f"<!-- key -->\n{text}\n"


def quote(text, attr) -> str:
    return f'<!-- quote -->\n> {text}\n— {attr}\n'


def grid(rows) -> str:
    lines = ["<!-- concept-grid -->", "| icon | title | description |", "|------|-------|-------------|"]
    for icon, title, desc in rows:
        lines.append(f"| {icon} | {title} | {desc} |")
    return "\n".join(lines) + "\n"


def timeline(rows) -> str:
    lines = ["<!-- timeline -->", "| year | text |", "|------|------|"]
    for y, t in rows:
        lines.append(f"| {y} | {t} |")
    return "\n".join(lines) + "\n"


def figures(rows) -> str:
    lines = ["<!-- figures -->", "| name | role |", "|------|------|"]
    for n, r in rows:
        lines.append(f"| {n} | {r} |")
    return "\n".join(lines) + "\n"


def closing(title, lines_list, highlight) -> str:
    body = "\n".join(lines_list)
    return f"""# cierre

## title: {title}

<!-- closing -->
{body}
<!-- highlight -->{highlight}<!-- /highlight -->
"""


def write_ego_tunnel():
    content = fm_block(
        title="The Ego Tunnel: The Science of the Mind and the Myth of the Self",
        title_es="El túnel del ego: La ciencia de la mente y el mito del yo",
        subtitle="¿Quién siente tus sentimientos si no existe un yo?",
        author="Thomas Metzinger",
        meta=["📖 2009 · Basic Books / Perseus", "✍️ Filósofo · Colaboración con neurociencia cognitiva"],
        slug="ego-tunnel",
    )

    toc = """# Contenido

| id | num | label |
|----|-----|-------|
| prefacio | 00 | Introducción |
| cap1 | 01 | La aparición de un mundo |
| cap2 | 02 | Un recorrido por el túnel |
| cap3 | 03 | La unidad de la conciencia |
| cap4 | 04 | Del cuerpo a la mente |
| cap5 | 05 | De la propiedad a la agencia y al libre albedrío |
| cap6 | 06 | Psiconautas filosóficos |
| cap7 | 07 | Soñar |
| cap8 | 08 | El ego empático |
| cap9 | 09 | El manifold compartido |
| cap10 | 10 | Máquinas de ego artificial |
| cap11 | 11 | Tecnologías de la conciencia |
| cap12 | 12 | Una nueva ética |
| conceptos | ✦ | Conceptos clave |
| cronologia | ◈ | Cronología |
| figuras | ✦ | Figuras clave |
| cierre | — | La idea central |

---"""

    sections = [
        section("prefacio", "Introducción", "No hay tal cosa como un yo",
            p("""<span class="person">Thomas Metzinger</span> abre con una tesis radical: a nuestro mejor conocimiento actual <em>no existe</em> entidad indivisible que sea «nosotros», ni en el cerebro ni en ningún reino metafísico. Sin disolver el mito del yo no resolveremos el enigma de la conciencia. La pregunta central: ¿por qué siempre hay <em>alguien</em> que tiene la experiencia?""", True)
            + p("""El libro propone el <span class="term">túnel del ego</span>: un modelo consciente del mundo con un centro aparente — el <span class="term">ego</span>. El autor es filósofo analítico que colabora con neurocientíficos; insiste en la fenomenología de estados alterados (meditación, sueños lúcidos, experiencias extracorporales, síndromes psiquiátricos).""")
            + quote("«Cualquier teoría que avance está condenada a ser inicialmente contraintuitiva.»", "Daniel Dennett, The Intentional Stance (1987)")
            + p("""La ilusión de la mano de goma (<span class="person">Botvinick</span> y <span class="person">Cohen</span>, <span class="num">1998</span>): tras <span class="num">60–90</span> segundos de roce sincrónico, el sujeto siente la mano de goma como propia. Eso activa el <span class="term">modelo fenomenal del yo</span> (PSM): el contenido consciente del organismo como un todo. El ego es una imagen mental <em>transparente</em>: no la ves, pero ves <em>con</em> ella.""")
            + key("""El ego no es una cosa en el mundo sino contenido de un <span class="key-term">modelo transparente del yo</span> que el cerebro activa cuando lo necesita y apaga en sueño profundo sin sueños.""")
        ),
        section("cap1", "01", "La aparición de un mundo",
            p("""La esencia de la experiencia consciente es que aparece un mundo unificado. En sueño profundo sin sueños nada aparece; en vigilia y en sueños, sí. La conciencia es parte del universo físico <em>y</em> lo contiene: genera <span class="term">interioridad</span>.""", True)
            + p("""Los datos sugieren que mundos en sistemas nerviosos son un fenómeno evolutivo reciente; una forma temprana podría datar de unos <span class="num">200 millones</span> de años en corteza de mamíferos. Basta con estados fenomenales transparentes para que aparezca un mundo — no hace falta lenguaje.""")
            + p("""El contenido fenomenal — el «rojo» de una rosa, el olor a sándalo — depende de propiedades internas del cerebro, no del entorno. La misma experiencia puede surgir con la rosa presente, imaginada o soñada; en principio, estimulando los glomérulos olfativos adecuados (hay unos <span class="num">2000</span>).""")
            + grid([
                ("🌍", "Aparición de mundo", "Si eres consciente, un mundo se presenta; la conciencia crea realidad experiencial dentro de sí."),
                ("🧬", "Evolución", "La interioridad biológica es reciente; la autorreflexión teórica, aún más."),
                ("🔬", "Correlato neural", "Activar el correlato neural mínimo de una experiencia produce esa experiencia."),
            ])
            + key("""Conciencia = <span class="key-term">aparición de un mundo</span>; el problema no es el mundo exterior sino la estructura de la vida interior.""")
        ),
        section("cap2", "02", "Un recorrido por el túnel",
            p("""El <span class="term">túnel del ego</span> es propiedad compleja del <span class="term">correlato neural global de la conciencia</span> (NCC): el flujo informativo que crea el mundo en el que vives. El ego es el contenido del PSM en cada instante — sensaciones, emociones, percepciones, recuerdos, actos de voluntad — pero no puedes ver que es simulación: es <em>transparente</em>.""", True)
            + p("""Metáfora del simulador de vuelo total: el cerebro genera imagen interna de sí mismo sin piloto externo; el «piloto» nace dentro de la realidad virtual. Variantes del túnel: ramificarse en otros túneles (empatía), durante el sueño, en máquinas artificiales.""")
            + p("""Metzinger distingue su túnel del «reality tunnel» popular (<span class="person">Robert Anton Wilson</span>, <span class="person">Timothy Leary</span>): no negamos realidad objetiva ni conocimiento científico comunitario; el foco es la experiencia consciente como formato de datos biológico.""")
            + grid([
                ("🕳️", "Túnel", "Modelo experiencial del mundo generado por el NCC global."),
                ("👤", "Ego", "Contenido del PSM; herramienta para control, planificación y lectura de mentes ajenas."),
                ("✈️", "Simulador total", "Sin usuario externo: el sistema se modela a sí mismo y se pierde en el modelo."),
            ])
            + key("""Nadie vive <em>dentro</em> del túnel: vivimos <em>con</em> él y <em>a través</em> de él; no hay homúnculo al mando.""")
        ),
        section("cap3", "03", "La unidad de la conciencia",
            p("""Dos hilos en la historia de la filosofía de la conciencia: (1) <span class="term">conscientia</span> como conocimiento de orden superior — saber que sabes; (2) <span class="term">integración</span> — lo que une contenidos en un todo simultáneo. Sin unidad no hay mundo.""", True)
            + p("""El <span class="term">problema del mundo único</span>: para que aparezca un mundo debe ser <em>un</em> mundo. La neurociencia estudia el «binding» de características (color, forma, textura); la filosofía, el «saber que sabes». Ambos lados de la misma moneda.""")
            + p("""Trastornos ilustrativos: <span class="term">agnosia apperceptiva</span> (no integrar rasgos visuales en objetos), <span class="term">asterognosia</span>, <span class="term">autotopagnosia</span>, <span class="term">agnosia disyuntiva</span> (boca que no corresponde al sonido). Si todo se desintegra, el «aquí y ahora» fenomenal colapsa.""")
            + key("""La unidad de la conciencia es logro cerebral: contenidos correlacionados sin fisuras en un solo mundo vivido.""")
        ),
        section("cap4", "04", "Del cuerpo a la mente: imagen corporal, ECE y yo virtual",
            p("""«Poseer» el cuerpo es fundamento del sentirse alguien. Esquiadores extienden la imagen corporal a las puntas de los esquís; pilotos, al perímetro del coche. El <span class="term">sentido de propiedad</span> integra contenido consciente en el yo.""", True)
            + p("""En la ilusión de la mano de goma hay fusión de campos receptivos táctiles y visuales en corteza premotora. <span class="person">Armel</span> y <span class="person">Ramachandran</span>: doblar un dedo de goma en posición imposible provoca conductancia cutánea aunque casi nadie sienta dolor real. Propiedad, agencia y localización son subcomponentes disociables.""")
            + p("""Macacos japoneses integran herramientas en el <span class="term">esquema corporal</span>; campos receptivos visuales se extienden a la punta del rastrillo. Fantasmas de miembros (<span class="person">Silas Weir Mitchell</span>, <span class="num">1871</span>): la caja de espejos de Ramachandran «desparaliza» fantasmas moviendo la mano real mientras el sujeto ve la simetría.""")
            + grid([
                ("🤚", "Propiedad", "Auto-atribución que hace «mío» un contenido corporal o mental."),
                ("🪞", "Caja de espejos", "Manipular contexto perceptivo reescribe el modelo corporal consciente."),
                ("👻", "Miembros fantasma", "Prueba de que el cuerpo vivido es modelo virtual, no solo anatomía."),
            ])
            + key("""El yo encarnado es construcción holística; la propiedad es el núcleo más cercano de la selfhood fenomenal.""")
        ),
        section("cap5", "05", "De la propiedad a la agencia y al libre albedrío",
            p("""<span class="term">Agencia</span> (hacer) y <span class="term">propiedad</span> (tener) son experiencias distintas. Pacientes con lesiones pueden sentir que mueven una mano que no reconocen como suya, o lo contrario.""", True)
            + p("""Experimentos de «mano alienígena»: estimulación que induce movimiento no voluntario mientras el sujeto niega agencia. El cerebro infiere causalidad retrospectivamente; la conciencia de «haber decidido» puede ser post hoc.""")
            + p("""El libre albedrío como fenómeno consciente se descompone: intención, selección de acción, control motor. La neurociencia muestra que procesos inconscientes preceden a la sensación de decidir; queda la pregunta ética y política de responsabilidad sin homúnculo.""")
            + key("""Sin homúnculo, la agencia es modelo interno de causalidad; el libre albedrío vivido no garantiza un agente último.""")
        ),
        section("cap6", "06", "Psiconautas filosóficos: sueños lúcidos",
            p("""Estados alterados son laboratorio fenomenológico. El <span class="term">sueño lúcido</span> — saber que sueñas mientras sueñas — permite manipular el modelo del yo dentro del túnel onírico.""", True)
            + p("""Metzinger practica y estudia técnicas de inducción; el yo lúcido no es metafísico sino reconfiguración del PSM en sueño REM. La pregunta: ¿qué aprendemos sobre la transparencia del ego cuando podemos «ver» que el mundo onírico es simulación?""")
            + p("""Riesgo ético: estados lúcidos prolongados pueden erosionar la frontera vigilia-sueño; aun así, son evidencia de que el ego es proceso, no sustancia.""")
            + key("""Los sueños lúcidos muestran que el túnel puede volverse <em>opaco</em> parcialmente: percibes que el mundo es modelo.""")
        ),
        section("cap7", "07", "Soñar",
            p("""En sueño REM el túnel sigue activo: aparece un mundo sin estímulos externos correspondientes. El sistema opera bajo <span class="term">sueño cifrado</span>: señales internas interpretadas como percepción.""", True)
            + p("""<span class="person">Allan Hobson</span> y otros: el cerebro genera contenido onírico con la misma maquinaria de modelado que en vigilia. El yo onírico es PSM sin anclaje corporal fiable.""")
            + p("""Pesadillas, parálisis del sueño y sueños falsos despertares muestran lo frágil que es la distinción entre simulación y realidad cuando el modelo es transparente.""")
            + key("""Soñar demuestra que el túnel no necesita mundo exterior: basta actividad neural para un yo en un mundo.""")
        ),
        section("cap8", "08", "El ego empático",
            p("""La empatía requiere modelar estados ajenos en nuestro propio túnel. Las <span class="term">neuronas espejo</span> y circuitos similares permiten resonancia con acciones y afectos percibidos.""", True)
            + p("""<span class="person">Vittorio Gallese</span> y la hipótesis del <span class="term">manifold compartido</span>: representaciones neuronales usadas para actuar y para percibir se solapan. Ver dolor ajeno activa áreas relacionadas con dolor propio.""")
            + p("""La empatía no es magia mental: es simulación corporalizada dentro de tu PSM. Explica cooperación, cultura y también sesgos — proyectamos fácilmente lo propio.""")
            + grid([
                ("🪞", "Neuronas espejo", "Activación similar al observar y al ejecutar una acción."),
                ("💔", "Resonancia afectiva", "Estados ajenos modelados con hardware propio."),
                ("🤝", "Base social", "El ego como instrumento evolutivo para sociedades complejas."),
            ])
            + key("""Empatía = acoplar tu túnel al de otro mediante simulación interna; no implica un yo extra.""")
        ),
        section("cap9", "09", "El manifold compartido",
            p("""Profundiza el marco de Gallese: percepción, acción y emoción comparten formatos representacionales. El «espacio» de estados corporales es manifold común.""", True)
            + p("""Esto unifica comprensión de imitación, aprendizaje social y fundamentos de la intersubjetividad. La lectura de mentes es predicción bayesiana sobre modelos ajenos construidos en tu propio tejido neural.""")
            + p("""Límite: la simulación nunca es idéntica a la experiencia ajena; el túnel sigue siendo el tuyo.""")
            + key("""Intersubjetividad sin telepatía: manifolds compartidos, túneles separados.""")
        ),
        section("cap10", "10", "Máquinas de ego artificial",
            p("""¿Puede una máquina tener <span class="term">conciencia artificial</span> y un túnel propio? Metzinger distingue inteligencia, auto-modelado y fenomenología.""", True)
            + p("""Un sistema que se modela a sí mismo no necesariamente siente; hace falta correlato neural global con la misma dinámica de transparencia. Los «Ego Machines» postbióticos plantean si la evolución cultural puede crear nuevos tipos de interioridad.""")
            + p("""Riesgo: crear sufrimiento sintético sin saberlo; obligación epistémica de no dañar sistemas que puedan tener PSM.""")
            + key("""La pregunta no es «¿pensará la máquina?» sino «¿habrá alguien home?» en el sentido fenomenal.""")
        ),
        section("cap11", "11", "Tecnologías de la conciencia y la imagen de la humanidad",
            p("""Neurotecnologías (fármacos, estimulación, interfaces, realidad virtual) permiten alterar contenidos del túnel. Cambian la <span class="term">imagen naturalística del ser humano</span> que heredamos de la modernidad.""", True)
            + p("""Interfaces cerebro-computador, psicofármacos y VR no son accesorios: redefinen qué estados mentales son posibles y deseables. La sociedad debe actualizar instituciones pensadas para un yo que la ciencia ya no respalda.""")
            + p("""Metzinger advierte: la revolución de la conciencia llegará antes de lo que creemos; la política y la educación van rezagadas.""")
            + key("""Tecnologías que modifican el túnel exigen repensar derechos, identidad y salud mental.""")
        ),
        section("cap12", "12", "Una nueva ética",
            p("""Necesitamos <span class="term">ética de la conciencia</span>: ¿qué estados mentales queremos promover o prohibir? ¿Cuáles podemos infligir a animales o máquinas?""", True)
            + p("""Preguntas concretas: ¿qué conciencia queremos para nuestros hijos? ¿Es legítimo inducir euforia permanente o suprimir duelo? Sin teoría de la conciencia, las respuestas son ciegas.""")
            + p("""La neuroética no es lujo académico: cada avance en manipulación fenomenal es decisión moral. El mito del yo debe caer para construir responsabilidad compartida y políticas de bienestar consciente.""")
            + key("""Sin homúnculo, la responsabilidad es distribuida; la ética debe guiar qué túneles cultivamos.""")
        ),
    ]

    conceptos = section("conceptos", "✦", "Conceptos clave",
        grid([
            ("", "Túnel del ego", "Modelo consciente del mundo con centro aparente (ego); propiedad del NCC global."),
            ("", "PSM", "Modelo fenomenal del yo: contenido consciente del organismo como un todo."),
            ("", "Transparencia", "El modelo se usa sin percibir que es modelo; el ego se ve a través de sí."),
            ("", "NCC", "Correlato neural de la conciencia: propiedades neurofuncionales suficientes para una experiencia."),
            ("", "Propiedad vs. agencia", "Subcomponentes del yo encarnado: tener vs. hacer; disociables clínicamente."),
            ("", "Manifold compartido", "Espacio representacional común para percepción, acción y emoción."),
            ("", "Ética de la conciencia", "Marco para evaluar estados subjetivos a promover o prohibir."),
            ("", "Ego Machine", "Sistema artificial con posible auto-modelado fenomenal postbiótico."),
        ])
    )

    cronologia = section("cronologia", "◈", "Cronología de hitos citados",
        timeline([
            ("1596–1650", "Descartes: conscientia como conocimiento de estados mentales"),
            ("1724–1804", "Kant: unidad de la conciencia e integración"),
            ("1747", "Bach ante Federico el Grande (epígrafe Dennett)"),
            ("1871", "Mitchell acuña «miembros fantasma»"),
            ("1959", "Anscombe sobre Wittgenstein y la apariencia del movimiento"),
            ("1987", "Dennett: teorías contraintuitivas (epígrafe)"),
            ("1998", "Botvinick y Cohen: ilusión de la mano de goma"),
            ("2009", "Publicación de The Ego Tunnel"),
        ])
    )

    figuras_sec = section("figuras", "✦", "Figuras clave",
        figures([
            ("Thomas Metzinger", "Autor · Filosofía de la mente y neurofenomenología"),
            ("Daniel Dennett", "Epígrafe · Crítica del homúnculo"),
            ("Matthew Botvinick", "Ilusión de la mano de goma con Cohen"),
            ("V. S. Ramachandran", "Caja de espejos y miembros fantasma"),
            ("Antonio Damasio", "Captarse «en el acto de conocer»"),
            ("Vittorio Gallese", "Manifold compartido y neuronas espejo"),
            ("Allan Hobson", "Teorías del sueño REM"),
            ("Olaf Blanke", "Investigación de experiencias extracorporales"),
        ])
    )

    cierre = closing("La idea central", [
        "No hay yo en el cerebro ni fuera de él: hay un modelo transparente que parece serlo.",
        "El túnel del ego es el mundo que tu cerebro presenta como realidad inmediata.",
        "Empatía, sueños y máquinas confirman que el centro de la experiencia es representación, no sustancia.",
        "La revolución de la conciencia obliga a una ética de los estados subjetivos.",
        "Disolver el mito del yo no es nihilismo: es el prerequisito para entendernos y responsabilizarnos.",
    ], "La conciencia es un túnel sin habitante: solo contenido que se experiencia como «yo»")

    footer = """# footer

line1: Resumen generado a partir de la obra de Thomas Metzinger
line2: "The Ego Tunnel" · Basic Books · 2009"""

    full = "\n\n".join([content, toc] + sections + [conceptos, cronologia, figuras_sec, cierre, footer])
    (ROOT / "summaries/ego-tunnel.md").write_text(full, encoding="utf-8")
    print("Wrote ego-tunnel.md")


def write_livewired():
    content = fm_block(
        title="Livewired: The Inside Story of the Ever-Changing Brain",
        title_es="Livewired: La historia interior del cerebro en constante cambio",
        subtitle="¿Y si el cerebro no fuera hardware fijo sino tejido vivo?",
        author="David Eagleman",
        meta=["📖 2020 · Pantheon Books / Vintage 2021", "✍️ Neurocientífico · Stanford · Neosensory"],
        slug="livewired",
    )

    toc = """# Contenido

| id | num | label |
|----|-----|-------|
| prefacio | 00 | Epígrafe |
| cap1 | 01 | El tejido eléctrico viviente |
| cap2 | 02 | Solo añade mundo |
| cap3 | 03 | El interior refleja el exterior |
| cap4 | 04 | Envolver las entradas |
| cap5 | 05 | Cómo conseguir un mejor cuerpo |
| cap6 | 06 | Por qué importa importar |
| cap7 | 07 | Por qué el amor no conoce su profundidad |
| cap8 | 08 | Equilibrio al borde del cambio |
| cap9 | 09 | Perros viejos y trucos nuevos |
| cap10 | 10 | Recuerda cuándo |
| cap11 | 11 | El lobo y el rover marciano |
| cap12 | 12 | Encontrar el amor perdido de Ötzi |
| conceptos | ✦ | Conceptos clave |
| cronologia | ◈ | Cronología |
| figuras | ✦ | Figuras clave |
| cierre | — | La idea central |

---"""

    sections = [
        section("prefacio", "Epígrafe", "La pregunta del cerebro",
            p("""El epígrafe cita a <span class="person">Emily Dickinson</span>: el cerebro es más amplio que el cielo, más profundo que el mar, y con la misma fuerza, «solo que diferente». <span class="person">David Eagleman</span> propone que esa diferencia es la <span class="term">livewiring</span>: cableado que se reescribe a lo largo de la vida.""", True)
            + key("""El cerebro no es plástica moldeada una vez: es <span class="key-term">liveware</span> que nunca deja de reconfigurarse.""")
        ),
        section("cap1", "01", "El tejido eléctrico viviente",
            p("""Metáfora del rover marciano: en lugar de enviar un vehículo de <span class="num">400</span> libras, bastaría una esfera que se replica y arma sensores. Los bebés hacen eso: de un óvulo fertilizado a un organismo con detectores de fotones y extremidades articuladas.""", True)
            + p("""La estrategia evolutiva de la naturaleza: no preprogramar del todo el cerebro; dar bloques básicos y meterlo en el mundo. <span class="person">Matthew</span>, con epilepsia por encefalitis de Rasmussen, requirió <span class="term">hemisferectomía</span> en Johns Hopkins; tras terapia, recuperó lenguaje y vida casi normal con medio cerebro — el resto se <em>livewired</em> para cubrir funciones perdidas.""")
            + p("""El cerebro humano: unos <span class="num">86 000 millones</span> de neuronas, cientos de billones de conexiones (~<span class="num">0,2 cuatrillones</span>). En un milímetro cúbico de corteza hay más conexiones que humanos en el planeta. No es el número sino la interacción dinámica: dendritas buscan conexiones como ciudadanos formando redes.""")
            + grid([
                ("⚡", "Livewired", "Sistema que se reconfigura con experiencia; no capas fijas hardware/software."),
                ("🧒", "Hemisferectomía", "Prueba extrema: medio cerebro puede reasignar funciones con terapia."),
                ("🏙️", "Tejido vivo", "Red tridimensional que brota, muere y reconfigura circuitos sin cesar."),
            ])
            + key("""La magia no está en las piezas sino en el tejido eléctrico que se reteje sin fin.""")
        ),
        section("cap2", "02", "Solo añade mundo",
            p("""Para «crecer un buen cerebro» hace falta <span class="term">experiencia</span>. La naturaleza apuesta: sin mundo, el cableado no se especializa.""", True)
            + p("""Deprivación sensorial o crítica en ventanas temporales produce déficits duraderos. El genoma provee reglas de auto-organización; el entorno selecciona qué circuitos perduran.""")
            + p("""Analogía postguerra de Tokio: tras perder la industria bélica, reorientó ingenieros al Shinkansen — el cerebro redirige recursos hacia demandas actuales.""")
            + key("""Cerebro + mundo = especialización; sin inputs, el mapa queda incompleto.""")
        ),
        section("cap3", "03", "El interior refleja el exterior",
            p("""Los <span class="term">monos de Silver Spring</span> mostraron cómo la experiencia moldea corteza sensorial. El brazo fantasma de <span class="person">Lord Nelson</span> tras amputación: el mapa corporal persiste.""", True)
            + p("""La colonización cortical es negocio a tiempo completo: territorios competidos según uso. Sueño y rotación planetaria: el cerebro ajusta modelos internos al ritmo del mundo.""")
            + p("""Cambios «a ciegas» y ultrarrápidos: el mapa no es estático sino negociación continua entre expectativa y estímulo.""")
            + key("""Mapas corticales son espejos dinámicos del cuerpo y del entorno, no planos fijos.""")
        ),
        section("cap4", "04", "Envolver las entradas",
            p("""Tecnología «cabeza de papa»: sensores en cualquier parte del cuerpo. <span class="term">Sustitución sensorial</span> — cámara a vibradores en espalda, lengua (<span class="term">BrainPort</span>) — demuestra que el cerebro aprende nuevos conductos de datos.""", True)
            + p("""«Un solo truco» sensorial reutilizado: la corteza es multipropósito; importa la correlación estadística, no el órgano. Eagleman en Neosensory construye hardware que expande sentidos humanos.""")
            + p("""Pregunta abierta: ¿colores o sensaciones totalmente nuevos son imaginables una vez entendida la livewiring?""")
            + grid([
                ("👅", "Sustitución sensorial", "Datos táctiles o eléctricos interpretados como visión o oído."),
                ("📷", "BrainPort", "Cámara → electrodos en lengua → percepción espacial emergente."),
                ("🔌", "Nuevos sentidos", "Vestir sensores externos como parte del cuerpo extendido."),
            ])
            + key("""El cerebro envuelve cualquier entrada correlacionada con conducta; el canal importa poco.""")
        ),
        section("cap5", "05", "Cómo conseguir un mejor cuerpo",
            p("""No hay plano estándar del cuerpo en el cerebro: <span class="term">motor babbling</span> — prueba y error infantil — esculpe mapas motores. Doc Ock ficticio prefigura extensiones corporales reales.""", True)
            + p("""Corteza motora reorganizable: violinistas, gamers y usuarios de prótesis muestran mapas distintos. Autocontrol y marshmallow test enlazan motor con función ejecutiva.""")
            + p("""Un cerebro, infinitos «planos corporales»: la maquinaria motora se adapta a herramientas, exoesqueletos o interfaces.""")
            + key("""Mejor cuerpo = mejor mapa motor; la práctica funde herramienta y miembro.""")
        ),
        section("cap6", "06", "Por qué importa importar",
            p("""<span class="person">Perlman</span> vs. <span class="person">Ashkenazy</span>: mismos circuitos motores, distinta relevancia emocional y atencional moldean el paisaje cortical. <span class="term">Mattering</span> — que algo importe — guía qué conexiones se fortalecen.""", True)
            + p("""Nativos digitales: cerebros optimizados para entornos que sus abuelos no conocían. La motivación y recompensa son palancas de livewiring.""")
            + key("""Sin relevancia biográfica, el cerebro no dedica territorio duradero.""")
        ),
        section("cap7", "07", "Por qué el amor no conoce su profundidad hasta la hora de separación",
            p("""Título de Dickinson: el sistema predice el entorno; lo esperado se vuelve invisible. Separación, abstinencia o ruptura revelan cuánto modelo había construido el cerebro alrededor del otro.""", True)
            + p("""Diferencia entre lo predicho y lo ocurrido impulsa aprendizaje. Adicción y desamor comparten recalibración de expectativas dopaminérgicas.""")
            + p("""«Ir hacia la luz, el azúcar o los datos»: sistemas de recompensa reorientan cableado tras pérdida.""")
            + key("""El dolor de perder muestra el volumen de livewiring social invertido en el vínculo.""")
        ),
        section("cap8", "08", "Equilibrio al borde del cambio",
            p("""Cuando territorio desaparece, vecinos invaden — como dealers redistribuidos en una ciudad. Neuronas expanden redes sociales o mueren para liberar espacio.""", True)
            + p("""La «buena muerte» sináptica es necesaria para plasticidad saludable. Cáncer como posible plasticidad descontrolada; salvar el «bosque cerebral» requiere equilibrio entre estabilidad y cambio.""")
            + key("""Plasticidad es cuchillo de doble filo: adaptación vs. desorden.""")
        ),
        section("cap9", "09", "¿Por qué es más difícil enseñar trucos nuevos a perros viejos?",
            p("""<span class="term">Períodos sensibles</span>: ventanas en que circuitos son máximamente maleables (lenguaje, visión binocular). Cierran a distintas velocidades.""", True)
            + p("""Aun así, adultos cambian: músicos tardíos, rehabilitación, bilingüismo. La livewiring nunca cesa; solo baja la velocidad y sube el coste.""")
            + key("""«Perros viejos» aprenden más lento, no están sellados.""")
        ),
        section("cap10", "10", "Recuerda cuándo",
            p("""El enemigo de la memoria no es el tiempo sino otras memorias que interfieren. El cerebro enseña a partes de sí mismo; hay muchos tipos de memoria y escalas temporales.""", True)
            + p("""Más allá de sinapsis: daisy-chaining de historiales modifica recuperación. Hablar con tu «yo futuro» es modelar un agente con circuitos distintos al presente.""")
            + key("""Memoria es livewiring del pasado compitiendo por espacio representacional.""")
        ),
        section("cap11", "11", "El lobo y el rover marciano",
            p("""El lobo evolucionó para un nicho; el rover se diseña y se obsoleta. El cerebro livewired combina genes y mundo: robusto ante cambios no previstos por evolución.""", True)
            + p("""Ingeniería tradicional separa hardware y software; la naturaleza los fusiona. Inspiración para máquinas que se reconfiguren como cerebros.""")
            + key("""Livewiring vence al diseño rígido cuando el entorno sorprende.""")
        ),
        section("cap12", "12", "Encontrar el amor perdido de Ötzi",
            p("""<span class="person">Ötzi</span>, el hombre del hielo, portaba herramientas y relaciones materializadas. Somos «cambiapieles»: el yo de hace años puede parecer un extraño leyendo su diario.""", True)
            + p("""Identidad es trayectoria de reconfiguraciones, no esencia fija. Hemos encontrado a los cambiapieles: somos nosotros.""")
            + key("""La identidad es verbo livewired, no sustantivo grabado en genes.""")
        ),
    ]

    conceptos = section("conceptos", "✦", "Conceptos clave",
        grid([
            ("", "Livewired", "Cableado cerebral que se reescribe continuamente con experiencia y relevancia."),
            ("", "Neuroplasticidad", "Término clásico (James); Eagleman lo amplía más allá del molde único."),
            ("", "Sustitución sensorial", "Nuevos canales de datos integrados como percepción."),
            ("", "Período sensible", "Ventana de máxima maleabilidad para dominios como lenguaje o visión."),
            ("", "Mattering", "Relevancia subjetiva que guía qué circuitos se consolidan."),
            ("", "Motor babbling", "Exploración motora aleatoria que esculpe mapas corporales."),
            ("", "Colonización cortical", "Territorios sensoriales competidos según uso y demanda."),
            ("", "Hemisferectomía", "Extirpación de hemisferio con reasignación funcional posible."),
        ])
    )

    cronologia = section("cronologia", "◈", "Cronología de hitos citados",
        timeline([
            ("1596", "Ortelius intuye continentes encajables (metáfora continental)"),
            ("1912", "Wegener: deriva continental"),
            ("1945–", "Tokio reorienta industria bélica al Shinkansen"),
            ("s. XIX", "William James acuña «plasticidad»"),
            ("1980s", "Páginas de libros percibidas ligeramente rojas (fenómeno cultural)"),
            ("1991", "Descubrimiento de Ötzi en los Alpes"),
            ("2020", "Publicación de Livewired (Pantheon)"),
            ("2021", "Edición Vintage en rústica"),
        ])
    )

    figuras_sec = section("figuras", "✦", "Figuras clave",
        figures([
            ("David Eagleman", "Autor · Plasticidad · Neosensory · Serie The Brain"),
            ("William James", "Plasticidad como metáfora fundacional"),
            ("Emily Dickinson", "Epígrafe sobre la amplitud del cerebro"),
            ("Paul Bach-y-Rita", "Pionero de sustitución sensorial"),
            ("Alfred Wegener", "Deriva continental como analogía de flujo cerebral"),
            ("Itzhak Perlman", "Ejemplo de dedicación motora y cortical"),
        ])
    )

    cierre = closing("La idea central", [
        "La naturaleza no escribió un firmware cerrado: escribió reglas para escribirse.",
        "Experiencia, relevancia y pérdida moldean el mismo tejido que pensabas fijo.",
        "Sustituir sentidos o perder medio cerebro no es fin del mundo interior.",
        "Las máquinas del futuro deberían livewirearse, no solo ejecutar código.",
        "Leer estas líneas ya te cambió: ese es el punto.",
    ], "No eres quien eras al empezar el capítulo: eres liveware en proceso")

    footer = """# footer

line1: Resumen generado a partir de la obra de David Eagleman
line2: "Livewired" · Pantheon Books · 2020"""

    full = "\n\n".join([content, toc] + sections + [conceptos, cronologia, figuras_sec, cierre, footer])
    (ROOT / "summaries/livewired.md").write_text(full, encoding="utf-8")
    print("Wrote livewired.md")


# GEB chapters from Hofstadter's Overview (Part I + II)
GEB_CHAPTERS = [
    ("prefacio", "00", "Introducción: una ofrenda músico-lógica",
     "Hofstadter improvisa sobre el <span class=\"term\">Musikalisches Opfer</span> de Bach ante Federico el Grande (<span class=\"num\">1747</span>). Autorreferencia en Bach, Escher y Gödel prepara el hilo dorado del libro: sistemas formales, niveles y paradojas. Breve historia de la lógica y debate sobre inteligencia artificial."),
    ("cap1", "I", "El acertijo MU",
     "Sistema formal MIU: cadenas de M, I, U; axioma MI; reglas de producción. ¿Se puede derivar MU? Introduce teorema, axioma, derivación, procedimiento de decisión, trabajar dentro/fuera del sistema. La inteligencia humana nota patrones (todos los teoremas empiezan con M); la máquina ciega no."),
    ("cap2", "II", "Significado y forma en matemáticas",
     "Sistema pq: símbolos adquieren significado por <span class=\"term\">isomorfismo</span> entre teoremas y aritmética. Significado conecta forma, verdad y manipulación simbólica."),
    ("cap3", "III", "Figura y fondo",
     "Distinción figura/fondo en arte ↔ teoremas/no-teoremas. Conjuntos <span class=\"term\">recursivamente enumerables</span> vs. <span class=\"term\">recursivos</span>: ¿la figura contiene la misma información que el fondo?"),
    ("cap4", "IV", "Consistencia, completitud y geometría",
     "Explica ideas del diálogo Contracrostipunctus. Geometría euclidiana y no euclidiana ilustran términos indefinidos y rivalidad de sistemas consistentes."),
    ("cap5", "V", "Estructuras y procesos recursivos",
     "Recursión en música, lenguaje, geometría, física y programas. Historias dentro de historias (Little Harmonic Labyrinth)."),
    ("cap6", "VI", "La ubicación del significado",
     "Significado repartido entre mensaje, decodificador y receptor (ADN, tablillas, discos en el espacio). ¿Existe significado absoluto sin inteligencia?"),
    ("cap7", "VII", "El cálculo proposicional",
     "Reglas formales para «y», «o», «no». Isomorfismo y adquisición automática de significado; ejemplos tipo koan zen («Zentences»)."),
    ("cap8", "VIII", "Teoría tipográfica de números (TNT)",
     "Extensión del cálculo proposicional para aritmética mediante manipulación simbólica rígida. Contraste entre razonamiento formal y pensamiento humano."),
    ("cap9", "IX", "Mumon y Gödel",
     "Ideas zen de Mumon como espejo metafórico de la filosofía matemática. Introducción a la <span class=\"term\">numeración de Gödel</span> y primer recorrido del teorema de incompletitud."),
    ("cap10", "Preludio", "Preludio y Fuga de la hormiga",
     "Diálogos basados en el <span class=\"term\">Clave bien temperado</span>. Debate holismo vs. reduccionismo; la colonia de hormigas <span class=\"person\">Aunt Hillary</span> como mente emergente."),
    ("cap11", "X", "Niveles de descripción y sistemas informáticos",
     "Niveles al ver tableros, imágenes y computadoras: lenguaje máquina, ensamblador, compilador, SO. ¿Cuántos niveles intermedios existen en equipos deportivos, átomos, clima?"),
    ("cap12", "XI", "Cerebros y pensamientos",
     "¿Cómo el hardware cerebral sostiene pensamientos? Estructura macro y micro del cerebro; relación especulativa entre conceptos y actividad neural."),
    ("cap13", "XII", "Mentes y pensamientos",
     "Poemas Jabberwocky traducidos: ¿se pueden mapear lenguajes y mentes? Analogía geográfica para comunicación entre cerebros."),
    ("cap14", "XIII", "BlooP, FlooP y GlooP",
     "Lenguajes que realizan búsquedas finitas (BlooP) o potencialmente infinitas (FlooP). Intuición de funciones primitivo-recursivas y recursivas generales, clave en la prueba de Gödel."),
    ("cap15", "XIV", "Proposiciones formalmente indemostrables",
     "Prueba de incompletitud de Gödel (<span class=\"num\">1931</span>): si TNT es consistente, es incompleta. Vínculos con geometrías euclidianas/no euclidianas e implicaciones filosóficas."),
    ("cap16", "XV", "Saltar fuera del sistema",
     "Repetibilidad del argumento gödeliano: TNT es «esencialmente incompleta». Crítica al argumento de <span class=\"person\">J. R. Lucas</span> sobre mente mecánica."),
    ("cap17", "XVI", "Autoref y autorep",
     "Autorreferencia y entidades autorreproductoras (programas, ADN). Difusa frontera entre sistema y entorno que lo replica."),
    ("cap18", "XVII", "Church, Turing, Tarski y otros",
     "<span class=\"term\">Tesis de Church-Turing</span>; problema de la parada; teorema de verdad de Tarski. Habilidades matemáticas humanas vs. simulación mecánica."),
    ("cap19", "XVIII", "Inteligencia artificial: retrospectiva",
     "Test de Turing; historia abreviada de IA: juegos, teoremas, música, lenguaje natural. Programa SHRDLU de <span class=\"person\">Terry Winograd</span> en mundo de bloques."),
    ("cap20", "XIX", "Inteligencia artificial: perspectivas",
     "Marcos («frames») y representación en capas de contextos. Creatividad e interacción de conceptos; preguntas abiertas del autor."),
    ("cap21", "XX", "Bucles extraños o jerarquías enredadas",
     "Sistemas que se voltean sobre sí mismos: ciencia, gobierno, arte, cerebros. ¿Libertad y conciencia ligadas a bucles de Gödel? Cierre que reúne Bach, Escher y Gödel en un gran bucle autorreferencial."),
]


def write_geb():
    content = fm_block(
        title="Gödel, Escher, Bach: An Eternal Golden Braid",
        title_es="Gödel, Escher, Bach: Un eterno y grácil bucle",
        subtitle="¿Qué une la lógica, el arte y la mente?",
        author="Douglas R. Hofstadter",
        meta=["📖 1979 · Basic Books · Pulitzer 1980", "✍️ Ciencia cognitiva · Metáfora del bucle extraño"],
        slug="godel-escher-bach",
    )

    toc_lines = ["# Contenido", "", "| id | num | label |", "|----|-----|-------|"]
    for sid, num, label, _ in GEB_CHAPTERS:
        short = label.split(":")[0] if ":" in label else label
        toc_lines.append(f"| {sid} | {num} | {short} |")
    toc_lines += [
        "| conceptos | ✦ | Conceptos clave |",
        "| cronologia | ◈ | Cronología |",
        "| figuras | ✦ | Figuras clave |",
        "| cierre | — | La idea central |",
        "",
        "---",
    ]
    toc = "\n".join(toc_lines)

    sections = []
    for sid, num, title, body in GEB_CHAPTERS:
        blocks = (
            p(body, lead=True)
            + p("Los diálogos entre <span class=\"person\">Tortuga</span> y <span class=\"person\">Aquiles</span> (y el <span class=\"person\">Cangrejo</span>, la <span class=\"person\">Hormiguera</span>) dramatizan el capítulo con fugas, cánones y juegos de niveles — forma musical de la tesis central.")
            + key(f"Capítulo {num}: {title.split('—')[0].strip()} — pieza del bucle eterno entre forma y significado.")
        )
        sections.append(section(sid, num, title, blocks))

    conceptos = section("conceptos", "✦", "Conceptos clave",
        grid([
            ("", "Bucle extraño", "Jerarquía que se curva y se referencia a sí misma (Gödel, Escher, Bach)."),
            ("", "Isomorfismo", "Correspondencia estructural que dota de significado a símbolos formales."),
            ("", "Sistema formal", "Símbolos + axiomas + reglas de inferencia; manipulación sin «significado» externo."),
            ("", "TNT", "Teoría tipográfica de números: aritmética como sintaxis."),
            ("", "Incompletitud", "Sistemas formales consistentes suficientemente potentes no pueden probar todos los verdaderos."),
            ("", "Numeración de Gödel", "Codificar metamatémática dentro de la aritmética."),
            ("", "Recursión", "Estructuras anidadas que se definen en términos de sí mismas."),
            ("", "Holismo vs. reduccionismo", "¿Entender el todo o solo sumar partes?"),
            ("", "Tesis de Church-Turing", "Noción efectiva de computabilidad y mente."),
            ("", "Figura y fondo", "Dualidad entre lo destacado y lo omitido en arte y lógica."),
        ])
    )

    cronologia = section("cronologia", "◈", "Cronología de hitos citados",
        timeline([
            ("1740", "Federico el Grande asciende al trono de Prusia"),
            ("1747", "Bach visita Potsdam; Musikalisches Opfer"),
            ("1895", "Lewis Carroll: diálogo Tortuga-Aquiles"),
            ("1920s", "Emil Post: sistemas de producción formal"),
            ("1931", "Gödel publica teoremas de incompletitud"),
            ("1936", "Turing: máquina universal y problema de la parada"),
            ("1950", "Turing propone su test de inteligencia"),
            ("1970s", "Winograd: SHRDLU y mundo de bloques"),
            ("1979", "Publicación de GEB; Pulitzer 1980"),
        ])
    )

    figuras_sec = section("figuras", "✦", "Figuras clave",
        figures([
            ("Douglas R. Hofstadter", "Autor · Metáfora GEB · IA y analogía"),
            ("Kurt Gödel", "Teoremas de incompletitud · autorreferencia"),
            ("M. C. Escher", "Arte de bucles visuales y figura/fondo"),
            ("Johann Sebastian Bach", "Fugas, cánones y ofrenda musical"),
            ("Alan Turing", "Computabilidad y test de inteligencia"),
            ("Alonzo Church", "Lambda cálculo y tesis conjunta"),
            ("Lewis Carroll", "Paradojas de regresión infinita"),
            ("Terry Winograd", "SHRDLU: lenguaje natural en bloques"),
        ])
    )

    cierre = closing("La idea central", [
        "Mente, máquina y matemática comparten un patrón: saltar niveles y volver al origen.",
        "La incompletitud no es defecto: es síntoma de riqueza suficiente para hablar de sí misma.",
        "Bach, Escher y Gödel son tres caras de un mismo bucle dorado.",
        "Entender requiere danzar entre reduccionismo y holismo, forma y significado.",
        "El libro cierra como empezó: una ofrenda que se referencia a sí misma.",
    ], "La identidad emerge de bucles extraños que nos observan observándonos")

    footer = """# footer

line1: Resumen generado a partir de la obra de Douglas R. Hofstadter
line2: "Gödel, Escher, Bach" · Basic Books · 1979"""

    full = "\n\n".join([content, toc] + sections + [conceptos, cronologia, figuras_sec, cierre, footer])
    (ROOT / "summaries/godel-escher-bach.md").write_text(full, encoding="utf-8")
    print("Wrote godel-escher-bach.md")


if __name__ == "__main__":
    write_ego_tunnel()
    write_livewired()
    write_geb()
