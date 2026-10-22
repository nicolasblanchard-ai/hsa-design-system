import React from "react";

export function StepCard({ step, phase, title, children, final = false, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", position: "relative", ...style }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "var(--radius-pill)",
          background: final ? "var(--yellow)" : "var(--green)",
          color: final ? "var(--ink-black)" : "var(--green-deep)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: final ? "var(--font-text)" : "var(--font-display)",
          fontSize: "26px",
          fontWeight: final ? 800 : 600,
          position: "relative",
          zIndex: 2
        }}
      >
        {step}
      </div>
      <div
        style={{
          flex: 1,
          background: final ? "var(--navy)" : "var(--surface-card)",
          border: final ? "none" : "1px solid var(--border)",
          borderTop: final ? "none" : "var(--accent-top)",
          borderRadius: final ? "var(--radius-band)" : "var(--radius-accent-card)",
          padding: "var(--space-6) var(--space-6)"
        }}
      >
        <div style={{ fontFamily: "var(--font-text)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: final ? "var(--green)" : "var(--green-label)" }}>
          {phase}
        </div>
        <div style={{ fontFamily: "var(--font-text)", fontSize: "var(--type-card-title)", fontWeight: 600, marginTop: "var(--space-1)", color: final ? "var(--on-navy)" : "var(--text-primary)" }}>
          {title}
        </div>
        <div style={{ fontFamily: "var(--font-text)", fontSize: "var(--type-body)", lineHeight: 1.4, marginTop: "var(--space-3)", color: final ? "var(--on-navy-body)" : "var(--text-body)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
