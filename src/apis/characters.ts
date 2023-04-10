import { api } from './api';
import { PaginationRequest, TheOneApiResponse } from '@/types';
import { Character } from '@/types/character';

export default {
  all: (pagination: PaginationRequest = {}) =>
    api.get('/character', { params: pagination })
    .then(({ data }) => data as TheOneApiResponse<Character>)
}
