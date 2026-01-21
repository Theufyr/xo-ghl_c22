import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
import UseWhere from "./UseWhere";

export default function UseQueryCount() {
  const useWhereReturn = UseWhere();

  return useQuery({
    queryKey: ["count", useWhereReturn.paramsWhere],
    queryFn: async () => {
      const result = await sql(
        `SELECT
        COUNT(animals.id) AS count
        FROM animals
        JOIN breeds ON animals.breed_id = breeds.id
        JOIN types ON breeds.type_id = types.id 
        JOIN shelters ON animals.shelter_id = shelters.id 
        JOIN cities ON shelters.city_id = cities.id
        ${useWhereReturn.where}
        `,
        useWhereReturn.paramsWhere
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    }
  });
}