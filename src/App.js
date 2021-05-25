import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}&status=${status}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [value, gender, status]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeGenero = (e) => {
    setGender(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="filtroBuscador">
      <div className="filtroNombre">
        <input
          onChange={handleChange}
          value={value}
          className="input-character"
          placeholder=" Search your character"
        />

        {personajes.map((personajes) => (
          <h2> {personajes.name}</h2>
        ))}
      </div>

      <aside className="input-filter-radio">
        <h1> Filters </h1>
        <label for="genero" className="input-title">
          Genero
        </label>

        <h3> Femenino </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeGenero}
          type="radio"
          value="female"
          name="genero"
        />

        <h3> Masculino </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeGenero}
          type="radio"
          value="male"
          name="genero"
        />

        <h3>Unknown</h3>
        <input
        className="input-style-filter"
          onChange={handleChangeGenero}
          type="radio"
          value="unknown"
          name="genero"
        />

        <h3> Genderless </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeGenero}
          type="radio"
          value="genderless"
          name="genero"
        />
        <h3> Genderless </h3>

        <label for="status" className="input-title">
          Status{" "}
        </label>
        <h3> Alive </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeStatus}
          type="radio"
          value="alive"
          name="satus"
        />

        <h3> Dead </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeStatus}
          type="radio"
          value="dead"
          name="satus"
        />

        <h3> Unknown </h3>
        <input
        className="input-style-filter"
          onChange={handleChangeStatus}
          type="radio"
          value="unknown"
          name="satus"
        />
      </aside>
    </div>
  );
}

export default App;
