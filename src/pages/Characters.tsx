import { useEffect } from "react";
import { useCharacters } from "@/hooks/characters";
import { MainFrame } from "@/components/main/frame";
import { CharacterList } from "@/components/character/list";

export default () => {
  const { characters, loading, fetchCharacters } = useCharacters()

  useEffect(() => {
    fetchCharacters();
  }, [])

  return (
    <div className="px-4 sm:px-8 py-6 sm:py-12">
      <MainFrame>
        {!characters.length && loading
          ? <div>Loading...</div>
          : <CharacterList characters={characters} loading={loading} />}
      </MainFrame>
    </div>
  )
}
