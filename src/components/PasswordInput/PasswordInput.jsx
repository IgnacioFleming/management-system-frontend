import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import styles from "./PasswordInput.module.css";
import { customColors } from "../../helpers/utils";

function PasswordInput({ handleChange, name, value, invalid, helperText, className, label }) {
  return (
    <div className={className}>
      <FloatLabel className="w-full">
        <Password name={name} value={value} feedback={false} onChange={handleChange} toggleMask className="w-full" invalid={invalid} pt={{ iconField: { root: { className: "w-full" } }, input: { className: "w-full" }, showIcon: { style: { color: helperText && customColors.DANGER } }, hideIcon: { style: { color: helperText && customColors.DANGER } } }} />
        <label htmlFor="password" style={{ color: helperText && customColors.DANGER }}>
          {label || "Password"}
        </label>
      </FloatLabel>
      {helperText && <div className={`${styles.helperText} ${styles.color_danger}`}>{helperText}</div>}
    </div>
  );
}

export default PasswordInput;
