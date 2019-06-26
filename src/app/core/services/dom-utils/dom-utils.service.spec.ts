import { TestBed } from '@angular/core/testing';

import { DomUtilsService } from './dom-utils.service';

describe('DomUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomUtilsService = TestBed.get(DomUtilsService);
    expect(service).toBeTruthy();
  });
});
