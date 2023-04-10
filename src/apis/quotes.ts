import { api } from "./api";

export default {
  all: () => api.get('/quote').then(({ data }) => data.docs)
}
