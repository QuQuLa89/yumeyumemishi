// About.jsx — what the circle does
const About = () => {
  return (
    <section id="about" style={{padding:'128px 0', position:'relative'}}>
      <div className="wrap" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 96, alignItems:'start'}}>
        <div>
          <div className="section-num">02 / BUSHITSU <b>部室について</b></div>
          <h2 style={{
            fontFamily:'var(--font-mincho)', fontWeight: 600,
            fontSize: 52, lineHeight: 1.2, letterSpacing:'0.06em',
            color:'var(--fg)', margin: '0 0 36px 0',
          }}>
            写真と、<br/>ことばと、<br/>夜のあかり。
          </h2>
          <p style={{
            fontFamily:'var(--font-gothic)', fontSize: 17, lineHeight: 1.95,
            color:'var(--fg-muted)', maxWidth: 460,
          }}>
            一九九八年のはじめ、人文学部棟の三階に一室を借りました。誰かが現像液を持ち込み、誰かが詩を書き、誰かがコーヒーを淹れて、それから二十八年が経ちました。
          </p>
          <p style={{
            fontFamily:'var(--font-gothic)', fontSize: 17, lineHeight: 1.95,
            color:'var(--fg-muted)', maxWidth: 460, marginTop: 24,
          }}>
            活動はゆるやかです。週に二度、夜に集まって、それぞれの作業をする。撮ってきたフィルムを現像する。書いてきた文章を見せ合う。コーヒーを飲む。なにもしない人もいる。
          </p>
          <div style={{
            marginTop: 40, padding: '20px 0',
            borderTop:'1px solid var(--border-faint)',
            borderBottom:'1px solid var(--border-faint)',
            display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }}>
            <div>
              <div style={{fontFamily:'var(--font-mono)', fontSize: 10, color:'var(--fg-faint)', letterSpacing:'0.24em', marginBottom: 8}}>EST.</div>
              <div style={{fontFamily:'var(--font-mincho)', fontSize: 22, color:'var(--fg)'}}>1998</div>
            </div>
            <div>
              <div style={{fontFamily:'var(--font-mono)', fontSize: 10, color:'var(--fg-faint)', letterSpacing:'0.24em', marginBottom: 8}}>居る人</div>
              <div style={{fontFamily:'var(--font-mincho)', fontSize: 22, color:'var(--fg)'}}>四十二名</div>
            </div>
            <div>
              <div style={{fontFamily:'var(--font-mono)', fontSize: 10, color:'var(--fg-faint)', letterSpacing:'0.24em', marginBottom: 8}}>あつまり</div>
              <div style={{fontFamily:'var(--font-mincho)', fontSize: 22, color:'var(--fg)'}}>火・金 19:00–</div>
            </div>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap: 18}}>
          <div className="film" style={{aspectRatio:'4/5', minHeight: 0}}>
            <div className="vignette"></div>
            <div className="scan"></div>
            [ 308号室 · 23:14 ]
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 18}}>
            <div className="film" style={{aspectRatio:'1/1'}}>
              <div className="vignette"></div>
              [ 暗室 ]
            </div>
            <div className="film" style={{aspectRatio:'1/1'}}>
              <div className="vignette"></div>
              [ 階段 · 4F ]
            </div>
          </div>
          <div style={{
            fontFamily:'var(--font-hand)', fontSize: 16,
            color:'var(--paper-200)', textAlign:'right',
            paddingTop: 4, lineHeight: 1.7,
          }}>
            写真：先輩のだれか / 2024年秋
          </div>
        </div>
      </div>
    </section>
  );
};
window.About = About;
