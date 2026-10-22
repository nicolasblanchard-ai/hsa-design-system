import * as React from "react";

/** The // section marker plus its uppercase label — sits at y 60 on every slide. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Switch the label and slash colors for placement on a navy surface. */
  onNavy?: boolean;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;
