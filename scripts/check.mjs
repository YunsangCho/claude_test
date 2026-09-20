// 빌드 결과를 검증한다.  사용법: node scripts/check.mjs
import fs from "node:fs";
const path = "dist/한국사-카드덱.html";
if (!fs.existsSync(path)) { console.error("먼저 python scripts/build.py 를 실행하세요"); process.exit(1); }
const js = fs.readFileSync(path, "utf8").split("<script>")[1].split("</script>")[0];

const el = { classList:{toggle(){},add(){},remove(){},contains:()=>true}, querySelectorAll:()=>[], querySelector:()=>null,
  style:{}, dataset:{}, setAttribute(){}, insertAdjacentHTML(){}, set innerHTML(v){}, set textContent(v){},
  set value(v){}, set onclick(v){}, set onchange(v){}, addEventListener(){}, contains:()=>false };
global.window = { storage:{ get:async()=>null, set:async()=>null } };
Object.defineProperty(globalThis,"navigator",{value:{},configurable:true});
global.document = { documentElement:{dataset:{}}, querySelector:()=>el, querySelectorAll:()=>[], addEventListener(){} };

const report = [];
const probe = `
const chs=[...Array(40)].map((_,i)=>i+1);
const dup=CARDS.map(c=>c.q).filter((q,i,a)=>a.indexOf(q)!==i);
// 어미와 문장 부호를 걷어 내고 견준다.  "실시했다" 와 "실시하였다" 는 같은 문항이다.
const _nm=s=>String(s).replace(/[.,\u00b7\u300c\u300d\u300e\u300f"'\s]/g,"")
  .replace(/(\ud558\uc600\ub2e4|\ud588\ub2e4|\uc774\ub2e4|\uc600\ub2e4|\ub41c\ub2e4|\ub418\uc5c8\ub2e4|\ud55c\ub2e4|\uc774\uc5c8\ub2e4)$/,"");
const _dupIn=(arr,f)=>{const seen=new Set(),out=[];arr.forEach(x=>{const k=_nm(f(x));
  if(seen.has(k))out.push(f(x));else seen.add(k);});return out;};
const dupOx=_dupIn(OXS,o=>o.q), dupBl=_dupIn(BLANKS,b=>b.q),
      dupSr=_dupIn(SRCS,s=>s.src), dupCm=_dupIn(CMPS,t=>t.ch+" "+t.title),
      dupSq=_dupIn(SEQS,s=>s.ch+" "+s.title);
const notip=CARDS.filter(c=>!c.tip);
const genModes=['neg','combo','chrono','whois','pic'];
const gen=genModes.reduce((t,m)=>t+build(m,chs).length,0);
const base=CARDS.length+OXS.length+SRCS.length+BLANKS.length+CMPQ.length+SEQS.length;
let badOpt=0; CARDS.filter(MCQOK).forEach(c=>{ if(new Set(mcqOptions(c)).size<4) badOpt++; });
let leak=0; CARDS.filter(MCQOK).forEach(c=>{ const s=c.a.split(/ \\/ |, /)[0];
  if(mcqOptions(c).filter(x=>x!==c.a).some(x=>x.indexOf(s)>=0)) leak++; });
const thin=[]; for(let ch=1;ch<=40;ch++){
  const n=[CARDS,OXS,SRCS,BLANKS,CMPQ,SEQS].reduce((s,A)=>s+A.filter(x=>x.ch===ch).length,0)
   + genModes.reduce((t,m)=>t+build(m,[ch]).length,0);
  if(n<60) thin.push(ch+"강("+n+")"); }
globalThis.__R = { cards:CARDS.length, base, gen, total:base+gen,
  dup:dup.length, dupList:dup.slice(0,5), notip:notip.length, notipList:notip.slice(0,5).map(c=>c.ch+"강 "+c.q),
  dupOther:dupOx.length+dupBl.length+dupSr.length+dupCm.length+dupSq.length,
  dupOtherList:[].concat(dupOx.map(x=>"OX "+x),dupBl.map(x=>"빈칸 "+x),dupSr.map(x=>"사료 "+x),
    dupCm.map(x=>"비교표 "+x),dupSq.map(x=>"순서 "+x)).slice(0,5).map(x=>x.slice(0,50)),
  badOpt, leak, subj:SUBJ.length, heri:HERI.length, evt:EVT.length, img:IMGS.length, thin };
`;
new Function(js + probe)();
const r = globalThis.__R;
const line = (ok, msg) => report.push((ok ? "  OK   " : "  실패 ") + msg);
line(r.dup === 0, `중복 카드 ${r.dup}${r.dup ? " → " + r.dupList.join(" / ") : ""}`);
line(r.dupOther === 0, `중복 OX·빈칸·사료·비교표·순서 ${r.dupOther}${r.dupOther ? " → " + r.dupOtherList.join(" / ") : ""}`);
line(r.notip === 0, `해설 없는 카드 ${r.notip}${r.notip ? " → " + r.notipList.join(" / ") : ""}`);
line(r.badOpt === 0, `객관식 보기 4개 미달 ${r.badOpt}`);
line(r.leak === 0, `정답이 노출된 보기 ${r.leak}`);
report.push((r.thin.length?"  경고 ":"  OK   ")+`문항 60개 미만인 강 ${r.thin.length}${r.thin.length ? " → " + r.thin.join(" ") : ""}`);
console.log(`카드 ${r.cards} / 고정 문항 ${r.base} / 생성 문항 ${r.gen} / 합계 ${r.total}`);
console.log(`구조화 데이터  주체 ${r.subj}  문화유산 ${r.heri}  사건 ${r.evt}  도식 ${r.img}`);
console.log(report.join("\n"));
process.exit(report.some(l => l.includes("실패")) ? 1 : 0);
