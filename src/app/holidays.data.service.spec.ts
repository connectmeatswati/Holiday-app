import { TestBed, inject } from '@angular/core/testing';

import { Holidays.DataService } from './holidays.data.service';

describe('Holidays.DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Holidays.DataService]
    });
  });

  it('should be created', inject([Holidays.DataService], (service: Holidays.DataService) => {
    expect(service).toBeTruthy();
  }));
});
