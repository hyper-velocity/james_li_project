import { api } from "./api";

export default {
  all: () => api.get('/movie').then(({ data }) => data)
}
