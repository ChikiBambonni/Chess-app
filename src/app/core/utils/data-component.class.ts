import { ChangeDetectorRef, SimpleChanges } from '@angular/core';

import { ErrorResponse } from '@core/interfaces/error-response.interfaces';

export abstract class DataComponent {

  public error: ErrorResponse;

  public isLoading = true;

  protected cd: ChangeDetectorRef;

  protected getChangesError(changes: SimpleChanges, key: string): ErrorResponse {
    return changes[key].currentValue.error;
  }

  protected getChangesValue<Type>(changes: SimpleChanges, key: string): Type {
    this.isLoading = false;
    this.resetError();
    return changes[key].currentValue.value;
  }

  public resetError(): void {
    if (this.error) {
      this.error = null;
      this.cd.markForCheck();
    }
  }

  public setErrorMode(error: ErrorResponse): void {
    this.error = error;
    this.isLoading = false;
    this.cd.markForCheck();
  }

  public setLoadingState(state: boolean = true): DataComponent {
    this.isLoading = state;
    return this;
  }

  public markForCheck(): void {
    this.cd.markForCheck();
  }
}
