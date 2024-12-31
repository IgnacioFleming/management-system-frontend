import { InputText } from "primereact/inputtext";
import "./AddProducts.css";

function AddProductInput({ input, label, onChange, value, invalid, helperText }) {
  return (
    <div>
      <span className="p-float-label" style={{ minWidth: 400 }}>
        <InputText className="w-full" name={input} type="text" invalid={invalid} value={value} onChange={onChange} />
        <label htmlFor={input}>{label}</label>
      </span>
      {helperText && <div className="helperText">{helperText}</div>}
    </div>
  );
}

export default AddProductInput;
