# Prompt 03 — Audio desde un resumen `.md`

Usá este prompt cuando el usuario pida **generar audio / narración / audiolibro** de un resumen.

**Alcance:** un `summaries/<slug>.md` → texto plano + MP3 publicado.  
Batch de varios libros: solo si el usuario lo pide explícitamente (`scripts/batch-omnivoice-tts.sh`).

**Disparadores del usuario:**

- «Generame el audio del resumen de _X_»
- «Narrá el md de _cosmos_»
- «TTS de `summaries/seven-brief-lessons.md`»
- «Leé el prompt 03» / «Seguí `docs/prompts/03-audio-desde-resumen.md`»

---

## Contexto del repo

| Ruta | Rol |
|------|-----|
| `summaries/<slug>.md` | Fuente de verdad del contenido a narrar |
| `scripts/md-to-narration.py` | MD → texto plano + TTS |
| `audio/<slug>.txt` | Texto intermedio para revisar / reanudar |
| `audio/<slug>/chunks/` | Chunks WAV temporales (gitignored) |
| `public/audio/<slug>.mp3` | Audio servido por la app (commitear si va a prod) |
| `src/books/audio-catalog.ts` | Gate UI: solo slugs en `BOOKS_WITH_AUDIO` muestran audio |
| `.env` / `.env.example` | `LUCAS_AI_API_KEY` (nunca commitear `.env`) |
| `.cursor/rules/tts-api-key.mdc` | Dónde vive la key para agentes |

**Motor TTS (default):** OmniVoice vía **lucas-ai-api** con API key Bearer (`LUCAS_AI_API_KEY`).  
Fair-share por cliente: nombre de la key (`memorable-summaries`). Sin login JWT.

**Alternativa legada:** `--tts-hermes` (Edge TTS vía Project Hermes Director), solo si el usuario lo pide.

---

## Paso 0 — Resolver el libro

1. El usuario indica slug o título (`cosmos`, `Sapiens`, `seven-brief-lessons`, etc.).
2. Resolver a `summaries/<slug>.md`. Si no existe, listar `summaries/*.md` y pedir uno.
3. **Si no especifica libro**, usar por defecto `seven-brief-lessons` (corto, buen smoke test).

---

## Paso 1 — MD → texto plano

El script ya hace el parseo. No reinventar:

```bash
python3 scripts/md-to-narration.py <slug> --text-only
# → audio/<slug>.txt
```

Qué **no** se narra: frontmatter, TOC, comentarios HTML, tags HTML (solo texto), tablas markdown.  
Qué **sí**: intro título/autor, títulos de sección, párrafos, citas.

**Reglas:** no inventar contenido; no resumir más; español latino; tono divulgativo.

### Ritmo y títulos (parser + concat)

El script aplica esto automáticamente; no hace falta editar el `.txt` a mano:

1. **Sin prefijos duplicados** — `num: 00` + título «Prólogo e…» → narrar solo el título (no «Prólogo. Prólogo e…»). Igual si el título ya empieza con «Capítulo N».
2. **Un párrafo = clip(s) propios** — no fusionar títulos cortos con el párrafo siguiente (evita «La idea central La IA…» corrido).
3. **Pausas al concatenar** — ~350 ms entre clips; ~700 ms después de títulos estructurales (`La idea central`, `Prólogo…`, `Capítulo…`, `Idea clave:`, `Cita:`).
4. **No usar SSML ni `…` artificiales** para forzar pausas: OmniVoice recibe texto plano; el silencio es PCM en el concat.

---

## Paso 2 — TTS OmniVoice (un libro)

Requisitos:

```bash
cp .env.example .env   # una vez
# Completar LUCAS_AI_API_KEY=sk-...
```

Generar:

```bash
python3 scripts/md-to-narration.py <slug> --tts --mp3
# Forzar regeneración de chunks:
python3 scripts/md-to-narration.py <slug> --tts --mp3 --force
```

Comportamiento:

1. Parte `audio/<slug>.txt` en chunks y llama a lucas-ai-api (OmniVoice).
2. **Reanudación:** omite chunks existentes salvo `--force`.
3. Reintenta en 429 con backoff.
4. Concatena → WAV temporal → `public/audio/<slug>.mp3`.

Mostrar al terminar: duración, tamaño, ruta final.

### Publicar en la UI

Tras un MP3 nuevo o regenerado post-rewrite:

1. Asegurar que el slug está en `BOOKS_WITH_AUDIO` (`src/books/audio-catalog.ts`).
2. `npm run build` (o al menos verificar que `/audio/<slug>.mp3` se sirve).
3. Commitear `public/audio/<slug>.mp3` + el cambio de catálogo si aplica.

Sin el slug en el catálogo, el archivo puede existir en disco pero **no** aparece en la cola ni en la biblioteca.

---

## Paso 3 — Probar antes de escalar

1. Correr con el slug elegido (o `seven-brief-lessons`).
2. Escuchar los primeros 30 s; si el parser deja basura («num dos», «term Cosmos»), corregir el script.
3. **No** batch masivo hasta que el usuario lo pida.

Batch opcional:

```bash
./scripts/batch-omnivoice-tts.sh
```

---

## Reproducción en la app (referencia)

No es parte de la generación, pero el audio entra a:

- Cola global (`useAudioQueue`, sheet en navbar)
- Bottom bar con ecualizador mientras suena
- Card de libro: agregar / reproducir

---

## Entregables

- [x] `scripts/md-to-narration.py` (OmniVoice + opcional Hermes)
- [x] `audio/<slug>.txt`
- [x] `public/audio/<slug>.mp3`
- [x] Entrada en `src/books/audio-catalog.ts` cuando el audio está listo para UI
- [ ] WAV/chunks locales (gitignored; no commitear)

---

## Comando rápido

```bash
# Solo texto
python3 scripts/md-to-narration.py free-will --text-only

# TTS OmniVoice (preferido; lee .env)
python3 scripts/md-to-narration.py free-will --tts --mp3

# Alternativa Edge TTS (Hermes), solo bajo pedido:
"/home/ljappert/my-repos/Project Hermes Director/.venv/bin/python" \
  scripts/md-to-narration.py free-will --tts-hermes --mp3
```

Salida publicada: `public/audio/<slug>.mp3` → Vite `/audio/<slug>.mp3`.

---

## Futuro

- Seguir regenerando MP3 stale post-rewrite y sumarlos a `BOOKS_WITH_AUDIO`
- Precache PWA selectivo de narraciones
