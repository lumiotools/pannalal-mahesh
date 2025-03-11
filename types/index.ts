import { ReactNode } from "react";

export interface Section {
  id: string;
  label: string;
  bgColor: string;
  title: string;
  description?: string;
  image?: string;
  buttonText?: string;
  icon: ReactNode;
}