import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { SortDirection } from '@core/enums/sort.enums';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { APP_DATA } from './app-liderboard.constants';
import { AppTableElement } from './app-liderboard.interfaces';

export class AppLiderboardMocks extends MockBackendFactory<AppTableElement> {
  items: AppTableElement[] = APP_DATA;

  constructor () {
    super();

    this.numberFields = ['position', 'rating', 'games'];
  }

  getData(params): PaginationInterface<AppTableElement> {
    return this.getTableData(params);
  }

  sort(elements: AppTableElement[], field: string, direction: SortDirection): AppTableElement[] {
    return this.sortElements(elements, field, direction);
  }
}
