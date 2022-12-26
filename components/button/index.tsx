import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonProps) => {
  return <button {...props}>Click me</button>;
};

interface ButtonProps extends ButtonHTMLAttributes<any> {}
