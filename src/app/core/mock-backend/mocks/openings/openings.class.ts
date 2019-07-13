import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { SortDirection } from '@core/enums/sort.enums';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { Opening } from './openings.interfaces';
import { OPENINGS_DATA } from './openings.constants';

export class OpeningsMocks extends MockBackendFactory<Opening> {
  items: Opening[] = OPENINGS_DATA;

  constructor () {
    super();

    this.numberFields = ['id'];
  }

  getData(params): PaginationInterface<Opening> {
    return this.getTableData(params);
  }

  sort(elements: Opening[], field: string, direction: SortDirection): Opening[] {
    return this.sortElements(elements, field, direction);
  }
}
