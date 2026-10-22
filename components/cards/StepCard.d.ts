import * as React from "react";

/** One stop on a timeline: mint numbered circle over a top-accent card. */
export interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Circle content — "1", "2", or an arrow on the payoff step. */
  step: React.ReactNode;
  /** Uppercase phase label, e.g. "Weeks 1–4". */
  phase: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  /** The payoff step: yellow circle, navy card. */
  final?: boolean;
}

export declare function StepCard(props: StepCardProps): JSX.Element;
