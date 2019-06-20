export interface PaginationOptions {
  page: number;
  pagesize: number;
  totalPages: number;
  totalElements: number;
}

export interface PaginationInterface<T> extends PaginationOptions {
  elements: T[];
}
