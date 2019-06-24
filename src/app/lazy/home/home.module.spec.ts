import { HomeModule } from './home.module';

describe('TestModule', () => {
  let testModule: HomeModule;

  beforeEach(() => {
    testModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(testModule).toBeTruthy();
  });
});
