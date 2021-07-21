import { TestBed } from '@angular/core/testing';

import { ActualizarpuntosService } from './actualizarpuntos.service';

describe('ActualizarpuntosService', () => {
  let service: ActualizarpuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarpuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
