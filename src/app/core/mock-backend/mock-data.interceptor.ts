import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { MockBackendService } from './mock-backend.service';
import { isEmptyObj } from '@core/utils/core.utils';
import { UserService } from './services/user.service';
import { Safe } from '@core/decorators/safe.decorator';
import { defaultMockDelay } from './mock-backend-config.constant';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockDataInterceptor implements HttpInterceptor {
  constructor(private mockDataService: MockBackendService,
              private userService: UserService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.mockDataService.isMock()) {
      const entity = MockBackendService.keys.find((option: any) => option.pattern.match(req.url));

      if (entity) {
        const params = entity.pattern.match(req.url);

        const requestParams = isEmptyObj(params) ? this.getParams(req) : {
          queryParams: this.getParams(req),
          params
        };

        return of(new HttpResponse({
          status: 200,
          body: entity.mock.getData(
            requestParams,
            this.userService.getUser(),
            req.body
          )
        }))
          .pipe(delay(entity.mock.delay || defaultMockDelay));
      }
    }

    return next.handle(req);
  }

  @Safe({returnValue: {}})
  private getParams(clone: HttpRequest<any>) {
    const params = {};

    (clone.params['map'] as Map<string, any>).forEach((value: any, key: any) => params[key] = value[0]);
    return params;
  }
}
