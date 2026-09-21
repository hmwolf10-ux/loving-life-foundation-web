function DonateScreen({ onNav, onDonate, donated, contact = {} }) {
  const [amount, setAmount] = React.useState(100);
  const [custom, setCustom] = React.useState("");
  const [note, setNote] = React.useState("");
  const tiers = [25, 50, 100, 250, 500, 1000];

  if (donated) {
    return (
      <div className="page donate-success">
        <i data-lucide="heart" className="donate-success__icon"></i>
        <h1>Thank you.</h1>
        <p className="lead">Because of you, another student is one step closer to college.</p>
        <p>We'll send a receipt to your email. The Matla family sees every note.</p>
        <button className="btn btn--ghost" onClick={() => onNav("home")}>Back to home</button>
      </div>
    );
  }

  return (
    <div className="page donate">
      <div className="donate__left">
        <span className="eyebrow">Donate</span>
        <h1>Keep the light on.</h1>
        <p className="lead">100% of gifts support the Memorial Scholarship. The Loving Life Foundation is a registered 501(c)(3); your donation is tax-deductible.</p>
        <blockquote>"Every swing supports a kid headed to college."</blockquote>
        <p><strong>Donate by Venmo:</strong> {contact.venmo || "@MarcMatla"}<br />
          <strong>Or mail a check:</strong> {contact.mailingAddress || "41 Hidden Valley Drive, Elma, NY 14059"}</p>
      </div>

      <form className="donate__form" onSubmit={(e) => { e.preventDefault(); onDonate(); }}>
        <label>Choose an amount</label>
        <div className="donate__tiers">
          {tiers.map((t) => (
            <button type="button" key={t} className={"tier" + (amount === t && !custom ? " is-active" : "")} onClick={() => { setAmount(t); setCustom(""); }}>
              ${t}
            </button>
          ))}
        </div>
        <div>
          <label>Or a custom amount</label>
          <input className="field" inputMode="numeric" placeholder="$___" value={custom} onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
        <div>
          <label>A note for the family <span style={{ opacity: 0.6 }}>(optional)</span></label>
          <textarea className="field" rows="3" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Zach taught me..."></textarea>
        </div>
        <button className="btn btn--donate" type="submit">Donate ${custom || amount}</button>
        <div className="donate__legal">Illustrative form — no live payment processing in this kit</div>
      </form>
    </div>
  );
}

window.DonateScreen = DonateScreen;
