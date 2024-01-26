import { TestBed } from '@angular/core/testing';

import { DatasetconferencistasService } from './datasetconferencistas.service';

describe('DatasetconferencistasService', () => {
  let service: DatasetconferencistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasetconferencistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
