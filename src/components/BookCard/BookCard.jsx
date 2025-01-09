function BookCard({ book }) {
  const { id, title, author, image, abstract } = book;

  return <div>{title}</div>;
}

export default BookCard;
