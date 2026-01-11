import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
export default function AnimalsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const result = await sql(
        "SELECT animals.id, animals.name AS animal_name, animals.age, animals.description, animals.image_url AS image_url, breeds.breed, types.type, shelters.name AS shelter_name, cities.city FROM animals JOIN breeds ON animals.breed_id = breeds.id JOIN types ON breeds.type_id = types.id JOIN shelters ON animals.shelter_id = shelters.id JOIN cities ON shelters.city_id = cities.id"
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div style={{}}>
      {data.map((animal: any) => (
        <section key={animal.id}>
          <img src={`/assets/img/${animal.image_url}`} />
          <p> {animal.type}</p>
          <p style={{ color: "var(--accent-color)" }}> {animal.animal_name} </p>
          <p>
            {animal.age} ans • {animal.breed}
          </p>
          <p> {animal.city}</p>
          <p> {animal.description}</p>{" "}
        </section>
      ))}
    </div>
  );
}
