import { TestBed, inject } from '@angular/core/testing';

import { PalavrasService } from './palavras.service';

describe('PalavrasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalavrasService]
    });
  });

  it('should be created', inject([PalavrasService], (service: PalavrasService) => {
    expect(service).toBeTruthy();
  }));
});
