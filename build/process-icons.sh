#!/usr/bin/env bash
# Prepares SVG icons for use in the icon store by flattening them into a single
# clean path via Inkscape's CLI. Equivalent to doing the following manually in
# Inkscape:
#
#   1. Stroke to Path  — converts any strokes into filled path shapes so nothing
#                        is lost when stroke properties are stripped
#   2. Break Apart     — splits compound/grouped paths into individual objects
#   3. Exclusion       — boolean XOR across all paths, producing proper cutouts
#                        without relying on fill-rule="evenodd"
#   4. Combine         — merges everything back into one compound path
#
# The result is saved as a plain SVG (no Inkscape metadata), ready to be
# processed by `npm run assets:build`.
set -euo pipefail

INKSCAPE="/Applications/Inkscape.app/Contents/MacOS/inkscape"

if [[ $# -eq 0 ]]; then
  echo "Usage: $0 <file.svg|directory|glob>"
  echo "  $0 file.svg"
  echo "  $0 path/to/svgs/"
  echo "  $0 path/to/folder/*.svg"
  exit 1
fi

if [[ ! -x "$INKSCAPE" ]]; then
  echo "Error: Inkscape not found at $INKSCAPE"
  exit 1
fi

process() {
  local file="$1"
  echo "Processing: $file"
  "$INKSCAPE" "$file" \
    --actions="select-all;object-stroke-to-path;path-break-apart;select-all;path-exclusion;path-combine;export-filename:$file;export-plain-svg;export-do"
  echo "Done: $file"
}

for arg in "$@"; do
  if [[ -d "$arg" ]]; then
    while IFS= read -r -d '' file; do
      process "$file"
    done < <(find "$arg" -name "*.svg" -print0)
  elif [[ -f "$arg" ]]; then
    process "$arg"
  else
    echo "Warning: skipping '$arg' (not a file or directory)"
  fi
done
