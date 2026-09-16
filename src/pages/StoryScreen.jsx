function StoryScreen({ onNav }) {
  return (
    <div className="page story">
      <section className="story-hero">
        <img src="./public/assets/photos/community-event-1.jpg" alt="" className="story-hero__img" />
        <div className="story-hero__overlay">
          <span className="eyebrow" style={{ fontSize: 16, letterSpacing: "0.2em", color: "#fff", opacity: 1, textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>Zach's story</span>
          <h1>The tagline that started a foundation.</h1>
        </div>
      </section>

      <article className="story-body">
        <p className="lead">Zach Matla believed, out loud and often, that <em>life is what you make it</em>. He lived like it. And when he was gone, the people who loved him kept saying it to each other — until saying it wasn't enough, and we started doing something with it.</p>
        <p>Zach grew up in Elma and moved through the halls of Iroquois Central like a kid who actually meant the things he said. He had a gift for making people feel seen. He showed up. He stayed a little longer than he had to.</p>
        <p>The Loving Life Foundation was founded by his family and closest friends in 2018. Since then we've awarded 27 scholarships, hosted eight golf tournaments, and kept telling his story to anyone who'll listen.</p>
        <blockquote>"He made you feel like you were the most important person in the room. Every room. Every time."</blockquote>
        <p className="quote-attr">— Carla Matla, Zach's mother</p>
        <h3>What comes next</h3>
        <p>We're not going anywhere. As long as there's a senior at Iroquois Central who needs a hand, a friend who wants to swing a club for a good reason, or a stranger who needs to hear a sentence that might change the shape of their day — we'll be here.</p>
        <div className="story-cta">
          <button className="btn btn--donate" onClick={() => onNav("donate")}>Donate in Zach's name</button>
          <button className="btn btn--ghost" onClick={() => onNav("tournament")}>Join us on the green</button>
        </div>
      </article>
    </div>
  );
}

window.StoryScreen = StoryScreen;
