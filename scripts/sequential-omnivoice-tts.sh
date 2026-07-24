#!/usr/bin/env bash
# Regenera audio OmniVoice de a un libro por vez (retoma chunks existentes).
# Uso:
#   set -a && source .env && set +a
#   ./scripts/sequential-omnivoice-tts.sh
set -uo pipefail

REPO_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$REPO_ROOT"

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

: "${LUCAS_AI_API_KEY:?Seteá LUCAS_AI_API_KEY (o creá .env desde .env.example)}"

LOG_DIR="$REPO_ROOT/audio/batch-logs"
QUEUE_LOG="$LOG_DIR/_sequential.out"
mkdir -p "$LOG_DIR"

update_catalog() {
  python3 <<'PY'
from pathlib import Path

root = Path(".")
mp3s = sorted(p.stem for p in (root / "public" / "audio").glob("*.mp3"))
ok = {p.stem for p in (root / "audio" / "batch-logs").glob("*.ok")}
fresh = sorted(s for s in mp3s if s in ok)
out = root / "src" / "books" / "audio-catalog.ts"
lines = [
    "/** Slugs con narración TTS en public/audio/<slug>.mp3",
    " *  Solo audios regenerados post-rewrite (batch .ok).",
    " *  MP3 stale pueden existir en disco pero no se listan aquí.",
    " */",
    "export const BOOKS_WITH_AUDIO = new Set<string>([",
]
for s in fresh:
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
print(f"audio-catalog.ts ← {len(fresh)} libros")
PY
}

mapfile -t SLUGS < <(ls summaries/*.md | grep -v backup | grep -v skeleton | sed 's|.*/||;s|\.md||' | sort)

{
  echo "=== sequential TTS start $(date -Iseconds) ==="
  echo "Libros totales: ${#SLUGS[@]}"
} | tee -a "$QUEUE_LOG"

for slug in "${SLUGS[@]}"; do
  if [[ -f "$LOG_DIR/${slug}.ok" ]]; then
    echo "[skip] $slug already OK" | tee -a "$QUEUE_LOG"
    continue
  fi
  log="$LOG_DIR/${slug}.log"
  fail="$LOG_DIR/${slug}.fail"
  rm -f "$fail"
  echo "[start] $slug $(date -Iseconds)" | tee -a "$QUEUE_LOG" | tee "$log"
  # sin --force: retoma chunks ya sintetizados
  if PYTHONUNBUFFERED=1 python3 -u scripts/md-to-narration.py "$slug" --tts --mp3 >>"$log" 2>&1; then
    touch "$LOG_DIR/${slug}.ok"
    echo "[ok] $slug $(date -Iseconds)" | tee -a "$QUEUE_LOG" | tee -a "$log"
    update_catalog | tee -a "$QUEUE_LOG"
  else
    touch "$fail"
    echo "[fail] $slug $(date -Iseconds)" | tee -a "$QUEUE_LOG" | tee -a "$log"
  fi
done

ok_n=$(ls "$LOG_DIR"/*.ok 2>/dev/null | wc -l)
fail_n=$(ls "$LOG_DIR"/*.fail 2>/dev/null | wc -l)
echo "=== sequential TTS end $(date -Iseconds) OK=$ok_n FAIL=$fail_n ===" | tee -a "$QUEUE_LOG"
