import React from "react";

export function SlashRule({ tone = "green", size = 24, style, ...rest }) {
  const colors = { green: "var(--green)", ink: "var(--green-ink)", navy: "var(--navy)" };
  return (
    <div
      {...rest}
      aria-hidden="true"
      style={{
        color: colors[tone],
        fontFamily: "var(--font-text)",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.1em",
        overflow: "hidden",
        whiteSpace: "nowrap",
        userSelect: "none",
        ...style
      }}
    >
      {"/".repeat(160)}
    </div>
  );
}
