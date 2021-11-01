import { TestBed } from '@angular/core/testing';

import { AbbreviationsService } from './abbreviations.service';

describe('AbbreviationsService', () => {
  let service: AbbreviationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbreviationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
