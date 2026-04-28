// Schedule.jsx — event list
const SCHEDULE = [
  { n:'01', date:'2026.04.12', dow:'TUE', time:'19:00 — 22:00', title:'部室開放、はじまり', place:'308号室', body:'珈琲と、すこしのおかし。来た順に座って、たぶん何も起きない。' },
  { n:'02', date:'2026.04.14', dow:'THU', time:'19:00 — 23:00', title:'文芸夜話', place:'308号室', body:'好きな一行を持ち寄る。読んでも、読まなくてもよい。' },
  { n:'03', date:'2026.04.16', dow:'SAT', time:'21:00 — 翌3:00', title:'深夜の暗室会', place:'地下暗室', body:'白黒フィルム持ち込み歓迎。現像液は用意してあります。' },
  { n:'04', date:'2026.04.18', dow:'MON', time:'19:00 — 22:00', title:'散歩・撮影', place:'集合 / 西門', body:'夜の構内を歩く。カメラがあれば、なくても。' },
  { n:'05', date:'2026.04.20', dow:'SUN', time:'17:00 — 22:00', title:'閉幕、入会のしるし', place:'308号室', body:'名簿に名前を書く。書かなくてもいい。' },
];

const EventRow = ({ ev }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display:'grid',
        gridTemplateColumns: '60px 200px 1fr 240px',
        gap: 24, alignItems: 'baseline',
        padding: '32px 8px',
        borderTop: '1px solid var(--border-faint)',
        transition: 'all 240ms cubic-bezier(0.22,0.61,0.36,1)',
        background: hover ? 'rgba(244,237,224,0.025)' : 'transparent',
        cursor: 'default',
      }}>
      <div style={{
        fontFamily:'var(--font-mono)', fontSize: 11,
        color: hover ? 'var(--shu-300)' : 'var(--fg-faint)',
        letterSpacing:'0.32em', transition:'color 240ms',
      }}>{ev.n}</div>
      <div>
        <div style={{
          fontFamily:'var(--font-pixel)', fontSize: 19,
          color: 'var(--gold-soft)', letterSpacing:'0.06em',
        }}>{ev.date}</div>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize: 10,
          color:'var(--fg-faint)', letterSpacing:'0.32em',
          marginTop: 6,
        }}>{ev.dow} · {ev.time}</div>
      </div>
      <div>
        <div style={{
          fontFamily:'var(--font-mincho)', fontWeight: 600,
          fontSize: 26, color:'var(--fg)', letterSpacing:'0.06em',
          marginBottom: 8,
        }}>{ev.title}</div>
        <div style={{
          fontFamily:'var(--font-gothic)', fontSize: 14,
          color:'var(--fg-muted)', lineHeight: 1.85, maxWidth: 520,
        }}>{ev.body}</div>
      </div>
      <div style={{
        fontFamily:'var(--font-mincho)', fontSize: 14,
        color:'var(--paper-200)', letterSpacing:'0.12em',
        textAlign:'right', display:'flex', alignItems:'center', gap: 8,
        justifyContent:'flex-end',
      }}>
        <img src="../../assets/icons/pin.svg" style={{width:14, height:14, opacity:0.6}}/>
        {ev.place}
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <section id="schedule" style={{padding:'128px 0', position:'relative'}}>
      <div className="wrap">
        <div className="section-num">03 / SHINKAN <b>新歓のしらせ</b></div>
        <h2 style={{
          fontFamily:'var(--font-mincho)', fontWeight: 600,
          fontSize: 56, lineHeight: 1.15,
          letterSpacing:'0.06em', color:'var(--fg)',
          margin: '0 0 24px 0', maxWidth: 800,
        }}>
          七日間。<br/>毎晩、灯りはついている。
        </h2>
        <p style={{
          fontFamily:'var(--font-gothic)', fontSize: 16, lineHeight: 1.9,
          color:'var(--fg-muted)', maxWidth: 560, marginBottom: 80,
        }}>
          予約はいりません。途中で帰ってかまいません。<br/>
          一日だけでも、全部の日でも、どちらでもよい。
        </p>
        <div style={{borderBottom: '1px solid var(--border-faint)'}}>
          {SCHEDULE.map(ev => <EventRow key={ev.n} ev={ev}/>)}
        </div>
      </div>
    </section>
  );
};
window.Schedule = Schedule;
