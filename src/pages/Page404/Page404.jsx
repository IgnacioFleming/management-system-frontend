import { Link } from "react-router-dom";
import styles from "./Page404.module.css";
function Page404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Error 404</h1>
        <p>The page you are looking for may have been moved, deleted, renamed or never existed.</p>
        <Link to="/" className={styles.button}>
          Go back to Home
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image404} src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1729167407/Business-manager/image-404_t65cxz.webp" alt="Image-404" />
      </div>
    </div>
  );
}

export default Page404;
