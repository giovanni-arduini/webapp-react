import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  function fetchMovies() {
    axios
      .get(
        "http://localhost:3000/api/movies"
        // , { params: { title: search } }
      )
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
            <h1 className="main-title">Instant classics</h1>
          </div>
          <form onSubmit={searchMovies} className="d-flex align-items-center">
            <input
              className="p-1"
              type="text"
              placeholder="Cerca un film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn bg-primary text-light mx-3">
              Cerca
            </button>
          </form>
        </div>
      </section>
      <section className="mb-5">
        <div className="container flex ">
          <div
            className="row row-gap-4
          "
          >
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
