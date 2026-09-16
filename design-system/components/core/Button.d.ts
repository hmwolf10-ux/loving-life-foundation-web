import { ReactNode, CSSProperties, MouseEventHandler } from "react";

export interface ButtonProps {
  /** Visual style. "donate" is the condensed-uppercase CTA style used across the brand's donation flows. */
  variant?: "primary" | "accent" | "donate" | "ghost" | "link";
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
