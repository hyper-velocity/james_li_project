import { api } from './api';
import { PaginationRequest, TheOneApiResponse } from '@/types';
import { Movie } from '@/types/movie';

export default {
  all: (pagination: PaginationRequest = {}) =>
    api.get('/movie', { params: pagination })
    .then(({ data }) => data as TheOneApiResponse<Movie>)
}
