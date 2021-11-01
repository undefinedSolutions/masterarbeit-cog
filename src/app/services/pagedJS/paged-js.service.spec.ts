import { TestBed } from '@angular/core/testing';

import { PagedJSService } from './paged-js.service';

describe('PagedJSService', () => {
  let service: PagedJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagedJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
