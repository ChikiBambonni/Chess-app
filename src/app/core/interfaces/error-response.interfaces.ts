export interface BackendHttpError {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string | number;
}

export interface ErrorResponse {
  errorCode: number;
  errorMessage: string;
  body?: BackendHttpError;
}
