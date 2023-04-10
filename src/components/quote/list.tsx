import { QuoteListItem } from './list-item'
import { Quote } from '@/types/quote'

type QuoteListProps = {
  quotes?: Quote[];
  loading: boolean;
}

export const QuoteList: React.FC<React.HTMLAttributes<HTMLDivElement> & QuoteListProps> = ({ quotes, loading }) => (
  <>
    {!quotes?.length && loading
      ? <div>Loading...</div>
      : quotes
        ? quotes.map((quote) => <QuoteListItem key={quote._id} quote={quote} />)
        : <div>No Quote Found</div>}
  </>
)
