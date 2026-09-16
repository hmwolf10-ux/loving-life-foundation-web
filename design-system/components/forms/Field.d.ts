import { CSSProperties, ChangeEventHandler } from "react";

export interface FieldProps {
  label?: string;
  type?: string;
  multiline?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  error?: string;
  help?: string;
  style?: CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
