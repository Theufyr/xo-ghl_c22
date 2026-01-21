import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";

export default function UseQuerySelect () {
   return useQuery({
    queryKey: ["selectTypes"],
    queryFn: async () => {
      const result = await sql(
        "SELECT type FROM types"
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    }
  });
}