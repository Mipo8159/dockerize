import { ChangeEvent } from "react";

export interface IFormField {
  type: string;
  placeholder: string;
  name: string;
  label: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
