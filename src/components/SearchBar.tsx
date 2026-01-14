import { useState } from "react";
import UseQuerySearchBar from "../hooks/UseQuerySearchBar"
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAnimalType = (searchParams.get("animalType")) ?? "";
  const getLocalisation = (searchParams.get("localisation")) ?? "";

  const [localisation, setLocalisation] = useState(getLocalisation);
  const [animalType, setAnimalType] = useState(getAnimalType);
  let navigate = useNavigate();
  
  function submitForm(event: any) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("animalType", animalType);
    params.set("localisation", localisation);
    const urlSearch = "/jadopte?" + params.toString();
    navigate(urlSearch);
  }
  const { data, isLoading, error } = UseQuerySearchBar ();
  
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log (data);
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <div>
            <label htmlFor="">Type d'animal</label>
          </div>
          <select onChange={(event) => setAnimalType(event.target.value)}>
            <option value="all">Tous les animaux</option>
            {data.map((form: any) =>
              form.type !== null ? (
                <option key={form.type} value={form.type}> {form.type} </option>
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
