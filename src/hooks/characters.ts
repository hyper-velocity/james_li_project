import apis from '@/apis'
import { useCollection } from './collection'
import { Character } from '@/types/character'

export const useCharacters = () => {
  const {
    loading,
    list: characters,
    fetchList: fetchCharacters
  } = useCollection<Character>(apis.Characters.all)

  return {
    characters,
    loading,
    fetchCharacters
  }
}
