import { Button } from "primereact/button";
import TextField from "../../components/TextField/TextField";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const Login = ({ handleChange, handleSubmit, values, errors }) => {
  return (
    <>
      <div className={`${styles.container} flex align-items-center w-full ml-0 -mt-2 -mb-2`}>
        <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729264803/Business-manager/login-image-webp1.webp" alt="Login-image" className={`${styles.mainImage} w-6 h-full opacity-70 hidden lg:block`} />

        <div className="w-full lg:w-6 flex flex-column gap-2">
          <div className="flex justify-content-center">
            <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729266657/Business-manager/logo-with-caption_dwtzyf.png" alt="Logo" />
          </div>
          <form className="m-0 w-full sm:w-auto flex-grow-1" onSubmit={handleSubmit}>
            <h3 className="text-center text-color-secondary m-3">Please enter your credentials here:</h3>
            <div className="flex flex-column gap-5 align-items-center ">
              <TextField label="Username" input="username" className="w-8 sm:w-5" onChange={handleChange} value={values.username} invalid={errors.username} helperText={errors.username} />
              <PasswordInput name="password" handleChange={handleChange} className="w-8 sm:w-5" value={values.password} invalid={errors.password} helperText={errors.password} />
              <Button type="submit" label="Log in" severity="info" className="w-10rem" />
            </div>
          </form>

          <div className="flex flex-column align-items-center">
            <h3 className="text-center text-color-secondary ">In case you don&apos;t have an account registered, you can create it here:</h3>
            <Link to="/register">
              <Button label="Register" severity="warning" className="w-10rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
