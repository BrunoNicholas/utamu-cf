import { TestBed } from '@angular/core/testing';

import { DevotionService } from './devotion.service';

describe('DevotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevotionService = TestBed.get(DevotionService);
    expect(service).toBeTruthy();
  });
});
