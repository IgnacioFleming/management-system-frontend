import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import styles from "./PasswordInput.module.css";

function PasswordInput({ handleChange, name, value, invalid, helperText, className }) {
  // const [showPassword, setShowPassword] = useState(false);
  // const visibilityIconStyle = errors.password && { color: "#d32f2f" };
  const dangerColor = "#d32f2f";
  return (
    <div className={className}>
      <FloatLabel className="w-full">
        <Password name={name} inputId="password" value={value} feedback={false} onChange={handleChange} toggleMask className="w-full" invalid={invalid} pt={{ iconField: { root: { className: "w-full" } }, input: { className: "w-full" }, showIcon: { style: { color: helperText && dangerColor } }, hideIcon: { style: { color: helperText && dangerColor } } }} />
        <label htmlFor="password" style={{ color: helperText && dangerColor }}>
          Contraseña
        </label>
      </FloatLabel>
      {helperText && <div className={`${styles.helperText} ${styles.color_danger}`}>{helperText}</div>}
    </div>
  );
}

export default PasswordInput;
