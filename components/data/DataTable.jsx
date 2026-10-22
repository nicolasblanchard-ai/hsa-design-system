import React from "react";

export function DataTable({ columns, rows, style, ...rest }) {
  const grid = "2fr " + columns.slice(1).map(() => "1fr").join(" ");
  return (
    <div
      {...rest}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        fontFamily: "var(--font-text)",
        ...style
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: grid,
          background: "var(--surface-card)",
          borderBottom: "1px solid var(--border)",
          padding: "15px 26px",
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-muted)"
        }}
      >
        {columns.map((c, i) => (
          <div key={i}>{c}</div>
        ))}
      </div>
      {rows.map((row, r) => (
        <div
          key={r}
          style={{
            display: "grid",
            gridTemplateColumns: grid,
            padding: "16px 26px",
            borderBottom: r === rows.length - 1 ? "none" : "1px solid #F1F4F3",
            fontSize: "19px",
            color: "var(--text-body)"
          }}
        >
          {row.map((cell, c) => (
            <div key={c} style={c === 0 ? { color: "var(--text-primary)", fontWeight: 500 } : null}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
