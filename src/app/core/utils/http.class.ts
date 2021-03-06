import { HttpParams } from '@angular/common/http';

import { Safe } from '@core/decorators/safe.decorator';

export abstract class Http {

  @Safe({returnValue: null})
  protected getRequestParams(params: object | null): HttpParams {
    let requestParams: HttpParams = new HttpParams();

    if (params) {
      Object.keys(params)
        .filter((key: string) => params[key] !== undefined && params[key] !== null)
        .forEach((key: string) => requestParams = this.updateParams(requestParams, key, params[key]));
    }

    return requestParams;
  }

  protected formatRequestParams(params: object): FormData {
    const formData: FormData = new FormData();

    Object.keys(params)
      .filter((key: string) =>  params[key] !== undefined && params[key] !== null)
      .forEach(key => formData.append(key, Array.isArray(params[key]) ? params[key].join(',') : params[key]));

    return formData;
  }

  protected updateParams(base: HttpParams, key: string, value: string): HttpParams {
    return base.set(key, value);
  }
}
