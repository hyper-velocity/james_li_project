import { Quote } from '@/types/quote'

type QuoteListItemProps = {
  quote: Quote
}

export const QuoteListItem: React.FC<QuoteListItemProps> = ({ quote }) => {
  return (
    <div className='border-2 border-slate-600 hover:bg-white/10 rounded-lg cursor-pointer mb-4 last:mb-0'>
      <div className='w-full p-3'>
        {quote.dialog}
      </div>
    </div>
  )
}
