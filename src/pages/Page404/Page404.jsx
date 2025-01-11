import { Link } from "react-router-dom";
import styles from "./Page404.module.css";
function Page404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Error 404</h1>
        <p>La página que está buscando se movió, quitó, renombró o podría no existir nunca.</p>
        <Link to="/" className={styles.button}>
          Ir a la página de Inicio
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image404} src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1728043860/Business-manager/image-404.png" alt="Image-404" />
      </div>
    </div>
  );
}

export default Page404;
