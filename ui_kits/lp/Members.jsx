// Members.jsx — quote cards
const QUOTES = [
  { name:'西垣 真依', role:'文学部 4年 / 部長', year:'2022 入会',
    body:'はじめはひとりでもいい場所がほしくて来ました。そのまま四年いる。' },
  { name:'橘 律', role:'工学部 3年', year:'2023 入会',
    body:'暗室で時間が止まる感じが、ここにしかない。フィルムを現像する音は、わりと祈りに近い。' },
  { name:'藤村 ふみ', role:'文化構想学部 2年', year:'2024 入会',
    body:'なにも話さなくてもいい雰囲気が、いちばんありがたかったです。' },
];

const Members = () => {
  return (
    <section id="members" style={{padding:'128px 0', position:'relative'}}>
      <div className="wrap">
        <div className="section-num">04 / IRU-HITO <b>居る人</b></div>
        <h2 style={{
          fontFamily:'var(--font-mincho)', fontWeight: 600,
          fontSize: 48, lineHeight: 1.2, letterSpacing:'0.06em',
          color:'var(--fg)', margin: '0 0 64px 0', maxWidth: 720,
        }}>
          すでに灯りを<br/>つけている人たち。
        </h2>
        <div style={{
          display:'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}>
          {QUOTES.map((q, i) => (
            <div key={i} style={{
              background:'var(--bg-elev)',
              border:'1px solid var(--border-faint)',
              boxShadow:'var(--inset-line-top)',
              padding: '28px 28px 32px',
              display:'flex', flexDirection:'column', gap: 24,
            }}>
              <div className="film" style={{aspectRatio:'1/1', width: '100%'}}>
                <div className="vignette"></div>
                <div className="scan"></div>
                [ portrait · {String(i+1).padStart(2,'0')} ]
              </div>
              <div style={{
                fontFamily:'var(--font-mincho)', fontSize: 16,
                lineHeight: 1.95, color:'var(--paper-50)',
                letterSpacing:'0.04em', minHeight: 100,
              }}>
                「{q.body}」
              </div>
              <div style={{borderTop:'1px solid var(--border-faint)', paddingTop: 16}}>
                <div style={{fontFamily:'var(--font-mincho)', fontSize: 17, color:'var(--fg)', letterSpacing:'0.08em'}}>{q.name}</div>
                <div style={{fontFamily:'var(--font-gothic)', fontSize: 12, color:'var(--fg-faint)', marginTop: 6, letterSpacing:'0.08em'}}>{q.role}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize: 10, color:'var(--gold-soft)', marginTop: 8, letterSpacing:'0.24em'}}>{q.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Members = Members;
