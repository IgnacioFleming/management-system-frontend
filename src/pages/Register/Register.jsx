import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const container = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

const RegisterButtonStyle = { width: 200, height: 50, fontSize: 20, fontWeight: "semibold", borderRadius: 45, marginTop: 1, alignSelf: "center" };
const dividerStyle = { display: "flex", alignItems: "center", gap: 2, justifyContent: "center", width: "60%" };
const shortInputBox = { display: "flex", gap: "10px", width: "100%" };

function Register({ handleChange, handleSubmit, errors, values }) {
  return (
    <>
      <div className={styles.background}></div>
      <div style={container}>
        <div style={formContainer}>
          <img className={styles.logo} src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1680611686/Eccomerce/logo_ecommerce_ci16kw.png" alt="Logo.png" />
          <h2>Create Account</h2>
          <p className="mt-1">Please Register your new account.</p>
          <form id="Register" className={styles.form} onSubmit={handleSubmit}>
            <div style={shortInputBox}>
              {/* <TextField className={styles.shortInput} name="first_name" label="First Name" variant="outlined" onChange={handleChange} helperText={errors.first_name} error={errors.first_name && true} value={values.first_name} />
              <TextField className={styles.shortInput} name="last_name" label="Last Name" variant="outlined" onChange={handleChange} helperText={errors.last_name} error={errors.last_name && true} value={values.last_name} /> */}
            </div>
            {/* <TextField fullWidth name="email" label="Email" variant="outlined" onChange={handleChange} helperText={errors.email} error={errors.email && true} value={values.email} /> */}
            <div style={shortInputBox}>
              {/* <TextField fullWidth name="password" label="Password" variant="outlined" type="password" onChange={handleChange} helperText={errors.password} error={errors.password && true} value={values.password} />

              <TextField fullWidth name="confirm_password" label="Confirm Password" variant="outlined" type="password" onChange={handleChange} helperText={errors.confirm_password} error={errors.confirm_password && true} value={values.confirm_password} /> */}
            </div>

            <Button type="submit" style={RegisterButtonStyle}>
              SIGN UP
            </Button>
          </form>
          <div style={dividerStyle}>
            <div className={styles.line}></div>
            <p fontSize={15} className="m-2">
              OR
            </p>
            <div className={styles.line}></div>
          </div>

          <div>
            <p color="initial" className="m-2">
              Do you already have an account? Go to <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
