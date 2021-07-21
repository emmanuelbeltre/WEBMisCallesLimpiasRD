import { TestBed } from '@angular/core/testing';

import { InformateService } from './informate.service';

describe('InformateService', () => {
  let service: InformateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
