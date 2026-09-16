function SiteFooter({ onNav }) {
  const nav = (id) => (e) => { e.preventDefault(); onNav && onNav(id); };
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src="/loving-life-foundation-web/public/assets/logos/black-white.png" alt="" className="site-footer__logo" />
          <div className="site-footer__tag">
            <em>"Life is what you make it."</em>
            <span>— Zach Matla</span>
          </div>
        </div>
        <div className="site-footer__cols">
          <div>
            <h5>Foundation</h5>
            <a href="#" onClick={nav("story")}>Our mission</a>
            <a href="#" onClick={nav("story")}>Board &amp; family</a>
          </div>
          <div>
            <h5>Programs</h5>
            <a href="#" onClick={nav("scholarship")}>Memorial Scholarship</a>
            <a href="#" onClick={nav("tournament")}>Golf Tournament</a>
            <a href="#" onClick={nav("home")}>Community events</a>
          </div>
          <div>
            <h5>Get involved</h5>
            <a href="#" onClick={nav("donate")}>Donate</a>
            <a href="#" onClick={nav("tournament")}>Sponsor a hole</a>
          </div>
        </div>
      </div>
      <div className="site-footer__legal">
        <span>© 2026 The Loving Life Foundation of Zach Matla · Elma, NY</span>
        <span>501(c)(3) nonprofit</span>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
