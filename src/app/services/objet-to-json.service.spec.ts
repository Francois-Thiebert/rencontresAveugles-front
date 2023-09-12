import { TestBed } from '@angular/core/testing';

import { ObjetToJsonService } from './objet-to-json.service';

describe('ObjetToJsonService', () => {
  let service: ObjetToJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetToJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
