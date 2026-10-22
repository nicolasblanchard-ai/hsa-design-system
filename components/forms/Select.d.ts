import * as React from "react";

/** Dropdown matching `Input`'s geometry. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  /** Option labels; the value equals the label. */
  options?: string[];
}

export declare function Select(props: SelectProps): JSX.Element;
