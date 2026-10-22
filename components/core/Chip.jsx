import React from "react";

const TONES = {
  mint: { background: "var(--green-tint-2)", border: "1px solid var(--green-border)", color: "var(--green-deep)" },
  value: { background: "var(--green-tint-2)", border: "none", color: "var(--green-deep)", fontWeight: 700 },
  neutral: { background: "var(--white)", border: "1px solid var(--border)", color: "var(--text-body)" },
  outline: {
    background: "transparent",
    border: "1.5px solid var(--border-strong)",
    color: "#1B3341",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase"
  },
  draft: {
    background: "var(--yellow-bg)",
    border: "1px solid var(--yellow-border)",
    color: "var(--ink-black)",
    fontWeight: 800,
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  }
};

export function Chip({ tone = "mint", pill = false, marker = false, children, style, ...rest }) {
  return (
    <span
      {...rest}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontFamily: "var(--font-text)",
        fontSize: "17px",
        padding: "9px 15px",
        borderRadius: pill ? "var(--radius-pill)" : "var(--radius-chip)",
        ...TONES[tone],
        ...style
      }}
    >
      {marker ? <span style={{ width: 12, height: 7, background: "var(--green)" }} /> : null}
      {children}
    </span>
  );
}
