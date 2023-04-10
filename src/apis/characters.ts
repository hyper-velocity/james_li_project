import { api } from './api';

export default {
  all: () => api.get('/character').then(({ data }) => data.docs)
}
