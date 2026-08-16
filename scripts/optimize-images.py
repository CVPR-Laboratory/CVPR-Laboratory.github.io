from __future__ import annotations

import csv
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
MEDIA_ROOTS = (ROOT / "images", ROOT / "assets" / "images")
OUTPUT_ROOT = ROOT / "assets" / "images" / "optimized"
REGISTER = ROOT / "docs" / "media-register.csv"
RASTER_EXTENSIONS = {".png", ".jpg", ".jpeg"}


def media_files():
    for media_root in MEDIA_ROOTS:
        for source in media_root.rglob("*"):
            if source.is_file() and OUTPUT_ROOT not in source.parents:
                yield source


rows = []
for source in sorted(media_files()):
    relative = source.relative_to(ROOT).as_posix()
    width = height = ""
    optimized = ""
    if source.suffix.lower() in RASTER_EXTENSIONS:
        with Image.open(source) as image:
            width, height = image.size
            destination = OUTPUT_ROOT / source.relative_to(ROOT).with_suffix(".webp")
            destination.parent.mkdir(parents=True, exist_ok=True)
            image.save(destination, "WEBP", quality=82, method=6)
            optimized = destination.relative_to(ROOT).as_posix()
    rows.append({
        "path": relative,
        "type": source.suffix.lower().lstrip("."),
        "width": width,
        "height": height,
        "bytes": source.stat().st_size,
        "optimized_path": optimized,
        "source_status": "repository asset",
        "authorization_status": "current site delivery"
    })

REGISTER.parent.mkdir(parents=True, exist_ok=True)
with REGISTER.open("w", newline="", encoding="utf-8-sig") as stream:
    writer = csv.DictWriter(stream, fieldnames=rows[0].keys())
    writer.writeheader()
    writer.writerows(rows)

print(f"Registered {len(rows)} media files; generated WebP variants for {sum(bool(row['optimized_path']) for row in rows)} raster images.")
