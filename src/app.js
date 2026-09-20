/* ═══ 강의 목록 ═══ */
const LEC={
1:"역사는 왜 배우는가",2:"선사 시대",3:"여러 나라의 성장",4:"고대 · 고구려와 가야",5:"고대 · 백제와 신라",
6:"고대 · 통일 신라와 발해",7:"고대 · 경제와 사회",8:"고대 · 문화 1",9:"고대 · 문화 2",
10:"고려 · 초기 정치",11:"고려 · 중기 정치와 무신 정권",12:"고려 · 외교",13:"고려 · 경제와 사회",
14:"고려 · 문화 1",15:"고려 · 문화 2",16:"조선 전기 · 정치",17:"조선 · 통치 조직",18:"조선 전기 · 외교",
19:"조선 전기 · 경제와 사회",20:"조선 전기 · 문화 1",21:"조선 전기 · 문화 2",
22:"조선 후기 · 정치",23:"조선 후기 · 조직과 외교",24:"조선 후기 · 경제",25:"조선 후기 · 사회",
26:"조선 후기 · 문화 1",27:"조선 후기 · 문화 2",28:"개항기 · 흥선 대원군",29:"개항기 · 개항과 갑신정변",
30:"개항기 · 동학 농민 운동과 대한 제국",31:"국권 피탈과 저항",32:"개항기 · 경제",33:"개항기 · 문화",
34:"일제 강점기 · 식민 통치",35:"일제 강점기 · 1910년대 저항",36:"일제 강점기 · 1920년대 저항",
37:"일제 강점기 · 1930년대 이후",38:"현대 · 광복과 6·25 전쟁",39:"현대 · 민주주의의 발전",
40:"현대 · 경제 발전과 통일 정책"};
const ERAS=[
 {name:"선사와 초기 국가",sub:"1~3강",ch:[1,2,3]},
 {name:"고대",sub:"4~9강",ch:[4,5,6,7,8,9]},
 {name:"고려",sub:"10~15강",ch:[10,11,12,13,14,15]},
 {name:"조선 전기",sub:"16~21강",ch:[16,17,18,19,20,21]},
 {name:"조선 후기",sub:"22~27강",ch:[22,23,24,25,26,27]},
 {name:"개항기",sub:"28~33강",ch:[28,29,30,31,32,33]},
 {name:"일제 강점기",sub:"34~37강",ch:[34,35,36,37]},
 {name:"현대",sub:"38~40강",ch:[38,39,40]}];

const CARDS=[].concat(CARDS_01_03,CARDS_04_05,CARDS_06_07,CARDS_08_09,CARDS_10_11,CARDS_12_13,CARDS_14_15,CARDS_16_17,CARDS_18_19,CARDS_20_21,CARDS_22_23,CARDS_24_25,CARDS_26_27,CARDS_28_29,CARDS_30_31,CARDS_32_33,CARDS_34_35,CARDS_36_37,CARDS_38_39,CARDS_40,CARDS_PLUS_A,CARDS_PLUS_B,CARDS_PLUS_C,CARDS_PLUS_D,CARDS_PLUS_E).map((r,i)=>({id:"c"+i,ch:r[0],q:r[1],a:r[2],tip:r[3]||""}));
const OXS=[].concat(RAW_OX,RAW_OX2,RAW_OX3,RAW_OX4,RAW_OX5,RAW_OX6,RAW_OX7,RAW_OX8,RAW_OX9,RAW_OX10,RAW_OX11,RAW_OX12,RAW_OX13,RAW_OX14,RAW_OX15,RAW_OX16,RAW_OX17).map((r,i)=>({id:"x"+i,ch:r[0],q:r[1],ans:!!r[2],tip:r[3]||""}));
const SEQS=[].concat(RAW_SEQ,RAW_SEQ2,RAW_SEQ3,RAW_SEQ4,RAW_SEQ5,RAW_SEQ6,RAW_SEQ7,RAW_SEQ8,RAW_SEQ9,RAW_SEQ10,RAW_SEQ11,RAW_SEQ12,RAW_SEQ13,RAW_LINE_A.map(r=>[r[0],r[1],r[2]])).map((r,i)=>({id:"s"+i,ch:r[0],title:r[1],items:r[2]}));
const SRCS=[].concat(RAW_SRC,RAW_SRC2,RAW_SRC3,RAW_SRC4,RAW_SRC5,RAW_SRC6,RAW_SRC7,RAW_SRC8,RAW_SRC9,RAW_SRC10,RAW_SRC11,RAW_SRC12,RAW_SRC13).map((r,i)=>({id:"r"+i,ch:r[0],src:r[1],q:r[2],a:r[3],w:r[4],tip:r[5]||""}));
const BLANKS=[].concat(RAW_BLANK,RAW_BLANK2,RAW_BLANK3,RAW_BLANK4,RAW_BLANK5,RAW_BLANK6,RAW_BLANK7,RAW_BLANK8,RAW_BLANK9,RAW_BLANK10,RAW_BLANK11,RAW_BLANK12,RAW_BLANK13,RAW_BLANK14).map((r,i)=>({id:"b"+i,ch:r[0],q:r[1],a:r[2],tip:r[3]||""}));
const CMPS=[].concat(RAW_CMP,RAW_CMP2,RAW_CMP3,RAW_CMP4,RAW_CMP5,RAW_CMP6,RAW_CMP7,RAW_CMP8,RAW_CMP9,RAW_CMP10,RAW_CMP11,RAW_CMP12,RAW_CMP13).map((r,i)=>({ci:i,ch:r[0],title:r[1],A:r[2],B:r[3],rows:r[4]}));
const SUBJ=[].concat(RAW_SUBJ_A,RAW_SUBJ_B,RAW_SUBJ_C,RAW_SUBJ_D,RAW_SUBJ_E,RAW_SUBJ_F,RAW_SUBJ_G,RAW_SUBJ_H,RAW_SUBJ_I).map((r,i)=>({id:"u"+i,ch:r[0],name:r[1],era:r[2],year:r[3],facts:r[4],relics:r[5]||[],hint:r[6]||""}));
const HERI=[].concat(RAW_HERI_A,RAW_HERI_B,RAW_HERI_C,RAW_HERI_D,RAW_HERI_E,RAW_HERI_F,RAW_HERI_G,RAW_HERI_H,RAW_HERI_I,RAW_HERI_J).map((r,i)=>({id:"w"+i,ch:r[0],name:r[1],era:r[2],kind:r[3],facts:r[4]}));
const EVT=[].concat(RAW_EVENT_A,RAW_EVENT_B,RAW_EVENT_C,RAW_EVENT_D,RAW_EVENT_E,RAW_EVENT_F,RAW_EVENT_G,RAW_EVENT_H).map((r,i)=>({id:"v"+i,ch:r[0],name:r[1],year:r[2],era:r[3]}));
SUBJ.forEach(x=>x.cat="s");HERI.forEach(x=>x.cat="h");
const IMGS=[].concat(RAW_IMG).map((r,i)=>({id:"g"+i,ch:r[0],name:r[1],group:r[2],ask:r[3],svg:r[4],tip:r[5]||""}));
/* 사진.  photos.js 가 빌드에 들어갔을 때만 채워진다.
   앱을 공개 배포하므로 CC BY 계열은 저작자와 라이선스를 그림 아래에 함께 보여 준다. */
const _e0=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const PHOTOS=(typeof RAW_PHOTO==="undefined"?[]:RAW_PHOTO).map((r,i)=>({
  id:"p"+i,ch:r[0],name:r[1],group:r[2],ask:r[3],
  svg:`<img class="photo" src="${r[4]}" alt="${_e0(r[1])}" loading="lazy"><span class="credit">${_e0(r[5])}</span>`,
  tip:"출처 "+r[5],credit:r[5],link:r[6]||r[1],photo:1}));
/* 도식과 사진이 모두 있으면 사진을 쓴다. */
PHOTOS.forEach(p=>{const i=IMGS.findIndex(v=>v.name===p.name);if(i>=0)IMGS.splice(i,1);});
IMGS.push.apply(IMGS,PHOTOS);
const FACTOBJ=SUBJ.concat(HERI);
const FIGMAP={"장군총":"돌무지무덤","석촌동 고분군":"돌무지무덤","무용총":"굴식 돌방무덤","강서대묘":"굴식 돌방무덤",
 "정혜공주 묘":"굴식 돌방무덤","천마총":"돌무지덧널무덤","무령왕릉":"벽돌무덤","정효공주 묘":"벽돌무덤"};
/* 주체와 문화유산에 그림을 붙인다.  images.csv 의 match 로 이어진 사진이 가장 우선이다. */
FACTOBJ.forEach(x=>{
  const im=PHOTOS.find(v=>v.link===x.name)||IMGS.find(v=>v.name===x.name)||IMGS.find(v=>v.name===FIGMAP[x.name]);
  if(im)x.svg=im.svg;
});
const CMPQ=[];
CMPS.forEach(t=>t.rows.forEach((row,ri)=>{
  [1,2].forEach(side=>CMPQ.push({id:`m${t.ci}_${ri}_${side}`,ch:t.ch,tbl:t,key:row[0],
    text:row[side],ans:side===1?t.A:t.B,tip:`${row[0]} 항목에서 ${t.A}는 ${row[1]}, ${t.B}는 ${row[2]}`}));
}));

const MODES=[
 {k:"flash",n:"카드 넘기기",d:"떠올린 뒤 정답 확인"},
 {k:"mcq",n:"객관식",d:"네 보기에서 정답 고르기"},
 {k:"ox",n:"O · X",d:"함정 문장 판별"},
 {k:"src",n:"사료 제시형",d:"제시문 읽고 답하기"},
 {k:"blank",n:"빈칸 채우기",d:"핵심 키워드 넣기"},
 {k:"cmp",n:"비교 카드",d:"헷갈리는 짝 구분"},
 {k:"seq",n:"순서 배열",d:"사건을 차례대로"},
 {k:"neg",n:"틀린 것 찾기",d:"옳지 않은 설명 고르기",adv:1},
 {k:"combo",n:"ㄱㄴㄷㄹ 조합",d:"옳은 것만 고른 조합",adv:1},
 {k:"chrono",n:"연표 시기",d:"사건이 들어갈 시기",adv:1},
 {k:"whois",n:"정체 추론",d:"힌트로 맞히기"},
 {k:"pic",n:"그림 문제",d:"도식과 지도 보고 고르기"}];
const STOP=new Set(['이후','이전','다음','대한','관련','무엇','것은','우리','우리나라','때의','당시','시기','내용','사실','까닭','이유','인물','사람','나라','제도','정책','사건','대표','주요','주장','설치','실시','시행','편찬','조직','들면','각각','함께','처음','최초','중심','바탕','통해','위해','있다','했다','조치','방법','까닭','배경','의미','결과','변화','특징','목적','이름','과정','순서','정리','구별','차이','기준','성격','역할','기구','활동','단체','전투','사건은','두고','가지','세우','만든','실시한','설치한','받은','편성한','지급한','나타난','보여','알려','들면','말하면']);
const _isTok=t=>t.length>=2&&!STOP.has(t);
const MCQOK=c=>c.a.length<=28&&(c.a.match(/ \/ /g)||[]).length<=2;

/* ═══ 저장 ═══ */
/* 진도는 브라우저에 남긴다.  호스트가 window.storage 를 주면 그쪽을 쓰고,
   폰 브라우저처럼 없는 환경에서는 localStorage 로 대신한다. */
window.storage=window.storage||{
  async get(k){try{const v=localStorage.getItem(k);return v===null?null:{value:v};}catch(e){return null;}},
  async set(k,v){try{localStorage.setItem(k,v);}catch(e){}}
};
const KEY="ks:v3";
let ST={p:{},mode:"flash",sel:[],fs:"m",dday:"",log:{},lvl:"all"};
let saveTimer=null;
async function load(){
  try{const r=await window.storage.get(KEY); if(r&&r.value)ST=Object.assign(ST,JSON.parse(r.value));}catch(e){}
  for(const k of ["ks:v2","ks:v1"]){
    if(Object.keys(ST.p).length)break;
    try{const o=await window.storage.get(k);if(o&&o.value){const old=JSON.parse(o.value);
      if(old.p)ST.p=old.p;if(old.log)ST.log=old.log;if(old.dday)ST.dday=old.dday;}}catch(e){}
  }
}
function save(){clearTimeout(saveTimer);saveTimer=setTimeout(async()=>{
  try{await window.storage.set(KEY,JSON.stringify(ST));}catch(e){}},600);}

const today=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
const dstr=n=>new Date((n*864e5)+new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10);
const INTV=[0,1,3,7,16,35];
function rec(id){return ST.p[id]||(ST.p[id]={b:0,d:0,w:0,s:0,seen:0});}
function grade(id,q){
  const r=rec(id);r.seen=1;
  if(q===0){r.b=0;r.w=(r.w||0)+1;}
  else if(q===1){r.b=Math.max(1,Math.min(r.b,2));}
  else{r.b=Math.min(5,r.b+1);}
  r.d=today()+INTV[r.b];
  const k=dstr(today()); ST.log[k]=(ST.log[k]||0)+1;
  save();
}
function allItems(){return [].concat(CARDS,OXS,SRCS,BLANKS,CMPQ,SEQS);}
function dueList(){const t=today();return CARDS.filter(c=>{const r=ST.p[c.id];return r&&r.seen&&r.d<=t;});}
function memRate(){let n=0;CARDS.forEach(c=>{const r=ST.p[c.id];if(r&&r.b>=3)n++;});return Math.round(n/CARDS.length*100);}
function chStat(ch){const l=CARDS.filter(c=>c.ch===ch);let d=0;l.forEach(c=>{const r=ST.p[c.id];if(r&&r.b>=3)d++;});
  return{total:l.length,done:d,pct:Math.round(d/l.length*100)};}
const wrongCards=()=>CARDS.filter(c=>{const r=ST.p[c.id];return r&&r.w>0&&r.b<3;});
const starCards=()=>CARDS.filter(c=>{const r=ST.p[c.id];return r&&r.s;});
function weakChapters(){
  const out=[];
  for(let ch=1;ch<=40;ch++){
    const l=allItems().filter(x=>x.ch===ch);
    const seen=l.filter(x=>ST.p[x.id]&&ST.p[x.id].seen);
    if(seen.length<3)continue;
    const score=seen.reduce((s,x)=>s+ST.p[x.id].b,0)/seen.length;
    const w=seen.reduce((s,x)=>s+(ST.p[x.id].w||0),0);
    out.push({ch,score,w,seen:seen.length});
  }
  return out.sort((a,b)=>a.score-b.score||b.w-a.w).slice(0,3);
}
function streak(){
  let n=0,d=today();
  if(!ST.log[dstr(d)])d--;
  while(ST.log[dstr(d)]){n++;d--;}
  return n;
}

/* ═══ 유틸 ═══ */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const MARKS=["가","나","다","라"];
function buzz(ms){try{navigator.vibrate&&navigator.vibrate(ms);}catch(e){}}

/* ═══ 문항 생성 ═══ */
function build(mode,chs){
  const inCh=x=>chs.includes(x.ch);
  if(mode==="flash")return CARDS.filter(inCh).map(c=>({type:"flash",d:c}));
  if(mode==="mcq")return CARDS.filter(c=>inCh(c)&&MCQOK(c)).map(c=>({type:"mcq",d:c}));
  if(mode==="ox")return OXS.filter(inCh).map(o=>({type:"ox",d:o}));
  if(mode==="src")return SRCS.filter(inCh).map(s=>({type:"src",d:s}));
  if(mode==="blank")return BLANKS.filter(inCh).map(b=>({type:"blank",d:b}));
  if(mode==="cmp")return CMPQ.filter(inCh).map(c=>({type:"cmp",d:c}));
  if(mode==="seq")return SEQS.filter(inCh).map(s=>({type:"seq",d:s}));
  if(mode==="neg")return FACTOBJ.filter(x=>inCh(x)&&x.facts.length>=3).map(x=>({type:"neg",d:x}));
  if(mode==="combo")return FACTOBJ.filter(x=>inCh(x)&&x.facts.length>=3).map(x=>({type:"combo",d:x}));
  if(mode==="chrono"){const p=EVT.filter(inCh);return p.length>=7?shuffle(p).map(e=>({type:"chrono",d:e})):[];}
  if(mode==="pic")return IMGS.filter(inCh).map(v=>({type:"pic",d:v}));
  if(mode==="whois")return SUBJ.filter(x=>inCh(x)&&x.facts.length>=3&&x.hint).map(x=>({type:"whois",d:x}));
  return [];
}
const _tok=x=>x.replace(/[^가-힣A-Za-z0-9]/g," ").split(/\s+/).filter(Boolean)
  .map(t=>t.length>=3?t.replace(/(으로|에서|에게|들은|들을|은|는|이|가|을|를|의|에|로|와|과|도|만|들)$/,""):t).filter(Boolean);
const _tail=q=>q.replace(/[?]/g,"").trim().slice(-14);
const _shape=a=>({c:(a.match(/[,·]/g)||[]).length,d:/\d/.test(a)?1:0,l:a.length,sl:(a.match(/\//g)||[]).length});
function _ov(a,b){const A=new Set(_tok(a).filter(_isTok)),B=_tok(b).filter(_isTok);
  let n=0;B.forEach(t=>{if(A.has(t))n+=t.length>=3?1:0.35;});return n/Math.max(2.5,A.size);}
function pickDistractors(t,pool,n){
  const sh=_shape(t.a),qt=_tail(t.q);
  const shapeOK=x=>{const p=_shape(x.a);return p.d===sh.d&&p.c===sh.c&&p.sl===sh.sl&&Math.abs(p.l-sh.l)<=Math.max(6,sh.l*.7);};
  const shapeLoose=x=>{const p=_shape(x.a);return p.d===sh.d&&Math.abs(p.c-sh.c)<=1&&Math.abs(p.l-sh.l)<=Math.max(10,sh.l);};
  const rel=x=>_ov(t.q,x.q)*3+_ov(qt,_tail(x.q))*2;
  const same=x=>x.ch===t.ch, near=x=>Math.abs(x.ch-t.ch)<=2;
  const tiers=[
    x=>shapeOK(x)&&rel(x)>=.55,
    x=>shapeOK(x)&&rel(x)>=.25,
    x=>shapeOK(x)&&same(x),
    x=>shapeLoose(x)&&same(x),
    x=>shapeOK(x)&&near(x),
    x=>shapeLoose(x)&&near(x),
    x=>shapeOK(x),
    x=>shapeLoose(x),
    x=>Math.abs(x.a.length-sh.l)<=Math.max(14,sh.l*1.6),
    ()=>true];
  const seg=v=>v.split(/ \/ |, /)[0].trim();
  const leak=v=>{const a1=seg(t.a),a2=seg(v);
    return (a1.length>=2&&v.indexOf(a1)>=0)||(a2.length>=2&&t.a.indexOf(a2)>=0);};
  const seen=new Set([t.a]),out=[];
  for(const f of tiers){
    const c=pool.filter(x=>x.id!==t.id&&!seen.has(x.a)&&!leak(x.a)&&f(x))
      .map(x=>({a:x.a,s:rel(x)+(x.ch===t.ch?.9:0)+(Math.abs(x.ch-t.ch)<=3?.4:0)
        -Math.abs(x.a.length-sh.l)/60+Math.random()*.25}))
      .sort((p,q)=>q.s-p.s);
    for(const x of c){if(out.length>=n)break;if(seen.has(x.a))continue;
      if(out.concat(t.a).some(y=>_ov(y,x.a)>.6&&_ov(x.a,y)>.6))continue;
      seen.add(x.a);out.push(x.a);}
    if(out.length>=n)break;
  }
  return out;
}
const MCQPOOL=()=>CARDS.filter(MCQOK);
function mcqOptions(c){return shuffle([c.a].concat(pickDistractors(c,MCQPOOL(),3)));}
function blankOptions(b){return shuffle([b.a].concat(pickDistractors(b,BLANKS,3)));}

let _tt=null;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");
  clearTimeout(_tt);_tt=setTimeout(()=>t.classList.remove("show"),2200);}

/* ═══ 홈 ═══ */
function renderHome(){
  document.documentElement.dataset.fs=ST.fs;
  $("#pLvl").textContent="난이도 "+({all:"전체",basic:"기본",adv:"심화"})[ST.lvl||"all"];
  $("#pLvl").classList.toggle("on",(ST.lvl||"all")!=="all");
  $("#pFs").textContent="글자 "+({s:"작게",m:"보통",l:"크게",xl:"아주 크게"})[ST.fs];
  $("#pDday").value=ST.dday||"";
  $("#pDday").onchange=e=>{ST.dday=(e.target.value||"").trim();save();renderHome();};
  const dt=$("#ddayTag");dt.style.display=ST.dday?"":"none";dt.textContent=ddayText();
  dt.classList.toggle("on",!!ST.dday);
  const mp=memRate();$("#mastPct").textContent=mp+"%";
  $("#ringArc").setAttribute("stroke-dashoffset",(169.6*(1-mp/100)).toFixed(1));

  const d=dueList().length;
  $("#dueTitle").textContent=d?`오늘 복습할 카드 ${d}장`:"오늘 복습할 카드 없음";
  $("#dueSub").textContent=d?"잊어버릴 때쯤 다시 나오는 카드입니다":"카드를 풀면 복습 일정이 잡힙니다";
  $("#btnDue").disabled=!d;

  const wk=weakChapters();
  $("#weakBox").innerHTML=wk.length?`<div class="weak"><b>지금 약한 강</b>
    정답률이 낮거나 자주 틀린 강입니다. 눌러서 바로 풀 수 있습니다.
    <div class="wch">${wk.map(w=>`<button data-weak="${w.ch}">${String(w.ch).padStart(2,"0")}강 ${LEC[w.ch].split(" · ").pop()}</button>`).join("")}</div></div>`:"";

  $("#modes").innerHTML=MODES.map(m=>`<button class="mode ${ST.mode===m.k?'on':''}" data-mode="${m.k}"><b>${m.n}</b><span>${m.d}</span></button>`).join("");

  $("#lecList").innerHTML=ERAS.map(e=>{
    const all=e.ch.every(c=>ST.sel.includes(c));
    return `<div class="era"><div class="era-h"><h3>${e.name}</h3><em>${e.sub}</em>
      <button data-era="${e.ch.join(',')}">${all?"모두 해제":"모두 선택"}</button></div>
      ${e.ch.map(c=>{const s=chStat(c);return `<button class="lec ${ST.sel.includes(c)?'on':''}" data-ch="${c}">
        <span class="box">✓</span><span class="no">${String(c).padStart(2,"0")}</span>
        <span class="nm">${LEC[c]}</span><span class="gauge"><i style="width:${s.pct}%"></i></span>
        <span class="cnt">${s.done}/${s.total}</span></button>`}).join("")}</div>`;
  }).join("");

  renderStats();
  $("#cntWrong").textContent=wrongCards().length;
  $("#cntStar").textContent=starCards().length;
  const n=build(ST.mode,ST.sel).length;
  $("#btnStart").disabled=!ST.sel.length||!n;
  $("#startSub").textContent=!ST.sel.length?"강을 하나 이상 선택하세요":
    n?`${ST.sel.length}개 강 · 문항 ${n}개`:"이 방식으로 풀 문항이 선택한 강에 없습니다";
}
function ddayText(){
  if(!ST.dday)return "시험일 설정";
  const t=Math.ceil((new Date(ST.dday+"T00:00:00")-new Date())/864e5);
  return t>0?`시험까지 D-${t}`:t===0?"시험 당일":"시험일 지남";
}
function renderStats(){
  const days=[];for(let i=13;i>=0;i--)days.push(today()-i);
  const vals=days.map(d=>ST.log[dstr(d)]||0);
  const max=Math.max(10,...vals);
  const total=Object.values(ST.log).reduce((a,b)=>a+b,0);
  $("#statBox").innerHTML=`
    <div class="statrow">
      <div><b>${streak()}</b><span>연속 학습일</span></div>
      <div><b>${vals[13]}</b><span>오늘 푼 문항</span></div>
      <div><b>${total}</b><span>누적 문항</span></div>
    </div>
    <div class="bars">${vals.map(v=>`<i class="${v?'':'zero'}" style="height:${Math.max(3,v/max*100)}%" title="${v}문항"></i>`).join("")}</div>
    <div class="barlab"><span>2주 전</span><span>오늘</span></div>`;
}
document.addEventListener("click",e=>{
  const m=e.target.closest("[data-mode]");if(m){ST.mode=m.dataset.mode;save();renderHome();return;}
  const l=e.target.closest("[data-ch]");
  if(l){const c=+l.dataset.ch;ST.sel=ST.sel.includes(c)?ST.sel.filter(x=>x!==c):ST.sel.concat(c);save();renderHome();return;}
  const er=e.target.closest("[data-era]");
  if(er){const chs=er.dataset.era.split(",").map(Number),all=chs.every(c=>ST.sel.includes(c));
    ST.sel=all?ST.sel.filter(c=>!chs.includes(c)):[...new Set(ST.sel.concat(chs))];save();renderHome();return;}
  const w=e.target.closest("[data-weak]");
  if(w){const ch=+w.dataset.weak;
    const items=shuffle([].concat(build("flash",[ch]),build("ox",[ch]),build("blank",[ch]),build("cmp",[ch])));
    startSession("mix",items,`${String(ch).padStart(2,"0")}강 집중`);return;}
  const t=e.target.closest("[data-tool]");
  if(t){
    const deck=t.dataset.tool==="wrong"?wrongCards():starCards();
    if(!deck.length){toast(t.dataset.tool==="wrong"?"틀린 카드가 아직 없습니다":"별표한 카드가 없습니다");return;}
    startSession("mix",shuffle(deck.map(c=>({type:"flash",d:c}))),t.dataset.tool==="wrong"?"오답 노트":"별표 카드");
  }
});
$("#pLvl").onclick=()=>{const o=["all","basic","adv"];ST.lvl=o[(o.indexOf(ST.lvl||"all")+1)%3];save();renderHome();};
$("#pFs").onclick=()=>{const o=["s","m","l","xl"];ST.fs=o[(o.indexOf(ST.fs)+1)%4];save();renderHome();};
let _rArm=false,_rT=null;
function paintReset(){const b=$("#btnReset");if(!b)return;
  b.innerHTML=_rArm?'<b>!</b><span>한 번 더 누르면 삭제</span>':'<b>↺</b><span>기록 초기화</span>';
  b.classList.toggle("armed",_rArm);}
$("#btnReset").onclick=()=>{
  if(!_rArm){_rArm=true;paintReset();clearTimeout(_rT);_rT=setTimeout(()=>{_rArm=false;paintReset();},4000);return;}
  clearTimeout(_rT);_rArm=false;ST.p={};ST.log={};save();renderHome();paintReset();toast("학습 기록을 지웠습니다");
};
$("#btnDue").onclick=()=>{const d=dueList();if(d.length)startSession("mix",shuffle(d.map(c=>({type:"flash",d:c}))),"오늘의 복습");};
$("#btnStart").onclick=()=>startSession(ST.mode,shuffle(build(ST.mode,ST.sel)),null,ST.sel);
$("#btnExam").onclick=()=>{
  const chs=ST.sel.length?ST.sel:Array.from({length:40},(_,i)=>i+1);
  const lv=ST.lvl||"all";
  const basic=["mcq","ox","blank","cmp","whois","pic"], adv=["neg","combo","chrono","src","seq","pic"];
  const use=lv==="basic"?basic:lv==="adv"?adv:basic.concat(adv);
  let pool=[];use.forEach(m=>{pool=pool.concat(build(m,chs));});
  if(pool.length<10){toast("문항이 부족합니다. 범위를 넓혀 주세요");return;}
  startSession("exam",shuffle(pool).slice(0,50),"실전 모의고사"+({basic:" · 기본",adv:" · 심화"}[ST.lvl]||""),chs);
};

/* ═══ 세션 ═══ */
let S=null,tick=null;
function show(id){["home","study","result"].forEach(x=>$("#"+x).classList.toggle("hidden",x!==id));
  $("#actbar").classList.toggle("hidden",id!=="study");window.scrollTo(0,0);}
function startSession(mode,items,label,chs){
  clearInterval(tick);
  S={mode,items,i:0,label,ok:0,soft:0,bad:0,miss:[],exam:mode==="exam",left:0,byCh:{},chs:chs||ST.sel};
  if(S.exam){S.left=50*60;$("#timer").classList.remove("hidden");
    tick=setInterval(()=>{S.left--;paintTimer();if(S.left<=0)finish();},1000);paintTimer();}
  else $("#timer").classList.add("hidden");
  show("study");step();
}
function paintTimer(){const m=Math.max(0,S.left);$("#timer").textContent=`${String(Math.floor(m/60)).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`;
  $("#timer").classList.toggle("warn",m<300);}
let _xArm=false,_xT=null;
$("#btnExit").onclick=()=>{
  if(S&&S.exam&&!_xArm){_xArm=true;toast("한 번 더 누르면 채점 없이 나갑니다");
    clearTimeout(_xT);_xT=setTimeout(()=>_xArm=false,3000);return;}
  _xArm=false;clearInterval(tick);clearTimeout(_xT);S=null;renderHome();show("home");};
$("#btnStar").onclick=()=>{const it=S&&S.items[S.i];if(!it||it.type!=="flash")return;
  const r=rec(it.d.id);r.s=r.s?0:1;save();$("#btnStar").classList.toggle("on",!!r.s);};

function step(){
  if(!S)return;
  if(S.i>=S.items.length)return finish();
  const it=S.items[S.i],d=it.d;
  $("#meta").textContent=(S.label?S.label+" · ":"")+`${S.i+1} / ${S.items.length}`+(d.ch?` · ${String(d.ch).padStart(2,"0")}강`:"");
  $("#pbar").style.width=(S.i/S.items.length*100)+"%";
  $("#btnStar").classList.toggle("hidden",it.type!=="flash");
  if(it.type==="flash")$("#btnStar").classList.toggle("on",!!(ST.p[d.id]&&ST.p[d.id].s));
  $("#kbdHint").textContent="";
  ({flash:drawFlash,mcq:drawMcq,ox:drawOx,src:drawSrc,blank:drawBlank,cmp:drawCmp,seq:drawSeq,pic:drawPic,neg:drawNeg,combo:drawCombo,chrono:drawChrono,whois:drawWhois})[it.type](d);
}
function next(){S.i++;step();}
function acts(h){$("#acts").innerHTML=h;}
function tagline(ch){return `<div class="tag">${String(ch).padStart(2,"0")}강 · ${LEC[ch]}</div>`;}
function score(id,right,rec_){
  grade(id,right?2:0);
  const ch=rec_.ch;S.byCh[ch]=S.byCh[ch]||{n:0,o:0};S.byCh[ch].n++;if(right)S.byCh[ch].o++;
  if(right){S.ok++;buzz(12);}else{S.bad++;buzz([25,60,25]);}
}
function pushMiss(o){S.miss.push(o);}
function banner(right,ansText){
  return `<div class="result-banner ${right?'good':'bad'}"><span class="ic">${right?"✓":"✕"}</span>
    <span><b>${right?"정답입니다":"오답입니다"}</b>${ansText?`<small>${esc(ansText)}</small>`:""}</span></div>`;
}

/* 카드 넘기기 */
function drawFlash(c){
  $("#stage").innerHTML=`<div class="card">${tagline(c.ch)}
    <p class="q ${c.q.length>44?'sm':''}">${esc(c.q)}</p>
    <p class="hintline" id="hint">머릿속으로 답한 뒤 정답을 확인하세요</p>
    <div class="ansbox hidden" id="ansbox"><p class="a">${esc(c.a)}</p>${c.tip?`<p class="tip">${esc(c.tip)}</p>`:""}</div></div>`;
  acts(`<button class="act primary" id="flip">정답 확인</button>`);
  $("#kbdHint").textContent="카드를 누르면 정답이 나옵니다";
  let open=false;
  function reveal(){
    if(open)return;open=true;
    $("#ansbox").classList.remove("hidden");$("#hint").classList.add("hidden");
    acts(`<button class="act g1" data-g="0">모르겠음<small>다시 나옴</small></button>
          <button class="act g2" data-g="1">애매함<small>내일 다시</small></button>
          <button class="act g3" data-g="2">외웠음<small>나중에</small></button>`);
    $("#acts").querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>mark(+b.dataset.g));
  }
  function mark(g){
    grade(c.id,g);
    if(g===2)S.ok++;else if(g===1)S.soft++;else{S.bad++;pushMiss({q:c.q,a:c.a,tip:c.tip,ch:c.ch});}
    next();
  }
  $("#flip").onclick=reveal;
  $("#stage").querySelector(".card").onclick=reveal;
  S.gest={reveal,mark,open:()=>open};
}

/* 객관식 · 사료 · 빈칸 · 비교 공통 */
function choiceQuestion(o){
  // o: {ch, head(html), opts[], ans, tip, id, missQ, missSrc}
  $("#stage").innerHTML=o.head+`<div class="opts" id="opts">${o.opts.map((t,i)=>
    `<button class="opt" data-o="${i}"><span class="mk">${MARKS[i]}</span><span>${esc(t)}</span></button>`).join("")}</div><div id="vd"></div>`;
  acts(`<button class="act" id="skip">모르겠음</button>`);
  let done=false;
  function settle(right,pickIdx){
    done=true;
    $("#opts").querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;
      if(pickIdx===j)b.classList.add("picked");
      if(S.exam)return;
      if(o.opts[j]===o.ans)b.classList.add("right");else if(j===pickIdx)b.classList.add("wrong");});
    score(o.id,right,{ch:o.ch});
    if(!right)pushMiss({q:o.missQ,src:o.missSrc,a:o.ans,tip:o.tip,ch:o.ch});
    if(S.exam){next();return;}
    $("#vd").innerHTML=banner(right,right?"":"정답은 "+o.ans)+(o.tip?`<div class="verdict">${esc(o.tip)}</div>`:"")+(o.extra||"");
    acts(`<button class="act primary" id="nx">다음 문제</button>`);
    $("#nx").onclick=next;
  }
  $("#opts").querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(!done)settle(o.opts[+b.dataset.o]===o.ans,+b.dataset.o);});
  $("#skip").onclick=()=>{if(!done)settle(false,-1);};
  S.gest=null;
}
function drawMcq(c){
  choiceQuestion({ch:c.ch,id:c.id,ans:c.a,tip:c.tip,missQ:c.q,opts:mcqOptions(c),
    head:`<div class="card">${tagline(c.ch)}<p class="q ${c.q.length>44?'sm':''}">${esc(c.q)}</p></div>`});
}
function drawSrc(s){
  choiceQuestion({ch:s.ch,id:s.id,ans:s.a,tip:s.tip,missQ:s.q,missSrc:s.src,
    opts:shuffle([s.a].concat(s.w)),
    head:`<div class="card">${tagline(s.ch)}<div class="srcbox">${esc(s.src)}</div>
      <p class="q sm">${esc(s.q)}?</p></div>`});
}
function drawBlank(b){
  choiceQuestion({ch:b.ch,id:b.id,ans:b.a,tip:b.tip,missQ:b.q,opts:blankOptions(b),
    head:`<div class="card">${tagline(b.ch)}<p class="q sm">${esc(b.q).replace(/___/g,'<span class="blank"></span>')}</p></div>`});
}
function drawCmp(q){
  const t=q.tbl;
  choiceQuestion({ch:q.ch,id:q.id,ans:q.ans,tip:q.tip,missQ:`${t.title} — ${q.text}`,opts:shuffle([t.A,t.B]),
    extra:cmpTable(t),
    head:`<div class="card">${tagline(q.ch)}
      <p class="q sm">${esc(t.title)}<span class="qsub">${esc(q.key)} 항목에 해당하는 쪽은?</span></p>
      <div class="srcbox" style="margin:14px 0 0">${esc(q.text)}</div></div>`});
}
function cmpTable(t){
  return `<div class="cmptable"><div class="r h"><div></div><div>${esc(t.A)}</div><div>${esc(t.B)}</div></div>
    ${t.rows.map(r=>`<div class="r"><div class="k">${esc(r[0])}</div><div>${esc(r[1])}</div><div>${esc(r[2])}</div></div>`).join("")}</div>`;
}


/* ═══ 심화 유형 엔진 ═══ */
const KOR=["ㄱ","ㄴ","ㄷ","ㄹ"];
function foreignFact(x,n){
  const base=FACTOBJ.filter(y=>y.id!==x.id&&y.cat===x.cat&&y.facts.length);
  const kind=x.kind?base.filter(y=>y.kind===x.kind):[];
  const same=base.filter(y=>y.era===x.era);
  const near=base.filter(y=>Math.abs(y.ch-x.ch)<=2);
  const tiers=[kind.filter(y=>y.era===x.era),kind,same,near,base];
  const out=[],used=new Set(),owners=new Set();
  for(let round=0;round<2;round++){
    for(const pool of tiers){
      if(!pool.length)continue;
      for(let t=0;t<40&&out.length<n;t++){
        const y=pool[Math.floor(Math.random()*pool.length)];
        if(round===0&&owners.has(y.name))continue;
        const f=y.facts[Math.floor(Math.random()*y.facts.length)];
        if(x.facts.indexOf(f)>=0||used.has(f))continue;
        used.add(f);owners.add(y.name);out.push({f,owner:y.name});
      }
      if(out.length>=n)break;
    }
    if(out.length>=n)break;
  }
  return out;
}
const NOTPERSON=["선사","초기 국가","고대 제도",
 "고려 정치 기구","무신 정권 기구","고려 정치 세력","고려 외교","고려 경제","고려 사회",
 "고려 교육 기관","고려 불교 종파","고려 과학 기술",
 "조선 정치 세력","조선 중앙 기구","조선 지방 제도","조선 군사 제도","조선 관리 제도",
 "조선 교육 기관","조선 전기 경제","조선 전기 사회","조선 전기 외교","조선 전기 과학 기술",
 "조선 후기 정치","조선 후기 붕당","조선 후기 군사와 외교","조선 후기 경제","조선 후기 사회","조선 후기 문화",
 "개항기 정치","개항기 외세 침입","개항기 조약","개항기 개혁","개항기 단체","개항기 의병",
 "개항기 경제","개항기 근대 시설","개항기 교육과 언론","개항기 종교",
 "일제 식민 통치","일제 경제 수탈","1910년대 독립운동","3·1 운동과 임시 정부",
 "1920년대 무장 투쟁","1920년대 사회 운동","1930년대 이후 독립운동","민족 문화 수호",
 "광복 전후 정치","6·25 전쟁","이승만 정부","민주화 운동","현대 경제","통일 정책"];
function subjAsk(x){return NOTPERSON.indexOf(x.era)>=0||x.kind?"이것은 무엇일까요?":"이 인물은 누구일까요?";}
function fig(x,sm){return x&&x.svg?`<div class="figbox${sm?" sm":""}">${x.svg}</div>`:"";}
function drawPic(v){
  const isMap=g=>g.indexOf("지도")>=0;
  let pool=IMGS.filter(y=>y.id!==v.id&&y.group===v.group);
  if(pool.length<3)pool=IMGS.filter(y=>y.id!==v.id&&isMap(y.group)===isMap(v.group));
  if(pool.length<3)pool=IMGS.filter(y=>y.id!==v.id);
  const opts=shuffle([v.name].concat(shuffle(pool).slice(0,3).map(y=>y.name)));
  choiceQuestion({ch:v.ch,id:v.id+":g",ans:v.name,opts,missQ:v.ask,tip:v.tip,
    head:`<div class="card">${tagline(v.ch)}<div class="figbox">${v.svg}</div><p class="q sm">${esc(v.ask)}</p></div>`});
}
function drawNeg(x){
  const bad=foreignFact(x,1)[0];
  if(!bad){next();return;}
  const good=shuffle(x.facts).slice(0,3);
  choiceQuestion({ch:x.ch,id:x.id+":n",ans:bad.f,opts:shuffle(good.concat(bad.f)),
    missQ:`${x.name}에 대한 설명으로 옳지 않은 것`,
    tip:`이 설명은 ${bad.owner}에 해당한다.`,
    head:`<div class="card">${tagline(x.ch)}${fig(x,1)}<p class="q sm">다음 중 ${esc(x.name)}에 대한 설명으로 <span style="color:var(--no)">옳지 않은</span> 것은?</p></div>`});
}
function drawCombo(x){
  const bad=foreignFact(x,2);
  if(bad.length<2){drawNeg(x);return;}
  const good=shuffle(x.facts).slice(0,2);
  const rows=shuffle(good.map(f=>({f,ok:1})).concat(bad.map(b=>({f:b.f,ok:0,owner:b.owner}))));
  const right=rows.map((r,i)=>r.ok?KOR[i]:null).filter(Boolean).join(", ");
  const pairs=[];
  for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)pairs.push(KOR[i]+", "+KOR[j]);
  const opts=shuffle([right].concat(shuffle(pairs.filter(p=>p!==right)).slice(0,3)));
  const why=rows.map((r,i)=>r.ok?null:`${KOR[i]}은 ${r.owner}에 해당한다.`).filter(Boolean).join(" ");
  choiceQuestion({ch:x.ch,id:x.id+":c",ans:right,opts,
    missQ:`${x.name}에 대한 설명으로 옳은 것만 고른 것`,tip:why,
    head:`<div class="card">${tagline(x.ch)}${fig(x,1)}<p class="q sm">${esc(x.name)}에 대한 설명으로 옳은 것만을 고른 것은?</p>
      <div class="stmts">${rows.map((r,i)=>`<div class="stmt"><b>${KOR[i]}</b><span>${esc(r.f)}</span></div>`).join("")}</div></div>`});
}
function drawChrono(t){
  const chs=S.chs||[...new Set(EVT.map(e=>e.ch))];
  let pool=EVT.filter(e=>chs.indexOf(e.ch)>=0&&e.id!==t.id&&e.year!==t.year);
  if(pool.length<6)pool=EVT.filter(e=>e.id!==t.id&&e.year!==t.year);
  const S2=pool.slice().sort((a,b)=>a.year-b.year);
  let p=0;while(p<S2.length&&S2[p].year<t.year)p++;
  if(p<1||p>S2.length-1){next();return;}
  let st=Math.min(Math.max(p-2,0),S2.length-5);
  const an=S2.slice(st,st+5);
  const k=an.filter(a=>a.year<t.year).length;
  if(k<1||k>4){next();return;}
  const ansLab=["(가)","(나)","(다)","(라)"][k-1];
  let tl="";
  an.forEach((a,i)=>{tl+=`<div class="ev">${esc(a.name)}</div>`;
    if(i<4)tl+=`<div class="sl">${["(가)","(나)","(다)","(라)"][i]}</div>`;});
  const yr=v=>v<0?`기원전 ${-v}년`:`${v}년`;
  choiceQuestion({ch:t.ch,id:t.id+":t",ans:ansLab,opts:["(가)","(나)","(다)","(라)"],
    missQ:`${t.name}이(가) 들어갈 시기`,
    tip:`${t.name}은 ${yr(t.year)}의 일이다. 앞은 ${an[k-1].name}(${yr(an[k-1].year)}), 뒤는 ${an[k].name}(${yr(an[k].year)})이다.`,
    head:`<div class="card">${tagline(t.ch)}<p class="q sm">${esc(t.name)}<span class="qsub">이 사건이 들어갈 시기로 옳은 것은?</span></p>
      <div class="tl">${tl}</div></div>`});
}
function drawWhois(x){
  const hints=[x.hint].concat(shuffle(x.facts).slice(0,3));
  let shown=1,done=false;
  let pool=SUBJ.filter(y=>y.id!==x.id&&y.era===x.era);
  if(pool.length<3)pool=SUBJ.filter(y=>y.id!==x.id&&Math.abs(y.ch-x.ch)<=3);
  if(pool.length<3)pool=SUBJ.filter(y=>y.id!==x.id);
  const opts=shuffle([x.name].concat(shuffle(pool).slice(0,3).map(y=>y.name)));
  const paint=()=>{
    $("#stage").innerHTML=`<div class="card">${tagline(x.ch)}
      <p class="q sm">${subjAsk(x)}<span class="qsub">힌트를 보고 답을 고르세요</span></p>
      <div class="hintlist">${hints.slice(0,shown).map((h,i)=>`<div class="hintitem"><i>힌트 ${i+1}</i>${esc(h)}</div>`).join("")}</div></div>
      <div class="opts" id="opts">${opts.map((o,i)=>`<button class="opt" data-o="${i}"><span class="mk">${MARKS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div><div id="vd"></div>`;
    $("#opts").querySelectorAll(".opt").forEach(b=>b.onclick=()=>pick(+b.dataset.o));
    acts(shown<hints.length?`<button class="act" id="more">힌트 더 보기 (${shown}/${hints.length})</button>`:`<button class="act" id="more" disabled>힌트를 모두 봤습니다</button>`);
    if($("#more"))$("#more").onclick=()=>{if(shown<hints.length){shown++;paint();}};
  };
  function pick(i){
    if(done)return;done=true;
    const right=opts[i]===x.name;
    $("#opts").querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;
      if(S.exam)return;
      if(opts[j]===x.name)b.classList.add("right");else if(j===i)b.classList.add("wrong");});
    score(x.id+":w",right,{ch:x.ch});
    if(!right)pushMiss({q:`힌트로 맞히기 — ${x.name}`,a:x.name,tip:hints.join(" / "),ch:x.ch});
    if(S.exam){next();return;}
    $("#vd").innerHTML=banner(right,right?`힌트 ${shown}개로 맞혔습니다`:"정답은 "+x.name)
      +`<div class="verdict">${hints.map((h,n)=>`${n+1}. ${esc(h)}`).join("<br>")}</div>`;
    acts(`<button class="act primary" id="nx">다음 문제</button>`);
    $("#nx").onclick=next;
  }
  paint();S.gest=null;
}

/* O X */
function drawOx(o){
  $("#stage").innerHTML=`<div class="card">${tagline(o.ch)}<p class="q ${o.q.length>44?'sm':''}">${esc(o.q)}</p></div>
    <div class="oxrow"><button class="oxbtn" data-v="1">O<span class="badge">맞다</span></button>
    <button class="oxbtn" data-v="0">X<span class="badge">틀리다</span></button></div><div id="vd"></div>`;
  acts(`<button class="act" id="skip">모르겠음</button>`);
  let done=false;
  function settle(v){
    done=true;
    const right=v!==null&&v===o.ans;
    $("#stage").querySelectorAll(".oxbtn").forEach(b=>{
      const bv=b.dataset.v==="1";b.disabled=true;
      if(S.exam)return;
      if(bv===o.ans){b.classList.add("answer");b.querySelector(".badge").textContent="정답";}
      else if(bv===v){b.classList.add("mine-wrong");b.querySelector(".badge").textContent="내가 고른 답";}
    });
    score(o.id,right,{ch:o.ch});
    if(!right)pushMiss({q:o.q,a:"정답은 "+(o.ans?"O":"X"),tip:o.tip,ch:o.ch});
    if(S.exam){next();return;}
    $("#vd").innerHTML=banner(right,right?"":`이 문장은 ${o.ans?"맞는":"틀린"} 설명입니다`)
      +(o.tip?`<div class="verdict">${esc(o.tip)}</div>`:"");
    acts(`<button class="act primary" id="nx">다음 문제</button>`);
    $("#nx").onclick=next;
  }
  $("#stage").querySelectorAll(".oxbtn").forEach(b=>b.onclick=()=>{if(!done)settle(b.dataset.v==="1");});
  $("#skip").onclick=()=>{if(!done)settle(null);};
  S.gest=null;
}

/* 순서 배열 */
function drawSeq(q){
  const n=q.items.length;let slots=new Array(n).fill(null);
  const pool=shuffle(q.items.map((t,i)=>({t,i})));
  $("#stage").innerHTML=`<div class="card">${tagline(q.ch)}
    <p class="q sm">${esc(q.title)}<span class="qsub">아래 항목을 일어난 순서대로 놓으세요</span></p>
    <div class="seq-slots" id="slots"></div></div><div class="pool" id="pool"></div><div id="vd"></div>`;
  const draw=()=>{
    $("#slots").innerHTML=slots.map((s,i)=>`<div class="slot ${s?'filled':''}" data-s="${i}"><span class="n">${i+1}</span><span>${s?esc(s.t):"&nbsp;"}</span></div>`).join("");
    $("#pool").innerHTML=pool.map((p,i)=>`<button class="chip" data-p="${i}" ${slots.some(s=>s&&s.i===p.i)?"disabled":""}>${esc(p.t)}</button>`).join("");
    $("#pool").querySelectorAll(".chip").forEach(b=>b.onclick=()=>{const k=slots.indexOf(null);if(k<0)return;slots[k]=pool[+b.dataset.p];draw();});
    $("#slots").querySelectorAll(".slot").forEach(b=>b.onclick=()=>{const i=+b.dataset.s;if(!slots[i])return;
      slots[i]=null;slots=slots.filter(Boolean).concat(new Array(n).fill(null)).slice(0,n);draw();});
    if($("#chk"))$("#chk").disabled=!slots.every(Boolean);
  };
  draw();acts(`<button class="act primary" id="chk" disabled>순서 확인</button>`);
  draw();
  $("#chk").onclick=()=>{
    let right=true;
    $("#slots").querySelectorAll(".slot").forEach((el,i)=>{const ok=slots[i].t===q.items[i];if(!ok)right=false;
      el.classList.add(ok?"ok":"bad");el.onclick=null;});
    $("#pool").innerHTML="";
    score(q.id,right,{ch:q.ch});
    if(!right)pushMiss({q:q.title,a:q.items.map((t,i)=>`${i+1}. ${t}`).join(" / "),tip:"",ch:q.ch});
    $("#vd").innerHTML=banner(right,"")+(right?"":`<div class="verdict"><b>바른 순서</b><br>${q.items.map((t,i)=>`${i+1}. ${esc(t)}`).join("<br>")}</div>`);
    acts(`<button class="act primary" id="nx">다음 문제</button>`);
    $("#nx").onclick=next;
  };
  S.gest=null;
}

/* ═══ 결과 ═══ */
function examGrade(p){
  if(p>=80)return "심화 1급 수준";
  if(p>=70)return "심화 2급 수준";
  if(p>=60)return "심화 3급 수준";
  if(p>=50)return "기본 5급 수준";
  return "조금 더 다져야 할 단계";
}
function finish(){
  clearInterval(tick);
  const total=S.items.length,graded=S.ok+S.soft+S.bad;
  const flashOnly=S.items.every(x=>x.type==="flash");
  const pct=Math.round((flashOnly?(S.ok+S.soft*0.5):S.ok)/(graded||total)*100);
  const chRows=Object.keys(S.byCh).sort((a,b)=>a-b).map(ch=>{
    const v=S.byCh[ch];return{ch:+ch,pct:Math.round(v.o/v.n*100),n:v.n};}).sort((a,b)=>a.pct-b.pct);
  $("#result").innerHTML=`
    <div class="result"><div class="score">${pct}<span>%</span></div>
      ${S.exam?`<div class="gradebadge">${examGrade(pct)}</div>`:""}
      <p>${flashOnly?`외웠음 ${S.ok} · 애매함 ${S.soft} · 모르겠음 ${S.bad}`:`${graded}문제 중 ${S.ok}문제 정답`}</p>
      ${S.exam&&S.left<=0?`<p>제한 시간이 끝나 자동으로 채점했습니다</p>`:""}</div>
    ${chRows.length>1?`<h2 class="sec-h">강별 정답률</h2><div class="chchart">${chRows.map(r=>
      `<div class="cr"><span class="lb">${String(r.ch).padStart(2,"0")}강 · ${r.n}문항</span>
       <span class="bg"><i style="width:${r.pct}%"></i></span><span>${r.pct}%</span></div>`).join("")}</div>`:""}
    ${S.miss.length?`<h2 class="sec-h">다시 볼 문항 ${S.miss.length}개</h2><div class="reviewlist">${S.miss.map(m=>
      `<div class="ritem">${m.src?`<p class="rsrc">${esc(m.src)}</p>`:""}
       <p class="rq">${esc(m.q)}</p><div class="ra">${esc(m.a)}</div>
       ${m.tip?`<div class="rt">${esc(m.tip)}</div>`:""}</div>`).join("")}</div>`
      :`<p class="empty">틀린 문항이 없습니다.<br>다음 복습 때 다시 확인해 보세요.</p>`}
    <div class="stack">
      ${S.miss.length?`<button class="primary" id="again">틀린 문항만 다시 풀기</button>`:""}
      <button id="redo">같은 범위 다시 풀기</button>
      <button id="home2">범위 다시 고르기</button></div>`;
  show("result");
  const src=S.items.slice(),mode=S.mode,label=S.label;
  const missKeys=new Set(S.miss.map(m=>m.q));
  if($("#again"))$("#again").onclick=()=>startSession(mode==="exam"?"mix":mode,
    shuffle(src.filter(x=>missKeys.has(x.d.q||x.d.title||""))),"오답 다시 풀기");
  $("#redo").onclick=()=>startSession(mode,shuffle(src),label);
  $("#home2").onclick=()=>{S=null;renderHome();show("home");};
}

/* ═══ 단축키 ═══ */
document.addEventListener("keydown",e=>{
  if($("#study").classList.contains("hidden")||!S)return;
  const k=e.key.toLowerCase();
  if($("#nx")&&(k==="enter"||k===" ")){e.preventDefault();$("#nx").click();return;}
  if(S.gest){
    if(k===" "||k==="enter"){e.preventDefault();S.gest.open()?null:S.gest.reveal();return;}
    if(["1","2","3"].includes(k)&&S.gest.open()){S.gest.mark(+k-1);return;}
  }
  const opts=$("#opts");
  if(opts&&["1","2","3","4"].includes(k)){const b=opts.querySelectorAll(".opt")[+k-1];b&&b.click();}
  const ox=$("#stage").querySelectorAll(".oxbtn");
  if(ox.length){if(k==="o")ox[0].click();if(k==="x")ox[1].click();}
});

/* ═══ 시작 ═══ */
(async function(){
  await load();
  if(!ST.sel||!ST.sel.length)ST.sel=[1,2,3];
  renderHome();paintReset();
})();
