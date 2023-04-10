import apis from '@/apis'
import { useCollection } from './collection'
import { Character } from '@/types/character'

export const useCharacters = () => {
  const {
    loading,
    list: characters,
    fetchList: fetchCharacters,
    ...restApi
  } = useCollection<Character>(apis.Characters.all, 12);

  return {
    characters,
    loading,
    fetchCharacters,
    ...restApi,
  };
}
