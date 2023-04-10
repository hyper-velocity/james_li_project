import { useMemo, useState } from "react"
import { Pagination } from "@/types"

export const usePaginationData = (pagination: Pagination) => {
  const pageCount = useMemo(
    () => Math.ceil(pagination.total / pagination.size),
    [pagination.total, pagination.size]
  )

  const hasNextPage = useMemo(
    () => pagination.current < pageCount - 1,
    [pagination.current, pageCount]
  )

  const hasPrevPage = useMemo(
    () => pagination.current > 0,
    [pagination.current]
  )

  return {
    pageCount,
    hasNextPage,
    hasPrevPage
  }
}

export const usePagination = (size?: number) => {
  const [pagination, setPagination] = useState<Pagination>({
    current: 0,
    total: 0,
    size: size || 0
  })

  const {
    pageCount,
    hasNextPage,
    hasPrevPage
  } = usePaginationData(pagination)

  const nextPage = () => {
    if (!hasNextPage) { return; }

    setPagination({
      ...pagination,
      current: pagination.current + 1
    })
  }

  const prevPage = () => {
    if (!hasPrevPage) { return; }

    setPagination({
      ...pagination,
      current: pagination.current - 1
    })
  }

  const setTotal = (total: number) => {
    setPagination(({
      ...pagination,
      total
    }))
  }

  return {
    pagination,
    pageCount,
    hasNextPage,
    hasPrevPage,

    nextPage,
    prevPage,
    setTotal
  }
}
