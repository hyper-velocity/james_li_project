import { useState } from 'react'
import { usePagination } from './pagination'
import { PaginationRequest, TheOneApiResponse } from '@/types'

export const useCollection = <DataType>(
  fetchFunc: (req: PaginationRequest) => Promise<TheOneApiResponse<DataType>>,
  paginationSize = 10,
) => {
  const paginationApi = usePagination(paginationSize)

  const [list, setList] = useState([] as DataType[]);
  const [loading, setLoading] = useState(false);
  const { setTotal } = paginationApi;

  const fetchList = async () => {
    setLoading(true);

    try {
      const res = await fetchFunc({
        limit: paginationApi.pagination.size,
        page: paginationApi.pagination.current + 1
      });
      setList(res.docs);
      setTotal(res.total);
    } finally {
      setLoading(false);
    }
  }

  return {
    ...paginationApi,
    list,
    loading,
    fetchList,
  }
}
