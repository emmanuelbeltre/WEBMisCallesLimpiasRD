import { TestBed } from '@angular/core/testing';

import { RegistroReciboService } from './registrorecibo.service';


describe('RegistroReciboService', () => {
  let service: RegistroReciboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroReciboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
