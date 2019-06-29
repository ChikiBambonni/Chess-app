import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { LiderboardType } from './leaderboard.enums';

@Injectable()
export class LeaderboardService {

  private getParams(sortEvent: Sort, pageEvent: PageEvent) {
    return {
      orderByField: sortEvent.active,
      orderDirection: sortEvent.direction,
      pagesize: pageEvent.pageSize,
      page: pageEvent.pageIndex + 1
    };
  }

  constructor(private repository: AppInfoRepository) {}

  getTableData(type: LiderboardType, sortEvent: Sort, pageEvent: PageEvent): Observable<any> {
    return this.repository[`get${type}TableList`](this.getParams(sortEvent, pageEvent));
  }
}
