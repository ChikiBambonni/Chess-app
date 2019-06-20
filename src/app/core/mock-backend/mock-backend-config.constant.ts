import { ApiType } from '@core/enums/api-url-type.enum';
import { LiderboardMocksClass } from './mocks/liderboard/liderboard.class';
import { MockBackendUrl } from './mock-backend-url.class';

const UrlsConfig = {
  [ApiType.MongoAPI]: {
    '/ChikiBambuki/FIDELeaderboard': new LiderboardMocksClass(),
  }
};

export const MockBackendConfig: MockBackendUrl = new MockBackendUrl(UrlsConfig);

export const defaultMockDelay = 400;
