import * as React from "react";

/** Text field with an uppercase label; focus ring is mint ink. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper or error text below the field. */
  hint?: React.ReactNode;
  invalid?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
