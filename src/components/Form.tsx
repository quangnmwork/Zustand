import React, { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

const Form: React.FC<{}> = () => {
  const handlerClick = (event: React.MouseEvent) => {};
  const numberInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-green-300  w-3/5 p-3">
      <Button text="Toggle theme" onClickHandler={handlerClick} />
      <Button text="Increment" onClickHandler={handlerClick} />
      <Button text="Decrement" onClickHandler={handlerClick} />
      <Button text="Drecement By" onClickHandler={handlerClick} />
      <Input ref={numberInputRef} placeholder={"Input number"} type="text" />
    </div>
  );
};

export default Form;
