
import UseQuerySelect from "./UseQuerySelect"

export default function UseQuerySelectResult() {
   const { data, isLoading, error } = UseQuerySelect ();
   return {
    data: data,
    isLoading: isLoading,
    error: error,
   }
}