import { useCounter } from "../../hooks/useCounter";

function Counter() {
  const { counter, substractFromCount, addToCount, refreshCount } = useCounter(1);
  return (
    <div className="flex align-items-center gap-2">
      <i onClick={substractFromCount} className="pi pi-minus-circle"></i>
      <span className="block w-12">{counter}</span>
      <div className="flex gap-1 align-items-center">
        <i onClick={addToCount} className="pi pi-plus-circle"></i>
        <i onClick={refreshCount} className="pi pi-refresh m-2"></i>
      </div>
    </div>
  );
}

export default Counter;
