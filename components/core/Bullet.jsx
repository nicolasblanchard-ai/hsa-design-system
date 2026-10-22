import React from "react";

export function Bullet({ children, size = 15, onNavy = false, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start", ...style }}>
      <span
        style={{
          marginTop: "0.4em",
          width: size,
          height: size,
          borderRadius: "4px",
          background: "var(--green)",
          flexShrink: 0
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "var(--type-list)",
          lineHeight: "var(--leading-snug)",
          color: onNavy ? "var(--on-navy-soft)" : "var(--text-eyebrow)"
        }}
      >
        {children}
      </div>
    </div>
  );
}
