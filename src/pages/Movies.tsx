import { useEffect } from 'react';
import { useMovies } from '@/hooks/movies';
import { CommonFrame } from '@/components/common/frame';
import { MovieList } from '@/components/movie/list';
import { CommonPagination } from '@/components/common/pagination';

export default () => {
  const {
    movies,
    loading,
    fetchMovies,
    pagination,
    nextPage,
    prevPage,
  } = useMovies()

  useEffect(() => {
    fetchMovies();
  }, [pagination.current]);

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <CommonFrame>
        {
          !movies.length && loading
            ? <div>Loading...</div>
            : (
              <>
                <div className='flex justify-end text-orange-300 mb-4'>
                  <CommonPagination pagination={pagination} nextPage={nextPage} prevPage={prevPage} />
                </div>
                <MovieList movies={movies} loading={loading} />
              </>
            )
        }
      </CommonFrame>
    </div>
  );
}
