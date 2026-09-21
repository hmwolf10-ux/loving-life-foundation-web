function SiteFooter({ onNav, currentYear }) {
  const nav = (id) => (e) => { e.preventDefault(); onNav && onNav(id); };
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <img src="public/assets/logos/white-green-orange.png" alt="The Loving Life Foundation of Zach Matla" className="site-footer__logo" />
          <div className="site-footer__tag">
            <em>"Life is what you make it."</em>
            <span>— Zach Matla</span>
            <div className="site-footer__social" aria-label="Follow the Loving Life Foundation">
              <a href="https://www.facebook.com/thezachmatlafoundation" target="_blank" rel="noopener noreferrer" aria-label="Follow The Zach Matla Foundation on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" fill="currentColor" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/143661949/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="Visit The Loving Life Foundation on LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.1A2.1 2.1 0 1 0 5.2 3a2.1 2.1 0 0 0 0 4.1ZM3.4 20.5h3.6V9H3.4v11.5ZM9.2 9v11.5h3.6v-5.7c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1v5.6h3.6v-6.3c0-3.1-.7-5.5-4.5-5.5-1.8 0-3 .9-3.5 1.8h-.1V9H9.2Z" fill="currentColor" /></svg>
              </a>
            </div>
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
        <span>© {currentYear} The Loving Life Foundation of Zach Matla · Elma, NY</span>
        <span>501(c)(3) nonprofit</span>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
