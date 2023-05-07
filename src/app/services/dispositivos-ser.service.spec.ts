import { TestBed } from '@angular/core/testing';

import { DispositivosSerService } from './dispositivos-ser.service';

describe('DispositivosSerService', () => {
  let service: DispositivosSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispositivosSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
