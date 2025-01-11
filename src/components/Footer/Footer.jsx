import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>Questo è il footer</div>
        <Link to="/" />
      </footer>
    </>
  );
}

export default Footer;
