import * as React from "react";

/**
 * The official lockups, used unchanged. Never recolour, stretch, outline or add effects.
 * Minimum heights: one-line 22px, stacked 40px. Clear space: one slash height on every side.
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lockup?:
    | "oneline-black" | "oneline-green" | "oneline-white"
    | "stacked-black" | "stacked-green" | "stacked-white"
    | "mark-black" | "mark-green";
  /** Rendered height in px. Defaults: 22 one-line, 80 stacked. */
  height?: number;
  /** Set a width instead and let the height follow. */
  width?: number | string;
  /** Path prefix to the design system root, e.g. "../../" from a nested page. */
  base?: string;
}

export declare function Logo(props: LogoProps): JSX.Element;
