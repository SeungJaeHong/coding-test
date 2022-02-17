export interface CommonDataResponse<T> {
  data: T;
}

export interface PagingResponse<T> {
  list: T[];
  hasNextPage: boolean;
  totalCount: number;
}

export interface CommonPagingResponse<T>
  extends CommonDataResponse<PagingResponse<T>> {}
