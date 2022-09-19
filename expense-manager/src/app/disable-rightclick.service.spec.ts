import { TestBed } from '@angular/core/testing';

import { DisableRightclickService } from './disable-rightclick.service';

describe('DisableRightclickService', () => {
  let service: DisableRightclickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisableRightclickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
