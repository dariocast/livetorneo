import { TestBed } from '@angular/core/testing';

import { PartiteService } from './partite.service';

describe('PartiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartiteService = TestBed.get(PartiteService);
    expect(service).toBeTruthy();
  });
});
