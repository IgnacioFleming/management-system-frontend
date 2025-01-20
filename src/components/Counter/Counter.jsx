import { useContext, useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import { SalesContext } from "../../contexts/orders";

function Counter({ product }) {
  const { counter, substractFromCount, addToCount, refreshCount } = useCounter(1);
  const { setQuantity } = useContext(SalesContext);

  useEffect(() => {
    setQuantity(product, counter);
  }, [counter]);
  return (
    <div className="flex align-items-center gap-2">
      <i onClick={substractFromCount} className="pi pi-minus-circle cursor-pointer"></i>
      <span className="block w-12">{counter}</span>
      <div className="flex gap-1 align-items-center">
        <i onClick={addToCount} className="pi pi-plus-circle cursor-pointer"></i>
        <i onClick={refreshCount} className="pi pi-refresh m-2 cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Counter;
