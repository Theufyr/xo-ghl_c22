import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
import type {
  typesParamsAnimalType,
  typesParamsLocalisation,
} from "../interface/Props";

export default function UseQueryAnimalCard(
  getAnimalType: typesParamsAnimalType,
  getLocalisation: typesParamsLocalisation
) {
  console.log(getAnimalType, getLocalisation);
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
  console.log(where, paramsWhere);
  return useQuery({
    queryKey: ["AnimalCard", getAnimalType, getLocalisation],
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
        ${where}
        `,
        paramsWhere
        //WHERE types.type = 'Chat'
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });
}
