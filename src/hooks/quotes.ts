import apis from "@/apis"
import { useCollection } from "./collection"
import { Quote } from "@/types/quote"

export const useQuotes = () => {
  const {
    loading,
    list: quotes,
    fetchList: fetchQuotes
  } = useCollection<Quote>(apis.Quotes.all)

  return {
    quotes,
    loading,
    fetchQuotes
  }
}
