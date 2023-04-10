import { useEffect } from 'react';
import { useMovies } from '@/hooks/movies';
import { MainFrame } from '@/components/main/frame';
import { MovieList } from '@/components/movie/list';

export default () => {
  const { movies, loading, fetchMovies } = useMovies()

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <MainFrame>
        {!movies.length && loading
          ? <div>Loading...</div>
          : <MovieList movies={movies} loading={loading} />}
      </MainFrame>
    </div>
  )
}
