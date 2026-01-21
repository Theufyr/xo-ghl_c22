import { useQuery } from "@tanstack/react-query";
import { sql } from "../lib/sql";
export default function UseQuerySearchBar () {
   return useQuery({
    queryKey: ["animals"],
    queryFn: async () => {
      const result = await sql(
        "SELECT type, NULL AS city, NULL AS zip_code FROM types UNION ALL SELECT NULL AS type, city, zip_code FROM cities"
      );
      if (!result.success) throw new Error(result.error);
      return result.data;
    },
  });


    
}