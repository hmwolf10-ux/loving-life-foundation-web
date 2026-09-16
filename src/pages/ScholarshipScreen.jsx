function ScholarshipScreen({ onNav, dates = {} }) {
  const appsOpen = dates.appsOpen || "Mar 1";
  const appsClose = dates.appsClose || "Apr 15";
  const notified = dates.notified || "May 20";
  const presented = dates.presented || "Jun 6";
  const schYear = dates.schYear || "2026";
  return (
    <div className="page">
      <section className="page-hero">
        <img className="page-hero__art" src="../public/assets/photos/scholarship-hero.png" alt="" />
        <div className="page-hero__copy">
          <span className="eyebrow">Our signature program</span>
          <h1>The Zach Matla<br />Memorial Scholarship</h1>
          <p className="lead">Empowering future leaders — one Iroquois Central senior at a time.</p>
        </div>
      </section>

      <section className="two-col">
        <div>
          <h3>Who it's for</h3>
          <p>Graduating seniors at Iroquois Central High School in Elma, NY, who carry forward the spirit Zach brought to everything — warmth, curiosity, and the willingness to show up for the people around them.</p>
          <h3>How it's decided</h3>
          <p>A small committee made up of family, teachers, and past recipients reads every application. We're not looking for the top GPA — we're looking for the kid who'll keep the light on.</p>
        </div>
        <aside className="timeline-card">
          <h4>Key dates · {schYear}</h4>
          <ul>
            <li><span className="date">{appsOpen}</span> Applications open</li>
            <li><span className="date">{appsClose}</span> Applications close</li>
            <li><span className="date">{notified}</span> Recipients notified</li>
            <li><span className="date">{presented}</span> Presented at the golf tournament</li>
          </ul>
          <button className="btn btn--accent" onClick={() => onNav("apply")}>Apply now</button>
          <button className="btn btn--link">Nominate a student →</button>
        </aside>
      </section>

      <section className="recipients">
        <div className="section-head">
          <span className="eyebrow">Past recipients</span>
          <h2>Kids Zach would have loved.</h2>
        </div>
        <div className="recipients__grid">
          {["2024 · Maya R.", "2023 · Daniel K.", "2022 · Alana P.", "2021 · Ben S."].map((r) => (
            <div key={r} className="recipient-card">
              <div className="recipient-card__thumb"><i data-lucide="graduation-cap"></i></div>
              <div className="recipient-card__meta">{r}</div>
              <div className="recipient-card__quote">"This scholarship let me say yes to college."</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.ScholarshipScreen = ScholarshipScreen;
