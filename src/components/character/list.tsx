import { CharacterListItem } from './list-item'
import { Character } from '@/types/character'

type CharacterListProps = {
  characters?: Character[],
  loading: boolean
}

export const CharacterList: React.FC<React.HTMLAttributes<HTMLDivElement> & CharacterListProps> = ({ characters, loading }) => {
  return (
    <>
    {!characters?.length && loading
      ? <div>Loading...</div>
      : characters
        ? (
          <div className="flex flex-wrap items-stretch">
            {characters.map((character) => <CharacterListItem key={character._id} character={character} />)}
          </div>
        )
        : <div>No Character Found</div>}
    </>
  )
}
