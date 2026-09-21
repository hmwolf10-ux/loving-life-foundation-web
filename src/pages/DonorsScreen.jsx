function DonorsScreen({ donors = [] }) {
  return (
    <div className="page donors">
      <section className="page-hero donors__hero">
        <div>
          <span className="eyebrow">With gratitude</span>
          <h1>Our donors</h1>
          <p className="lead">Every gift helps keep Zach's spirit of love and possibility moving forward.</p>
        </div>
        <div className="donors__heart" aria-hidden="true">
          <i data-lucide="heart"></i>
        </div>
      </section>

      <section className="donors__list" aria-labelledby="donors-list-heading">
        <div className="section-head">
          <span className="eyebrow">2026 supporters</span>
          <h2 id="donors-list-heading">Thank you for believing in our mission.</h2>
          <p>We are grateful to the people and families who support the Loving Life Foundation.</p>
        </div>
        <ul className="donors__names">
          {donors.map((donor) => <li key={donor}>{donor}</li>)}
        </ul>
      </section>
    </div>
  );
}

window.DonorsScreen = DonorsScreen;
