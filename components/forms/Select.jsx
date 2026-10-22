import React from "react";

export function Select({ label, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-text)" }}>
      {label ? (
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
      ) : null}
      <select
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "19px",
          color: "var(--text-primary)",
          padding: "14px 16px",
          minHeight: "var(--hit-target)",
          background: "var(--white)",
          border: "1px solid " + (focus ? "var(--focus-ring)" : "var(--border-inactive)"),
          borderRadius: "var(--radius-button)",
          outline: "none",
          ...style
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
