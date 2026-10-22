import React from "react";

export function RatioBar({ label, percent, note, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", fontFamily: "var(--font-text)", ...style }}>
      <div style={{ width: 190, fontSize: "23px", fontWeight: 600, color: "var(--text-primary)", flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, position: "relative", height: 58, borderRadius: "var(--radius-button)", overflow: "hidden", background: "var(--track)" }}>
        <div style={{ position: "absolute", inset: "0 auto 0 0", width: percent + "%", background: "var(--green)" }} />
        <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, color: "var(--green-deep)" }}>{percent}%</span>
        </div>
        {note ? (
          <div style={{ position: "absolute", right: 18, top: 0, bottom: 0, display: "flex", alignItems: "center", fontSize: "17px", fontWeight: 500, color: "#7A8790" }}>
            {note}
          </div>
        ) : null}
      </div>
    </div>
  );
}
