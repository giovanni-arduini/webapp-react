import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { id, title, director, image, abstract } = movie;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 gx-5 d-flex">
      <div className="card text-white position-relative flex-grow-1">
        <img
          src={image}
          className="card-img object-fit-cover h-100"
          alt={title}
        />
        <div className="card-img-overlay p-0">
          <div className={`${styles.cardBody} card-body`}>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2">{director}</h6>
            <p className="card-text mb-3">{abstract}</p>
            <Link className={styles.cardLink} to={`/movies/${id}`}>
              Scopri il film
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
