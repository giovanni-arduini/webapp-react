function FormReview() {
  return (
    <div className="container border py-3 bg-light">
      <form action="">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nome
          </label>
          <input
            type="username"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Il tuo nome"
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Scrivi la tua recensione
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Max 1000 caratteri"
            rows="3"
          ></textarea>
        </div>
        <select class="form-select mb-3" aria-label="Default select example">
          <option selected>Dai un voto al film</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Invia recensione
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
