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
  const [screen, setScreen] = React.useState(() => localStorage.getItem("llf_screen") || "home");
  const [registered, setRegistered] = React.useState(false);
  const [donated, setDonated] = React.useState(false);

  React.useEffect(() => { localStorage.setItem("llf_screen", screen); }, [screen]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

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
      <main>
        {screen === "home" && <HomeScreen onNav={onNav} />}
        {screen === "scholarship" && <ScholarshipScreen onNav={onNav} dates={dates} />}
        {screen === "tournament" && <TournamentScreen onNav={onNav} registered={registered} onRegister={() => setRegistered(true)} dates={dates} tournament={content.tournament} />}
        {screen === "story" && <StoryScreen onNav={onNav} />}
        {screen === "donate" && <DonateScreen onNav={onNav} onDonate={() => setDonated(true)} donated={donated} contact={contact} />}
        {screen === "contact" && (
          <div className="page">
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <span className="eyebrow">Contact</span>
              <h1>Say hello.</h1>
              {contact.coordinators.map((person) => (
                <p className="lead" key={person.name}>{person.name} · {person.phone}</p>
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
