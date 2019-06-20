export interface PaginationOptions {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
}

export interface PaginationInterface<T> extends PaginationOptions {
  elements: T[];
}
