import * as React from "react";

/** Navy header over a light body — the "for investors / for corporates" card. */
export interface AudienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase mint label in the navy header, e.g. "For investors". */
  label: React.ReactNode;
  title: React.ReactNode;
  /** Body content — usually a stack of `Bullet`s. */
  children?: React.ReactNode;
}

export declare function AudienceCard(props: AudienceCardProps): JSX.Element;
