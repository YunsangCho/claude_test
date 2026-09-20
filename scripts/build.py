#!/usr/bin/env python3
"""데이터 파일과 앱 소스를 합쳐 단일 HTML을 만든다.  사용법: python scripts/build.py"""
import os, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT  = ROOT / "dist" / "한국사-카드덱.html"

def main():
    order = [l.strip() for l in (ROOT/"scripts"/"manifest.txt").read_text(encoding="utf-8").splitlines() if l.strip()]
    missing = [p for p in order if not (ROOT/p).exists()]
    if missing:
        print("없는 파일:", *missing, sep="\n  "); sys.exit(1)
    bundle = "\n".join((ROOT/p).read_text(encoding="utf-8") for p in order)
    html = (ROOT/"src"/"index.template.html").read_text(encoding="utf-8")
    if "<!--BUNDLE-->" not in html:
        print("템플릿에 <!--BUNDLE--> 자리가 없습니다"); sys.exit(1)
    html = html.replace("<!--BUNDLE-->", "<script>\n" + bundle + "\n</script>")
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(html, encoding="utf-8")
    print(f"완료: {OUT.relative_to(ROOT)}  ({len(html)/1024:.0f}KB, 소스 {len(order)}개)")

if __name__ == "__main__":
    main()
