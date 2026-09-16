import React from "react";

/** Standard content card — white surface, soft shadow, mid-round corners. Optional eyebrow label above the title. */
export function Card({ eyebrow, title, children, style }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        boxShadow: "var(--shadow-sm)",
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-condensed)",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: 11,
            color: "var(--ll-orange)",
            marginBottom: 8,
          }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, margin: "0 0 4px", color: "var(--ll-navy)" }}>
          {title}
        </h4>
      )}
      {children}
    </div>
  );
}

/** Photo card — image with warm "printed photo" shadow and a condensed-uppercase caption. Like a framed print. */
export function PhotoCard({ image, caption, imageHeight = 160, style }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-photo)",
        padding: "8px 8px 14px",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--ll-green-grass)",
          height: imageHeight,
          borderRadius: 4,
        }}
      />
      {caption && (
        <div
          style={{
            fontFamily: "var(--font-condensed)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: 10,
            color: "var(--fg3)",
            padding: "10px 6px 0",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

window.Card = Card;
window.PhotoCard = PhotoCard;
