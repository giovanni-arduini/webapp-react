import Footer from "../components/Footer/Footer.jsx";
import Nav from "../components/Nav/Nav.jsx";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main className="container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default DefaultLayout;
