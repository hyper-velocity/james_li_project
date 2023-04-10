import { useEffect } from 'react';
import { useQuotes } from '@/hooks/quotes';
import { MainFrame } from '@/components/main/frame';
import { QuoteList } from '@/components/quote/list';

export default () => {
  const { quotes, loading, fetchQuotes } = useQuotes()

  useEffect(() => {
    fetchQuotes();
  }, [])

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <MainFrame>
        {!quotes.length && loading
          ? <div>Loading...</div>
          : <QuoteList quotes={quotes} loading={loading} />}
      </MainFrame>
    </div>
  )
}
