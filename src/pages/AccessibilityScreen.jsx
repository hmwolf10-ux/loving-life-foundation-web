function AccessibilityScreen() {
  return (
    <div className="page">
      <div className="a11y-body">
        <span className="eyebrow">Accessibility</span>
        <h1>Accessibility statement</h1>
        <p className="lead">The Loving Life Foundation of Zach Matla wants everyone in our community to be able to use this website, including people who use screen readers, keyboards, magnification, or other assistive technology.</p>

        <h2>Our goal</h2>
        <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. That includes keyboard access to every page and control, text alternatives for meaningful images, labeled form fields, sufficient color contrast, and content that reflows on small screens and when zoomed.</p>

        <h2>What we've done</h2>
        <ul>
          <li>A "Skip to main content" link at the top of every page</li>
          <li>Navigation, form fields, and buttons that work with a keyboard and screen readers</li>
          <li>Visible keyboard focus indicators</li>
          <li>Text and button colors chosen for readable contrast</li>
          <li>Responsive layout that supports zooming and mobile devices</li>
          <li>Reduced motion when your device is set to prefer it</li>
        </ul>

        <h2>Known limitations</h2>
        <p>This site is updated by volunteers and some content, such as photos, may not yet have complete descriptions. We are continuing to review and improve it.</p>

        <h2>Need help or want to give feedback?</h2>
        <p>If you have trouble using any part of this site, or need information in another format, please contact us and tell us the page and the problem. We will respond and try to provide the information or service you need.</p>
        <p>
          Angela Terhart: <a href="tel:+17169832392">(716) 983-2392</a><br />
          Marc Matla: <a href="tel:+17168180282">(716) 818-0282</a>
        </p>
        <p><small>Last reviewed: September 2026.</small></p>
      </div>
    </div>
  );
}

window.AccessibilityScreen = AccessibilityScreen;
