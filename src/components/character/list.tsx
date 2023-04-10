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
        ? characters.map((character) => <CharacterListItem key={character._id} character={character} />)
        : <div>No Character Found</div>}
    </>
  )
}
