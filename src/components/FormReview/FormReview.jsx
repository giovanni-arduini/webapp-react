import { useState } from "react";
import axios from "axios";

const initialFormData = {
  text: "",
  vote: 1,
  name: "",
};

function FormReview({ id, onSuccess = () => {} }) {
  const [formData, setFormData] = useState(initialFormData);

  function onFormChange(e) {
    console.log("Change");
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function storeReview(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/api/movies/${id}/reviews`, formData)
      .then((res) => {
        setFormData(initialFormData), onSuccess();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container border py-3 bg-light">
      <form onSubmit={storeReview} action="">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nome
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={onFormChange}
            type="username"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Il tuo nome"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Scrivi la tua recensione
          </label>
          <textarea
            name="text"
            value={formData.text}
            onChange={onFormChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Max 1000 caratteri"
            rows="3"
          ></textarea>
        </div>
        <select
          name="vote"
          value={formData.vote}
          onChange={onFormChange}
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option defaultValue="option1">Dai un voto al film</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Invia recensione
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
