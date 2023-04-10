import { MovieListItem } from './list-item'
import { Movie } from '@/types/movie'

type MovieListProps = {
  movies?: Movie[],
  loading: boolean
}

export const MovieList: React.FC<React.HTMLAttributes<HTMLDivElement> & MovieListProps> = ({ movies, loading }) => {
  return (
    <>
    {!movies?.length && loading
      ? <div>Loading...</div>
      : movies
        ? movies.map((movie) => <MovieListItem key={movie._id} movie={movie} />)
        : <div>No Movie Found</div>}
    </>
  )
}
