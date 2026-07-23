#!/usr/bin/env bash
# Regenera audio OmniVoice para todos los summaries/*.md (sin skeletons).
# Uso:
#   export LUCAS_AI_API_KEY='sk-...'
#   ./scripts/batch-omnivoice-tts.sh
#   PARALLEL=5 SKIP=seven-brief-lessons ./scripts/batch-omnivoice-tts.sh
# Nota: per-client TTS max es 5; PARALLEL>5 solo genera 429 y retries.
set -euo pipefail

REPO_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$REPO_ROOT"

: "${LUCAS_AI_API_KEY:?Seteá LUCAS_AI_API_KEY (API key dedicada memorable-summaries)}"

PARALLEL="${PARALLEL:-5}"
SKIP="${SKIP:-}"
LOG_DIR="$REPO_ROOT/audio/batch-logs"
mkdir -p "$LOG_DIR"

mapfile -t SLUGS < <(ls summaries/*.md | grep -v backup | grep -v skeleton | sed 's|.*/||;s|\.md||' | sort)

if [[ -n "$SKIP" ]]; then
  IFS=',' read -ra SKIP_ARR <<<"$SKIP"
  FILTERED=()
  for slug in "${SLUGS[@]}"; do
    skip=0
    for s in "${SKIP_ARR[@]}"; do
      [[ "$slug" == "$s" ]] && skip=1 && break
    done
    [[ $skip -eq 0 ]] && FILTERED+=("$slug")
  done
  SLUGS=("${FILTERED[@]}")
fi

echo "Libros: ${#SLUGS[@]} | paralelismo: $PARALLEL"
echo "Logs: $LOG_DIR"
echo "Inicio: $(date -Iseconds)"

run_one() {
  local slug="$1"
  local log="$LOG_DIR/${slug}.log"
  local ok="$LOG_DIR/${slug}.ok"
  local fail="$LOG_DIR/${slug}.fail"
  if [[ -f "$ok" ]]; then
    echo "[skip] $slug (ya OK)"
    return 0
  fi
  rm -f "$fail"
  echo "[start] $slug $(date -Iseconds)" | tee "$log"
  if python3 scripts/md-to-narration.py "$slug" --tts --mp3 --force >>"$log" 2>&1
  then
    touch "$ok"
    echo "[ok] $slug $(date -Iseconds)" | tee -a "$log"
  else
    touch "$fail"
    echo "[fail] $slug $(date -Iseconds)" | tee -a "$log"
    return 1
  fi
}

export -f run_one
export LOG_DIR LUCAS_AI_API_KEY
[[ -n "${LUCAS_AI_API_URL:-}" ]] && export LUCAS_AI_API_URL

printf '%s\n' "${SLUGS[@]}" | xargs -P "$PARALLEL" -I{} bash -c 'run_one "$@"' _ {}

echo "Fin: $(date -Iseconds)"
ok_n=$(ls "$LOG_DIR"/*.ok 2>/dev/null | wc -l)
fail_n=$(ls "$LOG_DIR"/*.fail 2>/dev/null | wc -l)
echo "OK=$ok_n FAIL=$fail_n"

# Actualizar catálogo con todos los MP3 presentes
python3 <<'PY'
from pathlib import Path
root = Path(".")
mp3s = sorted(p.stem for p in (root / "public" / "audio").glob("*.mp3"))
out = root / "src" / "books" / "audio-catalog.ts"
lines = [
    "/** Slugs con narración TTS en public/audio/<slug>.mp3 */",
    "export const BOOKS_WITH_AUDIO = new Set<string>([",
]
for s in mp3s:
    lines.append(f"  '{s}',")
lines += [
    "])",
    "",
    "export function bookHasAudio(slug: string): boolean {",
    "  return BOOKS_WITH_AUDIO.has(slug)",
    "}",
    "",
]
out.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"audio-catalog.ts ← {len(mp3s)} libros")
PY

if [[ "$fail_n" -gt 0 ]]; then
  echo "Fallaron:" >&2
  ls "$LOG_DIR"/*.fail 2>/dev/null | sed 's|.*/||;s|\.fail||' >&2
  exit 1
fi
