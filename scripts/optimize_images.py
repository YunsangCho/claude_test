#!/usr/bin/env python3
"""images/raw/ 의 사진을 줄이고 압축해 data/structured/photos.js 를 만든다.
   Pillow 필요:  pip install pillow
   사용법: python scripts/optimize_images.py [--width 600] [--quality 72]"""
import sys, base64, pathlib, io, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW  = ROOT / "images" / "raw"
OUT  = ROOT / "data" / "structured" / "photos.js"

def arg(name, default):
    return type(default)(sys.argv[sys.argv.index(name) + 1]) if name in sys.argv else default

def main():
    try:
        from PIL import Image
    except ImportError:
        print("pip install pillow 가 필요합니다"); sys.exit(1)
    width, quality = arg("--width", 600), arg("--quality", 72)
    rows, total = [], 0
    for f in sorted(RAW.glob("*")):
        if f.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp"):
            continue
        m = re.match(r"(\d+)_(.+)", f.stem)
        if not m:
            print("파일명 형식이 다릅니다(번호_이름):", f.name); continue
        no, slug = m.group(1), m.group(2)
        im = Image.open(f).convert("RGB")
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
        b = buf.getvalue(); total += len(b)
        rows.append(f'["{no}","{slug}","data:image/jpeg;base64,{base64.b64encode(b).decode()}"]')
    OUT.write_text("/* [번호, 이름, data URI] — scripts/optimize_images.py 가 만든 파일 */\n"
                   "const RAW_PHOTO = [\n" + ",\n".join(rows) + "\n];\n", encoding="utf-8")
    print(f"사진 {len(rows)}장 / 합계 {total/1024/1024:.2f}MB → {OUT.relative_to(ROOT)}")
    print("manifest.txt 에 data/structured/photos.js 를 추가한 뒤 build.py 를 실행하세요")

if __name__ == "__main__":
    main()
