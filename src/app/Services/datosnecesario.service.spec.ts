import { TestBed } from '@angular/core/testing';

import { DatosnecesarioService } from './datosnecesario.service';

describe('DatosnecesarioService', () => {
  let service: DatosnecesarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosnecesarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
