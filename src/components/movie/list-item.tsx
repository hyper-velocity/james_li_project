import StarRatings from 'react-star-ratings'
import { Movie } from "@/types/movie"

type MovieListItemProps = {
  movie: Movie
}

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <div className="border-2 border-slate-600 hover:bg-white/10 rounded-lg cursor-pointer mb-4 last:mb-0">
      <div className="p-3">
        {movie.name}
      </div>
      <div className="max-w-md flex items-center justify-between text-xs">
        <div className="w-32 p-3">
          {movie.runtimeInMinutes} mins
        </div>
        <div className="w-50 p-3">
          <StarRatings
            rating={movie.rottenTomatoesScore / 20}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
          />
        </div>
      </div>
    </div>
  )
}
