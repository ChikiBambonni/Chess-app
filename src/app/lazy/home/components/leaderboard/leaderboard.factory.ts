import { Observable } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { LiderboardType } from './leaderboard.enums';

export class LeaderboardLoaderFactory {

  static createInstanse(type: LiderboardType, repository: AppInfoRepository, params?: object): Observable<PaginationInterface<any>> {
    switch (type) {
      case LiderboardType.APP: {
        return repository.getAppTableList(params);
      }
      case LiderboardType.FIDE: {
        return repository.getFIDETableList(params);
      }
    }
  }
}
