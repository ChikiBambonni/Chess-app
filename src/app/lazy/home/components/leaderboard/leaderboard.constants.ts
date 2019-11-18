import { SortDirection } from '@core/enums/sort.enums';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { ButtonInterface } from '@shared/components/button-group/button-group.interfaces';
import { LiderboardType } from './leaderboard.enums';

export const ButtonsList: ButtonInterface<LiderboardType>[] = [
  {
    label: 'FIDE',
    value: LiderboardType.FIDE
  }, {
    label: 'APP',
    value: LiderboardType.APP
  },
];

export const pageEvent: PageEvent = {
  pageIndex: 0,
  pageSize: 15,
  length: 0,
  previousPageIndex: 0
};

export const sortEvent: Sort = {
  active: 'position',
  direction: SortDirection.Asc
};
