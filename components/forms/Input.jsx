import React from "react";

export function Input({ label, hint, invalid = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", fontFamily: "var(--font-text)" }}>
      {label ? (
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
      ) : null}
      <input
        {...rest}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "19px",
          color: "var(--text-primary)",
          padding: "14px 16px",
          minHeight: "var(--hit-target)",
          background: "var(--white)",
          border: "1px solid " + (invalid ? "var(--red)" : focus ? "var(--focus-ring)" : "var(--border-inactive)"),
          borderRadius: "var(--radius-button)",
          outline: "none",
          ...style
        }}
      />
      {hint ? <span style={{ fontSize: "15px", color: invalid ? "var(--red)" : "var(--text-muted)" }}>{hint}</span> : null}
    </label>
  );
}
