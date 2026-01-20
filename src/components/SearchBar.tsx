import { useState } from "react";
import UseQuerySelectResult from "../hooks/UseQuerySelectResult";
import SearchCount from "./SearchCount";
import { useNavigate, useSearchParams, useLocation } from "react-router";

export default function SearchBar() {
  const currentPage = useLocation();

  // depuis l'URL : récupération des variables animalType & localisation
  const [searchParams, setSearchParams] = useSearchParams();
  const getAnimalType = (searchParams.get("animalType")) ?? "";
  const getLocalisation = (searchParams.get("localisation")) ?? "";

  // pour le formulaire : mise en mémoire des états de animalType & localisation
  const [animalType, setAnimalType] = useState(getAnimalType);
  const [localisation, setLocalisation] = useState(getLocalisation);
  let navigate = useNavigate();
  
  // action lors de l'envoi du formulaire avec Rechercher
  function submitForm(event: any) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("animalType", animalType);
    if (localisation !== "") {
      params.set("localisation", localisation);
    }
    const urlSearch = "/jadopte?" + params.toString();
    navigate(urlSearch);
  }

  // récupération des types d'animaux à afficher dans le menu déroulant
  const querySelect = UseQuerySelectResult();
  if (querySelect.isLoading) return <p>Chargement...</p>;
  if (querySelect.error) return <p>Erreur : {querySelect.error.message}</p>;

  return (
    <>
      <form onSubmit={submitForm}>
        <div id="search_inputs">
          <div>
            <div>
              <label>Type d'animal</label>
            </div>
            <select onChange={(event) => setAnimalType(event.target.value)} value={animalType}>
              <option value="all">Tous les animaux</option>
              {querySelect.data.map((form: any) =>
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
              <label>Localisation</label>
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
        </div>
        {(currentPage.pathname !== "/") ?
        <SearchCount setAnimalType={setAnimalType} setLocalisation={setLocalisation} /> : ""
        }
      </form>
    </>
  );
}
