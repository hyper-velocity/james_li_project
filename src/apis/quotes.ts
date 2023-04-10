import { api } from './api';
import { PaginationRequest, TheOneApiResponse } from '@/types';
import { Quote } from '@/types/quote';

export default {
  all: (pagination: PaginationRequest = {}) =>
    api.get('/quote', { params: pagination })
    .then(({ data }) => data as TheOneApiResponse<Quote>)
}
