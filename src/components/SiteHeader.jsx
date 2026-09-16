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
  const links = [
    { id: "home", label: "Home" },
    { id: "scholarship", label: "Scholarship" },
    { id: "tournament", label: "Golf Tournament" },
    { id: "story", label: "Zach's Story" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav("home"); }} style={{ gap: 14, alignItems: "center" }}>
        <ZMark size={38} />
        <div style={{ width: 1, height: 32, background: "rgba(26,42,73,0.15)" }} />
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: 17, textTransform: "uppercase", letterSpacing: "0.01em", color: "#1a2a49", lineHeight: 1 }}>Loving Life</span>
          <span style={{ fontFamily: "Oswald, sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#1a2a49", opacity: 0.55, marginTop: 6, lineHeight: 1 }}>Foundation</span>
        </span>
      </a>
      <nav className="site-nav">
        {links.map((l) => (
          <a key={l.id} href="#" className={"site-nav__link" + (current === l.id ? " is-active" : "")} onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}>
            {l.label}
          </a>
        ))}
        <button className="btn btn--donate" onClick={() => onNav && onNav("donate")}>Donate</button>
      </nav>
    </header>
  );
}

window.SiteHeader = SiteHeader;
