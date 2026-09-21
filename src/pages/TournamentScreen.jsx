function TournamentScreen({ onNav, registered, onRegister, dates = {}, tournament = {} }) {
  const [foursome, setFoursome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const edition = dates.tourneyEdition || "Annual";
  const tourneyDate = dates.tourneyDate || "Date to be announced";
  const tourneyDay = dates.tourneyDay || "Date to be announced";
  const tourneyTime = dates.tourneyTime || "Time to be announced";
  const isCompleted = tournament.status === "completed";

  return (
    <div className="page">
      <section className="tourney-hero">
        <img src="public/assets/photos/golf-tournament-hero.jpg" alt="The Loving Life Foundation Golf Tournament" />
      </section>

      <section className="tourney-info">
        <div className="tourney-info__block">
          <span className="eyebrow">{edition}</span>
          <h1 className="event-title">The Loving Life Foundation<br />Golf Tournament</h1>
          <p className="lead">{tourneyDay} · {tournament.venue || "Venue to be announced"}, {tournament.location || "Location to be announced"} · Shotgun start at {tourneyTime}</p>
        </div>

        <div className="tourney-details">
          <div className="detail"><i data-lucide="calendar"></i><div><strong>{tourneyDate}</strong><span>Shotgun · {tourneyTime}</span></div></div>
          <div className="detail"><i data-lucide="map-pin"></i><div><strong>{tournament.venue || "Venue to be announced"}</strong><span>{tournament.location || "Location to be announced"}</span></div></div>
          <div className="detail"><i data-lucide="users"></i><div><strong>Foursomes</strong><span>{tournament.foursomePrice || "Price to be announced"}</span></div></div>
          <div className="detail"><i data-lucide="flag"></i><div><strong>Sponsor a hole</strong><span>{tournament.holeSponsorPrice || "Details to be announced"}</span></div></div>
        </div>
      </section>

      <section className="register">
        <div className="register__copy">
          <h2>{isCompleted ? "Thank you for showing up." : "Register your foursome."}</h2>
          <p>{isCompleted ? "The 2026 tournament has been completed. Check back here for next year's date and registration details." : "All proceeds go directly to the Zach Matla Memorial Scholarship."}</p>
        </div>
        {isCompleted ? (
          <div className="register__success">
            <i data-lucide="heart"></i>
            <h3>See you next year.</h3>
            <p>Thank you to every golfer, sponsor, donor, and volunteer who supported the foundation.</p>
          </div>
        ) : registered ? (
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
        <span className="eyebrow">On the green</span>
        <h2>Tournament highlights</h2>
        <p className="gallery__intro">A few favorite moments from the Loving Life Foundation tournament over the years.</p>
        <div className="gallery__grid">
          <img src="public/assets/photos/golf-tournament-1.jpg" alt="Golf tournament guests on the course" />
          <img src="public/assets/photos/golf-tournament-2.jpg" alt="Golfers gathered beside a golf cart" />
          <img src="public/assets/photos/golf-tournament-3.jpg" alt="Golf tournament teams gathered on the green" />
          <img src="public/assets/photos/golf-tournament-4.jpg" alt="Foundation supporters enjoying the tournament" />
          <img src="public/assets/photos/golf-tournament-5.jpg" alt="Tournament supporters posing together" />
          <img src="public/assets/photos/golf-tournament-6.jpg" alt="Golfers celebrating at the tournament" />
          <img src="public/assets/photos/golf-tournament-7.jpg" alt="Friends gathered during the golf tournament" />
          <img src="public/assets/photos/golf-tournament-8.jpg" alt="Players enjoying a day on the course" />
          <img src="public/assets/photos/golf-tournament-9.jpg" alt="Tournament guests gathered outdoors" />
          <img src="public/assets/photos/golf-tournament-10.jpg" alt="Golf tournament group photo" />
          <img src="public/assets/photos/golf-tournament-11.jpg" alt="Supporters sharing a moment on the course" />
          <img src="public/assets/photos/golf-tournament-12.jpg" alt="Friends and golfers at the Loving Life tournament" />
        </div>
      </section>
    </div>
  );
}

window.TournamentScreen = TournamentScreen;
