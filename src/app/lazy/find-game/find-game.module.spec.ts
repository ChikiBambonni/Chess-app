import { FindGameModule } from './find-game.module';

describe('FindGameModule', () => {
  let findGameModule: FindGameModule;

  beforeEach(() => {
    findGameModule = new FindGameModule();
  });

  it('should create an instance', () => {
    expect(findGameModule).toBeTruthy();
  });
});
