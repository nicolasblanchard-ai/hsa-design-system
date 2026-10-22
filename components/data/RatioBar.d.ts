import * as React from "react";

/** A horizontal share bar: mint fill on a #E4E9EC track, value inside the fill. */
export interface RatioBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  /** 0–100. Rendered as the fill width and as the inline value. */
  percent: number;
  /** Right-aligned annotation inside the track. */
  note?: React.ReactNode;
}

export declare function RatioBar(props: RatioBarProps): JSX.Element;
