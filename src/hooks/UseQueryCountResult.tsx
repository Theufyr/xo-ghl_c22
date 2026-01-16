
import UseQueryCount from "./UseQueryCount"

export default function UseQueryCountResult() {
   const { data, isLoading, error } = UseQueryCount();
   return {
    data: data,
    isLoading: isLoading,
    error: error,
   }
}