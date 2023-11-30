import { TestBed } from '@angular/core/testing';

import { ActorPageService } from './actor-page.service';

describe('ActorPageService', () => {
  let service: ActorPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
