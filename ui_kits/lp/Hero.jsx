// Hero.jsx — full-bleed dark hero
const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: 140, paddingBottom: 96,
      position: 'relative', borderBottom: '1px solid var(--border-faint)',
    }}>
      {/* background film */}
      <div style={{
        position:'absolute', inset: 0, overflow:'hidden', zIndex: 0,
      }}>
        <div className="film" style={{position:'absolute', inset:0, background: 'linear-gradient(180deg, #1a1410 0%, #0a0d12 70%)'}}>
          <div className="vignette"></div>
          <div className="scan"></div>
        </div>
      </div>

      <div className="wrap" style={{position:'relative', zIndex: 2}}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.4em',
          color: 'var(--fg-faint)', marginBottom: 28, textTransform: 'uppercase',
        }}>
          YOWA · 2026 SPRING SHINKAN
        </div>

        <h1 style={{
          fontFamily: 'var(--font-mincho)', fontWeight: 700,
          fontSize: 'clamp(56px, 9vw, 128px)',
          lineHeight: 1.02, letterSpacing: '0.04em',
          color: 'var(--fg)', margin: 0, maxWidth: 880,
        }}>
          あたらしい<br/>ひと、<span style={{color:'var(--shu-300)'}}>来る。</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-mincho)', fontSize: 21,
          lineHeight: 1.9, color: 'var(--paper-100)',
          marginTop: 40, maxWidth: 560, fontWeight: 400,
          letterSpacing: '0.06em',
        }}>
          —深夜、誰もいない部室で、<br/>
          フィルムを巻き戻す音だけがしている。<br/>
          来てもいいし、来なくてもいい。<br/>
          ただ、灯りはつけておきます。
        </p>

        <div style={{
          display:'flex', alignItems:'center', gap: 36, marginTop: 56,
          flexWrap:'wrap',
        }}>
          <a href="#schedule" className="btn btn-primary">
            扉を開ける <span className="arr">→</span>
          </a>
          <a href="#about" className="btn btn-ghost">もうすこし読む</a>
        </div>

        <div style={{
          marginTop: 96, display:'flex', gap: 48,
          fontFamily:'var(--font-mono)', fontSize: 11,
          color: 'var(--fg-faint)', letterSpacing: '0.16em',
          textTransform:'uppercase',
        }}>
          <div>
            <div style={{color:'var(--gold-soft)', fontFamily:'var(--font-pixel)', fontSize: 22, letterSpacing:'0.06em', marginBottom: 6}}>
              04.12 — 04.20
            </div>
            <div>SEVEN DAYS · NIGHTS</div>
          </div>
          <div>
            <div style={{color:'var(--paper-100)', fontFamily:'var(--font-mincho)', fontSize: 22, marginBottom: 6, letterSpacing:'0.08em'}}>
              人文学部棟 308
            </div>
            <div>BUSHITSU · 3F</div>
          </div>
          <div>
            <div style={{color:'var(--paper-100)', fontFamily:'var(--font-mincho)', fontSize: 22, marginBottom: 6, letterSpacing:'0.08em'}}>
              四十二名
            </div>
            <div>EST. 1998 · 28 YRS</div>
          </div>
        </div>
      </div>

      {/* tategaki */}
      <div style={{
        position:'absolute', right: 32, top: 160, zIndex: 2,
        writingMode:'vertical-rl', textOrientation:'mixed',
        fontFamily:'var(--font-mincho)', fontSize: 16,
        letterSpacing:'0.5em', color: 'var(--paper-300)', opacity: 0.6,
      }}>
        新歓のしらせ・夜半
      </div>
    </section>
  );
};
window.Hero = Hero;
