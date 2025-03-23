import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import TextField from "../../components/TextField/TextField";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const dividerStyle = { display: "flex", alignItems: "center", gap: 2, justifyContent: "center", width: "60%" };

function Register({ handleChange, handleSubmit, errors, values }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <img className={styles.logo} src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729266657/Business-manager/logo-with-caption_dwtzyf.png" alt="Logo.png" />
          <h2>Create Account</h2>
          <p className="m-0 text-color text-base">Please register your new account here:</p>
          <form id="Register" className={styles.form} onSubmit={handleSubmit}>
            <div className="flex justify-content-center w-full">
              <TextField className="w-8 sm:w-6 justify-self-center" input="username" label="Username" onChange={handleChange} helperText={errors.username} error={errors.username && true} value={values.username} />
            </div>
            <div className="flex flex-column sm:flex-row justify-content-center align-items-center gap-5 w-full">
              <TextField className="w-8 sm:w-full" input="first_name" label="First Name" onChange={handleChange} helperText={errors.first_name} error={errors.first_name && true} value={values.first_name} />
              <TextField className="w-8 sm:w-full" input="last_name" label="Last Name" onChange={handleChange} helperText={errors.last_name} error={errors.last_name && true} value={values.last_name} />
            </div>
            <TextField className="w-8 sm:w-full" input="email" label="Email" onChange={handleChange} helperText={errors.email} error={errors.email && true} value={values.email} />
            <div className="flex flex-column sm:flex-row justify-content-center gap-5 w-full w-8 sm:w-full">
              <PasswordInput className="sm:w-full" name="password" handleChange={handleChange} invalid={errors.password} helperText={errors.password} value={values.password} />
              <PasswordInput className="sm:w-full" name="confirm_password" label="Confirm Password" handleChange={handleChange} invalid={errors.confirm_password} helperText={errors.confirm_password} value={values.confirm_password} />
            </div>
            <Button severity="info" type="submit" label="Create Account" className="w-4 align-self-center" />
          </form>
          <div style={dividerStyle}>
            <div className={styles.line}></div>
          </div>

          <div>
            <p color="initial" className="m-4 w-full text-color text-base">
              Do you already have an account? Go to
              <Link to="/login" className="no-underline text-blue-500 inline">
                &nbsp;Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
