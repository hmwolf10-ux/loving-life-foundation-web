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
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}>
        <img src="public/assets/logos/navy.png" alt="The Loving Life Foundation of Zach Matla" className="site-header__logo" />
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
