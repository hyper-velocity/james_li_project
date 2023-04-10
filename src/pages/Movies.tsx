import { useEffect } from 'react';
import { useMovies } from '@/hooks/movies';
import { CommonFrame } from '@/components/common/frame';
import { MovieList } from '@/components/movie/list';

export default () => {
  const { movies, loading, fetchMovies } = useMovies()

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <CommonFrame>
        {!movies.length && loading
          ? <div>Loading...</div>
          : <MovieList movies={movies} loading={loading} />}
      </CommonFrame>
    </div>
  )
}
