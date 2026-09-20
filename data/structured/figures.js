/* ── SVG 생성 헬퍼 ── */
function _pagoda(rows,baseW,finial){
  let y=144,s='';
  s+=`<rect x="${(100-baseW)/2}" y="144" width="${baseW}" height="8" fill="var(--ink-soft)"/>`;
  rows.forEach(r=>{
    const rw=r[0],bw=r[1],bh=r[2];
    y-=bh;
    s+=`<rect x="${(100-bw)/2}" y="${y}" width="${bw}" height="${bh}" fill="var(--ink)"/>`;
    y-=5;
    const l=(100-rw)/2, R=100-l;
    s+=`<polygon points="${l},${y+5} ${l+7},${y} ${R-7},${y} ${R},${y+5}" fill="var(--accent)"/>`;
  });
  if(finial)s+=`<rect x="48.5" y="${y-12}" width="3" height="12" fill="var(--ink-soft)"/><circle cx="50" cy="${y-14}" r="3" fill="var(--accent)"/>`;
  return `<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" role="img">${s}</svg>`;
}
const _KP='M53,40 L41,46 L35,58 L39,68 L31,76 L35,88 L29,98 L35,110 L31,122 L37,134 L35,146 L43,158 L53,167 L63,168 L71,158 L75,144 L79,130 L81,114 L79,98 L83,84 L87,70 L85,56 L77,47 L65,41 Z';
const _MJ='M12,12 L7,28 L14,40 L32,46 L53,40 L77,47 L98,41 L107,27 L100,12 L68,6 L34,6 Z';
function _map(area,dots,note){
  let s=`<path d="${_MJ}" fill="var(--surface2)" stroke="var(--line)" stroke-width="1"/>`;
  s+=`<path d="${_KP}" fill="var(--surface2)" stroke="var(--line)" stroke-width="1"/>`;
  if(area)s+=area;
  (dots||[]).forEach(d=>{
    s+=`<circle cx="${d[0]}" cy="${d[1]}" r="2.6" fill="var(--no)"/>`;
    s+=`<text x="${d[0]+4.5}" y="${d[1]+2.6}" font-size="6.2" fill="var(--ink)">${d[2]}</text>`;
  });
  if(note)s+=`<text x="6" y="176" font-size="6.2" fill="var(--ink-mute)">${note}</text>`;
  return `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" role="img">${s}</svg>`;
}
function _box(x,y,w,h,t,fill){
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill||'var(--surface2)'}" stroke="var(--line)"/>`
   +`<text x="${x+w/2}" y="${y+h/2+3}" font-size="7.5" text-anchor="middle" fill="var(--ink)">${t}</text>`;
}
const _ln=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--line)" stroke-width="1"/>`;

/* [강, 이름, 묶음, 질문, SVG, 해설] */
const RAW_IMG = [
/* ── 석탑 ── */

/* ── 고분 구조 ── */
[9,"돌무지무덤","고분","이 무덤 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
 <g fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2">
 <rect x="20" y="84" width="120" height="14"/><rect x="30" y="70" width="100" height="14"/>
 <rect x="40" y="56" width="80" height="14"/><rect x="50" y="42" width="60" height="14"/><rect x="62" y="30" width="36" height="12"/></g>
 <rect x="70" y="58" width="20" height="12" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <text x="80" y="107" font-size="8" text-anchor="middle" fill="var(--ink-mute)">계단식으로 돌을 쌓아 올린 구조</text></svg>`,
 "돌을 계단처럼 쌓아 올린 고구려 초기 무덤이다. 장군총이 대표적이며 백제 한성기 석촌동 고분도 같은 양식이다"],
[9,"굴식 돌방무덤","고분","이 무덤 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
 <path d="M12,92 Q80,18 148,92 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <rect x="62" y="56" width="40" height="30" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <rect x="102" y="68" width="42" height="14" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <text x="82" y="74" font-size="8" text-anchor="middle" fill="var(--accent)">널방</text>
 <text x="123" y="63" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">널길</text>
 <text x="80" y="107" font-size="8" text-anchor="middle" fill="var(--ink-mute)">널길로 방에 드나들 수 있는 구조</text></svg>`,
 "널길이 있어 방에 드나들 수 있고 벽과 천장에 벽화를 그릴 수 있다. 도굴이 쉬워 부장품은 거의 남지 않았다"],
[9,"돌무지덧널무덤","고분","이 무덤 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
 <path d="M12,92 Q80,20 148,92 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <path d="M40,90 Q80,44 120,90 Z" fill="none" stroke="var(--ink-mute)" stroke-dasharray="3 2"/>
 <g fill="var(--ink-soft)">${[[58,72],[66,66],[74,62],[82,62],[90,66],[98,72],[62,80],[72,74],[88,74],[98,80]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.4"/>`).join('')}</g>
 <rect x="64" y="80" width="34" height="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <text x="81" y="89" font-size="7.5" text-anchor="middle" fill="var(--accent)">나무덧널</text>
 <text x="80" y="107" font-size="8" text-anchor="middle" fill="var(--ink-mute)">덧널 위에 돌을 쌓고 흙을 덮은 구조</text></svg>`,
 "나무덧널 위에 돌을 쌓고 흙을 덮어 도굴이 매우 어렵다. 구조상 벽화를 그릴 수 없어 대신 금관 같은 부장품이 풍부하게 남았다"],
[9,"벽돌무덤","고분","이 무덤 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
 <path d="M12,92 Q80,22 148,92 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <path d="M58,88 L58,66 Q80,46 102,66 L102,88 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <g stroke="var(--accent)" stroke-width="0.7" opacity=".7">${[70,76,82].map(y=>`<line x1="58" y1="${y}" x2="102" y2="${y}"/>`).join('')}<line x1="80" y1="52" x2="80" y2="88"/></g>
 <rect x="102" y="74" width="40" height="14" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <text x="80" y="107" font-size="8" text-anchor="middle" fill="var(--ink-mute)">벽돌을 쌓아 아치형 천장을 만든 구조</text></svg>`,
 "벽돌을 쌓아 아치형 천장을 만든 중국 남조계 양식이다. 백제 무령왕릉과 발해 정효공주 묘가 이 양식이다"],

/* ── 지도 ── */
[5,"백제의 전성기","전성기 지도","지도에 나타난 시기로 옳은 것은?",
 _map(`<path d="M35,88 L29,98 L35,110 L31,122 L37,134 L35,146 L43,158 L53,167 L63,168 L71,158 L75,144 L79,130 L74,112 L62,96 L48,88 Z" fill="var(--accent)" opacity=".45"/>`,
  [[55,100,"한강"],[50,140,"마한 병합"]],"4세기 서남해안 일대 장악"),
 "4세기 근초고왕 때의 영역이다. 마한을 정복하고 한강 유역을 차지했으며 고구려 평양성을 공격했다"],
[4,"고구려의 전성기","전성기 지도","지도에 나타난 시기로 옳은 것은?",
 _map(`<path d="M12,12 L7,28 L14,40 L32,46 L53,40 L77,47 L98,41 L107,27 L100,12 L68,6 L34,6 Z" fill="var(--accent)" opacity=".45"/>
 <path d="M35,58 L39,68 L31,76 L35,88 L48,96 L66,100 L79,98 L83,84 L87,70 L85,56 L77,47 L65,41 L53,40 L41,46 Z" fill="var(--accent)" opacity=".45"/>`,
  [[48,44,"평양 천도"],[58,96,"한강 이남 진출"]],"5세기 만주와 한반도 중부 장악"),
 "5세기 장수왕 때의 영역이다. 평양으로 천도하고 한성을 함락해 한강 유역 전체를 차지했다"],
[5,"신라의 전성기","전성기 지도","지도에 나타난 시기로 옳은 것은?",
 _map(`<path d="M35,110 L31,122 L37,134 L35,146 L43,158 L53,167 L63,168 L71,158 L75,144 L79,130 L81,114 L79,98 L83,84 L80,70 L74,62 L70,76 L66,94 L52,104 Z" fill="var(--accent)" opacity=".45"/>`,
  [[60,104,"한강 유역"],[78,66,"함흥 진출"],[62,140,"대가야 정복"]],"6세기 한강 유역과 낙동강 일대 장악"),
 "6세기 진흥왕 때의 영역이다. 한강 유역을 차지하고 대가야를 정복했으며 함흥평야까지 진출해 순수비를 세웠다"],
[16,"4군 6진 개척","영토 지도","지도에 표시된 사업으로 옳은 것은?",
 _map(`<path d="M32,46 L53,40 L77,47 L74,54 L53,48 L36,54 Z" fill="var(--accent)" opacity=".5"/>`,
  [[38,48,"4군"],[72,46,"6진"]],"압록강과 두만강을 국경으로 확정"),
 "세종 때 최윤덕이 압록강 방면에 4군을, 김종서가 두만강 방면에 6진을 개척해 오늘날의 국경선이 확정되었다"],
[12,"강동 6주 획득","영토 지도","지도에 표시된 지역으로 옳은 것은?",
 _map(`<path d="M32,46 L50,41 L54,50 L36,56 Z" fill="var(--accent)" opacity=".5"/>`,
  [[34,52,"강동 6주"]],"압록강 동쪽 여섯 고을"),
 "거란의 1차 침입 때 서희가 소손녕과 담판해 얻은 지역이다. 고구려 계승을 근거로 내세웠다"],
[12,"대몽 항쟁","전투 지도","지도에 표시된 항쟁으로 옳은 것은?",
 _map(null,[[44,104,"강화"],[56,112,"처인성"],[60,126,"충주"],[46,150,"진도"],[44,168,"제주"]],"장기 항전과 삼별초의 이동"),
 "강화도로 천도해 장기 항전을 폈고 처인성과 충주성에서 김윤후가 활약했다. 삼별초는 강화에서 진도, 제주로 옮겨 가며 싸웠다"],
[18,"임진왜란의 전개","전투 지도","지도에 표시된 전쟁으로 옳은 것은?",
 _map(null,[[62,130,"충주 탄금대"],[68,152,"부산진"],[56,150,"한산도"],[58,142,"진주"],[54,118,"행주"],[42,146,"명량"]],"1592년 부산 상륙 이후의 주요 전투"),
 "부산진과 동래성이 무너지고 충주 탄금대에서 패한 뒤 한산도와 진주, 행주에서 반격했다. 정유재란 때 명량에서 다시 승리했다"],

/* ── 조직도 ── */
[6,"발해의 중앙 정치 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
 ${_box(60,4,60,16,"왕","var(--accent-soft)")}
 ${_ln(90,20,90,28)}${_ln(30,28,150,28)}${_ln(30,28,30,36)}${_ln(90,28,90,36)}${_ln(150,28,150,36)}
 ${_box(8,36,44,16,"선조성")}${_box(68,36,44,16,"정당성","var(--accent-soft)")}${_box(128,36,44,16,"중대성")}
 ${_ln(90,52,90,60)}${_ln(40,60,140,60)}${_ln(40,60,40,68)}${_ln(140,60,140,68)}
 ${_box(16,68,48,14,"좌사정")}${_box(116,68,48,14,"우사정")}
 ${_box(6,88,68,14,"충 · 인 · 의")}${_box(106,88,68,14,"지 · 예 · 신")}
 <text x="90" y="116" font-size="8" text-anchor="middle" fill="var(--ink-mute)">6부에 유교식 이름을 붙였다</text></svg>`,
 "당의 3성 6부를 받아들이되 정당성의 대내상이 국정을 총괄하고 6부에 충인의지예신이라는 유교식 이름을 붙였다"],
[10,"고려의 중앙 정치 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
 ${_box(62,4,56,16,"왕","var(--accent-soft)")}
 ${_ln(90,20,90,28)}${_ln(24,28,156,28)}${_ln(24,28,24,36)}${_ln(90,28,90,36)}${_ln(156,28,156,36)}
 ${_box(4,36,50,16,"중서문하성","var(--accent-soft)")}${_box(64,36,52,16,"중추원")}${_box(132,36,44,16,"삼사")}
 ${_ln(29,52,29,62)}${_box(4,62,50,14,"상서성 6부")}
 ${_box(60,62,56,14,"어사대")}
 ${_box(30,86,120,16,"도병마사 · 식목도감","var(--accent-soft)")}
 <text x="90" y="116" font-size="8" text-anchor="middle" fill="var(--ink-mute)">재신과 추밀이 모이는 독자적 회의 기구</text></svg>`,
 "2성 6부를 바탕으로 하되 도병마사와 식목도감이라는 독자적 회의 기구를 두었다. 삼사는 회계를 맡았다"],
[17,"조선의 중앙 정치 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
 ${_box(62,4,56,16,"왕","var(--accent-soft)")}
 ${_ln(90,20,90,26)}${_ln(20,26,160,26)}${_ln(20,26,20,34)}${_ln(90,26,90,34)}${_ln(160,26,160,34)}
 ${_box(2,34,40,14,"승정원")}${_box(66,34,48,16,"의정부","var(--accent-soft)")}${_box(138,34,40,14,"의금부")}
 ${_ln(90,50,90,58)}${_box(40,58,100,14,"이 호 예 병 형 공 6조")}
 ${_box(20,82,140,16,"사헌부 · 사간원 · 홍문관","var(--accent-soft)")}
 <text x="90" y="114" font-size="8" text-anchor="middle" fill="var(--ink-mute)">3사가 언론을 맡아 권력을 견제했다</text></svg>`,
 "의정부와 6조가 국정을 맡고 3사가 언론으로 견제했다. 승정원과 의금부는 왕의 직속 기구다"],
[7,"골품제","조직도","이 표가 나타내는 제도로 옳은 것은?",
 `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
 <g font-size="8" fill="var(--ink)">
 ${_box(4,6,40,14,"관등")}${_box(48,6,30,14,"진골","var(--accent-soft)")}${_box(82,6,30,14,"6두품")}${_box(116,6,30,14,"5두품")}${_box(150,6,26,14,"4두품")}
 ${_box(4,24,40,14,"이벌찬")}<rect x="48" y="24" width="30" height="14" fill="var(--accent)" opacity=".6"/>
 ${_box(4,42,40,14,"아찬")}<rect x="48" y="42" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="82" y="42" width="30" height="14" fill="var(--accent)" opacity=".6"/>
 ${_box(4,60,40,14,"대나마")}<rect x="48" y="60" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="82" y="60" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="116" y="60" width="30" height="14" fill="var(--accent)" opacity=".6"/>
 ${_box(4,78,40,14,"대사")}<rect x="48" y="78" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="82" y="78" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="116" y="78" width="30" height="14" fill="var(--accent)" opacity=".6"/><rect x="150" y="78" width="26" height="14" fill="var(--accent)" opacity=".6"/>
 </g><text x="90" y="112" font-size="8" text-anchor="middle" fill="var(--ink-mute)">신분에 따라 오를 수 있는 관등이 막혀 있었다</text></svg>`,
 "혈통에 따라 오를 수 있는 관등의 상한이 정해졌다. 6두품은 아찬까지만 올라 중앙 관청의 장관이 될 수 없었다"],
];
