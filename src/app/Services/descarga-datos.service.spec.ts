import { TestBed } from '@angular/core/testing';

import { DescargaDatosService } from './descarga-datos.service';

describe('DescargaDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescargaDatosService = TestBed.get(DescargaDatosService);
    expect(service).toBeTruthy();
  });
});
