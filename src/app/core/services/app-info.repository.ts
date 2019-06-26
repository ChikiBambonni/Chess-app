import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Api, Get } from '@core/decorators/http.decorators';
import { environment } from '@environment';
import { HttpApi } from '@core/utils/http-api.class';
import { InfoRepository } from '@core/interfaces/app-info-repository.interfaces';

import { Observable } from 'rxjs';

@Injectable()
@Api(environment.mongoapi)
export class AppInfoRepository extends HttpApi implements InfoRepository {

  constructor(public httpClient: HttpClient) {
    super();
  }

  @Get('/ChikiBambuki/FIDELeaderboard')
  public getFIDETableList(params?: object): Observable<any> {
    return this.getValue();
  }

  @Get('/ChikiBambuki/AppLeaderboard')
  public getAppTableList(params?: object): Observable<any> {
    return this.getValue();
  }
}
