import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { SortDirection } from '@core/enums/sort.enums';
import { FIDE_DATA } from './liderboard.constants';
import { FIDETableElement } from './liderboard.interfaces';

export class LiderboardMocksClass extends MockBackendFactory<FIDETableElement> {
  items: FIDETableElement[] = FIDE_DATA;

  constructor () {
    super();

    this.numberFields = ['position', 'rating', 'year'];
  }

  sort(elements: FIDETableElement[], field: string, direction: SortDirection): FIDETableElement[] {
    return this.sortElements(elements, field, direction);
  }
}
