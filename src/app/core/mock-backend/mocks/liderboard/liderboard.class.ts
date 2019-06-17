import { MockBackendFactory } from '@core/mock-backend/mock-backend.class';
import { FIDE_DATA } from './liderboard.constants';
import { FIDETableElement } from './liderboard.interfaces';

export class LiderboardMocksClass extends MockBackendFactory<FIDETableElement[]> {
  data: FIDETableElement[] = FIDE_DATA;

  getData(params): FIDETableElement[] {
    return this.data;
  }
}
