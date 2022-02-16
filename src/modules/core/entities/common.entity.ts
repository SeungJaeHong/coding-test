export interface CommonDataResponse<T> {
  data: T;
}

interface ListResponse<T> {
  list: T[];
}

export interface CommonListResponse<T>
  extends CommonDataResponse<ListResponse<T>> {}
