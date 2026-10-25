from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
destination = root / "assets/images/hero"
destination.mkdir(parents=True, exist_ok=True)
for index, relative in enumerate(["images/index/index_news_recommend_01.png", "images/index/index_quick_entrance_03.png"]):
    with Image.open(root / relative) as source:
        for width in [960, 1920]:
            image = ImageOps.contain(source.convert("RGB"), (width, width * 2))
            target = destination / f"discussion-{index + 1}-{width}.webp"
            image.save(target, "WEBP", quality=82, method=6)
            print(f"{target.name}: {target.stat().st_size} bytes")
