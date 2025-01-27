import { InputText } from "primereact/inputtext";
import styles from "./TextField.module.css";

function TextField({ input, label, onChange, value, invalid, helperText, className = "", type = "text" }) {
  return (
    <div className={`${className}`}>
      <span className="p-float-label">
        <InputText type={type} className={`w-full`} name={input} invalid={invalid} value={value} onChange={onChange} />
        <label htmlFor={input} className={helperText && `${styles.color_danger}`}>
          {label}
        </label>
      </span>
      {helperText && <div className={`${styles.helperText} ${styles.color_danger}`}>{helperText}</div>}
    </div>
  );
}

export default TextField;
