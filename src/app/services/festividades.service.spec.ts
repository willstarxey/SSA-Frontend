import { TestBed } from '@angular/core/testing';

import { FestividadesService } from './festividades.service';

describe('FestividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FestividadesService = TestBed.get(FestividadesService);
    expect(service).toBeTruthy();
  });
});
