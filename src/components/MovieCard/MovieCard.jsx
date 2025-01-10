import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, author, image, abstract } = movie;

  return (
    <div className="card text-white col-4 gx-0 ">
      <img src={image} className=" card-img object-fit-cover " />
      <div className="card-img-overlay ">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card_subtite">{author}</div>
          <div className="card-text">{abstract}</div>
          <Link className="card-link" to={`/movies/${id}`}>
            Scopri il film
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
