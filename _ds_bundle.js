/* @ds-bundle: {"format":4,"namespace":"LovingLifeFoundationDesignSystem_ac4eec","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"PhotoCard","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f3f7d55ca2bb","components/core/Button.jsx":"77e50dbfb077","components/core/Card.jsx":"4ee7d76819ce","components/forms/Field.jsx":"0add28f76bea","loving-life-foundation-web/DonateScreen.jsx":"aeae1ca7bd82","loving-life-foundation-web/HomeScreen.jsx":"f8b8fd50d956","loving-life-foundation-web/ScholarshipScreen.jsx":"432de9535e23","loving-life-foundation-web/SiteFooter.jsx":"e25110be2464","loving-life-foundation-web/SiteHeader.jsx":"8cda0ca4e2b9","loving-life-foundation-web/StoryScreen.jsx":"87ddb33b73ca","loving-life-foundation-web/TournamentScreen.jsx":"55e5bf50c879"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LovingLifeFoundationDesignSystem_ac4eec = window.LovingLifeFoundationDesignSystem_ac4eec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const colors = {
  navy: {
    background: "var(--ll-navy)",
    color: "#fff"
  },
  orange: {
    background: "var(--ll-orange)",
    color: "#fff"
  },
  green: {
    background: "var(--ll-green)",
    color: "#111"
  },
  sky: {
    background: "var(--ll-sky)",
    color: "#fff"
  },
  soft: {
    background: "var(--ll-stone-100)",
    color: "var(--ll-stone-700)"
  },
  outline: {
    background: "transparent",
    color: "var(--ll-navy)",
    border: "1.5px solid var(--ll-navy)"
  }
};

/** Foundation badge/tag — condensed uppercase pill. Optional live dot for "open now" style states. */
function Badge({
  color = "navy",
  dot = false,
  children,
  style
}) {
  const c = colors[color] || colors.navy;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-condensed)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      ...c,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "currentColor",
      display: "inline-block"
    }
  }), children);
}
window.Badge = Badge;
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  fontSize: 15,
  padding: "11px 20px",
  borderRadius: "var(--radius-md)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "background .18s, color .18s, border-color .18s, transform .12s",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8
};
const variants = {
  primary: {
    background: "var(--ll-navy)",
    color: "#fff"
  },
  accent: {
    background: "var(--ll-orange)",
    color: "#fff"
  },
  donate: {
    fontFamily: "var(--font-condensed)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    background: "var(--ll-orange)",
    color: "#fff",
    fontSize: 14,
    padding: "13px 22px"
  },
  ghost: {
    background: "transparent",
    color: "var(--ll-navy)",
    borderColor: "var(--border-strong)"
  },
  link: {
    background: "transparent",
    color: "var(--ll-navy)",
    padding: 0,
    textDecoration: "underline",
    textUnderlineOffset: 4
  }
};
const hoverBg = {
  primary: "var(--ll-navy-deep)",
  accent: "var(--ll-orange-warm)",
  donate: "var(--ll-orange-warm)"
};

/** Foundation button. variant: primary | accent | donate | ghost | link. Disabled state dims to stone neutrals. */
function Button({
  variant = "primary",
  disabled = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  if (disabled) {
    return /*#__PURE__*/React.createElement("button", _extends({
      disabled: true,
      style: {
        ...base,
        background: "var(--ll-stone-100)",
        color: "var(--ll-stone-300)",
        cursor: "not-allowed",
        ...style
      }
    }, rest), children);
  }
  const v = variants[variant] || variants.primary;
  const hoverStyle = variant === "ghost" ? {
    borderColor: "var(--ll-navy)"
  } : variant === "link" ? {
    color: "var(--ll-orange)"
  } : hoverBg[variant] ? {
    background: hoverBg[variant]
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    style: {
      ...base,
      ...v,
      ...(hover ? hoverStyle : {}),
      ...style
    }
  }, rest), children);
}
window.Button = Button;
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Standard content card — white surface, soft shadow, mid-round corners. Optional eyebrow label above the title. */
function Card({
  eyebrow,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: 20,
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      fontSize: 11,
      color: "var(--ll-orange)",
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      margin: "0 0 4px",
      color: "var(--ll-navy)"
    }
  }, title), children);
}

/** Photo card — image with warm "printed photo" shadow and a condensed-uppercase caption. Like a framed print. */
function PhotoCard({
  image,
  caption,
  imageHeight = 160,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-photo)",
      padding: "8px 8px 14px",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "var(--ll-green-grass)",
      height: imageHeight,
      borderRadius: 4
    }
  }), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: 10,
      color: "var(--fg3)",
      padding: "10px 6px 0"
    }
  }, caption));
}
window.Card = Card;
window.PhotoCard = PhotoCard;
Object.assign(__ds_scope, { Card, PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const fieldBase = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  padding: "11px 14px",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  color: "var(--fg1)",
  transition: "border-color .15s, box-shadow .15s",
  boxSizing: "border-box"
};

/** Labeled text input / textarea with condensed-uppercase label and optional error/help text. */
function Field({
  label,
  type = "text",
  error,
  help,
  multiline = false,
  value,
  onChange,
  placeholder,
  style
}) {
  const [focused, setFocused] = React.useState(false);
  const focusStyle = focused ? {
    borderColor: "var(--ll-navy)",
    boxShadow: "0 0 0 3px rgba(26,42,73,0.12)",
    outline: "none"
  } : {};
  const errorStyle = error ? {
    borderColor: "#B4321E",
    boxShadow: "0 0 0 3px rgba(180,50,30,0.12)"
  } : {};
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: 11,
      color: "var(--fg2)",
      marginBottom: 4,
      display: "block"
    }
  }, label), /*#__PURE__*/React.createElement(Tag, {
    type: multiline ? undefined : type,
    rows: multiline ? 3 : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...fieldBase,
      ...focusStyle,
      ...errorStyle
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#B4321E",
      fontSize: 12,
      marginTop: 4
    }
  }, error), !error && help && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg3)",
      fontSize: 12,
      marginTop: 4
    }
  }, help));
}
window.Field = Field;
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/DonateScreen.jsx
try { (() => {
function DonateScreen({
  onNav,
  onDonate,
  donated
}) {
  const [amount, setAmount] = React.useState(100);
  const [custom, setCustom] = React.useState("");
  const [note, setNote] = React.useState("");
  const tiers = [25, 50, 100, 250, 500, 1000];
  if (donated) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page donate-success"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart",
      className: "donate-success__icon"
    }), /*#__PURE__*/React.createElement("h1", null, "Thank you."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Because of you, another student is one step closer to college."), /*#__PURE__*/React.createElement("p", null, "We'll send a receipt to your email. The Matla family sees every note."), /*#__PURE__*/React.createElement("button", {
      className: "btn btn--ghost",
      onClick: () => onNav("home")
    }, "Back to home"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "page donate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "donate__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Donate"), /*#__PURE__*/React.createElement("h1", null, "Keep the light on."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "100% of gifts support the Memorial Scholarship. The Loving Life Foundation is a registered 501(c)(3); your donation is tax-deductible."), /*#__PURE__*/React.createElement("blockquote", null, "\"Every swing supports a kid headed to college.\"")), /*#__PURE__*/React.createElement("form", {
    className: "donate__form",
    onSubmit: e => {
      e.preventDefault();
      onDonate();
    }
  }, /*#__PURE__*/React.createElement("label", null, "Choose an amount"), /*#__PURE__*/React.createElement("div", {
    className: "donate__tiers"
  }, tiers.map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t,
    className: "tier" + (amount === t && !custom ? " is-active" : ""),
    onClick: () => {
      setAmount(t);
      setCustom("");
    }
  }, "$", t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Or a custom amount"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    inputMode: "numeric",
    placeholder: "$___",
    value: custom,
    onChange: e => setCustom(e.target.value.replace(/[^0-9]/g, ""))
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "A note for the family ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("textarea", {
    className: "field",
    rows: "3",
    value: note,
    onChange: e => setNote(e.target.value),
    placeholder: "Zach taught me..."
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--donate",
    type: "submit"
  }, "Donate $", custom || amount), /*#__PURE__*/React.createElement("div", {
    className: "donate__legal"
  }, "Illustrative form \u2014 no live payment processing in this kit")));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/DonateScreen.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "A nonprofit in Elma, NY \xB7 est. 2018"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Honoring a life.", /*#__PURE__*/React.createElement("br", null), "Carrying it forward."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, "The Loving Life Foundation of Zach Matla keeps Zach's spirit close to the community he loved \u2014 through scholarships, a yearly tournament, and stories we refuse to let fade."), /*#__PURE__*/React.createElement("div", {
    className: "hero__ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--donate",
    onClick: () => onNav("donate")
  }, "Donate"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => onNav("story")
  }, "Read Zach's story"))), /*#__PURE__*/React.createElement("div", {
    className: "hero__mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/navy.png",
    alt: ""
  }))), /*#__PURE__*/React.createElement("section", {
    className: "stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, "8"), /*#__PURE__*/React.createElement("div", {
    className: "stat__label"
  }, "Years of giving")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, "$142k"), /*#__PURE__*/React.createElement("div", {
    className: "stat__label"
  }, "Raised for scholarships")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, "27"), /*#__PURE__*/React.createElement("div", {
    className: "stat__label"
  }, "Scholarships awarded")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat__num"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "stat__label"
  }, "Tagline that started it all"))), /*#__PURE__*/React.createElement("section", {
    className: "programs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", null, "Three ways we keep the light on.")), /*#__PURE__*/React.createElement("div", {
    className: "programs__grid"
  }, /*#__PURE__*/React.createElement("article", {
    className: "program-card",
    onClick: () => onNav("scholarship")
  }, /*#__PURE__*/React.createElement("div", {
    className: "program-card__img",
    style: {
      backgroundImage: "url(../../assets/photos/scholarship-hero.png)",
      backgroundPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "program-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Scholarship"), /*#__PURE__*/React.createElement("h3", null, "Zach Matla Memorial Scholarship"), /*#__PURE__*/React.createElement("p", null, "Awarded each spring to an Iroquois Central senior who embodies Zach's belief that kindness leaves a longer mark than anything."), /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "Apply or nominate \u2192"))), /*#__PURE__*/React.createElement("article", {
    className: "program-card",
    onClick: () => onNav("tournament")
  }, /*#__PURE__*/React.createElement("div", {
    className: "program-card__img",
    style: {
      backgroundImage: "url(../../assets/photos/golf-tournament-3.jpg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "program-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Fundraiser"), /*#__PURE__*/React.createElement("h3", null, "The Loving Life Golf Tournament"), /*#__PURE__*/React.createElement("p", null, "Our biggest day of the year. Grab your clubs, grab your friends, and do it for Zach."), /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "Register a foursome \u2192"))), /*#__PURE__*/React.createElement("article", {
    className: "program-card",
    onClick: () => onNav("story")
  }, /*#__PURE__*/React.createElement("div", {
    className: "program-card__img",
    style: {
      backgroundImage: "url(../../assets/photos/community-event-1.jpg)",
      backgroundPosition: "center 20%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "program-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Community"), /*#__PURE__*/React.createElement("h3", null, "Events & stories"), /*#__PURE__*/React.createElement("p", null, "From neon-green tutus on the green to quiet gatherings at the school \u2014 here's where we show up."), /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "See what's next \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "pullquote"
  }, /*#__PURE__*/React.createElement("blockquote", null, "\"Life is what you make it.\""), /*#__PURE__*/React.createElement("div", {
    className: "pullquote__attr"
  }, "\u2014 Zach Matla")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/ScholarshipScreen.jsx
try { (() => {
function ScholarshipScreen({
  onNav,
  dates = {}
}) {
  const appsOpen = dates.appsOpen || "Mar 1";
  const appsClose = dates.appsClose || "Apr 15";
  const notified = dates.notified || "May 20";
  const presented = dates.presented || "Jun 6";
  const schYear = dates.schYear || "2026";
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "page-hero__art",
    src: "../../assets/photos/scholarship-hero.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our signature program"), /*#__PURE__*/React.createElement("h1", null, "The Zach Matla", /*#__PURE__*/React.createElement("br", null), "Memorial Scholarship"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Empowering future leaders \u2014 one Iroquois Central senior at a time."))), /*#__PURE__*/React.createElement("section", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Who it's for"), /*#__PURE__*/React.createElement("p", null, "Graduating seniors at Iroquois Central High School in Elma, NY, who carry forward the spirit Zach brought to everything \u2014 warmth, curiosity, and the willingness to show up for the people around them."), /*#__PURE__*/React.createElement("h3", null, "How it's decided"), /*#__PURE__*/React.createElement("p", null, "A small committee made up of family, teachers, and past recipients reads every application. We're not looking for the top GPA \u2014 we're looking for the kid who'll keep the light on.")), /*#__PURE__*/React.createElement("aside", {
    className: "timeline-card"
  }, /*#__PURE__*/React.createElement("h4", null, "Key dates \xB7 ", schYear), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, appsOpen), " Applications open"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, appsClose), " Applications close"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, notified), " Recipients notified"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "date"
  }, presented), " Presented at the golf tournament")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--accent",
    onClick: () => onNav("apply")
  }, "Apply now"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--link"
  }, "Nominate a student \u2192"))), /*#__PURE__*/React.createElement("section", {
    className: "recipients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Past recipients"), /*#__PURE__*/React.createElement("h2", null, "Kids Zach would have loved.")), /*#__PURE__*/React.createElement("div", {
    className: "recipients__grid"
  }, ["2024 · Maya R.", "2023 · Daniel K.", "2022 · Alana P.", "2021 · Ben S."].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    className: "recipient-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recipient-card__thumb"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "graduation-cap"
  })), /*#__PURE__*/React.createElement("div", {
    className: "recipient-card__meta"
  }, r), /*#__PURE__*/React.createElement("div", {
    className: "recipient-card__quote"
  }, "\"This scholarship let me say yes to college.\""))))));
}
window.ScholarshipScreen = ScholarshipScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/ScholarshipScreen.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/SiteFooter.jsx
try { (() => {
function SiteFooter({
  onNav
}) {
  const nav = id => e => {
    e.preventDefault();
    onNav && onNav(id);
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/black-white.png",
    alt: "",
    className: "site-footer__logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__tag"
  }, /*#__PURE__*/React.createElement("em", null, "\"Life is what you make it.\""), /*#__PURE__*/React.createElement("span", null, "\u2014 Zach Matla"))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Foundation"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("story")
  }, "Our mission"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("story")
  }, "Board & family")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Programs"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("scholarship")
  }, "Memorial Scholarship"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("tournament")
  }, "Golf Tournament"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("home")
  }, "Community events")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Get involved"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("donate")
  }, "Donate"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: nav("tournament")
  }, "Sponsor a hole")))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The Loving Life Foundation of Zach Matla \xB7 Elma, NY"), /*#__PURE__*/React.createElement("span", null, "501(c)(3) nonprofit")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/SiteHeader.jsx
try { (() => {
function ZMark({
  size = 36
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "72",
    height: "13",
    rx: "2",
    fill: "#1a2a49"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "72,27 86,27 28,73 14,73",
    fill: "#1a2a49"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "73",
    width: "72",
    height: "13",
    rx: "2",
    fill: "#1a2a49"
  }));
}
function SiteHeader({
  current = "home",
  onNav
}) {
  const links = [{
    id: "home",
    label: "Home"
  }, {
    id: "scholarship",
    label: "Scholarship"
  }, {
    id: "tournament",
    label: "Golf Tournament"
  }, {
    id: "story",
    label: "Zach's Story"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(ZMark, {
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: "rgba(26,42,73,0.15)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Oswald, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      color: "#1a2a49",
      lineHeight: 1
    }
  }, "Loving Life"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Oswald, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "#1a2a49",
      opacity: 0.55,
      marginTop: 6,
      lineHeight: 1
    }
  }, "Foundation"))), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    className: "site-nav__link" + (current === l.id ? " is-active" : ""),
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.id);
    }
  }, l.label)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--donate",
    onClick: () => onNav && onNav("donate")
  }, "Donate")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/StoryScreen.jsx
try { (() => {
function StoryScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page story"
  }, /*#__PURE__*/React.createElement("section", {
    className: "story-hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/community-event-1.jpg",
    alt: "",
    className: "story-hero__img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "story-hero__overlay"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      fontSize: 16,
      letterSpacing: "0.2em",
      color: "#fff",
      opacity: 1,
      textShadow: "0 1px 4px rgba(0,0,0,0.4)"
    }
  }, "Zach's story"), /*#__PURE__*/React.createElement("h1", null, "The tagline that started a foundation."))), /*#__PURE__*/React.createElement("article", {
    className: "story-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Zach Matla believed, out loud and often, that ", /*#__PURE__*/React.createElement("em", null, "life is what you make it"), ". He lived like it. And when he was gone, the people who loved him kept saying it to each other \u2014 until saying it wasn't enough, and we started doing something with it."), /*#__PURE__*/React.createElement("p", null, "Zach grew up in Elma and moved through the halls of Iroquois Central like a kid who actually meant the things he said. He had a gift for making people feel seen. He showed up. He stayed a little longer than he had to."), /*#__PURE__*/React.createElement("p", null, "The Loving Life Foundation was founded by his family and closest friends in 2018. Since then we've awarded 27 scholarships, hosted eight golf tournaments, and kept telling his story to anyone who'll listen."), /*#__PURE__*/React.createElement("blockquote", null, "\"He made you feel like you were the most important person in the room. Every room. Every time.\""), /*#__PURE__*/React.createElement("p", {
    className: "quote-attr"
  }, "\u2014 Carla Matla, Zach's mother"), /*#__PURE__*/React.createElement("h3", null, "What comes next"), /*#__PURE__*/React.createElement("p", null, "We're not going anywhere. As long as there's a senior at Iroquois Central who needs a hand, a friend who wants to swing a club for a good reason, or a stranger who needs to hear a sentence that might change the shape of their day \u2014 we'll be here."), /*#__PURE__*/React.createElement("div", {
    className: "story-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--donate",
    onClick: () => onNav("donate")
  }, "Donate in Zach's name"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost",
    onClick: () => onNav("tournament")
  }, "Join us on the green"))));
}
window.StoryScreen = StoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// loving-life-foundation-web/TournamentScreen.jsx
try { (() => {
function TournamentScreen({
  onNav,
  registered,
  onRegister,
  dates = {}
}) {
  const [foursome, setFoursome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const edition = dates.tourneyEdition || "8th Annual";
  const tourneyDate = dates.tourneyDate || "June 6, 2026";
  const tourneyDay = dates.tourneyDay || "Saturday, June 6, 2026";
  const tourneyTime = dates.tourneyTime || "9:00 am";
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("section", {
    className: "tourney-hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/golf-tournament-3.jpg",
    alt: "The Loving Life Foundation Golf Tournament"
  })), /*#__PURE__*/React.createElement("section", {
    className: "tourney-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tourney-info__block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, edition), /*#__PURE__*/React.createElement("h1", {
    className: "event-title"
  }, "The Loving Life Foundation", /*#__PURE__*/React.createElement("br", null), "Golf Tournament"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, tourneyDay, " \xB7 Elma Meadows Golf Course \xB7 Shotgun start at ", tourneyTime)), /*#__PURE__*/React.createElement("div", {
    className: "tourney-details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, tourneyDate), /*#__PURE__*/React.createElement("span", null, "Shotgun \xB7 ", tourneyTime))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Elma Meadows"), /*#__PURE__*/React.createElement("span", null, "Elma, NY"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "users"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Foursomes"), /*#__PURE__*/React.createElement("span", null, "$400 / team"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "flag"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Sponsor a hole"), /*#__PURE__*/React.createElement("span", null, "From $150"))))), /*#__PURE__*/React.createElement("section", {
    className: "register"
  }, /*#__PURE__*/React.createElement("div", {
    className: "register__copy"
  }, /*#__PURE__*/React.createElement("h2", null, "Register your foursome."), /*#__PURE__*/React.createElement("p", null, "All proceeds go directly to the Zach Matla Memorial Scholarship. Neon tutus optional but enthusiastically encouraged.")), registered ? /*#__PURE__*/React.createElement("div", {
    className: "register__success"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "heart"
  }), /*#__PURE__*/React.createElement("h3", null, "You're in."), /*#__PURE__*/React.createElement("p", null, "We'll see you on the green, ", foursome || "friend", ". Check ", /*#__PURE__*/React.createElement("strong", null, email || "your inbox"), " for the details.")) : /*#__PURE__*/React.createElement("form", {
    className: "register__form",
    onSubmit: e => {
      e.preventDefault();
      onRegister();
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Foursome captain"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    value: foursome,
    onChange: e => setFoursome(e.target.value),
    placeholder: "Your name",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "field",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@elma.org",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--donate",
    type: "submit"
  }, "Register foursome"))), /*#__PURE__*/React.createElement("section", {
    className: "gallery"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Last year, on the green"), /*#__PURE__*/React.createElement("div", {
    className: "gallery__grid"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/community-event-1.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/community-event-2.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/community-event-3.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/golf-tournament-2.jpg",
    alt: ""
  }))));
}
window.TournamentScreen = TournamentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "loving-life-foundation-web/TournamentScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

__ds_ns.Field = __ds_scope.Field;

})();
