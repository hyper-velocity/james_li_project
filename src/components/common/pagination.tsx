import { usePaginationData } from "@/hooks/pagination"
import { Pagination } from "@/types"

type CommonPaginationProps = {
  pagination: Pagination,
  nextPage: () => void,
  prevPage: () => void
}

export const CommonPagination: React.FC<CommonPaginationProps> = ({ pagination, nextPage, prevPage }) => {
  const {
    pageCount,
    hasNextPage,
    hasPrevPage
  } = usePaginationData(pagination)

  return (
    <div className="flex items-center">
      <span
        className={['mr-4', hasPrevPage ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'].join(' ')}
        onClick={prevPage}
      >
        &lt;
      </span>
      <span>
        {pagination.current + 1} of {pageCount}
      </span>
      <span
        className={['ml-4', hasNextPage ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'].join(' ')}
        onClick={nextPage}
      >
        &gt;
      </span>
    </div>
  )
}
