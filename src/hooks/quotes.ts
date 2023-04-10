import apis from "@/apis"
import { useCollection } from "./collection"

export const useQuotes = () => {
  const {
    loading,
    list: quotes,
    fetchList: fetchQuotes
  } = useCollection(apis.Quotes.all)

  return {
    quotes,
    loading,
    fetchQuotes
  }
}
