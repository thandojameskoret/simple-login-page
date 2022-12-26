import { InputHTMLAttributes } from "react";

export const Input = (props: InputProps) => {
  return <input {...props} />;
};

interface InputProps extends InputHTMLAttributes<any> {}
