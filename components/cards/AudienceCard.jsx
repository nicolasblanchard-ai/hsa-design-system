import React from "react";

export function AudienceCard({ label, title, children, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        fontFamily: "var(--font-text)",
        ...style
      }}
    >
      <div style={{ background: "var(--navy)", padding: "var(--space-6) var(--space-7)" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--green)" }}>
          {label}
        </div>
        <div style={{ fontSize: "34px", fontWeight: 600, color: "var(--on-navy)", marginTop: "var(--space-1)" }}>{title}</div>
      </div>
      <div style={{ padding: "var(--space-6) var(--space-7)", background: "var(--surface-card)", display: "flex", flexDirection: "column", gap: "var(--space-5)", flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
