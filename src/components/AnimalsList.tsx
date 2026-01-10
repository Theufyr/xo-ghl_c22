import { useQuery } from "@tanstack/react-query";
import  { sql } from "../lib/sql";

export default function AnimalsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const result = await sql("SELECT * FROM animals");
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <ul>
      {data.map((animal: any) => (
        <li key={animal.id}>
          {animal.name} - {animal.age}
        </li>
      ))}
    </ul>
  );
}
