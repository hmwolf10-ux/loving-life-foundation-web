function HomeScreen({ onNav }) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">A nonprofit in Elma, NY · est. 2018</span>
          <h1 className="hero__title">Honoring a life.<br />Carrying it forward.</h1>
          <p className="hero__lede">
            The Loving Life Foundation of Zach Matla keeps Zach's spirit close to the
            community he loved — through scholarships, a yearly tournament, and stories
            we refuse to let fade.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--donate" onClick={() => onNav("donate")}>Donate</button>
            <button className="btn btn--ghost" onClick={() => onNav("story")}>Read Zach's story</button>
          </div>
        </div>
        <div className="hero__mark" aria-hidden="true">
          <img src="./public/assets/logos/navy.png" alt="" />
        </div>
      </section>

      <section className="stats">
        <div className="stat"><div className="stat__num">8</div><div className="stat__label">Years of giving</div></div>
        <div className="stat"><div className="stat__num">$142k</div><div className="stat__label">Raised for scholarships</div></div>
        <div className="stat"><div className="stat__num">27</div><div className="stat__label">Scholarships awarded</div></div>
        <div className="stat"><div className="stat__num">1</div><div className="stat__label">Tagline that started it all</div></div>
      </section>

      <section className="programs">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Three ways we keep the light on.</h2>
        </div>
        <div className="programs__grid">
          <article className="program-card" onClick={() => onNav("scholarship")}>
            <div className="program-card__img" style={{ backgroundImage: "url(./public/assets/photos/scholarship-hero.png)", backgroundPosition: "center 30%" }} />
            <div className="program-card__body">
              <span className="eyebrow">Scholarship</span>
              <h3>Zach Matla Memorial Scholarship</h3>
              <p>Awarded each spring to an Iroquois Central senior who embodies Zach's belief that kindness leaves a longer mark than anything.</p>
              <span className="link-arrow">Apply or nominate →</span>
            </div>
          </article>
          <article className="program-card" onClick={() => onNav("tournament")}>
            <div className="program-card__img" style={{ backgroundImage: "url(./public/assets/photos/golf-tournament-3.jpg)" }} />
            <div className="program-card__body">
              <span className="eyebrow">Fundraiser</span>
              <h3>The Loving Life Golf Tournament</h3>
              <p>Our biggest day of the year. Grab your clubs, grab your friends, and do it for Zach.</p>
              <span className="link-arrow">Register a foursome →</span>
            </div>
          </article>
          <article className="program-card" onClick={() => onNav("story")}>
            <div className="program-card__img" style={{ backgroundImage: "url(./public/assets/photos/community-event-1.jpg)", backgroundPosition: "center 20%" }} />
            <div className="program-card__body">
              <span className="eyebrow">Community</span>
              <h3>Events &amp; stories</h3>
              <p>From neon-green tutus on the green to quiet gatherings at the school — here's where we show up.</p>
              <span className="link-arrow">See what's next →</span>
            </div>
          </article>
        </div>
      </section>

      <section className="pullquote">
        <blockquote>"Life is what you make it."</blockquote>
        <div className="pullquote__attr">— Zach Matla</div>
      </section>
    </div>
  );
}

window.HomeScreen = HomeScreen;
