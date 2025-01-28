import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import TextField from "../../components/TextField/TextField";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const container = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "-8px",
};
const formContainer = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "90%",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "25px",
};

const dividerStyle = { display: "flex", alignItems: "center", gap: 2, justifyContent: "center", width: "60%" };

function Register({ handleChange, handleSubmit, errors, values }) {
  return (
    <>
      <div className={styles.background}></div>
      <div style={container}>
        <div style={formContainer}>
          <img className={styles.logo} src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729167407/Business-manager/zarla-botica-de-la-ocho-1x1-2400x2400-20220404-qqb9hbbdg7rjvwdc83gv_gceu4t_oq3xfa.webp" alt="Logo.png" />
          <h2>Create Account</h2>
          <p className="mt-1 text-color">Please Register your new account.</p>
          <form id="Register" className={styles.form} onSubmit={handleSubmit}>
            <div className="flex justify-content-center">
              <TextField className="w-6 justify-self-center" input="username" label="Nombre de Usuario" onChange={handleChange} helperText={errors.username} error={errors.username && true} value={values.username} />
            </div>
            <div className="flex justify-content-center gap-5 w-full">
              <TextField input="first_name" label="Nombre" onChange={handleChange} helperText={errors.first_name} error={errors.first_name && true} value={values.first_name} />
              <TextField className={styles.shortInput} input="last_name" label="Apellido" onChange={handleChange} helperText={errors.last_name} error={errors.last_name && true} value={values.last_name} />
            </div>
            <TextField fullWidth input="email" label="Email" onChange={handleChange} helperText={errors.email} error={errors.email && true} value={values.email} />
            <div className="flex justify-content-center gap-5 w-full">
              <PasswordInput name="password" handleChange={handleChange} invalid={errors.password} helperText={errors.password} value={values.password} />
              <PasswordInput name="confirm_password" label="Confirmar Contraseña" handleChange={handleChange} invalid={errors.confirm_password} helperText={errors.confirm_password} value={values.confirm_password} />
            </div>
            {/* <div className="flex justify-content-center gap-5 w-full">
              <TextField fullWidth input="password" label="Contraseña" type="password" onChange={handleChange} helperText={errors.password} error={errors.password && true} value={values.password} />

              <TextField fullWidth input="confirm_password" label="Confirmar Contraseña" type="password" onChange={handleChange} helperText={errors.confirm_password} error={errors.confirm_password && true} value={values.confirm_password} />
            </div> */}

            <Button type="submit" label="Crear Cuenta" className="w-4 align-self-center" />
          </form>
          <div style={dividerStyle}>
            <div className={styles.line}></div>
            <p fontSize={15} className="m-2 text-color">
              OR
            </p>
            <div className={styles.line}></div>
          </div>

          <div>
            <p color="initial" className="m-2 text-color">
              Do you already have an account? Go to
              <Link to="/login" className="no-underline text-blue-500">
                &nbsp;Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
