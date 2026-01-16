import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
import UseWhere from "./UseWhere";

export default function UseQueryAnimalCard() {
  const useWhereReturn = UseWhere();
  
  return useQuery({
    queryKey: ["AnimalCard", useWhereReturn.paramsWhere],
    queryFn: async () => {
      const result = await sql(
        `SELECT animals.id,
          animals.name AS animal_name,
          animals.age, 
          animals.description,
          animals.image_url AS image_url,
          breeds.breed, 
          types.type,
          shelters.name AS shelter_name,
          cities.city
        FROM animals
        JOIN breeds ON animals.breed_id = breeds.id
        JOIN types ON breeds.type_id = types.id 
        JOIN shelters ON animals.shelter_id = shelters.id 
        JOIN cities ON shelters.city_id = cities.id
        ${useWhereReturn.where}
        LIMIT 8
        `,
        useWhereReturn.paramsWhere
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });
}
