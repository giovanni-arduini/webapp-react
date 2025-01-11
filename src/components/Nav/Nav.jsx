import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  const routes = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contacts",
      url: "/contacts",
    },
  ];

  return (
    <nav className="navbar bg-blue mb-3">
      <ul className="container">
        {routes.map((item, i) => {
          return (
            <li key={i}>
              <NavLink to={item.url}>{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
