import { useState } from "react";

export const useCounter = (initial, maxQuantity) => {
  const [counter, setCounter] = useState(initial);
  const addToCount = () => {
    if (counter + 1 <= maxQuantity) return setCounter(counter + 1);
  };
  const substractFromCount = () => {
    if (counter > 1) return setCounter(counter - 1);
  };

  const refreshCount = () => {
    setCounter(initial);
  };
  return { counter, substractFromCount, addToCount, refreshCount };
};
