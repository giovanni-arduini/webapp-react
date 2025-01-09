import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";

function HomePage() {
  const [movies, setMovies] = useState([]);

  function fetchMovies() {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        console.log(response.data.movies);
        setMovies(response.data.movies);
        console.log(movies);
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
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>;
          })}
        </div>
      </section>
    </>
  );
}

export default HomePage;
