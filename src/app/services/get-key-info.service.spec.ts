import { TestBed } from '@angular/core/testing';

import { GetKeyInfoService } from './get-key-info.service';

describe('GetKeyInfoService', () => {
  let service: GetKeyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKeyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
