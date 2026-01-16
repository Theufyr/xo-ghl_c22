import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
import { useSearchParams } from "react-router";

export default function UseQueryCount() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAnimalType = (searchParams.get("animalType")) ?? "";
  const getLocalisation = (searchParams.get("localisation")) ?? "";

  let where = "";
  const paramsWhere: any[] = [];

  if (getAnimalType !== null && getAnimalType !== "") {
    if (getAnimalType !=="all") {
      where = `WHERE types.type = ?`;
      paramsWhere.push(getAnimalType);
    }
  }
  if (getLocalisation !== null && getLocalisation !== "") {
    paramsWhere.push(getLocalisation);
    if (where == "") {
      where = `WHERE cities.city = ?`;
    } else {
      where = `WHERE types.type = ? AND cities.city = ?`;
    }
  }

   return useQuery({
    queryKey: ["count", getAnimalType, getLocalisation],
    queryFn: async () => {
      const result = await sql(
        `SELECT
        COUNT(animals.id) AS count
        FROM animals
        JOIN breeds ON animals.breed_id = breeds.id
        JOIN types ON breeds.type_id = types.id 
        JOIN shelters ON animals.shelter_id = shelters.id 
        JOIN cities ON shelters.city_id = cities.id
        ${where}
        `,
        paramsWhere
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    }
  });
}