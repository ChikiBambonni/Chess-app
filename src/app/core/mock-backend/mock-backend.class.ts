import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { SortDirection } from '@core/enums/sort.enums';
// import { MomentDateService } from '@core/services';

export abstract class MockBackendFactory<Type> {

  delay: number;

  protected numberFields: string[] = [];

  protected items: Type[] = [];

  // protected dateService = new MomentDateService();

  constructor(delay?: number) {
    this.delay = Number.isInteger(delay) ? delay : null;
  }

  // abstract getData(...args): Type | PaginationInterface<Type>;

  getElements(...args): Type[] {
    return this.items;
  }

  // protected getTableData(params): PaginationInterface<Type> {
  //   const pageSize: number = this.getPageSize(params.pageSize);
  //   const pageNumber: number = this.getPageNumber(params.pageNumber);

  //   const elements = this.sortElements(this.getElements(params), params.orderByField, params.orderDirection);
  //   const offset: number = (pageNumber - 1) * pageSize;
  //   const offsetElements = elements.slice(offset, offset + Number(pageSize));

  //   return {
  //     totalPages: Math.ceil(elements.length / pageSize),
  //     totalElements: elements.length,
  //     elements: offsetElements,
  //     pageNumber,
  //     pageSize
  //   };
  // }

  // protected getNumbersArray(min: number, max: number, isInt: boolean, count = 24): number[] {
  //   const array: number[] = [];

  //   for (let i = 0; i < count; i ++) {
  //     array.push(isInt ? this.getRandomInt(min, max) : this.getRandomFloat(min, max));
  //   }

  //   return array;
  // }

  // protected getRandomInt(min, max): number {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // protected getRandomFloat(min, max): number {
  //   return Math.random() * (max - min) + min;
  // }

  // protected getAverage(elements: number[]): number {
  //   let sum = 0;
  //   for ( let i = 0; i < elements.length; i++ ) {
  //     sum += elements[i];
  //   }

  //   return sum / elements.length;
  // }

  // protected sortElements<Type>(elements: Type[], field: string, direction: SortDirection): Type[] {
  //   if (this.numberFields.includes(field)) {
  //     return this.sortNumbers(elements, field, direction);
  //   } else {
  //     return this.sortStrings(elements, field, direction);
  //   }
  // }

  // protected sortNumbers<Type>(elements: Type[], field: string, direction: SortDirection): Type[] {
  //   return elements.sort((previous: Type, current: Type) => this.compareNumbers(previous, current, field, direction));
  // }

  // protected sortStrings<Type>(elements: Type[], field: string, direction: SortDirection): Type[] {
  //   return elements.sort((previous: Type, current: Type) => this.compareStrings(previous, current, field, direction));
  // }

  // protected compareNumbers<Type>(previous: Type, current: Type, field: string, direction: SortDirection): number {
  //   if (direction === SortDirection.Asc) {
  //     return previous[field] - current[field];
  //   }

  //   if (direction === SortDirection.Desc) {
  //     return current[field] - previous[field];
  //   }

  //   return 1;
  // }

  // private compareStrings(previous, current, field: string, direction: SortDirection): number {
  //   if (current[field] < previous[field]) {
  //     return direction === SortDirection.Asc ? -1 : 1;
  //   }

  //   if (current[field] > previous[field]) {
  //     return direction === SortDirection.Asc ? 1 : -1;
  //   }

  //   return 0;
  // }

  // private getPageNumber(pageNumber: number | null, defaultValue = 1): number {
  //   return Number.isInteger(Number(pageNumber)) ? pageNumber : defaultValue;
  // }

  // private getPageSize(pageSize: number | null, defaultValue = 10): number {
  //   return Number.isInteger(Number(pageSize)) ? pageSize : defaultValue;
  // }
}
