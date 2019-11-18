import { Injectable } from '@angular/core';

import { MockBackendOption } from './mock-backend.interfaces';
import { StorageService } from '@core/services/storage/storage.service';
import { BackendDataMode } from './mock-backend.enum';
import { MockBackendUrl } from './mock-backend-url.class';

import UrlPattern from 'url-pattern';

@Injectable()
export class MockBackendService {
  public static options: Map<string, MockBackendOption>;

  public static keys: any;

  private readonly key = 'mock_data_service_v1';
  private mode: BackendDataMode = BackendDataMode.Mock;
  private defaultMode: BackendDataMode = BackendDataMode.Mock;

  constructor() {
    this.setMode(StorageService.getItem(this.key) || this.defaultMode);
  }

  public static initConfig(configUrl: MockBackendUrl): void {
    const options = configUrl.getConfig();

    this.keys = Object.keys(options).map(key => ({
      path: key,
      pattern: new UrlPattern(key),
      mock: options[key]
    }));

    this.options = configUrl.createMap(options);
  }

  public initGlobalMethods(): void {
    (window as any).setMockMode = () => {
      this.setMode(BackendDataMode.Mock, true);
    };

    (window as any).setRealMode = () => {
      this.setMode(BackendDataMode.Real, true);
    };
  }

  public getMode(): BackendDataMode {
    return this.mode;
  }

  public setMode(mode: BackendDataMode, reload: boolean = false): void {
    this.mode = mode;
    this.changeMode(mode, reload);
  }

  public isMock(): boolean {
    return this.mode === BackendDataMode.Mock;
  }

  private changeMode(mode: BackendDataMode, reload: boolean): void {
    StorageService.setItem(this.key, mode.toString());

    if (reload) {
      window.location.reload();
    }
  }
}
