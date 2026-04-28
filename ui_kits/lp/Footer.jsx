// Contact + Footer
const Contact = () => {
  return (
    <section id="contact" style={{padding:'128px 0', position:'relative', borderBottom:'1px solid var(--border-faint)'}}>
      <div className="wrap" style={{textAlign:'center', maxWidth: 800, margin:'0 auto'}}>
        <div className="section-num" style={{justifyContent:'center'}}>06 / TEGAMI <b>手紙を書く</b></div>
        <h2 style={{
          fontFamily:'var(--font-mincho)', fontWeight: 700,
          fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.1, letterSpacing:'0.06em',
          color:'var(--fg)', margin: '0 0 32px 0',
        }}>
          扉を、<br/>
          <span style={{color:'var(--shu-300)'}}>あけて</span>ください。
        </h2>
        <p style={{
          fontFamily:'var(--font-mincho)', fontSize: 19, lineHeight: 1.95,
          color:'var(--paper-100)', maxWidth: 520, margin: '0 auto 56px',
        }}>
          名前を書かなくてもいい。<br/>
          ただ、来てくれたらそれでいい。
        </p>
        <div style={{
          display:'inline-flex', flexDirection:'column', gap: 24,
          padding: '44px 56px',
          border: '1px solid var(--border-faint)',
          background: 'rgba(244,237,224,0.02)',
        }}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap: 24}}>
            <img src="../../assets/icons/pin.svg" style={{width:18, height:18, opacity:0.6}}/>
            <div style={{
              fontFamily:'var(--font-mincho)', fontSize: 22, color:'var(--fg)', letterSpacing:'0.08em',
            }}>人文学部棟 3F 308号室</div>
          </div>
          <div style={{
            fontFamily:'var(--font-pixel)', fontSize: 18,
            color:'var(--gold-soft)', letterSpacing:'0.08em',
          }}>2026.04.12 — 04.20</div>
          <div style={{
            display:'flex', gap: 16, justifyContent:'center', marginTop: 8,
          }}>
            <a href="#schedule" className="btn btn-primary">扉を開ける <span className="arr">→</span></a>
            <a href="mailto:yowa@example.ac.jp" className="btn btn-ghost">手紙を書く</a>
          </div>
        </div>
      </div>
    </section>
  );
};
window.Contact = Contact;

const Footer = () => {
  return (
    <footer style={{padding:'56px 0 80px', position:'relative'}}>
      <div className="wrap" style={{
        display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap: 32,
        flexWrap:'wrap',
      }}>
        <div>
          <div style={{
            fontFamily:'var(--font-mincho)', fontWeight: 700, fontSize: 32,
            letterSpacing:'0.12em', color:'var(--fg)',
          }}>夜半</div>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize: 10,
            color:'var(--fg-faint)', letterSpacing:'0.4em', marginTop: 10,
          }}>YOWA · MIDNIGHT CIRCLE · EST. 1998</div>
        </div>
        <div style={{display:'flex', gap: 40, fontFamily:'var(--font-gothic)', fontSize: 12, color:'var(--paper-300)', letterSpacing:'0.16em'}}>
          <a href="#" style={{color:'inherit'}}>X / 旧Twitter</a>
          <a href="#" style={{color:'inherit'}}>Instagram</a>
          <a href="#" style={{color:'inherit'}}>部誌アーカイブ</a>
        </div>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.24em',
          color:'var(--fg-faint)',
        }}>
          © 2026 YOWA · ALL NIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
