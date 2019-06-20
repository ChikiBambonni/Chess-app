import { MockBackendOption } from './mock-backend.interfaces';
import { DictionaryInterface } from '@core/interfaces/dictionary.interfaces';
import { environment } from '@environment';

export class MockBackendUrl {
  constructor(public config: object) {}

  getConfig(): DictionaryInterface<MockBackendOption> {
    const map = Object.keys(this.config);
    const urls = {};
    map.forEach((type: string) => {
      const urlList = Object.keys(this.config[type]);

      urlList.forEach((url: string) => urls[`${environment.mongoapi}${url}`] = this.config[type][url]);
    });

    return urls;
  }

  createMap(options: DictionaryInterface<MockBackendOption>): Map<string, MockBackendOption> {
    const map = new Map<string, MockBackendOption>();

    Object.keys(options).forEach((key: string) => map.set(key, options[key]));

    return map;
  }
}
