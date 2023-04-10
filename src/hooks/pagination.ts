import { useMemo, useState } from "react"

export const usePagination = (size?: number) => {
  const [pagination, setPagination] = useState({
    current: 0,
    total: 0,
    size: size || 0
  })

  const pageCount = useMemo(
    () => Math.ceil(pagination.total / pagination.size),
    [pagination.total, pagination.size]
  )

  const hasNextPage = useMemo(
    () => pagination.current >= pageCount,
    [pagination.current, pageCount]
  )

  const hasPrevPage = useMemo(
    () => pagination.current <= 0,
    [pagination.current]
  )

  const nextPage = () => {
    if (pagination.current >= pageCount) { return; }

    setPagination({
      ...pagination,
      current: pagination.current + 1
    })
  }

  const prevPage = () => {
    if (pagination.current <= 0) { return; }

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
