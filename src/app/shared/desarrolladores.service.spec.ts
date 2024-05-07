import { TestBed } from '@angular/core/testing';

import { DesarrolladoresService } from './desarrolladores.service';

describe('DesarrolladoresService', () => {
  let service: DesarrolladoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesarrolladoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
