import DefaultLayout from "./layouts/DefaultLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GlobalContext from "./Context/GlobalContext.js";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important: bundle includes Popper.js

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
