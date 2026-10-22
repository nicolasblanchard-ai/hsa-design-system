import * as React from "react";

/** Small labels: qualifiers, value badges, status pills and draft flags. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** mint · value (bold mint badge) · neutral · outline (cover qualifier) · draft (yellow, to-confirm) */
  tone?: "mint" | "value" | "neutral" | "outline" | "draft";
  /** Fully rounded instead of the 10px chip radius — used for status pills. */
  pill?: boolean;
  /** Prefix the mint 12x7 marker bar (cover qualifier chips). */
  marker?: boolean;
  children?: React.ReactNode;
}

export declare function Chip(props: ChipProps): JSX.Element;
