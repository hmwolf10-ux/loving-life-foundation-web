import React from "react";

const colors = {
  navy: { background: "var(--ll-navy)", color: "#fff" },
  orange: { background: "var(--ll-orange)", color: "#fff" },
  green: { background: "var(--ll-green)", color: "#111" },
  sky: { background: "var(--ll-sky)", color: "#fff" },
  soft: { background: "var(--ll-stone-100)", color: "var(--ll-stone-700)" },
  outline: { background: "transparent", color: "var(--ll-navy)", border: "1.5px solid var(--ll-navy)" },
};

/** Foundation badge/tag — condensed uppercase pill. Optional live dot for "open now" style states. */
export function Badge({ color = "navy", dot = false, children, style }) {
  const c = colors[color] || colors.navy;
  return (
    <span
      style={{
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
        ...style,
      }}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "var(--radius-pill)", background: "currentColor", display: "inline-block" }} />
      )}
      {children}
    </span>
  );
}

window.Badge = Badge;
