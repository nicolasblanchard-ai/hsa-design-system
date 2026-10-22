import * as React from "react";

/** The long `//////` run that separates chapters in long-form documents. */
export interface SlashRuleProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "green" | "ink" | "navy";
  /** Glyph size in px; the run clips to its container width. */
  size?: number;
}

export declare function SlashRule(props: SlashRuleProps): JSX.Element;
