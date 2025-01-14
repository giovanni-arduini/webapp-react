import Footer from "../components/Footer/Footer.jsx";
import Nav from "../components/Nav/Nav.jsx";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import GlobalContext from "../Context/GlobalContext.js";
import { useContext } from "react";

function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);

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
      {isLoading && <Loader />}
    </>
  );
}

export default DefaultLayout;
