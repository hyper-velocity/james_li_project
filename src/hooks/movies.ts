import apis from '@/apis'
import { useCollection } from './collection'
import { Movie } from '@/types/movie'

export const useMovies = () => {
  const {
    loading,
    list: movies,
    fetchList: fetchMovies,
    ...restApi
  } = useCollection<Movie>(apis.Movies.all);

  return {
    movies,
    loading,
    fetchMovies,
    ...restApi,
  };
}
