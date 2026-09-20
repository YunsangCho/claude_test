#!/usr/bin/env python3
"""docs/images.csv 의 검색어로 위키미디어 커먼즈를 뒤져 자유 라이선스 사진을 받는다.

   url 이 이미 채워져 있으면 그 주소를 그대로 쓰고, 비어 있으면 커먼즈에서 찾아 채운다.
   자유 라이선스(CC0, PD, CC BY, CC BY-SA)가 아닌 것은 받지 않는다.
   앱을 공개 배포하므로 저작자와 라이선스를 credit 칸에 적어 화면에 표시한다.

   사용법: python scripts/fetch_images.py [--only 1,2,3] [--limit N] [--dry-run]
"""
import csv, sys, time, json, pathlib, urllib.request, urllib.parse, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
CSV  = ROOT / "docs" / "images.csv"
RAW  = ROOT / "images" / "raw"
API  = "https://commons.wikimedia.org/w/api.php"
UA   = {"User-Agent": "korean-history-study-cards/1.0 (personal study material)"}
WIDTH = 800          # 커먼즈가 권장하는 표준 썸네일 폭.  비표준 폭은 썸네일 생성을 유발해 429 가 난다
PAUSE = 6            # 요청 사이 대기.  공유 IP 라서 짧게 두면 바로 레이트 리밋에 걸린다

# 자유 라이선스만 받는다.  여기에 걸리지 않으면 버린다.
# KOGL Type 1 은 공공누리 제1유형이다.  출처만 밝히면 변형과 상업적 이용까지 된다.
# 제2유형은 상업적 이용 금지, 제3유형은 변경 금지라서 사진을 줄여 쓰는 이 작업에는 맞지 않는다.
OK_LICENSE = ("cc0", "public domain", "pd-", "cc by", "cc-by", "kogl type 1", "공공누리 제1유형")
# 진품이 아닌 사진을 걸러 낸다.  히스토리 문서에 모형과 기념품이 섞인다는 경고가 있다.
BAD_WORDS = ("replica", "réplica", "replika", "model of", "miniature", "lego",
             "stamp", "postage", "banknote of", "souvenir", "toy", "cosplay",
             "모형", "복제", "재현", "기념품", "우표")

def api(**p):
    p.setdefault("format", "json")
    url = API + "?" + urllib.parse.urlencode(p)
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers=UA)
            return json.load(urllib.request.urlopen(req, timeout=30))
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                time.sleep(min(60, 8 * (attempt + 1))); continue
            raise
        except Exception:
            if attempt == 5: raise
            time.sleep(5)
    raise RuntimeError("커먼즈 응답 없음")

def plain(html):
    """extmetadata 의 값은 HTML 이 섞여 있다.  태그를 걷어 내고 한 줄로 만든다."""
    import re, html as h
    s = re.sub(r"<[^>]+>", " ", html or "")
    return " ".join(h.unescape(s).split())[:120]

def free(lic):
    l = (lic or "").lower()
    return any(k in l for k in OK_LICENSE)

def search(terms):
    """검색어를 차례로 넣어 쓸 만한 후보 제목을 모은다."""
    seen, out = set(), []
    for t in terms:
        if not t: continue
        d = api(action="query", list="search", srnamespace=6, srlimit=8, srsearch=t)
        for hit in d.get("query", {}).get("search", []):
            title = hit["title"]
            low = title.lower()
            if title in seen or any(b in low for b in BAD_WORDS): continue
            seen.add(title); out.append(title)
        time.sleep(PAUSE)
        if len(out) >= 8: break
    return out

def pick(titles):
    """후보 중에서 자유 라이선스이고 가장 큰 사진을 고른다."""
    if not titles: return None
    d = api(action="query", prop="imageinfo", iiprop="url|extmetadata|size|mime",
            iiurlwidth=WIDTH, titles="|".join(titles[:8]))
    best, rejected = None, []
    for page in d.get("query", {}).get("pages", {}).values():
        info = (page.get("imageinfo") or [None])[0]
        if not info: continue
        if not (info.get("mime") or "").startswith("image/"): continue
        meta = info.get("extmetadata", {})
        lic = plain(meta.get("LicenseShortName", {}).get("value"))
        if not free(lic):
            # 오래된 업로드는 LicenseShortName 이 비어 있고 기계 판독용 License 만 있는 경우가 있다.
            alt = plain(meta.get("License", {}).get("value"))
            if free(alt): lic = alt
            else:
                rejected.append(f'{page["title"].replace("File:","")[:40]} [{lic or alt or "라이선스 표기 없음"}]')
                continue
        cand = {
            "title": page["title"].replace("File:", ""),
            "url": info.get("thumburl") or info["url"],
            "license": lic,
            "credit": plain(meta.get("Artist", {}).get("value")) or "커먼즈 기여자",
            "page": info["descriptionurl"],
            "px": info.get("width", 0) * info.get("height", 0),
        }
        if best is None or cand["px"] > best["px"]: best = cand
    if best is None and rejected:
        print("     후보는 있었으나 자유 라이선스가 아님:", " / ".join(rejected[:3]))
    return best

def main():
    only = None
    if "--only" in sys.argv:
        only = {s.strip().zfill(3) for s in sys.argv[sys.argv.index("--only") + 1].split(",")}
    limit = int(sys.argv[sys.argv.index("--limit") + 1]) if "--limit" in sys.argv else 10**9
    dry = "--dry-run" in sys.argv

    RAW.mkdir(parents=True, exist_ok=True)
    rows = list(csv.DictReader(CSV.open(encoding="utf-8")))
    cols = list(rows[0].keys())

    done, skipped, miss, fail = 0, 0, [], []
    for row in rows:
        if only and row["no"] not in only: continue
        if done >= limit: break
        dest = RAW / f'{row["no"]}_{row["slug"]}.jpg'
        if dest.exists() and row["url"]:
            skipped += 1; continue

        if not row["url"]:
            try:
                hit = pick(search([row["search"], row.get("search_alt", "")]))
            except Exception as e:
                fail.append(f'{row["no"]} {row["name"]} — 검색 실패 {e}'); continue
            if not hit:
                miss.append(f'{row["no"]} {row["name"]}'); continue
            row["url"], row["license"] = hit["url"], hit["license"]
            row["credit"], row["page"] = hit["credit"], hit["page"]
            print(f'  찾음 {row["no"]} {row["name"]} <- {hit["title"]} [{hit["license"]}]')

        if dry: continue
        data = None
        for attempt in range(5):
            try:
                req = urllib.request.Request(row["url"], headers=UA)
                data = urllib.request.urlopen(req, timeout=60).read()
                break
            except urllib.error.HTTPError as e:
                if e.code in (429, 503):
                    time.sleep(min(60, 8 * (attempt + 1))); continue
                data = e; break
            except Exception as e:
                data = e
                if attempt == 4: break
                time.sleep(5)
        if not isinstance(data, (bytes, bytearray)):
            fail.append(f'{row["no"]} {row["name"]} — 내려받기 실패 {data}')
            row["url"] = ""
        elif not data.startswith(b"\xff\xd8") and not data.startswith(b"\x89PNG"):
            fail.append(f'{row["no"]} {row["name"]} — 이미지가 아님')
            row["url"] = ""
        else:
            dest.write_bytes(data); done += 1
        time.sleep(PAUSE)

    if not dry:
        with CSV.open("w", encoding="utf-8", newline="") as f:
            w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)

    print(f"\n내려받음 {done} / 이미 있음 {skipped} / 못 찾음 {len(miss)} / 실패 {len(fail)}")
    for l in fail: print("  실패:", l)
    if miss:
        (ROOT / "docs" / "missing.txt").write_text("\n".join(miss), encoding="utf-8")
        print("못 찾은 항목은 docs/missing.txt 에 적었습니다")
        for l in miss: print("  없음:", l)

if __name__ == "__main__":
    main()
