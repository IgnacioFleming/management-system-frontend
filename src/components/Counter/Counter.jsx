import { useContext } from "react";
import { useCounter } from "../../hooks/useCounter";
import { SalesContext } from "../../contexts/sales";

function Counter({ product }) {
  const { counter, substractFromCount, addToCount, refreshCount } = useCounter(1, product.stock);
  const { addQuantity, decreaseQuantity, refreshQuantity } = useContext(SalesContext);

  const handleAddQuantity = () => {
    addToCount();
    addQuantity(product);
  };

  const handleDecreaseQuantity = () => {
    substractFromCount();
    decreaseQuantity(product);
  };

  const handleRefreshQuantity = () => {
    refreshCount();
    refreshQuantity(product);
  };

  return (
    <div className="flex align-items-center gap-2">
      <i onClick={handleDecreaseQuantity} className="pi pi-minus-circle cursor-pointer"></i>
      <span data-testid="counter-value" className="block w-12">
        {counter}
      </span>
      <div className="flex gap-1 align-items-center">
        <i onClick={handleAddQuantity} className="pi pi-plus-circle cursor-pointer"></i>
        <i onClick={handleRefreshQuantity} className="pi pi-refresh m-2 cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Counter;
