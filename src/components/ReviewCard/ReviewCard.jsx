function ReviewCard({ review }) {
  const { vote, name, text } = review;

  return (
    <div className="card d-flex flex-column p-3">
      <p>{text}</p>
      <div className="d-flex">
        <p>Voto:</p>
        <div>{vote}</div>
      </div>
      <div>
        <p>
          By <span>{name}</span>
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
