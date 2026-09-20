#!/usr/bin/env python3
"""docs/images.csv 의 url 칼럼을 보고 images/raw/ 에 내려받는다.
   url 이 비어 있으면 건너뛰고 미수집 목록에 남긴다.
   사용법: python scripts/fetch_images.py [--only 12,13,14]"""
import csv, sys, pathlib, urllib.request, mimetypes

ROOT = pathlib.Path(__file__).resolve().parent.parent
CSV  = ROOT / "docs" / "images.csv"
RAW  = ROOT / "images" / "raw"
UA   = {"User-Agent": "Mozilla/5.0 (study-material-collector)"}

def main():
    only = None
    if "--only" in sys.argv:
        only = {s.strip() for s in sys.argv[sys.argv.index("--only") + 1].split(",")}
    RAW.mkdir(parents=True, exist_ok=True)
    todo, done, fail = [], 0, []
    for row in csv.DictReader(CSV.open(encoding="utf-8")):
        no, url = row["no"], row.get("url", "").strip()
        if only and no not in only:
            continue
        if not url:
            todo.append(f'{no} {row["name"]}')
            continue
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=20) as r:
                data = r.read()
                ext = mimetypes.guess_extension(r.headers.get_content_type()) or ".jpg"
            (RAW / f'{no}_{row["slug"]}{ext}').write_bytes(data)
            done += 1
        except Exception as e:
            fail.append(f'{no} {row["name"]} — {e}')
    print(f"내려받음 {done} / 주소 없음 {len(todo)} / 실패 {len(fail)}")
    for l in fail:
        print("  실패:", l)
    if todo:
        (ROOT / "docs" / "missing.txt").write_text("\n".join(todo), encoding="utf-8")
        print("주소가 비어 있는 항목은 docs/missing.txt 에 적었습니다")

if __name__ == "__main__":
    main()
