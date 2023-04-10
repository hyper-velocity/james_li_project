import { useEffect } from 'react';
import { useCharacters } from '@/hooks/characters';
import { CommonFrame } from '@/components/common/frame';
import { CharacterList } from '@/components/character/list';

export default () => {
  const { characters, loading, fetchCharacters } = useCharacters()

  useEffect(() => {
    fetchCharacters();
  }, [])

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <CommonFrame>
        {!characters.length && loading
          ? <div>Loading...</div>
          : <CharacterList characters={characters} loading={loading} />}
      </CommonFrame>
    </div>
  )
}
