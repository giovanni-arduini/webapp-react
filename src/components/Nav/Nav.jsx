import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>ciao</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
