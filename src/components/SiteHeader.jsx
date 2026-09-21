function ZMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="14" y="14" width="72" height="13" rx="2" fill="#1a2a49" />
      <polygon points="72,27 86,27 28,73 14,73" fill="#1a2a49" />
      <rect x="14" y="73" width="72" height="13" rx="2" fill="#1a2a49" />
    </svg>
  );
}

function SiteHeader({ current = "home", onNav }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "scholarship", label: "Scholarship" },
    { id: "tournament", label: "Golf Tournament" },
    { id: "story", label: "Zach's Story" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    onNav && onNav(id);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }} style={{ gap: 14, alignItems: "center" }}>
        <ZMark size={38} />
        <div style={{ width: 1, height: 32, background: "rgba(26,42,73,0.15)" }} />
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: "0.01em", color: "#1a2a49", lineHeight: 1 }}>Loving Life</span>
          <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#1a2a49", opacity: 0.55, marginTop: 6, lineHeight: 1 }}>Foundation</span>
        </span>
      </a>
      <button className="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <nav className={"site-nav" + (mobileOpen ? " is-open" : "")}>
        {links.map((l) => (
          <a key={l.id} href="#" className={"site-nav__link" + (current === l.id ? " is-active" : "")} onClick={(e) => { e.preventDefault(); handleNavClick(l.id); }}>
            {l.label}
          </a>
        ))}
        <button className="btn btn--donate" onClick={() => handleNavClick("donate")}>Donate</button>
      </nav>
    </header>
  );
}

window.SiteHeader = SiteHeader;
