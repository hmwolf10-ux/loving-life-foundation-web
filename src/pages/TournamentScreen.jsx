function TournamentScreen({ onNav, registered, onRegister, dates = {} }) {
  const [foursome, setFoursome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const edition = dates.tourneyEdition || "8th Annual";
  const tourneyDate = dates.tourneyDate || "June 6, 2026";
  const tourneyDay = dates.tourneyDay || "Saturday, June 6, 2026";
  const tourneyTime = dates.tourneyTime || "9:00 am";

  return (
    <div className="page">
      <section className="tourney-hero">
        <img src="./public/assets/photos/golf-tournament-3.jpg" alt="The Loving Life Foundation Golf Tournament" />
      </section>

      <section className="tourney-info">
        <div className="tourney-info__block">
          <span className="eyebrow">{edition}</span>
          <h1 className="event-title">The Loving Life Foundation<br />Golf Tournament</h1>
          <p className="lead">{tourneyDay} · Elma Meadows Golf Course · Shotgun start at {tourneyTime}</p>
        </div>

        <div className="tourney-details">
          <div className="detail"><i data-lucide="calendar"></i><div><strong>{tourneyDate}</strong><span>Shotgun · {tourneyTime}</span></div></div>
          <div className="detail"><i data-lucide="map-pin"></i><div><strong>Elma Meadows</strong><span>Elma, NY</span></div></div>
          <div className="detail"><i data-lucide="users"></i><div><strong>Foursomes</strong><span>$400 / team</span></div></div>
          <div className="detail"><i data-lucide="flag"></i><div><strong>Sponsor a hole</strong><span>From $150</span></div></div>
        </div>
      </section>

      <section className="register">
        <div className="register__copy">
          <h2>Register your foursome.</h2>
          <p>All proceeds go directly to the Zach Matla Memorial Scholarship. Neon tutus optional but enthusiastically encouraged.</p>
        </div>
        {registered ? (
          <div className="register__success">
            <i data-lucide="heart"></i>
            <h3>You're in.</h3>
            <p>We'll see you on the green, {foursome || "friend"}. Check <strong>{email || "your inbox"}</strong> for the details.</p>
          </div>
        ) : (
          <form className="register__form" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
            <div>
              <label>Foursome captain</label>
              <input className="field" value={foursome} onChange={(e) => setFoursome(e.target.value)} placeholder="Your name" required />
            </div>
            <div>
              <label>Email</label>
              <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@elma.org" required />
            </div>
            <button className="btn btn--donate" type="submit">Register foursome</button>
          </form>
        )}
      </section>

      <section className="gallery">
        <span className="eyebrow">Last year, on the green</span>
        <div className="gallery__grid">
          <img src="./public/assets/photos/community-event-1.jpg" alt="" />
          <img src="./public/assets/photos/community-event-2.jpg" alt="" />
          <img src="./public/assets/photos/community-event-3.jpg" alt="" />
          <img src="./public/assets/photos/golf-tournament-2.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

window.TournamentScreen = TournamentScreen;
