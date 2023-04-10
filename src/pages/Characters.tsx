import { useEffect } from 'react';
import { useCharacters } from '@/hooks/characters';
import { CommonFrame } from '@/components/common/frame';
import { CharacterList } from '@/components/character/list';
import { CommonPagination } from '@/components/common/pagination';

export default () => {
  const {
    characters,
    loading,
    fetchCharacters,
    pagination,
    nextPage,
    prevPage,
  } = useCharacters();

  useEffect(() => {
    fetchCharacters();
  }, [pagination.current]);

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <CommonFrame>
        {
          !characters.length && loading
            ? <div>Loading...</div>
            : (
              <>
                <div className='flex justify-end text-orange-300 mb-4'>
                  <CommonPagination pagination={pagination} nextPage={nextPage} prevPage={prevPage} />
                </div>
                <CharacterList characters={characters} loading={loading} />
              </>
            )
        }
      </CommonFrame>
    </div>
  );
}
