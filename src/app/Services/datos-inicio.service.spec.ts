import { TestBed } from '@angular/core/testing';

import { DatosInicioService } from './datos-inicio.service';

describe('DatosInicioService', () => {
  let service: DatosInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
