import { TestBed } from '@angular/core/testing';

import { SeriesPageService } from './series-page.service';

describe('SeriesPageService', () => {
  let service: SeriesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
