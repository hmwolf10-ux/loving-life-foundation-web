import React from "react";

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
  gap: 8,
};

const variants = {
  primary: { background: "var(--ll-navy)", color: "#fff" },
  accent: { background: "var(--ll-orange)", color: "#fff" },
  donate: {
    fontFamily: "var(--font-condensed)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    background: "var(--ll-orange)",
    color: "#fff",
    fontSize: 14,
    padding: "13px 22px",
  },
  ghost: { background: "transparent", color: "var(--ll-navy)", borderColor: "var(--border-strong)" },
  link: { background: "transparent", color: "var(--ll-navy)", padding: 0, textDecoration: "underline", textUnderlineOffset: 4 },
};

const hoverBg = { primary: "var(--ll-navy-deep)", accent: "var(--ll-orange-warm)", donate: "var(--ll-orange-warm)" };

/** Foundation button. variant: primary | accent | donate | ghost | link. Disabled state dims to stone neutrals. */
export function Button({ variant = "primary", disabled = false, children, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  if (disabled) {
    return (
      <button
        disabled
        style={{ ...base, background: "var(--ll-stone-100)", color: "var(--ll-stone-300)", cursor: "not-allowed", ...style }}
        {...rest}
      >
        {children}
      </button>
    );
  }
  const v = variants[variant] || variants.primary;
  const hoverStyle =
    variant === "ghost"
      ? { borderColor: "var(--ll-navy)" }
      : variant === "link"
      ? { color: "var(--ll-orange)" }
      : hoverBg[variant]
      ? { background: hoverBg[variant] }
      : {};
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{ ...base, ...v, ...(hover ? hoverStyle : {}), ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

window.Button = Button;
