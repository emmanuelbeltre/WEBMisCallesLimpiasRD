import { TestBed } from '@angular/core/testing';

import { OlvidemicontrasenaService } from './olvidemicontrasena.service';

describe('OlvidemicontrasenaService', () => {
  let service: OlvidemicontrasenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlvidemicontrasenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
