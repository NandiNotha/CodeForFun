import { TestBed } from '@angular/core/testing';

import { PosesService } from './poses.service';

describe('PosesService', () => {
  let service: PosesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
