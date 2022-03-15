import React, { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import { useStore, useTheme } from "../zustand/useStore";

const Form: React.FC<{}> = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);
  const countStore = useStore();
  const themeStore = useTheme();

  return (
    <div className="w-3/5  p-3 bg-green-300 flex flex-col items-center">
      <div className=" flex justify-center gap-2">
        <Button
          text="Toggle theme"
          onClickHandler={themeStore.toggleDarkMode}
        />
        <Button text="Increment" onClickHandler={countStore.increment} />
        <Button text="Decrement" onClickHandler={countStore.decrement} />
        <Button
          text="Increment By"
          onClickHandler={() => {
            if (numberInputRef.current?.value) {
              countStore.incrementWithValue(
                parseInt(numberInputRef.current!.value)
              );
            }
          }}
        />
      </div>
      <div className="mt-3">
        <Input ref={numberInputRef} placeholder={"Input number"} type="text" />
        <p className="text-2xl text-center">{countStore.count}</p>
      </div>
    </div>
  );
};

export default Form;
