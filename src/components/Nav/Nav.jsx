import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
    <Navbar>
      <ul className="container">
        {routes.map((item, i) => {
          return (
            <li id={i}>
              <NavLink to={item.url}>{item.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </Navbar>
  );
}

export default Nav;
