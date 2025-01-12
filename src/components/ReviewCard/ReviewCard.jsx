import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

function ReviewCard({ review }) {
  const { vote, name, text } = review;
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="card d-flex flex-column p-3">
      <p>{text}</p>
      <div className="d-flex align-items-center">
        <div>Voto:</div>
        <div>
          {stars.map((n, i) => {
            return n <= review.vote ? (
              <StarSolid key={i} className="star text-warning"></StarSolid>
            ) : (
              <StarIcon key={i} className="star text-warning"></StarIcon>
            );
          })}
        </div>
      </div>
      <div>
        <p className="">
          By <span>{name}</span>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
