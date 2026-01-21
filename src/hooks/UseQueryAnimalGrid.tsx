import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";

export default function UseQueryAnimalGrid() {
    return useQuery ({
      queryKey: ["AnimalGrid"],
      queryFn: async () => {
        const result = await sql(
          `SELECT id, name AS animal_name, image_url FROM animals WHERE id<4 OR id>10 LIMIT 8`
        );
        if (!result.success) throw new Error(result.error);
        return result.data;
      }
    });
}
