import * as React from "react";

/**
 * An isometric cube cluster, oversized and clipped by its container — the only
 * correct way to use the illustration set. Requires a positioned parent with
 * `overflow: hidden`. Never render a cube small and centered.
 */
export interface CubeWatermarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** "01"–"05" */
  cube?: "01" | "02" | "03" | "04" | "05";
  /** green (default) or black — the black set is the recolorable master. */
  tone?: "green" | "black";
  /** Rendered width in px; go large — 260–400 inside cards. */
  size?: number;
  /** .14–.18 on navy; up to .5 on white marketing surfaces. */
  opacity?: number;
  corner?: "bottom-right" | "bottom-left" | "top-right";
  /** Path prefix to the design system root. */
  base?: string;
}

export declare function CubeWatermark(props: CubeWatermarkProps): JSX.Element;
