import { ReactNode, CSSProperties } from "react";

export interface CardProps {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

export interface PhotoCardProps {
  image: string;
  caption?: string;
  imageHeight?: number;
  style?: CSSProperties;
}
export function PhotoCard(props: PhotoCardProps): JSX.Element;
