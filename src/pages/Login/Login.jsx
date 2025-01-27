import { Button } from "primereact/button";
import TextField from "../../components/TextField/TextField";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

const Login = ({ handleChange, handleSubmit, values, errors }) => {
  return (
    <>
      <div className={`${styles.container} flex align-items-center`}>
        <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729264803/Business-manager/login-image-webp1.webp" alt="Login-image" className={`${styles.mainImage} w-6 opacity-70`} />

        <div className="w-6 flex flex-column gap-2">
          <div className="flex justify-content-center">
            <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729266657/Business-manager/logo-with-caption_dwtzyf.png" alt="Logo" />
          </div>
          <form className="m-6" onSubmit={handleSubmit}>
            <h3 className="text-center text-color-secondary m-5">Por favor ingresá tus credenciales para acceder:</h3>
            <div className="flex flex-column gap-5 align-items-center ">
              <TextField label="Nombre de Usuario" input="username" className="w-5" onChange={handleChange} value={values.username} invalid={errors.username} helperText={errors.username} />
              <PasswordInput name="password" handleChange={handleChange} className="w-5" value={values.password} invalid={errors.password} helperText={errors.password} />
              <div className="">
                <Button type="submit" label="Ingresar" severity="info" className="w-10rem" />
              </div>
            </div>
          </form>

          <div className="flex flex-column align-items-center">
            <h3 className="text-center text-color-secondary ">En caso de no tener cuenta podés ir crearla aquí:</h3>
            <Link to="/register">
              <Button label="Registrarme" severity="warning" className="w-10rem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
