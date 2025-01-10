import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, director, image, abstract } = movie;

  return (
    <div className=" col-4 gx-5">
      <div className="card  text-white ">
        <img src={image} className=" card-img object-fit-cover " />
        <div className="card-img-overlay">
          <div className="card-body bg-dark">
            <div className="card-title">{title}</div>
            <div className="card_subtite">{director}</div>
            <div className="card-text">{abstract}</div>
            <Link className="card-link" to={`/movies/${id}`}>
              Scopri il film
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
