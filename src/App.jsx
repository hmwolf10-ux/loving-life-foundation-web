function App() {
  const content = window.LLF_CONTENT;
  const dates = {
    ...content.tournament,
    ...content.scholarship,
    tourneyEdition: content.tournament.edition,
    tourneyDay: content.tournament.day,
    tourneyDate: content.tournament.date,
    tourneyTime: content.tournament.time,
    schYear: content.scholarship.year
  };
  const contact = window.LLF_CONTENT.contact;
  const TITLES = { home: "Home", scholarship: "Memorial Scholarship", tournament: "Golf Tournament", story: "Zach's Story", donors: "Donors", donate: "Donate", contact: "Contact", accessibility: "Accessibility" };
  const [screen, setScreen] = React.useState(() => { try { return localStorage.getItem("llf_screen") || "home"; } catch (e) { return "home"; } });
  const mainRef = React.useRef(null);
  const firstRender = React.useRef(true);
  const [registered, setRegistered] = React.useState(false);
  const [donated, setDonated] = React.useState(false);

  React.useEffect(() => {
    try { localStorage.setItem("llf_screen", screen); } catch (e) {}
    document.title = (TITLES[screen] || "Home") + " | The Loving Life Foundation";
    if (firstRender.current) { firstRender.current = false; return; }
    if (mainRef.current) mainRef.current.focus({ preventScroll: true });
  }, [screen]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } }); });

  const onNav = (id) => {
    if (id === "apply") return setScreen("scholarship");
    setScreen(id);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (id !== "tournament") setRegistered(false);
    if (id !== "donate") setDonated(false);
  };

  return (
    <div className="app">
      <SiteHeader current={screen} onNav={onNav} />
      <main id="main" tabIndex="-1" ref={mainRef}>
        {screen === "home" && <HomeScreen onNav={onNav} />}
        {screen === "scholarship" && <ScholarshipScreen onNav={onNav} dates={dates} />}
        {screen === "tournament" && <TournamentScreen onNav={onNav} registered={registered} onRegister={() => setRegistered(true)} dates={dates} tournament={content.tournament} />}
        {screen === "story" && <StoryScreen onNav={onNav} />}
        {screen === "accessibility" && <AccessibilityScreen />}
        {screen === "donors" && <DonorsScreen donors={content.donors} />}
        {screen === "donate" && <DonateScreen onNav={onNav} onDonate={() => setDonated(true)} donated={donated} contact={contact} />}
        {screen === "contact" && (
          <div className="page">
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <span className="eyebrow">Contact</span>
              <h1>Say hello.</h1>
              {contact.coordinators.map((person) => (
                <p className="lead" key={person.name}>{person.name} · <a href={"tel:" + person.phone.replace(/[^0-9]/g, "")}>{person.phone}</a></p>
              ))}
              <p className="lead">{contact.location}</p>
              <p>{contact.mailingAddress}</p>
            </div>
          </div>
        )}
      </main>
      <SiteFooter onNav={onNav} currentYear={new Date().getFullYear()} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
