import { Injectable } from '@angular/core';

import { Safe } from '@core/decorators/safe.decorator';

@Injectable()
export class StorageService {

  @Safe()
  public static getItem<T>(key: string): T {
    return this.fromJson(sessionStorage.getItem(key)) || this.fromJson(localStorage.getItem(key));
  }

  @Safe()
  public static setItem<T>(key: string, valueObj: T, remember: boolean = true) {
    if (remember) {
      localStorage.setItem(key, this.toJson<T>(valueObj));
    } else {
      sessionStorage.setItem(key, this.toJson<T>(valueObj));
    }
  }

  @Safe()
  public static removeItem(key: string) {
    sessionStorage.removeItem(key);
    localStorage .removeItem(key);
  }

  private static fromJson<T>(value: string): T {
    return JSON.parse(value);
  }

  private static toJson<T>(value: T): string {
    return JSON.stringify(value);
  }
}
