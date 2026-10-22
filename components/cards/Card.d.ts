import * as React from "react";

/**
 * The system's surface. Elevation comes from fill and border only — never a shadow.
 *
 * @startingPoint section="Cards" subtitle="Top-accent, default, tint, dark, inactive, draft" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** accent = 4px mint top edge · default · tint · dark (navy) · inactive ("before") · draft (yellow, unverified) */
  variant?: "accent" | "default" | "tint" | "dark" | "inactive" | "draft";
  /** Ghost index numeral, e.g. "01". */
  index?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
