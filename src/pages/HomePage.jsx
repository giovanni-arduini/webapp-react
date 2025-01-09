import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";

function HomePage() {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h1>Titolo</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Elenco film</h1>
          <MovieCard movie={movie}></MovieCard>
        </div>
      </section>
    </>
  );
}

export default HomePage;
