import { InputText } from "primereact/inputtext";
import { useState } from "react";

function AddProductInput({ input, label }) {
  const [floatValue, setFloatValue] = useState("");

  return (
    <div>
      <span className="p-float-label" style={{ minWidth: 400 }}>
        <InputText className="w-full" name={input} type="text" value={floatValue} onChange={(e) => setFloatValue(e.target.value)} />
        <label htmlFor={input}>{label}</label>
      </span>
    </div>
  );
}

export default AddProductInput;
