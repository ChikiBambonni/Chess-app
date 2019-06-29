import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';

@Injectable()
export class LeaderboardService {

  private getParams(sortEvent: Sort, pageEvent: PageEvent): object {
    return {
      orderByField: sortEvent.active,
      orderDirection: sortEvent.direction,
      pagesize: pageEvent.pageSize,
      page: pageEvent.pageIndex + 1
    };
  }

  constructor(private repository: AppInfoRepository) {}

  getFIDETableList(sortEvent: Sort, pageEvent: PageEvent): Observable<any> {
    return this.repository.getFIDETableList(this.getParams(sortEvent, pageEvent));
  }

  getAPPTableList(sortEvent: Sort, pageEvent: PageEvent): Observable<any> {
    return this.repository.getAppTableList(this.getParams(sortEvent, pageEvent));
  }
}
