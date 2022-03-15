import React from "react";
interface InputProps {
  placeholder: string;
  type: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type }, ref) => {
    return <input placeholder={placeholder} type={type} ref={ref} />;
  }
);

export default Input;
