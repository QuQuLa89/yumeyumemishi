// Header.jsx — sticky nav with 夜半 wordmark
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { num: '01', label: '序', href: '#hero' },
    { num: '02', label: '部室', href: '#about' },
    { num: '03', label: '新歓', href: '#schedule' },
    { num: '04', label: '居る人', href: '#members' },
    { num: '05', label: '手紙', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '14px 0',
      background: scrolled ? 'rgba(10,13,18,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-faint)' : '1px solid transparent',
      transition: 'all 240ms cubic-bezier(0.22,0.61,0.36,1)',
    }}>
      <div className="wrap" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <a href="#top" style={{
          fontFamily: 'var(--font-mincho)', fontWeight: 700,
          fontSize: 24, letterSpacing: '0.12em',
          color: 'var(--fg)', textDecoration: 'none',
        }}>夜半</a>
        <nav>
          <ul style={{listStyle:'none', display:'flex', gap: 28, padding:0, margin:0}}>
            {navItems.map(it => (
              <li key={it.num}>
                <a href={it.href} style={{
                  fontFamily: 'var(--font-gothic)', fontSize: 13,
                  color: 'var(--paper-200)', textDecoration: 'none',
                  letterSpacing: '0.16em',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9,
                    color: 'var(--fg-faint)', marginRight: 6,
                    letterSpacing: '0.16em',
                  }}>{it.num}</span>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize: 10,
          color: 'var(--gold-soft)', letterSpacing: '0.24em',
        }}>2026 SHINKAN</div>
      </div>
    </header>
  );
};
window.Header = Header;
