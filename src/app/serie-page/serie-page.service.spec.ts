import { TestBed } from '@angular/core/testing';

import { SeriePageService } from './serie-page.service';

describe('SeriePageService', () => {
  let service: SeriePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
