import { TestBed } from '@angular/core/testing';

import { ChessEngineService } from './chess-engine.service';

describe('ChessEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChessEngineService = TestBed.get(ChessEngineService);
    expect(service).toBeTruthy();
  });
});
