export interface PaginationOptions {
  pageNumber: number; /*Current page*/
  pageSize: number; /*Elements per page*/
  totalPages: number; /*Total pages elements quantity*/
  totalElements: number; /*Total elements quantity*/
}

export interface PaginationInterface<T> extends PaginationOptions {
  elements: T[];
}
