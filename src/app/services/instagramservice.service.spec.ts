import { TestBed } from '@angular/core/testing';

import { InstagramserviceService } from './instagramservice.service';

describe('InstagramserviceService', () => {
  let service: InstagramserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
