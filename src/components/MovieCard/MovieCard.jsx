function MovieCard({ movie }) {
  const { id, title, author, image, abstract } = movie;

  return <div>{title}</div>;
}

export default MovieCard;
