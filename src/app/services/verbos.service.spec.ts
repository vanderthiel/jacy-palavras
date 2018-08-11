import { TestBed, inject } from '@angular/core/testing';

import { VerbosService } from './verbos.service';

describe('VerbosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerbosService]
    });
  });

  it('should be created', inject([VerbosService], (service: VerbosService) => {
    expect(service).toBeTruthy();
  }));
});
