import { TestBed } from '@angular/core/testing';

import { EatService } from './eat.service';

describe('EatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EatService = TestBed.get(EatService);
    expect(service).toBeTruthy();
  });
});
