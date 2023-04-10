import { useState } from "react"

export const useCollection = <DataType>(fetchFunc: () => Promise<DataType[]>) => {
  const [list, setList] = useState([] as DataType[])
  const [loading, setLoading] = useState(false)

  const fetchList = async () => {
    setLoading(true)
    try {
      setList(await fetchFunc())
    } finally {
      setLoading(false)
    }
  }

  return {
    list,
    loading,
    fetchList
  }
}
