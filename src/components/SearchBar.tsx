// import { Form } from "react-router-dom";
import { useState } from "react";
export default function SearchBar() {
  const [localisation, setLocalisation] = useState("");
  const [animalType, setAnimalType] = useState("");
  function submitFrom(event: any) {
    event.preventDefault();
    setLocalisation("");
  }
  return (
    <>
      <form onSubmit={submitFrom}>
        <div>
          <div>
            <label htmlFor="">Type d'animal</label>
          </div>
          <select onChange={(event) => setAnimalType(event.target.value)}>
            <option value="chat">chat </option>
            <option value="chien">chien</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor="">Localisation</label>
          </div>
          <input
            value={localisation}
            onChange={(event) => setLocalisation(event.target.value)}
            type="text"
            placeholder="Votre ville "
          />
        </div>
        <div>
          <div>&nbsp;</div>
          <button type="submit">Rechercher 🔎</button>
        </div>
      </form>
  
    </>
  );
}
