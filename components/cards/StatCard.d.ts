import * as React from "react";

/** A single figure and its caption — the deck's proof tiles. */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure, set in Barlow Semi Condensed 600. */
  value: React.ReactNode;
  label: React.ReactNode;
  /** tint (default) · dark · draft (unconfirmed figure) */
  tone?: "tint" | "dark" | "draft";
}

export declare function StatCard(props: StatCardProps): JSX.Element;
