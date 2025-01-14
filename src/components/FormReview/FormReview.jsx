import { useState } from "react";
import axios from "axios";
import GlobalContext from "../../Context/GlobalContext";

const initialFormData = {
  text: "",
  vote: 1,
  name: "",
};

function FormReview({ id, onSuccess = () => {} }) {
  const [charCount, setCharCount] = useState(0);
  const charLimit = 400;

  const [formData, setFormData] = useState(initialFormData);
  const [isFormValid, setIsFormValid] = useState(true);
  const { setIsLoading } = useState(GlobalContext);

  function charCounter(e) {
    console.log("char");
    setCharCount(e.target.value.length);
  }

  function onFormChange(e) {
    console.log("Change");
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function storeReview(e) {
    e.preventDefault();

    //validazione

    if (
      !formData.name ||
      !formData.vote ||
      formData.name < 1 ||
      formData.name > 5
    ) {
      setIsFormValid(false);
      return;
    }

    setIsLoading(true);

    axios
      .post(`http://localhost:3000/api/movies/${id}/reviews`, formData)
      .then((res) => {
        setFormData(initialFormData), onSuccess();
      })
      .catch((err) => console.log(err));
    setIsFormValid(false);
    setIsLoading(false);
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
            maxLength={charLimit}
            value={formData.text}
            onChange={onFormChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Max 400 caratteri"
            rows="3"
          ></textarea>
          <span>
            {charCount}/{charLimit}
          </span>
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
        <div>
          <div className="d-flex ">
            {isFormValid === false && (
              <div className="text-danger">I dati non sono validi</div>
            )}
            <button className="btn btn-primary ms-auto" type="submit">
              Invia recensione
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
