#!/usr/bin/env bash
# Descarga Sapiens real (~12 MB) y extrae texto para regenerar resumen.
# Uso: bash scripts/fetch-and-regenerate-sapiens.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FUENTES="$ROOT/fuentes"
TARGET="$FUENTES/Sapiens - Yuval Noah Harari.epub"
BACKUP="$FUENTES/_corrupt-Sapiens-summary-fake.epub"
MD5="7473ce3bcb568601f46acff3f07d962c"
MIN_BYTES=1000000

cd "$ROOT"

is_valid_epub() {
  local f="$1"
  [[ -f "$f" ]] || return 1
  local sz
  sz=$(stat -c%s "$f")
  [[ "$sz" -ge "$MIN_BYTES" ]] || return 1
  unzip -tq "$f" >/dev/null 2>&1
}

try_download() {
  local url="$1"
  local extra="${2:-}"
  echo "→ $url"
  # shellcheck disable=SC2086
  curl -fsSL --retry 1 --max-time 60 -A "Mozilla/5.0" $extra -o "$TARGET.part" "$url" || return 1
  if is_valid_epub "$TARGET.part"; then
    mv "$TARGET.part" "$TARGET"
    return 0
  fi
  rm -f "$TARGET.part"
  return 1
}

echo "Buscando Sapiens (Harari, Signal 2014, md5=$MD5)..."

if [[ -f "$TARGET" ]] && is_valid_epub "$TARGET"; then
  echo "✓ Ya existe EPUB válido: $TARGET"
else
  for url in \
    "https://annas-archive.org/slow_download/${MD5}/0/0" \
    "https://annas-archive.li/slow_download/${MD5}/0/0" \
    "https://libgen.li/get.php?md5=${MD5}" \
    "https://libgen.is/get.php?md5=${MD5}"; do
    extra=""
    [[ "$url" == *annas-archive.li* ]] && extra="-k"
    if try_download "$url" "$extra"; then
      echo "✓ Descargado: $TARGET ($(stat -c%s "$TARGET") bytes)"
      break
    fi
  done
fi

if ! is_valid_epub "$TARGET"; then
  echo "ERROR: no se pudo descargar un EPUB válido (>1 MB)." >&2
  echo "Colocá manualmente el archivo en:" >&2
  echo "  $TARGET" >&2
  echo "MD5 esperado: $MD5" >&2
  exit 1
fi

echo "Extrayendo texto..."
python3 scripts/extract-epub.py sapiens -o .extracted/sapiens.txt

TITLE=$(python3 - <<'PY'
import zipfile, xml.etree.ElementTree as ET, re
from pathlib import Path
p = Path("fuentes/Sapiens - Yuval Noah Harari.epub")
with zipfile.ZipFile(p) as z:
    opf = next(n for n in z.namelist() if n.endswith(".opf"))
    root = ET.fromstring(z.read(opf))
    ns = {"dc": "http://purl.org/dc/elements/1.1/"}
    title = root.find(".//dc:title", ns)
    print(re.sub(r"\s+", " ", (title.text or "").strip()) if title is not None else "?")
PY
)
echo "Título detectado: $TITLE"
if echo "$TITLE" | rg -qi "summary|resumen|editorial"; then
  echo "ERROR: el EPUB sigue siendo un resumen falso, no el libro de Harari." >&2
  exit 1
fi

echo ""
echo "Listo. Pedile al agente que regenere Sapiens desde .extracted/sapiens.txt"
