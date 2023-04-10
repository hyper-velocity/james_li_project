import { Character } from "@/types/character"

type CharacterListItemProps = {
  character: Character
}

export const CharacterListItem: React.FC<CharacterListItemProps> = ({ character }) => {
  return (
    <div className="border-2 border-slate-600 rounded-lg mb-4 last:mb-0">
      <div className="w-full p-3">
        {character.name}
      </div>
    </div>
  )
}
