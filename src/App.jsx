import DefaultLayout from "./layouts/DefaultLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
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
  );
}

export default App;
