import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>Questo è il footer</div>
        <Link to="/" />
      </footer>
    </>
  );
}

export default Footer;
