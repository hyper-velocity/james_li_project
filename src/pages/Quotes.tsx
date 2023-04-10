import { useEffect } from 'react';
import { useQuotes } from '@/hooks/quotes';
import { CommonFrame } from '@/components/common/frame';
import { QuoteList } from '@/components/quote/list';
import { CommonPagination } from '@/components/common/pagination';
import { usePagination } from '@/hooks/pagination';

export default () => {
  const {
    quotes,
    loading,
    fetchQuotes,
    pagination,
    nextPage,
    prevPage,
  } = useQuotes();

  useEffect(() => {
    fetchQuotes();
  }, [pagination.current]);

  return (
    <div className='px-4 sm:px-8 py-6 sm:py-12'>
      <CommonFrame>
        {
          !quotes.length && loading
            ? <div>Loading...</div>
            : (
              <>
                <div className='flex justify-end text-orange-300 mb-4'>
                  <CommonPagination pagination={pagination} nextPage={nextPage} prevPage={prevPage} />
                </div>
                <QuoteList quotes={quotes} loading={loading} />
              </>
            )
        }
      </CommonFrame>
    </div>
  );
}
