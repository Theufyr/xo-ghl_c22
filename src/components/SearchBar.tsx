// import { Form } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
export default function SearchBar() {
  const [localisation, setLocalisation] = useState("");
  const [animalType, setAnimalType] = useState("");
  function submitFrom(event: any) {
    event.preventDefault();
    setLocalisation("");
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const result = await sql(
        "SELECT type, NULL AS city, NULL AS zip_code FROM types UNION ALL SELECT NULL AS type, city, zip_code FROM cities"
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });

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
