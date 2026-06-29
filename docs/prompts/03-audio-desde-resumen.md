# Prompt 03 — Audio desde un resumen `.md`

Usá este prompt cuando el usuario pida **generar audio / narración / audiolibro** de un resumen.

**Alcance actual (v0):** **un solo** archivo `summaries/<slug>.md` → **un** WAV/MP3.  
No procesar los 34 libros todavía.

**Disparadores del usuario:**

- «Generame el audio del resumen de *X*»
- «Narrá el md de *cosmos*»
- «TTS de `summaries/seven-brief-lessons.md`»
- «Leé el prompt 03» / «Seguí `docs/prompts/03-audio-desde-resumen.md`»

---

## Contexto del repo

| Ruta | Rol |
|------|-----|
| `summaries/<slug>.md` | Fuente de verdad del contenido a narrar |
| `docs/templates/resumen-libro.template.md` | Estructura del MD (saber qué ignorar al parsear) |
| `audio/<slug>.wav` | Salida principal (crear carpeta si no existe) |
| `audio/<slug>.mp3` | Salida opcional (derivada del WAV) |

**Repo Hermes Director** (TTS reutilizable):

- Ruta: `/home/ljappert/my-repos/Project Hermes Director`
- Motor: Edge TTS → `core/tts/edge.py`
- Config: `config/default.yaml` → voz `es-MX-JorgeNeural`, rate `-8%`
- Audio: `core/audio.py` → `concat_wavs`, `mp3_to_wav`, `probe_duration`

---

## Paso 0 — Resolver el libro

1. El usuario indica slug o título (`cosmos`, `Sapiens`, `seven-brief-lessons`, etc.).
2. Resolver a `summaries/<slug>.md`. Si no existe, listar `summaries/*.md` y pedir uno.
3. **Si no especifica libro**, usar por defecto `seven-brief-lessons` (corto, buen smoke test).

---

## Paso 1 — MD → texto plano para TTS

Crear o extender un script (sugerido: `scripts/md-to-narration.py` en este repo) que:

1. Lea `summaries/<slug>.md`
2. **Quite** (no narrar):
   - Frontmatter YAML (`---` … `---`)
   - Tabla de contenidos (`# Contenido`, tablas `| id |`)
   - Comentarios HTML (`<!-- paragraph -->`, etc.)
   - Tags HTML: `<span>`, `<em>`, `<strong>`, `<a>` → conservar solo el texto interior
   - Bloques de tabla markdown (`| ... |`)
   - Líneas vacías repetidas
3. **Conserve y formatee para voz**:
   - Intro: «{title}, de {author}.» (desde frontmatter)
   - Títulos de sección: `## title: ...` → leer como frase («Capítulo uno: Orillas del océano cósmico»)
   - Párrafos de cuerpo
   - Citas `>` → «Cita: …» (sin guión largo al inicio si suena raro)
4. Guarde texto intermedio en `audio/<slug>.txt` (útil para revisar y reanudar)

**Reglas:** no inventar contenido; no resumir más; español latino; tono divulgativo.

---

## Paso 2 — TTS (un solo libro)

Reutilizar Hermes Director (importar desde su venv o agregar path):

```python
from core.config import load_config
from core.tts import get_tts_engine
from core.audio import concat_wavs, probe_duration
```

1. Partir `audio/<slug>.txt` en **chunks** de ~3000–5000 caracteres, cortando en fin de párrafo.
2. Por cada chunk → `audio/<slug>/chunks/chunkNNN.wav` con Edge TTS.
3. **Reanudación:** omitir chunks que ya existan.
4. `request_delay_s: 0.75` entre chunks (config Hermes).
5. Concatenar todos los chunks → `audio/<slug>.wav`
6. Opcional: exportar `audio/<slug>.mp3` con ffmpeg.

Mostrar al terminar: duración (`probe_duration`), tamaño en MB, ruta final.

---

## Paso 3 — Probar antes de escalar

1. Correr con el slug elegido (o `seven-brief-lessons` por defecto).
2. Escuchar los primeros 30 s; si el parser deja basura («num dos», «term Cosmos»), corregir el script.
3. **No** generar audio de los otros 33 resúmenes hasta que el usuario lo pida explícitamente.

---

## Entregables

- [x] `scripts/md-to-narration.py`
- [x] `audio/<slug>.txt` (texto plano)
- [x] `public/audio/<slug>.mp3` (commiteado; WAV/chunks en `.gitignore`)
- [x] Reproductor en `HeroSection` + `meta.audio` opcional en `BookMeta`

---

## Comando

```bash
# Desde /home/ljappert/Downloads/libros — solo texto plano
python3 scripts/md-to-narration.py free-will --text-only

# TTS completo (WAV + MP3 en public/audio/ para la app):
"/home/ljappert/my-repos/Project Hermes Director/.venv/bin/python" \
  scripts/md-to-narration.py free-will --tts --mp3
```

Salida: `audio/<slug>.txt`, `public/audio/<slug>.mp3` (servido por Vite en `/audio/<slug>.mp3`).

---

## Libros disponibles (`summaries/`)

`21-lessons`, `beginning-of-infinity`, `biggest-ideas-universe`, `biosignatures-astrobiology`, `black-swan`, `blind-watchmaker`, `cosmos`, `determined`, `ego-tunnel`, `emperors-new-mind`, `fabric-of-reality`, `free-will`, `future-of-the-mind`, `godel-escher-bach`, `homo-deus`, `how-we-learn`, `incognito`, `intelligent-life-universe`, `life-3-0`, `livewired`, `murmurs-of-earth`, `origins`, `our-mathematical-universe`, `sapiens`, `self-assembling-brain`, `selfish-gene`, `seven-brief-lessons`, `superintelligence`, `the-brain`, `universo-de-la-nada`, `vital-question`, `why-does-world-exist`, `why-evolution-is-true`, `wonderful-life`

---

## Futuro

- Batch de los 34 MD
- Guion condensado multi-libro
- Precache PWA de archivos `.mp3` grandes
