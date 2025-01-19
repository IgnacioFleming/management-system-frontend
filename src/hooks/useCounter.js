import { useState } from "react";

export const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial);
  const addToCount = () => {
    setCounter(counter + 1);
  };
  const substractFromCount = () => {
    if (counter > 1) return setCounter(counter - 1);
  };

  const refreshCount = () => {
    setCounter(initial);
  };
  return { counter, substractFromCount, addToCount, refreshCount };
};
