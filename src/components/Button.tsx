import React from "react";

interface ButtonProps {
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="bg-green-500 p-2 rounded-md text-white"
    >
      {text}
    </button>
  );
};

export default Button;
