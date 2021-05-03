import { useState } from "react";
import { combobox } from "../lib/consts";

const Filtrations = ({ sortItems }) => {
  const [input, setInput] = useState("");

  const select = document.querySelector("#specialization");

  const handlerChange = (e) => {
    setInput(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    sortItems(input);
    setInput("");
  };
  return (
    <div className="container">
      <h5 align="center">Фильтрация:</h5>
      <form className="d-flex justify-content-center" onSubmit={handlerSubmit}>
        <select
          name="specialization"
          id="specialization"
          onChange={() => sortItems(select.value)}
        >
          фильтрация
          <option key={"default"} defaultChecked={true}>
            {" "}
            выберите поле фильтрации
            {""}
          </option>
          {combobox.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        &nbsp; &nbsp; &nbsp;
        <div>
          <input
            name="field"
            type="text"
            placeholder="введите поле фильтрации"
            value={input}
            onChange={handlerChange}
          />
          <button type="submit">фильтровать</button>
        </div>
      </form>
      <hr></hr>
    </div>
  );
};

export default Filtrations;
