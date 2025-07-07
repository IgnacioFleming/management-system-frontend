import { Button } from "primereact/button";
import styles from "./DemoLogin.module.css";

const DemoLogin = ({ handleSubmit }) => {
  return (
    <>
      <div className={`${styles.container} flex align-items-center w-full ml-0 -mt-2 -mb-2`}>
        <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729264803/Business-manager/login-image-webp1.webp" alt="Login-image" className={`${styles.mainImage} w-6 h-full opacity-70 hidden lg:block`} />

        <div className="w-full lg:w-6 flex flex-column gap-2">
          <div className="flex justify-content-center">
            <img src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729266657/Business-manager/logo-with-caption_dwtzyf.png" alt="Logo" />
          </div>
          <h3 className="text-center text-color-secondary m-3">Login as a demo user:</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-column gap-5 align-items-center ">
              <Button type="submit" label="Log in" severity="info" className="w-10rem" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DemoLogin;
