import { TestBed } from '@angular/core/testing';

import { MisreportesService } from './misreportes.service';

describe('MisreportesService', () => {
  let service: MisreportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisreportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
