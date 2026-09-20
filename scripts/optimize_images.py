#!/usr/bin/env python3
"""images/raw/ 의 사진을 줄이고 docs/images.csv 의 정보를 붙여 data/structured/photos.js 를 만든다.

   Pillow 필요:  pip install pillow
   사용법: python scripts/optimize_images.py [--width 600] [--quality 72] [--budget 3.0]

   budget 은 MB 단위다.  base64 로 담기면 원본보다 약 1.33배가 되므로
   그 값까지 헤아려 넘치면 폭과 품질을 스스로 낮춘다.
"""
import sys, csv, base64, pathlib, io, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW  = ROOT / "images" / "raw"
CSV  = ROOT / "docs" / "images.csv"
OUT  = ROOT / "data" / "structured" / "photos.js"

# 묶음마다 묻는 말을 달리한다.  "이 그림으로 옳은 것은" 과
# "이 사진이 보여 주는 것으로 옳은 것은" 은 성격이 다르다.
ASK = {
    "선사 유물": "이 유물로 옳은 것은?",
    "비석": "이 비석으로 옳은 것은?",
    "고대 공예": "이 문화유산으로 옳은 것은?",
    "고분": "이 고분 또는 벽화로 옳은 것은?",
    "불상": "이 불상으로 옳은 것은?",
    "석탑": "이 탑으로 옳은 것은?",
    "건축": "이 건축물로 옳은 것은?",
    "도자": "이 도자기로 옳은 것은?",
    "회화": "이 그림으로 옳은 것은?",
    "기록물": "이 기록물로 옳은 것은?",
    "과학 기구": "이 과학 기구로 옳은 것은?",
    "화폐와 생활 유물": "이 유물로 옳은 것은?",
}
# 묶음은 시대별로 쪼개져 있다.  끝말로 묻는 말을 고른다.
ASK_SUFFIX = {
    "건축": "이 건축물로 옳은 것은?",
    "사진": "이 사진이 보여 주는 것으로 옳은 것은?",
}

def ask_for(group):
    if group in ASK: return ASK[group]
    for suf, q in ASK_SUFFIX.items():
        if group.endswith(suf): return q
    return "이 문화유산으로 옳은 것은?"

def arg(name, default):
    return type(default)(sys.argv[sys.argv.index(name) + 1]) if name in sys.argv else default

def js(s):
    return str(s).replace("\\", "\\\\").replace('"', '\\"')

def encode(path, width, quality):
    from PIL import Image
    im = Image.open(path).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    return buf.getvalue()

def main():
    try:
        from PIL import Image  # noqa: F401
    except ImportError:
        print("pip install pillow 가 필요합니다"); sys.exit(1)

    width, quality = arg("--width", 600), arg("--quality", 72)
    budget = arg("--budget", 3.0) * 1024 * 1024

    meta = {r["no"]: r for r in csv.DictReader(CSV.open(encoding="utf-8"))}
    files = []
    for f in sorted(RAW.glob("*")):
        if f.suffix.lower() not in (".jpg", ".jpeg", ".png", ".webp"): continue
        m = re.match(r"(\d+)_(.+)", f.stem)
        if not m:
            print("파일명 형식이 다릅니다(번호_이름):", f.name); continue
        if m.group(1) not in meta:
            print("목록에 없는 사진입니다:", f.name); continue
        files.append((m.group(1), f))

    # base64 는 원본의 약 4/3 이다.  예산을 넘으면 폭과 품질을 한 단계씩 낮춘다.
    steps = [(width, quality), (560, 70), (520, 68), (480, 66), (440, 64), (400, 62)]
    for w, q in steps:
        blobs = {no: encode(f, w, q) for no, f in files}
        b64 = sum(len(b) * 4 // 3 for b in blobs.values())
        print(f"  폭 {w}px 품질 {q} → base64 합계 {b64/1024/1024:.2f}MB")
        if b64 <= budget: break
    else:
        print("예산 안에 맞추지 못했습니다. --budget 을 올리거나 사진을 줄이세요")

    rows, skipped = [], []
    for no, _ in files:
        r = meta[no]
        if not r["license"]:
            skipped.append(f'{no} {r["name"]}'); continue
        credit = " · ".join(x for x in (r["credit"], r["license"]) if x)
        ask = ask_for(r["group"])
        uri = "data:image/jpeg;base64," + base64.b64encode(blobs[no]).decode()
        rows.append(f'[{int(r["chapter"])},"{js(r["name"])}","{js(r["group"])}","{js(ask)}",\n'
                    f' "{uri}",\n'
                    f' "{js(credit)}","{js(r["match"])}"]')

    OUT.write_text(
        "/* [강, 이름, 묶음, 질문, data URI, 출처, 이어 줄 항목]\n"
        "   scripts/optimize_images.py 가 만든 파일이다.  직접 고치지 않는다. */\n"
        "const RAW_PHOTO = [\n" + ",\n".join(rows) + "\n];\n", encoding="utf-8")

    size = OUT.stat().st_size
    print(f"\n사진 {len(rows)}장 → {OUT.relative_to(ROOT)}  ({size/1024/1024:.2f}MB)")
    if skipped:
        print(f"라이선스 정보가 없어 건너뛴 사진 {len(skipped)}장:", ", ".join(skipped[:5]))

if __name__ == "__main__":
    main()
