// FAQ.jsx — quiet accordion
const FAQS = [
  { q:'写真も文芸も、やったことがないのですが。', a:'なにもやったことがなくて構いません。むしろ、初めての人が来ると、こちらも初心を思い出します。道具も最初は貸せます。' },
  { q:'途中で抜けてもいいですか？', a:'いいです。来る・来ない、入る・抜ける、すべて自由です。在籍だけして年に二回顔を出す、という人もいます。' },
  { q:'部費はかかりますか？', a:'年間 三千円。暗室の薬品代、コーヒー豆代、部誌の印刷代に使います。学期途中入会の場合は半額。' },
  { q:'他のサークルと掛け持ちできますか？', a:'できます。掛け持ちの方が、むしろ多いです。' },
  { q:'夜の活動が中心とのことですが、朝には弱いです。', a:'こちらも朝には弱い。だから夜にやっています。' },
];

const Item = ({ faq, idx }) => {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <div style={{borderBottom:'1px solid var(--border-faint)'}}>
      <button onClick={() => setOpen(!open)} style={{
        width:'100%', textAlign:'left',
        background:'transparent', border:0, color:'var(--fg)',
        padding: '28px 0', cursor:'pointer',
        display:'flex', alignItems:'baseline', gap: 24,
        fontFamily:'inherit',
      }}>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize: 11,
          color:'var(--fg-faint)', letterSpacing:'0.32em', minWidth: 32,
        }}>{String(idx+1).padStart(2,'0')}</span>
        <span style={{
          fontFamily:'var(--font-mincho)', fontWeight: 600,
          fontSize: 21, color:'var(--fg)', letterSpacing:'0.06em',
          flex: 1, lineHeight: 1.5,
        }}>{faq.q}</span>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize: 18,
          color: open ? 'var(--shu-300)' : 'var(--paper-300)',
          transition:'transform 240ms', transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      <div style={{
        overflow:'hidden',
        maxHeight: open ? 200 : 0,
        transition:'max-height 320ms cubic-bezier(0.22,0.61,0.36,1)',
      }}>
        <div style={{
          padding: '0 56px 28px',
          fontFamily:'var(--font-gothic)', fontSize: 15,
          color:'var(--fg-muted)', lineHeight: 1.95, maxWidth: 720,
        }}>{faq.a}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" style={{padding:'128px 0', position:'relative'}}>
      <div className="wrap" style={{display:'grid', gridTemplateColumns:'320px 1fr', gap: 96}}>
        <div>
          <div className="section-num">05 / TOI <b>よくある問い</b></div>
          <h2 style={{
            fontFamily:'var(--font-mincho)', fontWeight: 600,
            fontSize: 40, lineHeight: 1.25, letterSpacing:'0.06em',
            color:'var(--fg)', margin: 0,
          }}>
            よく訊かれる<br/>ことについて。
          </h2>
          <p style={{
            fontFamily:'var(--font-gothic)', fontSize: 14, lineHeight: 1.9,
            color:'var(--fg-faint)', marginTop: 28, maxWidth: 280,
          }}>
            それでも答えが見つからない場合は、308号室の扉のポストに手紙を入れてください。
          </p>
        </div>
        <div style={{borderTop:'1px solid var(--border-faint)'}}>
          {FAQS.map((f, i) => <Item key={i} faq={f} idx={i}/>)}
        </div>
      </div>
    </section>
  );
};
window.FAQ = FAQ;
