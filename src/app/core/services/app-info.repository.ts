import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Api, Get } from '@core/decorators/http.decorators';
import { environment } from '@environment';
// import { RequestCacheService } from './request-cache.service';
import { HttpApi } from '@core/utils/http-api.class';
// import { InfoRepositoryResponse } from '../interfaces/app-info-repository.interface';
// import { InfoRepository } from '../interfaces/info-repository.interface';

import { Observable, of } from 'rxjs';

@Injectable()
@Api(environment.mongoapi)
export class AppInfoRepository extends HttpApi {

  constructor(public httpClient: HttpClient) {
    super();
  }

  @Get('/ChikiBambuki/FIDELeaderboard')
  public getFIDETableList(params?: object): Observable<any> {
    return this.getValue();
  }
}

