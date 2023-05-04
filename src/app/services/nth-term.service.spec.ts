import { TestBed } from '@angular/core/testing';

import { NthTermService } from './nth-term.service';

describe('NthTermService', () => {
  let service: NthTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NthTermService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

});
