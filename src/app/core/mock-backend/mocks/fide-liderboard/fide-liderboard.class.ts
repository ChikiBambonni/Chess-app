import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { SortDirection } from '@core/enums/sort.enums';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { FIDE_DATA } from './fide-liderboard.constants';
import { FIDETableElement } from './fide-liderboard.interfaces';

export class FIDELiderboardMocks extends MockBackendFactory<FIDETableElement> {
  items: FIDETableElement[] = FIDE_DATA;

  constructor () {
    super();

    this.numberFields = ['position', 'rating', 'year'];
  }

  getData(params): PaginationInterface<FIDETableElement> {
    return this.getTableData(params);
  }

  sort(elements: FIDETableElement[], field: string, direction: SortDirection): FIDETableElement[] {
    return this.sortElements(elements, field, direction);
  }
}
