import { TestBed } from '@angular/core/testing';
import { MispuntosService } from './mispuntos.service';

describe('MispuntosService', () => {
  let service: MispuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MispuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
