#!/usr/bin/env python3
"""Fail CI if built CSS forces left-align on .section p in mobile breakpoint."""
from __future__ import annotations

import glob
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
css_files = sorted((ROOT / "dist" / "assets").glob("index-*.css"))
if not css_files:
    print("No dist/assets/index-*.css found", file=sys.stderr)
    raise SystemExit(1)

css = css_files[-1].read_text(encoding="utf-8").replace(" ", "")
bad = re.search(
    r"@media\(max-width:600px\)\{[^}]*\.sectionp[^}]*text-align:left",
    css,
)
if bad:
    print("CSS móvil fuerza text-align:left en .section p", file=sys.stderr)
    raise SystemExit(1)

print(f"OK  {css_files[-1].name} (justify en móvil)")
