import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function fetchMovies() {
    axios
      .get("http://localhost:3000/api/movies", { params: { title: search } })
      .then((response) => {
        if (response.data.success === true) {
        }
        console.log(response.data.movies);
        setMovies(response.data.movies);
        console.log(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function searchMovies(e) {
    e.preventDefault();
    fetchMovies();
  }
  console.log(search);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <section>
        <div className="container mb-5 d-flex justify-content-between">
          <div>
            <h1>Film da vedere</h1>
          </div>
          <form onSubmit={searchMovies}>
            <input
              type="text"
              placeholder="Cerca un film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn">
              Cerca
            </button>
          </form>
        </div>
      </section>
      <section>
        <div className="container flex">
          <div className="row">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie}></MovieCard>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
