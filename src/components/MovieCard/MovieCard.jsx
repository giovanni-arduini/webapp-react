import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { id, title, director, image, abstract } = movie;

  return (
    <div className=" col-3 gx-5 ">
      <div className="card h-100 text-white position-relative">
        <img src={image} className="card-img object-fit-cover h-100" />
        <div className="card-img-overlay p-0 ">
          <div className={("card-body", styles.cardBody)}>
            <h5 className="card-title">{title}</h5>
            <h6 className="card_subtite">{director}</h6>
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
