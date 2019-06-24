import { ChessGameModule } from './chess-game.module';

describe('ChessGameModule', () => {
  let chessGameModule: ChessGameModule;

  beforeEach(() => {
    chessGameModule = new ChessGameModule();
  });

  it('should create an instance', () => {
    expect(chessGameModule).toBeTruthy();
  });
});
