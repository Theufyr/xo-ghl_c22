import { useState } from "react";
import UseQuerySearchBar from "../hooks/UseQuerySearchBar"
export default function SearchBar() {
  const [localisation, setLocalisation] = useState("");
  const [animalType, setAnimalType] = useState("");
  function submitFrom(event: any) {
    event.preventDefault();
    setLocalisation("");
  }
  const { data, isLoading, error } = UseQuerySearchBar ();
  
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <>
      <form onSubmit={submitFrom}>
        <div>
          <div>
            <label htmlFor="">Type d'animal</label>
          </div>
          <select onChange={(event) => setAnimalType(event.target.value)}>
            {data.map((form: any) =>
              form.type !== null ? (
                <option value={form.type}> {form.type} </option>
              ) : (
                ""
              )
            )}
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
