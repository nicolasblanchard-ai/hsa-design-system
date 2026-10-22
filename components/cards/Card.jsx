import React from "react";

const VARIANTS = {
  accent: {
    background: "var(--surface-card)",
    borderTop: "var(--accent-top)",
    borderRight: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    borderLeft: "1px solid var(--border)",
    borderRadius: "var(--radius-accent-card)"
  },
  default: {
    background: "var(--surface-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-card)"
  },
  tint: {
    background: "var(--green-tint)",
    border: "1px solid var(--green-border)",
    borderRadius: "var(--radius-card)"
  },
  dark: { background: "var(--navy)", border: "none", borderRadius: "var(--radius-card)", color: "var(--on-navy)" },
  inactive: {
    background: "var(--surface-inactive)",
    border: "1px dashed var(--border-inactive)",
    borderRadius: "var(--radius-card)",
    color: "var(--text-muted)"
  },
  draft: {
    background: "var(--yellow-bg)",
    border: "1px dashed var(--yellow-border)",
    borderRadius: "var(--radius-card)",
    color: "var(--yellow-ink)"
  }
};

export function Card({ variant = "default", index, title, children, style, ...rest }) {
  const dark = variant === "dark";
  return (
    <div
      {...rest}
      style={{
        fontFamily: "var(--font-text)",
        padding: "var(--space-6) var(--space-5)",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-none)",
        ...VARIANTS[variant],
        ...style
      }}
    >
      {index ? (
        <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, color: dark ? "#3E5A6C" : "var(--numeral-ghost)" }}>
          {index}
        </div>
      ) : null}
      {title ? (
        <div style={{ fontSize: "var(--type-card-title-s)", fontWeight: 600, marginTop: index ? "var(--space-3)" : 0, color: dark ? "var(--on-navy)" : "var(--text-primary)" }}>
          {title}
        </div>
      ) : null}
      {children ? (
        <div style={{ fontSize: "var(--type-body-s)", lineHeight: 1.38, color: dark ? "var(--on-navy-body)" : "var(--text-body)", marginTop: title ? "var(--space-2)" : 0 }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
