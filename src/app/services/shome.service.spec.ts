import { TestBed } from '@angular/core/testing';

import { ShomeService } from './shome.service';

describe('ShomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShomeService = TestBed.get(ShomeService);
    expect(service).toBeTruthy();
  });
});
