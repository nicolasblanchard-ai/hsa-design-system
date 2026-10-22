import * as React from "react";

/** A list row with the brand's square mint marker — never a disc. */
export interface BulletProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Marker edge length in px. 15–16 on slides, 11–13 inside cards. */
  size?: number;
  onNavy?: boolean;
}

export declare function Bullet(props: BulletProps): JSX.Element;
