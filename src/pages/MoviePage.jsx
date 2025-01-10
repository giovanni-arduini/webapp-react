import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoviePage() {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  function fetchMovie() {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data.movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  const { director, image, title, abstract, avg_vote, reviews } = movie;

  return (
    <>
      <section className="container">
        <img className="h-25" src={`http://localhost:3000/${image}`} alt="" />

        <div className="container">
          <h1>{title}</h1>
          <h3>{director}</h3>
        </div>
        <div className="container">
          <p>{abstract}</p>
          <strong>Media dei voti:</strong>
          <p>{avg_vote}</p>

          {reviews.map((review) => {
            return <p key={review.id}>{review.text}</p>;
          })}
        </div>
      </section>
    </>
  );
}

export default MoviePage;
