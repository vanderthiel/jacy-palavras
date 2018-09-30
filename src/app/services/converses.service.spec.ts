import { TestBed, inject } from '@angular/core/testing';

import { ConversesService } from './converses.service';

describe('ConversesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversesService]
    });
  });

  it('should be created', inject([ConversesService], (service: ConversesService) => {
    expect(service).toBeTruthy();
  }));
});
