import React from "react";

const BASE = {
  fontFamily: "var(--font-text)",
  fontSize: "19px",
  lineHeight: 1,
  borderRadius: "var(--radius-button)",
  padding: "15px 30px",
  minHeight: "var(--hit-target)",
  border: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-2)",
  transition: "background 120ms ease, border-color 120ms ease, color 120ms ease"
};

const VARIANTS = {
  cta: { background: "var(--action-web)", color: "var(--action-web-ink)", fontWeight: 700 },
  primary: { background: "var(--action-deck)", color: "var(--action-deck-ink)", fontWeight: 700 },
  navy: { background: "var(--navy)", color: "var(--on-navy)", fontWeight: 600 },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    fontWeight: 600,
    border: "1.5px solid var(--border-inactive)",
    padding: "14px 30px"
  },
  ghostOnNavy: {
    background: "transparent",
    color: "var(--on-navy)",
    fontWeight: 600,
    border: "1.5px solid var(--on-navy-rule)",
    padding: "14px 30px"
  }
};

const HOVER = {
  cta: { background: "var(--action-web-hover)" },
  primary: { background: "var(--action-deck-hover)", color: "var(--white)" },
  navy: { background: "var(--on-navy-rule)" },
  outline: { borderColor: "var(--text-primary)" },
  ghostOnNavy: { borderColor: "var(--green)", color: "var(--green)" }
};

const SIZES = {
  s: { fontSize: "16px", padding: "11px 20px" },
  m: {},
  l: { fontSize: "22px", padding: "18px 36px" }
};

export function Button({ variant = "cta", size = "m", disabled = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const disabledStyle = {
    background: "var(--surface-inactive)",
    color: "var(--text-faint)",
    border: "1px solid var(--border)",
    cursor: "not-allowed"
  };
  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...BASE,
        ...VARIANTS[variant],
        ...SIZES[size],
        ...(hover && !disabled ? HOVER[variant] : null),
        ...(disabled ? disabledStyle : null),
        ...style
      }}
    >
      {children}
    </button>
  );
}
