import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";

export default function UseQueryAnimalGrid() {
    return useQuery ({
      queryKey: ["AnimalGrid"],
      queryFn: async () => {
        const result = await sql(
          `SELECT id, image_url FROM animals`
        );
        if (!result.success) throw new Error(result.error);
        return result.data;
      }
    });
}
