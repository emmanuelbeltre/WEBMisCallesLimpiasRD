import { TestBed } from '@angular/core/testing';

import { SobrenosotrosService } from './sobrenosotros.service';

describe('SobrenosotrosService', () => {
  let service: SobrenosotrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SobrenosotrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
