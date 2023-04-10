import apis from "@/apis"
import { useCollection } from "./collection"

export const useCharacters = () => {
  const {
    loading,
    list: characters,
    fetchList: fetchCharacters
  } = useCollection(apis.Characters.all)

  return {
    characters,
    loading,
    fetchCharacters
  }
}
