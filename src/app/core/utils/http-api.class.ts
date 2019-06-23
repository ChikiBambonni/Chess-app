import { HttpClient } from '@angular/common/http';

import { UtilsHttp } from './http.class';

import 'reflect-metadata';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class BaseApi extends  UtilsHttp {
  public httpClient: HttpClient;

  protected fetch(options?: any): Observable<any> {
    const key = options.key;

    const params = {
      method: Reflect.getMetadata('method', this, key),
      url: Reflect.getMetadata('apiUrl', this, key),
      baseApiUrl: Reflect.getMetadata('baseApiUrl', this),
      errorResponse: Reflect.getMetadata('errorResponse', this, key),
      params: Array.from(options.args)[0]
    };

    return this.httpClient
      .request(params.method, `${params.baseApiUrl}${params.url}`, {
        params: this.getRequestParams(params.params)
      })
      .pipe(
        catchError(() => {
          if (params.errorResponse) {
            return of(options.errorResponse as any);
          }

          return of([]);
        })
      );
  }

  protected getValue(): Observable<any> {
    return of(null);
  }
}
