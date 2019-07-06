import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material';
import { Observable, of } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { LiderboardType } from './leaderboard.enums';
import { LeaderboardLoaderFactory } from './leaderboard.factory';

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

  getTableData(type: LiderboardType, sortEvent: Sort, pageEvent: PageEvent): Observable<PaginationInterface<any>> {
    return LeaderboardLoaderFactory.createInstanse(type, this.repository, this.getParams(sortEvent, pageEvent));
  }
}
