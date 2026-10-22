import React from "react";

export function Eyebrow({ children, onNavy = false, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        fontFamily: "var(--font-text)",
        fontSize: "var(--type-eyebrow)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: onNavy ? "var(--on-navy-muted)" : "var(--text-eyebrow)",
        ...style
      }}
    >
      <span
        style={{
          color: onNavy ? "var(--green)" : "var(--green-ink)",
          letterSpacing: "var(--tracking-slash)",
          marginRight: "0.32em",
          display: "inline-block"
        }}
      >
        //
      </span>
      {children}
    </div>
  );
}
