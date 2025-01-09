import BookCard from "../components/BookCard/BookCard";

function HomePage() {
  const book = {
    id: 1,
    title: "Il grande Gatsby",
    author: "H.S.Fitzgerald",
  };

  return (
    <>
      <section>
        <div className="container">
          <h1>Titolo</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Elenco film</h1>
          <BookCard book={book}></BookCard>
        </div>
      </section>
    </>
  );
}

export default HomePage;
