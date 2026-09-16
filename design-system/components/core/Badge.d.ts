import { ReactNode, CSSProperties } from "react";

export interface BadgeProps {
  color?: "navy" | "orange" | "green" | "sky" | "soft" | "outline";
  /** Shows a small "live" dot before the label (e.g. "Applications open"). */
  dot?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
