export type Pagination = {
  current: number;
  total: number;
  size: number;
}

export type PaginationRequest = {
  page?: number,
  limit?: number
}

export type TheOneApiResponse<T> = {
  docs: T[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}
