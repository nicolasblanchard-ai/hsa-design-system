import * as React from "react";

/**
 * The brand's action element. Yellow `cta` is the website primary; mint
 * `primary` is the primary inside decks and documents. One primary per view.
 *
 * @startingPoint section="Core" subtitle="Yellow CTA, mint primary, navy, outline" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** cta = yellow web CTA · primary = mint · navy · outline · ghostOnNavy */
  variant?: "cta" | "primary" | "navy" | "outline" | "ghostOnNavy";
  size?: "s" | "m" | "l";
  disabled?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
