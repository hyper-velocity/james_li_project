import { Movie } from "@/types/movie"

type MovieListItemProps = {
  movie: Movie
}

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <div className="border-2 border-slate-600 rounded-lg mb-4 last:mb-0">
      <div className="w-full p-3">
        {movie.name}
      </div>
    </div>
  )
}
