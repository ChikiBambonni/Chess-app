import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material';

import { SortDirection } from '@core/enums/sort.enums';

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
