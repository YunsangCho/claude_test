/* [강, 이름, 묶음, 질문, SVG, 해설]  — figures.js 의 _map, _box, _ln 헬퍼를 쓴다 */
const RAW_IMG_B = [
/* ── 조직도 ── */
[6,"통일 신라의 중앙 정치 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(62,4,56,16,"왕","var(--accent-soft)")}
 ${_ln(90,20,90,28)}${_ln(24,28,156,28)}${_ln(24,28,24,36)}${_ln(90,28,90,36)}${_ln(156,28,156,36)}
 ${_box(4,36,40,14,"사정부")}${_box(66,36,48,16,"집사부","var(--accent-soft)")}${_box(136,36,40,14,"국학")}
 ${_ln(90,52,90,60)}${_box(28,60,124,14,"병부 · 위화부 · 창부 등 13부")}
 ${_box(30,84,120,16,"상대등과 화백 회의","var(--surface2)")}
 <text x="90" y="114" font-size="8" text-anchor="middle" fill="var(--ink-mute)">집사부 시중의 권한이 커지고 상대등은 약해졌다</text></svg>`,
 "집사부와 그 장관인 시중이 국정을 총괄했다. 사정부는 감찰, 국학은 유학 교육을 맡았다"],
[10,"고려의 군사 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(56,4,68,16,"중앙군","var(--accent-soft)")}
 ${_ln(90,20,90,26)}${_ln(40,26,140,26)}${_ln(40,26,40,34)}${_ln(140,26,140,34)}
 ${_box(12,34,56,14,"2군 (응양군·용호군)")}${_box(110,34,60,14,"6위 (좌우위 등)")}
 ${_box(56,58,68,16,"지방군","var(--accent-soft)")}
 ${_ln(90,74,90,80)}${_ln(40,80,140,80)}${_ln(40,80,40,88)}${_ln(140,80,140,88)}
 ${_box(12,88,56,14,"5도의 주현군")}${_box(110,88,60,14,"양계의 주진군")}
 <text x="90" y="116" font-size="8" text-anchor="middle" fill="var(--ink-mute)">무신들은 중방에 모여 군사를 의논했다</text></svg>`,
 "중앙군은 2군 6위, 지방군은 주현군과 주진군으로 나뉜다. 양계의 주진군은 국경 방어를 맡은 상비군이다"],
[17,"조선의 과거 제도","조직도","이 표가 나타내는 제도로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,6,52,14,"문과","var(--accent-soft)")}${_box(64,6,52,14,"무과")}${_box(124,6,52,14,"잡과")}
 ${_box(4,26,52,14,"소과 → 생원·진사")}${_box(64,26,52,14,"단일 시험")}${_box(124,26,52,14,"단일 시험")}
 ${_ln(30,40,30,48)}
 ${_box(4,48,52,14,"대과 초시")}${_box(64,48,52,14,"무예와 병서")}${_box(124,48,52,14,"역·의·음양·율")}
 ${_ln(30,62,30,70)}
 ${_box(4,70,52,14,"복시 33명")}${_box(64,70,52,14,"28명")}${_box(124,70,52,14,"해당 관청 주관")}
 ${_ln(30,84,30,90)}${_box(4,90,52,14,"전시 등수 결정")}
 <text x="90" y="116" font-size="8" text-anchor="middle" fill="var(--ink-mute)">문과만 소과와 대과로 나뉘었다</text></svg>`,
 "문과는 소과를 거쳐 대과로 나아갔고 무과와 잡과는 단일 시험이었다. 무과가 정식으로 시행된 것이 고려와 다른 점이다"],
[17,"조선의 군사 조직","조직도","이 조직도에 해당하는 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(56,4,68,16,"5위 (중앙군)","var(--accent-soft)")}
 ${_ln(90,20,90,28)}${_box(30,28,120,14,"양인 개병 · 정군과 보인")}
 ${_box(56,50,68,16,"영진군 (지방군)","var(--accent-soft)")}
 ${_ln(90,66,90,72)}${_ln(40,72,140,72)}${_ln(40,72,40,80)}${_ln(140,72,140,80)}
 ${_box(10,80,60,14,"진관 체제")}${_box(110,80,60,14,"제승방략")}
 ${_box(40,98,100,14,"잡색군 (예비군)")}
 <text x="90" y="122" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">진관 체제와 제승방략을 오갔다</text></svg>`,
 "5위가 중앙을, 영진군이 지방을 맡았다. 진관 체제는 각 지역이 스스로 막는 방식이고 제승방략은 병력을 한곳에 모으는 방식이다"],
[35,"대한민국 임시 정부의 조직","조직도","이 조직도에 해당하는 정부로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(56,4,68,16,"대통령","var(--accent-soft)")}
 ${_ln(90,20,90,26)}${_ln(24,26,156,26)}${_ln(24,26,24,34)}${_ln(90,26,90,34)}${_ln(156,26,156,34)}
 ${_box(2,34,46,14,"임시 의정원")}${_box(66,34,48,16,"국무원","var(--accent-soft)")}${_box(132,34,46,14,"법원")}
 ${_ln(90,50,90,58)}${_ln(30,58,150,58)}${_ln(30,58,30,66)}${_ln(90,58,90,66)}${_ln(150,58,150,66)}
 ${_box(6,66,48,14,"연통제")}${_box(66,66,48,14,"교통국")}${_box(126,66,48,14,"구미 위원부")}
 ${_box(40,90,100,14,"독립신문 · 사료 편찬소")}
 <text x="90" y="116" font-size="8" text-anchor="middle" fill="var(--ink-mute)">삼권 분립을 갖춘 민주 공화제 정부였다</text></svg>`,
 "임시 의정원과 국무원, 법원으로 삼권을 나누었다. 연통제와 교통국은 국내와 이어지는 비밀 조직이다"],
/* ── 지도 ── */
[4,"가야 연맹의 범위","전성기 지도","지도에 표시된 세력으로 옳은 것은?",
 _map(`<ellipse cx="66" cy="137" rx="14" ry="12" fill="var(--accent)" opacity=".35"/>`,
  [[70,142,"금관가야"],[64,130,"대가야"]],"낙동강 하류에 자리 잡은 연맹체"),
 "전기에는 김해의 금관가야가, 후기에는 고령의 대가야가 연맹을 이끌었다. 중앙 집권 국가로 나아가지 못했다"],
[17,"조선의 8도","영토 지도","지도에 표시된 행정 구역으로 옳은 것은?",
 _map(`<path d="${_KP}" fill="var(--accent)" opacity=".18"/>`,
  [[40,58,"평안"],[66,58,"함경"],[42,80,"황해"],[62,82,"강원"],[48,98,"경기"],[44,118,"충청"],[64,122,"경상"],[42,138,"전라"]],
  "팔도 아래 부·목·군·현을 두었다"),
 "태종 때 정비되었다. 각 도에 관찰사를 파견했고 모든 군현에 수령을 보낸 것이 고려와 다른 점이다"],
[31,"대한 제국의 간도와 독도","영토 지도","지도에 표시된 지역과 관련된 것으로 옳은 것은?",
 _map(`<ellipse cx="72" cy="28" rx="20" ry="9" fill="var(--accent)" opacity=".3"/>
  <circle cx="101" cy="104" r="2.6" fill="var(--no)"/><text x="94" y="116" font-size="6.2" fill="var(--ink)">독도</text>`,
  [[72,28,"간도"],[86,100,"울릉도"]],"칙령 제41호와 간도 관리사 파견"),
 "1900년 칙령 제41호로 울릉도와 독도의 관할을 밝히고 1902년 이범윤을 간도 관리사로 보냈다"],
[18,"임진왜란의 3대 대첩","전투 지도","지도에 표시된 전투로 옳은 것은?",
 _map(null,[[48,92,"행주"],[63,139,"진주"],[62,150,"한산도"]],"관군과 의병, 수군이 함께 거둔 승리"),
 "한산도 대첩은 이순신, 진주 대첩은 김시민, 행주 대첩은 권율이 이끌었다"],
[28,"병인양요와 신미양요","전투 지도","지도에 표시된 사건으로 옳은 것은?",
 _map(`<path d="M30,86 L44,92" stroke="var(--no)" stroke-width="1.4" stroke-dasharray="3 2"/>`,
  [[44,92,"강화도"],[46,70,"대동강"]],"서양 함대가 두 차례 침략했다"),
 "1866년 프랑스가 병인박해를 구실로, 1871년 미국이 제너럴 셔먼호 사건을 구실로 강화도를 공격했다"],
[36,"봉오동 전투와 청산리 대첩","전투 지도","지도에 표시된 전투로 옳은 것은?",
 _map(`<ellipse cx="70" cy="26" rx="16" ry="8" fill="var(--accent)" opacity=".3"/>`,
  [[64,22,"청산리"],[76,30,"봉오동"]],"1920년 만주에서 거둔 두 차례 승리"),
 "홍범도의 대한 독립군이 봉오동에서, 김좌진의 북로 군정서가 청산리에서 일본군을 크게 무찔렀다"],
/* ── 무덤 구조 ── */
[2,"고인돌","고분","이 무덤 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <g fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2">
 <rect x="10" y="30" width="60" height="8"/><rect x="16" y="38" width="8" height="40"/><rect x="56" y="38" width="8" height="40"/>
 <rect x="92" y="52" width="56" height="10"/><rect x="100" y="62" width="10" height="14"/><rect x="130" y="62" width="10" height="14"/></g>
 <rect x="24" y="52" width="32" height="26" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <rect x="110" y="76" width="20" height="8" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <text x="40" y="94" font-size="8" text-anchor="middle" fill="var(--ink-mute)">탁자식</text>
 <text x="120" y="94" font-size="8" text-anchor="middle" fill="var(--ink-mute)">바둑판식</text>
 <text x="80" y="106" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">덮개돌을 굄돌이나 받침돌이 받치는 구조</text></svg>`,
 "청동기 시대의 대표적 무덤이다. 굄돌 위에 덮개돌을 올린 탁자식은 주로 북쪽, 낮은 받침에 올린 바둑판식은 주로 남쪽에 분포한다"],
[9,"발해의 무덤 양식","고분","이 두 무덤 양식을 가진 나라로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <path d="M6,88 Q40,30 74,88 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <rect x="26" y="60" width="28" height="26" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <text x="40" y="100" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">굴식 돌방 (정혜공주 묘)</text>
 <path d="M86,88 Q120,32 154,88 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <path d="M104,86 L104,64 Q120,48 136,64 L136,86 Z" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <g stroke="var(--accent)" stroke-width="0.6" opacity=".7"><line x1="104" y1="70" x2="136" y2="70"/><line x1="104" y1="78" x2="136" y2="78"/></g>
 <text x="120" y="100" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">벽돌 (정효공주 묘)</text></svg>`,
 "정혜공주 묘는 고구려식 굴식 돌방무덤에 모줄임천장을 썼고, 정효공주 묘는 당의 영향을 받은 벽돌무덤이다"],
/* ── 토지 제도 도해 ── */
[13,"전시과","토지 제도 도해","이 토지 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(20,6,140,16,"관직 등급에 따라 전지와 시지를 지급","var(--accent-soft)")}
 ${_box(6,32,50,14,"시정 전시과")}${_box(64,32,52,14,"개정 전시과")}${_box(124,32,50,14,"경정 전시과")}
 ${_box(6,50,50,14,"인품 + 관품")}${_box(64,50,52,14,"관직만 기준")}${_box(124,50,50,14,"현직만 지급")}
 ${_box(6,68,50,14,"경종 976")}${_box(64,68,52,14,"목종 998")}${_box(124,68,50,14,"문종 1076")}
 ${_box(30,92,120,14,"죽거나 물러나면 국가에 반납")}
 <text x="90" y="120" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">수조권만 주고 소유권은 주지 않았다</text></svg>`,
 "전지는 곡식을, 시지는 땔감을 얻는 땅이다. 지급 기준이 인품에서 관직으로, 다시 현직으로 좁아졌다"],
[19,"과전법","토지 제도 도해","이 토지 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(20,6,140,16,"경기 지역에 한정해 수조권 지급","var(--accent-soft)")}
 ${_ln(90,22,90,30)}${_ln(34,30,146,30)}${_ln(34,30,34,38)}${_ln(146,30,146,38)}
 ${_box(6,38,56,14,"전·현직 관리 모두")}${_box(118,38,56,14,"18과로 나누어 지급")}
 ${_box(20,60,60,14,"수신전 (아내)")}${_box(100,60,60,14,"휼양전 (자녀)")}
 ${_box(30,84,120,14,"사실상 세습되어 지급할 땅이 모자람")}
 <text x="90" y="116" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">1391년 신진 사대부의 경제 기반이 되었다</text></svg>`,
 "경기의 토지만 대상으로 삼아 권문세족의 농장을 무너뜨렸다. 수신전과 휼양전 때문에 줄 땅이 부족해져 직전법으로 바뀐다"],
[19,"직전법","토지 제도 도해","이 토지 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(20,6,140,16,"현직 관리에게만 수조권 지급","var(--accent-soft)")}
 ${_box(14,32,70,14,"수신전 폐지")}${_box(96,32,70,14,"휼양전 폐지")}
 ${_ln(90,46,90,54)}
 ${_box(30,54,120,14,"세조 1466년 시행")}
 ${_box(20,76,140,16,"관리가 임기 중 과도하게 거두는 폐단","var(--surface2)")}
 <text x="90" y="112" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">이 폐단을 막으려 관수관급제로 이어진다</text></svg>`,
 "줄 땅이 모자라자 현직에게만 주고 유가족 몫을 없앴다. 퇴직 뒤를 대비해 미리 많이 거두는 폐단이 생겼다"],
[19,"관수관급제","토지 제도 도해","이 토지 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,14,46,16,"농민")}${_box(66,14,48,16,"국가","var(--accent-soft)")}${_box(128,14,46,16,"관리")}
 ${_ln(52,22,66,22)}${_ln(114,22,128,22)}
 <text x="59" y="40" font-size="7" text-anchor="middle" fill="var(--ink-mute)">조세</text>
 <text x="121" y="40" font-size="7" text-anchor="middle" fill="var(--ink-mute)">지급</text>
 ${_box(30,52,120,16,"국가가 직접 걷어 관리에게 나눠 줌","var(--accent-soft)")}
 ${_box(20,78,140,16,"수조권을 매개로 한 지배가 사실상 끝남")}
 <text x="90" y="112" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">성종 1470년 시행</text></svg>`,
 "관리가 농민에게서 직접 거두던 고리를 끊었다. 뒤에 직전법마저 폐지되면서 관리는 녹봉만 받게 된다"],
/* ── 수취 제도 도해 ── */
[19,"공법","수취 제도 도해","이 수취 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(10,8,70,16,"전분 6등법","var(--accent-soft)")}${_box(100,8,70,16,"연분 9등법","var(--accent-soft)")}
 ${_box(10,30,70,14,"토지의 비옥도")}${_box(100,30,70,14,"그해의 풍흉")}
 ${_box(10,48,70,14,"1등전 ~ 6등전")}${_box(100,48,70,14,"상상년 ~ 하하년")}
 ${_box(30,72,120,16,"1결당 최고 20두에서 최저 4두","var(--accent-soft)")}
 <text x="90" y="106" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">세종이 17만여 명에게 물어 정했다</text></svg>`,
 "땅의 비옥도와 그해 작황을 함께 따져 세액을 정했다. 절차가 번거로워 뒤에 영정법으로 고정된다"],
[24,"영정법","수취 제도 도해","이 수취 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(20,10,140,16,"풍흉에 관계없이 전세를 고정","var(--accent-soft)")}
 ${_box(30,36,120,16,"토지 1결당 쌀 4두 ~ 6두")}
 ${_box(20,62,140,16,"인조 1635년 시행")}
 ${_box(14,88,152,16,"부가세가 늘어 실제 부담은 줄지 않음","var(--surface2)")}
 </svg>`,
 "전세 자체는 가벼워졌으나 수수료와 운반비 같은 부가세가 붙어 농민의 부담은 크게 줄지 않았다"],
[24,"대동법","수취 제도 도해","이 수취 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,8,74,16,"이전: 집집마다 현물 공납")}${_box(100,8,74,16,"이후: 토지 1결당 쌀 12두","var(--accent-soft)")}
 ${_ln(84,16,96,16)}
 ${_box(20,36,140,16,"공인이 나라에 물품을 대기 시작")}
 ${_box(20,60,140,16,"광해군 1608년 경기에서 시작해 100년에 걸쳐 확대")}
 ${_box(14,86,152,16,"상품 화폐 경제가 발달하는 계기","var(--surface2)")}
 </svg>`,
 "방납의 폐단을 없애려 공납을 토지 기준으로 바꾸었다. 지주의 부담이 커져 전국으로 퍼지기까지 100년이 걸렸다"],
[24,"균역법","수취 제도 도해","이 수취 제도의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,8,74,16,"이전: 군포 2필")}${_box(100,8,74,16,"이후: 군포 1필","var(--accent-soft)")}
 ${_ln(84,16,96,16)}
 ${_box(20,36,140,16,"부족한 재정을 메우는 방법")}
 ${_box(6,60,52,14,"결작 1결 2두")}${_box(64,60,52,14,"선무군관포")}${_box(122,60,52,14,"어염선세")}
 ${_box(14,84,152,16,"부담이 다시 토지와 농민에게 돌아옴","var(--surface2)")}
 </svg>`,
 "영조가 군역 부담을 절반으로 줄였다. 그러나 결작이 지주를 거쳐 소작농에게 전가되면서 효과가 오래가지 못했다"],
/* ── 신분 구조 도해 ── */
[7,"삼국의 신분 구조","신분 구조 도해","이 신분 구조를 가진 시대로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(56,8,68,16,"왕족과 귀족","var(--accent-soft)")}
 ${_box(40,32,100,16,"평민 (농민)")}
 ${_box(24,56,132,16,"천민 (노비)")}
 ${_box(10,82,160,16,"귀족 회의: 제가 회의 · 정사암 회의 · 화백 회의","var(--surface2)")}
 <text x="90" y="114" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">신분에 따라 관직과 생활이 규제되었다</text></svg>`,
 "왕족과 귀족이 관직과 토지를 독점했다. 나라마다 귀족 회의를 두어 국가 중대사를 결정했다"],
[13,"고려의 신분 구조","신분 구조 도해","이 신분 구조를 가진 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(56,6,68,14,"귀족 (문벌)","var(--accent-soft)")}
 ${_box(44,24,92,14,"중류층 (향리·서리·남반)")}
 ${_box(26,42,128,14,"양민 (백정 농민)")}
 ${_box(26,60,128,14,"향·부곡·소 주민","var(--surface2)")}
 ${_box(44,78,92,14,"천민 (노비)")}
 <text x="90" y="108" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">향·부곡·소 주민은 양민이나 차별을 받았다</text></svg>`,
 "귀족과 중류층, 양민, 천민으로 나뉜다. 향·부곡·소의 주민은 신분은 양민이나 세금과 이동에서 차별을 받았다"],
[19,"조선의 신분 구조","신분 구조 도해","이 신분 구조를 가진 나라로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,8,80,16,"법제: 양천제","var(--surface2)")}${_box(94,8,80,16,"실제: 반상제","var(--accent-soft)")}
 ${_box(56,32,68,14,"양반")}
 ${_box(48,50,84,14,"중인 (기술관·서얼)")}
 ${_box(30,68,120,14,"상민 (농민·상인·수공업자)")}
 ${_box(48,86,84,14,"천민 (노비·백정)")}
 <text x="90" y="114" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">법은 둘로, 실제는 넷으로 나뉘었다</text></svg>`,
 "법제상으로는 양인과 천인으로 나누는 양천제였으나 실제로는 양반, 중인, 상민, 천민의 네 갈래로 굳어졌다"],
[30,"갑오개혁 이후의 신분","신분 구조 도해","이 변화를 가져온 개혁으로 옳은 것은?",
 `<svg viewBox="0 0 180 126" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,10,70,16,"양반 · 중인 · 상민 · 천민")}
 ${_ln(80,18,96,18)}
 ${_box(100,10,74,16,"법적 신분 철폐","var(--accent-soft)")}
 ${_box(10,40,70,14,"공사 노비제 폐지")}${_box(100,40,70,14,"과거제 폐지")}
 ${_box(10,58,70,14,"과부 재가 허용")}${_box(100,58,70,14,"조혼 금지")}
 ${_box(20,82,140,16,"연좌제 폐지 · 고문 폐지","var(--surface2)")}
 </svg>`,
 "제1차 갑오개혁에서 신분제와 과거제가 폐지되었다. 다만 실제 사회에서 차별이 사라지는 데는 오랜 시간이 걸렸다"],
/* ── 건축 구조 도해 ── */
[15,"주심포 양식","건축 구조 도해","이 건축 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <polygon points="12,44 80,18 148,44" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <rect x="16" y="44" width="128" height="6" fill="var(--ink-soft)"/>
 <g fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1">
 <rect x="26" y="50" width="16" height="10"/><rect x="72" y="50" width="16" height="10"/><rect x="118" y="50" width="16" height="10"/></g>
 <g fill="var(--ink-soft)"><rect x="31" y="60" width="6" height="36"/><rect x="77" y="60" width="6" height="36"/><rect x="123" y="60" width="6" height="36"/></g>
 <text x="80" y="106" font-size="8" text-anchor="middle" fill="var(--ink-mute)">공포를 기둥 위에만 올린 구조</text></svg>`,
 "공포를 기둥 위에만 얹어 간결하고 안정적이다. 부석사 무량수전과 수덕사 대웅전이 대표적이다"],
[15,"다포 양식","건축 구조 도해","이 건축 양식의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <polygon points="8,44 80,16 152,44" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <rect x="14" y="44" width="132" height="6" fill="var(--ink-soft)"/>
 <g fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1">
 ${[20,42,64,86,108,130].map(x=>`<rect x="${x}" y="50" width="14" height="10"/>`).join('')}</g>
 <g fill="var(--ink-soft)"><rect x="25" y="60" width="6" height="36"/><rect x="69" y="60" width="6" height="36"/><rect x="113" y="60" width="6" height="36"/></g>
 <text x="80" y="106" font-size="8" text-anchor="middle" fill="var(--ink-mute)">기둥 사이에도 공포를 올린 구조</text></svg>`,
 "기둥 사이에도 공포를 올려 지붕이 웅장하다. 고려 후기 원에서 들어와 성불사 응진전과 조선의 궁궐 건축으로 이어진다"],
[15,"배흘림기둥","건축 구조 도해","이 기둥 형태의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <path d="M50,20 Q42,55 50,96 L66,96 Q74,55 66,20 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <rect x="94" y="20" width="16" height="76" fill="var(--surface2)" stroke="var(--ink-soft)" stroke-width="1.2"/>
 <text x="58" y="108" font-size="8" text-anchor="middle" fill="var(--accent)">가운데가 볼록</text>
 <text x="102" y="108" font-size="8" text-anchor="middle" fill="var(--ink-mute)">곧은 기둥</text>
 <line x1="46" y1="58" x2="70" y2="58" stroke="var(--ink-mute)" stroke-dasharray="2 2"/></svg>`,
 "기둥 가운데를 볼록하게 만들어 위아래가 가늘어 보이는 착시를 바로잡았다. 부석사 무량수전이 대표적이다"],
[9,"석굴암의 구조","건축 구조 도해","이 구조를 가진 건축물로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <rect x="10" y="52" width="44" height="34" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <text x="32" y="72" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">네모난 전실</text>
 <rect x="54" y="62" width="16" height="14" fill="var(--surface2)" stroke="var(--ink)"/>
 <circle cx="104" cy="60" r="34" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <circle cx="104" cy="62" r="13" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
 <text x="104" y="64" font-size="6.5" text-anchor="middle" fill="var(--accent)">본존불</text>
 <text x="80" y="104" font-size="8" text-anchor="middle" fill="var(--ink-mute)">네모난 방과 둥근 방을 통로로 이었다</text></svg>`,
 "화강암을 다듬어 쌓아 올린 인공 석굴이다. 네모난 전실과 둥근 주실을 통로로 이었고 주실 천장은 돔 형태다"],
[27,"수원 화성의 구조","건축 구조 도해","이 성곽의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <path d="M20,74 Q30,34 80,30 Q130,34 140,74" fill="none" stroke="var(--ink)" stroke-width="2"/>
 <rect x="20" y="74" width="120" height="8" fill="var(--surface2)" stroke="var(--ink)"/>
 <g fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1">
 <rect x="30" y="52" width="16" height="14"/><rect x="72" y="22" width="18" height="12"/><rect x="118" y="56" width="16" height="14"/></g>
 <text x="24" y="48" font-size="6.5" text-anchor="middle" fill="var(--ink-mute)">공심돈</text>
 <text x="81" y="18" font-size="6.5" text-anchor="middle" fill="var(--ink-mute)">장안문</text>
 <text x="138" y="52" font-size="6.5" text-anchor="middle" fill="var(--ink-mute)">포루</text>
 <text x="80" y="102" font-size="8" text-anchor="middle" fill="var(--ink-mute)">거중기로 쌓고 공사 기록을 의궤로 남겼다</text></svg>`,
 "정조가 쌓은 계획도시의 성곽이다. 거중기와 녹로를 써서 기간과 비용을 줄였고 『화성성역의궤』 덕분에 복원할 수 있었다"],
/* ── 문화 흐름 도해 ── */
[15,"고려청자의 변화","문화 흐름 도해","이 흐름에 해당하는 것으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,20,50,18,"순청자","var(--accent-soft)")}${_ln(54,29,66,29)}
 ${_box(66,20,50,18,"상감청자","var(--accent-soft)")}${_ln(116,29,128,29)}
 ${_box(128,20,48,18,"분청사기")}
 ${_box(4,52,50,14,"11~12세기")}${_box(66,52,50,14,"12~13세기")}${_box(128,52,48,14,"원 간섭기 이후")}
 <text x="90" y="86" font-size="8" text-anchor="middle" fill="var(--ink-mute)">비색에서 무늬로, 다시 소박함으로</text></svg>`,
 "순수한 비색을 자랑하던 순청자에서 무늬를 새긴 상감청자로 나아갔다가, 원 간섭기 이후 기법이 거칠어지며 분청사기로 이어진다"],
[21,"조선 도자기의 변화","문화 흐름 도해","이 흐름에 해당하는 것으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,20,50,18,"분청사기","var(--accent-soft)")}${_ln(54,29,66,29)}
 ${_box(66,20,50,18,"순백자","var(--accent-soft)")}${_ln(116,29,128,29)}
 ${_box(128,20,48,18,"청화 백자")}
 ${_box(4,52,50,14,"15세기")}${_box(66,52,50,14,"16세기")}${_box(128,52,48,14,"조선 후기")}
 <text x="90" y="86" font-size="8" text-anchor="middle" fill="var(--ink-mute)">사림이 집권하며 검소한 백자가 주류가 되었다</text></svg>`,
 "분청사기가 임진왜란을 겪으며 사라지고 백자가 주류가 되었다. 조선 후기에는 푸른 안료로 그림을 그린 청화 백자가 널리 쓰였다"],
[9,"삼국 불상의 흐름","문화 흐름 도해","이 흐름에 해당하는 것으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,20,52,18,"금동 연가 7년명","var(--accent-soft)")}${_ln(56,29,66,29)}
 ${_box(66,20,50,18,"서산 마애삼존상")}${_ln(116,29,128,29)}
 ${_box(128,20,48,18,"석굴암 본존불")}
 ${_box(4,52,52,14,"고구려")}${_box(66,52,50,14,"백제")}${_box(128,52,48,14,"통일 신라")}
 <text x="90" y="86" font-size="8" text-anchor="middle" fill="var(--ink-mute)">강건함에서 온화함으로, 다시 사실적 조화로</text></svg>`,
 "고구려 불상은 힘차고 백제 불상은 온화하다. 통일 신라에 이르러 사실적이고 균형 잡힌 조각이 완성된다"],
[9,"고구려 고분 벽화의 변화","문화 흐름 도해","이 흐름에 해당하는 것으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,20,74,18,"생활 풍속도","var(--accent-soft)")}${_ln(80,29,96,29)}
 ${_box(96,20,78,18,"사신도","var(--accent-soft)")}
 ${_box(6,52,74,14,"무용총 · 각저총")}${_box(96,52,78,14,"강서대묘 · 오회분 4호묘")}
 ${_box(6,74,168,14,"불교와 도교의 영향이 차례로 나타난다")}
 </svg>`,
 "초기에는 무덤 주인의 생활을 그렸고 후기에는 도교의 영향으로 사신도를 그렸다. 고분 양식이 굴식 돌방무덤이어서 벽화가 남을 수 있었다"],
[27,"조선 후기 회화의 흐름","문화 흐름 도해","이 흐름에 해당하는 것으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,20,52,18,"진경 산수화","var(--accent-soft)")}${_ln(56,29,66,29)}
 ${_box(66,20,50,18,"풍속화","var(--accent-soft)")}${_ln(116,29,128,29)}
 ${_box(128,20,48,18,"문인화")}
 ${_box(4,52,52,14,"18세기 전반 정선")}${_box(66,52,50,14,"18세기 후반 김홍도")}${_box(128,52,48,14,"19세기 김정희")}
 <text x="90" y="86" font-size="8" text-anchor="middle" fill="var(--ink-mute)">우리 산천에서 사람으로, 다시 선비의 정신으로</text></svg>`,
 "정선이 우리 산천을 그리는 길을 열었고 김홍도와 신윤복이 사람을 그렸다. 19세기에는 김정희를 중심으로 문인화가 다시 유행한다"],
/* ── 기구 도해 ── */
[20,"앙부일구의 구조","기구 도해","이 기구의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <path d="M30,34 A50,50 0 0 0 130,34 Z" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.4"/>
 <g stroke="var(--line)" stroke-width="0.8">${[42,58,74,90,106,118].map(x=>`<line x1="${x}" y1="34" x2="80" y2="82"/>`).join('')}</g>
 <line x1="80" y1="34" x2="62" y2="60" stroke="var(--accent)" stroke-width="2"/>
 <circle cx="80" cy="34" r="2.5" fill="var(--accent)"/>
 <rect x="66" y="86" width="28" height="10" fill="var(--ink-soft)"/>
 <text x="80" y="108" font-size="8" text-anchor="middle" fill="var(--ink-mute)">솥 모양 안쪽에 시각선을 새긴 해시계</text></svg>`,
 "솥을 하늘로 우러르게 둔 모양이라는 뜻이다. 그림자로 시각과 절기를 함께 읽을 수 있어 길가에 두고 누구나 보게 했다"],
[20,"자격루의 원리","기구 도해","이 기구의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <rect x="14" y="14" width="34" height="22" rx="3" fill="var(--surface2)" stroke="var(--ink)"/>
 <rect x="24" y="44" width="34" height="22" rx="3" fill="var(--surface2)" stroke="var(--ink)"/>
 <rect x="40" y="74" width="46" height="24" rx="3" fill="var(--accent-soft)" stroke="var(--accent)"/>
 <g stroke="var(--accent)" stroke-width="1.2"><line x1="31" y1="36" x2="35" y2="44"/><line x1="41" y1="66" x2="52" y2="74"/></g>
 <rect x="98" y="30" width="10" height="68" fill="var(--ink-soft)"/>
 <circle cx="126" cy="44" r="12" fill="var(--surface2)" stroke="var(--ink)"/>
 <text x="126" y="47" font-size="7" text-anchor="middle" fill="var(--ink-mute)">종</text>
 ${_ln(86,86,98,64)}
 <text x="80" y="108" font-size="8" text-anchor="middle" fill="var(--ink-mute)">물이 차오르면 스스로 종을 쳐 시각을 알린다</text></svg>`,
 "장영실 등이 만든 물시계다. 물이 일정 높이에 이르면 구슬이 굴러 인형이 종과 북을 치게 했다"],
[20,"측우기와 수표","기구 도해","이 기구의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <rect x="26" y="30" width="26" height="40" rx="2" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <rect x="26" y="54" width="26" height="16" fill="var(--accent-soft)"/>
 <rect x="20" y="70" width="38" height="24" fill="var(--ink-soft)"/>
 <text x="39" y="106" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">측우기</text>
 <rect x="104" y="18" width="10" height="76" fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2"/>
 <g stroke="var(--ink-mute)" stroke-width="0.8">${[30,42,54,66,78].map(y=>`<line x1="104" y1="${y}" x2="114" y2="${y}"/>`).join('')}</g>
 <rect x="94" y="62" width="30" height="32" fill="var(--accent-soft)" opacity=".5"/>
 <text x="109" y="106" font-size="7.5" text-anchor="middle" fill="var(--ink-mute)">수표</text></svg>`,
 "측우기는 그릇에 고인 빗물의 깊이를, 수표는 하천의 수위를 쟀다. 같은 기준으로 재어 농사와 조세에 썼다"],
[27,"거중기","기구 도해","이 기구의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 160 116" xmlns="http://www.w3.org/2000/svg">
 <rect x="28" y="14" width="104" height="8" fill="var(--ink-soft)"/>
 <g fill="var(--surface2)" stroke="var(--ink)" stroke-width="1.2">
 <circle cx="58" cy="30" r="8"/><circle cx="82" cy="30" r="8"/><circle cx="106" cy="30" r="8"/>
 <circle cx="70" cy="58" r="8"/><circle cx="94" cy="58" r="8"/></g>
 <g stroke="var(--accent)" stroke-width="1.2" fill="none">
 <path d="M58,38 L70,50"/><path d="M82,38 L70,50"/><path d="M82,22 L106,22"/><path d="M94,50 L106,38"/></g>
 <rect x="62" y="74" width="40" height="20" fill="var(--accent-soft)" stroke="var(--accent)"/>
 ${_ln(82,66,82,74)}
 <text x="80" y="106" font-size="8" text-anchor="middle" fill="var(--ink-mute)">도르래를 겹쳐 적은 힘으로 무거운 돌을 든다</text></svg>`,
 "정약용이 『기기도설』을 참고해 고안했다. 수원 화성을 쌓을 때 써서 공사 기간과 비용을 크게 줄였다"],
/* ── 근현대 도해 ── */
[32,"화폐 정리 사업","근현대 도해","이 정책의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,10,60,16,"백동화")}${_ln(66,18,84,18)}${_box(84,10,90,16,"일본 제일은행권","var(--accent-soft)")}
 ${_box(6,38,54,14,"갑종: 제값")}${_box(64,38,54,14,"을종: 깎아 줌")}${_box(122,38,52,14,"병종: 교환 불가")}
 ${_box(14,64,152,16,"국내 상인과 민족 은행이 무너짐","var(--surface2)")}
 <text x="90" y="98" font-size="8" text-anchor="middle" fill="var(--ink-mute)">1905년 재정 고문 메가타가 주도했다</text></svg>`,
 "백동화를 등급으로 나눠 바꿔 주면서 조선 상인이 큰 손해를 보았다. 대한천일은행 같은 민족 은행도 이때 무너졌다"],
[34,"토지 조사 사업","근현대 도해","이 정책의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(6,10,52,16,"기한 안에 신고")}${_ln(58,18,68,18)}${_box(68,10,52,16,"복잡한 절차")}${_ln(120,18,130,18)}${_box(130,10,44,16,"신고 누락")}
 ${_box(20,38,140,16,"신고하지 않은 땅은 총독부가 차지","var(--accent-soft)")}
 ${_box(6,62,80,14,"동양 척식 주식회사")}${_box(94,62,80,14,"일본인 이주민")}
 <text x="90" y="94" font-size="8" text-anchor="middle" fill="var(--ink-mute)">1910~1918년, 지세 수입이 크게 늘었다</text></svg>`,
 "근대적 소유권 확립을 내세웠으나 실제로는 신고주의를 이용해 토지를 빼앗았다. 농민은 관습적 경작권을 잃고 소작농으로 전락했다"],
[33,"근대 시설의 도입","근현대 도해","이 표가 나타내는 시기로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,8,52,14,"1883 박문국")}${_box(64,8,52,14,"1885 전신")}${_box(124,8,52,14,"1885 광혜원")}
 ${_box(4,28,52,14,"1887 전등")}${_box(64,28,52,14,"1898 전차")}${_box(124,28,52,14,"1899 경인선")}
 ${_box(4,48,52,14,"1900 경운궁")}${_box(64,48,52,14,"1904 경부선")}${_box(124,48,52,14,"1908 원각사")}
 ${_box(14,74,152,16,"왕실과 서울을 중심으로 먼저 들어왔다","var(--surface2)")}
 </svg>`,
 "개항기에 근대 시설이 잇달아 들어왔다. 생활이 편해진 면과 침탈의 통로가 된 면이 함께 있다"],
[40,"경제 개발 5개년 계획","근현대 도해","이 정책의 이름으로 옳은 것은?",
 `<svg viewBox="0 0 180 114" xmlns="http://www.w3.org/2000/svg">
 ${_box(4,12,52,18,"1·2차","var(--accent-soft)")}${_ln(56,21,66,21)}
 ${_box(66,12,52,18,"3·4차","var(--accent-soft)")}${_ln(118,21,128,21)}
 ${_box(124,12,52,18,"1977년 수출 100억")}
 ${_box(4,42,52,14,"경공업 중심")}${_box(66,42,52,14,"중화학 공업")}${_box(124,42,52,14,"1인당 GNP 1천 달러")}
 ${_box(4,62,52,14,"1962~1971")}${_box(66,62,52,14,"1972~1981")}
 ${_box(14,86,152,16,"수출 주도와 외자 의존의 문제도 남겼다","var(--surface2)")}
 </svg>`,
 "1962년부터 네 차례에 걸쳐 추진되었다. 경공업에서 중화학 공업으로 중심이 옮겨 갔고, 1977년 수출 100억 달러를 이루었다"],
];
