import React from "react";

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
  boxSizing: "border-box",
};

/** Labeled text input / textarea with condensed-uppercase label and optional error/help text. */
export function Field({ label, type = "text", error, help, multiline = false, value, onChange, placeholder, style }) {
  const [focused, setFocused] = React.useState(false);
  const focusStyle = focused
    ? { borderColor: "var(--ll-navy)", boxShadow: "0 0 0 3px rgba(26,42,73,0.12)", outline: "none" }
    : {};
  const errorStyle = error
    ? { borderColor: "#B4321E", boxShadow: "0 0 0 3px rgba(180,50,30,0.12)" }
    : {};
  const Tag = multiline ? "textarea" : "input";
  return (
    <div style={style}>
      {label && (
        <label
          style={{
            fontFamily: "var(--font-condensed)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: 11,
            color: "var(--fg2)",
            marginBottom: 4,
            display: "block",
          }}
        >
          {label}
        </label>
      )}
      <Tag
        type={multiline ? undefined : type}
        rows={multiline ? 3 : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...fieldBase, ...focusStyle, ...errorStyle }}
      />
      {error && <div style={{ color: "#B4321E", fontSize: 12, marginTop: 4 }}>{error}</div>}
      {!error && help && <div style={{ color: "var(--fg3)", fontSize: 12, marginTop: 4 }}>{help}</div>}
    </div>
  );
}

window.Field = Field;
