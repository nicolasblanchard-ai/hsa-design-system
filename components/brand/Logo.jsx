import React from "react";

const FILES = {
  "oneline-black": "assets/logo/oneline-black.png",
  "oneline-green": "assets/logo/oneline-green.png",
  "oneline-white": "assets/logo/oneline-white.png",
  "stacked-black": "assets/logo/stacked-black.png",
  "stacked-green": "assets/logo/stacked-green.png",
  "stacked-white": "assets/logo/stacked-white.png",
  "mark-black": "assets/logo/mark-black-on-white.svg",
  "mark-green": "assets/logo/mark-green-on-black.svg"
};

export function Logo({ lockup = "oneline-green", height, width, base = "", style, ...rest }) {
  const stacked = lockup.startsWith("stacked");
  const h = height || (stacked ? 80 : 22);
  return (
    <img
      {...rest}
      src={base + FILES[lockup]}
      alt="HSG START ACCELERATOR"
      style={{ height: width ? "auto" : h, width: width || "auto", display: "block", ...style }}
    />
  );
}
