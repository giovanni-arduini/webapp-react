import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer
        className={`${styles.footer} d-flex flex-column justify-content-center align-items-center`}
      >
        <div className="mb-2 mx-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque
          blanditiis animi asperiores praesentium molestiae perferendis minus
          commodi culpa recusandae!
        </div>
        <div className="d-flex justify-content-center">
          <Link
            to="/"
            className="mx-3  link-underline-opacity-0 link-light link-opacity-75 link-opacity-100-hover"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-3 link-underline-opacity-0 link-light link-opacity-75 link-opacity-100-hover"
          >
            About
          </Link>
          <Link
            to="/contacts"
            className="mx-3 link-underline-opacity-0 link-light link-opacity-75 link-opacity-100-hover"
          >
            Contacts
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
