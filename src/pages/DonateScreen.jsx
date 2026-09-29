function DonateScreen({ onNav, onDonate, donated, contact = {} }) {
  const [amount, setAmount] = React.useState(100);
  const [custom, setCustom] = React.useState("");
  const [note, setNote] = React.useState("");
  const [notice, setNotice] = React.useState(false);
  const tiers = [25, 50, 100, 250, 500, 1000];

  if (donated) {
    return (
      <div className="page donate-success" role="status">
        <i aria-hidden="true" data-lucide="heart" className="donate-success__icon"></i>
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

      <form className="donate__form" onSubmit={(e) => { e.preventDefault(); setNotice(true); }}>
        <span className="donate__label" id="amt-label">Choose an amount</span>
        <div className="donate__tiers" role="group" aria-labelledby="amt-label">
          {tiers.map((t) => (
            <button type="button" key={t} aria-pressed={amount === t && !custom} className={"tier" + (amount === t && !custom ? " is-active" : "")} onClick={() => { setAmount(t); setCustom(""); }}>
              ${t}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="don-custom">Or a custom amount</label>
          <input id="don-custom" className="field" inputMode="numeric" placeholder="$___" value={custom} onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))} />
        </div>
        <div>
          <label htmlFor="don-note">A note for the family <span style={{ opacity: 0.6 }}>(optional)</span></label>
          <textarea id="don-note" className="field" rows="3" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Zach taught me..."></textarea>
        </div>
        <button className="btn btn--donate" type="submit">Donate ${custom || amount}</button>
        <div className="donate__legal" role="status">{notice ? "Online donations are not open yet, and nothing was submitted. To give, please use Venmo " + (contact.venmo || "@MarcMatla") + " or mail a check to the address shown." : "Online card giving coming soon. Please give by Venmo or check."}</div>
      </form>
    </div>
  );
}

window.DonateScreen = DonateScreen;
