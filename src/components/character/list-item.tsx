import { Character } from '@/types/character'

type CharacterListItemProps = {
  character: Character;
}

export const CharacterListItem: React.FC<CharacterListItemProps> = ({ character }) => {
  return (
    <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
      <div className='h-full flex flex-col border-2 border-slate-600 hover:bg-white/10 rounded-lg cursor-pointer mb-4 last:mb-0'>
        <div className='w-full p-3'>
          {character.name}
        </div>
        <div className='max-w-md flex items-center justify-between text-xs mt-auto'>
          <div className='w-32 p-3'>
            {character.race}
          </div>
          <div className='w-32 p-3'>
            {character.gender}
          </div>
        </div>
      </div>
    </div>
  );
}
