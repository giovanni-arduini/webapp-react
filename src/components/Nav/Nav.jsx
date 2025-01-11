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
    <>
      <nav className={`${styles.nav} navbar navbar-expand-lg mb-4`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="http://localhost:3000/logoipsum-338.svg" alt="" />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {routes.map((item, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <NavLink className="nav-link mx-4" to={item.url}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className={`${styles.nav}  d-flex bg-blue mb-5 `}>
        <div className="container">
          <a className="" href="/">
            <img
              src="http://localhost:3000/logoipsum-338.svg"
              alt="Logo"
              width="35"
              height="30"
            ></img>
          </a>
          <ul className="navbar-nav mx-3">
            {routes.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <NavLink to={item.url}>{item.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav> */}
    </>
  );
}

export default Nav;
