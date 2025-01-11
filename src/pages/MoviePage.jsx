import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MoviePage() {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  function fetchMovie(id) {
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
    fetchMovie(id);
  }, []);

  const { director, image, title, abstract, avg_vote, reviews } = movie;
  // console.log(movie);
  console.log(reviews);

  return (
    <>
      <section className="container-sm">
        <Link to={"/"} className="btn bg-primary text-light mb-3">
          Torna alla lista completa
        </Link>
      </section>
      <section className="container m-auto d-flex ">
        <img
          className="thumb-img h-25"
          src={`http://localhost:3000/${image}`}
          alt=""
        />

        <div className="container d-flex flex-column justify-content-start align-items-baseline">
          <h1>{title}</h1>
          <h3>{director}</h3>
          <p>{abstract}</p>
          <strong>Media dei voti:</strong>
          <p>{avg_vote}</p>
        </div>
      </section>
      <section className="container-sm mb-4">
        {/* {reviews.map((review) => {
            return <p key={review.id}>{review.text}</p>;
          })} */}
      </section>
    </>
  );
}

export default MoviePage;
