import { TestBed } from '@angular/core/testing';

import { AbitusService } from './abitus.service';

describe('AbitusService', () => {
  let service: AbitusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbitusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
