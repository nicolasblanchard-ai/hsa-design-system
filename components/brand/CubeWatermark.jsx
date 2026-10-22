import React from "react";

export function CubeWatermark({ cube = "03", tone = "green", size = 340, opacity = 0.16, corner = "bottom-right", base = "", style, ...rest }) {
  const pos = {
    "bottom-right": { right: -size * 0.22, bottom: -size * 0.26 },
    "bottom-left": { left: -size * 0.22, bottom: -size * 0.26 },
    "top-right": { right: -size * 0.22, top: -size * 0.26 }
  }[corner];
  return (
    <img
      {...rest}
      src={base + "assets/cubes/" + cube + "-" + tone + ".svg"}
      alt=""
      aria-hidden="true"
      style={{ position: "absolute", width: size, opacity, pointerEvents: "none", ...pos, ...style }}
    />
  );
}
