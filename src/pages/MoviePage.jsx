import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import FormReview from "../components/FormReview/FormReview";

function MoviePage() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  function fetchMovie() {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const voteStars = [1, 2, 3, 4, 5];
  // console.log(movie);
  // const { director, image, title, abstract, avg_vote } = movie;

  // const reviews = movie.reviews;
  // console.log(reviews);

  return movie ? (
    <>
      <section className="container">
        <Link to={"/"} className="btn bg-primary text-light mb-3">
          Torna alla lista completa
        </Link>
      </section>
      <section className="container m-auto d-flex mb-4">
        <img
          className="thumb-img h-25"
          src={`http://localhost:3000/${movie.image}`}
          alt=""
        />

        <div className="container d-flex flex-column">
          <h1>{movie.title}</h1>
          <h3>{movie.director}</h3>
          <p>{movie.abstract}</p>
        </div>
      </section>
      <section id="reviews_section" className=" mb-4">
        <div className="container ">
          <div className="d-flex justify-content-start">
            <div className="d-flex align-items-center mb-3">
              <h4 className="titleAvg">Media dei voti: </h4>

              {voteStars.map((n, i) => {
                return n <= movie.avg_vote ? (
                  <StarSolid
                    key={i}
                    className="starAvg text-warning"
                  ></StarSolid>
                ) : (
                  <StarIcon key={i} className="starAvg text-warning"></StarIcon>
                );
              })}
            </div>
            <p>
              {/* Media voti: <span> */}
              {/* { 
                {movie.avg_vote}
}</span> */}
            </p>
          </div>

          <h5 className="mb-3">Recensioni degli utenti</h5>

          <div>
            {movie.reviews.length ? (
              <ul className="container">
                {movie.reviews.map((review) => (
                  <ReviewCard review={review} key={review.id} />
                ))}
              </ul>
            ) : (
              <div>Nessuna recensione per questo film</div>
            )}
          </div>
        </div>
        <FormReview id={id} onSuccess={fetchMovie} />
      </section>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default MoviePage;
