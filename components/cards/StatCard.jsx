import React from "react";

export function StatCard({ value, label, tone = "tint", style, ...rest }) {
  const tones = {
    tint: { background: "var(--green-tint)", border: "1px solid var(--green-border)", value: "var(--text-primary)", label: "var(--text-body)" },
    dark: { background: "var(--navy)", border: "none", value: "var(--on-navy)", label: "var(--on-navy-body)" },
    draft: { background: "var(--yellow-bg)", border: "1px dashed var(--yellow-border)", value: "var(--yellow-ink)", label: "var(--yellow-ink)" }
  };
  const t = tones[tone];
  return (
    <div
      {...rest}
      style={{
        fontFamily: "var(--font-text)",
        background: t.background,
        border: t.border,
        borderRadius: "var(--radius-band)",
        padding: "var(--space-6) var(--space-7)",
        ...style
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-figure-xl)", fontWeight: 600, lineHeight: 1, color: t.value }}>
        {value}
      </div>
      <div style={{ fontSize: "var(--type-body-s)", fontWeight: 500, color: t.label, marginTop: "var(--space-2)" }}>{label}</div>
    </div>
  );
}
