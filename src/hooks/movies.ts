import apis from "@/apis"
import { useCollection } from "./collection"

export const useMovies = () => {
  const {
    loading,
    list: movies,
    fetchList: fetchMovies
  } = useCollection(apis.Movies.all)

  return {
    movies,
    loading,
    fetchMovies
  }
}
