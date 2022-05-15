import { TestBed } from '@angular/core/testing';

import { UrlApiConstantesService } from './url-api-constantes.service';

describe('UrlApiConstantesService', () => {
  let service: UrlApiConstantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlApiConstantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
